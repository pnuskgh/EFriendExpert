/**
 * 한국투자증권 EFriendExpert REST API
 * 
 * @file packages/EFriendExpert/efriends/efriendRest.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import fetch, { RequestInit } from 'node-fetch';
import { v1 as uuid } from 'uuid';

import { BaseError, ERROR_CODE } from '../common/error';
import EFriend_JSON_TRID, { METADATA, METHOD, TRID_FIELD } from "./efriend.constant";
import { Secret } from './efriend.type';

import { logger } from '../common/logger';                  //--- To-Do: DI를 사용하여 제거할 것

export class EFriendRestBase {
    /**
     * requestHeader를 재설정하여 반환 한다.
     * 
     * @param {any} secret                               인증 정보
     * @param {string} trid                                 트랜잭션 ID
     * @param {any} requestHeader                요청 header
     * @param {any} requestBody                    요청 body
     * @param {any} responseHeader              응답 header
     * @returns {any}                            재설정된 요청 header
     * @throws {any}
     */
    private async resetRequestHeader(secret: any, trid: string, requestHeader: any, requestBody: any, responseHeader: any | null = null): Promise<any> {
        try {
            //--- requestHeader 값 재설정
            const actualName: string = (secret.isActual) ? '실전':'모의';
            const metadata: METADATA = EFriend_JSON_TRID[`${trid}_${actualName}`];
            metadata.request.header.forEach(field => {
                const value: any = requestHeader[field.code] || secret[field.code] || field.default || null;
                if (value != null) {
                    requestHeader[field.code] = value;
                }

                if (field.code == 'authorization') {
                    requestHeader[field.code] = `${secret.tokens[0].token_type} ${secret.tokens[0].access_token}`;
                }
                if (field.code == 'tr_id') {
                    requestHeader[field.code] = trid;
                }
            });

            if ((typeof(requestHeader.tr_cont) != 'undefined') && (responseHeader != null)) {
                if ([ 'F', 'M' ].includes(responseHeader.tr_cont)) {
                    requestHeader.tr_cont = 'N';
                }
            }

            if (metadata.info.method == 'post') {
                if ((trid != 'hashkey') && (typeof(requestHeader.hashkey) == 'undefined')) {
                    const header: any = {
                        "content-type": 'application/json; charset=utf-8',
                        appkey: secret.appkey,
                        appsecret: secret.appsecret
                    };
                    const responseHashkey: any = await this.request(secret, 'hashkey', header, requestBody);
                    if (responseHashkey.code == 0) {
                        requestHeader.hashkey = responseHashkey.body.HASH;
                    } else {
                        throw new BaseError({ code: responseHashkey.code, message: responseHashkey.message });
                    }
                }
            }

            if (typeof(requestHeader.gt_uid) != 'undefined') {
                requestHeader.gt_uid = uuid().replace(/-/g, '');
            }

            //--- requestHeader 값 검사
            metadata.request.header.forEach(function(field) {
                this.checkField(field, requestHeader, trid);
            }.bind(this));
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
     * @param {any} data                            검사할 데이터 객체
     * @throws {any}
     */
    private checkData(trid: string, fields: Array<TRID_FIELD>, data: any): void {
        for (const field of fields) {
            this.checkField(field, data, trid);
        }
    }

    /**
     * 필드의 값을 검사 한다.
     * 
     * @param {TRID_FIELD} field                                필드 정보
     * @param {any} data                                field의 값을 포함하는 object
     * @param {string} trid                                     tr_id
     * @param {boolean} allowException                          true. Exception 허용
     * @throws {any}
     */
    private checkField(field: TRID_FIELD, data: any, trid: string, allowException: boolean = true): void {
        try {
            const fieldInfo: string = `${trid}: ${field.code}(${field.name})`;
            
            if ((typeof(data[field.code]) == 'undefined') && (field.required)) {
                throw new BaseError({ code: ERROR_CODE.REQUIRED, data: fieldInfo });
            }

            if ((typeof(data.custtype) != 'undefined') && (data.custtype == 'B')) {
                const required: boolean = [ 'personalseckey', 'seq_no', 'phone_number', 'ip_addr', 'gt_uid' ].includes(field.code);
                if ((typeof(data[field.code]) == 'undefined') && required) {
                    throw new BaseError({ code: ERROR_CODE.REQUIRED, data: fieldInfo });
                }
            }

            if (typeof(data[field.code]) != 'undefined') {
                if (typeof(field.enum) != 'undefined') {
                    const isExist: boolean = field.enum.reduce((prev, curr) => {
                        return prev || (curr.code == data[field.code]);
                    }, false);

                    if (isExist == false) {
                        logger.info(JSON.stringify(field.enum));
                        throw new BaseError({ code: ERROR_CODE.NOTALLOWED, data: `${fieldInfo}, value - ${data[field.code]}` });
                    }
                }

                switch (field.type) {
                case 'string':
                    if ([ 'authorization' ].includes(field.code) == false) {
                        if (field.length < data[field.code].length) {
                            throw new BaseError({ code: ERROR_CODE.FIELDERROR, data: `${fieldInfo}, length - ${data[field.code].length}` });
                        }
                    }
                    break;
                case 'number':
                    logger.info(`${trid}, ${field.code}, ${field.type} is number`);
                    break;
                default:
                    logger.error(`${trid} ---------- field type : ${field.code}, ${field.type}`);
                    break;
                }
            }
        } catch(ex) {
            if (allowException) {
                throw ex;
            } else {
                if (ex instanceof BaseError) {
                    logger.info(`---------- field manage, ${trid}: ${ex.code} - ${ex.message}`);
                } else {
                    logger.info(`---------- field manage, ${trid}:, ${JSON.stringify(ex)}`);
                }
            }
        }        
    }

    /**
     * Response Header에서 필드 설정과 실제 데이터의 필드 항목을 비교 한다.
     * 
     * @param {Array<TRID_FIELD>} fields                    Fields의 메타 정보
     * @param {any} data                                 Response Header 데이터
     * @param {string} trid                                 tr_id
     */
    private compareWithMeta(fields: Array<TRID_FIELD>, data: any, trid: string): void {
        const keysSkip: Array<string> = [ 
            'date', 'content-length', 'connection', 'content-type',
            'x-content-type-options', 'x-oracle-dms-ecid', 'x-oracle-dms-rid', 'x-xss-protection' 
        ];

        const keysFields: Array<string> = [];
        const keysData: any = Object.keys(data);
        fields.forEach(field => {
            keysFields.push(field.code);
            if ((field.required) && (keysData.includes(field.code) == false)) {
                logger.error(`${trid} ---------- field required, ${field.code}`);
            }
        });

        keysData.forEach(key => {
            if (keysFields.includes(key) == false) {
                if (keysSkip.includes(key) == false) {
                    logger.info(`${trid} ---------- another field is founded, ${key}`);
                }
            }
        });        
    }
    
    /**
     * Response data의 값을 검사 한다.
     * 
     * @param {string} trid                                 트랜잭션 ID
     * @param {Array<TRID_FIELD>} fields                    필드 목록
     * @param {any} data                                    검사할 데이터 객체
     * @throws {any}
     */
    private checkResponsebody(trid: string, fields: Array<TRID_FIELD> | undefined, data: any): void {
        if (typeof(fields) != 'undefined') {
            fields.forEach(function(field) {
                if ([ 'array', 'object' ].includes(field.type)) {
                    if (Array.isArray(data[field.code])) {
                        data[field.code].forEach(function(dataItem) {
                            this.checkResponsebody(trid, field.fields, dataItem);
                        }.bind(this));
                    } else {
                        this.checkResponsebody(trid, field.fields, data[field.code]);
                    }
                } else {
                    this.checkField(field, data, trid, false);
                }
            }.bind(this));   
        }     
    }
        
    /**
     * 한국투자증권 EFriendExpert의 REST API
     * @description 한국투자증권 EFriendExpert의 REST API를 호출하고 결과를 반환 한다.
     * 
     * @param {Secret} secret                               인증 정보
     * @param {string} trid                                 트랜잭션 ID
     * @param {any} requestHeader                요청 header
     * @param {any} requestBody                    요청 body
     * @param {any} responseHeader              응답 header
     * @returns {BaseError}
     */
    public async request(secret: Secret, trid: string, requestHeader: any, requestBody: any, responseHeader: any | null = null): Promise<any> {
        const response: any = { code: 0, message: 'ok' };
        try {
            const actualName: string = (secret.isActual) ? '실전':'모의';
            const metadata: METADATA = EFriend_JSON_TRID[`${trid}_${actualName}`] || null;;
            if (metadata == null) {
                throw new BaseError({ code: ERROR_CODE.REQUIRED, data: `${trid} (${actualName}) metadata is not exist.` });
            }

            if (metadata.info.domain.startsWith('http') == false) {
                throw new BaseError({ code: ERROR_CODE.REQUIRED, data: `${trid} trid is not supported.` });
            }

            if (trid != 'hashkey') {
                this.checkData(trid, metadata.request.body, requestBody);
            }
            requestHeader = await this.resetRequestHeader(secret, trid, requestHeader, requestBody, responseHeader);

            const method: METHOD = metadata.info.method;
            const requestInfo: string = metadata.info.domain + ((method == 'post') ? metadata.info.url:`${metadata.info.url}?${(new URLSearchParams(requestBody)).toString()}`);
            const requestInit: RequestInit = { 
                method: method, 
                // mode: 'cors', 
                // cache: 'no-cache', 
                headers: requestHeader
            };
            if (method == 'post') {
                requestInit.body = JSON.stringify(requestBody);
            }
            const res: any = await fetch(requestInfo, requestInit);

            const contentType: string | null = res.headers.get('content-type');
            if (contentType == null) {
                throw new BaseError({ code: ERROR_CODE.REQUIRED, data: 'Content type is not exist.' });
            } else if (contentType.startsWith('application/json') == false) {
                throw new BaseError({ code: ERROR_CODE.NOTALLOWED, data: 'Content type is not application/json.' });
            }

            if (res.ok) {
                response.body = await res.json();

                this.checkData(trid, metadata.response.header, res.headers.raw());
                this.compareWithMeta(metadata.response.header, res.headers.raw(), trid);
                response.header = metadata.response.header.reduce((prev, field) => {
                    const value: any = res.headers.get(field.code);
                    if (value != null) {
                        prev[field.code] = value;
                    }
                    return prev;
                }, {});

                this.checkResponsebody(trid, metadata.response.body, response.body);
            } else {
                response.code = 500;
                response.message = `Error: ${res.status} : ${res.statusText}`;
            }
        } catch(err) {
            if (err instanceof BaseError) {
                response.code = (typeof(err.code) == 'undefined') ? '500':ERROR_CODE[err.code];
                response.message = err.message;
                logger.info(JSON.stringify(err));
            } else {
                console.error('Unexpected error', err);
            }
        }
        return response;
    }
}

export default EFriendRestBase;
