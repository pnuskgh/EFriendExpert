/**
 * LS증권 EBest REST API
 *     자동 생성되는 소스이니 수정하지 마세요.
 * 
 * @file packages/EFriendExpert/ebest/ebestRest.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2024, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { Secret, EBestRestConfig } from './ebest.type.js';
import * as typeRest from './ebest_api.type.js';
import EBestRestBase from './ebestRestBase.js';
 
export class EBestRest extends EBestRestBase {
    constructor({ logger }: EBestRestConfig) {
        super({ logger });
    }

    
    /**
     * @description 접근토큰 발급
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TOKEN_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TOKEN_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TOKEN_RESPONSE} response               응답
     * @returns {typeRest.TOKEN_RESPONSE}
     */
    public async token(
        secret: Secret, requestHeader: typeRest.TOKEN_REQUEST_HEADER, requestBody: typeRest.TOKEN_REQUEST_BODY, 
        response: typeRest.TOKEN_RESPONSE | null = null): Promise<typeRest.TOKEN_RESPONSE> {
            return await this.request(secret, 'token', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 접근토큰 폐기
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.REVOKE_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.REVOKE_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.REVOKE_RESPONSE} response               응답
     * @returns {typeRest.REVOKE_RESPONSE}
     */
    public async revoke(
        secret: Secret, requestHeader: typeRest.REVOKE_REQUEST_HEADER, requestBody: typeRest.REVOKE_REQUEST_BODY, 
        response: typeRest.REVOKE_RESPONSE | null = null): Promise<typeRest.REVOKE_RESPONSE> {
            return await this.request(secret, 'revoke', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 계좌 거래내역
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CDPCQ04700_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CDPCQ04700_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CDPCQ04700_RESPONSE} response               응답
     * @returns {typeRest.CDPCQ04700_RESPONSE}
     */
    public async CDPCQ04700(
        secret: Secret, requestHeader: typeRest.CDPCQ04700_REQUEST_HEADER, requestBody: typeRest.CDPCQ04700_REQUEST_BODY, 
        response: typeRest.CDPCQ04700_RESPONSE | null = null): Promise<typeRest.CDPCQ04700_RESPONSE> {
            return await this.request(secret, 'CDPCQ04700', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 현물주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CSPAT00601_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CSPAT00601_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CSPAT00601_RESPONSE} response               응답
     * @returns {typeRest.CSPAT00601_RESPONSE}
     */
    public async CSPAT00601(
        secret: Secret, requestHeader: typeRest.CSPAT00601_REQUEST_HEADER, requestBody: typeRest.CSPAT00601_REQUEST_BODY, 
        response: typeRest.CSPAT00601_RESPONSE | null = null): Promise<typeRest.CSPAT00601_RESPONSE> {
            return await this.request(secret, 'CSPAT00601', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 현물정정주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CSPAT00701_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CSPAT00701_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CSPAT00701_RESPONSE} response               응답
     * @returns {typeRest.CSPAT00701_RESPONSE}
     */
    public async CSPAT00701(
        secret: Secret, requestHeader: typeRest.CSPAT00701_REQUEST_HEADER, requestBody: typeRest.CSPAT00701_REQUEST_BODY, 
        response: typeRest.CSPAT00701_RESPONSE | null = null): Promise<typeRest.CSPAT00701_RESPONSE> {
            return await this.request(secret, 'CSPAT00701', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 현물취소주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CSPAT00801_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CSPAT00801_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CSPAT00801_RESPONSE} response               응답
     * @returns {typeRest.CSPAT00801_RESPONSE}
     */
    public async CSPAT00801(
        secret: Secret, requestHeader: typeRest.CSPAT00801_REQUEST_HEADER, requestBody: typeRest.CSPAT00801_REQUEST_BODY, 
        response: typeRest.CSPAT00801_RESPONSE | null = null): Promise<typeRest.CSPAT00801_RESPONSE> {
            return await this.request(secret, 'CSPAT00801', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 현물계좌예수금 주문가능금액 총평가 조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CSPAQ12200_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CSPAQ12200_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CSPAQ12200_RESPONSE} response               응답
     * @returns {typeRest.CSPAQ12200_RESPONSE}
     */
    public async CSPAQ12200(
        secret: Secret, requestHeader: typeRest.CSPAQ12200_REQUEST_HEADER, requestBody: typeRest.CSPAQ12200_REQUEST_BODY, 
        response: typeRest.CSPAQ12200_RESPONSE | null = null): Promise<typeRest.CSPAQ12200_RESPONSE> {
            return await this.request(secret, 'CSPAQ12200', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 현물계좌 주문체결내역 조회(API)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CSPAQ13700_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CSPAQ13700_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CSPAQ13700_RESPONSE} response               응답
     * @returns {typeRest.CSPAQ13700_RESPONSE}
     */
    public async CSPAQ13700(
        secret: Secret, requestHeader: typeRest.CSPAQ13700_REQUEST_HEADER, requestBody: typeRest.CSPAQ13700_REQUEST_BODY, 
        response: typeRest.CSPAQ13700_RESPONSE | null = null): Promise<typeRest.CSPAQ13700_RESPONSE> {
            return await this.request(secret, 'CSPAQ13700', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 현물계좌증거금률별주문가능수량조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CSPBQ00200_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CSPBQ00200_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CSPBQ00200_RESPONSE} response               응답
     * @returns {typeRest.CSPBQ00200_RESPONSE}
     */
    public async CSPBQ00200(
        secret: Secret, requestHeader: typeRest.CSPBQ00200_REQUEST_HEADER, requestBody: typeRest.CSPBQ00200_REQUEST_BODY, 
        response: typeRest.CSPBQ00200_RESPONSE | null = null): Promise<typeRest.CSPBQ00200_RESPONSE> {
            return await this.request(secret, 'CSPBQ00200', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식당일매매일지/수수료
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T0150_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T0150_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T0150_RESPONSE} response               응답
     * @returns {typeRest.T0150_RESPONSE}
     */
    public async t0150(
        secret: Secret, requestHeader: typeRest.T0150_REQUEST_HEADER, requestBody: typeRest.T0150_REQUEST_BODY, 
        response: typeRest.T0150_RESPONSE | null = null): Promise<typeRest.T0150_RESPONSE> {
            return await this.request(secret, 't0150', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식당일매매일지/수수료(전일)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T0151_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T0151_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T0151_RESPONSE} response               응답
     * @returns {typeRest.T0151_RESPONSE}
     */
    public async t0151(
        secret: Secret, requestHeader: typeRest.T0151_REQUEST_HEADER, requestBody: typeRest.T0151_REQUEST_BODY, 
        response: typeRest.T0151_RESPONSE | null = null): Promise<typeRest.T0151_RESPONSE> {
            return await this.request(secret, 't0151', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식현재가(시세)조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1102_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1102_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1102_RESPONSE} response               응답
     * @returns {typeRest.T1102_RESPONSE}
     */
    public async t1102(
        secret: Secret, requestHeader: typeRest.T1102_REQUEST_HEADER, requestBody: typeRest.T1102_REQUEST_BODY, 
        response: typeRest.T1102_RESPONSE | null = null): Promise<typeRest.T1102_RESPONSE> {
            return await this.request(secret, 't1102', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 기간별주가
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1305_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1305_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1305_RESPONSE} response               응답
     * @returns {typeRest.T1305_RESPONSE}
     */
    public async t1305(
        secret: Secret, requestHeader: typeRest.T1305_REQUEST_HEADER, requestBody: typeRest.T1305_REQUEST_BODY, 
        response: typeRest.T1305_RESPONSE | null = null): Promise<typeRest.T1305_RESPONSE> {
            return await this.request(secret, 't1305', requestHeader, requestBody, response);
        }
                    
    /**
     * @description API전용주식챠트(일주월년)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T8410_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T8410_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T8410_RESPONSE} response               응답
     * @returns {typeRest.T8410_RESPONSE}
     */
    public async t8410(
        secret: Secret, requestHeader: typeRest.T8410_REQUEST_HEADER, requestBody: typeRest.T8410_REQUEST_BODY, 
        response: typeRest.T8410_RESPONSE | null = null): Promise<typeRest.T8410_RESPONSE> {
            return await this.request(secret, 't8410', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식잔고2
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T0424_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T0424_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T0424_RESPONSE} response               응답
     * @returns {typeRest.T0424_RESPONSE}
     */
    public async t0424(
        secret: Secret, requestHeader: typeRest.T0424_REQUEST_HEADER, requestBody: typeRest.T0424_REQUEST_BODY, 
        response: typeRest.T0424_RESPONSE | null = null): Promise<typeRest.T0424_RESPONSE> {
            return await this.request(secret, 't0424', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식체결/미체결
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T0425_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T0425_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T0425_RESPONSE} response               응답
     * @returns {typeRest.T0425_RESPONSE}
     */
    public async t0425(
        secret: Secret, requestHeader: typeRest.T0425_REQUEST_HEADER, requestBody: typeRest.T0425_REQUEST_BODY, 
        response: typeRest.T0425_RESPONSE | null = null): Promise<typeRest.T0425_RESPONSE> {
            return await this.request(secret, 't0425', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식종목조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T8430_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T8430_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T8430_RESPONSE} response               응답
     * @returns {typeRest.T8430_RESPONSE}
     */
    public async t8430(
        secret: Secret, requestHeader: typeRest.T8430_REQUEST_HEADER, requestBody: typeRest.T8430_REQUEST_BODY, 
        response: typeRest.T8430_RESPONSE | null = null): Promise<typeRest.T8430_RESPONSE> {
            return await this.request(secret, 't8430', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식종목조회 API용
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T8436_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T8436_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T8436_RESPONSE} response               응답
     * @returns {typeRest.T8436_RESPONSE}
     */
    public async t8436(
        secret: Secret, requestHeader: typeRest.T8436_REQUEST_HEADER, requestBody: typeRest.T8436_REQUEST_BODY, 
        response: typeRest.T8436_RESPONSE | null = null): Promise<typeRest.T8436_RESPONSE> {
            return await this.request(secret, 't8436', requestHeader, requestBody, response);
        }
                    
}

export default EBestRest;
