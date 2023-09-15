/**
 * 한국투자증권 EFriendExpert Accounting (회계)
 * 
 * @file packages/EFriendExpert/efriends/efriendRest.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import moment from 'moment';                                //--- format : YYYYMMDDHHmmss.SSS ZZ - 20191220172919.083 +0900

//--------------------------------------------------------------------------------------------------
//--- 증권에서 계산 소스 정리
//--- EFriend Expert      : packages/EFriendExpert/efriends/efriendAccounting.ts
//---
//--- OBCon Service       : include/Stocks.js
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
//--------------------------------------------------------------------------------------------------
export class EFriendAccounting {
    private exchangeFee: number = 0.015 / 100;              //--- 매매 수수료율: 0.015%
    private exchangeFee_kotc: number = 0.14 / 100;          //--- 매매 수수료율: 0.14%
    private exchangeFee_lender: number = 0.1 / 100;         //--- 매매 수수료율: 0.1%
    private relateFee: number = 0.00519496 / 100;           //--- 유관기관 수수료율: 0.00519496%
    private specialTax: number = 0.15 / 100;                //--- 농어촌특별세율 : 0.15%
    private investTax: number = 0.0;                        //--- 금융투자소득세율 (2025년 도입 예정)
    private depositFee: number = 0.25 / 100;                //--- 예탁금 이자 : 연 0.25% 이자 지급

    constructor() {
    }

    // //--- Reserved: 웹의 응답코드
    // private _getResponseStatusMessage(status: number): string {
    //     let msg: string = 'Unknown';
    //     switch (status) {
    //     case 200: msg = 'OK'; break;
    //     case 400: msg = 'BAD_REQUEST'; break;
    //     case 401: msg = 'UNAUTHORIZED'; break;
    //     case 404: msg = 'NOT_FOUND'; break;
    //     case 405: msg = 'METHOD_NOT_ALLOWED'; break;
    //     case 500: msg = 'INTERNAL_SERVER_ERROR'; break;
    //     case 503: msg = 'SERVICE_UNAVAILABLE'; break;
    //     }
    //     return msg;
    // }

    /**
     * 증권의 호가 단위를 반환 한다.
     * 
     * @param {number} price            현재 가격
     * @param {string} yyyy             연도
     * @returns unitPrice               호가 단위
     */
    public unitPrice(price: number, yyyy: string = moment().format('YYYY')): number {
        //--- 1월에 예정된 거래소 차세대 시스템 가동과 연계해 시행
        if ('2023' <= yyyy) {
            if (price <= 2000)   return 1;                  //--- 0.05% ~ 100%
            if (price <= 5000)   return 5;                  //--- 0.10% ~ 0.25%
            if (price <= 20000)  return 10;                 //--- 0.05% ~ 0.20%
            if (price <= 50000)  return 50;                 //--- 0.10% ~ 0.25%
            if (price <= 200000) return 100;                //--- 0.05% ~ 0.20%
            if (price <= 500000) return 500;                //--- 0.05% ~ 0.25%
            return 1000;
        } else {
            if (price <= 1000)   return 1;
            if (price <= 5000)   return 5;
            if (price <= 10000)  return 10;
            if (price <= 50000)  return 50;
            if (price <= 100000) return 100;
            if (price <= 500000) return 500;
            return 1000;
        } 
    }

    /**
     * 이전 호가(낮은 가격)를 반환 한다. 
     *     price가 정확한 금액이 입력된다는 가정하에 처리 한다.
     *     price = Math.floor(price / unitPriceCurr) * unitPriceCurr;
     * 
     * @param {number} price            현재 가격
     * @param {string} yyyy             연도
     * @param {number} times            반복 횟수
     * @returns 
     */
    public prevPrice(price: number, yyyy: string = moment().format('YYYY'), times: number = 1): number {
        for (let idx: number = 0; idx < times; idx++) {
            price = price - this.unitPrice(price, yyyy);
        }
        return price;
    }
    
    /**
     * 다음 호가(높은 가격)를 반환 한다.
     *     price가 정확한 금액이 입력된다는 가정하에 처리 한다.
     *     price = Math.floor(price / unitPriceCurr) * unitPriceCurr;
     * 
     * @param {number} price            현재 가격
     * @param {string} yyyy             연도
     * @param {number} times            반복 횟수
     * @returns 
     */
    public nextPrice(price: number, yyyy: string = moment().format('YYYY'), times: number = 1): number {
        for (let idx: number = 0; idx < times; idx++) {
            price = price + this.unitPrice(price + this.unitPrice(price, yyyy), yyyy);
        }
        return price;
    }

    /**
     * 거래소별: 유관기관 수수료를 반환 한다.
     *     유관기관 : 한국거래소, 한국예탁결제원
     *     매수/매도시에 적용 한다.
     *     1원 아래는 버림
     *     To-Do : 체결된 금액은 분할 매매시 합계 금액으로 한다
     * 
     * @param {number} totalPrice       체결된 금액       
     * @param {string} type             거래 타입
     */
    public _feeRelate(totalPrice: number, _type: string = ''): number {
        return Math.floor(totalPrice * this.relateFee);
    }

    /**
     * 거래소별: 매매 수수료를 반환 한다.
     *     매수/매도시에 적용 한다.
     *     1원 아래는 버림
     *     To-Do : 체결된 금액은 분할 매매시 합계 금액으로 한다
     *     To-Do : 다양한 조건에 따라 수수료율이 달라진다.
     *         키움증권: https://www.kiwoom.com/h/help/fee/VHelpStockFeeView?dummyVal=0
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
     * 매수시 매매 수수료와 유관기관 수수료를 반환 한다.
     * 
     * @param {number} totalPrice       체결된 금액
     * @param {string} type             거래 타입
     * @returns number                  매수시 발생한 수수료
     */
    public purchaseFee(totalPrice: number, type: string = ''): number {
        return this._feeRelate(totalPrice, type) + this._feeExchange(totalPrice, type);
    }

    /**
     * 매도시 매매 수수료와 유관기관 수수료를 반환 한다.
     * 
     * @param {number} totalPrice       체결된 금액
     * @param {string} type             거래 타입
     * @returns number                  매도시 발생한 수수료
     */
    public saleFee(totalPrice: number, type: string = ''): number {
        return this._feeRelate(totalPrice, type) + this._feeExchange(totalPrice, type);
    }

    /**
     * 예탁금 이용료
     *     증권사에 예치한 예탁금에 대한 연간 이자
     *     https://www.ngetnews.com/news/articleView.html?idxno=408917
     * 
     * @param {number} total            예탁금
     * @returns number                  연간 이자
     */
    public usageFee(total: number): number {
        return Math.floor(total * this.depositFee);
    }

    /**
     * 세율을 반환 한다.
     * 
     * @param {string} yyyy             연도
     * @param {string} type             거래 타입
     * @returns 
     */
    public taxRate(yyyy: string = moment().format('YYYY'), _type: string = ''): number {
        let transactionTax: number = 0.0;                   //--- 거래세율
        switch (yyyy) {
        case '2019': transactionTax = 0.0015; break;     
        case '2020': transactionTax = 0.001;  break;
        case '2021': 
        case '2022': transactionTax = 0.0008; break;
        case '2023': 
        case '2024': transactionTax = 0.0005; break;
        default: transactionTax = 0.0005; break;            //--- To-Do: 2025년이 되면 0으로 변경할 것
        }
        return transactionTax + this.specialTax + this.investTax;
    }

    /**
     * 공통: 매도시 발생한 세금을 반환 한다
     *     10원 아래는 버림
     *     To-Do : 체결된 금액은 분할 매매시 합계 금액으로 한다
     * 
     * @param {string} yyyy             연도
     * @param {number} purchaseTotal    매수시 체결된 금액
     * @param {number} saleTotal        매도시 체결된 금액
     * @param {string} type             거래 타입
     * @returns number                  매도시 발생한 세금
     */
    public tax(yyyy: string, _purchaseTotal: number, saleTotal: number, type: string = ''): number {
        const fee = this.taxRate(yyyy, type);

        // const fee = (saleTotal - this.purchaseFee(purchaseTotal) - this.saleFee(saleTotal)) * (this.taxRate(yyyy) + this._specialTax) / 100;
        return Math.floor((saleTotal * fee) / 10) * 10;
    }

    public profit(yyyy: string, purchaseTotal: number, saleTotal: number, type: string = ''): number {
        return (saleTotal - purchaseTotal) - (this.purchaseFee(purchaseTotal, type) + this.saleFee(saleTotal, type) + this.tax(yyyy, purchaseTotal, saleTotal, type));
    }

    public duration(purchaseDate: string, saleDate: string): number {
        return moment(saleDate, 'YYYY-MM-DD').diff(moment(purchaseDate, 'YYYY-MM-DD'), 'days') + 1;
    }



    //--- 주문가격으로 판매 가격 계산 
    //---     investStocks\detail.ejs
    //---     stockTransactions\list.ejs
    public salePrice(_stockCode: string, orderPrice: number, saleRate: number = 1.0, yyyy: string = moment().format('YYYY')): number {  //--- saleRate : 1% 상승시 판매
        const salePrice: number = orderPrice * (1 + saleRate / 100.0);
        const unit: number = this.unitPrice(salePrice, yyyy);
        return Math.ceil(salePrice / unit) * unit;
    }
}

export default EFriendAccounting;
