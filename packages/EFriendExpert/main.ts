/**
 * 한국투자증권 EFriendExpert의 main 프로그램
 * 
 * @file packages/EFriendExpert/main.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { configUtil } from './common/config';
import { loggerUtil, logger } from './common/logger';
import { BaseError } from './common/error';

import { SiteService } from './sites';

(async () => {
    try {
        logger.info('Start EFriendExpert Service.');
        const config = await configUtil.getConfig();
        loggerUtil.getLogger(config);

        const siteService = new SiteService();
        await siteService.initialize();

        logger.info('Hello world!');
    } catch(ex) {
        if (ex instanceof BaseError) {
            logger.error(`${ex.code}: ${ex.message} : ${ex.data || ''}`);
        } else {
            console.error(ex);
        }
    }
})();
