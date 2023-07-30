/**
 * 한국투자증권 EFriendExpert REST API
 *     자동 생성되는 소스이니 수정하지 마세요.
 * 
 * @file packages/EFriendExpert/efriends/efriendRest.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { Secret, EFriendRestConfig } from './efriend.type';
import * as typeRest from './efriend_api.type';
import EFriendRestBase from './efriendRestBase';
 
export class EFriendRest extends EFriendRestBase {
    constructor({ logger }: EFriendRestConfig) {
        super({ logger });
    }

    
    /**
     * 실시간 (웹소켓) 접속키 발급
     * @description 실시간 (웹소켓) 접속키 발급
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.APPROVAL_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.APPROVAL_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.APPROVAL_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.APPROVAL_RESPONSE}
     */
    public async Approval(
        secret: Secret, requestHeader: typeRest.APPROVAL_REQUEST_HEADER, requestBody: typeRest.APPROVAL_REQUEST_BODY, 
        responseHeader: typeRest.APPROVAL_RESPONSE_HEADER | null = null): Promise<typeRest.APPROVAL_RESPONSE> {
            return await this.request(secret, 'Approval', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * Hashkey
     * @description Hashkey
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.HASHKEY_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HASHKEY_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HASHKEY_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.HASHKEY_RESPONSE}
     */
    public async hashkey(
        secret: Secret, requestHeader: typeRest.HASHKEY_REQUEST_HEADER, requestBody: typeRest.HASHKEY_REQUEST_BODY, 
        responseHeader: typeRest.HASHKEY_RESPONSE_HEADER | null = null): Promise<typeRest.HASHKEY_RESPONSE> {
            return await this.request(secret, 'hashkey', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 접근토큰발급(P)
     * @description 접근토큰발급(P)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TOKENP_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TOKENP_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TOKENP_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TOKENP_RESPONSE}
     */
    public async tokenP(
        secret: Secret, requestHeader: typeRest.TOKENP_REQUEST_HEADER, requestBody: typeRest.TOKENP_REQUEST_BODY, 
        responseHeader: typeRest.TOKENP_RESPONSE_HEADER | null = null): Promise<typeRest.TOKENP_RESPONSE> {
            return await this.request(secret, 'tokenP', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 접근토큰폐기(P)
     * @description 접근토큰폐기(P)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.REVOKEP_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.REVOKEP_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.REVOKEP_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.REVOKEP_RESPONSE}
     */
    public async revokeP(
        secret: Secret, requestHeader: typeRest.REVOKEP_REQUEST_HEADER, requestBody: typeRest.REVOKEP_REQUEST_BODY, 
        responseHeader: typeRest.REVOKEP_RESPONSE_HEADER | null = null): Promise<typeRest.REVOKEP_RESPONSE> {
            return await this.request(secret, 'revokeP', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 주식주문(현금)
     * @description 주식주문(현금)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTC0802U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC0802U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC0802U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTC0802U_RESPONSE}
     */
    public async TTTC0802U(
        secret: Secret, requestHeader: typeRest.TTTC0802U_REQUEST_HEADER, requestBody: typeRest.TTTC0802U_REQUEST_BODY, 
        responseHeader: typeRest.TTTC0802U_RESPONSE_HEADER | null = null): Promise<typeRest.TTTC0802U_RESPONSE> {
            return await this.request(secret, 'TTTC0802U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 주식주문(현금)
     * @description 주식주문(현금)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTC0801U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC0801U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC0801U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTC0801U_RESPONSE}
     */
    public async TTTC0801U(
        secret: Secret, requestHeader: typeRest.TTTC0801U_REQUEST_HEADER, requestBody: typeRest.TTTC0801U_REQUEST_BODY, 
        responseHeader: typeRest.TTTC0801U_RESPONSE_HEADER | null = null): Promise<typeRest.TTTC0801U_RESPONSE> {
            return await this.request(secret, 'TTTC0801U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 주식주문(현금)
     * @description 주식주문(현금)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTTC0802U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTC0802U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTC0802U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTTC0802U_RESPONSE}
     */
    public async VTTC0802U(
        secret: Secret, requestHeader: typeRest.VTTC0802U_REQUEST_HEADER, requestBody: typeRest.VTTC0802U_REQUEST_BODY, 
        responseHeader: typeRest.VTTC0802U_RESPONSE_HEADER | null = null): Promise<typeRest.VTTC0802U_RESPONSE> {
            return await this.request(secret, 'VTTC0802U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 주식주문(현금)
     * @description 주식주문(현금)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTTC0801U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTC0801U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTC0801U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTTC0801U_RESPONSE}
     */
    public async VTTC0801U(
        secret: Secret, requestHeader: typeRest.VTTC0801U_REQUEST_HEADER, requestBody: typeRest.VTTC0801U_REQUEST_BODY, 
        responseHeader: typeRest.VTTC0801U_RESPONSE_HEADER | null = null): Promise<typeRest.VTTC0801U_RESPONSE> {
            return await this.request(secret, 'VTTC0801U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 주식주문(신용)
     * @description 주식주문(신용)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTC0852U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC0852U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC0852U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTC0852U_RESPONSE}
     */
    public async TTTC0852U(
        secret: Secret, requestHeader: typeRest.TTTC0852U_REQUEST_HEADER, requestBody: typeRest.TTTC0852U_REQUEST_BODY, 
        responseHeader: typeRest.TTTC0852U_RESPONSE_HEADER | null = null): Promise<typeRest.TTTC0852U_RESPONSE> {
            return await this.request(secret, 'TTTC0852U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 주식주문(신용)
     * @description 주식주문(신용)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTC0851U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC0851U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC0851U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTC0851U_RESPONSE}
     */
    public async TTTC0851U(
        secret: Secret, requestHeader: typeRest.TTTC0851U_REQUEST_HEADER, requestBody: typeRest.TTTC0851U_REQUEST_BODY, 
        responseHeader: typeRest.TTTC0851U_RESPONSE_HEADER | null = null): Promise<typeRest.TTTC0851U_RESPONSE> {
            return await this.request(secret, 'TTTC0851U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 주식주문(정정취소)
     * @description 주식주문(정정취소)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTC0803U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC0803U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC0803U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTC0803U_RESPONSE}
     */
    public async TTTC0803U(
        secret: Secret, requestHeader: typeRest.TTTC0803U_REQUEST_HEADER, requestBody: typeRest.TTTC0803U_REQUEST_BODY, 
        responseHeader: typeRest.TTTC0803U_RESPONSE_HEADER | null = null): Promise<typeRest.TTTC0803U_RESPONSE> {
            return await this.request(secret, 'TTTC0803U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 주식주문(정정취소)
     * @description 주식주문(정정취소)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTTC0803U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTC0803U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTC0803U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTTC0803U_RESPONSE}
     */
    public async VTTC0803U(
        secret: Secret, requestHeader: typeRest.VTTC0803U_REQUEST_HEADER, requestBody: typeRest.VTTC0803U_REQUEST_BODY, 
        responseHeader: typeRest.VTTC0803U_RESPONSE_HEADER | null = null): Promise<typeRest.VTTC0803U_RESPONSE> {
            return await this.request(secret, 'VTTC0803U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 주식정정취소가능주문조회
     * @description 주식정정취소가능주문조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTC8036R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC8036R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC8036R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTC8036R_RESPONSE}
     */
    public async TTTC8036R(
        secret: Secret, requestHeader: typeRest.TTTC8036R_REQUEST_HEADER, requestBody: typeRest.TTTC8036R_REQUEST_BODY, 
        responseHeader: typeRest.TTTC8036R_RESPONSE_HEADER | null = null): Promise<typeRest.TTTC8036R_RESPONSE> {
            return await this.request(secret, 'TTTC8036R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 주식일별주문체결조회
     * @description 주식일별주문체결조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTC8001R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC8001R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC8001R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTC8001R_RESPONSE}
     */
    public async TTTC8001R(
        secret: Secret, requestHeader: typeRest.TTTC8001R_REQUEST_HEADER, requestBody: typeRest.TTTC8001R_REQUEST_BODY, 
        responseHeader: typeRest.TTTC8001R_RESPONSE_HEADER | null = null): Promise<typeRest.TTTC8001R_RESPONSE> {
            return await this.request(secret, 'TTTC8001R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 주식일별주문체결조회
     * @description 주식일별주문체결조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.CTSC9115R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTSC9115R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTSC9115R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.CTSC9115R_RESPONSE}
     */
    public async CTSC9115R(
        secret: Secret, requestHeader: typeRest.CTSC9115R_REQUEST_HEADER, requestBody: typeRest.CTSC9115R_REQUEST_BODY, 
        responseHeader: typeRest.CTSC9115R_RESPONSE_HEADER | null = null): Promise<typeRest.CTSC9115R_RESPONSE> {
            return await this.request(secret, 'CTSC9115R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 주식일별주문체결조회
     * @description 주식일별주문체결조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTTC8001R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTC8001R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTC8001R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTTC8001R_RESPONSE}
     */
    public async VTTC8001R(
        secret: Secret, requestHeader: typeRest.VTTC8001R_REQUEST_HEADER, requestBody: typeRest.VTTC8001R_REQUEST_BODY, 
        responseHeader: typeRest.VTTC8001R_RESPONSE_HEADER | null = null): Promise<typeRest.VTTC8001R_RESPONSE> {
            return await this.request(secret, 'VTTC8001R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 주식일별주문체결조회
     * @description 주식일별주문체결조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTSC9115R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTSC9115R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTSC9115R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTSC9115R_RESPONSE}
     */
    public async VTSC9115R(
        secret: Secret, requestHeader: typeRest.VTSC9115R_REQUEST_HEADER, requestBody: typeRest.VTSC9115R_REQUEST_BODY, 
        responseHeader: typeRest.VTSC9115R_RESPONSE_HEADER | null = null): Promise<typeRest.VTSC9115R_RESPONSE> {
            return await this.request(secret, 'VTSC9115R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 주식잔고조회
     * @description 주식잔고조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTC8434R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC8434R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC8434R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTC8434R_RESPONSE}
     */
    public async TTTC8434R(
        secret: Secret, requestHeader: typeRest.TTTC8434R_REQUEST_HEADER, requestBody: typeRest.TTTC8434R_REQUEST_BODY, 
        responseHeader: typeRest.TTTC8434R_RESPONSE_HEADER | null = null): Promise<typeRest.TTTC8434R_RESPONSE> {
            return await this.request(secret, 'TTTC8434R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 주식잔고조회
     * @description 주식잔고조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTTC8434R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTC8434R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTC8434R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTTC8434R_RESPONSE}
     */
    public async VTTC8434R(
        secret: Secret, requestHeader: typeRest.VTTC8434R_REQUEST_HEADER, requestBody: typeRest.VTTC8434R_REQUEST_BODY, 
        responseHeader: typeRest.VTTC8434R_RESPONSE_HEADER | null = null): Promise<typeRest.VTTC8434R_RESPONSE> {
            return await this.request(secret, 'VTTC8434R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 매수가능조회
     * @description 매수가능조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTC8908R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC8908R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC8908R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTC8908R_RESPONSE}
     */
    public async TTTC8908R(
        secret: Secret, requestHeader: typeRest.TTTC8908R_REQUEST_HEADER, requestBody: typeRest.TTTC8908R_REQUEST_BODY, 
        responseHeader: typeRest.TTTC8908R_RESPONSE_HEADER | null = null): Promise<typeRest.TTTC8908R_RESPONSE> {
            return await this.request(secret, 'TTTC8908R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 매수가능조회
     * @description 매수가능조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTTC8908R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTC8908R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTC8908R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTTC8908R_RESPONSE}
     */
    public async VTTC8908R(
        secret: Secret, requestHeader: typeRest.VTTC8908R_REQUEST_HEADER, requestBody: typeRest.VTTC8908R_REQUEST_BODY, 
        responseHeader: typeRest.VTTC8908R_RESPONSE_HEADER | null = null): Promise<typeRest.VTTC8908R_RESPONSE> {
            return await this.request(secret, 'VTTC8908R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 주식예약주문
     * @description 주식예약주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.CTSC0008U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTSC0008U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTSC0008U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.CTSC0008U_RESPONSE}
     */
    public async CTSC0008U(
        secret: Secret, requestHeader: typeRest.CTSC0008U_REQUEST_HEADER, requestBody: typeRest.CTSC0008U_REQUEST_BODY, 
        responseHeader: typeRest.CTSC0008U_RESPONSE_HEADER | null = null): Promise<typeRest.CTSC0008U_RESPONSE> {
            return await this.request(secret, 'CTSC0008U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 주식예약주문정정취소
     * @description 주식예약주문정정취소
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.CTSC0009U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTSC0009U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTSC0009U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.CTSC0009U_RESPONSE}
     */
    public async CTSC0009U(
        secret: Secret, requestHeader: typeRest.CTSC0009U_REQUEST_HEADER, requestBody: typeRest.CTSC0009U_REQUEST_BODY, 
        responseHeader: typeRest.CTSC0009U_RESPONSE_HEADER | null = null): Promise<typeRest.CTSC0009U_RESPONSE> {
            return await this.request(secret, 'CTSC0009U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 주식예약주문정정취소
     * @description 주식예약주문정정취소
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.CTSC0013U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTSC0013U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTSC0013U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.CTSC0013U_RESPONSE}
     */
    public async CTSC0013U(
        secret: Secret, requestHeader: typeRest.CTSC0013U_REQUEST_HEADER, requestBody: typeRest.CTSC0013U_REQUEST_BODY, 
        responseHeader: typeRest.CTSC0013U_RESPONSE_HEADER | null = null): Promise<typeRest.CTSC0013U_RESPONSE> {
            return await this.request(secret, 'CTSC0013U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 주식예약주문조회
     * @description 주식예약주문조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.CTSC0004R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTSC0004R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTSC0004R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.CTSC0004R_RESPONSE}
     */
    public async CTSC0004R(
        secret: Secret, requestHeader: typeRest.CTSC0004R_REQUEST_HEADER, requestBody: typeRest.CTSC0004R_REQUEST_BODY, 
        responseHeader: typeRest.CTSC0004R_RESPONSE_HEADER | null = null): Promise<typeRest.CTSC0004R_RESPONSE> {
            return await this.request(secret, 'CTSC0004R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 주식잔고조회_실현손익
     * @description 주식잔고조회_실현손익
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTC8494R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC8494R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC8494R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTC8494R_RESPONSE}
     */
    public async TTTC8494R(
        secret: Secret, requestHeader: typeRest.TTTC8494R_REQUEST_HEADER, requestBody: typeRest.TTTC8494R_REQUEST_BODY, 
        responseHeader: typeRest.TTTC8494R_RESPONSE_HEADER | null = null): Promise<typeRest.TTTC8494R_RESPONSE> {
            return await this.request(secret, 'TTTC8494R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 신용매수가능조회
     * @description 신용매수가능조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTC8909R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTC8909R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTC8909R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTC8909R_RESPONSE}
     */
    public async TTTC8909R(
        secret: Secret, requestHeader: typeRest.TTTC8909R_REQUEST_HEADER, requestBody: typeRest.TTTC8909R_REQUEST_BODY, 
        responseHeader: typeRest.TTTC8909R_RESPONSE_HEADER | null = null): Promise<typeRest.TTTC8909R_RESPONSE> {
            return await this.request(secret, 'TTTC8909R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 투자계좌자산현황조회
     * @description 투자계좌자산현황조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.CTRP6548R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTRP6548R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTRP6548R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.CTRP6548R_RESPONSE}
     */
    public async CTRP6548R(
        secret: Secret, requestHeader: typeRest.CTRP6548R_REQUEST_HEADER, requestBody: typeRest.CTRP6548R_REQUEST_BODY, 
        responseHeader: typeRest.CTRP6548R_RESPONSE_HEADER | null = null): Promise<typeRest.CTRP6548R_RESPONSE> {
            return await this.request(secret, 'CTRP6548R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 주식현재가 시세
     * @description 주식현재가 시세
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.FHKST01010100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST01010100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST01010100_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.FHKST01010100_RESPONSE}
     */
    public async FHKST01010100(
        secret: Secret, requestHeader: typeRest.FHKST01010100_REQUEST_HEADER, requestBody: typeRest.FHKST01010100_REQUEST_BODY, 
        responseHeader: typeRest.FHKST01010100_RESPONSE_HEADER | null = null): Promise<typeRest.FHKST01010100_RESPONSE> {
            return await this.request(secret, 'FHKST01010100', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 주식현재가 체결
     * @description 주식현재가 체결
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.FHKST01010300_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST01010300_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST01010300_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.FHKST01010300_RESPONSE}
     */
    public async FHKST01010300(
        secret: Secret, requestHeader: typeRest.FHKST01010300_REQUEST_HEADER, requestBody: typeRest.FHKST01010300_REQUEST_BODY, 
        responseHeader: typeRest.FHKST01010300_RESPONSE_HEADER | null = null): Promise<typeRest.FHKST01010300_RESPONSE> {
            return await this.request(secret, 'FHKST01010300', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 주식현재가 일자별
     * @description 주식현재가 일자별
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.FHKST01010400_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST01010400_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST01010400_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.FHKST01010400_RESPONSE}
     */
    public async FHKST01010400(
        secret: Secret, requestHeader: typeRest.FHKST01010400_REQUEST_HEADER, requestBody: typeRest.FHKST01010400_REQUEST_BODY, 
        responseHeader: typeRest.FHKST01010400_RESPONSE_HEADER | null = null): Promise<typeRest.FHKST01010400_RESPONSE> {
            return await this.request(secret, 'FHKST01010400', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 주식현재가 호가/예상체결
     * @description 주식현재가 호가/예상체결
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.FHKST01010200_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST01010200_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST01010200_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.FHKST01010200_RESPONSE}
     */
    public async FHKST01010200(
        secret: Secret, requestHeader: typeRest.FHKST01010200_REQUEST_HEADER, requestBody: typeRest.FHKST01010200_REQUEST_BODY, 
        responseHeader: typeRest.FHKST01010200_RESPONSE_HEADER | null = null): Promise<typeRest.FHKST01010200_RESPONSE> {
            return await this.request(secret, 'FHKST01010200', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 주식현재가 투자자
     * @description 주식현재가 투자자
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.FHKST01010900_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST01010900_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST01010900_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.FHKST01010900_RESPONSE}
     */
    public async FHKST01010900(
        secret: Secret, requestHeader: typeRest.FHKST01010900_REQUEST_HEADER, requestBody: typeRest.FHKST01010900_REQUEST_BODY, 
        responseHeader: typeRest.FHKST01010900_RESPONSE_HEADER | null = null): Promise<typeRest.FHKST01010900_RESPONSE> {
            return await this.request(secret, 'FHKST01010900', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 주식현재가 회원사
     * @description 주식현재가 회원사
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.FHKST01010600_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST01010600_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST01010600_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.FHKST01010600_RESPONSE}
     */
    public async FHKST01010600(
        secret: Secret, requestHeader: typeRest.FHKST01010600_REQUEST_HEADER, requestBody: typeRest.FHKST01010600_REQUEST_BODY, 
        responseHeader: typeRest.FHKST01010600_RESPONSE_HEADER | null = null): Promise<typeRest.FHKST01010600_RESPONSE> {
            return await this.request(secret, 'FHKST01010600', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * ELW현재가 시세
     * @description ELW현재가 시세
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.FHKEW15010000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKEW15010000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKEW15010000_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.FHKEW15010000_RESPONSE}
     */
    public async FHKEW15010000(
        secret: Secret, requestHeader: typeRest.FHKEW15010000_REQUEST_HEADER, requestBody: typeRest.FHKEW15010000_REQUEST_BODY, 
        responseHeader: typeRest.FHKEW15010000_RESPONSE_HEADER | null = null): Promise<typeRest.FHKEW15010000_RESPONSE> {
            return await this.request(secret, 'FHKEW15010000', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 국내주식기간별시세(일/주/월/년)
     * @description 국내주식기간별시세(일/주/월/년)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.FHKST03010100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST03010100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST03010100_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.FHKST03010100_RESPONSE}
     */
    public async FHKST03010100(
        secret: Secret, requestHeader: typeRest.FHKST03010100_REQUEST_HEADER, requestBody: typeRest.FHKST03010100_REQUEST_BODY, 
        responseHeader: typeRest.FHKST03010100_RESPONSE_HEADER | null = null): Promise<typeRest.FHKST03010100_RESPONSE> {
            return await this.request(secret, 'FHKST03010100', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 국내주식업종기간별시세(일/주/월/년)
     * @description 국내주식업종기간별시세(일/주/월/년)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.FHKUP03500100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKUP03500100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKUP03500100_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.FHKUP03500100_RESPONSE}
     */
    public async FHKUP03500100(
        secret: Secret, requestHeader: typeRest.FHKUP03500100_REQUEST_HEADER, requestBody: typeRest.FHKUP03500100_REQUEST_BODY, 
        responseHeader: typeRest.FHKUP03500100_RESPONSE_HEADER | null = null): Promise<typeRest.FHKUP03500100_RESPONSE> {
            return await this.request(secret, 'FHKUP03500100', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 주식현재가 당일시간대별체결
     * @description 주식현재가 당일시간대별체결
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.FHPST01060000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST01060000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST01060000_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.FHPST01060000_RESPONSE}
     */
    public async FHPST01060000(
        secret: Secret, requestHeader: typeRest.FHPST01060000_REQUEST_HEADER, requestBody: typeRest.FHPST01060000_REQUEST_BODY, 
        responseHeader: typeRest.FHPST01060000_RESPONSE_HEADER | null = null): Promise<typeRest.FHPST01060000_RESPONSE> {
            return await this.request(secret, 'FHPST01060000', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 주식현재가 시간외시간별체결
     * @description 주식현재가 시간외시간별체결
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.FHPST02310000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST02310000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST02310000_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.FHPST02310000_RESPONSE}
     */
    public async FHPST02310000(
        secret: Secret, requestHeader: typeRest.FHPST02310000_REQUEST_HEADER, requestBody: typeRest.FHPST02310000_REQUEST_BODY, 
        responseHeader: typeRest.FHPST02310000_RESPONSE_HEADER | null = null): Promise<typeRest.FHPST02310000_RESPONSE> {
            return await this.request(secret, 'FHPST02310000', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 주식현재가 시간외일자별주가
     * @description 주식현재가 시간외일자별주가
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.FHPST02320000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST02320000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST02320000_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.FHPST02320000_RESPONSE}
     */
    public async FHPST02320000(
        secret: Secret, requestHeader: typeRest.FHPST02320000_REQUEST_HEADER, requestBody: typeRest.FHPST02320000_REQUEST_BODY, 
        responseHeader: typeRest.FHPST02320000_RESPONSE_HEADER | null = null): Promise<typeRest.FHPST02320000_RESPONSE> {
            return await this.request(secret, 'FHPST02320000', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 주식당일분봉조회
     * @description 주식당일분봉조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.FHKST03010200_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST03010200_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST03010200_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.FHKST03010200_RESPONSE}
     */
    public async FHKST03010200(
        secret: Secret, requestHeader: typeRest.FHKST03010200_REQUEST_HEADER, requestBody: typeRest.FHKST03010200_REQUEST_BODY, 
        responseHeader: typeRest.FHKST03010200_RESPONSE_HEADER | null = null): Promise<typeRest.FHKST03010200_RESPONSE> {
            return await this.request(secret, 'FHKST03010200', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 상품기본조회
     * @description 상품기본조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.CTPF1604R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTPF1604R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTPF1604R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.CTPF1604R_RESPONSE}
     */
    public async CTPF1604R(
        secret: Secret, requestHeader: typeRest.CTPF1604R_REQUEST_HEADER, requestBody: typeRest.CTPF1604R_REQUEST_BODY, 
        responseHeader: typeRest.CTPF1604R_RESPONSE_HEADER | null = null): Promise<typeRest.CTPF1604R_RESPONSE> {
            return await this.request(secret, 'CTPF1604R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 국내휴장일조회
     * @description 국내휴장일조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.CTCA0903R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTCA0903R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTCA0903R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.CTCA0903R_RESPONSE}
     */
    public async CTCA0903R(
        secret: Secret, requestHeader: typeRest.CTCA0903R_REQUEST_HEADER, requestBody: typeRest.CTCA0903R_REQUEST_BODY, 
        responseHeader: typeRest.CTCA0903R_RESPONSE_HEADER | null = null): Promise<typeRest.CTCA0903R_RESPONSE> {
            return await this.request(secret, 'CTCA0903R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 국내기관_외국인 매매종목가집계
     * @description 국내기관_외국인 매매종목가집계
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.FHPTJ04400000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPTJ04400000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPTJ04400000_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.FHPTJ04400000_RESPONSE}
     */
    public async FHPTJ04400000(
        secret: Secret, requestHeader: typeRest.FHPTJ04400000_REQUEST_HEADER, requestBody: typeRest.FHPTJ04400000_REQUEST_BODY, 
        responseHeader: typeRest.FHPTJ04400000_RESPONSE_HEADER | null = null): Promise<typeRest.FHPTJ04400000_RESPONSE> {
            return await this.request(secret, 'FHPTJ04400000', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 종목조건검색 목록조회
     * @description 종목조건검색 목록조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.HHKST03900300_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHKST03900300_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHKST03900300_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.HHKST03900300_RESPONSE}
     */
    public async HHKST03900300(
        secret: Secret, requestHeader: typeRest.HHKST03900300_REQUEST_HEADER, requestBody: typeRest.HHKST03900300_REQUEST_BODY, 
        responseHeader: typeRest.HHKST03900300_RESPONSE_HEADER | null = null): Promise<typeRest.HHKST03900300_RESPONSE> {
            return await this.request(secret, 'HHKST03900300', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 종목조건검색조회
     * @description 종목조건검색조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.HHKST03900400_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHKST03900400_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHKST03900400_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.HHKST03900400_RESPONSE}
     */
    public async HHKST03900400(
        secret: Secret, requestHeader: typeRest.HHKST03900400_REQUEST_HEADER, requestBody: typeRest.HHKST03900400_REQUEST_BODY, 
        responseHeader: typeRest.HHKST03900400_RESPONSE_HEADER | null = null): Promise<typeRest.HHKST03900400_RESPONSE> {
            return await this.request(secret, 'HHKST03900400', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 종목별 프로그램매매추이(체결)
     * @description 종목별 프로그램매매추이(체결)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.FHPPG04650100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPPG04650100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPPG04650100_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.FHPPG04650100_RESPONSE}
     */
    public async FHPPG04650100(
        secret: Secret, requestHeader: typeRest.FHPPG04650100_REQUEST_HEADER, requestBody: typeRest.FHPPG04650100_REQUEST_BODY, 
        responseHeader: typeRest.FHPPG04650100_RESPONSE_HEADER | null = null): Promise<typeRest.FHPPG04650100_RESPONSE> {
            return await this.request(secret, 'FHPPG04650100', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 거래량순위
     * @description 거래량순위
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.FHPST01710000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHPST01710000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHPST01710000_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.FHPST01710000_RESPONSE}
     */
    public async FHPST01710000(
        secret: Secret, requestHeader: typeRest.FHPST01710000_REQUEST_HEADER, requestBody: typeRest.FHPST01710000_REQUEST_BODY, 
        responseHeader: typeRest.FHPST01710000_RESPONSE_HEADER | null = null): Promise<typeRest.FHPST01710000_RESPONSE> {
            return await this.request(secret, 'FHPST01710000', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 종목별 외인기관 추정가집계
     * @description 종목별 외인기관 추정가집계
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.HHPTJ04160200_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHPTJ04160200_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHPTJ04160200_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.HHPTJ04160200_RESPONSE}
     */
    public async HHPTJ04160200(
        secret: Secret, requestHeader: typeRest.HHPTJ04160200_REQUEST_HEADER, requestBody: typeRest.HHPTJ04160200_REQUEST_BODY, 
        responseHeader: typeRest.HHPTJ04160200_RESPONSE_HEADER | null = null): Promise<typeRest.HHPTJ04160200_RESPONSE> {
            return await this.request(secret, 'HHPTJ04160200', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 선물옵션 주문
     * @description 선물옵션 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTO1101U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTO1101U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTO1101U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTO1101U_RESPONSE}
     */
    public async TTTO1101U(
        secret: Secret, requestHeader: typeRest.TTTO1101U_REQUEST_HEADER, requestBody: typeRest.TTTO1101U_REQUEST_BODY, 
        responseHeader: typeRest.TTTO1101U_RESPONSE_HEADER | null = null): Promise<typeRest.TTTO1101U_RESPONSE> {
            return await this.request(secret, 'TTTO1101U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 선물옵션 주문
     * @description 선물옵션 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.JTCE1001U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.JTCE1001U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.JTCE1001U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.JTCE1001U_RESPONSE}
     */
    public async JTCE1001U(
        secret: Secret, requestHeader: typeRest.JTCE1001U_REQUEST_HEADER, requestBody: typeRest.JTCE1001U_REQUEST_BODY, 
        responseHeader: typeRest.JTCE1001U_RESPONSE_HEADER | null = null): Promise<typeRest.JTCE1001U_RESPONSE> {
            return await this.request(secret, 'JTCE1001U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 선물옵션 주문
     * @description 선물옵션 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTTO1101U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTO1101U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTO1101U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTTO1101U_RESPONSE}
     */
    public async VTTO1101U(
        secret: Secret, requestHeader: typeRest.VTTO1101U_REQUEST_HEADER, requestBody: typeRest.VTTO1101U_REQUEST_BODY, 
        responseHeader: typeRest.VTTO1101U_RESPONSE_HEADER | null = null): Promise<typeRest.VTTO1101U_RESPONSE> {
            return await this.request(secret, 'VTTO1101U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 선물옵션 주문
     * @description 선물옵션 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTCE1001U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTCE1001U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTCE1001U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTCE1001U_RESPONSE}
     */
    public async VTCE1001U(
        secret: Secret, requestHeader: typeRest.VTCE1001U_REQUEST_HEADER, requestBody: typeRest.VTCE1001U_REQUEST_BODY, 
        responseHeader: typeRest.VTCE1001U_RESPONSE_HEADER | null = null): Promise<typeRest.VTCE1001U_RESPONSE> {
            return await this.request(secret, 'VTCE1001U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 선물옵션 정정취소주문
     * @description 선물옵션 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTO1103U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTO1103U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTO1103U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTO1103U_RESPONSE}
     */
    public async TTTO1103U(
        secret: Secret, requestHeader: typeRest.TTTO1103U_REQUEST_HEADER, requestBody: typeRest.TTTO1103U_REQUEST_BODY, 
        responseHeader: typeRest.TTTO1103U_RESPONSE_HEADER | null = null): Promise<typeRest.TTTO1103U_RESPONSE> {
            return await this.request(secret, 'TTTO1103U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 선물옵션 정정취소주문
     * @description 선물옵션 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.JTCE1002U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.JTCE1002U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.JTCE1002U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.JTCE1002U_RESPONSE}
     */
    public async JTCE1002U(
        secret: Secret, requestHeader: typeRest.JTCE1002U_REQUEST_HEADER, requestBody: typeRest.JTCE1002U_REQUEST_BODY, 
        responseHeader: typeRest.JTCE1002U_RESPONSE_HEADER | null = null): Promise<typeRest.JTCE1002U_RESPONSE> {
            return await this.request(secret, 'JTCE1002U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 선물옵션 정정취소주문
     * @description 선물옵션 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTTO1103U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTO1103U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTO1103U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTTO1103U_RESPONSE}
     */
    public async VTTO1103U(
        secret: Secret, requestHeader: typeRest.VTTO1103U_REQUEST_HEADER, requestBody: typeRest.VTTO1103U_REQUEST_BODY, 
        responseHeader: typeRest.VTTO1103U_RESPONSE_HEADER | null = null): Promise<typeRest.VTTO1103U_RESPONSE> {
            return await this.request(secret, 'VTTO1103U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 선물옵션 정정취소주문
     * @description 선물옵션 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTCE1002U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTCE1002U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTCE1002U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTCE1002U_RESPONSE}
     */
    public async VTCE1002U(
        secret: Secret, requestHeader: typeRest.VTCE1002U_REQUEST_HEADER, requestBody: typeRest.VTCE1002U_REQUEST_BODY, 
        responseHeader: typeRest.VTCE1002U_RESPONSE_HEADER | null = null): Promise<typeRest.VTCE1002U_RESPONSE> {
            return await this.request(secret, 'VTCE1002U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 선물옵션 주문체결내역조회
     * @description 선물옵션 주문체결내역조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTO5201R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTO5201R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTO5201R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTO5201R_RESPONSE}
     */
    public async TTTO5201R(
        secret: Secret, requestHeader: typeRest.TTTO5201R_REQUEST_HEADER, requestBody: typeRest.TTTO5201R_REQUEST_BODY, 
        responseHeader: typeRest.TTTO5201R_RESPONSE_HEADER | null = null): Promise<typeRest.TTTO5201R_RESPONSE> {
            return await this.request(secret, 'TTTO5201R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 선물옵션 주문체결내역조회
     * @description 선물옵션 주문체결내역조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTTO5201R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTO5201R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTO5201R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTTO5201R_RESPONSE}
     */
    public async VTTO5201R(
        secret: Secret, requestHeader: typeRest.VTTO5201R_REQUEST_HEADER, requestBody: typeRest.VTTO5201R_REQUEST_BODY, 
        responseHeader: typeRest.VTTO5201R_RESPONSE_HEADER | null = null): Promise<typeRest.VTTO5201R_RESPONSE> {
            return await this.request(secret, 'VTTO5201R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 선물옵션 잔고현황
     * @description 선물옵션 잔고현황
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.CTFO6118R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTFO6118R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTFO6118R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.CTFO6118R_RESPONSE}
     */
    public async CTFO6118R(
        secret: Secret, requestHeader: typeRest.CTFO6118R_REQUEST_HEADER, requestBody: typeRest.CTFO6118R_REQUEST_BODY, 
        responseHeader: typeRest.CTFO6118R_RESPONSE_HEADER | null = null): Promise<typeRest.CTFO6118R_RESPONSE> {
            return await this.request(secret, 'CTFO6118R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 선물옵션 잔고현황
     * @description 선물옵션 잔고현황
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTFO6118R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTFO6118R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTFO6118R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTFO6118R_RESPONSE}
     */
    public async VTFO6118R(
        secret: Secret, requestHeader: typeRest.VTFO6118R_REQUEST_HEADER, requestBody: typeRest.VTFO6118R_REQUEST_BODY, 
        responseHeader: typeRest.VTFO6118R_RESPONSE_HEADER | null = null): Promise<typeRest.VTFO6118R_RESPONSE> {
            return await this.request(secret, 'VTFO6118R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 선물옵션 주문가능
     * @description 선물옵션 주문가능
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTO5105R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTO5105R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTO5105R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTO5105R_RESPONSE}
     */
    public async TTTO5105R(
        secret: Secret, requestHeader: typeRest.TTTO5105R_REQUEST_HEADER, requestBody: typeRest.TTTO5105R_REQUEST_BODY, 
        responseHeader: typeRest.TTTO5105R_RESPONSE_HEADER | null = null): Promise<typeRest.TTTO5105R_RESPONSE> {
            return await this.request(secret, 'TTTO5105R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 선물옵션 주문가능
     * @description 선물옵션 주문가능
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTTO5105R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTO5105R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTO5105R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTTO5105R_RESPONSE}
     */
    public async VTTO5105R(
        secret: Secret, requestHeader: typeRest.VTTO5105R_REQUEST_HEADER, requestBody: typeRest.VTTO5105R_REQUEST_BODY, 
        responseHeader: typeRest.VTTO5105R_RESPONSE_HEADER | null = null): Promise<typeRest.VTTO5105R_RESPONSE> {
            return await this.request(secret, 'VTTO5105R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * (야간)선물옵션 주문체결 내역조회
     * @description (야간)선물옵션 주문체결 내역조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.JTCE5005R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.JTCE5005R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.JTCE5005R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.JTCE5005R_RESPONSE}
     */
    public async JTCE5005R(
        secret: Secret, requestHeader: typeRest.JTCE5005R_REQUEST_HEADER, requestBody: typeRest.JTCE5005R_REQUEST_BODY, 
        responseHeader: typeRest.JTCE5005R_RESPONSE_HEADER | null = null): Promise<typeRest.JTCE5005R_RESPONSE> {
            return await this.request(secret, 'JTCE5005R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * (야간)선물옵션 잔고현황
     * @description (야간)선물옵션 잔고현황
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.JTCE6001R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.JTCE6001R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.JTCE6001R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.JTCE6001R_RESPONSE}
     */
    public async JTCE6001R(
        secret: Secret, requestHeader: typeRest.JTCE6001R_REQUEST_HEADER, requestBody: typeRest.JTCE6001R_REQUEST_BODY, 
        responseHeader: typeRest.JTCE6001R_RESPONSE_HEADER | null = null): Promise<typeRest.JTCE6001R_RESPONSE> {
            return await this.request(secret, 'JTCE6001R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 선물옵션 시세
     * @description 선물옵션 시세
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.FHMIF10000000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHMIF10000000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHMIF10000000_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.FHMIF10000000_RESPONSE}
     */
    public async FHMIF10000000(
        secret: Secret, requestHeader: typeRest.FHMIF10000000_REQUEST_HEADER, requestBody: typeRest.FHMIF10000000_REQUEST_BODY, 
        responseHeader: typeRest.FHMIF10000000_RESPONSE_HEADER | null = null): Promise<typeRest.FHMIF10000000_RESPONSE> {
            return await this.request(secret, 'FHMIF10000000', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 선물옵션 시세호가
     * @description 선물옵션 시세호가
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.FHMIF10010000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHMIF10010000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHMIF10010000_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.FHMIF10010000_RESPONSE}
     */
    public async FHMIF10010000(
        secret: Secret, requestHeader: typeRest.FHMIF10010000_REQUEST_HEADER, requestBody: typeRest.FHMIF10010000_REQUEST_BODY, 
        responseHeader: typeRest.FHMIF10010000_RESPONSE_HEADER | null = null): Promise<typeRest.FHMIF10010000_RESPONSE> {
            return await this.request(secret, 'FHMIF10010000', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 선물옵션기간별시세(일/주/월/년)
     * @description 선물옵션기간별시세(일/주/월/년)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.FHKIF03020100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKIF03020100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKIF03020100_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.FHKIF03020100_RESPONSE}
     */
    public async FHKIF03020100(
        secret: Secret, requestHeader: typeRest.FHKIF03020100_REQUEST_HEADER, requestBody: typeRest.FHKIF03020100_REQUEST_BODY, 
        responseHeader: typeRest.FHKIF03020100_RESPONSE_HEADER | null = null): Promise<typeRest.FHKIF03020100_RESPONSE> {
            return await this.request(secret, 'FHKIF03020100', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTT1002U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTT1002U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTT1002U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTT1002U_RESPONSE}
     */
    public async TTTT1002U(
        secret: Secret, requestHeader: typeRest.TTTT1002U_REQUEST_HEADER, requestBody: typeRest.TTTT1002U_REQUEST_BODY, 
        responseHeader: typeRest.TTTT1002U_RESPONSE_HEADER | null = null): Promise<typeRest.TTTT1002U_RESPONSE> {
            return await this.request(secret, 'TTTT1002U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTT1006U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTT1006U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTT1006U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTT1006U_RESPONSE}
     */
    public async TTTT1006U(
        secret: Secret, requestHeader: typeRest.TTTT1006U_REQUEST_HEADER, requestBody: typeRest.TTTT1006U_REQUEST_BODY, 
        responseHeader: typeRest.TTTT1006U_RESPONSE_HEADER | null = null): Promise<typeRest.TTTT1006U_RESPONSE> {
            return await this.request(secret, 'TTTT1006U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTS0308U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS0308U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS0308U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTS0308U_RESPONSE}
     */
    public async TTTS0308U(
        secret: Secret, requestHeader: typeRest.TTTS0308U_REQUEST_HEADER, requestBody: typeRest.TTTS0308U_REQUEST_BODY, 
        responseHeader: typeRest.TTTS0308U_RESPONSE_HEADER | null = null): Promise<typeRest.TTTS0308U_RESPONSE> {
            return await this.request(secret, 'TTTS0308U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTS0307U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS0307U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS0307U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTS0307U_RESPONSE}
     */
    public async TTTS0307U(
        secret: Secret, requestHeader: typeRest.TTTS0307U_REQUEST_HEADER, requestBody: typeRest.TTTS0307U_REQUEST_BODY, 
        responseHeader: typeRest.TTTS0307U_RESPONSE_HEADER | null = null): Promise<typeRest.TTTS0307U_RESPONSE> {
            return await this.request(secret, 'TTTS0307U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTS0202U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS0202U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS0202U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTS0202U_RESPONSE}
     */
    public async TTTS0202U(
        secret: Secret, requestHeader: typeRest.TTTS0202U_REQUEST_HEADER, requestBody: typeRest.TTTS0202U_REQUEST_BODY, 
        responseHeader: typeRest.TTTS0202U_RESPONSE_HEADER | null = null): Promise<typeRest.TTTS0202U_RESPONSE> {
            return await this.request(secret, 'TTTS0202U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTS1005U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS1005U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS1005U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTS1005U_RESPONSE}
     */
    public async TTTS1005U(
        secret: Secret, requestHeader: typeRest.TTTS1005U_REQUEST_HEADER, requestBody: typeRest.TTTS1005U_REQUEST_BODY, 
        responseHeader: typeRest.TTTS1005U_RESPONSE_HEADER | null = null): Promise<typeRest.TTTS1005U_RESPONSE> {
            return await this.request(secret, 'TTTS1005U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTS1002U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS1002U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS1002U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTS1002U_RESPONSE}
     */
    public async TTTS1002U(
        secret: Secret, requestHeader: typeRest.TTTS1002U_REQUEST_HEADER, requestBody: typeRest.TTTS1002U_REQUEST_BODY, 
        responseHeader: typeRest.TTTS1002U_RESPONSE_HEADER | null = null): Promise<typeRest.TTTS1002U_RESPONSE> {
            return await this.request(secret, 'TTTS1002U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTS1001U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS1001U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS1001U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTS1001U_RESPONSE}
     */
    public async TTTS1001U(
        secret: Secret, requestHeader: typeRest.TTTS1001U_REQUEST_HEADER, requestBody: typeRest.TTTS1001U_REQUEST_BODY, 
        responseHeader: typeRest.TTTS1001U_RESPONSE_HEADER | null = null): Promise<typeRest.TTTS1001U_RESPONSE> {
            return await this.request(secret, 'TTTS1001U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTS0305U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS0305U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS0305U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTS0305U_RESPONSE}
     */
    public async TTTS0305U(
        secret: Secret, requestHeader: typeRest.TTTS0305U_REQUEST_HEADER, requestBody: typeRest.TTTS0305U_REQUEST_BODY, 
        responseHeader: typeRest.TTTS0305U_RESPONSE_HEADER | null = null): Promise<typeRest.TTTS0305U_RESPONSE> {
            return await this.request(secret, 'TTTS0305U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTS0304U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS0304U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS0304U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTS0304U_RESPONSE}
     */
    public async TTTS0304U(
        secret: Secret, requestHeader: typeRest.TTTS0304U_REQUEST_HEADER, requestBody: typeRest.TTTS0304U_REQUEST_BODY, 
        responseHeader: typeRest.TTTS0304U_RESPONSE_HEADER | null = null): Promise<typeRest.TTTS0304U_RESPONSE> {
            return await this.request(secret, 'TTTS0304U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTS0311U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS0311U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS0311U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTS0311U_RESPONSE}
     */
    public async TTTS0311U(
        secret: Secret, requestHeader: typeRest.TTTS0311U_REQUEST_HEADER, requestBody: typeRest.TTTS0311U_REQUEST_BODY, 
        responseHeader: typeRest.TTTS0311U_RESPONSE_HEADER | null = null): Promise<typeRest.TTTS0311U_RESPONSE> {
            return await this.request(secret, 'TTTS0311U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTS0310U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS0310U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS0310U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTS0310U_RESPONSE}
     */
    public async TTTS0310U(
        secret: Secret, requestHeader: typeRest.TTTS0310U_REQUEST_HEADER, requestBody: typeRest.TTTS0310U_REQUEST_BODY, 
        responseHeader: typeRest.TTTS0310U_RESPONSE_HEADER | null = null): Promise<typeRest.TTTS0310U_RESPONSE> {
            return await this.request(secret, 'TTTS0310U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTTT1002U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTT1002U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTT1002U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTTT1002U_RESPONSE}
     */
    public async VTTT1002U(
        secret: Secret, requestHeader: typeRest.VTTT1002U_REQUEST_HEADER, requestBody: typeRest.VTTT1002U_REQUEST_BODY, 
        responseHeader: typeRest.VTTT1002U_RESPONSE_HEADER | null = null): Promise<typeRest.VTTT1002U_RESPONSE> {
            return await this.request(secret, 'VTTT1002U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTTT1001U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTT1001U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTT1001U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTTT1001U_RESPONSE}
     */
    public async VTTT1001U(
        secret: Secret, requestHeader: typeRest.VTTT1001U_REQUEST_HEADER, requestBody: typeRest.VTTT1001U_REQUEST_BODY, 
        responseHeader: typeRest.VTTT1001U_RESPONSE_HEADER | null = null): Promise<typeRest.VTTT1001U_RESPONSE> {
            return await this.request(secret, 'VTTT1001U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTTS0308U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS0308U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS0308U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTTS0308U_RESPONSE}
     */
    public async VTTS0308U(
        secret: Secret, requestHeader: typeRest.VTTS0308U_REQUEST_HEADER, requestBody: typeRest.VTTS0308U_REQUEST_BODY, 
        responseHeader: typeRest.VTTS0308U_RESPONSE_HEADER | null = null): Promise<typeRest.VTTS0308U_RESPONSE> {
            return await this.request(secret, 'VTTS0308U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTTS0307U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS0307U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS0307U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTTS0307U_RESPONSE}
     */
    public async VTTS0307U(
        secret: Secret, requestHeader: typeRest.VTTS0307U_REQUEST_HEADER, requestBody: typeRest.VTTS0307U_REQUEST_BODY, 
        responseHeader: typeRest.VTTS0307U_RESPONSE_HEADER | null = null): Promise<typeRest.VTTS0307U_RESPONSE> {
            return await this.request(secret, 'VTTS0307U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTTS0202U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS0202U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS0202U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTTS0202U_RESPONSE}
     */
    public async VTTS0202U(
        secret: Secret, requestHeader: typeRest.VTTS0202U_REQUEST_HEADER, requestBody: typeRest.VTTS0202U_REQUEST_BODY, 
        responseHeader: typeRest.VTTS0202U_RESPONSE_HEADER | null = null): Promise<typeRest.VTTS0202U_RESPONSE> {
            return await this.request(secret, 'VTTS0202U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTTS1005U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS1005U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS1005U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTTS1005U_RESPONSE}
     */
    public async VTTS1005U(
        secret: Secret, requestHeader: typeRest.VTTS1005U_REQUEST_HEADER, requestBody: typeRest.VTTS1005U_REQUEST_BODY, 
        responseHeader: typeRest.VTTS1005U_RESPONSE_HEADER | null = null): Promise<typeRest.VTTS1005U_RESPONSE> {
            return await this.request(secret, 'VTTS1005U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTTS1002U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS1002U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS1002U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTTS1002U_RESPONSE}
     */
    public async VTTS1002U(
        secret: Secret, requestHeader: typeRest.VTTS1002U_REQUEST_HEADER, requestBody: typeRest.VTTS1002U_REQUEST_BODY, 
        responseHeader: typeRest.VTTS1002U_RESPONSE_HEADER | null = null): Promise<typeRest.VTTS1002U_RESPONSE> {
            return await this.request(secret, 'VTTS1002U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTTS1001U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS1001U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS1001U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTTS1001U_RESPONSE}
     */
    public async VTTS1001U(
        secret: Secret, requestHeader: typeRest.VTTS1001U_REQUEST_HEADER, requestBody: typeRest.VTTS1001U_REQUEST_BODY, 
        responseHeader: typeRest.VTTS1001U_RESPONSE_HEADER | null = null): Promise<typeRest.VTTS1001U_RESPONSE> {
            return await this.request(secret, 'VTTS1001U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTTS0305U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS0305U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS0305U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTTS0305U_RESPONSE}
     */
    public async VTTS0305U(
        secret: Secret, requestHeader: typeRest.VTTS0305U_REQUEST_HEADER, requestBody: typeRest.VTTS0305U_REQUEST_BODY, 
        responseHeader: typeRest.VTTS0305U_RESPONSE_HEADER | null = null): Promise<typeRest.VTTS0305U_RESPONSE> {
            return await this.request(secret, 'VTTS0305U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTTS0304U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS0304U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS0304U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTTS0304U_RESPONSE}
     */
    public async VTTS0304U(
        secret: Secret, requestHeader: typeRest.VTTS0304U_REQUEST_HEADER, requestBody: typeRest.VTTS0304U_REQUEST_BODY, 
        responseHeader: typeRest.VTTS0304U_RESPONSE_HEADER | null = null): Promise<typeRest.VTTS0304U_RESPONSE> {
            return await this.request(secret, 'VTTS0304U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTTS0311U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS0311U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS0311U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTTS0311U_RESPONSE}
     */
    public async VTTS0311U(
        secret: Secret, requestHeader: typeRest.VTTS0311U_REQUEST_HEADER, requestBody: typeRest.VTTS0311U_REQUEST_BODY, 
        responseHeader: typeRest.VTTS0311U_RESPONSE_HEADER | null = null): Promise<typeRest.VTTS0311U_RESPONSE> {
            return await this.request(secret, 'VTTS0311U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTTS0310U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS0310U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS0310U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTTS0310U_RESPONSE}
     */
    public async VTTS0310U(
        secret: Secret, requestHeader: typeRest.VTTS0310U_REQUEST_HEADER, requestBody: typeRest.VTTS0310U_REQUEST_BODY, 
        responseHeader: typeRest.VTTS0310U_RESPONSE_HEADER | null = null): Promise<typeRest.VTTS0310U_RESPONSE> {
            return await this.request(secret, 'VTTS0310U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTT1004U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTT1004U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTT1004U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTT1004U_RESPONSE}
     */
    public async TTTT1004U(
        secret: Secret, requestHeader: typeRest.TTTT1004U_REQUEST_HEADER, requestBody: typeRest.TTTT1004U_REQUEST_BODY, 
        responseHeader: typeRest.TTTT1004U_RESPONSE_HEADER | null = null): Promise<typeRest.TTTT1004U_RESPONSE> {
            return await this.request(secret, 'TTTT1004U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTS1003U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS1003U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS1003U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTS1003U_RESPONSE}
     */
    public async TTTS1003U(
        secret: Secret, requestHeader: typeRest.TTTS1003U_REQUEST_HEADER, requestBody: typeRest.TTTS1003U_REQUEST_BODY, 
        responseHeader: typeRest.TTTS1003U_RESPONSE_HEADER | null = null): Promise<typeRest.TTTS1003U_RESPONSE> {
            return await this.request(secret, 'TTTS1003U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTS0309U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS0309U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS0309U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTS0309U_RESPONSE}
     */
    public async TTTS0309U(
        secret: Secret, requestHeader: typeRest.TTTS0309U_REQUEST_HEADER, requestBody: typeRest.TTTS0309U_REQUEST_BODY, 
        responseHeader: typeRest.TTTS0309U_RESPONSE_HEADER | null = null): Promise<typeRest.TTTS0309U_RESPONSE> {
            return await this.request(secret, 'TTTS0309U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTS0302U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS0302U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS0302U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTS0302U_RESPONSE}
     */
    public async TTTS0302U(
        secret: Secret, requestHeader: typeRest.TTTS0302U_REQUEST_HEADER, requestBody: typeRest.TTTS0302U_REQUEST_BODY, 
        responseHeader: typeRest.TTTS0302U_RESPONSE_HEADER | null = null): Promise<typeRest.TTTS0302U_RESPONSE> {
            return await this.request(secret, 'TTTS0302U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTS0306U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS0306U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS0306U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTS0306U_RESPONSE}
     */
    public async TTTS0306U(
        secret: Secret, requestHeader: typeRest.TTTS0306U_REQUEST_HEADER, requestBody: typeRest.TTTS0306U_REQUEST_BODY, 
        responseHeader: typeRest.TTTS0306U_RESPONSE_HEADER | null = null): Promise<typeRest.TTTS0306U_RESPONSE> {
            return await this.request(secret, 'TTTS0306U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTS0312U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS0312U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS0312U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTS0312U_RESPONSE}
     */
    public async TTTS0312U(
        secret: Secret, requestHeader: typeRest.TTTS0312U_REQUEST_HEADER, requestBody: typeRest.TTTS0312U_REQUEST_BODY, 
        responseHeader: typeRest.TTTS0312U_RESPONSE_HEADER | null = null): Promise<typeRest.TTTS0312U_RESPONSE> {
            return await this.request(secret, 'TTTS0312U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTTT1004U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTT1004U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTT1004U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTTT1004U_RESPONSE}
     */
    public async VTTT1004U(
        secret: Secret, requestHeader: typeRest.VTTT1004U_REQUEST_HEADER, requestBody: typeRest.VTTT1004U_REQUEST_BODY, 
        responseHeader: typeRest.VTTT1004U_RESPONSE_HEADER | null = null): Promise<typeRest.VTTT1004U_RESPONSE> {
            return await this.request(secret, 'VTTT1004U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTTS1003U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS1003U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS1003U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTTS1003U_RESPONSE}
     */
    public async VTTS1003U(
        secret: Secret, requestHeader: typeRest.VTTS1003U_REQUEST_HEADER, requestBody: typeRest.VTTS1003U_REQUEST_BODY, 
        responseHeader: typeRest.VTTS1003U_RESPONSE_HEADER | null = null): Promise<typeRest.VTTS1003U_RESPONSE> {
            return await this.request(secret, 'VTTS1003U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTTS0309U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS0309U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS0309U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTTS0309U_RESPONSE}
     */
    public async VTTS0309U(
        secret: Secret, requestHeader: typeRest.VTTS0309U_REQUEST_HEADER, requestBody: typeRest.VTTS0309U_REQUEST_BODY, 
        responseHeader: typeRest.VTTS0309U_RESPONSE_HEADER | null = null): Promise<typeRest.VTTS0309U_RESPONSE> {
            return await this.request(secret, 'VTTS0309U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTTS0302U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS0302U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS0302U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTTS0302U_RESPONSE}
     */
    public async VTTS0302U(
        secret: Secret, requestHeader: typeRest.VTTS0302U_REQUEST_HEADER, requestBody: typeRest.VTTS0302U_REQUEST_BODY, 
        responseHeader: typeRest.VTTS0302U_RESPONSE_HEADER | null = null): Promise<typeRest.VTTS0302U_RESPONSE> {
            return await this.request(secret, 'VTTS0302U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTTS0306U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS0306U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS0306U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTTS0306U_RESPONSE}
     */
    public async VTTS0306U(
        secret: Secret, requestHeader: typeRest.VTTS0306U_REQUEST_HEADER, requestBody: typeRest.VTTS0306U_REQUEST_BODY, 
        responseHeader: typeRest.VTTS0306U_RESPONSE_HEADER | null = null): Promise<typeRest.VTTS0306U_RESPONSE> {
            return await this.request(secret, 'VTTS0306U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTTS0312U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS0312U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS0312U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTTS0312U_RESPONSE}
     */
    public async VTTS0312U(
        secret: Secret, requestHeader: typeRest.VTTS0312U_REQUEST_HEADER, requestBody: typeRest.VTTS0312U_REQUEST_BODY, 
        responseHeader: typeRest.VTTS0312U_RESPONSE_HEADER | null = null): Promise<typeRest.VTTS0312U_RESPONSE> {
            return await this.request(secret, 'VTTS0312U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 예약주문접수
     * @description 해외주식 예약주문접수
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTT3016U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTT3016U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTT3016U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTT3016U_RESPONSE}
     */
    public async TTTT3016U(
        secret: Secret, requestHeader: typeRest.TTTT3016U_REQUEST_HEADER, requestBody: typeRest.TTTT3016U_REQUEST_BODY, 
        responseHeader: typeRest.TTTT3016U_RESPONSE_HEADER | null = null): Promise<typeRest.TTTT3016U_RESPONSE> {
            return await this.request(secret, 'TTTT3016U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 예약주문접수
     * @description 해외주식 예약주문접수
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTT3014U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTT3014U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTT3014U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTT3014U_RESPONSE}
     */
    public async TTTT3014U(
        secret: Secret, requestHeader: typeRest.TTTT3014U_REQUEST_HEADER, requestBody: typeRest.TTTT3014U_REQUEST_BODY, 
        responseHeader: typeRest.TTTT3014U_RESPONSE_HEADER | null = null): Promise<typeRest.TTTT3014U_RESPONSE> {
            return await this.request(secret, 'TTTT3014U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 예약주문접수
     * @description 해외주식 예약주문접수
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTS3013U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS3013U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS3013U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTS3013U_RESPONSE}
     */
    public async TTTS3013U(
        secret: Secret, requestHeader: typeRest.TTTS3013U_REQUEST_HEADER, requestBody: typeRest.TTTS3013U_REQUEST_BODY, 
        responseHeader: typeRest.TTTS3013U_RESPONSE_HEADER | null = null): Promise<typeRest.TTTS3013U_RESPONSE> {
            return await this.request(secret, 'TTTS3013U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 예약주문접수
     * @description 해외주식 예약주문접수
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTTT3016U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTT3016U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTT3016U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTTT3016U_RESPONSE}
     */
    public async VTTT3016U(
        secret: Secret, requestHeader: typeRest.VTTT3016U_REQUEST_HEADER, requestBody: typeRest.VTTT3016U_REQUEST_BODY, 
        responseHeader: typeRest.VTTT3016U_RESPONSE_HEADER | null = null): Promise<typeRest.VTTT3016U_RESPONSE> {
            return await this.request(secret, 'VTTT3016U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 예약주문접수
     * @description 해외주식 예약주문접수
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTTT3014U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTT3014U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTT3014U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTTT3014U_RESPONSE}
     */
    public async VTTT3014U(
        secret: Secret, requestHeader: typeRest.VTTT3014U_REQUEST_HEADER, requestBody: typeRest.VTTT3014U_REQUEST_BODY, 
        responseHeader: typeRest.VTTT3014U_RESPONSE_HEADER | null = null): Promise<typeRest.VTTT3014U_RESPONSE> {
            return await this.request(secret, 'VTTT3014U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 예약주문접수
     * @description 해외주식 예약주문접수
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTTS3013U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS3013U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS3013U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTTS3013U_RESPONSE}
     */
    public async VTTS3013U(
        secret: Secret, requestHeader: typeRest.VTTS3013U_REQUEST_HEADER, requestBody: typeRest.VTTS3013U_REQUEST_BODY, 
        responseHeader: typeRest.VTTS3013U_RESPONSE_HEADER | null = null): Promise<typeRest.VTTS3013U_RESPONSE> {
            return await this.request(secret, 'VTTS3013U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 예약주문접수취소
     * @description 해외주식 예약주문접수취소
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTT3017U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTT3017U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTT3017U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTT3017U_RESPONSE}
     */
    public async TTTT3017U(
        secret: Secret, requestHeader: typeRest.TTTT3017U_REQUEST_HEADER, requestBody: typeRest.TTTT3017U_REQUEST_BODY, 
        responseHeader: typeRest.TTTT3017U_RESPONSE_HEADER | null = null): Promise<typeRest.TTTT3017U_RESPONSE> {
            return await this.request(secret, 'TTTT3017U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 예약주문접수취소
     * @description 해외주식 예약주문접수취소
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTTT3017U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTT3017U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTT3017U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTTT3017U_RESPONSE}
     */
    public async VTTT3017U(
        secret: Secret, requestHeader: typeRest.VTTT3017U_REQUEST_HEADER, requestBody: typeRest.VTTT3017U_REQUEST_BODY, 
        responseHeader: typeRest.VTTT3017U_RESPONSE_HEADER | null = null): Promise<typeRest.VTTT3017U_RESPONSE> {
            return await this.request(secret, 'VTTT3017U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 미체결내역
     * @description 해외주식 미체결내역
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTS3018R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS3018R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS3018R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTS3018R_RESPONSE}
     */
    public async TTTS3018R(
        secret: Secret, requestHeader: typeRest.TTTS3018R_REQUEST_HEADER, requestBody: typeRest.TTTS3018R_REQUEST_BODY, 
        responseHeader: typeRest.TTTS3018R_RESPONSE_HEADER | null = null): Promise<typeRest.TTTS3018R_RESPONSE> {
            return await this.request(secret, 'TTTS3018R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 미체결내역
     * @description 해외주식 미체결내역
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTTS3018R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS3018R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS3018R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTTS3018R_RESPONSE}
     */
    public async VTTS3018R(
        secret: Secret, requestHeader: typeRest.VTTS3018R_REQUEST_HEADER, requestBody: typeRest.VTTS3018R_REQUEST_BODY, 
        responseHeader: typeRest.VTTS3018R_RESPONSE_HEADER | null = null): Promise<typeRest.VTTS3018R_RESPONSE> {
            return await this.request(secret, 'VTTS3018R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 잔고
     * @description 해외주식 잔고
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTS3012R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS3012R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS3012R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTS3012R_RESPONSE}
     */
    public async TTTS3012R(
        secret: Secret, requestHeader: typeRest.TTTS3012R_REQUEST_HEADER, requestBody: typeRest.TTTS3012R_REQUEST_BODY, 
        responseHeader: typeRest.TTTS3012R_RESPONSE_HEADER | null = null): Promise<typeRest.TTTS3012R_RESPONSE> {
            return await this.request(secret, 'TTTS3012R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 잔고
     * @description 해외주식 잔고
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTTS3012R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS3012R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS3012R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTTS3012R_RESPONSE}
     */
    public async VTTS3012R(
        secret: Secret, requestHeader: typeRest.VTTS3012R_REQUEST_HEADER, requestBody: typeRest.VTTS3012R_REQUEST_BODY, 
        responseHeader: typeRest.VTTS3012R_RESPONSE_HEADER | null = null): Promise<typeRest.VTTS3012R_RESPONSE> {
            return await this.request(secret, 'VTTS3012R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 주문체결내역
     * @description 해외주식 주문체결내역
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTS3035R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS3035R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS3035R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTS3035R_RESPONSE}
     */
    public async TTTS3035R(
        secret: Secret, requestHeader: typeRest.TTTS3035R_REQUEST_HEADER, requestBody: typeRest.TTTS3035R_REQUEST_BODY, 
        responseHeader: typeRest.TTTS3035R_RESPONSE_HEADER | null = null): Promise<typeRest.TTTS3035R_RESPONSE> {
            return await this.request(secret, 'TTTS3035R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 주문체결내역
     * @description 해외주식 주문체결내역
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTTS3035R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTTS3035R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTTS3035R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTTS3035R_RESPONSE}
     */
    public async VTTS3035R(
        secret: Secret, requestHeader: typeRest.VTTS3035R_REQUEST_HEADER, requestBody: typeRest.VTTS3035R_REQUEST_BODY, 
        responseHeader: typeRest.VTTS3035R_RESPONSE_HEADER | null = null): Promise<typeRest.VTTS3035R_RESPONSE> {
            return await this.request(secret, 'VTTS3035R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 체결기준현재잔고
     * @description 해외주식 체결기준현재잔고
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.CTRP6504R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTRP6504R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTRP6504R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.CTRP6504R_RESPONSE}
     */
    public async CTRP6504R(
        secret: Secret, requestHeader: typeRest.CTRP6504R_REQUEST_HEADER, requestBody: typeRest.CTRP6504R_REQUEST_BODY, 
        responseHeader: typeRest.CTRP6504R_RESPONSE_HEADER | null = null): Promise<typeRest.CTRP6504R_RESPONSE> {
            return await this.request(secret, 'CTRP6504R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 체결기준현재잔고
     * @description 해외주식 체결기준현재잔고
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.VTRP6504R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.VTRP6504R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.VTRP6504R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.VTRP6504R_RESPONSE}
     */
    public async VTRP6504R(
        secret: Secret, requestHeader: typeRest.VTRP6504R_REQUEST_HEADER, requestBody: typeRest.VTRP6504R_REQUEST_BODY, 
        responseHeader: typeRest.VTRP6504R_RESPONSE_HEADER | null = null): Promise<typeRest.VTRP6504R_RESPONSE> {
            return await this.request(secret, 'VTRP6504R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 예약주문조회
     * @description 해외주식 예약주문조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTT3039R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTT3039R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTT3039R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTT3039R_RESPONSE}
     */
    public async TTTT3039R(
        secret: Secret, requestHeader: typeRest.TTTT3039R_REQUEST_HEADER, requestBody: typeRest.TTTT3039R_REQUEST_BODY, 
        responseHeader: typeRest.TTTT3039R_RESPONSE_HEADER | null = null): Promise<typeRest.TTTT3039R_RESPONSE> {
            return await this.request(secret, 'TTTT3039R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 매수가능금액조회
     * @description 해외주식 매수가능금액조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTS3007R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS3007R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS3007R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTS3007R_RESPONSE}
     */
    public async TTTS3007R(
        secret: Secret, requestHeader: typeRest.TTTS3007R_REQUEST_HEADER, requestBody: typeRest.TTTS3007R_REQUEST_BODY, 
        responseHeader: typeRest.TTTS3007R_RESPONSE_HEADER | null = null): Promise<typeRest.TTTS3007R_RESPONSE> {
            return await this.request(secret, 'TTTS3007R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 미국주간주문
     * @description 해외주식 미국주간주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTS6036U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS6036U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS6036U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTS6036U_RESPONSE}
     */
    public async TTTS6036U(
        secret: Secret, requestHeader: typeRest.TTTS6036U_REQUEST_HEADER, requestBody: typeRest.TTTS6036U_REQUEST_BODY, 
        responseHeader: typeRest.TTTS6036U_RESPONSE_HEADER | null = null): Promise<typeRest.TTTS6036U_RESPONSE> {
            return await this.request(secret, 'TTTS6036U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 미국주간주문
     * @description 해외주식 미국주간주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTS6037U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS6037U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS6037U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTS6037U_RESPONSE}
     */
    public async TTTS6037U(
        secret: Secret, requestHeader: typeRest.TTTS6037U_REQUEST_HEADER, requestBody: typeRest.TTTS6037U_REQUEST_BODY, 
        responseHeader: typeRest.TTTS6037U_RESPONSE_HEADER | null = null): Promise<typeRest.TTTS6037U_RESPONSE> {
            return await this.request(secret, 'TTTS6037U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 미국주간정정취소
     * @description 해외주식 미국주간정정취소
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTS6038U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS6038U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS6038U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTS6038U_RESPONSE}
     */
    public async TTTS6038U(
        secret: Secret, requestHeader: typeRest.TTTS6038U_REQUEST_HEADER, requestBody: typeRest.TTTS6038U_REQUEST_BODY, 
        responseHeader: typeRest.TTTS6038U_RESPONSE_HEADER | null = null): Promise<typeRest.TTTS6038U_RESPONSE> {
            return await this.request(secret, 'TTTS6038U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 기간손익
     * @description 해외주식 기간손익
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.TTTS3039R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TTTS3039R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TTTS3039R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.TTTS3039R_RESPONSE}
     */
    public async TTTS3039R(
        secret: Secret, requestHeader: typeRest.TTTS3039R_REQUEST_HEADER, requestBody: typeRest.TTTS3039R_REQUEST_BODY, 
        responseHeader: typeRest.TTTS3039R_RESPONSE_HEADER | null = null): Promise<typeRest.TTTS3039R_RESPONSE> {
            return await this.request(secret, 'TTTS3039R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 현재체결가
     * @description 해외주식 현재체결가
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.HHDFS00000300_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFS00000300_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFS00000300_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.HHDFS00000300_RESPONSE}
     */
    public async HHDFS00000300(
        secret: Secret, requestHeader: typeRest.HHDFS00000300_REQUEST_HEADER, requestBody: typeRest.HHDFS00000300_REQUEST_BODY, 
        responseHeader: typeRest.HHDFS00000300_RESPONSE_HEADER | null = null): Promise<typeRest.HHDFS00000300_RESPONSE> {
            return await this.request(secret, 'HHDFS00000300', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 기간별시세
     * @description 해외주식 기간별시세
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.HHDFS76240000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFS76240000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFS76240000_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.HHDFS76240000_RESPONSE}
     */
    public async HHDFS76240000(
        secret: Secret, requestHeader: typeRest.HHDFS76240000_REQUEST_HEADER, requestBody: typeRest.HHDFS76240000_REQUEST_BODY, 
        responseHeader: typeRest.HHDFS76240000_RESPONSE_HEADER | null = null): Promise<typeRest.HHDFS76240000_RESPONSE> {
            return await this.request(secret, 'HHDFS76240000', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 종목/지수/환율기간별시세(일/주/월/년)
     * @description 해외주식 종목/지수/환율기간별시세(일/주/월/년)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.FHKST03030100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST03030100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST03030100_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.FHKST03030100_RESPONSE}
     */
    public async FHKST03030100(
        secret: Secret, requestHeader: typeRest.FHKST03030100_REQUEST_HEADER, requestBody: typeRest.FHKST03030100_REQUEST_BODY, 
        responseHeader: typeRest.FHKST03030100_RESPONSE_HEADER | null = null): Promise<typeRest.FHKST03030100_RESPONSE> {
            return await this.request(secret, 'FHKST03030100', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식조건검색
     * @description 해외주식조건검색
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.HHDFS76410000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFS76410000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFS76410000_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.HHDFS76410000_RESPONSE}
     */
    public async HHDFS76410000(
        secret: Secret, requestHeader: typeRest.HHDFS76410000_REQUEST_HEADER, requestBody: typeRest.HHDFS76410000_REQUEST_BODY, 
        responseHeader: typeRest.HHDFS76410000_RESPONSE_HEADER | null = null): Promise<typeRest.HHDFS76410000_RESPONSE> {
            return await this.request(secret, 'HHDFS76410000', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외결제일자조회
     * @description 해외결제일자조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.CTOS5011R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CTOS5011R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CTOS5011R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.CTOS5011R_RESPONSE}
     */
    public async CTOS5011R(
        secret: Secret, requestHeader: typeRest.CTOS5011R_REQUEST_HEADER, requestBody: typeRest.CTOS5011R_REQUEST_BODY, 
        responseHeader: typeRest.CTOS5011R_RESPONSE_HEADER | null = null): Promise<typeRest.CTOS5011R_RESPONSE> {
            return await this.request(secret, 'CTOS5011R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식 현재가상세
     * @description 해외주식 현재가상세
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.HHDFS76200200_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFS76200200_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFS76200200_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.HHDFS76200200_RESPONSE}
     */
    public async HHDFS76200200(
        secret: Secret, requestHeader: typeRest.HHDFS76200200_REQUEST_HEADER, requestBody: typeRest.HHDFS76200200_REQUEST_BODY, 
        responseHeader: typeRest.HHDFS76200200_RESPONSE_HEADER | null = null): Promise<typeRest.HHDFS76200200_RESPONSE> {
            return await this.request(secret, 'HHDFS76200200', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외주식분봉조회
     * @description 해외주식분봉조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.HHDFS76950200_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFS76950200_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFS76950200_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.HHDFS76950200_RESPONSE}
     */
    public async HHDFS76950200(
        secret: Secret, requestHeader: typeRest.HHDFS76950200_REQUEST_HEADER, requestBody: typeRest.HHDFS76950200_REQUEST_BODY, 
        responseHeader: typeRest.HHDFS76950200_RESPONSE_HEADER | null = null): Promise<typeRest.HHDFS76950200_RESPONSE> {
            return await this.request(secret, 'HHDFS76950200', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외지수분봉조회
     * @description 해외지수분봉조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.FHKST03030200_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FHKST03030200_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FHKST03030200_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.FHKST03030200_RESPONSE}
     */
    public async FHKST03030200(
        secret: Secret, requestHeader: typeRest.FHKST03030200_REQUEST_HEADER, requestBody: typeRest.FHKST03030200_REQUEST_BODY, 
        responseHeader: typeRest.FHKST03030200_RESPONSE_HEADER | null = null): Promise<typeRest.FHKST03030200_RESPONSE> {
            return await this.request(secret, 'FHKST03030200', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외선물옵션 주문
     * @description 해외선물옵션 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.OTFM3001U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.OTFM3001U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.OTFM3001U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.OTFM3001U_RESPONSE}
     */
    public async OTFM3001U(
        secret: Secret, requestHeader: typeRest.OTFM3001U_REQUEST_HEADER, requestBody: typeRest.OTFM3001U_REQUEST_BODY, 
        responseHeader: typeRest.OTFM3001U_RESPONSE_HEADER | null = null): Promise<typeRest.OTFM3001U_RESPONSE> {
            return await this.request(secret, 'OTFM3001U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외선물옵션 정정취소주문
     * @description 해외선물옵션 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.OTFM3002U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.OTFM3002U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.OTFM3002U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.OTFM3002U_RESPONSE}
     */
    public async OTFM3002U(
        secret: Secret, requestHeader: typeRest.OTFM3002U_REQUEST_HEADER, requestBody: typeRest.OTFM3002U_REQUEST_BODY, 
        responseHeader: typeRest.OTFM3002U_RESPONSE_HEADER | null = null): Promise<typeRest.OTFM3002U_RESPONSE> {
            return await this.request(secret, 'OTFM3002U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외선물옵션 정정취소주문
     * @description 해외선물옵션 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.OTFM3003U_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.OTFM3003U_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.OTFM3003U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.OTFM3003U_RESPONSE}
     */
    public async OTFM3003U(
        secret: Secret, requestHeader: typeRest.OTFM3003U_REQUEST_HEADER, requestBody: typeRest.OTFM3003U_REQUEST_BODY, 
        responseHeader: typeRest.OTFM3003U_RESPONSE_HEADER | null = null): Promise<typeRest.OTFM3003U_RESPONSE> {
            return await this.request(secret, 'OTFM3003U', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외선물옵션 당일주문내역조회
     * @description 해외선물옵션 당일주문내역조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.OTFM3116R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.OTFM3116R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.OTFM3116R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.OTFM3116R_RESPONSE}
     */
    public async OTFM3116R(
        secret: Secret, requestHeader: typeRest.OTFM3116R_REQUEST_HEADER, requestBody: typeRest.OTFM3116R_REQUEST_BODY, 
        responseHeader: typeRest.OTFM3116R_RESPONSE_HEADER | null = null): Promise<typeRest.OTFM3116R_RESPONSE> {
            return await this.request(secret, 'OTFM3116R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외선물옵션 미결제내역조회(잔고)
     * @description 해외선물옵션 미결제내역조회(잔고)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.OTFM1412R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.OTFM1412R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.OTFM1412R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.OTFM1412R_RESPONSE}
     */
    public async OTFM1412R(
        secret: Secret, requestHeader: typeRest.OTFM1412R_REQUEST_HEADER, requestBody: typeRest.OTFM1412R_REQUEST_BODY, 
        responseHeader: typeRest.OTFM1412R_RESPONSE_HEADER | null = null): Promise<typeRest.OTFM1412R_RESPONSE> {
            return await this.request(secret, 'OTFM1412R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외선물옵션 주문가능조회
     * @description 해외선물옵션 주문가능조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.OTFM3304R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.OTFM3304R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.OTFM3304R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.OTFM3304R_RESPONSE}
     */
    public async OTFM3304R(
        secret: Secret, requestHeader: typeRest.OTFM3304R_REQUEST_HEADER, requestBody: typeRest.OTFM3304R_REQUEST_BODY, 
        responseHeader: typeRest.OTFM3304R_RESPONSE_HEADER | null = null): Promise<typeRest.OTFM3304R_RESPONSE> {
            return await this.request(secret, 'OTFM3304R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외선물옵션 기간계좌손익 일별
     * @description 해외선물옵션 기간계좌손익 일별
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.OTFM3118R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.OTFM3118R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.OTFM3118R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.OTFM3118R_RESPONSE}
     */
    public async OTFM3118R(
        secret: Secret, requestHeader: typeRest.OTFM3118R_REQUEST_HEADER, requestBody: typeRest.OTFM3118R_REQUEST_BODY, 
        responseHeader: typeRest.OTFM3118R_RESPONSE_HEADER | null = null): Promise<typeRest.OTFM3118R_RESPONSE> {
            return await this.request(secret, 'OTFM3118R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외선물옵션 일별 체결내역
     * @description 해외선물옵션 일별 체결내역
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.OTFM3122R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.OTFM3122R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.OTFM3122R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.OTFM3122R_RESPONSE}
     */
    public async OTFM3122R(
        secret: Secret, requestHeader: typeRest.OTFM3122R_REQUEST_HEADER, requestBody: typeRest.OTFM3122R_REQUEST_BODY, 
        responseHeader: typeRest.OTFM3122R_RESPONSE_HEADER | null = null): Promise<typeRest.OTFM3122R_RESPONSE> {
            return await this.request(secret, 'OTFM3122R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외선물옵션 예수금현황
     * @description 해외선물옵션 예수금현황
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.OTFM1411R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.OTFM1411R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.OTFM1411R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.OTFM1411R_RESPONSE}
     */
    public async OTFM1411R(
        secret: Secret, requestHeader: typeRest.OTFM1411R_REQUEST_HEADER, requestBody: typeRest.OTFM1411R_REQUEST_BODY, 
        responseHeader: typeRest.OTFM1411R_RESPONSE_HEADER | null = null): Promise<typeRest.OTFM1411R_RESPONSE> {
            return await this.request(secret, 'OTFM1411R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외선물옵션 일별 주문내역
     * @description 해외선물옵션 일별 주문내역
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.OTFM3120R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.OTFM3120R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.OTFM3120R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.OTFM3120R_RESPONSE}
     */
    public async OTFM3120R(
        secret: Secret, requestHeader: typeRest.OTFM3120R_REQUEST_HEADER, requestBody: typeRest.OTFM3120R_REQUEST_BODY, 
        responseHeader: typeRest.OTFM3120R_RESPONSE_HEADER | null = null): Promise<typeRest.OTFM3120R_RESPONSE> {
            return await this.request(secret, 'OTFM3120R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외선물옵션 기간계좌거래내역
     * @description 해외선물옵션 기간계좌거래내역
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.OTFM3114R_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.OTFM3114R_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.OTFM3114R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.OTFM3114R_RESPONSE}
     */
    public async OTFM3114R(
        secret: Secret, requestHeader: typeRest.OTFM3114R_REQUEST_HEADER, requestBody: typeRest.OTFM3114R_REQUEST_BODY, 
        responseHeader: typeRest.OTFM3114R_RESPONSE_HEADER | null = null): Promise<typeRest.OTFM3114R_RESPONSE> {
            return await this.request(secret, 'OTFM3114R', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외선물종목상세
     * @description 해외선물종목상세
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.HHDFC55010100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFC55010100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFC55010100_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.HHDFC55010100_RESPONSE}
     */
    public async HHDFC55010100(
        secret: Secret, requestHeader: typeRest.HHDFC55010100_REQUEST_HEADER, requestBody: typeRest.HHDFC55010100_REQUEST_BODY, 
        responseHeader: typeRest.HHDFC55010100_RESPONSE_HEADER | null = null): Promise<typeRest.HHDFC55010100_RESPONSE> {
            return await this.request(secret, 'HHDFC55010100', requestHeader, requestBody, responseHeader);
        }
                    
    /**
     * 해외선물종목현재가
     * @description 해외선물종목현재가
     * 
     * @param {Secret} secret                               인증 정보
     * @param {typeRest.HHDFC55010000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.HHDFC55010000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.HHDFC55010000_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {typeRest.HHDFC55010000_RESPONSE}
     */
    public async HHDFC55010000(
        secret: Secret, requestHeader: typeRest.HHDFC55010000_REQUEST_HEADER, requestBody: typeRest.HHDFC55010000_REQUEST_BODY, 
        responseHeader: typeRest.HHDFC55010000_RESPONSE_HEADER | null = null): Promise<typeRest.HHDFC55010000_RESPONSE> {
            return await this.request(secret, 'HHDFC55010000', requestHeader, requestBody, responseHeader);
        }
                    
}

export default EFriendRest;
