/**
 * LS증권 EBest REST API
 * 
 * @file packages/EFriendExpert/ebest/ebestRestBase.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2024, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import fetch, { RequestInit } from 'node-fetch';

import { BaseError, ERROR_CODE } from '../common/error/index.js';
import EBest_JSON_TRID, { METADATA, METHOD, TRID_FIELD } from './ebest.constant.js';
import { Secret, EBestRestConfig } from './ebest.type.js';
// import { limit } from './ebest.js';

export class EBestRestBase {
    private readonly logger: Console;

    constructor({ logger }: EBestRestConfig) {
        this.logger = logger ?? console;
    }
    
    /**
     * requestHeader를 재설정하여 반환 한다.
     * 
     * @param {any} secret                                  인증 정보
     * @param {METADATA} metadata                                 트랜잭션 ID
     * @param {any} requestHeader                           요청 header
     * @param {any} responsePrev                            이전 응답
     * @returns {any}                                       재설정된 요청 header
     * @throws {any}
     */
    private resetRequestHeader(secret: any, metadata: METADATA, requestHeader: any, responsePrev: any | null = null): Promise<any> {
        try {
            // const actualName: string = (secret.isActual) ? '실전':'모의';
            // const metadata: METADATA = EBest_JSON_TRID[`${trid}_${actualName}`];
            const responseHeader = ((responsePrev == null) || (typeof responsePrev.header == 'undefined')) ? null : responsePrev.header;
            metadata.request.header.forEach(field => {
                const value: any = requestHeader[field.code] ?? secret[field.code] ?? field.default ?? null;
                if (value != null) {
                    requestHeader[field.code] = value;
                }

                if (field.code == 'authorization') {
                    requestHeader[field.code] = `${secret.token_type} ${secret.access_token}`;
                }
                if (field.code == 'tr_cd') {
                    requestHeader[field.code] = requestHeader[field.code] || metadata.info.trid;
                }
                if (field.code == 'tr_cont') {
                    requestHeader[field.code] = requestHeader[field.code] || 'N';
                    if ((responseHeader != null) && 
                        (typeof responseHeader[field.code] != 'undefined')) {
                        requestHeader[field.code] = responseHeader[field.code];
                    }                    
                }
                if (field.code == 'tr_cont_key') {
                    requestHeader[field.code] = requestHeader[field.code] || '';
                    if ((responseHeader != null) && 
                        (typeof responseHeader[field.code] != 'undefined')) {
                        requestHeader[field.code] = responseHeader[field.code];
                    }                    
                }
                if (field.code == 'mac_address') {
                    requestHeader[field.code] = requestHeader[field.code] || '';
                }
            });
            requestHeader['content-type'] = requestHeader['content-type'] || 'application/json; charset=utf-8';

            //--- requestHeader 값 검사
            // metadata.request.header.forEach(function(field) {
            //     this.checkField(field, requestHeader, trid);
            // }.bind(this));
            this.checkData(metadata.info.trid, metadata.request.header, requestHeader);
            return requestHeader;
        } catch(ex) {
            throw ex;
        }
    }

    /**
     * requestBody를 재설정하여 반환 한다.
     * 
     * @param {METADATA} metadata                           Metadata
     * @param requestBody                                   요청 body
     * @param responsePrev                                  이전 응답
     * @returns {any}                                       재설정된 요청 body
     * @throws {any}
     */
    private resetRequestBody(metadata: METADATA, requestBody: any, _responsePrev: any) {
        try {
            metadata.request.body.forEach(field => {
                const value: any = requestBody[field.code] ?? field.default ?? null;
                if (value != null) {
                    requestBody[field.code] = value;
                }
            });

            if (metadata.info.trid != 'hashkey') {
                this.checkData(metadata.info.trid, metadata.request.body, requestBody);
            }
            return requestBody;
        } catch(ex) {
            throw ex;
        }
    }

    /**
     * data의 값을 검사 한다.
     * 
     * @param {string} trid                                 트랜잭션 ID
     * @param {Array<TRID_FIELD>} fields                    필드 목록
     * @param {any} data                                    검사할 데이터 객체
     * @throws {any}
     */
    private checkData(trid: string, fields: Array<TRID_FIELD> | undefined, data: any): void {
        if (typeof(fields) != 'undefined') {
            for (let idx = 0; idx < fields.length; idx++) {
                const field = fields[idx];
                
                if ([ 'array', 'object' ].includes(field.type)) {
                    if (Array.isArray(data[field.code])) {
                        data[field.code].forEach(function(dataItem) {
                            this.checkData(trid, field.fields, dataItem);
                        }.bind(this));
                    } else {
                        this.checkData(trid, field.fields, data[field.code]);
                    }
                } else {
                    this.checkField(field, data, trid, false);
                }
            }  
        }     
    }

    /**
     * 필드의 값을 검사 한다.
     * 
     * @param {TRID_FIELD} field                            필드 정보
     * @param {any} data                                    field의 값을 포함하는 object
     * @param {string} trid                                 tr_id
     * @param {boolean} allowException                      true. Exception 허용
     * @throws {any}
     */
    private checkField(field: TRID_FIELD, data: any, trid: string, allowException: boolean = true): void {
        try {
            const fieldInfo: string = `${trid}: ${field.code}(${field.name})`;
            
            if ((typeof(data[field.code]) == 'undefined') && (field.required)) {
                throw new BaseError({ code: ERROR_CODE.REQUIRED, data: fieldInfo });
            }

            if (typeof(data[field.code]) != 'undefined') {
                if (typeof(field.enum) != 'undefined') {
                    // if ([ 'ctx_area_fk100', 'ctx_area_nk100', 'ctx_area_fk', 'ctx_area_nk', 'rt_cd' ].includes(field.code.toLowerCase()) == false) {
                        const isExist: boolean = field.enum.reduce((prev, curr) => {
                            return prev || (curr.code == data[field.code]);
                        }, false);

                        if (isExist == false) {
                            this.logger.error(`${field.code} (${field.name}) : ${JSON.stringify(field.enum)}, [${data[field.code]}]`);
                            throw new BaseError({ code: ERROR_CODE.NOTALLOWED, data: `${fieldInfo}, value - [${data[field.code]}]` });
                        }
                    // }
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
                    // this.logger.info(`${trid}, ${field.code} is number`);
                    break;
                // case 'object':
                //     break;
                default:
                    this.logger.error(`${trid} ---------- field type not found : ${field.code}, ${field.type}`);
                    break;
                }
            }
        } catch(ex) {
            console.error(ex);
            if (allowException) {
                throw ex;
            } else {
                if (ex instanceof BaseError) {
                    this.logger.error(`---------- field manage, ${trid}: ${ex.code} - ${ex.message}, data - ${JSON.stringify(ex.data)}`);
                } else {
                    this.logger.error(`---------- field manage, ${trid}:, ${JSON.stringify(ex)}`);
                }
            }
        }        
    }

    /**
     * Response Header에서 필드 설정과 실제 데이터의 필드 항목을 비교 한다.
     * 
     * @param {Array<TRID_FIELD>} fields                    Fields의 메타 정보
     * @param {any} data                                    Response Header 데이터
     * @param {string} trid                                 tr_id
     */
    private compareWithMeta(fields: Array<TRID_FIELD>, data: any, trid: string): void {
        const keysSkip: Array<string> = [ 
            'connection', 'access-control-expose-headers',
            'content-length', 'content-type', 'date'
            // 'x-content-type-options', 'x-oracle-dms-ecid', 'x-oracle-dms-rid', 'x-xss-protection' ,
            // 'keep-alive', 
        ];

        const keysFields: Array<string> = [];
        const keysData: any = Object.keys(data);
        fields.forEach(field => {
            keysFields.push(field.code);
            if ((field.required) && (keysData.includes(field.code) == false)) {
                this.logger.error(`${trid} ---------- field required, ${field.code}`);
            }
        });

        keysData.forEach(key => {
            if (keysFields.includes(key) == false) {
                if (keysSkip.includes(key) == false) {
                    this.logger.error(`${trid} ---------- another field is founded, ${key}`);
                }
            }
        });        
    }
       
    /**
     * LS증권 EBest REST API
     * @description LS증권 EBest REST API를 호출하고 결과를 반환 한다.
     * 
     * @param {Secret} secret                               인증 정보
     * @param {string} trid                                 트랜잭션 ID
     * @param {any} requestHeader                           요청 header
     * @param {any} requestBody                             요청 body
     * @param {any} responsePrev                            이전 응답
     * @returns {BaseError}
     */
    public async request(secret: Secret, trid: string, requestHeader: any, requestBody: any, 
                         responsePrev: any | null = null): Promise<any> {
        const response: any = { code: 0, message: 'ok' };
        try {
            // if (await limit.increaseRestApi(secret, trid) == false) {
            //     throw new BaseError({ code: ERROR_CODE.NOTALLOWED, data: `${secret.account} account limit is over.` });
            // }

            const actualName: string = (secret.isActual) ? '실전':'모의';
            const metadata: METADATA = EBest_JSON_TRID[`${trid}_${actualName}`] ?? null;;
            if (metadata == null) {
                throw new BaseError({ code: ERROR_CODE.REQUIRED, data: `${trid} (${actualName}) metadata is not exist.` });
            }

            if (metadata.info.trid != trid) {
                throw new BaseError({ code: ERROR_CODE.REQUIRED, data: `${trid} is not mismatch : ${metadata.info.trid}.` });
            }

            if (metadata.info.domain.startsWith('http') == false) {
                throw new BaseError({ code: ERROR_CODE.REQUIRED, data: `${trid} trid is not supported.` });
            }

            requestBody = this.resetRequestBody(metadata, requestBody, responsePrev);
            requestHeader = this.resetRequestHeader(secret, metadata, requestHeader, responsePrev);

            const method: METHOD = metadata.info.method;
            const requestInfo: string = metadata.info.domain + ((method == 'post') ? metadata.info.url:`${metadata.info.url}?${(new URLSearchParams(requestBody)).toString()}`);
            const requestInit: RequestInit = { 
                method: method, 
                // mode: 'cors', 
                // cache: 'no-cache', 
                headers: requestHeader
            };
            if (method == 'post') {
                if (-1 < requestHeader['content-type'].indexOf('www-form-urlencoded')) {
                    const dataBody: Array<string> = [];
                    Object.keys(requestBody).forEach((key) => {
                        dataBody.push(`${key}=${requestBody[key]}`);
                    });
                    requestInit.body = dataBody.join('&');
                } else {
                    requestInit.body = JSON.stringify(requestBody);
                }
            }
            console.log('requestInfo', requestInfo);
            console.log('requestInit', requestInit);
            const res: any = await fetch(requestInfo, requestInit);

            const contentType: string | null = res.headers.get('content-type');
            if (contentType == null) {
                throw new BaseError({ code: ERROR_CODE.REQUIRED, data: 'Content type is not exist.' });
            } else if (contentType.startsWith('application/json') == false) {
                throw new BaseError({ code: ERROR_CODE.NOTALLOWED, data: 'Content type is not application/json.' });
            }

            if (res.ok) {                                   //--- res.status : 200, res.statusText : 'OK'
                response.body = await res.json();
                console.log(`rsp :: ${response.body.rsp_cd || ''} : ${response.body.rsp_msg || ''}`);
                if (Object.keys(response.body).length == 2) {
                    //--- { rsp_cd: '03181', rsp_msg: '주문가격이 하한가 미달입니다.' }
                    response.code = 500;
                    response.message = `Error: ${response.body.rsp_cd || ''} : ${response.body.rsp_msg || ''}`;
                    this.logger.error(JSON.stringify(response));
                } else {
                    this.checkData(trid, metadata.response.header, res.headers.raw());
                    this.compareWithMeta(metadata.response.header, res.headers.raw(), trid);
                    response.header = metadata.response.header.reduce((prev, field) => {
                        const value: any = res.headers.get(field.code);
                        if (value != null) {
                            prev[field.code] = value;
                        }
                        return prev;
                    }, {});

                    this.checkData(trid, metadata.response.body, response.body);
                }
            } else {
                response.code = 500;
                response.message = `Error: ${res.status} : ${res.statusText}`;
                this.logger.error(JSON.stringify(response));
            }
        } catch(ex) {
            console.error(ex);
            if (ex instanceof BaseError) {
                //--- ToDo: response.code에 숫자 코드를 반환하는 방안을 검토할 것
                response.code = (typeof(ex.code) == 'undefined') ? '500':ERROR_CODE[ex.code];
                response.message = ex.message;
                this.logger.error(JSON.stringify(ex));
            } else {
                console.error('Unexpected error', ex);
            }
        }
        return response;
    }

    public hasNext(response) {
        try {
            return ((response.code == 0) && (response.header.tr_cont == 'Y'));
        } catch (ex) {
            console.error(ex);
            return false;
        }
    }
}

export default EBestRestBase;
