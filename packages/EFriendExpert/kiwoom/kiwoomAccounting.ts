/**
 * 키움증권 Accounting (회계)
 * 
 * @file packages/Kiwoom/kiwoomAccounting.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

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

//--- https://www.kiwoom.com/h/help/fee/VHelpStockFeeView?dummyVal=0
//--- https://www.ngetnews.com/news/articleView.html?idxno=408917
export class KiwoomAccounting extends Accounting {
    constructor() {
        super();
        
        this._initialize();
    }

    private _initialize() {
        this.exchangeFee = 0.015 / 100;                     //--- 매매 수수료율: 0.015%
        this.exchangeFee_kotc = 0.14 / 100;                 //--- 매매 수수료율: 0.14% (K-OTC)
        this.exchangeFee_lender = 0.1 / 100;                //--- 매매 수수료율: 0.1% (대주)
        this.relateFee = 0.00519496 / 100;                  //--- 유관기관 수수료율: 0.00519496%
    
        this.specialTax = 0.15 / 100;                       //--- 농어촌특별세율 : 0.15%
        this.investTax = 0.0;                               //--- 금융투자소득세율 (2025년 도입 예정)
    }

    /**
     * 거래소별: 매매 수수료를 반환 한다.
     *     매수/매도시에 적용 한다.
     *     1원 아래는 버림
     *     To-Do : 체결된 금액은 분할 매매시 합계 금액으로 한다
     *     To-Do : 다양한 조건에 따라 수수료율이 달라진다.
     * 
     * @param {number} totalPrice       체결된 금액
     * @param {string} type             거래 타입
     * @returns 
     */
    public _feeExchange(totalPrice: number, type: string = ''): number {
        let fee: number = this.exchangeFee;                 //--- 매매 수수료율: 0.015%
        switch (type) {
        case 'K-OTC': fee = this.exchangeFee_kotc; break;   //--- 매매 수수료율 : 0.14%
        case '대주': fee = this.exchangeFee_lender; break;  //--- 매매 수수료율 : 0.1%
        }
        return Math.floor(totalPrice * fee);
    }

    /**
     * 예탁금 이용료
     *     증권사에 예치한 예탁금에 대한 연간 이자
     * 
     * @param {number} total            예탁금
     * @returns number                  연간 이자
     */
    public usageFee(total: number, yyyymmdd: string = ''): number {
        let depositFee: number =  1.05;
        if ((yyyymmdd == '') || (yyyymmdd < '20231008' )) {
            depositFee = 0.25
        } else {
            depositFee = (total < 500000) ? 0.1:1.05;
        }
        return Math.floor(total * depositFee / 100);
    }
}

export default KiwoomAccounting;
