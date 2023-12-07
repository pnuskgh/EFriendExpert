/**
 * 한국투자증권 EFriendExpert type
 * 
 * @file packages/EFriendExpert/efriends/efriend.type.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { Moment } from 'moment';                            //--- 'YYYY-MM-DD HH:mm:ss.SSS ZZ'

export interface EFriendConfig {
    logger?: Console
}

export interface EFriendRestConfig {
    logger?: Console
}

export interface EFriendWsConfig {
    secret: Secret,
    logger?: Console
}

export interface EFRIEND_LIMIT {
    user: Record<'accounts_actual' | 'accounts_simulated', number>,
    rest_api: Record<'api_per_second_actual' | 'api_per_second_simulated' | 'api_tokenP_seconds', number>,
    ws_api: Record<'expiration_period' | 'session' | 'notifications' | 'registrations', number>
}

export interface LIMIT {
    user: Record<string, LIMIT_USER>,
    account: Record<string, LIMIT_ACCOUNT>
}

export interface LIMIT_USER {
    accounts_actual: number,
    accounts_simulated: number,
    ws_api: {
        session: number
    }
}

export interface LIMIT_ACCOUNT {
    rest_api: {
        datetime: string,
        api_per_second_actual: number,
        api_per_second_simulated: number,
        api_tokenP_datetime: Moment,
        requests: Array<string>
    }
    ws_api: {
        notifications: Array<LIMIT_TR_KEY>,
        registrations: Array<LIMIT_TR_KEY>
    }
}

export interface LIMIT_TR_KEY {
    tr_id: string,
    tr_key: string
}

export interface Secret {
    id?: number,
    isActive: boolean,
    isActual: boolean,
    isOrder: boolean,
    isQuery: boolean,
    isPublic: boolean,
    userid: string,
    account: string,
    accountSub: string,
    periodFrom: string,
    periodTo: string,
    feeType?: string,

    grant_type?: string,
    approval_key?: string,
    approval_key_expired?: string,
    appkey: string,                                         //--- Deprecated, 2023.11.30
    appsecret: string,                                      //--- Deprecated, 2023.11.30
    personalseckey?: string,
    custtype: string,
    seq_no?: string,
    mac_address?: string,
    phone_number?: string,
    ip_addr?: string,
    tokens?: Array<Token>,                                  //--- Deprecated, 2023.11.30

    userParentId?: number,
    exchangeParentId?: number,

    appKey?: string,                                        //--- appkey가 없는 경우 appKey 사용
    appSecret?: string                                      //--- appsecret가 없는 경우 appSecret 사용

    access_token?: string,
    token_type?: string,
    expires_in?: number,
    access_token_token_expired?: string
}

export interface Token {
    id: number,
    access_token: string,
    token_type: string,
    expires_in: number,
    access_token_token_expired: string,

    secretId: number
}

export interface AJAX_ERROR {
    code: number,
    message: string
}

export interface WS_KEY {
    iv: string,
    key: string
}

export type WS_BODIES = Array<WS_BODY>;
export type WS_BODY = Record<string, WS_BODY_FIELD>;
export type WS_BODY_FIELD = string | number | null;

export enum TR_TYPE {
    registration = '1',
    release = '2'
}

export type REQUEST_INFO = Record<string, REQUEST_INFO_META>;

export interface REQUEST_INFO_META {
    header: Record<string, string>,
    body: Record<string, string>
}

export interface STANDARD_RESPONSE {
    code:  number
    message:  string
}

export interface WEBSOCKET_HANDLER {
    name: string,
    handler: Function
}
