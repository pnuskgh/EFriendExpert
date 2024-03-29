/**
 * 한국투자증권 limit (사용 제한)
 * 
 * @file packages/EFriendExpert/efriends/efriend.limit.constant.d.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { EFRIEND_LIMIT } from './efriend.type.js';

//--- 2023년 10월 25일까지 반영
export const EFriend_LIMIT: EFRIEND_LIMIT = {
    user: {
        accounts_actual: 89,                                //--- HTS ID(userid)당 실전 투자 최대 계좌 수 (2022.10.27 ~)
        accounts_simulated: 2                               //--- HTS ID(userid)당 모의 투자 최대 계좌 수 (2022.10.27 ~)
    },
    rest_api: {
        api_per_second_actual: 20,                          //--- account당 실전 투자 초당 RES API 최대 호출 수 (2022.09.08 ~)
        api_per_second_simulated: 5,                        //--- account당 모의 투자 초당 RES API 최대 호출 수 (2023.06.23 ~)
        //--- 접근 토큰의 유효 기간 : 24시
        //--- 접근 토큰의 갱신 발급 주기 : 6시간. 주기 이전에 발급을 요청하면 전에 발급한 요청키를 반환
        api_tokenP_seconds: 1 * 60                          //--- tokenP는 5분당 1회만 호출 가능함 (2023.10.27 ~)
    },
    ws_api: {
        expiration_period: 24,                              //--- approval_key의 유효 기간 (시간) 
        session: 1,                                         //--- account당 최대 Web Socket Session 수
        notifications: 1,                                   //--- account당 실시간 체결 통보(H0STCNI0/H0STCNI9) 등록 갯수
        registrations: 40                                   //--- account당 실시간 체결가(H0STCNT0), 실시간 호가(H0STASP0) 등록 갯수 (2022.09.08 ~)
    }
};

export default EFriend_LIMIT;
