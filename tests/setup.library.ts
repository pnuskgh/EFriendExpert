/**
* vitest 환경 설정 파일
* 
* @file tests/setup.library.ts
* @version 0.0.1
* @license GNU General Public License v3.0
* @copyright 2017~2023, EFriendExport Community Team
* @author gye hyun james kim <pnuskgh@gmail.com> 
*/

// import { configUtil } from '../packages/EFriendExpert/common/config';
// import { logger } from '../packages/EFriendExpert/common/logger';
// import { BaseError, ERROR_CODE } from '../packages/EFriendExpert/common/error';

// import { SiteService } from '../packages/EFriendExpert/sites';
// import { SecretService } from '../packages/EFriendExpert/secrets';
// import { Secret, EFriendRest } from '../packages/EFriendExpert/efriends';
// import { EFriend, EFriendWs } from '../packages/EFriendExpert/efriends';

// if (!global.efriend) {
//     try {
//         const config = await configUtil.getConfig();
//         logger.setConfig(config.logger);

//         logger.info('Start EFriendExpert vitest Service.');
//         const siteService = new SiteService({ logger });
//         await siteService.initialize();

//         const secretService = new SecretService();
//         let secrets: Array<Secret> = await secretService.getSecrets();

//         const account = '68629034';
//         const efriend = new EFriend({ logger });
//         secrets = await efriend.setSecrets(secrets);
//         await secretService.setSecrets(secrets);

//         global.efriend = efriend;
//         global.efriendRest = new EFriendRest({ logger });

//         const secretOrder = await efriend.getOrderSecret(account);
//         if (secretOrder != null) {
//             global.efriendWs = new EFriendWs({ secret: secretOrder, logger });
//         }
//     } catch(ex) {
//         console.error(ex);
//         if (ex instanceof BaseError) {
//             logger.error(`${ex.code}: ${ex.message} : ${ex.data}`);
//         } else {
//             console.error(ex);
//             throw new BaseError({ code: ERROR_CODE.UNKNOWN_ERROR, data: ex });
//         }
//     }
// }
