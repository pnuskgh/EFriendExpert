/**
 * History
 * 
 * @file packages/EFriendExpert/histories/history.service.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import moment from 'moment';
import { PrismaClient } from '@prisma/client';

import { logger } from '../common/logger';

export class HistoryService {
    public async create(userId: number, secretId: number, tr_id: string, request: string, count: number = 1): Promise<void> {
        const prisma = new PrismaClient();
        try {
            const history = await prisma.history.create({
                data: {
                    userId: userId,
                    secretId: secretId,
                
                    req_datetime: moment().format('YYYYMMDDHHmmss'),
                    tr_id: tr_id,
                    request:request,
                    count:count

                }
            });
            logger.info(JSON.stringify(history));
        } catch(ex) {
            await prisma.$disconnect();
        } finally {
            await prisma.$disconnect();
        }
    }
}

export default HistoryService;
