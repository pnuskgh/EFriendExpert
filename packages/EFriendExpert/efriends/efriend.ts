/**
 * 한국투자증권 EFriendExpert API
 * 
 * @file packages/EFriendExpert/efriends/efriend.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import moment, { Moment } from 'moment';            //--- format : YYYYMMDDHHmmss.SSS ZZ - 20191220172919.083 +0900

import { BaseError, ERROR_CODE } from '../common/error/index.js';
import { LIMIT, LIMIT_USER, LIMIT_ACCOUNT, LIMIT_TR_KEY } from './efriend.type.js';
import { EFriend_LIMIT } from './efriend.limit.constant.js';
// import EFriend_JSON_TRID, { METADATA } from './efriend.constant.js';
import { EFriendRest } from './efriendRest.js';
import { Secret, Token, EFriendConfig, TR_TYPE } from './efriend.type.js';
import { 
    TOKENP_REQUEST_HEADER, TOKENP_REQUEST_BODY, 
    REVOKEP_REQUEST_HEADER, REVOKEP_REQUEST_BODY,
    APPROVAL_REQUEST_HEADER, APPROVAL_REQUEST_BODY } from './efriend_api.type.js';
import { STANDARD_RESPONSE } from './efriend.type.js';
class Limit {
    private limit: LIMIT;

    constructor() {
        this.limit = this.initialize([]);
    }

    public getLimit(): LIMIT {
        return this.limit;
    }

    public initialize(secrets: Array<Secret>): LIMIT {
        const today = moment().format('YYYY-MM-DD');
        const limit: LIMIT = { user: {}, account: {} };
        for (const secret of secrets) {
            if (today <= secret.periodTo) {
                const limit_user: LIMIT_USER = {
                    accounts_actual: EFriend_LIMIT.user.accounts_actual,
                    accounts_simulated: EFriend_LIMIT.user.accounts_simulated,
                    ws_api: {
                        session: EFriend_LIMIT.ws_api.session,
                    }
                };
                if (typeof(limit.user[secret.userid]) == 'undefined') {
                    limit.user[secret.userid] = limit_user;
                } else {
                    if (secret.isActual) {
                        limit.user[secret.userid].accounts_actual = limit.user[secret.userid].accounts_actual - 1;
                        if (limit.user[secret.userid].accounts_actual < 0) {
                            throw new BaseError({ code: ERROR_CODE.NOTALLOWED, data: `${secret.userid} accounts_actual limit is over.` });
                        }
                    } else {
                        limit.user[secret.userid].accounts_simulated = limit.user[secret.userid].accounts_simulated - 1;
                        if (limit.user[secret.userid].accounts_simulated < 0) {
                            throw new BaseError({ code: ERROR_CODE.NOTALLOWED, data: `${secret.userid} accounts_simulated limit is over.` });
                        }
                    }
                }

                const limit_account: LIMIT_ACCOUNT = {
                    rest_api: {
                        datetime: moment().format('YYYY-MM-DD HH:mm:ss'),
                        api_per_second_actual: EFriend_LIMIT.rest_api.api_per_second_actual,
                        api_per_second_simulated: EFriend_LIMIT.rest_api.api_per_second_simulated,
                        requests: []
                    },
                    ws_api: {
                        notifications: [],
                        registrations: []
                    }
                };
                limit.account[secret.account] = limit_account;
            }
        }
        this.limit = limit;
        return limit;
    }

    public async increaseRestApi(secret: Secret, trid: string): Promise<boolean> {
        try {
            let result: boolean = true;
            const limit = this.limit.account[secret.account];

            const count = (secret.isActual) ? EFriend_LIMIT.rest_api.api_per_second_actual:EFriend_LIMIT.rest_api.api_per_second_simulated;
            limit.rest_api.requests.push(moment().format('YYYY-MM-DD HH:mm:ss.SSS'));
            limit.rest_api.requests = limit.rest_api.requests.filter(req => moment().subtract(1, 'seconds').format('YYYY-MM-DD HH:mm:ss.SSS') < req);
            console.log(`REST API  --- ${secret.userid}, ${secret.account} :: trid - ${trid}, isActual - ${secret.isActual}, count - ${count}, limit - ${limit.rest_api.requests.length}`);
            while (count < limit.rest_api.requests.length) {
                await this.sleep(100);
                console.log(`REST sleep --- ${secret.userid}, ${secret.account} :: trid - ${trid}, isActual - ${secret.isActual}, count - ${count}, limit - ${limit.rest_api.requests.length}`);
                limit.rest_api.requests = limit.rest_api.requests.filter(req => moment().subtract(1, 'seconds').format('YYYY-MM-DD HH:mm:ss.SSS') < req);
            }
            return result;

            // // console.log(`--- increaseRestApi : trid - ${trid}, isActual - ${secret.isActual}`, limit.rest_api);
            // const now = moment().format('YYYY-MM-DD HH:mm:ss');
            // if (limit.rest_api.datetime != now) {
            //     limit.rest_api.datetime = now;
            //     limit.rest_api.api_per_second_actual = EFriend_LIMIT.rest_api.api_per_second_actual;
            //     limit.rest_api.api_per_second_simulated = EFriend_LIMIT.rest_api.api_per_second_simulated;
            // }

            // if (secret.isActual) {
            //     limit.rest_api.api_per_second_actual = limit.rest_api.api_per_second_actual - 1;
            //     if (limit.rest_api.api_per_second_actual < 0) {
            //         // throw new BaseError({ code: ERROR_CODE.NOTALLOWED, data: `${secret.account} account limit is over.` });
            //         result = false;
            //     }
            // } else {
            //     limit.rest_api.api_per_second_simulated = limit.rest_api.api_per_second_simulated - 1;
            //     if (limit.rest_api.api_per_second_simulated < 0) {
            //         // throw new BaseError({ code: ERROR_CODE.NOTALLOWED, data: `${secret.account} account limit is over.` });
            //         result = false
            //     }
            // }
            // const countLimit = (secret.isActual) ? limit.rest_api.api_per_second_actual:limit.rest_api.api_per_second_simulated;

            // console.log(`request ${secret.userid}, ${secret.account} :: trid - ${trid}, isActual - ${secret.isActual}`, countLimit, limit.rest_api.datetime);
            // this.limit.account[secret.account] = limit;
            // return result;
        } catch(ex) {
            throw ex;
        }
    }

    /**
     * 주어진 시간만큼 대기 한다.
     * 
     * @param {number} miliseconds
     * @return {void}
     */
    public async sleep(miliseconds: number): Promise<void> {
        const promise = new Promise(function(resolve) {
            setTimeout(function() {
                resolve(0);
            }, miliseconds);
        });
        await promise;
    }

    public updateSession(userid: string, count: number = 1): boolean {
        let result: boolean = true;
        this.limit.user[userid].ws_api.session = this.limit.user[userid].ws_api.session - count;
        if (this.limit.user[userid].ws_api.session < 0) {
            result = false;
        }
        console.log(`limit user: ${userid}`, result, this.limit.user[userid]);
        return result;
    }

    public updateWsApi(account: string, trid: string, tr_type: TR_TYPE, tr_key: string): boolean {
        const item: LIMIT_TR_KEY = { tr_id: trid, tr_key: tr_key };
        if ([ 'H0STCNI0', 'H0STCNI9', 'H0IFCNI0', 'H0GSCNI0', 'HDFFF2C0' ].includes(trid)) {
            this.limit.account[account].ws_api.notifications = this.limit.account[account].ws_api.notifications.filter(api => (api.tr_id != item.tr_id) || (api.tr_key != item.tr_key));
            if (tr_type == TR_TYPE.registration) {
                this.limit.account[account].ws_api.notifications.push(item);
            }
        } else {
            this.limit.account[account].ws_api.registrations = this.limit.account[account].ws_api.registrations.filter(api => (api.tr_id != item.tr_id) || (api.tr_key != item.tr_key));
            if (tr_type == TR_TYPE.registration) {
                this.limit.account[account].ws_api.registrations.push(item);
            }
        }

        const result: boolean = ((this.limit.account[account].ws_api.notifications.length < EFriend_LIMIT.ws_api.notifications) ||
                                 (this.limit.account[account].ws_api.registrations.length) < EFriend_LIMIT.ws_api.registrations);
        console.log(`limit account: ${account}`, result, this.limit.account[account]);
        return result;
    }
}

export const limit = new Limit();

export class EFriend {
    private readonly logger: Console;
    private efriendRest: EFriendRest

    private secrets: Array<Secret> = [];
    private indexQuery: number = -1;
    private indexOrder: number = -1;

    constructor({ logger }: EFriendConfig) {
        this.logger = logger ?? console;

        this.efriendRest = new EFriendRest({ logger: this.logger });
        this.initialize();
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

    public get rest():EFriendRest {
        return this.efriendRest;
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


    public getSecrets(): Array<Secret> {
        return this.secrets;
    }
 
    public async setSecrets(secrets: Array<Secret>): Promise<Array<Secret>> {
        try {
            limit.initialize(secrets);
            this.secrets = await this.getActiveSecrets(secrets, true);
            return this.secrets;
        } catch(ex) {
            throw ex;
        }
    }

    public async getActiveSecrets(secrets: Array<Secret> = this.secrets, refresh: boolean = true): Promise<Array<Secret>> {
        try {
            const today = moment().format('YYYY-MM-DD');
            const results: Array<Secret> = [];
            for (let secret of secrets) {
                if (today <= secret.periodTo) {
                    if (refresh) {
                        try {
                            secret = await this.resetApprovalKey(secret, refresh);
                            secret.tokens = await this.getActiveTokens(secret, refresh);
                            results.push(secret);
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

    private async getActiveTokens(secret: Secret, refresh: boolean = true): Promise<Array<Token>> {
        try {
            const now = moment().format('YYYY-MM-DD HH:mm:ss');
            const results: Array<Token> = [];
            for (const token of secret.tokens ?? []) {
                if ((token.access_token_token_expired != null) && (now <= token.access_token_token_expired)) {
                    results.push(token);
                } else {
                    if (token.access_token != '') {
                        await this.fetchTokenRemove(secret, token);
                    }
                }
            }
            if ((refresh) && (results.length == 0)) {
                results.push(await this.fetchToken(secret));
            }
            return results;
        } catch(ex) {
            throw ex;
        }
    }

    private async fetchToken(secret: Secret): Promise<Token> {
        try {
            const requestHeader: TOKENP_REQUEST_HEADER = {};
            const requestBody: TOKENP_REQUEST_BODY = {
                grant_type : 'client_credentials',
                appkey: secret.appkey,
                appsecret: secret.appsecret
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

    private async fetchTokenRemove(secret: Secret, token: Token): Promise<boolean> {
        try {
            const requestHeader: REVOKEP_REQUEST_HEADER = {};
            const requestBody: REVOKEP_REQUEST_BODY = {
                appkey: secret.appkey,
                appsecret: secret.appsecret,
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

    private async resetApprovalKey(secret: Secret, refresh: boolean = true): Promise<Secret> {
        try {
            const now = moment().format('YYYY-MM-DD HH:mm:ss');
            if ((secret.approval_key_expired == null) || (secret.approval_key_expired < now)) {
                secret.approval_key = '';
                secret.approval_key_expired = '';
            }

            if ((refresh) && (secret.approval_key == '')) {
                const [ approval_key, approval_key_expired ] = await this.fetchApprovalKey(secret);
                secret.approval_key = approval_key;
                secret.approval_key_expired = approval_key_expired;
            }
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
                appkey: secret.appkey,
                secretkey: secret.appsecret
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

    //--- Deprecated : 사용하지 않음. getActiveSecrets() 사용
    public async getQuerySecret(isActual?: boolean): Promise<Secret | null> {
        try {
            this.secrets = await this.getActiveSecrets(this.secrets, true);
            const secrets = this.secrets.filter(secret => {
                if ((secret.isActive) && ((secret.isQuery) || (secret.isPublic))) {
                    return ((typeof(isActual) == 'undefined') || (isActual == secret.isActual));
                } else {
                    return false;
                }
            });

            //--- Policy: Round-Robin
            if (secrets.length == 0) {
                return null;
            } else {
                this.indexQuery = (this.indexQuery + 1) % secrets.length;
                return secrets[this.indexQuery];
            }
        } catch(ex) {
            throw ex;
        }
    }

    //--- Deprecated : 사용하지 않음. getActiveSecrets() 사용
    public async getOrderSecret(account: string, isActual: boolean = true): Promise<Secret | null> {
        try {
            this.secrets = await this.getActiveSecrets(this.secrets, true);
            const secrets = this.secrets.filter(secret => {
                if ((secret.isActive) && (secret.isOrder) && (secret.account == account)) {
                    return ((typeof(isActual) == 'undefined') || (isActual == secret.isActual));
                } else {
                    return false;
                }
            });
    
            //--- Policy: Round-Robin
            if (secrets.length == 0) {
                return null;
            } else {
                this.indexOrder = (this.indexOrder + 1) % secrets.length;
                this.logger.info(`getOrderSecret index: ${this.indexOrder}`);
                return secrets[this.indexOrder];
            }
        } catch(ex) {
            throw ex;
        }
    }
}

export default EFriend;
