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
}
