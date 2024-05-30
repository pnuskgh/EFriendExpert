/**
 * LS증권 EBest TR_ID JSON 정의
 * 
 * @file packages/EFriendExpert/ebest/ebest.constant.d.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2024, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { Moment } from 'moment';

export interface EBest_JSON_TRID {
    [key: string]: METADATA
}

export interface METADATA {
    info: TRID_INFO,
    request: {
        header: Array<TRID_FIELD>,ß
        body: Array<TRID_FIELD>
    },
    response: {
        header: Array<TRID_FIELD>,
        body: Array<TRID_FIELD>
    }
}

export type TRID_INFO = {
    category: string,
    subCategory: string,
    name: string,
    method: METHOD,
    url: string,
    format: 'JSON',
    contentType: 'application/json; charset=UTF-8',
    countPerSecond: number | '',
    verifyDate: Moment | '',
    downloadDate: Moment | ''                    
    memo: string,
    domain: DOMAIN_REST | DOMAIN_WS,
    trid: string,
    isProduct: boolean,
    description: string,
};

export type METHOD = 'get' | 'post';
//--- pppqqq: 2024-06-01 이후 삭제할 것
export type DOMAIN_REST = 'https://openapi.ls-sec.co.kr:8080' | 'https://openapi.ebestsec.co.kr:8080';
// export type DOMAIN_REST = 'https://openapi.ls-sec.co.kr:8080';
export type DOMAIN_WS = 'wss://openapi.ls-sec.co.kr:9443' | 'wss://openapi.ls-sec.co.kr:29443';

export type TRID_FIELD = {
    code: string,
    name: string,
    type: 'string' | 'number' | 'object' | 'array',
    required: boolean,
    length: number,
    description: Array<string>,
    default: string,
    enum?: Array<{ code: string, name: string }>
    fields?: Array<TRID_FIELD>
};
