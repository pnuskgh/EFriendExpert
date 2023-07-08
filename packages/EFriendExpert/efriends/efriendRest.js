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

import { BaseError, ERROR_CODE } from '../common/error';
import { logger } from '../common/logger';
import EFriend_JSON_TRID from '../efriends/efriend_json_trid.js';

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
     * @throws {BaseError}
     */
    async _resetRequestHeader(secret, trid, requestHeader, requestBody, responseHeader) {
        try {
            //--- requestHeader 값 재설정
            const actualName = (secret.isActual) ? '실전':'모의';
            const metadata = EFriend_JSON_TRID[`${trid}_${actualName}`];
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
                    const responseHashkey = await this.request(secret, 'hashkey', header, requestBody);
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
     * @throws {BaseError}
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
     * @throws {BaseError}
     */
    _checkField(field, data, trid, allowException = true) {
        try {
            const fieldInfo = `${trid}: ${field.code}(${field.name})`;
            
            if ((typeof(data[field.code]) == 'undefined') && (field.required)) {
                throw new BaseError({ code: ERROR_CODE.REQUIRED, data: fieldInfo });
            }

            if ((typeof(data.custtype) != 'undefined') && (data.custtype == 'B')) {
                const required = [ 'personalseckey', 'seq_no', 'phone_number', 'ip_addr', 'gt_uid' ].includes(field.code);
                if ((typeof(data[field.code]) == 'undefined') && required) {
                    throw new BaseError({ code: ERROR_CODE.REQUIRED, data: fieldInfo });
                }
            }

            if (typeof(data[field.code]) != 'undefined') {
                if (typeof(field.enum) != 'undefined') {
                    const isExist = field.enum.reduce((prev, curr) => {
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
    async request(secret, trid, requestHeader, requestBody, responseHeader = null) {
        const response = { code: 0, message: 'ok' };
        try {
            const actualName = (secret.isActual) ? '실전':'모의';
            const metadata = EFriend_JSON_TRID[`${trid}_${actualName}`] || null;;
            if (metadata == null) {
                throw new BaseError({ code: ERROR_CODE.REQUIRED, data: `${trid} (${actualName}) metadata is not exist.` });
            }

            if (metadata.info.domain.startsWith('http') == false) {
                throw new BaseError({ code: ERROR_CODE.REQUIRED, data: `${trid} trid is not supported.` });
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
                throw new BaseError({ code: ERROR_CODE.REQUIRED, data: 'Content type is not exist.' });
            } else if (contentType.startsWith('application/json') == false) {
                throw new BaseError({ code: ERROR_CODE.NOTALLOWED, data: 'Content type is not application/json.' });
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
                logger.info(`response.header, ${JSON.stringify(response.header)}`);

                this._checkResponsebody(trid, metadata.response.body, response.body);
            } else {
                response.code = 500;
                response.message = `Error: ${res.status} : ${res.statusText}`;
            }
        } catch(err) {
            response.code = err.code || 500;
            response.message = err.message;
            logger.info(JSON.stringify(err));
        }
        return response;
    }

    /**
     * 실시간 (웹소켓) 접속키 발급
     * @description 실시간 (웹소켓) 접속키 발급
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async Approval(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'Approval', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * Hashkey
     * @description Hashkey
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async hashkey(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'hashkey', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 접근토큰발급(P)
     * @description 접근토큰발급(P)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async tokenP(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'tokenP', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 접근토큰폐기(P)
     * @description 접근토큰폐기(P)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async revokeP(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'revokeP', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 주식주문(현금)
     * @description 주식주문(현금)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTC0802U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTC0802U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 주식주문(현금)
     * @description 주식주문(현금)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTC0801U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTC0801U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 주식주문(현금)
     * @description 주식주문(현금)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTTC0802U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTTC0802U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 주식주문(현금)
     * @description 주식주문(현금)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTTC0801U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTTC0801U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 주식주문(신용)
     * @description 주식주문(신용)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTC0852U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTC0852U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 주식주문(신용)
     * @description 주식주문(신용)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTC0851U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTC0851U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 주식주문(정정취소)
     * @description 주식주문(정정취소)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTC0803U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTC0803U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 주식주문(정정취소)
     * @description 주식주문(정정취소)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTTC0803U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTTC0803U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 주식정정취소가능주문조회
     * @description 주식정정취소가능주문조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTC8036R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTC8036R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 주식일별주문체결조회
     * @description 주식일별주문체결조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTC8001R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTC8001R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 주식일별주문체결조회
     * @description 주식일별주문체결조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async CTSC9115R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'CTSC9115R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 주식일별주문체결조회
     * @description 주식일별주문체결조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTTC8001R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTTC8001R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 주식일별주문체결조회
     * @description 주식일별주문체결조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTSC9115R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTSC9115R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 주식잔고조회
     * @description 주식잔고조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTC8434R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTC8434R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 주식잔고조회
     * @description 주식잔고조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTTC8434R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTTC8434R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 매수가능조회
     * @description 매수가능조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTC8908R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTC8908R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 매수가능조회
     * @description 매수가능조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTTC8908R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTTC8908R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 주식예약주문
     * @description 주식예약주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async CTSC0008U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'CTSC0008U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 주식예약주문정정취소
     * @description 주식예약주문정정취소
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async CTSC0009U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'CTSC0009U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 주식예약주문정정취소
     * @description 주식예약주문정정취소
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async CTSC0013U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'CTSC0013U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 주식예약주문조회
     * @description 주식예약주문조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async CTSC0004R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'CTSC0004R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 주식잔고조회_실현손익
     * @description 주식잔고조회_실현손익
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTC8494R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTC8494R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 신용매수가능조회
     * @description 신용매수가능조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTC8909R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTC8909R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 투자계좌자산현황조회
     * @description 투자계좌자산현황조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async CTRP6548R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'CTRP6548R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 주식현재가 시세
     * @description 주식현재가 시세
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async FHKST01010100(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'FHKST01010100', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 주식현재가 체결
     * @description 주식현재가 체결
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async FHKST01010300(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'FHKST01010300', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 주식현재가 일자별
     * @description 주식현재가 일자별
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async FHKST01010400(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'FHKST01010400', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 주식현재가 호가/예상체결
     * @description 주식현재가 호가/예상체결
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async FHKST01010200(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'FHKST01010200', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 주식현재가 투자자
     * @description 주식현재가 투자자
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async FHKST01010900(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'FHKST01010900', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 주식현재가 회원사
     * @description 주식현재가 회원사
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async FHKST01010600(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'FHKST01010600', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * ELW현재가 시세
     * @description ELW현재가 시세
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async FHKEW15010000(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'FHKEW15010000', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 국내주식기간별시세(일/주/월/년)
     * @description 국내주식기간별시세(일/주/월/년)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async FHKST03010100(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'FHKST03010100', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 국내주식업종기간별시세(일/주/월/년)
     * @description 국내주식업종기간별시세(일/주/월/년)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async FHKUP03500100(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'FHKUP03500100', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 주식현재가 당일시간대별체결
     * @description 주식현재가 당일시간대별체결
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async FHPST01060000(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'FHPST01060000', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 주식현재가 시간외시간별체결
     * @description 주식현재가 시간외시간별체결
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async FHPST02310000(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'FHPST02310000', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 주식현재가 시간외일자별주가
     * @description 주식현재가 시간외일자별주가
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async FHPST02320000(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'FHPST02320000', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 주식당일분봉조회
     * @description 주식당일분봉조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async FHKST03010200(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'FHKST03010200', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 상품기본조회
     * @description 상품기본조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async CTPF1604R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'CTPF1604R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 국내휴장일조회
     * @description 국내휴장일조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async CTCA0903R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'CTCA0903R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 국내기관_외국인 매매종목가집계
     * @description 국내기관_외국인 매매종목가집계
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async FHPTJ04400000(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'FHPTJ04400000', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 종목조건검색 목록조회
     * @description 종목조건검색 목록조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async HHKST03900300(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'HHKST03900300', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 종목조건검색조회
     * @description 종목조건검색조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async HHKST03900400(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'HHKST03900400', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 종목별 프로그램매매추이(체결)
     * @description 종목별 프로그램매매추이(체결)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async FHPPG04650100(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'FHPPG04650100', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 거래량순위
     * @description 거래량순위
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async FHPST01710000(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'FHPST01710000', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 종목별 외인기관 추정가집계
     * @description 종목별 외인기관 추정가집계
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async HHPTJ04160200(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'HHPTJ04160200', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 선물옵션 주문
     * @description 선물옵션 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTO1101U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTO1101U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 선물옵션 주문
     * @description 선물옵션 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async JTCE1001U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'JTCE1001U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 선물옵션 주문
     * @description 선물옵션 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTTO1101U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTTO1101U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 선물옵션 주문
     * @description 선물옵션 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTCE1001U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTCE1001U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 선물옵션 정정취소주문
     * @description 선물옵션 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTO1103U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTO1103U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 선물옵션 정정취소주문
     * @description 선물옵션 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async JTCE1002U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'JTCE1002U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 선물옵션 정정취소주문
     * @description 선물옵션 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTTO1103U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTTO1103U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 선물옵션 정정취소주문
     * @description 선물옵션 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTCE1002U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTCE1002U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 선물옵션 주문체결내역조회
     * @description 선물옵션 주문체결내역조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTO5201R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTO5201R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 선물옵션 주문체결내역조회
     * @description 선물옵션 주문체결내역조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTTO5201R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTTO5201R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 선물옵션 잔고현황
     * @description 선물옵션 잔고현황
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async CTFO6118R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'CTFO6118R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 선물옵션 잔고현황
     * @description 선물옵션 잔고현황
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTFO6118R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTFO6118R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 선물옵션 주문가능
     * @description 선물옵션 주문가능
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTO5105R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTO5105R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 선물옵션 주문가능
     * @description 선물옵션 주문가능
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTTO5105R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTTO5105R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * (야간)선물옵션 주문체결 내역조회
     * @description (야간)선물옵션 주문체결 내역조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async JTCE5005R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'JTCE5005R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * (야간)선물옵션 잔고현황
     * @description (야간)선물옵션 잔고현황
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async JTCE6001R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'JTCE6001R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 선물옵션 시세
     * @description 선물옵션 시세
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async FHMIF10000000(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'FHMIF10000000', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 선물옵션 시세호가
     * @description 선물옵션 시세호가
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async FHMIF10010000(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'FHMIF10010000', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 선물옵션기간별시세(일/주/월/년)
     * @description 선물옵션기간별시세(일/주/월/년)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async FHKIF03020100(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'FHKIF03020100', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTT1002U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTT1002U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTT1006U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTT1006U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTS0308U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTS0308U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTS0307U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTS0307U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTS0202U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTS0202U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTS1005U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTS1005U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTS1002U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTS1002U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTS1001U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTS1001U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTS0305U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTS0305U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTS0304U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTS0304U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTS0311U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTS0311U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTS0310U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTS0310U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTTT1002U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTTT1002U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTTT1001U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTTT1001U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTTS0308U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTTS0308U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTTS0307U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTTS0307U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTTS0202U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTTS0202U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTTS1005U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTTS1005U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTTS1002U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTTS1002U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTTS1001U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTTS1001U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTTS0305U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTTS0305U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTTS0304U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTTS0304U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTTS0311U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTTS0311U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTTS0310U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTTS0310U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTT1004U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTT1004U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTS1003U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTS1003U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTS0309U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTS0309U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTS0302U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTS0302U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTS0306U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTS0306U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTS0312U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTS0312U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTTT1004U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTTT1004U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTTS1003U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTTS1003U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTTS0309U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTTS0309U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTTS0302U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTTS0302U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTTS0306U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTTS0306U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTTS0312U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTTS0312U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 예약주문접수
     * @description 해외주식 예약주문접수
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTT3016U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTT3016U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 예약주문접수
     * @description 해외주식 예약주문접수
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTT3014U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTT3014U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 예약주문접수
     * @description 해외주식 예약주문접수
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTS3013U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTS3013U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 예약주문접수
     * @description 해외주식 예약주문접수
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTTT3016U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTTT3016U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 예약주문접수
     * @description 해외주식 예약주문접수
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTTT3014U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTTT3014U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 예약주문접수
     * @description 해외주식 예약주문접수
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTTS3013U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTTS3013U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 예약주문접수취소
     * @description 해외주식 예약주문접수취소
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTT3017U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTT3017U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 예약주문접수취소
     * @description 해외주식 예약주문접수취소
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTTT3017U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTTT3017U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 미체결내역
     * @description 해외주식 미체결내역
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async JTTT3018R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'JTTT3018R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 미체결내역
     * @description 해외주식 미체결내역
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTS3018R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTS3018R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 미체결내역
     * @description 해외주식 미체결내역
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTTS3018R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTTS3018R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 잔고
     * @description 해외주식 잔고
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async JTTT3012R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'JTTT3012R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 잔고
     * @description 해외주식 잔고
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTS3012R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTS3012R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 잔고
     * @description 해외주식 잔고
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTTS3012R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTTS3012R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 주문체결내역
     * @description 해외주식 주문체결내역
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async JTTT3001R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'JTTT3001R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 주문체결내역
     * @description 해외주식 주문체결내역
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTS3035R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTS3035R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 주문체결내역
     * @description 해외주식 주문체결내역
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTTS3035R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTTS3035R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 체결기준현재잔고
     * @description 해외주식 체결기준현재잔고
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async CTRP6504R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'CTRP6504R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 체결기준현재잔고
     * @description 해외주식 체결기준현재잔고
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async VTRP6504R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'VTRP6504R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 예약주문조회
     * @description 해외주식 예약주문조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTT3039R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTT3039R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 매수가능금액조회
     * @description 해외주식 매수가능금액조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async JTTT3007R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'JTTT3007R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 매수가능금액조회
     * @description 해외주식 매수가능금액조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTS3007R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTS3007R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 미국주간주문
     * @description 해외주식 미국주간주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTS6036U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTS6036U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 미국주간주문
     * @description 해외주식 미국주간주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTS6037U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTS6037U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 미국주간정정취소
     * @description 해외주식 미국주간정정취소
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTS6038U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTS6038U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 기간손익
     * @description 해외주식 기간손익
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async TTTS3039R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'TTTS3039R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 현재체결가
     * @description 해외주식 현재체결가
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async HHDFS00000300(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'HHDFS00000300', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 기간별시세
     * @description 해외주식 기간별시세
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async HHDFS76240000(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'HHDFS76240000', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 종목/지수/환율기간별시세(일/주/월/년)
     * @description 해외주식 종목/지수/환율기간별시세(일/주/월/년)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async FHKST03030100(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'FHKST03030100', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식조건검색
     * @description 해외주식조건검색
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async HHDFS76410000(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'HHDFS76410000', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외결제일자조회
     * @description 해외결제일자조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async CTOS5011R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'CTOS5011R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외주식 현재가상세
     * @description 해외주식 현재가상세
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async HHDFS76200200(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'HHDFS76200200', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외선물옵션 주문
     * @description 해외선물옵션 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async OTFM3001U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'OTFM3001U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외선물옵션 정정취소주문
     * @description 해외선물옵션 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async OTFM3002U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'OTFM3002U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외선물옵션 정정취소주문
     * @description 해외선물옵션 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async OTFM3003U(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'OTFM3003U', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외선물옵션 당일주문내역조회
     * @description 해외선물옵션 당일주문내역조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async OTFM3116R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'OTFM3116R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외선물옵션 미결제내역조회(잔고)
     * @description 해외선물옵션 미결제내역조회(잔고)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async OTFM1412R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'OTFM1412R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외선물옵션 주문가능조회
     * @description 해외선물옵션 주문가능조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async OTFM3304R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'OTFM3304R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외선물옵션 기간계좌손익 일별
     * @description 해외선물옵션 기간계좌손익 일별
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async OTFM3118R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'OTFM3118R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외선물옵션 일별 체결내역
     * @description 해외선물옵션 일별 체결내역
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async OTFM3122R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'OTFM3122R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외선물옵션 예수금현황
     * @description 해외선물옵션 예수금현황
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async OTFM1411R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'OTFM1411R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외선물옵션 일별 주문내역
     * @description 해외선물옵션 일별 주문내역
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async OTFM3120R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'OTFM3120R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외선물옵션 기간계좌거래내역
     * @description 해외선물옵션 기간계좌거래내역
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async OTFM3114R(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'OTFM3114R', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외선물종목상세
     * @description 해외선물종목상세
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async HHDFC55010100(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'HHDFC55010100', requestHeader, requestBody, responseHeader);
    }                
                    
    /**
     * 해외선물종목현재가
     * @description 해외선물종목현재가
     * 
     * @param {Secret} secret                               인증 정보
     * @param {Object} requestHeader                        요청 header
     * @param {Object} requestBody                          요청 body
     * @param {Object} responseHeader                       응답 header
     * @returns {Object} Response
     */
    async HHDFC55010000(secret, requestHeader, requestBody, responseHeader = null) {
        return await this.request(secret, 'HHDFC55010000', requestHeader, requestBody, responseHeader);
    }                
}

export default EFriendRest;
export { EFriendRest };
