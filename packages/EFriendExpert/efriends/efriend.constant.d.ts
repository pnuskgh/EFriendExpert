/**
 * 한국투자증권 EFriendExpert TR_ID JSON 정의
 * 
 * @file packages/EFriendExpert/efriends/efriend.constant.d.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { Moment } from 'moment';

export interface EFriend_JSON_TRID {
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
    trid: string,
    name: string,
    version: string,
    method: METHOD,
    domain: DOMAIN_REST | DOMAIN_WS,
    url: string,
    contentType: 'application/json; charset=UTF-8',
    format: 'JSON',
    memo: string,
    idProduct: true,
    description: string,
    verifyDate: Moment | '',
    verifyDate2: Moment | ''                    
};

export type METHOD = 'get' | 'post';
export type DOMAIN_REST = 'https://openapi.koreainvestment.com:9443' | 'https://openapivts.koreainvestment.com:29443';
export type DOMAIN_WS = 'ws://ops.koreainvestment.com:21000' | 'ws://ops.koreainvestment.com:31000';

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
