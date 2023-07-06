/**
 * 한국투자증권 EFriendExpert REST API의 Declaration Files (~.d.ts)
 * 
 * @file modules/efriends/efriendRest.d.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

export interface Secret {
    site: number,                                           //--- Site ID
    user: number,                                           //--- User ID

    exchange: number,                                       //--- Exchang (거래소) ID
    isActual: IsActual,                                     //--- 실전투자, 모의투자
    userid: string,                                         //--- 사용자 ID
    acount: string,                                         //--- 계정
    acountSub: string,                                      //--- 계정 상세
    appkey: string,                                         //--- AppKey
    appsecret: string,                                      //--- AppSecret
    periodFrom: Moment,                                     //--- 유효기간 시작일시
    periodTo: Moment,                                       //--- 유효기간 종료일시
    feeType: FeeType,                                       //--- 뱅키스, 영업점
    isOrder: IsOrder,                                       //--- 주문용, 조회용
    tokens?: Array<Token>
}

type IsActual = '실전' | '모의';
type FeeType = '뱅키스' | '영업점';
type IsOrder = '주문용' | '조회용';

export interface Token {
    token: number                                           //--- Token ID
    access_token: string,                                   //--- 접근 토큰
    token_type: TokenType,                                  //--- 접근 토큰 유형
    expires_in: number,                                     //--- 접근 토큰 유효기간 (초)
    access_token_token_expired: Moment,                     //--- 접근 토큰 만료일
}

type TokenType = 'Bearer';

// export interface REQUEST_HEADER {
//     contentType: 'application/json; charset=utf-8',
//     authorization: string,
//     appkey: string,
//     appsecret: string
//     personalseckey?: string,
//     tr_id: string,
//     tr_cont: REQUEST_HEADER_TR_CONT,
//     custtype: REQUEST_HEADER_CUSTTYPE,
//     seq_no?: string,
//     mac_address?: string,
//     phone_number?: string,
//     ip_addr?: string,
//     hashkey?: string,
//     gt_uid?: string
// }

export interface REQUEST_HEADER {
    contentType?: 'application/json; charset=utf-8',
    authorization?: string,
    appkey?: string,
    appsecret?: string
    personalseckey?: string,
    tr_id?: string,
    tr_cont?: REQUEST_HEADER_TR_CONT,
    custtype?: REQUEST_HEADER_CUSTTYPE,
    seq_no?: string,
    mac_address?: string,
    phone_number?: string,
    ip_addr?: string,
    hashkey?: string,
    gt_uid?: string  
}

export enum REQUEST_HEADER_TR_CONT {
    first = ' ',
    next = 'N'
}

export enum REQUEST_HEADER_CUSTTYPE {
    individual = 'P',
    corporation = 'B'
}

export interface REQUEST_BODY {
    [name: string]: string
}

export interface RESPONSE {
    code: number | string,
    message: string,
    header?: RESPONSE_HEADER,
    body?: RESPONSE_BODY
}

export interface RESPONSE_HEADER {
    // contentType: 'application/json; charset=utf-8',
    contentType: string,
    tr_id: string,
    // tr_cont: RESPONSE_HEADER_TR_CONT,
    tr_cont: string,
    gt_uid?: string
}

export interface RESPONSE_BODY {
    [name: string]: string
}


export interface APPROVAL_REQUEST_HEADER {
    'content-type'?:  string
}


export interface HASHKEY_REQUEST_HEADER {
    'content-type'?:  string
    appkey?:  string
    appsecret?:  string
}


export interface TOKENP_REQUEST_HEADER {
}


export interface REVOKEP_REQUEST_HEADER {
}

export type TTTC0802U_REQUEST_HEADER_TR_ID = 'TTTC0802U' | 'TTTC0801U' | 'VTTC0802U' | 'VTTC0801U';
export type TTTC0802U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTC0802U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTC0802U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTC0802U_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTC0802U_REQUEST_HEADER_TR_CONT
    custtype?:  TTTC0802U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTC0801U_REQUEST_HEADER_TR_ID = 'TTTC0802U' | 'TTTC0801U' | 'VTTC0802U' | 'VTTC0801U';
export type TTTC0801U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTC0801U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTC0801U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTC0801U_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTC0801U_REQUEST_HEADER_TR_CONT
    custtype?:  TTTC0801U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTC0802U_REQUEST_HEADER_TR_ID = 'TTTC0802U' | 'TTTC0801U' | 'VTTC0802U' | 'VTTC0801U';
export type VTTC0802U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTC0802U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTC0802U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTTC0802U_REQUEST_HEADER_TR_ID
    tr_cont?:  VTTC0802U_REQUEST_HEADER_TR_CONT
    custtype?:  VTTC0802U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTC0801U_REQUEST_HEADER_TR_ID = 'TTTC0802U' | 'TTTC0801U' | 'VTTC0802U' | 'VTTC0801U';
export type VTTC0801U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTC0801U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTC0801U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTTC0801U_REQUEST_HEADER_TR_ID
    tr_cont?:  VTTC0801U_REQUEST_HEADER_TR_CONT
    custtype?:  VTTC0801U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTC0852U_REQUEST_HEADER_TR_ID = 'TTTC0852U' | 'TTTC0851U';
export type TTTC0852U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTC0852U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTC0852U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTC0852U_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTC0852U_REQUEST_HEADER_TR_CONT
    custtype?:  TTTC0852U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTC0851U_REQUEST_HEADER_TR_ID = 'TTTC0852U' | 'TTTC0851U';
export type TTTC0851U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTC0851U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTC0851U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTC0851U_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTC0851U_REQUEST_HEADER_TR_CONT
    custtype?:  TTTC0851U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTC0803U_REQUEST_HEADER_TR_ID = 'TTTC0803U' | 'VTTC0803U';
export type TTTC0803U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTC0803U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTC0803U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTC0803U_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTC0803U_REQUEST_HEADER_TR_CONT
    custtype?:  TTTC0803U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTC0803U_REQUEST_HEADER_TR_ID = 'TTTC0803U' | 'VTTC0803U';
export type VTTC0803U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTC0803U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTC0803U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTTC0803U_REQUEST_HEADER_TR_ID
    tr_cont?:  VTTC0803U_REQUEST_HEADER_TR_CONT
    custtype?:  VTTC0803U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTC8036R_REQUEST_HEADER_TR_ID = 'TTTC8036R';
export type TTTC8036R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTC8036R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTC8036R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTC8036R_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTC8036R_REQUEST_HEADER_TR_CONT
    custtype?:  TTTC8036R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTC8001R_REQUEST_HEADER_TR_ID = 'TTTC8001R' | 'CTSC9115R' | 'VTTC8001R' | 'VTSC9115R';
export type TTTC8001R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTC8001R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTC8001R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTC8001R_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTC8001R_REQUEST_HEADER_TR_CONT
    custtype?:  TTTC8001R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type CTSC9115R_REQUEST_HEADER_TR_ID = 'TTTC8001R' | 'CTSC9115R' | 'VTTC8001R' | 'VTSC9115R';
export type CTSC9115R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type CTSC9115R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface CTSC9115R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  CTSC9115R_REQUEST_HEADER_TR_ID
    tr_cont?:  CTSC9115R_REQUEST_HEADER_TR_CONT
    custtype?:  CTSC9115R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTC8001R_REQUEST_HEADER_TR_ID = 'TTTC8001R' | 'CTSC9115R' | 'VTTC8001R' | 'VTSC9115R';
export type VTTC8001R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTC8001R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTC8001R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTTC8001R_REQUEST_HEADER_TR_ID
    tr_cont?:  VTTC8001R_REQUEST_HEADER_TR_CONT
    custtype?:  VTTC8001R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTSC9115R_REQUEST_HEADER_TR_ID = 'TTTC8001R' | 'CTSC9115R' | 'VTTC8001R' | 'VTSC9115R';
export type VTSC9115R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTSC9115R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTSC9115R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTSC9115R_REQUEST_HEADER_TR_ID
    tr_cont?:  VTSC9115R_REQUEST_HEADER_TR_CONT
    custtype?:  VTSC9115R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTC8434R_REQUEST_HEADER_TR_ID = 'TTTC8434R' | 'VTTC8434R';
export type TTTC8434R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTC8434R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTC8434R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTC8434R_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTC8434R_REQUEST_HEADER_TR_CONT
    custtype?:  TTTC8434R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTC8434R_REQUEST_HEADER_TR_ID = 'TTTC8434R' | 'VTTC8434R';
export type VTTC8434R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTC8434R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTC8434R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTTC8434R_REQUEST_HEADER_TR_ID
    tr_cont?:  VTTC8434R_REQUEST_HEADER_TR_CONT
    custtype?:  VTTC8434R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTC8908R_REQUEST_HEADER_TR_ID = 'TTTC8908R' | 'VTTC8908R';
export type TTTC8908R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTC8908R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTC8908R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTC8908R_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTC8908R_REQUEST_HEADER_TR_CONT
    custtype?:  TTTC8908R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTC8908R_REQUEST_HEADER_TR_ID = 'TTTC8908R' | 'VTTC8908R';
export type VTTC8908R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTC8908R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTC8908R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTTC8908R_REQUEST_HEADER_TR_ID
    tr_cont?:  VTTC8908R_REQUEST_HEADER_TR_CONT
    custtype?:  VTTC8908R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type CTSC0008U_REQUEST_HEADER_TR_ID = 'CTSC0008U';
export type CTSC0008U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type CTSC0008U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface CTSC0008U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  CTSC0008U_REQUEST_HEADER_TR_ID
    tr_cont?:  CTSC0008U_REQUEST_HEADER_TR_CONT
    custtype?:  CTSC0008U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type CTSC0009U_REQUEST_HEADER_TR_ID = 'CTSC0009U' | 'CTSC0013U';
export type CTSC0009U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type CTSC0009U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface CTSC0009U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  CTSC0009U_REQUEST_HEADER_TR_ID
    tr_cont?:  CTSC0009U_REQUEST_HEADER_TR_CONT
    custtype?:  CTSC0009U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type CTSC0013U_REQUEST_HEADER_TR_ID = 'CTSC0009U' | 'CTSC0013U';
export type CTSC0013U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type CTSC0013U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface CTSC0013U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  CTSC0013U_REQUEST_HEADER_TR_ID
    tr_cont?:  CTSC0013U_REQUEST_HEADER_TR_CONT
    custtype?:  CTSC0013U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type CTSC0004R_REQUEST_HEADER_TR_ID = 'CTSC0004R';
export type CTSC0004R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type CTSC0004R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface CTSC0004R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  CTSC0004R_REQUEST_HEADER_TR_ID
    tr_cont?:  CTSC0004R_REQUEST_HEADER_TR_CONT
    custtype?:  CTSC0004R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTC8494R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTC8494R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTC8494R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  TTTC8494R_REQUEST_HEADER_TR_CONT
    custtype?:  TTTC8494R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTC8909R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTC8909R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTC8909R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  TTTC8909R_REQUEST_HEADER_TR_CONT
    custtype?:  TTTC8909R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type CTRP6548R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type CTRP6548R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface CTRP6548R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  CTRP6548R_REQUEST_HEADER_TR_CONT
    custtype?:  CTRP6548R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKST01010100_REQUEST_HEADER_TR_ID = 'FHKST01010100';
export type FHKST01010100_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKST01010100_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKST01010100_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  FHKST01010100_REQUEST_HEADER_TR_ID
    tr_cont?:  FHKST01010100_REQUEST_HEADER_TR_CONT
    custtype?:  FHKST01010100_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKST01010300_REQUEST_HEADER_TR_ID = 'FHKST01010300';
export type FHKST01010300_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKST01010300_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKST01010300_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  FHKST01010300_REQUEST_HEADER_TR_ID
    tr_cont?:  FHKST01010300_REQUEST_HEADER_TR_CONT
    custtype?:  FHKST01010300_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKST01010400_REQUEST_HEADER_TR_ID = 'FHKST01010400';
export type FHKST01010400_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKST01010400_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKST01010400_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  FHKST01010400_REQUEST_HEADER_TR_ID
    tr_cont?:  FHKST01010400_REQUEST_HEADER_TR_CONT
    custtype?:  FHKST01010400_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKST01010200_REQUEST_HEADER_TR_ID = 'FHKST01010200';
export type FHKST01010200_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKST01010200_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKST01010200_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  FHKST01010200_REQUEST_HEADER_TR_ID
    tr_cont?:  FHKST01010200_REQUEST_HEADER_TR_CONT
    custtype?:  FHKST01010200_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKST01010900_REQUEST_HEADER_TR_ID = 'FHKST01010900';
export type FHKST01010900_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKST01010900_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKST01010900_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  FHKST01010900_REQUEST_HEADER_TR_ID
    tr_cont?:  FHKST01010900_REQUEST_HEADER_TR_CONT
    custtype?:  FHKST01010900_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKST01010600_REQUEST_HEADER_TR_ID = 'FHKST01010600';
export type FHKST01010600_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKST01010600_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKST01010600_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  FHKST01010600_REQUEST_HEADER_TR_ID
    tr_cont?:  FHKST01010600_REQUEST_HEADER_TR_CONT
    custtype?:  FHKST01010600_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKEW15010000_REQUEST_HEADER_TR_ID = 'FHKEW15010000';
export type FHKEW15010000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKEW15010000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKEW15010000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  FHKEW15010000_REQUEST_HEADER_TR_ID
    tr_cont?:  FHKEW15010000_REQUEST_HEADER_TR_CONT
    custtype?:  FHKEW15010000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKST03010100_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKST03010100_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    tr_id?:  string
    custtype?:  FHKST03010100_REQUEST_HEADER_CUSTTYPE
}

export type FHKUP03500100_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKUP03500100_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    tr_id?:  string
    custtype?:  FHKUP03500100_REQUEST_HEADER_CUSTTYPE
}

export type FHPST01060000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPST01060000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST01060000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST01060000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST01060000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPST02310000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPST02310000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST02310000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST02310000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST02310000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPST02320000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPST02320000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST02320000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST02320000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST02320000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKST03010200_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export interface FHKST03010200_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKST03010200_REQUEST_HEADER_TR_CONT
    custtype?:  string
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type CTPF1604R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type CTPF1604R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface CTPF1604R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  CTPF1604R_REQUEST_HEADER_TR_CONT
    custtype?:  CTPF1604R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type CTCA0903R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type CTCA0903R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface CTCA0903R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  CTCA0903R_REQUEST_HEADER_TR_CONT
    custtype?:  CTCA0903R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPTJ04400000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPTJ04400000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPTJ04400000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPTJ04400000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPTJ04400000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHKST03900300_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHKST03900300_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHKST03900300_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHKST03900300_REQUEST_HEADER_TR_CONT
    custtype?:  HHKST03900300_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHKST03900400_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHKST03900400_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHKST03900400_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHKST03900400_REQUEST_HEADER_TR_CONT
    custtype?:  HHKST03900400_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPPG04650100_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPPG04650100_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPPG04650100_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPPG04650100_REQUEST_HEADER_TR_CONT
    custtype?:  FHPPG04650100_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPST01710000_REQUEST_HEADER_TR_CONT = ' ';
export type FHPST01710000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST01710000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST01710000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST01710000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHPTJ04160200_REQUEST_HEADER_TR_CONT = ' ';
export type HHPTJ04160200_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHPTJ04160200_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHPTJ04160200_REQUEST_HEADER_TR_CONT
    custtype?:  HHPTJ04160200_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTO1101U_REQUEST_HEADER_TR_ID = 'TTTO1101U' | 'JTCE1001U' | 'VTTO1101U' | 'VTCE1001U';
export type TTTO1101U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTO1101U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTO1101U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTO1101U_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTO1101U_REQUEST_HEADER_TR_CONT
    custtype?:  TTTO1101U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type JTCE1001U_REQUEST_HEADER_TR_ID = 'TTTO1101U' | 'JTCE1001U' | 'VTTO1101U' | 'VTCE1001U';
export type JTCE1001U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type JTCE1001U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface JTCE1001U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  JTCE1001U_REQUEST_HEADER_TR_ID
    tr_cont?:  JTCE1001U_REQUEST_HEADER_TR_CONT
    custtype?:  JTCE1001U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTO1101U_REQUEST_HEADER_TR_ID = 'TTTO1101U' | 'JTCE1001U' | 'VTTO1101U' | 'VTCE1001U';
export type VTTO1101U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTO1101U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTO1101U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTTO1101U_REQUEST_HEADER_TR_ID
    tr_cont?:  VTTO1101U_REQUEST_HEADER_TR_CONT
    custtype?:  VTTO1101U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTCE1001U_REQUEST_HEADER_TR_ID = 'TTTO1101U' | 'JTCE1001U' | 'VTTO1101U' | 'VTCE1001U';
export type VTCE1001U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTCE1001U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTCE1001U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTCE1001U_REQUEST_HEADER_TR_ID
    tr_cont?:  VTCE1001U_REQUEST_HEADER_TR_CONT
    custtype?:  VTCE1001U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTO1103U_REQUEST_HEADER_TR_ID = 'TTTO1103U' | 'JTCE1002U' | 'VTTO1103U' | 'VTCE1002U';
export type TTTO1103U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTO1103U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTO1103U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTO1103U_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTO1103U_REQUEST_HEADER_TR_CONT
    custtype?:  TTTO1103U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type JTCE1002U_REQUEST_HEADER_TR_ID = 'TTTO1103U' | 'JTCE1002U' | 'VTTO1103U' | 'VTCE1002U';
export type JTCE1002U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type JTCE1002U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface JTCE1002U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  JTCE1002U_REQUEST_HEADER_TR_ID
    tr_cont?:  JTCE1002U_REQUEST_HEADER_TR_CONT
    custtype?:  JTCE1002U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTO1103U_REQUEST_HEADER_TR_ID = 'TTTO1103U' | 'JTCE1002U' | 'VTTO1103U' | 'VTCE1002U';
export type VTTO1103U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTO1103U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTO1103U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTTO1103U_REQUEST_HEADER_TR_ID
    tr_cont?:  VTTO1103U_REQUEST_HEADER_TR_CONT
    custtype?:  VTTO1103U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTCE1002U_REQUEST_HEADER_TR_ID = 'TTTO1103U' | 'JTCE1002U' | 'VTTO1103U' | 'VTCE1002U';
export type VTCE1002U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTCE1002U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTCE1002U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTCE1002U_REQUEST_HEADER_TR_ID
    tr_cont?:  VTCE1002U_REQUEST_HEADER_TR_CONT
    custtype?:  VTCE1002U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTO5201R_REQUEST_HEADER_TR_ID = 'TTTO5201R' | 'VTTO5201R';
export type TTTO5201R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTO5201R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTO5201R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTO5201R_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTO5201R_REQUEST_HEADER_TR_CONT
    custtype?:  TTTO5201R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTO5201R_REQUEST_HEADER_TR_ID = 'TTTO5201R' | 'VTTO5201R';
export type VTTO5201R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTO5201R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTO5201R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTTO5201R_REQUEST_HEADER_TR_ID
    tr_cont?:  VTTO5201R_REQUEST_HEADER_TR_CONT
    custtype?:  VTTO5201R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type CTFO6118R_REQUEST_HEADER_TR_ID = 'CTFO6118R' | 'VTFO6118R';
export type CTFO6118R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type CTFO6118R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface CTFO6118R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  CTFO6118R_REQUEST_HEADER_TR_ID
    tr_cont?:  CTFO6118R_REQUEST_HEADER_TR_CONT
    custtype?:  CTFO6118R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTFO6118R_REQUEST_HEADER_TR_ID = 'CTFO6118R' | 'VTFO6118R';
export type VTFO6118R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTFO6118R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTFO6118R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTFO6118R_REQUEST_HEADER_TR_ID
    tr_cont?:  VTFO6118R_REQUEST_HEADER_TR_CONT
    custtype?:  VTFO6118R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTO5105R_REQUEST_HEADER_TR_ID = 'TTTO5105R' | 'VTTO5105R';
export type TTTO5105R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTO5105R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTO5105R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTO5105R_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTO5105R_REQUEST_HEADER_TR_CONT
    custtype?:  TTTO5105R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTO5105R_REQUEST_HEADER_TR_ID = 'TTTO5105R' | 'VTTO5105R';
export type VTTO5105R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTO5105R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTO5105R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTTO5105R_REQUEST_HEADER_TR_ID
    tr_cont?:  VTTO5105R_REQUEST_HEADER_TR_CONT
    custtype?:  VTTO5105R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type JTCE5005R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type JTCE5005R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface JTCE5005R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  JTCE5005R_REQUEST_HEADER_TR_CONT
    custtype?:  JTCE5005R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type JTCE6001R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type JTCE6001R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface JTCE6001R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  JTCE6001R_REQUEST_HEADER_TR_CONT
    custtype?:  JTCE6001R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHMIF10000000_REQUEST_HEADER_TR_ID = 'FHMIF10000000';
export type FHMIF10000000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHMIF10000000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHMIF10000000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  FHMIF10000000_REQUEST_HEADER_TR_ID
    tr_cont?:  FHMIF10000000_REQUEST_HEADER_TR_CONT
    custtype?:  FHMIF10000000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHMIF10010000_REQUEST_HEADER_TR_ID = 'FHMIF10010000';
export type FHMIF10010000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHMIF10010000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHMIF10010000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  FHMIF10010000_REQUEST_HEADER_TR_ID
    tr_cont?:  FHMIF10010000_REQUEST_HEADER_TR_CONT
    custtype?:  FHMIF10010000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKIF03020100_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKIF03020100_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    tr_id?:  string
    custtype?:  FHKIF03020100_REQUEST_HEADER_CUSTTYPE
}

export type TTTT1002U_REQUEST_HEADER_TR_ID = 'TTTT1002U' | 'TTTT1006U' | 'TTTS0308U' | 'TTTS0307U' | 'TTTS0202U' | 'TTTS1005U' | 'TTTS1002U' | 'TTTS1001U' | 'TTTS0305U' | 'TTTS0304U' | 'TTTS0311U' | 'TTTS0310U' | 'VTTT1002U' | 'VTTT1001U' | 'VTTS0308U' | 'VTTS0307U' | 'VTTS0202U' | 'VTTS1005U' | 'VTTS1002U' | 'VTTS1001U' | 'VTTS0305U' | 'VTTS0304U' | 'VTTS0311U' | 'VTTS0310U';
export type TTTT1002U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTT1002U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTT1002U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTT1002U_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTT1002U_REQUEST_HEADER_TR_CONT
    custtype?:  TTTT1002U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTT1006U_REQUEST_HEADER_TR_ID = 'TTTT1002U' | 'TTTT1006U' | 'TTTS0308U' | 'TTTS0307U' | 'TTTS0202U' | 'TTTS1005U' | 'TTTS1002U' | 'TTTS1001U' | 'TTTS0305U' | 'TTTS0304U' | 'TTTS0311U' | 'TTTS0310U' | 'VTTT1002U' | 'VTTT1001U' | 'VTTS0308U' | 'VTTS0307U' | 'VTTS0202U' | 'VTTS1005U' | 'VTTS1002U' | 'VTTS1001U' | 'VTTS0305U' | 'VTTS0304U' | 'VTTS0311U' | 'VTTS0310U';
export type TTTT1006U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTT1006U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTT1006U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTT1006U_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTT1006U_REQUEST_HEADER_TR_CONT
    custtype?:  TTTT1006U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTS0308U_REQUEST_HEADER_TR_ID = 'TTTT1002U' | 'TTTT1006U' | 'TTTS0308U' | 'TTTS0307U' | 'TTTS0202U' | 'TTTS1005U' | 'TTTS1002U' | 'TTTS1001U' | 'TTTS0305U' | 'TTTS0304U' | 'TTTS0311U' | 'TTTS0310U' | 'VTTT1002U' | 'VTTT1001U' | 'VTTS0308U' | 'VTTS0307U' | 'VTTS0202U' | 'VTTS1005U' | 'VTTS1002U' | 'VTTS1001U' | 'VTTS0305U' | 'VTTS0304U' | 'VTTS0311U' | 'VTTS0310U';
export type TTTS0308U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTS0308U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTS0308U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTS0308U_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTS0308U_REQUEST_HEADER_TR_CONT
    custtype?:  TTTS0308U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTS0307U_REQUEST_HEADER_TR_ID = 'TTTT1002U' | 'TTTT1006U' | 'TTTS0308U' | 'TTTS0307U' | 'TTTS0202U' | 'TTTS1005U' | 'TTTS1002U' | 'TTTS1001U' | 'TTTS0305U' | 'TTTS0304U' | 'TTTS0311U' | 'TTTS0310U' | 'VTTT1002U' | 'VTTT1001U' | 'VTTS0308U' | 'VTTS0307U' | 'VTTS0202U' | 'VTTS1005U' | 'VTTS1002U' | 'VTTS1001U' | 'VTTS0305U' | 'VTTS0304U' | 'VTTS0311U' | 'VTTS0310U';
export type TTTS0307U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTS0307U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTS0307U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTS0307U_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTS0307U_REQUEST_HEADER_TR_CONT
    custtype?:  TTTS0307U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTS0202U_REQUEST_HEADER_TR_ID = 'TTTT1002U' | 'TTTT1006U' | 'TTTS0308U' | 'TTTS0307U' | 'TTTS0202U' | 'TTTS1005U' | 'TTTS1002U' | 'TTTS1001U' | 'TTTS0305U' | 'TTTS0304U' | 'TTTS0311U' | 'TTTS0310U' | 'VTTT1002U' | 'VTTT1001U' | 'VTTS0308U' | 'VTTS0307U' | 'VTTS0202U' | 'VTTS1005U' | 'VTTS1002U' | 'VTTS1001U' | 'VTTS0305U' | 'VTTS0304U' | 'VTTS0311U' | 'VTTS0310U';
export type TTTS0202U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTS0202U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTS0202U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTS0202U_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTS0202U_REQUEST_HEADER_TR_CONT
    custtype?:  TTTS0202U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTS1005U_REQUEST_HEADER_TR_ID = 'TTTT1002U' | 'TTTT1006U' | 'TTTS0308U' | 'TTTS0307U' | 'TTTS0202U' | 'TTTS1005U' | 'TTTS1002U' | 'TTTS1001U' | 'TTTS0305U' | 'TTTS0304U' | 'TTTS0311U' | 'TTTS0310U' | 'VTTT1002U' | 'VTTT1001U' | 'VTTS0308U' | 'VTTS0307U' | 'VTTS0202U' | 'VTTS1005U' | 'VTTS1002U' | 'VTTS1001U' | 'VTTS0305U' | 'VTTS0304U' | 'VTTS0311U' | 'VTTS0310U';
export type TTTS1005U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTS1005U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTS1005U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTS1005U_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTS1005U_REQUEST_HEADER_TR_CONT
    custtype?:  TTTS1005U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTS1002U_REQUEST_HEADER_TR_ID = 'TTTT1002U' | 'TTTT1006U' | 'TTTS0308U' | 'TTTS0307U' | 'TTTS0202U' | 'TTTS1005U' | 'TTTS1002U' | 'TTTS1001U' | 'TTTS0305U' | 'TTTS0304U' | 'TTTS0311U' | 'TTTS0310U' | 'VTTT1002U' | 'VTTT1001U' | 'VTTS0308U' | 'VTTS0307U' | 'VTTS0202U' | 'VTTS1005U' | 'VTTS1002U' | 'VTTS1001U' | 'VTTS0305U' | 'VTTS0304U' | 'VTTS0311U' | 'VTTS0310U';
export type TTTS1002U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTS1002U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTS1002U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTS1002U_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTS1002U_REQUEST_HEADER_TR_CONT
    custtype?:  TTTS1002U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTS1001U_REQUEST_HEADER_TR_ID = 'TTTT1002U' | 'TTTT1006U' | 'TTTS0308U' | 'TTTS0307U' | 'TTTS0202U' | 'TTTS1005U' | 'TTTS1002U' | 'TTTS1001U' | 'TTTS0305U' | 'TTTS0304U' | 'TTTS0311U' | 'TTTS0310U' | 'VTTT1002U' | 'VTTT1001U' | 'VTTS0308U' | 'VTTS0307U' | 'VTTS0202U' | 'VTTS1005U' | 'VTTS1002U' | 'VTTS1001U' | 'VTTS0305U' | 'VTTS0304U' | 'VTTS0311U' | 'VTTS0310U';
export type TTTS1001U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTS1001U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTS1001U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTS1001U_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTS1001U_REQUEST_HEADER_TR_CONT
    custtype?:  TTTS1001U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTS0305U_REQUEST_HEADER_TR_ID = 'TTTT1002U' | 'TTTT1006U' | 'TTTS0308U' | 'TTTS0307U' | 'TTTS0202U' | 'TTTS1005U' | 'TTTS1002U' | 'TTTS1001U' | 'TTTS0305U' | 'TTTS0304U' | 'TTTS0311U' | 'TTTS0310U' | 'VTTT1002U' | 'VTTT1001U' | 'VTTS0308U' | 'VTTS0307U' | 'VTTS0202U' | 'VTTS1005U' | 'VTTS1002U' | 'VTTS1001U' | 'VTTS0305U' | 'VTTS0304U' | 'VTTS0311U' | 'VTTS0310U';
export type TTTS0305U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTS0305U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTS0305U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTS0305U_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTS0305U_REQUEST_HEADER_TR_CONT
    custtype?:  TTTS0305U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTS0304U_REQUEST_HEADER_TR_ID = 'TTTT1002U' | 'TTTT1006U' | 'TTTS0308U' | 'TTTS0307U' | 'TTTS0202U' | 'TTTS1005U' | 'TTTS1002U' | 'TTTS1001U' | 'TTTS0305U' | 'TTTS0304U' | 'TTTS0311U' | 'TTTS0310U' | 'VTTT1002U' | 'VTTT1001U' | 'VTTS0308U' | 'VTTS0307U' | 'VTTS0202U' | 'VTTS1005U' | 'VTTS1002U' | 'VTTS1001U' | 'VTTS0305U' | 'VTTS0304U' | 'VTTS0311U' | 'VTTS0310U';
export type TTTS0304U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTS0304U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTS0304U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTS0304U_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTS0304U_REQUEST_HEADER_TR_CONT
    custtype?:  TTTS0304U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTS0311U_REQUEST_HEADER_TR_ID = 'TTTT1002U' | 'TTTT1006U' | 'TTTS0308U' | 'TTTS0307U' | 'TTTS0202U' | 'TTTS1005U' | 'TTTS1002U' | 'TTTS1001U' | 'TTTS0305U' | 'TTTS0304U' | 'TTTS0311U' | 'TTTS0310U' | 'VTTT1002U' | 'VTTT1001U' | 'VTTS0308U' | 'VTTS0307U' | 'VTTS0202U' | 'VTTS1005U' | 'VTTS1002U' | 'VTTS1001U' | 'VTTS0305U' | 'VTTS0304U' | 'VTTS0311U' | 'VTTS0310U';
export type TTTS0311U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTS0311U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTS0311U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTS0311U_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTS0311U_REQUEST_HEADER_TR_CONT
    custtype?:  TTTS0311U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTS0310U_REQUEST_HEADER_TR_ID = 'TTTT1002U' | 'TTTT1006U' | 'TTTS0308U' | 'TTTS0307U' | 'TTTS0202U' | 'TTTS1005U' | 'TTTS1002U' | 'TTTS1001U' | 'TTTS0305U' | 'TTTS0304U' | 'TTTS0311U' | 'TTTS0310U' | 'VTTT1002U' | 'VTTT1001U' | 'VTTS0308U' | 'VTTS0307U' | 'VTTS0202U' | 'VTTS1005U' | 'VTTS1002U' | 'VTTS1001U' | 'VTTS0305U' | 'VTTS0304U' | 'VTTS0311U' | 'VTTS0310U';
export type TTTS0310U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTS0310U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTS0310U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTS0310U_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTS0310U_REQUEST_HEADER_TR_CONT
    custtype?:  TTTS0310U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTT1002U_REQUEST_HEADER_TR_ID = 'TTTT1002U' | 'TTTT1006U' | 'TTTS0308U' | 'TTTS0307U' | 'TTTS0202U' | 'TTTS1005U' | 'TTTS1002U' | 'TTTS1001U' | 'TTTS0305U' | 'TTTS0304U' | 'TTTS0311U' | 'TTTS0310U' | 'VTTT1002U' | 'VTTT1001U' | 'VTTS0308U' | 'VTTS0307U' | 'VTTS0202U' | 'VTTS1005U' | 'VTTS1002U' | 'VTTS1001U' | 'VTTS0305U' | 'VTTS0304U' | 'VTTS0311U' | 'VTTS0310U';
export type VTTT1002U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTT1002U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTT1002U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTTT1002U_REQUEST_HEADER_TR_ID
    tr_cont?:  VTTT1002U_REQUEST_HEADER_TR_CONT
    custtype?:  VTTT1002U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTT1001U_REQUEST_HEADER_TR_ID = 'TTTT1002U' | 'TTTT1006U' | 'TTTS0308U' | 'TTTS0307U' | 'TTTS0202U' | 'TTTS1005U' | 'TTTS1002U' | 'TTTS1001U' | 'TTTS0305U' | 'TTTS0304U' | 'TTTS0311U' | 'TTTS0310U' | 'VTTT1002U' | 'VTTT1001U' | 'VTTS0308U' | 'VTTS0307U' | 'VTTS0202U' | 'VTTS1005U' | 'VTTS1002U' | 'VTTS1001U' | 'VTTS0305U' | 'VTTS0304U' | 'VTTS0311U' | 'VTTS0310U';
export type VTTT1001U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTT1001U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTT1001U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTTT1001U_REQUEST_HEADER_TR_ID
    tr_cont?:  VTTT1001U_REQUEST_HEADER_TR_CONT
    custtype?:  VTTT1001U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTS0308U_REQUEST_HEADER_TR_ID = 'TTTT1002U' | 'TTTT1006U' | 'TTTS0308U' | 'TTTS0307U' | 'TTTS0202U' | 'TTTS1005U' | 'TTTS1002U' | 'TTTS1001U' | 'TTTS0305U' | 'TTTS0304U' | 'TTTS0311U' | 'TTTS0310U' | 'VTTT1002U' | 'VTTT1001U' | 'VTTS0308U' | 'VTTS0307U' | 'VTTS0202U' | 'VTTS1005U' | 'VTTS1002U' | 'VTTS1001U' | 'VTTS0305U' | 'VTTS0304U' | 'VTTS0311U' | 'VTTS0310U';
export type VTTS0308U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTS0308U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTS0308U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTTS0308U_REQUEST_HEADER_TR_ID
    tr_cont?:  VTTS0308U_REQUEST_HEADER_TR_CONT
    custtype?:  VTTS0308U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTS0307U_REQUEST_HEADER_TR_ID = 'TTTT1002U' | 'TTTT1006U' | 'TTTS0308U' | 'TTTS0307U' | 'TTTS0202U' | 'TTTS1005U' | 'TTTS1002U' | 'TTTS1001U' | 'TTTS0305U' | 'TTTS0304U' | 'TTTS0311U' | 'TTTS0310U' | 'VTTT1002U' | 'VTTT1001U' | 'VTTS0308U' | 'VTTS0307U' | 'VTTS0202U' | 'VTTS1005U' | 'VTTS1002U' | 'VTTS1001U' | 'VTTS0305U' | 'VTTS0304U' | 'VTTS0311U' | 'VTTS0310U';
export type VTTS0307U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTS0307U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTS0307U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTTS0307U_REQUEST_HEADER_TR_ID
    tr_cont?:  VTTS0307U_REQUEST_HEADER_TR_CONT
    custtype?:  VTTS0307U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTS0202U_REQUEST_HEADER_TR_ID = 'TTTT1002U' | 'TTTT1006U' | 'TTTS0308U' | 'TTTS0307U' | 'TTTS0202U' | 'TTTS1005U' | 'TTTS1002U' | 'TTTS1001U' | 'TTTS0305U' | 'TTTS0304U' | 'TTTS0311U' | 'TTTS0310U' | 'VTTT1002U' | 'VTTT1001U' | 'VTTS0308U' | 'VTTS0307U' | 'VTTS0202U' | 'VTTS1005U' | 'VTTS1002U' | 'VTTS1001U' | 'VTTS0305U' | 'VTTS0304U' | 'VTTS0311U' | 'VTTS0310U';
export type VTTS0202U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTS0202U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTS0202U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTTS0202U_REQUEST_HEADER_TR_ID
    tr_cont?:  VTTS0202U_REQUEST_HEADER_TR_CONT
    custtype?:  VTTS0202U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTS1005U_REQUEST_HEADER_TR_ID = 'TTTT1002U' | 'TTTT1006U' | 'TTTS0308U' | 'TTTS0307U' | 'TTTS0202U' | 'TTTS1005U' | 'TTTS1002U' | 'TTTS1001U' | 'TTTS0305U' | 'TTTS0304U' | 'TTTS0311U' | 'TTTS0310U' | 'VTTT1002U' | 'VTTT1001U' | 'VTTS0308U' | 'VTTS0307U' | 'VTTS0202U' | 'VTTS1005U' | 'VTTS1002U' | 'VTTS1001U' | 'VTTS0305U' | 'VTTS0304U' | 'VTTS0311U' | 'VTTS0310U';
export type VTTS1005U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTS1005U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTS1005U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTTS1005U_REQUEST_HEADER_TR_ID
    tr_cont?:  VTTS1005U_REQUEST_HEADER_TR_CONT
    custtype?:  VTTS1005U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTS1002U_REQUEST_HEADER_TR_ID = 'TTTT1002U' | 'TTTT1006U' | 'TTTS0308U' | 'TTTS0307U' | 'TTTS0202U' | 'TTTS1005U' | 'TTTS1002U' | 'TTTS1001U' | 'TTTS0305U' | 'TTTS0304U' | 'TTTS0311U' | 'TTTS0310U' | 'VTTT1002U' | 'VTTT1001U' | 'VTTS0308U' | 'VTTS0307U' | 'VTTS0202U' | 'VTTS1005U' | 'VTTS1002U' | 'VTTS1001U' | 'VTTS0305U' | 'VTTS0304U' | 'VTTS0311U' | 'VTTS0310U';
export type VTTS1002U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTS1002U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTS1002U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTTS1002U_REQUEST_HEADER_TR_ID
    tr_cont?:  VTTS1002U_REQUEST_HEADER_TR_CONT
    custtype?:  VTTS1002U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTS1001U_REQUEST_HEADER_TR_ID = 'TTTT1002U' | 'TTTT1006U' | 'TTTS0308U' | 'TTTS0307U' | 'TTTS0202U' | 'TTTS1005U' | 'TTTS1002U' | 'TTTS1001U' | 'TTTS0305U' | 'TTTS0304U' | 'TTTS0311U' | 'TTTS0310U' | 'VTTT1002U' | 'VTTT1001U' | 'VTTS0308U' | 'VTTS0307U' | 'VTTS0202U' | 'VTTS1005U' | 'VTTS1002U' | 'VTTS1001U' | 'VTTS0305U' | 'VTTS0304U' | 'VTTS0311U' | 'VTTS0310U';
export type VTTS1001U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTS1001U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTS1001U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTTS1001U_REQUEST_HEADER_TR_ID
    tr_cont?:  VTTS1001U_REQUEST_HEADER_TR_CONT
    custtype?:  VTTS1001U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTS0305U_REQUEST_HEADER_TR_ID = 'TTTT1002U' | 'TTTT1006U' | 'TTTS0308U' | 'TTTS0307U' | 'TTTS0202U' | 'TTTS1005U' | 'TTTS1002U' | 'TTTS1001U' | 'TTTS0305U' | 'TTTS0304U' | 'TTTS0311U' | 'TTTS0310U' | 'VTTT1002U' | 'VTTT1001U' | 'VTTS0308U' | 'VTTS0307U' | 'VTTS0202U' | 'VTTS1005U' | 'VTTS1002U' | 'VTTS1001U' | 'VTTS0305U' | 'VTTS0304U' | 'VTTS0311U' | 'VTTS0310U';
export type VTTS0305U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTS0305U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTS0305U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTTS0305U_REQUEST_HEADER_TR_ID
    tr_cont?:  VTTS0305U_REQUEST_HEADER_TR_CONT
    custtype?:  VTTS0305U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTS0304U_REQUEST_HEADER_TR_ID = 'TTTT1002U' | 'TTTT1006U' | 'TTTS0308U' | 'TTTS0307U' | 'TTTS0202U' | 'TTTS1005U' | 'TTTS1002U' | 'TTTS1001U' | 'TTTS0305U' | 'TTTS0304U' | 'TTTS0311U' | 'TTTS0310U' | 'VTTT1002U' | 'VTTT1001U' | 'VTTS0308U' | 'VTTS0307U' | 'VTTS0202U' | 'VTTS1005U' | 'VTTS1002U' | 'VTTS1001U' | 'VTTS0305U' | 'VTTS0304U' | 'VTTS0311U' | 'VTTS0310U';
export type VTTS0304U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTS0304U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTS0304U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTTS0304U_REQUEST_HEADER_TR_ID
    tr_cont?:  VTTS0304U_REQUEST_HEADER_TR_CONT
    custtype?:  VTTS0304U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTS0311U_REQUEST_HEADER_TR_ID = 'TTTT1002U' | 'TTTT1006U' | 'TTTS0308U' | 'TTTS0307U' | 'TTTS0202U' | 'TTTS1005U' | 'TTTS1002U' | 'TTTS1001U' | 'TTTS0305U' | 'TTTS0304U' | 'TTTS0311U' | 'TTTS0310U' | 'VTTT1002U' | 'VTTT1001U' | 'VTTS0308U' | 'VTTS0307U' | 'VTTS0202U' | 'VTTS1005U' | 'VTTS1002U' | 'VTTS1001U' | 'VTTS0305U' | 'VTTS0304U' | 'VTTS0311U' | 'VTTS0310U';
export type VTTS0311U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTS0311U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTS0311U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTTS0311U_REQUEST_HEADER_TR_ID
    tr_cont?:  VTTS0311U_REQUEST_HEADER_TR_CONT
    custtype?:  VTTS0311U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTS0310U_REQUEST_HEADER_TR_ID = 'TTTT1002U' | 'TTTT1006U' | 'TTTS0308U' | 'TTTS0307U' | 'TTTS0202U' | 'TTTS1005U' | 'TTTS1002U' | 'TTTS1001U' | 'TTTS0305U' | 'TTTS0304U' | 'TTTS0311U' | 'TTTS0310U' | 'VTTT1002U' | 'VTTT1001U' | 'VTTS0308U' | 'VTTS0307U' | 'VTTS0202U' | 'VTTS1005U' | 'VTTS1002U' | 'VTTS1001U' | 'VTTS0305U' | 'VTTS0304U' | 'VTTS0311U' | 'VTTS0310U';
export type VTTS0310U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTS0310U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTS0310U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTTS0310U_REQUEST_HEADER_TR_ID
    tr_cont?:  VTTS0310U_REQUEST_HEADER_TR_CONT
    custtype?:  VTTS0310U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTT1004U_REQUEST_HEADER_TR_ID = 'TTTT1004U' | 'TTTS1003U' | 'TTTS0309U' | 'TTTS0302U' | 'TTTS0306U' | 'TTTS0312U' | 'VTTT1004U' | 'VTTS1003U' | 'VTTS0309U' | 'VTTS0302U' | 'VTTS0306U' | 'VTTS0312U';
export type TTTT1004U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTT1004U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTT1004U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTT1004U_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTT1004U_REQUEST_HEADER_TR_CONT
    custtype?:  TTTT1004U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTS1003U_REQUEST_HEADER_TR_ID = 'TTTT1004U' | 'TTTS1003U' | 'TTTS0309U' | 'TTTS0302U' | 'TTTS0306U' | 'TTTS0312U' | 'VTTT1004U' | 'VTTS1003U' | 'VTTS0309U' | 'VTTS0302U' | 'VTTS0306U' | 'VTTS0312U';
export type TTTS1003U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTS1003U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTS1003U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTS1003U_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTS1003U_REQUEST_HEADER_TR_CONT
    custtype?:  TTTS1003U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTS0309U_REQUEST_HEADER_TR_ID = 'TTTT1004U' | 'TTTS1003U' | 'TTTS0309U' | 'TTTS0302U' | 'TTTS0306U' | 'TTTS0312U' | 'VTTT1004U' | 'VTTS1003U' | 'VTTS0309U' | 'VTTS0302U' | 'VTTS0306U' | 'VTTS0312U';
export type TTTS0309U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTS0309U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTS0309U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTS0309U_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTS0309U_REQUEST_HEADER_TR_CONT
    custtype?:  TTTS0309U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTS0302U_REQUEST_HEADER_TR_ID = 'TTTT1004U' | 'TTTS1003U' | 'TTTS0309U' | 'TTTS0302U' | 'TTTS0306U' | 'TTTS0312U' | 'VTTT1004U' | 'VTTS1003U' | 'VTTS0309U' | 'VTTS0302U' | 'VTTS0306U' | 'VTTS0312U';
export type TTTS0302U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTS0302U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTS0302U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTS0302U_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTS0302U_REQUEST_HEADER_TR_CONT
    custtype?:  TTTS0302U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTS0306U_REQUEST_HEADER_TR_ID = 'TTTT1004U' | 'TTTS1003U' | 'TTTS0309U' | 'TTTS0302U' | 'TTTS0306U' | 'TTTS0312U' | 'VTTT1004U' | 'VTTS1003U' | 'VTTS0309U' | 'VTTS0302U' | 'VTTS0306U' | 'VTTS0312U';
export type TTTS0306U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTS0306U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTS0306U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTS0306U_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTS0306U_REQUEST_HEADER_TR_CONT
    custtype?:  TTTS0306U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTS0312U_REQUEST_HEADER_TR_ID = 'TTTT1004U' | 'TTTS1003U' | 'TTTS0309U' | 'TTTS0302U' | 'TTTS0306U' | 'TTTS0312U' | 'VTTT1004U' | 'VTTS1003U' | 'VTTS0309U' | 'VTTS0302U' | 'VTTS0306U' | 'VTTS0312U';
export type TTTS0312U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTS0312U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTS0312U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTS0312U_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTS0312U_REQUEST_HEADER_TR_CONT
    custtype?:  TTTS0312U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTT1004U_REQUEST_HEADER_TR_ID = 'TTTT1004U' | 'TTTS1003U' | 'TTTS0309U' | 'TTTS0302U' | 'TTTS0306U' | 'TTTS0312U' | 'VTTT1004U' | 'VTTS1003U' | 'VTTS0309U' | 'VTTS0302U' | 'VTTS0306U' | 'VTTS0312U';
export type VTTT1004U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTT1004U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTT1004U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTTT1004U_REQUEST_HEADER_TR_ID
    tr_cont?:  VTTT1004U_REQUEST_HEADER_TR_CONT
    custtype?:  VTTT1004U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTS1003U_REQUEST_HEADER_TR_ID = 'TTTT1004U' | 'TTTS1003U' | 'TTTS0309U' | 'TTTS0302U' | 'TTTS0306U' | 'TTTS0312U' | 'VTTT1004U' | 'VTTS1003U' | 'VTTS0309U' | 'VTTS0302U' | 'VTTS0306U' | 'VTTS0312U';
export type VTTS1003U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTS1003U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTS1003U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTTS1003U_REQUEST_HEADER_TR_ID
    tr_cont?:  VTTS1003U_REQUEST_HEADER_TR_CONT
    custtype?:  VTTS1003U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTS0309U_REQUEST_HEADER_TR_ID = 'TTTT1004U' | 'TTTS1003U' | 'TTTS0309U' | 'TTTS0302U' | 'TTTS0306U' | 'TTTS0312U' | 'VTTT1004U' | 'VTTS1003U' | 'VTTS0309U' | 'VTTS0302U' | 'VTTS0306U' | 'VTTS0312U';
export type VTTS0309U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTS0309U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTS0309U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTTS0309U_REQUEST_HEADER_TR_ID
    tr_cont?:  VTTS0309U_REQUEST_HEADER_TR_CONT
    custtype?:  VTTS0309U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTS0302U_REQUEST_HEADER_TR_ID = 'TTTT1004U' | 'TTTS1003U' | 'TTTS0309U' | 'TTTS0302U' | 'TTTS0306U' | 'TTTS0312U' | 'VTTT1004U' | 'VTTS1003U' | 'VTTS0309U' | 'VTTS0302U' | 'VTTS0306U' | 'VTTS0312U';
export type VTTS0302U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTS0302U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTS0302U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTTS0302U_REQUEST_HEADER_TR_ID
    tr_cont?:  VTTS0302U_REQUEST_HEADER_TR_CONT
    custtype?:  VTTS0302U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTS0306U_REQUEST_HEADER_TR_ID = 'TTTT1004U' | 'TTTS1003U' | 'TTTS0309U' | 'TTTS0302U' | 'TTTS0306U' | 'TTTS0312U' | 'VTTT1004U' | 'VTTS1003U' | 'VTTS0309U' | 'VTTS0302U' | 'VTTS0306U' | 'VTTS0312U';
export type VTTS0306U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTS0306U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTS0306U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTTS0306U_REQUEST_HEADER_TR_ID
    tr_cont?:  VTTS0306U_REQUEST_HEADER_TR_CONT
    custtype?:  VTTS0306U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTS0312U_REQUEST_HEADER_TR_ID = 'TTTT1004U' | 'TTTS1003U' | 'TTTS0309U' | 'TTTS0302U' | 'TTTS0306U' | 'TTTS0312U' | 'VTTT1004U' | 'VTTS1003U' | 'VTTS0309U' | 'VTTS0302U' | 'VTTS0306U' | 'VTTS0312U';
export type VTTS0312U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTS0312U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTS0312U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTTS0312U_REQUEST_HEADER_TR_ID
    tr_cont?:  VTTS0312U_REQUEST_HEADER_TR_CONT
    custtype?:  VTTS0312U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTT3016U_REQUEST_HEADER_TR_ID = 'TTTT3016U' | 'TTTT3014U' | 'TTTS3013U' | 'VTTT3016U' | 'VTTT3014U' | 'VTTS3013U';
export type TTTT3016U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTT3016U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTT3016U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTT3016U_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTT3016U_REQUEST_HEADER_TR_CONT
    custtype?:  TTTT3016U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTT3014U_REQUEST_HEADER_TR_ID = 'TTTT3016U' | 'TTTT3014U' | 'TTTS3013U' | 'VTTT3016U' | 'VTTT3014U' | 'VTTS3013U';
export type TTTT3014U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTT3014U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTT3014U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTT3014U_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTT3014U_REQUEST_HEADER_TR_CONT
    custtype?:  TTTT3014U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTS3013U_REQUEST_HEADER_TR_ID = 'TTTT3016U' | 'TTTT3014U' | 'TTTS3013U' | 'VTTT3016U' | 'VTTT3014U' | 'VTTS3013U';
export type TTTS3013U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTS3013U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTS3013U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTS3013U_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTS3013U_REQUEST_HEADER_TR_CONT
    custtype?:  TTTS3013U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTT3016U_REQUEST_HEADER_TR_ID = 'TTTT3016U' | 'TTTT3014U' | 'TTTS3013U' | 'VTTT3016U' | 'VTTT3014U' | 'VTTS3013U';
export type VTTT3016U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTT3016U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTT3016U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTTT3016U_REQUEST_HEADER_TR_ID
    tr_cont?:  VTTT3016U_REQUEST_HEADER_TR_CONT
    custtype?:  VTTT3016U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTT3014U_REQUEST_HEADER_TR_ID = 'TTTT3016U' | 'TTTT3014U' | 'TTTS3013U' | 'VTTT3016U' | 'VTTT3014U' | 'VTTS3013U';
export type VTTT3014U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTT3014U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTT3014U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTTT3014U_REQUEST_HEADER_TR_ID
    tr_cont?:  VTTT3014U_REQUEST_HEADER_TR_CONT
    custtype?:  VTTT3014U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTS3013U_REQUEST_HEADER_TR_ID = 'TTTT3016U' | 'TTTT3014U' | 'TTTS3013U' | 'VTTT3016U' | 'VTTT3014U' | 'VTTS3013U';
export type VTTS3013U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTS3013U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTS3013U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTTS3013U_REQUEST_HEADER_TR_ID
    tr_cont?:  VTTS3013U_REQUEST_HEADER_TR_CONT
    custtype?:  VTTS3013U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTT3017U_REQUEST_HEADER_TR_ID = 'TTTT3017U' | 'VTTT3017U';
export type TTTT3017U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTT3017U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTT3017U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTT3017U_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTT3017U_REQUEST_HEADER_TR_CONT
    custtype?:  TTTT3017U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTT3017U_REQUEST_HEADER_TR_ID = 'TTTT3017U' | 'VTTT3017U';
export type VTTT3017U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTT3017U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTT3017U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTTT3017U_REQUEST_HEADER_TR_ID
    tr_cont?:  VTTT3017U_REQUEST_HEADER_TR_CONT
    custtype?:  VTTT3017U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type JTTT3018R_REQUEST_HEADER_TR_ID = 'JTTT3018R' | 'TTTS3018R' | 'VTTS3018R' | 'VTTS3018R';
export type JTTT3018R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type JTTT3018R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface JTTT3018R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  JTTT3018R_REQUEST_HEADER_TR_ID
    tr_cont?:  JTTT3018R_REQUEST_HEADER_TR_CONT
    custtype?:  JTTT3018R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTS3018R_REQUEST_HEADER_TR_ID = 'JTTT3018R' | 'TTTS3018R' | 'VTTS3018R' | 'VTTS3018R';
export type TTTS3018R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTS3018R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTS3018R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTS3018R_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTS3018R_REQUEST_HEADER_TR_CONT
    custtype?:  TTTS3018R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTS3018R_REQUEST_HEADER_TR_ID = 'JTTT3018R' | 'TTTS3018R' | 'VTTS3018R' | 'VTTS3018R';
export type VTTS3018R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTS3018R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTS3018R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTTS3018R_REQUEST_HEADER_TR_ID
    tr_cont?:  VTTS3018R_REQUEST_HEADER_TR_CONT
    custtype?:  VTTS3018R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type JTTT3012R_REQUEST_HEADER_TR_ID = '- url' | 'JTTT3012R' | 'TTTS3012R' | 'VTTS3012R' | 'VTTS3012R';
export type JTTT3012R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type JTTT3012R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface JTTT3012R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  JTTT3012R_REQUEST_HEADER_TR_ID
    tr_cont?:  JTTT3012R_REQUEST_HEADER_TR_CONT
    custtype?:  JTTT3012R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTS3012R_REQUEST_HEADER_TR_ID = '- url' | 'JTTT3012R' | 'TTTS3012R' | 'VTTS3012R' | 'VTTS3012R';
export type TTTS3012R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTS3012R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTS3012R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTS3012R_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTS3012R_REQUEST_HEADER_TR_CONT
    custtype?:  TTTS3012R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTS3012R_REQUEST_HEADER_TR_ID = '- url' | 'JTTT3012R' | 'TTTS3012R' | 'VTTS3012R' | 'VTTS3012R';
export type VTTS3012R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTS3012R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTS3012R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTTS3012R_REQUEST_HEADER_TR_ID
    tr_cont?:  VTTS3012R_REQUEST_HEADER_TR_CONT
    custtype?:  VTTS3012R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type JTTT3001R_REQUEST_HEADER_TR_ID = '- url' | 'JTTT3001R' | 'TTTS3035R' | 'VTTS3035R' | 'VTTS3035R';
export type JTTT3001R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type JTTT3001R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface JTTT3001R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  JTTT3001R_REQUEST_HEADER_TR_ID
    tr_cont?:  JTTT3001R_REQUEST_HEADER_TR_CONT
    custtype?:  JTTT3001R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTS3035R_REQUEST_HEADER_TR_ID = '- url' | 'JTTT3001R' | 'TTTS3035R' | 'VTTS3035R' | 'VTTS3035R';
export type TTTS3035R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTS3035R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTS3035R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTS3035R_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTS3035R_REQUEST_HEADER_TR_CONT
    custtype?:  TTTS3035R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTS3035R_REQUEST_HEADER_TR_ID = '- url' | 'JTTT3001R' | 'TTTS3035R' | 'VTTS3035R' | 'VTTS3035R';
export type VTTS3035R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTS3035R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTS3035R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  VTTS3035R_REQUEST_HEADER_TR_ID
    tr_cont?:  VTTS3035R_REQUEST_HEADER_TR_CONT
    custtype?:  VTTS3035R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type CTRP6504R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type CTRP6504R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface CTRP6504R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  CTRP6504R_REQUEST_HEADER_TR_CONT
    custtype?:  CTRP6504R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTRP6504R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTRP6504R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTRP6504R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  VTRP6504R_REQUEST_HEADER_TR_CONT
    custtype?:  VTRP6504R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTT3039R_REQUEST_HEADER_TR_ID = 'TTTT3039R' | 'TTTS3014R';
export type TTTT3039R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export interface TTTT3039R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTT3039R_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTT3039R_REQUEST_HEADER_TR_CONT
    custtype?:  string
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type JTTT3007R_REQUEST_HEADER_TR_ID = 'JTTT3007R' | 'TTTS3007R';
export type JTTT3007R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export interface JTTT3007R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  JTTT3007R_REQUEST_HEADER_TR_ID
    tr_cont?:  JTTT3007R_REQUEST_HEADER_TR_CONT
    custtype?:  string
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTS3007R_REQUEST_HEADER_TR_ID = 'JTTT3007R' | 'TTTS3007R';
export type TTTS3007R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export interface TTTS3007R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTS3007R_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTS3007R_REQUEST_HEADER_TR_CONT
    custtype?:  string
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTS6036U_REQUEST_HEADER_TR_ID = 'TTTS6036U' | 'TTTS6037U';
export type TTTS6036U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTS6036U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTS6036U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTS6036U_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTS6036U_REQUEST_HEADER_TR_CONT
    custtype?:  TTTS6036U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTS6037U_REQUEST_HEADER_TR_ID = 'TTTS6036U' | 'TTTS6037U';
export type TTTS6037U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTS6037U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTS6037U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTS6037U_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTS6037U_REQUEST_HEADER_TR_CONT
    custtype?:  TTTS6037U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTS6038U_REQUEST_HEADER_TR_ID = 'TTTS6038U';
export type TTTS6038U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTS6038U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTS6038U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTS6038U_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTS6038U_REQUEST_HEADER_TR_CONT
    custtype?:  TTTS6038U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTS3039R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTS3039R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTS3039R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  TTTS3039R_REQUEST_HEADER_TR_CONT
    custtype?:  TTTS3039R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHDFS00000300_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHDFS00000300_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHDFS00000300_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHDFS00000300_REQUEST_HEADER_TR_CONT
    custtype?:  HHDFS00000300_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHDFS76240000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHDFS76240000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHDFS76240000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHDFS76240000_REQUEST_HEADER_TR_CONT
    custtype?:  HHDFS76240000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKST03030100_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKST03030100_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKST03030100_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKST03030100_REQUEST_HEADER_TR_CONT
    custtype?:  FHKST03030100_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHDFS76410000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export interface HHDFS76410000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHDFS76410000_REQUEST_HEADER_TR_CONT
    custtype?:  string
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type CTOS5011R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type CTOS5011R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface CTOS5011R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  CTOS5011R_REQUEST_HEADER_TR_CONT
    custtype?:  CTOS5011R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHDFS76200200_REQUEST_HEADER_TR_CONT = ' ';
export type HHDFS76200200_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHDFS76200200_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHDFS76200200_REQUEST_HEADER_TR_CONT
    custtype?:  HHDFS76200200_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type OTFM3001U_REQUEST_HEADER_TR_ID = 'OTFM3001U';
export type OTFM3001U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type OTFM3001U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface OTFM3001U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  OTFM3001U_REQUEST_HEADER_TR_ID
    tr_cont?:  OTFM3001U_REQUEST_HEADER_TR_CONT
    custtype?:  OTFM3001U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type OTFM3002U_REQUEST_HEADER_TR_ID = 'OTFM3002U' | 'OTFM3003U';
export type OTFM3002U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type OTFM3002U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface OTFM3002U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  OTFM3002U_REQUEST_HEADER_TR_ID
    tr_cont?:  OTFM3002U_REQUEST_HEADER_TR_CONT
    custtype?:  OTFM3002U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type OTFM3003U_REQUEST_HEADER_TR_ID = 'OTFM3002U' | 'OTFM3003U';
export type OTFM3003U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type OTFM3003U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface OTFM3003U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  OTFM3003U_REQUEST_HEADER_TR_ID
    tr_cont?:  OTFM3003U_REQUEST_HEADER_TR_CONT
    custtype?:  OTFM3003U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type OTFM3116R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export interface OTFM3116R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  OTFM3116R_REQUEST_HEADER_TR_CONT
    custtype?:  string
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type OTFM1412R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export interface OTFM1412R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  OTFM1412R_REQUEST_HEADER_TR_CONT
    custtype?:  string
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type OTFM3304R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export interface OTFM3304R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  OTFM3304R_REQUEST_HEADER_TR_CONT
    custtype?:  string
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type OTFM3118R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type OTFM3118R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface OTFM3118R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  OTFM3118R_REQUEST_HEADER_TR_CONT
    custtype?:  OTFM3118R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type OTFM3122R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type OTFM3122R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface OTFM3122R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  OTFM3122R_REQUEST_HEADER_TR_CONT
    custtype?:  OTFM3122R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type OTFM1411R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type OTFM1411R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface OTFM1411R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  OTFM1411R_REQUEST_HEADER_TR_CONT
    custtype?:  OTFM1411R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type OTFM3120R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type OTFM3120R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface OTFM3120R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  OTFM3120R_REQUEST_HEADER_TR_CONT
    custtype?:  OTFM3120R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type OTFM3114R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type OTFM3114R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface OTFM3114R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  OTFM3114R_REQUEST_HEADER_TR_CONT
    custtype?:  OTFM3114R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHDFC55010100_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export interface HHDFC55010100_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHDFC55010100_REQUEST_HEADER_TR_CONT
    custtype?:  string
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHDFC55010000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export interface HHDFC55010000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHDFC55010000_REQUEST_HEADER_TR_CONT
    custtype?:  string
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}



export interface APPROVAL_REQUEST_BODY {
    grant_type?:  string
    appkey?:  string
    secretkey?:  string
}


export interface HASHKEY_REQUEST_BODY {
    JsonBody?:  object
}


export interface TOKENP_REQUEST_BODY {
    grant_type?:  string
    appkey?:  string
    appsecret?:  string
}


export interface REVOKEP_REQUEST_BODY {
    appkey?:  string
    appsecret?:  string
    token?:  string
}

export type TTTC0802U_REQUEST_BODY_ORD_DVSN = '00' | '01' | '02' | '03' | '04' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16';
export interface TTTC0802U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    PDNO?:  string
    ORD_DVSN?:  TTTC0802U_REQUEST_BODY_ORD_DVSN
    ORD_QTY?:  string
    ORD_UNPR?:  string
    ALGO_NO?:  string
}

export type TTTC0801U_REQUEST_BODY_ORD_DVSN = '00' | '01' | '02' | '03' | '04' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16';
export interface TTTC0801U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    PDNO?:  string
    ORD_DVSN?:  TTTC0801U_REQUEST_BODY_ORD_DVSN
    ORD_QTY?:  string
    ORD_UNPR?:  string
    ALGO_NO?:  string
}

export type VTTC0802U_REQUEST_BODY_ORD_DVSN = '00' | '01' | '02' | '03' | '04' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16';
export interface VTTC0802U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    PDNO?:  string
    ORD_DVSN?:  VTTC0802U_REQUEST_BODY_ORD_DVSN
    ORD_QTY?:  string
    ORD_UNPR?:  string
    ALGO_NO?:  string
}

export type VTTC0801U_REQUEST_BODY_ORD_DVSN = '00' | '01' | '02' | '03' | '04' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16';
export interface VTTC0801U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    PDNO?:  string
    ORD_DVSN?:  VTTC0801U_REQUEST_BODY_ORD_DVSN
    ORD_QTY?:  string
    ORD_UNPR?:  string
    ALGO_NO?:  string
}

export type TTTC0852U_REQUEST_BODY_CRDT_TYPE = '21' | '23' | '26' | '28' | '25' | '27' | '22' | '24';
export type TTTC0852U_REQUEST_BODY_ORD_DVSN = '00' | '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16';
export type TTTC0852U_REQUEST_BODY_RSVN_ORD_YN = 'Y' | 'N';
export interface TTTC0852U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    PDNO?:  string
    CRDT_TYPE?:  TTTC0852U_REQUEST_BODY_CRDT_TYPE
    LOAN_DT?:  string
    ORD_DVSN?:  TTTC0852U_REQUEST_BODY_ORD_DVSN
    ORD_QTY?:  string
    ORD_UNPR?:  string
    RSVN_ORD_YN?:  TTTC0852U_REQUEST_BODY_RSVN_ORD_YN
    ALGO_NO?:  string
}

export type TTTC0851U_REQUEST_BODY_CRDT_TYPE = '21' | '23' | '26' | '28' | '25' | '27' | '22' | '24';
export type TTTC0851U_REQUEST_BODY_ORD_DVSN = '00' | '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16';
export type TTTC0851U_REQUEST_BODY_RSVN_ORD_YN = 'Y' | 'N';
export interface TTTC0851U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    PDNO?:  string
    CRDT_TYPE?:  TTTC0851U_REQUEST_BODY_CRDT_TYPE
    LOAN_DT?:  string
    ORD_DVSN?:  TTTC0851U_REQUEST_BODY_ORD_DVSN
    ORD_QTY?:  string
    ORD_UNPR?:  string
    RSVN_ORD_YN?:  TTTC0851U_REQUEST_BODY_RSVN_ORD_YN
    ALGO_NO?:  string
}

export type TTTC0803U_REQUEST_BODY_ORD_DVSN = '00' | '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16';
export type TTTC0803U_REQUEST_BODY_RVSE_CNCL_DVSN_CD = '정정' | '취소';
export type TTTC0803U_REQUEST_BODY_QTY_ALL_ORD_YN = 'Y' | 'N';
export interface TTTC0803U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    KRX_FWDG_ORD_ORGNO?:  string
    ORGN_ODNO?:  string
    ORD_DVSN?:  TTTC0803U_REQUEST_BODY_ORD_DVSN
    RVSE_CNCL_DVSN_CD?:  TTTC0803U_REQUEST_BODY_RVSE_CNCL_DVSN_CD
    ORD_QTY?:  string
    ORD_UNPR?:  string
    QTY_ALL_ORD_YN?:  TTTC0803U_REQUEST_BODY_QTY_ALL_ORD_YN
    ALGO_NO?:  string
}

export type VTTC0803U_REQUEST_BODY_ORD_DVSN = '00' | '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16';
export type VTTC0803U_REQUEST_BODY_RVSE_CNCL_DVSN_CD = '정정' | '취소';
export type VTTC0803U_REQUEST_BODY_QTY_ALL_ORD_YN = 'Y' | 'N';
export interface VTTC0803U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    KRX_FWDG_ORD_ORGNO?:  string
    ORGN_ODNO?:  string
    ORD_DVSN?:  VTTC0803U_REQUEST_BODY_ORD_DVSN
    RVSE_CNCL_DVSN_CD?:  VTTC0803U_REQUEST_BODY_RVSE_CNCL_DVSN_CD
    ORD_QTY?:  string
    ORD_UNPR?:  string
    QTY_ALL_ORD_YN?:  VTTC0803U_REQUEST_BODY_QTY_ALL_ORD_YN
    ALGO_NO?:  string
}

export type TTTC8036R_REQUEST_BODY_INQR_DVSN_1 = '0' | '1' | '2';
export type TTTC8036R_REQUEST_BODY_INQR_DVSN_2 = '0' | '1' | '2';
export interface TTTC8036R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    CTX_AREA_FK100?:  string
    CTX_AREA_NK100?:  string
    INQR_DVSN_1?:  TTTC8036R_REQUEST_BODY_INQR_DVSN_1
    INQR_DVSN_2?:  TTTC8036R_REQUEST_BODY_INQR_DVSN_2
}

export type TTTC8001R_REQUEST_BODY_SLL_BUY_DVSN_CD = '00' | '01' | '02';
export type TTTC8001R_REQUEST_BODY_INQR_DVSN = '00' | '01';
export type TTTC8001R_REQUEST_BODY_PDNO = ' ';
export type TTTC8001R_REQUEST_BODY_CCLD_DVSN = '00' | '01' | '02';
export type TTTC8001R_REQUEST_BODY_INQR_DVSN_3 = '00' | '01' | '02' | '03' | '04';
export type TTTC8001R_REQUEST_BODY_INQR_DVSN_1 = ' ' | '1' | '2';
export interface TTTC8001R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    INQR_STRT_DT?:  string
    INQR_END_DT?:  string
    SLL_BUY_DVSN_CD?:  TTTC8001R_REQUEST_BODY_SLL_BUY_DVSN_CD
    INQR_DVSN?:  TTTC8001R_REQUEST_BODY_INQR_DVSN
    PDNO?:  TTTC8001R_REQUEST_BODY_PDNO
    CCLD_DVSN?:  TTTC8001R_REQUEST_BODY_CCLD_DVSN
    ORD_GNO_BRNO?:  string
    ODNO?:  string
    INQR_DVSN_3?:  TTTC8001R_REQUEST_BODY_INQR_DVSN_3
    INQR_DVSN_1?:  TTTC8001R_REQUEST_BODY_INQR_DVSN_1
    CTX_AREA_FK100?:  string
    CTX_AREA_NK100?:  string
}

export type CTSC9115R_REQUEST_BODY_SLL_BUY_DVSN_CD = '00' | '01' | '02';
export type CTSC9115R_REQUEST_BODY_INQR_DVSN = '00' | '01';
export type CTSC9115R_REQUEST_BODY_PDNO = ' ';
export type CTSC9115R_REQUEST_BODY_CCLD_DVSN = '00' | '01' | '02';
export type CTSC9115R_REQUEST_BODY_INQR_DVSN_3 = '00' | '01' | '02' | '03' | '04';
export type CTSC9115R_REQUEST_BODY_INQR_DVSN_1 = ' ' | '1' | '2';
export interface CTSC9115R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    INQR_STRT_DT?:  string
    INQR_END_DT?:  string
    SLL_BUY_DVSN_CD?:  CTSC9115R_REQUEST_BODY_SLL_BUY_DVSN_CD
    INQR_DVSN?:  CTSC9115R_REQUEST_BODY_INQR_DVSN
    PDNO?:  CTSC9115R_REQUEST_BODY_PDNO
    CCLD_DVSN?:  CTSC9115R_REQUEST_BODY_CCLD_DVSN
    ORD_GNO_BRNO?:  string
    ODNO?:  string
    INQR_DVSN_3?:  CTSC9115R_REQUEST_BODY_INQR_DVSN_3
    INQR_DVSN_1?:  CTSC9115R_REQUEST_BODY_INQR_DVSN_1
    CTX_AREA_FK100?:  string
    CTX_AREA_NK100?:  string
}

export type VTTC8001R_REQUEST_BODY_SLL_BUY_DVSN_CD = '00' | '01' | '02';
export type VTTC8001R_REQUEST_BODY_INQR_DVSN = '00' | '01';
export type VTTC8001R_REQUEST_BODY_PDNO = ' ';
export type VTTC8001R_REQUEST_BODY_CCLD_DVSN = '00' | '01' | '02';
export type VTTC8001R_REQUEST_BODY_INQR_DVSN_3 = '00' | '01' | '02' | '03' | '04';
export type VTTC8001R_REQUEST_BODY_INQR_DVSN_1 = ' ' | '1' | '2';
export interface VTTC8001R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    INQR_STRT_DT?:  string
    INQR_END_DT?:  string
    SLL_BUY_DVSN_CD?:  VTTC8001R_REQUEST_BODY_SLL_BUY_DVSN_CD
    INQR_DVSN?:  VTTC8001R_REQUEST_BODY_INQR_DVSN
    PDNO?:  VTTC8001R_REQUEST_BODY_PDNO
    CCLD_DVSN?:  VTTC8001R_REQUEST_BODY_CCLD_DVSN
    ORD_GNO_BRNO?:  string
    ODNO?:  string
    INQR_DVSN_3?:  VTTC8001R_REQUEST_BODY_INQR_DVSN_3
    INQR_DVSN_1?:  VTTC8001R_REQUEST_BODY_INQR_DVSN_1
    CTX_AREA_FK100?:  string
    CTX_AREA_NK100?:  string
}

export type VTSC9115R_REQUEST_BODY_SLL_BUY_DVSN_CD = '00' | '01' | '02';
export type VTSC9115R_REQUEST_BODY_INQR_DVSN = '00' | '01';
export type VTSC9115R_REQUEST_BODY_PDNO = ' ';
export type VTSC9115R_REQUEST_BODY_CCLD_DVSN = '00' | '01' | '02';
export type VTSC9115R_REQUEST_BODY_INQR_DVSN_3 = '00' | '01' | '02' | '03' | '04';
export type VTSC9115R_REQUEST_BODY_INQR_DVSN_1 = ' ' | '1' | '2';
export interface VTSC9115R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    INQR_STRT_DT?:  string
    INQR_END_DT?:  string
    SLL_BUY_DVSN_CD?:  VTSC9115R_REQUEST_BODY_SLL_BUY_DVSN_CD
    INQR_DVSN?:  VTSC9115R_REQUEST_BODY_INQR_DVSN
    PDNO?:  VTSC9115R_REQUEST_BODY_PDNO
    CCLD_DVSN?:  VTSC9115R_REQUEST_BODY_CCLD_DVSN
    ORD_GNO_BRNO?:  string
    ODNO?:  string
    INQR_DVSN_3?:  VTSC9115R_REQUEST_BODY_INQR_DVSN_3
    INQR_DVSN_1?:  VTSC9115R_REQUEST_BODY_INQR_DVSN_1
    CTX_AREA_FK100?:  string
    CTX_AREA_NK100?:  string
}

export type TTTC8434R_REQUEST_BODY_AFHR_FLPR_YN = 'N' | 'Y';
export type TTTC8434R_REQUEST_BODY_INQR_DVSN = '01' | '02';
export type TTTC8434R_REQUEST_BODY_UNPR_DVSN = '01';
export type TTTC8434R_REQUEST_BODY_FUND_STTL_ICLD_YN = 'N' | 'Y';
export type TTTC8434R_REQUEST_BODY_FNCG_AMT_AUTO_RDPT_YN = 'N';
export type TTTC8434R_REQUEST_BODY_PRCS_DVSN = '00' | '01';
export interface TTTC8434R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    AFHR_FLPR_YN?:  TTTC8434R_REQUEST_BODY_AFHR_FLPR_YN
    OFL_YN?:  string
    INQR_DVSN?:  TTTC8434R_REQUEST_BODY_INQR_DVSN
    UNPR_DVSN?:  TTTC8434R_REQUEST_BODY_UNPR_DVSN
    FUND_STTL_ICLD_YN?:  TTTC8434R_REQUEST_BODY_FUND_STTL_ICLD_YN
    FNCG_AMT_AUTO_RDPT_YN?:  TTTC8434R_REQUEST_BODY_FNCG_AMT_AUTO_RDPT_YN
    PRCS_DVSN?:  TTTC8434R_REQUEST_BODY_PRCS_DVSN
    CTX_AREA_FK100?:  string
    CTX_AREA_NK100?:  string
}

export type VTTC8434R_REQUEST_BODY_AFHR_FLPR_YN = 'N' | 'Y';
export type VTTC8434R_REQUEST_BODY_INQR_DVSN = '01' | '02';
export type VTTC8434R_REQUEST_BODY_UNPR_DVSN = '01';
export type VTTC8434R_REQUEST_BODY_FUND_STTL_ICLD_YN = 'N' | 'Y';
export type VTTC8434R_REQUEST_BODY_FNCG_AMT_AUTO_RDPT_YN = 'N';
export type VTTC8434R_REQUEST_BODY_PRCS_DVSN = '00' | '01';
export interface VTTC8434R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    AFHR_FLPR_YN?:  VTTC8434R_REQUEST_BODY_AFHR_FLPR_YN
    OFL_YN?:  string
    INQR_DVSN?:  VTTC8434R_REQUEST_BODY_INQR_DVSN
    UNPR_DVSN?:  VTTC8434R_REQUEST_BODY_UNPR_DVSN
    FUND_STTL_ICLD_YN?:  VTTC8434R_REQUEST_BODY_FUND_STTL_ICLD_YN
    FNCG_AMT_AUTO_RDPT_YN?:  VTTC8434R_REQUEST_BODY_FNCG_AMT_AUTO_RDPT_YN
    PRCS_DVSN?:  VTTC8434R_REQUEST_BODY_PRCS_DVSN
    CTX_AREA_FK100?:  string
    CTX_AREA_NK100?:  string
}

export type TTTC8908R_REQUEST_BODY_ORD_DVSN = '00' | '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '51' | '52' | '62' | '63' | '67' | '69' | '72' | '77' | '79' | '80';
export type TTTC8908R_REQUEST_BODY_CMA_EVLU_AMT_ICLD_YN = 'Y' | 'N';
export type TTTC8908R_REQUEST_BODY_OVRS_ICLD_YN = 'Y' | 'N';
export interface TTTC8908R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    PDNO?:  string
    ORD_UNPR?:  string
    ORD_DVSN?:  TTTC8908R_REQUEST_BODY_ORD_DVSN
    CMA_EVLU_AMT_ICLD_YN?:  TTTC8908R_REQUEST_BODY_CMA_EVLU_AMT_ICLD_YN
    OVRS_ICLD_YN?:  TTTC8908R_REQUEST_BODY_OVRS_ICLD_YN
}

export type VTTC8908R_REQUEST_BODY_ORD_DVSN = '00' | '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '51' | '52' | '62' | '63' | '67' | '69' | '72' | '77' | '79' | '80';
export type VTTC8908R_REQUEST_BODY_CMA_EVLU_AMT_ICLD_YN = 'Y' | 'N';
export type VTTC8908R_REQUEST_BODY_OVRS_ICLD_YN = 'Y' | 'N';
export interface VTTC8908R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    PDNO?:  string
    ORD_UNPR?:  string
    ORD_DVSN?:  VTTC8908R_REQUEST_BODY_ORD_DVSN
    CMA_EVLU_AMT_ICLD_YN?:  VTTC8908R_REQUEST_BODY_CMA_EVLU_AMT_ICLD_YN
    OVRS_ICLD_YN?:  VTTC8908R_REQUEST_BODY_OVRS_ICLD_YN
}

export type CTSC0008U_REQUEST_BODY_SLL_BUY_DVSN_CD = '01' | '02';
export type CTSC0008U_REQUEST_BODY_ORD_DVSN_CD = '00' | '01' | '02' | '05';
export type CTSC0008U_REQUEST_BODY_ORD_OBJT_CBLC_DVSN_CD = '10' | '12' | '14' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28';
export interface CTSC0008U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    PDNO?:  string
    ORD_QTY?:  string
    ORD_UNPR?:  string
    SLL_BUY_DVSN_CD?:  CTSC0008U_REQUEST_BODY_SLL_BUY_DVSN_CD
    ORD_DVSN_CD?:  CTSC0008U_REQUEST_BODY_ORD_DVSN_CD
    ORD_OBJT_CBLC_DVSN_CD?:  CTSC0008U_REQUEST_BODY_ORD_OBJT_CBLC_DVSN_CD
    LOAN_DT?:  string
    RSVN_ORD_END_DT?:  string
    LDNG_DT?:  string
}

export type CTSC0009U_REQUEST_BODY_SLL_BUY_DVSN_CD = '01' | '02';
export type CTSC0009U_REQUEST_BODY_ORD_DVSN_CD = '00' | '01' | '02' | '05';
export type CTSC0009U_REQUEST_BODY_ORD_OBJT_CBLC_DVSN_CD = '10' | '12' | '14' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28';
export interface CTSC0009U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    PDNO?:  string
    ORD_QTY?:  string
    ORD_UNPR?:  string
    SLL_BUY_DVSN_CD?:  CTSC0009U_REQUEST_BODY_SLL_BUY_DVSN_CD
    ORD_DVSN_CD?:  CTSC0009U_REQUEST_BODY_ORD_DVSN_CD
    ORD_OBJT_CBLC_DVSN_CD?:  CTSC0009U_REQUEST_BODY_ORD_OBJT_CBLC_DVSN_CD
    LOAN_DT?:  string
    RSVN_ORD_END_DT?:  string
    CTAL_TLNO?:  string
    RSVN_ORD_SEQ?:  string
    RSVN_ORD_ORGNO?:  string
    RSVN_ORD_ORD_DT?:  string
}

export type CTSC0013U_REQUEST_BODY_SLL_BUY_DVSN_CD = '01' | '02';
export type CTSC0013U_REQUEST_BODY_ORD_DVSN_CD = '00' | '01' | '02' | '05';
export type CTSC0013U_REQUEST_BODY_ORD_OBJT_CBLC_DVSN_CD = '10' | '12' | '14' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28';
export interface CTSC0013U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    PDNO?:  string
    ORD_QTY?:  string
    ORD_UNPR?:  string
    SLL_BUY_DVSN_CD?:  CTSC0013U_REQUEST_BODY_SLL_BUY_DVSN_CD
    ORD_DVSN_CD?:  CTSC0013U_REQUEST_BODY_ORD_DVSN_CD
    ORD_OBJT_CBLC_DVSN_CD?:  CTSC0013U_REQUEST_BODY_ORD_OBJT_CBLC_DVSN_CD
    LOAN_DT?:  string
    RSVN_ORD_END_DT?:  string
    CTAL_TLNO?:  string
    RSVN_ORD_SEQ?:  string
    RSVN_ORD_ORGNO?:  string
    RSVN_ORD_ORD_DT?:  string
}


export interface CTSC0004R_REQUEST_BODY {
    RSVN_ORD_ORD_DT?:  string
    RSVN_ORD_END_DT?:  string
    RSVN_ORD_SEQ?:  string
    TMNL_MDIA_KIND_CD?:  string
    CANO?:  string
    ACNT_PRDT_CD?:  string
    PRCS_DVSN_CD?:  string
    CNCL_YN?:  string
    PDNO?:  string
    SLL_BUY_DVSN_CD?:  string
    CTX_AREA_FK200?:  string
    CTX_AREA_NK200?:  string
}

export type TTTC8494R_REQUEST_BODY_AFHR_FLPR_YN = 'N' | 'Y';
export type TTTC8494R_REQUEST_BODY_INQR_DVSN = '00';
export type TTTC8494R_REQUEST_BODY_UNPR_DVSN = '01';
export type TTTC8494R_REQUEST_BODY_FUND_STTL_ICLD_YN = 'N' | 'Y';
export type TTTC8494R_REQUEST_BODY_FNCG_AMT_AUTO_RDPT_YN = 'N';
export type TTTC8494R_REQUEST_BODY_PRCS_DVSN = '00' | '01';
export interface TTTC8494R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    AFHR_FLPR_YN?:  TTTC8494R_REQUEST_BODY_AFHR_FLPR_YN
    OFL_YN?:  string
    INQR_DVSN?:  TTTC8494R_REQUEST_BODY_INQR_DVSN
    UNPR_DVSN?:  TTTC8494R_REQUEST_BODY_UNPR_DVSN
    FUND_STTL_ICLD_YN?:  TTTC8494R_REQUEST_BODY_FUND_STTL_ICLD_YN
    FNCG_AMT_AUTO_RDPT_YN?:  TTTC8494R_REQUEST_BODY_FNCG_AMT_AUTO_RDPT_YN
    PRCS_DVSN?:  TTTC8494R_REQUEST_BODY_PRCS_DVSN
    COST_ICLD_YN?:  string
    CTX_AREA_FK100?:  string
    CTX_AREA_NK100?:  string
}

export type TTTC8909R_REQUEST_BODY_ORD_DVSN = '00' | '01' | '02' | '03' | '04' | '05' | '06' | '07';
export type TTTC8909R_REQUEST_BODY_CRDT_TYPE = '21' | '23' | '26' | '28' | '25' | '27' | '22' | '24';
export interface TTTC8909R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    PDNO?:  string
    ORD_UNPR?:  string
    ORD_DVSN?:  TTTC8909R_REQUEST_BODY_ORD_DVSN
    CRDT_TYPE?:  TTTC8909R_REQUEST_BODY_CRDT_TYPE
    CMA_EVLU_AMT_ICLD_YN?:  string
    OVRS_ICLD_YN?:  string
}


export interface CTRP6548R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    INQR_DVSN_1?:  string
    BSPR_BF_DT_APLY_YN?:  string
}

export type FHKST01010100_REQUEST_BODY_FID_COND_MRKT_DIV_CODE = 'J';
export interface FHKST01010100_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  FHKST01010100_REQUEST_BODY_FID_COND_MRKT_DIV_CODE
    FID_INPUT_ISCD?:  string
}

export type FHKST01010300_REQUEST_BODY_FID_COND_MRKT_DIV_CODE = 'J';
export interface FHKST01010300_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  FHKST01010300_REQUEST_BODY_FID_COND_MRKT_DIV_CODE
    FID_INPUT_ISCD?:  string
}

export type FHKST01010400_REQUEST_BODY_FID_COND_MRKT_DIV_CODE = 'J';
export type FHKST01010400_REQUEST_BODY_FID_PERIOD_DIV_CODE = 'D' | 'W' | 'M';
export type FHKST01010400_REQUEST_BODY_FID_ORG_ADJ_PRC = '0' | '1';
export interface FHKST01010400_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  FHKST01010400_REQUEST_BODY_FID_COND_MRKT_DIV_CODE
    FID_INPUT_ISCD?:  string
    FID_PERIOD_DIV_CODE?:  FHKST01010400_REQUEST_BODY_FID_PERIOD_DIV_CODE
    FID_ORG_ADJ_PRC?:  FHKST01010400_REQUEST_BODY_FID_ORG_ADJ_PRC
}

export type FHKST01010200_REQUEST_BODY_FID_COND_MRKT_DIV_CODE = 'J';
export interface FHKST01010200_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  FHKST01010200_REQUEST_BODY_FID_COND_MRKT_DIV_CODE
    FID_INPUT_ISCD?:  string
}

export type FHKST01010900_REQUEST_BODY_FID_COND_MRKT_DIV_CODE = 'J';
export interface FHKST01010900_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  FHKST01010900_REQUEST_BODY_FID_COND_MRKT_DIV_CODE
    FID_INPUT_ISCD?:  string
}

export type FHKST01010600_REQUEST_BODY_FID_COND_MRKT_DIV_CODE = 'J';
export interface FHKST01010600_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  FHKST01010600_REQUEST_BODY_FID_COND_MRKT_DIV_CODE
    FID_INPUT_ISCD?:  string
}

export type FHKEW15010000_REQUEST_BODY_FID_COND_MRKT_DIV_CODE = 'W';
export interface FHKEW15010000_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  FHKEW15010000_REQUEST_BODY_FID_COND_MRKT_DIV_CODE
    FID_INPUT_ISCD?:  string
}

export type FHKST03010100_REQUEST_BODY_FID_COND_MRKT_DIV_CODE = 'J';
export type FHKST03010100_REQUEST_BODY_FID_PERIOD_DIV_CODE = 'D' | 'W' | 'M' | 'Y';
export type FHKST03010100_REQUEST_BODY_FID_ORG_ADJ_PRC = '0' | '1';
export interface FHKST03010100_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  FHKST03010100_REQUEST_BODY_FID_COND_MRKT_DIV_CODE
    FID_INPUT_ISCD?:  string
    FID_INPUT_DATE_1?:  string
    FID_INPUT_DATE_2?:  string
    FID_PERIOD_DIV_CODE?:  FHKST03010100_REQUEST_BODY_FID_PERIOD_DIV_CODE
    FID_ORG_ADJ_PRC?:  FHKST03010100_REQUEST_BODY_FID_ORG_ADJ_PRC
}

export type FHKUP03500100_REQUEST_BODY_FID_COND_MRKT_DIV_CODE = 'U';
export type FHKUP03500100_REQUEST_BODY_FID_INPUT_ISCD = '0001' | '0002';
export interface FHKUP03500100_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  FHKUP03500100_REQUEST_BODY_FID_COND_MRKT_DIV_CODE
    FID_INPUT_ISCD?:  FHKUP03500100_REQUEST_BODY_FID_INPUT_ISCD
    FID_INPUT_DATE_1?:  string
    FID_INPUT_DATE_2?:  string
    FID_PERIOD_DIV_CODE?:  string
}

export type FHPST01060000_REQUEST_BODY_FID_COND_MRKT_DIV_CODE = 'J';
export interface FHPST01060000_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  FHPST01060000_REQUEST_BODY_FID_COND_MRKT_DIV_CODE
    FID_INPUT_ISCD?:  string
    FID_INPUT_HOUR_1?:  string
}

export type FHPST02310000_REQUEST_BODY_FID_COND_MRKT_DIV_CODE = 'J';
export type FHPST02310000_REQUEST_BODY_FID_HOUR_CLS_CODE = '1';
export interface FHPST02310000_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  FHPST02310000_REQUEST_BODY_FID_COND_MRKT_DIV_CODE
    FID_INPUT_ISCD?:  string
    FID_HOUR_CLS_CODE?:  FHPST02310000_REQUEST_BODY_FID_HOUR_CLS_CODE
}

export type FHPST02320000_REQUEST_BODY_FID_COND_MRKT_DIV_CODE = 'J';
export interface FHPST02320000_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  FHPST02320000_REQUEST_BODY_FID_COND_MRKT_DIV_CODE
    FID_INPUT_ISCD?:  string
}

export type FHKST03010200_REQUEST_BODY_FID_PW_DATA_INCU_YN = 'N' | 'Y';
export interface FHKST03010200_REQUEST_BODY {
    FID_ETC_CLS_CODE?:  string
    FID_COND_MRKT_DIV_CODE?:  string
    FID_INPUT_ISCD?:  string
    FID_INPUT_HOUR_1?:  string
    FID_PW_DATA_INCU_YN?:  FHKST03010200_REQUEST_BODY_FID_PW_DATA_INCU_YN
}


export interface CTPF1604R_REQUEST_BODY {
    PDNO?:  string
    PRDT_TYPE_CD?:  string
}


export interface CTCA0903R_REQUEST_BODY {
    BASS_DT?:  string
    CTX_AREA_NK?:  string
    CTX_AREA_FK?:  string
}

export type FHPTJ04400000_REQUEST_BODY_FID_INPUT_ISCD = '0000' | '0001' | '1001';
export interface FHPTJ04400000_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_COND_SCR_DIV_CODE?:  string
    FID_INPUT_ISCD?:  FHPTJ04400000_REQUEST_BODY_FID_INPUT_ISCD
    FID_DIV_CLS_CODE?:  string
    FID_RANK_SORT_CLS_CODE?:  string
    FID_ETC_CLS_CODE?:  string
}


export interface HHKST03900300_REQUEST_BODY {
    user_id?:  string
}


export interface HHKST03900400_REQUEST_BODY {
    user_id?:  string
    seq?:  string
}


export interface FHPPG04650100_REQUEST_BODY {
    fid_input_iscd?:  string
}


export interface FHPST01710000_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_COND_SCR_DIV_CODE?:  string
    FID_INPUT_ISCD?:  string
    FID_DIV_CLS_CODE?:  string
    FID_BLNG_CLS_CODE?:  string
    FID_TRGT_CLS_CODE?:  string
    FID_TRGT_EXLS_CLS_CODE?:  string
    FID_INPUT_PRICE_1?:  string
    FID_INPUT_PRICE_2?:  string
    FID_VOL_CNT?:  string
    FID_INPUT_DATE_1?:  string
}


export interface HHPTJ04160200_REQUEST_BODY {
    MKSC_SHRN_ISCD?:  string
}

export type TTTO1101U_REQUEST_BODY_ORD_PRCS_DVSN_CD = '02';
export type TTTO1101U_REQUEST_BODY_SLL_BUY_DVSN_CD = '01' | '02';
export type TTTO1101U_REQUEST_BODY_NMPR_TYPE_CD = '01' | '02' | '03' | '04';
export type TTTO1101U_REQUEST_BODY_KRX_NMPR_CNDT_CD = '0' | '3' | '4';
export type TTTO1101U_REQUEST_BODY_ORD_DVSN_CD = '01' | '02' | '03' | '04' | '10' | '11' | '12' | '13' | '14' | '15';
export interface TTTO1101U_REQUEST_BODY {
    ORD_PRCS_DVSN_CD?:  TTTO1101U_REQUEST_BODY_ORD_PRCS_DVSN_CD
    CANO?:  string
    ACNT_PRDT_CD?:  string
    SLL_BUY_DVSN_CD?:  TTTO1101U_REQUEST_BODY_SLL_BUY_DVSN_CD
    SHTN_PDNO?:  string
    ORD_QTY?:  string
    UNIT_PRICE?:  string
    NMPR_TYPE_CD?:  TTTO1101U_REQUEST_BODY_NMPR_TYPE_CD
    KRX_NMPR_CNDT_CD?:  TTTO1101U_REQUEST_BODY_KRX_NMPR_CNDT_CD
    CTAC_TLNO?:  string
    FUOP_ITEM_DVSN_CD?:  string
    ORD_DVSN_CD?:  TTTO1101U_REQUEST_BODY_ORD_DVSN_CD
}

export type JTCE1001U_REQUEST_BODY_ORD_PRCS_DVSN_CD = '02';
export type JTCE1001U_REQUEST_BODY_SLL_BUY_DVSN_CD = '01' | '02';
export type JTCE1001U_REQUEST_BODY_NMPR_TYPE_CD = '01' | '02' | '03' | '04';
export type JTCE1001U_REQUEST_BODY_KRX_NMPR_CNDT_CD = '0' | '3' | '4';
export type JTCE1001U_REQUEST_BODY_ORD_DVSN_CD = '01' | '02' | '03' | '04' | '10' | '11' | '12' | '13' | '14' | '15';
export interface JTCE1001U_REQUEST_BODY {
    ORD_PRCS_DVSN_CD?:  JTCE1001U_REQUEST_BODY_ORD_PRCS_DVSN_CD
    CANO?:  string
    ACNT_PRDT_CD?:  string
    SLL_BUY_DVSN_CD?:  JTCE1001U_REQUEST_BODY_SLL_BUY_DVSN_CD
    SHTN_PDNO?:  string
    ORD_QTY?:  string
    UNIT_PRICE?:  string
    NMPR_TYPE_CD?:  JTCE1001U_REQUEST_BODY_NMPR_TYPE_CD
    KRX_NMPR_CNDT_CD?:  JTCE1001U_REQUEST_BODY_KRX_NMPR_CNDT_CD
    CTAC_TLNO?:  string
    FUOP_ITEM_DVSN_CD?:  string
    ORD_DVSN_CD?:  JTCE1001U_REQUEST_BODY_ORD_DVSN_CD
}

export type VTTO1101U_REQUEST_BODY_ORD_PRCS_DVSN_CD = '02';
export type VTTO1101U_REQUEST_BODY_SLL_BUY_DVSN_CD = '01' | '02';
export type VTTO1101U_REQUEST_BODY_NMPR_TYPE_CD = '01' | '02' | '03' | '04';
export type VTTO1101U_REQUEST_BODY_KRX_NMPR_CNDT_CD = '0' | '3' | '4';
export type VTTO1101U_REQUEST_BODY_ORD_DVSN_CD = '01' | '02' | '03' | '04' | '10' | '11' | '12' | '13' | '14' | '15';
export interface VTTO1101U_REQUEST_BODY {
    ORD_PRCS_DVSN_CD?:  VTTO1101U_REQUEST_BODY_ORD_PRCS_DVSN_CD
    CANO?:  string
    ACNT_PRDT_CD?:  string
    SLL_BUY_DVSN_CD?:  VTTO1101U_REQUEST_BODY_SLL_BUY_DVSN_CD
    SHTN_PDNO?:  string
    ORD_QTY?:  string
    UNIT_PRICE?:  string
    NMPR_TYPE_CD?:  VTTO1101U_REQUEST_BODY_NMPR_TYPE_CD
    KRX_NMPR_CNDT_CD?:  VTTO1101U_REQUEST_BODY_KRX_NMPR_CNDT_CD
    CTAC_TLNO?:  string
    FUOP_ITEM_DVSN_CD?:  string
    ORD_DVSN_CD?:  VTTO1101U_REQUEST_BODY_ORD_DVSN_CD
}

export type VTCE1001U_REQUEST_BODY_ORD_PRCS_DVSN_CD = '02';
export type VTCE1001U_REQUEST_BODY_SLL_BUY_DVSN_CD = '01' | '02';
export type VTCE1001U_REQUEST_BODY_NMPR_TYPE_CD = '01' | '02' | '03' | '04';
export type VTCE1001U_REQUEST_BODY_KRX_NMPR_CNDT_CD = '0' | '3' | '4';
export type VTCE1001U_REQUEST_BODY_ORD_DVSN_CD = '01' | '02' | '03' | '04' | '10' | '11' | '12' | '13' | '14' | '15';
export interface VTCE1001U_REQUEST_BODY {
    ORD_PRCS_DVSN_CD?:  VTCE1001U_REQUEST_BODY_ORD_PRCS_DVSN_CD
    CANO?:  string
    ACNT_PRDT_CD?:  string
    SLL_BUY_DVSN_CD?:  VTCE1001U_REQUEST_BODY_SLL_BUY_DVSN_CD
    SHTN_PDNO?:  string
    ORD_QTY?:  string
    UNIT_PRICE?:  string
    NMPR_TYPE_CD?:  VTCE1001U_REQUEST_BODY_NMPR_TYPE_CD
    KRX_NMPR_CNDT_CD?:  VTCE1001U_REQUEST_BODY_KRX_NMPR_CNDT_CD
    CTAC_TLNO?:  string
    FUOP_ITEM_DVSN_CD?:  string
    ORD_DVSN_CD?:  VTCE1001U_REQUEST_BODY_ORD_DVSN_CD
}

export type TTTO1103U_REQUEST_BODY_ORD_PRCS_DVSN_CD = '02';
export type TTTO1103U_REQUEST_BODY_RVSE_CNCL_DVSN_CD = '01' | '02';
export type TTTO1103U_REQUEST_BODY_NMPR_TYPE_CD = '01' | '02' | '03' | '04';
export type TTTO1103U_REQUEST_BODY_KRX_NMPR_CNDT_CD = '0' | '3' | '4';
export type TTTO1103U_REQUEST_BODY_RMN_QTY_YN = 'Y' | 'N';
export type TTTO1103U_REQUEST_BODY_FUOP_ITEM_DVSN_CD = '01' | '02' | '03' | '04';
export type TTTO1103U_REQUEST_BODY_ORD_DVSN_CD = '01' | '02' | '03' | '04' | '10' | '11' | '12' | '13' | '14' | '15';
export interface TTTO1103U_REQUEST_BODY {
    ORD_PRCS_DVSN_CD?:  TTTO1103U_REQUEST_BODY_ORD_PRCS_DVSN_CD
    CANO?:  string
    ACNT_PRDT_CD?:  string
    RVSE_CNCL_DVSN_CD?:  TTTO1103U_REQUEST_BODY_RVSE_CNCL_DVSN_CD
    ORGN_ODNO?:  string
    ORD_QTY?:  string
    UNIT_PRICE?:  string
    NMPR_TYPE_CD?:  TTTO1103U_REQUEST_BODY_NMPR_TYPE_CD
    KRX_NMPR_CNDT_CD?:  TTTO1103U_REQUEST_BODY_KRX_NMPR_CNDT_CD
    RMN_QTY_YN?:  TTTO1103U_REQUEST_BODY_RMN_QTY_YN
    FUOP_ITEM_DVSN_CD?:  TTTO1103U_REQUEST_BODY_FUOP_ITEM_DVSN_CD
    ORD_DVSN_CD?:  TTTO1103U_REQUEST_BODY_ORD_DVSN_CD
}

export type JTCE1002U_REQUEST_BODY_ORD_PRCS_DVSN_CD = '02';
export type JTCE1002U_REQUEST_BODY_RVSE_CNCL_DVSN_CD = '01' | '02';
export type JTCE1002U_REQUEST_BODY_NMPR_TYPE_CD = '01' | '02' | '03' | '04';
export type JTCE1002U_REQUEST_BODY_KRX_NMPR_CNDT_CD = '0' | '3' | '4';
export type JTCE1002U_REQUEST_BODY_RMN_QTY_YN = 'Y' | 'N';
export type JTCE1002U_REQUEST_BODY_FUOP_ITEM_DVSN_CD = '01' | '02' | '03' | '04';
export type JTCE1002U_REQUEST_BODY_ORD_DVSN_CD = '01' | '02' | '03' | '04' | '10' | '11' | '12' | '13' | '14' | '15';
export interface JTCE1002U_REQUEST_BODY {
    ORD_PRCS_DVSN_CD?:  JTCE1002U_REQUEST_BODY_ORD_PRCS_DVSN_CD
    CANO?:  string
    ACNT_PRDT_CD?:  string
    RVSE_CNCL_DVSN_CD?:  JTCE1002U_REQUEST_BODY_RVSE_CNCL_DVSN_CD
    ORGN_ODNO?:  string
    ORD_QTY?:  string
    UNIT_PRICE?:  string
    NMPR_TYPE_CD?:  JTCE1002U_REQUEST_BODY_NMPR_TYPE_CD
    KRX_NMPR_CNDT_CD?:  JTCE1002U_REQUEST_BODY_KRX_NMPR_CNDT_CD
    RMN_QTY_YN?:  JTCE1002U_REQUEST_BODY_RMN_QTY_YN
    FUOP_ITEM_DVSN_CD?:  JTCE1002U_REQUEST_BODY_FUOP_ITEM_DVSN_CD
    ORD_DVSN_CD?:  JTCE1002U_REQUEST_BODY_ORD_DVSN_CD
}

export type VTTO1103U_REQUEST_BODY_ORD_PRCS_DVSN_CD = '02';
export type VTTO1103U_REQUEST_BODY_RVSE_CNCL_DVSN_CD = '01' | '02';
export type VTTO1103U_REQUEST_BODY_NMPR_TYPE_CD = '01' | '02' | '03' | '04';
export type VTTO1103U_REQUEST_BODY_KRX_NMPR_CNDT_CD = '0' | '3' | '4';
export type VTTO1103U_REQUEST_BODY_RMN_QTY_YN = 'Y' | 'N';
export type VTTO1103U_REQUEST_BODY_FUOP_ITEM_DVSN_CD = '01' | '02' | '03' | '04';
export type VTTO1103U_REQUEST_BODY_ORD_DVSN_CD = '01' | '02' | '03' | '04' | '10' | '11' | '12' | '13' | '14' | '15';
export interface VTTO1103U_REQUEST_BODY {
    ORD_PRCS_DVSN_CD?:  VTTO1103U_REQUEST_BODY_ORD_PRCS_DVSN_CD
    CANO?:  string
    ACNT_PRDT_CD?:  string
    RVSE_CNCL_DVSN_CD?:  VTTO1103U_REQUEST_BODY_RVSE_CNCL_DVSN_CD
    ORGN_ODNO?:  string
    ORD_QTY?:  string
    UNIT_PRICE?:  string
    NMPR_TYPE_CD?:  VTTO1103U_REQUEST_BODY_NMPR_TYPE_CD
    KRX_NMPR_CNDT_CD?:  VTTO1103U_REQUEST_BODY_KRX_NMPR_CNDT_CD
    RMN_QTY_YN?:  VTTO1103U_REQUEST_BODY_RMN_QTY_YN
    FUOP_ITEM_DVSN_CD?:  VTTO1103U_REQUEST_BODY_FUOP_ITEM_DVSN_CD
    ORD_DVSN_CD?:  VTTO1103U_REQUEST_BODY_ORD_DVSN_CD
}

export type VTCE1002U_REQUEST_BODY_ORD_PRCS_DVSN_CD = '02';
export type VTCE1002U_REQUEST_BODY_RVSE_CNCL_DVSN_CD = '01' | '02';
export type VTCE1002U_REQUEST_BODY_NMPR_TYPE_CD = '01' | '02' | '03' | '04';
export type VTCE1002U_REQUEST_BODY_KRX_NMPR_CNDT_CD = '0' | '3' | '4';
export type VTCE1002U_REQUEST_BODY_RMN_QTY_YN = 'Y' | 'N';
export type VTCE1002U_REQUEST_BODY_FUOP_ITEM_DVSN_CD = '01' | '02' | '03' | '04';
export type VTCE1002U_REQUEST_BODY_ORD_DVSN_CD = '01' | '02' | '03' | '04' | '10' | '11' | '12' | '13' | '14' | '15';
export interface VTCE1002U_REQUEST_BODY {
    ORD_PRCS_DVSN_CD?:  VTCE1002U_REQUEST_BODY_ORD_PRCS_DVSN_CD
    CANO?:  string
    ACNT_PRDT_CD?:  string
    RVSE_CNCL_DVSN_CD?:  VTCE1002U_REQUEST_BODY_RVSE_CNCL_DVSN_CD
    ORGN_ODNO?:  string
    ORD_QTY?:  string
    UNIT_PRICE?:  string
    NMPR_TYPE_CD?:  VTCE1002U_REQUEST_BODY_NMPR_TYPE_CD
    KRX_NMPR_CNDT_CD?:  VTCE1002U_REQUEST_BODY_KRX_NMPR_CNDT_CD
    RMN_QTY_YN?:  VTCE1002U_REQUEST_BODY_RMN_QTY_YN
    FUOP_ITEM_DVSN_CD?:  VTCE1002U_REQUEST_BODY_FUOP_ITEM_DVSN_CD
    ORD_DVSN_CD?:  VTCE1002U_REQUEST_BODY_ORD_DVSN_CD
}

export type TTTO5201R_REQUEST_BODY_SLL_BUY_DVSN_CD = '00' | '01' | '02';
export type TTTO5201R_REQUEST_BODY_CCLD_NCCS_DVSN = '00' | '01' | '02';
export type TTTO5201R_REQUEST_BODY_SORT_SQN = 'AS' | 'DS';
export interface TTTO5201R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    STRT_ORD_DT?:  string
    END_ORD_DT?:  string
    SLL_BUY_DVSN_CD?:  TTTO5201R_REQUEST_BODY_SLL_BUY_DVSN_CD
    CCLD_NCCS_DVSN?:  TTTO5201R_REQUEST_BODY_CCLD_NCCS_DVSN
    SORT_SQN?:  TTTO5201R_REQUEST_BODY_SORT_SQN
    STRT_ODNO?:  string
    PDNO?:  string
    MKET_ID_CD?:  string
    CTX_AREA_FK200?:  string
    CTX_AREA_NK200?:  string
}

export type VTTO5201R_REQUEST_BODY_SLL_BUY_DVSN_CD = '00' | '01' | '02';
export type VTTO5201R_REQUEST_BODY_CCLD_NCCS_DVSN = '00' | '01' | '02';
export type VTTO5201R_REQUEST_BODY_SORT_SQN = 'AS' | 'DS';
export interface VTTO5201R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    STRT_ORD_DT?:  string
    END_ORD_DT?:  string
    SLL_BUY_DVSN_CD?:  VTTO5201R_REQUEST_BODY_SLL_BUY_DVSN_CD
    CCLD_NCCS_DVSN?:  VTTO5201R_REQUEST_BODY_CCLD_NCCS_DVSN
    SORT_SQN?:  VTTO5201R_REQUEST_BODY_SORT_SQN
    STRT_ODNO?:  string
    PDNO?:  string
    MKET_ID_CD?:  string
    CTX_AREA_FK200?:  string
    CTX_AREA_NK200?:  string
}

export type CTFO6118R_REQUEST_BODY_MGNA_DVSN = '01' | '02';
export type CTFO6118R_REQUEST_BODY_EXCC_STAT_CD = '1' | '2';
export interface CTFO6118R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    MGNA_DVSN?:  CTFO6118R_REQUEST_BODY_MGNA_DVSN
    EXCC_STAT_CD?:  CTFO6118R_REQUEST_BODY_EXCC_STAT_CD
    CTX_AREA_FK200?:  string
    CTX_AREA_NK200?:  string
}

export type VTFO6118R_REQUEST_BODY_MGNA_DVSN = '01' | '02';
export type VTFO6118R_REQUEST_BODY_EXCC_STAT_CD = '1' | '2';
export interface VTFO6118R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    MGNA_DVSN?:  VTFO6118R_REQUEST_BODY_MGNA_DVSN
    EXCC_STAT_CD?:  VTFO6118R_REQUEST_BODY_EXCC_STAT_CD
    CTX_AREA_FK200?:  string
    CTX_AREA_NK200?:  string
}

export type TTTO5105R_REQUEST_BODY_SLL_BUY_DVSN_CD = '01' | '02';
export type TTTO5105R_REQUEST_BODY_ORD_DVSN_CD = '01' | '02' | '03' | '04' | '10' | '11' | '12' | '13' | '14' | '15';
export interface TTTO5105R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    PDNO?:  string
    SLL_BUY_DVSN_CD?:  TTTO5105R_REQUEST_BODY_SLL_BUY_DVSN_CD
    UNIT_PRICE?:  string
    ORD_DVSN_CD?:  TTTO5105R_REQUEST_BODY_ORD_DVSN_CD
}

export type VTTO5105R_REQUEST_BODY_SLL_BUY_DVSN_CD = '01' | '02';
export type VTTO5105R_REQUEST_BODY_ORD_DVSN_CD = '01' | '02' | '03' | '04' | '10' | '11' | '12' | '13' | '14' | '15';
export interface VTTO5105R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    PDNO?:  string
    SLL_BUY_DVSN_CD?:  VTTO5105R_REQUEST_BODY_SLL_BUY_DVSN_CD
    UNIT_PRICE?:  string
    ORD_DVSN_CD?:  VTTO5105R_REQUEST_BODY_ORD_DVSN_CD
}

export type JTCE5005R_REQUEST_BODY_STRT_ODNO = ' ';
export type JTCE5005R_REQUEST_BODY_PDNO = ' ';
export type JTCE5005R_REQUEST_BODY_MKET_ID_CD = ' ';
export interface JTCE5005R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    STRT_ORD_DT?:  string
    END_ORD_DT?:  string
    SLL_BUY_DVSN_CD?:  string
    CCLD_NCCS_DVSN?:  string
    SORT_SQN?:  string
    STRT_ODNO?:  JTCE5005R_REQUEST_BODY_STRT_ODNO
    PDNO?:  JTCE5005R_REQUEST_BODY_PDNO
    MKET_ID_CD?:  JTCE5005R_REQUEST_BODY_MKET_ID_CD
    FUOP_DVSN_CD?:  string
    SCRN_DVSN?:  string
    CTX_AREA_FK200?:  string
    CTX_AREA_NK200?:  string
}

export type JTCE6001R_REQUEST_BODY_EXCC_STAT_CD = '1' | '2';
export interface JTCE6001R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    ACNT_PWD?:  string
    MGNA_DVSN?:  string
    EXCC_STAT_CD?:  JTCE6001R_REQUEST_BODY_EXCC_STAT_CD
    CTX_AREA_FK200?:  string
    CTX_AREA_NK200?:  string
}

export type FHMIF10000000_REQUEST_BODY_FID_COND_MRKT_DIV_CODE = 'F' | 'O' | 'JF' | 'JO' | 'CF' | 'CM' | 'EU';
export interface FHMIF10000000_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  FHMIF10000000_REQUEST_BODY_FID_COND_MRKT_DIV_CODE
    FID_INPUT_ISCD?:  string
}

export type FHMIF10010000_REQUEST_BODY_FID_COND_MRKT_DIV_CODE = 'F' | 'O' | 'JF' | 'JO' | 'CF' | 'CM' | 'EU';
export interface FHMIF10010000_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  FHMIF10010000_REQUEST_BODY_FID_COND_MRKT_DIV_CODE
    FID_INPUT_ISCD?:  string
}

export type FHKIF03020100_REQUEST_BODY_FID_COND_MRKT_DIV_CODE = 'F' | 'O' | 'JF' | 'JO' | 'CF' | 'CM' | 'EU';
export type FHKIF03020100_REQUEST_BODY_FID_PERIOD_DIV_CODE = 'D' | 'W' | 'M' | 'Y';
export interface FHKIF03020100_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  FHKIF03020100_REQUEST_BODY_FID_COND_MRKT_DIV_CODE
    FID_INPUT_ISCD?:  string
    FID_INPUT_DATE_1?:  string
    FID_INPUT_DATE_2?:  string
    FID_PERIOD_DIV_CODE?:  FHKIF03020100_REQUEST_BODY_FID_PERIOD_DIV_CODE
}

export type TTTT1002U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type TTTT1002U_REQUEST_BODY_SLL_TYPE = '00';
export type TTTT1002U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '05';
export interface TTTT1002U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  TTTT1002U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    CTAC_TLNO?:  string
    MGCO_APTM_ODNO?:  string
    SLL_TYPE?:  TTTT1002U_REQUEST_BODY_SLL_TYPE
    ORD_SVR_DVSN_CD?:  string
    ORD_DVSN?:  TTTT1002U_REQUEST_BODY_ORD_DVSN
}

export type TTTT1006U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type TTTT1006U_REQUEST_BODY_SLL_TYPE = '00';
export type TTTT1006U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '05';
export interface TTTT1006U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  TTTT1006U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    CTAC_TLNO?:  string
    MGCO_APTM_ODNO?:  string
    SLL_TYPE?:  TTTT1006U_REQUEST_BODY_SLL_TYPE
    ORD_SVR_DVSN_CD?:  string
    ORD_DVSN?:  TTTT1006U_REQUEST_BODY_ORD_DVSN
}

export type TTTS0308U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type TTTS0308U_REQUEST_BODY_SLL_TYPE = '00';
export type TTTS0308U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '05';
export interface TTTS0308U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  TTTS0308U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    CTAC_TLNO?:  string
    MGCO_APTM_ODNO?:  string
    SLL_TYPE?:  TTTS0308U_REQUEST_BODY_SLL_TYPE
    ORD_SVR_DVSN_CD?:  string
    ORD_DVSN?:  TTTS0308U_REQUEST_BODY_ORD_DVSN
}

export type TTTS0307U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type TTTS0307U_REQUEST_BODY_SLL_TYPE = '00';
export type TTTS0307U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '05';
export interface TTTS0307U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  TTTS0307U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    CTAC_TLNO?:  string
    MGCO_APTM_ODNO?:  string
    SLL_TYPE?:  TTTS0307U_REQUEST_BODY_SLL_TYPE
    ORD_SVR_DVSN_CD?:  string
    ORD_DVSN?:  TTTS0307U_REQUEST_BODY_ORD_DVSN
}

export type TTTS0202U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type TTTS0202U_REQUEST_BODY_SLL_TYPE = '00';
export type TTTS0202U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '05';
export interface TTTS0202U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  TTTS0202U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    CTAC_TLNO?:  string
    MGCO_APTM_ODNO?:  string
    SLL_TYPE?:  TTTS0202U_REQUEST_BODY_SLL_TYPE
    ORD_SVR_DVSN_CD?:  string
    ORD_DVSN?:  TTTS0202U_REQUEST_BODY_ORD_DVSN
}

export type TTTS1005U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type TTTS1005U_REQUEST_BODY_SLL_TYPE = '00';
export type TTTS1005U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '05';
export interface TTTS1005U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  TTTS1005U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    CTAC_TLNO?:  string
    MGCO_APTM_ODNO?:  string
    SLL_TYPE?:  TTTS1005U_REQUEST_BODY_SLL_TYPE
    ORD_SVR_DVSN_CD?:  string
    ORD_DVSN?:  TTTS1005U_REQUEST_BODY_ORD_DVSN
}

export type TTTS1002U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type TTTS1002U_REQUEST_BODY_SLL_TYPE = '00';
export type TTTS1002U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '05';
export interface TTTS1002U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  TTTS1002U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    CTAC_TLNO?:  string
    MGCO_APTM_ODNO?:  string
    SLL_TYPE?:  TTTS1002U_REQUEST_BODY_SLL_TYPE
    ORD_SVR_DVSN_CD?:  string
    ORD_DVSN?:  TTTS1002U_REQUEST_BODY_ORD_DVSN
}

export type TTTS1001U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type TTTS1001U_REQUEST_BODY_SLL_TYPE = '00';
export type TTTS1001U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '05';
export interface TTTS1001U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  TTTS1001U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    CTAC_TLNO?:  string
    MGCO_APTM_ODNO?:  string
    SLL_TYPE?:  TTTS1001U_REQUEST_BODY_SLL_TYPE
    ORD_SVR_DVSN_CD?:  string
    ORD_DVSN?:  TTTS1001U_REQUEST_BODY_ORD_DVSN
}

export type TTTS0305U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type TTTS0305U_REQUEST_BODY_SLL_TYPE = '00';
export type TTTS0305U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '05';
export interface TTTS0305U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  TTTS0305U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    CTAC_TLNO?:  string
    MGCO_APTM_ODNO?:  string
    SLL_TYPE?:  TTTS0305U_REQUEST_BODY_SLL_TYPE
    ORD_SVR_DVSN_CD?:  string
    ORD_DVSN?:  TTTS0305U_REQUEST_BODY_ORD_DVSN
}

export type TTTS0304U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type TTTS0304U_REQUEST_BODY_SLL_TYPE = '00';
export type TTTS0304U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '05';
export interface TTTS0304U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  TTTS0304U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    CTAC_TLNO?:  string
    MGCO_APTM_ODNO?:  string
    SLL_TYPE?:  TTTS0304U_REQUEST_BODY_SLL_TYPE
    ORD_SVR_DVSN_CD?:  string
    ORD_DVSN?:  TTTS0304U_REQUEST_BODY_ORD_DVSN
}

export type TTTS0311U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type TTTS0311U_REQUEST_BODY_SLL_TYPE = '00';
export type TTTS0311U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '05';
export interface TTTS0311U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  TTTS0311U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    CTAC_TLNO?:  string
    MGCO_APTM_ODNO?:  string
    SLL_TYPE?:  TTTS0311U_REQUEST_BODY_SLL_TYPE
    ORD_SVR_DVSN_CD?:  string
    ORD_DVSN?:  TTTS0311U_REQUEST_BODY_ORD_DVSN
}

export type TTTS0310U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type TTTS0310U_REQUEST_BODY_SLL_TYPE = '00';
export type TTTS0310U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '05';
export interface TTTS0310U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  TTTS0310U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    CTAC_TLNO?:  string
    MGCO_APTM_ODNO?:  string
    SLL_TYPE?:  TTTS0310U_REQUEST_BODY_SLL_TYPE
    ORD_SVR_DVSN_CD?:  string
    ORD_DVSN?:  TTTS0310U_REQUEST_BODY_ORD_DVSN
}

export type VTTT1002U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type VTTT1002U_REQUEST_BODY_SLL_TYPE = '00';
export type VTTT1002U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '05';
export interface VTTT1002U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  VTTT1002U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    CTAC_TLNO?:  string
    MGCO_APTM_ODNO?:  string
    SLL_TYPE?:  VTTT1002U_REQUEST_BODY_SLL_TYPE
    ORD_SVR_DVSN_CD?:  string
    ORD_DVSN?:  VTTT1002U_REQUEST_BODY_ORD_DVSN
}

export type VTTT1001U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type VTTT1001U_REQUEST_BODY_SLL_TYPE = '00';
export type VTTT1001U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '05';
export interface VTTT1001U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  VTTT1001U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    CTAC_TLNO?:  string
    MGCO_APTM_ODNO?:  string
    SLL_TYPE?:  VTTT1001U_REQUEST_BODY_SLL_TYPE
    ORD_SVR_DVSN_CD?:  string
    ORD_DVSN?:  VTTT1001U_REQUEST_BODY_ORD_DVSN
}

export type VTTS0308U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type VTTS0308U_REQUEST_BODY_SLL_TYPE = '00';
export type VTTS0308U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '05';
export interface VTTS0308U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  VTTS0308U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    CTAC_TLNO?:  string
    MGCO_APTM_ODNO?:  string
    SLL_TYPE?:  VTTS0308U_REQUEST_BODY_SLL_TYPE
    ORD_SVR_DVSN_CD?:  string
    ORD_DVSN?:  VTTS0308U_REQUEST_BODY_ORD_DVSN
}

export type VTTS0307U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type VTTS0307U_REQUEST_BODY_SLL_TYPE = '00';
export type VTTS0307U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '05';
export interface VTTS0307U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  VTTS0307U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    CTAC_TLNO?:  string
    MGCO_APTM_ODNO?:  string
    SLL_TYPE?:  VTTS0307U_REQUEST_BODY_SLL_TYPE
    ORD_SVR_DVSN_CD?:  string
    ORD_DVSN?:  VTTS0307U_REQUEST_BODY_ORD_DVSN
}

export type VTTS0202U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type VTTS0202U_REQUEST_BODY_SLL_TYPE = '00';
export type VTTS0202U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '05';
export interface VTTS0202U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  VTTS0202U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    CTAC_TLNO?:  string
    MGCO_APTM_ODNO?:  string
    SLL_TYPE?:  VTTS0202U_REQUEST_BODY_SLL_TYPE
    ORD_SVR_DVSN_CD?:  string
    ORD_DVSN?:  VTTS0202U_REQUEST_BODY_ORD_DVSN
}

export type VTTS1005U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type VTTS1005U_REQUEST_BODY_SLL_TYPE = '00';
export type VTTS1005U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '05';
export interface VTTS1005U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  VTTS1005U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    CTAC_TLNO?:  string
    MGCO_APTM_ODNO?:  string
    SLL_TYPE?:  VTTS1005U_REQUEST_BODY_SLL_TYPE
    ORD_SVR_DVSN_CD?:  string
    ORD_DVSN?:  VTTS1005U_REQUEST_BODY_ORD_DVSN
}

export type VTTS1002U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type VTTS1002U_REQUEST_BODY_SLL_TYPE = '00';
export type VTTS1002U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '05';
export interface VTTS1002U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  VTTS1002U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    CTAC_TLNO?:  string
    MGCO_APTM_ODNO?:  string
    SLL_TYPE?:  VTTS1002U_REQUEST_BODY_SLL_TYPE
    ORD_SVR_DVSN_CD?:  string
    ORD_DVSN?:  VTTS1002U_REQUEST_BODY_ORD_DVSN
}

export type VTTS1001U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type VTTS1001U_REQUEST_BODY_SLL_TYPE = '00';
export type VTTS1001U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '05';
export interface VTTS1001U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  VTTS1001U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    CTAC_TLNO?:  string
    MGCO_APTM_ODNO?:  string
    SLL_TYPE?:  VTTS1001U_REQUEST_BODY_SLL_TYPE
    ORD_SVR_DVSN_CD?:  string
    ORD_DVSN?:  VTTS1001U_REQUEST_BODY_ORD_DVSN
}

export type VTTS0305U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type VTTS0305U_REQUEST_BODY_SLL_TYPE = '00';
export type VTTS0305U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '05';
export interface VTTS0305U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  VTTS0305U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    CTAC_TLNO?:  string
    MGCO_APTM_ODNO?:  string
    SLL_TYPE?:  VTTS0305U_REQUEST_BODY_SLL_TYPE
    ORD_SVR_DVSN_CD?:  string
    ORD_DVSN?:  VTTS0305U_REQUEST_BODY_ORD_DVSN
}

export type VTTS0304U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type VTTS0304U_REQUEST_BODY_SLL_TYPE = '00';
export type VTTS0304U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '05';
export interface VTTS0304U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  VTTS0304U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    CTAC_TLNO?:  string
    MGCO_APTM_ODNO?:  string
    SLL_TYPE?:  VTTS0304U_REQUEST_BODY_SLL_TYPE
    ORD_SVR_DVSN_CD?:  string
    ORD_DVSN?:  VTTS0304U_REQUEST_BODY_ORD_DVSN
}

export type VTTS0311U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type VTTS0311U_REQUEST_BODY_SLL_TYPE = '00';
export type VTTS0311U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '05';
export interface VTTS0311U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  VTTS0311U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    CTAC_TLNO?:  string
    MGCO_APTM_ODNO?:  string
    SLL_TYPE?:  VTTS0311U_REQUEST_BODY_SLL_TYPE
    ORD_SVR_DVSN_CD?:  string
    ORD_DVSN?:  VTTS0311U_REQUEST_BODY_ORD_DVSN
}

export type VTTS0310U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type VTTS0310U_REQUEST_BODY_SLL_TYPE = '00';
export type VTTS0310U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '05';
export interface VTTS0310U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  VTTS0310U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    CTAC_TLNO?:  string
    MGCO_APTM_ODNO?:  string
    SLL_TYPE?:  VTTS0310U_REQUEST_BODY_SLL_TYPE
    ORD_SVR_DVSN_CD?:  string
    ORD_DVSN?:  VTTS0310U_REQUEST_BODY_ORD_DVSN
}

export type TTTT1004U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type TTTT1004U_REQUEST_BODY_RVSE_CNCL_DVSN_CD = '01' | '02';
export interface TTTT1004U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  TTTT1004U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORGN_ODNO?:  string
    RVSE_CNCL_DVSN_CD?:  TTTT1004U_REQUEST_BODY_RVSE_CNCL_DVSN_CD
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    MGCO_APTM_ODNO?:  string
    ORD_SVR_DVSN_CD?:  string
}

export type TTTS1003U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type TTTS1003U_REQUEST_BODY_RVSE_CNCL_DVSN_CD = '01' | '02';
export interface TTTS1003U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  TTTS1003U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORGN_ODNO?:  string
    RVSE_CNCL_DVSN_CD?:  TTTS1003U_REQUEST_BODY_RVSE_CNCL_DVSN_CD
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    MGCO_APTM_ODNO?:  string
    ORD_SVR_DVSN_CD?:  string
}

export type TTTS0309U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type TTTS0309U_REQUEST_BODY_RVSE_CNCL_DVSN_CD = '01' | '02';
export interface TTTS0309U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  TTTS0309U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORGN_ODNO?:  string
    RVSE_CNCL_DVSN_CD?:  TTTS0309U_REQUEST_BODY_RVSE_CNCL_DVSN_CD
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    MGCO_APTM_ODNO?:  string
    ORD_SVR_DVSN_CD?:  string
}

export type TTTS0302U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type TTTS0302U_REQUEST_BODY_RVSE_CNCL_DVSN_CD = '01' | '02';
export interface TTTS0302U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  TTTS0302U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORGN_ODNO?:  string
    RVSE_CNCL_DVSN_CD?:  TTTS0302U_REQUEST_BODY_RVSE_CNCL_DVSN_CD
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    MGCO_APTM_ODNO?:  string
    ORD_SVR_DVSN_CD?:  string
}

export type TTTS0306U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type TTTS0306U_REQUEST_BODY_RVSE_CNCL_DVSN_CD = '01' | '02';
export interface TTTS0306U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  TTTS0306U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORGN_ODNO?:  string
    RVSE_CNCL_DVSN_CD?:  TTTS0306U_REQUEST_BODY_RVSE_CNCL_DVSN_CD
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    MGCO_APTM_ODNO?:  string
    ORD_SVR_DVSN_CD?:  string
}

export type TTTS0312U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type TTTS0312U_REQUEST_BODY_RVSE_CNCL_DVSN_CD = '01' | '02';
export interface TTTS0312U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  TTTS0312U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORGN_ODNO?:  string
    RVSE_CNCL_DVSN_CD?:  TTTS0312U_REQUEST_BODY_RVSE_CNCL_DVSN_CD
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    MGCO_APTM_ODNO?:  string
    ORD_SVR_DVSN_CD?:  string
}

export type VTTT1004U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type VTTT1004U_REQUEST_BODY_RVSE_CNCL_DVSN_CD = '01' | '02';
export interface VTTT1004U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  VTTT1004U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORGN_ODNO?:  string
    RVSE_CNCL_DVSN_CD?:  VTTT1004U_REQUEST_BODY_RVSE_CNCL_DVSN_CD
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    MGCO_APTM_ODNO?:  string
    ORD_SVR_DVSN_CD?:  string
}

export type VTTS1003U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type VTTS1003U_REQUEST_BODY_RVSE_CNCL_DVSN_CD = '01' | '02';
export interface VTTS1003U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  VTTS1003U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORGN_ODNO?:  string
    RVSE_CNCL_DVSN_CD?:  VTTS1003U_REQUEST_BODY_RVSE_CNCL_DVSN_CD
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    MGCO_APTM_ODNO?:  string
    ORD_SVR_DVSN_CD?:  string
}

export type VTTS0309U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type VTTS0309U_REQUEST_BODY_RVSE_CNCL_DVSN_CD = '01' | '02';
export interface VTTS0309U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  VTTS0309U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORGN_ODNO?:  string
    RVSE_CNCL_DVSN_CD?:  VTTS0309U_REQUEST_BODY_RVSE_CNCL_DVSN_CD
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    MGCO_APTM_ODNO?:  string
    ORD_SVR_DVSN_CD?:  string
}

export type VTTS0302U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type VTTS0302U_REQUEST_BODY_RVSE_CNCL_DVSN_CD = '01' | '02';
export interface VTTS0302U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  VTTS0302U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORGN_ODNO?:  string
    RVSE_CNCL_DVSN_CD?:  VTTS0302U_REQUEST_BODY_RVSE_CNCL_DVSN_CD
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    MGCO_APTM_ODNO?:  string
    ORD_SVR_DVSN_CD?:  string
}

export type VTTS0306U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type VTTS0306U_REQUEST_BODY_RVSE_CNCL_DVSN_CD = '01' | '02';
export interface VTTS0306U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  VTTS0306U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORGN_ODNO?:  string
    RVSE_CNCL_DVSN_CD?:  VTTS0306U_REQUEST_BODY_RVSE_CNCL_DVSN_CD
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    MGCO_APTM_ODNO?:  string
    ORD_SVR_DVSN_CD?:  string
}

export type VTTS0312U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type VTTS0312U_REQUEST_BODY_RVSE_CNCL_DVSN_CD = '01' | '02';
export interface VTTS0312U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  VTTS0312U_REQUEST_BODY_OVRS_EXCG_CD
    PDNO?:  string
    ORGN_ODNO?:  string
    RVSE_CNCL_DVSN_CD?:  VTTS0312U_REQUEST_BODY_RVSE_CNCL_DVSN_CD
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    MGCO_APTM_ODNO?:  string
    ORD_SVR_DVSN_CD?:  string
}

export type TTTT3016U_REQUEST_BODY_SLL_BUY_DVSN_CD = '01' | '02';
export type TTTT3016U_REQUEST_BODY_RVSE_CNCL_DVSN_CD = '00' | '02';
export type TTTT3016U_REQUEST_BODY_PRDT_TYPE_CD = '515';
export type TTTT3016U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type TTTT3016U_REQUEST_BODY_ORD_DVSN = '00' | '31';
export interface TTTT3016U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    SLL_BUY_DVSN_CD?:  TTTT3016U_REQUEST_BODY_SLL_BUY_DVSN_CD
    RVSE_CNCL_DVSN_CD?:  TTTT3016U_REQUEST_BODY_RVSE_CNCL_DVSN_CD
    PDNO?:  string
    PRDT_TYPE_CD?:  TTTT3016U_REQUEST_BODY_PRDT_TYPE_CD
    OVRS_EXCG_CD?:  TTTT3016U_REQUEST_BODY_OVRS_EXCG_CD
    FT_ORD_QTY?:  string
    FT_ORD_UNPR3?:  string
    ORD_SVR_DVSN_CD?:  string
    RSVN_ORD_RCIT_DT?:  string
    ORD_DVSN?:  TTTT3016U_REQUEST_BODY_ORD_DVSN
    OVRS_RSVN_ODNO?:  string
}

export type TTTT3014U_REQUEST_BODY_SLL_BUY_DVSN_CD = '01' | '02';
export type TTTT3014U_REQUEST_BODY_RVSE_CNCL_DVSN_CD = '00' | '02';
export type TTTT3014U_REQUEST_BODY_PRDT_TYPE_CD = '515';
export type TTTT3014U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type TTTT3014U_REQUEST_BODY_ORD_DVSN = '00' | '31';
export interface TTTT3014U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    SLL_BUY_DVSN_CD?:  TTTT3014U_REQUEST_BODY_SLL_BUY_DVSN_CD
    RVSE_CNCL_DVSN_CD?:  TTTT3014U_REQUEST_BODY_RVSE_CNCL_DVSN_CD
    PDNO?:  string
    PRDT_TYPE_CD?:  TTTT3014U_REQUEST_BODY_PRDT_TYPE_CD
    OVRS_EXCG_CD?:  TTTT3014U_REQUEST_BODY_OVRS_EXCG_CD
    FT_ORD_QTY?:  string
    FT_ORD_UNPR3?:  string
    ORD_SVR_DVSN_CD?:  string
    RSVN_ORD_RCIT_DT?:  string
    ORD_DVSN?:  TTTT3014U_REQUEST_BODY_ORD_DVSN
    OVRS_RSVN_ODNO?:  string
}

export type TTTS3013U_REQUEST_BODY_SLL_BUY_DVSN_CD = '01' | '02';
export type TTTS3013U_REQUEST_BODY_RVSE_CNCL_DVSN_CD = '00' | '02';
export type TTTS3013U_REQUEST_BODY_PRDT_TYPE_CD = '515';
export type TTTS3013U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type TTTS3013U_REQUEST_BODY_ORD_DVSN = '00' | '31';
export interface TTTS3013U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    SLL_BUY_DVSN_CD?:  TTTS3013U_REQUEST_BODY_SLL_BUY_DVSN_CD
    RVSE_CNCL_DVSN_CD?:  TTTS3013U_REQUEST_BODY_RVSE_CNCL_DVSN_CD
    PDNO?:  string
    PRDT_TYPE_CD?:  TTTS3013U_REQUEST_BODY_PRDT_TYPE_CD
    OVRS_EXCG_CD?:  TTTS3013U_REQUEST_BODY_OVRS_EXCG_CD
    FT_ORD_QTY?:  string
    FT_ORD_UNPR3?:  string
    ORD_SVR_DVSN_CD?:  string
    RSVN_ORD_RCIT_DT?:  string
    ORD_DVSN?:  TTTS3013U_REQUEST_BODY_ORD_DVSN
    OVRS_RSVN_ODNO?:  string
}

export type VTTT3016U_REQUEST_BODY_SLL_BUY_DVSN_CD = '01' | '02';
export type VTTT3016U_REQUEST_BODY_RVSE_CNCL_DVSN_CD = '00' | '02';
export type VTTT3016U_REQUEST_BODY_PRDT_TYPE_CD = '515';
export type VTTT3016U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type VTTT3016U_REQUEST_BODY_ORD_DVSN = '00' | '31';
export interface VTTT3016U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    SLL_BUY_DVSN_CD?:  VTTT3016U_REQUEST_BODY_SLL_BUY_DVSN_CD
    RVSE_CNCL_DVSN_CD?:  VTTT3016U_REQUEST_BODY_RVSE_CNCL_DVSN_CD
    PDNO?:  string
    PRDT_TYPE_CD?:  VTTT3016U_REQUEST_BODY_PRDT_TYPE_CD
    OVRS_EXCG_CD?:  VTTT3016U_REQUEST_BODY_OVRS_EXCG_CD
    FT_ORD_QTY?:  string
    FT_ORD_UNPR3?:  string
    ORD_SVR_DVSN_CD?:  string
    RSVN_ORD_RCIT_DT?:  string
    ORD_DVSN?:  VTTT3016U_REQUEST_BODY_ORD_DVSN
    OVRS_RSVN_ODNO?:  string
}

export type VTTT3014U_REQUEST_BODY_SLL_BUY_DVSN_CD = '01' | '02';
export type VTTT3014U_REQUEST_BODY_RVSE_CNCL_DVSN_CD = '00' | '02';
export type VTTT3014U_REQUEST_BODY_PRDT_TYPE_CD = '515';
export type VTTT3014U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type VTTT3014U_REQUEST_BODY_ORD_DVSN = '00' | '31';
export interface VTTT3014U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    SLL_BUY_DVSN_CD?:  VTTT3014U_REQUEST_BODY_SLL_BUY_DVSN_CD
    RVSE_CNCL_DVSN_CD?:  VTTT3014U_REQUEST_BODY_RVSE_CNCL_DVSN_CD
    PDNO?:  string
    PRDT_TYPE_CD?:  VTTT3014U_REQUEST_BODY_PRDT_TYPE_CD
    OVRS_EXCG_CD?:  VTTT3014U_REQUEST_BODY_OVRS_EXCG_CD
    FT_ORD_QTY?:  string
    FT_ORD_UNPR3?:  string
    ORD_SVR_DVSN_CD?:  string
    RSVN_ORD_RCIT_DT?:  string
    ORD_DVSN?:  VTTT3014U_REQUEST_BODY_ORD_DVSN
    OVRS_RSVN_ODNO?:  string
}

export type VTTS3013U_REQUEST_BODY_SLL_BUY_DVSN_CD = '01' | '02';
export type VTTS3013U_REQUEST_BODY_RVSE_CNCL_DVSN_CD = '00' | '02';
export type VTTS3013U_REQUEST_BODY_PRDT_TYPE_CD = '515';
export type VTTS3013U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type VTTS3013U_REQUEST_BODY_ORD_DVSN = '00' | '31';
export interface VTTS3013U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    SLL_BUY_DVSN_CD?:  VTTS3013U_REQUEST_BODY_SLL_BUY_DVSN_CD
    RVSE_CNCL_DVSN_CD?:  VTTS3013U_REQUEST_BODY_RVSE_CNCL_DVSN_CD
    PDNO?:  string
    PRDT_TYPE_CD?:  VTTS3013U_REQUEST_BODY_PRDT_TYPE_CD
    OVRS_EXCG_CD?:  VTTS3013U_REQUEST_BODY_OVRS_EXCG_CD
    FT_ORD_QTY?:  string
    FT_ORD_UNPR3?:  string
    ORD_SVR_DVSN_CD?:  string
    RSVN_ORD_RCIT_DT?:  string
    ORD_DVSN?:  VTTS3013U_REQUEST_BODY_ORD_DVSN
    OVRS_RSVN_ODNO?:  string
}


export interface TTTT3017U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    RSYN_ORD_RCTT_DT?:  string
    OVRS_RSVN_ODNO?:  string
}


export interface VTTT3017U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    RSYN_ORD_RCTT_DT?:  string
    OVRS_RSVN_ODNO?:  string
}

export type JTTT3018R_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export interface JTTT3018R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  JTTT3018R_REQUEST_BODY_OVRS_EXCG_CD
    SORT_SQN?:  string
    CTX_AREA_FK200?:  string
    CTX_AREA_NK200?:  string
}

export type TTTS3018R_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export interface TTTS3018R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  TTTS3018R_REQUEST_BODY_OVRS_EXCG_CD
    SORT_SQN?:  string
    CTX_AREA_FK200?:  string
    CTX_AREA_NK200?:  string
}

export type VTTS3018R_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export interface VTTS3018R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  VTTS3018R_REQUEST_BODY_OVRS_EXCG_CD
    SORT_SQN?:  string
    CTX_AREA_FK200?:  string
    CTX_AREA_NK200?:  string
}

export type JTTT3012R_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'NASD' | 'NAS' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type JTTT3012R_REQUEST_BODY_TR_CRCY_CD = 'USD' | 'HKD' | 'CNY' | 'JPY' | 'VND';
export interface JTTT3012R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  JTTT3012R_REQUEST_BODY_OVRS_EXCG_CD
    TR_CRCY_CD?:  JTTT3012R_REQUEST_BODY_TR_CRCY_CD
    CTX_AREA_FK200?:  string
    CTX_AREA_NK200?:  string
}

export type TTTS3012R_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'NASD' | 'NAS' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type TTTS3012R_REQUEST_BODY_TR_CRCY_CD = 'USD' | 'HKD' | 'CNY' | 'JPY' | 'VND';
export interface TTTS3012R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  TTTS3012R_REQUEST_BODY_OVRS_EXCG_CD
    TR_CRCY_CD?:  TTTS3012R_REQUEST_BODY_TR_CRCY_CD
    CTX_AREA_FK200?:  string
    CTX_AREA_NK200?:  string
}

export type VTTS3012R_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'NASD' | 'NAS' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type VTTS3012R_REQUEST_BODY_TR_CRCY_CD = 'USD' | 'HKD' | 'CNY' | 'JPY' | 'VND';
export interface VTTS3012R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  VTTS3012R_REQUEST_BODY_OVRS_EXCG_CD
    TR_CRCY_CD?:  VTTS3012R_REQUEST_BODY_TR_CRCY_CD
    CTX_AREA_FK200?:  string
    CTX_AREA_NK200?:  string
}

export type JTTT3001R_REQUEST_BODY_SLL_BUY_DVSN = '00' | '01' | '02';
export type JTTT3001R_REQUEST_BODY_CCLD_NCCS_DVSN = '00' | '01' | '02';
export type JTTT3001R_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type JTTT3001R_REQUEST_BODY_SORT_SQN = 'DS' | 'AS';
export interface JTTT3001R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    PDNO?:  string
    ORD_STRT_DT?:  string
    ORD_END_DT?:  string
    SLL_BUY_DVSN?:  JTTT3001R_REQUEST_BODY_SLL_BUY_DVSN
    CCLD_NCCS_DVSN?:  JTTT3001R_REQUEST_BODY_CCLD_NCCS_DVSN
    OVRS_EXCG_CD?:  JTTT3001R_REQUEST_BODY_OVRS_EXCG_CD
    SORT_SQN?:  JTTT3001R_REQUEST_BODY_SORT_SQN
    ORD_DT?:  string
    ORD_GNO_BRNO?:  string
    ODNO?:  string
    CTX_AREA_NK200?:  string
    CTX_AREA_FK200?:  string
}

export type TTTS3035R_REQUEST_BODY_SLL_BUY_DVSN = '00' | '01' | '02';
export type TTTS3035R_REQUEST_BODY_CCLD_NCCS_DVSN = '00' | '01' | '02';
export type TTTS3035R_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type TTTS3035R_REQUEST_BODY_SORT_SQN = 'DS' | 'AS';
export interface TTTS3035R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    PDNO?:  string
    ORD_STRT_DT?:  string
    ORD_END_DT?:  string
    SLL_BUY_DVSN?:  TTTS3035R_REQUEST_BODY_SLL_BUY_DVSN
    CCLD_NCCS_DVSN?:  TTTS3035R_REQUEST_BODY_CCLD_NCCS_DVSN
    OVRS_EXCG_CD?:  TTTS3035R_REQUEST_BODY_OVRS_EXCG_CD
    SORT_SQN?:  TTTS3035R_REQUEST_BODY_SORT_SQN
    ORD_DT?:  string
    ORD_GNO_BRNO?:  string
    ODNO?:  string
    CTX_AREA_NK200?:  string
    CTX_AREA_FK200?:  string
}

export type VTTS3035R_REQUEST_BODY_SLL_BUY_DVSN = '00' | '01' | '02';
export type VTTS3035R_REQUEST_BODY_CCLD_NCCS_DVSN = '00' | '01' | '02';
export type VTTS3035R_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type VTTS3035R_REQUEST_BODY_SORT_SQN = 'DS' | 'AS';
export interface VTTS3035R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    PDNO?:  string
    ORD_STRT_DT?:  string
    ORD_END_DT?:  string
    SLL_BUY_DVSN?:  VTTS3035R_REQUEST_BODY_SLL_BUY_DVSN
    CCLD_NCCS_DVSN?:  VTTS3035R_REQUEST_BODY_CCLD_NCCS_DVSN
    OVRS_EXCG_CD?:  VTTS3035R_REQUEST_BODY_OVRS_EXCG_CD
    SORT_SQN?:  VTTS3035R_REQUEST_BODY_SORT_SQN
    ORD_DT?:  string
    ORD_GNO_BRNO?:  string
    ODNO?:  string
    CTX_AREA_NK200?:  string
    CTX_AREA_FK200?:  string
}

export type CTRP6504R_REQUEST_BODY_WCRC_FRCR_DVSN_CD = '01' | '02';
export type CTRP6504R_REQUEST_BODY_TR_MKET_CD = '00' | '00' | '01' | '02' | '03' | '04' | '05' | '00' | '01' | '02' | '03' | '04' | '01' | '01' | '02' | '01' | '02' | '03';
export type CTRP6504R_REQUEST_BODY_INQR_DVSN_CD = '00' | '01' | '02';
export interface CTRP6504R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    WCRC_FRCR_DVSN_CD?:  CTRP6504R_REQUEST_BODY_WCRC_FRCR_DVSN_CD
    NATN_CD?:  string
    TR_MKET_CD?:  CTRP6504R_REQUEST_BODY_TR_MKET_CD
    INQR_DVSN_CD?:  CTRP6504R_REQUEST_BODY_INQR_DVSN_CD
}

export type VTRP6504R_REQUEST_BODY_WCRC_FRCR_DVSN_CD = '01' | '02';
export type VTRP6504R_REQUEST_BODY_TR_MKET_CD = '00' | '00' | '01' | '02' | '03' | '04' | '05' | '00' | '01' | '02' | '03' | '04' | '01' | '01' | '02' | '01' | '02' | '03';
export type VTRP6504R_REQUEST_BODY_INQR_DVSN_CD = '00' | '01' | '02';
export interface VTRP6504R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    WCRC_FRCR_DVSN_CD?:  VTRP6504R_REQUEST_BODY_WCRC_FRCR_DVSN_CD
    NATN_CD?:  string
    TR_MKET_CD?:  VTRP6504R_REQUEST_BODY_TR_MKET_CD
    INQR_DVSN_CD?:  VTRP6504R_REQUEST_BODY_INQR_DVSN_CD
}

export type TTTT3039R_REQUEST_BODY_INQR_DVSN_CD = '00' | '01' | '02';
export type TTTT3039R_REQUEST_BODY_PRDT_TYPE_CD = '515';
export interface TTTT3039R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    INQR_STRT_DT?:  string
    INQR_END_DT?:  string
    INQR_DVSN_CD?:  TTTT3039R_REQUEST_BODY_INQR_DVSN_CD
    PRDT_TYPE_CD?:  TTTT3039R_REQUEST_BODY_PRDT_TYPE_CD
    OVRS_EXCG_CD?:  string
    CTX_AREA_FK200?:  string
    CTX_AREA_NK200?:  string
}


export interface JTTT3007R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  string
    OVRS_ORD_UNPR?:  string
    ITEM_CD?:  string
}


export interface TTTS3007R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  string
    OVRS_ORD_UNPR?:  string
    ITEM_CD?:  string
}

export type TTTS6036U_REQUEST_BODY_ORD_DVSN = '00';
export interface TTTS6036U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  string
    PDNO?:  string
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    CTAC_TLNO?:  string
    MGCO_APTM_ODNO?:  string
    ORD_SVR_DVSN_CD?:  string
    ORD_DVSN?:  TTTS6036U_REQUEST_BODY_ORD_DVSN
}

export type TTTS6037U_REQUEST_BODY_ORD_DVSN = '00';
export interface TTTS6037U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  string
    PDNO?:  string
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    CTAC_TLNO?:  string
    MGCO_APTM_ODNO?:  string
    ORD_SVR_DVSN_CD?:  string
    ORD_DVSN?:  TTTS6037U_REQUEST_BODY_ORD_DVSN
}

export type TTTS6038U_REQUEST_BODY_RVSE_CNCL_DVSN_CD = '01' | '02';
export interface TTTS6038U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  string
    PDNO?:  string
    ORGN_ODNO?:  string
    RVSE_CNCL_DVSN_CD?:  TTTS6038U_REQUEST_BODY_RVSE_CNCL_DVSN_CD
    ORD_QTY?:  string
    OVRS_ORD_UNPR?:  string
    CTAC_TLNO?:  string
    MGCO_APTM_ODNO?:  string
    ORD_SVR_DVSN_CD?:  string
}

export type TTTS3039R_REQUEST_BODY_OVRS_EXCG_CD = ' ';
export type TTTS3039R_REQUEST_BODY_CRCY_CD = ' ';
export type TTTS3039R_REQUEST_BODY_PDNO = ' ';
export interface TTTS3039R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  TTTS3039R_REQUEST_BODY_OVRS_EXCG_CD
    NATN_CD?:  string
    CRCY_CD?:  TTTS3039R_REQUEST_BODY_CRCY_CD
    PDNO?:  TTTS3039R_REQUEST_BODY_PDNO
    INQR_STRT_DT?:  string
    INQR_END_DT?:  string
    WCRC_FRCR_DVSN_CD?:  string
    CTX_AREA_FK200?:  string
    CTX_AREA_NK200?:  string
}

export type HHDFS00000300_REQUEST_BODY_EXCD = 'HKS' | 'NYS' | 'NAS' | 'AMS' | 'TSE' | 'SHS' | 'SZS' | 'SHI' | 'SZI' | 'HSX' | 'HNX' | 'BAY' | 'BAQ' | 'BAA';
export interface HHDFS00000300_REQUEST_BODY {
    AUTH?:  string
    EXCD?:  HHDFS00000300_REQUEST_BODY_EXCD
    SYMB?:  string
}

export type HHDFS76240000_REQUEST_BODY_EXCD = 'HKS' | 'NYS' | 'NAS' | 'AMS' | 'TSE' | 'SHS' | 'SZS' | 'SHI' | 'SZI' | 'HSX' | 'HNX' | 'BAY' | 'BAQ' | 'BAA';
export type HHDFS76240000_REQUEST_BODY_GUBN = '0' | '1' | '2';
export type HHDFS76240000_REQUEST_BODY_MODP = '0' | '1';
export interface HHDFS76240000_REQUEST_BODY {
    AUTH?:  string
    EXCD?:  HHDFS76240000_REQUEST_BODY_EXCD
    SYMB?:  string
    GUBN?:  HHDFS76240000_REQUEST_BODY_GUBN
    BYMD?:  string
    MODP?:  HHDFS76240000_REQUEST_BODY_MODP
    KEYB?:  string
}

export type FHKST03030100_REQUEST_BODY_FID_COND_MRKT_DIV_CODE = 'N';
export interface FHKST03030100_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  FHKST03030100_REQUEST_BODY_FID_COND_MRKT_DIV_CODE
    FID_INPUT_ISCD?:  string
    FID_INPUT_DATE_1?:  string
    FID_INPUT_DATE_2?:  string
    FID_PERIOD_DIV_CODE?:  string
}

export type HHDFS76410000_REQUEST_BODY_EXCD = 'TSE';
export interface HHDFS76410000_REQUEST_BODY {
    CO_EN_RATE?:  string
    AUTH?:  string
    EXCD?:  HHDFS76410000_REQUEST_BODY_EXCD
    CO_YN_PRICECUR?:  string
    CO_ST_PRICECUR?:  string
    CO_EN_PRICECUR?:  string
    CO_YN_RATE?:  string
    CO_ST_RATE?:  string
    CO_EN_VOLUME?:  string
    CO_YN_PER?:  string
    CO_ST_PER?:  string
    CO_EN_PER?:  string
    KEYB?:  string
    CO_ST_EPS?:  string
    CO_YN_EPS?:  string
    CO_EN_AMT?:  string
    CO_ST_AMT?:  string
    CO_YN_AMT?:  string
    CO_EN_EPS?:  string
    CO_ST_VOLUME?:  string
    CO_YN_VOLUME?:  string
    CO_EN_SHAR?:  string
    CO_ST_SHAR?:  string
    CO_YN_SHAR?:  string
    CO_EN_VALX?:  string
    CO_ST_VALX?:  string
    CO_YN_VALX?:  string
}


export interface CTOS5011R_REQUEST_BODY {
    TRAD_DT?:  string
    CTX_AREA_NK?:  string
    CTX_AREA_FK?:  string
}

export type HHDFS76200200_REQUEST_BODY_EXCD = 'TSE';
export interface HHDFS76200200_REQUEST_BODY {
    AUTH?:  string
    EXCD?:  HHDFS76200200_REQUEST_BODY_EXCD
    SYMB?:  string
}

export type OTFM3001U_REQUEST_BODY_SLL_BUY_DVSN_CD = '01' | '02';
export interface OTFM3001U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_FUTR_FX_PDNO?:  string
    SLL_BUY_DVSN_CD?:  OTFM3001U_REQUEST_BODY_SLL_BUY_DVSN_CD
    FM_LQD_USTL_CCLD_DT?:  string
    FM_LQD_USTL_CCNO?:  string
    PRIC_DVSN_CD?:  string
    FM_LIMIT_ORD_PRIC?:  string
    FM_STOP_ORD_PRIC?:  string
    FM_ORD_QTY?:  string
    FM_LQD_LMT_ORD_PRIC?:  string
    FM_LQD_STOP_ORD_PRIC?:  string
    CCLD_CNDT_CD?:  string
    CPLX_ORD_DVSN_CD?:  string
    ECIS_RSVN_ORD_YN?:  string
    FM_HDGE_ORD_SCRN_YN?:  string
}


export interface OTFM3002U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    ORGN_ORD_DT?:  string
    ORGN_ODNO?:  string
    FM_LIMIT_ORD_PRIC?:  string
    FM_STOP_ORD_PRIC?:  string
    FM_LQD_LMT_ORD_PRIC?:  string
    FM_LQD_STOP_ORD_PRIC?:  string
    FM_HDGE_ORD_SCRN_YN?:  string
    FM_MKPR_CVSN_YN?:  string
}


export interface OTFM3003U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    ORGN_ORD_DT?:  string
    ORGN_ODNO?:  string
    FM_LIMIT_ORD_PRIC?:  string
    FM_STOP_ORD_PRIC?:  string
    FM_LQD_LMT_ORD_PRIC?:  string
    FM_LQD_STOP_ORD_PRIC?:  string
    FM_HDGE_ORD_SCRN_YN?:  string
    FM_MKPR_CVSN_YN?:  string
}


export interface OTFM3116R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    CCLD_NCCS_DVSN?:  string
    SLL_BUY_DVSN_CD?:  string
    FUOP_DVSN?:  string
    CTX_AREA_FK200?:  string
    CTX_AREA_NK200?:  string
}


export interface OTFM1412R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    FUOP_DVSN?:  string
    CTX_AREA_FK100?:  string
    CTX_AREA_NK100?:  string
}


export interface OTFM3304R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_FUTR_FX_PDNO?:  string
    SLL_BUY_DVSN_CD?:  string
    FM_ORD_PRIC?:  string
    ECIS_RSVN_ORD_YN?:  string
}

export type OTFM3118R_REQUEST_BODY_CRCY_CD = '%%%';
export interface OTFM3118R_REQUEST_BODY {
    INQR_TERM_FROM_DT?:  string
    INQR_TERM_TO_DT?:  string
    CANO?:  string
    ACNT_PRDT_CD?:  string
    CRCY_CD?:  OTFM3118R_REQUEST_BODY_CRCY_CD
    WHOL_TRSL_YN?:  string
    FUOP_DVSN?:  string
    CTX_AREA_FK200?:  string
    CTX_AREA_NK200?:  string
}

export type OTFM3122R_REQUEST_BODY_CRCY_CD = '%%%' | 'VND';
export interface OTFM3122R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    STRT_DT?:  string
    END_DT?:  string
    FUOP_DVSN_CD?:  string
    FM_PDGR_CD?:  string
    CRCY_CD?:  OTFM3122R_REQUEST_BODY_CRCY_CD
    FM_ITEM_FTNG_YN?:  string
    SLL_BUY_DVSN_CD?:  string
    CTX_AREA_FK200?:  string
    CTX_AREA_NK200?:  string
}

export type OTFM1411R_REQUEST_BODY_CRCY_CD = 'VND';
export interface OTFM1411R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    CRCY_CD?:  OTFM1411R_REQUEST_BODY_CRCY_CD
    INQR_DT?:  string
}


export interface OTFM3120R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    STRT_DT?:  string
    END_DT?:  string
    FM_PDGR_CD?:  string
    CCLD_NCCS_DVSN?:  string
    SLL_BUY_DVSN_CD?:  string
    FUOP_DVSN?:  string
    CTX_AREA_FK200?:  string
    CTX_AREA_NK200?:  string
}

export type OTFM3114R_REQUEST_BODY_CRCY_CD = '%%%' | 'VND';
export interface OTFM3114R_REQUEST_BODY {
    INQR_TERM_FROM_DT?:  string
    INQR_TERM_TO_DT?:  string
    CANO?:  string
    ACNT_PRDT_CD?:  string
    ACNT_TR_TYPE_CD?:  string
    CRCY_CD?:  OTFM3114R_REQUEST_BODY_CRCY_CD
    CTX_AREA_FK100?:  string
    CTX_AREA_NK100?:  string
    PWD_CHK_YN?:  string
}


export interface HHDFC55010100_REQUEST_BODY {
    SRS_CD?:  string
}


export interface HHDFC55010000_REQUEST_BODY {
    SRS_CD?:  string
}



export interface APPROVAL_RESPONSE {
    code: number | string,
    message: string,
    header?: APPROVAL_RESPONSE_HEADER,
    body?: APPROVAL_RESPONSE_BODY
}
                    
export interface HASHKEY_RESPONSE {
    code: number | string,
    message: string,
    header?: HASHKEY_RESPONSE_HEADER,
    body?: HASHKEY_RESPONSE_BODY
}
                    
export interface TOKENP_RESPONSE {
    code: number | string,
    message: string,
    header?: TOKENP_RESPONSE_HEADER,
    body?: TOKENP_RESPONSE_BODY
}
                    
export interface REVOKEP_RESPONSE {
    code: number | string,
    message: string,
    header?: REVOKEP_RESPONSE_HEADER,
    body?: REVOKEP_RESPONSE_BODY
}
                    
export interface TTTC0802U_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTC0802U_RESPONSE_HEADER,
    body?: TTTC0802U_RESPONSE_BODY
}
                    
export interface TTTC0801U_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTC0801U_RESPONSE_HEADER,
    body?: TTTC0801U_RESPONSE_BODY
}
                    
export interface VTTC0802U_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTC0802U_RESPONSE_HEADER,
    body?: VTTC0802U_RESPONSE_BODY
}
                    
export interface VTTC0801U_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTC0801U_RESPONSE_HEADER,
    body?: VTTC0801U_RESPONSE_BODY
}
                    
export interface TTTC0852U_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTC0852U_RESPONSE_HEADER,
    body?: TTTC0852U_RESPONSE_BODY
}
                    
export interface TTTC0851U_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTC0851U_RESPONSE_HEADER,
    body?: TTTC0851U_RESPONSE_BODY
}
                    
export interface TTTC0803U_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTC0803U_RESPONSE_HEADER,
    body?: TTTC0803U_RESPONSE_BODY
}
                    
export interface VTTC0803U_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTC0803U_RESPONSE_HEADER,
    body?: VTTC0803U_RESPONSE_BODY
}
                    
export interface TTTC8036R_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTC8036R_RESPONSE_HEADER,
    body?: TTTC8036R_RESPONSE_BODY
}
                    
export interface TTTC8001R_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTC8001R_RESPONSE_HEADER,
    body?: TTTC8001R_RESPONSE_BODY
}
                    
export interface CTSC9115R_RESPONSE {
    code: number | string,
    message: string,
    header?: CTSC9115R_RESPONSE_HEADER,
    body?: CTSC9115R_RESPONSE_BODY
}
                    
export interface VTTC8001R_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTC8001R_RESPONSE_HEADER,
    body?: VTTC8001R_RESPONSE_BODY
}
                    
export interface VTSC9115R_RESPONSE {
    code: number | string,
    message: string,
    header?: VTSC9115R_RESPONSE_HEADER,
    body?: VTSC9115R_RESPONSE_BODY
}
                    
export interface TTTC8434R_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTC8434R_RESPONSE_HEADER,
    body?: TTTC8434R_RESPONSE_BODY
}
                    
export interface VTTC8434R_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTC8434R_RESPONSE_HEADER,
    body?: VTTC8434R_RESPONSE_BODY
}
                    
export interface TTTC8908R_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTC8908R_RESPONSE_HEADER,
    body?: TTTC8908R_RESPONSE_BODY
}
                    
export interface VTTC8908R_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTC8908R_RESPONSE_HEADER,
    body?: VTTC8908R_RESPONSE_BODY
}
                    
export interface CTSC0008U_RESPONSE {
    code: number | string,
    message: string,
    header?: CTSC0008U_RESPONSE_HEADER,
    body?: CTSC0008U_RESPONSE_BODY
}
                    
export interface CTSC0009U_RESPONSE {
    code: number | string,
    message: string,
    header?: CTSC0009U_RESPONSE_HEADER,
    body?: CTSC0009U_RESPONSE_BODY
}
                    
export interface CTSC0013U_RESPONSE {
    code: number | string,
    message: string,
    header?: CTSC0013U_RESPONSE_HEADER,
    body?: CTSC0013U_RESPONSE_BODY
}
                    
export interface CTSC0004R_RESPONSE {
    code: number | string,
    message: string,
    header?: CTSC0004R_RESPONSE_HEADER,
    body?: CTSC0004R_RESPONSE_BODY
}
                    
export interface TTTC8494R_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTC8494R_RESPONSE_HEADER,
    body?: TTTC8494R_RESPONSE_BODY
}
                    
export interface TTTC8909R_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTC8909R_RESPONSE_HEADER,
    body?: TTTC8909R_RESPONSE_BODY
}
                    
export interface CTRP6548R_RESPONSE {
    code: number | string,
    message: string,
    header?: CTRP6548R_RESPONSE_HEADER,
    body?: CTRP6548R_RESPONSE_BODY
}
                    
export interface FHKST01010100_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKST01010100_RESPONSE_HEADER,
    body?: FHKST01010100_RESPONSE_BODY
}
                    
export interface FHKST01010300_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKST01010300_RESPONSE_HEADER,
    body?: FHKST01010300_RESPONSE_BODY
}
                    
export interface FHKST01010400_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKST01010400_RESPONSE_HEADER,
    body?: FHKST01010400_RESPONSE_BODY
}
                    
export interface FHKST01010200_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKST01010200_RESPONSE_HEADER,
    body?: FHKST01010200_RESPONSE_BODY
}
                    
export interface FHKST01010900_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKST01010900_RESPONSE_HEADER,
    body?: FHKST01010900_RESPONSE_BODY
}
                    
export interface FHKST01010600_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKST01010600_RESPONSE_HEADER,
    body?: FHKST01010600_RESPONSE_BODY
}
                    
export interface FHKEW15010000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKEW15010000_RESPONSE_HEADER,
    body?: FHKEW15010000_RESPONSE_BODY
}
                    
export interface FHKST03010100_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKST03010100_RESPONSE_HEADER,
    body?: FHKST03010100_RESPONSE_BODY
}
                    
export interface FHKUP03500100_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKUP03500100_RESPONSE_HEADER,
    body?: FHKUP03500100_RESPONSE_BODY
}
                    
export interface FHPST01060000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST01060000_RESPONSE_HEADER,
    body?: FHPST01060000_RESPONSE_BODY
}
                    
export interface FHPST02310000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST02310000_RESPONSE_HEADER,
    body?: FHPST02310000_RESPONSE_BODY
}
                    
export interface FHPST02320000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST02320000_RESPONSE_HEADER,
    body?: FHPST02320000_RESPONSE_BODY
}
                    
export interface FHKST03010200_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKST03010200_RESPONSE_HEADER,
    body?: FHKST03010200_RESPONSE_BODY
}
                    
export interface CTPF1604R_RESPONSE {
    code: number | string,
    message: string,
    header?: CTPF1604R_RESPONSE_HEADER,
    body?: CTPF1604R_RESPONSE_BODY
}
                    
export interface CTCA0903R_RESPONSE {
    code: number | string,
    message: string,
    header?: CTCA0903R_RESPONSE_HEADER,
    body?: CTCA0903R_RESPONSE_BODY
}
                    
export interface FHPTJ04400000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPTJ04400000_RESPONSE_HEADER,
    body?: FHPTJ04400000_RESPONSE_BODY
}
                    
export interface HHKST03900300_RESPONSE {
    code: number | string,
    message: string,
    header?: HHKST03900300_RESPONSE_HEADER,
    body?: HHKST03900300_RESPONSE_BODY
}
                    
export interface HHKST03900400_RESPONSE {
    code: number | string,
    message: string,
    header?: HHKST03900400_RESPONSE_HEADER,
    body?: HHKST03900400_RESPONSE_BODY
}
                    
export interface FHPPG04650100_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPPG04650100_RESPONSE_HEADER,
    body?: FHPPG04650100_RESPONSE_BODY
}
                    
export interface FHPST01710000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST01710000_RESPONSE_HEADER,
    body?: FHPST01710000_RESPONSE_BODY
}
                    
export interface HHPTJ04160200_RESPONSE {
    code: number | string,
    message: string,
    header?: HHPTJ04160200_RESPONSE_HEADER,
    body?: HHPTJ04160200_RESPONSE_BODY
}
                    
export interface TTTO1101U_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTO1101U_RESPONSE_HEADER,
    body?: TTTO1101U_RESPONSE_BODY
}
                    
export interface JTCE1001U_RESPONSE {
    code: number | string,
    message: string,
    header?: JTCE1001U_RESPONSE_HEADER,
    body?: JTCE1001U_RESPONSE_BODY
}
                    
export interface VTTO1101U_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTO1101U_RESPONSE_HEADER,
    body?: VTTO1101U_RESPONSE_BODY
}
                    
export interface VTCE1001U_RESPONSE {
    code: number | string,
    message: string,
    header?: VTCE1001U_RESPONSE_HEADER,
    body?: VTCE1001U_RESPONSE_BODY
}
                    
export interface TTTO1103U_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTO1103U_RESPONSE_HEADER,
    body?: TTTO1103U_RESPONSE_BODY
}
                    
export interface JTCE1002U_RESPONSE {
    code: number | string,
    message: string,
    header?: JTCE1002U_RESPONSE_HEADER,
    body?: JTCE1002U_RESPONSE_BODY
}
                    
export interface VTTO1103U_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTO1103U_RESPONSE_HEADER,
    body?: VTTO1103U_RESPONSE_BODY
}
                    
export interface VTCE1002U_RESPONSE {
    code: number | string,
    message: string,
    header?: VTCE1002U_RESPONSE_HEADER,
    body?: VTCE1002U_RESPONSE_BODY
}
                    
export interface TTTO5201R_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTO5201R_RESPONSE_HEADER,
    body?: TTTO5201R_RESPONSE_BODY
}
                    
export interface VTTO5201R_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTO5201R_RESPONSE_HEADER,
    body?: VTTO5201R_RESPONSE_BODY
}
                    
export interface CTFO6118R_RESPONSE {
    code: number | string,
    message: string,
    header?: CTFO6118R_RESPONSE_HEADER,
    body?: CTFO6118R_RESPONSE_BODY
}
                    
export interface VTFO6118R_RESPONSE {
    code: number | string,
    message: string,
    header?: VTFO6118R_RESPONSE_HEADER,
    body?: VTFO6118R_RESPONSE_BODY
}
                    
export interface TTTO5105R_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTO5105R_RESPONSE_HEADER,
    body?: TTTO5105R_RESPONSE_BODY
}
                    
export interface VTTO5105R_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTO5105R_RESPONSE_HEADER,
    body?: VTTO5105R_RESPONSE_BODY
}
                    
export interface JTCE5005R_RESPONSE {
    code: number | string,
    message: string,
    header?: JTCE5005R_RESPONSE_HEADER,
    body?: JTCE5005R_RESPONSE_BODY
}
                    
export interface JTCE6001R_RESPONSE {
    code: number | string,
    message: string,
    header?: JTCE6001R_RESPONSE_HEADER,
    body?: JTCE6001R_RESPONSE_BODY
}
                    
export interface FHMIF10000000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHMIF10000000_RESPONSE_HEADER,
    body?: FHMIF10000000_RESPONSE_BODY
}
                    
export interface FHMIF10010000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHMIF10010000_RESPONSE_HEADER,
    body?: FHMIF10010000_RESPONSE_BODY
}
                    
export interface FHKIF03020100_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKIF03020100_RESPONSE_HEADER,
    body?: FHKIF03020100_RESPONSE_BODY
}
                    
export interface TTTT1002U_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTT1002U_RESPONSE_HEADER,
    body?: TTTT1002U_RESPONSE_BODY
}
                    
export interface TTTT1006U_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTT1006U_RESPONSE_HEADER,
    body?: TTTT1006U_RESPONSE_BODY
}
                    
export interface TTTS0308U_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTS0308U_RESPONSE_HEADER,
    body?: TTTS0308U_RESPONSE_BODY
}
                    
export interface TTTS0307U_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTS0307U_RESPONSE_HEADER,
    body?: TTTS0307U_RESPONSE_BODY
}
                    
export interface TTTS0202U_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTS0202U_RESPONSE_HEADER,
    body?: TTTS0202U_RESPONSE_BODY
}
                    
export interface TTTS1005U_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTS1005U_RESPONSE_HEADER,
    body?: TTTS1005U_RESPONSE_BODY
}
                    
export interface TTTS1002U_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTS1002U_RESPONSE_HEADER,
    body?: TTTS1002U_RESPONSE_BODY
}
                    
export interface TTTS1001U_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTS1001U_RESPONSE_HEADER,
    body?: TTTS1001U_RESPONSE_BODY
}
                    
export interface TTTS0305U_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTS0305U_RESPONSE_HEADER,
    body?: TTTS0305U_RESPONSE_BODY
}
                    
export interface TTTS0304U_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTS0304U_RESPONSE_HEADER,
    body?: TTTS0304U_RESPONSE_BODY
}
                    
export interface TTTS0311U_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTS0311U_RESPONSE_HEADER,
    body?: TTTS0311U_RESPONSE_BODY
}
                    
export interface TTTS0310U_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTS0310U_RESPONSE_HEADER,
    body?: TTTS0310U_RESPONSE_BODY
}
                    
export interface VTTT1002U_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTT1002U_RESPONSE_HEADER,
    body?: VTTT1002U_RESPONSE_BODY
}
                    
export interface VTTT1001U_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTT1001U_RESPONSE_HEADER,
    body?: VTTT1001U_RESPONSE_BODY
}
                    
export interface VTTS0308U_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTS0308U_RESPONSE_HEADER,
    body?: VTTS0308U_RESPONSE_BODY
}
                    
export interface VTTS0307U_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTS0307U_RESPONSE_HEADER,
    body?: VTTS0307U_RESPONSE_BODY
}
                    
export interface VTTS0202U_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTS0202U_RESPONSE_HEADER,
    body?: VTTS0202U_RESPONSE_BODY
}
                    
export interface VTTS1005U_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTS1005U_RESPONSE_HEADER,
    body?: VTTS1005U_RESPONSE_BODY
}
                    
export interface VTTS1002U_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTS1002U_RESPONSE_HEADER,
    body?: VTTS1002U_RESPONSE_BODY
}
                    
export interface VTTS1001U_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTS1001U_RESPONSE_HEADER,
    body?: VTTS1001U_RESPONSE_BODY
}
                    
export interface VTTS0305U_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTS0305U_RESPONSE_HEADER,
    body?: VTTS0305U_RESPONSE_BODY
}
                    
export interface VTTS0304U_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTS0304U_RESPONSE_HEADER,
    body?: VTTS0304U_RESPONSE_BODY
}
                    
export interface VTTS0311U_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTS0311U_RESPONSE_HEADER,
    body?: VTTS0311U_RESPONSE_BODY
}
                    
export interface VTTS0310U_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTS0310U_RESPONSE_HEADER,
    body?: VTTS0310U_RESPONSE_BODY
}
                    
export interface TTTT1004U_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTT1004U_RESPONSE_HEADER,
    body?: TTTT1004U_RESPONSE_BODY
}
                    
export interface TTTS1003U_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTS1003U_RESPONSE_HEADER,
    body?: TTTS1003U_RESPONSE_BODY
}
                    
export interface TTTS0309U_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTS0309U_RESPONSE_HEADER,
    body?: TTTS0309U_RESPONSE_BODY
}
                    
export interface TTTS0302U_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTS0302U_RESPONSE_HEADER,
    body?: TTTS0302U_RESPONSE_BODY
}
                    
export interface TTTS0306U_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTS0306U_RESPONSE_HEADER,
    body?: TTTS0306U_RESPONSE_BODY
}
                    
export interface TTTS0312U_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTS0312U_RESPONSE_HEADER,
    body?: TTTS0312U_RESPONSE_BODY
}
                    
export interface VTTT1004U_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTT1004U_RESPONSE_HEADER,
    body?: VTTT1004U_RESPONSE_BODY
}
                    
export interface VTTS1003U_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTS1003U_RESPONSE_HEADER,
    body?: VTTS1003U_RESPONSE_BODY
}
                    
export interface VTTS0309U_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTS0309U_RESPONSE_HEADER,
    body?: VTTS0309U_RESPONSE_BODY
}
                    
export interface VTTS0302U_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTS0302U_RESPONSE_HEADER,
    body?: VTTS0302U_RESPONSE_BODY
}
                    
export interface VTTS0306U_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTS0306U_RESPONSE_HEADER,
    body?: VTTS0306U_RESPONSE_BODY
}
                    
export interface VTTS0312U_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTS0312U_RESPONSE_HEADER,
    body?: VTTS0312U_RESPONSE_BODY
}
                    
export interface TTTT3016U_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTT3016U_RESPONSE_HEADER,
    body?: TTTT3016U_RESPONSE_BODY
}
                    
export interface TTTT3014U_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTT3014U_RESPONSE_HEADER,
    body?: TTTT3014U_RESPONSE_BODY
}
                    
export interface TTTS3013U_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTS3013U_RESPONSE_HEADER,
    body?: TTTS3013U_RESPONSE_BODY
}
                    
export interface VTTT3016U_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTT3016U_RESPONSE_HEADER,
    body?: VTTT3016U_RESPONSE_BODY
}
                    
export interface VTTT3014U_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTT3014U_RESPONSE_HEADER,
    body?: VTTT3014U_RESPONSE_BODY
}
                    
export interface VTTS3013U_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTS3013U_RESPONSE_HEADER,
    body?: VTTS3013U_RESPONSE_BODY
}
                    
export interface TTTT3017U_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTT3017U_RESPONSE_HEADER,
    body?: TTTT3017U_RESPONSE_BODY
}
                    
export interface VTTT3017U_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTT3017U_RESPONSE_HEADER,
    body?: VTTT3017U_RESPONSE_BODY
}
                    
export interface JTTT3018R_RESPONSE {
    code: number | string,
    message: string,
    header?: JTTT3018R_RESPONSE_HEADER,
    body?: JTTT3018R_RESPONSE_BODY
}
                    
export interface TTTS3018R_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTS3018R_RESPONSE_HEADER,
    body?: TTTS3018R_RESPONSE_BODY
}
                    
export interface VTTS3018R_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTS3018R_RESPONSE_HEADER,
    body?: VTTS3018R_RESPONSE_BODY
}
                    
export interface JTTT3012R_RESPONSE {
    code: number | string,
    message: string,
    header?: JTTT3012R_RESPONSE_HEADER,
    body?: JTTT3012R_RESPONSE_BODY
}
                    
export interface TTTS3012R_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTS3012R_RESPONSE_HEADER,
    body?: TTTS3012R_RESPONSE_BODY
}
                    
export interface VTTS3012R_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTS3012R_RESPONSE_HEADER,
    body?: VTTS3012R_RESPONSE_BODY
}
                    
export interface JTTT3001R_RESPONSE {
    code: number | string,
    message: string,
    header?: JTTT3001R_RESPONSE_HEADER,
    body?: JTTT3001R_RESPONSE_BODY
}
                    
export interface TTTS3035R_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTS3035R_RESPONSE_HEADER,
    body?: TTTS3035R_RESPONSE_BODY
}
                    
export interface VTTS3035R_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTS3035R_RESPONSE_HEADER,
    body?: VTTS3035R_RESPONSE_BODY
}
                    
export interface CTRP6504R_RESPONSE {
    code: number | string,
    message: string,
    header?: CTRP6504R_RESPONSE_HEADER,
    body?: CTRP6504R_RESPONSE_BODY
}
                    
export interface VTRP6504R_RESPONSE {
    code: number | string,
    message: string,
    header?: VTRP6504R_RESPONSE_HEADER,
    body?: VTRP6504R_RESPONSE_BODY
}
                    
export interface TTTT3039R_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTT3039R_RESPONSE_HEADER,
    body?: TTTT3039R_RESPONSE_BODY
}
                    
export interface JTTT3007R_RESPONSE {
    code: number | string,
    message: string,
    header?: JTTT3007R_RESPONSE_HEADER,
    body?: JTTT3007R_RESPONSE_BODY
}
                    
export interface TTTS3007R_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTS3007R_RESPONSE_HEADER,
    body?: TTTS3007R_RESPONSE_BODY
}
                    
export interface TTTS6036U_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTS6036U_RESPONSE_HEADER,
    body?: TTTS6036U_RESPONSE_BODY
}
                    
export interface TTTS6037U_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTS6037U_RESPONSE_HEADER,
    body?: TTTS6037U_RESPONSE_BODY
}
                    
export interface TTTS6038U_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTS6038U_RESPONSE_HEADER,
    body?: TTTS6038U_RESPONSE_BODY
}
                    
export interface TTTS3039R_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTS3039R_RESPONSE_HEADER,
    body?: TTTS3039R_RESPONSE_BODY
}
                    
export interface HHDFS00000300_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFS00000300_RESPONSE_HEADER,
    body?: HHDFS00000300_RESPONSE_BODY
}
                    
export interface HHDFS76240000_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFS76240000_RESPONSE_HEADER,
    body?: HHDFS76240000_RESPONSE_BODY
}
                    
export interface FHKST03030100_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKST03030100_RESPONSE_HEADER,
    body?: FHKST03030100_RESPONSE_BODY
}
                    
export interface HHDFS76410000_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFS76410000_RESPONSE_HEADER,
    body?: HHDFS76410000_RESPONSE_BODY
}
                    
export interface CTOS5011R_RESPONSE {
    code: number | string,
    message: string,
    header?: CTOS5011R_RESPONSE_HEADER,
    body?: CTOS5011R_RESPONSE_BODY
}
                    
export interface HHDFS76200200_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFS76200200_RESPONSE_HEADER,
    body?: HHDFS76200200_RESPONSE_BODY
}
                    
export interface OTFM3001U_RESPONSE {
    code: number | string,
    message: string,
    header?: OTFM3001U_RESPONSE_HEADER,
    body?: OTFM3001U_RESPONSE_BODY
}
                    
export interface OTFM3002U_RESPONSE {
    code: number | string,
    message: string,
    header?: OTFM3002U_RESPONSE_HEADER,
    body?: OTFM3002U_RESPONSE_BODY
}
                    
export interface OTFM3003U_RESPONSE {
    code: number | string,
    message: string,
    header?: OTFM3003U_RESPONSE_HEADER,
    body?: OTFM3003U_RESPONSE_BODY
}
                    
export interface OTFM3116R_RESPONSE {
    code: number | string,
    message: string,
    header?: OTFM3116R_RESPONSE_HEADER,
    body?: OTFM3116R_RESPONSE_BODY
}
                    
export interface OTFM1412R_RESPONSE {
    code: number | string,
    message: string,
    header?: OTFM1412R_RESPONSE_HEADER,
    body?: OTFM1412R_RESPONSE_BODY
}
                    
export interface OTFM3304R_RESPONSE {
    code: number | string,
    message: string,
    header?: OTFM3304R_RESPONSE_HEADER,
    body?: OTFM3304R_RESPONSE_BODY
}
                    
export interface OTFM3118R_RESPONSE {
    code: number | string,
    message: string,
    header?: OTFM3118R_RESPONSE_HEADER,
    body?: OTFM3118R_RESPONSE_BODY
}
                    
export interface OTFM3122R_RESPONSE {
    code: number | string,
    message: string,
    header?: OTFM3122R_RESPONSE_HEADER,
    body?: OTFM3122R_RESPONSE_BODY
}
                    
export interface OTFM1411R_RESPONSE {
    code: number | string,
    message: string,
    header?: OTFM1411R_RESPONSE_HEADER,
    body?: OTFM1411R_RESPONSE_BODY
}
                    
export interface OTFM3120R_RESPONSE {
    code: number | string,
    message: string,
    header?: OTFM3120R_RESPONSE_HEADER,
    body?: OTFM3120R_RESPONSE_BODY
}
                    
export interface OTFM3114R_RESPONSE {
    code: number | string,
    message: string,
    header?: OTFM3114R_RESPONSE_HEADER,
    body?: OTFM3114R_RESPONSE_BODY
}
                    
export interface HHDFC55010100_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFC55010100_RESPONSE_HEADER,
    body?: HHDFC55010100_RESPONSE_BODY
}
                    
export interface HHDFC55010000_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFC55010000_RESPONSE_HEADER,
    body?: HHDFC55010000_RESPONSE_BODY
}
                    

export interface APPROVAL_RESPONSE_HEADER {
}


export interface HASHKEY_RESPONSE_HEADER {
}


export interface TOKENP_RESPONSE_HEADER {
}


export interface REVOKEP_RESPONSE_HEADER {
}

export type TTTC0802U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTC0802U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC0802U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTC0801U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTC0801U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC0801U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTC0802U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTC0802U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTC0802U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTC0801U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTC0801U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTC0801U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTC0852U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTC0852U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC0852U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTC0851U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTC0851U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC0851U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTC0803U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTC0803U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC0803U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTC0803U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTC0803U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTC0803U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTC8036R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTC8036R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC8036R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTC8001R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTC8001R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC8001R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTSC9115R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface CTSC9115R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTSC9115R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTC8001R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTC8001R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTC8001R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTSC9115R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTSC9115R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTSC9115R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTC8434R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTC8434R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC8434R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTC8434R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTC8434R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTC8434R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTC8908R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTC8908R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC8908R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTC8908R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTC8908R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTC8908R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTSC0008U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface CTSC0008U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTSC0008U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTSC0009U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface CTSC0009U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTSC0009U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTSC0013U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface CTSC0013U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTSC0013U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTSC0004R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface CTSC0004R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTSC0004R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTC8494R_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface TTTC8494R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC8494R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTC8909R_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface TTTC8909R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC8909R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTRP6548R_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface CTRP6548R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTRP6548R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST01010100_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface FHKST01010100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST01010100_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST01010300_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface FHKST01010300_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST01010300_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST01010400_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface FHKST01010400_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST01010400_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST01010200_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface FHKST01010200_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST01010200_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST01010900_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface FHKST01010900_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST01010900_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST01010600_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface FHKST01010600_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST01010600_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKEW15010000_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface FHKEW15010000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKEW15010000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST03010100_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface FHKST03010100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST03010100_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}


export interface FHKUP03500100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    gt_uid?:  string
}


export interface FHPST01060000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  string
    gt_uid?:  string
}

export type FHPST02310000_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface FHPST02310000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST02310000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST02320000_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface FHPST02320000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST02320000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST03010200_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface FHKST03010200_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST03010200_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTPF1604R_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface CTPF1604R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTPF1604R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTCA0903R_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface CTCA0903R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTCA0903R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPTJ04400000_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface FHPTJ04400000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPTJ04400000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHKST03900300_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface HHKST03900300_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHKST03900300_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHKST03900400_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface HHKST03900400_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHKST03900400_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPPG04650100_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface FHPPG04650100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPPG04650100_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST01710000_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface FHPST01710000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST01710000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHPTJ04160200_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface HHPTJ04160200_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHPTJ04160200_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}


export interface TTTO1101U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    gt_uid?:  string
}


export interface JTCE1001U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    gt_uid?:  string
}


export interface VTTO1101U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    gt_uid?:  string
}


export interface VTCE1001U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    gt_uid?:  string
}


export interface TTTO1103U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    gt_uid?:  string
}


export interface JTCE1002U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    gt_uid?:  string
}


export interface VTTO1103U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    gt_uid?:  string
}


export interface VTCE1002U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    gt_uid?:  string
}

export type TTTO5201R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTO5201R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTO5201R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTO5201R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTO5201R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTO5201R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTFO6118R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface CTFO6118R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTFO6118R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTFO6118R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTFO6118R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTFO6118R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTO5105R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTO5105R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTO5105R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTO5105R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTO5105R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTO5105R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type JTCE5005R_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface JTCE5005R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  JTCE5005R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type JTCE6001R_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface JTCE6001R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  JTCE6001R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHMIF10000000_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface FHMIF10000000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHMIF10000000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHMIF10010000_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface FHMIF10010000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHMIF10010000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}


export interface FHKIF03020100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    gt_uid?:  string
}

export type TTTT1002U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTT1002U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTT1002U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTT1006U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTT1006U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTT1006U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS0308U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTS0308U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS0308U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS0307U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTS0307U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS0307U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS0202U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTS0202U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS0202U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS1005U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTS1005U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS1005U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS1002U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTS1002U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS1002U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS1001U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTS1001U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS1001U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS0305U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTS0305U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS0305U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS0304U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTS0304U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS0304U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS0311U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTS0311U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS0311U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS0310U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTS0310U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS0310U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTT1002U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTT1002U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTT1002U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTT1001U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTT1001U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTT1001U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS0308U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTS0308U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS0308U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS0307U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTS0307U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS0307U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS0202U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTS0202U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS0202U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS1005U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTS1005U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS1005U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS1002U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTS1002U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS1002U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS1001U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTS1001U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS1001U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS0305U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTS0305U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS0305U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS0304U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTS0304U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS0304U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS0311U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTS0311U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS0311U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS0310U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTS0310U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS0310U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTT1004U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTT1004U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTT1004U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS1003U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTS1003U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS1003U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS0309U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTS0309U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS0309U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS0302U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTS0302U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS0302U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS0306U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTS0306U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS0306U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS0312U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTS0312U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS0312U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTT1004U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTT1004U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTT1004U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS1003U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTS1003U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS1003U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS0309U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTS0309U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS0309U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS0302U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTS0302U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS0302U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS0306U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTS0306U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS0306U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS0312U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTS0312U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS0312U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTT3016U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTT3016U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTT3016U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTT3014U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTT3014U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTT3014U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS3013U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTS3013U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS3013U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTT3016U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTT3016U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTT3016U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTT3014U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTT3014U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTT3014U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS3013U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTS3013U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS3013U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTT3017U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTT3017U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTT3017U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTT3017U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTT3017U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTT3017U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type JTTT3018R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface JTTT3018R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  JTTT3018R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS3018R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTS3018R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS3018R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS3018R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTS3018R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS3018R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type JTTT3012R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface JTTT3012R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  JTTT3012R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS3012R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTS3012R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS3012R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS3012R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTS3012R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS3012R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type JTTT3001R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface JTTT3001R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  JTTT3001R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS3035R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface TTTS3035R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS3035R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS3035R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTS3035R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS3035R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTRP6504R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface CTRP6504R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTRP6504R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTRP6504R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTRP6504R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTRP6504R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTT3039R_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface TTTT3039R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTT3039R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type JTTT3007R_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface JTTT3007R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  JTTT3007R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS3007R_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface TTTS3007R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS3007R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS6036U_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface TTTS6036U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS6036U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS6037U_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface TTTS6037U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS6037U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS6038U_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface TTTS6038U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS6038U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS3039R_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface TTTS3039R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS3039R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFS00000300_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface HHDFS00000300_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFS00000300_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFS76240000_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface HHDFS76240000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFS76240000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST03030100_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface FHKST03030100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST03030100_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFS76410000_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface HHDFS76410000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFS76410000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTOS5011R_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface CTOS5011R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTOS5011R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFS76200200_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface HHDFS76200200_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFS76200200_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type OTFM3001U_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface OTFM3001U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  OTFM3001U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type OTFM3002U_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface OTFM3002U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  OTFM3002U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type OTFM3003U_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface OTFM3003U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  OTFM3003U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type OTFM3116R_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface OTFM3116R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  OTFM3116R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type OTFM1412R_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface OTFM1412R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  OTFM1412R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type OTFM3304R_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface OTFM3304R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  OTFM3304R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type OTFM3118R_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface OTFM3118R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  OTFM3118R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type OTFM3122R_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface OTFM3122R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  OTFM3122R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type OTFM1411R_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface OTFM1411R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  OTFM1411R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type OTFM3120R_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface OTFM3120R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  OTFM3120R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type OTFM3114R_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface OTFM3114R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  OTFM3114R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFC55010100_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface HHDFC55010100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFC55010100_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFC55010000_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface HHDFC55010000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFC55010000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}



export interface APPROVAL_RESPONSE_BODY {
    approval_key?:  string
}


export interface HASHKEY_RESPONSE_BODY_BODY {
}


export interface HASHKEY_RESPONSE_BODY {
    BODY?:  HASHKEY_RESPONSE_BODY_BODY
    HASH?:  string
}


export interface TOKENP_RESPONSE_BODY {
    access_token?:  string
    token_type?:  string
    expires_in?:  number
    access_token_token_expired?:  string
}


export interface REVOKEP_RESPONSE_BODY {
    code?:  string
    message?:  string
}


export interface TTTC0802U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface TTTC0802U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg?:  string
    output?:  Array<TTTC0802U_RESPONSE_BODY_OUTPUT>
}


export interface TTTC0801U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface TTTC0801U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg?:  string
    output?:  Array<TTTC0801U_RESPONSE_BODY_OUTPUT>
}


export interface VTTC0802U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface VTTC0802U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg?:  string
    output?:  Array<VTTC0802U_RESPONSE_BODY_OUTPUT>
}


export interface VTTC0801U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface VTTC0801U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg?:  string
    output?:  Array<VTTC0801U_RESPONSE_BODY_OUTPUT>
}


export interface TTTC0852U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface TTTC0852U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<TTTC0852U_RESPONSE_BODY_OUTPUT>
}


export interface TTTC0851U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface TTTC0851U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<TTTC0851U_RESPONSE_BODY_OUTPUT>
}


export interface TTTC0803U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface TTTC0803U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<TTTC0803U_RESPONSE_BODY_OUTPUT>
}


export interface VTTC0803U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface VTTC0803U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<VTTC0803U_RESPONSE_BODY_OUTPUT>
}

export type TTTC8036R_RESPONSE_BODY_OUTPUT_SLL_BUY_DVSN_CD = '01' | '02';
export type TTTC8036R_RESPONSE_BODY_OUTPUT_ORD_DVSN_CD = '00' | '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '51';
export interface TTTC8036R_RESPONSE_BODY_OUTPUT {
    ord_gno_brno?:  string
    odno?:  string
    orgn_odno?:  string
    ord_dvsn_name?:  string
    pdno?:  string
    prdt_name?:  string
    rvse_cncl_dvsn_name?:  string
    ord_qty?:  string
    ord_unpr?:  string
    ord_tmd?:  string
    tot_ccld_qty?:  string
    tot_ccld_amt?:  string
    psbl_qty?:  string
    sll_buy_dvsn_cd?:  TTTC8036R_RESPONSE_BODY_OUTPUT_SLL_BUY_DVSN_CD
    ord_dvsn_cd?:  TTTC8036R_RESPONSE_BODY_OUTPUT_ORD_DVSN_CD
    mgco_aptm_odno?:  string
}


export interface TTTC8036R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    ctx_area_fk100?:  string
    ctx_area_nk100?:  string
    output?:  Array<TTTC8036R_RESPONSE_BODY_OUTPUT>
}

export type TTTC8001R_RESPONSE_BODY_OUTPUT1_SLL_BUY_DVSN_CD = '01' | '02';
export type TTTC8001R_RESPONSE_BODY_OUTPUT1_ORD_DVSN_CD = '00' | '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16';
export type TTTC8001R_RESPONSE_BODY_OUTPUT1_PRDT_TYPE_CD = '300' | '301' | '302' | '306';
export type TTTC8001R_RESPONSE_BODY_OUTPUT1_EXCG_DVSN_CD = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '21' | '51' | '52' | '53' | '54' | '55' | '56' | '57' | '58' | '59' | '61' | '64' | '65' | '81';
export interface TTTC8001R_RESPONSE_BODY_OUTPUT1 {
    ord_dt?:  string
    ord_gno_brno?:  string
    odno?:  string
    orgn_odno?:  string
    ord_dvsn_name?:  string
    sll_buy_dvsn_cd?:  TTTC8001R_RESPONSE_BODY_OUTPUT1_SLL_BUY_DVSN_CD
    sll_buy_dvsn_cd_name?:  string
    pdno?:  string
    prdt_name?:  string
    ord_qty?:  string
    ord_unpr?:  string
    ord_tmd?:  string
    tot_ccld_qty?:  string
    avg_prvs?:  string
    cncl_yn?:  string
    tot_ccld_amt?:  string
    loan_dt?:  string
    ord_dvsn_cd?:  TTTC8001R_RESPONSE_BODY_OUTPUT1_ORD_DVSN_CD
    cncl_cfrm_qty?:  string
    rmn_qty?:  string
    rjct_qty?:  string
    ccld_cndt_name?:  string
    infm_tmd?:  string
    ctac_tlno?:  string
    prdt_type_cd?:  TTTC8001R_RESPONSE_BODY_OUTPUT1_PRDT_TYPE_CD
    excg_dvsn_cd?:  TTTC8001R_RESPONSE_BODY_OUTPUT1_EXCG_DVSN_CD
}



export interface TTTC8001R_RESPONSE_BODY_OUTPUT2 {
    tot_ord_qty?:  string
    tot_ccld_qty?:  string
    pchs_avg_pric?:  string
    tot_ccld_amt?:  string
    prsm_tlex_smtl?:  string
}


export interface TTTC8001R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    ctx_area_fk100?:  string
    ctx_area_nk100?:  string
    output1?:  Array<TTTC8001R_RESPONSE_BODY_OUTPUT1>
    output2?:  Array<TTTC8001R_RESPONSE_BODY_OUTPUT2>
}

export type CTSC9115R_RESPONSE_BODY_OUTPUT1_SLL_BUY_DVSN_CD = '01' | '02';
export type CTSC9115R_RESPONSE_BODY_OUTPUT1_ORD_DVSN_CD = '00' | '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16';
export type CTSC9115R_RESPONSE_BODY_OUTPUT1_PRDT_TYPE_CD = '300' | '301' | '302' | '306';
export type CTSC9115R_RESPONSE_BODY_OUTPUT1_EXCG_DVSN_CD = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '21' | '51' | '52' | '53' | '54' | '55' | '56' | '57' | '58' | '59' | '61' | '64' | '65' | '81';
export interface CTSC9115R_RESPONSE_BODY_OUTPUT1 {
    ord_dt?:  string
    ord_gno_brno?:  string
    odno?:  string
    orgn_odno?:  string
    ord_dvsn_name?:  string
    sll_buy_dvsn_cd?:  CTSC9115R_RESPONSE_BODY_OUTPUT1_SLL_BUY_DVSN_CD
    sll_buy_dvsn_cd_name?:  string
    pdno?:  string
    prdt_name?:  string
    ord_qty?:  string
    ord_unpr?:  string
    ord_tmd?:  string
    tot_ccld_qty?:  string
    avg_prvs?:  string
    cncl_yn?:  string
    tot_ccld_amt?:  string
    loan_dt?:  string
    ord_dvsn_cd?:  CTSC9115R_RESPONSE_BODY_OUTPUT1_ORD_DVSN_CD
    cncl_cfrm_qty?:  string
    rmn_qty?:  string
    rjct_qty?:  string
    ccld_cndt_name?:  string
    infm_tmd?:  string
    ctac_tlno?:  string
    prdt_type_cd?:  CTSC9115R_RESPONSE_BODY_OUTPUT1_PRDT_TYPE_CD
    excg_dvsn_cd?:  CTSC9115R_RESPONSE_BODY_OUTPUT1_EXCG_DVSN_CD
}



export interface CTSC9115R_RESPONSE_BODY_OUTPUT2 {
    tot_ord_qty?:  string
    tot_ccld_qty?:  string
    pchs_avg_pric?:  string
    tot_ccld_amt?:  string
    prsm_tlex_smtl?:  string
}


export interface CTSC9115R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    ctx_area_fk100?:  string
    ctx_area_nk100?:  string
    output1?:  Array<CTSC9115R_RESPONSE_BODY_OUTPUT1>
    output2?:  Array<CTSC9115R_RESPONSE_BODY_OUTPUT2>
}

export type VTTC8001R_RESPONSE_BODY_OUTPUT1_SLL_BUY_DVSN_CD = '01' | '02';
export type VTTC8001R_RESPONSE_BODY_OUTPUT1_ORD_DVSN_CD = '00' | '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16';
export type VTTC8001R_RESPONSE_BODY_OUTPUT1_PRDT_TYPE_CD = '300' | '301' | '302' | '306';
export type VTTC8001R_RESPONSE_BODY_OUTPUT1_EXCG_DVSN_CD = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '21' | '51' | '52' | '53' | '54' | '55' | '56' | '57' | '58' | '59' | '61' | '64' | '65' | '81';
export interface VTTC8001R_RESPONSE_BODY_OUTPUT1 {
    ord_dt?:  string
    ord_gno_brno?:  string
    odno?:  string
    orgn_odno?:  string
    ord_dvsn_name?:  string
    sll_buy_dvsn_cd?:  VTTC8001R_RESPONSE_BODY_OUTPUT1_SLL_BUY_DVSN_CD
    sll_buy_dvsn_cd_name?:  string
    pdno?:  string
    prdt_name?:  string
    ord_qty?:  string
    ord_unpr?:  string
    ord_tmd?:  string
    tot_ccld_qty?:  string
    avg_prvs?:  string
    cncl_yn?:  string
    tot_ccld_amt?:  string
    loan_dt?:  string
    ord_dvsn_cd?:  VTTC8001R_RESPONSE_BODY_OUTPUT1_ORD_DVSN_CD
    cncl_cfrm_qty?:  string
    rmn_qty?:  string
    rjct_qty?:  string
    ccld_cndt_name?:  string
    infm_tmd?:  string
    ctac_tlno?:  string
    prdt_type_cd?:  VTTC8001R_RESPONSE_BODY_OUTPUT1_PRDT_TYPE_CD
    excg_dvsn_cd?:  VTTC8001R_RESPONSE_BODY_OUTPUT1_EXCG_DVSN_CD
}



export interface VTTC8001R_RESPONSE_BODY_OUTPUT2 {
    tot_ord_qty?:  string
    tot_ccld_qty?:  string
    pchs_avg_pric?:  string
    tot_ccld_amt?:  string
    prsm_tlex_smtl?:  string
}


export interface VTTC8001R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    ctx_area_fk100?:  string
    ctx_area_nk100?:  string
    output1?:  Array<VTTC8001R_RESPONSE_BODY_OUTPUT1>
    output2?:  Array<VTTC8001R_RESPONSE_BODY_OUTPUT2>
}

export type VTSC9115R_RESPONSE_BODY_OUTPUT1_SLL_BUY_DVSN_CD = '01' | '02';
export type VTSC9115R_RESPONSE_BODY_OUTPUT1_ORD_DVSN_CD = '00' | '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16';
export type VTSC9115R_RESPONSE_BODY_OUTPUT1_PRDT_TYPE_CD = '300' | '301' | '302' | '306';
export type VTSC9115R_RESPONSE_BODY_OUTPUT1_EXCG_DVSN_CD = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '21' | '51' | '52' | '53' | '54' | '55' | '56' | '57' | '58' | '59' | '61' | '64' | '65' | '81';
export interface VTSC9115R_RESPONSE_BODY_OUTPUT1 {
    ord_dt?:  string
    ord_gno_brno?:  string
    odno?:  string
    orgn_odno?:  string
    ord_dvsn_name?:  string
    sll_buy_dvsn_cd?:  VTSC9115R_RESPONSE_BODY_OUTPUT1_SLL_BUY_DVSN_CD
    sll_buy_dvsn_cd_name?:  string
    pdno?:  string
    prdt_name?:  string
    ord_qty?:  string
    ord_unpr?:  string
    ord_tmd?:  string
    tot_ccld_qty?:  string
    avg_prvs?:  string
    cncl_yn?:  string
    tot_ccld_amt?:  string
    loan_dt?:  string
    ord_dvsn_cd?:  VTSC9115R_RESPONSE_BODY_OUTPUT1_ORD_DVSN_CD
    cncl_cfrm_qty?:  string
    rmn_qty?:  string
    rjct_qty?:  string
    ccld_cndt_name?:  string
    infm_tmd?:  string
    ctac_tlno?:  string
    prdt_type_cd?:  VTSC9115R_RESPONSE_BODY_OUTPUT1_PRDT_TYPE_CD
    excg_dvsn_cd?:  VTSC9115R_RESPONSE_BODY_OUTPUT1_EXCG_DVSN_CD
}



export interface VTSC9115R_RESPONSE_BODY_OUTPUT2 {
    tot_ord_qty?:  string
    tot_ccld_qty?:  string
    pchs_avg_pric?:  string
    tot_ccld_amt?:  string
    prsm_tlex_smtl?:  string
}


export interface VTSC9115R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    ctx_area_fk100?:  string
    ctx_area_nk100?:  string
    output1?:  Array<VTSC9115R_RESPONSE_BODY_OUTPUT1>
    output2?:  Array<VTSC9115R_RESPONSE_BODY_OUTPUT2>
}


export interface TTTC8434R_RESPONSE_BODY_OUTPUT1 {
    pdno?:  string
    prdt_name?:  string
    trad_dvsn_name?:  string
    bfdy_buy_qty?:  string
    bfdy_sll_qty?:  string
    thdt_buyqty?:  string
    thdt_sll_qty?:  string
    hldg_qty?:  string
    ord_psbl_qty?:  string
    pchs_avg_pric?:  string
    pchs_amt?:  string
    prpr?:  string
    evlu_amt?:  string
    evlu_pfls_amt?:  string
    evlu_pfls_rt?:  string
    evlu_erng_rt?:  string
    loan_dt?:  string
    loan_amt?:  string
    stln_slng_chgs?:  string
    expd_dt?:  string
    fltt_rt?:  string
    bfdy_cprs_icdc?:  string
    item_mgna_rt_name?:  string
    grta_rt_name?:  string
    sbst_pric?:  string
    stck_loan_unpr?:  string
}



export interface TTTC8434R_RESPONSE_BODY_OUTPUT2 {
    dnca_tot_amt?:  string
    nxdy_excc_amt?:  string
    prvs_rcdl_excc_amt?:  string
    cma_evlu_amt?:  string
    bfdy_buy_amt?:  string
    thdt_buy_amt?:  string
    nxdy_auto_rdpt_amt?:  string
    bfdy_sll_amt?:  string
    thdt_sll_amt?:  string
    d2_auto_rdpt_amt?:  string
    bfdy_tlex_amt?:  string
    thdt_tlex_amt?:  string
    tot_loan_amt?:  string
    scts_evlu_amt?:  string
    tot_evlu_amt?:  string
    nass_amt?:  string
    fncg_gld_auto_rdpt_yn?:  string
    pchs_amt_smtl_amt?:  string
    evlu_amt_smtl_amt?:  string
    evlu_pfls_smtl_amt?:  string
    tot_stln_slng_chgs?:  string
    bfdy_tot_asst_evlu_amt?:  string
    asst_icdc_amt?:  string
    asst_icdc_erng_rt?:  string
}


export interface TTTC8434R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    ctx_area_fk100?:  string
    ctx_area_nk100?:  string
    output1?:  Array<TTTC8434R_RESPONSE_BODY_OUTPUT1>
    output2?:  Array<TTTC8434R_RESPONSE_BODY_OUTPUT2>
}


export interface VTTC8434R_RESPONSE_BODY_OUTPUT1 {
    pdno?:  string
    prdt_name?:  string
    trad_dvsn_name?:  string
    bfdy_buy_qty?:  string
    bfdy_sll_qty?:  string
    thdt_buyqty?:  string
    thdt_sll_qty?:  string
    hldg_qty?:  string
    ord_psbl_qty?:  string
    pchs_avg_pric?:  string
    pchs_amt?:  string
    prpr?:  string
    evlu_amt?:  string
    evlu_pfls_amt?:  string
    evlu_pfls_rt?:  string
    evlu_erng_rt?:  string
    loan_dt?:  string
    loan_amt?:  string
    stln_slng_chgs?:  string
    expd_dt?:  string
    fltt_rt?:  string
    bfdy_cprs_icdc?:  string
    item_mgna_rt_name?:  string
    grta_rt_name?:  string
    sbst_pric?:  string
    stck_loan_unpr?:  string
}



export interface VTTC8434R_RESPONSE_BODY_OUTPUT2 {
    dnca_tot_amt?:  string
    nxdy_excc_amt?:  string
    prvs_rcdl_excc_amt?:  string
    cma_evlu_amt?:  string
    bfdy_buy_amt?:  string
    thdt_buy_amt?:  string
    nxdy_auto_rdpt_amt?:  string
    bfdy_sll_amt?:  string
    thdt_sll_amt?:  string
    d2_auto_rdpt_amt?:  string
    bfdy_tlex_amt?:  string
    thdt_tlex_amt?:  string
    tot_loan_amt?:  string
    scts_evlu_amt?:  string
    tot_evlu_amt?:  string
    nass_amt?:  string
    fncg_gld_auto_rdpt_yn?:  string
    pchs_amt_smtl_amt?:  string
    evlu_amt_smtl_amt?:  string
    evlu_pfls_smtl_amt?:  string
    tot_stln_slng_chgs?:  string
    bfdy_tot_asst_evlu_amt?:  string
    asst_icdc_amt?:  string
    asst_icdc_erng_rt?:  string
}


export interface VTTC8434R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    ctx_area_fk100?:  string
    ctx_area_nk100?:  string
    output1?:  Array<VTTC8434R_RESPONSE_BODY_OUTPUT1>
    output2?:  Array<VTTC8434R_RESPONSE_BODY_OUTPUT2>
}


export interface TTTC8908R_RESPONSE_BODY_OUTPUT {
    ord_psbl_cash?:  string
    ord_psbl_sbst?:  string
    ruse_psbl_amt?:  string
    fund_rpch_chgs?:  string
    psbl_qty_calc_unpr?:  string
    nrcvb_buy_amt?:  string
    nrcvb_buy_qty?:  string
    max_buy_amt?:  string
    max_buy_qty?:  string
    cma_evlu_amt?:  string
    ovrs_re_use_amt_wcrc?:  string
    ord_psbl_frcr_amt_wcrc?:  string
}


export interface TTTC8908R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<TTTC8908R_RESPONSE_BODY_OUTPUT>
}


export interface VTTC8908R_RESPONSE_BODY_OUTPUT {
    ord_psbl_cash?:  string
    ord_psbl_sbst?:  string
    ruse_psbl_amt?:  string
    fund_rpch_chgs?:  string
    psbl_qty_calc_unpr?:  string
    nrcvb_buy_amt?:  string
    nrcvb_buy_qty?:  string
    max_buy_amt?:  string
    max_buy_qty?:  string
    cma_evlu_amt?:  string
    ovrs_re_use_amt_wcrc?:  string
    ord_psbl_frcr_amt_wcrc?:  string
}


export interface VTTC8908R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<VTTC8908R_RESPONSE_BODY_OUTPUT>
}


export interface CTSC0008U_RESPONSE_BODY_OUTPUT {
    RSVN_ORD_SEQ?:  string
}


export interface CTSC0008U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg?:  string
    output?:  Array<CTSC0008U_RESPONSE_BODY_OUTPUT>
}


export interface CTSC0009U_RESPONSE_BODY_OUTPUT {
    NRML_PRCS_YN?:  string
}


export interface CTSC0009U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg?:  string
    output?:  Array<CTSC0009U_RESPONSE_BODY_OUTPUT>
}


export interface CTSC0013U_RESPONSE_BODY_OUTPUT {
    NRML_PRCS_YN?:  string
}


export interface CTSC0013U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg?:  string
    output?:  Array<CTSC0013U_RESPONSE_BODY_OUTPUT>
}


export interface CTSC0004R_RESPONSE_BODY_OUTPUT {
    rsvn_ord_seq?:  string
    rsvn_ord_ord_dt?:  string
    rsvn_ord_rcit_dt?:  string
    pdno?:  string
    ord_dvsn_cd?:  string
    ord_rsvn_qty?:  string
    tot_ccld_qty?:  string
    cncl_ord_dt?:  string
    ord_tmd?:  string
    ctac_tlno?:  string
    rjct_rson2?:  string
    odno?:  string
    rsvn_ord_rcit_tmd?:  string
    kor_item_shtn_name?:  string
    sll_buy_dvsn_cd?:  string
    ord_rsvn_unpr?:  string
    tot_ccld_amt?:  string
    loan_dt?:  string
    cncl_rcit_tmd?:  string
    prcs_rslt?:  string
    ord_dvsn_name?:  string
    tmnl_mdia_kind_cd?:  string
}


export interface CTSC0004R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<CTSC0004R_RESPONSE_BODY_OUTPUT>
}


export interface TTTC8494R_RESPONSE_BODY_OUTPUT1 {
    pdno?:  string
    prdt_name?:  string
    trad_dvsn_name?:  string
    bfdy_buy_qty?:  string
    bfdy_sll_qty?:  string
    thdt_buyqty?:  string
    thdt_sll_qty?:  string
    hldg_qty?:  string
    ord_psbl_qty?:  string
    pchs_avg_pric?:  string
    pchs_amt?:  string
    prpr?:  string
    evlu_amt?:  string
    evlu_pfls_amt?:  string
    evlu_pfls_rt?:  string
    evlu_erng_rt?:  string
    loan_dt?:  string
    loan_amt?:  string
    stln_slng_chgs?:  string
    expd_dt?:  string
    stck_loan_unpr?:  string
    bfdy_cprs_icdc?:  string
    fltt_rt?:  string
}



export interface TTTC8494R_RESPONSE_BODY_OUTPUT2 {
    dnca_tot_amt?:  string
    nxdy_excc_amt?:  string
    prvs_rcdl_excc_amt?:  string
    cma_evlu_amt?:  string
    bfdy_buy_amt?:  string
    thdt_buy_amt?:  string
    nxdy_auto_rdpt_amt?:  string
    bfdy_sll_amt?:  string
    thdt_sll_amt?:  string
    d2_auto_rdpt_amt?:  string
    bfdy_tlex_amt?:  string
    thdt_tlex_amt?:  string
    tot_loan_amt?:  string
    scts_evlu_amt?:  string
    tot_evlu_amt?:  string
    nass_amt?:  string
    fncg_gld_auto_rdpt_yn?:  string
    pchs_amt_smtl_amt?:  string
    evlu_amt_smtl_amt?:  string
    evlu_pfls_smtl_amt?:  string
    tot_stln_slng_chgs?:  string
    bfdy_tot_asst_evlu_amt?:  string
    asst_icdc_amt?:  string
    asst_icdc_erng_rt?:  string
    rlzt_pfls?:  string
    rlzt_erng_rt?:  string
    real_evlu_pfls?:  string
    real_evlu_pfls_erng_rt?:  string
}


export interface TTTC8494R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    Output1?:  Array<TTTC8494R_RESPONSE_BODY_OUTPUT1>
    Output2?:  TTTC8494R_RESPONSE_BODY_OUTPUT2
}


export interface TTTC8909R_RESPONSE_BODY_OUTPUT1 {
    ORD_PSBL_CASH?:  string
    ORD_PSBL_SBST?:  string
    RUSE_PSBL_AMT?:  string
    FUND_RPCH_CHGS?:  string
    PSBL_QTY_CALC_UNPR?:  string
    NRCVB_BUY_AMT?:  string
    NRCVB_BUY_QTY?:  string
    MAX_BUY_AMT?:  string
    MAX_BUY_QTY?:  string
    CMA_EVLU_AMT?:  string
    OVRS_RE_USE_AMT_WCRC?:  string
    ORD_PSBL_FRCR_AMT_WCRC?:  string
}


export interface TTTC8909R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    Output1?:  Array<TTTC8909R_RESPONSE_BODY_OUTPUT1>
}


export interface CTRP6548R_RESPONSE_BODY_OUTPUT1 {
    pchs_amt?:  string
    evlu_amt?:  string
    evlu_pfls_amt?:  string
    crdt_lnd_amt?:  string
    real_nass_amt?:  string
    whol_weit_rt?:  string
}



export interface CTRP6548R_RESPONSE_BODY_OUTPUT2 {
    pchs_amt_smtl?:  string
    nass_tot_amt?:  string
    loan_amt_smtl?:  string
    evlu_pfls_amt_smtl?:  string
    evlu_amt_smtl?:  string
    tot_asst_amt?:  string
    tot_lnda_tot_ulst_lnda?:  string
    cma_auto_loan_amt?:  string
    tot_mgln_amt?:  string
    stln_evlu_amt?:  string
    crdt_fncg_amt?:  string
    ocl_apl_loan_amt?:  string
    pldg_stup_amt?:  string
    frcr_evlu_tota?:  string
    tot_dncl_amt?:  string
    cma_evlu_amt?:  string
    dncl_amt?:  string
    tot_sbst_amt?:  string
    thdt_rcvb_amt?:  string
    ovrs_stck_evlu_amt1?:  string
    ovrs_bond_evlu_amt?:  string
    mmf_cma_mgge_loan_amt?:  string
    sbsc_dncl_amt?:  string
    pbst_sbsc_fnds_loan_use_amt?:  string
    etpr_crdt_grnt_loan_amt?:  string
}


export interface CTRP6548R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    Output1?:  Array<CTRP6548R_RESPONSE_BODY_OUTPUT1>
    Output2?:  CTRP6548R_RESPONSE_BODY_OUTPUT2
}

export type FHKST01010100_RESPONSE_BODY_OUTPUT_ISCD_STAT_CLS_CODE = '00' | '51' | '52' | '53' | '54' | '55' | '57' | '58' | '59';
export type FHKST01010100_RESPONSE_BODY_OUTPUT_GRMN_RATE_CLS_CODE = '40' | '50' | '60';
export type FHKST01010100_RESPONSE_BODY_OUTPUT_PRDY_VRSS_SIGN = '1' | '2' | '3' | '4' | '5';
export type FHKST01010100_RESPONSE_BODY_OUTPUT_MRKT_WARN_CLS_CODE = '00' | '01' | '02' | '03';
export interface FHKST01010100_RESPONSE_BODY_OUTPUT {
    iscd_stat_cls_code?:  FHKST01010100_RESPONSE_BODY_OUTPUT_ISCD_STAT_CLS_CODE
    marg_rate?:  string
    rprs_mrkt_kor_name?:  string
    new_hgpr_lwpr_cls_code?:  string
    bstp_kor_isnm?:  string
    temp_stop_yn?:  string
    oprc_rang_cont_yn?:  string
    clpr_rang_cont_yn?:  string
    crdt_able_yn?:  string
    grmn_rate_cls_code?:  FHKST01010100_RESPONSE_BODY_OUTPUT_GRMN_RATE_CLS_CODE
    elw_pblc_yn?:  string
    stck_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  FHKST01010100_RESPONSE_BODY_OUTPUT_PRDY_VRSS_SIGN
    prdy_ctrt?:  string
    acml_tr_pbmn?:  string
    acml_vol?:  string
    prdy_vrss_vol_rate?:  string
    stck_oprc?:  string
    stck_hgpr?:  string
    stck_lwpr?:  string
    stck_mxpr?:  string
    stck_llam?:  string
    stck_sdpr?:  string
    wghn_avrg_stck_prc?:  string
    hts_frgn_ehrt?:  string
    frgn_ntby_qty?:  string
    pgtr_ntby_qty?:  string
    pvt_scnd_dmrs_prc?:  string
    pvt_frst_dmrs_prc?:  string
    pvt_pont_val?:  string
    pvt_frst_dmsp_prc?:  string
    pvt_scnd_dmsp_prc?:  string
    dmrs_val?:  string
    dmsp_val?:  string
    cpfn?:  string
    rstc_wdth_prc?:  string
    stck_fcam?:  string
    stck_sspr?:  string
    aspr_unit?:  string
    hts_deal_qty_unit_val?:  string
    lstn_stcn?:  string
    hts_avls?:  string
    per?:  string
    pbr?:  string
    stac_month?:  string
    vol_tnrt?:  string
    eps?:  string
    bps?:  string
    d250_hgpr?:  string
    d250_hgpr_date?:  string
    d250_hgpr_vrss_prpr_rate?:  string
    d250_lwpr?:  string
    d250_lwpr_date?:  string
    d250_lwpr_vrss_prpr_rate?:  string
    stck_dryy_hgpr?:  string
    dryy_hgpr_vrss_prpr_rate?:  string
    dryy_hgpr_date?:  string
    stck_dryy_lwpr?:  string
    dryy_lwpr_vrss_prpr_rate?:  string
    dryy_lwpr_date?:  string
    w52_hgpr?:  string
    w52_hgpr_vrss_prpr_ctrt?:  string
    w52_hgpr_date?:  string
    w52_lwpr?:  string
    w52_lwpr_vrss_prpr_ctrt?:  string
    w52_lwpr_date?:  string
    whol_loan_rmnd_rate?:  string
    ssts_yn?:  string
    stck_shrn_iscd?:  string
    fcam_cnnm?:  string
    cpfn_cnnm?:  string
    apprch_rate?:  string
    frgn_hldn_qty?:  string
    vi_cls_code?:  string
    ovtm_vi_cls_code?:  string
    last_ssts_cntg_qty?:  string
    invt_caful_yn?:  string
    mrkt_warn_cls_code?:  FHKST01010100_RESPONSE_BODY_OUTPUT_MRKT_WARN_CLS_CODE
    short_over_yn?:  string
    sltr_yn?:  string
}


export interface FHKST01010100_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHKST01010100_RESPONSE_BODY_OUTPUT>
}

export type FHKST01010300_RESPONSE_BODY_OUTPUT_PRDY_VRSS_SIGN = '1' | '2' | '3' | '4' | '5';
export interface FHKST01010300_RESPONSE_BODY_OUTPUT {
    stck_cntg_hour?:  string
    stck_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  FHKST01010300_RESPONSE_BODY_OUTPUT_PRDY_VRSS_SIGN
    cntg_vol?:  string
    tday_rltv?:  string
    prdy_ctrt?:  string
}


export interface FHKST01010300_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHKST01010300_RESPONSE_BODY_OUTPUT>
}

export type FHKST01010400_RESPONSE_BODY_OUTPUT_PRDY_VRSS_SIGN = '1' | '2' | '3' | '4' | '5';
export type FHKST01010400_RESPONSE_BODY_OUTPUT_FLNG_CLS_CODE = '01' | '02' | '03' | '04' | '05' | '06' | '07';
export interface FHKST01010400_RESPONSE_BODY_OUTPUT {
    stck_bsop_date?:  string
    stck_oprc?:  string
    stck_hgpr?:  string
    stck_lwpr?:  string
    stck_clpr?:  string
    acml_vol?:  string
    prdy_vrss_vol_rate?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  FHKST01010400_RESPONSE_BODY_OUTPUT_PRDY_VRSS_SIGN
    prdy_ctrt?:  string
    hts_frgn_ehrt?:  string
    frgn_ntby_qty?:  string
    flng_cls_code?:  FHKST01010400_RESPONSE_BODY_OUTPUT_FLNG_CLS_CODE
    acml_prtt_rate?:  string
}


export interface FHKST01010400_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHKST01010400_RESPONSE_BODY_OUTPUT>
}

export type FHKST01010200_RESPONSE_BODY_OUTPUT1_NEW_MKOP_CLS_CODE = '00' | '49' | '1' | '2' | '3' | '4' | '7' | '8' | '0' | '1' | '2' | '3' | '7' | '8';
export interface FHKST01010200_RESPONSE_BODY_OUTPUT1 {
    aspr_acpt_hour?:  string
    askp1?:  string
    askp2?:  string
    askp3?:  string
    askp4?:  string
    askp5?:  string
    askp6?:  string
    askp7?:  string
    askp8?:  string
    askp9?:  string
    askp10?:  string
    bidp1?:  string
    bidp2?:  string
    bidp3?:  string
    bidp4?:  string
    bidp5?:  string
    bidp6?:  string
    bidp7?:  string
    bidp8?:  string
    bidp9?:  string
    bidp10?:  string
    askp_rsqn1?:  string
    askp_rsqn2?:  string
    askp_rsqn3?:  string
    askp_rsqn4?:  string
    askp_rsqn5?:  string
    askp_rsqn6?:  string
    askp_rsqn7?:  string
    askp_rsqn8?:  string
    askp_rsqn9?:  string
    askp_rsqn10?:  string
    bidp_rsqn1?:  string
    bidp_rsqn2?:  string
    bidp_rsqn3?:  string
    bidp_rsqn4?:  string
    bidp_rsqn5?:  string
    bidp_rsqn6?:  string
    bidp_rsqn7?:  string
    bidp_rsqn8?:  string
    bidp_rsqn9?:  string
    bidp_rsqn10?:  string
    askp_rsqn_icdc1?:  string
    askp_rsqn_icdc2?:  string
    askp_rsqn_icdc3?:  string
    askp_rsqn_icdc4?:  string
    askp_rsqn_icdc5?:  string
    askp_rsqn_icdc6?:  string
    askp_rsqn_icdc7?:  string
    askp_rsqn_icdc8?:  string
    askp_rsqn_icdc9?:  string
    askp_rsqn_icdc10?:  string
    bidp_rsqn_icdc1?:  string
    bidp_rsqn_icdc2?:  string
    bidp_rsqn_icdc3?:  string
    bidp_rsqn_icdc4?:  string
    bidp_rsqn_icdc5?:  string
    bidp_rsqn_icdc6?:  string
    bidp_rsqn_icdc7?:  string
    bidp_rsqn_icdc8?:  string
    bidp_rsqn_icdc9?:  string
    bidp_rsqn_icdc10?:  string
    total_askp_rsqn?:  string
    total_bidp_rsqn?:  string
    total_askp_rsqn_icdc?:  string
    total_bidp_rsqn_icdc?:  string
    ovtm_total_askp_icdc?:  string
    ovtm_total_bidp_icdc?:  string
    ovtm_total_askp_rsqn?:  string
    ovtm_total_bidp_rsqn?:  string
    ntby_aspr_rsqn?:  string
    new_mkop_cls_code?:  FHKST01010200_RESPONSE_BODY_OUTPUT1_NEW_MKOP_CLS_CODE
}


export type FHKST01010200_RESPONSE_BODY_OUTPUT2_ANTC_MKOP_CLS_CODE = '311' | '112';
export type FHKST01010200_RESPONSE_BODY_OUTPUT2_ANTC_CNTG_VRSS_SIGN = '1' | '2' | '3' | '4' | '5';
export interface FHKST01010200_RESPONSE_BODY_OUTPUT2 {
    antc_mkop_cls_code?:  FHKST01010200_RESPONSE_BODY_OUTPUT2_ANTC_MKOP_CLS_CODE
    stck_prpr?:  string
    stck_oprc?:  string
    stck_hgpr?:  string
    stck_lwpr?:  string
    stck_sdpr?:  string
    antc_cnpr?:  string
    antc_cntg_vrss_sign?:  FHKST01010200_RESPONSE_BODY_OUTPUT2_ANTC_CNTG_VRSS_SIGN
    antc_cntg_vrss?:  string
    antc_cntg_prdy_ctrt?:  string
    antc_vol?:  string
    stck_shrn_iscd?:  string
    vi_cls_code?:  string
}


export interface FHKST01010200_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<FHKST01010200_RESPONSE_BODY_OUTPUT1>
    output2?:  Array<FHKST01010200_RESPONSE_BODY_OUTPUT2>
}

export type FHKST01010900_RESPONSE_BODY_OUTPUT_PRDY_VRSS_SIGN = '1' | '2' | '3' | '4' | '5';
export interface FHKST01010900_RESPONSE_BODY_OUTPUT {
    stck_bsop_date?:  string
    stck_clpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  FHKST01010900_RESPONSE_BODY_OUTPUT_PRDY_VRSS_SIGN
    prsn_ntby_qty?:  string
    frgn_ntby_qty?:  string
    orgn_ntby_qty?:  string
    prsn_ntby_tr_pbmn?:  string
    frgn_ntby_tr_pbmn?:  string
    orgn_ntby_tr_pbmn?:  string
    prsn_shnu_vol?:  string
    frgn_shnu_vol?:  string
    orgn_shnu_vol?:  string
    prsn_shnu_tr_pbmn?:  string
    frgn_shnu_tr_pbmn?:  string
    orgn_shnu_tr_pbmn?:  string
    prsn_seln_vol?:  string
    frgn_seln_vol?:  string
    orgn_seln_vol?:  string
    prsn_seln_tr_pbmn?:  string
    frgn_seln_tr_pbmn?:  string
    orgn_seln_tr_pbmn?:  string
}


export interface FHKST01010900_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHKST01010900_RESPONSE_BODY_OUTPUT>
}


export interface FHKST01010600_RESPONSE_BODY_OUTPUT {
    seln_mbcr_no1?:  string
    seln_mbcr_no2?:  string
    seln_mbcr_no3?:  string
    seln_mbcr_no4?:  string
    seln_mbcr_no5?:  string
    seln_mbcr_name1?:  string
    seln_mbcr_name2?:  string
    seln_mbcr_name3?:  string
    seln_mbcr_name4?:  string
    seln_mbcr_name5?:  string
    total_seln_qty1?:  string
    total_seln_qty2?:  string
    total_seln_qty3?:  string
    total_seln_qty4?:  string
    total_seln_qty5?:  string
    seln_mbcr_rlim1?:  string
    seln_mbcr_rlim2?:  string
    seln_mbcr_rlim3?:  string
    seln_mbcr_rlim4?:  string
    seln_mbcr_rlim5?:  string
    seln_qty_icdc1?:  string
    seln_qty_icdc2?:  string
    seln_qty_icdc3?:  string
    seln_qty_icdc4?:  string
    seln_qty_icdc5?:  string
    shnu_mbcr_no1?:  string
    shnu_mbcr_no2?:  string
    shnu_mbcr_no3?:  string
    shnu_mbcr_no4?:  string
    shnu_mbcr_no5?:  string
    shnu_mbcr_name1?:  string
    shnu_mbcr_name2?:  string
    shnu_mbcr_name3?:  string
    shnu_mbcr_name4?:  string
    shnu_mbcr_name5?:  string
    total_shnu_qty1?:  string
    total_shnu_qty2?:  string
    total_shnu_qty3?:  string
    total_shnu_qty4?:  string
    total_shnu_qty5?:  string
    shnu_mbcr_rlim1?:  string
    shnu_mbcr_rlim2?:  string
    shnu_mbcr_rlim3?:  string
    shnu_mbcr_rlim4?:  string
    shnu_mbcr_rlim5?:  string
    shnu_qty_icdc1?:  string
    shnu_qty_icdc2?:  string
    shnu_qty_icdc3?:  string
    shnu_qty_icdc4?:  string
    shnu_qty_icdc5?:  string
    glob_total_seln_qty?:  string
    glob_seln_rlim?:  string
    glob_ntby_qty?:  string
    glob_total_shnu_qty?:  string
    glob_shnu_rlim?:  string
    seln_mbcr_glob_yn_1?:  string
    seln_mbcr_glob_yn_2?:  string
    seln_mbcr_glob_yn_3?:  string
    seln_mbcr_glob_yn_4?:  string
    seln_mbcr_glob_yn_5?:  string
    shnu_mbcr_glob_yn_1?:  string
    shnu_mbcr_glob_yn_2?:  string
    shnu_mbcr_glob_yn_3?:  string
    shnu_mbcr_glob_yn_4?:  string
    shnu_mbcr_glob_yn_5?:  string
    glob_total_seln_qty_icdc?:  string
    glob_total_shnu_qty_icdc?:  string
    acml_vol?:  string
}


export interface FHKST01010600_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHKST01010600_RESPONSE_BODY_OUTPUT>
}


export interface FHKEW15010000_RESPONSE_BODY_OUTPUT {
    elw_shrn_iscd?:  string
    hts_kor_isnm?:  string
    elw_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    prdy_vrss_vol_rate?:  string
    unas_shrn_iscd?:  string
    unas_isnm?:  string
    unas_prpr?:  string
    unas_prdy_vrss?:  string
    unas_prdy_vrss_sign?:  string
    unas_prdy_ctrt?:  string
    bidp?:  string
    askp?:  string
    acml_tr_pbmn?:  string
    vol_tnrt?:  string
    elw_oprc?:  string
    elw_hgpr?:  string
    elw_lwpr?:  string
    stck_prdy_clpr?:  string
    hts_thpr?:  string
    dprt?:  string
    atm_cls_name?:  string
    hts_ints_vltl?:  string
    acpr?:  string
    pvt_scnd_dmrs_prc?:  string
    pvt_frst_dmrs_prc?:  string
    pvt_pont_val?:  string
    pvt_frst_dmsp_prc?:  string
    pvt_scnd_dmsp_prc?:  string
    dmsp_val?:  string
    dmrs_val?:  string
    elw_sdpr?:  string
    apprch_rate?:  string
    tick_conv_prc?:  string
    invt_epmd_cntt?:  string
}


export interface FHKEW15010000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHKEW15010000_RESPONSE_BODY_OUTPUT>
}


export interface FHKST03010100_RESPONSE_BODY_OUTPUT1 {
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    stck_prdy_clpr?:  string
    acml_vol?:  string
    acml_tr_pbmn?:  string
    hts_kor_isnm?:  string
    stck_prpr?:  string
    stck_shrn_iscd?:  string
    prdy_vol?:  string
    stck_mxpr?:  string
    stck_llam?:  string
    stck_oprc?:  string
    stck_hgpr?:  string
    stck_lwpr?:  string
    stck_prdy_oprc?:  string
    stck_prdy_hgpr?:  string
    stck_prdy_lwpr?:  string
    askp?:  string
    bidp?:  string
    prdy_vrss_vol?:  string
    vol_tnrt?:  string
    stck_fcam?:  string
    lstn_stcn?:  string
    cpfn?:  string
    hts_avls?:  string
    per?:  string
    eps?:  string
    pbr?:  string
    'itewhol_loan_rmnd_ratem name'?:  string
}


export type FHKST03010100_RESPONSE_BODY_OUTPUT2_FLNG_CLS_CODE = '00' | '01' | '02' | '03' | '04' | '05' | '06' | '07';
export interface FHKST03010100_RESPONSE_BODY_OUTPUT2 {
    stck_bsop_date?:  string
    stck_clpr?:  string
    stck_oprc?:  string
    stck_hgpr?:  string
    stck_lwpr?:  string
    acml_vol?:  string
    acml_tr_pbmn?:  string
    flng_cls_code?:  FHKST03010100_RESPONSE_BODY_OUTPUT2_FLNG_CLS_CODE
    prtt_rate?:  string
    mod_yn?:  string
    prdy_vrss_sign?:  string
    prdy_vrss?:  string
    revl_issu_reas?:  string
}


export interface FHKST03010100_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  FHKST03010100_RESPONSE_BODY_OUTPUT1
    output2?:  Array<FHKST03010100_RESPONSE_BODY_OUTPUT2>
}


export interface FHKUP03500100_RESPONSE_BODY_OUTPUT_2 {
    STCK_BSOP_DATE?:  string
    BSTP_NMIX_PRPR?:  string
    BSTP_NMIX_OPRC?:  string
    BSTP_NMIX_HGPR?:  string
    BSTP_NMIX_LWPR?:  string
    ACML_VOL?:  string
    ACML_TR_PBMN?:  string
    MOD_YN?:  string
}


export interface FHKUP03500100_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  string
    BSTP_NMIX_PRDY_VRSS?:  string
    PRDY_VRSS_SIGN?:  string
    BSTP_NMIX_PRDY_CTRT?:  string
    PRDY_NMIX?:  string
    ACML_VOL?:  string
    ACML_TR_PBMN?:  string
    HTS_KOR_ISNM?:  string
    BSTP_NMIX_PRPR?:  string
    BSTP_CLS_CODE?:  string
    PRDY_VOL?:  string
    BSTP_NMIX_OPRC?:  string
    BSTP_NMIX_HGPR?:  string
    BSTP_NMIX_LWPR?:  string
    FUTS_PRDY_OPRC?:  string
    FUTS_PRDY_HGPR?:  string
    FUTS_PRDY_LWPR?:  string
    'Output 2'?:  Array<FHKUP03500100_RESPONSE_BODY_OUTPUT_2>
}


export interface FHPST01060000_RESPONSE_BODY_OUTPUT {
    stck_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    prdy_vol?:  string
    hts_kor_isnm?:  string
}



export interface FHPST01060000_RESPONSE_BODY_OUTPUT1 {
    stck_cntg_hour?:  string
    stck_pbpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    askp?:  string
    bidp?:  string
    tday_rltv?:  string
    acml_vol?:  string
    cnqn?:  string
}


export interface FHPST01060000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  FHPST01060000_RESPONSE_BODY_OUTPUT
    output1?:  Array<FHPST01060000_RESPONSE_BODY_OUTPUT1>
}


export interface FHPST02310000_RESPONSE_BODY_OUTPUT {
    ovtm_untp_prpr?:  string
    ovtm_untp_prdy_vrss?:  string
    ovtm_untp_prdy_vrss_sign?:  string
    ovtm_untp_prdy_ctrt?:  string
    ovtm_untp_vol?:  string
    ovtm_untp_tr_pbmn?:  string
    ovtm_untp_mxpr?:  string
    ovtm_untp_llam?:  string
    ovtm_untp_oprc?:  string
    ovtm_untp_hgpr?:  string
    ovtm_untp_lwpr?:  string
    ovtm_untp_antc_cnpr?:  string
    ovtm_untp_antc_cntg_vrss?:  string
    ovtm_untp_antc_cntg_vrss_sign?:  string
    ovtm_untp_antc_cntg_ctrt?:  string
    ovtm_untp_antc_vol?:  string
    uplm_sign?:  string
    lslm_sign?:  string
}



export interface FHPST02310000_RESPONSE_BODY_OUTPUT1 {
    stck_cntg_hour?:  string
    stck_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    askp?:  string
    bidp?:  string
    acml_vol?:  string
    cntg_vol?:  string
}


export interface FHPST02310000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  FHPST02310000_RESPONSE_BODY_OUTPUT
    output1?:  Array<FHPST02310000_RESPONSE_BODY_OUTPUT1>
}


export interface FHPST02320000_RESPONSE_BODY_OUTPUT {
    ovtm_untp_prpr?:  string
    ovtm_untp_prdy_vrss?:  string
    ovtm_untp_prdy_vrss_sign?:  string
    ovtm_untp_prdy_ctrt?:  string
    ovtm_untp_vol?:  string
    ovtm_untp_tr_pbmn?:  string
    ovtm_untp_mxpr?:  string
    ovtm_untp_llam?:  string
    ovtm_untp_oprc?:  string
    ovtm_untp_hgpr?:  string
    ovtm_untp_lwpr?:  string
    ovtm_untp_antc_cnpr?:  string
    ovtm_untp_antc_cntg_vrss?:  string
    ovtm_untp_antc_cntg_vrss_sign?:  string
    ovtm_untp_antc_cntg_ctrt?:  string
    ovtm_untp_antc_vol?:  string
}



export interface FHPST02320000_RESPONSE_BODY_OUTPUT1 {
    stck_bsop_date?:  string
    ovtm_untp_prpr?:  string
    ovtm_untp_prdy_vrss?:  string
    ovtm_untp_prdy_vrss_sign?:  string
    ovtm_untp_prdy_ctrt?:  string
    ovtm_untp_vol?:  string
    stck_clpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    ovtm_untp_tr_pbmn?:  string
}


export interface FHPST02320000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  FHPST02320000_RESPONSE_BODY_OUTPUT
    output1?:  Array<FHPST02320000_RESPONSE_BODY_OUTPUT1>
}


export interface FHKST03010200_RESPONSE_BODY_OUTPUT1 {
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    stck_prdy_clpr?:  string
    acml_vol?:  string
    acml_tr_pbmn?:  string
    hts_kor_isnm?:  string
    stck_prpr?:  string
}



export interface FHKST03010200_RESPONSE_BODY_OUTPUT2 {
    stck_bsop_date?:  string
    stck_cntg_hour?:  string
    acml_tr_pbmn?:  string
    stck_prpr?:  string
    stck_oprc?:  string
    stck_hgpr?:  string
    stck_lwpr?:  string
    cntg_vol?:  string
}


export interface FHKST03010200_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  FHKST03010200_RESPONSE_BODY_OUTPUT1
    output2?:  Array<FHKST03010200_RESPONSE_BODY_OUTPUT2>
}


export interface CTPF1604R_RESPONSE_BODY_OUTPUT {
    pdno?:  string
    prdt_type_cd?:  string
    prdt_name?:  string
    prdt_name120?:  string
    prdt_abrv_name?:  string
    prdt_eng_name?:  string
    prdt_eng_name120?:  string
    prdt_eng_abrv_name?:  string
    std_pdno?:  string
    shtn_pdno?:  string
    prdt_sale_stat_cd?:  string
    prdt_risk_grad_cd?:  string
    prdt_clsf_cd?:  string
    prdt_clsf_name?:  string
    sale_strt_dt?:  string
    sale_end_dt?:  string
    wrap_asst_type_cd?:  string
    ivst_prdt_type_cd?:  string
    ivst_prdt_type_cd_name?:  string
    frst_erlm_dt?:  string
}


export interface CTPF1604R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  CTPF1604R_RESPONSE_BODY_OUTPUT
}


export interface CTCA0903R_RESPONSE_BODY_OUTPUT {
    bass_dt?:  string
    wday_dvsn_cd?:  string
    bzdy_yn?:  string
    tr_day_yn?:  string
    opnd_yn?:  string
    sttl_day_yn?:  string
}


export interface CTCA0903R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    Output?:  CTCA0903R_RESPONSE_BODY_OUTPUT
}


export interface FHPTJ04400000_RESPONSE_BODY_OUTPUT {
    hts_kor_isnm?:  string
    mksc_shrn_iscd?:  string
    ntby_qty?:  string
    stck_prpr?:  string
    prdy_vrss_sign?:  string
    prdy_vrss?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    frgn_ntby_qty?:  string
    orgn_ntby_qty?:  string
    ivtr_ntby_qty?:  string
    bank_ntby_qty?:  string
    insu_ntby_qty?:  string
    mrbn_ntby_qty?:  string
    fund_ntby_qty?:  string
    etc_orgt_ntby_vol?:  string
    etc_corp_ntby_vol?:  string
    frgn_ntby_tr_pbmn?:  string
    orgn_ntby_tr_pbmn?:  string
    ivtr_ntby_tr_pbmn?:  string
    bank_ntby_tr_pbmn?:  string
    insu_ntby_tr_pbmn?:  string
    mrbn_ntby_tr_pbmn?:  string
    fund_ntby_tr_pbmn?:  string
    etc_orgt_ntby_tr_pbmn?:  string
    etc_corp_ntby_tr_pbmn?:  string
}


export interface FHPTJ04400000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    Output?:  FHPTJ04400000_RESPONSE_BODY_OUTPUT
}


export interface HHKST03900300_RESPONSE_BODY_OUTPUT1 {
    user_id?:  string
    seq?:  string
    grp_nm?:  string
    condition_nm?:  string
}


export interface HHKST03900300_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    Output1?:  Array<HHKST03900300_RESPONSE_BODY_OUTPUT1>
}


export interface HHKST03900400_RESPONSE_BODY_OUTPUT1 {
    code?:  string
    name?:  string
    daebi?:  string
    price?:  string
    chgrate?:  string
    acml_vol?:  string
    trade_amt?:  string
    change?:  string
    cttr?:  string
    open?:  string
    high?:  string
    low?:  string
    high52?:  string
    low52?:  string
    expprice?:  string
    expchange?:  string
    expchggrate?:  string
    expcvol?:  string
    chgrate2?:  string
    expdaebi?:  string
    recprice?:  string
    uplmtprice?:  string
    dnlmtprice?:  string
    stotprice?:  string
}


export interface HHKST03900400_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    Output1?:  Array<HHKST03900400_RESPONSE_BODY_OUTPUT1>
}


export interface FHPPG04650100_RESPONSE_BODY_OUTPUT1 {
    bsop_hour?:  string
    stck_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    whol_smtn_seln_vol?:  string
    whol_smtn_shnu_vol?:  string
    whol_smtn_ntby_qty?:  string
    whol_smtn_seln_tr_pbmn?:  string
    whol_smtn_shnu_tr_pbmn?:  string
    whol_smtn_ntby_tr_pbmn?:  string
    whol_ntby_vol_icdc?:  string
    whol_ntby_tr_pbmn_icdc?:  string
}


export interface FHPPG04650100_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    Output1?:  Array<FHPPG04650100_RESPONSE_BODY_OUTPUT1>
}


export interface FHPST01710000_RESPONSE_BODY_OUTPUT {
    hts_kor_isnm?:  string
    mksc_shrn_iscd?:  string
    data_rank?:  string
    stck_prpr?:  string
    prdy_vrss_sign?:  string
    prdy_vrss?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    prdy_vol?:  string
    lstn_stcn?:  string
    avrg_vol?:  string
    n_befr_clpr_vrss_prpr_rate?:  string
    vol_inrt?:  string
    vol_tnrt?:  string
    nday_vol_tnrt?:  string
    avrg_tr_pbmn?:  string
    tr_pbmn_tnrt?:  string
    nday_tr_pbmn_tnrt?:  string
    acml_tr_pbmn?:  string
}


export interface FHPST01710000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    Output?:  Array<FHPST01710000_RESPONSE_BODY_OUTPUT>
}

export type HHPTJ04160200_RESPONSE_BODY_OUTPUT1_BSOP_HOUR_GB = '1' | '2' | '3' | '4' | '5';
export interface HHPTJ04160200_RESPONSE_BODY_OUTPUT1 {
    bsop_hour_gb?:  HHPTJ04160200_RESPONSE_BODY_OUTPUT1_BSOP_HOUR_GB
    frgn_fake_ntby_qty?:  string
    orgn_fake_ntby_qty?:  string
    sum_fake_ntby_qty?:  string
}


export interface HHPTJ04160200_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    Output1?:  Array<HHPTJ04160200_RESPONSE_BODY_OUTPUT1>
}


export interface TTTO1101U_RESPONSE_BODY_OUTPUT {
    ACNT_NAME?:  string
    TRAD_DVSN_NAME?:  string
    ITEM_NAME?:  string
    ORD_TMD?:  string
    ORD_GNO_BRNO?:  string
    ODNO?:  string
}


export interface TTTO1101U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<TTTO1101U_RESPONSE_BODY_OUTPUT>
}


export interface JTCE1001U_RESPONSE_BODY_OUTPUT {
    ACNT_NAME?:  string
    TRAD_DVSN_NAME?:  string
    ITEM_NAME?:  string
    ORD_TMD?:  string
    ORD_GNO_BRNO?:  string
    ODNO?:  string
}


export interface JTCE1001U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<JTCE1001U_RESPONSE_BODY_OUTPUT>
}


export interface VTTO1101U_RESPONSE_BODY_OUTPUT {
    ACNT_NAME?:  string
    TRAD_DVSN_NAME?:  string
    ITEM_NAME?:  string
    ORD_TMD?:  string
    ORD_GNO_BRNO?:  string
    ODNO?:  string
}


export interface VTTO1101U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<VTTO1101U_RESPONSE_BODY_OUTPUT>
}


export interface VTCE1001U_RESPONSE_BODY_OUTPUT {
    ACNT_NAME?:  string
    TRAD_DVSN_NAME?:  string
    ITEM_NAME?:  string
    ORD_TMD?:  string
    ORD_GNO_BRNO?:  string
    ODNO?:  string
}


export interface VTCE1001U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<VTCE1001U_RESPONSE_BODY_OUTPUT>
}


export interface TTTO1103U_RESPONSE_BODY_OUTPUT {
    ACNT_NAME?:  string
    TRAD_DVSN_NAME?:  string
    ITEM_NAME?:  string
    ORD_TMD?:  string
    ORD_GNO_BRNO?:  string
    ORGN_ODNO?:  string
    ODNO?:  string
}


export interface TTTO1103U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<TTTO1103U_RESPONSE_BODY_OUTPUT>
}


export interface JTCE1002U_RESPONSE_BODY_OUTPUT {
    ACNT_NAME?:  string
    TRAD_DVSN_NAME?:  string
    ITEM_NAME?:  string
    ORD_TMD?:  string
    ORD_GNO_BRNO?:  string
    ORGN_ODNO?:  string
    ODNO?:  string
}


export interface JTCE1002U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<JTCE1002U_RESPONSE_BODY_OUTPUT>
}


export interface VTTO1103U_RESPONSE_BODY_OUTPUT {
    ACNT_NAME?:  string
    TRAD_DVSN_NAME?:  string
    ITEM_NAME?:  string
    ORD_TMD?:  string
    ORD_GNO_BRNO?:  string
    ORGN_ODNO?:  string
    ODNO?:  string
}


export interface VTTO1103U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<VTTO1103U_RESPONSE_BODY_OUTPUT>
}


export interface VTCE1002U_RESPONSE_BODY_OUTPUT {
    ACNT_NAME?:  string
    TRAD_DVSN_NAME?:  string
    ITEM_NAME?:  string
    ORD_TMD?:  string
    ORD_GNO_BRNO?:  string
    ORGN_ODNO?:  string
    ODNO?:  string
}


export interface VTCE1002U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<VTCE1002U_RESPONSE_BODY_OUTPUT>
}

export type TTTO5201R_RESPONSE_BODY_OUTPUT1_SLL_BUY_DVSN_CD = '00' | '01' | '02';
export type TTTO5201R_RESPONSE_BODY_OUTPUT1_NMPR_TYPE_CD = '01' | '02' | '03' | '04';
export interface TTTO5201R_RESPONSE_BODY_OUTPUT1 {
    ord_gno_brno?:  string
    cano?:  string
    csac_name?:  string
    acnt_prdt_cd?:  string
    ord_dt?:  string
    odno?:  string
    orgn_odno?:  string
    sll_buy_dvsn_cd?:  TTTO5201R_RESPONSE_BODY_OUTPUT1_SLL_BUY_DVSN_CD
    trad_dvsn_name?:  string
    nmpr_type_cd?:  TTTO5201R_RESPONSE_BODY_OUTPUT1_NMPR_TYPE_CD
    nmpr_type_name?:  string
    pdno?:  string
    prdt_name?:  string
    prdt_type_cd?:  string
    ord_qty?:  string
    ord_idx4?:  string
    qty?:  string
    ord_tmd?:  string
    tot_ccld_qty?:  string
    avg_idx?:  string
    tot_ccld_amt?:  string
    rjct_qty?:  string
    ingr_trad_rjct_rson_cd?:  string
    ingr_trad_rjct_rson_name?:  string
    ord_stfno?:  string
    sprd_item_yn?:  string
    ord_ip_addr?:  string
}



export interface TTTO5201R_RESPONSE_BODY_OUTPUT2 {
    tot_ord_qty?:  string
    tot_ccld_amt_smtl?:  string
    tot_ccld_qty_smtl?:  string
    fee_smtl?:  string
    ctac_tlno?:  string
}


export interface TTTO5201R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    ctx_area_fk200?:  string
    ctx_area_nk200?:  string
    output1?:  Array<TTTO5201R_RESPONSE_BODY_OUTPUT1>
    output2?:  Array<TTTO5201R_RESPONSE_BODY_OUTPUT2>
}

export type VTTO5201R_RESPONSE_BODY_OUTPUT1_SLL_BUY_DVSN_CD = '00' | '01' | '02';
export type VTTO5201R_RESPONSE_BODY_OUTPUT1_NMPR_TYPE_CD = '01' | '02' | '03' | '04';
export interface VTTO5201R_RESPONSE_BODY_OUTPUT1 {
    ord_gno_brno?:  string
    cano?:  string
    csac_name?:  string
    acnt_prdt_cd?:  string
    ord_dt?:  string
    odno?:  string
    orgn_odno?:  string
    sll_buy_dvsn_cd?:  VTTO5201R_RESPONSE_BODY_OUTPUT1_SLL_BUY_DVSN_CD
    trad_dvsn_name?:  string
    nmpr_type_cd?:  VTTO5201R_RESPONSE_BODY_OUTPUT1_NMPR_TYPE_CD
    nmpr_type_name?:  string
    pdno?:  string
    prdt_name?:  string
    prdt_type_cd?:  string
    ord_qty?:  string
    ord_idx4?:  string
    qty?:  string
    ord_tmd?:  string
    tot_ccld_qty?:  string
    avg_idx?:  string
    tot_ccld_amt?:  string
    rjct_qty?:  string
    ingr_trad_rjct_rson_cd?:  string
    ingr_trad_rjct_rson_name?:  string
    ord_stfno?:  string
    sprd_item_yn?:  string
    ord_ip_addr?:  string
}



export interface VTTO5201R_RESPONSE_BODY_OUTPUT2 {
    tot_ord_qty?:  string
    tot_ccld_amt_smtl?:  string
    tot_ccld_qty_smtl?:  string
    fee_smtl?:  string
    ctac_tlno?:  string
}


export interface VTTO5201R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    ctx_area_fk200?:  string
    ctx_area_nk200?:  string
    output1?:  Array<VTTO5201R_RESPONSE_BODY_OUTPUT1>
    output2?:  Array<VTTO5201R_RESPONSE_BODY_OUTPUT2>
}


export interface CTFO6118R_RESPONSE_BODY_OUTPUT1 {
    cano?:  string
    acnt_prdt_cd?:  string
    pdno?:  string
    prdt_type_cd?:  string
    shtn_pdno?:  string
    prdt_name?:  string
    sll_buy_dvsn_name?:  string
    cblc_qty?:  string
    excc_unpr?:  string
    ccld_avg_unpr1?:  string
    idx_clpr?:  string
    pchs_amt?:  string
    evlu_amt?:  string
    evlu_pfls_amt?:  string
    trad_pfls_amt?:  string
    lqd_psbl_qty?:  string
}



export interface CTFO6118R_RESPONSE_BODY_OUTPUT2 {
    dnca_cash?:  string
    frcr_dncl_amt?:  string
    dnca_sbst?:  string
    tot_dncl_amt?:  string
    tot_ccld_amt?:  string
    cash_mgna?:  string
    sbst_mgna?:  string
    mgna_tota?:  string
    opt_dfpa?:  string
    thdt_dfpa?:  string
    rnwl_dfpa?:  string
    fee?:  string
    nxdy_dnca?:  string
    nxdy_dncl_amt?:  string
    prsm_dpast?:  string
    prsm_dpast_amt?:  string
    pprt_ord_psbl_cash?:  string
    add_mgna_cash?:  string
    add_mgna_tota?:  string
    futr_trad_pfls_amt?:  string
    opt_trad_pfls_amt?:  string
    futr_evlu_pfls_amt?:  string
    opt_evlu_pfls_amt?:  string
    trad_pfls_amt_smtl?:  string
    evlu_pfls_amt_smtl?:  string
    wdrw_psbl_tot_amt?:  string
    ord_psbl_cash?:  string
    ord_psbl_sbst?:  string
    ord_psbl_tota?:  string
    pchs_amt_smtl?:  string
    evlu_amt_smtl?:  string
}


export interface CTFO6118R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    ctx_area_fk200?:  string
    ctx_area_nk200?:  string
    output1?:  Array<CTFO6118R_RESPONSE_BODY_OUTPUT1>
    output2?:  Array<CTFO6118R_RESPONSE_BODY_OUTPUT2>
}


export interface VTFO6118R_RESPONSE_BODY_OUTPUT1 {
    cano?:  string
    acnt_prdt_cd?:  string
    pdno?:  string
    prdt_type_cd?:  string
    shtn_pdno?:  string
    prdt_name?:  string
    sll_buy_dvsn_name?:  string
    cblc_qty?:  string
    excc_unpr?:  string
    ccld_avg_unpr1?:  string
    idx_clpr?:  string
    pchs_amt?:  string
    evlu_amt?:  string
    evlu_pfls_amt?:  string
    trad_pfls_amt?:  string
    lqd_psbl_qty?:  string
}



export interface VTFO6118R_RESPONSE_BODY_OUTPUT2 {
    dnca_cash?:  string
    frcr_dncl_amt?:  string
    dnca_sbst?:  string
    tot_dncl_amt?:  string
    tot_ccld_amt?:  string
    cash_mgna?:  string
    sbst_mgna?:  string
    mgna_tota?:  string
    opt_dfpa?:  string
    thdt_dfpa?:  string
    rnwl_dfpa?:  string
    fee?:  string
    nxdy_dnca?:  string
    nxdy_dncl_amt?:  string
    prsm_dpast?:  string
    prsm_dpast_amt?:  string
    pprt_ord_psbl_cash?:  string
    add_mgna_cash?:  string
    add_mgna_tota?:  string
    futr_trad_pfls_amt?:  string
    opt_trad_pfls_amt?:  string
    futr_evlu_pfls_amt?:  string
    opt_evlu_pfls_amt?:  string
    trad_pfls_amt_smtl?:  string
    evlu_pfls_amt_smtl?:  string
    wdrw_psbl_tot_amt?:  string
    ord_psbl_cash?:  string
    ord_psbl_sbst?:  string
    ord_psbl_tota?:  string
    pchs_amt_smtl?:  string
    evlu_amt_smtl?:  string
}


export interface VTFO6118R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    ctx_area_fk200?:  string
    ctx_area_nk200?:  string
    output1?:  Array<VTFO6118R_RESPONSE_BODY_OUTPUT1>
    output2?:  Array<VTFO6118R_RESPONSE_BODY_OUTPUT2>
}


export interface TTTO5105R_RESPONSE_BODY_OUTPUT {
    tot_psbl_qty?:  string
    lqd_psbl_qty1?:  string
    ord_psbl_qty?:  string
    bass_idx?:  string
}


export interface TTTO5105R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<TTTO5105R_RESPONSE_BODY_OUTPUT>
}


export interface VTTO5105R_RESPONSE_BODY_OUTPUT {
    tot_psbl_qty?:  string
    lqd_psbl_qty1?:  string
    ord_psbl_qty?:  string
    bass_idx?:  string
}


export interface VTTO5105R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<VTTO5105R_RESPONSE_BODY_OUTPUT>
}


export interface JTCE5005R_RESPONSE_BODY_OUTPUT {
    tot_ord_qty?:  string
    tot_ccld_qty?:  string
    tot_ccld_amt?:  string
    fee?:  string
}



export interface JTCE5005R_RESPONSE_BODY_OUTPUT1 {
    ord_gno_brno?:  string
    cano?:  string
    csac_name?:  string
    acnt_prdt_cd?:  string
    ord_dt?:  string
    odno?:  string
    orgn_odno?:  string
    sll_buy_dvsn_cd?:  string
    trad_dvsn_name?:  string
    nmpr_type_name?:  string
    pdno?:  string
    prdt_name?:  string
    prdt_type_cd?:  string
    ord_qty?:  string
    ord_idx?:  string
    qty?:  string
    ord_tmd?:  string
    tot_ccld_qty?:  string
    avg_idx?:  string
    tot_ccld_amt?:  string
    rjct_qty?:  string
    ingr_trad_rjct_rson_cd?:  string
    ingr_trad_rjct_rson_name?:  string
    ord_stfno?:  string
    sprd_item_yn?:  string
    ord_ip_addr?:  string
}


export interface JTCE5005R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<JTCE5005R_RESPONSE_BODY_OUTPUT>
    output1?:  Array<JTCE5005R_RESPONSE_BODY_OUTPUT1>
}


export interface JTCE6001R_RESPONSE_BODY_OUTPUT {
    dnca_cash?:  string
    frcr_dncl_amt?:  string
    dnca_sbst?:  string
    tot_dncl_amt?:  string
    cash_mgna?:  string
    sbst_mgna?:  string
    mgna_tota?:  string
    opt_dfpa?:  string
    thdt_dfpa?:  string
    rnwl_dfpa?:  string
    fee?:  string
    nxdy_dnca?:  string
    prsm_dpast?:  string
    pprt_ord_psbl_cash?:  string
    add_mgna_cash?:  string
    add_mgna_tota?:  string
    futr_trad_pfls_amt?:  string
    opt_trad_pfls_amt?:  string
    futr_evlu_pfls_amt?:  string
    opt_evlu_pfls_amt?:  string
    trad_pfls_amt_smtl?:  string
    evlu_pfls_amt_smtl?:  string
    wdrw_psbl_tot_amt?:  string
    ord_psbl_cash?:  string
    ord_psbl_sbst?:  string
    ord_psbl_tota?:  string
    mmga_tot_amt?:  string
    mmga_cash_amt?:  string
    mtnc_rt?:  string
    isfc_amt?:  string
    pchs_amt_smtl?:  string
    evlu_amt_smtl?:  string
}



export interface JTCE6001R_RESPONSE_BODY_OUTPUT1 {
    cano?:  string
    acnt_prdt_cd?:  string
    pdno?:  string
    prdt_type_cd?:  string
    shtn_pdno?:  string
    prdt_name?:  string
    sll_buy_dvsn_cd?:  string
    trad_dvsn_name?:  string
    cblc_qty?:  string
    excc_unpr?:  string
    ccld_avg_unpr1?:  string
    idx_clpr?:  string
    pchs_amt?:  string
    evlu_amt?:  string
    evlu_pfls_amt?:  string
    trad_pfls_amt?:  string
    lqd_psbl_qty?:  string
}


export interface JTCE6001R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  JTCE6001R_RESPONSE_BODY_OUTPUT
    output1?:  Array<JTCE6001R_RESPONSE_BODY_OUTPUT1>
}

export type FHMIF10000000_RESPONSE_BODY_OUTPUT1_PRDY_VRSS_SIGN = '1' | '2' | '3' | '4' | '5';
export interface FHMIF10000000_RESPONSE_BODY_OUTPUT1 {
    hts_kor_isnm?:  string
    futs_prpr?:  string
    futs_prdy_vrss?:  string
    prdy_vrss_sign?:  FHMIF10000000_RESPONSE_BODY_OUTPUT1_PRDY_VRSS_SIGN
    futs_prdy_clpr?:  string
    futs_prdy_ctrt?:  string
    acml_vol?:  string
    acml_tr_pbmn?:  string
    hts_otst_stpl_qty?:  string
    otst_stpl_qty_icdc?:  string
    futs_oprc?:  string
    futs_hgpr?:  string
    futs_lwpr?:  string
    futs_mxpr?:  string
    futs_llam?:  string
    basis?:  string
    futs_sdpr?:  string
    hts_thpr?:  string
    dprt?:  string
    crbr_aply_mxpr?:  string
    crbr_aply_llam?:  string
    futs_last_tr_date?:  string
    hts_rmnn_dynu?:  string
    futs_lstn_medm_hgpr?:  string
    futs_lstn_medm_lwpr?:  string
    delta_val?:  string
    gama?:  string
    theta?:  string
    vega?:  string
    rho?:  string
    hist_vltl?:  string
    hts_ints_vltl?:  string
    mrkt_basis?:  string
    acpr?:  string
}



export interface FHMIF10000000_RESPONSE_BODY_OUTPUT2 {
    bstp_cls_code?:  string
    hts_kor_isnm?:  string
    bstp_nmix_prpr?:  string
    prdy_vrss_sign?:  string
    bstp_nmix_prdy_vrss?:  string
    bstp_nmix_prdy_ctrt?:  string
}



export interface FHMIF10000000_RESPONSE_BODY_OUTPUT3 {
    bstp_cls_code?:  string
    hts_kor_isnm?:  string
    bstp_nmix_prpr?:  string
    prdy_vrss_sign?:  string
    bstp_nmix_prdy_vrss?:  string
    bstp_nmix_prdy_ctrt?:  string
}


export interface FHMIF10000000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<FHMIF10000000_RESPONSE_BODY_OUTPUT1>
    output2?:  Array<FHMIF10000000_RESPONSE_BODY_OUTPUT2>
    output3?:  Array<FHMIF10000000_RESPONSE_BODY_OUTPUT3>
}

export type FHMIF10010000_RESPONSE_BODY_OUTPUT1_PRDY_VRSS_SIGN = '1' | '2' | '3' | '4' | '5';
export interface FHMIF10010000_RESPONSE_BODY_OUTPUT1 {
    hts_kor_isnm?:  string
    futs_prpr?:  string
    prdy_vrss_sign?:  FHMIF10010000_RESPONSE_BODY_OUTPUT1_PRDY_VRSS_SIGN
    futs_prdy_vrss?:  string
    futs_prdy_ctrt?:  string
    acml_vol?:  string
    futs_prdy_clpr?:  string
    futs_shrn_iscd?:  string
}



export interface FHMIF10010000_RESPONSE_BODY_OUTPUT2 {
    futs_askp1?:  string
    futs_askp2?:  string
    futs_askp3?:  string
    futs_askp4?:  string
    futs_askp5?:  string
    futs_bidp1?:  string
    futs_bidp2?:  string
    futs_bidp3?:  string
    futs_bidp4?:  string
    futs_bidp5?:  string
    askp_rsqn1?:  string
    askp_rsqn2?:  string
    askp_rsqn3?:  string
    askp_rsqn4?:  string
    askp_rsqn5?:  string
    bidp_rsqn1?:  string
    bidp_rsqn2?:  string
    bidp_rsqn3?:  string
    bidp_rsqn4?:  string
    bidp_rsqn5?:  string
    askp_csnu1?:  string
    askp_csnu2?:  string
    askp_csnu3?:  string
    askp_csnu4?:  string
    askp_csnu5?:  string
    bidp_csnu1?:  string
    bidp_csnu2?:  string
    bidp_csnu3?:  string
    bidp_csnu4?:  string
    bidp_csnu5?:  string
    total_askp_rsqn?:  string
    total_bidp_rsqn?:  string
    total_askp_csnu?:  string
    total_bidp_csnu?:  string
    aspr_acpt_hour?:  string
}


export interface FHMIF10010000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<FHMIF10010000_RESPONSE_BODY_OUTPUT1>
    output2?:  Array<FHMIF10010000_RESPONSE_BODY_OUTPUT2>
}


export interface FHKIF03020100_RESPONSE_BODY_OUTPUT_2 {
    stck_bsop_date?:  string
    futs_prpr?:  string
    futs_oprc?:  string
    futs_hgpr?:  string
    futs_lwpr?:  string
    acml_vol?:  string
    acml_tr_pbmn?:  string
    mod_yn?:  string
}


export interface FHKIF03020100_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  string
    futs_prdy_vrss?:  string
    prdy_vrss_sign?:  string
    futs_prdy_ctrt?:  string
    futs_prdy_clpr?:  string
    acml_vol?:  string
    acml_tr_pbmn?:  string
    hts_kor_isnm?:  string
    futs_prpr?:  string
    futs_shrn_iscd?:  string
    prdy_vol?:  string
    futs_mxpr?:  string
    futs_llam?:  string
    futs_oprc?:  string
    futs_hgpr?:  string
    futs_lwpr?:  string
    futs_prdy_oprc?:  string
    futs_prdy_hgpr?:  string
    futs_prdy_lwpr?:  string
    futs_askp?:  string
    futs_bidp?:  string
    basis?:  string
    kospi200_nmix?:  string
    kospi200_prdy_vrss?:  string
    kospi200_prdy_ctrt?:  string
    kospi200_prdy_vrss_sign?:  string
    hts_otst_stpl_qty?:  string
    otst_stpl_qty_icdc?:  string
    tday_rltv?:  string
    hts_thpr?:  string
    dprt?:  string
    'output 2'?:  Array<FHKIF03020100_RESPONSE_BODY_OUTPUT_2>
}


export interface TTTT1002U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface TTTT1002U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  TTTT1002U_RESPONSE_BODY_OUTPUT
}


export interface TTTT1006U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface TTTT1006U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  TTTT1006U_RESPONSE_BODY_OUTPUT
}


export interface TTTS0308U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface TTTS0308U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  TTTS0308U_RESPONSE_BODY_OUTPUT
}


export interface TTTS0307U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface TTTS0307U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  TTTS0307U_RESPONSE_BODY_OUTPUT
}


export interface TTTS0202U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface TTTS0202U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  TTTS0202U_RESPONSE_BODY_OUTPUT
}


export interface TTTS1005U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface TTTS1005U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  TTTS1005U_RESPONSE_BODY_OUTPUT
}


export interface TTTS1002U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface TTTS1002U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  TTTS1002U_RESPONSE_BODY_OUTPUT
}


export interface TTTS1001U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface TTTS1001U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  TTTS1001U_RESPONSE_BODY_OUTPUT
}


export interface TTTS0305U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface TTTS0305U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  TTTS0305U_RESPONSE_BODY_OUTPUT
}


export interface TTTS0304U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface TTTS0304U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  TTTS0304U_RESPONSE_BODY_OUTPUT
}


export interface TTTS0311U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface TTTS0311U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  TTTS0311U_RESPONSE_BODY_OUTPUT
}


export interface TTTS0310U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface TTTS0310U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  TTTS0310U_RESPONSE_BODY_OUTPUT
}


export interface VTTT1002U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface VTTT1002U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  VTTT1002U_RESPONSE_BODY_OUTPUT
}


export interface VTTT1001U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface VTTT1001U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  VTTT1001U_RESPONSE_BODY_OUTPUT
}


export interface VTTS0308U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface VTTS0308U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  VTTS0308U_RESPONSE_BODY_OUTPUT
}


export interface VTTS0307U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface VTTS0307U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  VTTS0307U_RESPONSE_BODY_OUTPUT
}


export interface VTTS0202U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface VTTS0202U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  VTTS0202U_RESPONSE_BODY_OUTPUT
}


export interface VTTS1005U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface VTTS1005U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  VTTS1005U_RESPONSE_BODY_OUTPUT
}


export interface VTTS1002U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface VTTS1002U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  VTTS1002U_RESPONSE_BODY_OUTPUT
}


export interface VTTS1001U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface VTTS1001U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  VTTS1001U_RESPONSE_BODY_OUTPUT
}


export interface VTTS0305U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface VTTS0305U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  VTTS0305U_RESPONSE_BODY_OUTPUT
}


export interface VTTS0304U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface VTTS0304U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  VTTS0304U_RESPONSE_BODY_OUTPUT
}


export interface VTTS0311U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface VTTS0311U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  VTTS0311U_RESPONSE_BODY_OUTPUT
}


export interface VTTS0310U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface VTTS0310U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  VTTS0310U_RESPONSE_BODY_OUTPUT
}


export interface TTTT1004U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface TTTT1004U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  TTTT1004U_RESPONSE_BODY_OUTPUT
}


export interface TTTS1003U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface TTTS1003U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  TTTS1003U_RESPONSE_BODY_OUTPUT
}


export interface TTTS0309U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface TTTS0309U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  TTTS0309U_RESPONSE_BODY_OUTPUT
}


export interface TTTS0302U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface TTTS0302U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  TTTS0302U_RESPONSE_BODY_OUTPUT
}


export interface TTTS0306U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface TTTS0306U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  TTTS0306U_RESPONSE_BODY_OUTPUT
}


export interface TTTS0312U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface TTTS0312U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  TTTS0312U_RESPONSE_BODY_OUTPUT
}


export interface VTTT1004U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface VTTT1004U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  VTTT1004U_RESPONSE_BODY_OUTPUT
}


export interface VTTS1003U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface VTTS1003U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  VTTS1003U_RESPONSE_BODY_OUTPUT
}


export interface VTTS0309U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface VTTS0309U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  VTTS0309U_RESPONSE_BODY_OUTPUT
}


export interface VTTS0302U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface VTTS0302U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  VTTS0302U_RESPONSE_BODY_OUTPUT
}


export interface VTTS0306U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface VTTS0306U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  VTTS0306U_RESPONSE_BODY_OUTPUT
}


export interface VTTS0312U_RESPONSE_BODY_OUTPUT {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface VTTS0312U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  VTTS0312U_RESPONSE_BODY_OUTPUT
}


export interface TTTT3016U_RESPONSE_BODY_OUTPUT {
    ODNO?:  string
    RSVN_ORD_RCIT_DT?:  string
    OVRS_RSVN_ODNO?:  string
}


export interface TTTT3016U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  TTTT3016U_RESPONSE_BODY_OUTPUT
}


export interface TTTT3014U_RESPONSE_BODY_OUTPUT {
    ODNO?:  string
    RSVN_ORD_RCIT_DT?:  string
    OVRS_RSVN_ODNO?:  string
}


export interface TTTT3014U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  TTTT3014U_RESPONSE_BODY_OUTPUT
}


export interface TTTS3013U_RESPONSE_BODY_OUTPUT {
    ODNO?:  string
    RSVN_ORD_RCIT_DT?:  string
    OVRS_RSVN_ODNO?:  string
}


export interface TTTS3013U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  TTTS3013U_RESPONSE_BODY_OUTPUT
}


export interface VTTT3016U_RESPONSE_BODY_OUTPUT {
    ODNO?:  string
    RSVN_ORD_RCIT_DT?:  string
    OVRS_RSVN_ODNO?:  string
}


export interface VTTT3016U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  VTTT3016U_RESPONSE_BODY_OUTPUT
}


export interface VTTT3014U_RESPONSE_BODY_OUTPUT {
    ODNO?:  string
    RSVN_ORD_RCIT_DT?:  string
    OVRS_RSVN_ODNO?:  string
}


export interface VTTT3014U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  VTTT3014U_RESPONSE_BODY_OUTPUT
}


export interface VTTS3013U_RESPONSE_BODY_OUTPUT {
    ODNO?:  string
    RSVN_ORD_RCIT_DT?:  string
    OVRS_RSVN_ODNO?:  string
}


export interface VTTS3013U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  VTTS3013U_RESPONSE_BODY_OUTPUT
}


export interface TTTT3017U_RESPONSE_BODY_OUTPUT {
    OVRS_RSVN_ODNO?:  string
}


export interface TTTT3017U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  TTTT3017U_RESPONSE_BODY_OUTPUT
}


export interface VTTT3017U_RESPONSE_BODY_OUTPUT {
    OVRS_RSVN_ODNO?:  string
}


export interface VTTT3017U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  VTTT3017U_RESPONSE_BODY_OUTPUT
}

export type JTTT3018R_RESPONSE_BODY_OUTPUT_SLL_BUY_DVSN_CD = '01' | '02';
export type JTTT3018R_RESPONSE_BODY_OUTPUT_RVSE_CNCL_DVSN_CD = '01' | '02';
export type JTTT3018R_RESPONSE_BODY_OUTPUT_TR_CRCY_CD = 'USD' | 'HKD' | 'CNY' | 'JPY' | 'VND';
export type JTTT3018R_RESPONSE_BODY_OUTPUT_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export interface JTTT3018R_RESPONSE_BODY_OUTPUT {
    ord_dt?:  string
    ord_gno_brno?:  string
    odno?:  string
    orgn_odno?:  string
    pdno?:  string
    prdt_name?:  string
    sll_buy_dvsn_cd?:  JTTT3018R_RESPONSE_BODY_OUTPUT_SLL_BUY_DVSN_CD
    sll_buy_dvsn_cd_name?:  string
    rvse_cncl_dvsn_cd?:  JTTT3018R_RESPONSE_BODY_OUTPUT_RVSE_CNCL_DVSN_CD
    rvse_cncl_dvsn_cd_name?:  string
    rjct_rson?:  string
    rjct_rson_name?:  string
    ord_tmd?:  string
    tr_mket_name?:  string
    tr_crcy_cd?:  JTTT3018R_RESPONSE_BODY_OUTPUT_TR_CRCY_CD
    natn_cd?:  string
    natn_kor_name?:  string
    ft_ord_qty?:  string
    ft_ccld_qty?:  string
    nccs_qty?:  string
    ft_ord_unpr3?:  string
    ft_ccld_unpr3?:  string
    ft_ccld_amt3?:  string
    ovrs_excg_cd?:  JTTT3018R_RESPONSE_BODY_OUTPUT_OVRS_EXCG_CD
    prcs_stat_name?:  string
    loan_type_cd?:  string
    loan_dt?:  string
}


export interface JTTT3018R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<JTTT3018R_RESPONSE_BODY_OUTPUT>
    ctx_area_fk200?:  string
    ctx_area_nk200?:  string
}

export type TTTS3018R_RESPONSE_BODY_OUTPUT_SLL_BUY_DVSN_CD = '01' | '02';
export type TTTS3018R_RESPONSE_BODY_OUTPUT_RVSE_CNCL_DVSN_CD = '01' | '02';
export type TTTS3018R_RESPONSE_BODY_OUTPUT_TR_CRCY_CD = 'USD' | 'HKD' | 'CNY' | 'JPY' | 'VND';
export type TTTS3018R_RESPONSE_BODY_OUTPUT_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export interface TTTS3018R_RESPONSE_BODY_OUTPUT {
    ord_dt?:  string
    ord_gno_brno?:  string
    odno?:  string
    orgn_odno?:  string
    pdno?:  string
    prdt_name?:  string
    sll_buy_dvsn_cd?:  TTTS3018R_RESPONSE_BODY_OUTPUT_SLL_BUY_DVSN_CD
    sll_buy_dvsn_cd_name?:  string
    rvse_cncl_dvsn_cd?:  TTTS3018R_RESPONSE_BODY_OUTPUT_RVSE_CNCL_DVSN_CD
    rvse_cncl_dvsn_cd_name?:  string
    rjct_rson?:  string
    rjct_rson_name?:  string
    ord_tmd?:  string
    tr_mket_name?:  string
    tr_crcy_cd?:  TTTS3018R_RESPONSE_BODY_OUTPUT_TR_CRCY_CD
    natn_cd?:  string
    natn_kor_name?:  string
    ft_ord_qty?:  string
    ft_ccld_qty?:  string
    nccs_qty?:  string
    ft_ord_unpr3?:  string
    ft_ccld_unpr3?:  string
    ft_ccld_amt3?:  string
    ovrs_excg_cd?:  TTTS3018R_RESPONSE_BODY_OUTPUT_OVRS_EXCG_CD
    prcs_stat_name?:  string
    loan_type_cd?:  string
    loan_dt?:  string
}


export interface TTTS3018R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<TTTS3018R_RESPONSE_BODY_OUTPUT>
    ctx_area_fk200?:  string
    ctx_area_nk200?:  string
}

export type VTTS3018R_RESPONSE_BODY_OUTPUT_SLL_BUY_DVSN_CD = '01' | '02';
export type VTTS3018R_RESPONSE_BODY_OUTPUT_RVSE_CNCL_DVSN_CD = '01' | '02';
export type VTTS3018R_RESPONSE_BODY_OUTPUT_TR_CRCY_CD = 'USD' | 'HKD' | 'CNY' | 'JPY' | 'VND';
export type VTTS3018R_RESPONSE_BODY_OUTPUT_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export interface VTTS3018R_RESPONSE_BODY_OUTPUT {
    ord_dt?:  string
    ord_gno_brno?:  string
    odno?:  string
    orgn_odno?:  string
    pdno?:  string
    prdt_name?:  string
    sll_buy_dvsn_cd?:  VTTS3018R_RESPONSE_BODY_OUTPUT_SLL_BUY_DVSN_CD
    sll_buy_dvsn_cd_name?:  string
    rvse_cncl_dvsn_cd?:  VTTS3018R_RESPONSE_BODY_OUTPUT_RVSE_CNCL_DVSN_CD
    rvse_cncl_dvsn_cd_name?:  string
    rjct_rson?:  string
    rjct_rson_name?:  string
    ord_tmd?:  string
    tr_mket_name?:  string
    tr_crcy_cd?:  VTTS3018R_RESPONSE_BODY_OUTPUT_TR_CRCY_CD
    natn_cd?:  string
    natn_kor_name?:  string
    ft_ord_qty?:  string
    ft_ccld_qty?:  string
    nccs_qty?:  string
    ft_ord_unpr3?:  string
    ft_ccld_unpr3?:  string
    ft_ccld_amt3?:  string
    ovrs_excg_cd?:  VTTS3018R_RESPONSE_BODY_OUTPUT_OVRS_EXCG_CD
    prcs_stat_name?:  string
    loan_type_cd?:  string
    loan_dt?:  string
}


export interface VTTS3018R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<VTTS3018R_RESPONSE_BODY_OUTPUT>
    ctx_area_fk200?:  string
    ctx_area_nk200?:  string
}

export type JTTT3012R_RESPONSE_BODY_OUTPUT1_TR_CRCY_CD = 'USD' | 'HKD' | 'CNY' | 'JPY' | 'VND';
export type JTTT3012R_RESPONSE_BODY_OUTPUT1_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type JTTT3012R_RESPONSE_BODY_OUTPUT1_LOAN_TYPE_CD = '00' | '01' | '03' | '05' | '06' | '07' | '09' | '11' | '12' | '13' | '14' | '15' | '16' | '31' | '41' | '42' | '43' | '44' | '81' | '82' | '91' | '92' | '93' | '94';
export interface JTTT3012R_RESPONSE_BODY_OUTPUT1 {
    cano?:  string
    acnt_prdt_cd?:  string
    prdt_type_cd?:  string
    ovrs_pdno?:  string
    ovrs_item_name?:  string
    frcr_evlu_pfls_amt?:  string
    evlu_pfls_rt?:  string
    pchs_avg_pric?:  string
    ovrs_cblc_qty?:  string
    ord_psbl_qty?:  string
    frcr_pchs_amt1?:  string
    ovrs_stck_evlu_amt?:  string
    now_pric2?:  string
    tr_crcy_cd?:  JTTT3012R_RESPONSE_BODY_OUTPUT1_TR_CRCY_CD
    ovrs_excg_cd?:  JTTT3012R_RESPONSE_BODY_OUTPUT1_OVRS_EXCG_CD
    loan_type_cd?:  JTTT3012R_RESPONSE_BODY_OUTPUT1_LOAN_TYPE_CD
    loan_dt?:  string
    expd_dt?:  string
}



export interface JTTT3012R_RESPONSE_BODY_OUTPUT2 {
    frcr_pchs_amt1?:  string
    ovrs_rlzt_pfls_amt?:  string
    ovrs_tot_pfls?:  string
    rlzt_erng_rt?:  string
    tot_evlu_pfls_amt?:  string
    tot_pftrt?:  string
    frcr_buy_amt_smtl1?:  string
    ovrs_rlzt_pfls_amt2?:  string
    frcr_buy_amt_smtl2?:  string
}


export interface JTTT3012R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    ctx_area_fk200?:  string
    ctx_area_nk200?:  string
    output1?:  Array<JTTT3012R_RESPONSE_BODY_OUTPUT1>
    output2?:  Array<JTTT3012R_RESPONSE_BODY_OUTPUT2>
}

export type TTTS3012R_RESPONSE_BODY_OUTPUT1_TR_CRCY_CD = 'USD' | 'HKD' | 'CNY' | 'JPY' | 'VND';
export type TTTS3012R_RESPONSE_BODY_OUTPUT1_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type TTTS3012R_RESPONSE_BODY_OUTPUT1_LOAN_TYPE_CD = '00' | '01' | '03' | '05' | '06' | '07' | '09' | '11' | '12' | '13' | '14' | '15' | '16' | '31' | '41' | '42' | '43' | '44' | '81' | '82' | '91' | '92' | '93' | '94';
export interface TTTS3012R_RESPONSE_BODY_OUTPUT1 {
    cano?:  string
    acnt_prdt_cd?:  string
    prdt_type_cd?:  string
    ovrs_pdno?:  string
    ovrs_item_name?:  string
    frcr_evlu_pfls_amt?:  string
    evlu_pfls_rt?:  string
    pchs_avg_pric?:  string
    ovrs_cblc_qty?:  string
    ord_psbl_qty?:  string
    frcr_pchs_amt1?:  string
    ovrs_stck_evlu_amt?:  string
    now_pric2?:  string
    tr_crcy_cd?:  TTTS3012R_RESPONSE_BODY_OUTPUT1_TR_CRCY_CD
    ovrs_excg_cd?:  TTTS3012R_RESPONSE_BODY_OUTPUT1_OVRS_EXCG_CD
    loan_type_cd?:  TTTS3012R_RESPONSE_BODY_OUTPUT1_LOAN_TYPE_CD
    loan_dt?:  string
    expd_dt?:  string
}



export interface TTTS3012R_RESPONSE_BODY_OUTPUT2 {
    frcr_pchs_amt1?:  string
    ovrs_rlzt_pfls_amt?:  string
    ovrs_tot_pfls?:  string
    rlzt_erng_rt?:  string
    tot_evlu_pfls_amt?:  string
    tot_pftrt?:  string
    frcr_buy_amt_smtl1?:  string
    ovrs_rlzt_pfls_amt2?:  string
    frcr_buy_amt_smtl2?:  string
}


export interface TTTS3012R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    ctx_area_fk200?:  string
    ctx_area_nk200?:  string
    output1?:  Array<TTTS3012R_RESPONSE_BODY_OUTPUT1>
    output2?:  Array<TTTS3012R_RESPONSE_BODY_OUTPUT2>
}

export type VTTS3012R_RESPONSE_BODY_OUTPUT1_TR_CRCY_CD = 'USD' | 'HKD' | 'CNY' | 'JPY' | 'VND';
export type VTTS3012R_RESPONSE_BODY_OUTPUT1_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type VTTS3012R_RESPONSE_BODY_OUTPUT1_LOAN_TYPE_CD = '00' | '01' | '03' | '05' | '06' | '07' | '09' | '11' | '12' | '13' | '14' | '15' | '16' | '31' | '41' | '42' | '43' | '44' | '81' | '82' | '91' | '92' | '93' | '94';
export interface VTTS3012R_RESPONSE_BODY_OUTPUT1 {
    cano?:  string
    acnt_prdt_cd?:  string
    prdt_type_cd?:  string
    ovrs_pdno?:  string
    ovrs_item_name?:  string
    frcr_evlu_pfls_amt?:  string
    evlu_pfls_rt?:  string
    pchs_avg_pric?:  string
    ovrs_cblc_qty?:  string
    ord_psbl_qty?:  string
    frcr_pchs_amt1?:  string
    ovrs_stck_evlu_amt?:  string
    now_pric2?:  string
    tr_crcy_cd?:  VTTS3012R_RESPONSE_BODY_OUTPUT1_TR_CRCY_CD
    ovrs_excg_cd?:  VTTS3012R_RESPONSE_BODY_OUTPUT1_OVRS_EXCG_CD
    loan_type_cd?:  VTTS3012R_RESPONSE_BODY_OUTPUT1_LOAN_TYPE_CD
    loan_dt?:  string
    expd_dt?:  string
}



export interface VTTS3012R_RESPONSE_BODY_OUTPUT2 {
    frcr_pchs_amt1?:  string
    ovrs_rlzt_pfls_amt?:  string
    ovrs_tot_pfls?:  string
    rlzt_erng_rt?:  string
    tot_evlu_pfls_amt?:  string
    tot_pftrt?:  string
    frcr_buy_amt_smtl1?:  string
    ovrs_rlzt_pfls_amt2?:  string
    frcr_buy_amt_smtl2?:  string
}


export interface VTTS3012R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    ctx_area_fk200?:  string
    ctx_area_nk200?:  string
    output1?:  Array<VTTS3012R_RESPONSE_BODY_OUTPUT1>
    output2?:  Array<VTTS3012R_RESPONSE_BODY_OUTPUT2>
}

export type JTTT3001R_RESPONSE_BODY_OUTPUT_SLL_BUY_DVSN_CD = '01' | '02';
export type JTTT3001R_RESPONSE_BODY_OUTPUT_RVSE_CNCL_DVSN = '01' | '02';
export type JTTT3001R_RESPONSE_BODY_OUTPUT_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export interface JTTT3001R_RESPONSE_BODY_OUTPUT {
    ord_dt?:  string
    ord_gno_brno?:  string
    odno?:  string
    orgn_odno?:  string
    sll_buy_dvsn_cd?:  JTTT3001R_RESPONSE_BODY_OUTPUT_SLL_BUY_DVSN_CD
    sll_buy_dvsn_cd_name?:  string
    rvse_cncl_dvsn?:  JTTT3001R_RESPONSE_BODY_OUTPUT_RVSE_CNCL_DVSN
    rvse_cncl_dvsn_name?:  string
    pdno?:  string
    prdt_name?:  string
    ft_ord_qty?:  string
    ft_ord_unpr3?:  string
    ft_ccld_qty?:  string
    ft_ccld_unpr3?:  string
    ft_ccld_amt3?:  string
    nccs_qty?:  string
    prcs_stat_name?:  string
    rjct_rson?:  string
    ord_tmd?:  string
    tr_mket_name?:  string
    tr_natn?:  string
    tr_natn_name?:  string
    ovrs_excg_cd?:  JTTT3001R_RESPONSE_BODY_OUTPUT_OVRS_EXCG_CD
    tr_crcy_cd?:  string
    dmst_ord_dt?:  string
    thco_ord_tmd?:  string
    loan_type_cd?:  string
    mdia_dvsn_name?:  string
    loan_dt?:  string
    rjct_rson_name?:  string
    usa_amk_exts_rqst_yn?:  string
}


export interface JTTT3001R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    ctx_area_fk200?:  string
    ctx_area_nk200?:  string
    output?:  Array<JTTT3001R_RESPONSE_BODY_OUTPUT>
}

export type TTTS3035R_RESPONSE_BODY_OUTPUT_SLL_BUY_DVSN_CD = '01' | '02';
export type TTTS3035R_RESPONSE_BODY_OUTPUT_RVSE_CNCL_DVSN = '01' | '02';
export type TTTS3035R_RESPONSE_BODY_OUTPUT_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export interface TTTS3035R_RESPONSE_BODY_OUTPUT {
    ord_dt?:  string
    ord_gno_brno?:  string
    odno?:  string
    orgn_odno?:  string
    sll_buy_dvsn_cd?:  TTTS3035R_RESPONSE_BODY_OUTPUT_SLL_BUY_DVSN_CD
    sll_buy_dvsn_cd_name?:  string
    rvse_cncl_dvsn?:  TTTS3035R_RESPONSE_BODY_OUTPUT_RVSE_CNCL_DVSN
    rvse_cncl_dvsn_name?:  string
    pdno?:  string
    prdt_name?:  string
    ft_ord_qty?:  string
    ft_ord_unpr3?:  string
    ft_ccld_qty?:  string
    ft_ccld_unpr3?:  string
    ft_ccld_amt3?:  string
    nccs_qty?:  string
    prcs_stat_name?:  string
    rjct_rson?:  string
    ord_tmd?:  string
    tr_mket_name?:  string
    tr_natn?:  string
    tr_natn_name?:  string
    ovrs_excg_cd?:  TTTS3035R_RESPONSE_BODY_OUTPUT_OVRS_EXCG_CD
    tr_crcy_cd?:  string
    dmst_ord_dt?:  string
    thco_ord_tmd?:  string
    loan_type_cd?:  string
    mdia_dvsn_name?:  string
    loan_dt?:  string
    rjct_rson_name?:  string
    usa_amk_exts_rqst_yn?:  string
}


export interface TTTS3035R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    ctx_area_fk200?:  string
    ctx_area_nk200?:  string
    output?:  Array<TTTS3035R_RESPONSE_BODY_OUTPUT>
}

export type VTTS3035R_RESPONSE_BODY_OUTPUT_SLL_BUY_DVSN_CD = '01' | '02';
export type VTTS3035R_RESPONSE_BODY_OUTPUT_RVSE_CNCL_DVSN = '01' | '02';
export type VTTS3035R_RESPONSE_BODY_OUTPUT_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export interface VTTS3035R_RESPONSE_BODY_OUTPUT {
    ord_dt?:  string
    ord_gno_brno?:  string
    odno?:  string
    orgn_odno?:  string
    sll_buy_dvsn_cd?:  VTTS3035R_RESPONSE_BODY_OUTPUT_SLL_BUY_DVSN_CD
    sll_buy_dvsn_cd_name?:  string
    rvse_cncl_dvsn?:  VTTS3035R_RESPONSE_BODY_OUTPUT_RVSE_CNCL_DVSN
    rvse_cncl_dvsn_name?:  string
    pdno?:  string
    prdt_name?:  string
    ft_ord_qty?:  string
    ft_ord_unpr3?:  string
    ft_ccld_qty?:  string
    ft_ccld_unpr3?:  string
    ft_ccld_amt3?:  string
    nccs_qty?:  string
    prcs_stat_name?:  string
    rjct_rson?:  string
    ord_tmd?:  string
    tr_mket_name?:  string
    tr_natn?:  string
    tr_natn_name?:  string
    ovrs_excg_cd?:  VTTS3035R_RESPONSE_BODY_OUTPUT_OVRS_EXCG_CD
    tr_crcy_cd?:  string
    dmst_ord_dt?:  string
    thco_ord_tmd?:  string
    loan_type_cd?:  string
    mdia_dvsn_name?:  string
    loan_dt?:  string
    rjct_rson_name?:  string
    usa_amk_exts_rqst_yn?:  string
}


export interface VTTS3035R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    ctx_area_fk200?:  string
    ctx_area_nk200?:  string
    output?:  Array<VTTS3035R_RESPONSE_BODY_OUTPUT>
}

export type CTRP6504R_RESPONSE_BODY_OUTPUT1_BUY_CRCY_CD = 'USD' | 'HKD' | 'CNY' | 'JPY' | 'VND';
export type CTRP6504R_RESPONSE_BODY_OUTPUT1_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export interface CTRP6504R_RESPONSE_BODY_OUTPUT1 {
    prdt_name?:  string
    cblc_qty13?:  string
    thdt_buy_ccld_qty1?:  string
    thdt_sll_ccld_qty1?:  string
    ccld_qty_smtl1?:  string
    ord_psbl_qty1?:  string
    frcr_pchs_amt?:  string
    frcr_evlu_amt2?:  string
    evlu_pfls_amt2?:  string
    evlu_pfls_rt1?:  string
    pdno?:  string
    bass_exrt?:  string
    buy_crcy_cd?:  CTRP6504R_RESPONSE_BODY_OUTPUT1_BUY_CRCY_CD
    ovrs_now_pric1?:  string
    avg_unpr3?:  string
    tr_mket_name?:  string
    natn_kor_name?:  string
    pchs_rmnd_wcrc_amt?:  string
    thdt_buy_ccld_frcr_amt?:  string
    thdt_sll_ccld_frcr_amt?:  string
    unit_amt?:  string
    std_pdno?:  string
    prdt_type_cd?:  string
    scts_dvsn_name?:  string
    loan_rmnd?:  string
    loan_dt?:  string
    loan_expd_dt?:  string
    ovrs_excg_cd?:  CTRP6504R_RESPONSE_BODY_OUTPUT1_OVRS_EXCG_CD
    item_lnkg_excg_cd?:  string
}



export interface CTRP6504R_RESPONSE_BODY_OUTPUT2 {
    crcy_cd?:  string
    crcy_cd_name?:  string
    frcr_buy_amt_smtl?:  string
    frcr_sll_amt_smtl?:  string
    frcr_dncl_amt_2?:  string
    frst_bltn_exrt?:  string
    frcr_buy_mgn_amt?:  string
    frcr_etc_mgna?:  string
    frcr_drwg_psbl_amt_1?:  string
    frcr_evlu_amt2?:  string
    acpl_cstd_crcy_yn?:  string
    nxdy_frcr_drwg_psbl_amt?:  string
}



export interface CTRP6504R_RESPONSE_BODY_OUTPUT3 {
    pchs_amt_smtl?:  string
    evlu_amt_smtl?:  string
    evlu_pfls_amt_smtl?:  string
    dncl_amt?:  string
    cma_evlu_amt?:  string
    tot_dncl_amt?:  string
    etc_mgna?:  string
    wdrw_psbl_tot_amt?:  string
    frcr_evlu_tota?:  string
    evlu_erng_rt1?:  string
    pchs_amt_smtl_amt?:  string
    evlu_amt_smtl_amt?:  string
    tot_evlu_pfls_amt?:  string
    tot_asst_amt?:  string
    buy_mgn_amt?:  string
    mgna_tota?:  string
    frcr_use_psbl_amt?:  string
    ustl_sll_amt_smtl?:  string
    ustl_buy_amt_smtl?:  string
    tot_frcr_cblc_smtl?:  string
    tot_loan_amt?:  string
}


export interface CTRP6504R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<CTRP6504R_RESPONSE_BODY_OUTPUT1>
    output2?:  CTRP6504R_RESPONSE_BODY_OUTPUT2
    output3?:  Array<CTRP6504R_RESPONSE_BODY_OUTPUT3>
}

export type VTRP6504R_RESPONSE_BODY_OUTPUT1_BUY_CRCY_CD = 'USD' | 'HKD' | 'CNY' | 'JPY' | 'VND';
export type VTRP6504R_RESPONSE_BODY_OUTPUT1_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export interface VTRP6504R_RESPONSE_BODY_OUTPUT1 {
    prdt_name?:  string
    cblc_qty13?:  string
    thdt_buy_ccld_qty1?:  string
    thdt_sll_ccld_qty1?:  string
    ccld_qty_smtl1?:  string
    ord_psbl_qty1?:  string
    frcr_pchs_amt?:  string
    frcr_evlu_amt2?:  string
    evlu_pfls_amt2?:  string
    evlu_pfls_rt1?:  string
    pdno?:  string
    bass_exrt?:  string
    buy_crcy_cd?:  VTRP6504R_RESPONSE_BODY_OUTPUT1_BUY_CRCY_CD
    ovrs_now_pric1?:  string
    avg_unpr3?:  string
    tr_mket_name?:  string
    natn_kor_name?:  string
    pchs_rmnd_wcrc_amt?:  string
    thdt_buy_ccld_frcr_amt?:  string
    thdt_sll_ccld_frcr_amt?:  string
    unit_amt?:  string
    std_pdno?:  string
    prdt_type_cd?:  string
    scts_dvsn_name?:  string
    loan_rmnd?:  string
    loan_dt?:  string
    loan_expd_dt?:  string
    ovrs_excg_cd?:  VTRP6504R_RESPONSE_BODY_OUTPUT1_OVRS_EXCG_CD
    item_lnkg_excg_cd?:  string
}



export interface VTRP6504R_RESPONSE_BODY_OUTPUT2 {
    crcy_cd?:  string
    crcy_cd_name?:  string
    frcr_buy_amt_smtl?:  string
    frcr_sll_amt_smtl?:  string
    frcr_dncl_amt_2?:  string
    frst_bltn_exrt?:  string
    frcr_buy_mgn_amt?:  string
    frcr_etc_mgna?:  string
    frcr_drwg_psbl_amt_1?:  string
    frcr_evlu_amt2?:  string
    acpl_cstd_crcy_yn?:  string
    nxdy_frcr_drwg_psbl_amt?:  string
}



export interface VTRP6504R_RESPONSE_BODY_OUTPUT3 {
    pchs_amt_smtl?:  string
    evlu_amt_smtl?:  string
    evlu_pfls_amt_smtl?:  string
    dncl_amt?:  string
    cma_evlu_amt?:  string
    tot_dncl_amt?:  string
    etc_mgna?:  string
    wdrw_psbl_tot_amt?:  string
    frcr_evlu_tota?:  string
    evlu_erng_rt1?:  string
    pchs_amt_smtl_amt?:  string
    evlu_amt_smtl_amt?:  string
    tot_evlu_pfls_amt?:  string
    tot_asst_amt?:  string
    buy_mgn_amt?:  string
    mgna_tota?:  string
    frcr_use_psbl_amt?:  string
    ustl_sll_amt_smtl?:  string
    ustl_buy_amt_smtl?:  string
    tot_frcr_cblc_smtl?:  string
    tot_loan_amt?:  string
}


export interface VTRP6504R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<VTRP6504R_RESPONSE_BODY_OUTPUT1>
    output2?:  VTRP6504R_RESPONSE_BODY_OUTPUT2
    output3?:  Array<VTRP6504R_RESPONSE_BODY_OUTPUT3>
}


export interface TTTT3039R_RESPONSE_BODY_OUTPUT {
    cncl_yn?:  string
    rsvn_ord_rcit_dt?:  string
    ovrs_rsvn_odno?:  string
    ord_dt?:  string
    ord_gno_brno?:  string
    odno?:  string
    sll_buy_dvsn_cd?:  string
    sll_buy_dvsn_name?:  string
    ovrs_rsvn_ord_stat_cd?:  string
    ovrs_rsvn_ord_stat_cd_name?:  string
    pdno?:  string
    prdt_type_cd?:  string
    prdt_name?:  string
    ord_rcit_tmd?:  string
    ord_fwdg_tmd?:  string
    tr_dvsn_name?:  string
    ovrs_excg_cd?:  string
    tr_mket_name?:  string
    ord_stfno?:  string
    ft_ord_qty?:  string
    ft_ord_unpr3?:  string
    ft_ccld_qty?:  string
    ft_ccld_unpr3?:  string
    nprc_rson_text?:  string
}


export interface TTTT3039R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    ctx_area_fk200?:  string
    ctx_area_nk200?:  string
    output?:  TTTT3039R_RESPONSE_BODY_OUTPUT
}

export type JTTT3007R_RESPONSE_BODY_OUTPUT_OVRS_ORD_PSBL_AMT = '예';
export interface JTTT3007R_RESPONSE_BODY_OUTPUT {
    tr_crcy_cd?:  string
    ord_psbl_frcr_amt?:  string
    sll_ruse_psbl_amt?:  string
    ovrs_ord_psbl_amt?:  JTTT3007R_RESPONSE_BODY_OUTPUT_OVRS_ORD_PSBL_AMT
    max_ord_psbl_qty?:  string
    echm_af_ord_psbl_amt?:  string
    echm_af_ord_psbl_qty?:  string
    ord_psbl_qty?:  string
    exrt?:  string
    frcr_ord_psbl_amt1?:  string
    ovrs_max_ord_psbl_qty?:  string
}


export interface JTTT3007R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  JTTT3007R_RESPONSE_BODY_OUTPUT
}

export type TTTS3007R_RESPONSE_BODY_OUTPUT_OVRS_ORD_PSBL_AMT = '예';
export interface TTTS3007R_RESPONSE_BODY_OUTPUT {
    tr_crcy_cd?:  string
    ord_psbl_frcr_amt?:  string
    sll_ruse_psbl_amt?:  string
    ovrs_ord_psbl_amt?:  TTTS3007R_RESPONSE_BODY_OUTPUT_OVRS_ORD_PSBL_AMT
    max_ord_psbl_qty?:  string
    echm_af_ord_psbl_amt?:  string
    echm_af_ord_psbl_qty?:  string
    ord_psbl_qty?:  string
    exrt?:  string
    frcr_ord_psbl_amt1?:  string
    ovrs_max_ord_psbl_qty?:  string
}


export interface TTTS3007R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  TTTS3007R_RESPONSE_BODY_OUTPUT
}


export interface TTTS6036U_RESPONSE_BODY_OUTPUT1 {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface TTTS6036U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    Output1?:  TTTS6036U_RESPONSE_BODY_OUTPUT1
}


export interface TTTS6037U_RESPONSE_BODY_OUTPUT1 {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface TTTS6037U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    Output1?:  TTTS6037U_RESPONSE_BODY_OUTPUT1
}


export interface TTTS6038U_RESPONSE_BODY_OUTPUT1 {
    KRX_FWDG_ORD_ORGNO?:  string
    ODNO?:  string
    ORD_TMD?:  string
}


export interface TTTS6038U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    Output1?:  TTTS6038U_RESPONSE_BODY_OUTPUT1
}


export interface TTTS3039R_RESPONSE_BODY_OUTPUT1 {
    trad_day?:  string
    ovrs_pdno?:  string
    ovrs_item_name?:  string
    slcl_qty?:  string
    pchs_avg_pric?:  string
    frcr_pchs_amt1?:  string
    avg_sll_unpr?:  string
    frcr_sll_amt_smtl1?:  string
    stck_sll_tlex?:  string
    ovrs_rlzt_pfls_amt?:  string
    pftrt?:  string
    exrt?:  string
    ovrs_excg_cd?:  string
    frst_bltn_exrt?:  string
}



export interface TTTS3039R_RESPONSE_BODY_OUTPUT2 {
    stck_sll_amt_smtl?:  string
    stck_buy_amt_smtl?:  string
    smtl_fee1?:  string
    excc_dfrm_amt?:  string
    ovrs_rlzt_pfls_tot_amt?:  string
    tot_pftrt?:  string
    bass_dt?:  string
    exrt?:  string
}


export interface TTTS3039R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    Output1?:  Array<TTTS3039R_RESPONSE_BODY_OUTPUT1>
    Output2?:  TTTS3039R_RESPONSE_BODY_OUTPUT2
}


export interface HHDFS00000300_RESPONSE_BODY {
}

export type HHDFS76240000_RESPONSE_BODY_OUTPUT1_RSYM = '예) DNASAAPL';
export interface HHDFS76240000_RESPONSE_BODY_OUTPUT1 {
    rsym?:  HHDFS76240000_RESPONSE_BODY_OUTPUT1_RSYM
    zdiv?:  string
    nrec?:  string
}


export type HHDFS76240000_RESPONSE_BODY_OUTPUT2_SIGN = '1' | '2' | '3' | '4' | '5';
export interface HHDFS76240000_RESPONSE_BODY_OUTPUT2 {
    xymd?:  string
    clos?:  string
    sign?:  HHDFS76240000_RESPONSE_BODY_OUTPUT2_SIGN
    diff?:  string
    rate?:  string
    open?:  string
    high?:  string
    low?:  string
    tvol?:  string
    tamt?:  string
    pbid?:  string
    vbid?:  string
    pask?:  string
    vask?:  string
}


export interface HHDFS76240000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<HHDFS76240000_RESPONSE_BODY_OUTPUT1>
    output2?:  HHDFS76240000_RESPONSE_BODY_OUTPUT2
}


export interface FHKST03030100_RESPONSE_BODY_OUTPUT1 {
    ovrs_nmix_prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    ovrs_nmix_prdy_clpr?:  string
    acml_vol?:  string
    hts_kor_isnm?:  string
    ovrs_nmix_prpr?:  string
    stck_shrn_iscd?:  string
    prdy_vol?:  string
    ovrs_prod_oprc?:  string
    ovrs_prod_hgpr?:  string
    ovrs_prod_lwpr?:  string
}



export interface FHKST03030100_RESPONSE_BODY_OUTPUT2 {
    stck_bsop_date?:  string
    ovrs_nmix_prpr?:  string
    ovrs_nmix_oprc?:  string
    ovrs_nmix_hgpr?:  string
    ovrs_nmix_lwpr?:  string
    acml_vol?:  string
    mod_yn?:  string
}


export interface FHKST03030100_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  FHKST03030100_RESPONSE_BODY_OUTPUT1
    output2?:  Array<FHKST03030100_RESPONSE_BODY_OUTPUT2>
}


export interface HHDFS76410000_RESPONSE_BODY_OUTPUT {
    zdiv?:  string
    stat?:  string
    crec?:  string
    trec?:  string
    nrec?:  string
}



export interface HHDFS76410000_RESPONSE_BODY_OUTPUT1 {
    rsym?:  string
    excd?:  string
    name?:  string
    symb?:  string
    last?:  string
    shar?:  string
    valx?:  string
    plow?:  string
    phigh?:  string
    popen?:  string
    tvol?:  string
    rate?:  string
    diff?:  string
    sign?:  string
    avol?:  string
    eps?:  string
    per?:  string
    rank?:  string
    ename?:  string
    e_ordyn?:  string
}


export interface HHDFS76410000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  HHDFS76410000_RESPONSE_BODY_OUTPUT
    output1?:  Array<HHDFS76410000_RESPONSE_BODY_OUTPUT1>
}


export interface CTOS5011R_RESPONSE_BODY_OUTPUT {
    prdt_type_cd?:  string
    tr_natn_cd?:  string
    tr_natn_name?:  string
    natn_eng_abrv_cd?:  string
    tr_mket_cd?:  string
    tr_mket_name?:  string
    acpl_sttl_dt?:  string
    dmst_sttl_dt?:  string
}


export interface CTOS5011R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    Output?:  CTOS5011R_RESPONSE_BODY_OUTPUT
}


export interface HHDFS76200200_RESPONSE_BODY_OUTPUT1 {
    rsym?:  string
    pvol?:  string
    open?:  string
    high?:  string
    low?:  string
    last?:  string
    base?:  string
    tomv?:  string
    pamt?:  string
    uplp?:  string
    dnlp?:  string
    h52p?:  string
    h52d?:  string
    l52p?:  string
    l52d?:  string
    perx?:  string
    pbrx?:  string
    epsx?:  string
    bpsx?:  string
    shar?:  string
    mcap?:  string
    curr?:  string
    zdiv?:  string
    vnit?:  string
    t_xprc?:  string
    t_xdif?:  string
    t_xrat?:  string
    p_xprc?:  string
    p_xdif?:  string
    p_xrat?:  string
    t_rate?:  string
    p_rate?:  string
    t_xsgn?:  string
    p_xsng?:  string
    e_ordyn?:  string
    e_hogau?:  string
    e_icod?:  string
    e_parp?:  string
    tvol?:  string
    tamt?:  string
    etyp_nm?:  string
}


export interface HHDFS76200200_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    Output1?:  HHDFS76200200_RESPONSE_BODY_OUTPUT1
}


export interface OTFM3001U_RESPONSE_BODY_OUTPUT {
    ORD_DT?:  string
    ODNO?:  string
}


export interface OTFM3001U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  OTFM3001U_RESPONSE_BODY_OUTPUT
}


export interface OTFM3002U_RESPONSE_BODY_OUTPUT {
    ORD_DT?:  string
    ODNO?:  string
}


export interface OTFM3002U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  OTFM3002U_RESPONSE_BODY_OUTPUT
}


export interface OTFM3003U_RESPONSE_BODY_OUTPUT {
    ORD_DT?:  string
    ODNO?:  string
}


export interface OTFM3003U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  OTFM3003U_RESPONSE_BODY_OUTPUT
}


export interface OTFM3116R_RESPONSE_BODY_OUTPUT {
    cano?:  string
    acnt_prdt_cd?:  string
    ord_dt?:  string
    odno?:  string
    orgn_ord_dt?:  string
    orgn_odno?:  string
    ovrs_futr_fx_pdno?:  string
    rcit_dvsn_cd?:  string
    sll_buy_dvsn_cd?:  string
    trad_stgy_dvsn_cd?:  string
    bass_pric_type_cd?:  string
    ord_stat_cd?:  string
    fm_ord_qty?:  string
    fm_ord_pric?:  string
    fm_stop_ord_pric?:  string
    rsvn_dvsn?:  string
    fm_ccld_qty?:  string
    fm_ccld_pric?:  string
    fm_ord_rmn_qty?:  string
    ord_grp_name?:  string
    erlm_dtl_dtime?:  string
    ccld_dtl_dtime?:  string
    ord_stfno?:  string
    rmks1?:  string
    new_lqd_dvsn_cd?:  string
    fm_lqd_lmt_ord_pric?:  string
    fm_lqd_stop_pric?:  string
    ccld_cndt_cd?:  string
    noti_vald_dt?:  string
    acnt_type_cd?:  string
    fuop_dvsn?:  string
}


export interface OTFM3116R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  OTFM3116R_RESPONSE_BODY_OUTPUT
}


export interface OTFM1412R_RESPONSE_BODY_OUTPUT {
    cano?:  string
    acnt_prdt_cd?:  string
    ovrs_futr_fx_pdno?:  string
    prdt_type_cd?:  string
    crcy_cd?:  string
    sll_buy_dvsn_cd?:  string
    fm_ustl_qty?:  string
    fm_ccld_avg_pric?:  string
    fm_now_pric?:  string
    fm_evlu_pfls_amt?:  string
    fm_opt_evlu_amt?:  string
    fm_otp_evlu_pfls_amt?:  string
    fuop_dvsn?:  string
    ecis_rsvn_ord_yn?:  string
    fm_lqd_psbl_qty?:  string
}


export interface OTFM1412R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  OTFM1412R_RESPONSE_BODY_OUTPUT
}


export interface OTFM3304R_RESPONSE_BODY_OUTPUT {
    cano?:  string
    acnt_prdt_cd?:  string
    ovrs_futr_fx_pdno?:  string
    crcy_cd?:  string
    sll_buy_dvsn_cd?:  string
    fm_ustl_qty?:  string
    fm_lqd_psbl_qty?:  string
    fm_new_ord_psbl_qty?:  string
    fm_tot_ord_psbl_qty?:  string
    fm_mkpr_tot_ord_psbl_qty?:  string
}


export interface OTFM3304R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  OTFM3304R_RESPONSE_BODY_OUTPUT
}


export interface OTFM3118R_RESPONSE_BODY_OUTPUT {
    cano?:  string
    acnt_prdt_cd?:  string
    crcy_cd?:  string
    fm_buy_qty?:  string
    fm_sll_qty?:  string
    fm_lqd_pfls_amt?:  string
    fm_fee?:  string
    fm_net_pfls_amt?:  string
    fm_ustl_buy_qty?:  string
    fm_ustl_sll_qty?:  string
    fm_ustl_evlu_pfls_amt?:  string
    fm_ustl_evlu_pfls_amt2?:  string
    fm_ustl_evlu_pfls_icdc_amt?:  string
    fm_ustl_agrm_amt?:  string
    fm_opt_lqd_amt?:  string
}



export interface OTFM3118R_RESPONSE_BODY_OUTPUT1 {
    cano?:  string
    acnt_prdt_cd?:  string
    ovrs_futr_fx_pdno?:  string
    crcy_cd?:  string
    fm_buy_qty?:  string
    fm_sll_qty?:  string
    fm_lqd_pfls_amt?:  string
    fm_fee?:  string
    fm_net_pfls_amt?:  string
    fm_ustl_buy_qty?:  string
    fm_ustl_sll_qty?:  string
    fm_ustl_evlu_pfls_amt?:  string
    fm_ustl_evlu_pfls_amt2?:  string
    fm_ustl_evlu_pfls_icdc_amt?:  string
    fm_ccld_avg_pric?:  string
    fm_ustl_agrm_amt?:  string
    fm_opt_lqd_amt?:  string
}


export interface OTFM3118R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<OTFM3118R_RESPONSE_BODY_OUTPUT>
    output1?:  Array<OTFM3118R_RESPONSE_BODY_OUTPUT1>
}


export interface OTFM3122R_RESPONSE_BODY_OUTPUT {
    fm_tot_ccld_qty?:  string
    fm_tot_futr_agrm_amt?:  string
    fm_tot_opt_agrm_amt?:  string
    fm_fee_smtl?:  string
}



export interface OTFM3122R_RESPONSE_BODY_OUTPUT1 {
    dt?:  string
    ccno?:  string
    ovrs_futr_fx_pdno?:  string
    sll_buy_dvsn_cd?:  string
    fm_ccld_qty?:  string
    fm_ccld_amt?:  string
    fm_futr_ccld_amt?:  string
    fm_opt_ccld_amt?:  string
    crcy_cd?:  string
    fm_fee?:  string
    fm_futr_pure_agrm_amt?:  string
    fm_opt_pure_agrm_amt?:  string
    ccld_dtl_dtime?:  string
    ord_dt?:  string
    odno?:  string
    ord_mdia_dvsn_name?:  string
}


export interface OTFM3122R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  OTFM3122R_RESPONSE_BODY_OUTPUT
    output1?:  Array<OTFM3122R_RESPONSE_BODY_OUTPUT1>
}


export interface OTFM1411R_RESPONSE_BODY_OUTPUT {
    fm_nxdy_dncl_amt?:  string
    fm_tot_asst_evlu_amt?:  string
    cano?:  string
    acnt_prdt_cd?:  string
    crcy_cd?:  string
    resp_dt?:  string
    fm_dnca_rmnd?:  string
    fm_lqd_pfls_amt?:  string
    fm_fee?:  string
    fm_fuop_evlu_pfls_amt?:  string
    fm_rcvb_amt?:  string
    fm_brkg_mgn_amt?:  string
    fm_mntn_mgn_amt?:  string
    fm_add_mgn_amt?:  string
    fm_risk_rt?:  string
    fm_ord_psbl_amt?:  string
    fm_drwg_psbl_amt?:  string
    fm_echm_rqrm_amt?:  string
    fm_drwg_prar_amt?:  string
    fm_opt_tr_chgs?:  string
    fm_opt_icld_asst_evlu_amt?:  string
    fm_opt_evlu_amt?:  string
    fm_crcy_sbst_amt?:  string
    fm_crcy_sbst_use_amt?:  string
    fm_crcy_sbst_stup_amt?:  string
}


export interface OTFM1411R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  OTFM1411R_RESPONSE_BODY_OUTPUT
}


export interface OTFM3120R_RESPONSE_BODY_OUTPUT {
    cano?:  string
    acnt_prdt_cd?:  string
    dt?:  string
    ord_dt?:  string
    odno?:  string
    orgn_ord_dt?:  string
    orgn_odno?:  string
    ovrs_futr_fx_pdno?:  string
    rvse_cncl_dvsn_cd?:  string
    sll_buy_dvsn_cd?:  string
    cplx_ord_dvsn_cd?:  string
    pric_dvsn_cd?:  string
    rcit_dvsn_cd?:  string
    fm_ord_qty?:  string
    fm_ord_pric?:  string
    fm_stop_ord_pric?:  string
    ecis_rsvn_ord_yn?:  string
    fm_ccld_qty?:  string
    fm_ccld_pric?:  string
    fm_ord_rmn_qty?:  string
    ord_grp_name?:  string
    rcit_dtl_dtime?:  string
    ccld_dtl_dtime?:  string
    ordr_emp_no?:  string
    rjct_rson_name?:  string
    ccld_cndt_cd?:  string
    trad_end_dt?:  string
}


export interface OTFM3120R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<OTFM3120R_RESPONSE_BODY_OUTPUT>
}


export interface OTFM3114R_RESPONSE_BODY_OUTPUT {
    bass_dt?:  string
    cano?:  string
    acnt_prdt_cd?:  string
    fm_ldgr_inog_seq?:  string
    acnt_tr_type_name?:  string
    crcy_cd?:  string
    tr_itm_name?:  string
    fm_iofw_amt?:  string
    fm_fee?:  string
    fm_tax_amt?:  string
    fm_sttl_amt?:  string
    fm_bf_dncl_amt?:  string
    fm_dncl_amt?:  string
    fm_rcvb_occr_amt?:  string
    fm_rcvb_pybk_amt?:  string
    ovdu_int_pybk_amt?:  string
    rmks_text?:  string
}


export interface OTFM3114R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<OTFM3114R_RESPONSE_BODY_OUTPUT>
}


export interface HHDFC55010100_RESPONSE_BODY_OUTPUT {
    exch_cd?:  string
    tick_sz?:  string
    disp_digit?:  string
    trst_mgn?:  string
    sttl_date?:  string
    prev_price?:  string
    crc_cd?:  string
    clas_cd?:  string
    tick_val?:  string
    mrkt_open_date?:  string
    mrkt_open_time?:  string
    mrkt_close_date?:  string
    mrkt_close_time?:  string
    trd_fr_date?:  string
    expr_date?:  string
    trd_to_date?:  string
    remn_cnt?:  string
    stat_tp?:  string
    ctrt_size?:  string
    stl_tp?:  string
    frst_noti_date?:  string
    sprd_srs_cd1?:  string
    sprd_srs_cd2?:  string
}


export interface HHDFC55010100_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  HHDFC55010100_RESPONSE_BODY_OUTPUT
}


export interface HHDFC55010000_RESPONSE_BODY_OUTPUT {
    proc_date?:  string
    high_price?:  string
    proc_time?:  string
    open_price?:  string
    trst_mgn?:  string
    low_price?:  string
    last_price?:  string
    vol?:  string
    prev_diff_flag?:  string
    prev_diff_price?:  string
    prev_diff_rate?:  string
    bid_qntt?:  string
    bid_price?:  string
    ask_qntt?:  string
    ask_price?:  string
    prev_price?:  string
    exch_cd?:  string
    crc_cd?:  string
    trd_fr_date?:  string
    expr_date?:  string
    trd_to_date?:  string
    remn_cnt?:  string
    last_qntt?:  string
    tot_ask_qntt?:  string
    tot_bid_qntt?:  string
    tick_size?:  string
    open_date?:  string
    open_time?:  string
    close_date?:  string
    close_time?:  string
    sbsnsdate?:  string
}


export interface HHDFC55010000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  HHDFC55010000_RESPONSE_BODY_OUTPUT
}



export class EFriendRest {
    /**
     * requestHeader를 재설정하여 반환 한다.
     * 
     * @param {Secret} secret                               인증 정보
     * @param {string} trid                                 트랜잭션 ID
     * @param {REQUEST_HEADER} requestHeader                요청 header
     * @param {REQUEST_BODY} requestBody                    요청 body
     * @param {RESPONSE_HEADER} responseHeader              응답 header
     * @returns {REQUEST_HEADER}                            재설정된 요청 header
     * @throws {EFriendError}
     */
    private async _resetRequestHeader(
        secret: Secret, trid: string, 
        requestHeader: REQUEST_HEADER, requestBody: REQUEST_BODY, 
        responseHeader: RESPONSE_HEADER | null = null): Promise<REQUEST_HEADER>;

    /**
     * data의 값을 검사 한다.
     * 
     * @param {string} trid                                 트랜잭션 ID
     * @param {Array<TRID_FIELD>} fields                    필드 목록
     * @param {DATA_OBJECT} data                            검사할 데이터 객체
     * @throws {EFriendError}
     */
    private _checkData<DATA_OBJECT>(trid: string, fields: Array<TRID_FIELD>, data: DATA_OBJECT): void;

    /**
     * 필드의 값을 검사 한다.
     * 
     * @param {TRID_FIELD} field                                필드 정보
     * @param {DATA_OBJECT} data                                field의 값을 포함하는 object
     * @param {string} trid                                     tr_id
     * @param {boolean} allowException                          true. Exception 허용
     * @throws {EFriendError}
     */
    private _checkField<DATA_OBJECT>(field: TRID_FIELD, data: DATA_OBJECT, trid: string, allowException: boolean = true): void;

    /**
     * Response Header에서 필드 설정과 실제 데이터의 필드 항목을 비교 한다.
     * 
     * @param {Array<TRID_FIELD>} fields                    Fields의 메타 정보
     * @param {Object} data                                 Response Header 데이터
     * @param {string} trid                                 tr_id
     */
    private _compareWithMeta(fields: Array<TRID_FIELD>, data: Object, trid: string): void
    
    /**
     * Response data의 값을 검사 한다.
     * 
     * @param {string} trid                                 트랜잭션 ID
     * @param {Array<TRID_FIELD>} fields                    필드 목록
     * @param {Object} data                                검사할 데이터 객체
     * @throws {EFriendError}
     */
    private _checkResponsebody(trid: string, fields: Array<TRID_FIELD> | undefined, data: Object): void
        
    /**
     * 한국투자증권 EFriendExpert의 REST API
     * @description 한국투자증권 EFriendExpert의 REST API를 호출하고 결과를 반환 한다.
     * 
     * @param {Secret} secret                               인증 정보
     * @param {string} trid                                 트랜잭션 ID
     * @param {REQUEST_HEADER} requestHeader                요청 header
     * @param {REQUEST_BODY} requestBody                    요청 body
     * @param {RESPONSE_HEADER} responseHeader              응답 header
     * @returns {RESPONSE}
     */
    public async request(
        secret: Secret, trid: string, requestHeader: REQUEST_HEADER, requestBody: REQUEST_BODY, 
        responseHeader: RESPONSE_HEADER | null = null): Promise<RESPONSE>;


    /**
     * 실시간 (웹소켓) 접속키 발급
     * @description 실시간 (웹소켓) 접속키 발급
     * 
     * @param {Secret} secret                               인증 정보
     * @param {APPROVAL_REQUEST_HEADER} requestHeader    요청 header
     * @param {APPROVAL_REQUEST_BODY} requestBody        요청 body
     * @param {APPROVAL_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {APPROVAL_RESPONSE}
     */
    public async Approval(
        secret: Secret, requestHeader: APPROVAL_REQUEST_HEADER, requestBody: APPROVAL_REQUEST_BODY, 
        responseHeader: APPROVAL_RESPONSE_HEADER | null = null): Promise<APPROVAL_RESPONSE>;
                    
    /**
     * Hashkey
     * @description Hashkey
     * 
     * @param {Secret} secret                               인증 정보
     * @param {HASHKEY_REQUEST_HEADER} requestHeader    요청 header
     * @param {HASHKEY_REQUEST_BODY} requestBody        요청 body
     * @param {HASHKEY_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {HASHKEY_RESPONSE}
     */
    public async hashkey(
        secret: Secret, requestHeader: HASHKEY_REQUEST_HEADER, requestBody: HASHKEY_REQUEST_BODY, 
        responseHeader: HASHKEY_RESPONSE_HEADER | null = null): Promise<HASHKEY_RESPONSE>;
                    
    /**
     * 접근토큰발급(P)
     * @description 접근토큰발급(P)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TOKENP_REQUEST_HEADER} requestHeader    요청 header
     * @param {TOKENP_REQUEST_BODY} requestBody        요청 body
     * @param {TOKENP_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TOKENP_RESPONSE}
     */
    public async tokenP(
        secret: Secret, requestHeader: TOKENP_REQUEST_HEADER, requestBody: TOKENP_REQUEST_BODY, 
        responseHeader: TOKENP_RESPONSE_HEADER | null = null): Promise<TOKENP_RESPONSE>;
                    
    /**
     * 접근토큰폐기(P)
     * @description 접근토큰폐기(P)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {REVOKEP_REQUEST_HEADER} requestHeader    요청 header
     * @param {REVOKEP_REQUEST_BODY} requestBody        요청 body
     * @param {REVOKEP_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {REVOKEP_RESPONSE}
     */
    public async revokeP(
        secret: Secret, requestHeader: REVOKEP_REQUEST_HEADER, requestBody: REVOKEP_REQUEST_BODY, 
        responseHeader: REVOKEP_RESPONSE_HEADER | null = null): Promise<REVOKEP_RESPONSE>;
                    
    /**
     * 주식주문(현금)
     * @description 주식주문(현금)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTC0802U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTC0802U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTC0802U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTC0802U_RESPONSE}
     */
    public async TTTC0802U(
        secret: Secret, requestHeader: TTTC0802U_REQUEST_HEADER, requestBody: TTTC0802U_REQUEST_BODY, 
        responseHeader: TTTC0802U_RESPONSE_HEADER | null = null): Promise<TTTC0802U_RESPONSE>;
                    
    /**
     * 주식주문(현금)
     * @description 주식주문(현금)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTC0801U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTC0801U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTC0801U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTC0801U_RESPONSE}
     */
    public async TTTC0801U(
        secret: Secret, requestHeader: TTTC0801U_REQUEST_HEADER, requestBody: TTTC0801U_REQUEST_BODY, 
        responseHeader: TTTC0801U_RESPONSE_HEADER | null = null): Promise<TTTC0801U_RESPONSE>;
                    
    /**
     * 주식주문(현금)
     * @description 주식주문(현금)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTC0802U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTC0802U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTC0802U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTC0802U_RESPONSE}
     */
    public async VTTC0802U(
        secret: Secret, requestHeader: VTTC0802U_REQUEST_HEADER, requestBody: VTTC0802U_REQUEST_BODY, 
        responseHeader: VTTC0802U_RESPONSE_HEADER | null = null): Promise<VTTC0802U_RESPONSE>;
                    
    /**
     * 주식주문(현금)
     * @description 주식주문(현금)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTC0801U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTC0801U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTC0801U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTC0801U_RESPONSE}
     */
    public async VTTC0801U(
        secret: Secret, requestHeader: VTTC0801U_REQUEST_HEADER, requestBody: VTTC0801U_REQUEST_BODY, 
        responseHeader: VTTC0801U_RESPONSE_HEADER | null = null): Promise<VTTC0801U_RESPONSE>;
                    
    /**
     * 주식주문(신용)
     * @description 주식주문(신용)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTC0852U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTC0852U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTC0852U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTC0852U_RESPONSE}
     */
    public async TTTC0852U(
        secret: Secret, requestHeader: TTTC0852U_REQUEST_HEADER, requestBody: TTTC0852U_REQUEST_BODY, 
        responseHeader: TTTC0852U_RESPONSE_HEADER | null = null): Promise<TTTC0852U_RESPONSE>;
                    
    /**
     * 주식주문(신용)
     * @description 주식주문(신용)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTC0851U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTC0851U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTC0851U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTC0851U_RESPONSE}
     */
    public async TTTC0851U(
        secret: Secret, requestHeader: TTTC0851U_REQUEST_HEADER, requestBody: TTTC0851U_REQUEST_BODY, 
        responseHeader: TTTC0851U_RESPONSE_HEADER | null = null): Promise<TTTC0851U_RESPONSE>;
                    
    /**
     * 주식주문(정정취소)
     * @description 주식주문(정정취소)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTC0803U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTC0803U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTC0803U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTC0803U_RESPONSE}
     */
    public async TTTC0803U(
        secret: Secret, requestHeader: TTTC0803U_REQUEST_HEADER, requestBody: TTTC0803U_REQUEST_BODY, 
        responseHeader: TTTC0803U_RESPONSE_HEADER | null = null): Promise<TTTC0803U_RESPONSE>;
                    
    /**
     * 주식주문(정정취소)
     * @description 주식주문(정정취소)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTC0803U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTC0803U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTC0803U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTC0803U_RESPONSE}
     */
    public async VTTC0803U(
        secret: Secret, requestHeader: VTTC0803U_REQUEST_HEADER, requestBody: VTTC0803U_REQUEST_BODY, 
        responseHeader: VTTC0803U_RESPONSE_HEADER | null = null): Promise<VTTC0803U_RESPONSE>;
                    
    /**
     * 주식정정취소가능주문조회
     * @description 주식정정취소가능주문조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTC8036R_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTC8036R_REQUEST_BODY} requestBody        요청 body
     * @param {TTTC8036R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTC8036R_RESPONSE}
     */
    public async TTTC8036R(
        secret: Secret, requestHeader: TTTC8036R_REQUEST_HEADER, requestBody: TTTC8036R_REQUEST_BODY, 
        responseHeader: TTTC8036R_RESPONSE_HEADER | null = null): Promise<TTTC8036R_RESPONSE>;
                    
    /**
     * 주식일별주문체결조회
     * @description 주식일별주문체결조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTC8001R_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTC8001R_REQUEST_BODY} requestBody        요청 body
     * @param {TTTC8001R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTC8001R_RESPONSE}
     */
    public async TTTC8001R(
        secret: Secret, requestHeader: TTTC8001R_REQUEST_HEADER, requestBody: TTTC8001R_REQUEST_BODY, 
        responseHeader: TTTC8001R_RESPONSE_HEADER | null = null): Promise<TTTC8001R_RESPONSE>;
                    
    /**
     * 주식일별주문체결조회
     * @description 주식일별주문체결조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {CTSC9115R_REQUEST_HEADER} requestHeader    요청 header
     * @param {CTSC9115R_REQUEST_BODY} requestBody        요청 body
     * @param {CTSC9115R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {CTSC9115R_RESPONSE}
     */
    public async CTSC9115R(
        secret: Secret, requestHeader: CTSC9115R_REQUEST_HEADER, requestBody: CTSC9115R_REQUEST_BODY, 
        responseHeader: CTSC9115R_RESPONSE_HEADER | null = null): Promise<CTSC9115R_RESPONSE>;
                    
    /**
     * 주식일별주문체결조회
     * @description 주식일별주문체결조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTC8001R_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTC8001R_REQUEST_BODY} requestBody        요청 body
     * @param {VTTC8001R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTC8001R_RESPONSE}
     */
    public async VTTC8001R(
        secret: Secret, requestHeader: VTTC8001R_REQUEST_HEADER, requestBody: VTTC8001R_REQUEST_BODY, 
        responseHeader: VTTC8001R_RESPONSE_HEADER | null = null): Promise<VTTC8001R_RESPONSE>;
                    
    /**
     * 주식일별주문체결조회
     * @description 주식일별주문체결조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTSC9115R_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTSC9115R_REQUEST_BODY} requestBody        요청 body
     * @param {VTSC9115R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTSC9115R_RESPONSE}
     */
    public async VTSC9115R(
        secret: Secret, requestHeader: VTSC9115R_REQUEST_HEADER, requestBody: VTSC9115R_REQUEST_BODY, 
        responseHeader: VTSC9115R_RESPONSE_HEADER | null = null): Promise<VTSC9115R_RESPONSE>;
                    
    /**
     * 주식잔고조회
     * @description 주식잔고조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTC8434R_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTC8434R_REQUEST_BODY} requestBody        요청 body
     * @param {TTTC8434R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTC8434R_RESPONSE}
     */
    public async TTTC8434R(
        secret: Secret, requestHeader: TTTC8434R_REQUEST_HEADER, requestBody: TTTC8434R_REQUEST_BODY, 
        responseHeader: TTTC8434R_RESPONSE_HEADER | null = null): Promise<TTTC8434R_RESPONSE>;
                    
    /**
     * 주식잔고조회
     * @description 주식잔고조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTC8434R_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTC8434R_REQUEST_BODY} requestBody        요청 body
     * @param {VTTC8434R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTC8434R_RESPONSE}
     */
    public async VTTC8434R(
        secret: Secret, requestHeader: VTTC8434R_REQUEST_HEADER, requestBody: VTTC8434R_REQUEST_BODY, 
        responseHeader: VTTC8434R_RESPONSE_HEADER | null = null): Promise<VTTC8434R_RESPONSE>;
                    
    /**
     * 매수가능조회
     * @description 매수가능조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTC8908R_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTC8908R_REQUEST_BODY} requestBody        요청 body
     * @param {TTTC8908R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTC8908R_RESPONSE}
     */
    public async TTTC8908R(
        secret: Secret, requestHeader: TTTC8908R_REQUEST_HEADER, requestBody: TTTC8908R_REQUEST_BODY, 
        responseHeader: TTTC8908R_RESPONSE_HEADER | null = null): Promise<TTTC8908R_RESPONSE>;
                    
    /**
     * 매수가능조회
     * @description 매수가능조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTC8908R_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTC8908R_REQUEST_BODY} requestBody        요청 body
     * @param {VTTC8908R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTC8908R_RESPONSE}
     */
    public async VTTC8908R(
        secret: Secret, requestHeader: VTTC8908R_REQUEST_HEADER, requestBody: VTTC8908R_REQUEST_BODY, 
        responseHeader: VTTC8908R_RESPONSE_HEADER | null = null): Promise<VTTC8908R_RESPONSE>;
                    
    /**
     * 주식예약주문
     * @description 주식예약주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {CTSC0008U_REQUEST_HEADER} requestHeader    요청 header
     * @param {CTSC0008U_REQUEST_BODY} requestBody        요청 body
     * @param {CTSC0008U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {CTSC0008U_RESPONSE}
     */
    public async CTSC0008U(
        secret: Secret, requestHeader: CTSC0008U_REQUEST_HEADER, requestBody: CTSC0008U_REQUEST_BODY, 
        responseHeader: CTSC0008U_RESPONSE_HEADER | null = null): Promise<CTSC0008U_RESPONSE>;
                    
    /**
     * 주식예약주문정정취소
     * @description 주식예약주문정정취소
     * 
     * @param {Secret} secret                               인증 정보
     * @param {CTSC0009U_REQUEST_HEADER} requestHeader    요청 header
     * @param {CTSC0009U_REQUEST_BODY} requestBody        요청 body
     * @param {CTSC0009U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {CTSC0009U_RESPONSE}
     */
    public async CTSC0009U(
        secret: Secret, requestHeader: CTSC0009U_REQUEST_HEADER, requestBody: CTSC0009U_REQUEST_BODY, 
        responseHeader: CTSC0009U_RESPONSE_HEADER | null = null): Promise<CTSC0009U_RESPONSE>;
                    
    /**
     * 주식예약주문정정취소
     * @description 주식예약주문정정취소
     * 
     * @param {Secret} secret                               인증 정보
     * @param {CTSC0013U_REQUEST_HEADER} requestHeader    요청 header
     * @param {CTSC0013U_REQUEST_BODY} requestBody        요청 body
     * @param {CTSC0013U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {CTSC0013U_RESPONSE}
     */
    public async CTSC0013U(
        secret: Secret, requestHeader: CTSC0013U_REQUEST_HEADER, requestBody: CTSC0013U_REQUEST_BODY, 
        responseHeader: CTSC0013U_RESPONSE_HEADER | null = null): Promise<CTSC0013U_RESPONSE>;
                    
    /**
     * 주식예약주문조회
     * @description 주식예약주문조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {CTSC0004R_REQUEST_HEADER} requestHeader    요청 header
     * @param {CTSC0004R_REQUEST_BODY} requestBody        요청 body
     * @param {CTSC0004R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {CTSC0004R_RESPONSE}
     */
    public async CTSC0004R(
        secret: Secret, requestHeader: CTSC0004R_REQUEST_HEADER, requestBody: CTSC0004R_REQUEST_BODY, 
        responseHeader: CTSC0004R_RESPONSE_HEADER | null = null): Promise<CTSC0004R_RESPONSE>;
                    
    /**
     * 주식잔고조회_실현손익
     * @description 주식잔고조회_실현손익
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTC8494R_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTC8494R_REQUEST_BODY} requestBody        요청 body
     * @param {TTTC8494R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTC8494R_RESPONSE}
     */
    public async TTTC8494R(
        secret: Secret, requestHeader: TTTC8494R_REQUEST_HEADER, requestBody: TTTC8494R_REQUEST_BODY, 
        responseHeader: TTTC8494R_RESPONSE_HEADER | null = null): Promise<TTTC8494R_RESPONSE>;
                    
    /**
     * 신용매수가능조회
     * @description 신용매수가능조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTC8909R_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTC8909R_REQUEST_BODY} requestBody        요청 body
     * @param {TTTC8909R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTC8909R_RESPONSE}
     */
    public async TTTC8909R(
        secret: Secret, requestHeader: TTTC8909R_REQUEST_HEADER, requestBody: TTTC8909R_REQUEST_BODY, 
        responseHeader: TTTC8909R_RESPONSE_HEADER | null = null): Promise<TTTC8909R_RESPONSE>;
                    
    /**
     * 투자계좌자산현황조회
     * @description 투자계좌자산현황조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {CTRP6548R_REQUEST_HEADER} requestHeader    요청 header
     * @param {CTRP6548R_REQUEST_BODY} requestBody        요청 body
     * @param {CTRP6548R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {CTRP6548R_RESPONSE}
     */
    public async CTRP6548R(
        secret: Secret, requestHeader: CTRP6548R_REQUEST_HEADER, requestBody: CTRP6548R_REQUEST_BODY, 
        responseHeader: CTRP6548R_RESPONSE_HEADER | null = null): Promise<CTRP6548R_RESPONSE>;
                    
    /**
     * 주식현재가 시세
     * @description 주식현재가 시세
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHKST01010100_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHKST01010100_REQUEST_BODY} requestBody        요청 body
     * @param {FHKST01010100_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHKST01010100_RESPONSE}
     */
    public async FHKST01010100(
        secret: Secret, requestHeader: FHKST01010100_REQUEST_HEADER, requestBody: FHKST01010100_REQUEST_BODY, 
        responseHeader: FHKST01010100_RESPONSE_HEADER | null = null): Promise<FHKST01010100_RESPONSE>;
                    
    /**
     * 주식현재가 체결
     * @description 주식현재가 체결
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHKST01010300_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHKST01010300_REQUEST_BODY} requestBody        요청 body
     * @param {FHKST01010300_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHKST01010300_RESPONSE}
     */
    public async FHKST01010300(
        secret: Secret, requestHeader: FHKST01010300_REQUEST_HEADER, requestBody: FHKST01010300_REQUEST_BODY, 
        responseHeader: FHKST01010300_RESPONSE_HEADER | null = null): Promise<FHKST01010300_RESPONSE>;
                    
    /**
     * 주식현재가 일자별
     * @description 주식현재가 일자별
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHKST01010400_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHKST01010400_REQUEST_BODY} requestBody        요청 body
     * @param {FHKST01010400_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHKST01010400_RESPONSE}
     */
    public async FHKST01010400(
        secret: Secret, requestHeader: FHKST01010400_REQUEST_HEADER, requestBody: FHKST01010400_REQUEST_BODY, 
        responseHeader: FHKST01010400_RESPONSE_HEADER | null = null): Promise<FHKST01010400_RESPONSE>;
                    
    /**
     * 주식현재가 호가/예상체결
     * @description 주식현재가 호가/예상체결
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHKST01010200_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHKST01010200_REQUEST_BODY} requestBody        요청 body
     * @param {FHKST01010200_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHKST01010200_RESPONSE}
     */
    public async FHKST01010200(
        secret: Secret, requestHeader: FHKST01010200_REQUEST_HEADER, requestBody: FHKST01010200_REQUEST_BODY, 
        responseHeader: FHKST01010200_RESPONSE_HEADER | null = null): Promise<FHKST01010200_RESPONSE>;
                    
    /**
     * 주식현재가 투자자
     * @description 주식현재가 투자자
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHKST01010900_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHKST01010900_REQUEST_BODY} requestBody        요청 body
     * @param {FHKST01010900_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHKST01010900_RESPONSE}
     */
    public async FHKST01010900(
        secret: Secret, requestHeader: FHKST01010900_REQUEST_HEADER, requestBody: FHKST01010900_REQUEST_BODY, 
        responseHeader: FHKST01010900_RESPONSE_HEADER | null = null): Promise<FHKST01010900_RESPONSE>;
                    
    /**
     * 주식현재가 회원사
     * @description 주식현재가 회원사
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHKST01010600_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHKST01010600_REQUEST_BODY} requestBody        요청 body
     * @param {FHKST01010600_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHKST01010600_RESPONSE}
     */
    public async FHKST01010600(
        secret: Secret, requestHeader: FHKST01010600_REQUEST_HEADER, requestBody: FHKST01010600_REQUEST_BODY, 
        responseHeader: FHKST01010600_RESPONSE_HEADER | null = null): Promise<FHKST01010600_RESPONSE>;
                    
    /**
     * ELW현재가 시세
     * @description ELW현재가 시세
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHKEW15010000_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHKEW15010000_REQUEST_BODY} requestBody        요청 body
     * @param {FHKEW15010000_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHKEW15010000_RESPONSE}
     */
    public async FHKEW15010000(
        secret: Secret, requestHeader: FHKEW15010000_REQUEST_HEADER, requestBody: FHKEW15010000_REQUEST_BODY, 
        responseHeader: FHKEW15010000_RESPONSE_HEADER | null = null): Promise<FHKEW15010000_RESPONSE>;
                    
    /**
     * 국내주식기간별시세(일/주/월/년)
     * @description 국내주식기간별시세(일/주/월/년)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHKST03010100_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHKST03010100_REQUEST_BODY} requestBody        요청 body
     * @param {FHKST03010100_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHKST03010100_RESPONSE}
     */
    public async FHKST03010100(
        secret: Secret, requestHeader: FHKST03010100_REQUEST_HEADER, requestBody: FHKST03010100_REQUEST_BODY, 
        responseHeader: FHKST03010100_RESPONSE_HEADER | null = null): Promise<FHKST03010100_RESPONSE>;
                    
    /**
     * 국내주식업종기간별시세(일/주/월/년)
     * @description 국내주식업종기간별시세(일/주/월/년)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHKUP03500100_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHKUP03500100_REQUEST_BODY} requestBody        요청 body
     * @param {FHKUP03500100_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHKUP03500100_RESPONSE}
     */
    public async FHKUP03500100(
        secret: Secret, requestHeader: FHKUP03500100_REQUEST_HEADER, requestBody: FHKUP03500100_REQUEST_BODY, 
        responseHeader: FHKUP03500100_RESPONSE_HEADER | null = null): Promise<FHKUP03500100_RESPONSE>;
                    
    /**
     * 주식현재가 당일시간대별체결
     * @description 주식현재가 당일시간대별체결
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHPST01060000_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHPST01060000_REQUEST_BODY} requestBody        요청 body
     * @param {FHPST01060000_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHPST01060000_RESPONSE}
     */
    public async FHPST01060000(
        secret: Secret, requestHeader: FHPST01060000_REQUEST_HEADER, requestBody: FHPST01060000_REQUEST_BODY, 
        responseHeader: FHPST01060000_RESPONSE_HEADER | null = null): Promise<FHPST01060000_RESPONSE>;
                    
    /**
     * 주식현재가 시간외시간별체결
     * @description 주식현재가 시간외시간별체결
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHPST02310000_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHPST02310000_REQUEST_BODY} requestBody        요청 body
     * @param {FHPST02310000_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHPST02310000_RESPONSE}
     */
    public async FHPST02310000(
        secret: Secret, requestHeader: FHPST02310000_REQUEST_HEADER, requestBody: FHPST02310000_REQUEST_BODY, 
        responseHeader: FHPST02310000_RESPONSE_HEADER | null = null): Promise<FHPST02310000_RESPONSE>;
                    
    /**
     * 주식현재가 시간외일자별주가
     * @description 주식현재가 시간외일자별주가
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHPST02320000_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHPST02320000_REQUEST_BODY} requestBody        요청 body
     * @param {FHPST02320000_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHPST02320000_RESPONSE}
     */
    public async FHPST02320000(
        secret: Secret, requestHeader: FHPST02320000_REQUEST_HEADER, requestBody: FHPST02320000_REQUEST_BODY, 
        responseHeader: FHPST02320000_RESPONSE_HEADER | null = null): Promise<FHPST02320000_RESPONSE>;
                    
    /**
     * 주식당일분봉조회
     * @description 주식당일분봉조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHKST03010200_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHKST03010200_REQUEST_BODY} requestBody        요청 body
     * @param {FHKST03010200_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHKST03010200_RESPONSE}
     */
    public async FHKST03010200(
        secret: Secret, requestHeader: FHKST03010200_REQUEST_HEADER, requestBody: FHKST03010200_REQUEST_BODY, 
        responseHeader: FHKST03010200_RESPONSE_HEADER | null = null): Promise<FHKST03010200_RESPONSE>;
                    
    /**
     * 상품기본조회
     * @description 상품기본조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {CTPF1604R_REQUEST_HEADER} requestHeader    요청 header
     * @param {CTPF1604R_REQUEST_BODY} requestBody        요청 body
     * @param {CTPF1604R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {CTPF1604R_RESPONSE}
     */
    public async CTPF1604R(
        secret: Secret, requestHeader: CTPF1604R_REQUEST_HEADER, requestBody: CTPF1604R_REQUEST_BODY, 
        responseHeader: CTPF1604R_RESPONSE_HEADER | null = null): Promise<CTPF1604R_RESPONSE>;
                    
    /**
     * 국내휴장일조회
     * @description 국내휴장일조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {CTCA0903R_REQUEST_HEADER} requestHeader    요청 header
     * @param {CTCA0903R_REQUEST_BODY} requestBody        요청 body
     * @param {CTCA0903R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {CTCA0903R_RESPONSE}
     */
    public async CTCA0903R(
        secret: Secret, requestHeader: CTCA0903R_REQUEST_HEADER, requestBody: CTCA0903R_REQUEST_BODY, 
        responseHeader: CTCA0903R_RESPONSE_HEADER | null = null): Promise<CTCA0903R_RESPONSE>;
                    
    /**
     * 국내기관_외국인 매매종목가집계
     * @description 국내기관_외국인 매매종목가집계
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHPTJ04400000_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHPTJ04400000_REQUEST_BODY} requestBody        요청 body
     * @param {FHPTJ04400000_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHPTJ04400000_RESPONSE}
     */
    public async FHPTJ04400000(
        secret: Secret, requestHeader: FHPTJ04400000_REQUEST_HEADER, requestBody: FHPTJ04400000_REQUEST_BODY, 
        responseHeader: FHPTJ04400000_RESPONSE_HEADER | null = null): Promise<FHPTJ04400000_RESPONSE>;
                    
    /**
     * 종목조건검색 목록조회
     * @description 종목조건검색 목록조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {HHKST03900300_REQUEST_HEADER} requestHeader    요청 header
     * @param {HHKST03900300_REQUEST_BODY} requestBody        요청 body
     * @param {HHKST03900300_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {HHKST03900300_RESPONSE}
     */
    public async HHKST03900300(
        secret: Secret, requestHeader: HHKST03900300_REQUEST_HEADER, requestBody: HHKST03900300_REQUEST_BODY, 
        responseHeader: HHKST03900300_RESPONSE_HEADER | null = null): Promise<HHKST03900300_RESPONSE>;
                    
    /**
     * 종목조건검색조회
     * @description 종목조건검색조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {HHKST03900400_REQUEST_HEADER} requestHeader    요청 header
     * @param {HHKST03900400_REQUEST_BODY} requestBody        요청 body
     * @param {HHKST03900400_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {HHKST03900400_RESPONSE}
     */
    public async HHKST03900400(
        secret: Secret, requestHeader: HHKST03900400_REQUEST_HEADER, requestBody: HHKST03900400_REQUEST_BODY, 
        responseHeader: HHKST03900400_RESPONSE_HEADER | null = null): Promise<HHKST03900400_RESPONSE>;
                    
    /**
     * 종목별 프로그램매매추이(체결)
     * @description 종목별 프로그램매매추이(체결)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHPPG04650100_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHPPG04650100_REQUEST_BODY} requestBody        요청 body
     * @param {FHPPG04650100_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHPPG04650100_RESPONSE}
     */
    public async FHPPG04650100(
        secret: Secret, requestHeader: FHPPG04650100_REQUEST_HEADER, requestBody: FHPPG04650100_REQUEST_BODY, 
        responseHeader: FHPPG04650100_RESPONSE_HEADER | null = null): Promise<FHPPG04650100_RESPONSE>;
                    
    /**
     * 거래량순위
     * @description 거래량순위
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHPST01710000_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHPST01710000_REQUEST_BODY} requestBody        요청 body
     * @param {FHPST01710000_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHPST01710000_RESPONSE}
     */
    public async FHPST01710000(
        secret: Secret, requestHeader: FHPST01710000_REQUEST_HEADER, requestBody: FHPST01710000_REQUEST_BODY, 
        responseHeader: FHPST01710000_RESPONSE_HEADER | null = null): Promise<FHPST01710000_RESPONSE>;
                    
    /**
     * 종목별 외인기관 추정가집계
     * @description 종목별 외인기관 추정가집계
     * 
     * @param {Secret} secret                               인증 정보
     * @param {HHPTJ04160200_REQUEST_HEADER} requestHeader    요청 header
     * @param {HHPTJ04160200_REQUEST_BODY} requestBody        요청 body
     * @param {HHPTJ04160200_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {HHPTJ04160200_RESPONSE}
     */
    public async HHPTJ04160200(
        secret: Secret, requestHeader: HHPTJ04160200_REQUEST_HEADER, requestBody: HHPTJ04160200_REQUEST_BODY, 
        responseHeader: HHPTJ04160200_RESPONSE_HEADER | null = null): Promise<HHPTJ04160200_RESPONSE>;
                    
    /**
     * 선물옵션 주문
     * @description 선물옵션 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTO1101U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTO1101U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTO1101U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTO1101U_RESPONSE}
     */
    public async TTTO1101U(
        secret: Secret, requestHeader: TTTO1101U_REQUEST_HEADER, requestBody: TTTO1101U_REQUEST_BODY, 
        responseHeader: TTTO1101U_RESPONSE_HEADER | null = null): Promise<TTTO1101U_RESPONSE>;
                    
    /**
     * 선물옵션 주문
     * @description 선물옵션 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {JTCE1001U_REQUEST_HEADER} requestHeader    요청 header
     * @param {JTCE1001U_REQUEST_BODY} requestBody        요청 body
     * @param {JTCE1001U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {JTCE1001U_RESPONSE}
     */
    public async JTCE1001U(
        secret: Secret, requestHeader: JTCE1001U_REQUEST_HEADER, requestBody: JTCE1001U_REQUEST_BODY, 
        responseHeader: JTCE1001U_RESPONSE_HEADER | null = null): Promise<JTCE1001U_RESPONSE>;
                    
    /**
     * 선물옵션 주문
     * @description 선물옵션 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTO1101U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTO1101U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTO1101U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTO1101U_RESPONSE}
     */
    public async VTTO1101U(
        secret: Secret, requestHeader: VTTO1101U_REQUEST_HEADER, requestBody: VTTO1101U_REQUEST_BODY, 
        responseHeader: VTTO1101U_RESPONSE_HEADER | null = null): Promise<VTTO1101U_RESPONSE>;
                    
    /**
     * 선물옵션 주문
     * @description 선물옵션 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTCE1001U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTCE1001U_REQUEST_BODY} requestBody        요청 body
     * @param {VTCE1001U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTCE1001U_RESPONSE}
     */
    public async VTCE1001U(
        secret: Secret, requestHeader: VTCE1001U_REQUEST_HEADER, requestBody: VTCE1001U_REQUEST_BODY, 
        responseHeader: VTCE1001U_RESPONSE_HEADER | null = null): Promise<VTCE1001U_RESPONSE>;
                    
    /**
     * 선물옵션 정정취소주문
     * @description 선물옵션 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTO1103U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTO1103U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTO1103U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTO1103U_RESPONSE}
     */
    public async TTTO1103U(
        secret: Secret, requestHeader: TTTO1103U_REQUEST_HEADER, requestBody: TTTO1103U_REQUEST_BODY, 
        responseHeader: TTTO1103U_RESPONSE_HEADER | null = null): Promise<TTTO1103U_RESPONSE>;
                    
    /**
     * 선물옵션 정정취소주문
     * @description 선물옵션 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {JTCE1002U_REQUEST_HEADER} requestHeader    요청 header
     * @param {JTCE1002U_REQUEST_BODY} requestBody        요청 body
     * @param {JTCE1002U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {JTCE1002U_RESPONSE}
     */
    public async JTCE1002U(
        secret: Secret, requestHeader: JTCE1002U_REQUEST_HEADER, requestBody: JTCE1002U_REQUEST_BODY, 
        responseHeader: JTCE1002U_RESPONSE_HEADER | null = null): Promise<JTCE1002U_RESPONSE>;
                    
    /**
     * 선물옵션 정정취소주문
     * @description 선물옵션 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTO1103U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTO1103U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTO1103U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTO1103U_RESPONSE}
     */
    public async VTTO1103U(
        secret: Secret, requestHeader: VTTO1103U_REQUEST_HEADER, requestBody: VTTO1103U_REQUEST_BODY, 
        responseHeader: VTTO1103U_RESPONSE_HEADER | null = null): Promise<VTTO1103U_RESPONSE>;
                    
    /**
     * 선물옵션 정정취소주문
     * @description 선물옵션 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTCE1002U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTCE1002U_REQUEST_BODY} requestBody        요청 body
     * @param {VTCE1002U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTCE1002U_RESPONSE}
     */
    public async VTCE1002U(
        secret: Secret, requestHeader: VTCE1002U_REQUEST_HEADER, requestBody: VTCE1002U_REQUEST_BODY, 
        responseHeader: VTCE1002U_RESPONSE_HEADER | null = null): Promise<VTCE1002U_RESPONSE>;
                    
    /**
     * 선물옵션 주문체결내역조회
     * @description 선물옵션 주문체결내역조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTO5201R_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTO5201R_REQUEST_BODY} requestBody        요청 body
     * @param {TTTO5201R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTO5201R_RESPONSE}
     */
    public async TTTO5201R(
        secret: Secret, requestHeader: TTTO5201R_REQUEST_HEADER, requestBody: TTTO5201R_REQUEST_BODY, 
        responseHeader: TTTO5201R_RESPONSE_HEADER | null = null): Promise<TTTO5201R_RESPONSE>;
                    
    /**
     * 선물옵션 주문체결내역조회
     * @description 선물옵션 주문체결내역조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTO5201R_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTO5201R_REQUEST_BODY} requestBody        요청 body
     * @param {VTTO5201R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTO5201R_RESPONSE}
     */
    public async VTTO5201R(
        secret: Secret, requestHeader: VTTO5201R_REQUEST_HEADER, requestBody: VTTO5201R_REQUEST_BODY, 
        responseHeader: VTTO5201R_RESPONSE_HEADER | null = null): Promise<VTTO5201R_RESPONSE>;
                    
    /**
     * 선물옵션 잔고현황
     * @description 선물옵션 잔고현황
     * 
     * @param {Secret} secret                               인증 정보
     * @param {CTFO6118R_REQUEST_HEADER} requestHeader    요청 header
     * @param {CTFO6118R_REQUEST_BODY} requestBody        요청 body
     * @param {CTFO6118R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {CTFO6118R_RESPONSE}
     */
    public async CTFO6118R(
        secret: Secret, requestHeader: CTFO6118R_REQUEST_HEADER, requestBody: CTFO6118R_REQUEST_BODY, 
        responseHeader: CTFO6118R_RESPONSE_HEADER | null = null): Promise<CTFO6118R_RESPONSE>;
                    
    /**
     * 선물옵션 잔고현황
     * @description 선물옵션 잔고현황
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTFO6118R_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTFO6118R_REQUEST_BODY} requestBody        요청 body
     * @param {VTFO6118R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTFO6118R_RESPONSE}
     */
    public async VTFO6118R(
        secret: Secret, requestHeader: VTFO6118R_REQUEST_HEADER, requestBody: VTFO6118R_REQUEST_BODY, 
        responseHeader: VTFO6118R_RESPONSE_HEADER | null = null): Promise<VTFO6118R_RESPONSE>;
                    
    /**
     * 선물옵션 주문가능
     * @description 선물옵션 주문가능
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTO5105R_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTO5105R_REQUEST_BODY} requestBody        요청 body
     * @param {TTTO5105R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTO5105R_RESPONSE}
     */
    public async TTTO5105R(
        secret: Secret, requestHeader: TTTO5105R_REQUEST_HEADER, requestBody: TTTO5105R_REQUEST_BODY, 
        responseHeader: TTTO5105R_RESPONSE_HEADER | null = null): Promise<TTTO5105R_RESPONSE>;
                    
    /**
     * 선물옵션 주문가능
     * @description 선물옵션 주문가능
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTO5105R_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTO5105R_REQUEST_BODY} requestBody        요청 body
     * @param {VTTO5105R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTO5105R_RESPONSE}
     */
    public async VTTO5105R(
        secret: Secret, requestHeader: VTTO5105R_REQUEST_HEADER, requestBody: VTTO5105R_REQUEST_BODY, 
        responseHeader: VTTO5105R_RESPONSE_HEADER | null = null): Promise<VTTO5105R_RESPONSE>;
                    
    /**
     * (야간)선물옵션 주문체결 내역조회
     * @description (야간)선물옵션 주문체결 내역조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {JTCE5005R_REQUEST_HEADER} requestHeader    요청 header
     * @param {JTCE5005R_REQUEST_BODY} requestBody        요청 body
     * @param {JTCE5005R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {JTCE5005R_RESPONSE}
     */
    public async JTCE5005R(
        secret: Secret, requestHeader: JTCE5005R_REQUEST_HEADER, requestBody: JTCE5005R_REQUEST_BODY, 
        responseHeader: JTCE5005R_RESPONSE_HEADER | null = null): Promise<JTCE5005R_RESPONSE>;
                    
    /**
     * (야간)선물옵션 잔고현황
     * @description (야간)선물옵션 잔고현황
     * 
     * @param {Secret} secret                               인증 정보
     * @param {JTCE6001R_REQUEST_HEADER} requestHeader    요청 header
     * @param {JTCE6001R_REQUEST_BODY} requestBody        요청 body
     * @param {JTCE6001R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {JTCE6001R_RESPONSE}
     */
    public async JTCE6001R(
        secret: Secret, requestHeader: JTCE6001R_REQUEST_HEADER, requestBody: JTCE6001R_REQUEST_BODY, 
        responseHeader: JTCE6001R_RESPONSE_HEADER | null = null): Promise<JTCE6001R_RESPONSE>;
                    
    /**
     * 선물옵션 시세
     * @description 선물옵션 시세
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHMIF10000000_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHMIF10000000_REQUEST_BODY} requestBody        요청 body
     * @param {FHMIF10000000_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHMIF10000000_RESPONSE}
     */
    public async FHMIF10000000(
        secret: Secret, requestHeader: FHMIF10000000_REQUEST_HEADER, requestBody: FHMIF10000000_REQUEST_BODY, 
        responseHeader: FHMIF10000000_RESPONSE_HEADER | null = null): Promise<FHMIF10000000_RESPONSE>;
                    
    /**
     * 선물옵션 시세호가
     * @description 선물옵션 시세호가
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHMIF10010000_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHMIF10010000_REQUEST_BODY} requestBody        요청 body
     * @param {FHMIF10010000_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHMIF10010000_RESPONSE}
     */
    public async FHMIF10010000(
        secret: Secret, requestHeader: FHMIF10010000_REQUEST_HEADER, requestBody: FHMIF10010000_REQUEST_BODY, 
        responseHeader: FHMIF10010000_RESPONSE_HEADER | null = null): Promise<FHMIF10010000_RESPONSE>;
                    
    /**
     * 선물옵션기간별시세(일/주/월/년)
     * @description 선물옵션기간별시세(일/주/월/년)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHKIF03020100_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHKIF03020100_REQUEST_BODY} requestBody        요청 body
     * @param {FHKIF03020100_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHKIF03020100_RESPONSE}
     */
    public async FHKIF03020100(
        secret: Secret, requestHeader: FHKIF03020100_REQUEST_HEADER, requestBody: FHKIF03020100_REQUEST_BODY, 
        responseHeader: FHKIF03020100_RESPONSE_HEADER | null = null): Promise<FHKIF03020100_RESPONSE>;
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTT1002U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTT1002U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTT1002U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTT1002U_RESPONSE}
     */
    public async TTTT1002U(
        secret: Secret, requestHeader: TTTT1002U_REQUEST_HEADER, requestBody: TTTT1002U_REQUEST_BODY, 
        responseHeader: TTTT1002U_RESPONSE_HEADER | null = null): Promise<TTTT1002U_RESPONSE>;
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTT1006U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTT1006U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTT1006U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTT1006U_RESPONSE}
     */
    public async TTTT1006U(
        secret: Secret, requestHeader: TTTT1006U_REQUEST_HEADER, requestBody: TTTT1006U_REQUEST_BODY, 
        responseHeader: TTTT1006U_RESPONSE_HEADER | null = null): Promise<TTTT1006U_RESPONSE>;
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS0308U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS0308U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS0308U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS0308U_RESPONSE}
     */
    public async TTTS0308U(
        secret: Secret, requestHeader: TTTS0308U_REQUEST_HEADER, requestBody: TTTS0308U_REQUEST_BODY, 
        responseHeader: TTTS0308U_RESPONSE_HEADER | null = null): Promise<TTTS0308U_RESPONSE>;
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS0307U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS0307U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS0307U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS0307U_RESPONSE}
     */
    public async TTTS0307U(
        secret: Secret, requestHeader: TTTS0307U_REQUEST_HEADER, requestBody: TTTS0307U_REQUEST_BODY, 
        responseHeader: TTTS0307U_RESPONSE_HEADER | null = null): Promise<TTTS0307U_RESPONSE>;
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS0202U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS0202U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS0202U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS0202U_RESPONSE}
     */
    public async TTTS0202U(
        secret: Secret, requestHeader: TTTS0202U_REQUEST_HEADER, requestBody: TTTS0202U_REQUEST_BODY, 
        responseHeader: TTTS0202U_RESPONSE_HEADER | null = null): Promise<TTTS0202U_RESPONSE>;
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS1005U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS1005U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS1005U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS1005U_RESPONSE}
     */
    public async TTTS1005U(
        secret: Secret, requestHeader: TTTS1005U_REQUEST_HEADER, requestBody: TTTS1005U_REQUEST_BODY, 
        responseHeader: TTTS1005U_RESPONSE_HEADER | null = null): Promise<TTTS1005U_RESPONSE>;
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS1002U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS1002U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS1002U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS1002U_RESPONSE}
     */
    public async TTTS1002U(
        secret: Secret, requestHeader: TTTS1002U_REQUEST_HEADER, requestBody: TTTS1002U_REQUEST_BODY, 
        responseHeader: TTTS1002U_RESPONSE_HEADER | null = null): Promise<TTTS1002U_RESPONSE>;
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS1001U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS1001U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS1001U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS1001U_RESPONSE}
     */
    public async TTTS1001U(
        secret: Secret, requestHeader: TTTS1001U_REQUEST_HEADER, requestBody: TTTS1001U_REQUEST_BODY, 
        responseHeader: TTTS1001U_RESPONSE_HEADER | null = null): Promise<TTTS1001U_RESPONSE>;
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS0305U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS0305U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS0305U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS0305U_RESPONSE}
     */
    public async TTTS0305U(
        secret: Secret, requestHeader: TTTS0305U_REQUEST_HEADER, requestBody: TTTS0305U_REQUEST_BODY, 
        responseHeader: TTTS0305U_RESPONSE_HEADER | null = null): Promise<TTTS0305U_RESPONSE>;
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS0304U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS0304U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS0304U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS0304U_RESPONSE}
     */
    public async TTTS0304U(
        secret: Secret, requestHeader: TTTS0304U_REQUEST_HEADER, requestBody: TTTS0304U_REQUEST_BODY, 
        responseHeader: TTTS0304U_RESPONSE_HEADER | null = null): Promise<TTTS0304U_RESPONSE>;
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS0311U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS0311U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS0311U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS0311U_RESPONSE}
     */
    public async TTTS0311U(
        secret: Secret, requestHeader: TTTS0311U_REQUEST_HEADER, requestBody: TTTS0311U_REQUEST_BODY, 
        responseHeader: TTTS0311U_RESPONSE_HEADER | null = null): Promise<TTTS0311U_RESPONSE>;
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS0310U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS0310U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS0310U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS0310U_RESPONSE}
     */
    public async TTTS0310U(
        secret: Secret, requestHeader: TTTS0310U_REQUEST_HEADER, requestBody: TTTS0310U_REQUEST_BODY, 
        responseHeader: TTTS0310U_RESPONSE_HEADER | null = null): Promise<TTTS0310U_RESPONSE>;
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTT1002U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTT1002U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTT1002U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTT1002U_RESPONSE}
     */
    public async VTTT1002U(
        secret: Secret, requestHeader: VTTT1002U_REQUEST_HEADER, requestBody: VTTT1002U_REQUEST_BODY, 
        responseHeader: VTTT1002U_RESPONSE_HEADER | null = null): Promise<VTTT1002U_RESPONSE>;
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTT1001U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTT1001U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTT1001U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTT1001U_RESPONSE}
     */
    public async VTTT1001U(
        secret: Secret, requestHeader: VTTT1001U_REQUEST_HEADER, requestBody: VTTT1001U_REQUEST_BODY, 
        responseHeader: VTTT1001U_RESPONSE_HEADER | null = null): Promise<VTTT1001U_RESPONSE>;
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS0308U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS0308U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS0308U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS0308U_RESPONSE}
     */
    public async VTTS0308U(
        secret: Secret, requestHeader: VTTS0308U_REQUEST_HEADER, requestBody: VTTS0308U_REQUEST_BODY, 
        responseHeader: VTTS0308U_RESPONSE_HEADER | null = null): Promise<VTTS0308U_RESPONSE>;
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS0307U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS0307U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS0307U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS0307U_RESPONSE}
     */
    public async VTTS0307U(
        secret: Secret, requestHeader: VTTS0307U_REQUEST_HEADER, requestBody: VTTS0307U_REQUEST_BODY, 
        responseHeader: VTTS0307U_RESPONSE_HEADER | null = null): Promise<VTTS0307U_RESPONSE>;
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS0202U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS0202U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS0202U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS0202U_RESPONSE}
     */
    public async VTTS0202U(
        secret: Secret, requestHeader: VTTS0202U_REQUEST_HEADER, requestBody: VTTS0202U_REQUEST_BODY, 
        responseHeader: VTTS0202U_RESPONSE_HEADER | null = null): Promise<VTTS0202U_RESPONSE>;
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS1005U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS1005U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS1005U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS1005U_RESPONSE}
     */
    public async VTTS1005U(
        secret: Secret, requestHeader: VTTS1005U_REQUEST_HEADER, requestBody: VTTS1005U_REQUEST_BODY, 
        responseHeader: VTTS1005U_RESPONSE_HEADER | null = null): Promise<VTTS1005U_RESPONSE>;
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS1002U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS1002U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS1002U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS1002U_RESPONSE}
     */
    public async VTTS1002U(
        secret: Secret, requestHeader: VTTS1002U_REQUEST_HEADER, requestBody: VTTS1002U_REQUEST_BODY, 
        responseHeader: VTTS1002U_RESPONSE_HEADER | null = null): Promise<VTTS1002U_RESPONSE>;
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS1001U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS1001U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS1001U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS1001U_RESPONSE}
     */
    public async VTTS1001U(
        secret: Secret, requestHeader: VTTS1001U_REQUEST_HEADER, requestBody: VTTS1001U_REQUEST_BODY, 
        responseHeader: VTTS1001U_RESPONSE_HEADER | null = null): Promise<VTTS1001U_RESPONSE>;
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS0305U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS0305U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS0305U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS0305U_RESPONSE}
     */
    public async VTTS0305U(
        secret: Secret, requestHeader: VTTS0305U_REQUEST_HEADER, requestBody: VTTS0305U_REQUEST_BODY, 
        responseHeader: VTTS0305U_RESPONSE_HEADER | null = null): Promise<VTTS0305U_RESPONSE>;
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS0304U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS0304U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS0304U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS0304U_RESPONSE}
     */
    public async VTTS0304U(
        secret: Secret, requestHeader: VTTS0304U_REQUEST_HEADER, requestBody: VTTS0304U_REQUEST_BODY, 
        responseHeader: VTTS0304U_RESPONSE_HEADER | null = null): Promise<VTTS0304U_RESPONSE>;
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS0311U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS0311U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS0311U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS0311U_RESPONSE}
     */
    public async VTTS0311U(
        secret: Secret, requestHeader: VTTS0311U_REQUEST_HEADER, requestBody: VTTS0311U_REQUEST_BODY, 
        responseHeader: VTTS0311U_RESPONSE_HEADER | null = null): Promise<VTTS0311U_RESPONSE>;
                    
    /**
     * 해외주식 주문
     * @description 해외주식 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS0310U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS0310U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS0310U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS0310U_RESPONSE}
     */
    public async VTTS0310U(
        secret: Secret, requestHeader: VTTS0310U_REQUEST_HEADER, requestBody: VTTS0310U_REQUEST_BODY, 
        responseHeader: VTTS0310U_RESPONSE_HEADER | null = null): Promise<VTTS0310U_RESPONSE>;
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTT1004U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTT1004U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTT1004U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTT1004U_RESPONSE}
     */
    public async TTTT1004U(
        secret: Secret, requestHeader: TTTT1004U_REQUEST_HEADER, requestBody: TTTT1004U_REQUEST_BODY, 
        responseHeader: TTTT1004U_RESPONSE_HEADER | null = null): Promise<TTTT1004U_RESPONSE>;
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS1003U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS1003U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS1003U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS1003U_RESPONSE}
     */
    public async TTTS1003U(
        secret: Secret, requestHeader: TTTS1003U_REQUEST_HEADER, requestBody: TTTS1003U_REQUEST_BODY, 
        responseHeader: TTTS1003U_RESPONSE_HEADER | null = null): Promise<TTTS1003U_RESPONSE>;
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS0309U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS0309U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS0309U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS0309U_RESPONSE}
     */
    public async TTTS0309U(
        secret: Secret, requestHeader: TTTS0309U_REQUEST_HEADER, requestBody: TTTS0309U_REQUEST_BODY, 
        responseHeader: TTTS0309U_RESPONSE_HEADER | null = null): Promise<TTTS0309U_RESPONSE>;
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS0302U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS0302U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS0302U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS0302U_RESPONSE}
     */
    public async TTTS0302U(
        secret: Secret, requestHeader: TTTS0302U_REQUEST_HEADER, requestBody: TTTS0302U_REQUEST_BODY, 
        responseHeader: TTTS0302U_RESPONSE_HEADER | null = null): Promise<TTTS0302U_RESPONSE>;
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS0306U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS0306U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS0306U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS0306U_RESPONSE}
     */
    public async TTTS0306U(
        secret: Secret, requestHeader: TTTS0306U_REQUEST_HEADER, requestBody: TTTS0306U_REQUEST_BODY, 
        responseHeader: TTTS0306U_RESPONSE_HEADER | null = null): Promise<TTTS0306U_RESPONSE>;
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS0312U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS0312U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS0312U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS0312U_RESPONSE}
     */
    public async TTTS0312U(
        secret: Secret, requestHeader: TTTS0312U_REQUEST_HEADER, requestBody: TTTS0312U_REQUEST_BODY, 
        responseHeader: TTTS0312U_RESPONSE_HEADER | null = null): Promise<TTTS0312U_RESPONSE>;
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTT1004U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTT1004U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTT1004U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTT1004U_RESPONSE}
     */
    public async VTTT1004U(
        secret: Secret, requestHeader: VTTT1004U_REQUEST_HEADER, requestBody: VTTT1004U_REQUEST_BODY, 
        responseHeader: VTTT1004U_RESPONSE_HEADER | null = null): Promise<VTTT1004U_RESPONSE>;
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS1003U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS1003U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS1003U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS1003U_RESPONSE}
     */
    public async VTTS1003U(
        secret: Secret, requestHeader: VTTS1003U_REQUEST_HEADER, requestBody: VTTS1003U_REQUEST_BODY, 
        responseHeader: VTTS1003U_RESPONSE_HEADER | null = null): Promise<VTTS1003U_RESPONSE>;
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS0309U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS0309U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS0309U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS0309U_RESPONSE}
     */
    public async VTTS0309U(
        secret: Secret, requestHeader: VTTS0309U_REQUEST_HEADER, requestBody: VTTS0309U_REQUEST_BODY, 
        responseHeader: VTTS0309U_RESPONSE_HEADER | null = null): Promise<VTTS0309U_RESPONSE>;
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS0302U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS0302U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS0302U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS0302U_RESPONSE}
     */
    public async VTTS0302U(
        secret: Secret, requestHeader: VTTS0302U_REQUEST_HEADER, requestBody: VTTS0302U_REQUEST_BODY, 
        responseHeader: VTTS0302U_RESPONSE_HEADER | null = null): Promise<VTTS0302U_RESPONSE>;
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS0306U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS0306U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS0306U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS0306U_RESPONSE}
     */
    public async VTTS0306U(
        secret: Secret, requestHeader: VTTS0306U_REQUEST_HEADER, requestBody: VTTS0306U_REQUEST_BODY, 
        responseHeader: VTTS0306U_RESPONSE_HEADER | null = null): Promise<VTTS0306U_RESPONSE>;
                    
    /**
     * 해외주식 정정취소주문
     * @description 해외주식 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS0312U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS0312U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS0312U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS0312U_RESPONSE}
     */
    public async VTTS0312U(
        secret: Secret, requestHeader: VTTS0312U_REQUEST_HEADER, requestBody: VTTS0312U_REQUEST_BODY, 
        responseHeader: VTTS0312U_RESPONSE_HEADER | null = null): Promise<VTTS0312U_RESPONSE>;
                    
    /**
     * 해외주식 예약주문접수
     * @description 해외주식 예약주문접수
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTT3016U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTT3016U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTT3016U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTT3016U_RESPONSE}
     */
    public async TTTT3016U(
        secret: Secret, requestHeader: TTTT3016U_REQUEST_HEADER, requestBody: TTTT3016U_REQUEST_BODY, 
        responseHeader: TTTT3016U_RESPONSE_HEADER | null = null): Promise<TTTT3016U_RESPONSE>;
                    
    /**
     * 해외주식 예약주문접수
     * @description 해외주식 예약주문접수
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTT3014U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTT3014U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTT3014U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTT3014U_RESPONSE}
     */
    public async TTTT3014U(
        secret: Secret, requestHeader: TTTT3014U_REQUEST_HEADER, requestBody: TTTT3014U_REQUEST_BODY, 
        responseHeader: TTTT3014U_RESPONSE_HEADER | null = null): Promise<TTTT3014U_RESPONSE>;
                    
    /**
     * 해외주식 예약주문접수
     * @description 해외주식 예약주문접수
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS3013U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS3013U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS3013U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS3013U_RESPONSE}
     */
    public async TTTS3013U(
        secret: Secret, requestHeader: TTTS3013U_REQUEST_HEADER, requestBody: TTTS3013U_REQUEST_BODY, 
        responseHeader: TTTS3013U_RESPONSE_HEADER | null = null): Promise<TTTS3013U_RESPONSE>;
                    
    /**
     * 해외주식 예약주문접수
     * @description 해외주식 예약주문접수
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTT3016U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTT3016U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTT3016U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTT3016U_RESPONSE}
     */
    public async VTTT3016U(
        secret: Secret, requestHeader: VTTT3016U_REQUEST_HEADER, requestBody: VTTT3016U_REQUEST_BODY, 
        responseHeader: VTTT3016U_RESPONSE_HEADER | null = null): Promise<VTTT3016U_RESPONSE>;
                    
    /**
     * 해외주식 예약주문접수
     * @description 해외주식 예약주문접수
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTT3014U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTT3014U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTT3014U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTT3014U_RESPONSE}
     */
    public async VTTT3014U(
        secret: Secret, requestHeader: VTTT3014U_REQUEST_HEADER, requestBody: VTTT3014U_REQUEST_BODY, 
        responseHeader: VTTT3014U_RESPONSE_HEADER | null = null): Promise<VTTT3014U_RESPONSE>;
                    
    /**
     * 해외주식 예약주문접수
     * @description 해외주식 예약주문접수
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS3013U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS3013U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS3013U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS3013U_RESPONSE}
     */
    public async VTTS3013U(
        secret: Secret, requestHeader: VTTS3013U_REQUEST_HEADER, requestBody: VTTS3013U_REQUEST_BODY, 
        responseHeader: VTTS3013U_RESPONSE_HEADER | null = null): Promise<VTTS3013U_RESPONSE>;
                    
    /**
     * 해외주식 예약주문접수취소
     * @description 해외주식 예약주문접수취소
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTT3017U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTT3017U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTT3017U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTT3017U_RESPONSE}
     */
    public async TTTT3017U(
        secret: Secret, requestHeader: TTTT3017U_REQUEST_HEADER, requestBody: TTTT3017U_REQUEST_BODY, 
        responseHeader: TTTT3017U_RESPONSE_HEADER | null = null): Promise<TTTT3017U_RESPONSE>;
                    
    /**
     * 해외주식 예약주문접수취소
     * @description 해외주식 예약주문접수취소
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTT3017U_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTT3017U_REQUEST_BODY} requestBody        요청 body
     * @param {VTTT3017U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTT3017U_RESPONSE}
     */
    public async VTTT3017U(
        secret: Secret, requestHeader: VTTT3017U_REQUEST_HEADER, requestBody: VTTT3017U_REQUEST_BODY, 
        responseHeader: VTTT3017U_RESPONSE_HEADER | null = null): Promise<VTTT3017U_RESPONSE>;
                    
    /**
     * 해외주식 미체결내역
     * @description 해외주식 미체결내역
     * 
     * @param {Secret} secret                               인증 정보
     * @param {JTTT3018R_REQUEST_HEADER} requestHeader    요청 header
     * @param {JTTT3018R_REQUEST_BODY} requestBody        요청 body
     * @param {JTTT3018R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {JTTT3018R_RESPONSE}
     */
    public async JTTT3018R(
        secret: Secret, requestHeader: JTTT3018R_REQUEST_HEADER, requestBody: JTTT3018R_REQUEST_BODY, 
        responseHeader: JTTT3018R_RESPONSE_HEADER | null = null): Promise<JTTT3018R_RESPONSE>;
                    
    /**
     * 해외주식 미체결내역
     * @description 해외주식 미체결내역
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS3018R_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS3018R_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS3018R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS3018R_RESPONSE}
     */
    public async TTTS3018R(
        secret: Secret, requestHeader: TTTS3018R_REQUEST_HEADER, requestBody: TTTS3018R_REQUEST_BODY, 
        responseHeader: TTTS3018R_RESPONSE_HEADER | null = null): Promise<TTTS3018R_RESPONSE>;
                    
    /**
     * 해외주식 미체결내역
     * @description 해외주식 미체결내역
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS3018R_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS3018R_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS3018R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS3018R_RESPONSE}
     */
    public async VTTS3018R(
        secret: Secret, requestHeader: VTTS3018R_REQUEST_HEADER, requestBody: VTTS3018R_REQUEST_BODY, 
        responseHeader: VTTS3018R_RESPONSE_HEADER | null = null): Promise<VTTS3018R_RESPONSE>;
                    
    /**
     * 해외주식 잔고
     * @description 해외주식 잔고
     * 
     * @param {Secret} secret                               인증 정보
     * @param {JTTT3012R_REQUEST_HEADER} requestHeader    요청 header
     * @param {JTTT3012R_REQUEST_BODY} requestBody        요청 body
     * @param {JTTT3012R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {JTTT3012R_RESPONSE}
     */
    public async JTTT3012R(
        secret: Secret, requestHeader: JTTT3012R_REQUEST_HEADER, requestBody: JTTT3012R_REQUEST_BODY, 
        responseHeader: JTTT3012R_RESPONSE_HEADER | null = null): Promise<JTTT3012R_RESPONSE>;
                    
    /**
     * 해외주식 잔고
     * @description 해외주식 잔고
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS3012R_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS3012R_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS3012R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS3012R_RESPONSE}
     */
    public async TTTS3012R(
        secret: Secret, requestHeader: TTTS3012R_REQUEST_HEADER, requestBody: TTTS3012R_REQUEST_BODY, 
        responseHeader: TTTS3012R_RESPONSE_HEADER | null = null): Promise<TTTS3012R_RESPONSE>;
                    
    /**
     * 해외주식 잔고
     * @description 해외주식 잔고
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS3012R_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS3012R_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS3012R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS3012R_RESPONSE}
     */
    public async VTTS3012R(
        secret: Secret, requestHeader: VTTS3012R_REQUEST_HEADER, requestBody: VTTS3012R_REQUEST_BODY, 
        responseHeader: VTTS3012R_RESPONSE_HEADER | null = null): Promise<VTTS3012R_RESPONSE>;
                    
    /**
     * 해외주식 주문체결내역
     * @description 해외주식 주문체결내역
     * 
     * @param {Secret} secret                               인증 정보
     * @param {JTTT3001R_REQUEST_HEADER} requestHeader    요청 header
     * @param {JTTT3001R_REQUEST_BODY} requestBody        요청 body
     * @param {JTTT3001R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {JTTT3001R_RESPONSE}
     */
    public async JTTT3001R(
        secret: Secret, requestHeader: JTTT3001R_REQUEST_HEADER, requestBody: JTTT3001R_REQUEST_BODY, 
        responseHeader: JTTT3001R_RESPONSE_HEADER | null = null): Promise<JTTT3001R_RESPONSE>;
                    
    /**
     * 해외주식 주문체결내역
     * @description 해외주식 주문체결내역
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS3035R_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS3035R_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS3035R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS3035R_RESPONSE}
     */
    public async TTTS3035R(
        secret: Secret, requestHeader: TTTS3035R_REQUEST_HEADER, requestBody: TTTS3035R_REQUEST_BODY, 
        responseHeader: TTTS3035R_RESPONSE_HEADER | null = null): Promise<TTTS3035R_RESPONSE>;
                    
    /**
     * 해외주식 주문체결내역
     * @description 해외주식 주문체결내역
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTTS3035R_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTTS3035R_REQUEST_BODY} requestBody        요청 body
     * @param {VTTS3035R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTTS3035R_RESPONSE}
     */
    public async VTTS3035R(
        secret: Secret, requestHeader: VTTS3035R_REQUEST_HEADER, requestBody: VTTS3035R_REQUEST_BODY, 
        responseHeader: VTTS3035R_RESPONSE_HEADER | null = null): Promise<VTTS3035R_RESPONSE>;
                    
    /**
     * 해외주식 체결기준현재잔고
     * @description 해외주식 체결기준현재잔고
     * 
     * @param {Secret} secret                               인증 정보
     * @param {CTRP6504R_REQUEST_HEADER} requestHeader    요청 header
     * @param {CTRP6504R_REQUEST_BODY} requestBody        요청 body
     * @param {CTRP6504R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {CTRP6504R_RESPONSE}
     */
    public async CTRP6504R(
        secret: Secret, requestHeader: CTRP6504R_REQUEST_HEADER, requestBody: CTRP6504R_REQUEST_BODY, 
        responseHeader: CTRP6504R_RESPONSE_HEADER | null = null): Promise<CTRP6504R_RESPONSE>;
                    
    /**
     * 해외주식 체결기준현재잔고
     * @description 해외주식 체결기준현재잔고
     * 
     * @param {Secret} secret                               인증 정보
     * @param {VTRP6504R_REQUEST_HEADER} requestHeader    요청 header
     * @param {VTRP6504R_REQUEST_BODY} requestBody        요청 body
     * @param {VTRP6504R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {VTRP6504R_RESPONSE}
     */
    public async VTRP6504R(
        secret: Secret, requestHeader: VTRP6504R_REQUEST_HEADER, requestBody: VTRP6504R_REQUEST_BODY, 
        responseHeader: VTRP6504R_RESPONSE_HEADER | null = null): Promise<VTRP6504R_RESPONSE>;
                    
    /**
     * 해외주식 예약주문조회
     * @description 해외주식 예약주문조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTT3039R_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTT3039R_REQUEST_BODY} requestBody        요청 body
     * @param {TTTT3039R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTT3039R_RESPONSE}
     */
    public async TTTT3039R(
        secret: Secret, requestHeader: TTTT3039R_REQUEST_HEADER, requestBody: TTTT3039R_REQUEST_BODY, 
        responseHeader: TTTT3039R_RESPONSE_HEADER | null = null): Promise<TTTT3039R_RESPONSE>;
                    
    /**
     * 해외주식 매수가능금액조회
     * @description 해외주식 매수가능금액조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {JTTT3007R_REQUEST_HEADER} requestHeader    요청 header
     * @param {JTTT3007R_REQUEST_BODY} requestBody        요청 body
     * @param {JTTT3007R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {JTTT3007R_RESPONSE}
     */
    public async JTTT3007R(
        secret: Secret, requestHeader: JTTT3007R_REQUEST_HEADER, requestBody: JTTT3007R_REQUEST_BODY, 
        responseHeader: JTTT3007R_RESPONSE_HEADER | null = null): Promise<JTTT3007R_RESPONSE>;
                    
    /**
     * 해외주식 매수가능금액조회
     * @description 해외주식 매수가능금액조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS3007R_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS3007R_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS3007R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS3007R_RESPONSE}
     */
    public async TTTS3007R(
        secret: Secret, requestHeader: TTTS3007R_REQUEST_HEADER, requestBody: TTTS3007R_REQUEST_BODY, 
        responseHeader: TTTS3007R_RESPONSE_HEADER | null = null): Promise<TTTS3007R_RESPONSE>;
                    
    /**
     * 해외주식 미국주간주문
     * @description 해외주식 미국주간주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS6036U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS6036U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS6036U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS6036U_RESPONSE}
     */
    public async TTTS6036U(
        secret: Secret, requestHeader: TTTS6036U_REQUEST_HEADER, requestBody: TTTS6036U_REQUEST_BODY, 
        responseHeader: TTTS6036U_RESPONSE_HEADER | null = null): Promise<TTTS6036U_RESPONSE>;
                    
    /**
     * 해외주식 미국주간주문
     * @description 해외주식 미국주간주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS6037U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS6037U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS6037U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS6037U_RESPONSE}
     */
    public async TTTS6037U(
        secret: Secret, requestHeader: TTTS6037U_REQUEST_HEADER, requestBody: TTTS6037U_REQUEST_BODY, 
        responseHeader: TTTS6037U_RESPONSE_HEADER | null = null): Promise<TTTS6037U_RESPONSE>;
                    
    /**
     * 해외주식 미국주간정정취소
     * @description 해외주식 미국주간정정취소
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS6038U_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS6038U_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS6038U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS6038U_RESPONSE}
     */
    public async TTTS6038U(
        secret: Secret, requestHeader: TTTS6038U_REQUEST_HEADER, requestBody: TTTS6038U_REQUEST_BODY, 
        responseHeader: TTTS6038U_RESPONSE_HEADER | null = null): Promise<TTTS6038U_RESPONSE>;
                    
    /**
     * 해외주식 기간손익
     * @description 해외주식 기간손익
     * 
     * @param {Secret} secret                               인증 정보
     * @param {TTTS3039R_REQUEST_HEADER} requestHeader    요청 header
     * @param {TTTS3039R_REQUEST_BODY} requestBody        요청 body
     * @param {TTTS3039R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {TTTS3039R_RESPONSE}
     */
    public async TTTS3039R(
        secret: Secret, requestHeader: TTTS3039R_REQUEST_HEADER, requestBody: TTTS3039R_REQUEST_BODY, 
        responseHeader: TTTS3039R_RESPONSE_HEADER | null = null): Promise<TTTS3039R_RESPONSE>;
                    
    /**
     * 해외주식 현재체결가
     * @description 해외주식 현재체결가
     * 
     * @param {Secret} secret                               인증 정보
     * @param {HHDFS00000300_REQUEST_HEADER} requestHeader    요청 header
     * @param {HHDFS00000300_REQUEST_BODY} requestBody        요청 body
     * @param {HHDFS00000300_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {HHDFS00000300_RESPONSE}
     */
    public async HHDFS00000300(
        secret: Secret, requestHeader: HHDFS00000300_REQUEST_HEADER, requestBody: HHDFS00000300_REQUEST_BODY, 
        responseHeader: HHDFS00000300_RESPONSE_HEADER | null = null): Promise<HHDFS00000300_RESPONSE>;
                    
    /**
     * 해외주식 기간별시세
     * @description 해외주식 기간별시세
     * 
     * @param {Secret} secret                               인증 정보
     * @param {HHDFS76240000_REQUEST_HEADER} requestHeader    요청 header
     * @param {HHDFS76240000_REQUEST_BODY} requestBody        요청 body
     * @param {HHDFS76240000_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {HHDFS76240000_RESPONSE}
     */
    public async HHDFS76240000(
        secret: Secret, requestHeader: HHDFS76240000_REQUEST_HEADER, requestBody: HHDFS76240000_REQUEST_BODY, 
        responseHeader: HHDFS76240000_RESPONSE_HEADER | null = null): Promise<HHDFS76240000_RESPONSE>;
                    
    /**
     * 해외주식 종목/지수/환율기간별시세(일/주/월/년)
     * @description 해외주식 종목/지수/환율기간별시세(일/주/월/년)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {FHKST03030100_REQUEST_HEADER} requestHeader    요청 header
     * @param {FHKST03030100_REQUEST_BODY} requestBody        요청 body
     * @param {FHKST03030100_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {FHKST03030100_RESPONSE}
     */
    public async FHKST03030100(
        secret: Secret, requestHeader: FHKST03030100_REQUEST_HEADER, requestBody: FHKST03030100_REQUEST_BODY, 
        responseHeader: FHKST03030100_RESPONSE_HEADER | null = null): Promise<FHKST03030100_RESPONSE>;
                    
    /**
     * 해외주식조건검색
     * @description 해외주식조건검색
     * 
     * @param {Secret} secret                               인증 정보
     * @param {HHDFS76410000_REQUEST_HEADER} requestHeader    요청 header
     * @param {HHDFS76410000_REQUEST_BODY} requestBody        요청 body
     * @param {HHDFS76410000_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {HHDFS76410000_RESPONSE}
     */
    public async HHDFS76410000(
        secret: Secret, requestHeader: HHDFS76410000_REQUEST_HEADER, requestBody: HHDFS76410000_REQUEST_BODY, 
        responseHeader: HHDFS76410000_RESPONSE_HEADER | null = null): Promise<HHDFS76410000_RESPONSE>;
                    
    /**
     * 해외결제일자조회
     * @description 해외결제일자조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {CTOS5011R_REQUEST_HEADER} requestHeader    요청 header
     * @param {CTOS5011R_REQUEST_BODY} requestBody        요청 body
     * @param {CTOS5011R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {CTOS5011R_RESPONSE}
     */
    public async CTOS5011R(
        secret: Secret, requestHeader: CTOS5011R_REQUEST_HEADER, requestBody: CTOS5011R_REQUEST_BODY, 
        responseHeader: CTOS5011R_RESPONSE_HEADER | null = null): Promise<CTOS5011R_RESPONSE>;
                    
    /**
     * 해외주식 현재가상세
     * @description 해외주식 현재가상세
     * 
     * @param {Secret} secret                               인증 정보
     * @param {HHDFS76200200_REQUEST_HEADER} requestHeader    요청 header
     * @param {HHDFS76200200_REQUEST_BODY} requestBody        요청 body
     * @param {HHDFS76200200_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {HHDFS76200200_RESPONSE}
     */
    public async HHDFS76200200(
        secret: Secret, requestHeader: HHDFS76200200_REQUEST_HEADER, requestBody: HHDFS76200200_REQUEST_BODY, 
        responseHeader: HHDFS76200200_RESPONSE_HEADER | null = null): Promise<HHDFS76200200_RESPONSE>;
                    
    /**
     * 해외선물옵션 주문
     * @description 해외선물옵션 주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {OTFM3001U_REQUEST_HEADER} requestHeader    요청 header
     * @param {OTFM3001U_REQUEST_BODY} requestBody        요청 body
     * @param {OTFM3001U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {OTFM3001U_RESPONSE}
     */
    public async OTFM3001U(
        secret: Secret, requestHeader: OTFM3001U_REQUEST_HEADER, requestBody: OTFM3001U_REQUEST_BODY, 
        responseHeader: OTFM3001U_RESPONSE_HEADER | null = null): Promise<OTFM3001U_RESPONSE>;
                    
    /**
     * 해외선물옵션 정정취소주문
     * @description 해외선물옵션 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {OTFM3002U_REQUEST_HEADER} requestHeader    요청 header
     * @param {OTFM3002U_REQUEST_BODY} requestBody        요청 body
     * @param {OTFM3002U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {OTFM3002U_RESPONSE}
     */
    public async OTFM3002U(
        secret: Secret, requestHeader: OTFM3002U_REQUEST_HEADER, requestBody: OTFM3002U_REQUEST_BODY, 
        responseHeader: OTFM3002U_RESPONSE_HEADER | null = null): Promise<OTFM3002U_RESPONSE>;
                    
    /**
     * 해외선물옵션 정정취소주문
     * @description 해외선물옵션 정정취소주문
     * 
     * @param {Secret} secret                               인증 정보
     * @param {OTFM3003U_REQUEST_HEADER} requestHeader    요청 header
     * @param {OTFM3003U_REQUEST_BODY} requestBody        요청 body
     * @param {OTFM3003U_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {OTFM3003U_RESPONSE}
     */
    public async OTFM3003U(
        secret: Secret, requestHeader: OTFM3003U_REQUEST_HEADER, requestBody: OTFM3003U_REQUEST_BODY, 
        responseHeader: OTFM3003U_RESPONSE_HEADER | null = null): Promise<OTFM3003U_RESPONSE>;
                    
    /**
     * 해외선물옵션 당일주문내역조회
     * @description 해외선물옵션 당일주문내역조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {OTFM3116R_REQUEST_HEADER} requestHeader    요청 header
     * @param {OTFM3116R_REQUEST_BODY} requestBody        요청 body
     * @param {OTFM3116R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {OTFM3116R_RESPONSE}
     */
    public async OTFM3116R(
        secret: Secret, requestHeader: OTFM3116R_REQUEST_HEADER, requestBody: OTFM3116R_REQUEST_BODY, 
        responseHeader: OTFM3116R_RESPONSE_HEADER | null = null): Promise<OTFM3116R_RESPONSE>;
                    
    /**
     * 해외선물옵션 미결제내역조회(잔고)
     * @description 해외선물옵션 미결제내역조회(잔고)
     * 
     * @param {Secret} secret                               인증 정보
     * @param {OTFM1412R_REQUEST_HEADER} requestHeader    요청 header
     * @param {OTFM1412R_REQUEST_BODY} requestBody        요청 body
     * @param {OTFM1412R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {OTFM1412R_RESPONSE}
     */
    public async OTFM1412R(
        secret: Secret, requestHeader: OTFM1412R_REQUEST_HEADER, requestBody: OTFM1412R_REQUEST_BODY, 
        responseHeader: OTFM1412R_RESPONSE_HEADER | null = null): Promise<OTFM1412R_RESPONSE>;
                    
    /**
     * 해외선물옵션 주문가능조회
     * @description 해외선물옵션 주문가능조회
     * 
     * @param {Secret} secret                               인증 정보
     * @param {OTFM3304R_REQUEST_HEADER} requestHeader    요청 header
     * @param {OTFM3304R_REQUEST_BODY} requestBody        요청 body
     * @param {OTFM3304R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {OTFM3304R_RESPONSE}
     */
    public async OTFM3304R(
        secret: Secret, requestHeader: OTFM3304R_REQUEST_HEADER, requestBody: OTFM3304R_REQUEST_BODY, 
        responseHeader: OTFM3304R_RESPONSE_HEADER | null = null): Promise<OTFM3304R_RESPONSE>;
                    
    /**
     * 해외선물옵션 기간계좌손익 일별
     * @description 해외선물옵션 기간계좌손익 일별
     * 
     * @param {Secret} secret                               인증 정보
     * @param {OTFM3118R_REQUEST_HEADER} requestHeader    요청 header
     * @param {OTFM3118R_REQUEST_BODY} requestBody        요청 body
     * @param {OTFM3118R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {OTFM3118R_RESPONSE}
     */
    public async OTFM3118R(
        secret: Secret, requestHeader: OTFM3118R_REQUEST_HEADER, requestBody: OTFM3118R_REQUEST_BODY, 
        responseHeader: OTFM3118R_RESPONSE_HEADER | null = null): Promise<OTFM3118R_RESPONSE>;
                    
    /**
     * 해외선물옵션 일별 체결내역
     * @description 해외선물옵션 일별 체결내역
     * 
     * @param {Secret} secret                               인증 정보
     * @param {OTFM3122R_REQUEST_HEADER} requestHeader    요청 header
     * @param {OTFM3122R_REQUEST_BODY} requestBody        요청 body
     * @param {OTFM3122R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {OTFM3122R_RESPONSE}
     */
    public async OTFM3122R(
        secret: Secret, requestHeader: OTFM3122R_REQUEST_HEADER, requestBody: OTFM3122R_REQUEST_BODY, 
        responseHeader: OTFM3122R_RESPONSE_HEADER | null = null): Promise<OTFM3122R_RESPONSE>;
                    
    /**
     * 해외선물옵션 예수금현황
     * @description 해외선물옵션 예수금현황
     * 
     * @param {Secret} secret                               인증 정보
     * @param {OTFM1411R_REQUEST_HEADER} requestHeader    요청 header
     * @param {OTFM1411R_REQUEST_BODY} requestBody        요청 body
     * @param {OTFM1411R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {OTFM1411R_RESPONSE}
     */
    public async OTFM1411R(
        secret: Secret, requestHeader: OTFM1411R_REQUEST_HEADER, requestBody: OTFM1411R_REQUEST_BODY, 
        responseHeader: OTFM1411R_RESPONSE_HEADER | null = null): Promise<OTFM1411R_RESPONSE>;
                    
    /**
     * 해외선물옵션 일별 주문내역
     * @description 해외선물옵션 일별 주문내역
     * 
     * @param {Secret} secret                               인증 정보
     * @param {OTFM3120R_REQUEST_HEADER} requestHeader    요청 header
     * @param {OTFM3120R_REQUEST_BODY} requestBody        요청 body
     * @param {OTFM3120R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {OTFM3120R_RESPONSE}
     */
    public async OTFM3120R(
        secret: Secret, requestHeader: OTFM3120R_REQUEST_HEADER, requestBody: OTFM3120R_REQUEST_BODY, 
        responseHeader: OTFM3120R_RESPONSE_HEADER | null = null): Promise<OTFM3120R_RESPONSE>;
                    
    /**
     * 해외선물옵션 기간계좌거래내역
     * @description 해외선물옵션 기간계좌거래내역
     * 
     * @param {Secret} secret                               인증 정보
     * @param {OTFM3114R_REQUEST_HEADER} requestHeader    요청 header
     * @param {OTFM3114R_REQUEST_BODY} requestBody        요청 body
     * @param {OTFM3114R_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {OTFM3114R_RESPONSE}
     */
    public async OTFM3114R(
        secret: Secret, requestHeader: OTFM3114R_REQUEST_HEADER, requestBody: OTFM3114R_REQUEST_BODY, 
        responseHeader: OTFM3114R_RESPONSE_HEADER | null = null): Promise<OTFM3114R_RESPONSE>;
                    
    /**
     * 해외선물종목상세
     * @description 해외선물종목상세
     * 
     * @param {Secret} secret                               인증 정보
     * @param {HHDFC55010100_REQUEST_HEADER} requestHeader    요청 header
     * @param {HHDFC55010100_REQUEST_BODY} requestBody        요청 body
     * @param {HHDFC55010100_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {HHDFC55010100_RESPONSE}
     */
    public async HHDFC55010100(
        secret: Secret, requestHeader: HHDFC55010100_REQUEST_HEADER, requestBody: HHDFC55010100_REQUEST_BODY, 
        responseHeader: HHDFC55010100_RESPONSE_HEADER | null = null): Promise<HHDFC55010100_RESPONSE>;
                    
    /**
     * 해외선물종목현재가
     * @description 해외선물종목현재가
     * 
     * @param {Secret} secret                               인증 정보
     * @param {HHDFC55010000_REQUEST_HEADER} requestHeader    요청 header
     * @param {HHDFC55010000_REQUEST_BODY} requestBody        요청 body
     * @param {HHDFC55010000_RESPONSE_HEADER} responseHeader  응답 header
     * @returns {HHDFC55010000_RESPONSE}
     */
    public async HHDFC55010000(
        secret: Secret, requestHeader: HHDFC55010000_REQUEST_HEADER, requestBody: HHDFC55010000_REQUEST_BODY, 
        responseHeader: HHDFC55010000_RESPONSE_HEADER | null = null): Promise<HHDFC55010000_RESPONSE>;
                    

}