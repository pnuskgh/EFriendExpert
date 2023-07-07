/**
 * Users
 * 
 * @file packages/EFriendExpert/sites/site.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { logger } from '../common/logger';

import { PrismaClient } from '@prisma/client';

export class UserService {
    public async initialize(): Promise<void> {
        const prisma = new PrismaClient();
        try {
            const count = await prisma.user.count({});
            if (count == 0) {
                const user = await prisma.user.create({
                    data: {
                        name: 'EFriend User',
                        siteId: 1
                    }
                });
                logger.info(JSON.stringify(user));
            }
        } catch(ex) {
            await prisma.$disconnect();
        } finally {
            await prisma.$disconnect();
        }
    }
}

export default UserService;
