/**
 * 한국투자증권 EFriendExpert API
 * 
 * @file packages/EFriendExpert/efriends/efriend.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import moment, { Moment } from 'moment';                    //--- format : YYYYMMDDHHmmss.SSS ZZ - 20191220172919.083 +0900

import { BaseError, ERROR_CODE } from '../common/error/index.js';
import { EFriendLimit } from './efriend.limit.js';
import { EFriend_LIMIT } from './efriend.limit.constant.js';
// import EFriend_JSON_TRID, { METADATA } from './efriend.constant.js';
import { EFriendRest } from './efriendRest.js';
import { Secret, Token, EFriendConfig } from './efriend.type.js';
import { 
    TOKENP_REQUEST_HEADER, TOKENP_REQUEST_BODY, 
    REVOKEP_REQUEST_HEADER, REVOKEP_REQUEST_BODY,
    APPROVAL_REQUEST_HEADER, APPROVAL_REQUEST_BODY } from './efriend_api.type.js';
import { STANDARD_RESPONSE } from './efriend.type.js';

export const limit = new EFriendLimit();

export class EFriend {
    private readonly logger: Console;
    private efriendRest: EFriendRest

    private secrets: Array<Secret> = [];
    // private indexQuery: number = -1;
    // private indexOrder: number = -1;
    // private limit = new EFriendLimit();

    constructor({ logger }: EFriendConfig) {
        this.logger = logger ?? console;

        this.efriendRest = new EFriendRest({ logger: this.logger });
        this.initialize();
    }

    public isOperatingTime(today: Moment = moment()): STANDARD_RESPONSE {
        const day: number = today.day();                    //--- 요일, 0. 일요일, 1. 월요일, ..., 6. 토요일
        if ((day < 1) || (5 < day)) {
            return { code: 1, message: '평일에만 작업 가능 합니다.' };
        }

        const hhmm: string = today.format('HH:mm');                 //--- 시간과 분
        if ((hhmm < '09:00') || ('15:30' < hhmm)) {
            return { code: 2, message: '오전 9시부터 오후 5시 30분까지만 작업 가능 합니다.' };
        }
        return { code: 0, message: '운영 시간'};
    }

    private initialize() {
        //--- To-Do: EFriendRest 함수를 EFriend에 구현
        //--- To-Do: EFriend에서 EFriendRest 함수를 호출할 때, 장애 발생시 재시도 또는 복구 작업 추가
        //--- To-Do: EFriend에서 EFriendRest 함수를 호출할 때, secret 생략
        // for (const [_key, value] of Object.entries(EFriend_JSON_TRID)) {
        //     const trid: string = value.info.trid;

        //     this[trid] = async function(secret, requestHeader, requestBody, responseHeader) {
        //         return await this.efriendRest.request(secret, trid, requestHeader, requestBody, responseHeader);
        //     };
        // }

        //--- To-Do: EFriendWs의 함수를 EFriend에 구현
        //--- To-Do: EFriend에서 EFriendWs의 함수를 호출할 때, 장애 발생시 재시도 또는 복구 작업 추가
        //--- To-Do: EFriend에서 EFriendWs의 함수를 호출할 때, secret 생략
    }

    public get rest(): EFriendRest {
        return this.efriendRest;
    }

    public getSecrets(): Array<Secret> {
        return this.secrets;
    }

    private tokenToSecret(secret: Secret): Secret {
        if ((typeof(secret.tokens) != 'undefined') && (0 < secret.tokens.length)) {
            secret.access_token = secret.tokens[0].access_token;
            secret.token_type = secret.tokens[0].token_type;
            secret.expires_in = secret.tokens[0].expires_in;
            secret.access_token_token_expired = secret.tokens[0].access_token_token_expired;
        }
        return secret;
    }
 
    private tokenToSecrets(secrets: Array<Secret>): Array<Secret> {
        for (let idx = 0; idx < secrets.length; idx++) {
            secrets[idx] = this.tokenToSecret(secrets[idx]);
        }
        return secrets;
    }

    public setLimit(secrets: Array<Secret>) {
        limit.initialize(secrets);
    }

    public async setSecrets(secrets: Array<Secret>, isSimpleSet: boolean = false): Promise<Array<Secret>> {
        try {
            if (isSimpleSet) {
                this.secrets = secrets;
            } else {
                this.setLimit(secrets);
                this.secrets = await this.getActiveSecrets(secrets, true, true);
            }
            return this.tokenToSecrets(this.secrets);
        } catch(ex) {
            throw ex;
        }
    }

    public async getActiveSecrets(secrets: Array<Secret> = this.secrets, refresh: boolean = true, isWaiting: boolean = false): Promise<Array<Secret>> {
        try {
            const today = moment().format('YYYY-MM-DD');
            const results: Array<Secret> = [];
            for (let secret of secrets) {
                if (today <= secret.periodTo) {
                    if (refresh) {
                        try {
                            secret.tokens = await this.getActiveTokens(secret, refresh, isWaiting);
                            results.push(this.tokenToSecret(secret));
                        } catch(ex) {
                            console.error(ex);
                        }
                    } else {
                        results.push(secret);
                    }
                }
            }
            return results;
        } catch(ex) {
            throw ex;
        }
    }

    private async getActiveTokens(secret: Secret, refresh: boolean = true, isWaiting: boolean = false): Promise<Array<Token>> {
        try {
            const now = moment().format('YYYY-MM-DD HH:mm:ss');
            const secretTokens = secret.tokens ?? []; 
            const tokens: Array<Token> = [];
            for (const token of secretTokens) {
                if ((token.access_token_token_expired != null) && (token.access_token_token_expired != '') && (now <= token.access_token_token_expired)) {
                    tokens.push(token);
                } else {
                    if (token.access_token != '') {
                        await this.fetchTokenRemove(secret, token);
                    }
                }
            }

            if ((0 < secretTokens.length) && (secretTokens[0].access_token != secret.access_token)) {
                const token: Token = {
                    id: -1,
                    access_token: secret.access_token ?? '',
                    token_type: secret.token_type ?? '',
                    expires_in: secret.expires_in ?? 0,
                    access_token_token_expired: secret.access_token_token_expired ?? '',
                    secretId: secret.id ?? -1
                };
                if ((token.access_token_token_expired != null) && (token.access_token_token_expired != '') && (now <= token.access_token_token_expired)) {
                    tokens.push(token);
                } else {
                    if (token.access_token != '') {
                        await this.fetchTokenRemove(secret, token);
                    }
                }
            }

            if ((refresh) && (tokens.length == 0)) {
                tokens.push(await this.fetchToken(secret, isWaiting));
            }
            return tokens;
        } catch(ex) {
            throw ex;
        }
    }

    public async fetchToken(secret: Secret, isWaiting: boolean = false): Promise<Token> {
        try {
            await limit.waitingTokenP(secret, isWaiting);

            const requestHeader: TOKENP_REQUEST_HEADER = {};
            const requestBody: TOKENP_REQUEST_BODY = {
                grant_type : 'client_credentials',
                appkey: secret.appkey || secret.appKey,
                appsecret: secret.appsecret || secret.appSecret
            };
            const response = await this.efriendRest.tokenP(secret, requestHeader, requestBody);
            if (response.code == 0) {
                if (typeof(response.body) != 'undefined') {
                    const token: Token = {
                        id: -1,
                        access_token: response.body?.access_token ?? '',
                        token_type: response.body?.token_type ?? '',
                        expires_in: response.body?.expires_in ?? 0,
                        access_token_token_expired: response.body?.access_token_token_expired ?? '',
                        secretId: secret.id ?? -1
                    };
                    return token;
                } else {
                    throw new BaseError({ code: ERROR_CODE.REQUIRED, data: `tokenP: ${response.message}.` });
                }
            } else {
                throw new BaseError({ code: ERROR_CODE.REQUIRED, data: `tokenP: ${response.message}` });
            }
        } catch(ex) {
            throw ex;
        }
    }

    public async fetchTokenRemove(secret: Secret, token: Token): Promise<boolean> {
        try {
            const requestHeader: REVOKEP_REQUEST_HEADER = {};
            const requestBody: REVOKEP_REQUEST_BODY = {
                appkey: secret.appkey || secret.appKey,
                appsecret: secret.appsecret || secret.appSecret,
                token: token.access_token
            };
            const response = await this.efriendRest.revokeP(secret, requestHeader, requestBody);  
            if (response.code == 0) {
                return true;
            } else {
                console.log('Error : fetchTokenRemove', response);
                // throw new BaseError({ code: ERROR_CODE.REQUIRED, data: `revokeP: ${response.message}` });
                return true;
            }
        } catch(ex) {
            console.error(ex);
            return false;
        }
    }

    //--- 접속키 유효기간: 24시간
    //--- 접속키는 세션 연결시 초기 1회만 사용
    public async resetApprovalKey(secret: Secret): Promise<Secret> {
        try {
            const [ approval_key, approval_key_expired ] = await this.fetchApprovalKey(secret);
            secret.approval_key = approval_key;
            secret.approval_key_expired = approval_key_expired;
            return secret;
        } catch(ex) {
            throw ex;
        }
    }

    public async fetchApprovalKey(secret: Secret): Promise<[ string, string ]> {
        try {
            const requestHeader: APPROVAL_REQUEST_HEADER = {
                "content-type": 'application/json; charset=utf-8',
            };
            const requestBody: APPROVAL_REQUEST_BODY = {
                grant_type : 'client_credentials',
                appkey: secret.appkey || secret.appKey,
                secretkey: secret.appsecret || secret.appSecret
            };
            const response = await this.efriendRest.Approval(secret, requestHeader, requestBody);
            if (response.code == 0) {
                secret.approval_key = response.body?.approval_key ?? undefined;
                if (typeof(secret.approval_key) != 'undefined') {
                    secret.approval_key_expired = moment().add(EFriend_LIMIT.ws_api.expiration_period, 'hours').format('YYYY-MM-DD HH:mm:ss');
                }
                return [ secret.approval_key ?? '', secret.approval_key_expired ?? '' ];
            } else {
                throw new BaseError({ code: ERROR_CODE.REQUIRED, data: `Approval: ${response.message}` });
            }
        } catch(ex) {
            throw ex;
        }
    } 

    // //--- Deprecated : 사용하지 않음. getActiveSecrets() 사용
    // public async getQuerySecret(isActual?: boolean): Promise<Secret | null> {
    //     try {
    //         this.secrets = await this.getActiveSecrets(this.secrets, true);
    //         const secrets = this.secrets.filter(secret => {
    //             if ((secret.isActive) && ((secret.isQuery) || (secret.isPublic))) {
    //                 return ((typeof(isActual) == 'undefined') || (isActual == secret.isActual));
    //             } else {
    //                 return false;
    //             }
    //         });

    //         //--- Policy: Round-Robin
    //         if (secrets.length == 0) {
    //             return null;
    //         } else {
    //             this.indexQuery = (this.indexQuery + 1) % secrets.length;
    //             return secrets[this.indexQuery];
    //         }
    //     } catch(ex) {
    //         throw ex;
    //     }
    // }

    // //--- Deprecated : 사용하지 않음. getActiveSecrets() 사용
    // public async getOrderSecret(account: string, isActual: boolean = true): Promise<Secret | null> {
    //     try {
    //         this.secrets = await this.getActiveSecrets(this.secrets, true);
    //         const secrets = this.secrets.filter(secret => {
    //             if ((secret.isActive) && (secret.isOrder) && (secret.account == account)) {
    //                 return ((typeof(isActual) == 'undefined') || (isActual == secret.isActual));
    //             } else {
    //                 return false;
    //             }
    //         });
    
    //         //--- Policy: Round-Robin
    //         if (secrets.length == 0) {
    //             return null;
    //         } else {
    //             this.indexOrder = (this.indexOrder + 1) % secrets.length;
    //             this.logger.info(`getOrderSecret index: ${this.indexOrder}`);
    //             return secrets[this.indexOrder];
    //         }
    //     } catch(ex) {
    //         throw ex;
    //     }
    // }
}

export default EFriend;
