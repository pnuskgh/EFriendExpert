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

import Accounting from '../efriends/Accounting.js';

//--------------------------------------------------------------------------------------------------
//--- 증권에서 계산 소스 정리
//--- OBCon Service       : include/Stocks.js (원본)
//---                       unitPrice(), purchaseFee(), saleFee(), tax(), salePrice()
//---     modules/stockTransactions/view.js
//---     modules/simulations/view.js
//--- OBCon Service       : themes/service_cms_bluestone/default_2022/stockTransactions/js/process.js
//---                       include/Stocks.js에서 Stocks Class를 복사
//---
//--- BlueStone Trading   : include/Stocks.py
//---                       unitPrice(), purchaseFee(), saleFee(), taxRate(), tax(), salePrice()
//---     modules/OBConStock/Processor.py : calcPurchasePrice(), calcSalePrice()
//---     modules/OBConStock/policy/PolicyBase.py
//---
//--- EFriend Expert      : packages/Kiwoom/kiwoomAccounting.ts
//--------------------------------------------------------------------------------------------------

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
     * 예탁금 이용료율 (상속)
     * 
     * @param {number} total            예탁금
     * @param {string} yyyymmdd         날자
     * @returns number                  연간 이자
     */
    public depositRate(total: number, yyyymmdd: string = moment().format('YYYYMMDD')): number {
        const rate: number = ((total < 500000) ? 0.1:1.05) / 100;
        return (yyyymmdd < '20231008' ) ? 0.25 / 100:rate;
    }
}

export default KiwoomAccounting;
