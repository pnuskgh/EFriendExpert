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

    protected exchangeRate = {          //--- exchangeRate[userType || 'default'][type || 'default']
        yymmdd: '2024-04-05',           //--- 수수료 최종 확인 날자
        default: {                      //--- default. 사용자 수수료 타입의 default
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
     * @param {string} yyyy             연도
     * @param {string} type             거래 타입 ('', 코스피(KOSPI)/코스닥(KOSDAQ)/코넥스(KONEX), ETF, ETN, ELW, K-OTC)
     * @param {string} userType         사용자 수수료 타입
     * @returns number                  매수시 발생한 수수료
     */
    public purchaseFee(totalPrice: number, yyyy: string = moment().format('YYYY'), type: string = '', userType: string = ''): number {
        yyyy = (yyyy == '') ? moment().format('YYYY'):yyyy;
        return this._exchangeFee(totalPrice, yyyy, type, userType);
    }

    /**
     * 매도시 매매 수수료와 유관기관 수수료를 반환 한다.
     * To-Do : yyyy, type, userType 순으로 parameter 조정할 것
     * 
     * @param {number} totalPrice       체결된 금액
     * @param {string} yyyy             연도
     * @param {string} type             거래 타입 ('', 코스피(KOSPI)/코스닥(KOSDAQ)/코넥스(KONEX), ETF, ETN, ELW, K-OTC)
     * @param {string} userType         사용자 수수료 타입
     * @returns number                  매도시 발생한 수수료
     */
    public saleFee(totalPrice: number, yyyy: string = moment().format('YYYY'), type: string = '', userType: string = ''): number {
        yyyy = (yyyy == '') ? moment().format('YYYY'):yyyy;
        return this._exchangeFee(totalPrice, yyyy, type, userType);
    }

    /**
     * 매수/매도시 매매 수수료와 유관기관 수수료를 반환 한다.
     *     매매 수수료
     *         1원 아래는 버림 (한국투자증권, 이베스트투자증권)
     *         10원 아래는 버림 (키움증권)
     *         To-Do : 체결된 금액은 분할 매매시 합계 금액으로 한다
     *     유관기관 수수료
     *         1원 아래는 버림
     *         To-Do : 체결된 금액은 분할 매매시 합계 금액으로 한다
     * 
     * @param {number} totalPrice       체결된 금액
     * @param {string} yyyy             연도
     * @param {string} type             거래 타입 ('', 코스피(KOSPI)/코스닥(KOSDAQ)/코넥스(KONEX), ETF, ETN, ELW, K-OTC)
     * @param {string} userType         사용자 수수료 타입
     * @returns number                  매수/매도시 발생한 수수료
     */
    private _exchangeFee(totalPrice: number, yyyy: string = moment().format('YYYY'), type: string = '', userType: string = ''): number {
        let exchange = totalPrice * this._getExchangeRate(yyyy, type, userType);
        if (this.accountType == 'Kiwoom') {
            exchange = Math.floor(exchange / 10) * 10;
        } else {
            exchange = Math.floor(exchange);
        }
        return exchange + Math.floor(totalPrice * this._getRelateRate(yyyy, type, userType));
    }

    /**
     * 공통: 매도시 발생한 세금을 반환 한다
     *     10원 아래는 버림
     *     To-Do : 체결된 금액은 분할 매매시 합계 금액으로 한다
     * 
     * @param {number} purchaseTotal    매수시 체결된 금액
     * @param {number} saleTotal        매도시 체결된 금액
     * @param {string} yyyy             연도
     * @param {string} type             거래 타입 ('', 코스피(KOSPI)/코스닥(KOSDAQ)/코넥스(KONEX), ETF, ETN, ELW, K-OTC)
     * @param {string} userType         사용자 수수료 타입
     * @returns number                  매도시 발생한 세금
     */
    public tax(_purchaseTotal: number, saleTotal: number, yyyy: string = moment().format('YYYY'), type: string = '', userType: string = ''): number {
        const fee = this.taxRate(yyyy, type, userType);
        return Math.floor((saleTotal * fee) / 10) * 10;
    }
    
    /**
     * 예탁금 이용료 (상속)
     *     증권사에 예치한 예탁금에 대한 이자
     *     https://www.rcast.co.kr/news/articleView.html?idxno=20627
     *     https://www.ngetnews.com/news/articleView.html?idxno=408917
     *     To-Do: 예탁 금액과 기간에 따라 이용료를 산정하여야 한다.
     * 
     * @param {number} _total           예탁금
     * @param {string} _yyyymmddFr      시작 날자
     * @param {string} _yyyymmddTo      종료 날자
     * @param {string} _type            거래 타입 ('', 코스피(KOSPI)/코스닥(KOSDAQ)/코넥스(KONEX), ETF, ETN, ELW, K-OTC)
     * @param {string} _userType        사용자 수수료 타입
     * @returns number                  이자
     */
    public deposit(_total: number, _yyyymmddFr: string = moment().format('YYYY') + '0101', 
                                   _yyyymmddTo: string = moment().format('YYYY') + '1231', _type: string = '', _userType: string = ''): number {
        return 0;
    }

    /**
     * 세율을 반환 한다.
     * To-Do : type에 따라 세율이 조금이 다르다
     * 
     * @param {string} yyyy             연도
     * @param {string} type             거래 타입 ('', 코스피(KOSPI)/코스닥(KOSDAQ)/코넥스(KONEX), ETF, ETN, ELW, K-OTC)
     * @param {string} userType         사용자 수수료 타입
     * @returns 
     */
    private taxRate(yyyy: string = moment().format('YYYY'), type: string = 'kospi', userType: string = ''): number {
        const specialTax: number = 0.0015;                  //--- 농어촌특별세율 : 0.15%
        let taxRate: number = 0.0;                          //--- 거래세율 : 증권거래세율 + 농어촌특별세율 + 금융투자소득세율
        switch (yyyy) {
        case '2019': taxRate = 0.0015 + specialTax; break;     
        case '2020': taxRate = 0.001 + specialTax;  break;
        case '2021': 
        case '2022': taxRate = 0.0008 + specialTax; break;
        case '2023':
            switch (type) {
                case 'kospi':  taxRate = 0.0005 + 0.0015; break;
                case 'kosdaq': taxRate = 0.002; break;
                case 'konex':  taxRate = 0.001; break;
                case 'kotc':   taxRate = 0.002; break;
                default: taxRate = 0.0005 + 0.0015; break;
            }
        case '2024':
            switch (type) {
                case 'kospi':  taxRate = 0.0003 + 0.0015; break;
                case 'kosdaq': taxRate = 0.0018; break;
                case 'konex':  taxRate = 0.001; break;
                case 'kotc':   taxRate = 0.0018; break;
                default: taxRate = 0.0003 + 0.0015; break;
            }
        default: 
            taxRate = this._getTaxRate(yyyy, type, userType) + this._getTaxRate(yyyy, 'invest', userType); 
            break;
        }
        return taxRate;
    }

    /**
     * 세율을 반환 한다.
     * 
     * @param {string} _year            연도
     * @param {string} type             거래 타입 (코스피(KOSPI, '')/코스닥(KOSDAQ)/코넥스(KONEX), ELW, K-OTC / invest)
     * @param {string} _userType        사용자 수수료 타입
     * @returns tax                     세율
     */
    private _getTaxRate(_yyyy: string = moment().format('YYYY'), type: string = '', _userType: string = '') {
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
            console.error(`getTaxRate :: 알려지지 않은 type : ${type}`);
            break;
        }
        return rate;
    }

    /**
     * 매매 수수료율을 반환 한다.
     * 
     * @param {string} yyyy             연도
     * @param {string} type             거래 타입 (ETF, ETN, ELW, K-OTC)
     * @param {string} userType         사용자 수수료 타입
     * @returns 
     */
    private _getExchangeRate(_yyyy: string = moment().format('YYYY'), type: string = '', userType: string = '') {
        const rates = this.exchangeRate[userType] || this.exchangeRate.default;
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
     * @param {string} _yyyy            연도
     * @param {string} type             거래 타입 (ETF, ETN, ELW, K-OTC)
     * @param {string} _userType        사용자 수수료 타입
     * @returns 
     */
    private _getRelateRate(_yyyy: string = moment().format('YYYY'), type: string = '', _userType: string = '') {
        const rates = {                                     //--- 유관기관 수수료율
            default: 0.0036396 / 100,                       //--- 유관기관 수수료율 (코스피/코스닥/코넥스)
            etf: 0.0042087 / 100,                           //--- 유관기관 수수료율 (ETF)
            etn: 0.0042087 / 100,                           //--- 유관기관 수수료율 (ETN)
            elw: 0.0042087 / 100,                           //--- 유관기관 수수료율 (ELW)
            kotc: 0.0999187 / 100                           //--- 유관기관 수수료율 (K-OTC)
        };

        let rate = 0.0;
        switch (type.toLowerCase()) {
        case 'etf': rate = rates.etf; break;
        case 'etn': rate = rates.etn; break;
        case 'elw': rate = rates.elw; break;
        case 'kotc':
        case 'k-otc': rate = rates.kotc; break;
        case '': rate = rates.default; break;
        default:
            console.error(`getRelateRate :: 알려지지 않은 type : [${type}]`);
            rate = rates.default;
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

    public profit(purchaseTotal: number, saleTotal: number, yyyyPurchase: string = moment().format('YYYY'), yyyySale: string = moment().format('YYYY'), type: string = '', userType: string = ''): number {
        return (saleTotal - purchaseTotal) - (this.purchaseFee(purchaseTotal, yyyyPurchase, type, userType) + this.saleFee(saleTotal, yyyySale, type, userType) 
                                           + this.tax(purchaseTotal, saleTotal, yyyySale, type, userType));
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
