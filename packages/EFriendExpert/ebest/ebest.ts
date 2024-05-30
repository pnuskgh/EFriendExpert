/**
 * LS증권 EBest API
 * 
 * @author gye hyun james kim <pnuskgh@gmail.com>
 * @copyright 2017~2024, EFriendExport Community Team
 * @license GNU General Public License v3.0
 */

import moment from 'moment';                                //--- format : YYYYMMDDHHmmss.SSS ZZ - 20191220172919.083 +0900

import { EFriendBase } from '../efriends/efriendBase.js';
import { EFriendConfig } from '../efriends/efriend.type.js';

import { Secret, Token } from '../type.js';
import { BaseError, ERROR_CODE } from '../common/error/index.js';

import { EBestRest } from './ebestRest.js';
import { TOKEN_REQUEST_HEADER, TOKEN_REQUEST_BODY } from './ebest_api.type.js';
import { REVOKE_REQUEST_HEADER, REVOKE_REQUEST_BODY } from './ebest_api.type.js';

export class EBest extends EFriendBase {
    private restApi: EBestRest

    constructor({ logger }: EFriendConfig) {
        super({ logger });

        this.restApi = new EBestRest({ logger: this.logger });
        this.initialize();
    }

    public get rest(): EBestRest {
        return this.restApi;
    }

    private initialize() {
    }

    private tokenToSecret(secret: Secret): Secret {
        if ((typeof(secret.tokens) != 'undefined') && (0 < secret.tokens.length)) {
            secret.access_token = secret.tokens[0].access_token;
            secret.scope = secret.tokens[0].scope;
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

    public setLimit(_secrets: Array<Secret>) {
        this.logger.error('To-Do: pppqqq, Reserved');
        // limit.initialize(secrets);
    }

    public async setSecrets(secrets: Array<Secret>, isSimpleSet: boolean = false): Promise<Array<Secret>> {
        try {
            if (isSimpleSet) {
                this.secrets = secrets;
            } else {
                this.secrets = await this.getActiveSecrets(secrets, true, true);
            }
            this.secrets = this.tokenToSecrets(this.secrets)
            return this.secrets;
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

            if ((0 == secretTokens.length) || (secretTokens[0].access_token != secret.access_token)) {
                const token: Token = {
                    id: -1,
                    access_token: secret.access_token ?? '',
                    scope: secret.scope ?? 'oob',
                    token_type: secret.token_type ?? 'Bearer',
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

    public async fetchToken(secret: Secret, _isWaiting: boolean = false): Promise<Token> {
        try {
            const requestHeader: TOKEN_REQUEST_HEADER = {
                'content-type': 'application/x-www-form-urlencoded'
            };
            const requestBody: TOKEN_REQUEST_BODY = {
                grant_type:  'client_credentials',
                appkey:  secret.appKey,
                appsecretkey:  secret.appSecret,
                scope:  'oob'    
            };
            const response = await this.rest.request(secret, 'token', requestHeader, requestBody);
            if (response.code == 0) {
                const token: Token = {
                    id: -1,
                    access_token: response.body.access_token,
                    scope: response.body.scope,
                    token_type: response.body.token_type,
                    expires_in: response.body.expires_in,
                    access_token_token_expired: moment().add(response.body.expires_in, 'seconds').format('YYYY-MM-DD HH:mm:ss'),
                    secretId: secret.id || -1
                };
                return token;
            } else {
                throw new BaseError({ code: ERROR_CODE.REQUIRED, data: `token: ${response.message}` });
            }
        } catch(ex) {
            throw ex;
        }
    }

    public async fetchTokenRemove(secret: Secret, token: Token): Promise<boolean> {
        try {
            const requestHeader: REVOKE_REQUEST_HEADER = {
                'content-type': 'application/x-www-form-urlencoded'
            };
            const requestBody: REVOKE_REQUEST_BODY = {
                appkey:  secret.appKey,
                appsecretkey:  secret.appSecret,
                token_type_hint: 'access_token',
                token: token.access_token
            };
            const response = await this.rest.request(secret, 'revoke', requestHeader, requestBody);
            if (response.code == 0) {
                return ((response.body.code == 200) || (response.body.code == 403));
            } else {
                return false;
            }
        } catch(ex) {
            console.error(ex);
            return false;
        }
    }

    //--- LS증권에서는 approval를 지원하지 않습니다.
    public async fetchApprovalKey(_secret: Secret): Promise<[ string, string ]> {
        try {
            return [ '', '' ];
        } catch(ex) {
            throw ex;
        }
    } 
}

export default EBest;
