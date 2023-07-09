/**
 * Sites
 * 
 * @file packages/EFriendExpert/sites/site.service.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { PrismaClient } from '@prisma/client';

import { logger } from '../common/logger';
import { BaseError, ERROR_CODE } from '../common/error';
import { UserService  } from '../users';
import { ExchangeService } from '../exchanges';
import { Secret } from '../secrets';
import { Token } from '../tokens';
import { EFriendRest, TOKENP_REQUEST_HEADER, TOKENP_REQUEST_BODY, APPROVAL_REQUEST_HEADER, APPROVAL_REQUEST_BODY } from '../efriends/efriendRest';

export class SiteService {
    public async initialize(): Promise<void> {
        const prisma = new PrismaClient();

        try {
            const count = await prisma.site.count({});
            if (count == 0) {
                const site = await prisma.site.create({
                    data: {
                        name: 'EFriend Site'
                    }
                });
                logger.info(JSON.stringify(site));

                if (site.id == 1) {
                    const userService = new UserService();
                    await userService.initialize();

                    const exchangeService = new ExchangeService();
                    await exchangeService.initialize()
                }
            }

            const efriendRest = new EFriendRest();
            const secrets = await prisma.secret.findMany({
                include: {
                    tokens: true
                }
            });
            for (const item of secrets) {
                const secret: Secret = {
                    id: item.id,
                    isActual: item.isActual,
                    isOrder: item.isOrder,
                    userid: item.userid,
                    acount: item.acount,
                    acountSub: item.acountSub,
                    periodFrom: item.periodFrom,
                    periodTo: item.periodTo,
                    feeType: item.feeType,
                
                    grant_type: item.grant_type,
                    approval_key: item.approval_key || undefined,
                    appkey: item.appkey,
                    appsecret: item.appsecret,
                    personalseckey: item.personalseckey || undefined,
                    custtype: item.custtype,
                    seq_no: item.seq_no || undefined,
                    mac_address: item.mac_address || undefined,
                    phone_number: item.phone_number || undefined,
                    ip_addr: item.ip_addr || undefined,
                    tokens: [],
                
                    userParentId: item.userParentId,
                    exchangeParentId: item.exchangeParentId
                };
                for (const itemToken of item.tokens) {
                    const token: Token = {
                        id: itemToken.id,
                        access_token: itemToken.access_token,
                        token_type: itemToken.token_type,
                        expires_in: itemToken.expires_in,
                        access_token_token_expired: itemToken.access_token_token_expired,
                    
                        secretId: itemToken.secretId
                    };
                    secret.tokens.push(token);
                }

                if (secret.approval_key == null) {
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
                    } else {
                        throw new BaseError({ code: ERROR_CODE.REQUIRED, data: `Approval: ${response.message}` });
                    }
                }

                //--- To-Do: 오래된 tokens은 삭제하고 새로 token을 발급 한다.
                if (secret.tokens.length == 0) {
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

                        const token: Token = {
                            id: tokenInsert.id,
                            access_token: response.body?.access_token || '',
                            token_type: response.body?.token_type || '',
                            expires_in: response.body?.expires_in || 0,
                            access_token_token_expired: response.body?.access_token_token_expired || '',
                        
                            secretId: secret.id
                        };
                        secret.tokens.push(token);
                    } else {
                        throw new BaseError({ code: ERROR_CODE.REQUIRED, data: `tokenP: ${response.message}` });
                    }
                }
            }
        } catch(ex) {
            console.error(ex);
        } finally {
            await prisma.$disconnect();
        }
    }
}

export default SiteService;
