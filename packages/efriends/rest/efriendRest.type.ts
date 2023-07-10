/*
 * /packages/efriends/rest/efriendRest.type.ts
 * 
 * @version 1.0.0
 * @license GNU General Public License v3.0
 * @author dalcon10028 <dalcon10280@gmail.com>
 */

import { CUSTTYPE, TR_CONT } from "./efriendRest.constant";
import { FetchResponseHeader, HttpMethod } from "../core/utils/fetch.util";

export interface Secret {
    mode: 'real' | 'virtual',                                     //--- real투자, 모의투자
    appKey: string,                                         //--- AppKey
    appSecret: string,                                      //--- AppSecret
    site?: number,                                           //--- Site ID
    user?: number,                                           //--- User ID
    exchange?: number,                                       //--- Exchang (거래소) ID
    userId?: string,                                         //--- 사용자 ID
    account?: string,                                         //--- 계정
    accountSub?: string,                                      //--- 계정 상세
    periodFrom?: Date,                                     //--- 유효기간 시작일시
    periodTo?: Date,                                       //--- 유효기간 종료일시
    feeType?: string,                                       //--- 뱅키스, 영업점
    tokens?: Array<Token>
}

export interface Token {
    token: number                                           //--- Token ID
    access_token: string,                                   //--- 접근 토큰
    token_type: string,                                  //--- 접근 토큰 유형
    expires_in: number,                                     //--- 접근 토큰 유효기간 (초)
    access_token_token_expired: Date,                     //--- 접근 토큰 만료일
}

export type MetaData = {
    info: TridInfo,
    request: {
        header: Array<TridField>,
        body: Array<TridField>
    },
    response: {
        header: Array<TridField>,
        body: Array<TridField>
    }
};

export type TridInfo = {
    trid: string,
    name: string,
    version: string,
    method: HttpMethod,
    url: string,
    format: 'JSON',
    memo: string,
    idProduct: true,
    description: string,
    verifyDate: Date | ''                                 
};

export type TridField = {
    code: string,
    name: string,
    type: 'string' | 'number' | 'object' | 'array',
    required: boolean,
    length: number,
    description: Array<string>,
    default: string,
    enum: Array<{ code: string, name: string }>
    fields?: Array<TridField>
};

export interface RequestHeader extends Record<string, string | undefined> {
    authorization?: string,
    appkey?: string,
    appsecret?: string
    personalseckey?: string,
    tr_id?: string,
    tr_cont?: TR_CONT,
    custtype?: CUSTTYPE,
    seq_no?: string,
    mac_address?: string,
    phone_number?: string,
    ip_addr?: string,
    hashkey?: string,
    gt_uid?: string
}

export interface Request {
    method: HttpMethod;
    mode: 'cors';
    cache: 'no-cache';
    headers: RequestHeader
    body: string
}

export interface Response<T> {
    code: number,
    message: string,
    header?: FetchResponseHeader,
    body?: T
}