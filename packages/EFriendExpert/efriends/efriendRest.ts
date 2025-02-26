/**
 * 한국투자증권 EFriendExpert REST API
 *     자동 생성되는 소스이니 수정하지 마세요.
 * 
 * @file packages/EFriendExpert/efriends/efriendRest.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2025, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { Secret, EFriendRestConfig } from './efriend.type.js';
import * as typeRest from './efriend_api.type.js';
import EFriendRestBase from './efriendRestBase.js';
 
export class EFriendRest extends EFriendRestBase {
    constructor({ logger }: EFriendRestConfig) {
        super({ logger });
    }

    
    /**
     * @description 실시간 (웹소켓) 접속키 발급
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.APPROVAL_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.APPROVAL_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.APPROVAL_RESPONSE} response               응답
     * @returns {typeRest.APPROVAL_RESPONSE}
     */
    public async Approval(
        secret: Secret, requestHeader: typeRest.APPROVAL_REQUEST_HEADER, requestBody: typeRest.APPROVAL_REQUEST_BODY, 
        response: typeRest.APPROVAL_RESPONSE | null = null): Promise<typeRest.APPROVAL_RESPONSE> {
            return await this.request(secret, 'Approval', requestHeader, requestBody, response);
        }
                    
    /**
     * @description Hashkey
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HASHKEY_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HASHKEY_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HASHKEY_RESPONSE} response               응답
     * @returns {typeRest.HASHKEY_RESPONSE}
     */
    public async hashkey(
        secret: Secret, requestHeader: typeRest.HASHKEY_REQUEST_HEADER, requestBody: typeRest.HASHKEY_REQUEST_BODY, 
        response: typeRest.HASHKEY_RESPONSE | null = null): Promise<typeRest.HASHKEY_RESPONSE> {
            return await this.request(secret, 'hashkey', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 접근토큰발급(P)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TOKENP_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TOKENP_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TOKENP_RESPONSE} response               응답
     * @returns {typeRest.TOKENP_RESPONSE}
     */
    public async tokenP(
        secret: Secret, requestHeader: typeRest.TOKENP_REQUEST_HEADER, requestBody: typeRest.TOKENP_REQUEST_BODY, 
        response: typeRest.TOKENP_RESPONSE | null = null): Promise<typeRest.TOKENP_RESPONSE> {
            return await this.request(secret, 'tokenP', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 접근토큰폐기(P)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.REVOKEP_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.REVOKEP_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.REVOKEP_RESPONSE} response               응답
     * @returns {typeRest.REVOKEP_RESPONSE}
     */
    public async revokeP(
        secret: Secret, requestHeader: typeRest.REVOKEP_REQUEST_HEADER, requestBody: typeRest.REVOKEP_REQUEST_BODY, 
        response: typeRest.REVOKEP_RESPONSE | null = null): Promise<typeRest.REVOKEP_RESPONSE> {
            return await this.request(secret, 'revokeP', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식주문(현금)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTC0802U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC0802U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC0802U_RESPONSE} response               응답
     * @returns {typeRest.TTTC0802U_RESPONSE}
     */
    public async TTTC0802U(
        secret: Secret, requestHeader: typeRest.TTTC0802U_REQUEST_HEADER, requestBody: typeRest.TTTC0802U_REQUEST_BODY, 
        response: typeRest.TTTC0802U_RESPONSE | null = null): Promise<typeRest.TTTC0802U_RESPONSE> {
            return await this.request(secret, 'TTTC0802U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식주문(현금)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTC0801U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC0801U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC0801U_RESPONSE} response               응답
     * @returns {typeRest.TTTC0801U_RESPONSE}
     */
    public async TTTC0801U(
        secret: Secret, requestHeader: typeRest.TTTC0801U_REQUEST_HEADER, requestBody: typeRest.TTTC0801U_REQUEST_BODY, 
        response: typeRest.TTTC0801U_RESPONSE | null = null): Promise<typeRest.TTTC0801U_RESPONSE> {
            return await this.request(secret, 'TTTC0801U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식주문(현금)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTTC0802U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTC0802U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTC0802U_RESPONSE} response               응답
     * @returns {typeRest.VTTC0802U_RESPONSE}
     */
    public async VTTC0802U(
        secret: Secret, requestHeader: typeRest.VTTC0802U_REQUEST_HEADER, requestBody: typeRest.VTTC0802U_REQUEST_BODY, 
        response: typeRest.VTTC0802U_RESPONSE | null = null): Promise<typeRest.VTTC0802U_RESPONSE> {
            return await this.request(secret, 'VTTC0802U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식주문(현금)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTTC0801U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTC0801U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTC0801U_RESPONSE} response               응답
     * @returns {typeRest.VTTC0801U_RESPONSE}
     */
    public async VTTC0801U(
        secret: Secret, requestHeader: typeRest.VTTC0801U_REQUEST_HEADER, requestBody: typeRest.VTTC0801U_REQUEST_BODY, 
        response: typeRest.VTTC0801U_RESPONSE | null = null): Promise<typeRest.VTTC0801U_RESPONSE> {
            return await this.request(secret, 'VTTC0801U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식주문(신용)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTC0852U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC0852U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC0852U_RESPONSE} response               응답
     * @returns {typeRest.TTTC0852U_RESPONSE}
     */
    public async TTTC0852U(
        secret: Secret, requestHeader: typeRest.TTTC0852U_REQUEST_HEADER, requestBody: typeRest.TTTC0852U_REQUEST_BODY, 
        response: typeRest.TTTC0852U_RESPONSE | null = null): Promise<typeRest.TTTC0852U_RESPONSE> {
            return await this.request(secret, 'TTTC0852U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식주문(신용)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTC0851U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC0851U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC0851U_RESPONSE} response               응답
     * @returns {typeRest.TTTC0851U_RESPONSE}
     */
    public async TTTC0851U(
        secret: Secret, requestHeader: typeRest.TTTC0851U_REQUEST_HEADER, requestBody: typeRest.TTTC0851U_REQUEST_BODY, 
        response: typeRest.TTTC0851U_RESPONSE | null = null): Promise<typeRest.TTTC0851U_RESPONSE> {
            return await this.request(secret, 'TTTC0851U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식주문(정정취소)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTC0803U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC0803U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC0803U_RESPONSE} response               응답
     * @returns {typeRest.TTTC0803U_RESPONSE}
     */
    public async TTTC0803U(
        secret: Secret, requestHeader: typeRest.TTTC0803U_REQUEST_HEADER, requestBody: typeRest.TTTC0803U_REQUEST_BODY, 
        response: typeRest.TTTC0803U_RESPONSE | null = null): Promise<typeRest.TTTC0803U_RESPONSE> {
            return await this.request(secret, 'TTTC0803U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식주문(정정취소)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTTC0803U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTC0803U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTC0803U_RESPONSE} response               응답
     * @returns {typeRest.VTTC0803U_RESPONSE}
     */
    public async VTTC0803U(
        secret: Secret, requestHeader: typeRest.VTTC0803U_REQUEST_HEADER, requestBody: typeRest.VTTC0803U_REQUEST_BODY, 
        response: typeRest.VTTC0803U_RESPONSE | null = null): Promise<typeRest.VTTC0803U_RESPONSE> {
            return await this.request(secret, 'VTTC0803U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식정정취소가능주문조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTC8036R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC8036R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC8036R_RESPONSE} response               응답
     * @returns {typeRest.TTTC8036R_RESPONSE}
     */
    public async TTTC8036R(
        secret: Secret, requestHeader: typeRest.TTTC8036R_REQUEST_HEADER, requestBody: typeRest.TTTC8036R_REQUEST_BODY, 
        response: typeRest.TTTC8036R_RESPONSE | null = null): Promise<typeRest.TTTC8036R_RESPONSE> {
            return await this.request(secret, 'TTTC8036R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식일별주문체결조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTC8001R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC8001R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC8001R_RESPONSE} response               응답
     * @returns {typeRest.TTTC8001R_RESPONSE}
     */
    public async TTTC8001R(
        secret: Secret, requestHeader: typeRest.TTTC8001R_REQUEST_HEADER, requestBody: typeRest.TTTC8001R_REQUEST_BODY, 
        response: typeRest.TTTC8001R_RESPONSE | null = null): Promise<typeRest.TTTC8001R_RESPONSE> {
            return await this.request(secret, 'TTTC8001R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식일별주문체결조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CTSC9115R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTSC9115R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTSC9115R_RESPONSE} response               응답
     * @returns {typeRest.CTSC9115R_RESPONSE}
     */
    public async CTSC9115R(
        secret: Secret, requestHeader: typeRest.CTSC9115R_REQUEST_HEADER, requestBody: typeRest.CTSC9115R_REQUEST_BODY, 
        response: typeRest.CTSC9115R_RESPONSE | null = null): Promise<typeRest.CTSC9115R_RESPONSE> {
            return await this.request(secret, 'CTSC9115R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식일별주문체결조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTTC8001R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTC8001R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTC8001R_RESPONSE} response               응답
     * @returns {typeRest.VTTC8001R_RESPONSE}
     */
    public async VTTC8001R(
        secret: Secret, requestHeader: typeRest.VTTC8001R_REQUEST_HEADER, requestBody: typeRest.VTTC8001R_REQUEST_BODY, 
        response: typeRest.VTTC8001R_RESPONSE | null = null): Promise<typeRest.VTTC8001R_RESPONSE> {
            return await this.request(secret, 'VTTC8001R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식일별주문체결조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTSC9115R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTSC9115R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTSC9115R_RESPONSE} response               응답
     * @returns {typeRest.VTSC9115R_RESPONSE}
     */
    public async VTSC9115R(
        secret: Secret, requestHeader: typeRest.VTSC9115R_REQUEST_HEADER, requestBody: typeRest.VTSC9115R_REQUEST_BODY, 
        response: typeRest.VTSC9115R_RESPONSE | null = null): Promise<typeRest.VTSC9115R_RESPONSE> {
            return await this.request(secret, 'VTSC9115R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식잔고조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTC8434R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC8434R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC8434R_RESPONSE} response               응답
     * @returns {typeRest.TTTC8434R_RESPONSE}
     */
    public async TTTC8434R(
        secret: Secret, requestHeader: typeRest.TTTC8434R_REQUEST_HEADER, requestBody: typeRest.TTTC8434R_REQUEST_BODY, 
        response: typeRest.TTTC8434R_RESPONSE | null = null): Promise<typeRest.TTTC8434R_RESPONSE> {
            return await this.request(secret, 'TTTC8434R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식잔고조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTTC8434R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTC8434R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTC8434R_RESPONSE} response               응답
     * @returns {typeRest.VTTC8434R_RESPONSE}
     */
    public async VTTC8434R(
        secret: Secret, requestHeader: typeRest.VTTC8434R_REQUEST_HEADER, requestBody: typeRest.VTTC8434R_REQUEST_BODY, 
        response: typeRest.VTTC8434R_RESPONSE | null = null): Promise<typeRest.VTTC8434R_RESPONSE> {
            return await this.request(secret, 'VTTC8434R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 매수가능조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTC8908R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC8908R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC8908R_RESPONSE} response               응답
     * @returns {typeRest.TTTC8908R_RESPONSE}
     */
    public async TTTC8908R(
        secret: Secret, requestHeader: typeRest.TTTC8908R_REQUEST_HEADER, requestBody: typeRest.TTTC8908R_REQUEST_BODY, 
        response: typeRest.TTTC8908R_RESPONSE | null = null): Promise<typeRest.TTTC8908R_RESPONSE> {
            return await this.request(secret, 'TTTC8908R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 매수가능조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTTC8908R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTC8908R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTC8908R_RESPONSE} response               응답
     * @returns {typeRest.VTTC8908R_RESPONSE}
     */
    public async VTTC8908R(
        secret: Secret, requestHeader: typeRest.VTTC8908R_REQUEST_HEADER, requestBody: typeRest.VTTC8908R_REQUEST_BODY, 
        response: typeRest.VTTC8908R_RESPONSE | null = null): Promise<typeRest.VTTC8908R_RESPONSE> {
            return await this.request(secret, 'VTTC8908R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식예약주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CTSC0008U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTSC0008U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTSC0008U_RESPONSE} response               응답
     * @returns {typeRest.CTSC0008U_RESPONSE}
     */
    public async CTSC0008U(
        secret: Secret, requestHeader: typeRest.CTSC0008U_REQUEST_HEADER, requestBody: typeRest.CTSC0008U_REQUEST_BODY, 
        response: typeRest.CTSC0008U_RESPONSE | null = null): Promise<typeRest.CTSC0008U_RESPONSE> {
            return await this.request(secret, 'CTSC0008U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식예약주문정정취소
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CTSC0009U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTSC0009U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTSC0009U_RESPONSE} response               응답
     * @returns {typeRest.CTSC0009U_RESPONSE}
     */
    public async CTSC0009U(
        secret: Secret, requestHeader: typeRest.CTSC0009U_REQUEST_HEADER, requestBody: typeRest.CTSC0009U_REQUEST_BODY, 
        response: typeRest.CTSC0009U_RESPONSE | null = null): Promise<typeRest.CTSC0009U_RESPONSE> {
            return await this.request(secret, 'CTSC0009U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식예약주문정정취소
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CTSC0013U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTSC0013U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTSC0013U_RESPONSE} response               응답
     * @returns {typeRest.CTSC0013U_RESPONSE}
     */
    public async CTSC0013U(
        secret: Secret, requestHeader: typeRest.CTSC0013U_REQUEST_HEADER, requestBody: typeRest.CTSC0013U_REQUEST_BODY, 
        response: typeRest.CTSC0013U_RESPONSE | null = null): Promise<typeRest.CTSC0013U_RESPONSE> {
            return await this.request(secret, 'CTSC0013U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식예약주문조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CTSC0004R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTSC0004R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTSC0004R_RESPONSE} response               응답
     * @returns {typeRest.CTSC0004R_RESPONSE}
     */
    public async CTSC0004R(
        secret: Secret, requestHeader: typeRest.CTSC0004R_REQUEST_HEADER, requestBody: typeRest.CTSC0004R_REQUEST_BODY, 
        response: typeRest.CTSC0004R_RESPONSE | null = null): Promise<typeRest.CTSC0004R_RESPONSE> {
            return await this.request(secret, 'CTSC0004R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 퇴직연금 체결기준잔고
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTC2202R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC2202R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC2202R_RESPONSE} response               응답
     * @returns {typeRest.TTTC2202R_RESPONSE}
     */
    public async TTTC2202R(
        secret: Secret, requestHeader: typeRest.TTTC2202R_REQUEST_HEADER, requestBody: typeRest.TTTC2202R_REQUEST_BODY, 
        response: typeRest.TTTC2202R_RESPONSE | null = null): Promise<typeRest.TTTC2202R_RESPONSE> {
            return await this.request(secret, 'TTTC2202R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 퇴직연금 미체결내역
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTC2201R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC2201R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC2201R_RESPONSE} response               응답
     * @returns {typeRest.TTTC2201R_RESPONSE}
     */
    public async TTTC2201R(
        secret: Secret, requestHeader: typeRest.TTTC2201R_REQUEST_HEADER, requestBody: typeRest.TTTC2201R_REQUEST_BODY, 
        response: typeRest.TTTC2201R_RESPONSE | null = null): Promise<typeRest.TTTC2201R_RESPONSE> {
            return await this.request(secret, 'TTTC2201R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 퇴직연금 매수가능조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTC0503R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC0503R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC0503R_RESPONSE} response               응답
     * @returns {typeRest.TTTC0503R_RESPONSE}
     */
    public async TTTC0503R(
        secret: Secret, requestHeader: typeRest.TTTC0503R_REQUEST_HEADER, requestBody: typeRest.TTTC0503R_REQUEST_BODY, 
        response: typeRest.TTTC0503R_RESPONSE | null = null): Promise<typeRest.TTTC0503R_RESPONSE> {
            return await this.request(secret, 'TTTC0503R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 퇴직연금 예수금조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTC0506R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC0506R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC0506R_RESPONSE} response               응답
     * @returns {typeRest.TTTC0506R_RESPONSE}
     */
    public async TTTC0506R(
        secret: Secret, requestHeader: typeRest.TTTC0506R_REQUEST_HEADER, requestBody: typeRest.TTTC0506R_REQUEST_BODY, 
        response: typeRest.TTTC0506R_RESPONSE | null = null): Promise<typeRest.TTTC0506R_RESPONSE> {
            return await this.request(secret, 'TTTC0506R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 퇴직연금 잔고조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTC2208R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC2208R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC2208R_RESPONSE} response               응답
     * @returns {typeRest.TTTC2208R_RESPONSE}
     */
    public async TTTC2208R(
        secret: Secret, requestHeader: typeRest.TTTC2208R_REQUEST_HEADER, requestBody: typeRest.TTTC2208R_REQUEST_BODY, 
        response: typeRest.TTTC2208R_RESPONSE | null = null): Promise<typeRest.TTTC2208R_RESPONSE> {
            return await this.request(secret, 'TTTC2208R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식잔고조회_실현손익
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTC8494R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC8494R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC8494R_RESPONSE} response               응답
     * @returns {typeRest.TTTC8494R_RESPONSE}
     */
    public async TTTC8494R(
        secret: Secret, requestHeader: typeRest.TTTC8494R_REQUEST_HEADER, requestBody: typeRest.TTTC8494R_REQUEST_BODY, 
        response: typeRest.TTTC8494R_RESPONSE | null = null): Promise<typeRest.TTTC8494R_RESPONSE> {
            return await this.request(secret, 'TTTC8494R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 신용매수가능조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTC8909R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC8909R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC8909R_RESPONSE} response               응답
     * @returns {typeRest.TTTC8909R_RESPONSE}
     */
    public async TTTC8909R(
        secret: Secret, requestHeader: typeRest.TTTC8909R_REQUEST_HEADER, requestBody: typeRest.TTTC8909R_REQUEST_BODY, 
        response: typeRest.TTTC8909R_RESPONSE | null = null): Promise<typeRest.TTTC8909R_RESPONSE> {
            return await this.request(secret, 'TTTC8909R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 투자계좌자산현황조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CTRP6548R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTRP6548R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTRP6548R_RESPONSE} response               응답
     * @returns {typeRest.CTRP6548R_RESPONSE}
     */
    public async CTRP6548R(
        secret: Secret, requestHeader: typeRest.CTRP6548R_REQUEST_HEADER, requestBody: typeRest.CTRP6548R_REQUEST_BODY, 
        response: typeRest.CTRP6548R_RESPONSE | null = null): Promise<typeRest.CTRP6548R_RESPONSE> {
            return await this.request(secret, 'CTRP6548R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 기간별매매손익현황조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTC8715R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC8715R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC8715R_RESPONSE} response               응답
     * @returns {typeRest.TTTC8715R_RESPONSE}
     */
    public async TTTC8715R(
        secret: Secret, requestHeader: typeRest.TTTC8715R_REQUEST_HEADER, requestBody: typeRest.TTTC8715R_REQUEST_BODY, 
        response: typeRest.TTTC8715R_RESPONSE | null = null): Promise<typeRest.TTTC8715R_RESPONSE> {
            return await this.request(secret, 'TTTC8715R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 기간별손익일별합산조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTC8708R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC8708R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC8708R_RESPONSE} response               응답
     * @returns {typeRest.TTTC8708R_RESPONSE}
     */
    public async TTTC8708R(
        secret: Secret, requestHeader: typeRest.TTTC8708R_REQUEST_HEADER, requestBody: typeRest.TTTC8708R_REQUEST_BODY, 
        response: typeRest.TTTC8708R_RESPONSE | null = null): Promise<typeRest.TTTC8708R_RESPONSE> {
            return await this.request(secret, 'TTTC8708R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 매도가능수량조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTC8408R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC8408R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC8408R_RESPONSE} response               응답
     * @returns {typeRest.TTTC8408R_RESPONSE}
     */
    public async TTTC8408R(
        secret: Secret, requestHeader: typeRest.TTTC8408R_REQUEST_HEADER, requestBody: typeRest.TTTC8408R_REQUEST_BODY, 
        response: typeRest.TTTC8408R_RESPONSE | null = null): Promise<typeRest.TTTC8408R_RESPONSE> {
            return await this.request(secret, 'TTTC8408R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식통합증거금 현황
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTC0869R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC0869R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC0869R_RESPONSE} response               응답
     * @returns {typeRest.TTTC0869R_RESPONSE}
     */
    public async TTTC0869R(
        secret: Secret, requestHeader: typeRest.TTTC0869R_REQUEST_HEADER, requestBody: typeRest.TTTC0869R_REQUEST_BODY, 
        response: typeRest.TTTC0869R_RESPONSE | null = null): Promise<typeRest.TTTC0869R_RESPONSE> {
            return await this.request(secret, 'TTTC0869R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 기간별계좌권리현황조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CTRGA011R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTRGA011R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTRGA011R_RESPONSE} response               응답
     * @returns {typeRest.CTRGA011R_RESPONSE}
     */
    public async CTRGA011R(
        secret: Secret, requestHeader: typeRest.CTRGA011R_REQUEST_HEADER, requestBody: typeRest.CTRGA011R_REQUEST_BODY, 
        response: typeRest.CTRGA011R_RESPONSE | null = null): Promise<typeRest.CTRGA011R_RESPONSE> {
            return await this.request(secret, 'CTRGA011R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식현재가 시세
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKST01010100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST01010100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST01010100_RESPONSE} response               응답
     * @returns {typeRest.FHKST01010100_RESPONSE}
     */
    public async FHKST01010100(
        secret: Secret, requestHeader: typeRest.FHKST01010100_REQUEST_HEADER, requestBody: typeRest.FHKST01010100_REQUEST_BODY, 
        response: typeRest.FHKST01010100_RESPONSE | null = null): Promise<typeRest.FHKST01010100_RESPONSE> {
            return await this.request(secret, 'FHKST01010100', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식현재가 체결
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKST01010300_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST01010300_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST01010300_RESPONSE} response               응답
     * @returns {typeRest.FHKST01010300_RESPONSE}
     */
    public async FHKST01010300(
        secret: Secret, requestHeader: typeRest.FHKST01010300_REQUEST_HEADER, requestBody: typeRest.FHKST01010300_REQUEST_BODY, 
        response: typeRest.FHKST01010300_RESPONSE | null = null): Promise<typeRest.FHKST01010300_RESPONSE> {
            return await this.request(secret, 'FHKST01010300', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식현재가 일자별
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKST01010400_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST01010400_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST01010400_RESPONSE} response               응답
     * @returns {typeRest.FHKST01010400_RESPONSE}
     */
    public async FHKST01010400(
        secret: Secret, requestHeader: typeRest.FHKST01010400_REQUEST_HEADER, requestBody: typeRest.FHKST01010400_REQUEST_BODY, 
        response: typeRest.FHKST01010400_RESPONSE | null = null): Promise<typeRest.FHKST01010400_RESPONSE> {
            return await this.request(secret, 'FHKST01010400', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식현재가 호가/예상체결
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKST01010200_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST01010200_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST01010200_RESPONSE} response               응답
     * @returns {typeRest.FHKST01010200_RESPONSE}
     */
    public async FHKST01010200(
        secret: Secret, requestHeader: typeRest.FHKST01010200_REQUEST_HEADER, requestBody: typeRest.FHKST01010200_REQUEST_BODY, 
        response: typeRest.FHKST01010200_RESPONSE | null = null): Promise<typeRest.FHKST01010200_RESPONSE> {
            return await this.request(secret, 'FHKST01010200', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식현재가 투자자
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKST01010900_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST01010900_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST01010900_RESPONSE} response               응답
     * @returns {typeRest.FHKST01010900_RESPONSE}
     */
    public async FHKST01010900(
        secret: Secret, requestHeader: typeRest.FHKST01010900_REQUEST_HEADER, requestBody: typeRest.FHKST01010900_REQUEST_BODY, 
        response: typeRest.FHKST01010900_RESPONSE | null = null): Promise<typeRest.FHKST01010900_RESPONSE> {
            return await this.request(secret, 'FHKST01010900', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식현재가 회원사
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKST01010600_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST01010600_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST01010600_RESPONSE} response               응답
     * @returns {typeRest.FHKST01010600_RESPONSE}
     */
    public async FHKST01010600(
        secret: Secret, requestHeader: typeRest.FHKST01010600_REQUEST_HEADER, requestBody: typeRest.FHKST01010600_REQUEST_BODY, 
        response: typeRest.FHKST01010600_RESPONSE | null = null): Promise<typeRest.FHKST01010600_RESPONSE> {
            return await this.request(secret, 'FHKST01010600', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식기간별시세(일/주/월/년)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKST03010100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST03010100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST03010100_RESPONSE} response               응답
     * @returns {typeRest.FHKST03010100_RESPONSE}
     */
    public async FHKST03010100(
        secret: Secret, requestHeader: typeRest.FHKST03010100_REQUEST_HEADER, requestBody: typeRest.FHKST03010100_REQUEST_BODY, 
        response: typeRest.FHKST03010100_RESPONSE | null = null): Promise<typeRest.FHKST03010100_RESPONSE> {
            return await this.request(secret, 'FHKST03010100', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식현재가 당일시간대별체결
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST01060000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST01060000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST01060000_RESPONSE} response               응답
     * @returns {typeRest.FHPST01060000_RESPONSE}
     */
    public async FHPST01060000(
        secret: Secret, requestHeader: typeRest.FHPST01060000_REQUEST_HEADER, requestBody: typeRest.FHPST01060000_REQUEST_BODY, 
        response: typeRest.FHPST01060000_RESPONSE | null = null): Promise<typeRest.FHPST01060000_RESPONSE> {
            return await this.request(secret, 'FHPST01060000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식현재가 시간외시간별체결
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST02310000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST02310000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST02310000_RESPONSE} response               응답
     * @returns {typeRest.FHPST02310000_RESPONSE}
     */
    public async FHPST02310000(
        secret: Secret, requestHeader: typeRest.FHPST02310000_REQUEST_HEADER, requestBody: typeRest.FHPST02310000_REQUEST_BODY, 
        response: typeRest.FHPST02310000_RESPONSE | null = null): Promise<typeRest.FHPST02310000_RESPONSE> {
            return await this.request(secret, 'FHPST02310000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식현재가 시간외일자별주가
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST02320000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST02320000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST02320000_RESPONSE} response               응답
     * @returns {typeRest.FHPST02320000_RESPONSE}
     */
    public async FHPST02320000(
        secret: Secret, requestHeader: typeRest.FHPST02320000_REQUEST_HEADER, requestBody: typeRest.FHPST02320000_REQUEST_BODY, 
        response: typeRest.FHPST02320000_RESPONSE | null = null): Promise<typeRest.FHPST02320000_RESPONSE> {
            return await this.request(secret, 'FHPST02320000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식당일분봉조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKST03010200_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST03010200_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST03010200_RESPONSE} response               응답
     * @returns {typeRest.FHKST03010200_RESPONSE}
     */
    public async FHKST03010200(
        secret: Secret, requestHeader: typeRest.FHKST03010200_REQUEST_HEADER, requestBody: typeRest.FHKST03010200_REQUEST_BODY, 
        response: typeRest.FHKST03010200_RESPONSE | null = null): Promise<typeRest.FHKST03010200_RESPONSE> {
            return await this.request(secret, 'FHKST03010200', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식현재가 시세2
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST01010000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST01010000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST01010000_RESPONSE} response               응답
     * @returns {typeRest.FHPST01010000_RESPONSE}
     */
    public async FHPST01010000(
        secret: Secret, requestHeader: typeRest.FHPST01010000_REQUEST_HEADER, requestBody: typeRest.FHPST01010000_REQUEST_BODY, 
        response: typeRest.FHPST01010000_RESPONSE | null = null): Promise<typeRest.FHPST01010000_RESPONSE> {
            return await this.request(secret, 'FHPST01010000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ETF/ETN 현재가
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST02400000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST02400000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST02400000_RESPONSE} response               응답
     * @returns {typeRest.FHPST02400000_RESPONSE}
     */
    public async FHPST02400000(
        secret: Secret, requestHeader: typeRest.FHPST02400000_REQUEST_HEADER, requestBody: typeRest.FHPST02400000_REQUEST_BODY, 
        response: typeRest.FHPST02400000_RESPONSE | null = null): Promise<typeRest.FHPST02400000_RESPONSE> {
            return await this.request(secret, 'FHPST02400000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description NAV 비교추이(종목)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST02440000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST02440000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST02440000_RESPONSE} response               응답
     * @returns {typeRest.FHPST02440000_RESPONSE}
     */
    public async FHPST02440000(
        secret: Secret, requestHeader: typeRest.FHPST02440000_REQUEST_HEADER, requestBody: typeRest.FHPST02440000_REQUEST_BODY, 
        response: typeRest.FHPST02440000_RESPONSE | null = null): Promise<typeRest.FHPST02440000_RESPONSE> {
            return await this.request(secret, 'FHPST02440000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description NAV 비교추이(분)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST02440100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST02440100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST02440100_RESPONSE} response               응답
     * @returns {typeRest.FHPST02440100_RESPONSE}
     */
    public async FHPST02440100(
        secret: Secret, requestHeader: typeRest.FHPST02440100_REQUEST_HEADER, requestBody: typeRest.FHPST02440100_REQUEST_BODY, 
        response: typeRest.FHPST02440100_RESPONSE | null = null): Promise<typeRest.FHPST02440100_RESPONSE> {
            return await this.request(secret, 'FHPST02440100', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 장마감 예상체결가
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKST117300C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST117300C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST117300C0_RESPONSE} response               응답
     * @returns {typeRest.FHKST117300C0_RESPONSE}
     */
    public async FHKST117300C0(
        secret: Secret, requestHeader: typeRest.FHKST117300C0_REQUEST_HEADER, requestBody: typeRest.FHKST117300C0_REQUEST_BODY, 
        response: typeRest.FHKST117300C0_RESPONSE | null = null): Promise<typeRest.FHKST117300C0_RESPONSE> {
            return await this.request(secret, 'FHKST117300C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ETF 구성종목시세
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKST121600C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST121600C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST121600C0_RESPONSE} response               응답
     * @returns {typeRest.FHKST121600C0_RESPONSE}
     */
    public async FHKST121600C0(
        secret: Secret, requestHeader: typeRest.FHKST121600C0_REQUEST_HEADER, requestBody: typeRest.FHKST121600C0_REQUEST_BODY, 
        response: typeRest.FHKST121600C0_RESPONSE | null = null): Promise<typeRest.FHKST121600C0_RESPONSE> {
            return await this.request(secret, 'FHKST121600C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 시간외현재가
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST02300000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST02300000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST02300000_RESPONSE} response               응답
     * @returns {typeRest.FHPST02300000_RESPONSE}
     */
    public async FHPST02300000(
        secret: Secret, requestHeader: typeRest.FHPST02300000_REQUEST_HEADER, requestBody: typeRest.FHPST02300000_REQUEST_BODY, 
        response: typeRest.FHPST02300000_RESPONSE | null = null): Promise<typeRest.FHPST02300000_RESPONSE> {
            return await this.request(secret, 'FHPST02300000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 시간외호가
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST02300400_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST02300400_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST02300400_RESPONSE} response               응답
     * @returns {typeRest.FHPST02300400_RESPONSE}
     */
    public async FHPST02300400(
        secret: Secret, requestHeader: typeRest.FHPST02300400_REQUEST_HEADER, requestBody: typeRest.FHPST02300400_REQUEST_BODY, 
        response: typeRest.FHPST02300400_RESPONSE | null = null): Promise<typeRest.FHPST02300400_RESPONSE> {
            return await this.request(secret, 'FHPST02300400', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식일별분봉조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKST03010230_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST03010230_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST03010230_RESPONSE} response               응답
     * @returns {typeRest.FHKST03010230_RESPONSE}
     */
    public async FHKST03010230(
        secret: Secret, requestHeader: typeRest.FHKST03010230_REQUEST_HEADER, requestBody: typeRest.FHKST03010230_REQUEST_BODY, 
        response: typeRest.FHKST03010230_RESPONSE | null = null): Promise<typeRest.FHKST03010230_RESPONSE> {
            return await this.request(secret, 'FHKST03010230', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW현재가 시세
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKEW15010000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKEW15010000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKEW15010000_RESPONSE} response               응답
     * @returns {typeRest.FHKEW15010000_RESPONSE}
     */
    public async FHKEW15010000(
        secret: Secret, requestHeader: typeRest.FHKEW15010000_REQUEST_HEADER, requestBody: typeRest.FHKEW15010000_REQUEST_BODY, 
        response: typeRest.FHKEW15010000_RESPONSE | null = null): Promise<typeRest.FHKEW15010000_RESPONSE> {
            return await this.request(secret, 'FHKEW15010000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW 상승률순위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPEW02770000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPEW02770000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPEW02770000_RESPONSE} response               응답
     * @returns {typeRest.FHPEW02770000_RESPONSE}
     */
    public async FHPEW02770000(
        secret: Secret, requestHeader: typeRest.FHPEW02770000_REQUEST_HEADER, requestBody: typeRest.FHPEW02770000_REQUEST_BODY, 
        response: typeRest.FHPEW02770000_RESPONSE | null = null): Promise<typeRest.FHPEW02770000_RESPONSE> {
            return await this.request(secret, 'FHPEW02770000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW 거래량순위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPEW02780000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPEW02780000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPEW02780000_RESPONSE} response               응답
     * @returns {typeRest.FHPEW02780000_RESPONSE}
     */
    public async FHPEW02780000(
        secret: Secret, requestHeader: typeRest.FHPEW02780000_REQUEST_HEADER, requestBody: typeRest.FHPEW02780000_REQUEST_BODY, 
        response: typeRest.FHPEW02780000_RESPONSE | null = null): Promise<typeRest.FHPEW02780000_RESPONSE> {
            return await this.request(secret, 'FHPEW02780000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW 지표순위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPEW02790000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPEW02790000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPEW02790000_RESPONSE} response               응답
     * @returns {typeRest.FHPEW02790000_RESPONSE}
     */
    public async FHPEW02790000(
        secret: Secret, requestHeader: typeRest.FHPEW02790000_REQUEST_HEADER, requestBody: typeRest.FHPEW02790000_REQUEST_BODY, 
        response: typeRest.FHPEW02790000_RESPONSE | null = null): Promise<typeRest.FHPEW02790000_RESPONSE> {
            return await this.request(secret, 'FHPEW02790000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW 민감도 순위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPEW02850000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPEW02850000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPEW02850000_RESPONSE} response               응답
     * @returns {typeRest.FHPEW02850000_RESPONSE}
     */
    public async FHPEW02850000(
        secret: Secret, requestHeader: typeRest.FHPEW02850000_REQUEST_HEADER, requestBody: typeRest.FHPEW02850000_REQUEST_BODY, 
        response: typeRest.FHPEW02850000_RESPONSE | null = null): Promise<typeRest.FHPEW02850000_RESPONSE> {
            return await this.request(secret, 'FHPEW02850000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW 당일급변종목
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPEW02870000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPEW02870000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPEW02870000_RESPONSE} response               응답
     * @returns {typeRest.FHPEW02870000_RESPONSE}
     */
    public async FHPEW02870000(
        secret: Secret, requestHeader: typeRest.FHPEW02870000_REQUEST_HEADER, requestBody: typeRest.FHPEW02870000_REQUEST_BODY, 
        response: typeRest.FHPEW02870000_RESPONSE | null = null): Promise<typeRest.FHPEW02870000_RESPONSE> {
            return await this.request(secret, 'FHPEW02870000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW 변동성추이(체결)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPEW02840100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPEW02840100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPEW02840100_RESPONSE} response               응답
     * @returns {typeRest.FHPEW02840100_RESPONSE}
     */
    public async FHPEW02840100(
        secret: Secret, requestHeader: typeRest.FHPEW02840100_REQUEST_HEADER, requestBody: typeRest.FHPEW02840100_REQUEST_BODY, 
        response: typeRest.FHPEW02840100_RESPONSE | null = null): Promise<typeRest.FHPEW02840100_RESPONSE> {
            return await this.request(secret, 'FHPEW02840100', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW 신규상장종목
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKEW154800C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKEW154800C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKEW154800C0_RESPONSE} response               응답
     * @returns {typeRest.FHKEW154800C0_RESPONSE}
     */
    public async FHKEW154800C0(
        secret: Secret, requestHeader: typeRest.FHKEW154800C0_REQUEST_HEADER, requestBody: typeRest.FHKEW154800C0_REQUEST_BODY, 
        response: typeRest.FHKEW154800C0_RESPONSE | null = null): Promise<typeRest.FHKEW154800C0_RESPONSE> {
            return await this.request(secret, 'FHKEW154800C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW 변동성 추이(분별)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPEW02840300_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPEW02840300_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPEW02840300_RESPONSE} response               응답
     * @returns {typeRest.FHPEW02840300_RESPONSE}
     */
    public async FHPEW02840300(
        secret: Secret, requestHeader: typeRest.FHPEW02840300_REQUEST_HEADER, requestBody: typeRest.FHPEW02840300_REQUEST_BODY, 
        response: typeRest.FHPEW02840300_RESPONSE | null = null): Promise<typeRest.FHPEW02840300_RESPONSE> {
            return await this.request(secret, 'FHPEW02840300', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW 투자지표추이(체결)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPEW02740100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPEW02740100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPEW02740100_RESPONSE} response               응답
     * @returns {typeRest.FHPEW02740100_RESPONSE}
     */
    public async FHPEW02740100(
        secret: Secret, requestHeader: typeRest.FHPEW02740100_REQUEST_HEADER, requestBody: typeRest.FHPEW02740100_REQUEST_BODY, 
        response: typeRest.FHPEW02740100_RESPONSE | null = null): Promise<typeRest.FHPEW02740100_RESPONSE> {
            return await this.request(secret, 'FHPEW02740100', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW 투자지표추이(분별)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPEW02740300_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPEW02740300_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPEW02740300_RESPONSE} response               응답
     * @returns {typeRest.FHPEW02740300_RESPONSE}
     */
    public async FHPEW02740300(
        secret: Secret, requestHeader: typeRest.FHPEW02740300_REQUEST_HEADER, requestBody: typeRest.FHPEW02740300_REQUEST_BODY, 
        response: typeRest.FHPEW02740300_RESPONSE | null = null): Promise<typeRest.FHPEW02740300_RESPONSE> {
            return await this.request(secret, 'FHPEW02740300', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW 민감도 추이(체결)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPEW02830100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPEW02830100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPEW02830100_RESPONSE} response               응답
     * @returns {typeRest.FHPEW02830100_RESPONSE}
     */
    public async FHPEW02830100(
        secret: Secret, requestHeader: typeRest.FHPEW02830100_REQUEST_HEADER, requestBody: typeRest.FHPEW02830100_REQUEST_BODY, 
        response: typeRest.FHPEW02830100_RESPONSE | null = null): Promise<typeRest.FHPEW02830100_RESPONSE> {
            return await this.request(secret, 'FHPEW02830100', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW 변동성 추이(일별)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPEW02840200_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPEW02840200_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPEW02840200_RESPONSE} response               응답
     * @returns {typeRest.FHPEW02840200_RESPONSE}
     */
    public async FHPEW02840200(
        secret: Secret, requestHeader: typeRest.FHPEW02840200_REQUEST_HEADER, requestBody: typeRest.FHPEW02840200_REQUEST_BODY, 
        response: typeRest.FHPEW02840200_RESPONSE | null = null): Promise<typeRest.FHPEW02840200_RESPONSE> {
            return await this.request(secret, 'FHPEW02840200', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW 기초자산별 종목시세
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKEW154101C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKEW154101C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKEW154101C0_RESPONSE} response               응답
     * @returns {typeRest.FHKEW154101C0_RESPONSE}
     */
    public async FHKEW154101C0(
        secret: Secret, requestHeader: typeRest.FHKEW154101C0_REQUEST_HEADER, requestBody: typeRest.FHKEW154101C0_REQUEST_BODY, 
        response: typeRest.FHKEW154101C0_RESPONSE | null = null): Promise<typeRest.FHKEW154101C0_RESPONSE> {
            return await this.request(secret, 'FHKEW154101C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW 투자지표추이(일별)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPEW02740200_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPEW02740200_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPEW02740200_RESPONSE} response               응답
     * @returns {typeRest.FHPEW02740200_RESPONSE}
     */
    public async FHPEW02740200(
        secret: Secret, requestHeader: typeRest.FHPEW02740200_REQUEST_HEADER, requestBody: typeRest.FHPEW02740200_REQUEST_BODY, 
        response: typeRest.FHPEW02740200_RESPONSE | null = null): Promise<typeRest.FHPEW02740200_RESPONSE> {
            return await this.request(secret, 'FHPEW02740200', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW 민감도 추이(일별)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPEW02830200_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPEW02830200_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPEW02830200_RESPONSE} response               응답
     * @returns {typeRest.FHPEW02830200_RESPONSE}
     */
    public async FHPEW02830200(
        secret: Secret, requestHeader: typeRest.FHPEW02830200_REQUEST_HEADER, requestBody: typeRest.FHPEW02830200_REQUEST_BODY, 
        response: typeRest.FHPEW02830200_RESPONSE | null = null): Promise<typeRest.FHPEW02830200_RESPONSE> {
            return await this.request(secret, 'FHPEW02830200', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW 변동성 추이(틱)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPEW02840400_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPEW02840400_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPEW02840400_RESPONSE} response               응답
     * @returns {typeRest.FHPEW02840400_RESPONSE}
     */
    public async FHPEW02840400(
        secret: Secret, requestHeader: typeRest.FHPEW02840400_REQUEST_HEADER, requestBody: typeRest.FHPEW02840400_REQUEST_BODY, 
        response: typeRest.FHPEW02840400_RESPONSE | null = null): Promise<typeRest.FHPEW02840400_RESPONSE> {
            return await this.request(secret, 'FHPEW02840400', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW LP매매추이
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPEW03760000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPEW03760000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPEW03760000_RESPONSE} response               응답
     * @returns {typeRest.FHPEW03760000_RESPONSE}
     */
    public async FHPEW03760000(
        secret: Secret, requestHeader: typeRest.FHPEW03760000_REQUEST_HEADER, requestBody: typeRest.FHPEW03760000_REQUEST_BODY, 
        response: typeRest.FHPEW03760000_RESPONSE | null = null): Promise<typeRest.FHPEW03760000_RESPONSE> {
            return await this.request(secret, 'FHPEW03760000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW 비교대상종목조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKEW151701C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKEW151701C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKEW151701C0_RESPONSE} response               응답
     * @returns {typeRest.FHKEW151701C0_RESPONSE}
     */
    public async FHKEW151701C0(
        secret: Secret, requestHeader: typeRest.FHKEW151701C0_REQUEST_HEADER, requestBody: typeRest.FHKEW151701C0_REQUEST_BODY, 
        response: typeRest.FHKEW151701C0_RESPONSE | null = null): Promise<typeRest.FHKEW151701C0_RESPONSE> {
            return await this.request(secret, 'FHKEW151701C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW 종목검색
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKEW15100000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKEW15100000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKEW15100000_RESPONSE} response               응답
     * @returns {typeRest.FHKEW15100000_RESPONSE}
     */
    public async FHKEW15100000(
        secret: Secret, requestHeader: typeRest.FHKEW15100000_REQUEST_HEADER, requestBody: typeRest.FHKEW15100000_REQUEST_BODY, 
        response: typeRest.FHKEW15100000_RESPONSE | null = null): Promise<typeRest.FHKEW15100000_RESPONSE> {
            return await this.request(secret, 'FHKEW15100000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW 기초자산 목록조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKEW154100C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKEW154100C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKEW154100C0_RESPONSE} response               응답
     * @returns {typeRest.FHKEW154100C0_RESPONSE}
     */
    public async FHKEW154100C0(
        secret: Secret, requestHeader: typeRest.FHKEW154100C0_REQUEST_HEADER, requestBody: typeRest.FHKEW154100C0_REQUEST_BODY, 
        response: typeRest.FHKEW154100C0_RESPONSE | null = null): Promise<typeRest.FHKEW154100C0_RESPONSE> {
            return await this.request(secret, 'FHKEW154100C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW 만기예정/만기종목
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKEW154700C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKEW154700C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKEW154700C0_RESPONSE} response               응답
     * @returns {typeRest.FHKEW154700C0_RESPONSE}
     */
    public async FHKEW154700C0(
        secret: Secret, requestHeader: typeRest.FHKEW154700C0_REQUEST_HEADER, requestBody: typeRest.FHKEW154700C0_REQUEST_BODY, 
        response: typeRest.FHKEW154700C0_RESPONSE | null = null): Promise<typeRest.FHKEW154700C0_RESPONSE> {
            return await this.request(secret, 'FHKEW154700C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식업종기간별시세(일/주/월/년)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKUP03500100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKUP03500100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKUP03500100_RESPONSE} response               응답
     * @returns {typeRest.FHKUP03500100_RESPONSE}
     */
    public async FHKUP03500100(
        secret: Secret, requestHeader: typeRest.FHKUP03500100_REQUEST_HEADER, requestBody: typeRest.FHKUP03500100_REQUEST_BODY, 
        response: typeRest.FHKUP03500100_RESPONSE | null = null): Promise<typeRest.FHKUP03500100_RESPONSE> {
            return await this.request(secret, 'FHKUP03500100', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내휴장일조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CTCA0903R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTCA0903R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTCA0903R_RESPONSE} response               응답
     * @returns {typeRest.CTCA0903R_RESPONSE}
     */
    public async CTCA0903R(
        secret: Secret, requestHeader: typeRest.CTCA0903R_REQUEST_HEADER, requestBody: typeRest.CTCA0903R_REQUEST_BODY, 
        response: typeRest.CTCA0903R_RESPONSE | null = null): Promise<typeRest.CTCA0903R_RESPONSE> {
            return await this.request(secret, 'CTCA0903R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 업종 분봉조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKUP03500200_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKUP03500200_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKUP03500200_RESPONSE} response               응답
     * @returns {typeRest.FHKUP03500200_RESPONSE}
     */
    public async FHKUP03500200(
        secret: Secret, requestHeader: typeRest.FHKUP03500200_REQUEST_HEADER, requestBody: typeRest.FHKUP03500200_REQUEST_BODY, 
        response: typeRest.FHKUP03500200_RESPONSE | null = null): Promise<typeRest.FHKUP03500200_RESPONSE> {
            return await this.request(secret, 'FHKUP03500200', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 변동성완화장치(VI) 현황
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST01390000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST01390000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST01390000_RESPONSE} response               응답
     * @returns {typeRest.FHPST01390000_RESPONSE}
     */
    public async FHPST01390000(
        secret: Secret, requestHeader: typeRest.FHPST01390000_REQUEST_HEADER, requestBody: typeRest.FHPST01390000_REQUEST_BODY, 
        response: typeRest.FHPST01390000_RESPONSE | null = null): Promise<typeRest.FHPST01390000_RESPONSE> {
            return await this.request(secret, 'FHPST01390000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내업종 현재지수
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPUP02100000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPUP02100000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPUP02100000_RESPONSE} response               응답
     * @returns {typeRest.FHPUP02100000_RESPONSE}
     */
    public async FHPUP02100000(
        secret: Secret, requestHeader: typeRest.FHPUP02100000_REQUEST_HEADER, requestBody: typeRest.FHPUP02100000_REQUEST_BODY, 
        response: typeRest.FHPUP02100000_RESPONSE | null = null): Promise<typeRest.FHPUP02100000_RESPONSE> {
            return await this.request(secret, 'FHPUP02100000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내업종 일자별지수
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPUP02120000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPUP02120000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPUP02120000_RESPONSE} response               응답
     * @returns {typeRest.FHPUP02120000_RESPONSE}
     */
    public async FHPUP02120000(
        secret: Secret, requestHeader: typeRest.FHPUP02120000_REQUEST_HEADER, requestBody: typeRest.FHPUP02120000_REQUEST_BODY, 
        response: typeRest.FHPUP02120000_RESPONSE | null = null): Promise<typeRest.FHPUP02120000_RESPONSE> {
            return await this.request(secret, 'FHPUP02120000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내업종 구분별전체시세
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPUP02140000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPUP02140000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPUP02140000_RESPONSE} response               응답
     * @returns {typeRest.FHPUP02140000_RESPONSE}
     */
    public async FHPUP02140000(
        secret: Secret, requestHeader: typeRest.FHPUP02140000_REQUEST_HEADER, requestBody: typeRest.FHPUP02140000_REQUEST_BODY, 
        response: typeRest.FHPUP02140000_RESPONSE | null = null): Promise<typeRest.FHPUP02140000_RESPONSE> {
            return await this.request(secret, 'FHPUP02140000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 예상체결 전체지수
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKUP11750000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKUP11750000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKUP11750000_RESPONSE} response               응답
     * @returns {typeRest.FHKUP11750000_RESPONSE}
     */
    public async FHKUP11750000(
        secret: Secret, requestHeader: typeRest.FHKUP11750000_REQUEST_HEADER, requestBody: typeRest.FHKUP11750000_REQUEST_BODY, 
        response: typeRest.FHKUP11750000_RESPONSE | null = null): Promise<typeRest.FHKUP11750000_RESPONSE> {
            return await this.request(secret, 'FHKUP11750000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내업종 시간별지수(초)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPUP02110100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPUP02110100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPUP02110100_RESPONSE} response               응답
     * @returns {typeRest.FHPUP02110100_RESPONSE}
     */
    public async FHPUP02110100(
        secret: Secret, requestHeader: typeRest.FHPUP02110100_REQUEST_HEADER, requestBody: typeRest.FHPUP02110100_REQUEST_BODY, 
        response: typeRest.FHPUP02110100_RESPONSE | null = null): Promise<typeRest.FHPUP02110100_RESPONSE> {
            return await this.request(secret, 'FHPUP02110100', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내업종 시간별지수(분)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPUP02110200_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPUP02110200_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPUP02110200_RESPONSE} response               응답
     * @returns {typeRest.FHPUP02110200_RESPONSE}
     */
    public async FHPUP02110200(
        secret: Secret, requestHeader: typeRest.FHPUP02110200_REQUEST_HEADER, requestBody: typeRest.FHPUP02110200_REQUEST_BODY, 
        response: typeRest.FHPUP02110200_RESPONSE | null = null): Promise<typeRest.FHPUP02110200_RESPONSE> {
            return await this.request(secret, 'FHPUP02110200', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 예상체결지수 추이
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST01840000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST01840000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST01840000_RESPONSE} response               응답
     * @returns {typeRest.FHPST01840000_RESPONSE}
     */
    public async FHPST01840000(
        secret: Secret, requestHeader: typeRest.FHPST01840000_REQUEST_HEADER, requestBody: typeRest.FHPST01840000_REQUEST_BODY, 
        response: typeRest.FHPST01840000_RESPONSE | null = null): Promise<typeRest.FHPST01840000_RESPONSE> {
            return await this.request(secret, 'FHPST01840000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 금리 종합(국내채권/금리)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST07020000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST07020000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST07020000_RESPONSE} response               응답
     * @returns {typeRest.FHPST07020000_RESPONSE}
     */
    public async FHPST07020000(
        secret: Secret, requestHeader: typeRest.FHPST07020000_REQUEST_HEADER, requestBody: typeRest.FHPST07020000_REQUEST_BODY, 
        response: typeRest.FHPST07020000_RESPONSE | null = null): Promise<typeRest.FHPST07020000_RESPONSE> {
            return await this.request(secret, 'FHPST07020000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 종합 시황/공시(제목)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKST01011800_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST01011800_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST01011800_RESPONSE} response               응답
     * @returns {typeRest.FHKST01011800_RESPONSE}
     */
    public async FHKST01011800(
        secret: Secret, requestHeader: typeRest.FHKST01011800_REQUEST_HEADER, requestBody: typeRest.FHKST01011800_REQUEST_BODY, 
        response: typeRest.FHKST01011800_RESPONSE | null = null): Promise<typeRest.FHKST01011800_RESPONSE> {
            return await this.request(secret, 'FHKST01011800', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내선물 영업일조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHMCM000002C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHMCM000002C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHMCM000002C0_RESPONSE} response               응답
     * @returns {typeRest.HHMCM000002C0_RESPONSE}
     */
    public async HHMCM000002C0(
        secret: Secret, requestHeader: typeRest.HHMCM000002C0_REQUEST_HEADER, requestBody: typeRest.HHMCM000002C0_REQUEST_BODY, 
        response: typeRest.HHMCM000002C0_RESPONSE | null = null): Promise<typeRest.HHMCM000002C0_RESPONSE> {
            return await this.request(secret, 'HHMCM000002C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 상품기본조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CTPF1604R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTPF1604R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTPF1604R_RESPONSE} response               응답
     * @returns {typeRest.CTPF1604R_RESPONSE}
     */
    public async CTPF1604R(
        secret: Secret, requestHeader: typeRest.CTPF1604R_REQUEST_HEADER, requestBody: typeRest.CTPF1604R_REQUEST_BODY, 
        response: typeRest.CTPF1604R_RESPONSE | null = null): Promise<typeRest.CTPF1604R_RESPONSE> {
            return await this.request(secret, 'CTPF1604R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식기본조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CTPF1002R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTPF1002R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTPF1002R_RESPONSE} response               응답
     * @returns {typeRest.CTPF1002R_RESPONSE}
     */
    public async CTPF1002R(
        secret: Secret, requestHeader: typeRest.CTPF1002R_REQUEST_HEADER, requestBody: typeRest.CTPF1002R_REQUEST_BODY, 
        response: typeRest.CTPF1002R_RESPONSE | null = null): Promise<typeRest.CTPF1002R_RESPONSE> {
            return await this.request(secret, 'CTPF1002R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 대차대조표
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKST66430100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST66430100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST66430100_RESPONSE} response               응답
     * @returns {typeRest.FHKST66430100_RESPONSE}
     */
    public async FHKST66430100(
        secret: Secret, requestHeader: typeRest.FHKST66430100_REQUEST_HEADER, requestBody: typeRest.FHKST66430100_REQUEST_BODY, 
        response: typeRest.FHKST66430100_RESPONSE | null = null): Promise<typeRest.FHKST66430100_RESPONSE> {
            return await this.request(secret, 'FHKST66430100', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 손익계산서
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKST66430200_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST66430200_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST66430200_RESPONSE} response               응답
     * @returns {typeRest.FHKST66430200_RESPONSE}
     */
    public async FHKST66430200(
        secret: Secret, requestHeader: typeRest.FHKST66430200_REQUEST_HEADER, requestBody: typeRest.FHKST66430200_REQUEST_BODY, 
        response: typeRest.FHKST66430200_RESPONSE | null = null): Promise<typeRest.FHKST66430200_RESPONSE> {
            return await this.request(secret, 'FHKST66430200', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 재무비율
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKST66430300_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST66430300_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST66430300_RESPONSE} response               응답
     * @returns {typeRest.FHKST66430300_RESPONSE}
     */
    public async FHKST66430300(
        secret: Secret, requestHeader: typeRest.FHKST66430300_REQUEST_HEADER, requestBody: typeRest.FHKST66430300_REQUEST_BODY, 
        response: typeRest.FHKST66430300_RESPONSE | null = null): Promise<typeRest.FHKST66430300_RESPONSE> {
            return await this.request(secret, 'FHKST66430300', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 수익성비율
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKST66430400_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST66430400_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST66430400_RESPONSE} response               응답
     * @returns {typeRest.FHKST66430400_RESPONSE}
     */
    public async FHKST66430400(
        secret: Secret, requestHeader: typeRest.FHKST66430400_REQUEST_HEADER, requestBody: typeRest.FHKST66430400_REQUEST_BODY, 
        response: typeRest.FHKST66430400_RESPONSE | null = null): Promise<typeRest.FHKST66430400_RESPONSE> {
            return await this.request(secret, 'FHKST66430400', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 기타주요비율
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKST66430500_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST66430500_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST66430500_RESPONSE} response               응답
     * @returns {typeRest.FHKST66430500_RESPONSE}
     */
    public async FHKST66430500(
        secret: Secret, requestHeader: typeRest.FHKST66430500_REQUEST_HEADER, requestBody: typeRest.FHKST66430500_REQUEST_BODY, 
        response: typeRest.FHKST66430500_RESPONSE | null = null): Promise<typeRest.FHKST66430500_RESPONSE> {
            return await this.request(secret, 'FHKST66430500', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 안정성비율
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKST66430600_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST66430600_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST66430600_RESPONSE} response               응답
     * @returns {typeRest.FHKST66430600_RESPONSE}
     */
    public async FHKST66430600(
        secret: Secret, requestHeader: typeRest.FHKST66430600_REQUEST_HEADER, requestBody: typeRest.FHKST66430600_REQUEST_BODY, 
        response: typeRest.FHKST66430600_RESPONSE | null = null): Promise<typeRest.FHKST66430600_RESPONSE> {
            return await this.request(secret, 'FHKST66430600', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 성장성비율
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKST66430800_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST66430800_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST66430800_RESPONSE} response               응답
     * @returns {typeRest.FHKST66430800_RESPONSE}
     */
    public async FHKST66430800(
        secret: Secret, requestHeader: typeRest.FHKST66430800_REQUEST_HEADER, requestBody: typeRest.FHKST66430800_REQUEST_BODY, 
        response: typeRest.FHKST66430800_RESPONSE | null = null): Promise<typeRest.FHKST66430800_RESPONSE> {
            return await this.request(secret, 'FHKST66430800', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 당사 신용가능종목
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST04770000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST04770000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST04770000_RESPONSE} response               응답
     * @returns {typeRest.FHPST04770000_RESPONSE}
     */
    public async FHPST04770000(
        secret: Secret, requestHeader: typeRest.FHPST04770000_REQUEST_HEADER, requestBody: typeRest.FHPST04770000_REQUEST_BODY, 
        response: typeRest.FHPST04770000_RESPONSE | null = null): Promise<typeRest.FHPST04770000_RESPONSE> {
            return await this.request(secret, 'FHPST04770000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 예탁원정보(배당일정)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHKDB669102C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHKDB669102C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHKDB669102C0_RESPONSE} response               응답
     * @returns {typeRest.HHKDB669102C0_RESPONSE}
     */
    public async HHKDB669102C0(
        secret: Secret, requestHeader: typeRest.HHKDB669102C0_REQUEST_HEADER, requestBody: typeRest.HHKDB669102C0_REQUEST_BODY, 
        response: typeRest.HHKDB669102C0_RESPONSE | null = null): Promise<typeRest.HHKDB669102C0_RESPONSE> {
            return await this.request(secret, 'HHKDB669102C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 예탁원정보(주식매수청구일정)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHKDB669103C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHKDB669103C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHKDB669103C0_RESPONSE} response               응답
     * @returns {typeRest.HHKDB669103C0_RESPONSE}
     */
    public async HHKDB669103C0(
        secret: Secret, requestHeader: typeRest.HHKDB669103C0_REQUEST_HEADER, requestBody: typeRest.HHKDB669103C0_REQUEST_BODY, 
        response: typeRest.HHKDB669103C0_RESPONSE | null = null): Promise<typeRest.HHKDB669103C0_RESPONSE> {
            return await this.request(secret, 'HHKDB669103C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 예탁원정보(합병/분할일정)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHKDB669104C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHKDB669104C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHKDB669104C0_RESPONSE} response               응답
     * @returns {typeRest.HHKDB669104C0_RESPONSE}
     */
    public async HHKDB669104C0(
        secret: Secret, requestHeader: typeRest.HHKDB669104C0_REQUEST_HEADER, requestBody: typeRest.HHKDB669104C0_REQUEST_BODY, 
        response: typeRest.HHKDB669104C0_RESPONSE | null = null): Promise<typeRest.HHKDB669104C0_RESPONSE> {
            return await this.request(secret, 'HHKDB669104C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 예탁원정보(액면교체일정)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHKDB669105C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHKDB669105C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHKDB669105C0_RESPONSE} response               응답
     * @returns {typeRest.HHKDB669105C0_RESPONSE}
     */
    public async HHKDB669105C0(
        secret: Secret, requestHeader: typeRest.HHKDB669105C0_REQUEST_HEADER, requestBody: typeRest.HHKDB669105C0_REQUEST_BODY, 
        response: typeRest.HHKDB669105C0_RESPONSE | null = null): Promise<typeRest.HHKDB669105C0_RESPONSE> {
            return await this.request(secret, 'HHKDB669105C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 예탁원정보(자본감소일정)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHKDB669106C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHKDB669106C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHKDB669106C0_RESPONSE} response               응답
     * @returns {typeRest.HHKDB669106C0_RESPONSE}
     */
    public async HHKDB669106C0(
        secret: Secret, requestHeader: typeRest.HHKDB669106C0_REQUEST_HEADER, requestBody: typeRest.HHKDB669106C0_REQUEST_BODY, 
        response: typeRest.HHKDB669106C0_RESPONSE | null = null): Promise<typeRest.HHKDB669106C0_RESPONSE> {
            return await this.request(secret, 'HHKDB669106C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 예탁원정보(상장정보일정)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHKDB669107C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHKDB669107C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHKDB669107C0_RESPONSE} response               응답
     * @returns {typeRest.HHKDB669107C0_RESPONSE}
     */
    public async HHKDB669107C0(
        secret: Secret, requestHeader: typeRest.HHKDB669107C0_REQUEST_HEADER, requestBody: typeRest.HHKDB669107C0_REQUEST_BODY, 
        response: typeRest.HHKDB669107C0_RESPONSE | null = null): Promise<typeRest.HHKDB669107C0_RESPONSE> {
            return await this.request(secret, 'HHKDB669107C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 예탁원정보(공모주청약일정)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHKDB669108C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHKDB669108C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHKDB669108C0_RESPONSE} response               응답
     * @returns {typeRest.HHKDB669108C0_RESPONSE}
     */
    public async HHKDB669108C0(
        secret: Secret, requestHeader: typeRest.HHKDB669108C0_REQUEST_HEADER, requestBody: typeRest.HHKDB669108C0_REQUEST_BODY, 
        response: typeRest.HHKDB669108C0_RESPONSE | null = null): Promise<typeRest.HHKDB669108C0_RESPONSE> {
            return await this.request(secret, 'HHKDB669108C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 예탁원정보(실권주일정)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHKDB669109C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHKDB669109C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHKDB669109C0_RESPONSE} response               응답
     * @returns {typeRest.HHKDB669109C0_RESPONSE}
     */
    public async HHKDB669109C0(
        secret: Secret, requestHeader: typeRest.HHKDB669109C0_REQUEST_HEADER, requestBody: typeRest.HHKDB669109C0_REQUEST_BODY, 
        response: typeRest.HHKDB669109C0_RESPONSE | null = null): Promise<typeRest.HHKDB669109C0_RESPONSE> {
            return await this.request(secret, 'HHKDB669109C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 예탁원정보(의무예치일정)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHKDB669110C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHKDB669110C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHKDB669110C0_RESPONSE} response               응답
     * @returns {typeRest.HHKDB669110C0_RESPONSE}
     */
    public async HHKDB669110C0(
        secret: Secret, requestHeader: typeRest.HHKDB669110C0_REQUEST_HEADER, requestBody: typeRest.HHKDB669110C0_REQUEST_BODY, 
        response: typeRest.HHKDB669110C0_RESPONSE | null = null): Promise<typeRest.HHKDB669110C0_RESPONSE> {
            return await this.request(secret, 'HHKDB669110C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 예탁원정보(유상증자일정)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHKDB669100C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHKDB669100C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHKDB669100C0_RESPONSE} response               응답
     * @returns {typeRest.HHKDB669100C0_RESPONSE}
     */
    public async HHKDB669100C0(
        secret: Secret, requestHeader: typeRest.HHKDB669100C0_REQUEST_HEADER, requestBody: typeRest.HHKDB669100C0_REQUEST_BODY, 
        response: typeRest.HHKDB669100C0_RESPONSE | null = null): Promise<typeRest.HHKDB669100C0_RESPONSE> {
            return await this.request(secret, 'HHKDB669100C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 예탁원정보(무상증자일정)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHKDB669101C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHKDB669101C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHKDB669101C0_RESPONSE} response               응답
     * @returns {typeRest.HHKDB669101C0_RESPONSE}
     */
    public async HHKDB669101C0(
        secret: Secret, requestHeader: typeRest.HHKDB669101C0_REQUEST_HEADER, requestBody: typeRest.HHKDB669101C0_REQUEST_BODY, 
        response: typeRest.HHKDB669101C0_RESPONSE | null = null): Promise<typeRest.HHKDB669101C0_RESPONSE> {
            return await this.request(secret, 'HHKDB669101C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 예탁원정보(주주총회일정)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHKDB669111C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHKDB669111C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHKDB669111C0_RESPONSE} response               응답
     * @returns {typeRest.HHKDB669111C0_RESPONSE}
     */
    public async HHKDB669111C0(
        secret: Secret, requestHeader: typeRest.HHKDB669111C0_REQUEST_HEADER, requestBody: typeRest.HHKDB669111C0_REQUEST_BODY, 
        response: typeRest.HHKDB669111C0_RESPONSE | null = null): Promise<typeRest.HHKDB669111C0_RESPONSE> {
            return await this.request(secret, 'HHKDB669111C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 종목추정실적
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHKST668300C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHKST668300C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHKST668300C0_RESPONSE} response               응답
     * @returns {typeRest.HHKST668300C0_RESPONSE}
     */
    public async HHKST668300C0(
        secret: Secret, requestHeader: typeRest.HHKST668300C0_REQUEST_HEADER, requestBody: typeRest.HHKST668300C0_REQUEST_BODY, 
        response: typeRest.HHKST668300C0_RESPONSE | null = null): Promise<typeRest.HHKST668300C0_RESPONSE> {
            return await this.request(secret, 'HHKST668300C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 당사 대주가능 종목
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CTSC2702R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTSC2702R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTSC2702R_RESPONSE} response               응답
     * @returns {typeRest.CTSC2702R_RESPONSE}
     */
    public async CTSC2702R(
        secret: Secret, requestHeader: typeRest.CTSC2702R_REQUEST_HEADER, requestBody: typeRest.CTSC2702R_REQUEST_BODY, 
        response: typeRest.CTSC2702R_RESPONSE | null = null): Promise<typeRest.CTSC2702R_RESPONSE> {
            return await this.request(secret, 'CTSC2702R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 종목투자의견
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKST663300C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST663300C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST663300C0_RESPONSE} response               응답
     * @returns {typeRest.FHKST663300C0_RESPONSE}
     */
    public async FHKST663300C0(
        secret: Secret, requestHeader: typeRest.FHKST663300C0_REQUEST_HEADER, requestBody: typeRest.FHKST663300C0_REQUEST_BODY, 
        response: typeRest.FHKST663300C0_RESPONSE | null = null): Promise<typeRest.FHKST663300C0_RESPONSE> {
            return await this.request(secret, 'FHKST663300C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 증권사별 투자의견
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKST663400C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST663400C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST663400C0_RESPONSE} response               응답
     * @returns {typeRest.FHKST663400C0_RESPONSE}
     */
    public async FHKST663400C0(
        secret: Secret, requestHeader: typeRest.FHKST663400C0_REQUEST_HEADER, requestBody: typeRest.FHKST663400C0_REQUEST_BODY, 
        response: typeRest.FHKST663400C0_RESPONSE | null = null): Promise<typeRest.FHKST663400C0_RESPONSE> {
            return await this.request(secret, 'FHKST663400C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내기관_외국인 매매종목가집계
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPTJ04400000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPTJ04400000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPTJ04400000_RESPONSE} response               응답
     * @returns {typeRest.FHPTJ04400000_RESPONSE}
     */
    public async FHPTJ04400000(
        secret: Secret, requestHeader: typeRest.FHPTJ04400000_REQUEST_HEADER, requestBody: typeRest.FHPTJ04400000_REQUEST_BODY, 
        response: typeRest.FHPTJ04400000_RESPONSE | null = null): Promise<typeRest.FHPTJ04400000_RESPONSE> {
            return await this.request(secret, 'FHPTJ04400000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 종목조건검색 목록조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHKST03900300_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHKST03900300_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHKST03900300_RESPONSE} response               응답
     * @returns {typeRest.HHKST03900300_RESPONSE}
     */
    public async HHKST03900300(
        secret: Secret, requestHeader: typeRest.HHKST03900300_REQUEST_HEADER, requestBody: typeRest.HHKST03900300_REQUEST_BODY, 
        response: typeRest.HHKST03900300_RESPONSE | null = null): Promise<typeRest.HHKST03900300_RESPONSE> {
            return await this.request(secret, 'HHKST03900300', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 종목조건검색조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHKST03900400_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHKST03900400_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHKST03900400_RESPONSE} response               응답
     * @returns {typeRest.HHKST03900400_RESPONSE}
     */
    public async HHKST03900400(
        secret: Secret, requestHeader: typeRest.HHKST03900400_REQUEST_HEADER, requestBody: typeRest.HHKST03900400_REQUEST_BODY, 
        response: typeRest.HHKST03900400_RESPONSE | null = null): Promise<typeRest.HHKST03900400_RESPONSE> {
            return await this.request(secret, 'HHKST03900400', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 종목별 프로그램매매추이(체결)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPPG04650100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPPG04650100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPPG04650100_RESPONSE} response               응답
     * @returns {typeRest.FHPPG04650100_RESPONSE}
     */
    public async FHPPG04650100(
        secret: Secret, requestHeader: typeRest.FHPPG04650100_REQUEST_HEADER, requestBody: typeRest.FHPPG04650100_REQUEST_BODY, 
        response: typeRest.FHPPG04650100_RESPONSE | null = null): Promise<typeRest.FHPPG04650100_RESPONSE> {
            return await this.request(secret, 'FHPPG04650100', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 종목별 외인기관 추정가집계
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHPTJ04160200_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHPTJ04160200_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHPTJ04160200_RESPONSE} response               응답
     * @returns {typeRest.HHPTJ04160200_RESPONSE}
     */
    public async HHPTJ04160200(
        secret: Secret, requestHeader: typeRest.HHPTJ04160200_REQUEST_HEADER, requestBody: typeRest.HHPTJ04160200_REQUEST_BODY, 
        response: typeRest.HHPTJ04160200_RESPONSE | null = null): Promise<typeRest.HHPTJ04160200_RESPONSE> {
            return await this.request(secret, 'HHPTJ04160200', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 종목별일별매수매도체결량
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKST03010800_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST03010800_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST03010800_RESPONSE} response               응답
     * @returns {typeRest.FHKST03010800_RESPONSE}
     */
    public async FHKST03010800(
        secret: Secret, requestHeader: typeRest.FHKST03010800_REQUEST_HEADER, requestBody: typeRest.FHKST03010800_REQUEST_BODY, 
        response: typeRest.FHKST03010800_RESPONSE | null = null): Promise<typeRest.FHKST03010800_RESPONSE> {
            return await this.request(secret, 'FHKST03010800', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 시장별 투자자매매동향(시세)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPTJ04030000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPTJ04030000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPTJ04030000_RESPONSE} response               응답
     * @returns {typeRest.FHPTJ04030000_RESPONSE}
     */
    public async FHPTJ04030000(
        secret: Secret, requestHeader: typeRest.FHPTJ04030000_REQUEST_HEADER, requestBody: typeRest.FHPTJ04030000_REQUEST_BODY, 
        response: typeRest.FHPTJ04030000_RESPONSE | null = null): Promise<typeRest.FHPTJ04030000_RESPONSE> {
            return await this.request(secret, 'FHPTJ04030000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 신용잔고 일별추이
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST04760000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST04760000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST04760000_RESPONSE} response               응답
     * @returns {typeRest.FHPST04760000_RESPONSE}
     */
    public async FHPST04760000(
        secret: Secret, requestHeader: typeRest.FHPST04760000_REQUEST_HEADER, requestBody: typeRest.FHPST04760000_REQUEST_BODY, 
        response: typeRest.FHPST04760000_RESPONSE | null = null): Promise<typeRest.FHPST04760000_RESPONSE> {
            return await this.request(secret, 'FHPST04760000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 예상체결가 추이
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST01810000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST01810000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST01810000_RESPONSE} response               응답
     * @returns {typeRest.FHPST01810000_RESPONSE}
     */
    public async FHPST01810000(
        secret: Secret, requestHeader: typeRest.FHPST01810000_REQUEST_HEADER, requestBody: typeRest.FHPST01810000_REQUEST_BODY, 
        response: typeRest.FHPST01810000_RESPONSE | null = null): Promise<typeRest.FHPST01810000_RESPONSE> {
            return await this.request(secret, 'FHPST01810000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 공매도 일별추이
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST04830000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST04830000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST04830000_RESPONSE} response               응답
     * @returns {typeRest.FHPST04830000_RESPONSE}
     */
    public async FHPST04830000(
        secret: Secret, requestHeader: typeRest.FHPST04830000_REQUEST_HEADER, requestBody: typeRest.FHPST04830000_REQUEST_BODY, 
        response: typeRest.FHPST04830000_RESPONSE | null = null): Promise<typeRest.FHPST04830000_RESPONSE> {
            return await this.request(secret, 'FHPST04830000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 프로그램매매 종합현황(일별)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPPG04600000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPPG04600000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPPG04600000_RESPONSE} response               응답
     * @returns {typeRest.FHPPG04600000_RESPONSE}
     */
    public async FHPPG04600000(
        secret: Secret, requestHeader: typeRest.FHPPG04600000_REQUEST_HEADER, requestBody: typeRest.FHPPG04600000_REQUEST_BODY, 
        response: typeRest.FHPPG04600000_RESPONSE | null = null): Promise<typeRest.FHPPG04600000_RESPONSE> {
            return await this.request(secret, 'FHPPG04600000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 시간외예상체결등락률
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKST11860000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST11860000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST11860000_RESPONSE} response               응답
     * @returns {typeRest.FHKST11860000_RESPONSE}
     */
    public async FHKST11860000(
        secret: Secret, requestHeader: typeRest.FHKST11860000_REQUEST_HEADER, requestBody: typeRest.FHKST11860000_REQUEST_BODY, 
        response: typeRest.FHKST11860000_RESPONSE | null = null): Promise<typeRest.FHKST11860000_RESPONSE> {
            return await this.request(secret, 'FHKST11860000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 프로그램매매 종합현황(시간)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPPG04600100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPPG04600100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPPG04600100_RESPONSE} response               응답
     * @returns {typeRest.FHPPG04600100_RESPONSE}
     */
    public async FHPPG04600100(
        secret: Secret, requestHeader: typeRest.FHPPG04600100_REQUEST_HEADER, requestBody: typeRest.FHPPG04600100_REQUEST_BODY, 
        response: typeRest.FHPPG04600100_RESPONSE | null = null): Promise<typeRest.FHPPG04600100_RESPONSE> {
            return await this.request(secret, 'FHPPG04600100', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 종목별 일별 대차거래추이
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHPST074500C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHPST074500C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHPST074500C0_RESPONSE} response               응답
     * @returns {typeRest.HHPST074500C0_RESPONSE}
     */
    public async HHPST074500C0(
        secret: Secret, requestHeader: typeRest.HHPST074500C0_REQUEST_HEADER, requestBody: typeRest.HHPST074500C0_REQUEST_BODY, 
        response: typeRest.HHPST074500C0_RESPONSE | null = null): Promise<typeRest.HHPST074500C0_RESPONSE> {
            return await this.request(secret, 'HHPST074500C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 외국계 매매종목 가집계
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKST644100C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST644100C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST644100C0_RESPONSE} response               응답
     * @returns {typeRest.FHKST644100C0_RESPONSE}
     */
    public async FHKST644100C0(
        secret: Secret, requestHeader: typeRest.FHKST644100C0_REQUEST_HEADER, requestBody: typeRest.FHKST644100C0_REQUEST_BODY, 
        response: typeRest.FHKST644100C0_RESPONSE | null = null): Promise<typeRest.FHKST644100C0_RESPONSE> {
            return await this.request(secret, 'FHKST644100C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 종목별 외국계 순매수추이
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKST644400C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST644400C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST644400C0_RESPONSE} response               응답
     * @returns {typeRest.FHKST644400C0_RESPONSE}
     */
    public async FHKST644400C0(
        secret: Secret, requestHeader: typeRest.FHKST644400C0_REQUEST_HEADER, requestBody: typeRest.FHKST644400C0_REQUEST_BODY, 
        response: typeRest.FHKST644400C0_RESPONSE | null = null): Promise<typeRest.FHKST644400C0_RESPONSE> {
            return await this.request(secret, 'FHKST644400C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 체결금액별 매매비중
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKST111900C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST111900C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST111900C0_RESPONSE} response               응답
     * @returns {typeRest.FHKST111900C0_RESPONSE}
     */
    public async FHKST111900C0(
        secret: Secret, requestHeader: typeRest.FHKST111900C0_REQUEST_HEADER, requestBody: typeRest.FHKST111900C0_REQUEST_BODY, 
        response: typeRest.FHKST111900C0_RESPONSE | null = null): Promise<typeRest.FHKST111900C0_RESPONSE> {
            return await this.request(secret, 'FHKST111900C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내 증시자금 종합
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKST649100C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST649100C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST649100C0_RESPONSE} response               응답
     * @returns {typeRest.FHKST649100C0_RESPONSE}
     */
    public async FHKST649100C0(
        secret: Secret, requestHeader: typeRest.FHKST649100C0_REQUEST_HEADER, requestBody: typeRest.FHKST649100C0_REQUEST_BODY, 
        response: typeRest.FHKST649100C0_RESPONSE | null = null): Promise<typeRest.FHKST649100C0_RESPONSE> {
            return await this.request(secret, 'FHKST649100C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 시장별 투자자매매동향(일별)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPTJ04040000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPTJ04040000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPTJ04040000_RESPONSE} response               응답
     * @returns {typeRest.FHPTJ04040000_RESPONSE}
     */
    public async FHPTJ04040000(
        secret: Secret, requestHeader: typeRest.FHPTJ04040000_REQUEST_HEADER, requestBody: typeRest.FHPTJ04040000_REQUEST_BODY, 
        response: typeRest.FHPTJ04040000_RESPONSE | null = null): Promise<typeRest.FHPTJ04040000_RESPONSE> {
            return await this.request(secret, 'FHPTJ04040000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 종목별 프로그램매매추이(일별)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPPG04650200_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPPG04650200_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPPG04650200_RESPONSE} response               응답
     * @returns {typeRest.FHPPG04650200_RESPONSE}
     */
    public async FHPPG04650200(
        secret: Secret, requestHeader: typeRest.FHPPG04650200_REQUEST_HEADER, requestBody: typeRest.FHPPG04650200_REQUEST_BODY, 
        response: typeRest.FHPPG04650200_RESPONSE | null = null): Promise<typeRest.FHPPG04650200_RESPONSE> {
            return await this.request(secret, 'FHPPG04650200', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 프로그램매매 투자자매매동향(당일)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHPPG046600C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHPPG046600C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHPPG046600C0_RESPONSE} response               응답
     * @returns {typeRest.HHPPG046600C0_RESPONSE}
     */
    public async HHPPG046600C0(
        secret: Secret, requestHeader: typeRest.HHPPG046600C0_REQUEST_HEADER, requestBody: typeRest.HHPPG046600C0_REQUEST_BODY, 
        response: typeRest.HHPPG046600C0_RESPONSE | null = null): Promise<typeRest.HHPPG046600C0_RESPONSE> {
            return await this.request(secret, 'HHPPG046600C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 관심종목 그룹별 종목조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHKCM113004C6_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHKCM113004C6_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHKCM113004C6_RESPONSE} response               응답
     * @returns {typeRest.HHKCM113004C6_RESPONSE}
     */
    public async HHKCM113004C6(
        secret: Secret, requestHeader: typeRest.HHKCM113004C6_REQUEST_HEADER, requestBody: typeRest.HHKCM113004C6_REQUEST_BODY, 
        response: typeRest.HHKCM113004C6_RESPONSE | null = null): Promise<typeRest.HHKCM113004C6_RESPONSE> {
            return await this.request(secret, 'HHKCM113004C6', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 관심종목 그룹조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHKCM113004C7_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHKCM113004C7_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHKCM113004C7_RESPONSE} response               응답
     * @returns {typeRest.HHKCM113004C7_RESPONSE}
     */
    public async HHKCM113004C7(
        secret: Secret, requestHeader: typeRest.HHKCM113004C7_REQUEST_HEADER, requestBody: typeRest.HHKCM113004C7_REQUEST_BODY, 
        response: typeRest.HHKCM113004C7_RESPONSE | null = null): Promise<typeRest.HHKCM113004C7_RESPONSE> {
            return await this.request(secret, 'HHKCM113004C7', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 관심종목(멀티종목) 시세조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKST11300006_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST11300006_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST11300006_RESPONSE} response               응답
     * @returns {typeRest.FHKST11300006_RESPONSE}
     */
    public async FHKST11300006(
        secret: Secret, requestHeader: typeRest.FHKST11300006_REQUEST_HEADER, requestBody: typeRest.FHKST11300006_REQUEST_BODY, 
        response: typeRest.FHKST11300006_RESPONSE | null = null): Promise<typeRest.FHKST11300006_RESPONSE> {
            return await this.request(secret, 'FHKST11300006', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 상하한가 포착
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKST130000C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST130000C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST130000C0_RESPONSE} response               응답
     * @returns {typeRest.FHKST130000C0_RESPONSE}
     */
    public async FHKST130000C0(
        secret: Secret, requestHeader: typeRest.FHKST130000C0_REQUEST_HEADER, requestBody: typeRest.FHKST130000C0_REQUEST_BODY, 
        response: typeRest.FHKST130000C0_RESPONSE | null = null): Promise<typeRest.FHKST130000C0_RESPONSE> {
            return await this.request(secret, 'FHKST130000C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 회원사 실 시간 매매동향(틱)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST04320000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST04320000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST04320000_RESPONSE} response               응답
     * @returns {typeRest.FHPST04320000_RESPONSE}
     */
    public async FHPST04320000(
        secret: Secret, requestHeader: typeRest.FHPST04320000_REQUEST_HEADER, requestBody: typeRest.FHPST04320000_REQUEST_BODY, 
        response: typeRest.FHPST04320000_RESPONSE | null = null): Promise<typeRest.FHPST04320000_RESPONSE> {
            return await this.request(secret, 'FHPST04320000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 매물대/거래비중
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST01130000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST01130000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST01130000_RESPONSE} response               응답
     * @returns {typeRest.FHPST01130000_RESPONSE}
     */
    public async FHPST01130000(
        secret: Secret, requestHeader: typeRest.FHPST01130000_REQUEST_HEADER, requestBody: typeRest.FHPST01130000_REQUEST_BODY, 
        response: typeRest.FHPST01130000_RESPONSE | null = null): Promise<typeRest.FHPST01130000_RESPONSE> {
            return await this.request(secret, 'FHPST01130000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식현재가 회원사 종목매매동향
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST04540000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST04540000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST04540000_RESPONSE} response               응답
     * @returns {typeRest.FHPST04540000_RESPONSE}
     */
    public async FHPST04540000(
        secret: Secret, requestHeader: typeRest.FHPST04540000_REQUEST_HEADER, requestBody: typeRest.FHPST04540000_REQUEST_BODY, 
        response: typeRest.FHPST04540000_RESPONSE | null = null): Promise<typeRest.FHPST04540000_RESPONSE> {
            return await this.request(secret, 'FHPST04540000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 거래량순위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST01710000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST01710000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST01710000_RESPONSE} response               응답
     * @returns {typeRest.FHPST01710000_RESPONSE}
     */
    public async FHPST01710000(
        secret: Secret, requestHeader: typeRest.FHPST01710000_REQUEST_HEADER, requestBody: typeRest.FHPST01710000_REQUEST_BODY, 
        response: typeRest.FHPST01710000_RESPONSE | null = null): Promise<typeRest.FHPST01710000_RESPONSE> {
            return await this.request(secret, 'FHPST01710000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 등락률 순위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST01700000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST01700000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST01700000_RESPONSE} response               응답
     * @returns {typeRest.FHPST01700000_RESPONSE}
     */
    public async FHPST01700000(
        secret: Secret, requestHeader: typeRest.FHPST01700000_REQUEST_HEADER, requestBody: typeRest.FHPST01700000_REQUEST_BODY, 
        response: typeRest.FHPST01700000_RESPONSE | null = null): Promise<typeRest.FHPST01700000_RESPONSE> {
            return await this.request(secret, 'FHPST01700000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 수익자산지표 순위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST01730000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST01730000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST01730000_RESPONSE} response               응답
     * @returns {typeRest.FHPST01730000_RESPONSE}
     */
    public async FHPST01730000(
        secret: Secret, requestHeader: typeRest.FHPST01730000_REQUEST_HEADER, requestBody: typeRest.FHPST01730000_REQUEST_BODY, 
        response: typeRest.FHPST01730000_RESPONSE | null = null): Promise<typeRest.FHPST01730000_RESPONSE> {
            return await this.request(secret, 'FHPST01730000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 시가총액 상위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST01740000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST01740000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST01740000_RESPONSE} response               응답
     * @returns {typeRest.FHPST01740000_RESPONSE}
     */
    public async FHPST01740000(
        secret: Secret, requestHeader: typeRest.FHPST01740000_REQUEST_HEADER, requestBody: typeRest.FHPST01740000_REQUEST_BODY, 
        response: typeRest.FHPST01740000_RESPONSE | null = null): Promise<typeRest.FHPST01740000_RESPONSE> {
            return await this.request(secret, 'FHPST01740000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 재무비율 순위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST01750000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST01750000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST01750000_RESPONSE} response               응답
     * @returns {typeRest.FHPST01750000_RESPONSE}
     */
    public async FHPST01750000(
        secret: Secret, requestHeader: typeRest.FHPST01750000_REQUEST_HEADER, requestBody: typeRest.FHPST01750000_REQUEST_BODY, 
        response: typeRest.FHPST01750000_RESPONSE | null = null): Promise<typeRest.FHPST01750000_RESPONSE> {
            return await this.request(secret, 'FHPST01750000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 시간외잔량 순위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST01760000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST01760000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST01760000_RESPONSE} response               응답
     * @returns {typeRest.FHPST01760000_RESPONSE}
     */
    public async FHPST01760000(
        secret: Secret, requestHeader: typeRest.FHPST01760000_REQUEST_HEADER, requestBody: typeRest.FHPST01760000_REQUEST_BODY, 
        response: typeRest.FHPST01760000_RESPONSE | null = null): Promise<typeRest.FHPST01760000_RESPONSE> {
            return await this.request(secret, 'FHPST01760000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 우선주/괴리율 상위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST01770000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST01770000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST01770000_RESPONSE} response               응답
     * @returns {typeRest.FHPST01770000_RESPONSE}
     */
    public async FHPST01770000(
        secret: Secret, requestHeader: typeRest.FHPST01770000_REQUEST_HEADER, requestBody: typeRest.FHPST01770000_REQUEST_BODY, 
        response: typeRest.FHPST01770000_RESPONSE | null = null): Promise<typeRest.FHPST01770000_RESPONSE> {
            return await this.request(secret, 'FHPST01770000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 호가잔량 순위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST01720000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST01720000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST01720000_RESPONSE} response               응답
     * @returns {typeRest.FHPST01720000_RESPONSE}
     */
    public async FHPST01720000(
        secret: Secret, requestHeader: typeRest.FHPST01720000_REQUEST_HEADER, requestBody: typeRest.FHPST01720000_REQUEST_BODY, 
        response: typeRest.FHPST01720000_RESPONSE | null = null): Promise<typeRest.FHPST01720000_RESPONSE> {
            return await this.request(secret, 'FHPST01720000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 이격도 순위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST01780000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST01780000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST01780000_RESPONSE} response               응답
     * @returns {typeRest.FHPST01780000_RESPONSE}
     */
    public async FHPST01780000(
        secret: Secret, requestHeader: typeRest.FHPST01780000_REQUEST_HEADER, requestBody: typeRest.FHPST01780000_REQUEST_BODY, 
        response: typeRest.FHPST01780000_RESPONSE | null = null): Promise<typeRest.FHPST01780000_RESPONSE> {
            return await this.request(secret, 'FHPST01780000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 시장가치 순위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST01790000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST01790000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST01790000_RESPONSE} response               응답
     * @returns {typeRest.FHPST01790000_RESPONSE}
     */
    public async FHPST01790000(
        secret: Secret, requestHeader: typeRest.FHPST01790000_REQUEST_HEADER, requestBody: typeRest.FHPST01790000_REQUEST_BODY, 
        response: typeRest.FHPST01790000_RESPONSE | null = null): Promise<typeRest.FHPST01790000_RESPONSE> {
            return await this.request(secret, 'FHPST01790000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 체결강도 상위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST01680000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST01680000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST01680000_RESPONSE} response               응답
     * @returns {typeRest.FHPST01680000_RESPONSE}
     */
    public async FHPST01680000(
        secret: Secret, requestHeader: typeRest.FHPST01680000_REQUEST_HEADER, requestBody: typeRest.FHPST01680000_REQUEST_BODY, 
        response: typeRest.FHPST01680000_RESPONSE | null = null): Promise<typeRest.FHPST01680000_RESPONSE> {
            return await this.request(secret, 'FHPST01680000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 관심종목등록 상위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST01800000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST01800000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST01800000_RESPONSE} response               응답
     * @returns {typeRest.FHPST01800000_RESPONSE}
     */
    public async FHPST01800000(
        secret: Secret, requestHeader: typeRest.FHPST01800000_REQUEST_HEADER, requestBody: typeRest.FHPST01800000_REQUEST_BODY, 
        response: typeRest.FHPST01800000_RESPONSE | null = null): Promise<typeRest.FHPST01800000_RESPONSE> {
            return await this.request(secret, 'FHPST01800000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 예상체결 상승/하락상위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST01820000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST01820000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST01820000_RESPONSE} response               응답
     * @returns {typeRest.FHPST01820000_RESPONSE}
     */
    public async FHPST01820000(
        secret: Secret, requestHeader: typeRest.FHPST01820000_REQUEST_HEADER, requestBody: typeRest.FHPST01820000_REQUEST_BODY, 
        response: typeRest.FHPST01820000_RESPONSE | null = null): Promise<typeRest.FHPST01820000_RESPONSE> {
            return await this.request(secret, 'FHPST01820000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 당사매매종목 상위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST01860000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST01860000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST01860000_RESPONSE} response               응답
     * @returns {typeRest.FHPST01860000_RESPONSE}
     */
    public async FHPST01860000(
        secret: Secret, requestHeader: typeRest.FHPST01860000_REQUEST_HEADER, requestBody: typeRest.FHPST01860000_REQUEST_BODY, 
        response: typeRest.FHPST01860000_RESPONSE | null = null): Promise<typeRest.FHPST01860000_RESPONSE> {
            return await this.request(secret, 'FHPST01860000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 신고/신저근접종목 상위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST01870000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST01870000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST01870000_RESPONSE} response               응답
     * @returns {typeRest.FHPST01870000_RESPONSE}
     */
    public async FHPST01870000(
        secret: Secret, requestHeader: typeRest.FHPST01870000_REQUEST_HEADER, requestBody: typeRest.FHPST01870000_REQUEST_BODY, 
        response: typeRest.FHPST01870000_RESPONSE | null = null): Promise<typeRest.FHPST01870000_RESPONSE> {
            return await this.request(secret, 'FHPST01870000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 대량체결건수 상위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKST190900C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST190900C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST190900C0_RESPONSE} response               응답
     * @returns {typeRest.FHKST190900C0_RESPONSE}
     */
    public async FHKST190900C0(
        secret: Secret, requestHeader: typeRest.FHKST190900C0_REQUEST_HEADER, requestBody: typeRest.FHKST190900C0_REQUEST_BODY, 
        response: typeRest.FHKST190900C0_RESPONSE | null = null): Promise<typeRest.FHKST190900C0_RESPONSE> {
            return await this.request(secret, 'FHKST190900C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 공매도 상위종목
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST04820000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST04820000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST04820000_RESPONSE} response               응답
     * @returns {typeRest.FHPST04820000_RESPONSE}
     */
    public async FHPST04820000(
        secret: Secret, requestHeader: typeRest.FHPST04820000_REQUEST_HEADER, requestBody: typeRest.FHPST04820000_REQUEST_BODY, 
        response: typeRest.FHPST04820000_RESPONSE | null = null): Promise<typeRest.FHPST04820000_RESPONSE> {
            return await this.request(secret, 'FHPST04820000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 신용잔고 상위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKST17010000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST17010000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST17010000_RESPONSE} response               응답
     * @returns {typeRest.FHKST17010000_RESPONSE}
     */
    public async FHKST17010000(
        secret: Secret, requestHeader: typeRest.FHKST17010000_REQUEST_HEADER, requestBody: typeRest.FHKST17010000_REQUEST_BODY, 
        response: typeRest.FHKST17010000_RESPONSE | null = null): Promise<typeRest.FHKST17010000_RESPONSE> {
            return await this.request(secret, 'FHKST17010000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 배당률 상위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHKDB13470100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHKDB13470100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHKDB13470100_RESPONSE} response               응답
     * @returns {typeRest.HHKDB13470100_RESPONSE}
     */
    public async HHKDB13470100(
        secret: Secret, requestHeader: typeRest.HHKDB13470100_REQUEST_HEADER, requestBody: typeRest.HHKDB13470100_REQUEST_BODY, 
        response: typeRest.HHKDB13470100_RESPONSE | null = null): Promise<typeRest.HHKDB13470100_RESPONSE> {
            return await this.request(secret, 'HHKDB13470100', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 시간외등락율순위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST02340000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST02340000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST02340000_RESPONSE} response               응답
     * @returns {typeRest.FHPST02340000_RESPONSE}
     */
    public async FHPST02340000(
        secret: Secret, requestHeader: typeRest.FHPST02340000_REQUEST_HEADER, requestBody: typeRest.FHPST02340000_REQUEST_BODY, 
        response: typeRest.FHPST02340000_RESPONSE | null = null): Promise<typeRest.FHPST02340000_RESPONSE> {
            return await this.request(secret, 'FHPST02340000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내주식 시간외거래량순위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPST02350000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST02350000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST02350000_RESPONSE} response               응답
     * @returns {typeRest.FHPST02350000_RESPONSE}
     */
    public async FHPST02350000(
        secret: Secret, requestHeader: typeRest.FHPST02350000_REQUEST_HEADER, requestBody: typeRest.FHPST02350000_REQUEST_BODY, 
        response: typeRest.FHPST02350000_RESPONSE | null = null): Promise<typeRest.FHPST02350000_RESPONSE> {
            return await this.request(secret, 'FHPST02350000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description HTS조회상위20종목
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHMCM000100C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHMCM000100C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHMCM000100C0_RESPONSE} response               응답
     * @returns {typeRest.HHMCM000100C0_RESPONSE}
     */
    public async HHMCM000100C0(
        secret: Secret, requestHeader: typeRest.HHMCM000100C0_REQUEST_HEADER, requestBody: typeRest.HHMCM000100C0_REQUEST_BODY, 
        response: typeRest.HHMCM000100C0_RESPONSE | null = null): Promise<typeRest.HHMCM000100C0_RESPONSE> {
            return await this.request(secret, 'HHMCM000100C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션 주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTO1101U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTO1101U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTO1101U_RESPONSE} response               응답
     * @returns {typeRest.TTTO1101U_RESPONSE}
     */
    public async TTTO1101U(
        secret: Secret, requestHeader: typeRest.TTTO1101U_REQUEST_HEADER, requestBody: typeRest.TTTO1101U_REQUEST_BODY, 
        response: typeRest.TTTO1101U_RESPONSE | null = null): Promise<typeRest.TTTO1101U_RESPONSE> {
            return await this.request(secret, 'TTTO1101U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션 주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.JTCE1001U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.JTCE1001U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.JTCE1001U_RESPONSE} response               응답
     * @returns {typeRest.JTCE1001U_RESPONSE}
     */
    public async JTCE1001U(
        secret: Secret, requestHeader: typeRest.JTCE1001U_REQUEST_HEADER, requestBody: typeRest.JTCE1001U_REQUEST_BODY, 
        response: typeRest.JTCE1001U_RESPONSE | null = null): Promise<typeRest.JTCE1001U_RESPONSE> {
            return await this.request(secret, 'JTCE1001U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션 주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTTO1101U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTO1101U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTO1101U_RESPONSE} response               응답
     * @returns {typeRest.VTTO1101U_RESPONSE}
     */
    public async VTTO1101U(
        secret: Secret, requestHeader: typeRest.VTTO1101U_REQUEST_HEADER, requestBody: typeRest.VTTO1101U_REQUEST_BODY, 
        response: typeRest.VTTO1101U_RESPONSE | null = null): Promise<typeRest.VTTO1101U_RESPONSE> {
            return await this.request(secret, 'VTTO1101U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션 정정취소주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTO1103U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTO1103U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTO1103U_RESPONSE} response               응답
     * @returns {typeRest.TTTO1103U_RESPONSE}
     */
    public async TTTO1103U(
        secret: Secret, requestHeader: typeRest.TTTO1103U_REQUEST_HEADER, requestBody: typeRest.TTTO1103U_REQUEST_BODY, 
        response: typeRest.TTTO1103U_RESPONSE | null = null): Promise<typeRest.TTTO1103U_RESPONSE> {
            return await this.request(secret, 'TTTO1103U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션 정정취소주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.JTCE1002U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.JTCE1002U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.JTCE1002U_RESPONSE} response               응답
     * @returns {typeRest.JTCE1002U_RESPONSE}
     */
    public async JTCE1002U(
        secret: Secret, requestHeader: typeRest.JTCE1002U_REQUEST_HEADER, requestBody: typeRest.JTCE1002U_REQUEST_BODY, 
        response: typeRest.JTCE1002U_RESPONSE | null = null): Promise<typeRest.JTCE1002U_RESPONSE> {
            return await this.request(secret, 'JTCE1002U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션 정정취소주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTTO1103U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTO1103U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTO1103U_RESPONSE} response               응답
     * @returns {typeRest.VTTO1103U_RESPONSE}
     */
    public async VTTO1103U(
        secret: Secret, requestHeader: typeRest.VTTO1103U_REQUEST_HEADER, requestBody: typeRest.VTTO1103U_REQUEST_BODY, 
        response: typeRest.VTTO1103U_RESPONSE | null = null): Promise<typeRest.VTTO1103U_RESPONSE> {
            return await this.request(secret, 'VTTO1103U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션 주문체결내역조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTO5201R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTO5201R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTO5201R_RESPONSE} response               응답
     * @returns {typeRest.TTTO5201R_RESPONSE}
     */
    public async TTTO5201R(
        secret: Secret, requestHeader: typeRest.TTTO5201R_REQUEST_HEADER, requestBody: typeRest.TTTO5201R_REQUEST_BODY, 
        response: typeRest.TTTO5201R_RESPONSE | null = null): Promise<typeRest.TTTO5201R_RESPONSE> {
            return await this.request(secret, 'TTTO5201R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션 주문체결내역조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTTO5201R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTO5201R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTO5201R_RESPONSE} response               응답
     * @returns {typeRest.VTTO5201R_RESPONSE}
     */
    public async VTTO5201R(
        secret: Secret, requestHeader: typeRest.VTTO5201R_REQUEST_HEADER, requestBody: typeRest.VTTO5201R_REQUEST_BODY, 
        response: typeRest.VTTO5201R_RESPONSE | null = null): Promise<typeRest.VTTO5201R_RESPONSE> {
            return await this.request(secret, 'VTTO5201R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션 잔고현황
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CTFO6118R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTFO6118R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTFO6118R_RESPONSE} response               응답
     * @returns {typeRest.CTFO6118R_RESPONSE}
     */
    public async CTFO6118R(
        secret: Secret, requestHeader: typeRest.CTFO6118R_REQUEST_HEADER, requestBody: typeRest.CTFO6118R_REQUEST_BODY, 
        response: typeRest.CTFO6118R_RESPONSE | null = null): Promise<typeRest.CTFO6118R_RESPONSE> {
            return await this.request(secret, 'CTFO6118R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션 잔고현황
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTFO6118R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTFO6118R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTFO6118R_RESPONSE} response               응답
     * @returns {typeRest.VTFO6118R_RESPONSE}
     */
    public async VTFO6118R(
        secret: Secret, requestHeader: typeRest.VTFO6118R_REQUEST_HEADER, requestBody: typeRest.VTFO6118R_REQUEST_BODY, 
        response: typeRest.VTFO6118R_RESPONSE | null = null): Promise<typeRest.VTFO6118R_RESPONSE> {
            return await this.request(secret, 'VTFO6118R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션 주문가능
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTO5105R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTO5105R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTO5105R_RESPONSE} response               응답
     * @returns {typeRest.TTTO5105R_RESPONSE}
     */
    public async TTTO5105R(
        secret: Secret, requestHeader: typeRest.TTTO5105R_REQUEST_HEADER, requestBody: typeRest.TTTO5105R_REQUEST_BODY, 
        response: typeRest.TTTO5105R_RESPONSE | null = null): Promise<typeRest.TTTO5105R_RESPONSE> {
            return await this.request(secret, 'TTTO5105R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션 주문가능
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTTO5105R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTO5105R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTO5105R_RESPONSE} response               응답
     * @returns {typeRest.VTTO5105R_RESPONSE}
     */
    public async VTTO5105R(
        secret: Secret, requestHeader: typeRest.VTTO5105R_REQUEST_HEADER, requestBody: typeRest.VTTO5105R_REQUEST_BODY, 
        response: typeRest.VTTO5105R_RESPONSE | null = null): Promise<typeRest.VTTO5105R_RESPONSE> {
            return await this.request(secret, 'VTTO5105R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description (야간)선물옵션 주문체결 내역조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.JTCE5005R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.JTCE5005R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.JTCE5005R_RESPONSE} response               응답
     * @returns {typeRest.JTCE5005R_RESPONSE}
     */
    public async JTCE5005R(
        secret: Secret, requestHeader: typeRest.JTCE5005R_REQUEST_HEADER, requestBody: typeRest.JTCE5005R_REQUEST_BODY, 
        response: typeRest.JTCE5005R_RESPONSE | null = null): Promise<typeRest.JTCE5005R_RESPONSE> {
            return await this.request(secret, 'JTCE5005R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description (야간)선물옵션 잔고현황
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.JTCE6001R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.JTCE6001R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.JTCE6001R_RESPONSE} response               응답
     * @returns {typeRest.JTCE6001R_RESPONSE}
     */
    public async JTCE6001R(
        secret: Secret, requestHeader: typeRest.JTCE6001R_REQUEST_HEADER, requestBody: typeRest.JTCE6001R_REQUEST_BODY, 
        response: typeRest.JTCE6001R_RESPONSE | null = null): Promise<typeRest.JTCE6001R_RESPONSE> {
            return await this.request(secret, 'JTCE6001R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description (야간)선물옵션 주문가능 조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.JTCE1004R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.JTCE1004R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.JTCE1004R_RESPONSE} response               응답
     * @returns {typeRest.JTCE1004R_RESPONSE}
     */
    public async JTCE1004R(
        secret: Secret, requestHeader: typeRest.JTCE1004R_REQUEST_HEADER, requestBody: typeRest.JTCE1004R_REQUEST_BODY, 
        response: typeRest.JTCE1004R_RESPONSE | null = null): Promise<typeRest.JTCE1004R_RESPONSE> {
            return await this.request(secret, 'JTCE1004R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션 잔고정산손익내역
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CTFO6117R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTFO6117R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTFO6117R_RESPONSE} response               응답
     * @returns {typeRest.CTFO6117R_RESPONSE}
     */
    public async CTFO6117R(
        secret: Secret, requestHeader: typeRest.CTFO6117R_REQUEST_HEADER, requestBody: typeRest.CTFO6117R_REQUEST_BODY, 
        response: typeRest.CTFO6117R_RESPONSE | null = null): Promise<typeRest.CTFO6117R_RESPONSE> {
            return await this.request(secret, 'CTFO6117R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션 총자산현황
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CTRP6550R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTRP6550R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTRP6550R_RESPONSE} response               응답
     * @returns {typeRest.CTRP6550R_RESPONSE}
     */
    public async CTRP6550R(
        secret: Secret, requestHeader: typeRest.CTRP6550R_REQUEST_HEADER, requestBody: typeRest.CTRP6550R_REQUEST_BODY, 
        response: typeRest.CTRP6550R_RESPONSE | null = null): Promise<typeRest.CTRP6550R_RESPONSE> {
            return await this.request(secret, 'CTRP6550R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션 잔고평가손익내역
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CTFO6159R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTFO6159R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTFO6159R_RESPONSE} response               응답
     * @returns {typeRest.CTFO6159R_RESPONSE}
     */
    public async CTFO6159R(
        secret: Secret, requestHeader: typeRest.CTFO6159R_REQUEST_HEADER, requestBody: typeRest.CTFO6159R_REQUEST_BODY, 
        response: typeRest.CTFO6159R_RESPONSE | null = null): Promise<typeRest.CTFO6159R_RESPONSE> {
            return await this.request(secret, 'CTFO6159R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션 기준일체결내역
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CTFO5139R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTFO5139R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTFO5139R_RESPONSE} response               응답
     * @returns {typeRest.CTFO5139R_RESPONSE}
     */
    public async CTFO5139R(
        secret: Secret, requestHeader: typeRest.CTFO5139R_REQUEST_HEADER, requestBody: typeRest.CTFO5139R_REQUEST_BODY, 
        response: typeRest.CTFO5139R_RESPONSE | null = null): Promise<typeRest.CTFO5139R_RESPONSE> {
            return await this.request(secret, 'CTFO5139R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션기간약정수수료일별
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CTFO6119R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTFO6119R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTFO6119R_RESPONSE} response               응답
     * @returns {typeRest.CTFO6119R_RESPONSE}
     */
    public async CTFO6119R(
        secret: Secret, requestHeader: typeRest.CTFO6119R_REQUEST_HEADER, requestBody: typeRest.CTFO6119R_REQUEST_BODY, 
        response: typeRest.CTFO6119R_RESPONSE | null = null): Promise<typeRest.CTFO6119R_RESPONSE> {
            return await this.request(secret, 'CTFO6119R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description (야간)선물옵션 증거금 상세
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.JTCE6003R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.JTCE6003R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.JTCE6003R_RESPONSE} response               응답
     * @returns {typeRest.JTCE6003R_RESPONSE}
     */
    public async JTCE6003R(
        secret: Secret, requestHeader: typeRest.JTCE6003R_REQUEST_HEADER, requestBody: typeRest.JTCE6003R_REQUEST_BODY, 
        response: typeRest.JTCE6003R_RESPONSE | null = null): Promise<typeRest.JTCE6003R_RESPONSE> {
            return await this.request(secret, 'JTCE6003R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션 시세
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHMIF10000000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHMIF10000000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHMIF10000000_RESPONSE} response               응답
     * @returns {typeRest.FHMIF10000000_RESPONSE}
     */
    public async FHMIF10000000(
        secret: Secret, requestHeader: typeRest.FHMIF10000000_REQUEST_HEADER, requestBody: typeRest.FHMIF10000000_REQUEST_BODY, 
        response: typeRest.FHMIF10000000_RESPONSE | null = null): Promise<typeRest.FHMIF10000000_RESPONSE> {
            return await this.request(secret, 'FHMIF10000000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션 시세호가
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHMIF10010000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHMIF10010000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHMIF10010000_RESPONSE} response               응답
     * @returns {typeRest.FHMIF10010000_RESPONSE}
     */
    public async FHMIF10010000(
        secret: Secret, requestHeader: typeRest.FHMIF10010000_REQUEST_HEADER, requestBody: typeRest.FHMIF10010000_REQUEST_BODY, 
        response: typeRest.FHMIF10010000_RESPONSE | null = null): Promise<typeRest.FHMIF10010000_RESPONSE> {
            return await this.request(secret, 'FHMIF10010000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션기간별시세(일/주/월/년)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKIF03020100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKIF03020100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKIF03020100_RESPONSE} response               응답
     * @returns {typeRest.FHKIF03020100_RESPONSE}
     */
    public async FHKIF03020100(
        secret: Secret, requestHeader: typeRest.FHKIF03020100_REQUEST_HEADER, requestBody: typeRest.FHKIF03020100_REQUEST_BODY, 
        response: typeRest.FHKIF03020100_RESPONSE | null = null): Promise<typeRest.FHKIF03020100_RESPONSE> {
            return await this.request(secret, 'FHKIF03020100', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션 분봉조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKIF03020200_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKIF03020200_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKIF03020200_RESPONSE} response               응답
     * @returns {typeRest.FHKIF03020200_RESPONSE}
     */
    public async FHKIF03020200(
        secret: Secret, requestHeader: typeRest.FHKIF03020200_REQUEST_HEADER, requestBody: typeRest.FHKIF03020200_REQUEST_BODY, 
        response: typeRest.FHKIF03020200_RESPONSE | null = null): Promise<typeRest.FHKIF03020200_RESPONSE> {
            return await this.request(secret, 'FHKIF03020200', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션 일중예상체결추이
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPIF05110100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPIF05110100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPIF05110100_RESPONSE} response               응답
     * @returns {typeRest.FHPIF05110100_RESPONSE}
     */
    public async FHPIF05110100(
        secret: Secret, requestHeader: typeRest.FHPIF05110100_REQUEST_HEADER, requestBody: typeRest.FHPIF05110100_REQUEST_BODY, 
        response: typeRest.FHPIF05110100_RESPONSE | null = null): Promise<typeRest.FHPIF05110100_RESPONSE> {
            return await this.request(secret, 'FHPIF05110100', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내옵션전광판_옵션월물리스트
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPIO056104C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPIO056104C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPIO056104C0_RESPONSE} response               응답
     * @returns {typeRest.FHPIO056104C0_RESPONSE}
     */
    public async FHPIO056104C0(
        secret: Secret, requestHeader: typeRest.FHPIO056104C0_REQUEST_HEADER, requestBody: typeRest.FHPIO056104C0_REQUEST_BODY, 
        response: typeRest.FHPIO056104C0_RESPONSE | null = null): Promise<typeRest.FHPIO056104C0_RESPONSE> {
            return await this.request(secret, 'FHPIO056104C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내선물 기초자산 시세
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPIF05030000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPIF05030000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPIF05030000_RESPONSE} response               응답
     * @returns {typeRest.FHPIF05030000_RESPONSE}
     */
    public async FHPIF05030000(
        secret: Secret, requestHeader: typeRest.FHPIF05030000_REQUEST_HEADER, requestBody: typeRest.FHPIF05030000_REQUEST_BODY, 
        response: typeRest.FHPIF05030000_RESPONSE | null = null): Promise<typeRest.FHPIF05030000_RESPONSE> {
            return await this.request(secret, 'FHPIF05030000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내옵션전광판_콜풋
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPIF05030100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPIF05030100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPIF05030100_RESPONSE} response               응답
     * @returns {typeRest.FHPIF05030100_RESPONSE}
     */
    public async FHPIF05030100(
        secret: Secret, requestHeader: typeRest.FHPIF05030100_REQUEST_HEADER, requestBody: typeRest.FHPIF05030100_REQUEST_BODY, 
        response: typeRest.FHPIF05030100_RESPONSE | null = null): Promise<typeRest.FHPIF05030100_RESPONSE> {
            return await this.request(secret, 'FHPIF05030100', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 국내옵션전광판_선물
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHPIF05030200_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPIF05030200_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPIF05030200_RESPONSE} response               응답
     * @returns {typeRest.FHPIF05030200_RESPONSE}
     */
    public async FHPIF05030200(
        secret: Secret, requestHeader: typeRest.FHPIF05030200_REQUEST_HEADER, requestBody: typeRest.FHPIF05030200_REQUEST_BODY, 
        response: typeRest.FHPIF05030200_RESPONSE | null = null): Promise<typeRest.FHPIF05030200_RESPONSE> {
            return await this.request(secret, 'FHPIF05030200', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 상품선물 실시간호가
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.H0CFASP0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.H0CFASP0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.H0CFASP0_RESPONSE} response               응답
     * @returns {typeRest.H0CFASP0_RESPONSE}
     */
    public async H0CFASP0(
        secret: Secret, requestHeader: typeRest.H0CFASP0_REQUEST_HEADER, requestBody: typeRest.H0CFASP0_REQUEST_BODY, 
        response: typeRest.H0CFASP0_RESPONSE | null = null): Promise<typeRest.H0CFASP0_RESPONSE> {
            return await this.request(secret, 'H0CFASP0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTT1002U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTT1002U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTT1002U_RESPONSE} response               응답
     * @returns {typeRest.TTTT1002U_RESPONSE}
     */
    public async TTTT1002U(
        secret: Secret, requestHeader: typeRest.TTTT1002U_REQUEST_HEADER, requestBody: typeRest.TTTT1002U_REQUEST_BODY, 
        response: typeRest.TTTT1002U_RESPONSE | null = null): Promise<typeRest.TTTT1002U_RESPONSE> {
            return await this.request(secret, 'TTTT1002U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTT1006U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTT1006U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTT1006U_RESPONSE} response               응답
     * @returns {typeRest.TTTT1006U_RESPONSE}
     */
    public async TTTT1006U(
        secret: Secret, requestHeader: typeRest.TTTT1006U_REQUEST_HEADER, requestBody: typeRest.TTTT1006U_REQUEST_BODY, 
        response: typeRest.TTTT1006U_RESPONSE | null = null): Promise<typeRest.TTTT1006U_RESPONSE> {
            return await this.request(secret, 'TTTT1006U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTS0308U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS0308U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS0308U_RESPONSE} response               응답
     * @returns {typeRest.TTTS0308U_RESPONSE}
     */
    public async TTTS0308U(
        secret: Secret, requestHeader: typeRest.TTTS0308U_REQUEST_HEADER, requestBody: typeRest.TTTS0308U_REQUEST_BODY, 
        response: typeRest.TTTS0308U_RESPONSE | null = null): Promise<typeRest.TTTS0308U_RESPONSE> {
            return await this.request(secret, 'TTTS0308U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTS0307U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS0307U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS0307U_RESPONSE} response               응답
     * @returns {typeRest.TTTS0307U_RESPONSE}
     */
    public async TTTS0307U(
        secret: Secret, requestHeader: typeRest.TTTS0307U_REQUEST_HEADER, requestBody: typeRest.TTTS0307U_REQUEST_BODY, 
        response: typeRest.TTTS0307U_RESPONSE | null = null): Promise<typeRest.TTTS0307U_RESPONSE> {
            return await this.request(secret, 'TTTS0307U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTS0202U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS0202U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS0202U_RESPONSE} response               응답
     * @returns {typeRest.TTTS0202U_RESPONSE}
     */
    public async TTTS0202U(
        secret: Secret, requestHeader: typeRest.TTTS0202U_REQUEST_HEADER, requestBody: typeRest.TTTS0202U_REQUEST_BODY, 
        response: typeRest.TTTS0202U_RESPONSE | null = null): Promise<typeRest.TTTS0202U_RESPONSE> {
            return await this.request(secret, 'TTTS0202U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTS1005U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS1005U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS1005U_RESPONSE} response               응답
     * @returns {typeRest.TTTS1005U_RESPONSE}
     */
    public async TTTS1005U(
        secret: Secret, requestHeader: typeRest.TTTS1005U_REQUEST_HEADER, requestBody: typeRest.TTTS1005U_REQUEST_BODY, 
        response: typeRest.TTTS1005U_RESPONSE | null = null): Promise<typeRest.TTTS1005U_RESPONSE> {
            return await this.request(secret, 'TTTS1005U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTS1002U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS1002U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS1002U_RESPONSE} response               응답
     * @returns {typeRest.TTTS1002U_RESPONSE}
     */
    public async TTTS1002U(
        secret: Secret, requestHeader: typeRest.TTTS1002U_REQUEST_HEADER, requestBody: typeRest.TTTS1002U_REQUEST_BODY, 
        response: typeRest.TTTS1002U_RESPONSE | null = null): Promise<typeRest.TTTS1002U_RESPONSE> {
            return await this.request(secret, 'TTTS1002U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTS1001U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS1001U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS1001U_RESPONSE} response               응답
     * @returns {typeRest.TTTS1001U_RESPONSE}
     */
    public async TTTS1001U(
        secret: Secret, requestHeader: typeRest.TTTS1001U_REQUEST_HEADER, requestBody: typeRest.TTTS1001U_REQUEST_BODY, 
        response: typeRest.TTTS1001U_RESPONSE | null = null): Promise<typeRest.TTTS1001U_RESPONSE> {
            return await this.request(secret, 'TTTS1001U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTS0305U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS0305U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS0305U_RESPONSE} response               응답
     * @returns {typeRest.TTTS0305U_RESPONSE}
     */
    public async TTTS0305U(
        secret: Secret, requestHeader: typeRest.TTTS0305U_REQUEST_HEADER, requestBody: typeRest.TTTS0305U_REQUEST_BODY, 
        response: typeRest.TTTS0305U_RESPONSE | null = null): Promise<typeRest.TTTS0305U_RESPONSE> {
            return await this.request(secret, 'TTTS0305U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTS0304U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS0304U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS0304U_RESPONSE} response               응답
     * @returns {typeRest.TTTS0304U_RESPONSE}
     */
    public async TTTS0304U(
        secret: Secret, requestHeader: typeRest.TTTS0304U_REQUEST_HEADER, requestBody: typeRest.TTTS0304U_REQUEST_BODY, 
        response: typeRest.TTTS0304U_RESPONSE | null = null): Promise<typeRest.TTTS0304U_RESPONSE> {
            return await this.request(secret, 'TTTS0304U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTS0311U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS0311U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS0311U_RESPONSE} response               응답
     * @returns {typeRest.TTTS0311U_RESPONSE}
     */
    public async TTTS0311U(
        secret: Secret, requestHeader: typeRest.TTTS0311U_REQUEST_HEADER, requestBody: typeRest.TTTS0311U_REQUEST_BODY, 
        response: typeRest.TTTS0311U_RESPONSE | null = null): Promise<typeRest.TTTS0311U_RESPONSE> {
            return await this.request(secret, 'TTTS0311U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTS0310U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS0310U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS0310U_RESPONSE} response               응답
     * @returns {typeRest.TTTS0310U_RESPONSE}
     */
    public async TTTS0310U(
        secret: Secret, requestHeader: typeRest.TTTS0310U_REQUEST_HEADER, requestBody: typeRest.TTTS0310U_REQUEST_BODY, 
        response: typeRest.TTTS0310U_RESPONSE | null = null): Promise<typeRest.TTTS0310U_RESPONSE> {
            return await this.request(secret, 'TTTS0310U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTTT1002U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTT1002U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTT1002U_RESPONSE} response               응답
     * @returns {typeRest.VTTT1002U_RESPONSE}
     */
    public async VTTT1002U(
        secret: Secret, requestHeader: typeRest.VTTT1002U_REQUEST_HEADER, requestBody: typeRest.VTTT1002U_REQUEST_BODY, 
        response: typeRest.VTTT1002U_RESPONSE | null = null): Promise<typeRest.VTTT1002U_RESPONSE> {
            return await this.request(secret, 'VTTT1002U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTTT1001U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTT1001U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTT1001U_RESPONSE} response               응답
     * @returns {typeRest.VTTT1001U_RESPONSE}
     */
    public async VTTT1001U(
        secret: Secret, requestHeader: typeRest.VTTT1001U_REQUEST_HEADER, requestBody: typeRest.VTTT1001U_REQUEST_BODY, 
        response: typeRest.VTTT1001U_RESPONSE | null = null): Promise<typeRest.VTTT1001U_RESPONSE> {
            return await this.request(secret, 'VTTT1001U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTTS0308U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS0308U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS0308U_RESPONSE} response               응답
     * @returns {typeRest.VTTS0308U_RESPONSE}
     */
    public async VTTS0308U(
        secret: Secret, requestHeader: typeRest.VTTS0308U_REQUEST_HEADER, requestBody: typeRest.VTTS0308U_REQUEST_BODY, 
        response: typeRest.VTTS0308U_RESPONSE | null = null): Promise<typeRest.VTTS0308U_RESPONSE> {
            return await this.request(secret, 'VTTS0308U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTTS0307U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS0307U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS0307U_RESPONSE} response               응답
     * @returns {typeRest.VTTS0307U_RESPONSE}
     */
    public async VTTS0307U(
        secret: Secret, requestHeader: typeRest.VTTS0307U_REQUEST_HEADER, requestBody: typeRest.VTTS0307U_REQUEST_BODY, 
        response: typeRest.VTTS0307U_RESPONSE | null = null): Promise<typeRest.VTTS0307U_RESPONSE> {
            return await this.request(secret, 'VTTS0307U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTTS0202U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS0202U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS0202U_RESPONSE} response               응답
     * @returns {typeRest.VTTS0202U_RESPONSE}
     */
    public async VTTS0202U(
        secret: Secret, requestHeader: typeRest.VTTS0202U_REQUEST_HEADER, requestBody: typeRest.VTTS0202U_REQUEST_BODY, 
        response: typeRest.VTTS0202U_RESPONSE | null = null): Promise<typeRest.VTTS0202U_RESPONSE> {
            return await this.request(secret, 'VTTS0202U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTTS1005U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS1005U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS1005U_RESPONSE} response               응답
     * @returns {typeRest.VTTS1005U_RESPONSE}
     */
    public async VTTS1005U(
        secret: Secret, requestHeader: typeRest.VTTS1005U_REQUEST_HEADER, requestBody: typeRest.VTTS1005U_REQUEST_BODY, 
        response: typeRest.VTTS1005U_RESPONSE | null = null): Promise<typeRest.VTTS1005U_RESPONSE> {
            return await this.request(secret, 'VTTS1005U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTTS1002U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS1002U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS1002U_RESPONSE} response               응답
     * @returns {typeRest.VTTS1002U_RESPONSE}
     */
    public async VTTS1002U(
        secret: Secret, requestHeader: typeRest.VTTS1002U_REQUEST_HEADER, requestBody: typeRest.VTTS1002U_REQUEST_BODY, 
        response: typeRest.VTTS1002U_RESPONSE | null = null): Promise<typeRest.VTTS1002U_RESPONSE> {
            return await this.request(secret, 'VTTS1002U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTTS1001U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS1001U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS1001U_RESPONSE} response               응답
     * @returns {typeRest.VTTS1001U_RESPONSE}
     */
    public async VTTS1001U(
        secret: Secret, requestHeader: typeRest.VTTS1001U_REQUEST_HEADER, requestBody: typeRest.VTTS1001U_REQUEST_BODY, 
        response: typeRest.VTTS1001U_RESPONSE | null = null): Promise<typeRest.VTTS1001U_RESPONSE> {
            return await this.request(secret, 'VTTS1001U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTTS0305U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS0305U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS0305U_RESPONSE} response               응답
     * @returns {typeRest.VTTS0305U_RESPONSE}
     */
    public async VTTS0305U(
        secret: Secret, requestHeader: typeRest.VTTS0305U_REQUEST_HEADER, requestBody: typeRest.VTTS0305U_REQUEST_BODY, 
        response: typeRest.VTTS0305U_RESPONSE | null = null): Promise<typeRest.VTTS0305U_RESPONSE> {
            return await this.request(secret, 'VTTS0305U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTTS0304U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS0304U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS0304U_RESPONSE} response               응답
     * @returns {typeRest.VTTS0304U_RESPONSE}
     */
    public async VTTS0304U(
        secret: Secret, requestHeader: typeRest.VTTS0304U_REQUEST_HEADER, requestBody: typeRest.VTTS0304U_REQUEST_BODY, 
        response: typeRest.VTTS0304U_RESPONSE | null = null): Promise<typeRest.VTTS0304U_RESPONSE> {
            return await this.request(secret, 'VTTS0304U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTTS0311U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS0311U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS0311U_RESPONSE} response               응답
     * @returns {typeRest.VTTS0311U_RESPONSE}
     */
    public async VTTS0311U(
        secret: Secret, requestHeader: typeRest.VTTS0311U_REQUEST_HEADER, requestBody: typeRest.VTTS0311U_REQUEST_BODY, 
        response: typeRest.VTTS0311U_RESPONSE | null = null): Promise<typeRest.VTTS0311U_RESPONSE> {
            return await this.request(secret, 'VTTS0311U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTTS0310U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS0310U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS0310U_RESPONSE} response               응답
     * @returns {typeRest.VTTS0310U_RESPONSE}
     */
    public async VTTS0310U(
        secret: Secret, requestHeader: typeRest.VTTS0310U_REQUEST_HEADER, requestBody: typeRest.VTTS0310U_REQUEST_BODY, 
        response: typeRest.VTTS0310U_RESPONSE | null = null): Promise<typeRest.VTTS0310U_RESPONSE> {
            return await this.request(secret, 'VTTS0310U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 정정취소주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTT1004U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTT1004U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTT1004U_RESPONSE} response               응답
     * @returns {typeRest.TTTT1004U_RESPONSE}
     */
    public async TTTT1004U(
        secret: Secret, requestHeader: typeRest.TTTT1004U_REQUEST_HEADER, requestBody: typeRest.TTTT1004U_REQUEST_BODY, 
        response: typeRest.TTTT1004U_RESPONSE | null = null): Promise<typeRest.TTTT1004U_RESPONSE> {
            return await this.request(secret, 'TTTT1004U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 정정취소주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTS1003U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS1003U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS1003U_RESPONSE} response               응답
     * @returns {typeRest.TTTS1003U_RESPONSE}
     */
    public async TTTS1003U(
        secret: Secret, requestHeader: typeRest.TTTS1003U_REQUEST_HEADER, requestBody: typeRest.TTTS1003U_REQUEST_BODY, 
        response: typeRest.TTTS1003U_RESPONSE | null = null): Promise<typeRest.TTTS1003U_RESPONSE> {
            return await this.request(secret, 'TTTS1003U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 정정취소주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTS0309U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS0309U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS0309U_RESPONSE} response               응답
     * @returns {typeRest.TTTS0309U_RESPONSE}
     */
    public async TTTS0309U(
        secret: Secret, requestHeader: typeRest.TTTS0309U_REQUEST_HEADER, requestBody: typeRest.TTTS0309U_REQUEST_BODY, 
        response: typeRest.TTTS0309U_RESPONSE | null = null): Promise<typeRest.TTTS0309U_RESPONSE> {
            return await this.request(secret, 'TTTS0309U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 정정취소주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTS0302U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS0302U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS0302U_RESPONSE} response               응답
     * @returns {typeRest.TTTS0302U_RESPONSE}
     */
    public async TTTS0302U(
        secret: Secret, requestHeader: typeRest.TTTS0302U_REQUEST_HEADER, requestBody: typeRest.TTTS0302U_REQUEST_BODY, 
        response: typeRest.TTTS0302U_RESPONSE | null = null): Promise<typeRest.TTTS0302U_RESPONSE> {
            return await this.request(secret, 'TTTS0302U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 정정취소주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTS0306U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS0306U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS0306U_RESPONSE} response               응답
     * @returns {typeRest.TTTS0306U_RESPONSE}
     */
    public async TTTS0306U(
        secret: Secret, requestHeader: typeRest.TTTS0306U_REQUEST_HEADER, requestBody: typeRest.TTTS0306U_REQUEST_BODY, 
        response: typeRest.TTTS0306U_RESPONSE | null = null): Promise<typeRest.TTTS0306U_RESPONSE> {
            return await this.request(secret, 'TTTS0306U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 정정취소주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTS0312U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS0312U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS0312U_RESPONSE} response               응답
     * @returns {typeRest.TTTS0312U_RESPONSE}
     */
    public async TTTS0312U(
        secret: Secret, requestHeader: typeRest.TTTS0312U_REQUEST_HEADER, requestBody: typeRest.TTTS0312U_REQUEST_BODY, 
        response: typeRest.TTTS0312U_RESPONSE | null = null): Promise<typeRest.TTTS0312U_RESPONSE> {
            return await this.request(secret, 'TTTS0312U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 정정취소주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTTT1004U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTT1004U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTT1004U_RESPONSE} response               응답
     * @returns {typeRest.VTTT1004U_RESPONSE}
     */
    public async VTTT1004U(
        secret: Secret, requestHeader: typeRest.VTTT1004U_REQUEST_HEADER, requestBody: typeRest.VTTT1004U_REQUEST_BODY, 
        response: typeRest.VTTT1004U_RESPONSE | null = null): Promise<typeRest.VTTT1004U_RESPONSE> {
            return await this.request(secret, 'VTTT1004U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 정정취소주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTTS1003U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS1003U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS1003U_RESPONSE} response               응답
     * @returns {typeRest.VTTS1003U_RESPONSE}
     */
    public async VTTS1003U(
        secret: Secret, requestHeader: typeRest.VTTS1003U_REQUEST_HEADER, requestBody: typeRest.VTTS1003U_REQUEST_BODY, 
        response: typeRest.VTTS1003U_RESPONSE | null = null): Promise<typeRest.VTTS1003U_RESPONSE> {
            return await this.request(secret, 'VTTS1003U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 정정취소주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTTS0309U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS0309U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS0309U_RESPONSE} response               응답
     * @returns {typeRest.VTTS0309U_RESPONSE}
     */
    public async VTTS0309U(
        secret: Secret, requestHeader: typeRest.VTTS0309U_REQUEST_HEADER, requestBody: typeRest.VTTS0309U_REQUEST_BODY, 
        response: typeRest.VTTS0309U_RESPONSE | null = null): Promise<typeRest.VTTS0309U_RESPONSE> {
            return await this.request(secret, 'VTTS0309U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 정정취소주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTTS0302U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS0302U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS0302U_RESPONSE} response               응답
     * @returns {typeRest.VTTS0302U_RESPONSE}
     */
    public async VTTS0302U(
        secret: Secret, requestHeader: typeRest.VTTS0302U_REQUEST_HEADER, requestBody: typeRest.VTTS0302U_REQUEST_BODY, 
        response: typeRest.VTTS0302U_RESPONSE | null = null): Promise<typeRest.VTTS0302U_RESPONSE> {
            return await this.request(secret, 'VTTS0302U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 정정취소주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTTS0306U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS0306U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS0306U_RESPONSE} response               응답
     * @returns {typeRest.VTTS0306U_RESPONSE}
     */
    public async VTTS0306U(
        secret: Secret, requestHeader: typeRest.VTTS0306U_REQUEST_HEADER, requestBody: typeRest.VTTS0306U_REQUEST_BODY, 
        response: typeRest.VTTS0306U_RESPONSE | null = null): Promise<typeRest.VTTS0306U_RESPONSE> {
            return await this.request(secret, 'VTTS0306U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 정정취소주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTTS0312U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS0312U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS0312U_RESPONSE} response               응답
     * @returns {typeRest.VTTS0312U_RESPONSE}
     */
    public async VTTS0312U(
        secret: Secret, requestHeader: typeRest.VTTS0312U_REQUEST_HEADER, requestBody: typeRest.VTTS0312U_REQUEST_BODY, 
        response: typeRest.VTTS0312U_RESPONSE | null = null): Promise<typeRest.VTTS0312U_RESPONSE> {
            return await this.request(secret, 'VTTS0312U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 예약주문접수
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTT3016U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTT3016U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTT3016U_RESPONSE} response               응답
     * @returns {typeRest.TTTT3016U_RESPONSE}
     */
    public async TTTT3016U(
        secret: Secret, requestHeader: typeRest.TTTT3016U_REQUEST_HEADER, requestBody: typeRest.TTTT3016U_REQUEST_BODY, 
        response: typeRest.TTTT3016U_RESPONSE | null = null): Promise<typeRest.TTTT3016U_RESPONSE> {
            return await this.request(secret, 'TTTT3016U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 예약주문접수
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTT3014U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTT3014U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTT3014U_RESPONSE} response               응답
     * @returns {typeRest.TTTT3014U_RESPONSE}
     */
    public async TTTT3014U(
        secret: Secret, requestHeader: typeRest.TTTT3014U_REQUEST_HEADER, requestBody: typeRest.TTTT3014U_REQUEST_BODY, 
        response: typeRest.TTTT3014U_RESPONSE | null = null): Promise<typeRest.TTTT3014U_RESPONSE> {
            return await this.request(secret, 'TTTT3014U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 예약주문접수
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTS3013U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS3013U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS3013U_RESPONSE} response               응답
     * @returns {typeRest.TTTS3013U_RESPONSE}
     */
    public async TTTS3013U(
        secret: Secret, requestHeader: typeRest.TTTS3013U_REQUEST_HEADER, requestBody: typeRest.TTTS3013U_REQUEST_BODY, 
        response: typeRest.TTTS3013U_RESPONSE | null = null): Promise<typeRest.TTTS3013U_RESPONSE> {
            return await this.request(secret, 'TTTS3013U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 예약주문접수
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTTT3016U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTT3016U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTT3016U_RESPONSE} response               응답
     * @returns {typeRest.VTTT3016U_RESPONSE}
     */
    public async VTTT3016U(
        secret: Secret, requestHeader: typeRest.VTTT3016U_REQUEST_HEADER, requestBody: typeRest.VTTT3016U_REQUEST_BODY, 
        response: typeRest.VTTT3016U_RESPONSE | null = null): Promise<typeRest.VTTT3016U_RESPONSE> {
            return await this.request(secret, 'VTTT3016U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 예약주문접수
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTTT3014U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTT3014U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTT3014U_RESPONSE} response               응답
     * @returns {typeRest.VTTT3014U_RESPONSE}
     */
    public async VTTT3014U(
        secret: Secret, requestHeader: typeRest.VTTT3014U_REQUEST_HEADER, requestBody: typeRest.VTTT3014U_REQUEST_BODY, 
        response: typeRest.VTTT3014U_RESPONSE | null = null): Promise<typeRest.VTTT3014U_RESPONSE> {
            return await this.request(secret, 'VTTT3014U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 예약주문접수
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTTS3013U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS3013U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS3013U_RESPONSE} response               응답
     * @returns {typeRest.VTTS3013U_RESPONSE}
     */
    public async VTTS3013U(
        secret: Secret, requestHeader: typeRest.VTTS3013U_REQUEST_HEADER, requestBody: typeRest.VTTS3013U_REQUEST_BODY, 
        response: typeRest.VTTS3013U_RESPONSE | null = null): Promise<typeRest.VTTS3013U_RESPONSE> {
            return await this.request(secret, 'VTTS3013U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 예약주문접수취소
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTT3017U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTT3017U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTT3017U_RESPONSE} response               응답
     * @returns {typeRest.TTTT3017U_RESPONSE}
     */
    public async TTTT3017U(
        secret: Secret, requestHeader: typeRest.TTTT3017U_REQUEST_HEADER, requestBody: typeRest.TTTT3017U_REQUEST_BODY, 
        response: typeRest.TTTT3017U_RESPONSE | null = null): Promise<typeRest.TTTT3017U_RESPONSE> {
            return await this.request(secret, 'TTTT3017U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 예약주문접수취소
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTTT3017U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTT3017U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTT3017U_RESPONSE} response               응답
     * @returns {typeRest.VTTT3017U_RESPONSE}
     */
    public async VTTT3017U(
        secret: Secret, requestHeader: typeRest.VTTT3017U_REQUEST_HEADER, requestBody: typeRest.VTTT3017U_REQUEST_BODY, 
        response: typeRest.VTTT3017U_RESPONSE | null = null): Promise<typeRest.VTTT3017U_RESPONSE> {
            return await this.request(secret, 'VTTT3017U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 미체결내역
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTS3018R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS3018R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS3018R_RESPONSE} response               응답
     * @returns {typeRest.TTTS3018R_RESPONSE}
     */
    public async TTTS3018R(
        secret: Secret, requestHeader: typeRest.TTTS3018R_REQUEST_HEADER, requestBody: typeRest.TTTS3018R_REQUEST_BODY, 
        response: typeRest.TTTS3018R_RESPONSE | null = null): Promise<typeRest.TTTS3018R_RESPONSE> {
            return await this.request(secret, 'TTTS3018R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 잔고
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTS3012R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS3012R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS3012R_RESPONSE} response               응답
     * @returns {typeRest.TTTS3012R_RESPONSE}
     */
    public async TTTS3012R(
        secret: Secret, requestHeader: typeRest.TTTS3012R_REQUEST_HEADER, requestBody: typeRest.TTTS3012R_REQUEST_BODY, 
        response: typeRest.TTTS3012R_RESPONSE | null = null): Promise<typeRest.TTTS3012R_RESPONSE> {
            return await this.request(secret, 'TTTS3012R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 잔고
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTTS3012R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS3012R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS3012R_RESPONSE} response               응답
     * @returns {typeRest.VTTS3012R_RESPONSE}
     */
    public async VTTS3012R(
        secret: Secret, requestHeader: typeRest.VTTS3012R_REQUEST_HEADER, requestBody: typeRest.VTTS3012R_REQUEST_BODY, 
        response: typeRest.VTTS3012R_RESPONSE | null = null): Promise<typeRest.VTTS3012R_RESPONSE> {
            return await this.request(secret, 'VTTS3012R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 주문체결내역
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTS3035R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS3035R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS3035R_RESPONSE} response               응답
     * @returns {typeRest.TTTS3035R_RESPONSE}
     */
    public async TTTS3035R(
        secret: Secret, requestHeader: typeRest.TTTS3035R_REQUEST_HEADER, requestBody: typeRest.TTTS3035R_REQUEST_BODY, 
        response: typeRest.TTTS3035R_RESPONSE | null = null): Promise<typeRest.TTTS3035R_RESPONSE> {
            return await this.request(secret, 'TTTS3035R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 주문체결내역
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTTS3035R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS3035R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS3035R_RESPONSE} response               응답
     * @returns {typeRest.VTTS3035R_RESPONSE}
     */
    public async VTTS3035R(
        secret: Secret, requestHeader: typeRest.VTTS3035R_REQUEST_HEADER, requestBody: typeRest.VTTS3035R_REQUEST_BODY, 
        response: typeRest.VTTS3035R_RESPONSE | null = null): Promise<typeRest.VTTS3035R_RESPONSE> {
            return await this.request(secret, 'VTTS3035R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 체결기준현재잔고
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CTRP6504R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTRP6504R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTRP6504R_RESPONSE} response               응답
     * @returns {typeRest.CTRP6504R_RESPONSE}
     */
    public async CTRP6504R(
        secret: Secret, requestHeader: typeRest.CTRP6504R_REQUEST_HEADER, requestBody: typeRest.CTRP6504R_REQUEST_BODY, 
        response: typeRest.CTRP6504R_RESPONSE | null = null): Promise<typeRest.CTRP6504R_RESPONSE> {
            return await this.request(secret, 'CTRP6504R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 체결기준현재잔고
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTRP6504R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTRP6504R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTRP6504R_RESPONSE} response               응답
     * @returns {typeRest.VTRP6504R_RESPONSE}
     */
    public async VTRP6504R(
        secret: Secret, requestHeader: typeRest.VTRP6504R_REQUEST_HEADER, requestBody: typeRest.VTRP6504R_REQUEST_BODY, 
        response: typeRest.VTRP6504R_RESPONSE | null = null): Promise<typeRest.VTRP6504R_RESPONSE> {
            return await this.request(secret, 'VTRP6504R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 예약주문조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTT3039R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTT3039R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTT3039R_RESPONSE} response               응답
     * @returns {typeRest.TTTT3039R_RESPONSE}
     */
    public async TTTT3039R(
        secret: Secret, requestHeader: typeRest.TTTT3039R_REQUEST_HEADER, requestBody: typeRest.TTTT3039R_REQUEST_BODY, 
        response: typeRest.TTTT3039R_RESPONSE | null = null): Promise<typeRest.TTTT3039R_RESPONSE> {
            return await this.request(secret, 'TTTT3039R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 예약주문조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTS3014R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS3014R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS3014R_RESPONSE} response               응답
     * @returns {typeRest.TTTS3014R_RESPONSE}
     */
    public async TTTS3014R(
        secret: Secret, requestHeader: typeRest.TTTS3014R_REQUEST_HEADER, requestBody: typeRest.TTTS3014R_REQUEST_BODY, 
        response: typeRest.TTTS3014R_RESPONSE | null = null): Promise<typeRest.TTTS3014R_RESPONSE> {
            return await this.request(secret, 'TTTS3014R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 매수가능금액조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTS3007R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS3007R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS3007R_RESPONSE} response               응답
     * @returns {typeRest.TTTS3007R_RESPONSE}
     */
    public async TTTS3007R(
        secret: Secret, requestHeader: typeRest.TTTS3007R_REQUEST_HEADER, requestBody: typeRest.TTTS3007R_REQUEST_BODY, 
        response: typeRest.TTTS3007R_RESPONSE | null = null): Promise<typeRest.TTTS3007R_RESPONSE> {
            return await this.request(secret, 'TTTS3007R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 매수가능금액조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.VTTS3007R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS3007R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS3007R_RESPONSE} response               응답
     * @returns {typeRest.VTTS3007R_RESPONSE}
     */
    public async VTTS3007R(
        secret: Secret, requestHeader: typeRest.VTTS3007R_REQUEST_HEADER, requestBody: typeRest.VTTS3007R_REQUEST_BODY, 
        response: typeRest.VTTS3007R_RESPONSE | null = null): Promise<typeRest.VTTS3007R_RESPONSE> {
            return await this.request(secret, 'VTTS3007R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 미국주간주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTS6036U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS6036U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS6036U_RESPONSE} response               응답
     * @returns {typeRest.TTTS6036U_RESPONSE}
     */
    public async TTTS6036U(
        secret: Secret, requestHeader: typeRest.TTTS6036U_REQUEST_HEADER, requestBody: typeRest.TTTS6036U_REQUEST_BODY, 
        response: typeRest.TTTS6036U_RESPONSE | null = null): Promise<typeRest.TTTS6036U_RESPONSE> {
            return await this.request(secret, 'TTTS6036U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 미국주간주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTS6037U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS6037U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS6037U_RESPONSE} response               응답
     * @returns {typeRest.TTTS6037U_RESPONSE}
     */
    public async TTTS6037U(
        secret: Secret, requestHeader: typeRest.TTTS6037U_REQUEST_HEADER, requestBody: typeRest.TTTS6037U_REQUEST_BODY, 
        response: typeRest.TTTS6037U_RESPONSE | null = null): Promise<typeRest.TTTS6037U_RESPONSE> {
            return await this.request(secret, 'TTTS6037U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 미국주간정정취소
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTS6038U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS6038U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS6038U_RESPONSE} response               응답
     * @returns {typeRest.TTTS6038U_RESPONSE}
     */
    public async TTTS6038U(
        secret: Secret, requestHeader: typeRest.TTTS6038U_REQUEST_HEADER, requestBody: typeRest.TTTS6038U_REQUEST_BODY, 
        response: typeRest.TTTS6038U_RESPONSE | null = null): Promise<typeRest.TTTS6038U_RESPONSE> {
            return await this.request(secret, 'TTTS6038U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 기간손익
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTS3039R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS3039R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS3039R_RESPONSE} response               응답
     * @returns {typeRest.TTTS3039R_RESPONSE}
     */
    public async TTTS3039R(
        secret: Secret, requestHeader: typeRest.TTTS3039R_REQUEST_HEADER, requestBody: typeRest.TTTS3039R_REQUEST_BODY, 
        response: typeRest.TTTS3039R_RESPONSE | null = null): Promise<typeRest.TTTS3039R_RESPONSE> {
            return await this.request(secret, 'TTTS3039R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외증거금 통화별조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTC2101R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC2101R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC2101R_RESPONSE} response               응답
     * @returns {typeRest.TTTC2101R_RESPONSE}
     */
    public async TTTC2101R(
        secret: Secret, requestHeader: typeRest.TTTC2101R_REQUEST_HEADER, requestBody: typeRest.TTTC2101R_REQUEST_BODY, 
        response: typeRest.TTTC2101R_RESPONSE | null = null): Promise<typeRest.TTTC2101R_RESPONSE> {
            return await this.request(secret, 'TTTC2101R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 일별거래내역
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CTOS4001R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTOS4001R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTOS4001R_RESPONSE} response               응답
     * @returns {typeRest.CTOS4001R_RESPONSE}
     */
    public async CTOS4001R(
        secret: Secret, requestHeader: typeRest.CTOS4001R_REQUEST_HEADER, requestBody: typeRest.CTOS4001R_REQUEST_BODY, 
        response: typeRest.CTOS4001R_RESPONSE | null = null): Promise<typeRest.CTOS4001R_RESPONSE> {
            return await this.request(secret, 'CTOS4001R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 결제기준잔고
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CTRP6010R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTRP6010R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTRP6010R_RESPONSE} response               응답
     * @returns {typeRest.CTRP6010R_RESPONSE}
     */
    public async CTRP6010R(
        secret: Secret, requestHeader: typeRest.CTRP6010R_REQUEST_HEADER, requestBody: typeRest.CTRP6010R_REQUEST_BODY, 
        response: typeRest.CTRP6010R_RESPONSE | null = null): Promise<typeRest.CTRP6010R_RESPONSE> {
            return await this.request(secret, 'CTRP6010R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 현재체결가
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFS00000300_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFS00000300_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFS00000300_RESPONSE} response               응답
     * @returns {typeRest.HHDFS00000300_RESPONSE}
     */
    public async HHDFS00000300(
        secret: Secret, requestHeader: typeRest.HHDFS00000300_REQUEST_HEADER, requestBody: typeRest.HHDFS00000300_REQUEST_BODY, 
        response: typeRest.HHDFS00000300_RESPONSE | null = null): Promise<typeRest.HHDFS00000300_RESPONSE> {
            return await this.request(secret, 'HHDFS00000300', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 기간별시세
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFS76240000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFS76240000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFS76240000_RESPONSE} response               응답
     * @returns {typeRest.HHDFS76240000_RESPONSE}
     */
    public async HHDFS76240000(
        secret: Secret, requestHeader: typeRest.HHDFS76240000_REQUEST_HEADER, requestBody: typeRest.HHDFS76240000_REQUEST_BODY, 
        response: typeRest.HHDFS76240000_RESPONSE | null = null): Promise<typeRest.HHDFS76240000_RESPONSE> {
            return await this.request(secret, 'HHDFS76240000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 종목/지수/환율기간별시세(일/주/월/년)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKST03030100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST03030100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST03030100_RESPONSE} response               응답
     * @returns {typeRest.FHKST03030100_RESPONSE}
     */
    public async FHKST03030100(
        secret: Secret, requestHeader: typeRest.FHKST03030100_REQUEST_HEADER, requestBody: typeRest.FHKST03030100_REQUEST_BODY, 
        response: typeRest.FHKST03030100_RESPONSE | null = null): Promise<typeRest.FHKST03030100_RESPONSE> {
            return await this.request(secret, 'FHKST03030100', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식조건검색
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFS76410000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFS76410000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFS76410000_RESPONSE} response               응답
     * @returns {typeRest.HHDFS76410000_RESPONSE}
     */
    public async HHDFS76410000(
        secret: Secret, requestHeader: typeRest.HHDFS76410000_REQUEST_HEADER, requestBody: typeRest.HHDFS76410000_REQUEST_BODY, 
        response: typeRest.HHDFS76410000_RESPONSE | null = null): Promise<typeRest.HHDFS76410000_RESPONSE> {
            return await this.request(secret, 'HHDFS76410000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외결제일자조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CTOS5011R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTOS5011R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTOS5011R_RESPONSE} response               응답
     * @returns {typeRest.CTOS5011R_RESPONSE}
     */
    public async CTOS5011R(
        secret: Secret, requestHeader: typeRest.CTOS5011R_REQUEST_HEADER, requestBody: typeRest.CTOS5011R_REQUEST_BODY, 
        response: typeRest.CTOS5011R_RESPONSE | null = null): Promise<typeRest.CTOS5011R_RESPONSE> {
            return await this.request(secret, 'CTOS5011R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 현재가상세
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFS76200200_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFS76200200_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFS76200200_RESPONSE} response               응답
     * @returns {typeRest.HHDFS76200200_RESPONSE}
     */
    public async HHDFS76200200(
        secret: Secret, requestHeader: typeRest.HHDFS76200200_REQUEST_HEADER, requestBody: typeRest.HHDFS76200200_REQUEST_BODY, 
        response: typeRest.HHDFS76200200_RESPONSE | null = null): Promise<typeRest.HHDFS76200200_RESPONSE> {
            return await this.request(secret, 'HHDFS76200200', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식분봉조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFS76950200_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFS76950200_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFS76950200_RESPONSE} response               응답
     * @returns {typeRest.HHDFS76950200_RESPONSE}
     */
    public async HHDFS76950200(
        secret: Secret, requestHeader: typeRest.HHDFS76950200_REQUEST_HEADER, requestBody: typeRest.HHDFS76950200_REQUEST_BODY, 
        response: typeRest.HHDFS76950200_RESPONSE | null = null): Promise<typeRest.HHDFS76950200_RESPONSE> {
            return await this.request(secret, 'HHDFS76950200', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외지수분봉조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKST03030200_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST03030200_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST03030200_RESPONSE} response               응답
     * @returns {typeRest.FHKST03030200_RESPONSE}
     */
    public async FHKST03030200(
        secret: Secret, requestHeader: typeRest.FHKST03030200_REQUEST_HEADER, requestBody: typeRest.FHKST03030200_REQUEST_BODY, 
        response: typeRest.FHKST03030200_RESPONSE | null = null): Promise<typeRest.FHKST03030200_RESPONSE> {
            return await this.request(secret, 'FHKST03030200', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 상품기본정보
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CTPF1702R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTPF1702R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTPF1702R_RESPONSE} response               응답
     * @returns {typeRest.CTPF1702R_RESPONSE}
     */
    public async CTPF1702R(
        secret: Secret, requestHeader: typeRest.CTPF1702R_REQUEST_HEADER, requestBody: typeRest.CTPF1702R_REQUEST_BODY, 
        response: typeRest.CTPF1702R_RESPONSE | null = null): Promise<typeRest.CTPF1702R_RESPONSE> {
            return await this.request(secret, 'CTPF1702R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 체결추이
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFS76200300_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFS76200300_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFS76200300_RESPONSE} response               응답
     * @returns {typeRest.HHDFS76200300_RESPONSE}
     */
    public async HHDFS76200300(
        secret: Secret, requestHeader: typeRest.HHDFS76200300_REQUEST_HEADER, requestBody: typeRest.HHDFS76200300_REQUEST_BODY, 
        response: typeRest.HHDFS76200300_RESPONSE | null = null): Promise<typeRest.HHDFS76200300_RESPONSE> {
            return await this.request(secret, 'HHDFS76200300', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 업종별시세
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFS76370000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFS76370000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFS76370000_RESPONSE} response               응답
     * @returns {typeRest.HHDFS76370000_RESPONSE}
     */
    public async HHDFS76370000(
        secret: Secret, requestHeader: typeRest.HHDFS76370000_REQUEST_HEADER, requestBody: typeRest.HHDFS76370000_REQUEST_BODY, 
        response: typeRest.HHDFS76370000_RESPONSE | null = null): Promise<typeRest.HHDFS76370000_RESPONSE> {
            return await this.request(secret, 'HHDFS76370000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 업종별코드조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFS76370100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFS76370100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFS76370100_RESPONSE} response               응답
     * @returns {typeRest.HHDFS76370100_RESPONSE}
     */
    public async HHDFS76370100(
        secret: Secret, requestHeader: typeRest.HHDFS76370100_REQUEST_HEADER, requestBody: typeRest.HHDFS76370100_REQUEST_BODY, 
        response: typeRest.HHDFS76370100_RESPONSE | null = null): Promise<typeRest.HHDFS76370100_RESPONSE> {
            return await this.request(secret, 'HHDFS76370100', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 현재가 10호가
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFS76200100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFS76200100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFS76200100_RESPONSE} response               응답
     * @returns {typeRest.HHDFS76200100_RESPONSE}
     */
    public async HHDFS76200100(
        secret: Secret, requestHeader: typeRest.HHDFS76200100_REQUEST_HEADER, requestBody: typeRest.HHDFS76200100_REQUEST_BODY, 
        response: typeRest.HHDFS76200100_RESPONSE | null = null): Promise<typeRest.HHDFS76200100_RESPONSE> {
            return await this.request(secret, 'HHDFS76200100', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 가격급등락
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFS76260000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFS76260000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFS76260000_RESPONSE} response               응답
     * @returns {typeRest.HHDFS76260000_RESPONSE}
     */
    public async HHDFS76260000(
        secret: Secret, requestHeader: typeRest.HHDFS76260000_REQUEST_HEADER, requestBody: typeRest.HHDFS76260000_REQUEST_BODY, 
        response: typeRest.HHDFS76260000_RESPONSE | null = null): Promise<typeRest.HHDFS76260000_RESPONSE> {
            return await this.request(secret, 'HHDFS76260000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 거래량급증
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFS76270000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFS76270000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFS76270000_RESPONSE} response               응답
     * @returns {typeRest.HHDFS76270000_RESPONSE}
     */
    public async HHDFS76270000(
        secret: Secret, requestHeader: typeRest.HHDFS76270000_REQUEST_HEADER, requestBody: typeRest.HHDFS76270000_REQUEST_BODY, 
        response: typeRest.HHDFS76270000_RESPONSE | null = null): Promise<typeRest.HHDFS76270000_RESPONSE> {
            return await this.request(secret, 'HHDFS76270000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 매수체결강도상위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFS76280000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFS76280000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFS76280000_RESPONSE} response               응답
     * @returns {typeRest.HHDFS76280000_RESPONSE}
     */
    public async HHDFS76280000(
        secret: Secret, requestHeader: typeRest.HHDFS76280000_REQUEST_HEADER, requestBody: typeRest.HHDFS76280000_REQUEST_BODY, 
        response: typeRest.HHDFS76280000_RESPONSE | null = null): Promise<typeRest.HHDFS76280000_RESPONSE> {
            return await this.request(secret, 'HHDFS76280000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 상승율/하락율
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFS76290000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFS76290000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFS76290000_RESPONSE} response               응답
     * @returns {typeRest.HHDFS76290000_RESPONSE}
     */
    public async HHDFS76290000(
        secret: Secret, requestHeader: typeRest.HHDFS76290000_REQUEST_HEADER, requestBody: typeRest.HHDFS76290000_REQUEST_BODY, 
        response: typeRest.HHDFS76290000_RESPONSE | null = null): Promise<typeRest.HHDFS76290000_RESPONSE> {
            return await this.request(secret, 'HHDFS76290000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 신고/신저가
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFS76300000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFS76300000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFS76300000_RESPONSE} response               응답
     * @returns {typeRest.HHDFS76300000_RESPONSE}
     */
    public async HHDFS76300000(
        secret: Secret, requestHeader: typeRest.HHDFS76300000_REQUEST_HEADER, requestBody: typeRest.HHDFS76300000_REQUEST_BODY, 
        response: typeRest.HHDFS76300000_RESPONSE | null = null): Promise<typeRest.HHDFS76300000_RESPONSE> {
            return await this.request(secret, 'HHDFS76300000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 거래량순위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFS76310010_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFS76310010_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFS76310010_RESPONSE} response               응답
     * @returns {typeRest.HHDFS76310010_RESPONSE}
     */
    public async HHDFS76310010(
        secret: Secret, requestHeader: typeRest.HHDFS76310010_REQUEST_HEADER, requestBody: typeRest.HHDFS76310010_REQUEST_BODY, 
        response: typeRest.HHDFS76310010_RESPONSE | null = null): Promise<typeRest.HHDFS76310010_RESPONSE> {
            return await this.request(secret, 'HHDFS76310010', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 거래대금순위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFS76320010_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFS76320010_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFS76320010_RESPONSE} response               응답
     * @returns {typeRest.HHDFS76320010_RESPONSE}
     */
    public async HHDFS76320010(
        secret: Secret, requestHeader: typeRest.HHDFS76320010_REQUEST_HEADER, requestBody: typeRest.HHDFS76320010_REQUEST_BODY, 
        response: typeRest.HHDFS76320010_RESPONSE | null = null): Promise<typeRest.HHDFS76320010_RESPONSE> {
            return await this.request(secret, 'HHDFS76320010', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 거래증가율순위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFS76330000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFS76330000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFS76330000_RESPONSE} response               응답
     * @returns {typeRest.HHDFS76330000_RESPONSE}
     */
    public async HHDFS76330000(
        secret: Secret, requestHeader: typeRest.HHDFS76330000_REQUEST_HEADER, requestBody: typeRest.HHDFS76330000_REQUEST_BODY, 
        response: typeRest.HHDFS76330000_RESPONSE | null = null): Promise<typeRest.HHDFS76330000_RESPONSE> {
            return await this.request(secret, 'HHDFS76330000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 거래회전율순위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFS76340000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFS76340000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFS76340000_RESPONSE} response               응답
     * @returns {typeRest.HHDFS76340000_RESPONSE}
     */
    public async HHDFS76340000(
        secret: Secret, requestHeader: typeRest.HHDFS76340000_REQUEST_HEADER, requestBody: typeRest.HHDFS76340000_REQUEST_BODY, 
        response: typeRest.HHDFS76340000_RESPONSE | null = null): Promise<typeRest.HHDFS76340000_RESPONSE> {
            return await this.request(secret, 'HHDFS76340000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 시가총액순위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFS76350100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFS76350100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFS76350100_RESPONSE} response               응답
     * @returns {typeRest.HHDFS76350100_RESPONSE}
     */
    public async HHDFS76350100(
        secret: Secret, requestHeader: typeRest.HHDFS76350100_REQUEST_HEADER, requestBody: typeRest.HHDFS76350100_REQUEST_BODY, 
        response: typeRest.HHDFS76350100_RESPONSE | null = null): Promise<typeRest.HHDFS76350100_RESPONSE> {
            return await this.request(secret, 'HHDFS76350100', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 기간별권리조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CTRGT011R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTRGT011R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTRGT011R_RESPONSE} response               응답
     * @returns {typeRest.CTRGT011R_RESPONSE}
     */
    public async CTRGT011R(
        secret: Secret, requestHeader: typeRest.CTRGT011R_REQUEST_HEADER, requestBody: typeRest.CTRGT011R_REQUEST_BODY, 
        response: typeRest.CTRGT011R_RESPONSE | null = null): Promise<typeRest.CTRGT011R_RESPONSE> {
            return await this.request(secret, 'CTRGT011R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외뉴스종합(제목)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHPSTH60100C1_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHPSTH60100C1_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHPSTH60100C1_RESPONSE} response               응답
     * @returns {typeRest.HHPSTH60100C1_RESPONSE}
     */
    public async HHPSTH60100C1(
        secret: Secret, requestHeader: typeRest.HHPSTH60100C1_REQUEST_HEADER, requestBody: typeRest.HHPSTH60100C1_REQUEST_BODY, 
        response: typeRest.HHPSTH60100C1_RESPONSE | null = null): Promise<typeRest.HHPSTH60100C1_RESPONSE> {
            return await this.request(secret, 'HHPSTH60100C1', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외주식 권리종합
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFS78330900_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFS78330900_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFS78330900_RESPONSE} response               응답
     * @returns {typeRest.HHDFS78330900_RESPONSE}
     */
    public async HHDFS78330900(
        secret: Secret, requestHeader: typeRest.HHDFS78330900_REQUEST_HEADER, requestBody: typeRest.HHDFS78330900_REQUEST_BODY, 
        response: typeRest.HHDFS78330900_RESPONSE | null = null): Promise<typeRest.HHDFS78330900_RESPONSE> {
            return await this.request(secret, 'HHDFS78330900', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 당사 해외주식담보대출 가능 종목
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CTLN4050R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTLN4050R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTLN4050R_RESPONSE} response               응답
     * @returns {typeRest.CTLN4050R_RESPONSE}
     */
    public async CTLN4050R(
        secret: Secret, requestHeader: typeRest.CTLN4050R_REQUEST_HEADER, requestBody: typeRest.CTLN4050R_REQUEST_BODY, 
        response: typeRest.CTLN4050R_RESPONSE | null = null): Promise<typeRest.CTLN4050R_RESPONSE> {
            return await this.request(secret, 'CTLN4050R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외속보(제목)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKST01011801_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST01011801_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST01011801_RESPONSE} response               응답
     * @returns {typeRest.FHKST01011801_RESPONSE}
     */
    public async FHKST01011801(
        secret: Secret, requestHeader: typeRest.FHKST01011801_REQUEST_HEADER, requestBody: typeRest.FHKST01011801_REQUEST_BODY, 
        response: typeRest.FHKST01011801_RESPONSE | null = null): Promise<typeRest.FHKST01011801_RESPONSE> {
            return await this.request(secret, 'FHKST01011801', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물옵션 주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.OTFM3001U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.OTFM3001U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.OTFM3001U_RESPONSE} response               응답
     * @returns {typeRest.OTFM3001U_RESPONSE}
     */
    public async OTFM3001U(
        secret: Secret, requestHeader: typeRest.OTFM3001U_REQUEST_HEADER, requestBody: typeRest.OTFM3001U_REQUEST_BODY, 
        response: typeRest.OTFM3001U_RESPONSE | null = null): Promise<typeRest.OTFM3001U_RESPONSE> {
            return await this.request(secret, 'OTFM3001U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물옵션 정정취소주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.OTFM3002U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.OTFM3002U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.OTFM3002U_RESPONSE} response               응답
     * @returns {typeRest.OTFM3002U_RESPONSE}
     */
    public async OTFM3002U(
        secret: Secret, requestHeader: typeRest.OTFM3002U_REQUEST_HEADER, requestBody: typeRest.OTFM3002U_REQUEST_BODY, 
        response: typeRest.OTFM3002U_RESPONSE | null = null): Promise<typeRest.OTFM3002U_RESPONSE> {
            return await this.request(secret, 'OTFM3002U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물옵션 정정취소주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.OTFM3003U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.OTFM3003U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.OTFM3003U_RESPONSE} response               응답
     * @returns {typeRest.OTFM3003U_RESPONSE}
     */
    public async OTFM3003U(
        secret: Secret, requestHeader: typeRest.OTFM3003U_REQUEST_HEADER, requestBody: typeRest.OTFM3003U_REQUEST_BODY, 
        response: typeRest.OTFM3003U_RESPONSE | null = null): Promise<typeRest.OTFM3003U_RESPONSE> {
            return await this.request(secret, 'OTFM3003U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물옵션 당일주문내역조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.OTFM3116R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.OTFM3116R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.OTFM3116R_RESPONSE} response               응답
     * @returns {typeRest.OTFM3116R_RESPONSE}
     */
    public async OTFM3116R(
        secret: Secret, requestHeader: typeRest.OTFM3116R_REQUEST_HEADER, requestBody: typeRest.OTFM3116R_REQUEST_BODY, 
        response: typeRest.OTFM3116R_RESPONSE | null = null): Promise<typeRest.OTFM3116R_RESPONSE> {
            return await this.request(secret, 'OTFM3116R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물옵션 미결제내역조회(잔고)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.OTFM1412R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.OTFM1412R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.OTFM1412R_RESPONSE} response               응답
     * @returns {typeRest.OTFM1412R_RESPONSE}
     */
    public async OTFM1412R(
        secret: Secret, requestHeader: typeRest.OTFM1412R_REQUEST_HEADER, requestBody: typeRest.OTFM1412R_REQUEST_BODY, 
        response: typeRest.OTFM1412R_RESPONSE | null = null): Promise<typeRest.OTFM1412R_RESPONSE> {
            return await this.request(secret, 'OTFM1412R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물옵션 주문가능조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.OTFM3304R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.OTFM3304R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.OTFM3304R_RESPONSE} response               응답
     * @returns {typeRest.OTFM3304R_RESPONSE}
     */
    public async OTFM3304R(
        secret: Secret, requestHeader: typeRest.OTFM3304R_REQUEST_HEADER, requestBody: typeRest.OTFM3304R_REQUEST_BODY, 
        response: typeRest.OTFM3304R_RESPONSE | null = null): Promise<typeRest.OTFM3304R_RESPONSE> {
            return await this.request(secret, 'OTFM3304R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물옵션 기간계좌손익 일별
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.OTFM3118R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.OTFM3118R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.OTFM3118R_RESPONSE} response               응답
     * @returns {typeRest.OTFM3118R_RESPONSE}
     */
    public async OTFM3118R(
        secret: Secret, requestHeader: typeRest.OTFM3118R_REQUEST_HEADER, requestBody: typeRest.OTFM3118R_REQUEST_BODY, 
        response: typeRest.OTFM3118R_RESPONSE | null = null): Promise<typeRest.OTFM3118R_RESPONSE> {
            return await this.request(secret, 'OTFM3118R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물옵션 일별 체결내역
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.OTFM3122R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.OTFM3122R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.OTFM3122R_RESPONSE} response               응답
     * @returns {typeRest.OTFM3122R_RESPONSE}
     */
    public async OTFM3122R(
        secret: Secret, requestHeader: typeRest.OTFM3122R_REQUEST_HEADER, requestBody: typeRest.OTFM3122R_REQUEST_BODY, 
        response: typeRest.OTFM3122R_RESPONSE | null = null): Promise<typeRest.OTFM3122R_RESPONSE> {
            return await this.request(secret, 'OTFM3122R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물옵션 예수금현황
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.OTFM1411R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.OTFM1411R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.OTFM1411R_RESPONSE} response               응답
     * @returns {typeRest.OTFM1411R_RESPONSE}
     */
    public async OTFM1411R(
        secret: Secret, requestHeader: typeRest.OTFM1411R_REQUEST_HEADER, requestBody: typeRest.OTFM1411R_REQUEST_BODY, 
        response: typeRest.OTFM1411R_RESPONSE | null = null): Promise<typeRest.OTFM1411R_RESPONSE> {
            return await this.request(secret, 'OTFM1411R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물옵션 일별 주문내역
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.OTFM3120R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.OTFM3120R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.OTFM3120R_RESPONSE} response               응답
     * @returns {typeRest.OTFM3120R_RESPONSE}
     */
    public async OTFM3120R(
        secret: Secret, requestHeader: typeRest.OTFM3120R_REQUEST_HEADER, requestBody: typeRest.OTFM3120R_REQUEST_BODY, 
        response: typeRest.OTFM3120R_RESPONSE | null = null): Promise<typeRest.OTFM3120R_RESPONSE> {
            return await this.request(secret, 'OTFM3120R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물옵션 기간계좌거래내역
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.OTFM3114R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.OTFM3114R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.OTFM3114R_RESPONSE} response               응답
     * @returns {typeRest.OTFM3114R_RESPONSE}
     */
    public async OTFM3114R(
        secret: Secret, requestHeader: typeRest.OTFM3114R_REQUEST_HEADER, requestBody: typeRest.OTFM3114R_REQUEST_BODY, 
        response: typeRest.OTFM3114R_RESPONSE | null = null): Promise<typeRest.OTFM3114R_RESPONSE> {
            return await this.request(secret, 'OTFM3114R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물옵션 증거금상세
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.OTFM3115R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.OTFM3115R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.OTFM3115R_RESPONSE} response               응답
     * @returns {typeRest.OTFM3115R_RESPONSE}
     */
    public async OTFM3115R(
        secret: Secret, requestHeader: typeRest.OTFM3115R_REQUEST_HEADER, requestBody: typeRest.OTFM3115R_REQUEST_BODY, 
        response: typeRest.OTFM3115R_RESPONSE | null = null): Promise<typeRest.OTFM3115R_RESPONSE> {
            return await this.request(secret, 'OTFM3115R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물종목상세
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFC55010100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFC55010100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFC55010100_RESPONSE} response               응답
     * @returns {typeRest.HHDFC55010100_RESPONSE}
     */
    public async HHDFC55010100(
        secret: Secret, requestHeader: typeRest.HHDFC55010100_REQUEST_HEADER, requestBody: typeRest.HHDFC55010100_REQUEST_BODY, 
        response: typeRest.HHDFC55010100_RESPONSE | null = null): Promise<typeRest.HHDFC55010100_RESPONSE> {
            return await this.request(secret, 'HHDFC55010100', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물종목현재가
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFC55010000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFC55010000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFC55010000_RESPONSE} response               응답
     * @returns {typeRest.HHDFC55010000_RESPONSE}
     */
    public async HHDFC55010000(
        secret: Secret, requestHeader: typeRest.HHDFC55010000_REQUEST_HEADER, requestBody: typeRest.HHDFC55010000_REQUEST_BODY, 
        response: typeRest.HHDFC55010000_RESPONSE | null = null): Promise<typeRest.HHDFC55010000_RESPONSE> {
            return await this.request(secret, 'HHDFC55010000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물 분봉조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFC55020400_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFC55020400_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFC55020400_RESPONSE} response               응답
     * @returns {typeRest.HHDFC55020400_RESPONSE}
     */
    public async HHDFC55020400(
        secret: Secret, requestHeader: typeRest.HHDFC55020400_REQUEST_HEADER, requestBody: typeRest.HHDFC55020400_REQUEST_BODY, 
        response: typeRest.HHDFC55020400_RESPONSE | null = null): Promise<typeRest.HHDFC55020400_RESPONSE> {
            return await this.request(secret, 'HHDFC55020400', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물 체결추이(주간)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFC55020000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFC55020000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFC55020000_RESPONSE} response               응답
     * @returns {typeRest.HHDFC55020000_RESPONSE}
     */
    public async HHDFC55020000(
        secret: Secret, requestHeader: typeRest.HHDFC55020000_REQUEST_HEADER, requestBody: typeRest.HHDFC55020000_REQUEST_BODY, 
        response: typeRest.HHDFC55020000_RESPONSE | null = null): Promise<typeRest.HHDFC55020000_RESPONSE> {
            return await this.request(secret, 'HHDFC55020000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물 체결추이(일간)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFC55020100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFC55020100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFC55020100_RESPONSE} response               응답
     * @returns {typeRest.HHDFC55020100_RESPONSE}
     */
    public async HHDFC55020100(
        secret: Secret, requestHeader: typeRest.HHDFC55020100_REQUEST_HEADER, requestBody: typeRest.HHDFC55020100_REQUEST_BODY, 
        response: typeRest.HHDFC55020100_RESPONSE | null = null): Promise<typeRest.HHDFC55020100_RESPONSE> {
            return await this.request(secret, 'HHDFC55020100', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물 체결추이(틱)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFC55020200_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFC55020200_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFC55020200_RESPONSE} response               응답
     * @returns {typeRest.HHDFC55020200_RESPONSE}
     */
    public async HHDFC55020200(
        secret: Secret, requestHeader: typeRest.HHDFC55020200_REQUEST_HEADER, requestBody: typeRest.HHDFC55020200_REQUEST_BODY, 
        response: typeRest.HHDFC55020200_RESPONSE | null = null): Promise<typeRest.HHDFC55020200_RESPONSE> {
            return await this.request(secret, 'HHDFC55020200', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물 체결추이(월간)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFC55020300_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFC55020300_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFC55020300_RESPONSE} response               응답
     * @returns {typeRest.HHDFC55020300_RESPONSE}
     */
    public async HHDFC55020300(
        secret: Secret, requestHeader: typeRest.HHDFC55020300_REQUEST_HEADER, requestBody: typeRest.HHDFC55020300_REQUEST_BODY, 
        response: typeRest.HHDFC55020300_RESPONSE | null = null): Promise<typeRest.HHDFC55020300_RESPONSE> {
            return await this.request(secret, 'HHDFC55020300', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물 호가
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFC86000000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFC86000000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFC86000000_RESPONSE} response               응답
     * @returns {typeRest.HHDFC86000000_RESPONSE}
     */
    public async HHDFC86000000(
        secret: Secret, requestHeader: typeRest.HHDFC86000000_REQUEST_HEADER, requestBody: typeRest.HHDFC86000000_REQUEST_BODY, 
        response: typeRest.HHDFC86000000_RESPONSE | null = null): Promise<typeRest.HHDFC86000000_RESPONSE> {
            return await this.request(secret, 'HHDFC86000000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물 상품기본정보
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFC55200000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFC55200000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFC55200000_RESPONSE} response               응답
     * @returns {typeRest.HHDFC55200000_RESPONSE}
     */
    public async HHDFC55200000(
        secret: Secret, requestHeader: typeRest.HHDFC55200000_REQUEST_HEADER, requestBody: typeRest.HHDFC55200000_REQUEST_BODY, 
        response: typeRest.HHDFC55200000_RESPONSE | null = null): Promise<typeRest.HHDFC55200000_RESPONSE> {
            return await this.request(secret, 'HHDFC55200000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물옵션 장운영시간
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.OTFM2229R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.OTFM2229R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.OTFM2229R_RESPONSE} response               응답
     * @returns {typeRest.OTFM2229R_RESPONSE}
     */
    public async OTFM2229R(
        secret: Secret, requestHeader: typeRest.OTFM2229R_REQUEST_HEADER, requestBody: typeRest.OTFM2229R_REQUEST_BODY, 
        response: typeRest.OTFM2229R_RESPONSE | null = null): Promise<typeRest.OTFM2229R_RESPONSE> {
            return await this.request(secret, 'OTFM2229R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물 미결제추이
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDDB95030000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDDB95030000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDDB95030000_RESPONSE} response               응답
     * @returns {typeRest.HHDDB95030000_RESPONSE}
     */
    public async HHDDB95030000(
        secret: Secret, requestHeader: typeRest.HHDDB95030000_REQUEST_HEADER, requestBody: typeRest.HHDDB95030000_REQUEST_BODY, 
        response: typeRest.HHDDB95030000_RESPONSE | null = null): Promise<typeRest.HHDDB95030000_RESPONSE> {
            return await this.request(secret, 'HHDDB95030000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외옵션 호가
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFO86000000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFO86000000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFO86000000_RESPONSE} response               응답
     * @returns {typeRest.HHDFO86000000_RESPONSE}
     */
    public async HHDFO86000000(
        secret: Secret, requestHeader: typeRest.HHDFO86000000_REQUEST_HEADER, requestBody: typeRest.HHDFO86000000_REQUEST_BODY, 
        response: typeRest.HHDFO86000000_RESPONSE | null = null): Promise<typeRest.HHDFO86000000_RESPONSE> {
            return await this.request(secret, 'HHDFO86000000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외옵션종목상세
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFO55010100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFO55010100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFO55010100_RESPONSE} response               응답
     * @returns {typeRest.HHDFO55010100_RESPONSE}
     */
    public async HHDFO55010100(
        secret: Secret, requestHeader: typeRest.HHDFO55010100_REQUEST_HEADER, requestBody: typeRest.HHDFO55010100_REQUEST_BODY, 
        response: typeRest.HHDFO55010100_RESPONSE | null = null): Promise<typeRest.HHDFO55010100_RESPONSE> {
            return await this.request(secret, 'HHDFO55010100', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외옵션종목현재가
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFO55010000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFO55010000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFO55010000_RESPONSE} response               응답
     * @returns {typeRest.HHDFO55010000_RESPONSE}
     */
    public async HHDFO55010000(
        secret: Secret, requestHeader: typeRest.HHDFO55010000_REQUEST_HEADER, requestBody: typeRest.HHDFO55010000_REQUEST_BODY, 
        response: typeRest.HHDFO55010000_RESPONSE | null = null): Promise<typeRest.HHDFO55010000_RESPONSE> {
            return await this.request(secret, 'HHDFO55010000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외옵션 체결추이(주간)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFO55020000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFO55020000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFO55020000_RESPONSE} response               응답
     * @returns {typeRest.HHDFO55020000_RESPONSE}
     */
    public async HHDFO55020000(
        secret: Secret, requestHeader: typeRest.HHDFO55020000_REQUEST_HEADER, requestBody: typeRest.HHDFO55020000_REQUEST_BODY, 
        response: typeRest.HHDFO55020000_RESPONSE | null = null): Promise<typeRest.HHDFO55020000_RESPONSE> {
            return await this.request(secret, 'HHDFO55020000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외옵션 체결추이(일간)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFO55020100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFO55020100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFO55020100_RESPONSE} response               응답
     * @returns {typeRest.HHDFO55020100_RESPONSE}
     */
    public async HHDFO55020100(
        secret: Secret, requestHeader: typeRest.HHDFO55020100_REQUEST_HEADER, requestBody: typeRest.HHDFO55020100_REQUEST_BODY, 
        response: typeRest.HHDFO55020100_RESPONSE | null = null): Promise<typeRest.HHDFO55020100_RESPONSE> {
            return await this.request(secret, 'HHDFO55020100', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외옵션 체결추이(틱)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFO55020200_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFO55020200_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFO55020200_RESPONSE} response               응답
     * @returns {typeRest.HHDFO55020200_RESPONSE}
     */
    public async HHDFO55020200(
        secret: Secret, requestHeader: typeRest.HHDFO55020200_REQUEST_HEADER, requestBody: typeRest.HHDFO55020200_REQUEST_BODY, 
        response: typeRest.HHDFO55020200_RESPONSE | null = null): Promise<typeRest.HHDFO55020200_RESPONSE> {
            return await this.request(secret, 'HHDFO55020200', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외옵션 체결추이(월간)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFO55020300_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFO55020300_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFO55020300_RESPONSE} response               응답
     * @returns {typeRest.HHDFO55020300_RESPONSE}
     */
    public async HHDFO55020300(
        secret: Secret, requestHeader: typeRest.HHDFO55020300_REQUEST_HEADER, requestBody: typeRest.HHDFO55020300_REQUEST_BODY, 
        response: typeRest.HHDFO55020300_RESPONSE | null = null): Promise<typeRest.HHDFO55020300_RESPONSE> {
            return await this.request(secret, 'HHDFO55020300', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외옵션 분봉조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFO55020400_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFO55020400_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFO55020400_RESPONSE} response               응답
     * @returns {typeRest.HHDFO55020400_RESPONSE}
     */
    public async HHDFO55020400(
        secret: Secret, requestHeader: typeRest.HHDFO55020400_REQUEST_HEADER, requestBody: typeRest.HHDFO55020400_REQUEST_BODY, 
        response: typeRest.HHDFO55020400_RESPONSE | null = null): Promise<typeRest.HHDFO55020400_RESPONSE> {
            return await this.request(secret, 'HHDFO55020400', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외옵션 상품기본정보
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.HHDFO55200000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFO55200000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFO55200000_RESPONSE} response               응답
     * @returns {typeRest.HHDFO55200000_RESPONSE}
     */
    public async HHDFO55200000(
        secret: Secret, requestHeader: typeRest.HHDFO55200000_REQUEST_HEADER, requestBody: typeRest.HHDFO55200000_REQUEST_BODY, 
        response: typeRest.HHDFO55200000_RESPONSE | null = null): Promise<typeRest.HHDFO55200000_RESPONSE> {
            return await this.request(secret, 'HHDFO55200000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 장내채권 매도주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTC0958U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC0958U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC0958U_RESPONSE} response               응답
     * @returns {typeRest.TTTC0958U_RESPONSE}
     */
    public async TTTC0958U(
        secret: Secret, requestHeader: typeRest.TTTC0958U_REQUEST_HEADER, requestBody: typeRest.TTTC0958U_REQUEST_BODY, 
        response: typeRest.TTTC0958U_RESPONSE | null = null): Promise<typeRest.TTTC0958U_RESPONSE> {
            return await this.request(secret, 'TTTC0958U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 장내채권 매수주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTC0952U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC0952U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC0952U_RESPONSE} response               응답
     * @returns {typeRest.TTTC0952U_RESPONSE}
     */
    public async TTTC0952U(
        secret: Secret, requestHeader: typeRest.TTTC0952U_REQUEST_HEADER, requestBody: typeRest.TTTC0952U_REQUEST_BODY, 
        response: typeRest.TTTC0952U_RESPONSE | null = null): Promise<typeRest.TTTC0952U_RESPONSE> {
            return await this.request(secret, 'TTTC0952U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 장내채권 정정취소주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTC0953U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC0953U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC0953U_RESPONSE} response               응답
     * @returns {typeRest.TTTC0953U_RESPONSE}
     */
    public async TTTC0953U(
        secret: Secret, requestHeader: typeRest.TTTC0953U_REQUEST_HEADER, requestBody: typeRest.TTTC0953U_REQUEST_BODY, 
        response: typeRest.TTTC0953U_RESPONSE | null = null): Promise<typeRest.TTTC0953U_RESPONSE> {
            return await this.request(secret, 'TTTC0953U', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 채권정정취소가능주문조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CTSC8035R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTSC8035R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTSC8035R_RESPONSE} response               응답
     * @returns {typeRest.CTSC8035R_RESPONSE}
     */
    public async CTSC8035R(
        secret: Secret, requestHeader: typeRest.CTSC8035R_REQUEST_HEADER, requestBody: typeRest.CTSC8035R_REQUEST_BODY, 
        response: typeRest.CTSC8035R_RESPONSE | null = null): Promise<typeRest.CTSC8035R_RESPONSE> {
            return await this.request(secret, 'CTSC8035R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 장내채권 주문체결내역
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CTSC8013R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTSC8013R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTSC8013R_RESPONSE} response               응답
     * @returns {typeRest.CTSC8013R_RESPONSE}
     */
    public async CTSC8013R(
        secret: Secret, requestHeader: typeRest.CTSC8013R_REQUEST_HEADER, requestBody: typeRest.CTSC8013R_REQUEST_BODY, 
        response: typeRest.CTSC8013R_RESPONSE | null = null): Promise<typeRest.CTSC8013R_RESPONSE> {
            return await this.request(secret, 'CTSC8013R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 장내채권 잔고조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CTSC8407R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTSC8407R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTSC8407R_RESPONSE} response               응답
     * @returns {typeRest.CTSC8407R_RESPONSE}
     */
    public async CTSC8407R(
        secret: Secret, requestHeader: typeRest.CTSC8407R_REQUEST_HEADER, requestBody: typeRest.CTSC8407R_REQUEST_BODY, 
        response: typeRest.CTSC8407R_RESPONSE | null = null): Promise<typeRest.CTSC8407R_RESPONSE> {
            return await this.request(secret, 'CTSC8407R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 장내채권 매수가능조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TTTC8910R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC8910R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC8910R_RESPONSE} response               응답
     * @returns {typeRest.TTTC8910R_RESPONSE}
     */
    public async TTTC8910R(
        secret: Secret, requestHeader: typeRest.TTTC8910R_REQUEST_HEADER, requestBody: typeRest.TTTC8910R_REQUEST_BODY, 
        response: typeRest.TTTC8910R_RESPONSE | null = null): Promise<typeRest.TTTC8910R_RESPONSE> {
            return await this.request(secret, 'TTTC8910R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 장내채권 발행정보
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CTPF1101R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTPF1101R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTPF1101R_RESPONSE} response               응답
     * @returns {typeRest.CTPF1101R_RESPONSE}
     */
    public async CTPF1101R(
        secret: Secret, requestHeader: typeRest.CTPF1101R_REQUEST_HEADER, requestBody: typeRest.CTPF1101R_REQUEST_BODY, 
        response: typeRest.CTPF1101R_RESPONSE | null = null): Promise<typeRest.CTPF1101R_RESPONSE> {
            return await this.request(secret, 'CTPF1101R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 장내채권 기본조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CTPF1114R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTPF1114R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTPF1114R_RESPONSE} response               응답
     * @returns {typeRest.CTPF1114R_RESPONSE}
     */
    public async CTPF1114R(
        secret: Secret, requestHeader: typeRest.CTPF1114R_REQUEST_HEADER, requestBody: typeRest.CTPF1114R_REQUEST_BODY, 
        response: typeRest.CTPF1114R_RESPONSE | null = null): Promise<typeRest.CTPF1114R_RESPONSE> {
            return await this.request(secret, 'CTPF1114R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 장내채권현재가(호가)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKBJ773401C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKBJ773401C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKBJ773401C0_RESPONSE} response               응답
     * @returns {typeRest.FHKBJ773401C0_RESPONSE}
     */
    public async FHKBJ773401C0(
        secret: Secret, requestHeader: typeRest.FHKBJ773401C0_REQUEST_HEADER, requestBody: typeRest.FHKBJ773401C0_REQUEST_BODY, 
        response: typeRest.FHKBJ773401C0_RESPONSE | null = null): Promise<typeRest.FHKBJ773401C0_RESPONSE> {
            return await this.request(secret, 'FHKBJ773401C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 장내채권 평균단가조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CTPF2005R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTPF2005R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTPF2005R_RESPONSE} response               응답
     * @returns {typeRest.CTPF2005R_RESPONSE}
     */
    public async CTPF2005R(
        secret: Secret, requestHeader: typeRest.CTPF2005R_REQUEST_HEADER, requestBody: typeRest.CTPF2005R_REQUEST_BODY, 
        response: typeRest.CTPF2005R_RESPONSE | null = null): Promise<typeRest.CTPF2005R_RESPONSE> {
            return await this.request(secret, 'CTPF2005R', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 장내채권 기간별시세(일)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKBJ773701C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKBJ773701C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKBJ773701C0_RESPONSE} response               응답
     * @returns {typeRest.FHKBJ773701C0_RESPONSE}
     */
    public async FHKBJ773701C0(
        secret: Secret, requestHeader: typeRest.FHKBJ773701C0_REQUEST_HEADER, requestBody: typeRest.FHKBJ773701C0_REQUEST_BODY, 
        response: typeRest.FHKBJ773701C0_RESPONSE | null = null): Promise<typeRest.FHKBJ773701C0_RESPONSE> {
            return await this.request(secret, 'FHKBJ773701C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 장내채권현재가(시세)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKBJ773400C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKBJ773400C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKBJ773400C0_RESPONSE} response               응답
     * @returns {typeRest.FHKBJ773400C0_RESPONSE}
     */
    public async FHKBJ773400C0(
        secret: Secret, requestHeader: typeRest.FHKBJ773400C0_REQUEST_HEADER, requestBody: typeRest.FHKBJ773400C0_REQUEST_BODY, 
        response: typeRest.FHKBJ773400C0_RESPONSE | null = null): Promise<typeRest.FHKBJ773400C0_RESPONSE> {
            return await this.request(secret, 'FHKBJ773400C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 장내채권현재가(체결)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKBJ773403C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKBJ773403C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKBJ773403C0_RESPONSE} response               응답
     * @returns {typeRest.FHKBJ773403C0_RESPONSE}
     */
    public async FHKBJ773403C0(
        secret: Secret, requestHeader: typeRest.FHKBJ773403C0_REQUEST_HEADER, requestBody: typeRest.FHKBJ773403C0_REQUEST_BODY, 
        response: typeRest.FHKBJ773403C0_RESPONSE | null = null): Promise<typeRest.FHKBJ773403C0_RESPONSE> {
            return await this.request(secret, 'FHKBJ773403C0', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 장내채권현재가(일별)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FHKBJ773404C0_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKBJ773404C0_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKBJ773404C0_RESPONSE} response               응답
     * @returns {typeRest.FHKBJ773404C0_RESPONSE}
     */
    public async FHKBJ773404C0(
        secret: Secret, requestHeader: typeRest.FHKBJ773404C0_REQUEST_HEADER, requestBody: typeRest.FHKBJ773404C0_REQUEST_BODY, 
        response: typeRest.FHKBJ773404C0_RESPONSE | null = null): Promise<typeRest.FHKBJ773404C0_RESPONSE> {
            return await this.request(secret, 'FHKBJ773404C0', requestHeader, requestBody, response);
        }
                    
}

export default EFriendRest;
