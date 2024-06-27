/**
 * LS증권 Accounting (회계)
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

            //--- To-Do : 추가 확인 필요
            //---     개인 : 매매 수수료 없음, 유관기관 수수료 있음 (2024-04-29 확인), 단 언제 수수료가 다시 생기는지는 확인 필요
            //---     법인 : 매매 수수료 있음, 유관기관 수수료 없음 (2024-04-29 확인), 단 언제 수수료가 다시 생기는지는 확인 필요
            default: 0.015 / 100,       //--- 매매 수수료율 (코스피/코스닥/코넥스, ELW)
            kotc: 0.15 / 100            //--- 매매 수수료율 (K-OTC)

            //--- To-Do : 수수료 계산한 값과 실제 수수료값이 다름. 우대 수수료가 언제까지 적용되는지 확인 불가
            //--- 비대면개설 신규 고객 1년 우대 수수료
            // default: 0.0036396 / 100,   //--- 매매 수수료율 (코스피/코스닥/코넥스, ELW)
            // kotc: 0.0999187 / 100,      //--- 매매 수수료율 (K-OTC)
            // etf: 0.0042087 / 100,       //--- 매매 수수료율 (ETF)
            // etn: 0.0042087 / 100,       //--- 매매 수수료율 (ETN)
            // elw: 0.0042087 / 100,       //--- 매매 수수료율 (ELW)
        };
    }

    /**
     * 세금 계산
     *     1원 아래는 버림 (2024.06.27 확인)
     *     To-Do: 거래세와 농특세를 합한 후 버리는지, 각각을 버린 후 합하는지 확인 필요
     */
    public tax(_purchaseTotal: number, saleTotal: number, yyyy: string = moment().format('YYYY'), type: string = '', userType: string = ''): number {
        const fee = this.taxRate(yyyy, type, userType);
        return Math.floor(saleTotal * fee);
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
        const rate = ((total < 500000) ? 1.0:0.4) / 100;
        return Math.floor(total * rate * (duration / 365));
    }
}

export default EBestAccounting;
