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
import { BaseError, ERROR_CODE } from './common/error';

import { SiteService } from './sites';
import { SecretService } from './secrets';
// import { EFriendRest, FHKST01010100_REQUEST_HEADER, FHKST01010100_REQUEST_BODY } from './efriends';
import { EFriendWs } from './efriends';

(async () => {
    try {
        logger.info('Start EFriendExpert Service.');
        const config = await configUtil.getConfig();
        loggerUtil.getLogger(config);

        const siteService = new SiteService();
        await siteService.initialize();

        const userId = 1;
        const secretService = new SecretService(userId);
        await secretService.initialize();
        const secretQuery = await secretService.getQuerySecret();
        const secretOrder = await secretService.getOrderSecret();

        if (secretQuery != null) {
            // const efriendRest = new EFriendRest();
            // const requestHeader: FHKST01010100_REQUEST_HEADER = {
            //     "content-type": 'application/json; charset=utf-8',
            // };
            // const requestBody: FHKST01010100_REQUEST_BODY = {
            //     FID_COND_MRKT_DIV_CODE: 'J',
            //     FID_INPUT_ISCD: '015760'
            // };
            // const response = await efriendRest.FHKST01010100(secretQuery, requestHeader, requestBody);
            // console.log(response);
        }

        if (secretOrder != null) {            
            const efriendWs = new EFriendWs(secretOrder);
            await efriendWs.initialize();
            efriendWs.addHandler(efriendWs.onMessageDefault.bind(efriendWs));

            // while (true) {
            //     await efriendWs.sleep(1000);
            //     console.log('Sleep ---');
            // }
        }
        logger.info('Hello world!');
    } catch(ex) {
        if (ex instanceof BaseError) {
            logger.error(`${ex.code}: ${ex.message} : ${ex.data || ''}`);
        } else {
            console.error(ex);
            throw new BaseError({ code: ERROR_CODE.UNKNOWN_ERROR, data: ex });
        }
    }
})();
