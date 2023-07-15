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
            console.log(today);
            const secrets = await prisma.secret.findMany({
                where: { 
                    exchangeParentId: exchangeId,
                    periodTo: { gte: today }
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
}

export default SecretService;
