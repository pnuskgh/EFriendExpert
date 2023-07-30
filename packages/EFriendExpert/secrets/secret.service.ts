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

import { Secret } from '../efriends';

export class SecretService {
    public async getSecrets(exchangeId: number = 1): Promise<Array<Secret>> {
        const prisma = new PrismaClient();

        try {
            const today = moment().format('YYYY-MM-DD');
            const secrets = await prisma.secret.findMany({
                where: { 
                    exchangeParentId: exchangeId,
                    periodTo: { gte: today },
                    isActive: true
                },
                include: {
                    tokens: true
                }
            });
            return secrets as Array<Secret>;
        } catch(ex) {
            throw ex;
        } finally {
            await prisma.$disconnect();
        }
    }

    public async setSecrets(secrets: Array<Secret>): Promise<void> {
        const prisma = new PrismaClient();

        try {
            for (const secret of secrets) {
                await prisma.secret.update({
                    where: { id: secret.id },
                    data: { 
                        approval_key: secret.approval_key,
                        approval_key_expired: secret.approval_key_expired,
                    }
                });
                for (const token of (secret.tokens ?? [])) {
                    if (token.id == -1) {
                        await prisma.token.create({
                            data: {
                                access_token: token.access_token,
                                token_type: token.token_type,
                                expires_in: token.expires_in,
                                access_token_token_expired: token.access_token_token_expired,
                            
                                secretId: secret.id || -1
                            }
                        });
                    }
                }

                const tokens = await prisma.token.findMany({
                    where: { 
                        secretId: secret.id
                    }
                });
                const now = moment().format('YYYY-MM-DD HH:mm:ss');
                for (const token of (tokens)) {
                    if ((token.access_token_token_expired != null) && (now <= token.access_token_token_expired)) {
                    } else {
                        await prisma.token.delete({
                            where: { id: token.id }
                        });
                    }
                }
            }
        } catch(ex) {
            throw ex;
        } finally {
            await prisma.$disconnect();
        }
    }
}

export default SecretService;
