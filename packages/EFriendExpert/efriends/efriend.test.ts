/**
 * 한국투자증권 EFriendExpert
 * 
 * @file packages/EFriendExpert/efriends/efriend.test.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { REQUEST_INFO } from "./efriend.type.js";

export const requestInfo: REQUEST_INFO = {
    //--- OAuth 인증
    //--- 국내주식주문
    //--- 국내주식시세
    'FHKST01010100_실전': {
        header: { 'content-type': 'application/json; charset=utf-8' },
        body: { FID_COND_MRKT_DIV_CODE: 'J', FID_INPUT_ISCD: '015760' }
    },
    'FHKST01010300_실전':  {
        header: { 'content-type': 'application/json; charset=utf-8' },
        body: { FID_COND_MRKT_DIV_CODE: 'J', FID_INPUT_ISCD: '015760' }
    },

    //--- 실시간시세(국내주식)
    'H0STCNT0_실전': {
        header: { tr_type: '1', 'content-type': 'application/json; charset=utf-8' },
        body: { tr_id: 'H0STCNT0', tr_key: '015760' }
    },
    'H0STASP0_실전': {
        header: { tr_type: '1', 'content-type': 'application/json; charset=utf-8' },
        body: { tr_id: 'H0STASP0', tr_key: '015760' }
    },
    'H0STCNI0_실전': {
        header: { tr_type: '1', 'content-type': 'application/json; charset=utf-8' },
        body: { tr_id: 'H0STCNI0', tr_key: '68629034' }
    }

    //--- 국내선물옵션주문
    //--- 국내선물옵션시세
    //--- 실시간시세(국내선물옵션)
    //--- 해외주식주문
    //--- 해외주식시세
    //--- 실시간시세(해외주식)
    //--- 해외선물옵션주문
    //--- 해외선물옵션시세
    //--- 실시간시세(해외선물옵션)
};

export default requestInfo;
