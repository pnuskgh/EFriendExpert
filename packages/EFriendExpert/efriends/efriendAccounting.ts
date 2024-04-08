/**
 * 한국투자증권 EFriendExpert Accounting (회계)
 * 
 * @file packages/EFriendExpert/efriends/efriendAccounting.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2024, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import moment from 'moment';                                //--- format : YYYYMMDDHHmmss.SSS ZZ - 20191220172919.083 +0900

import Accounting from './Accounting.js';

//--- 수수료: https://securities.koreainvestment.com/main/customer/guide/_static/TF04ae010000.jsp
//--- 화면 : 0857 - 주식 매매일지
export class EFriendAccounting extends Accounting {                            
    constructor() {
        super();

        this.accountType = 'EFriend';
        this._initialize();
    }

    private _initialize() {
        this.exchangeRate.default = {
            ... this.exchangeRate.default,

            //--- 뱅키스
            default: 0.0140527 / 100,   //--- 매매 수수료율 (코스피(KOSPI)/코스닥(KOSDAQ)/코넥스(KONEX))
            etf: 0.0146527 / 100,       //--- 매매 수수료율 (ETF)
            etn: 0.0146527 / 100,       //--- 매매 수수료율 (ETN)
            elw: 0.0146527 / 100,       //--- 매매 수수료율 (ELW)
            kotc: 0.1498527 / 100       //--- 매매 수수료율 (K-OTC)
        };
    }

    /**
     * 예탁금 이용료율 (상속)
     * 
     * @param {number} total            예탁금
     * @param {string} _yyyymmdd        날자
     * @returns number                  연간 이자
     */
    public depositRate(total: number, _yyyymmdd: string = moment().format('YYYYMMDD')): number {
        return ((total < 500000) ? 0.1:0.4) / 100;
    }
}

export default EFriendAccounting;
