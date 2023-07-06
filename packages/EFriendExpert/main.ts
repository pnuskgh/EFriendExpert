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

(async () => {
    console.log('Start EFriendExpert Service.');
    console.log(await configUtil.getConfig());
})();
