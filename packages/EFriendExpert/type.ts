/**
 * type 정의
 * 
 * @file packages/EFriendExpert/type.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2024, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

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
    appkey?: string,                                        //--- Deprecated, 2023.11.30
    appsecret?: string,                                     //--- Deprecated, 2023.11.30
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
    scope?: string,
    token_type?: string,
    expires_in?: number,
    access_token_token_expired?: string
}

export interface Token {
    id: number,
    access_token: string,
    scope?: string,
    token_type: string,
    expires_in: number,
    access_token_token_expired: string,

    secretId: number
}
