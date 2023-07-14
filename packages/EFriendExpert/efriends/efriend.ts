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
import { EFriendRest } from '../efriends/efriendRest';
import { 
    Secret, Token,
    TOKENP_REQUEST_HEADER, TOKENP_REQUEST_BODY, 
    REVOKEP_REQUEST_HEADER, REVOKEP_REQUEST_BODY,
    APPROVAL_REQUEST_HEADER, APPROVAL_REQUEST_BODY } from '../efriends/efriend.type';

export class EFriend {
    private efriendRest: EFriendRest

    private initializeDatetime: string = '';
    private secrets: Array<Secret> = [];
    private indexQuery: number = 0;
    // private indexOrder: number = 0;

    constructor(secrets: Array<Secret>) {
        this.secrets = secrets;

        this.efriendRest = new EFriendRest();
    }

    public async resetApprovalKeys(): Promise<void> {
        try {
            for (let idx = 0; idx < this.secrets.length; idx++) {
                const secret: Secret = this.secrets[idx];

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
                    this.secrets[idx].approval_key = response.body?.approval_key || undefined;
                    if (this.secrets[idx].approval_key != undefined) {
                        this.secrets[idx].approval_key_expired = moment().add(1, 'days').format('YYYY-MM-DD HH:mm:ss');
                    }
                } else {
                    throw new BaseError({ code: ERROR_CODE.REQUIRED, data: `Approval: ${response.message}` });
                }
            }
            this.initializeDatetime = moment().format('YYYY-MM-DD');
        } catch(ex) {
            throw ex;
        }
    }

    private async getTokens(secret: Secret): Promise<Array<Token>> {
        try {
            const tokens: Array<Token> = [];

            const now = moment().format('YYYY-MM-DD HH:mm:ss');
            for (const token of secret.tokens) {
                if (token.access_token_token_expired <= now) {
                    const requestHeader: REVOKEP_REQUEST_HEADER = {};
                    const requestBody: REVOKEP_REQUEST_BODY = {
                        appkey: secret.appkey,
                        appsecret: secret.appsecret,
                        token: token.access_token
                    };
                    await this.efriendRest.revokeP(secret, requestHeader, requestBody);  
                } else {
                    tokens.push(token);
                }
            }

            if (tokens.length == 0) {
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
                            access_token: response.body?.access_token || '',
                            token_type: response.body?.token_type || '',
                            expires_in: response.body?.expires_in || 0,
                            access_token_token_expired: response.body?.access_token_token_expired || '',
                        
                            secretId: secret.id
                        };
                        tokens.push(token);
                    }
                } else {
                    throw new BaseError({ code: ERROR_CODE.REQUIRED, data: `tokenP: ${response.message}` });
                }
            }
            return tokens;
        } catch(ex) {
            throw ex;
        }
    }

    //--- ToDo: secret 선정 조건을 고도화할 것
    public async getQuerySecret(): Promise<Secret | null> {
        try {
            const today = moment().format('YYYY-MM-DD');
            if (this.initializeDatetime != today) {
                await this.resetApprovalKeys();
            }

            this.secrets[this.indexQuery].tokens = await this.getTokens(this.secrets[this.indexQuery]);
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
        try {
            const today = moment().format('YYYY-MM-DD');
            if (this.initializeDatetime != today) {
                await this.resetApprovalKeys();
            }

            for (let idx = 0; idx < this.secrets.length; idx++) {
                const secret: Secret = this.secrets[idx];

                if ((secret.userParentId == userId) && (secret.isOrder)) {
                    this.secrets[idx].tokens = await this.getTokens(secret);
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
