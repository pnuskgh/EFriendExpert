'use strict'
/**
 * Secrets
 * 
 * @file packages/EFriendExpert/secrets/secret.service.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import moment from 'moment';
import { PrismaClient } from '@prisma/client';

// import { logger } from '../common/logger';
import { BaseError, ERROR_CODE } from '../common/error';
// import { UserService  } from '../users';
// import { ExchangeService } from '../exchanges';
import { Secret } from './secret.type';
import { Token } from '../tokens';
import { EFriendRest } from '../efriends/efriendRest';
import { 
    TOKENP_REQUEST_HEADER, TOKENP_REQUEST_BODY, 
    REVOKEP_REQUEST_HEADER, REVOKEP_REQUEST_BODY,
    APPROVAL_REQUEST_HEADER, APPROVAL_REQUEST_BODY } from '../efriends/efriend.type';

export class SecretService {
    private readonly userId: number;
    private readonly exchangeId: number;

    private initializeDatetime: string;
    private secrets: Array<Secret>;
    private indexQuery: number = 0;
    // private indexOrder: number = 0;

    constructor(userId: number, exchangeId: number = 1) {
        this.userId = userId;
        this.exchangeId = exchangeId;
        this.secrets = [];
        this.initializeDatetime = '';
    }

    public async initialize(): Promise<void> {
        const prisma = new PrismaClient();
        const efriendRest = new EFriendRest();

        try {
            const today = moment().format('YYYY-MM-DD');
            const secrets = await prisma.secret.findMany({
                where: { 
                    exchangeParentId: this.exchangeId,
                    periodTo: { lte: today }
                },
                include: {
                    tokens: true
                }
            });

            for (let idx = 0; idx < secrets.length; idx++) {
                const secret: Secret = secrets[idx] as any;

                const requestHeader: APPROVAL_REQUEST_HEADER = {
                    "content-type": 'application/json; charset=utf-8',
                };
                const requestBody: APPROVAL_REQUEST_BODY = {
                    grant_type : 'client_credentials',
                    appkey: secret.appkey,
                    secretkey: secret.appsecret
                };
                const response = await efriendRest.Approval(secret, requestHeader, requestBody);
                if (response.code == 0) {
                    await prisma.secret.update({
                        where: { id: secret.id },
                        data: { approval_key: response.body?.approval_key }
                    });
                    secrets[idx].approval_key = response.body?.approval_key || null;
                } else {
                    throw new BaseError({ code: ERROR_CODE.REQUIRED, data: `Approval: ${response.message}` });
                }
            }
            this.secrets = secrets as any;
            this.initializeDatetime = moment().format('YYYY-MM-DD');
        } catch(ex) {
            throw ex;
        } finally {
            await prisma.$disconnect();
        }
    }

    private async getTokens(secret: Secret): Promise<Array<Token>> {
        const prisma = new PrismaClient();
        const efriendRest = new EFriendRest();
        const tokens: Array<Token> = [];

        try {
            const now = moment().format('YYYY-MM-DD HH:mm:ss');
            for (const token of secret.tokens) {
                if (token.access_token_token_expired <= now) {
                    const requestHeader: REVOKEP_REQUEST_HEADER = {};
                    const requestBody: REVOKEP_REQUEST_BODY = {
                        appkey: secret.appkey,
                        appsecret: secret.appsecret,
                        token: token.access_token
                    };
                    await efriendRest.revokeP(secret, requestHeader, requestBody);  
                    
                    await prisma.token.delete({
                        where: { id: token.id }
                    });
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
                const response = await efriendRest.tokenP(secret, requestHeader, requestBody);
                if (response.code == 0) {
                    const tokenInsert = await prisma.token.create({
                        data: {
                            access_token: response.body?.access_token || '',
                            token_type: response.body?.token_type || '',
                            expires_in: response.body?.expires_in || 0,
                            access_token_token_expired: response.body?.access_token_token_expired || '',
                        
                            secretId: secret.id
                        }
                    });
                    if (typeof tokenInsert == 'undefined') {
                        throw new BaseError({ code: ERROR_CODE.INSERTERROR, data: 'token' });
                    }

                    if (typeof(response.body) != 'undefined') {
                        const token: Token = response.body as any;
                        tokens.push(token);
                    }
                } else {
                    throw new BaseError({ code: ERROR_CODE.REQUIRED, data: `tokenP: ${response.message}` });
                }
            }
            return tokens;
        } catch(ex) {
            throw ex;
        } finally {
            await prisma.$disconnect();
        }
    }

    //--- ToDo: secret 선정 조건을 고도화할 것
    public async getQuerySecret(): Promise<Secret | null> {
        try {
            const today = moment().format('YYYY-MM-DD');
            if (this.initializeDatetime != today) {
                await this.initialize();
            }

            if (this.indexQuery < this.secrets.length) {
                this.secrets[this.indexQuery].tokens = await this.getTokens(this.secrets[this.indexQuery]);
                const secret: Secret = this.secrets[this.indexQuery];
                this.indexQuery = (this.indexQuery + 1) % this.secrets.length;
                return secret;
            }
            return null;
        } catch(ex) {
            throw ex;
        }
    }

    //--- ToDo: secret 선정 조건을 고도화할 것
    public async getOrderSecret(): Promise<Secret | null> {
        try {
            const today = moment().format('YYYY-MM-DD');
            if (this.initializeDatetime != today) {
                await this.initialize();
            }

            for (let idx = 0; idx < this.secrets.length; idx++) {
                const secret: Secret = this.secrets[idx];

                if ((secret.userParentId == this.userId) && (secret.isOrder)) {
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

export default SecretService;
