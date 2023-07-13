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
import { logger } from './common/logger';
import { BaseError, ERROR_CODE } from './common/error';

import { SiteService } from './sites';
import { SecretService } from './secrets';
import { Secret, EFriendRest, FHKST01010100_REQUEST_HEADER, FHKST01010100_REQUEST_BODY } from './efriends';
import { EFriend, EFriendWs } from './efriends';

(async () => {
    try {
        const config = await configUtil.getConfig();
        logger.setConfig(config.logger);

        logger.info('Start EFriendExpert Service.');
        const siteService = new SiteService({ logger });
        await siteService.initialize();

        const secretService = new SecretService();
        const secrets: Array<Secret> = await secretService.getSecrets();

        const userId = 1;
        const efriend = new EFriend(secrets);
        const secretQuery = await efriend.getQuerySecret();
        const secretOrder = await efriend.getOrderSecret(userId);

        if (secretQuery != null) {
            const efriendRest = new EFriendRest();
            const requestHeader: FHKST01010100_REQUEST_HEADER = {
                "content-type": 'application/json; charset=utf-8',
            };
            const requestBody: FHKST01010100_REQUEST_BODY = {
                FID_COND_MRKT_DIV_CODE: 'J',
                FID_INPUT_ISCD: '015760'
            };
            const response = await efriendRest.FHKST01010100(secretQuery, requestHeader, requestBody);
            console.log(response);
        }

        if (secretOrder != null) {            
            const efriendWs = new EFriendWs(secretOrder);
            await efriendWs.initialize();
            efriendWs.addHandler(efriendWs.onMessageDefault.bind(efriendWs));
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
