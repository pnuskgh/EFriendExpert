/**
 * Exchanges
 * 
 * @file packages/EFriendExpert/exchange/exchange.service.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { logger } from '../common/logger';

import { PrismaClient } from '@prisma/client';

export class ExchangeService {
    public async initialize(): Promise<void> {
        const prisma = new PrismaClient();
        try {
            const count = await prisma.exchange.count({});
            if (count == 0) {
                const exchange = await prisma.exchange.create({
                    data: {
                        name: '한국투자증권'
                    }
                });
                logger.info(JSON.stringify(exchange));
            }
        } catch(ex) {
            console.error(ex);
        } finally {
            await prisma.$disconnect();
        }
    }
}

export default ExchangeService;
