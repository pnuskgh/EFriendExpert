/**
 * 한국투자증권 EFriendExpert API
 * 
 * @file packages/EFriendExpert/efriends/efriend.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import moment from 'moment';

import { BaseError, ERROR_CODE } from '../common/error';
import { LIMIT, LIMIT_USER, LIMIT_ACCOUNT, LIMIT_TR_KEY } from './efriend.type';
import { EFriend_LIMIT } from './efriend.limit.constant';
import { EFriendRest } from '../efriends/efriendRest';
import { Secret, Token, EFriendConfig, TR_TYPE } from './efriend.type';
import { 
    TOKENP_REQUEST_HEADER, TOKENP_REQUEST_BODY, 
    REVOKEP_REQUEST_HEADER, REVOKEP_REQUEST_BODY,
    APPROVAL_REQUEST_HEADER, APPROVAL_REQUEST_BODY } from '../efriends/efriend_api.type';

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
                        api_per_second_simulated: EFriend_LIMIT.rest_api.api_per_second_simulated
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

    //--- To-Do: 1초당 횟수가 지켜지도록 수정할 것
    public async increaseRestApi(secret: Secret, trid: string): Promise<boolean> {
        try {
            let result: boolean = true;
            const limit = this.limit.account[secret.account];
            // console.log(`--- increaseRestApi : trid - ${trid}, isActual - ${secret.isActual}`, limit.rest_api);
            const now = moment().format('YYYY-MM-DD HH:mm:ss');
            if (limit.rest_api.datetime != now) {
                limit.rest_api.datetime = now;
                limit.rest_api.api_per_second_actual = EFriend_LIMIT.rest_api.api_per_second_actual;
                limit.rest_api.api_per_second_simulated = EFriend_LIMIT.rest_api.api_per_second_simulated;
            }

            if (secret.isActual) {
                limit.rest_api.api_per_second_actual = limit.rest_api.api_per_second_actual - 1;
                if (limit.rest_api.api_per_second_actual < 0) {
                    // throw new BaseError({ code: ERROR_CODE.NOTALLOWED, data: `${secret.account} account limit is over.` });
                    result = false;
                }
            } else {
                limit.rest_api.api_per_second_simulated = limit.rest_api.api_per_second_simulated - 1;
                if (limit.rest_api.api_per_second_simulated < 0) {
                    // throw new BaseError({ code: ERROR_CODE.NOTALLOWED, data: `${secret.account} account limit is over.` });
                    result = false
                }
            }

            // if (result == false) {
            //     //--- delay 처리
            // }

            // console.log('sleep bf', moment().format('YYYY-MM-DD HH:mm:ss.SSS'));
            await this.sleep(300);
            // console.log('sleep af', moment().format('YYYY-MM-DD HH:mm:ss.SSS'));
            // console.log(`limit rest api for account: ${secret.account}`, result, limit);
            this.limit.account[secret.account] = limit;

            // const count: number = (secret.isActual) ?this.limit.account[secret.account].rest_api.api_per_second_actual:this.limit.account[secret.account].rest_api.api_per_second_simulated;
            // console.log(`request ${secret.userid}, ${secret.account} :: trid - ${trid}, isActual - ${secret.isActual}, count - ${count - 1}`);
            console.log(`request ${secret.userid}, ${secret.account} :: trid - ${trid}, isActual - ${secret.isActual}`, this.limit.account[secret.account].rest_api);
    
            return result;
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

    private initializeDatetime: string = '';
    private secrets: Array<Secret> = [];
    private indexQuery: number = 0;
    // private indexOrder: number = 0;

    constructor({ logger }: EFriendConfig) {
        this.logger = logger ?? console;

        this.efriendRest = new EFriendRest({ logger });
    }

    async setSecrets(secrets: Array<Secret>): Promise<void> {
        try {
            limit.initialize(secrets);
            this.secrets = await this.getActiveSecrets(secrets, true);
        } catch(ex) {
            throw ex;
        }
    }

    public async getActiveSecrets(secrets: Array<Secret>, refresh: boolean = true): Promise<Array<Secret>> {
        try {
            const today = moment().format('YYYY-MM-DD');
            const results: Array<Secret> = [];
            for (let secret of secrets) {
                if (today <= secret.periodTo) {
                    if (refresh) {
                        secret = await this.resetApprovalKey(secret, refresh);
                        secret.tokens = await this.getActiveTokens(secret, refresh);
                    }
                    results.push(secret);
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
            for (const token of secret.tokens) {
                if ((typeof(token.access_token_token_expired) != 'undefined') && (now <= token.access_token_token_expired)) {
                    results.push(token);
                } else {
                    await this.fetchTokenRemove(secret, token);
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
                    
                        secretId: secret.id
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
                throw new BaseError({ code: ERROR_CODE.REQUIRED, data: `revokeP: ${response.message}` });
            }
        } catch(ex) {
            console.error(ex);
            return false;
        }
    }

    private async resetApprovalKey(secret: Secret, refresh: boolean = true): Promise<Secret> {
        try {
            const now = moment().format('YYYY-MM-DD HH:mm:ss');
            if ((typeof(secret.approval_key_expired) == 'undefined') || (secret.approval_key_expired < now)) {
                secret.approval_key = '';
                secret.approval_key_expired = '';
            }

            if (refresh) {
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
                if (secret.approval_key != undefined) {
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





    public async resetApprovalKeys(): Promise<void> {
        try {
            for (let idx = 0; idx < this.secrets.length; idx++) {
                this.secrets[idx] = await this.resetApprovalKey(this.secrets[idx], true);
            }
            this.initializeDatetime = moment().format('YYYY-MM-DD');
        } catch(ex) {
            throw ex;
        }
    }

    //--- ToDo: secret 선정 조건을 고도화할 것
    public async getQuerySecret(): Promise<Secret | null> {
        try {
            if (this.secrets.length == 0) {
                return null;
            }

            const today = moment().format('YYYY-MM-DD');
            if (this.initializeDatetime != today) {
                await this.resetApprovalKeys();
            }

            this.secrets[this.indexQuery].tokens = await this.getActiveTokens(this.secrets[this.indexQuery]);
            const secret: Secret = this.secrets[this.indexQuery];
            this.indexQuery = (this.indexQuery + 1) % this.secrets.length;
            return secret;
        } catch(ex) {
            throw ex;
        }
    }

    //--- ToDo: secret 선정 조건을 고도화할 것
    //--- ToDo: userid와 account를 사용하여 Secret를 찾을 것
    public async getOrderSecret(userId: number): Promise<Secret | null> {
        if (this.secrets.length == 0) {
            return null;
        }

        this.logger.info('getOrderSecret');
        try {
            const today = moment().format('YYYY-MM-DD');
            if (this.initializeDatetime != today) {
                await this.resetApprovalKeys();
            }

            for (let idx = 0; idx < this.secrets.length; idx++) {
                const secret: Secret = this.secrets[idx];

                if ((secret.userParentId == userId) && (secret.isOrder)) {
                    this.secrets[idx].tokens = await this.getActiveTokens(secret);
                    return this.secrets[idx];
                }
            }
            return null;
        } catch(ex) {
            throw ex;
        }
    }
}

export default EFriend;
