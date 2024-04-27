/**
 * 이베스트투자증권 Accounting (회계)
 * 
 * @file packages/EFriendExpert/ebest/ebestAccounting.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2024, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import moment from 'moment';                                //--- format : YYYYMMDDHHmmss.SSS ZZ - 20191220172919.083 +0900

import Accounting from '../Accounting.js';

//--- 수수료: https://www.ebestsec.co.kr/guide/commission/GUCommissionOnline.jsp?left_menu_no=333&front_menu_no=334
//--- 화면 : 6302 - 당일매매일지
export class EBestAccounting extends Accounting {                            
    constructor() {
        super();
        
        this.accountType = 'EBest';
        this._initialize();
    }

    private _initialize() {
        this.exchangeRate.default = {
            ... this.exchangeRate.default,

            default: 0.015 / 100,       //--- 매매 수수료율 (코스피/코스닥/코넥스, ELW)
            kotc: 0.15 / 100            //--- 매매 수수료율 (K-OTC)
        };
    }

    /**
     * 예탁금 이용료율 (상속)
     * 
     * @param {number} total           예탁금
     * @param {string} _yyyymmdd        날자
     * @returns number                  연간 이자
     */
    public depositRate(total: number, _yyyymmdd: string = moment().format('YYYYMMDD')): number {
        return ((total < 500000) ? 1.0:0.4) / 100;
    }
}

export default EBestAccounting;
