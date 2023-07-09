/*
 * /packages/efriends/efriendRest.ts
 * 
 * @version 1.0.0
 * @license GNU General Public License v3.0
 * @author dalcon10028 <dalcon10280@gmail.com>
 */

import { v1 as uuid } from 'uuid';
import { EFriendError } from "../core/errors/base.error";
import { FetchResponseHeader, fetch } from "../core/utils/fetch.util";

import { EFriend_JSON_TRID } from "../core/constants/trid.constant";
import { MetaData, RequestHeader, Response, Secret, TridField } from './efriendRest.type';
import { TR_CONT } from './efriendRest.constant';
import { HeadersInit } from 'node-fetch';

export class EFriendRest {
    /**
     * requestHeader를 재설정하여 반환 한다.
     * 
     * @param {Secret} secret                               인증 정보
     * @param {string} trid                                 트랜잭션 ID
     * @param {RequestHeader} requestHeader                요청 header
     * @param {REQUEST_BODY} requestBody                    요청 body
     * @param {ResponseHeader} responseHeader              응답 header
     * @returns {RequestHeader} requestHeader              재설정된 요청 header
     * @throws {EFriendError}
     */
    private async _resetRequestHeader(secret: Partial<Secret>, trid: string, requestHeader: RequestHeader, requestBody: any, responseHeader?: FetchResponseHeader): Promise<HeadersInit> {
        try {
            //--- requestHeader 값 재설정
            const metadata: MetaData = EFriend_JSON_TRID[`${trid}_${secret.mode.replace('투자', '')}`];
            metadata.request.header.forEach((field: TridField) => {
                const value: any = requestHeader[field.code] || secret[field.code] || field.default || null;
                if (value != null) {
                    requestHeader[field.code] = value;
                }
            });

            if ((typeof(requestHeader.tr_cont) != 'undefined') && (responseHeader != null)) {
                if ([ 'F', 'M' ].includes(responseHeader.tr_cont)) {
                    requestHeader.tr_cont = TR_CONT.next;
                }
            }

            if (metadata.info.method == 'post') {
                if (typeof(requestHeader.hashkey) != 'undefined') {
                    const responseHashkey = await this.request(secret, 'hashkey', null, requestBody);
                    if (responseHashkey.code == 0) {
                        requestHeader.hashkey = (responseHashkey.body as any).HASH;
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
                this._checkField(field, requestHeader, trid);
            }
            return requestHeader;
        } catch(ex) {
            throw ex;
        }
    }

    /**
     * data의 값을 검사 한다.
     * 
     * @param {String} trid                                 트랜잭션 ID
     * @param {Array<TRID_FIELD>} fields                    필드 목록
     * @param {DATA_OBJECT} data                            검사할 데이터 객체
     * @throws {EFriendError}
     */
    private _checkData(trid: string, fields: Array<TridField>, data: unknown): void {
        for (const field of fields) {
            this._checkField(field, data, trid);
        }
    }

    /**
     * 필드의 값을 검사 한다.
     * 
     * @param {Object} field                                필드 정보
     * @param {Object} data                                 field의 값을 포함하는 object
     * @param {String} trid                                 tr_id
     * @throws {EFriendError}
     */
    private _checkField(field: TridField, data: any, trid: string, allowException: boolean = true) {
        try {
            const fieldInfo: string = `${trid}: ${field.code}(${field.name})`;
            
            if ((typeof(data[field.code]) == 'undefined') && (field.required)) {
                throw new EFriendError(404, `${fieldInfo} field is required.`);
            }

            if ((typeof(data.custtype) != 'undefined') && (data.custtype == 'B')) {
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
                console.log('---------- field manage', `${trid}: ${ex.code} - ${ex.message}`);
            }
        }
    }

    /**
     * Response Header에서 필드 설정과 실제 데이터의 필드 항목을 비교 한다.
     * 
     * @param {Array} fields                                Fields의 메타 정보
     * @param {Object} data                                 Response Header 데이터
     * @param {String} trid                                 tr_id
     */
    private _compareWithMeta<DATA_OBJECT>(fields: Array<TridField>, data: DATA_OBJECT, trid: string) {
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
     * @param {String} trid                                 트랜잭션 ID
     * @param {Array} fields                                필드 목록
     * @param {Object} data                                 검사할 데이터 객체
     * @throws {EFriendError}
     */
    private _checkResponseBody<DATA_OBJECT>(trid: string, fields: Array<TridField>, data: DATA_OBJECT) {
        for (const field of fields) {
            if ([ 'array', 'object' ].includes(field.type)) {
                if (Array.isArray(data[field.code])) {
                    for (const dataItem of data[field.code]) {
                        this._checkResponseBody(trid, field.fields, dataItem);
                    }
                } else {
                    this._checkResponseBody(trid, field.fields, data[field.code]);
                }
            } else {
                this._checkField(field, data, trid, false);
            }
        }
    }

    /**
     * 한국투자증권 EFriendExpert의 REST API
     * @description 한국투자증권 EFriendExpert의 REST API를 호출하고 결과를 반환 한다.
     * 
     * @param {Secret} secret                               인증 정보
     * @param {String} trid                                 트랜잭션 ID
     * @param {RequestHeader} requestHeader                요청 header
     * @param {REQUEST_BODY} requestBody                    요청 body
     * @param {ResponseHeader} responseHeader              응답 header
     * @returns {Object} Response
     */
    async request<T>(
        secret: Partial<Secret>, trid: string, requestHeader: RequestHeader, requestBody: Record<string, unknown>, responseHeader?: FetchResponseHeader): Promise<Response<T>>  {
        const response: Response<T> = { code: 0, message: 'ok' };
        try {
            const metadata: MetaData = EFriend_JSON_TRID[`${trid}_${secret.mode}`] || null;
            if (!metadata) {
                throw new EFriendError(404, `${trid} (${secret.mode}) metadata is not exist.`);
            }
            this._checkData(trid, metadata.request.body, requestBody);
            const headers = await this._resetRequestHeader(secret, trid, requestHeader, requestBody, responseHeader);
            const { method, url } = metadata.info;

            const res = await fetch.request<unknown, T>(url, {
                mode: secret.mode,
                method,
                headers,
                body: requestBody
            });

            this._checkData(trid, metadata.response.header, res.headers.raw());
            this._compareWithMeta(metadata.response.header, res.headers.raw(), trid);
            this._checkResponseBody(trid, metadata.response.body, res.data);

            response.header = res.headers;
            response.body = res.data;
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
