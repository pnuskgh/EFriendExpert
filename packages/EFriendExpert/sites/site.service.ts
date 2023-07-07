/**
 * Sites
 * 
 * @file packages/EFriendExpert/sites/site.service.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { logger } from '../common/logger';
import { UserService  } from '../users';
import { ExchangeService } from '../exchanges';

import { PrismaClient } from '@prisma/client';

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
        } catch(ex) {
            await prisma.$disconnect();
        } finally {
            await prisma.$disconnect();
        }
    }
}

export default SiteService;
