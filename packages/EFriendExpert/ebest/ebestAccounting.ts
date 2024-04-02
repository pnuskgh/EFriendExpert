/**
 * 이베스트투자증권 Accounting (회계)
 * 
 * @file packages/EFriendExpert/ebest/ebestAccounting.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import Accounting from '../efriends/Accounting.js';

//--- 수수료: https://www.ebestsec.co.kr/guide/commission/GUCommissionOnline.jsp?left_menu_no=333&front_menu_no=334
export class EBestAccounting extends Accounting {                            
    constructor() {
        super();
        
        this._initialize();
    }

    private _initialize() {
        this.exchangeFee = 0.015 / 100;              //--- 매매 수수료율 (코스피/코스닥/코넥스)
        this.exchangeFee_etf = 0.015 / 100;          //--- 매매 수수료율 (ETF/ETN)
        this.exchangeFee_elw = 0.015 / 100;          //--- 매매 수수료율 (ELW)
        this.exchangeFee_kotc = 0.15 / 100;          //--- 매매 수수료율 (K-OTC)
        this.relateFee = 0.0036396 / 100;            //--- 유관기관 수수료율
    
        this.specialTax = 0.15 / 100;                //--- 농어촌특별세율 : 0.15%
        this.investTax = 0.0;                        //--- 금융투자소득세율 (2025년 도입 예정)
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
        const depositFee: number = (total < 500000) ? 0.4:1.0; 
        return Math.floor(total * depositFee / 100);
    }
}

export default EBestAccounting;
