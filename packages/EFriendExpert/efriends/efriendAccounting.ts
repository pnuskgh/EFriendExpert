/**
 * 한국투자증권 EFriendExpert Accounting (회계)
 * 
 * @file packages/EFriendExpert/efriends/efriendAccounting.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import Accounting from './Accounting.js';

//--- 수수료: https://securities.koreainvestment.com/main/customer/guide/_static/TF04ae010000.jsp
//--- https://www.truefriend.com/main/customer/guide/_static/TF04ae010000.shtm (2020.04.24 기준)
//--- To-Do :'뱅키스'를 기준으로 작성 (2020.04.24 기준).  '영업점'을 기준으로한 수수료도 추가할 것
//--- To-Do : 키움증권의 매매 수수료 체계를 참조하여 수수료 구성을 추가할 것
export class EFriendAccounting extends Accounting {                            
    constructor() {
        super();
        
        this._initialize();
    }

    private _initialize() {
        this.exchangeFee = 0.0140527 / 100;                 //--- 매매 수수료율 (코스피/코스닥/코넥스)
        this.exchangeFee_etf = 0.0146527 / 100;             //--- 매매 수수료율 (ETF/ETN)
        this.exchangeFee_elw = 0.0146527 / 100;             //--- 매매 수수료율 (ELW)
        this.exchangeFee_kotc = 0.1498527 / 100;            //--- 매매 수수료율 (K-OTC)
        this.relateFee = 0.00363960 / 100;                  //--- 유관기관 수수료율
        this.depositFee = 0.4 / 100;                        //--- 예탁금 이자 (50만원 이상 예치시)
    
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
        let fee: number = this.exchangeFee; 
        switch (type) {
        case 'ETF': 
        case 'ETN': fee = this.exchangeFee_etf; break; 
        case 'ELW': fee = this.exchangeFee_elw; break; 
        case 'K-OTC': fee = this.exchangeFee_kotc; break;
        case '코스피':
        case '코스닥':
        case '코넥스':
        default: break;
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
    public usageFee(total: number): number {
        return Math.floor(total * this.depositFee);
    }
}

export default EFriendAccounting;
