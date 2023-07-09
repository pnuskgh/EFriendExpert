/**
 * 한국투자증권 EFriendExpert REST API
 * 
 * @file modules/efriendsTs/efriendRest.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { Moment } from 'moment';
import fetch, { RequestInit, Headers } from 'node-fetch';
import { v1 as uuid } from 'uuid';

import { EFriendError } from "../efriendsTs/efriendError";
import EFriend_JSON_TRID, { METADATA, METHOD, TRID_FIELD } from "../efriends/efriend_json_trid";

export interface Secret {
    site: number,                                           //--- Site ID
    user: number,                                           //--- User ID

    exchange: number,                                       //--- Exchang (거래소) ID
    isActual: IsActual,                                     //--- 실전투자, 모의투자
    userid: string,                                         //--- 사용자 ID
    acount: string,                                         //--- 계정
    acountSub: string,                                      //--- 계정 상세
    appkey: string,                                         //--- AppKey
    appsecret: string,                                      //--- AppSecret
    periodFrom: Moment,                                     //--- 유효기간 시작일시
    periodTo: Moment,                                       //--- 유효기간 종료일시
    feeType: FeeType,                                       //--- 뱅키스, 영업점
    isOrder: IsOrder,                                       //--- 주문용, 조회용
    tokens?: Array<Token>
}

type IsActual = '실전' | '모의';
type FeeType = '뱅키스' | '영업점';
type IsOrder = '주문용' | '조회용';

export interface Token {
    token: number                                           //--- Token ID
    access_token: string,                                   //--- 접근 토큰
    token_type: TokenType,                                  //--- 접근 토큰 유형
    expires_in: number,                                     //--- 접근 토큰 유효기간 (초)
    access_token_token_expired: Moment,                     //--- 접근 토큰 만료일
}

type TokenType = 'Bearer';

// export interface REQUEST_HEADER {
//     contentType: 'application/json; charset=utf-8',
//     authorization: string,
//     appkey: string,
//     appsecret: string
//     personalseckey?: string,
//     tr_id: string,
//     tr_cont: REQUEST_HEADER_TR_CONT,
//     custtype: REQUEST_HEADER_CUSTTYPE,
//     seq_no?: string,
//     mac_address?: string,
//     phone_number?: string,
//     ip_addr?: string,
//     hashkey?: string,
//     gt_uid?: string
// }

export interface REQUEST_HEADER {
    contentType?: 'application/json; charset=utf-8',
    authorization?: string,
    appkey?: string,
    appsecret?: string
    personalseckey?: string,
    tr_id?: string,
    tr_cont?: REQUEST_HEADER_TR_CONT,
    custtype?: REQUEST_HEADER_CUSTTYPE,
    seq_no?: string,
    mac_address?: string,
    phone_number?: string,
    ip_addr?: string,
    hashkey?: string,
    gt_uid?: string  
}

export enum REQUEST_HEADER_TR_CONT {
    first = ' ',
    next = 'N'
}

export enum REQUEST_HEADER_CUSTTYPE {
    individual = 'P',
    corporation = 'B'
}

export interface REQUEST_BODY {
    [name: string]: string
}

export interface RESPONSE {
    code: number | string,
    message: string,
    header?: RESPONSE_HEADER,
    body?: RESPONSE_BODY
}

export interface RESPONSE_HEADER {
    // contentType: 'application/json; charset=utf-8',
    contentType: string,
    tr_id: string,
    // tr_cont: RESPONSE_HEADER_TR_CONT,
    tr_cont: string,
    gt_uid?: string
}

export interface RESPONSE_BODY {
    [name: string]: string
}

// export type RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';

// export type REQUEST_INIT = {
//     method: METHOD, 
//     mode: 'cors', 
//     cache: 'no-cache',
//     headers: REQUEST_HEADER,
//     body?: string
// };

export class EfriendRest {
    /**
     * requestHeader를 재설정하여 반환 한다.
     * 
     * @param {Secret} secret                               인증 정보
     * @param {string} trid                                 트랜잭션 ID
     * @param {REQUEST_HEADER} requestHeader                요청 header
     * @param {REQUEST_BODY} requestBody                    요청 body
     * @param {RESPONSE_HEADER} responseHeader              응답 header
     * @returns {REQUEST_HEADER}                            재설정된 요청 header
     * @throws {EFriendError}
     */
    private async resetRequestHeader(
        secret: Secret, trid: string, 
        requestHeader: REQUEST_HEADER, requestBody: REQUEST_BODY, 
        responseHeader: RESPONSE_HEADER | null = null): Promise<REQUEST_HEADER> {

        try {
            //--- requestHeader 값 재설정
            const metadata: METADATA = EFriend_JSON_TRID[`${trid}_${secret.isActual}`];
            metadata.request.header.forEach((field: TRID_FIELD) => {
                const value: any = requestHeader[field.code] || secret[field.code] || field.default || null;
                if (value != null) {
                    requestHeader[field.code] = value;
                }
            });

            if ((typeof(requestHeader.tr_cont) != 'undefined') && (responseHeader != null)) {
                if ([ 'F', 'M' ].includes(responseHeader.tr_cont)) {
                    requestHeader.tr_cont = REQUEST_HEADER_TR_CONT.next;
                }
            }

            if (metadata.info.method == 'post') {
                if ((trid != 'hashkey') && (typeof(requestHeader.hashkey) == 'undefined')) {
                    const header = {
                        "content-type": 'application/json; charset=utf-8',
                        appkey: secret.appkey,
                        appsecret: secret.appsecret
                    };
                    const responseHashkey = await this.request(secret, 'hashkey', header, requestBody);
                    if (responseHashkey.code == 0) {
                        requestHeader.hashkey = responseHashkey.body?.HASH;
                    } else {
                        throw new EFriendError(responseHashkey.code, responseHashkey.message);
                    }
                }
            }

            if (typeof(requestHeader.gt_uid) != 'undefined') {
                requestHeader.gt_uid = uuid().replace(/-/g, '');
            }

            //--- requestHeader 값 검사
            for (const field of metadata.request.header) {
                this.checkField(field, requestHeader, trid);
            }
            return requestHeader;
        } catch(ex) {
            throw ex;
        }
    }

    /**
     * data의 값을 검사 한다.
     * 
     * @param {string} trid                                 트랜잭션 ID
     * @param {Array<TRID_FIELD>} fields                    필드 목록
     * @param {DATA_OBJECT} data                            검사할 데이터 객체
     * @throws {EFriendError}
     */
    private checkData<DATA_OBJECT>(trid: string, fields: Array<TRID_FIELD>, data: DATA_OBJECT): void {
        for (const field of fields) {
            this.checkField(field, data, trid);
        }
    }

    /**
     * 필드의 값을 검사 한다.
     * 
     * @param {TRID_FIELD} field                                필드 정보
     * @param {DATA_OBJECT} data                                field의 값을 포함하는 object
     * @param {string} trid                                     tr_id
     * @param {boolean} allowException                          true. Exception 허용
     * @throws {EFriendError}
     */
    private checkField<DATA_OBJECT>(field: TRID_FIELD, data: DATA_OBJECT, trid: string, allowException: boolean = true) {
        try {
            const fieldInfo: string = `${trid}: ${field.code}(${field.name})`;
            
            if ((typeof(data[field.code]) == 'undefined') && (field.required)) {
                throw new EFriendError(404, `${fieldInfo} field is required.`);
            }

            if ((typeof(data['custtype']) != 'undefined') && (data['custtype'] == 'B')) {
                const required: boolean = [ 'personalseckey', 'seq_no', 'phone_number', 'ip_addr', 'gt_uid' ].includes(field.code);
                if ((typeof(data[field.code]) == 'undefined') && required) {
                    throw new EFriendError(404, `${fieldInfo} field is required.`);
                }
            }

            if (typeof(data[field.code]) != 'undefined') {
                if (typeof(field.enum) != 'undefined') {
                    const isExist: boolean = field.enum.reduce((prev, curr) => {
                        return prev || (curr.code == data[field.code]);
                    }, false);

                    if (isExist == false) {
                        throw new EFriendError(405, `${fieldInfo} field is not correct.`);
                    }
                }

                switch (field.type) {
                case 'string':
                    if ([ 'authorization' ].includes(field.code) == false) {
                        if (field.length < data[field.code].length) {
                            throw new EFriendError(406, `${fieldInfo} field has length ${data[field.code].length}`);
                        }
                    }
                    break;
                case 'number':
                    console.info(trid, field.code, field.type, 'is number');
                    break;
                default:
                    console.error(trid, '---------- field type :', field.code, field.type);
                    break;
                }
            }
        } catch(ex) {
            if (allowException) {
                throw ex;
            } else {
                if (ex instanceof EFriendError) {
                    console.log('---------- field manage', `${trid}: ${ex.code} - ${ex.message}`);
                } else {
                    console.log('---------- field manage', `${trid}:`, ex);
                }
            }
        }
    }

    /**
     * Response Header에서 필드 설정과 실제 데이터의 필드 항목을 비교 한다.
     * 
     * @param {Array<TRID_FIELD>} fields                    Fields의 메타 정보
     * @param {Object} data                                 Response Header 데이터
     * @param {string} trid                                 tr_id
     */
    private compareWithMeta(fields: Array<TRID_FIELD>, data: Object, trid: string) {
        const keysSkip: Array<string> = [ 
            'date', 'content-length', 'connection',
            'x-content-type-options', 'x-oracle-dms-ecid', 'x-oracle-dms-rid', 'x-xss-protection' 
        ];

        const keysFields: Array<string> = [];
        const keysData = Object.keys(data);
        fields.forEach(field => {
            keysFields.push(field.code);
            if ((field.required) && (keysData.includes(field.code) == false)) {
                console.error(trid, `---------- field required`, field.code);
            }
        });

        keysData.forEach(key => {
            if (keysFields.includes(key) == false) {
                if (keysSkip.includes(key) == false) {
                    console.info(trid, `---------- another field is founded`, key);
                }
            }
        });
    }

    /**
     * Response data의 값을 검사 한다.
     * 
     * @param {string} trid                                 트랜잭션 ID
     * @param {Array<TRID_FIELD>} fields                    필드 목록
     * @param {Object} data                                검사할 데이터 객체
     * @throws {EFriendError}
     */
    private checkResponsebody(trid: string, fields: Array<TRID_FIELD> | undefined, data: Object) {
        if (typeof(fields) != 'undefined') {
            for (const field of fields) {
                if ([ 'array', 'object' ].includes(field.type)) {
                    if (Array.isArray(data[field.code])) {
                        for (const dataItem of data[field.code]) {
                            this.checkResponsebody(trid, field.fields, dataItem);
                        }
                    } else {
                        this.checkResponsebody(trid, field.fields, data[field.code]);
                    }
                } else {
                    this.checkField(field, data, trid, false);
                }
            }
        }
    }

    /**
     * 한국투자증권 EFriendExpert의 REST API
     * @description 한국투자증권 EFriendExpert의 REST API를 호출하고 결과를 반환 한다.
     * 
     * @param {Secret} secret                               인증 정보
     * @param {string} trid                                 트랜잭션 ID
     * @param {REQUEST_HEADER} requestHeader                요청 header
     * @param {REQUEST_BODY} requestBody                    요청 body
     * @param {RESPONSE_HEADER} responseHeader              응답 header
     * @returns {RESPONSE}
     */
    public async request(
        secret: Secret, trid: string, requestHeader: REQUEST_HEADER, requestBody: REQUEST_BODY, 
        responseHeader: RESPONSE_HEADER | null = null): Promise<RESPONSE>  {

        const response: RESPONSE = { code: 0, message: 'ok' };
        try {
            const metadata: METADATA = EFriend_JSON_TRID[`${trid}_${secret.isActual}`] || null;;
            if (metadata == null) {
                throw new EFriendError(404, `${trid} (${secret.isActual}) metadata is not exist.`);
            }

            if (metadata.info.domain.startsWith('http') == false) {
                throw new EFriendError(406, `${trid} trid is not supported.`);
            }

            if (trid != 'hashkey') {
                this.checkData(trid, metadata.request.body, requestBody);
            }
            requestHeader = await this.resetRequestHeader(secret, trid, requestHeader, requestBody, responseHeader);

            const method: METHOD = metadata.info.method;
            const requestInfo: string = metadata.info.domain + ((method == 'post') ? metadata.info.url:`${metadata.info.url}?${(new URLSearchParams(requestBody)).toString()}`);
            const headers = new Headers();
            for (const [key, value] of Object.entries(requestHeader)) {
                headers.set(key, value);
            }
            const requestInit: RequestInit = { 
                method: method, 
                headers: headers
            };
            if (method == 'post') {
                requestInit.body = JSON.stringify(requestBody);
            }
            const res = await fetch(requestInfo, requestInit);

            const contentType: string | null = res.headers.get('content-type');
            if (contentType == null) {
                throw new EFriendError(404, 'Content type is not exist.');
            } else if (contentType.startsWith('application/json') == false) {
                throw new EFriendError(405, 'Content type is not application/json.');
            }

            if (res.ok) {
                const json: any = await res.json();
                response.body = JSON.parse(JSON.stringify(json));

                this.checkData(trid, metadata.response.header, res.headers.raw());
                this.compareWithMeta(metadata.response.header, res.headers.raw(), trid);
                response.header = {
                    contentType: res.headers.get('contentType') || '',
                    tr_id: res.headers.get('tr_id') || '',
                    tr_cont: res.headers.get('tr_cont') || 'D',
                    gt_uid: res.headers.get('gt_uid') || ''
                };

                if (response.body != null) {
                    this.checkResponsebody(trid, metadata.response.body, response.body);
                }
            } else {
                response.code = 500;
                response.message = `Error: ${res.status} : ${res.statusText}`;
            }
        } catch(error: any) {
            if (error instanceof EFriendError) {
                response.code = error.code || 500;
                response.message = error.message;    
            } else {
                response.code = 503;
                response.message = `${error.name} - ${error.message}`;    
            }
            console.error(error);
        }
        return response;
    }

    /**
     * 실시간 (웹소켓) 접속키 발급
     * @description 실시간 (웹소켓) 접속키 발급
     * 
     * @param {Secret} secret                               인증 정보
     * @param {APPROVAL_REQUEST_HEADER} requestHeader    요청 header
     * @param {APPROVAL_REQUEST_BODY} requestBody        요청 body
     * @param {APPROVAL_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {APPROVAL_RESPONSE}
     */
    public async Approval(
        secret: Secret, requestHeader: APPROVAL_REQUEST_HEADER, requestBody: APPROVAL_REQUEST_BODY, 
        responseHeader: APPROVAL_RESPONSE_HEADER | null = null): Promise<APPROVAL_RESPONSE>  {
        
        return await this.request(secret, 'Approval', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * Hashkey
     * @description Hashkey
     * 
     * @param {Secret} secret                               인증 정보
     * @param {HASHKEY_REQUEST_HEADER} requestHeader    요청 header
     * @param {HASHKEY_REQUEST_BODY} requestBody        요청 body
     * @param {HASHKEY_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {HASHKEY_RESPONSE}
     */
    public async hashkey(
        secret: Secret, requestHeader: HASHKEY_REQUEST_HEADER, requestBody: HASHKEY_REQUEST_BODY, 
        responseHeader: HASHKEY_RESPONSE_HEADER | null = null): Promise<HASHKEY_RESPONSE>  {
        
        return await this.request(secret, 'hashkey', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 접근토큰발급(P)
     * @description 접근토큰발급(P)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TOKENP_REQUEST_HEADER} requestHeader    요청 header
     * @param {TOKENP_REQUEST_BODY} requestBody        요청 body
     * @param {TOKENP_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TOKENP_RESPONSE}
     */
    public async tokenP(
        secret: Secret, requestHeader: TOKENP_REQUEST_HEADER, requestBody: TOKENP_REQUEST_BODY, 
        responseHeader: TOKENP_RESPONSE_HEADER | null = null): Promise<TOKENP_RESPONSE>  {
        
        return await this.request(secret, 'tokenP', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 접근토큰폐기(P)
     * @description 접근토큰폐기(P)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {REVOKEP_REQUEST_HEADER} requestHeader    요청 header
     * @param {REVOKEP_REQUEST_BODY} requestBody        요청 body
     * @param {REVOKEP_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {REVOKEP_RESPONSE}
     */
    public async revokeP(
        secret: Secret, requestHeader: REVOKEP_REQUEST_HEADER, requestBody: REVOKEP_REQUEST_BODY, 
        responseHeader: REVOKEP_RESPONSE_HEADER | null = null): Promise<REVOKEP_RESPONSE>  {
        
        return await this.request(secret, 'revokeP', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 주식주문(현금)
     * @description 주식주문(현금)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTC0802U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTC0802U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTC0802U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTC0802U_RESPONSE}
     */
    public async TTTC0802U(
        secret: Secret, requestHeader: TTTC0802U_REQUEST_HEADER, requestBody: TTTC0802U_REQUEST_BODY, 
        responseHeader: TTTC0802U_RESPONSE_HEADER | null = null): Promise<TTTC0802U_RESPONSE>  {
        
        return await this.request(secret, 'TTTC0802U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 주식주문(현금)
     * @description 주식주문(현금)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTC0801U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTC0801U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTC0801U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTC0801U_RESPONSE}
     */
    public async TTTC0801U(
        secret: Secret, requestHeader: TTTC0801U_REQUEST_HEADER, requestBody: TTTC0801U_REQUEST_BODY, 
        responseHeader: TTTC0801U_RESPONSE_HEADER | null = null): Promise<TTTC0801U_RESPONSE>  {
        
        return await this.request(secret, 'TTTC0801U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 주식주문(현금)
     * @description 주식주문(현금)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTC0802U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTC0802U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTC0802U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTC0802U_RESPONSE}
     */
    public async VTTC0802U(
        secret: Secret, requestHeader: VTTC0802U_REQUEST_HEADER, requestBody: VTTC0802U_REQUEST_BODY, 
        responseHeader: VTTC0802U_RESPONSE_HEADER | null = null): Promise<VTTC0802U_RESPONSE>  {
        
        return await this.request(secret, 'VTTC0802U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 주식주문(현금)
     * @description 주식주문(현금)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTC0801U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTC0801U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTC0801U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTC0801U_RESPONSE}
     */
    public async VTTC0801U(
        secret: Secret, requestHeader: VTTC0801U_REQUEST_HEADER, requestBody: VTTC0801U_REQUEST_BODY, 
        responseHeader: VTTC0801U_RESPONSE_HEADER | null = null): Promise<VTTC0801U_RESPONSE>  {
        
        return await this.request(secret, 'VTTC0801U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 주식주문(신용)
     * @description 주식주문(신용)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTC0852U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTC0852U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTC0852U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTC0852U_RESPONSE}
     */
    public async TTTC0852U(
        secret: Secret, requestHeader: TTTC0852U_REQUEST_HEADER, requestBody: TTTC0852U_REQUEST_BODY, 
        responseHeader: TTTC0852U_RESPONSE_HEADER | null = null): Promise<TTTC0852U_RESPONSE>  {
        
        return await this.request(secret, 'TTTC0852U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 주식주문(신용)
     * @description 주식주문(신용)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTC0851U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTC0851U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTC0851U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTC0851U_RESPONSE}
     */
    public async TTTC0851U(
        secret: Secret, requestHeader: TTTC0851U_REQUEST_HEADER, requestBody: TTTC0851U_REQUEST_BODY, 
        responseHeader: TTTC0851U_RESPONSE_HEADER | null = null): Promise<TTTC0851U_RESPONSE>  {
        
        return await this.request(secret, 'TTTC0851U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 주식주문(정정취소)
     * @description 주식주문(정정취소)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTC0803U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTC0803U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTC0803U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTC0803U_RESPONSE}
     */
    public async TTTC0803U(
        secret: Secret, requestHeader: TTTC0803U_REQUEST_HEADER, requestBody: TTTC0803U_REQUEST_BODY, 
        responseHeader: TTTC0803U_RESPONSE_HEADER | null = null): Promise<TTTC0803U_RESPONSE>  {
        
        return await this.request(secret, 'TTTC0803U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 주식주문(정정취소)
     * @description 주식주문(정정취소)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTC0803U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTC0803U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTC0803U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTC0803U_RESPONSE}
     */
    public async VTTC0803U(
        secret: Secret, requestHeader: VTTC0803U_REQUEST_HEADER, requestBody: VTTC0803U_REQUEST_BODY, 
        responseHeader: VTTC0803U_RESPONSE_HEADER | null = null): Promise<VTTC0803U_RESPONSE>  {
        
        return await this.request(secret, 'VTTC0803U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 주식정정취소가능주문조회
     * @description 주식정정취소가능주문조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTC8036R_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTC8036R_REQUEST_BODY} requestBody        요청 body
     * @param {TTTC8036R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTC8036R_RESPONSE}
     */
    public async TTTC8036R(
        secret: Secret, requestHeader: TTTC8036R_REQUEST_HEADER, requestBody: TTTC8036R_REQUEST_BODY, 
        responseHeader: TTTC8036R_RESPONSE_HEADER | null = null): Promise<TTTC8036R_RESPONSE>  {
        
        return await this.request(secret, 'TTTC8036R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 주식일별주문체결조회
     * @description 주식일별주문체결조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTC8001R_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTC8001R_REQUEST_BODY} requestBody        요청 body
     * @param {TTTC8001R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTC8001R_RESPONSE}
     */
    public async TTTC8001R(
        secret: Secret, requestHeader: TTTC8001R_REQUEST_HEADER, requestBody: TTTC8001R_REQUEST_BODY, 
        responseHeader: TTTC8001R_RESPONSE_HEADER | null = null): Promise<TTTC8001R_RESPONSE>  {
        
        return await this.request(secret, 'TTTC8001R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 주식일별주문체결조회
     * @description 주식일별주문체결조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {CTSC9115R_REQUEST_HEADER} requestHeader    요청 header
     * @param {CTSC9115R_REQUEST_BODY} requestBody        요청 body
     * @param {CTSC9115R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {CTSC9115R_RESPONSE}
     */
    public async CTSC9115R(
        secret: Secret, requestHeader: CTSC9115R_REQUEST_HEADER, requestBody: CTSC9115R_REQUEST_BODY, 
        responseHeader: CTSC9115R_RESPONSE_HEADER | null = null): Promise<CTSC9115R_RESPONSE>  {
        
        return await this.request(secret, 'CTSC9115R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 주식일별주문체결조회
     * @description 주식일별주문체결조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTC8001R_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTC8001R_REQUEST_BODY} requestBody        요청 body
     * @param {VTTC8001R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTC8001R_RESPONSE}
     */
    public async VTTC8001R(
        secret: Secret, requestHeader: VTTC8001R_REQUEST_HEADER, requestBody: VTTC8001R_REQUEST_BODY, 
        responseHeader: VTTC8001R_RESPONSE_HEADER | null = null): Promise<VTTC8001R_RESPONSE>  {
        
        return await this.request(secret, 'VTTC8001R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 주식일별주문체결조회
     * @description 주식일별주문체결조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTSC9115R_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTSC9115R_REQUEST_BODY} requestBody        요청 body
     * @param {VTSC9115R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTSC9115R_RESPONSE}
     */
    public async VTSC9115R(
        secret: Secret, requestHeader: VTSC9115R_REQUEST_HEADER, requestBody: VTSC9115R_REQUEST_BODY, 
        responseHeader: VTSC9115R_RESPONSE_HEADER | null = null): Promise<VTSC9115R_RESPONSE>  {
        
        return await this.request(secret, 'VTSC9115R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 주식잔고조회
     * @description 주식잔고조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTC8434R_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTC8434R_REQUEST_BODY} requestBody        요청 body
     * @param {TTTC8434R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTC8434R_RESPONSE}
     */
    public async TTTC8434R(
        secret: Secret, requestHeader: TTTC8434R_REQUEST_HEADER, requestBody: TTTC8434R_REQUEST_BODY, 
        responseHeader: TTTC8434R_RESPONSE_HEADER | null = null): Promise<TTTC8434R_RESPONSE>  {
        
        return await this.request(secret, 'TTTC8434R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 주식잔고조회
     * @description 주식잔고조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTC8434R_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTC8434R_REQUEST_BODY} requestBody        요청 body
     * @param {VTTC8434R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTC8434R_RESPONSE}
     */
    public async VTTC8434R(
        secret: Secret, requestHeader: VTTC8434R_REQUEST_HEADER, requestBody: VTTC8434R_REQUEST_BODY, 
        responseHeader: VTTC8434R_RESPONSE_HEADER | null = null): Promise<VTTC8434R_RESPONSE>  {
        
        return await this.request(secret, 'VTTC8434R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 매수가능조회
     * @description 매수가능조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTC8908R_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTC8908R_REQUEST_BODY} requestBody        요청 body
     * @param {TTTC8908R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTC8908R_RESPONSE}
     */
    public async TTTC8908R(
        secret: Secret, requestHeader: TTTC8908R_REQUEST_HEADER, requestBody: TTTC8908R_REQUEST_BODY, 
        responseHeader: TTTC8908R_RESPONSE_HEADER | null = null): Promise<TTTC8908R_RESPONSE>  {
        
        return await this.request(secret, 'TTTC8908R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 매수가능조회
     * @description 매수가능조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTC8908R_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTC8908R_REQUEST_BODY} requestBody        요청 body
     * @param {VTTC8908R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTC8908R_RESPONSE}
     */
    public async VTTC8908R(
        secret: Secret, requestHeader: VTTC8908R_REQUEST_HEADER, requestBody: VTTC8908R_REQUEST_BODY, 
        responseHeader: VTTC8908R_RESPONSE_HEADER | null = null): Promise<VTTC8908R_RESPONSE>  {
        
        return await this.request(secret, 'VTTC8908R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 주식예약주문
     * @description 주식예약주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {CTSC0008U_REQUEST_HEADER} requestHeader    요청 header
     * @param {CTSC0008U_REQUEST_BODY} requestBody        요청 body
     * @param {CTSC0008U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {CTSC0008U_RESPONSE}
     */
    public async CTSC0008U(
        secret: Secret, requestHeader: CTSC0008U_REQUEST_HEADER, requestBody: CTSC0008U_REQUEST_BODY, 
        responseHeader: CTSC0008U_RESPONSE_HEADER | null = null): Promise<CTSC0008U_RESPONSE>  {
        
        return await this.request(secret, 'CTSC0008U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 주식예약주문정정취소
     * @description 주식예약주문정정취소
     * 
     * @param {Secret} secret                               인증 정보
     * @param {CTSC0009U_REQUEST_HEADER} requestHeader    요청 header
     * @param {CTSC0009U_REQUEST_BODY} requestBody        요청 body
     * @param {CTSC0009U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {CTSC0009U_RESPONSE}
     */
    public async CTSC0009U(
        secret: Secret, requestHeader: CTSC0009U_REQUEST_HEADER, requestBody: CTSC0009U_REQUEST_BODY, 
        responseHeader: CTSC0009U_RESPONSE_HEADER | null = null): Promise<CTSC0009U_RESPONSE>  {
        
        return await this.request(secret, 'CTSC0009U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 주식예약주문정정취소
     * @description 주식예약주문정정취소
     * 
     * @param {Secret} secret                               인증 정보
     * @param {CTSC0013U_REQUEST_HEADER} requestHeader    요청 header
     * @param {CTSC0013U_REQUEST_BODY} requestBody        요청 body
     * @param {CTSC0013U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {CTSC0013U_RESPONSE}
     */
    public async CTSC0013U(
        secret: Secret, requestHeader: CTSC0013U_REQUEST_HEADER, requestBody: CTSC0013U_REQUEST_BODY, 
        responseHeader: CTSC0013U_RESPONSE_HEADER | null = null): Promise<CTSC0013U_RESPONSE>  {
        
        return await this.request(secret, 'CTSC0013U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 주식예약주문조회
     * @description 주식예약주문조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {CTSC0004R_REQUEST_HEADER} requestHeader    요청 header
     * @param {CTSC0004R_REQUEST_BODY} requestBody        요청 body
     * @param {CTSC0004R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {CTSC0004R_RESPONSE}
     */
    public async CTSC0004R(
        secret: Secret, requestHeader: CTSC0004R_REQUEST_HEADER, requestBody: CTSC0004R_REQUEST_BODY, 
        responseHeader: CTSC0004R_RESPONSE_HEADER | null = null): Promise<CTSC0004R_RESPONSE>  {
        
        return await this.request(secret, 'CTSC0004R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 주식잔고조회_실현손익
     * @description 주식잔고조회_실현손익
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTC8494R_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTC8494R_REQUEST_BODY} requestBody        요청 body
     * @param {TTTC8494R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTC8494R_RESPONSE}
     */
    public async TTTC8494R(
        secret: Secret, requestHeader: TTTC8494R_REQUEST_HEADER, requestBody: TTTC8494R_REQUEST_BODY, 
        responseHeader: TTTC8494R_RESPONSE_HEADER | null = null): Promise<TTTC8494R_RESPONSE>  {
        
        return await this.request(secret, 'TTTC8494R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 신용매수가능조회
     * @description 신용매수가능조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTC8909R_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTC8909R_REQUEST_BODY} requestBody        요청 body
     * @param {TTTC8909R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTC8909R_RESPONSE}
     */
    public async TTTC8909R(
        secret: Secret, requestHeader: TTTC8909R_REQUEST_HEADER, requestBody: TTTC8909R_REQUEST_BODY, 
        responseHeader: TTTC8909R_RESPONSE_HEADER | null = null): Promise<TTTC8909R_RESPONSE>  {
        
        return await this.request(secret, 'TTTC8909R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 투자계좌자산현황조회
     * @description 투자계좌자산현황조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {CTRP6548R_REQUEST_HEADER} requestHeader    요청 header
     * @param {CTRP6548R_REQUEST_BODY} requestBody        요청 body
     * @param {CTRP6548R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {CTRP6548R_RESPONSE}
     */
    public async CTRP6548R(
        secret: Secret, requestHeader: CTRP6548R_REQUEST_HEADER, requestBody: CTRP6548R_REQUEST_BODY, 
        responseHeader: CTRP6548R_RESPONSE_HEADER | null = null): Promise<CTRP6548R_RESPONSE>  {
        
        return await this.request(secret, 'CTRP6548R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 주식현재가 시세
     * @description 주식현재가 시세
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHKST01010100_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHKST01010100_REQUEST_BODY} requestBody        요청 body
     * @param {FHKST01010100_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHKST01010100_RESPONSE}
     */
    public async FHKST01010100(
        secret: Secret, requestHeader: FHKST01010100_REQUEST_HEADER, requestBody: FHKST01010100_REQUEST_BODY, 
        responseHeader: FHKST01010100_RESPONSE_HEADER | null = null): Promise<FHKST01010100_RESPONSE>  {
        
        return await this.request(secret, 'FHKST01010100', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 주식현재가 체결
     * @description 주식현재가 체결
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHKST01010300_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHKST01010300_REQUEST_BODY} requestBody        요청 body
     * @param {FHKST01010300_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHKST01010300_RESPONSE}
     */
    public async FHKST01010300(
        secret: Secret, requestHeader: FHKST01010300_REQUEST_HEADER, requestBody: FHKST01010300_REQUEST_BODY, 
        responseHeader: FHKST01010300_RESPONSE_HEADER | null = null): Promise<FHKST01010300_RESPONSE>  {
        
        return await this.request(secret, 'FHKST01010300', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 주식현재가 일자별
     * @description 주식현재가 일자별
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHKST01010400_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHKST01010400_REQUEST_BODY} requestBody        요청 body
     * @param {FHKST01010400_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHKST01010400_RESPONSE}
     */
    public async FHKST01010400(
        secret: Secret, requestHeader: FHKST01010400_REQUEST_HEADER, requestBody: FHKST01010400_REQUEST_BODY, 
        responseHeader: FHKST01010400_RESPONSE_HEADER | null = null): Promise<FHKST01010400_RESPONSE>  {
        
        return await this.request(secret, 'FHKST01010400', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 주식현재가 호가/예상체결
     * @description 주식현재가 호가/예상체결
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHKST01010200_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHKST01010200_REQUEST_BODY} requestBody        요청 body
     * @param {FHKST01010200_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHKST01010200_RESPONSE}
     */
    public async FHKST01010200(
        secret: Secret, requestHeader: FHKST01010200_REQUEST_HEADER, requestBody: FHKST01010200_REQUEST_BODY, 
        responseHeader: FHKST01010200_RESPONSE_HEADER | null = null): Promise<FHKST01010200_RESPONSE>  {
        
        return await this.request(secret, 'FHKST01010200', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 주식현재가 투자자
     * @description 주식현재가 투자자
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHKST01010900_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHKST01010900_REQUEST_BODY} requestBody        요청 body
     * @param {FHKST01010900_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHKST01010900_RESPONSE}
     */
    public async FHKST01010900(
        secret: Secret, requestHeader: FHKST01010900_REQUEST_HEADER, requestBody: FHKST01010900_REQUEST_BODY, 
        responseHeader: FHKST01010900_RESPONSE_HEADER | null = null): Promise<FHKST01010900_RESPONSE>  {
        
        return await this.request(secret, 'FHKST01010900', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 주식현재가 회원사
     * @description 주식현재가 회원사
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHKST01010600_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHKST01010600_REQUEST_BODY} requestBody        요청 body
     * @param {FHKST01010600_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHKST01010600_RESPONSE}
     */
    public async FHKST01010600(
        secret: Secret, requestHeader: FHKST01010600_REQUEST_HEADER, requestBody: FHKST01010600_REQUEST_BODY, 
        responseHeader: FHKST01010600_RESPONSE_HEADER | null = null): Promise<FHKST01010600_RESPONSE>  {
        
        return await this.request(secret, 'FHKST01010600', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * ELW현재가 시세
     * @description ELW현재가 시세
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHKEW15010000_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHKEW15010000_REQUEST_BODY} requestBody        요청 body
     * @param {FHKEW15010000_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHKEW15010000_RESPONSE}
     */
    public async FHKEW15010000(
        secret: Secret, requestHeader: FHKEW15010000_REQUEST_HEADER, requestBody: FHKEW15010000_REQUEST_BODY, 
        responseHeader: FHKEW15010000_RESPONSE_HEADER | null = null): Promise<FHKEW15010000_RESPONSE>  {
        
        return await this.request(secret, 'FHKEW15010000', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 국내주식기간별시세(일/주/월/년)
     * @description 국내주식기간별시세(일/주/월/년)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHKST03010100_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHKST03010100_REQUEST_BODY} requestBody        요청 body
     * @param {FHKST03010100_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHKST03010100_RESPONSE}
     */
    public async FHKST03010100(
        secret: Secret, requestHeader: FHKST03010100_REQUEST_HEADER, requestBody: FHKST03010100_REQUEST_BODY, 
        responseHeader: FHKST03010100_RESPONSE_HEADER | null = null): Promise<FHKST03010100_RESPONSE>  {
        
        return await this.request(secret, 'FHKST03010100', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 국내주식업종기간별시세(일/주/월/년)
     * @description 국내주식업종기간별시세(일/주/월/년)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHKUP03500100_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHKUP03500100_REQUEST_BODY} requestBody        요청 body
     * @param {FHKUP03500100_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHKUP03500100_RESPONSE}
     */
    public async FHKUP03500100(
        secret: Secret, requestHeader: FHKUP03500100_REQUEST_HEADER, requestBody: FHKUP03500100_REQUEST_BODY, 
        responseHeader: FHKUP03500100_RESPONSE_HEADER | null = null): Promise<FHKUP03500100_RESPONSE>  {
        
        return await this.request(secret, 'FHKUP03500100', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 주식현재가 당일시간대별체결
     * @description 주식현재가 당일시간대별체결
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHPST01060000_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHPST01060000_REQUEST_BODY} requestBody        요청 body
     * @param {FHPST01060000_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHPST01060000_RESPONSE}
     */
    public async FHPST01060000(
        secret: Secret, requestHeader: FHPST01060000_REQUEST_HEADER, requestBody: FHPST01060000_REQUEST_BODY, 
        responseHeader: FHPST01060000_RESPONSE_HEADER | null = null): Promise<FHPST01060000_RESPONSE>  {
        
        return await this.request(secret, 'FHPST01060000', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 주식현재가 시간외시간별체결
     * @description 주식현재가 시간외시간별체결
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHPST02310000_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHPST02310000_REQUEST_BODY} requestBody        요청 body
     * @param {FHPST02310000_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHPST02310000_RESPONSE}
     */
    public async FHPST02310000(
        secret: Secret, requestHeader: FHPST02310000_REQUEST_HEADER, requestBody: FHPST02310000_REQUEST_BODY, 
        responseHeader: FHPST02310000_RESPONSE_HEADER | null = null): Promise<FHPST02310000_RESPONSE>  {
        
        return await this.request(secret, 'FHPST02310000', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 주식현재가 시간외일자별주가
     * @description 주식현재가 시간외일자별주가
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHPST02320000_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHPST02320000_REQUEST_BODY} requestBody        요청 body
     * @param {FHPST02320000_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHPST02320000_RESPONSE}
     */
    public async FHPST02320000(
        secret: Secret, requestHeader: FHPST02320000_REQUEST_HEADER, requestBody: FHPST02320000_REQUEST_BODY, 
        responseHeader: FHPST02320000_RESPONSE_HEADER | null = null): Promise<FHPST02320000_RESPONSE>  {
        
        return await this.request(secret, 'FHPST02320000', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 주식당일분봉조회
     * @description 주식당일분봉조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHKST03010200_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHKST03010200_REQUEST_BODY} requestBody        요청 body
     * @param {FHKST03010200_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHKST03010200_RESPONSE}
     */
    public async FHKST03010200(
        secret: Secret, requestHeader: FHKST03010200_REQUEST_HEADER, requestBody: FHKST03010200_REQUEST_BODY, 
        responseHeader: FHKST03010200_RESPONSE_HEADER | null = null): Promise<FHKST03010200_RESPONSE>  {
        
        return await this.request(secret, 'FHKST03010200', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 상품기본조회
     * @description 상품기본조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {CTPF1604R_REQUEST_HEADER} requestHeader    요청 header
     * @param {CTPF1604R_REQUEST_BODY} requestBody        요청 body
     * @param {CTPF1604R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {CTPF1604R_RESPONSE}
     */
    public async CTPF1604R(
        secret: Secret, requestHeader: CTPF1604R_REQUEST_HEADER, requestBody: CTPF1604R_REQUEST_BODY, 
        responseHeader: CTPF1604R_RESPONSE_HEADER | null = null): Promise<CTPF1604R_RESPONSE>  {
        
        return await this.request(secret, 'CTPF1604R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 국내휴장일조회
     * @description 국내휴장일조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {CTCA0903R_REQUEST_HEADER} requestHeader    요청 header
     * @param {CTCA0903R_REQUEST_BODY} requestBody        요청 body
     * @param {CTCA0903R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {CTCA0903R_RESPONSE}
     */
    public async CTCA0903R(
        secret: Secret, requestHeader: CTCA0903R_REQUEST_HEADER, requestBody: CTCA0903R_REQUEST_BODY, 
        responseHeader: CTCA0903R_RESPONSE_HEADER | null = null): Promise<CTCA0903R_RESPONSE>  {
        
        return await this.request(secret, 'CTCA0903R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 국내기관_외국인 매매종목가집계
     * @description 국내기관_외국인 매매종목가집계
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHPTJ04400000_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHPTJ04400000_REQUEST_BODY} requestBody        요청 body
     * @param {FHPTJ04400000_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHPTJ04400000_RESPONSE}
     */
    public async FHPTJ04400000(
        secret: Secret, requestHeader: FHPTJ04400000_REQUEST_HEADER, requestBody: FHPTJ04400000_REQUEST_BODY, 
        responseHeader: FHPTJ04400000_RESPONSE_HEADER | null = null): Promise<FHPTJ04400000_RESPONSE>  {
        
        return await this.request(secret, 'FHPTJ04400000', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 종목조건검색 목록조회
     * @description 종목조건검색 목록조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {HHKST03900300_REQUEST_HEADER} requestHeader    요청 header
     * @param {HHKST03900300_REQUEST_BODY} requestBody        요청 body
     * @param {HHKST03900300_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {HHKST03900300_RESPONSE}
     */
    public async HHKST03900300(
        secret: Secret, requestHeader: HHKST03900300_REQUEST_HEADER, requestBody: HHKST03900300_REQUEST_BODY, 
        responseHeader: HHKST03900300_RESPONSE_HEADER | null = null): Promise<HHKST03900300_RESPONSE>  {
        
        return await this.request(secret, 'HHKST03900300', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 종목조건검색조회
     * @description 종목조건검색조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {HHKST03900400_REQUEST_HEADER} requestHeader    요청 header
     * @param {HHKST03900400_REQUEST_BODY} requestBody        요청 body
     * @param {HHKST03900400_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {HHKST03900400_RESPONSE}
     */
    public async HHKST03900400(
        secret: Secret, requestHeader: HHKST03900400_REQUEST_HEADER, requestBody: HHKST03900400_REQUEST_BODY, 
        responseHeader: HHKST03900400_RESPONSE_HEADER | null = null): Promise<HHKST03900400_RESPONSE>  {
        
        return await this.request(secret, 'HHKST03900400', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 종목별 프로그램매매추이(체결)
     * @description 종목별 프로그램매매추이(체결)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHPPG04650100_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHPPG04650100_REQUEST_BODY} requestBody        요청 body
     * @param {FHPPG04650100_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHPPG04650100_RESPONSE}
     */
    public async FHPPG04650100(
        secret: Secret, requestHeader: FHPPG04650100_REQUEST_HEADER, requestBody: FHPPG04650100_REQUEST_BODY, 
        responseHeader: FHPPG04650100_RESPONSE_HEADER | null = null): Promise<FHPPG04650100_RESPONSE>  {
        
        return await this.request(secret, 'FHPPG04650100', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 거래량순위
     * @description 거래량순위
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHPST01710000_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHPST01710000_REQUEST_BODY} requestBody        요청 body
     * @param {FHPST01710000_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHPST01710000_RESPONSE}
     */
    public async FHPST01710000(
        secret: Secret, requestHeader: FHPST01710000_REQUEST_HEADER, requestBody: FHPST01710000_REQUEST_BODY, 
        responseHeader: FHPST01710000_RESPONSE_HEADER | null = null): Promise<FHPST01710000_RESPONSE>  {
        
        return await this.request(secret, 'FHPST01710000', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 종목별 외인기관 추정가집계
     * @description 종목별 외인기관 추정가집계
     * 
     * @param {Secret} secret                               인증 정보
     * @param {HHPTJ04160200_REQUEST_HEADER} requestHeader    요청 header
     * @param {HHPTJ04160200_REQUEST_BODY} requestBody        요청 body
     * @param {HHPTJ04160200_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {HHPTJ04160200_RESPONSE}
     */
    public async HHPTJ04160200(
        secret: Secret, requestHeader: HHPTJ04160200_REQUEST_HEADER, requestBody: HHPTJ04160200_REQUEST_BODY, 
        responseHeader: HHPTJ04160200_RESPONSE_HEADER | null = null): Promise<HHPTJ04160200_RESPONSE>  {
        
        return await this.request(secret, 'HHPTJ04160200', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 선물옵션 주문
     * @description 선물옵션 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTO1101U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTO1101U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTO1101U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTO1101U_RESPONSE}
     */
    public async TTTO1101U(
        secret: Secret, requestHeader: TTTO1101U_REQUEST_HEADER, requestBody: TTTO1101U_REQUEST_BODY, 
        responseHeader: TTTO1101U_RESPONSE_HEADER | null = null): Promise<TTTO1101U_RESPONSE>  {
        
        return await this.request(secret, 'TTTO1101U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 선물옵션 주문
     * @description 선물옵션 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {JTCE1001U_REQUEST_HEADER} requestHeader    요청 header
     * @param {JTCE1001U_REQUEST_BODY} requestBody        요청 body
     * @param {JTCE1001U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {JTCE1001U_RESPONSE}
     */
    public async JTCE1001U(
        secret: Secret, requestHeader: JTCE1001U_REQUEST_HEADER, requestBody: JTCE1001U_REQUEST_BODY, 
        responseHeader: JTCE1001U_RESPONSE_HEADER | null = null): Promise<JTCE1001U_RESPONSE>  {
        
        return await this.request(secret, 'JTCE1001U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 선물옵션 주문
     * @description 선물옵션 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTO1101U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTO1101U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTO1101U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTO1101U_RESPONSE}
     */
    public async VTTO1101U(
        secret: Secret, requestHeader: VTTO1101U_REQUEST_HEADER, requestBody: VTTO1101U_REQUEST_BODY, 
        responseHeader: VTTO1101U_RESPONSE_HEADER | null = null): Promise<VTTO1101U_RESPONSE>  {
        
        return await this.request(secret, 'VTTO1101U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 선물옵션 주문
     * @description 선물옵션 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTCE1001U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTCE1001U_REQUEST_BODY} requestBody        요청 body
     * @param {VTCE1001U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTCE1001U_RESPONSE}
     */
    public async VTCE1001U(
        secret: Secret, requestHeader: VTCE1001U_REQUEST_HEADER, requestBody: VTCE1001U_REQUEST_BODY, 
        responseHeader: VTCE1001U_RESPONSE_HEADER | null = null): Promise<VTCE1001U_RESPONSE>  {
        
        return await this.request(secret, 'VTCE1001U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 선물옵션 정정취소주문
     * @description 선물옵션 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTO1103U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTO1103U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTO1103U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTO1103U_RESPONSE}
     */
    public async TTTO1103U(
        secret: Secret, requestHeader: TTTO1103U_REQUEST_HEADER, requestBody: TTTO1103U_REQUEST_BODY, 
        responseHeader: TTTO1103U_RESPONSE_HEADER | null = null): Promise<TTTO1103U_RESPONSE>  {
        
        return await this.request(secret, 'TTTO1103U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 선물옵션 정정취소주문
     * @description 선물옵션 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {JTCE1002U_REQUEST_HEADER} requestHeader    요청 header
     * @param {JTCE1002U_REQUEST_BODY} requestBody        요청 body
     * @param {JTCE1002U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {JTCE1002U_RESPONSE}
     */
    public async JTCE1002U(
        secret: Secret, requestHeader: JTCE1002U_REQUEST_HEADER, requestBody: JTCE1002U_REQUEST_BODY, 
        responseHeader: JTCE1002U_RESPONSE_HEADER | null = null): Promise<JTCE1002U_RESPONSE>  {
        
        return await this.request(secret, 'JTCE1002U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 선물옵션 정정취소주문
     * @description 선물옵션 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTO1103U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTO1103U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTO1103U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTO1103U_RESPONSE}
     */
    public async VTTO1103U(
        secret: Secret, requestHeader: VTTO1103U_REQUEST_HEADER, requestBody: VTTO1103U_REQUEST_BODY, 
        responseHeader: VTTO1103U_RESPONSE_HEADER | null = null): Promise<VTTO1103U_RESPONSE>  {
        
        return await this.request(secret, 'VTTO1103U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 선물옵션 정정취소주문
     * @description 선물옵션 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTCE1002U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTCE1002U_REQUEST_BODY} requestBody        요청 body
     * @param {VTCE1002U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTCE1002U_RESPONSE}
     */
    public async VTCE1002U(
        secret: Secret, requestHeader: VTCE1002U_REQUEST_HEADER, requestBody: VTCE1002U_REQUEST_BODY, 
        responseHeader: VTCE1002U_RESPONSE_HEADER | null = null): Promise<VTCE1002U_RESPONSE>  {
        
        return await this.request(secret, 'VTCE1002U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 선물옵션 주문체결내역조회
     * @description 선물옵션 주문체결내역조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTO5201R_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTO5201R_REQUEST_BODY} requestBody        요청 body
     * @param {TTTO5201R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTO5201R_RESPONSE}
     */
    public async TTTO5201R(
        secret: Secret, requestHeader: TTTO5201R_REQUEST_HEADER, requestBody: TTTO5201R_REQUEST_BODY, 
        responseHeader: TTTO5201R_RESPONSE_HEADER | null = null): Promise<TTTO5201R_RESPONSE>  {
        
        return await this.request(secret, 'TTTO5201R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 선물옵션 주문체결내역조회
     * @description 선물옵션 주문체결내역조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTO5201R_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTO5201R_REQUEST_BODY} requestBody        요청 body
     * @param {VTTO5201R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTO5201R_RESPONSE}
     */
    public async VTTO5201R(
        secret: Secret, requestHeader: VTTO5201R_REQUEST_HEADER, requestBody: VTTO5201R_REQUEST_BODY, 
        responseHeader: VTTO5201R_RESPONSE_HEADER | null = null): Promise<VTTO5201R_RESPONSE>  {
        
        return await this.request(secret, 'VTTO5201R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 선물옵션 잔고현황
     * @description 선물옵션 잔고현황
     * 
     * @param {Secret} secret                               인증 정보
     * @param {CTFO6118R_REQUEST_HEADER} requestHeader    요청 header
     * @param {CTFO6118R_REQUEST_BODY} requestBody        요청 body
     * @param {CTFO6118R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {CTFO6118R_RESPONSE}
     */
    public async CTFO6118R(
        secret: Secret, requestHeader: CTFO6118R_REQUEST_HEADER, requestBody: CTFO6118R_REQUEST_BODY, 
        responseHeader: CTFO6118R_RESPONSE_HEADER | null = null): Promise<CTFO6118R_RESPONSE>  {
        
        return await this.request(secret, 'CTFO6118R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 선물옵션 잔고현황
     * @description 선물옵션 잔고현황
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTFO6118R_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTFO6118R_REQUEST_BODY} requestBody        요청 body
     * @param {VTFO6118R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTFO6118R_RESPONSE}
     */
    public async VTFO6118R(
        secret: Secret, requestHeader: VTFO6118R_REQUEST_HEADER, requestBody: VTFO6118R_REQUEST_BODY, 
        responseHeader: VTFO6118R_RESPONSE_HEADER | null = null): Promise<VTFO6118R_RESPONSE>  {
        
        return await this.request(secret, 'VTFO6118R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 선물옵션 주문가능
     * @description 선물옵션 주문가능
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTO5105R_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTO5105R_REQUEST_BODY} requestBody        요청 body
     * @param {TTTO5105R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTO5105R_RESPONSE}
     */
    public async TTTO5105R(
        secret: Secret, requestHeader: TTTO5105R_REQUEST_HEADER, requestBody: TTTO5105R_REQUEST_BODY, 
        responseHeader: TTTO5105R_RESPONSE_HEADER | null = null): Promise<TTTO5105R_RESPONSE>  {
        
        return await this.request(secret, 'TTTO5105R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 선물옵션 주문가능
     * @description 선물옵션 주문가능
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTO5105R_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTO5105R_REQUEST_BODY} requestBody        요청 body
     * @param {VTTO5105R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTO5105R_RESPONSE}
     */
    public async VTTO5105R(
        secret: Secret, requestHeader: VTTO5105R_REQUEST_HEADER, requestBody: VTTO5105R_REQUEST_BODY, 
        responseHeader: VTTO5105R_RESPONSE_HEADER | null = null): Promise<VTTO5105R_RESPONSE>  {
        
        return await this.request(secret, 'VTTO5105R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * (야간)선물옵션 주문체결 내역조회
     * @description (야간)선물옵션 주문체결 내역조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {JTCE5005R_REQUEST_HEADER} requestHeader    요청 header
     * @param {JTCE5005R_REQUEST_BODY} requestBody        요청 body
     * @param {JTCE5005R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {JTCE5005R_RESPONSE}
     */
    public async JTCE5005R(
        secret: Secret, requestHeader: JTCE5005R_REQUEST_HEADER, requestBody: JTCE5005R_REQUEST_BODY, 
        responseHeader: JTCE5005R_RESPONSE_HEADER | null = null): Promise<JTCE5005R_RESPONSE>  {
        
        return await this.request(secret, 'JTCE5005R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * (야간)선물옵션 잔고현황
     * @description (야간)선물옵션 잔고현황
     * 
     * @param {Secret} secret                               인증 정보
     * @param {JTCE6001R_REQUEST_HEADER} requestHeader    요청 header
     * @param {JTCE6001R_REQUEST_BODY} requestBody        요청 body
     * @param {JTCE6001R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {JTCE6001R_RESPONSE}
     */
    public async JTCE6001R(
        secret: Secret, requestHeader: JTCE6001R_REQUEST_HEADER, requestBody: JTCE6001R_REQUEST_BODY, 
        responseHeader: JTCE6001R_RESPONSE_HEADER | null = null): Promise<JTCE6001R_RESPONSE>  {
        
        return await this.request(secret, 'JTCE6001R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 선물옵션 시세
     * @description 선물옵션 시세
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHMIF10000000_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHMIF10000000_REQUEST_BODY} requestBody        요청 body
     * @param {FHMIF10000000_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHMIF10000000_RESPONSE}
     */
    public async FHMIF10000000(
        secret: Secret, requestHeader: FHMIF10000000_REQUEST_HEADER, requestBody: FHMIF10000000_REQUEST_BODY, 
        responseHeader: FHMIF10000000_RESPONSE_HEADER | null = null): Promise<FHMIF10000000_RESPONSE>  {
        
        return await this.request(secret, 'FHMIF10000000', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 선물옵션 시세호가
     * @description 선물옵션 시세호가
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHMIF10010000_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHMIF10010000_REQUEST_BODY} requestBody        요청 body
     * @param {FHMIF10010000_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHMIF10010000_RESPONSE}
     */
    public async FHMIF10010000(
        secret: Secret, requestHeader: FHMIF10010000_REQUEST_HEADER, requestBody: FHMIF10010000_REQUEST_BODY, 
        responseHeader: FHMIF10010000_RESPONSE_HEADER | null = null): Promise<FHMIF10010000_RESPONSE>  {
        
        return await this.request(secret, 'FHMIF10010000', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 선물옵션기간별시세(일/주/월/년)
     * @description 선물옵션기간별시세(일/주/월/년)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHKIF03020100_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHKIF03020100_REQUEST_BODY} requestBody        요청 body
     * @param {FHKIF03020100_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHKIF03020100_RESPONSE}
     */
    public async FHKIF03020100(
        secret: Secret, requestHeader: FHKIF03020100_REQUEST_HEADER, requestBody: FHKIF03020100_REQUEST_BODY, 
        responseHeader: FHKIF03020100_RESPONSE_HEADER | null = null): Promise<FHKIF03020100_RESPONSE>  {
        
        return await this.request(secret, 'FHKIF03020100', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTT1002U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTT1002U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTT1002U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTT1002U_RESPONSE}
     */
    public async TTTT1002U(
        secret: Secret, requestHeader: TTTT1002U_REQUEST_HEADER, requestBody: TTTT1002U_REQUEST_BODY, 
        responseHeader: TTTT1002U_RESPONSE_HEADER | null = null): Promise<TTTT1002U_RESPONSE>  {
        
        return await this.request(secret, 'TTTT1002U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTT1006U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTT1006U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTT1006U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTT1006U_RESPONSE}
     */
    public async TTTT1006U(
        secret: Secret, requestHeader: TTTT1006U_REQUEST_HEADER, requestBody: TTTT1006U_REQUEST_BODY, 
        responseHeader: TTTT1006U_RESPONSE_HEADER | null = null): Promise<TTTT1006U_RESPONSE>  {
        
        return await this.request(secret, 'TTTT1006U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS0308U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS0308U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS0308U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS0308U_RESPONSE}
     */
    public async TTTS0308U(
        secret: Secret, requestHeader: TTTS0308U_REQUEST_HEADER, requestBody: TTTS0308U_REQUEST_BODY, 
        responseHeader: TTTS0308U_RESPONSE_HEADER | null = null): Promise<TTTS0308U_RESPONSE>  {
        
        return await this.request(secret, 'TTTS0308U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS0307U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS0307U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS0307U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS0307U_RESPONSE}
     */
    public async TTTS0307U(
        secret: Secret, requestHeader: TTTS0307U_REQUEST_HEADER, requestBody: TTTS0307U_REQUEST_BODY, 
        responseHeader: TTTS0307U_RESPONSE_HEADER | null = null): Promise<TTTS0307U_RESPONSE>  {
        
        return await this.request(secret, 'TTTS0307U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS0202U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS0202U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS0202U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS0202U_RESPONSE}
     */
    public async TTTS0202U(
        secret: Secret, requestHeader: TTTS0202U_REQUEST_HEADER, requestBody: TTTS0202U_REQUEST_BODY, 
        responseHeader: TTTS0202U_RESPONSE_HEADER | null = null): Promise<TTTS0202U_RESPONSE>  {
        
        return await this.request(secret, 'TTTS0202U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS1005U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS1005U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS1005U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS1005U_RESPONSE}
     */
    public async TTTS1005U(
        secret: Secret, requestHeader: TTTS1005U_REQUEST_HEADER, requestBody: TTTS1005U_REQUEST_BODY, 
        responseHeader: TTTS1005U_RESPONSE_HEADER | null = null): Promise<TTTS1005U_RESPONSE>  {
        
        return await this.request(secret, 'TTTS1005U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS1002U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS1002U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS1002U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS1002U_RESPONSE}
     */
    public async TTTS1002U(
        secret: Secret, requestHeader: TTTS1002U_REQUEST_HEADER, requestBody: TTTS1002U_REQUEST_BODY, 
        responseHeader: TTTS1002U_RESPONSE_HEADER | null = null): Promise<TTTS1002U_RESPONSE>  {
        
        return await this.request(secret, 'TTTS1002U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS1001U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS1001U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS1001U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS1001U_RESPONSE}
     */
    public async TTTS1001U(
        secret: Secret, requestHeader: TTTS1001U_REQUEST_HEADER, requestBody: TTTS1001U_REQUEST_BODY, 
        responseHeader: TTTS1001U_RESPONSE_HEADER | null = null): Promise<TTTS1001U_RESPONSE>  {
        
        return await this.request(secret, 'TTTS1001U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS0305U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS0305U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS0305U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS0305U_RESPONSE}
     */
    public async TTTS0305U(
        secret: Secret, requestHeader: TTTS0305U_REQUEST_HEADER, requestBody: TTTS0305U_REQUEST_BODY, 
        responseHeader: TTTS0305U_RESPONSE_HEADER | null = null): Promise<TTTS0305U_RESPONSE>  {
        
        return await this.request(secret, 'TTTS0305U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS0304U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS0304U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS0304U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS0304U_RESPONSE}
     */
    public async TTTS0304U(
        secret: Secret, requestHeader: TTTS0304U_REQUEST_HEADER, requestBody: TTTS0304U_REQUEST_BODY, 
        responseHeader: TTTS0304U_RESPONSE_HEADER | null = null): Promise<TTTS0304U_RESPONSE>  {
        
        return await this.request(secret, 'TTTS0304U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS0311U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS0311U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS0311U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS0311U_RESPONSE}
     */
    public async TTTS0311U(
        secret: Secret, requestHeader: TTTS0311U_REQUEST_HEADER, requestBody: TTTS0311U_REQUEST_BODY, 
        responseHeader: TTTS0311U_RESPONSE_HEADER | null = null): Promise<TTTS0311U_RESPONSE>  {
        
        return await this.request(secret, 'TTTS0311U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS0310U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS0310U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS0310U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS0310U_RESPONSE}
     */
    public async TTTS0310U(
        secret: Secret, requestHeader: TTTS0310U_REQUEST_HEADER, requestBody: TTTS0310U_REQUEST_BODY, 
        responseHeader: TTTS0310U_RESPONSE_HEADER | null = null): Promise<TTTS0310U_RESPONSE>  {
        
        return await this.request(secret, 'TTTS0310U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTT1002U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTT1002U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTT1002U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTT1002U_RESPONSE}
     */
    public async VTTT1002U(
        secret: Secret, requestHeader: VTTT1002U_REQUEST_HEADER, requestBody: VTTT1002U_REQUEST_BODY, 
        responseHeader: VTTT1002U_RESPONSE_HEADER | null = null): Promise<VTTT1002U_RESPONSE>  {
        
        return await this.request(secret, 'VTTT1002U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTT1001U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTT1001U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTT1001U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTT1001U_RESPONSE}
     */
    public async VTTT1001U(
        secret: Secret, requestHeader: VTTT1001U_REQUEST_HEADER, requestBody: VTTT1001U_REQUEST_BODY, 
        responseHeader: VTTT1001U_RESPONSE_HEADER | null = null): Promise<VTTT1001U_RESPONSE>  {
        
        return await this.request(secret, 'VTTT1001U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS0308U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS0308U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS0308U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS0308U_RESPONSE}
     */
    public async VTTS0308U(
        secret: Secret, requestHeader: VTTS0308U_REQUEST_HEADER, requestBody: VTTS0308U_REQUEST_BODY, 
        responseHeader: VTTS0308U_RESPONSE_HEADER | null = null): Promise<VTTS0308U_RESPONSE>  {
        
        return await this.request(secret, 'VTTS0308U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS0307U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS0307U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS0307U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS0307U_RESPONSE}
     */
    public async VTTS0307U(
        secret: Secret, requestHeader: VTTS0307U_REQUEST_HEADER, requestBody: VTTS0307U_REQUEST_BODY, 
        responseHeader: VTTS0307U_RESPONSE_HEADER | null = null): Promise<VTTS0307U_RESPONSE>  {
        
        return await this.request(secret, 'VTTS0307U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS0202U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS0202U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS0202U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS0202U_RESPONSE}
     */
    public async VTTS0202U(
        secret: Secret, requestHeader: VTTS0202U_REQUEST_HEADER, requestBody: VTTS0202U_REQUEST_BODY, 
        responseHeader: VTTS0202U_RESPONSE_HEADER | null = null): Promise<VTTS0202U_RESPONSE>  {
        
        return await this.request(secret, 'VTTS0202U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS1005U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS1005U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS1005U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS1005U_RESPONSE}
     */
    public async VTTS1005U(
        secret: Secret, requestHeader: VTTS1005U_REQUEST_HEADER, requestBody: VTTS1005U_REQUEST_BODY, 
        responseHeader: VTTS1005U_RESPONSE_HEADER | null = null): Promise<VTTS1005U_RESPONSE>  {
        
        return await this.request(secret, 'VTTS1005U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS1002U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS1002U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS1002U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS1002U_RESPONSE}
     */
    public async VTTS1002U(
        secret: Secret, requestHeader: VTTS1002U_REQUEST_HEADER, requestBody: VTTS1002U_REQUEST_BODY, 
        responseHeader: VTTS1002U_RESPONSE_HEADER | null = null): Promise<VTTS1002U_RESPONSE>  {
        
        return await this.request(secret, 'VTTS1002U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS1001U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS1001U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS1001U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS1001U_RESPONSE}
     */
    public async VTTS1001U(
        secret: Secret, requestHeader: VTTS1001U_REQUEST_HEADER, requestBody: VTTS1001U_REQUEST_BODY, 
        responseHeader: VTTS1001U_RESPONSE_HEADER | null = null): Promise<VTTS1001U_RESPONSE>  {
        
        return await this.request(secret, 'VTTS1001U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS0305U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS0305U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS0305U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS0305U_RESPONSE}
     */
    public async VTTS0305U(
        secret: Secret, requestHeader: VTTS0305U_REQUEST_HEADER, requestBody: VTTS0305U_REQUEST_BODY, 
        responseHeader: VTTS0305U_RESPONSE_HEADER | null = null): Promise<VTTS0305U_RESPONSE>  {
        
        return await this.request(secret, 'VTTS0305U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS0304U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS0304U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS0304U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS0304U_RESPONSE}
     */
    public async VTTS0304U(
        secret: Secret, requestHeader: VTTS0304U_REQUEST_HEADER, requestBody: VTTS0304U_REQUEST_BODY, 
        responseHeader: VTTS0304U_RESPONSE_HEADER | null = null): Promise<VTTS0304U_RESPONSE>  {
        
        return await this.request(secret, 'VTTS0304U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS0311U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS0311U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS0311U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS0311U_RESPONSE}
     */
    public async VTTS0311U(
        secret: Secret, requestHeader: VTTS0311U_REQUEST_HEADER, requestBody: VTTS0311U_REQUEST_BODY, 
        responseHeader: VTTS0311U_RESPONSE_HEADER | null = null): Promise<VTTS0311U_RESPONSE>  {
        
        return await this.request(secret, 'VTTS0311U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS0310U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS0310U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS0310U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS0310U_RESPONSE}
     */
    public async VTTS0310U(
        secret: Secret, requestHeader: VTTS0310U_REQUEST_HEADER, requestBody: VTTS0310U_REQUEST_BODY, 
        responseHeader: VTTS0310U_RESPONSE_HEADER | null = null): Promise<VTTS0310U_RESPONSE>  {
        
        return await this.request(secret, 'VTTS0310U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTT1004U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTT1004U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTT1004U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTT1004U_RESPONSE}
     */
    public async TTTT1004U(
        secret: Secret, requestHeader: TTTT1004U_REQUEST_HEADER, requestBody: TTTT1004U_REQUEST_BODY, 
        responseHeader: TTTT1004U_RESPONSE_HEADER | null = null): Promise<TTTT1004U_RESPONSE>  {
        
        return await this.request(secret, 'TTTT1004U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS1003U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS1003U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS1003U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS1003U_RESPONSE}
     */
    public async TTTS1003U(
        secret: Secret, requestHeader: TTTS1003U_REQUEST_HEADER, requestBody: TTTS1003U_REQUEST_BODY, 
        responseHeader: TTTS1003U_RESPONSE_HEADER | null = null): Promise<TTTS1003U_RESPONSE>  {
        
        return await this.request(secret, 'TTTS1003U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS0309U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS0309U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS0309U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS0309U_RESPONSE}
     */
    public async TTTS0309U(
        secret: Secret, requestHeader: TTTS0309U_REQUEST_HEADER, requestBody: TTTS0309U_REQUEST_BODY, 
        responseHeader: TTTS0309U_RESPONSE_HEADER | null = null): Promise<TTTS0309U_RESPONSE>  {
        
        return await this.request(secret, 'TTTS0309U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS0302U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS0302U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS0302U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS0302U_RESPONSE}
     */
    public async TTTS0302U(
        secret: Secret, requestHeader: TTTS0302U_REQUEST_HEADER, requestBody: TTTS0302U_REQUEST_BODY, 
        responseHeader: TTTS0302U_RESPONSE_HEADER | null = null): Promise<TTTS0302U_RESPONSE>  {
        
        return await this.request(secret, 'TTTS0302U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS0306U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS0306U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS0306U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS0306U_RESPONSE}
     */
    public async TTTS0306U(
        secret: Secret, requestHeader: TTTS0306U_REQUEST_HEADER, requestBody: TTTS0306U_REQUEST_BODY, 
        responseHeader: TTTS0306U_RESPONSE_HEADER | null = null): Promise<TTTS0306U_RESPONSE>  {
        
        return await this.request(secret, 'TTTS0306U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS0312U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS0312U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS0312U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS0312U_RESPONSE}
     */
    public async TTTS0312U(
        secret: Secret, requestHeader: TTTS0312U_REQUEST_HEADER, requestBody: TTTS0312U_REQUEST_BODY, 
        responseHeader: TTTS0312U_RESPONSE_HEADER | null = null): Promise<TTTS0312U_RESPONSE>  {
        
        return await this.request(secret, 'TTTS0312U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTT1004U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTT1004U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTT1004U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTT1004U_RESPONSE}
     */
    public async VTTT1004U(
        secret: Secret, requestHeader: VTTT1004U_REQUEST_HEADER, requestBody: VTTT1004U_REQUEST_BODY, 
        responseHeader: VTTT1004U_RESPONSE_HEADER | null = null): Promise<VTTT1004U_RESPONSE>  {
        
        return await this.request(secret, 'VTTT1004U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS1003U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS1003U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS1003U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS1003U_RESPONSE}
     */
    public async VTTS1003U(
        secret: Secret, requestHeader: VTTS1003U_REQUEST_HEADER, requestBody: VTTS1003U_REQUEST_BODY, 
        responseHeader: VTTS1003U_RESPONSE_HEADER | null = null): Promise<VTTS1003U_RESPONSE>  {
        
        return await this.request(secret, 'VTTS1003U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS0309U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS0309U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS0309U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS0309U_RESPONSE}
     */
    public async VTTS0309U(
        secret: Secret, requestHeader: VTTS0309U_REQUEST_HEADER, requestBody: VTTS0309U_REQUEST_BODY, 
        responseHeader: VTTS0309U_RESPONSE_HEADER | null = null): Promise<VTTS0309U_RESPONSE>  {
        
        return await this.request(secret, 'VTTS0309U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS0302U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS0302U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS0302U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS0302U_RESPONSE}
     */
    public async VTTS0302U(
        secret: Secret, requestHeader: VTTS0302U_REQUEST_HEADER, requestBody: VTTS0302U_REQUEST_BODY, 
        responseHeader: VTTS0302U_RESPONSE_HEADER | null = null): Promise<VTTS0302U_RESPONSE>  {
        
        return await this.request(secret, 'VTTS0302U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS0306U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS0306U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS0306U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS0306U_RESPONSE}
     */
    public async VTTS0306U(
        secret: Secret, requestHeader: VTTS0306U_REQUEST_HEADER, requestBody: VTTS0306U_REQUEST_BODY, 
        responseHeader: VTTS0306U_RESPONSE_HEADER | null = null): Promise<VTTS0306U_RESPONSE>  {
        
        return await this.request(secret, 'VTTS0306U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS0312U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS0312U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS0312U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS0312U_RESPONSE}
     */
    public async VTTS0312U(
        secret: Secret, requestHeader: VTTS0312U_REQUEST_HEADER, requestBody: VTTS0312U_REQUEST_BODY, 
        responseHeader: VTTS0312U_RESPONSE_HEADER | null = null): Promise<VTTS0312U_RESPONSE>  {
        
        return await this.request(secret, 'VTTS0312U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 예약주문접수
     * @description 해외주식 예약주문접수
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTT3016U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTT3016U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTT3016U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTT3016U_RESPONSE}
     */
    public async TTTT3016U(
        secret: Secret, requestHeader: TTTT3016U_REQUEST_HEADER, requestBody: TTTT3016U_REQUEST_BODY, 
        responseHeader: TTTT3016U_RESPONSE_HEADER | null = null): Promise<TTTT3016U_RESPONSE>  {
        
        return await this.request(secret, 'TTTT3016U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 예약주문접수
     * @description 해외주식 예약주문접수
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTT3014U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTT3014U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTT3014U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTT3014U_RESPONSE}
     */
    public async TTTT3014U(
        secret: Secret, requestHeader: TTTT3014U_REQUEST_HEADER, requestBody: TTTT3014U_REQUEST_BODY, 
        responseHeader: TTTT3014U_RESPONSE_HEADER | null = null): Promise<TTTT3014U_RESPONSE>  {
        
        return await this.request(secret, 'TTTT3014U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 예약주문접수
     * @description 해외주식 예약주문접수
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS3013U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS3013U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS3013U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS3013U_RESPONSE}
     */
    public async TTTS3013U(
        secret: Secret, requestHeader: TTTS3013U_REQUEST_HEADER, requestBody: TTTS3013U_REQUEST_BODY, 
        responseHeader: TTTS3013U_RESPONSE_HEADER | null = null): Promise<TTTS3013U_RESPONSE>  {
        
        return await this.request(secret, 'TTTS3013U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 예약주문접수
     * @description 해외주식 예약주문접수
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTT3016U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTT3016U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTT3016U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTT3016U_RESPONSE}
     */
    public async VTTT3016U(
        secret: Secret, requestHeader: VTTT3016U_REQUEST_HEADER, requestBody: VTTT3016U_REQUEST_BODY, 
        responseHeader: VTTT3016U_RESPONSE_HEADER | null = null): Promise<VTTT3016U_RESPONSE>  {
        
        return await this.request(secret, 'VTTT3016U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 예약주문접수
     * @description 해외주식 예약주문접수
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTT3014U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTT3014U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTT3014U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTT3014U_RESPONSE}
     */
    public async VTTT3014U(
        secret: Secret, requestHeader: VTTT3014U_REQUEST_HEADER, requestBody: VTTT3014U_REQUEST_BODY, 
        responseHeader: VTTT3014U_RESPONSE_HEADER | null = null): Promise<VTTT3014U_RESPONSE>  {
        
        return await this.request(secret, 'VTTT3014U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 예약주문접수
     * @description 해외주식 예약주문접수
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS3013U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS3013U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS3013U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS3013U_RESPONSE}
     */
    public async VTTS3013U(
        secret: Secret, requestHeader: VTTS3013U_REQUEST_HEADER, requestBody: VTTS3013U_REQUEST_BODY, 
        responseHeader: VTTS3013U_RESPONSE_HEADER | null = null): Promise<VTTS3013U_RESPONSE>  {
        
        return await this.request(secret, 'VTTS3013U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 예약주문접수취소
     * @description 해외주식 예약주문접수취소
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTT3017U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTT3017U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTT3017U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTT3017U_RESPONSE}
     */
    public async TTTT3017U(
        secret: Secret, requestHeader: TTTT3017U_REQUEST_HEADER, requestBody: TTTT3017U_REQUEST_BODY, 
        responseHeader: TTTT3017U_RESPONSE_HEADER | null = null): Promise<TTTT3017U_RESPONSE>  {
        
        return await this.request(secret, 'TTTT3017U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 예약주문접수취소
     * @description 해외주식 예약주문접수취소
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTT3017U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTT3017U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTT3017U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTT3017U_RESPONSE}
     */
    public async VTTT3017U(
        secret: Secret, requestHeader: VTTT3017U_REQUEST_HEADER, requestBody: VTTT3017U_REQUEST_BODY, 
        responseHeader: VTTT3017U_RESPONSE_HEADER | null = null): Promise<VTTT3017U_RESPONSE>  {
        
        return await this.request(secret, 'VTTT3017U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 미체결내역
     * @description 해외주식 미체결내역
     * 
     * @param {Secret} secret                               인증 정보
     * @param {JTTT3018R_REQUEST_HEADER} requestHeader    요청 header
     * @param {JTTT3018R_REQUEST_BODY} requestBody        요청 body
     * @param {JTTT3018R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {JTTT3018R_RESPONSE}
     */
    public async JTTT3018R(
        secret: Secret, requestHeader: JTTT3018R_REQUEST_HEADER, requestBody: JTTT3018R_REQUEST_BODY, 
        responseHeader: JTTT3018R_RESPONSE_HEADER | null = null): Promise<JTTT3018R_RESPONSE>  {
        
        return await this.request(secret, 'JTTT3018R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 미체결내역
     * @description 해외주식 미체결내역
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS3018R_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS3018R_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS3018R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS3018R_RESPONSE}
     */
    public async TTTS3018R(
        secret: Secret, requestHeader: TTTS3018R_REQUEST_HEADER, requestBody: TTTS3018R_REQUEST_BODY, 
        responseHeader: TTTS3018R_RESPONSE_HEADER | null = null): Promise<TTTS3018R_RESPONSE>  {
        
        return await this.request(secret, 'TTTS3018R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 미체결내역
     * @description 해외주식 미체결내역
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS3018R_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS3018R_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS3018R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS3018R_RESPONSE}
     */
    public async VTTS3018R(
        secret: Secret, requestHeader: VTTS3018R_REQUEST_HEADER, requestBody: VTTS3018R_REQUEST_BODY, 
        responseHeader: VTTS3018R_RESPONSE_HEADER | null = null): Promise<VTTS3018R_RESPONSE>  {
        
        return await this.request(secret, 'VTTS3018R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 잔고
     * @description 해외주식 잔고
     * 
     * @param {Secret} secret                               인증 정보
     * @param {JTTT3012R_REQUEST_HEADER} requestHeader    요청 header
     * @param {JTTT3012R_REQUEST_BODY} requestBody        요청 body
     * @param {JTTT3012R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {JTTT3012R_RESPONSE}
     */
    public async JTTT3012R(
        secret: Secret, requestHeader: JTTT3012R_REQUEST_HEADER, requestBody: JTTT3012R_REQUEST_BODY, 
        responseHeader: JTTT3012R_RESPONSE_HEADER | null = null): Promise<JTTT3012R_RESPONSE>  {
        
        return await this.request(secret, 'JTTT3012R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 잔고
     * @description 해외주식 잔고
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS3012R_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS3012R_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS3012R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS3012R_RESPONSE}
     */
    public async TTTS3012R(
        secret: Secret, requestHeader: TTTS3012R_REQUEST_HEADER, requestBody: TTTS3012R_REQUEST_BODY, 
        responseHeader: TTTS3012R_RESPONSE_HEADER | null = null): Promise<TTTS3012R_RESPONSE>  {
        
        return await this.request(secret, 'TTTS3012R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 잔고
     * @description 해외주식 잔고
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS3012R_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS3012R_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS3012R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS3012R_RESPONSE}
     */
    public async VTTS3012R(
        secret: Secret, requestHeader: VTTS3012R_REQUEST_HEADER, requestBody: VTTS3012R_REQUEST_BODY, 
        responseHeader: VTTS3012R_RESPONSE_HEADER | null = null): Promise<VTTS3012R_RESPONSE>  {
        
        return await this.request(secret, 'VTTS3012R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 주문체결내역
     * @description 해외주식 주문체결내역
     * 
     * @param {Secret} secret                               인증 정보
     * @param {JTTT3001R_REQUEST_HEADER} requestHeader    요청 header
     * @param {JTTT3001R_REQUEST_BODY} requestBody        요청 body
     * @param {JTTT3001R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {JTTT3001R_RESPONSE}
     */
    public async JTTT3001R(
        secret: Secret, requestHeader: JTTT3001R_REQUEST_HEADER, requestBody: JTTT3001R_REQUEST_BODY, 
        responseHeader: JTTT3001R_RESPONSE_HEADER | null = null): Promise<JTTT3001R_RESPONSE>  {
        
        return await this.request(secret, 'JTTT3001R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 주문체결내역
     * @description 해외주식 주문체결내역
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS3035R_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS3035R_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS3035R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS3035R_RESPONSE}
     */
    public async TTTS3035R(
        secret: Secret, requestHeader: TTTS3035R_REQUEST_HEADER, requestBody: TTTS3035R_REQUEST_BODY, 
        responseHeader: TTTS3035R_RESPONSE_HEADER | null = null): Promise<TTTS3035R_RESPONSE>  {
        
        return await this.request(secret, 'TTTS3035R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 주문체결내역
     * @description 해외주식 주문체결내역
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS3035R_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS3035R_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS3035R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS3035R_RESPONSE}
     */
    public async VTTS3035R(
        secret: Secret, requestHeader: VTTS3035R_REQUEST_HEADER, requestBody: VTTS3035R_REQUEST_BODY, 
        responseHeader: VTTS3035R_RESPONSE_HEADER | null = null): Promise<VTTS3035R_RESPONSE>  {
        
        return await this.request(secret, 'VTTS3035R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 체결기준현재잔고
     * @description 해외주식 체결기준현재잔고
     * 
     * @param {Secret} secret                               인증 정보
     * @param {CTRP6504R_REQUEST_HEADER} requestHeader    요청 header
     * @param {CTRP6504R_REQUEST_BODY} requestBody        요청 body
     * @param {CTRP6504R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {CTRP6504R_RESPONSE}
     */
    public async CTRP6504R(
        secret: Secret, requestHeader: CTRP6504R_REQUEST_HEADER, requestBody: CTRP6504R_REQUEST_BODY, 
        responseHeader: CTRP6504R_RESPONSE_HEADER | null = null): Promise<CTRP6504R_RESPONSE>  {
        
        return await this.request(secret, 'CTRP6504R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 체결기준현재잔고
     * @description 해외주식 체결기준현재잔고
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTRP6504R_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTRP6504R_REQUEST_BODY} requestBody        요청 body
     * @param {VTRP6504R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTRP6504R_RESPONSE}
     */
    public async VTRP6504R(
        secret: Secret, requestHeader: VTRP6504R_REQUEST_HEADER, requestBody: VTRP6504R_REQUEST_BODY, 
        responseHeader: VTRP6504R_RESPONSE_HEADER | null = null): Promise<VTRP6504R_RESPONSE>  {
        
        return await this.request(secret, 'VTRP6504R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 예약주문조회
     * @description 해외주식 예약주문조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTT3039R_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTT3039R_REQUEST_BODY} requestBody        요청 body
     * @param {TTTT3039R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTT3039R_RESPONSE}
     */
    public async TTTT3039R(
        secret: Secret, requestHeader: TTTT3039R_REQUEST_HEADER, requestBody: TTTT3039R_REQUEST_BODY, 
        responseHeader: TTTT3039R_RESPONSE_HEADER | null = null): Promise<TTTT3039R_RESPONSE>  {
        
        return await this.request(secret, 'TTTT3039R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 매수가능금액조회
     * @description 해외주식 매수가능금액조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {JTTT3007R_REQUEST_HEADER} requestHeader    요청 header
     * @param {JTTT3007R_REQUEST_BODY} requestBody        요청 body
     * @param {JTTT3007R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {JTTT3007R_RESPONSE}
     */
    public async JTTT3007R(
        secret: Secret, requestHeader: JTTT3007R_REQUEST_HEADER, requestBody: JTTT3007R_REQUEST_BODY, 
        responseHeader: JTTT3007R_RESPONSE_HEADER | null = null): Promise<JTTT3007R_RESPONSE>  {
        
        return await this.request(secret, 'JTTT3007R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 매수가능금액조회
     * @description 해외주식 매수가능금액조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS3007R_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS3007R_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS3007R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS3007R_RESPONSE}
     */
    public async TTTS3007R(
        secret: Secret, requestHeader: TTTS3007R_REQUEST_HEADER, requestBody: TTTS3007R_REQUEST_BODY, 
        responseHeader: TTTS3007R_RESPONSE_HEADER | null = null): Promise<TTTS3007R_RESPONSE>  {
        
        return await this.request(secret, 'TTTS3007R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 미국주간주문
     * @description 해외주식 미국주간주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS6036U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS6036U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS6036U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS6036U_RESPONSE}
     */
    public async TTTS6036U(
        secret: Secret, requestHeader: TTTS6036U_REQUEST_HEADER, requestBody: TTTS6036U_REQUEST_BODY, 
        responseHeader: TTTS6036U_RESPONSE_HEADER | null = null): Promise<TTTS6036U_RESPONSE>  {
        
        return await this.request(secret, 'TTTS6036U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 미국주간주문
     * @description 해외주식 미국주간주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS6037U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS6037U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS6037U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS6037U_RESPONSE}
     */
    public async TTTS6037U(
        secret: Secret, requestHeader: TTTS6037U_REQUEST_HEADER, requestBody: TTTS6037U_REQUEST_BODY, 
        responseHeader: TTTS6037U_RESPONSE_HEADER | null = null): Promise<TTTS6037U_RESPONSE>  {
        
        return await this.request(secret, 'TTTS6037U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 미국주간정정취소
     * @description 해외주식 미국주간정정취소
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS6038U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS6038U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS6038U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS6038U_RESPONSE}
     */
    public async TTTS6038U(
        secret: Secret, requestHeader: TTTS6038U_REQUEST_HEADER, requestBody: TTTS6038U_REQUEST_BODY, 
        responseHeader: TTTS6038U_RESPONSE_HEADER | null = null): Promise<TTTS6038U_RESPONSE>  {
        
        return await this.request(secret, 'TTTS6038U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 기간손익
     * @description 해외주식 기간손익
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS3039R_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS3039R_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS3039R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS3039R_RESPONSE}
     */
    public async TTTS3039R(
        secret: Secret, requestHeader: TTTS3039R_REQUEST_HEADER, requestBody: TTTS3039R_REQUEST_BODY, 
        responseHeader: TTTS3039R_RESPONSE_HEADER | null = null): Promise<TTTS3039R_RESPONSE>  {
        
        return await this.request(secret, 'TTTS3039R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 현재체결가
     * @description 해외주식 현재체결가
     * 
     * @param {Secret} secret                               인증 정보
     * @param {HHDFS00000300_REQUEST_HEADER} requestHeader    요청 header
     * @param {HHDFS00000300_REQUEST_BODY} requestBody        요청 body
     * @param {HHDFS00000300_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {HHDFS00000300_RESPONSE}
     */
    public async HHDFS00000300(
        secret: Secret, requestHeader: HHDFS00000300_REQUEST_HEADER, requestBody: HHDFS00000300_REQUEST_BODY, 
        responseHeader: HHDFS00000300_RESPONSE_HEADER | null = null): Promise<HHDFS00000300_RESPONSE>  {
        
        return await this.request(secret, 'HHDFS00000300', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 기간별시세
     * @description 해외주식 기간별시세
     * 
     * @param {Secret} secret                               인증 정보
     * @param {HHDFS76240000_REQUEST_HEADER} requestHeader    요청 header
     * @param {HHDFS76240000_REQUEST_BODY} requestBody        요청 body
     * @param {HHDFS76240000_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {HHDFS76240000_RESPONSE}
     */
    public async HHDFS76240000(
        secret: Secret, requestHeader: HHDFS76240000_REQUEST_HEADER, requestBody: HHDFS76240000_REQUEST_BODY, 
        responseHeader: HHDFS76240000_RESPONSE_HEADER | null = null): Promise<HHDFS76240000_RESPONSE>  {
        
        return await this.request(secret, 'HHDFS76240000', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 종목/지수/환율기간별시세(일/주/월/년)
     * @description 해외주식 종목/지수/환율기간별시세(일/주/월/년)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHKST03030100_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHKST03030100_REQUEST_BODY} requestBody        요청 body
     * @param {FHKST03030100_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHKST03030100_RESPONSE}
     */
    public async FHKST03030100(
        secret: Secret, requestHeader: FHKST03030100_REQUEST_HEADER, requestBody: FHKST03030100_REQUEST_BODY, 
        responseHeader: FHKST03030100_RESPONSE_HEADER | null = null): Promise<FHKST03030100_RESPONSE>  {
        
        return await this.request(secret, 'FHKST03030100', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식조건검색
     * @description 해외주식조건검색
     * 
     * @param {Secret} secret                               인증 정보
     * @param {HHDFS76410000_REQUEST_HEADER} requestHeader    요청 header
     * @param {HHDFS76410000_REQUEST_BODY} requestBody        요청 body
     * @param {HHDFS76410000_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {HHDFS76410000_RESPONSE}
     */
    public async HHDFS76410000(
        secret: Secret, requestHeader: HHDFS76410000_REQUEST_HEADER, requestBody: HHDFS76410000_REQUEST_BODY, 
        responseHeader: HHDFS76410000_RESPONSE_HEADER | null = null): Promise<HHDFS76410000_RESPONSE>  {
        
        return await this.request(secret, 'HHDFS76410000', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외결제일자조회
     * @description 해외결제일자조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {CTOS5011R_REQUEST_HEADER} requestHeader    요청 header
     * @param {CTOS5011R_REQUEST_BODY} requestBody        요청 body
     * @param {CTOS5011R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {CTOS5011R_RESPONSE}
     */
    public async CTOS5011R(
        secret: Secret, requestHeader: CTOS5011R_REQUEST_HEADER, requestBody: CTOS5011R_REQUEST_BODY, 
        responseHeader: CTOS5011R_RESPONSE_HEADER | null = null): Promise<CTOS5011R_RESPONSE>  {
        
        return await this.request(secret, 'CTOS5011R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외주식 현재가상세
     * @description 해외주식 현재가상세
     * 
     * @param {Secret} secret                               인증 정보
     * @param {HHDFS76200200_REQUEST_HEADER} requestHeader    요청 header
     * @param {HHDFS76200200_REQUEST_BODY} requestBody        요청 body
     * @param {HHDFS76200200_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {HHDFS76200200_RESPONSE}
     */
    public async HHDFS76200200(
        secret: Secret, requestHeader: HHDFS76200200_REQUEST_HEADER, requestBody: HHDFS76200200_REQUEST_BODY, 
        responseHeader: HHDFS76200200_RESPONSE_HEADER | null = null): Promise<HHDFS76200200_RESPONSE>  {
        
        return await this.request(secret, 'HHDFS76200200', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외선물옵션 주문
     * @description 해외선물옵션 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {OTFM3001U_REQUEST_HEADER} requestHeader    요청 header
     * @param {OTFM3001U_REQUEST_BODY} requestBody        요청 body
     * @param {OTFM3001U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {OTFM3001U_RESPONSE}
     */
    public async OTFM3001U(
        secret: Secret, requestHeader: OTFM3001U_REQUEST_HEADER, requestBody: OTFM3001U_REQUEST_BODY, 
        responseHeader: OTFM3001U_RESPONSE_HEADER | null = null): Promise<OTFM3001U_RESPONSE>  {
        
        return await this.request(secret, 'OTFM3001U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외선물옵션 정정취소주문
     * @description 해외선물옵션 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {OTFM3002U_REQUEST_HEADER} requestHeader    요청 header
     * @param {OTFM3002U_REQUEST_BODY} requestBody        요청 body
     * @param {OTFM3002U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {OTFM3002U_RESPONSE}
     */
    public async OTFM3002U(
        secret: Secret, requestHeader: OTFM3002U_REQUEST_HEADER, requestBody: OTFM3002U_REQUEST_BODY, 
        responseHeader: OTFM3002U_RESPONSE_HEADER | null = null): Promise<OTFM3002U_RESPONSE>  {
        
        return await this.request(secret, 'OTFM3002U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외선물옵션 정정취소주문
     * @description 해외선물옵션 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {OTFM3003U_REQUEST_HEADER} requestHeader    요청 header
     * @param {OTFM3003U_REQUEST_BODY} requestBody        요청 body
     * @param {OTFM3003U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {OTFM3003U_RESPONSE}
     */
    public async OTFM3003U(
        secret: Secret, requestHeader: OTFM3003U_REQUEST_HEADER, requestBody: OTFM3003U_REQUEST_BODY, 
        responseHeader: OTFM3003U_RESPONSE_HEADER | null = null): Promise<OTFM3003U_RESPONSE>  {
        
        return await this.request(secret, 'OTFM3003U', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외선물옵션 당일주문내역조회
     * @description 해외선물옵션 당일주문내역조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {OTFM3116R_REQUEST_HEADER} requestHeader    요청 header
     * @param {OTFM3116R_REQUEST_BODY} requestBody        요청 body
     * @param {OTFM3116R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {OTFM3116R_RESPONSE}
     */
    public async OTFM3116R(
        secret: Secret, requestHeader: OTFM3116R_REQUEST_HEADER, requestBody: OTFM3116R_REQUEST_BODY, 
        responseHeader: OTFM3116R_RESPONSE_HEADER | null = null): Promise<OTFM3116R_RESPONSE>  {
        
        return await this.request(secret, 'OTFM3116R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외선물옵션 미결제내역조회(잔고)
     * @description 해외선물옵션 미결제내역조회(잔고)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {OTFM1412R_REQUEST_HEADER} requestHeader    요청 header
     * @param {OTFM1412R_REQUEST_BODY} requestBody        요청 body
     * @param {OTFM1412R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {OTFM1412R_RESPONSE}
     */
    public async OTFM1412R(
        secret: Secret, requestHeader: OTFM1412R_REQUEST_HEADER, requestBody: OTFM1412R_REQUEST_BODY, 
        responseHeader: OTFM1412R_RESPONSE_HEADER | null = null): Promise<OTFM1412R_RESPONSE>  {
        
        return await this.request(secret, 'OTFM1412R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외선물옵션 주문가능조회
     * @description 해외선물옵션 주문가능조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {OTFM3304R_REQUEST_HEADER} requestHeader    요청 header
     * @param {OTFM3304R_REQUEST_BODY} requestBody        요청 body
     * @param {OTFM3304R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {OTFM3304R_RESPONSE}
     */
    public async OTFM3304R(
        secret: Secret, requestHeader: OTFM3304R_REQUEST_HEADER, requestBody: OTFM3304R_REQUEST_BODY, 
        responseHeader: OTFM3304R_RESPONSE_HEADER | null = null): Promise<OTFM3304R_RESPONSE>  {
        
        return await this.request(secret, 'OTFM3304R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외선물옵션 기간계좌손익 일별
     * @description 해외선물옵션 기간계좌손익 일별
     * 
     * @param {Secret} secret                               인증 정보
     * @param {OTFM3118R_REQUEST_HEADER} requestHeader    요청 header
     * @param {OTFM3118R_REQUEST_BODY} requestBody        요청 body
     * @param {OTFM3118R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {OTFM3118R_RESPONSE}
     */
    public async OTFM3118R(
        secret: Secret, requestHeader: OTFM3118R_REQUEST_HEADER, requestBody: OTFM3118R_REQUEST_BODY, 
        responseHeader: OTFM3118R_RESPONSE_HEADER | null = null): Promise<OTFM3118R_RESPONSE>  {
        
        return await this.request(secret, 'OTFM3118R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외선물옵션 일별 체결내역
     * @description 해외선물옵션 일별 체결내역
     * 
     * @param {Secret} secret                               인증 정보
     * @param {OTFM3122R_REQUEST_HEADER} requestHeader    요청 header
     * @param {OTFM3122R_REQUEST_BODY} requestBody        요청 body
     * @param {OTFM3122R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {OTFM3122R_RESPONSE}
     */
    public async OTFM3122R(
        secret: Secret, requestHeader: OTFM3122R_REQUEST_HEADER, requestBody: OTFM3122R_REQUEST_BODY, 
        responseHeader: OTFM3122R_RESPONSE_HEADER | null = null): Promise<OTFM3122R_RESPONSE>  {
        
        return await this.request(secret, 'OTFM3122R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외선물옵션 예수금현황
     * @description 해외선물옵션 예수금현황
     * 
     * @param {Secret} secret                               인증 정보
     * @param {OTFM1411R_REQUEST_HEADER} requestHeader    요청 header
     * @param {OTFM1411R_REQUEST_BODY} requestBody        요청 body
     * @param {OTFM1411R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {OTFM1411R_RESPONSE}
     */
    public async OTFM1411R(
        secret: Secret, requestHeader: OTFM1411R_REQUEST_HEADER, requestBody: OTFM1411R_REQUEST_BODY, 
        responseHeader: OTFM1411R_RESPONSE_HEADER | null = null): Promise<OTFM1411R_RESPONSE>  {
        
        return await this.request(secret, 'OTFM1411R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외선물옵션 일별 주문내역
     * @description 해외선물옵션 일별 주문내역
     * 
     * @param {Secret} secret                               인증 정보
     * @param {OTFM3120R_REQUEST_HEADER} requestHeader    요청 header
     * @param {OTFM3120R_REQUEST_BODY} requestBody        요청 body
     * @param {OTFM3120R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {OTFM3120R_RESPONSE}
     */
    public async OTFM3120R(
        secret: Secret, requestHeader: OTFM3120R_REQUEST_HEADER, requestBody: OTFM3120R_REQUEST_BODY, 
        responseHeader: OTFM3120R_RESPONSE_HEADER | null = null): Promise<OTFM3120R_RESPONSE>  {
        
        return await this.request(secret, 'OTFM3120R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외선물옵션 기간계좌거래내역
     * @description 해외선물옵션 기간계좌거래내역
     * 
     * @param {Secret} secret                               인증 정보
     * @param {OTFM3114R_REQUEST_HEADER} requestHeader    요청 header
     * @param {OTFM3114R_REQUEST_BODY} requestBody        요청 body
     * @param {OTFM3114R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {OTFM3114R_RESPONSE}
     */
    public async OTFM3114R(
        secret: Secret, requestHeader: OTFM3114R_REQUEST_HEADER, requestBody: OTFM3114R_REQUEST_BODY, 
        responseHeader: OTFM3114R_RESPONSE_HEADER | null = null): Promise<OTFM3114R_RESPONSE>  {
        
        return await this.request(secret, 'OTFM3114R', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외선물종목상세
     * @description 해외선물종목상세
     * 
     * @param {Secret} secret                               인증 정보
     * @param {HHDFC55010100_REQUEST_HEADER} requestHeader    요청 header
     * @param {HHDFC55010100_REQUEST_BODY} requestBody        요청 body
     * @param {HHDFC55010100_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {HHDFC55010100_RESPONSE}
     */
    public async HHDFC55010100(
        secret: Secret, requestHeader: HHDFC55010100_REQUEST_HEADER, requestBody: HHDFC55010100_REQUEST_BODY, 
        responseHeader: HHDFC55010100_RESPONSE_HEADER | null = null): Promise<HHDFC55010100_RESPONSE>  {
        
        return await this.request(secret, 'HHDFC55010100', requestHeader, requestBody, responseHeader);
    }
                    
    /**
     * 해외선물종목현재가
     * @description 해외선물종목현재가
     * 
     * @param {Secret} secret                               인증 정보
     * @param {HHDFC55010000_REQUEST_HEADER} requestHeader    요청 header
     * @param {HHDFC55010000_REQUEST_BODY} requestBody        요청 body
     * @param {HHDFC55010000_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {HHDFC55010000_RESPONSE}
     */
    public async HHDFC55010000(
        secret: Secret, requestHeader: HHDFC55010000_REQUEST_HEADER, requestBody: HHDFC55010000_REQUEST_BODY, 
        responseHeader: HHDFC55010000_RESPONSE_HEADER | null = null): Promise<HHDFC55010000_RESPONSE>  {
        
        return await this.request(secret, 'HHDFC55010000', requestHeader, requestBody, responseHeader);
    }
}
