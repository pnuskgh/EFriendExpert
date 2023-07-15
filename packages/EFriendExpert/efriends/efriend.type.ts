/**
 * 한국투자증권 EFriendExpert type
 * 
 * @file packages/EFriendExpert/efriends/efriend.type.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

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
    user?: Record<'accounts_actual' | 'accounts_simulated', number>,
    rest_api: Record<'api_per_second_actual' | 'api_per_second_simulated', number>,
    datetime?: string,
    ws_api: Record<'expiration_period' | 'session' | 'notifications' | 'registrations', number>
}

export interface Secret {
    id: number,
    isActual: boolean,
    isOrder: boolean,
    isQuery: boolean,
    isPublic: boolean,
    userid: string,
    acount: string,
    acountSub: string,
    periodFrom: string,
    periodTo: string,
    feeType: string,

    grant_type: string,
    approval_key?: string,
    approval_key_expired?: string,
    appkey: string,
    appsecret: string,
    personalseckey?: string,
    custtype: string,
    seq_no?: string,
    mac_address?: string,
    phone_number?: string,
    ip_addr?: string,
    tokens: Array<Token>,

    userParentId: number,
    exchangeParentId: number
}

export interface Token {
    id: number,
    access_token: string,
    token_type: string,
    expires_in: number,
    access_token_token_expired: string

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

export interface WS_SAVE {
    tr_id: string,
    tr_type: string,
    tr_key: string
}

export interface LIMIT_WS_ITEM {
    maxCount: number,
    count: number
}
export interface LIMIT_WS {
    session: LIMIT_WS_ITEM,
    notification: LIMIT_WS_ITEM,
    connect: LIMIT_WS_ITEM
}
