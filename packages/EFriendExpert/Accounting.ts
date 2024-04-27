/**
 * Accounting (회계)
 * 
 * @file packages/EFriendExpert/efriends/Accounting.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2024, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import moment from 'moment';                                //--- format : YYYYMMDDHHmmss.SSS ZZ - 20191220172919.083 +0900

//--- https://www.truefriend.com/main/customer/guide/_static/TF04ae010000.shtm (2020.04.24 기준)
export class Accounting {
    protected accountType:string = 'Unknown';

    // constructor() {
    //     this.accountType = 'None';
    // }

    protected exchangeRate = {
        yymmdd: '2024-04-05',           //--- 수수료 최종 확인 날자
        default: {
            default: -1,                //--- 매매 수수료율 (코스피/코스닥/코넥스, ELW)
            etf: -1,                    //--- 매매 수수료율 (ETF)
            etn: -1,                    //--- 매매 수수료율 (ETN)
            elw: -1,                    //--- 매매 수수료율 (ELW)
            kotc: -1,                   //--- 매매 수수료율 (K-OTC)
            lender: -1                  //--- 매매 수수료율 (대주)
        }
    };  

    /**
     * 매수시 매매 수수료와 유관기관 수수료를 반환 한다.
     * 
     * @param {number} totalPrice       체결된 금액
     * @param {string} type             거래 타입 ('', 코스피(KOSPI)/코스닥(KOSDAQ)/코넥스(KONEX), ETF, ETN, ELW, K-OTC)
     * @param {string} yyyy             연도
     * @returns number                  매수시 발생한 수수료
     */
    public purchaseFee(totalPrice: number, type: string = '', yyyy: string = moment().format('YYYY')): number {
        return this._exchangeFee(totalPrice, type, yyyy);
    }

    /**
     * 매도시 매매 수수료와 유관기관 수수료를 반환 한다.
     * 
     * @param {number} totalPrice       체결된 금액
     * @param {string} type             거래 타입 ('', 코스피(KOSPI)/코스닥(KOSDAQ)/코넥스(KONEX), ETF, ETN, ELW, K-OTC)
     * @param {string} yyyy             연도
     * @returns number                  매도시 발생한 수수료
     */
    public saleFee(totalPrice: number, type: string = '', yyyy: string = moment().format('YYYY')): number {
        return this._exchangeFee(totalPrice, type, yyyy);
    }

    /**
     * 공통: 매도시 발생한 세금을 반환 한다
     *     10원 아래는 버림
     *     To-Do : 체결된 금액은 분할 매매시 합계 금액으로 한다
     * 
     * @param {number} purchaseTotal    매수시 체결된 금액
     * @param {number} saleTotal        매도시 체결된 금액
     * @param {string} type             거래 타입 ('', 코스피(KOSPI)/코스닥(KOSDAQ)/코넥스(KONEX), ETF, ETN, ELW, K-OTC)
     * @param {string} yyyy             연도
     * @returns number                  매도시 발생한 세금
     */
    public taxNew(_purchaseTotal: number, saleTotal: number, type: string = '', yyyy: string = moment().format('YYYY')): number {
        const fee = this._getTaxRate(type, yyyy);
        return Math.floor((saleTotal * fee) / 10) * 10;
    }
    
    //--- Deprecated: 2024-04-05 ~ 
    public tax(yyyy: string, purchaseTotal: number, saleTotal: number, type: string = ''): number {
        return this.taxNew(purchaseTotal, saleTotal, type, yyyy);
    }

    /**
     * 예탁금 이용료율 (상속)
     *     증권사에 예치한 예탁금에 대한 연간 이자
     *     https://www.rcast.co.kr/news/articleView.html?idxno=20627
     *     https://www.ngetnews.com/news/articleView.html?idxno=408917
     *     To-Do: 예탁 금액과 기간에 따라 이용료를 산정하여야 한다.
     * 
     * @param {number} _total           예탁금
     * @param {string} _yyyymmdd        날자
     * @returns number                  연간 이자
     */
    public depositRate(_total: number, _yyyymmdd: string = moment().format('YYYYMMDD')): number {
        return 0;
    }

    /**
     * 예탁금 이용료
     * 
     * @param {number} total            예탁금
     * @param {string} yyyymmdd         날자
     * @returns number                  연간 이자
     */
    public deposit(total: number, yyyymmdd: string = moment().format('YYYYMMDD')): number {
        return Math.floor(total * this.depositRate(total, yyyymmdd));
    }

    //--- Deprecated: 2024-04-05 ~ 
    public usageFee(total: number, yyyymmdd: string = moment().format('YYYYMMDD')): number {
        return this.deposit(total, yyyymmdd);
    }

    /**
     * 매수/매도시 매매 수수료와 유관기관 수수료를 반환 한다.
     *     매매 수수료
     *         1원 아래는 버림
     *         10원 아래는 버림 (키움증권)
     *         To-Do : 체결된 금액은 분할 매매시 합계 금액으로 한다
     *     유관기관 수수료
     *         1원 아래는 버림
     *         To-Do : 체결된 금액은 분할 매매시 합계 금액으로 한다
     *     pppqqq : 이베스트투자증권은 실제 거래를 하여 확인할 것
     * 
     * @param {number} totalPrice       체결된 금액
     * @param {string} type             거래 타입 ('', 코스피(KOSPI)/코스닥(KOSDAQ)/코넥스(KONEX), ETF, ETN, ELW, K-OTC)
     * @param {string} yyyy             연도
     * @returns number                  매수/매도시 발생한 수수료
     */
    private _exchangeFee(totalPrice: number, type: string = '', yyyy: string = moment().format('YYYY')): number {
        let exchange = totalPrice * this._getExchangeRate(type, yyyy);
        if (this.accountType == 'Kiwoom') {
            exchange = Math.floor(exchange / 10) * 10;
        } else {
            exchange = Math.floor(exchange);
        }
        return exchange + Math.floor(totalPrice * this._getRelateRate(type, yyyy));
    }

    /**
     * 세율을 반환 한다.
     * To-Do : type에 따라 세율이 조금이 다르다
     * 
     * @param {string} type             거래 타입 ('', 코스피(KOSPI)/코스닥(KOSDAQ)/코넥스(KONEX), ETF, ETN, ELW, K-OTC)
     * @param {string} yyyy             연도
     * @returns 
     */
    private _getTaxRate(type: string = '', yyyy: string = moment().format('YYYY')): number {
        const specialTax: number = 0.15 / 100;              //--- 농어촌특별세율 : 0.15%
        let taxRate: number = 0.0;                          //--- 거래세율 : 증권거래세율 + 농어촌특별세율 + 금융투자소득세율
        switch (yyyy) {
        case '2019': taxRate = 0.0015 + specialTax; break;     
        case '2020': taxRate = 0.001 + specialTax;  break;
        case '2021': 
        case '2022': taxRate = 0.0008 + specialTax; break;
        case '2023': taxRate = 0.0005 + specialTax; break;
        default: 
            taxRate = this.__getTaxRate(type, yyyy) + this.__getTaxRate('invest', yyyy); 
            break;
        }
        return taxRate;
    }

    //--- Deprecated: 2024-04-05 ~ 
    public taxRate(yyyy: string = moment().format('YYYY'), type: string = ''): number {
        return this._getTaxRate(type, yyyy);
    }

    /**
     * 매매 수수료율을 반환 한다.
     * 
     * @param {string} type             거래 타입 (ETF, ETN, ELW, K-OTC)
     * @param {string} yyyy             연도
     * @param {string} userType         사용자 수수료 타입
     * @returns 
     */
    private _getExchangeRate(type: string = '', _yyyy: string = moment().format('YYYY'), userType: string = '') {
        let rates = this.exchangeRate.default;
        if (typeof(this.exchangeRate[userType]) != 'undefined') {
            rates = this.exchangeRate[userType];
        }

        let rate = 0.0;
        switch (type.toLowerCase()) {
        case 'etf': rate = rates.etf; break;
        case 'etn': rate = rates.etn; break;
        case 'elw': rate = rates.elw; break;
        case 'k-otc':
        case 'kotc': rate = rates.kotc; break;
        case '대주':
        case 'lender': rate = rates.lender; break;
        default:
            rate = rates.default;
            break;
        }
        return (rate == -1) ? rates.default:rate;
    }

    /**
     * 유관기관 수수료율을 반환 한다.
     * 
     * @param {string} type             거래 타입 (ETF, ETN, ELW, K-OTC)
     * @param {string} _yyyy            연도
     * @returns 
     */
    private _getRelateRate(type: string = '', _yyyy: string = moment().format('YYYY')) {
        const rates = {                                     //--- 유관기관 수수료율
            default: 0.00363960 / 100,                      //--- 유관기관 수수료율 (코스피/코스닥/코넥스)
            etf: 0.00420870 / 100,                          //--- 유관기관 수수료율 (ETF)
            etn: 0.00420870 / 100,                          //--- 유관기관 수수료율 (ETN)
            elw: 0.00420870 / 100,                          //--- 유관기관 수수료율 (ELW)
            kotc: 0.0999187 / 100                           //--- 유관기관 수수료율 (K-OTC)
        };

        let rate = 0.0;
        switch (type.toLowerCase()) {
        case 'etf': rate = rates.etf; break;
        case 'etn': rate = rates.etn; break;
        case 'elw': rate = rates.elw; break;
        case 'kotc':
        case 'k-otc': rate = rates.kotc; break;
        default:
            console.error(`getRelateRate :: 알려지지 않은 type : ${type}`);
            rate = rates.default;
            break;
        }
        return rate;
    }

    /**
     * 세율을 반환 한다.
     * 
     * @param {string} type             거래 타입 (코스피(KOSPI, '')/코스닥(KOSDAQ)/코넥스(KONEX), ELW, K-OTC / invest)
     * @param {string} _year            연도
     * @returns tax                     세율
     */
    private __getTaxRate(type: string = '', _year: string = moment().format('YYYY')) {
        const rates = {                                     //--- 세율
            default: (0.03 + 0.15) / 100,                   //--- 세율 (거래소), 증권거래세 + 농어촌특별세
            kosdaq: 0.18 / 100,                             //--- 세율 (코스닥), 증권거래세
            konex: 0.10 / 100,                              //--- 세율 (코넥스), 증권거래세
            kotc: 0.18 / 100,                               //--- 세율 (K-OTC), 증권거래세
            elw: 0.0 / 100,                                 //--- 세율 (ELW)
            invest: 0.0 / 100                               //--- 세율 (금융투자소득세, 2025년 도입 예정)
        };

        let rate = 0.0;
        switch (type.toLowerCase()) {
        case '':
        case 'kospi': rate = rates.default; break;
        case 'kosdaq': rate = rates.kosdaq; break;
        case 'konex': rate = rates.konex; break;
        case 'kotc':
        case 'k-otc': rate = rates.kotc; break;
        case 'elw': rate = rates.elw; break;
        case 'invest': rate = rates.invest; break;
        default:
            console.error(`__getTaxRate :: 알려지지 않은 type : ${type}`);
            break;
        }
        return rate;
    }

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

    public profit(yyyy: string, purchaseTotal: number, saleTotal: number, type: string = ''): number {
        return (saleTotal - purchaseTotal) - (this.purchaseFee(purchaseTotal, type) + this.saleFee(saleTotal, type) + this.taxNew(purchaseTotal, saleTotal, type, yyyy));
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

export default Accounting;
