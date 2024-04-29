/**
 * 키움증권 Accounting (회계)
 * 
 * @file packages/EFriendExpert/Kiwoom/kiwoomAccounting.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2024, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import moment from 'moment';                                //--- format : YYYYMMDDHHmmss.SSS ZZ - 20191220172919.083 +0900

import Accounting from '../Accounting.js';

//--- 수수료: https://www.kiwoom.com/h/help/fee/VHelpStockFeeView?dummyVal=0
//--- 화면 : 1691 - 매매수익현황
export class KiwoomAccounting extends Accounting {
    constructor() {
        super();
        
        this.accountType = 'Kiwoom';
        this._initialize();
    }

    private _initialize() {
        this.exchangeRate.default = {
            ... this.exchangeRate.default,

            default: 0.015 / 100,                       //--- 매매 수수료율 (코스피/코스닥/코넥스, ELW)
            etf: 0.015 / 100,                           //--- 매매 수수료율 (ETF)
            etn: 0.015 / 100,                           //--- 매매 수수료율 (ETN)
            elw: 0.015 / 100,                           //--- 매매 수수료율 (ELW)
            kotc: 0.14 / 100,                           //--- 매매 수수료율 (K-OTC)
            lender: 0.10 / 100                          //--- 매매 수수료율 (대주)
        };
    }

    /**
     * 예탁금 이용료 (상속)
     * 
     * @param {number} total            예탁금
     * @param {string} yyyymmddFr       시작 날자
     * @param {string} yyyymmddTo       종료 날자
     * @param {string} _type            거래 타입 ('', 코스피(KOSPI)/코스닥(KOSDAQ)/코넥스(KONEX), ETF, ETN, ELW, K-OTC)
     * @param {string} _userType        사용자 수수료 타입
     * @returns number                  연간 이자
     */
    public deposit(total: number, yyyymmddFr: string = moment().format('YYYY') + '0101', 
                                  yyyymmddTo: string = moment().format('YYYY') + '1231', _type: string = '', _userType: string = ''): number {
        const duration = this.duration(yyyymmddTo, yyyymmddFr);
        //--- 2023-10-08 이전의 이자율은 0.25 / 100 임
        const rate = ((total < 500000) ? 0.1:1.05) / 100;
        return Math.floor(total * rate * (duration / 365));
    }
}

export default KiwoomAccounting;
