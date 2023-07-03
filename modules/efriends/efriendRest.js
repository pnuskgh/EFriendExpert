'use strict'
/**
 * 한국투자증권 EFriendExpert REST API
 *     EFriendExpert.xlsx  >  efriend_json_trid.js  >  efriendRest.js  > efriend.js
 *     EFriendExpert.xlsx  >  efriend_json_trid.js  >  efriendWs.js    > efriend.js
 *     EFriendExpert.xlsx  >  efriend_json_code.js  >  efriendCode.js  > efriend.js
 * 
 * @file modules/efriends/efriendRest.js
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import fetch from 'node-fetch';
import { v1 as uuid } from 'uuid';

import EFriend_JSON_TRID from '../efriends/efriend_json_trid.js';
import EFriendError from '../efriends/efriendError.js';

class EFriendRest {
    /**
     * requestHeader를 재설정하여 반환 한다.
     * 
     * @param {Secret} secret                               인증 정보
     * @param {String} trid                                 트랜잭션 ID
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} requestHeader                      재설정된 요청 header
     * @throws {EFriendError}
     */
    async _resetRequestHeader(secret, trid, requestHeader, requestBody, responseHeader) {
        try {
            const metadata = EFriend_JSON_TRID[`${trid}_${secret.isActual}`];

            //--- requestHeader 값 재설정
            metadata.request.header.forEach(field => {
                const value = requestHeader[field.code] || secret[field.code] || field.default || null;
                if (value != null) {
                    requestHeader[field.code] = value;
                }
            });

            if ((typeof(requestHeader.tr_cont) != 'undefined') && (responseHeader != null)) {
                if ([ 'F', 'M' ].includes(responseHeader.tr_cont)) {
                    requestHeader.tr_cont = 'N';
                }
            }

            if (metadata.info.method == 'post') {
                if ((trid != 'hashkey') && (typeof(requestHeader.hashkey) == 'undefined')) {
                    const header = {
                        "content-type": 'application/json; charset=utf-8',
                        appkey: secret.appkey,
                        appsecret: secret.appsecret
                    };
                    const responseHashkey = await this._request(secret, 'hashkey', header, requestBody);
                    if (responseHashkey.code == 0) {
                        requestHeader.hashkey = responseHashkey.body.HASH;
                    } else {
                        throw new EFriendError(responseHashkey.code, responseHashkey.message);
                    }
                }
            }

            if (typeof(requestHeader.gt_uid) != 'undefined') {
                requestHeader.gt_uid = uuid().replace(/-/g, '');
            }

            //--- requestHeader 값 검사
            metadata.request.header.forEach(function(field) {
                this._checkField(field, requestHeader, trid);
            }.bind(this));
            return requestHeader;
        } catch(ex) {
            throw ex;
        }
    }

    /**
     * data의 값을 검사 한다.
     * 
     * @param {String} trid                                 트랜잭션 ID
     * @param {Array} fields                                필드 목록
     * @param {Object} data                                 검사할 데이터 객체
     * @throws {EFriendError}
     */
    _checkData(trid, fields, data) {
        fields.forEach(function(field) {
            this._checkField(field, data, trid);
        }.bind(this));
    }

    /**
     * 필드의 값을 검사 한다.
     * 
     * @param {Object} field                                필드 정보
     * @param {Object} data                                 field의 값을 포함하는 object
     * @param {String} trid                                 tr_id
     * @throws {EFriendError}
     */
    _checkField(field, data, trid, allowException = true) {
        try {
            const fieldInfo = `${trid}: ${field.code}(${field.name})`;
            
            if ((typeof(data[field.code]) == 'undefined') && (field.required)) {
                throw new EFriendError(404, `${fieldInfo} field is required.`);
            }

            if ((typeof(data.custtype) != 'undefined') && (data.custtype == 'B')) {
                const required = [ 'personalseckey', 'seq_no', 'phone_number', 'ip_addr', 'gt_uid' ].includes(field.code);
                if ((typeof(data[field.code]) == 'undefined') && required) {
                    throw new EFriendError(404, `${fieldInfo} field is required`);
                }
            }

            if (typeof(data[field.code]) != 'undefined') {
                if (typeof(field.enum) != 'undefined') {
                    const isExist = field.enum.reduce((prev, curr) => {
                        return prev || (curr.code == data[field.code]);
                    }, false);

                    if (isExist == false) {
                        console.log(field.enum);
                        throw new EFriendError(405, `${fieldInfo} field is not correct : ${data[field.code]}`);
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
    _compareWithMeta(fields, data, trid) {
        const keysSkip = [ 
            'date', 'content-length', 'connection', 'content-type',
            'x-content-type-options', 'x-oracle-dms-ecid', 'x-oracle-dms-rid', 'x-xss-protection' 
        ];

        const keysFields = [];
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
     * @throws {EFriendExpert_Error}
     */
    _checkResponsebody(trid, fields, data) {
        fields.forEach(function(field) {
            if ([ 'array', 'object' ].includes(field.type)) {
                if (utils.type.isArray(data[field.code])) {
                    data[field.code].forEach(function(dataItem) {
                        this._checkResponsebody(trid, field.fields, dataItem);
                    }.bind(this));
                } else {
                    this._checkResponsebody(trid, field.fields, data[field.code]);
                }
            } else {
                this._checkField(field, data, trid, false);
            }
        }.bind(this));
    }

    /**
     * 한국투자증권 EFriendExpert의 REST API
     * @description 한국투자증권 EFriendExpert의 REST API를 호출하고 결과를 반환 한다.
     * 
     * @param {Secret} secret                               인증 정보
     * @param {String} trid                                 트랜잭션 ID
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async _request(secret, trid, requestHeader, requestBody, responseHeader = null) {
        const response = { code: 0, message: 'ok' };
        try {
            const metadata = EFriend_JSON_TRID[`${trid}_${secret.isActual}`] || null;;
            if (metadata == null) {
                throw new EFriendError(404, `${trid} (${secret.isActual}) metadata is not exist.`);
            }

            if (metadata.info.domain.startsWith('http') == false) {
                throw new EFriendError(406, `${trid} trid is not supported.`);
            }

            if (trid != 'hashkey') {
                this._checkData(trid, metadata.request.body, requestBody);
            }
            requestHeader = await this._resetRequestHeader(secret, trid, requestHeader, requestBody, responseHeader);

            const method = metadata.info.method;
            const requestInfo = metadata.info.domain + ((method == 'post') ? metadata.info.url:`${metadata.info.url}?${(new URLSearchParams(requestBody)).toString()}`);
            const requestInit = { 
                method: method, 
                mode: 'cors', 
                cache: 'no-cache', 
                headers: requestHeader
            };
            if (method == 'post') {
                requestInit.body = JSON.stringify(requestBody);
            }
            const res = await fetch(requestInfo, requestInit);

            const contentType = res.headers.get('content-type');
            if (contentType == null) {
                throw new EFriendError(404, 'Content type is not exist.');
            } else if (contentType.startsWith('application/json') == false) {
                throw new EFriendError(405, 'Content type is not application/json.');
            }

            if (res.ok) {
                response.body = await res.json();

                this._checkData(trid, metadata.response.header, res.headers.raw());
                this._compareWithMeta(metadata.response.header, res.headers.raw(), trid);
                response.header = metadata.response.header.reduce((prev, field) => {
                    const value = res.headers.get(field.code);
                    if (value != null) {
                        prev[field.code] = value;
                    }
                    return prev;
                }, {});
                console.log('response.header', response.header);

                this._checkResponsebody(trid, metadata.response.body, response.body);
            } else {
                response.code = 500;
                response.message = `Error: ${res.status} : ${res.statusText}`;
            }
        } catch(err) {
            response.code = err.code || 500;
            response.message = err.message;
            console.log(err);
        }
        return response;
    }
}

export default EFriendRest;
export { EFriendRest };
