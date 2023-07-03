/**
 * packages/EFriendExpert/main.ts
 * 
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { EFriendExpert } from "./templates";


(async () => {
  const eFriendExpert = await EFriendExpert.create({ appKey: '123', secretKey: '123' }); // 초기화 과정

  await eFriendExpert.TTTC0802U({ Symbol:? }); // 주식 현재가 조회

  // const domesticStock = new DomesticStock();
  // domesticStock.orderCache();
})();
