/**
 * LS증권 EBest REST API
 * 
 * @file packages/EFriendExpert/ebest/ebestRestBase.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2024, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import moment from 'moment';                                //--- format : YYYYMMDDHHmmss.SSS ZZ - 20191220172919.083 +0900
import fetch, { RequestInit } from 'node-fetch';

import { BaseError, ERROR_CODE } from '../common/error/index.js';
import EBest_JSON_TRID, { METADATA, METHOD, TRID_FIELD } from './ebest.constant.js';
import { Secret, EBestRestConfig } from './ebest.type.js';
// import { limit } from './ebest.js';

export class EBestRestBase {
    private readonly logger: Console;
    private isDomainChanged: boolean;                       //--- pppqqq: 2024-06-01 이후 삭제할 것

    constructor({ logger }: EBestRestConfig) {
        this.logger = logger ?? console;

        const today: string = moment().format('YYYYMMDD');  //--- pppqqq: 2024-06-01 이후 삭제할 것
        this.isDomainChanged = (today < '20240601');        //--- pppqqq: 2024-06-01 이후 삭제할 것
    }
    
    /**
     * requestHeader를 재설정하여 반환 한다.
     * 
     * @param {any} secret                                  인증 정보
     * @param {string} trid                                 트랜잭션 ID
     * @param {any} requestHeader                           요청 header
     * @param {any} responseHeader                          응답 header
     * @returns {any}                                       재설정된 요청 header
     * @throws {any}
     */
    private async resetRequestHeader(secret: any, trid: string, requestHeader: any, responseHeader: any | null = null): Promise<any> {
        try {
            const actualName: string = (secret.isActual) ? '실전':'모의';
            const metadata: METADATA = EBest_JSON_TRID[`${trid}_${actualName}`];
            metadata.request.header.forEach(field => {
                const value: any = requestHeader[field.code] ?? secret[field.code] ?? field.default ?? null;
                if (value != null) {
                    requestHeader[field.code] = value;
                }

                if (field.code == 'authorization') {
                    requestHeader[field.code] = `${secret.token_type} ${secret.access_token}`;
                }
                if (field.code == 'tr_cd') {
                    requestHeader[field.code] = requestHeader.tr_cd || trid;
                }
                if (field.code == 'tr_cont') {
                    requestHeader[field.code] = requestHeader.tr_cont || 'N';
                }
            });

            if ((typeof(requestHeader.tr_cont) != 'undefined') && (responseHeader != null)) {
                requestHeader.tr_cont = responseHeader.tr_cont;
                requestHeader.tr_cont_key = responseHeader.tr_cont_key;
            }

            requestHeader['content-type'] = requestHeader['content-type'] || 'application/json; charset=utf-8';
            // if ((typeof(requestHeader['content-type']) == 'undefined') || (requestHeader['content-type'] == '')) {
            //     requestHeader['content-type'] = 'application/json; charset=utf-8';
            // }

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
                            this.logger.info(`${field.code} (${field.name}) : ${JSON.stringify(field.enum)}, [${data[field.code]}]`);
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
                    this.logger.info(`---------- field manage, ${trid}: ${ex.code} - ${ex.message}, data - ${JSON.stringify(ex.data)}`);
                } else {
                    this.logger.info(`---------- field manage, ${trid}:, ${JSON.stringify(ex)}`);
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
     * @param {any} responseHeader                          응답 header
     * @returns {BaseError}
     */
    public async request(secret: Secret, trid: string, requestHeader: any, requestBody: any, responseHeader: any | null = null): Promise<any> {
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

            if (metadata.info.domain.startsWith('http') == false) {
                throw new BaseError({ code: ERROR_CODE.REQUIRED, data: `${trid} trid is not supported.` });
            }

            //--- pppqqq: 2024-06-01 이후 삭제할 것
            if (this.isDomainChanged) {
                metadata.info.domain = 'https://openapi.ebestsec.co.kr:8080';
            }

            this.checkData(trid, metadata.request.body, requestBody);
            requestHeader = await this.resetRequestHeader(secret, trid, requestHeader, responseHeader);

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

                this.checkData(trid, metadata.response.body, response.body);
            } else {
                response.code = 500;
                response.message = `Error: ${res.status} : ${res.statusText}`;
                this.logger.info(JSON.stringify(response));
            }
        } catch(err) {
            console.error(err);
            if (err instanceof BaseError) {
                //--- ToDo: response.code에 숫자 코드를 반환하는 방안을 검토할 것
                response.code = (typeof(err.code) == 'undefined') ? '500':ERROR_CODE[err.code];
                response.message = err.message;
                this.logger.info(JSON.stringify(err));
            } else {
                console.error('Unexpected error', err);
            }
        }
        return response;
    }
}

export default EBestRestBase;
