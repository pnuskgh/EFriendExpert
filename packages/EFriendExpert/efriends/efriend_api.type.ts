/**
 * 한국투자증권 EFriendExpert API용 type
 *     자동 생성되는 소스이니 수정하지 마세요.
 * 
 * @file packages/EFriendExpert/efriends/efriend_api.type.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2025, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */


export interface APPROVAL_REQUEST_HEADER {
    'content-type'?:  string
}


export interface HASHKEY_REQUEST_HEADER {
    'content-type'?:  string
    appkey?:  string
    appsecret?:  string
}


export interface TOKENP_REQUEST_HEADER {
    grant_type?:  string
    appkey?:  string
    appsecret?:  string
}


export interface REVOKEP_REQUEST_HEADER {
    appkey?:  string
    appsecret?:  string
    token?:  string
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

export type TTTC2202R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTC2202R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTC2202R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  TTTC2202R_REQUEST_HEADER_TR_CONT
    custtype?:  TTTC2202R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTC2201R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTC2201R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTC2201R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  TTTC2201R_REQUEST_HEADER_TR_CONT
    custtype?:  TTTC2201R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTC0503R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTC0503R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTC0503R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  TTTC0503R_REQUEST_HEADER_TR_CONT
    custtype?:  TTTC0503R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTC0506R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTC0506R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTC0506R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  TTTC0506R_REQUEST_HEADER_TR_CONT
    custtype?:  TTTC0506R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTC2208R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTC2208R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTC2208R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  TTTC2208R_REQUEST_HEADER_TR_CONT
    custtype?:  TTTC2208R_REQUEST_HEADER_CUSTTYPE
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

export type TTTC8715R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTC8715R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTC8715R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  TTTC8715R_REQUEST_HEADER_TR_CONT
    custtype?:  TTTC8715R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTC8708R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTC8708R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTC8708R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  TTTC8708R_REQUEST_HEADER_TR_CONT
    custtype?:  TTTC8708R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTC8408R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTC8408R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTC8408R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  TTTC8408R_REQUEST_HEADER_TR_CONT
    custtype?:  TTTC8408R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTC0869R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTC0869R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTC0869R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  TTTC0869R_REQUEST_HEADER_TR_CONT
    custtype?:  TTTC0869R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type CTRGA011R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type CTRGA011R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface CTRGA011R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  CTRGA011R_REQUEST_HEADER_TR_CONT
    custtype?:  CTRGA011R_REQUEST_HEADER_CUSTTYPE
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

export type FHKST03010100_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKST03010100_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    tr_id?:  string
    custtype?:  FHKST03010100_REQUEST_HEADER_CUSTTYPE
}

export type FHPST01060000_REQUEST_HEADER_TR_CONT = ' ' | 'N' | '( 주의';
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

export type FHPST02320000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST02320000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  string
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

export type FHPST01010000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPST01010000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST01010000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST01010000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST01010000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPST02400000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPST02400000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST02400000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST02400000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST02400000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPST02440000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPST02440000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST02440000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST02440000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST02440000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPST02440100_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPST02440100_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST02440100_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST02440100_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST02440100_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKST117300C0_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKST117300C0_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKST117300C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKST117300C0_REQUEST_HEADER_TR_CONT
    custtype?:  FHKST117300C0_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKST121600C0_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKST121600C0_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKST121600C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKST121600C0_REQUEST_HEADER_TR_CONT
    custtype?:  FHKST121600C0_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPST02300000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPST02300000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST02300000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST02300000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST02300000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPST02300400_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPST02300400_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST02300400_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST02300400_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST02300400_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKST03010230_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKST03010230_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKST03010230_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKST03010230_REQUEST_HEADER_TR_CONT
    custtype?:  FHKST03010230_REQUEST_HEADER_CUSTTYPE
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

export type FHPEW02770000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPEW02770000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPEW02770000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPEW02770000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPEW02770000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPEW02780000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPEW02780000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPEW02780000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPEW02780000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPEW02780000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPEW02790000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPEW02790000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPEW02790000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPEW02790000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPEW02790000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPEW02850000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPEW02850000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPEW02850000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPEW02850000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPEW02850000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPEW02870000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPEW02870000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPEW02870000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPEW02870000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPEW02870000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPEW02840100_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPEW02840100_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPEW02840100_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPEW02840100_REQUEST_HEADER_TR_CONT
    custtype?:  FHPEW02840100_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKEW154800C0_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKEW154800C0_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKEW154800C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKEW154800C0_REQUEST_HEADER_TR_CONT
    custtype?:  FHKEW154800C0_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPEW02840300_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPEW02840300_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPEW02840300_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPEW02840300_REQUEST_HEADER_TR_CONT
    custtype?:  FHPEW02840300_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPEW02740100_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPEW02740100_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPEW02740100_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPEW02740100_REQUEST_HEADER_TR_CONT
    custtype?:  FHPEW02740100_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPEW02740300_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPEW02740300_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPEW02740300_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPEW02740300_REQUEST_HEADER_TR_CONT
    custtype?:  FHPEW02740300_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}


export interface FHPEW02830100_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  string
    custtype?:  string
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPEW02840200_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPEW02840200_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPEW02840200_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPEW02840200_REQUEST_HEADER_TR_CONT
    custtype?:  FHPEW02840200_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKEW154101C0_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKEW154101C0_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKEW154101C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKEW154101C0_REQUEST_HEADER_TR_CONT
    custtype?:  FHKEW154101C0_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPEW02740200_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPEW02740200_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPEW02740200_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPEW02740200_REQUEST_HEADER_TR_CONT
    custtype?:  FHPEW02740200_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPEW02830200_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPEW02830200_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPEW02830200_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPEW02830200_REQUEST_HEADER_TR_CONT
    custtype?:  FHPEW02830200_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPEW02840400_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPEW02840400_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPEW02840400_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPEW02840400_REQUEST_HEADER_TR_CONT
    custtype?:  FHPEW02840400_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPEW03760000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPEW03760000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPEW03760000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPEW03760000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPEW03760000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKEW151701C0_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKEW151701C0_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKEW151701C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKEW151701C0_REQUEST_HEADER_TR_CONT
    custtype?:  FHKEW151701C0_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKEW15100000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKEW15100000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKEW15100000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKEW15100000_REQUEST_HEADER_TR_CONT
    custtype?:  FHKEW15100000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKEW154100C0_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKEW154100C0_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKEW154100C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKEW154100C0_REQUEST_HEADER_TR_CONT
    custtype?:  FHKEW154100C0_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKEW154700C0_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKEW154700C0_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKEW154700C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKEW154700C0_REQUEST_HEADER_TR_CONT
    custtype?:  FHKEW154700C0_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
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

export type FHKUP03500200_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKUP03500200_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKUP03500200_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKUP03500200_REQUEST_HEADER_TR_CONT
    custtype?:  FHKUP03500200_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPST01390000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPST01390000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST01390000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST01390000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST01390000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPUP02100000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPUP02100000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPUP02100000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPUP02100000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPUP02100000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPUP02120000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPUP02120000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPUP02120000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPUP02120000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPUP02120000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPUP02140000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPUP02140000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPUP02140000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPUP02140000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPUP02140000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKUP11750000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKUP11750000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKUP11750000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKUP11750000_REQUEST_HEADER_TR_CONT
    custtype?:  FHKUP11750000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPUP02110100_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPUP02110100_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPUP02110100_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPUP02110100_REQUEST_HEADER_TR_CONT
    custtype?:  FHPUP02110100_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPUP02110200_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPUP02110200_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPUP02110200_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPUP02110200_REQUEST_HEADER_TR_CONT
    custtype?:  FHPUP02110200_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPST01840000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPST01840000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST01840000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST01840000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST01840000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPST07020000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPST07020000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST07020000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST07020000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST07020000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKST01011800_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKST01011800_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKST01011800_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKST01011800_REQUEST_HEADER_TR_CONT
    custtype?:  FHKST01011800_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHMCM000002C0_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHMCM000002C0_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHMCM000002C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHMCM000002C0_REQUEST_HEADER_TR_CONT
    custtype?:  HHMCM000002C0_REQUEST_HEADER_CUSTTYPE
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

export type CTPF1002R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type CTPF1002R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface CTPF1002R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  CTPF1002R_REQUEST_HEADER_TR_CONT
    custtype?:  CTPF1002R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKST66430100_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKST66430100_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKST66430100_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKST66430100_REQUEST_HEADER_TR_CONT
    custtype?:  FHKST66430100_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKST66430200_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKST66430200_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKST66430200_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKST66430200_REQUEST_HEADER_TR_CONT
    custtype?:  FHKST66430200_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKST66430300_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKST66430300_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKST66430300_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKST66430300_REQUEST_HEADER_TR_CONT
    custtype?:  FHKST66430300_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKST66430400_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKST66430400_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKST66430400_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKST66430400_REQUEST_HEADER_TR_CONT
    custtype?:  FHKST66430400_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKST66430500_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKST66430500_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKST66430500_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKST66430500_REQUEST_HEADER_TR_CONT
    custtype?:  FHKST66430500_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKST66430600_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKST66430600_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKST66430600_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKST66430600_REQUEST_HEADER_TR_CONT
    custtype?:  FHKST66430600_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKST66430800_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKST66430800_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKST66430800_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKST66430800_REQUEST_HEADER_TR_CONT
    custtype?:  FHKST66430800_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPST04770000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPST04770000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST04770000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST04770000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST04770000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}


export interface HHKDB669102C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  string
    custtype?:  string
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHKDB669103C0_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHKDB669103C0_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHKDB669103C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHKDB669103C0_REQUEST_HEADER_TR_CONT
    custtype?:  HHKDB669103C0_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}


export interface HHKDB669104C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  string
    custtype?:  string
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHKDB669105C0_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHKDB669105C0_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHKDB669105C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHKDB669105C0_REQUEST_HEADER_TR_CONT
    custtype?:  HHKDB669105C0_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}


export interface HHKDB669106C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  string
    custtype?:  string
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHKDB669107C0_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHKDB669107C0_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHKDB669107C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHKDB669107C0_REQUEST_HEADER_TR_CONT
    custtype?:  HHKDB669107C0_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHKDB669108C0_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHKDB669108C0_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHKDB669108C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHKDB669108C0_REQUEST_HEADER_TR_CONT
    custtype?:  HHKDB669108C0_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHKDB669109C0_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHKDB669109C0_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHKDB669109C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHKDB669109C0_REQUEST_HEADER_TR_CONT
    custtype?:  HHKDB669109C0_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHKDB669110C0_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHKDB669110C0_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHKDB669110C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHKDB669110C0_REQUEST_HEADER_TR_CONT
    custtype?:  HHKDB669110C0_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}


export interface HHKDB669100C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  string
    custtype?:  string
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}


export interface HHKDB669101C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  string
    custtype?:  string
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHKDB669111C0_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHKDB669111C0_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHKDB669111C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHKDB669111C0_REQUEST_HEADER_TR_CONT
    custtype?:  HHKDB669111C0_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHKST668300C0_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHKST668300C0_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHKST668300C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHKST668300C0_REQUEST_HEADER_TR_CONT
    custtype?:  HHKST668300C0_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type CTSC2702R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type CTSC2702R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface CTSC2702R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  CTSC2702R_REQUEST_HEADER_TR_CONT
    custtype?:  CTSC2702R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKST663300C0_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKST663300C0_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKST663300C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKST663300C0_REQUEST_HEADER_TR_CONT
    custtype?:  FHKST663300C0_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKST663400C0_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKST663400C0_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKST663400C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKST663400C0_REQUEST_HEADER_TR_CONT
    custtype?:  FHKST663400C0_REQUEST_HEADER_CUSTTYPE
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

export type FHKST03010800_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKST03010800_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKST03010800_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKST03010800_REQUEST_HEADER_TR_CONT
    custtype?:  FHKST03010800_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPTJ04030000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPTJ04030000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPTJ04030000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPTJ04030000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPTJ04030000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPST04760000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPST04760000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST04760000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST04760000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST04760000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPST01810000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPST01810000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST01810000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST01810000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST01810000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}


export interface FHPST04830000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  string
    custtype?:  string
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPPG04600000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPPG04600000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPPG04600000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPPG04600000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPPG04600000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKST11860000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKST11860000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKST11860000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKST11860000_REQUEST_HEADER_TR_CONT
    custtype?:  FHKST11860000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPPG04600100_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPPG04600100_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPPG04600100_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPPG04600100_REQUEST_HEADER_TR_CONT
    custtype?:  FHPPG04600100_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHPST074500C0_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHPST074500C0_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHPST074500C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHPST074500C0_REQUEST_HEADER_TR_CONT
    custtype?:  HHPST074500C0_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKST644100C0_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKST644100C0_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKST644100C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKST644100C0_REQUEST_HEADER_TR_CONT
    custtype?:  FHKST644100C0_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKST644400C0_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKST644400C0_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKST644400C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKST644400C0_REQUEST_HEADER_TR_CONT
    custtype?:  FHKST644400C0_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKST111900C0_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKST111900C0_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKST111900C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKST111900C0_REQUEST_HEADER_TR_CONT
    custtype?:  FHKST111900C0_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKST649100C0_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKST649100C0_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKST649100C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKST649100C0_REQUEST_HEADER_TR_CONT
    custtype?:  FHKST649100C0_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPTJ04040000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPTJ04040000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPTJ04040000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPTJ04040000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPTJ04040000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPPG04650200_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPPG04650200_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPPG04650200_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPPG04650200_REQUEST_HEADER_TR_CONT
    custtype?:  FHPPG04650200_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHPPG046600C0_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHPPG046600C0_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHPPG046600C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHPPG046600C0_REQUEST_HEADER_TR_CONT
    custtype?:  HHPPG046600C0_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHKCM113004C6_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHKCM113004C6_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHKCM113004C6_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHKCM113004C6_REQUEST_HEADER_TR_CONT
    custtype?:  HHKCM113004C6_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHKCM113004C7_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHKCM113004C7_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHKCM113004C7_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHKCM113004C7_REQUEST_HEADER_TR_CONT
    custtype?:  HHKCM113004C7_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKST11300006_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKST11300006_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKST11300006_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKST11300006_REQUEST_HEADER_TR_CONT
    custtype?:  FHKST11300006_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKST130000C0_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKST130000C0_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKST130000C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKST130000C0_REQUEST_HEADER_TR_CONT
    custtype?:  FHKST130000C0_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPST04320000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPST04320000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST04320000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST04320000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST04320000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPST01130000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPST01130000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST01130000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST01130000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST01130000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPST04540000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPST04540000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST04540000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST04540000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST04540000_REQUEST_HEADER_CUSTTYPE
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

export type FHPST01700000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPST01700000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST01700000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST01700000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST01700000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPST01730000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPST01730000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST01730000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST01730000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST01730000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPST01740000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPST01740000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST01740000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST01740000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST01740000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPST01750000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPST01750000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST01750000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST01750000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST01750000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPST01760000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPST01760000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST01760000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST01760000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST01760000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPST01770000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPST01770000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST01770000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST01770000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST01770000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPST01720000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPST01720000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST01720000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST01720000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST01720000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPST01780000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPST01780000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST01780000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST01780000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST01780000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPST01790000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPST01790000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST01790000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST01790000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST01790000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPST01680000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPST01680000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST01680000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST01680000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST01680000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPST01800000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPST01800000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST01800000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST01800000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST01800000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPST01820000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPST01820000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST01820000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST01820000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST01820000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPST01860000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPST01860000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST01860000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST01860000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST01860000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPST01870000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPST01870000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST01870000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST01870000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST01870000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKST190900C0_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKST190900C0_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKST190900C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKST190900C0_REQUEST_HEADER_TR_CONT
    custtype?:  FHKST190900C0_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPST04820000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPST04820000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST04820000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST04820000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST04820000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKST17010000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKST17010000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKST17010000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKST17010000_REQUEST_HEADER_TR_CONT
    custtype?:  FHKST17010000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHKDB13470100_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHKDB13470100_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHKDB13470100_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHKDB13470100_REQUEST_HEADER_TR_CONT
    custtype?:  HHKDB13470100_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPST02340000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPST02340000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST02340000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST02340000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST02340000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPST02350000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPST02350000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPST02350000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPST02350000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPST02350000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHMCM000100C0_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHMCM000100C0_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHMCM000100C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHMCM000100C0_REQUEST_HEADER_TR_CONT
    custtype?:  HHMCM000100C0_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTO1101U_REQUEST_HEADER_TR_ID = 'TTTO1101U' | 'JTCE1001U' | 'VTTO1101U';
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

export type JTCE1001U_REQUEST_HEADER_TR_ID = 'TTTO1101U' | 'JTCE1001U' | 'VTTO1101U';
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

export type VTTO1101U_REQUEST_HEADER_TR_ID = 'TTTO1101U' | 'JTCE1001U' | 'VTTO1101U';
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

export type TTTO1103U_REQUEST_HEADER_TR_ID = 'TTTO1103U' | 'JTCE1002U' | 'VTTO1103U';
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

export type JTCE1002U_REQUEST_HEADER_TR_ID = 'TTTO1103U' | 'JTCE1002U' | 'VTTO1103U';
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

export type VTTO1103U_REQUEST_HEADER_TR_ID = 'TTTO1103U' | 'JTCE1002U' | 'VTTO1103U';
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

export type JTCE1004R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type JTCE1004R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface JTCE1004R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  JTCE1004R_REQUEST_HEADER_TR_CONT
    custtype?:  JTCE1004R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type CTFO6117R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type CTFO6117R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface CTFO6117R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  CTFO6117R_REQUEST_HEADER_TR_CONT
    custtype?:  CTFO6117R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type CTRP6550R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type CTRP6550R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface CTRP6550R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  CTRP6550R_REQUEST_HEADER_TR_CONT
    custtype?:  CTRP6550R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type CTFO6159R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type CTFO6159R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface CTFO6159R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  CTFO6159R_REQUEST_HEADER_TR_CONT
    custtype?:  CTFO6159R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type CTFO5139R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type CTFO5139R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface CTFO5139R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  CTFO5139R_REQUEST_HEADER_TR_CONT
    custtype?:  CTFO5139R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type CTFO6119R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type CTFO6119R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface CTFO6119R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  CTFO6119R_REQUEST_HEADER_TR_CONT
    custtype?:  CTFO6119R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type JTCE6003R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type JTCE6003R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface JTCE6003R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  JTCE6003R_REQUEST_HEADER_TR_CONT
    custtype?:  JTCE6003R_REQUEST_HEADER_CUSTTYPE
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

export type FHKIF03020200_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKIF03020200_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKIF03020200_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKIF03020200_REQUEST_HEADER_TR_CONT
    custtype?:  FHKIF03020200_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPIF05110100_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPIF05110100_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPIF05110100_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPIF05110100_REQUEST_HEADER_TR_CONT
    custtype?:  FHPIF05110100_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPIO056104C0_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPIO056104C0_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPIO056104C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPIO056104C0_REQUEST_HEADER_TR_CONT
    custtype?:  FHPIO056104C0_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPIF05030000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPIF05030000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPIF05030000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPIF05030000_REQUEST_HEADER_TR_CONT
    custtype?:  FHPIF05030000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPIF05030100_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPIF05030100_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPIF05030100_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPIF05030100_REQUEST_HEADER_TR_CONT
    custtype?:  FHPIF05030100_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHPIF05030200_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHPIF05030200_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHPIF05030200_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHPIF05030200_REQUEST_HEADER_TR_CONT
    custtype?:  FHPIF05030200_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type H0CFASP0_REQUEST_HEADER_TR_TYPE = '1' | '2';
export interface H0CFASP0_REQUEST_HEADER {
    approval_key?:  string
    custtype?:  string
    tr_type?:  H0CFASP0_REQUEST_HEADER_TR_TYPE
    'content-type'?:  string
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

export type TTTS3018R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTS3018R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTS3018R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  TTTS3018R_REQUEST_HEADER_TR_CONT
    custtype?:  TTTS3018R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTS3012R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTS3012R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTS3012R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  TTTS3012R_REQUEST_HEADER_TR_CONT
    custtype?:  TTTS3012R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTS3012R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTS3012R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTS3012R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  VTTS3012R_REQUEST_HEADER_TR_CONT
    custtype?:  VTTS3012R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTS3035R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTS3035R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTS3035R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  TTTS3035R_REQUEST_HEADER_TR_CONT
    custtype?:  TTTS3035R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTS3035R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type VTTS3035R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface VTTS3035R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
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

export type TTTT3039R_REQUEST_HEADER_TR_ID = '미국' | '일본, 중국, 홍콩, 베트남';
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

export type TTTS3014R_REQUEST_HEADER_TR_ID = '미국' | '일본, 중국, 홍콩, 베트남';
export type TTTS3014R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export interface TTTS3014R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  TTTS3014R_REQUEST_HEADER_TR_ID
    tr_cont?:  TTTS3014R_REQUEST_HEADER_TR_CONT
    custtype?:  string
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTS3007R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export interface TTTS3007R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  TTTS3007R_REQUEST_HEADER_TR_CONT
    custtype?:  string
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type VTTS3007R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export interface VTTS3007R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  VTTS3007R_REQUEST_HEADER_TR_CONT
    custtype?:  string
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTS6036U_REQUEST_HEADER_TR_ID = '미국주간매수' | '미국주간매도';
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

export type TTTS6037U_REQUEST_HEADER_TR_ID = '미국주간매수' | '미국주간매도';
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

export type TTTS6038U_REQUEST_HEADER_TR_ID = '미국주간 정정취소';
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

export type TTTC2101R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTC2101R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTC2101R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  TTTC2101R_REQUEST_HEADER_TR_CONT
    custtype?:  TTTC2101R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type CTOS4001R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type CTOS4001R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface CTOS4001R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  CTOS4001R_REQUEST_HEADER_TR_CONT
    custtype?:  CTOS4001R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type CTRP6010R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type CTRP6010R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface CTRP6010R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  CTRP6010R_REQUEST_HEADER_TR_CONT
    custtype?:  CTRP6010R_REQUEST_HEADER_CUSTTYPE
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

export type HHDFS76950200_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHDFS76950200_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHDFS76950200_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHDFS76950200_REQUEST_HEADER_TR_CONT
    custtype?:  HHDFS76950200_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKST03030200_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKST03030200_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKST03030200_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKST03030200_REQUEST_HEADER_TR_CONT
    custtype?:  FHKST03030200_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type CTPF1702R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type CTPF1702R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface CTPF1702R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  CTPF1702R_REQUEST_HEADER_TR_CONT
    custtype?:  CTPF1702R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}


export interface HHDFS76200300_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  string
    custtype?:  string
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}


export interface HHDFS76370000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  string
    custtype?:  string
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}


export interface HHDFS76370100_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  string
    custtype?:  string
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHDFS76200100_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHDFS76200100_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHDFS76200100_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHDFS76200100_REQUEST_HEADER_TR_CONT
    custtype?:  HHDFS76200100_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}


export interface HHDFS76260000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  string
    custtype?:  string
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}


export interface HHDFS76270000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  string
    custtype?:  string
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}


export interface HHDFS76280000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  string
    custtype?:  string
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}


export interface HHDFS76290000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  string
    custtype?:  string
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}


export interface HHDFS76300000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  string
    custtype?:  string
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}


export interface HHDFS76310010_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  string
    custtype?:  string
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}


export interface HHDFS76320010_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  string
    custtype?:  string
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}


export interface HHDFS76330000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  string
    custtype?:  string
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}


export interface HHDFS76340000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  string
    custtype?:  string
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}


export interface HHDFS76350100_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  string
    custtype?:  string
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type CTRGT011R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type CTRGT011R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface CTRGT011R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  CTRGT011R_REQUEST_HEADER_TR_CONT
    custtype?:  CTRGT011R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHPSTH60100C1_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHPSTH60100C1_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHPSTH60100C1_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHPSTH60100C1_REQUEST_HEADER_TR_CONT
    custtype?:  HHPSTH60100C1_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHDFS78330900_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHDFS78330900_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHDFS78330900_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHDFS78330900_REQUEST_HEADER_TR_CONT
    custtype?:  HHDFS78330900_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type CTLN4050R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type CTLN4050R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface CTLN4050R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  CTLN4050R_REQUEST_HEADER_TR_CONT
    custtype?:  CTLN4050R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKST01011801_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKST01011801_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKST01011801_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKST01011801_REQUEST_HEADER_TR_CONT
    custtype?:  FHKST01011801_REQUEST_HEADER_CUSTTYPE
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

export type OTFM3115R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type OTFM3115R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface OTFM3115R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  OTFM3115R_REQUEST_HEADER_TR_CONT
    custtype?:  OTFM3115R_REQUEST_HEADER_CUSTTYPE
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

export type HHDFC55020400_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHDFC55020400_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHDFC55020400_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHDFC55020400_REQUEST_HEADER_TR_CONT
    custtype?:  HHDFC55020400_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHDFC55020000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHDFC55020000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHDFC55020000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHDFC55020000_REQUEST_HEADER_TR_CONT
    custtype?:  HHDFC55020000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHDFC55020100_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHDFC55020100_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHDFC55020100_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHDFC55020100_REQUEST_HEADER_TR_CONT
    custtype?:  HHDFC55020100_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHDFC55020200_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHDFC55020200_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHDFC55020200_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHDFC55020200_REQUEST_HEADER_TR_CONT
    custtype?:  HHDFC55020200_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHDFC55020300_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHDFC55020300_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHDFC55020300_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHDFC55020300_REQUEST_HEADER_TR_CONT
    custtype?:  HHDFC55020300_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHDFC86000000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHDFC86000000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHDFC86000000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHDFC86000000_REQUEST_HEADER_TR_CONT
    custtype?:  HHDFC86000000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHDFC55200000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHDFC55200000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHDFC55200000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHDFC55200000_REQUEST_HEADER_TR_CONT
    custtype?:  HHDFC55200000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type OTFM2229R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type OTFM2229R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface OTFM2229R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  OTFM2229R_REQUEST_HEADER_TR_CONT
    custtype?:  OTFM2229R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHDDB95030000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHDDB95030000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHDDB95030000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHDDB95030000_REQUEST_HEADER_TR_CONT
    custtype?:  HHDDB95030000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHDFO86000000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHDFO86000000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHDFO86000000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHDFO86000000_REQUEST_HEADER_TR_CONT
    custtype?:  HHDFO86000000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHDFO55010100_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHDFO55010100_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHDFO55010100_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHDFO55010100_REQUEST_HEADER_TR_CONT
    custtype?:  HHDFO55010100_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHDFO55010000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHDFO55010000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHDFO55010000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHDFO55010000_REQUEST_HEADER_TR_CONT
    custtype?:  HHDFO55010000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHDFO55020000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHDFO55020000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHDFO55020000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHDFO55020000_REQUEST_HEADER_TR_CONT
    custtype?:  HHDFO55020000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHDFO55020100_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHDFO55020100_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHDFO55020100_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHDFO55020100_REQUEST_HEADER_TR_CONT
    custtype?:  HHDFO55020100_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHDFO55020200_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHDFO55020200_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHDFO55020200_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHDFO55020200_REQUEST_HEADER_TR_CONT
    custtype?:  HHDFO55020200_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHDFO55020300_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHDFO55020300_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHDFO55020300_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHDFO55020300_REQUEST_HEADER_TR_CONT
    custtype?:  HHDFO55020300_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHDFO55020400_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHDFO55020400_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHDFO55020400_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHDFO55020400_REQUEST_HEADER_TR_CONT
    custtype?:  HHDFO55020400_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type HHDFO55200000_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type HHDFO55200000_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface HHDFO55200000_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  HHDFO55200000_REQUEST_HEADER_TR_CONT
    custtype?:  HHDFO55200000_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTC0958U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTC0958U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTC0958U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  TTTC0958U_REQUEST_HEADER_TR_CONT
    custtype?:  TTTC0958U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTC0952U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTC0952U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTC0952U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  TTTC0952U_REQUEST_HEADER_TR_CONT
    custtype?:  TTTC0952U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTC0953U_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTC0953U_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTC0953U_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  TTTC0953U_REQUEST_HEADER_TR_CONT
    custtype?:  TTTC0953U_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type CTSC8035R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type CTSC8035R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface CTSC8035R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  CTSC8035R_REQUEST_HEADER_TR_CONT
    custtype?:  CTSC8035R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type CTSC8013R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type CTSC8013R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface CTSC8013R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  CTSC8013R_REQUEST_HEADER_TR_CONT
    custtype?:  CTSC8013R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type CTSC8407R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type CTSC8407R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface CTSC8407R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  CTSC8407R_REQUEST_HEADER_TR_CONT
    custtype?:  CTSC8407R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type TTTC8910R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type TTTC8910R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface TTTC8910R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  TTTC8910R_REQUEST_HEADER_TR_CONT
    custtype?:  TTTC8910R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type CTPF1101R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type CTPF1101R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface CTPF1101R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  CTPF1101R_REQUEST_HEADER_TR_CONT
    custtype?:  CTPF1101R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type CTPF1114R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type CTPF1114R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface CTPF1114R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  CTPF1114R_REQUEST_HEADER_TR_CONT
    custtype?:  CTPF1114R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKBJ773401C0_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKBJ773401C0_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKBJ773401C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKBJ773401C0_REQUEST_HEADER_TR_CONT
    custtype?:  FHKBJ773401C0_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type CTPF2005R_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type CTPF2005R_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface CTPF2005R_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  CTPF2005R_REQUEST_HEADER_TR_CONT
    custtype?:  CTPF2005R_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKBJ773701C0_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKBJ773701C0_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKBJ773701C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKBJ773701C0_REQUEST_HEADER_TR_CONT
    custtype?:  FHKBJ773701C0_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKBJ773400C0_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKBJ773400C0_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKBJ773400C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKBJ773400C0_REQUEST_HEADER_TR_CONT
    custtype?:  FHKBJ773400C0_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKBJ773403C0_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKBJ773403C0_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKBJ773403C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKBJ773403C0_REQUEST_HEADER_TR_CONT
    custtype?:  FHKBJ773403C0_REQUEST_HEADER_CUSTTYPE
    seq_no?:  string
    mac_address?:  string
    phone_number?:  string
    ip_addr?:  string
    hashkey?:  string
    gt_uid?:  string
}

export type FHKBJ773404C0_REQUEST_HEADER_TR_CONT = ' ' | 'N';
export type FHKBJ773404C0_REQUEST_HEADER_CUSTTYPE = 'B' | 'P';
export interface FHKBJ773404C0_REQUEST_HEADER {
    'content-type'?:  string
    authorization?:  string
    appkey?:  string
    appsecret?:  string
    personalseckey?:  string
    tr_id?:  string
    tr_cont?:  FHKBJ773404C0_REQUEST_HEADER_TR_CONT
    custtype?:  FHKBJ773404C0_REQUEST_HEADER_CUSTTYPE
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


export interface HASHKEY_REQUEST_BODY_JSONBODY {
}


export interface HASHKEY_REQUEST_BODY {
    JsonBody?:  HASHKEY_REQUEST_BODY_JSONBODY
}


export interface TOKENP_REQUEST_BODY {
}


export interface REVOKEP_REQUEST_BODY {
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

export type TTTC8908R_REQUEST_BODY_ORD_DVSN = '00' | '증거금율이 반영되는 01' | '00' | '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '51' | '52' | '62' | '63' | '67' | '69' | '72' | '77' | '79' | '80';
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

export type VTTC8908R_REQUEST_BODY_ORD_DVSN = '00' | '증거금율이 반영되는 01' | '00' | '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '51' | '52' | '62' | '63' | '67' | '69' | '72' | '77' | '79' | '80';
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

export type CTSC0004R_REQUEST_BODY_PRCS_DVSN_CD = '0' | '1' | '2';
export interface CTSC0004R_REQUEST_BODY {
    RSVN_ORD_ORD_DT?:  string
    RSVN_ORD_END_DT?:  string
    RSVN_ORD_SEQ?:  string
    TMNL_MDIA_KIND_CD?:  string
    CANO?:  string
    ACNT_PRDT_CD?:  string
    PRCS_DVSN_CD?:  CTSC0004R_REQUEST_BODY_PRCS_DVSN_CD
    CNCL_YN?:  string
    PDNO?:  string
    SLL_BUY_DVSN_CD?:  string
    CTX_AREA_FK200?:  string
    CTX_AREA_NK200?:  string
}


export interface TTTC2202R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    USER_DVSN_CD?:  string
    CTX_AREA_FK100?:  string
    CTX_AREA_NK100?:  string
}

export type TTTC2201R_REQUEST_BODY_INQR_DVSN_3 = '00';
export interface TTTC2201R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    USER_DVSN_CD?:  string
    SLL_BUY_DVSN_CD?:  string
    CCLD_NCCS_DVSN?:  string
    INQR_DVSN_3?:  TTTC2201R_REQUEST_BODY_INQR_DVSN_3
    CTX_AREA_FK100?:  string
    CTX_AREA_NK100?:  string
}


export interface TTTC0503R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    PDNO?:  string
    ACCA_DVSN_CD?:  string
    CMA_EVLU_AMT_ICLD_YN?:  string
    ORD_DVSN?:  string
    ORD_UNPR?:  string
}


export interface TTTC0506R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    ACCA_DVSN_CD?:  string
}

export type TTTC2208R_REQUEST_BODY_INQR_DVSN = '00';
export interface TTTC2208R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    ACCA_DVSN_CD?:  string
    INQR_DVSN?:  TTTC2208R_REQUEST_BODY_INQR_DVSN
    CTX_AREA_FK100?:  string
    CTX_AREA_NK100?:  string
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

export type TTTC8715R_REQUEST_BODY_SORT_DVSN = '00' | '01' | '02';
export type TTTC8715R_REQUEST_BODY_CBLC_DVSN = '00';
export interface TTTC8715R_REQUEST_BODY {
    CANO?:  string
    SORT_DVSN?:  TTTC8715R_REQUEST_BODY_SORT_DVSN
    ACNT_PRDT_CD?:  string
    PDNO?:  string
    INQR_STRT_DT?:  string
    INQR_END_DT?:  string
    CTX_AREA_NK100?:  string
    CBLC_DVSN?:  TTTC8715R_REQUEST_BODY_CBLC_DVSN
    CTX_AREA_FK100?:  string
}

export type TTTC8708R_REQUEST_BODY_SORT_DVSN = '00' | '01' | '02';
export type TTTC8708R_REQUEST_BODY_CBLC_DVSN = '00';
export interface TTTC8708R_REQUEST_BODY {
    ACNT_PRDT_CD?:  string
    CANO?:  string
    INQR_STRT_DT?:  string
    PDNO?:  string
    CTX_AREA_NK100?:  string
    INQR_END_DT?:  string
    SORT_DVSN?:  TTTC8708R_REQUEST_BODY_SORT_DVSN
    INQR_DVSN?:  string
    CBLC_DVSN?:  TTTC8708R_REQUEST_BODY_CBLC_DVSN
    CTX_AREA_FK100?:  string
}


export interface TTTC8408R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    PDNO?:  string
}


export interface TTTC0869R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    CMA_EVLU_AMT_ICLD_YN?:  string
    WCRC_FRCR_DVSN_CD?:  string
    FWEX_CTRT_FRCR_DVSN_CD?:  string
}


export interface CTRGA011R_REQUEST_BODY {
    INQR_DVSN?:  string
    CUST_RNCNO25?:  string
    HMID?:  string
    CANO?:  string
    ACNT_PRDT_CD?:  string
    INQR_STRT_DT?:  string
    INQR_END_DT?:  string
    RGHT_TYPE_CD?:  string
    PDNO?:  string
    PRDT_TYPE_CD?:  string
    CTX_AREA_NK100?:  string
    CTX_AREA_FK100?:  string
}

export type FHKST01010100_REQUEST_BODY_FID_COND_MRKT_DIV_CODE = 'J' | 'W';
export interface FHKST01010100_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  FHKST01010100_REQUEST_BODY_FID_COND_MRKT_DIV_CODE
    FID_INPUT_ISCD?:  string
}

export type FHKST01010300_REQUEST_BODY_FID_COND_MRKT_DIV_CODE = 'J' | 'W';
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

export type FHKST03010200_REQUEST_BODY_FID_COND_MRKT_DIV_CODE = '(J' | 'ETN  U';
export type FHKST03010200_REQUEST_BODY_FID_PW_DATA_INCU_YN = 'N' | 'Y' | '(조회시점이 083000(오전8';
export interface FHKST03010200_REQUEST_BODY {
    FID_ETC_CLS_CODE?:  string
    FID_COND_MRKT_DIV_CODE?:  FHKST03010200_REQUEST_BODY_FID_COND_MRKT_DIV_CODE
    FID_INPUT_ISCD?:  string
    FID_INPUT_HOUR_1?:  string
    FID_PW_DATA_INCU_YN?:  FHKST03010200_REQUEST_BODY_FID_PW_DATA_INCU_YN
}

export type FHPST01010000_REQUEST_BODY_FID_COND_MRKT_DIV_CODE = 'J';
export interface FHPST01010000_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  FHPST01010000_REQUEST_BODY_FID_COND_MRKT_DIV_CODE
    FID_INPUT_ISCD?:  string
}


export interface FHPST02400000_REQUEST_BODY {
    fid_input_iscd?:  string
    fid_cond_mrkt_div_code?:  string
}


export interface FHPST02440000_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_INPUT_ISCD?:  string
}


export interface FHPST02440100_REQUEST_BODY {
    fid_hour_cls_code?:  string
    fid_cond_mrkt_div_code?:  string
    fid_input_iscd?:  string
}

export type FHKST117300C0_REQUEST_BODY_FID_RANK_SORT_CLS_CODE = '0' | '1' | '2' | '3' | '4';
export type FHKST117300C0_REQUEST_BODY_FID_INPUT_ISCD = '0000' | '0001' | '1001' | '2001' | '4001';
export type FHKST117300C0_REQUEST_BODY_FID_BLNG_CLS_CODE = '0' | '1';
export interface FHKST117300C0_REQUEST_BODY {
    FID_RANK_SORT_CLS_CODE?:  FHKST117300C0_REQUEST_BODY_FID_RANK_SORT_CLS_CODE
    FID_COND_MRKT_DIV_CODE?:  string
    FID_COND_SCR_DIV_CODE?:  string
    FID_INPUT_ISCD?:  FHKST117300C0_REQUEST_BODY_FID_INPUT_ISCD
    FID_BLNG_CLS_CODE?:  FHKST117300C0_REQUEST_BODY_FID_BLNG_CLS_CODE
}


export interface FHKST121600C0_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_INPUT_ISCD?:  string
    FID_COND_SCR_DIV_CODE?:  string
}


export interface FHPST02300000_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_INPUT_ISCD?:  string
}


export interface FHPST02300400_REQUEST_BODY {
    FID_INPUT_ISCD?:  string
    FID_COND_MRKT_DIV_CODE?:  string
}


export interface FHKST03010230_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_INPUT_ISCD?:  string
    FID_INPUT_DATE_1?:  string
    FID_INPUT_HOUR_1?:  string
    FID_PW_DATA_INCU_YN?:  string
    FID_FAKE_TICK_INCU_YN?:  string
}

export type FHKEW15010000_REQUEST_BODY_FID_COND_MRKT_DIV_CODE = 'W';
export interface FHKEW15010000_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  FHKEW15010000_REQUEST_BODY_FID_COND_MRKT_DIV_CODE
    FID_INPUT_ISCD?:  string
}


export interface FHPEW02770000_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_COND_SCR_DIV_CODE?:  string
    FID_UNAS_INPUT_ISCD?:  string
    FID_INPUT_ISCD?:  string
    FID_INPUT_RMNN_DYNU_1?:  string
    FID_DIV_CLS_CODE?:  string
    FID_INPUT_PRICE_1?:  string
    FID_INPUT_PRICE_2?:  string
    FID_INPUT_VOL_1?:  string
    FID_INPUT_VOL_2?:  string
    FID_INPUT_DATE_1?:  string
    FID_RANK_SORT_CLS_CODE?:  string
    FID_BLNG_CLS_CODE?:  string
    FID_INPUT_DATE_2?:  string
}

export type FHPEW02780000_REQUEST_BODY_FID_BLNG_CLS_CODE = '0';
export interface FHPEW02780000_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_COND_SCR_DIV_CODE?:  string
    FID_UNAS_INPUT_ISCD?:  string
    FID_INPUT_ISCD?:  string
    FID_INPUT_RMNN_DYNU_1?:  string
    FID_DIV_CLS_CODE?:  string
    FID_INPUT_PRICE_1?:  string
    FID_INPUT_PRICE_2?:  string
    FID_INPUT_VOL_1?:  string
    FID_INPUT_VOL_2?:  string
    FID_INPUT_DATE_1?:  string
    FID_RANK_SORT_CLS_CODE?:  string
    FID_BLNG_CLS_CODE?:  FHPEW02780000_REQUEST_BODY_FID_BLNG_CLS_CODE
    FID_INPUT_ISCD_2?:  string
    FID_INPUT_DATE_2?:  string
}


export interface FHPEW02790000_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_COND_SCR_DIV_CODE?:  string
    FID_UNAS_INPUT_ISCD?:  string
    FID_INPUT_ISCD?:  string
    FID_DIV_CLS_CODE?:  string
    FID_INPUT_PRICE_1?:  string
    FID_INPUT_PRICE_2?:  string
    FID_INPUT_VOL_1?:  string
    FID_INPUT_VOL_2?:  string
    FID_RANK_SORT_CLS_CODE?:  string
    FID_BLNG_CLS_CODE?:  string
}


export interface FHPEW02850000_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_COND_SCR_DIV_CODE?:  string
    FID_UNAS_INPUT_ISCD?:  string
    FID_INPUT_ISCD?:  string
    FID_DIV_CLS_CODE?:  string
    FID_INPUT_PRICE_1?:  string
    FID_INPUT_PRICE_2?:  string
    FID_INPUT_VOL_1?:  string
    FID_INPUT_VOL_2?:  string
    FID_RANK_SORT_CLS_CODE?:  string
    FID_INPUT_RMNN_DYNU_1?:  string
    FID_INPUT_DATE_1?:  string
    FID_BLNG_CLS_CODE?:  string
}


export interface FHPEW02870000_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_COND_SCR_DIV_CODE?:  string
    FID_UNAS_INPUT_ISCD?:  string
    FID_INPUT_ISCD?:  string
    FID_MRKT_CLS_CODE?:  string
    FID_INPUT_PRICE_1?:  string
    FID_INPUT_PRICE_2?:  string
    FID_INPUT_VOL_1?:  string
    FID_INPUT_VOL_2?:  string
    FID_HOUR_CLS_CODE?:  string
    FID_INPUT_HOUR_1?:  string
    FID_INPUT_HOUR_2?:  string
    FID_RANK_SORT_CLS_CODE?:  string
    FID_BLNG_CLS_CODE?:  string
}


export interface FHPEW02840100_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_INPUT_ISCD?:  string
}


export interface FHKEW154800C0_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_COND_SCR_DIV_CODE?:  string
    FID_DIV_CLS_CODE?:  string
    FID_UNAS_INPUT_ISCD?:  string
    FID_INPUT_ISCD_2?:  string
    FID_INPUT_DATE_1?:  string
    FID_BLNC_CLS_CODE?:  string
}


export interface FHPEW02840300_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_INPUT_ISCD?:  string
    FID_HOUR_CLS_CODE?:  string
    FID_PW_DATA_INCU_YN?:  string
}


export interface FHPEW02740100_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_INPUT_ISCD?:  string
}


export interface FHPEW02740300_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_INPUT_ISCD?:  string
    FID_HOUR_CLS_CODE?:  string
    FID_PW_DATA_INCU_YN?:  string
}


export interface FHPEW02830100_REQUEST_BODY {
}


export interface FHPEW02840200_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_INPUT_ISCD?:  string
}

export type FHKEW154101C0_REQUEST_BODY_FID_TRGT_EXLS_CLS_CODE = '거래불가종목제외(0' | '1';
export type FHKEW154101C0_REQUEST_BODY_FID_OPTION = '옵션상태(0' | '1' | '2' | '3';
export interface FHKEW154101C0_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_COND_SCR_DIV_CODE?:  string
    FID_MRKT_CLS_CODE?:  string
    FID_INPUT_ISCD?:  string
    FID_UNAS_INPUT_ISCD?:  string
    FID_VOL_CNT?:  string
    FID_TRGT_EXLS_CLS_CODE?:  FHKEW154101C0_REQUEST_BODY_FID_TRGT_EXLS_CLS_CODE
    FID_INPUT_PRICE_1?:  string
    FID_INPUT_PRICE_2?:  string
    FID_INPUT_VOL_1?:  string
    FID_INPUT_VOL_2?:  string
    FID_INPUT_RMNN_DYNU_1?:  string
    FID_INPUT_RMNN_DYNU_2?:  string
    FID_OPTION?:  FHKEW154101C0_REQUEST_BODY_FID_OPTION
    FID_INPUT_OPTION_1?:  string
    FID_INPUT_OPTION_2?:  string
}


export interface FHPEW02740200_REQUEST_BODY {
    FID_INPUT_ISCD?:  string
    FID_INPUT_ISCD_2?:  string
}


export interface FHPEW02830200_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_INPUT_ISCD?:  string
}


export interface FHPEW02840400_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_INPUT_ISCD?:  string
}


export interface FHPEW03760000_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_INPUT_ISCD?:  string
}


export interface FHKEW151701C0_REQUEST_BODY {
    FID_COND_SCR_DIV_CODE?:  string
    FID_INPUT_ISCD?:  string
}

export type FHKEW15100000_REQUEST_BODY_FID_TRGT_CLS_CODE = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
export type FHKEW15100000_REQUEST_BODY_FID_DIV_CLS_CODE = '0' | '1' | '2';
export interface FHKEW15100000_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_COND_SCR_DIV_CODE?:  string
    FID_RANK_SORT_CLS_CODE?:  string
    FID_INPUT_CNT_1?:  string
    FID_RANK_SORT_CLS_CODE_2?:  string
    FID_INPUT_CNT_2?:  string
    FID_RANK_SORT_CLS_CODE_3?:  string
    FID_INPUT_CNT_3?:  string
    FID_TRGT_CLS_CODE?:  FHKEW15100000_REQUEST_BODY_FID_TRGT_CLS_CODE
    FID_INPUT_ISCD?:  string
    FID_UNAS_INPUT_ISCD?:  string
    FID_MRKT_CLS_CODE?:  string
    FID_INPUT_DATE_1?:  string
    FID_INPUT_DATE_2?:  string
    FID_INPUT_ISCD_2?:  string
    FID_ETC_CLS_CODE?:  string
    FID_INPUT_RMNN_DYNU_1?:  string
    FID_INPUT_RMNN_DYNU_2?:  string
    FID_PRPR_CNT1?:  string
    FID_PRPR_CNT2?:  string
    FID_RSFL_RATE1?:  string
    FID_RSFL_RATE2?:  string
    FID_VOL1?:  string
    FID_VOL2?:  string
    FID_APLY_RANG_PRC_1?:  string
    FID_APLY_RANG_PRC_2?:  string
    FID_LVRG_VAL1?:  string
    FID_LVRG_VAL2?:  string
    FID_VOL3?:  string
    FID_VOL4?:  string
    FID_INTS_VLTL1?:  string
    FID_INTS_VLTL2?:  string
    FID_PRMM_VAL1?:  string
    FID_PRMM_VAL2?:  string
    FID_GEAR1?:  string
    FID_GEAR2?:  string
    FID_PRLS_QRYR_RATE1?:  string
    FID_PRLS_QRYR_RATE2?:  string
    FID_DELTA1?:  string
    FID_DELTA2?:  string
    FID_ACPR1?:  string
    FID_ACPR2?:  string
    FID_STCK_CNVR_RATE1?:  string
    FID_STCK_CNVR_RATE2?:  string
    FID_DIV_CLS_CODE?:  FHKEW15100000_REQUEST_BODY_FID_DIV_CLS_CODE
    FID_PRIT1?:  string
    FID_PRIT2?:  string
    FID_CFP1?:  string
    FID_CFP2?:  string
    FID_INPUT_NMIX_PRICE_1?:  string
    FID_INPUT_NMIX_PRICE_2?:  string
    FID_EGEA_VAL1?:  string
    FID_EGEA_VAL2?:  string
    FID_INPUT_DVDN_ERT?:  string
    FID_INPUT_HIST_VLTL?:  string
    FID_THETA1?:  string
    FID_THETA2?:  string
}


export interface FHKEW154100C0_REQUEST_BODY {
    FID_COND_SCR_DIV_CODE?:  string
    FID_RANK_SORT_CLS_CODE?:  string
    FID_INPUT_ISCD?:  string
}


export interface FHKEW154700C0_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_COND_SCR_DIV_CODE?:  string
    FID_INPUT_DATE_1?:  string
    FID_INPUT_DATE_2?:  string
    FID_DIV_CLS_CODE?:  string
    FID_ETC_CLS_CODE?:  string
    FID_UNAS_INPUT_ISCD?:  string
    FID_INPUT_ISCD_2?:  string
    FID_BLNG_CLS_CODE?:  string
    FID_INPUT_OPTION_1?:  string
}

export type FHKUP03500100_REQUEST_BODY_FID_COND_MRKT_DIV_CODE = '업종';
export type FHKUP03500100_REQUEST_BODY_FID_INPUT_ISCD = '0001' | '0002' | '포탈 (FAQ';
export type FHKUP03500100_REQUEST_BODY_FID_PERIOD_DIV_CODE = 'M' | 'Y';
export interface FHKUP03500100_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  FHKUP03500100_REQUEST_BODY_FID_COND_MRKT_DIV_CODE
    FID_INPUT_ISCD?:  FHKUP03500100_REQUEST_BODY_FID_INPUT_ISCD
    FID_INPUT_DATE_1?:  string
    FID_INPUT_DATE_2?:  string
    FID_PERIOD_DIV_CODE?:  FHKUP03500100_REQUEST_BODY_FID_PERIOD_DIV_CODE
}


export interface CTCA0903R_REQUEST_BODY {
    BASS_DT?:  string
    CTX_AREA_NK?:  string
    CTX_AREA_FK?:  string
}

export type FHKUP03500200_REQUEST_BODY_FID_INPUT_ISCD = '0001' | '0002' | '포탈 (FAQ';
export interface FHKUP03500200_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_ETC_CLS_CODE?:  string
    FID_INPUT_ISCD?:  FHKUP03500200_REQUEST_BODY_FID_INPUT_ISCD
    FID_INPUT_HOUR_1?:  string
    FID_PW_DATA_INCU_YN?:  string
}


export interface FHPST01390000_REQUEST_BODY {
    FID_DIV_CLS_CODE?:  string
    FID_COND_SCR_DIV_CODE?:  string
    FID_MRKT_CLS_CODE?:  string
    FID_INPUT_ISCD?:  string
    FID_RANK_SORT_CLS_CODE?:  string
    FID_INPUT_DATE_1?:  string
    FID_TRGT_CLS_CODE?:  string
    FID_TRGT_EXLS_CLS_CODE?:  string
}

export type FHPUP02100000_REQUEST_BODY_FID_INPUT_ISCD = '포탈 (FAQ';
export interface FHPUP02100000_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_INPUT_ISCD?:  FHPUP02100000_REQUEST_BODY_FID_INPUT_ISCD
}

export type FHPUP02120000_REQUEST_BODY_FID_PERIOD_DIV_CODE = '일/주/월 구분코드 ( D' | 'W' | 'M';
export type FHPUP02120000_REQUEST_BODY_FID_INPUT_ISCD = '포탈 (FAQ';
export interface FHPUP02120000_REQUEST_BODY {
    FID_PERIOD_DIV_CODE?:  FHPUP02120000_REQUEST_BODY_FID_PERIOD_DIV_CODE
    FID_COND_MRKT_DIV_CODE?:  string
    FID_INPUT_ISCD?:  FHPUP02120000_REQUEST_BODY_FID_INPUT_ISCD
    FID_INPUT_DATE_1?:  string
}

export type FHPUP02140000_REQUEST_BODY_FID_INPUT_ISCD = '포탈 (FAQ';
export type FHPUP02140000_REQUEST_BODY_FID_MRKT_CLS_CODE = '시장구분코드(K' | 'Q' | 'K2';
export interface FHPUP02140000_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_INPUT_ISCD?:  FHPUP02140000_REQUEST_BODY_FID_INPUT_ISCD
    FID_COND_SCR_DIV_CODE?:  string
    FID_MRKT_CLS_CODE?:  FHPUP02140000_REQUEST_BODY_FID_MRKT_CLS_CODE
    FID_BLNG_CLS_CODE?:  string
}

export type FHKUP11750000_REQUEST_BODY_FID_INPUT_ISCD = '0000' | '0001' | '1001' | '2001' | '4001';
export type FHKUP11750000_REQUEST_BODY_FID_MKOP_CLS_CODE = '1' | '2';
export interface FHKUP11750000_REQUEST_BODY {
    fid_mrkt_cls_code?:  string
    fid_cond_mrkt_div_code?:  string
    fid_cond_scr_div_code?:  string
    fid_input_iscd?:  FHKUP11750000_REQUEST_BODY_FID_INPUT_ISCD
    fid_mkop_cls_code?:  FHKUP11750000_REQUEST_BODY_FID_MKOP_CLS_CODE
}

export type FHPUP02110100_REQUEST_BODY_FID_INPUT_ISCD = '0001' | '1001' | '2001' | '3003';
export interface FHPUP02110100_REQUEST_BODY {
    FID_INPUT_ISCD?:  FHPUP02110100_REQUEST_BODY_FID_INPUT_ISCD
    FID_COND_MRKT_DIV_CODE?:  string
}

export type FHPUP02110200_REQUEST_BODY_FID_INPUT_ISCD = '0001' | '1001' | '2001' | '3003';
export interface FHPUP02110200_REQUEST_BODY {
    FID_INPUT_HOUR_1?:  string
    FID_INPUT_ISCD?:  FHPUP02110200_REQUEST_BODY_FID_INPUT_ISCD
    FID_COND_MRKT_DIV_CODE?:  string
}

export type FHPST01840000_REQUEST_BODY_FID_MKOP_CLS_CODE = '1' | '2';
export type FHPST01840000_REQUEST_BODY_FID_INPUT_ISCD = '0000' | '0001' | '1001' | '2001' | '4001';
export interface FHPST01840000_REQUEST_BODY {
    FID_MKOP_CLS_CODE?:  FHPST01840000_REQUEST_BODY_FID_MKOP_CLS_CODE
    FID_INPUT_HOUR_1?:  string
    FID_INPUT_ISCD?:  FHPST01840000_REQUEST_BODY_FID_INPUT_ISCD
    FID_COND_MRKT_DIV_CODE?:  string
}

export type FHPST07020000_REQUEST_BODY_FID_DIV_CLS_CODE = '1';
export type FHPST07020000_REQUEST_BODY_FID_DIV_CLS_CODE1 = ' ';
export interface FHPST07020000_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_COND_SCR_DIV_CODE?:  string
    FID_DIV_CLS_CODE?:  FHPST07020000_REQUEST_BODY_FID_DIV_CLS_CODE
    FID_DIV_CLS_CODE1?:  FHPST07020000_REQUEST_BODY_FID_DIV_CLS_CODE1
}

export type FHKST01011800_REQUEST_BODY_FID_INPUT_ISCD = ' ' | '종목코드';
export type FHKST01011800_REQUEST_BODY_FID_INPUT_DATE_1 = ' ';
export type FHKST01011800_REQUEST_BODY_FID_INPUT_HOUR_1 = ' ';
export interface FHKST01011800_REQUEST_BODY {
    FID_NEWS_OFER_ENTP_CODE?:  string
    FID_COND_MRKT_CLS_CODE?:  string
    FID_INPUT_ISCD?:  FHKST01011800_REQUEST_BODY_FID_INPUT_ISCD
    FID_TITL_CNTT?:  string
    FID_INPUT_DATE_1?:  FHKST01011800_REQUEST_BODY_FID_INPUT_DATE_1
    FID_INPUT_HOUR_1?:  FHKST01011800_REQUEST_BODY_FID_INPUT_HOUR_1
    FID_RANK_SORT_CLS_CODE?:  string
    FID_INPUT_SRNO?:  string
}


export interface HHMCM000002C0_REQUEST_BODY {
}


export interface CTPF1604R_REQUEST_BODY {
    PDNO?:  string
    PRDT_TYPE_CD?:  string
}

export type CTPF1002R_REQUEST_BODY_PRDT_TYPE_CD = '300' | '301' | '302' | '306';
export interface CTPF1002R_REQUEST_BODY {
    PRDT_TYPE_CD?:  CTPF1002R_REQUEST_BODY_PRDT_TYPE_CD
    PDNO?:  string
}

export type FHKST66430100_REQUEST_BODY_FID_DIV_CLS_CODE = '0' | '1';
export type FHKST66430100_REQUEST_BODY_FID_INPUT_ISCD = '000660';
export interface FHKST66430100_REQUEST_BODY {
    FID_DIV_CLS_CODE?:  FHKST66430100_REQUEST_BODY_FID_DIV_CLS_CODE
    fid_cond_mrkt_div_code?:  string
    fid_input_iscd?:  FHKST66430100_REQUEST_BODY_FID_INPUT_ISCD
}

export type FHKST66430200_REQUEST_BODY_FID_DIV_CLS_CODE = '0' | '1';
export type FHKST66430200_REQUEST_BODY_FID_INPUT_ISCD = '000660';
export interface FHKST66430200_REQUEST_BODY {
    FID_DIV_CLS_CODE?:  FHKST66430200_REQUEST_BODY_FID_DIV_CLS_CODE
    fid_cond_mrkt_div_code?:  string
    fid_input_iscd?:  FHKST66430200_REQUEST_BODY_FID_INPUT_ISCD
}

export type FHKST66430300_REQUEST_BODY_FID_DIV_CLS_CODE = '0' | '1';
export type FHKST66430300_REQUEST_BODY_FID_INPUT_ISCD = '000660';
export interface FHKST66430300_REQUEST_BODY {
    FID_DIV_CLS_CODE?:  FHKST66430300_REQUEST_BODY_FID_DIV_CLS_CODE
    fid_cond_mrkt_div_code?:  string
    fid_input_iscd?:  FHKST66430300_REQUEST_BODY_FID_INPUT_ISCD
}

export type FHKST66430400_REQUEST_BODY_FID_INPUT_ISCD = '000660';
export type FHKST66430400_REQUEST_BODY_FID_DIV_CLS_CODE = '0' | '1';
export interface FHKST66430400_REQUEST_BODY {
    fid_input_iscd?:  FHKST66430400_REQUEST_BODY_FID_INPUT_ISCD
    FID_DIV_CLS_CODE?:  FHKST66430400_REQUEST_BODY_FID_DIV_CLS_CODE
    fid_cond_mrkt_div_code?:  string
}

export type FHKST66430500_REQUEST_BODY_FID_INPUT_ISCD = '000660';
export type FHKST66430500_REQUEST_BODY_FID_DIV_CLS_CODE = '0' | '1';
export interface FHKST66430500_REQUEST_BODY {
    fid_input_iscd?:  FHKST66430500_REQUEST_BODY_FID_INPUT_ISCD
    fid_div_cls_code?:  FHKST66430500_REQUEST_BODY_FID_DIV_CLS_CODE
    fid_cond_mrkt_div_code?:  string
}

export type FHKST66430600_REQUEST_BODY_FID_INPUT_ISCD = '000660';
export type FHKST66430600_REQUEST_BODY_FID_DIV_CLS_CODE = '0' | '1';
export interface FHKST66430600_REQUEST_BODY {
    fid_input_iscd?:  FHKST66430600_REQUEST_BODY_FID_INPUT_ISCD
    fid_div_cls_code?:  FHKST66430600_REQUEST_BODY_FID_DIV_CLS_CODE
    fid_cond_mrkt_div_code?:  string
}

export type FHKST66430800_REQUEST_BODY_FID_INPUT_ISCD = 'ex';
export type FHKST66430800_REQUEST_BODY_FID_DIV_CLS_CODE = '0' | '1';
export interface FHKST66430800_REQUEST_BODY {
    fid_input_iscd?:  FHKST66430800_REQUEST_BODY_FID_INPUT_ISCD
    fid_div_cls_code?:  FHKST66430800_REQUEST_BODY_FID_DIV_CLS_CODE
    fid_cond_mrkt_div_code?:  string
}

export type FHPST04770000_REQUEST_BODY_FID_RANK_SORT_CLS_CODE = '0' | '1';
export type FHPST04770000_REQUEST_BODY_FID_SLCT_YN = '0' | '1';
export type FHPST04770000_REQUEST_BODY_FID_INPUT_ISCD = '0000' | '0001' | '1001' | '2001' | '4001';
export interface FHPST04770000_REQUEST_BODY {
    fid_rank_sort_cls_code?:  FHPST04770000_REQUEST_BODY_FID_RANK_SORT_CLS_CODE
    fid_slct_yn?:  FHPST04770000_REQUEST_BODY_FID_SLCT_YN
    fid_input_iscd?:  FHPST04770000_REQUEST_BODY_FID_INPUT_ISCD
    fid_cond_scr_div_code?:  string
    fid_cond_mrkt_div_code?:  string
}

export type HHKDB669102C0_REQUEST_BODY_GB1 = '0' | '1' | '2';
export type HHKDB669102C0_REQUEST_BODY_SHT_CD = ' ' | '특정종목 조회시';
export interface HHKDB669102C0_REQUEST_BODY {
    CTS?:  string
    GB1?:  HHKDB669102C0_REQUEST_BODY_GB1
    F_DT?:  string
    T_DT?:  string
    SHT_CD?:  HHKDB669102C0_REQUEST_BODY_SHT_CD
    HIGH_GB?:  string
}

export type HHKDB669103C0_REQUEST_BODY_SHT_CD = ' ' | '특정종목 조회시';
export interface HHKDB669103C0_REQUEST_BODY {
    SHT_CD?:  HHKDB669103C0_REQUEST_BODY_SHT_CD
    T_DT?:  string
    F_DT?:  string
    CTS?:  string
}

export type HHKDB669104C0_REQUEST_BODY_SHT_CD = ' ' | '특정종목 조회시';
export interface HHKDB669104C0_REQUEST_BODY {
    CTS?:  string
    F_DT?:  string
    T_DT?:  string
    SHT_CD?:  HHKDB669104C0_REQUEST_BODY_SHT_CD
}

export type HHKDB669105C0_REQUEST_BODY_SHT_CD = ' ' | '특정종목 조회시';
export type HHKDB669105C0_REQUEST_BODY_MARKET_GB = '0' | '1' | '2';
export interface HHKDB669105C0_REQUEST_BODY {
    SHT_CD?:  HHKDB669105C0_REQUEST_BODY_SHT_CD
    CTS?:  string
    F_DT?:  string
    T_DT?:  string
    MARKET_GB?:  HHKDB669105C0_REQUEST_BODY_MARKET_GB
}

export type HHKDB669106C0_REQUEST_BODY_SHT_CD = ' ' | '특정종목 조회시';
export interface HHKDB669106C0_REQUEST_BODY {
    CTS?:  string
    F_DT?:  string
    T_DT?:  string
    SHT_CD?:  HHKDB669106C0_REQUEST_BODY_SHT_CD
}

export type HHKDB669107C0_REQUEST_BODY_SHT_CD = ' ' | '특정종목 조회시';
export interface HHKDB669107C0_REQUEST_BODY {
    SHT_CD?:  HHKDB669107C0_REQUEST_BODY_SHT_CD
    T_DT?:  string
    F_DT?:  string
    CTS?:  string
}

export type HHKDB669108C0_REQUEST_BODY_SHT_CD = ' ' | '특정종목 조회시';
export interface HHKDB669108C0_REQUEST_BODY {
    SHT_CD?:  HHKDB669108C0_REQUEST_BODY_SHT_CD
    CTS?:  string
    F_DT?:  string
    T_DT?:  string
}

export type HHKDB669109C0_REQUEST_BODY_SHT_CD = ' ' | '특정종목 조회시';
export interface HHKDB669109C0_REQUEST_BODY {
    SHT_CD?:  HHKDB669109C0_REQUEST_BODY_SHT_CD
    T_DT?:  string
    F_DT?:  string
    CTS?:  string
}

export type HHKDB669110C0_REQUEST_BODY_SHT_CD = ' ' | '특정종목 조회시';
export interface HHKDB669110C0_REQUEST_BODY {
    T_DT?:  string
    SHT_CD?:  HHKDB669110C0_REQUEST_BODY_SHT_CD
    F_DT?:  string
    CTS?:  string
}


export interface HHKDB669100C0_REQUEST_BODY {
    CTS?:  string
    GB1?:  string
    F_DT?:  string
    T_DT?:  string
    SHT_CD?:  string
}

export type HHKDB669101C0_REQUEST_BODY_SHT_CD = ' ' | '특정종목 조회시';
export interface HHKDB669101C0_REQUEST_BODY {
    CTS?:  string
    F_DT?:  string
    T_DT?:  string
    SHT_CD?:  HHKDB669101C0_REQUEST_BODY_SHT_CD
}

export type HHKDB669111C0_REQUEST_BODY_SHT_CD = ' ' | '특정종목 조회시';
export interface HHKDB669111C0_REQUEST_BODY {
    CTS?:  string
    F_DT?:  string
    T_DT?:  string
    SHT_CD?:  HHKDB669111C0_REQUEST_BODY_SHT_CD
}


export interface HHKST668300C0_REQUEST_BODY {
    SHT_CD?:  string
}

export type CTSC2702R_REQUEST_BODY_PDNO = ' ';
export type CTSC2702R_REQUEST_BODY_INQR_DVSN_1 = '0' | '1';
export interface CTSC2702R_REQUEST_BODY {
    EXCG_DVSN_CD?:  string
    PDNO?:  CTSC2702R_REQUEST_BODY_PDNO
    THCO_STLN_PSBL_YN?:  string
    INQR_DVSN_1?:  CTSC2702R_REQUEST_BODY_INQR_DVSN_1
    CTX_AREA_FK200?:  string
    CTX_AREA_NK100?:  string
}


export interface FHKST663300C0_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_COND_SCR_DIV_CODE?:  string
    FID_INPUT_ISCD?:  string
    FID_INPUT_DATE_1?:  string
    FID_INPUT_DATE_2?:  string
}


export interface FHKST663400C0_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_COND_SCR_DIV_CODE?:  string
    FID_INPUT_ISCD?:  string
    FID_DIV_CLS_CODE?:  string
    FID_INPUT_DATE_1?:  string
    FID_INPUT_DATE_2?:  string
}

export type FHPTJ04400000_REQUEST_BODY_FID_INPUT_ISCD = '0000' | '0001' | '1001' | '포탈 (FAQ';
export type FHPTJ04400000_REQUEST_BODY_FID_DIV_CLS_CODE = '0' | '1';
export type FHPTJ04400000_REQUEST_BODY_FID_RANK_SORT_CLS_CODE = '0' | '1';
export interface FHPTJ04400000_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_COND_SCR_DIV_CODE?:  string
    FID_INPUT_ISCD?:  FHPTJ04400000_REQUEST_BODY_FID_INPUT_ISCD
    FID_DIV_CLS_CODE?:  FHPTJ04400000_REQUEST_BODY_FID_DIV_CLS_CODE
    FID_RANK_SORT_CLS_CODE?:  FHPTJ04400000_REQUEST_BODY_FID_RANK_SORT_CLS_CODE
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


export interface HHPTJ04160200_REQUEST_BODY {
    MKSC_SHRN_ISCD?:  string
}


export interface FHKST03010800_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_INPUT_ISCD?:  string
    FID_INPUT_DATE_1?:  string
    FID_INPUT_DATE_2?:  string
    FID_PERIOD_DIV_CODE?:  string
}

export type FHPTJ04030000_REQUEST_BODY_FID_INPUT_ISCD_2 = '- fid_input_iscd' | '포탈 (FAQ';
export type FHPTJ04030000_REQUEST_BODY_FID_INPUT_ISCD = '코스피' | '코스닥' | '풋옵션' | '주식선물' | 'ETF' | 'ELW' | 'ETN' | '미니' | '위클리월' | '위클리목' | '코스닥150';
export interface FHPTJ04030000_REQUEST_BODY {
    fid_input_iscd_2?:  FHPTJ04030000_REQUEST_BODY_FID_INPUT_ISCD_2
    fid_input_iscd?:  FHPTJ04030000_REQUEST_BODY_FID_INPUT_ISCD
}


export interface FHPST04760000_REQUEST_BODY {
    fid_cond_mrkt_div_code?:  string
    fid_cond_scr_div_code?:  string
    fid_input_iscd?:  string
    fid_input_date_1?:  string
}

export type FHPST01810000_REQUEST_BODY_FID_MKOP_CLS_CODE = '0' | '4';
export interface FHPST01810000_REQUEST_BODY {
    fid_mkop_cls_code?:  FHPST01810000_REQUEST_BODY_FID_MKOP_CLS_CODE
    fid_cond_mrkt_div_code?:  string
    fid_input_iscd?:  string
}


export interface FHPST04830000_REQUEST_BODY {
}

export type FHPPG04600000_REQUEST_BODY_FID_MRKT_CLS_CODE = 'K' | 'Q';
export interface FHPPG04600000_REQUEST_BODY {
    FID_MRKT_CLS_CODE?:  FHPPG04600000_REQUEST_BODY_FID_MRKT_CLS_CODE
    FID_INPUT_DATE_1?:  string
    FID_INPUT_DATE_2?:  string
}

export type FHKST11860000_REQUEST_BODY_FID_COND_MRKT_DIV_CODE = '시장구분코드 (J';
export interface FHKST11860000_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  FHKST11860000_REQUEST_BODY_FID_COND_MRKT_DIV_CODE
    FID_COND_SCR_DIV_CODE?:  string
    FID_INPUT_ISCD?:  string
    FID_RANK_SORT_CLS_CODE?:  string
    FID_DIV_CLS_CODE?:  string
    FID_INPUT_PRICE_1?:  string
    FID_INPUT_PRICE_2?:  string
    FID_INPUT_VOL_1?:  string
}

export type FHPPG04600100_REQUEST_BODY_FID_MRKT_CLS_CODE = 'K' | 'Q';
export interface FHPPG04600100_REQUEST_BODY {
    FID_MRKT_CLS_CODE?:  FHPPG04600100_REQUEST_BODY_FID_MRKT_CLS_CODE
    FID_SCTN_CLS_CODE?:  string
}


export interface HHPST074500C0_REQUEST_BODY {
    MRKT_DIV_CLS_CODE?:  string
    MKSC_SHRN_ISCD?:  string
    START_DATE?:  string
    END_DATE?:  string
    CTS?:  string
}


export interface FHKST644100C0_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_COND_SCR_DIV_CODE?:  string
    FID_INPUT_ISCD?:  string
    FID_RANK_SORT_CLS_CODE?:  string
    FID_RANK_SORT_CLS_CODE_2?:  string
}


export interface FHKST644400C0_REQUEST_BODY {
    FID_INPUT_ISCD?:  string
    FID_INPUT_ISCD_2?:  string
}


export interface FHKST111900C0_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_COND_SCR_DIV_CODE?:  string
    FID_INPUT_ISCD?:  string
}


export interface FHKST649100C0_REQUEST_BODY {
    FID_INPUT_DATE_1?:  string
}


export interface FHPTJ04040000_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_INPUT_ISCD?:  string
    FID_INPUT_DATE_1?:  string
    FID_INPUT_ISCD_1?:  string
}


export interface FHPPG04650200_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_INPUT_ISCD?:  string
    FID_INPUT_DATE_1?:  string
}

export type HHPPG046600C0_REQUEST_BODY_MRKT_DIV_CLS_CODE = '1' | '4';
export interface HHPPG046600C0_REQUEST_BODY {
    MRKT_DIV_CLS_CODE?:  HHPPG046600C0_REQUEST_BODY_MRKT_DIV_CLS_CODE
}


export interface HHKCM113004C6_REQUEST_BODY {
    TYPE?:  string
    USER_ID?:  string
    DATA_RANK?:  string
    INTER_GRP_CODE?:  string
    INTER_GRP_NAME?:  string
    HTS_KOR_ISNM?:  string
    CNTG_CLS_CODE?:  string
    FID_ETC_CLS_CODE?:  string
}


export interface HHKCM113004C7_REQUEST_BODY {
    TYPE?:  string
    FID_ETC_CLS_CODE?:  string
    USER_ID?:  string
}


export interface FHKST11300006_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE_1?:  string
    FID_INPUT_ISCD_1?:  string
    FID_COND_MRKT_DIV_CODE_2?:  string
    FID_INPUT_ISCD_2?:  string
    FID_COND_MRKT_DIV_CODE_3?:  string
    FID_INPUT_ISCD_3?:  string
    FID_COND_MRKT_DIV_CODE_4?:  string
    FID_INPUT_ISCD_4?:  string
    FID_COND_MRKT_DIV_CODE_5?:  string
    FID_INPUT_ISCD_5?:  string
    FID_COND_MRKT_DIV_CODE_6?:  string
    FID_INPUT_ISCD_6?:  string
    FID_COND_MRKT_DIV_CODE_7?:  string
    FID_INPUT_ISCD_7?:  string
    FID_COND_MRKT_DIV_CODE_8?:  string
    FID_INPUT_ISCD_8?:  string
    FID_COND_MRKT_DIV_CODE_9?:  string
    FID_INPUT_ISCD_9?:  string
    FID_COND_MRKT_DIV_CODE_10?:  string
    FID_INPUT_ISCD_10?:  string
    FID_COND_MRKT_DIV_CODE_11?:  string
    FID_INPUT_ISCD_11?:  string
    FID_COND_MRKT_DIV_CODE_12?:  string
    FID_INPUT_ISCD_12?:  string
    FID_COND_MRKT_DIV_CODE_13?:  string
    FID_INPUT_ISCD_13?:  string
    FID_COND_MRKT_DIV_CODE_14?:  string
    FID_INPUT_ISCD_14?:  string
    FID_COND_MRKT_DIV_CODE_15?:  string
    FID_INPUT_ISCD_15?:  string
    FID_COND_MRKT_DIV_CODE_16?:  string
    FID_INPUT_ISCD_16?:  string
    FID_COND_MRKT_DIV_CODE_17?:  string
    FID_INPUT_ISCD_17?:  string
    FID_COND_MRKT_DIV_CODE_18?:  string
    FID_INPUT_ISCD_18?:  string
    FID_COND_MRKT_DIV_CODE_19?:  string
    FID_INPUT_ISCD_19?:  string
    FID_COND_MRKT_DIV_CODE_20?:  string
    FID_INPUT_ISCD_20?:  string
    FID_COND_MRKT_DIV_CODE_21?:  string
    FID_INPUT_ISCD_21?:  string
    FID_COND_MRKT_DIV_CODE_22?:  string
    FID_INPUT_ISCD_22?:  string
    FID_COND_MRKT_DIV_CODE_23?:  string
    FID_INPUT_ISCD_23?:  string
    FID_COND_MRKT_DIV_CODE_24?:  string
    FID_INPUT_ISCD_24?:  string
    FID_COND_MRKT_DIV_CODE_25?:  string
    FID_INPUT_ISCD_25?:  string
    FID_COND_MRKT_DIV_CODE_26?:  string
    FID_INPUT_ISCD_26?:  string
    FID_COND_MRKT_DIV_CODE_27?:  string
    FID_INPUT_ISCD_27?:  string
    FID_COND_MRKT_DIV_CODE_28?:  string
    FID_INPUT_ISCD_28?:  string
    FID_COND_MRKT_DIV_CODE_29?:  string
    FID_INPUT_ISCD_29?:  string
    FID_COND_MRKT_DIV_CODE_30?:  string
    FID_INPUT_ISCD_30?:  string
}


export interface FHKST130000C0_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_COND_SCR_DIV_CODE?:  string
    FID_PRC_CLS_CODE?:  string
    FID_DIV_CLS_CODE?:  string
    FID_INPUT_ISCD?:  string
    FID_TRGT_CLS_CODE?:  string
    FID_TRGT_EXLS_CLS_CODE?:  string
    FID_INPUT_PRICE_1?:  string
    FID_INPUT_PRICE_2?:  string
    FID_VOL_CNT?:  string
}


export interface FHPST04320000_REQUEST_BODY {
    FID_COND_SCR_DIV_CODE?:  string
    FID_INPUT_ISCD?:  string
    FID_INPUT_ISCD_2?:  string
    FID_MRKT_CLS_CODE?:  string
    FID_VOL_CNT?:  string
}


export interface FHPST01130000_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_INPUT_ISCD?:  string
    FID_COND_SCR_DIV_CODE?:  string
    FID_INPUT_HOUR_1?:  string
}


export interface FHPST04540000_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_INPUT_ISCD?:  string
    FID_INPUT_ISCD_2?:  string
    FID_INPUT_DATE_1?:  string
    FID_INPUT_DATE_2?:  string
    FID_SCTN_CLS_CODE?:  string
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

export type FHPST01700000_REQUEST_BODY_FID_INPUT_CNT_1 = '0';
export type FHPST01700000_REQUEST_BODY_FID_TRGT_CLS_CODE = '0';
export type FHPST01700000_REQUEST_BODY_FID_TRGT_EXLS_CLS_CODE = '0';
export type FHPST01700000_REQUEST_BODY_FID_DIV_CLS_CODE = '0';
export interface FHPST01700000_REQUEST_BODY {
    fid_rsfl_rate2?:  string
    fid_cond_mrkt_div_code?:  string
    fid_cond_scr_div_code?:  string
    fid_input_iscd?:  string
    fid_rank_sort_cls_code?:  string
    fid_input_cnt_1?:  FHPST01700000_REQUEST_BODY_FID_INPUT_CNT_1
    fid_prc_cls_code?:  string
    fid_input_price_1?:  string
    fid_input_price_2?:  string
    fid_vol_cnt?:  string
    fid_trgt_cls_code?:  FHPST01700000_REQUEST_BODY_FID_TRGT_CLS_CODE
    fid_trgt_exls_cls_code?:  FHPST01700000_REQUEST_BODY_FID_TRGT_EXLS_CLS_CODE
    fid_div_cls_code?:  FHPST01700000_REQUEST_BODY_FID_DIV_CLS_CODE
    fid_rsfl_rate1?:  string
}

export type FHPST01730000_REQUEST_BODY_FID_TRGT_CLS_CODE = '0';
export type FHPST01730000_REQUEST_BODY_FID_INPUT_ISCD = '0000' | '0001' | '1001' | '2001';
export type FHPST01730000_REQUEST_BODY_FID_DIV_CLS_CODE = '0';
export type FHPST01730000_REQUEST_BODY_FID_INPUT_OPTION_2 = '0' | '1' | '2' | '3';
export type FHPST01730000_REQUEST_BODY_FID_BLNG_CLS_CODE = '0';
export type FHPST01730000_REQUEST_BODY_FID_TRGT_EXLS_CLS_CODE = '0';
export interface FHPST01730000_REQUEST_BODY {
    fid_cond_mrkt_div_code?:  string
    fid_trgt_cls_code?:  FHPST01730000_REQUEST_BODY_FID_TRGT_CLS_CODE
    fid_cond_scr_div_code?:  string
    fid_input_iscd?:  FHPST01730000_REQUEST_BODY_FID_INPUT_ISCD
    fid_div_cls_code?:  FHPST01730000_REQUEST_BODY_FID_DIV_CLS_CODE
    fid_input_price_1?:  string
    fid_input_price_2?:  string
    fid_vol_cnt?:  string
    fid_input_option_1?:  string
    fid_input_option_2?:  FHPST01730000_REQUEST_BODY_FID_INPUT_OPTION_2
    fid_rank_sort_cls_code?:  string
    fid_blng_cls_code?:  FHPST01730000_REQUEST_BODY_FID_BLNG_CLS_CODE
    fid_trgt_exls_cls_code?:  FHPST01730000_REQUEST_BODY_FID_TRGT_EXLS_CLS_CODE
}

export type FHPST01740000_REQUEST_BODY_FID_DIV_CLS_CODE = '0' | '1' | '2';
export type FHPST01740000_REQUEST_BODY_FID_INPUT_ISCD = '0000' | '0001' | '1001' | '2001';
export type FHPST01740000_REQUEST_BODY_FID_TRGT_CLS_CODE = '0';
export type FHPST01740000_REQUEST_BODY_FID_TRGT_EXLS_CLS_CODE = '0';
export interface FHPST01740000_REQUEST_BODY {
    fid_input_price_2?:  string
    fid_cond_mrkt_div_code?:  string
    fid_cond_scr_div_code?:  string
    fid_div_cls_code?:  FHPST01740000_REQUEST_BODY_FID_DIV_CLS_CODE
    fid_input_iscd?:  FHPST01740000_REQUEST_BODY_FID_INPUT_ISCD
    fid_trgt_cls_code?:  FHPST01740000_REQUEST_BODY_FID_TRGT_CLS_CODE
    fid_trgt_exls_cls_code?:  FHPST01740000_REQUEST_BODY_FID_TRGT_EXLS_CLS_CODE
    fid_input_price_1?:  string
    fid_vol_cnt?:  string
}

export type FHPST01750000_REQUEST_BODY_FID_TRGT_CLS_CODE = '0';
export type FHPST01750000_REQUEST_BODY_FID_INPUT_ISCD = '0000' | '0001' | '1001' | '2001';
export type FHPST01750000_REQUEST_BODY_FID_DIV_CLS_CODE = '0';
export type FHPST01750000_REQUEST_BODY_FID_INPUT_OPTION_2 = '0' | '1' | '2' | '3';
export type FHPST01750000_REQUEST_BODY_FID_RANK_SORT_CLS_CODE = '7' | '11' | '15' | '20';
export type FHPST01750000_REQUEST_BODY_FID_TRGT_EXLS_CLS_CODE = '0';
export interface FHPST01750000_REQUEST_BODY {
    fid_trgt_cls_code?:  FHPST01750000_REQUEST_BODY_FID_TRGT_CLS_CODE
    fid_cond_mrkt_div_code?:  string
    fid_cond_scr_div_code?:  string
    fid_input_iscd?:  FHPST01750000_REQUEST_BODY_FID_INPUT_ISCD
    fid_div_cls_code?:  FHPST01750000_REQUEST_BODY_FID_DIV_CLS_CODE
    fid_input_price_1?:  string
    fid_input_price_2?:  string
    fid_vol_cnt?:  string
    fid_input_option_1?:  string
    fid_input_option_2?:  FHPST01750000_REQUEST_BODY_FID_INPUT_OPTION_2
    fid_rank_sort_cls_code?:  FHPST01750000_REQUEST_BODY_FID_RANK_SORT_CLS_CODE
    fid_blng_cls_code?:  string
    fid_trgt_exls_cls_code?:  FHPST01750000_REQUEST_BODY_FID_TRGT_EXLS_CLS_CODE
}

export type FHPST01760000_REQUEST_BODY_FID_RANK_SORT_CLS_CODE = '1' | '2' | '3' | '4';
export type FHPST01760000_REQUEST_BODY_FID_DIV_CLS_CODE = '0';
export type FHPST01760000_REQUEST_BODY_FID_INPUT_ISCD = '0000' | '0001' | '1001' | '2001';
export type FHPST01760000_REQUEST_BODY_FID_TRGT_EXLS_CLS_CODE = '0';
export type FHPST01760000_REQUEST_BODY_FID_TRGT_CLS_CODE = '0';
export interface FHPST01760000_REQUEST_BODY {
    fid_input_price_1?:  string
    fid_cond_mrkt_div_code?:  string
    fid_cond_scr_div_code?:  string
    fid_rank_sort_cls_code?:  FHPST01760000_REQUEST_BODY_FID_RANK_SORT_CLS_CODE
    fid_div_cls_code?:  FHPST01760000_REQUEST_BODY_FID_DIV_CLS_CODE
    fid_input_iscd?:  FHPST01760000_REQUEST_BODY_FID_INPUT_ISCD
    fid_trgt_exls_cls_code?:  FHPST01760000_REQUEST_BODY_FID_TRGT_EXLS_CLS_CODE
    fid_trgt_cls_code?:  FHPST01760000_REQUEST_BODY_FID_TRGT_CLS_CODE
    fid_vol_cnt?:  string
    fid_input_price_2?:  string
}

export type FHPST01770000_REQUEST_BODY_FID_DIV_CLS_CODE = '0';
export type FHPST01770000_REQUEST_BODY_FID_INPUT_ISCD = '0000' | '0001' | '1001' | '2001';
export type FHPST01770000_REQUEST_BODY_FID_TRGT_CLS_CODE = '0';
export type FHPST01770000_REQUEST_BODY_FID_TRGT_EXLS_CLS_CODE = '0';
export interface FHPST01770000_REQUEST_BODY {
    fid_vol_cnt?:  string
    fid_cond_mrkt_div_code?:  string
    fid_cond_scr_div_code?:  string
    fid_div_cls_code?:  FHPST01770000_REQUEST_BODY_FID_DIV_CLS_CODE
    fid_input_iscd?:  FHPST01770000_REQUEST_BODY_FID_INPUT_ISCD
    fid_trgt_cls_code?:  FHPST01770000_REQUEST_BODY_FID_TRGT_CLS_CODE
    fid_trgt_exls_cls_code?:  FHPST01770000_REQUEST_BODY_FID_TRGT_EXLS_CLS_CODE
    fid_input_price_1?:  string
    fid_input_price_2?:  string
}

export type FHPST01720000_REQUEST_BODY_FID_RANK_SORT_CLS_CODE = '0' | '1' | '2' | '3';
export type FHPST01720000_REQUEST_BODY_FID_DIV_CLS_CODE = '0';
export type FHPST01720000_REQUEST_BODY_FID_TRGT_CLS_CODE = '0';
export type FHPST01720000_REQUEST_BODY_FID_TRGT_EXLS_CLS_CODE = '0';
export interface FHPST01720000_REQUEST_BODY {
    fid_vol_cnt?:  string
    fid_cond_mrkt_div_code?:  string
    fid_cond_scr_div_code?:  string
    fid_input_iscd?:  string
    fid_rank_sort_cls_code?:  FHPST01720000_REQUEST_BODY_FID_RANK_SORT_CLS_CODE
    fid_div_cls_code?:  FHPST01720000_REQUEST_BODY_FID_DIV_CLS_CODE
    fid_trgt_cls_code?:  FHPST01720000_REQUEST_BODY_FID_TRGT_CLS_CODE
    fid_trgt_exls_cls_code?:  FHPST01720000_REQUEST_BODY_FID_TRGT_EXLS_CLS_CODE
    fid_input_price_1?:  string
    fid_input_price_2?:  string
}

export type FHPST01780000_REQUEST_BODY_FID_DIV_CLS_CODE = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7';
export type FHPST01780000_REQUEST_BODY_FID_RANK_SORT_CLS_CODE = '0' | '1';
export type FHPST01780000_REQUEST_BODY_FID_HOUR_CLS_CODE = '5' | '10' | '20' | '60' | '120';
export type FHPST01780000_REQUEST_BODY_FID_INPUT_ISCD = '0000' | '0001' | '1001' | '2001';
export type FHPST01780000_REQUEST_BODY_FID_TRGT_CLS_CODE = '0';
export type FHPST01780000_REQUEST_BODY_FID_TRGT_EXLS_CLS_CODE = '0';
export interface FHPST01780000_REQUEST_BODY {
    fid_input_price_2?:  string
    fid_cond_mrkt_div_code?:  string
    fid_cond_scr_div_code?:  string
    fid_div_cls_code?:  FHPST01780000_REQUEST_BODY_FID_DIV_CLS_CODE
    fid_rank_sort_cls_code?:  FHPST01780000_REQUEST_BODY_FID_RANK_SORT_CLS_CODE
    fid_hour_cls_code?:  FHPST01780000_REQUEST_BODY_FID_HOUR_CLS_CODE
    fid_input_iscd?:  FHPST01780000_REQUEST_BODY_FID_INPUT_ISCD
    fid_trgt_cls_code?:  FHPST01780000_REQUEST_BODY_FID_TRGT_CLS_CODE
    fid_trgt_exls_cls_code?:  FHPST01780000_REQUEST_BODY_FID_TRGT_EXLS_CLS_CODE
    fid_input_price_1?:  string
    fid_vol_cnt?:  string
}

export type FHPST01790000_REQUEST_BODY_FID_TRGT_CLS_CODE = '0';
export type FHPST01790000_REQUEST_BODY_FID_INPUT_ISCD = '0000' | '0001' | '1001' | '2001';
export type FHPST01790000_REQUEST_BODY_FID_DIV_CLS_CODE = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7';
export type FHPST01790000_REQUEST_BODY_FID_INPUT_OPTION_2 = '0' | '1' | '2' | '3';
export type FHPST01790000_REQUEST_BODY_FID_RANK_SORT_CLS_CODE = '가치분석(23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31';
export type FHPST01790000_REQUEST_BODY_FID_BLNG_CLS_CODE = '0';
export type FHPST01790000_REQUEST_BODY_FID_TRGT_EXLS_CLS_CODE = '0';
export interface FHPST01790000_REQUEST_BODY {
    fid_trgt_cls_code?:  FHPST01790000_REQUEST_BODY_FID_TRGT_CLS_CODE
    fid_cond_mrkt_div_code?:  string
    fid_cond_scr_div_code?:  string
    fid_input_iscd?:  FHPST01790000_REQUEST_BODY_FID_INPUT_ISCD
    fid_div_cls_code?:  FHPST01790000_REQUEST_BODY_FID_DIV_CLS_CODE
    fid_input_price_1?:  string
    fid_input_price_2?:  string
    fid_vol_cnt?:  string
    fid_input_option_1?:  string
    fid_input_option_2?:  FHPST01790000_REQUEST_BODY_FID_INPUT_OPTION_2
    fid_rank_sort_cls_code?:  FHPST01790000_REQUEST_BODY_FID_RANK_SORT_CLS_CODE
    fid_blng_cls_code?:  FHPST01790000_REQUEST_BODY_FID_BLNG_CLS_CODE
    fid_trgt_exls_cls_code?:  FHPST01790000_REQUEST_BODY_FID_TRGT_EXLS_CLS_CODE
}

export type FHPST01680000_REQUEST_BODY_FID_TRGT_EXLS_CLS_CODE = '0';
export type FHPST01680000_REQUEST_BODY_FID_INPUT_ISCD = '0000' | '0001' | '1001' | '2001';
export type FHPST01680000_REQUEST_BODY_FID_TRGT_CLS_CODE = '0';
export interface FHPST01680000_REQUEST_BODY {
    fid_trgt_exls_cls_code?:  FHPST01680000_REQUEST_BODY_FID_TRGT_EXLS_CLS_CODE
    fid_cond_mrkt_div_code?:  string
    fid_cond_scr_div_code?:  string
    fid_input_iscd?:  FHPST01680000_REQUEST_BODY_FID_INPUT_ISCD
    fid_div_cls_code?:  string
    fid_input_price_1?:  string
    fid_input_price_2?:  string
    fid_vol_cnt?:  string
    fid_trgt_cls_code?:  FHPST01680000_REQUEST_BODY_FID_TRGT_CLS_CODE
}

export type FHPST01800000_REQUEST_BODY_FID_INPUT_ISCD_2 = '000000';
export type FHPST01800000_REQUEST_BODY_FID_INPUT_ISCD = '0000' | '0001' | '1001' | '2001';
export type FHPST01800000_REQUEST_BODY_FID_TRGT_CLS_CODE = '0';
export type FHPST01800000_REQUEST_BODY_FID_TRGT_EXLS_CLS_CODE = '0';
export type FHPST01800000_REQUEST_BODY_FID_INPUT_CNT_1 = '순위검색 입력값(1' | '10';
export interface FHPST01800000_REQUEST_BODY {
    fid_input_iscd_2?:  FHPST01800000_REQUEST_BODY_FID_INPUT_ISCD_2
    fid_cond_mrkt_div_code?:  string
    fid_cond_scr_div_code?:  string
    fid_input_iscd?:  FHPST01800000_REQUEST_BODY_FID_INPUT_ISCD
    fid_trgt_cls_code?:  FHPST01800000_REQUEST_BODY_FID_TRGT_CLS_CODE
    fid_trgt_exls_cls_code?:  FHPST01800000_REQUEST_BODY_FID_TRGT_EXLS_CLS_CODE
    fid_input_price_1?:  string
    fid_input_price_2?:  string
    fid_vol_cnt?:  string
    fid_div_cls_code?:  string
    fid_input_cnt_1?:  FHPST01800000_REQUEST_BODY_FID_INPUT_CNT_1
}

export type FHPST01820000_REQUEST_BODY_FID_INPUT_ISCD = '0000' | '0001' | '1001' | '2001' | '4001';
export type FHPST01820000_REQUEST_BODY_FID_BLNG_CLS_CODE = '0';
export interface FHPST01820000_REQUEST_BODY {
    fid_rank_sort_cls_code?:  string
    fid_cond_mrkt_div_code?:  string
    fid_cond_scr_div_code?:  string
    fid_input_iscd?:  FHPST01820000_REQUEST_BODY_FID_INPUT_ISCD
    fid_div_cls_code?:  string
    fid_aply_rang_prc_1?:  string
    fid_vol_cnt?:  string
    fid_pbmn?:  string
    fid_blng_cls_code?:  FHPST01820000_REQUEST_BODY_FID_BLNG_CLS_CODE
    fid_mkop_cls_code?:  string
}

export type FHPST01860000_REQUEST_BODY_FID_TRGT_EXLS_CLS_CODE = '0';
export type FHPST01860000_REQUEST_BODY_FID_DIV_CLS_CODE = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7';
export type FHPST01860000_REQUEST_BODY_FID_RANK_SORT_CLS_CODE = '0' | '1';
export type FHPST01860000_REQUEST_BODY_FID_INPUT_ISCD = '0000' | '0001' | '1001' | '2001' | '4001';
export type FHPST01860000_REQUEST_BODY_FID_TRGT_CLS_CODE = '0';
export type FHPST01860000_REQUEST_BODY_FID_APLY_RANG_VOL = '0' | '100';
export interface FHPST01860000_REQUEST_BODY {
    fid_trgt_exls_cls_code?:  FHPST01860000_REQUEST_BODY_FID_TRGT_EXLS_CLS_CODE
    fid_cond_mrkt_div_code?:  string
    fid_cond_scr_div_code?:  string
    fid_div_cls_code?:  FHPST01860000_REQUEST_BODY_FID_DIV_CLS_CODE
    fid_rank_sort_cls_code?:  FHPST01860000_REQUEST_BODY_FID_RANK_SORT_CLS_CODE
    fid_input_date_1?:  string
    fid_input_date_2?:  string
    fid_input_iscd?:  FHPST01860000_REQUEST_BODY_FID_INPUT_ISCD
    fid_trgt_cls_code?:  FHPST01860000_REQUEST_BODY_FID_TRGT_CLS_CODE
    fid_aply_rang_vol?:  FHPST01860000_REQUEST_BODY_FID_APLY_RANG_VOL
    fid_aply_rang_prc_2?:  string
    fid_aply_rang_prc_1?:  string
}

export type FHPST01870000_REQUEST_BODY_FID_APLY_RANG_VOL = '0' | '100';
export type FHPST01870000_REQUEST_BODY_FID_DIV_CLS_CODE = '0' | '1' | '2' | '3';
export type FHPST01870000_REQUEST_BODY_FID_PRC_CLS_CODE = '0' | '1';
export type FHPST01870000_REQUEST_BODY_FID_INPUT_ISCD = '0000' | '0001' | '1001' | '2001' | '4001';
export type FHPST01870000_REQUEST_BODY_FID_TRGT_CLS_CODE = '0';
export type FHPST01870000_REQUEST_BODY_FID_TRGT_EXLS_CLS_CODE = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7';
export interface FHPST01870000_REQUEST_BODY {
    fid_aply_rang_vol?:  FHPST01870000_REQUEST_BODY_FID_APLY_RANG_VOL
    fid_cond_mrkt_div_code?:  string
    fid_cond_scr_div_code?:  string
    fid_div_cls_code?:  FHPST01870000_REQUEST_BODY_FID_DIV_CLS_CODE
    fid_input_cnt_1?:  string
    fid_input_cnt_2?:  string
    fid_prc_cls_code?:  FHPST01870000_REQUEST_BODY_FID_PRC_CLS_CODE
    fid_input_iscd?:  FHPST01870000_REQUEST_BODY_FID_INPUT_ISCD
    fid_trgt_cls_code?:  FHPST01870000_REQUEST_BODY_FID_TRGT_CLS_CODE
    fid_trgt_exls_cls_code?:  FHPST01870000_REQUEST_BODY_FID_TRGT_EXLS_CLS_CODE
    fid_aply_rang_prc_1?:  string
    fid_aply_rang_prc_2?:  string
}

export type FHKST190900C0_REQUEST_BODY_FID_INPUT_ISCD = '0000' | '0001' | '1001' | '2001' | '4001';
export type FHKST190900C0_REQUEST_BODY_FID_RANK_SORT_CLS_CODE = '0' | '1';
export type FHKST190900C0_REQUEST_BODY_FID_DIV_CLS_CODE = '0';
export type FHKST190900C0_REQUEST_BODY_FID_INPUT_ISCD_2 = ' ';
export type FHKST190900C0_REQUEST_BODY_FID_TRGT_EXLS_CLS_CODE = '0';
export type FHKST190900C0_REQUEST_BODY_FID_TRGT_CLS_CODE = '0';
export interface FHKST190900C0_REQUEST_BODY {
    fid_aply_rang_prc_2?:  string
    fid_cond_mrkt_div_code?:  string
    fid_cond_scr_div_code?:  string
    fid_input_iscd?:  FHKST190900C0_REQUEST_BODY_FID_INPUT_ISCD
    fid_rank_sort_cls_code?:  FHKST190900C0_REQUEST_BODY_FID_RANK_SORT_CLS_CODE
    fid_div_cls_code?:  FHKST190900C0_REQUEST_BODY_FID_DIV_CLS_CODE
    fid_input_price_1?:  string
    fid_aply_rang_prc_1?:  string
    fid_input_iscd_2?:  FHKST190900C0_REQUEST_BODY_FID_INPUT_ISCD_2
    fid_trgt_exls_cls_code?:  FHKST190900C0_REQUEST_BODY_FID_TRGT_EXLS_CLS_CODE
    fid_trgt_cls_code?:  FHKST190900C0_REQUEST_BODY_FID_TRGT_CLS_CODE
    fid_vol_cnt?:  string
}

export type FHPST04820000_REQUEST_BODY_FID_INPUT_ISCD = '0000' | '0001' | '1001' | '2001' | '4001' | '3003';
export type FHPST04820000_REQUEST_BODY_FID_PERIOD_DIV_CODE = '조회구분 (일/월) D' | 'M';
export type FHPST04820000_REQUEST_BODY_FID_INPUT_CNT_1 = '조회가간(일수)' | '조회구분(D) 0' | '1' | '2' | '3' | '4' | '9' | '14' | '조회구분(M) 1' | '2' | '3';
export interface FHPST04820000_REQUEST_BODY {
    FID_APLY_RANG_VOL?:  string
    FID_COND_MRKT_DIV_CODE?:  string
    FID_COND_SCR_DIV_CODE?:  string
    FID_INPUT_ISCD?:  FHPST04820000_REQUEST_BODY_FID_INPUT_ISCD
    FID_PERIOD_DIV_CODE?:  FHPST04820000_REQUEST_BODY_FID_PERIOD_DIV_CODE
    FID_INPUT_CNT_1?:  FHPST04820000_REQUEST_BODY_FID_INPUT_CNT_1
    FID_TRGT_EXLS_CLS_CODE?:  string
    FID_TRGT_CLS_CODE?:  string
    FID_APLY_RANG_PRC_1?:  string
    FID_APLY_RANG_PRC_2?:  string
}

export type FHKST17010000_REQUEST_BODY_FID_INPUT_ISCD = '0000' | '0001' | '1001' | '2001';
export type FHKST17010000_REQUEST_BODY_FID_RANK_SORT_CLS_CODE = '(융자)0' | '1' | '2' | '3' | '4' | '(대주)5' | '6' | '7' | '8' | '9';
export interface FHKST17010000_REQUEST_BODY {
    FID_COND_SCR_DIV_CODE?:  string
    FID_INPUT_ISCD?:  FHKST17010000_REQUEST_BODY_FID_INPUT_ISCD
    FID_OPTION?:  string
    FID_COND_MRKT_DIV_CODE?:  string
    FID_RANK_SORT_CLS_CODE?:  FHKST17010000_REQUEST_BODY_FID_RANK_SORT_CLS_CODE
}

export type HHKDB13470100_REQUEST_BODY_GB1 = '0' | '1' | '2' | '3';
export type HHKDB13470100_REQUEST_BODY_UPJONG = '코스닥(1001' | '…. 1041' | '코스피200 (2001' | '2007' | '2008';
export type HHKDB13470100_REQUEST_BODY_GB2 = '0' | '6' | '7';
export type HHKDB13470100_REQUEST_BODY_GB3 = '1' | '2';
export type HHKDB13470100_REQUEST_BODY_GB4 = '0' | '1' | '2';
export interface HHKDB13470100_REQUEST_BODY {
    CTS_AREA?:  string
    GB1?:  HHKDB13470100_REQUEST_BODY_GB1
    UPJONG?:  HHKDB13470100_REQUEST_BODY_UPJONG
    GB2?:  HHKDB13470100_REQUEST_BODY_GB2
    GB3?:  HHKDB13470100_REQUEST_BODY_GB3
    F_DT?:  string
    T_DT?:  string
    GB4?:  HHKDB13470100_REQUEST_BODY_GB4
}

export type FHPST02340000_REQUEST_BODY_FID_COND_MRKT_DIV_CODE = '시장구분코드 (J';
export interface FHPST02340000_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  FHPST02340000_REQUEST_BODY_FID_COND_MRKT_DIV_CODE
    FID_MRKT_CLS_CODE?:  string
    FID_COND_SCR_DIV_CODE?:  string
    FID_INPUT_ISCD?:  string
    FID_DIV_CLS_CODE?:  string
    FID_INPUT_PRICE_1?:  string
    FID_INPUT_PRICE_2?:  string
    FID_VOL_CNT?:  string
    FID_TRGT_CLS_CODE?:  string
    FID_TRGT_EXLS_CLS_CODE?:  string
}

export type FHPST02350000_REQUEST_BODY_FID_COND_MRKT_DIV_CODE = '시장구분코드 (J';
export interface FHPST02350000_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  FHPST02350000_REQUEST_BODY_FID_COND_MRKT_DIV_CODE
    FID_COND_SCR_DIV_CODE?:  string
    FID_INPUT_ISCD?:  string
    FID_RANK_SORT_CLS_CODE?:  string
    FID_INPUT_PRICE_1?:  string
    FID_INPUT_PRICE_2?:  string
    FID_VOL_CNT?:  string
    FID_TRGT_CLS_CODE?:  string
    FID_TRGT_EXLS_CLS_CODE?:  string
}


export interface HHMCM000100C0_REQUEST_BODY {
}

export type TTTO1101U_REQUEST_BODY_ORD_PRCS_DVSN_CD = '02';
export type TTTO1101U_REQUEST_BODY_SLL_BUY_DVSN_CD = '01' | '02';
export type TTTO1101U_REQUEST_BODY_SHTN_PDNO = '선물 6자리 (예' | '옵션 9자리 (예';
export type TTTO1101U_REQUEST_BODY_NMPR_TYPE_CD = '01' | '02' | '03' | '04';
export type TTTO1101U_REQUEST_BODY_KRX_NMPR_CNDT_CD = '0' | '3' | '4';
export type TTTO1101U_REQUEST_BODY_ORD_DVSN_CD = '01' | '02' | '03' | '04' | '10' | '11' | '12' | '13' | '14' | '15';
export interface TTTO1101U_REQUEST_BODY {
    ORD_PRCS_DVSN_CD?:  TTTO1101U_REQUEST_BODY_ORD_PRCS_DVSN_CD
    CANO?:  string
    ACNT_PRDT_CD?:  string
    SLL_BUY_DVSN_CD?:  TTTO1101U_REQUEST_BODY_SLL_BUY_DVSN_CD
    SHTN_PDNO?:  TTTO1101U_REQUEST_BODY_SHTN_PDNO
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
export type JTCE1001U_REQUEST_BODY_SHTN_PDNO = '선물 6자리 (예' | '옵션 9자리 (예';
export type JTCE1001U_REQUEST_BODY_NMPR_TYPE_CD = '01' | '02' | '03' | '04';
export type JTCE1001U_REQUEST_BODY_KRX_NMPR_CNDT_CD = '0' | '3' | '4';
export type JTCE1001U_REQUEST_BODY_ORD_DVSN_CD = '01' | '02' | '03' | '04' | '10' | '11' | '12' | '13' | '14' | '15';
export interface JTCE1001U_REQUEST_BODY {
    ORD_PRCS_DVSN_CD?:  JTCE1001U_REQUEST_BODY_ORD_PRCS_DVSN_CD
    CANO?:  string
    ACNT_PRDT_CD?:  string
    SLL_BUY_DVSN_CD?:  JTCE1001U_REQUEST_BODY_SLL_BUY_DVSN_CD
    SHTN_PDNO?:  JTCE1001U_REQUEST_BODY_SHTN_PDNO
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
export type VTTO1101U_REQUEST_BODY_SHTN_PDNO = '선물 6자리 (예' | '옵션 9자리 (예';
export type VTTO1101U_REQUEST_BODY_NMPR_TYPE_CD = '01' | '02' | '03' | '04';
export type VTTO1101U_REQUEST_BODY_KRX_NMPR_CNDT_CD = '0' | '3' | '4';
export type VTTO1101U_REQUEST_BODY_ORD_DVSN_CD = '01' | '02' | '03' | '04' | '10' | '11' | '12' | '13' | '14' | '15';
export interface VTTO1101U_REQUEST_BODY {
    ORD_PRCS_DVSN_CD?:  VTTO1101U_REQUEST_BODY_ORD_PRCS_DVSN_CD
    CANO?:  string
    ACNT_PRDT_CD?:  string
    SLL_BUY_DVSN_CD?:  VTTO1101U_REQUEST_BODY_SLL_BUY_DVSN_CD
    SHTN_PDNO?:  VTTO1101U_REQUEST_BODY_SHTN_PDNO
    ORD_QTY?:  string
    UNIT_PRICE?:  string
    NMPR_TYPE_CD?:  VTTO1101U_REQUEST_BODY_NMPR_TYPE_CD
    KRX_NMPR_CNDT_CD?:  VTTO1101U_REQUEST_BODY_KRX_NMPR_CNDT_CD
    CTAC_TLNO?:  string
    FUOP_ITEM_DVSN_CD?:  string
    ORD_DVSN_CD?:  VTTO1101U_REQUEST_BODY_ORD_DVSN_CD
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

export type TTTO5201R_REQUEST_BODY_SLL_BUY_DVSN_CD = '00' | '01' | '02';
export type TTTO5201R_REQUEST_BODY_CCLD_NCCS_DVSN = '00' | '01' | '02';
export type TTTO5201R_REQUEST_BODY_SORT_SQN = 'AS' | 'DS';
export type TTTO5201R_REQUEST_BODY_PDNO = '선물 6자리 (예' | '옵션 9자리 (예';
export interface TTTO5201R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    STRT_ORD_DT?:  string
    END_ORD_DT?:  string
    SLL_BUY_DVSN_CD?:  TTTO5201R_REQUEST_BODY_SLL_BUY_DVSN_CD
    CCLD_NCCS_DVSN?:  TTTO5201R_REQUEST_BODY_CCLD_NCCS_DVSN
    SORT_SQN?:  TTTO5201R_REQUEST_BODY_SORT_SQN
    STRT_ODNO?:  string
    PDNO?:  TTTO5201R_REQUEST_BODY_PDNO
    MKET_ID_CD?:  string
    CTX_AREA_FK200?:  string
    CTX_AREA_NK200?:  string
}

export type VTTO5201R_REQUEST_BODY_SLL_BUY_DVSN_CD = '00' | '01' | '02';
export type VTTO5201R_REQUEST_BODY_CCLD_NCCS_DVSN = '00' | '01' | '02';
export type VTTO5201R_REQUEST_BODY_SORT_SQN = 'AS' | 'DS';
export type VTTO5201R_REQUEST_BODY_PDNO = '선물 6자리 (예' | '옵션 9자리 (예';
export interface VTTO5201R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    STRT_ORD_DT?:  string
    END_ORD_DT?:  string
    SLL_BUY_DVSN_CD?:  VTTO5201R_REQUEST_BODY_SLL_BUY_DVSN_CD
    CCLD_NCCS_DVSN?:  VTTO5201R_REQUEST_BODY_CCLD_NCCS_DVSN
    SORT_SQN?:  VTTO5201R_REQUEST_BODY_SORT_SQN
    STRT_ODNO?:  string
    PDNO?:  VTTO5201R_REQUEST_BODY_PDNO
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

export type TTTO5105R_REQUEST_BODY_PDNO = '선물 6자리 (예' | '옵션 9자리 (예';
export type TTTO5105R_REQUEST_BODY_SLL_BUY_DVSN_CD = '01' | '02';
export type TTTO5105R_REQUEST_BODY_UNIT_PRICE = '- 옵션매수' | '- 그 이외';
export type TTTO5105R_REQUEST_BODY_ORD_DVSN_CD = '01' | '02' | '03' | '04' | '10' | '11' | '12' | '13' | '14' | '15';
export interface TTTO5105R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    PDNO?:  TTTO5105R_REQUEST_BODY_PDNO
    SLL_BUY_DVSN_CD?:  TTTO5105R_REQUEST_BODY_SLL_BUY_DVSN_CD
    UNIT_PRICE?:  TTTO5105R_REQUEST_BODY_UNIT_PRICE
    ORD_DVSN_CD?:  TTTO5105R_REQUEST_BODY_ORD_DVSN_CD
}

export type VTTO5105R_REQUEST_BODY_PDNO = '선물 6자리 (예' | '옵션 9자리 (예';
export type VTTO5105R_REQUEST_BODY_SLL_BUY_DVSN_CD = '01' | '02';
export type VTTO5105R_REQUEST_BODY_UNIT_PRICE = '- 옵션매수' | '- 그 이외';
export type VTTO5105R_REQUEST_BODY_ORD_DVSN_CD = '01' | '02' | '03' | '04' | '10' | '11' | '12' | '13' | '14' | '15';
export interface VTTO5105R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    PDNO?:  VTTO5105R_REQUEST_BODY_PDNO
    SLL_BUY_DVSN_CD?:  VTTO5105R_REQUEST_BODY_SLL_BUY_DVSN_CD
    UNIT_PRICE?:  VTTO5105R_REQUEST_BODY_UNIT_PRICE
    ORD_DVSN_CD?:  VTTO5105R_REQUEST_BODY_ORD_DVSN_CD
}

export type JTCE5005R_REQUEST_BODY_SLL_BUY_DVSN_CD = '01' | '02';
export type JTCE5005R_REQUEST_BODY_CCLD_NCCS_DVSN = '00' | '01' | '02';
export type JTCE5005R_REQUEST_BODY_STRT_ODNO = ' ';
export type JTCE5005R_REQUEST_BODY_PDNO = ' ';
export type JTCE5005R_REQUEST_BODY_MKET_ID_CD = ' ';
export type JTCE5005R_REQUEST_BODY_FUOP_DVSN_CD = ' ' | '01' | '02';
export interface JTCE5005R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    STRT_ORD_DT?:  string
    END_ORD_DT?:  string
    SLL_BUY_DVSN_CD?:  JTCE5005R_REQUEST_BODY_SLL_BUY_DVSN_CD
    CCLD_NCCS_DVSN?:  JTCE5005R_REQUEST_BODY_CCLD_NCCS_DVSN
    SORT_SQN?:  string
    STRT_ODNO?:  JTCE5005R_REQUEST_BODY_STRT_ODNO
    PDNO?:  JTCE5005R_REQUEST_BODY_PDNO
    MKET_ID_CD?:  JTCE5005R_REQUEST_BODY_MKET_ID_CD
    FUOP_DVSN_CD?:  JTCE5005R_REQUEST_BODY_FUOP_DVSN_CD
    SCRN_DVSN?:  string
    CTX_AREA_FK200?:  string
    CTX_AREA_NK200?:  string
}

export type JTCE6001R_REQUEST_BODY_MGNA_DVSN = '01' | '02';
export type JTCE6001R_REQUEST_BODY_EXCC_STAT_CD = '1' | '2';
export interface JTCE6001R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    ACNT_PWD?:  string
    MGNA_DVSN?:  JTCE6001R_REQUEST_BODY_MGNA_DVSN
    EXCC_STAT_CD?:  JTCE6001R_REQUEST_BODY_EXCC_STAT_CD
    CTX_AREA_FK200?:  string
    CTX_AREA_NK200?:  string
}

export type JTCE1004R_REQUEST_BODY_PRDT_TYPE_CD = '301';
export type JTCE1004R_REQUEST_BODY_SLL_BUY_DVSN_CD = '01' | '02';
export interface JTCE1004R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    PDNO?:  string
    PRDT_TYPE_CD?:  JTCE1004R_REQUEST_BODY_PRDT_TYPE_CD
    SLL_BUY_DVSN_CD?:  JTCE1004R_REQUEST_BODY_SLL_BUY_DVSN_CD
    UNIT_PRICE?:  string
    ORD_DVSN_CD?:  string
}


export interface CTFO6117R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    INQR_DT?:  string
    CTX_AREA_FK200?:  string
    CTX_AREA_NK200?:  string
}


export interface CTRP6550R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
}

export type CTFO6159R_REQUEST_BODY_MGNA_DVSN = '01' | '02';
export type CTFO6159R_REQUEST_BODY_EXCC_STAT_CD = '1' | '2';
export interface CTFO6159R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    MGNA_DVSN?:  CTFO6159R_REQUEST_BODY_MGNA_DVSN
    EXCC_STAT_CD?:  CTFO6159R_REQUEST_BODY_EXCC_STAT_CD
    CTX_AREA_FK200?:  string
    CTX_AREA_NK200?:  string
}


export interface CTFO5139R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    ORD_DT?:  string
    FUOP_TR_STRT_TMD?:  string
    FUOP_TR_END_TMD?:  string
    CTX_AREA_FK200?:  string
    CTX_AREA_NK200?:  string
}


export interface CTFO6119R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    INQR_STRT_DAY?:  string
    INQR_END_DAY?:  string
    CTX_AREA_FK200?:  string
    CTX_AREA_NK200?:  string
}


export interface JTCE6003R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    CRCY_CD?:  string
}

export type FHMIF10000000_REQUEST_BODY_FID_COND_MRKT_DIV_CODE = 'F' | 'O' | 'JF' | 'JO' | 'CF' | 'CM' | 'EU';
export type FHMIF10000000_REQUEST_BODY_FID_INPUT_ISCD = '종목코드 (예';
export interface FHMIF10000000_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  FHMIF10000000_REQUEST_BODY_FID_COND_MRKT_DIV_CODE
    FID_INPUT_ISCD?:  FHMIF10000000_REQUEST_BODY_FID_INPUT_ISCD
}

export type FHMIF10010000_REQUEST_BODY_FID_COND_MRKT_DIV_CODE = 'F' | 'O' | 'JF' | 'JO' | 'CF' | 'CM' | 'EU';
export type FHMIF10010000_REQUEST_BODY_FID_INPUT_ISCD = '종목코드 (예';
export interface FHMIF10010000_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  FHMIF10010000_REQUEST_BODY_FID_COND_MRKT_DIV_CODE
    FID_INPUT_ISCD?:  FHMIF10010000_REQUEST_BODY_FID_INPUT_ISCD
}

export type FHKIF03020100_REQUEST_BODY_FID_COND_MRKT_DIV_CODE = 'F' | 'O' | 'JF' | 'JO' | 'CF' | 'CM' | 'EU';
export type FHKIF03020100_REQUEST_BODY_FID_INPUT_ISCD = '종목번호 (지수선물';
export type FHKIF03020100_REQUEST_BODY_FID_PERIOD_DIV_CODE = 'M' | 'Y';
export interface FHKIF03020100_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  FHKIF03020100_REQUEST_BODY_FID_COND_MRKT_DIV_CODE
    FID_INPUT_ISCD?:  FHKIF03020100_REQUEST_BODY_FID_INPUT_ISCD
    FID_INPUT_DATE_1?:  string
    FID_INPUT_DATE_2?:  string
    FID_PERIOD_DIV_CODE?:  FHKIF03020100_REQUEST_BODY_FID_PERIOD_DIV_CODE
}

export type FHKIF03020200_REQUEST_BODY_FID_COND_MRKT_DIV_CODE = 'F' | 'O' | 'JF' | 'JO' | 'CF' | 'CM' | 'EU';
export type FHKIF03020200_REQUEST_BODY_FID_INPUT_ISCD = '종목번호 (지수선물';
export type FHKIF03020200_REQUEST_BODY_FID_HOUR_CLS_CODE = 'FID 시간 구분 코드(30' | '60' | '3600';
export interface FHKIF03020200_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  FHKIF03020200_REQUEST_BODY_FID_COND_MRKT_DIV_CODE
    FID_INPUT_ISCD?:  FHKIF03020200_REQUEST_BODY_FID_INPUT_ISCD
    FID_HOUR_CLS_CODE?:  FHKIF03020200_REQUEST_BODY_FID_HOUR_CLS_CODE
    FID_PW_DATA_INCU_YN?:  string
    FID_FAKE_TICK_INCU_YN?:  string
    FID_INPUT_DATE_1?:  string
    FID_INPUT_HOUR_1?:  string
}

export type FHPIF05110100_REQUEST_BODY_FID_INPUT_ISCD = '종목번호 (지수선물';
export type FHPIF05110100_REQUEST_BODY_FID_COND_MRKT_DIV_CODE = 'F' | 'O';
export interface FHPIF05110100_REQUEST_BODY {
    FID_INPUT_ISCD?:  FHPIF05110100_REQUEST_BODY_FID_INPUT_ISCD
    FID_COND_MRKT_DIV_CODE?:  FHPIF05110100_REQUEST_BODY_FID_COND_MRKT_DIV_CODE
}


export interface FHPIO056104C0_REQUEST_BODY {
    FID_COND_SCR_DIV_CODE?:  string
    FID_COND_MRKT_DIV_CODE?:  string
    FID_COND_MRKT_CLS_CODE?:  string
}

export type FHPIF05030000_REQUEST_BODY_FID_COND_MRKT_DIV_CODE = '시장구분코드 (F';
export interface FHPIF05030000_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  FHPIF05030000_REQUEST_BODY_FID_COND_MRKT_DIV_CODE
    FID_INPUT_ISCD?:  string
    FID_COND_MRKT_DIV_CODE1?:  string
    FID_COND_SCR_DIV_CODE?:  string
    FID_MTRT_CNT?:  string
    FID_COND_MRKT_CLS_CODE?:  string
}

export type FHPIF05030100_REQUEST_BODY_FID_COND_MRKT_DIV_CODE = '시장구분코드 (O';
export type FHPIF05030100_REQUEST_BODY_FID_MRKT_CLS_CODE = '시장구분코드 (CO';
export type FHPIF05030100_REQUEST_BODY_FID_MTRT_CNT = '- FID_COND_MRKT_CLS_CODE' | '' | '- FID_COND_MRKT_CLS_CODE' | '';
export type FHPIF05030100_REQUEST_BODY_FID_COND_MRKT_CLS_CODE = ' ' | 'MKI' | 'WKM' | 'WKI' | 'KQI';
export type FHPIF05030100_REQUEST_BODY_FID_MRKT_CLS_CODE1 = '시장구분코드 (PO';
export interface FHPIF05030100_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  FHPIF05030100_REQUEST_BODY_FID_COND_MRKT_DIV_CODE
    FID_COND_SCR_DIV_CODE?:  string
    FID_MRKT_CLS_CODE?:  FHPIF05030100_REQUEST_BODY_FID_MRKT_CLS_CODE
    FID_MTRT_CNT?:  FHPIF05030100_REQUEST_BODY_FID_MTRT_CNT
    FID_COND_MRKT_CLS_CODE?:  FHPIF05030100_REQUEST_BODY_FID_COND_MRKT_CLS_CODE
    FID_MRKT_CLS_CODE1?:  FHPIF05030100_REQUEST_BODY_FID_MRKT_CLS_CODE1
}

export type FHPIF05030200_REQUEST_BODY_FID_COND_MRKT_DIV_CODE = '시장구분코드 (F';
export type FHPIF05030200_REQUEST_BODY_FID_COND_MRKT_CLS_CODE = ' ' | 'MKI' | 'WKM' | 'WKI' | 'KQI';
export interface FHPIF05030200_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  FHPIF05030200_REQUEST_BODY_FID_COND_MRKT_DIV_CODE
    FID_COND_SCR_DIV_CODE?:  string
    FID_COND_MRKT_CLS_CODE?:  FHPIF05030200_REQUEST_BODY_FID_COND_MRKT_CLS_CODE
}


export interface H0CFASP0_REQUEST_BODY {
    tr_id?:  string
    tr_key?:  string
}

export type TTTT1002U_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type TTTT1002U_REQUEST_BODY_SLL_TYPE = '제거' | '00';
export type TTTT1002U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '50';
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
export type TTTT1006U_REQUEST_BODY_SLL_TYPE = '제거' | '00';
export type TTTT1006U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '50';
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
export type TTTS0308U_REQUEST_BODY_SLL_TYPE = '제거' | '00';
export type TTTS0308U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '50';
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
export type TTTS0307U_REQUEST_BODY_SLL_TYPE = '제거' | '00';
export type TTTS0307U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '50';
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
export type TTTS0202U_REQUEST_BODY_SLL_TYPE = '제거' | '00';
export type TTTS0202U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '50';
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
export type TTTS1005U_REQUEST_BODY_SLL_TYPE = '제거' | '00';
export type TTTS1005U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '50';
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
export type TTTS1002U_REQUEST_BODY_SLL_TYPE = '제거' | '00';
export type TTTS1002U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '50';
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
export type TTTS1001U_REQUEST_BODY_SLL_TYPE = '제거' | '00';
export type TTTS1001U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '50';
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
export type TTTS0305U_REQUEST_BODY_SLL_TYPE = '제거' | '00';
export type TTTS0305U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '50';
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
export type TTTS0304U_REQUEST_BODY_SLL_TYPE = '제거' | '00';
export type TTTS0304U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '50';
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
export type TTTS0311U_REQUEST_BODY_SLL_TYPE = '제거' | '00';
export type TTTS0311U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '50';
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
export type TTTS0310U_REQUEST_BODY_SLL_TYPE = '제거' | '00';
export type TTTS0310U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '50';
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
export type VTTT1002U_REQUEST_BODY_SLL_TYPE = '제거' | '00';
export type VTTT1002U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '50';
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
export type VTTT1001U_REQUEST_BODY_SLL_TYPE = '제거' | '00';
export type VTTT1001U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '50';
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
export type VTTS0308U_REQUEST_BODY_SLL_TYPE = '제거' | '00';
export type VTTS0308U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '50';
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
export type VTTS0307U_REQUEST_BODY_SLL_TYPE = '제거' | '00';
export type VTTS0307U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '50';
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
export type VTTS0202U_REQUEST_BODY_SLL_TYPE = '제거' | '00';
export type VTTS0202U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '50';
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
export type VTTS1005U_REQUEST_BODY_SLL_TYPE = '제거' | '00';
export type VTTS1005U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '50';
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
export type VTTS1002U_REQUEST_BODY_SLL_TYPE = '제거' | '00';
export type VTTS1002U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '50';
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
export type VTTS1001U_REQUEST_BODY_SLL_TYPE = '제거' | '00';
export type VTTS1001U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '50';
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
export type VTTS0305U_REQUEST_BODY_SLL_TYPE = '제거' | '00';
export type VTTS0305U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '50';
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
export type VTTS0304U_REQUEST_BODY_SLL_TYPE = '제거' | '00';
export type VTTS0304U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '50';
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
export type VTTS0311U_REQUEST_BODY_SLL_TYPE = '제거' | '00';
export type VTTS0311U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '50';
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
export type VTTS0310U_REQUEST_BODY_SLL_TYPE = '제거' | '00';
export type VTTS0310U_REQUEST_BODY_ORD_DVSN = '00' | '32' | '34' | '00' | '31' | '32' | '33' | '34' | '00' | '50';
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
    RSYN_ORD_RCIT_DT?:  string
    OVRS_RSVN_ODNO?:  string
}


export interface VTTT3017U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    RSYN_ORD_RCIT_DT?:  string
    OVRS_RSVN_ODNO?:  string
}

export type TTTS3018R_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type TTTS3018R_REQUEST_BODY_SORT_SQN = 'DS' | '그외';
export interface TTTS3018R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  TTTS3018R_REQUEST_BODY_OVRS_EXCG_CD
    SORT_SQN?:  TTTS3018R_REQUEST_BODY_SORT_SQN
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

export type TTTS3035R_REQUEST_BODY_SLL_BUY_DVSN = '00' | '01' | '02';
export type TTTS3035R_REQUEST_BODY_CCLD_NCCS_DVSN = '00' | '01' | '02';
export type TTTS3035R_REQUEST_BODY_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type TTTS3035R_REQUEST_BODY_SORT_SQN = 'DS' | 'AS' | '※ 모의투자계좌의 경우 정렬순서 사용불가(Default';
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
export type VTTS3035R_REQUEST_BODY_SORT_SQN = 'DS' | 'AS' | '※ 모의투자계좌의 경우 정렬순서 사용불가(Default';
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

export type TTTS3014R_REQUEST_BODY_INQR_DVSN_CD = '00' | '01' | '02';
export type TTTS3014R_REQUEST_BODY_PRDT_TYPE_CD = '515';
export interface TTTS3014R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    INQR_STRT_DT?:  string
    INQR_END_DT?:  string
    INQR_DVSN_CD?:  TTTS3014R_REQUEST_BODY_INQR_DVSN_CD
    PRDT_TYPE_CD?:  TTTS3014R_REQUEST_BODY_PRDT_TYPE_CD
    OVRS_EXCG_CD?:  string
    CTX_AREA_FK200?:  string
    CTX_AREA_NK200?:  string
}


export interface TTTS3007R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  string
    OVRS_ORD_UNPR?:  string
    ITEM_CD?:  string
}


export interface VTTS3007R_REQUEST_BODY {
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

export type TTTS3039R_REQUEST_BODY_OVRS_EXCG_CD = ' ' | 'NASD' | 'SEHK' | 'SHAA' | 'TKSE' | 'HASE';
export type TTTS3039R_REQUEST_BODY_CRCY_CD = ' ' | 'USD' | 'HKD' | 'CNY' | 'JPY' | 'VND';
export type TTTS3039R_REQUEST_BODY_PDNO = ' ';
export type TTTS3039R_REQUEST_BODY_WCRC_FRCR_DVSN_CD = '01' | '02';
export interface TTTS3039R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    OVRS_EXCG_CD?:  TTTS3039R_REQUEST_BODY_OVRS_EXCG_CD
    NATN_CD?:  string
    CRCY_CD?:  TTTS3039R_REQUEST_BODY_CRCY_CD
    PDNO?:  TTTS3039R_REQUEST_BODY_PDNO
    INQR_STRT_DT?:  string
    INQR_END_DT?:  string
    WCRC_FRCR_DVSN_CD?:  TTTS3039R_REQUEST_BODY_WCRC_FRCR_DVSN_CD
    CTX_AREA_FK200?:  string
    CTX_AREA_NK200?:  string
}


export interface TTTC2101R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
}


export interface CTOS4001R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    ERLM_STRT_DT?:  string
    ERLM_END_DT?:  string
    OVRS_EXCG_CD?:  string
    PDNO?:  string
    SLL_BUY_DVSN_CD?:  string
    LOAN_DVSN_CD?:  string
    CTX_AREA_FK100?:  string
    CTX_AREA_NK100?:  string
}


export interface CTRP6010R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    BASS_DT?:  string
    WCRC_FRCR_DVSN_CD?:  string
    INQR_DVSN_CD?:  string
}

export type HHDFS00000300_REQUEST_BODY_EXCD = 'HKS' | 'NYS' | 'NAS' | 'AMS' | 'TSE' | 'SHS' | 'SZS' | 'SHI' | 'SZI' | 'HSX' | 'HNX' | 'BAY' | 'BAQ' | 'BAA';
export interface HHDFS00000300_REQUEST_BODY {
    AUTH?:  string
    EXCD?:  HHDFS00000300_REQUEST_BODY_EXCD
    SYMB?:  string
}

export type HHDFS76240000_REQUEST_BODY_EXCD = 'HKS' | 'NYS' | 'NAS' | 'AMS' | 'TSE' | 'SHS' | 'SZS' | 'SHI' | 'SZI' | 'HSX' | 'HNX';
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

export type FHKST03030100_REQUEST_BODY_FID_COND_MRKT_DIV_CODE = 'N' | 'I' | 'S';
export type FHKST03030100_REQUEST_BODY_FID_PERIOD_DIV_CODE = 'D' | 'W' | 'M' | 'Y';
export interface FHKST03030100_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  FHKST03030100_REQUEST_BODY_FID_COND_MRKT_DIV_CODE
    FID_INPUT_ISCD?:  string
    FID_INPUT_DATE_1?:  string
    FID_INPUT_DATE_2?:  string
    FID_PERIOD_DIV_CODE?:  FHKST03030100_REQUEST_BODY_FID_PERIOD_DIV_CODE
}

export type HHDFS76410000_REQUEST_BODY_EXCD = 'NYS' | 'NAS' | 'AMS' | 'HKS' | 'SHS' | 'SZS' | 'HSX' | 'HNX' | 'TSE';
export type HHDFS76410000_REQUEST_BODY_CO_ST_PRICECUR = '단위';
export type HHDFS76410000_REQUEST_BODY_CO_EN_PRICECUR = '단위';
export type HHDFS76410000_REQUEST_BODY_CO_ST_VALX = '단위';
export type HHDFS76410000_REQUEST_BODY_CO_EN_VALX = '단위';
export type HHDFS76410000_REQUEST_BODY_CO_ST_SHAR = '단위';
export type HHDFS76410000_REQUEST_BODY_CO_EN_SHAR = '단위';
export type HHDFS76410000_REQUEST_BODY_CO_ST_VOLUME = '단위';
export type HHDFS76410000_REQUEST_BODY_CO_EN_VOLUME = '단위';
export type HHDFS76410000_REQUEST_BODY_CO_ST_AMT = '단위';
export type HHDFS76410000_REQUEST_BODY_CO_EN_AMT = '단위';
export interface HHDFS76410000_REQUEST_BODY {
    AUTH?:  string
    EXCD?:  HHDFS76410000_REQUEST_BODY_EXCD
    CO_YN_PRICECUR?:  string
    CO_ST_PRICECUR?:  HHDFS76410000_REQUEST_BODY_CO_ST_PRICECUR
    CO_EN_PRICECUR?:  HHDFS76410000_REQUEST_BODY_CO_EN_PRICECUR
    CO_YN_RATE?:  string
    CO_ST_RATE?:  string
    CO_EN_RATE?:  string
    CO_YN_VALX?:  string
    CO_ST_VALX?:  HHDFS76410000_REQUEST_BODY_CO_ST_VALX
    CO_EN_VALX?:  HHDFS76410000_REQUEST_BODY_CO_EN_VALX
    CO_YN_SHAR?:  string
    CO_ST_SHAR?:  HHDFS76410000_REQUEST_BODY_CO_ST_SHAR
    CO_EN_SHAR?:  HHDFS76410000_REQUEST_BODY_CO_EN_SHAR
    CO_YN_VOLUME?:  string
    CO_ST_VOLUME?:  HHDFS76410000_REQUEST_BODY_CO_ST_VOLUME
    CO_EN_VOLUME?:  HHDFS76410000_REQUEST_BODY_CO_EN_VOLUME
    CO_YN_AMT?:  string
    CO_ST_AMT?:  HHDFS76410000_REQUEST_BODY_CO_ST_AMT
    CO_EN_AMT?:  HHDFS76410000_REQUEST_BODY_CO_EN_AMT
    CO_YN_EPS?:  string
    CO_ST_EPS?:  string
    CO_EN_EPS?:  string
    CO_YN_PER?:  string
    CO_ST_PER?:  string
    CO_EN_PER?:  string
    KEYB?:  string
}


export interface CTOS5011R_REQUEST_BODY {
    TRAD_DT?:  string
    CTX_AREA_NK?:  string
    CTX_AREA_FK?:  string
}

export type HHDFS76200200_REQUEST_BODY_EXCD = 'HKS' | 'NYS' | 'NAS' | 'AMS' | 'TSE' | 'SHS' | 'SZS' | 'SHI' | 'SZI' | 'HSX' | 'HNX' | 'BAY' | 'BAQ' | 'BAA';
export interface HHDFS76200200_REQUEST_BODY {
    AUTH?:  string
    EXCD?:  HHDFS76200200_REQUEST_BODY_EXCD
    SYMB?:  string
}

export type HHDFS76950200_REQUEST_BODY_EXCD = 'NYS' | 'NAS' | 'AMS' | 'HKS' | 'SHS' | 'SZS' | 'HSX' | 'HNX' | 'TSE' | 'BAY' | 'BAQ' | 'BAA';
export type HHDFS76950200_REQUEST_BODY_NMIN = '분단위(1' | '2';
export type HHDFS76950200_REQUEST_BODY_KEYB = '(형식';
export interface HHDFS76950200_REQUEST_BODY {
    AUTH?:  string
    EXCD?:  HHDFS76950200_REQUEST_BODY_EXCD
    SYMB?:  string
    NMIN?:  HHDFS76950200_REQUEST_BODY_NMIN
    PINC?:  string
    NEXT?:  string
    NREC?:  string
    FILL?:  string
    KEYB?:  HHDFS76950200_REQUEST_BODY_KEYB
}

export type FHKST03030200_REQUEST_BODY_FID_HOUR_CLS_CODE = '0' | '1';
export interface FHKST03030200_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_INPUT_ISCD?:  string
    FID_HOUR_CLS_CODE?:  FHKST03030200_REQUEST_BODY_FID_HOUR_CLS_CODE
    FID_PW_DATA_INCU_YN?:  string
}


export interface CTPF1702R_REQUEST_BODY {
    PRDT_TYPE_CD?:  string
    PDNO?:  string
}


export interface HHDFS76200300_REQUEST_BODY {
}


export interface HHDFS76370000_REQUEST_BODY {
}


export interface HHDFS76370100_REQUEST_BODY {
}

export type HHDFS76200100_REQUEST_BODY_EXCD = 'NYS' | 'NAS' | 'AMS' | 'HKS' | 'SHS' | 'SZS' | 'HSX' | 'HNX' | 'TSE' | 'BAY' | 'BAQ' | 'BAA';
export interface HHDFS76200100_REQUEST_BODY {
    AUTH?:  string
    EXCD?:  HHDFS76200100_REQUEST_BODY_EXCD
    SYMB?:  string
}


export interface HHDFS76260000_REQUEST_BODY {
}


export interface HHDFS76270000_REQUEST_BODY {
}


export interface HHDFS76280000_REQUEST_BODY {
}


export interface HHDFS76290000_REQUEST_BODY {
}


export interface HHDFS76300000_REQUEST_BODY {
}


export interface HHDFS76310010_REQUEST_BODY {
}


export interface HHDFS76320010_REQUEST_BODY {
}


export interface HHDFS76330000_REQUEST_BODY {
}


export interface HHDFS76340000_REQUEST_BODY {
}


export interface HHDFS76350100_REQUEST_BODY {
}


export interface CTRGT011R_REQUEST_BODY {
    RGHT_TYPE_CD?:  string
    INQR_DVSN_CD?:  string
    INQR_STRT_DT?:  string
    INQR_END_DT?:  string
    PDNO?:  string
    PRDT_TYPE_CD?:  string
    CTX_AREA_NK50?:  string
    CTX_AREA_FK50?:  string
}

export type HHPSTH60100C1_REQUEST_BODY_INFO_GB = '전체';
export type HHPSTH60100C1_REQUEST_BODY_CLASS_CD = '전체';
export type HHPSTH60100C1_REQUEST_BODY_NATION_CD = '전체';
export type HHPSTH60100C1_REQUEST_BODY_EXCHANGE_CD = '전체';
export type HHPSTH60100C1_REQUEST_BODY_SYMB = '전체';
export type HHPSTH60100C1_REQUEST_BODY_DATA_DT = '전체';
export type HHPSTH60100C1_REQUEST_BODY_DATA_TM = '전체' | '전체';
export interface HHPSTH60100C1_REQUEST_BODY {
    INFO_GB?:  HHPSTH60100C1_REQUEST_BODY_INFO_GB
    CLASS_CD?:  HHPSTH60100C1_REQUEST_BODY_CLASS_CD
    NATION_CD?:  HHPSTH60100C1_REQUEST_BODY_NATION_CD
    EXCHANGE_CD?:  HHPSTH60100C1_REQUEST_BODY_EXCHANGE_CD
    SYMB?:  HHPSTH60100C1_REQUEST_BODY_SYMB
    DATA_DT?:  HHPSTH60100C1_REQUEST_BODY_DATA_DT
    DATA_TM?:  HHPSTH60100C1_REQUEST_BODY_DATA_TM
    CTS?:  string
}

export type HHDFS78330900_REQUEST_BODY_ST_YMD = '- 상환' | '조기상환' | '티커변경' | '그 외';
export type HHDFS78330900_REQUEST_BODY_ED_YMD = '- 상환' | '조기상환' | '티커변경' | '그 외';
export interface HHDFS78330900_REQUEST_BODY {
    NCOD?:  string
    SYMB?:  string
    ST_YMD?:  HHDFS78330900_REQUEST_BODY_ST_YMD
    ED_YMD?:  HHDFS78330900_REQUEST_BODY_ED_YMD
}


export interface CTLN4050R_REQUEST_BODY {
    PDNO?:  string
    PRDT_TYPE_CD?:  string
    INQR_STRT_DT?:  string
    INQR_END_DT?:  string
    INQR_DVSN?:  string
    NATN_CD?:  string
    INQR_SQN_DVSN?:  string
    RT_DVSN_CD?:  string
    RT?:  string
    LOAN_PSBL_YN?:  string
    CTX_AREA_FK100?:  string
    CTX_AREA_NK100?:  string
}

export type FHKST01011801_REQUEST_BODY_FID_NEWS_OFER_ENTP_CODE = '뉴스제공업체구분=>0';
export type FHKST01011801_REQUEST_BODY_FID_COND_SCR_DIV_CODE = '화면번호';
export interface FHKST01011801_REQUEST_BODY {
    FID_NEWS_OFER_ENTP_CODE?:  FHKST01011801_REQUEST_BODY_FID_NEWS_OFER_ENTP_CODE
    FID_COND_MRKT_CLS_CODE?:  string
    FID_INPUT_ISCD?:  string
    FID_TITL_CNTT?:  string
    FID_INPUT_DATE_1?:  string
    FID_INPUT_HOUR_1?:  string
    FID_RANK_SORT_CLS_CODE?:  string
    FID_INPUT_SRNO?:  string
    FID_COND_SCR_DIV_CODE?:  FHKST01011801_REQUEST_BODY_FID_COND_SCR_DIV_CODE
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

export type OTFM3002U_REQUEST_BODY_ORGN_ODNO = '(ex. ORGN_ODNO';
export interface OTFM3002U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    ORGN_ORD_DT?:  string
    ORGN_ODNO?:  OTFM3002U_REQUEST_BODY_ORGN_ODNO
    FM_LIMIT_ORD_PRIC?:  string
    FM_STOP_ORD_PRIC?:  string
    FM_LQD_LMT_ORD_PRIC?:  string
    FM_LQD_STOP_ORD_PRIC?:  string
    FM_HDGE_ORD_SCRN_YN?:  string
    FM_MKPR_CVSN_YN?:  string
}

export type OTFM3003U_REQUEST_BODY_ORGN_ODNO = '(ex. ORGN_ODNO';
export interface OTFM3003U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    ORGN_ORD_DT?:  string
    ORGN_ODNO?:  OTFM3003U_REQUEST_BODY_ORGN_ODNO
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

export type OTFM3114R_REQUEST_BODY_ACNT_TR_TYPE_CD = '1' | '2' | '3';
export type OTFM3114R_REQUEST_BODY_CRCY_CD = '%%%' | 'VND';
export interface OTFM3114R_REQUEST_BODY {
    INQR_TERM_FROM_DT?:  string
    INQR_TERM_TO_DT?:  string
    CANO?:  string
    ACNT_PRDT_CD?:  string
    ACNT_TR_TYPE_CD?:  OTFM3114R_REQUEST_BODY_ACNT_TR_TYPE_CD
    CRCY_CD?:  OTFM3114R_REQUEST_BODY_CRCY_CD
    CTX_AREA_FK100?:  string
    CTX_AREA_NK100?:  string
    PWD_CHK_YN?:  string
}


export interface OTFM3115R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    CRCY_CD?:  string
    INQR_DT?:  string
}


export interface HHDFC55010100_REQUEST_BODY {
    SRS_CD?:  string
}


export interface HHDFC55010000_REQUEST_BODY {
    SRS_CD?:  string
}

export type HHDFC55020400_REQUEST_BODY_QRY_TP = 'Q' | 'P';
export interface HHDFC55020400_REQUEST_BODY {
    SRS_CD?:  string
    EXCH_CD?:  string
    START_DATE_TIME?:  string
    CLOSE_DATE_TIME?:  string
    QRY_TP?:  HHDFC55020400_REQUEST_BODY_QRY_TP
    QRY_CNT?:  string
    QRY_GAP?:  string
    INDEX_KEY?:  string
}

export type HHDFC55020000_REQUEST_BODY_QRY_TP = 'Q' | 'P';
export interface HHDFC55020000_REQUEST_BODY {
    SRS_CD?:  string
    EXCH_CD?:  string
    START_DATE_TIME?:  string
    CLOSE_DATE_TIME?:  string
    QRY_TP?:  HHDFC55020000_REQUEST_BODY_QRY_TP
    QRY_CNT?:  string
    QRY_GAP?:  string
    INDEX_KEY?:  string
}

export type HHDFC55020100_REQUEST_BODY_QRY_TP = 'Q' | 'P';
export interface HHDFC55020100_REQUEST_BODY {
    SRS_CD?:  string
    EXCH_CD?:  string
    START_DATE_TIME?:  string
    CLOSE_DATE_TIME?:  string
    QRY_TP?:  HHDFC55020100_REQUEST_BODY_QRY_TP
    QRY_CNT?:  string
    QRY_GAP?:  string
    INDEX_KEY?:  string
}

export type HHDFC55020200_REQUEST_BODY_QRY_TP = 'Q' | 'P';
export interface HHDFC55020200_REQUEST_BODY {
    SRS_CD?:  string
    EXCH_CD?:  string
    START_DATE_TIME?:  string
    CLOSE_DATE_TIME?:  string
    QRY_TP?:  HHDFC55020200_REQUEST_BODY_QRY_TP
    QRY_CNT?:  string
    QRY_GAP?:  string
    INDEX_KEY?:  string
}

export type HHDFC55020300_REQUEST_BODY_QRY_TP = 'Q' | 'P';
export interface HHDFC55020300_REQUEST_BODY {
    SRS_CD?:  string
    EXCH_CD?:  string
    START_DATE_TIME?:  string
    CLOSE_DATE_TIME?:  string
    QRY_TP?:  HHDFC55020300_REQUEST_BODY_QRY_TP
    QRY_CNT?:  string
    QRY_GAP?:  string
    INDEX_KEY?:  string
}


export interface HHDFC86000000_REQUEST_BODY {
    SRS_CD?:  string
}


export interface HHDFC55200000_REQUEST_BODY {
    QRY_CNT?:  string
    SRS_CD_01?:  string
    SRS_CD_02?:  string
    SRS_CD_32?:  string
}


export interface OTFM2229R_REQUEST_BODY {
    FM_PDGR_CD?:  string
    FM_CLAS_CD?:  string
    FM_EXCG_CD?:  string
    OPT_YN?:  string
    CTX_AREA_NK200?:  string
    CTX_AREA_FK200?:  string
}


export interface HHDDB95030000_REQUEST_BODY {
    PROD_ISCD?:  string
    BSOP_DATE?:  string
    UPMU_GUBUN?:  string
    CTS_KEY?:  string
}


export interface HHDFO86000000_REQUEST_BODY {
    SRS_CD?:  string
}


export interface HHDFO55010100_REQUEST_BODY {
    SRS_CD?:  string
}


export interface HHDFO55010000_REQUEST_BODY {
    SRS_CD?:  string
}


export interface HHDFO55020000_REQUEST_BODY {
    SRS_CD?:  string
    EXCH_CD?:  string
    START_DATE_TIME?:  string
    CLOSE_DATE_TIME?:  string
    QRY_TP?:  string
    QRY_CNT?:  string
    QRY_GAP?:  string
    INDEX_KEY?:  string
}


export interface HHDFO55020100_REQUEST_BODY {
    SRS_CD?:  string
    EXCH_CD?:  string
    START_DATE_TIME?:  string
    CLOSE_DATE_TIME?:  string
    QRY_TP?:  string
    QRY_CNT?:  string
    QRY_GAP?:  string
    INDEX_KEY?:  string
}

export type HHDFO55020200_REQUEST_BODY_QRY_TP = 'Q' | 'P';
export interface HHDFO55020200_REQUEST_BODY {
    SRS_CD?:  string
    EXCH_CD?:  string
    START_DATE_TIME?:  string
    CLOSE_DATE_TIME?:  string
    QRY_TP?:  HHDFO55020200_REQUEST_BODY_QRY_TP
    QRY_CNT?:  string
    QRY_GAP?:  string
    INDEX_KEY?:  string
}


export interface HHDFO55020300_REQUEST_BODY {
    SRS_CD?:  string
    EXCH_CD?:  string
    START_DATE_TIME?:  string
    CLOSE_DATE_TIME?:  string
    QRY_TP?:  string
    QRY_CNT?:  string
    QRY_GAP?:  string
    INDEX_KEY?:  string
}

export type HHDFO55020400_REQUEST_BODY_QRY_TP = 'Q' | 'P';
export type HHDFO55020400_REQUEST_BODY_QRY_GAP = '1' | '5';
export interface HHDFO55020400_REQUEST_BODY {
    SRS_CD?:  string
    EXCH_CD?:  string
    START_DATE_TIME?:  string
    CLOSE_DATE_TIME?:  string
    QRY_TP?:  HHDFO55020400_REQUEST_BODY_QRY_TP
    QRY_CNT?:  string
    QRY_GAP?:  HHDFO55020400_REQUEST_BODY_QRY_GAP
    INDEX_KEY?:  string
}


export interface HHDFO55200000_REQUEST_BODY {
    QRY_CNT?:  string
    SRS_CD_01?:  string
    SRS_CD_02?:  string
    SRS_CD_30?:  string
}

export type TTTC0958U_REQUEST_BODY_ORD_DVSN = '01' | '03';
export type TTTC0958U_REQUEST_BODY_SPRX_YN = 'N' | 'Y';
export type TTTC0958U_REQUEST_BODY_SAMT_MKET_PTCI_YN = 'N' | 'Y';
export interface TTTC0958U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    ORD_DVSN?:  TTTC0958U_REQUEST_BODY_ORD_DVSN
    PDNO?:  string
    ORD_QTY2?:  string
    BOND_ORD_UNPR?:  string
    SPRX_YN?:  TTTC0958U_REQUEST_BODY_SPRX_YN
    BUY_DT?:  string
    BUY_SEQ?:  string
    SAMT_MKET_PTCI_YN?:  TTTC0958U_REQUEST_BODY_SAMT_MKET_PTCI_YN
    SLL_AGCO_OPPS_SLL_YN?:  string
    BOND_RTL_MKET_YN?:  string
    MGCO_APTM_ODNO?:  string
    ORD_SVR_DVSN_CD?:  string
    CTAC_TLNO?:  string
}


export interface TTTC0952U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    PDNO?:  string
    ORD_QTY2?:  string
    BOND_ORD_UNPR?:  string
    SAMT_MKET_PTCI_YN?:  string
    BOND_RTL_MKET_YN?:  string
    IDCR_STFNO?:  string
    MGCO_APTM_ODNO?:  string
    ORD_SVR_DVSN_CD?:  string
    CTAC_TLNO?:  string
}

export type TTTC0953U_REQUEST_BODY_QTY_ALL_ORD_YN = 'Y';
export type TTTC0953U_REQUEST_BODY_RVSE_CNCL_DVSN_CD = '01' | '02';
export interface TTTC0953U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    PDNO?:  string
    ORGN_ODNO?:  string
    ORD_QTY2?:  string
    BOND_ORD_UNPR?:  string
    QTY_ALL_ORD_YN?:  TTTC0953U_REQUEST_BODY_QTY_ALL_ORD_YN
    RVSE_CNCL_DVSN_CD?:  TTTC0953U_REQUEST_BODY_RVSE_CNCL_DVSN_CD
    MGCO_APTM_ODNO?:  string
    ORD_SVR_DVSN_CD?:  string
    CTAC_TLNO?:  string
}


export interface CTSC8035R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    ORD_DT?:  string
    ODNO?:  string
    CTX_AREA_FK200?:  string
    CTX_AREA_NK200?:  string
}


export interface CTSC8013R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    INQR_STRT_DT?:  string
    INQR_END_DT?:  string
    SLL_BUY_DVSN_CD?:  string
    SORT_SQN_DVSN?:  string
    PDNO?:  string
    NCCS_YN?:  string
    CTX_AREA_NK200?:  string
    CTX_AREA_FK200?:  string
}

export type CTSC8407R_REQUEST_BODY_INQR_CNDT = '00' | '01';
export interface CTSC8407R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    INQR_CNDT?:  CTSC8407R_REQUEST_BODY_INQR_CNDT
    PDNO?:  string
    BUY_DT?:  string
    CTX_AREA_FK200?:  string
    CTX_AREA_NK200?:  string
}


export interface TTTC8910R_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    PDNO?:  string
    BOND_ORD_UNPR?:  string
}


export interface CTPF1101R_REQUEST_BODY {
    PDNO?:  string
    PRDT_TYPE_CD?:  string
}


export interface CTPF1114R_REQUEST_BODY {
    PDNO?:  string
    PRDT_TYPE_CD?:  string
}


export interface FHKBJ773401C0_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_INPUT_ISCD?:  string
}

export type CTPF2005R_REQUEST_BODY_PDNO = ' ' | '특정종목 조회시';
export interface CTPF2005R_REQUEST_BODY {
    INQR_STRT_DT?:  string
    INQR_END_DT?:  string
    PDNO?:  CTPF2005R_REQUEST_BODY_PDNO
    PRDT_TYPE_CD?:  string
    VRFC_KIND_CD?:  string
    CTX_AREA_NK30?:  string
    CTX_AREA_FK100?:  string
}


export interface FHKBJ773701C0_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_INPUT_ISCD?:  string
}


export interface FHKBJ773400C0_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_INPUT_ISCD?:  string
}


export interface FHKBJ773403C0_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_INPUT_ISCD?:  string
}


export interface FHKBJ773404C0_REQUEST_BODY {
    FID_COND_MRKT_DIV_CODE?:  string
    FID_INPUT_ISCD?:  string
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
                    
export interface TTTC2202R_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTC2202R_RESPONSE_HEADER,
    body?: TTTC2202R_RESPONSE_BODY
}
                    
export interface TTTC2201R_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTC2201R_RESPONSE_HEADER,
    body?: TTTC2201R_RESPONSE_BODY
}
                    
export interface TTTC0503R_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTC0503R_RESPONSE_HEADER,
    body?: TTTC0503R_RESPONSE_BODY
}
                    
export interface TTTC0506R_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTC0506R_RESPONSE_HEADER,
    body?: TTTC0506R_RESPONSE_BODY
}
                    
export interface TTTC2208R_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTC2208R_RESPONSE_HEADER,
    body?: TTTC2208R_RESPONSE_BODY
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
                    
export interface TTTC8715R_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTC8715R_RESPONSE_HEADER,
    body?: TTTC8715R_RESPONSE_BODY
}
                    
export interface TTTC8708R_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTC8708R_RESPONSE_HEADER,
    body?: TTTC8708R_RESPONSE_BODY
}
                    
export interface TTTC8408R_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTC8408R_RESPONSE_HEADER,
    body?: TTTC8408R_RESPONSE_BODY
}
                    
export interface TTTC0869R_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTC0869R_RESPONSE_HEADER,
    body?: TTTC0869R_RESPONSE_BODY
}
                    
export interface CTRGA011R_RESPONSE {
    code: number | string,
    message: string,
    header?: CTRGA011R_RESPONSE_HEADER,
    body?: CTRGA011R_RESPONSE_BODY
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
                    
export interface FHKST03010100_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKST03010100_RESPONSE_HEADER,
    body?: FHKST03010100_RESPONSE_BODY
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
                    
export interface FHPST01010000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST01010000_RESPONSE_HEADER,
    body?: FHPST01010000_RESPONSE_BODY
}
                    
export interface FHPST02400000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST02400000_RESPONSE_HEADER,
    body?: FHPST02400000_RESPONSE_BODY
}
                    
export interface FHPST02440000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST02440000_RESPONSE_HEADER,
    body?: FHPST02440000_RESPONSE_BODY
}
                    
export interface FHPST02440100_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST02440100_RESPONSE_HEADER,
    body?: FHPST02440100_RESPONSE_BODY
}
                    
export interface FHKST117300C0_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKST117300C0_RESPONSE_HEADER,
    body?: FHKST117300C0_RESPONSE_BODY
}
                    
export interface FHKST121600C0_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKST121600C0_RESPONSE_HEADER,
    body?: FHKST121600C0_RESPONSE_BODY
}
                    
export interface FHPST02300000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST02300000_RESPONSE_HEADER,
    body?: FHPST02300000_RESPONSE_BODY
}
                    
export interface FHPST02300400_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST02300400_RESPONSE_HEADER,
    body?: FHPST02300400_RESPONSE_BODY
}
                    
export interface FHKST03010230_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKST03010230_RESPONSE_HEADER,
    body?: FHKST03010230_RESPONSE_BODY
}
                    
export interface FHKEW15010000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKEW15010000_RESPONSE_HEADER,
    body?: FHKEW15010000_RESPONSE_BODY
}
                    
export interface FHPEW02770000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPEW02770000_RESPONSE_HEADER,
    body?: FHPEW02770000_RESPONSE_BODY
}
                    
export interface FHPEW02780000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPEW02780000_RESPONSE_HEADER,
    body?: FHPEW02780000_RESPONSE_BODY
}
                    
export interface FHPEW02790000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPEW02790000_RESPONSE_HEADER,
    body?: FHPEW02790000_RESPONSE_BODY
}
                    
export interface FHPEW02850000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPEW02850000_RESPONSE_HEADER,
    body?: FHPEW02850000_RESPONSE_BODY
}
                    
export interface FHPEW02870000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPEW02870000_RESPONSE_HEADER,
    body?: FHPEW02870000_RESPONSE_BODY
}
                    
export interface FHPEW02840100_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPEW02840100_RESPONSE_HEADER,
    body?: FHPEW02840100_RESPONSE_BODY
}
                    
export interface FHKEW154800C0_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKEW154800C0_RESPONSE_HEADER,
    body?: FHKEW154800C0_RESPONSE_BODY
}
                    
export interface FHPEW02840300_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPEW02840300_RESPONSE_HEADER,
    body?: FHPEW02840300_RESPONSE_BODY
}
                    
export interface FHPEW02740100_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPEW02740100_RESPONSE_HEADER,
    body?: FHPEW02740100_RESPONSE_BODY
}
                    
export interface FHPEW02740300_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPEW02740300_RESPONSE_HEADER,
    body?: FHPEW02740300_RESPONSE_BODY
}
                    
export interface FHPEW02830100_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPEW02830100_RESPONSE_HEADER,
    body?: FHPEW02830100_RESPONSE_BODY
}
                    
export interface FHPEW02840200_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPEW02840200_RESPONSE_HEADER,
    body?: FHPEW02840200_RESPONSE_BODY
}
                    
export interface FHKEW154101C0_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKEW154101C0_RESPONSE_HEADER,
    body?: FHKEW154101C0_RESPONSE_BODY
}
                    
export interface FHPEW02740200_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPEW02740200_RESPONSE_HEADER,
    body?: FHPEW02740200_RESPONSE_BODY
}
                    
export interface FHPEW02830200_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPEW02830200_RESPONSE_HEADER,
    body?: FHPEW02830200_RESPONSE_BODY
}
                    
export interface FHPEW02840400_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPEW02840400_RESPONSE_HEADER,
    body?: FHPEW02840400_RESPONSE_BODY
}
                    
export interface FHPEW03760000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPEW03760000_RESPONSE_HEADER,
    body?: FHPEW03760000_RESPONSE_BODY
}
                    
export interface FHKEW151701C0_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKEW151701C0_RESPONSE_HEADER,
    body?: FHKEW151701C0_RESPONSE_BODY
}
                    
export interface FHKEW15100000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKEW15100000_RESPONSE_HEADER,
    body?: FHKEW15100000_RESPONSE_BODY
}
                    
export interface FHKEW154100C0_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKEW154100C0_RESPONSE_HEADER,
    body?: FHKEW154100C0_RESPONSE_BODY
}
                    
export interface FHKEW154700C0_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKEW154700C0_RESPONSE_HEADER,
    body?: FHKEW154700C0_RESPONSE_BODY
}
                    
export interface FHKUP03500100_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKUP03500100_RESPONSE_HEADER,
    body?: FHKUP03500100_RESPONSE_BODY
}
                    
export interface CTCA0903R_RESPONSE {
    code: number | string,
    message: string,
    header?: CTCA0903R_RESPONSE_HEADER,
    body?: CTCA0903R_RESPONSE_BODY
}
                    
export interface FHKUP03500200_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKUP03500200_RESPONSE_HEADER,
    body?: FHKUP03500200_RESPONSE_BODY
}
                    
export interface FHPST01390000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST01390000_RESPONSE_HEADER,
    body?: FHPST01390000_RESPONSE_BODY
}
                    
export interface FHPUP02100000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPUP02100000_RESPONSE_HEADER,
    body?: FHPUP02100000_RESPONSE_BODY
}
                    
export interface FHPUP02120000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPUP02120000_RESPONSE_HEADER,
    body?: FHPUP02120000_RESPONSE_BODY
}
                    
export interface FHPUP02140000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPUP02140000_RESPONSE_HEADER,
    body?: FHPUP02140000_RESPONSE_BODY
}
                    
export interface FHKUP11750000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKUP11750000_RESPONSE_HEADER,
    body?: FHKUP11750000_RESPONSE_BODY
}
                    
export interface FHPUP02110100_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPUP02110100_RESPONSE_HEADER,
    body?: FHPUP02110100_RESPONSE_BODY
}
                    
export interface FHPUP02110200_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPUP02110200_RESPONSE_HEADER,
    body?: FHPUP02110200_RESPONSE_BODY
}
                    
export interface FHPST01840000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST01840000_RESPONSE_HEADER,
    body?: FHPST01840000_RESPONSE_BODY
}
                    
export interface FHPST07020000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST07020000_RESPONSE_HEADER,
    body?: FHPST07020000_RESPONSE_BODY
}
                    
export interface FHKST01011800_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKST01011800_RESPONSE_HEADER,
    body?: FHKST01011800_RESPONSE_BODY
}
                    
export interface HHMCM000002C0_RESPONSE {
    code: number | string,
    message: string,
    header?: HHMCM000002C0_RESPONSE_HEADER,
    body?: HHMCM000002C0_RESPONSE_BODY
}
                    
export interface CTPF1604R_RESPONSE {
    code: number | string,
    message: string,
    header?: CTPF1604R_RESPONSE_HEADER,
    body?: CTPF1604R_RESPONSE_BODY
}
                    
export interface CTPF1002R_RESPONSE {
    code: number | string,
    message: string,
    header?: CTPF1002R_RESPONSE_HEADER,
    body?: CTPF1002R_RESPONSE_BODY
}
                    
export interface FHKST66430100_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKST66430100_RESPONSE_HEADER,
    body?: FHKST66430100_RESPONSE_BODY
}
                    
export interface FHKST66430200_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKST66430200_RESPONSE_HEADER,
    body?: FHKST66430200_RESPONSE_BODY
}
                    
export interface FHKST66430300_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKST66430300_RESPONSE_HEADER,
    body?: FHKST66430300_RESPONSE_BODY
}
                    
export interface FHKST66430400_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKST66430400_RESPONSE_HEADER,
    body?: FHKST66430400_RESPONSE_BODY
}
                    
export interface FHKST66430500_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKST66430500_RESPONSE_HEADER,
    body?: FHKST66430500_RESPONSE_BODY
}
                    
export interface FHKST66430600_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKST66430600_RESPONSE_HEADER,
    body?: FHKST66430600_RESPONSE_BODY
}
                    
export interface FHKST66430800_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKST66430800_RESPONSE_HEADER,
    body?: FHKST66430800_RESPONSE_BODY
}
                    
export interface FHPST04770000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST04770000_RESPONSE_HEADER,
    body?: FHPST04770000_RESPONSE_BODY
}
                    
export interface HHKDB669102C0_RESPONSE {
    code: number | string,
    message: string,
    header?: HHKDB669102C0_RESPONSE_HEADER,
    body?: HHKDB669102C0_RESPONSE_BODY
}
                    
export interface HHKDB669103C0_RESPONSE {
    code: number | string,
    message: string,
    header?: HHKDB669103C0_RESPONSE_HEADER,
    body?: HHKDB669103C0_RESPONSE_BODY
}
                    
export interface HHKDB669104C0_RESPONSE {
    code: number | string,
    message: string,
    header?: HHKDB669104C0_RESPONSE_HEADER,
    body?: HHKDB669104C0_RESPONSE_BODY
}
                    
export interface HHKDB669105C0_RESPONSE {
    code: number | string,
    message: string,
    header?: HHKDB669105C0_RESPONSE_HEADER,
    body?: HHKDB669105C0_RESPONSE_BODY
}
                    
export interface HHKDB669106C0_RESPONSE {
    code: number | string,
    message: string,
    header?: HHKDB669106C0_RESPONSE_HEADER,
    body?: HHKDB669106C0_RESPONSE_BODY
}
                    
export interface HHKDB669107C0_RESPONSE {
    code: number | string,
    message: string,
    header?: HHKDB669107C0_RESPONSE_HEADER,
    body?: HHKDB669107C0_RESPONSE_BODY
}
                    
export interface HHKDB669108C0_RESPONSE {
    code: number | string,
    message: string,
    header?: HHKDB669108C0_RESPONSE_HEADER,
    body?: HHKDB669108C0_RESPONSE_BODY
}
                    
export interface HHKDB669109C0_RESPONSE {
    code: number | string,
    message: string,
    header?: HHKDB669109C0_RESPONSE_HEADER,
    body?: HHKDB669109C0_RESPONSE_BODY
}
                    
export interface HHKDB669110C0_RESPONSE {
    code: number | string,
    message: string,
    header?: HHKDB669110C0_RESPONSE_HEADER,
    body?: HHKDB669110C0_RESPONSE_BODY
}
                    
export interface HHKDB669100C0_RESPONSE {
    code: number | string,
    message: string,
    header?: HHKDB669100C0_RESPONSE_HEADER,
    body?: HHKDB669100C0_RESPONSE_BODY
}
                    
export interface HHKDB669101C0_RESPONSE {
    code: number | string,
    message: string,
    header?: HHKDB669101C0_RESPONSE_HEADER,
    body?: HHKDB669101C0_RESPONSE_BODY
}
                    
export interface HHKDB669111C0_RESPONSE {
    code: number | string,
    message: string,
    header?: HHKDB669111C0_RESPONSE_HEADER,
    body?: HHKDB669111C0_RESPONSE_BODY
}
                    
export interface HHKST668300C0_RESPONSE {
    code: number | string,
    message: string,
    header?: HHKST668300C0_RESPONSE_HEADER,
    body?: HHKST668300C0_RESPONSE_BODY
}
                    
export interface CTSC2702R_RESPONSE {
    code: number | string,
    message: string,
    header?: CTSC2702R_RESPONSE_HEADER,
    body?: CTSC2702R_RESPONSE_BODY
}
                    
export interface FHKST663300C0_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKST663300C0_RESPONSE_HEADER,
    body?: FHKST663300C0_RESPONSE_BODY
}
                    
export interface FHKST663400C0_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKST663400C0_RESPONSE_HEADER,
    body?: FHKST663400C0_RESPONSE_BODY
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
                    
export interface HHPTJ04160200_RESPONSE {
    code: number | string,
    message: string,
    header?: HHPTJ04160200_RESPONSE_HEADER,
    body?: HHPTJ04160200_RESPONSE_BODY
}
                    
export interface FHKST03010800_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKST03010800_RESPONSE_HEADER,
    body?: FHKST03010800_RESPONSE_BODY
}
                    
export interface FHPTJ04030000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPTJ04030000_RESPONSE_HEADER,
    body?: FHPTJ04030000_RESPONSE_BODY
}
                    
export interface FHPST04760000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST04760000_RESPONSE_HEADER,
    body?: FHPST04760000_RESPONSE_BODY
}
                    
export interface FHPST01810000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST01810000_RESPONSE_HEADER,
    body?: FHPST01810000_RESPONSE_BODY
}
                    
export interface FHPST04830000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST04830000_RESPONSE_HEADER,
    body?: FHPST04830000_RESPONSE_BODY
}
                    
export interface FHPPG04600000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPPG04600000_RESPONSE_HEADER,
    body?: FHPPG04600000_RESPONSE_BODY
}
                    
export interface FHKST11860000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKST11860000_RESPONSE_HEADER,
    body?: FHKST11860000_RESPONSE_BODY
}
                    
export interface FHPPG04600100_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPPG04600100_RESPONSE_HEADER,
    body?: FHPPG04600100_RESPONSE_BODY
}
                    
export interface HHPST074500C0_RESPONSE {
    code: number | string,
    message: string,
    header?: HHPST074500C0_RESPONSE_HEADER,
    body?: HHPST074500C0_RESPONSE_BODY
}
                    
export interface FHKST644100C0_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKST644100C0_RESPONSE_HEADER,
    body?: FHKST644100C0_RESPONSE_BODY
}
                    
export interface FHKST644400C0_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKST644400C0_RESPONSE_HEADER,
    body?: FHKST644400C0_RESPONSE_BODY
}
                    
export interface FHKST111900C0_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKST111900C0_RESPONSE_HEADER,
    body?: FHKST111900C0_RESPONSE_BODY
}
                    
export interface FHKST649100C0_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKST649100C0_RESPONSE_HEADER,
    body?: FHKST649100C0_RESPONSE_BODY
}
                    
export interface FHPTJ04040000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPTJ04040000_RESPONSE_HEADER,
    body?: FHPTJ04040000_RESPONSE_BODY
}
                    
export interface FHPPG04650200_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPPG04650200_RESPONSE_HEADER,
    body?: FHPPG04650200_RESPONSE_BODY
}
                    
export interface HHPPG046600C0_RESPONSE {
    code: number | string,
    message: string,
    header?: HHPPG046600C0_RESPONSE_HEADER,
    body?: HHPPG046600C0_RESPONSE_BODY
}
                    
export interface HHKCM113004C6_RESPONSE {
    code: number | string,
    message: string,
    header?: HHKCM113004C6_RESPONSE_HEADER,
    body?: HHKCM113004C6_RESPONSE_BODY
}
                    
export interface HHKCM113004C7_RESPONSE {
    code: number | string,
    message: string,
    header?: HHKCM113004C7_RESPONSE_HEADER,
    body?: HHKCM113004C7_RESPONSE_BODY
}
                    
export interface FHKST11300006_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKST11300006_RESPONSE_HEADER,
    body?: FHKST11300006_RESPONSE_BODY
}
                    
export interface FHKST130000C0_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKST130000C0_RESPONSE_HEADER,
    body?: FHKST130000C0_RESPONSE_BODY
}
                    
export interface FHPST04320000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST04320000_RESPONSE_HEADER,
    body?: FHPST04320000_RESPONSE_BODY
}
                    
export interface FHPST01130000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST01130000_RESPONSE_HEADER,
    body?: FHPST01130000_RESPONSE_BODY
}
                    
export interface FHPST04540000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST04540000_RESPONSE_HEADER,
    body?: FHPST04540000_RESPONSE_BODY
}
                    
export interface FHPST01710000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST01710000_RESPONSE_HEADER,
    body?: FHPST01710000_RESPONSE_BODY
}
                    
export interface FHPST01700000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST01700000_RESPONSE_HEADER,
    body?: FHPST01700000_RESPONSE_BODY
}
                    
export interface FHPST01730000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST01730000_RESPONSE_HEADER,
    body?: FHPST01730000_RESPONSE_BODY
}
                    
export interface FHPST01740000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST01740000_RESPONSE_HEADER,
    body?: FHPST01740000_RESPONSE_BODY
}
                    
export interface FHPST01750000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST01750000_RESPONSE_HEADER,
    body?: FHPST01750000_RESPONSE_BODY
}
                    
export interface FHPST01760000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST01760000_RESPONSE_HEADER,
    body?: FHPST01760000_RESPONSE_BODY
}
                    
export interface FHPST01770000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST01770000_RESPONSE_HEADER,
    body?: FHPST01770000_RESPONSE_BODY
}
                    
export interface FHPST01720000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST01720000_RESPONSE_HEADER,
    body?: FHPST01720000_RESPONSE_BODY
}
                    
export interface FHPST01780000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST01780000_RESPONSE_HEADER,
    body?: FHPST01780000_RESPONSE_BODY
}
                    
export interface FHPST01790000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST01790000_RESPONSE_HEADER,
    body?: FHPST01790000_RESPONSE_BODY
}
                    
export interface FHPST01680000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST01680000_RESPONSE_HEADER,
    body?: FHPST01680000_RESPONSE_BODY
}
                    
export interface FHPST01800000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST01800000_RESPONSE_HEADER,
    body?: FHPST01800000_RESPONSE_BODY
}
                    
export interface FHPST01820000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST01820000_RESPONSE_HEADER,
    body?: FHPST01820000_RESPONSE_BODY
}
                    
export interface FHPST01860000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST01860000_RESPONSE_HEADER,
    body?: FHPST01860000_RESPONSE_BODY
}
                    
export interface FHPST01870000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST01870000_RESPONSE_HEADER,
    body?: FHPST01870000_RESPONSE_BODY
}
                    
export interface FHKST190900C0_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKST190900C0_RESPONSE_HEADER,
    body?: FHKST190900C0_RESPONSE_BODY
}
                    
export interface FHPST04820000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST04820000_RESPONSE_HEADER,
    body?: FHPST04820000_RESPONSE_BODY
}
                    
export interface FHKST17010000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKST17010000_RESPONSE_HEADER,
    body?: FHKST17010000_RESPONSE_BODY
}
                    
export interface HHKDB13470100_RESPONSE {
    code: number | string,
    message: string,
    header?: HHKDB13470100_RESPONSE_HEADER,
    body?: HHKDB13470100_RESPONSE_BODY
}
                    
export interface FHPST02340000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST02340000_RESPONSE_HEADER,
    body?: FHPST02340000_RESPONSE_BODY
}
                    
export interface FHPST02350000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPST02350000_RESPONSE_HEADER,
    body?: FHPST02350000_RESPONSE_BODY
}
                    
export interface HHMCM000100C0_RESPONSE {
    code: number | string,
    message: string,
    header?: HHMCM000100C0_RESPONSE_HEADER,
    body?: HHMCM000100C0_RESPONSE_BODY
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
                    
export interface JTCE1004R_RESPONSE {
    code: number | string,
    message: string,
    header?: JTCE1004R_RESPONSE_HEADER,
    body?: JTCE1004R_RESPONSE_BODY
}
                    
export interface CTFO6117R_RESPONSE {
    code: number | string,
    message: string,
    header?: CTFO6117R_RESPONSE_HEADER,
    body?: CTFO6117R_RESPONSE_BODY
}
                    
export interface CTRP6550R_RESPONSE {
    code: number | string,
    message: string,
    header?: CTRP6550R_RESPONSE_HEADER,
    body?: CTRP6550R_RESPONSE_BODY
}
                    
export interface CTFO6159R_RESPONSE {
    code: number | string,
    message: string,
    header?: CTFO6159R_RESPONSE_HEADER,
    body?: CTFO6159R_RESPONSE_BODY
}
                    
export interface CTFO5139R_RESPONSE {
    code: number | string,
    message: string,
    header?: CTFO5139R_RESPONSE_HEADER,
    body?: CTFO5139R_RESPONSE_BODY
}
                    
export interface CTFO6119R_RESPONSE {
    code: number | string,
    message: string,
    header?: CTFO6119R_RESPONSE_HEADER,
    body?: CTFO6119R_RESPONSE_BODY
}
                    
export interface JTCE6003R_RESPONSE {
    code: number | string,
    message: string,
    header?: JTCE6003R_RESPONSE_HEADER,
    body?: JTCE6003R_RESPONSE_BODY
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
                    
export interface FHKIF03020200_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKIF03020200_RESPONSE_HEADER,
    body?: FHKIF03020200_RESPONSE_BODY
}
                    
export interface FHPIF05110100_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPIF05110100_RESPONSE_HEADER,
    body?: FHPIF05110100_RESPONSE_BODY
}
                    
export interface FHPIO056104C0_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPIO056104C0_RESPONSE_HEADER,
    body?: FHPIO056104C0_RESPONSE_BODY
}
                    
export interface FHPIF05030000_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPIF05030000_RESPONSE_HEADER,
    body?: FHPIF05030000_RESPONSE_BODY
}
                    
export interface FHPIF05030100_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPIF05030100_RESPONSE_HEADER,
    body?: FHPIF05030100_RESPONSE_BODY
}
                    
export interface FHPIF05030200_RESPONSE {
    code: number | string,
    message: string,
    header?: FHPIF05030200_RESPONSE_HEADER,
    body?: FHPIF05030200_RESPONSE_BODY
}
                    
export interface H0CFASP0_RESPONSE {
    code: number | string,
    message: string,
    header?: H0CFASP0_RESPONSE_HEADER,
    body?: H0CFASP0_RESPONSE_BODY
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
                    
export interface TTTS3018R_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTS3018R_RESPONSE_HEADER,
    body?: TTTS3018R_RESPONSE_BODY
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
                    
export interface TTTS3014R_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTS3014R_RESPONSE_HEADER,
    body?: TTTS3014R_RESPONSE_BODY
}
                    
export interface TTTS3007R_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTS3007R_RESPONSE_HEADER,
    body?: TTTS3007R_RESPONSE_BODY
}
                    
export interface VTTS3007R_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTS3007R_RESPONSE_HEADER,
    body?: VTTS3007R_RESPONSE_BODY
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
                    
export interface TTTC2101R_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTC2101R_RESPONSE_HEADER,
    body?: TTTC2101R_RESPONSE_BODY
}
                    
export interface CTOS4001R_RESPONSE {
    code: number | string,
    message: string,
    header?: CTOS4001R_RESPONSE_HEADER,
    body?: CTOS4001R_RESPONSE_BODY
}
                    
export interface CTRP6010R_RESPONSE {
    code: number | string,
    message: string,
    header?: CTRP6010R_RESPONSE_HEADER,
    body?: CTRP6010R_RESPONSE_BODY
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
                    
export interface HHDFS76950200_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFS76950200_RESPONSE_HEADER,
    body?: HHDFS76950200_RESPONSE_BODY
}
                    
export interface FHKST03030200_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKST03030200_RESPONSE_HEADER,
    body?: FHKST03030200_RESPONSE_BODY
}
                    
export interface CTPF1702R_RESPONSE {
    code: number | string,
    message: string,
    header?: CTPF1702R_RESPONSE_HEADER,
    body?: CTPF1702R_RESPONSE_BODY
}
                    
export interface HHDFS76200300_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFS76200300_RESPONSE_HEADER,
    body?: HHDFS76200300_RESPONSE_BODY
}
                    
export interface HHDFS76370000_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFS76370000_RESPONSE_HEADER,
    body?: HHDFS76370000_RESPONSE_BODY
}
                    
export interface HHDFS76370100_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFS76370100_RESPONSE_HEADER,
    body?: HHDFS76370100_RESPONSE_BODY
}
                    
export interface HHDFS76200100_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFS76200100_RESPONSE_HEADER,
    body?: HHDFS76200100_RESPONSE_BODY
}
                    
export interface HHDFS76260000_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFS76260000_RESPONSE_HEADER,
    body?: HHDFS76260000_RESPONSE_BODY
}
                    
export interface HHDFS76270000_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFS76270000_RESPONSE_HEADER,
    body?: HHDFS76270000_RESPONSE_BODY
}
                    
export interface HHDFS76280000_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFS76280000_RESPONSE_HEADER,
    body?: HHDFS76280000_RESPONSE_BODY
}
                    
export interface HHDFS76290000_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFS76290000_RESPONSE_HEADER,
    body?: HHDFS76290000_RESPONSE_BODY
}
                    
export interface HHDFS76300000_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFS76300000_RESPONSE_HEADER,
    body?: HHDFS76300000_RESPONSE_BODY
}
                    
export interface HHDFS76310010_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFS76310010_RESPONSE_HEADER,
    body?: HHDFS76310010_RESPONSE_BODY
}
                    
export interface HHDFS76320010_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFS76320010_RESPONSE_HEADER,
    body?: HHDFS76320010_RESPONSE_BODY
}
                    
export interface HHDFS76330000_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFS76330000_RESPONSE_HEADER,
    body?: HHDFS76330000_RESPONSE_BODY
}
                    
export interface HHDFS76340000_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFS76340000_RESPONSE_HEADER,
    body?: HHDFS76340000_RESPONSE_BODY
}
                    
export interface HHDFS76350100_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFS76350100_RESPONSE_HEADER,
    body?: HHDFS76350100_RESPONSE_BODY
}
                    
export interface CTRGT011R_RESPONSE {
    code: number | string,
    message: string,
    header?: CTRGT011R_RESPONSE_HEADER,
    body?: CTRGT011R_RESPONSE_BODY
}
                    
export interface HHPSTH60100C1_RESPONSE {
    code: number | string,
    message: string,
    header?: HHPSTH60100C1_RESPONSE_HEADER,
    body?: HHPSTH60100C1_RESPONSE_BODY
}
                    
export interface HHDFS78330900_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFS78330900_RESPONSE_HEADER,
    body?: HHDFS78330900_RESPONSE_BODY
}
                    
export interface CTLN4050R_RESPONSE {
    code: number | string,
    message: string,
    header?: CTLN4050R_RESPONSE_HEADER,
    body?: CTLN4050R_RESPONSE_BODY
}
                    
export interface FHKST01011801_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKST01011801_RESPONSE_HEADER,
    body?: FHKST01011801_RESPONSE_BODY
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
                    
export interface OTFM3115R_RESPONSE {
    code: number | string,
    message: string,
    header?: OTFM3115R_RESPONSE_HEADER,
    body?: OTFM3115R_RESPONSE_BODY
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
                    
export interface HHDFC55020400_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFC55020400_RESPONSE_HEADER,
    body?: HHDFC55020400_RESPONSE_BODY
}
                    
export interface HHDFC55020000_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFC55020000_RESPONSE_HEADER,
    body?: HHDFC55020000_RESPONSE_BODY
}
                    
export interface HHDFC55020100_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFC55020100_RESPONSE_HEADER,
    body?: HHDFC55020100_RESPONSE_BODY
}
                    
export interface HHDFC55020200_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFC55020200_RESPONSE_HEADER,
    body?: HHDFC55020200_RESPONSE_BODY
}
                    
export interface HHDFC55020300_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFC55020300_RESPONSE_HEADER,
    body?: HHDFC55020300_RESPONSE_BODY
}
                    
export interface HHDFC86000000_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFC86000000_RESPONSE_HEADER,
    body?: HHDFC86000000_RESPONSE_BODY
}
                    
export interface HHDFC55200000_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFC55200000_RESPONSE_HEADER,
    body?: HHDFC55200000_RESPONSE_BODY
}
                    
export interface OTFM2229R_RESPONSE {
    code: number | string,
    message: string,
    header?: OTFM2229R_RESPONSE_HEADER,
    body?: OTFM2229R_RESPONSE_BODY
}
                    
export interface HHDDB95030000_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDDB95030000_RESPONSE_HEADER,
    body?: HHDDB95030000_RESPONSE_BODY
}
                    
export interface HHDFO86000000_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFO86000000_RESPONSE_HEADER,
    body?: HHDFO86000000_RESPONSE_BODY
}
                    
export interface HHDFO55010100_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFO55010100_RESPONSE_HEADER,
    body?: HHDFO55010100_RESPONSE_BODY
}
                    
export interface HHDFO55010000_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFO55010000_RESPONSE_HEADER,
    body?: HHDFO55010000_RESPONSE_BODY
}
                    
export interface HHDFO55020000_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFO55020000_RESPONSE_HEADER,
    body?: HHDFO55020000_RESPONSE_BODY
}
                    
export interface HHDFO55020100_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFO55020100_RESPONSE_HEADER,
    body?: HHDFO55020100_RESPONSE_BODY
}
                    
export interface HHDFO55020200_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFO55020200_RESPONSE_HEADER,
    body?: HHDFO55020200_RESPONSE_BODY
}
                    
export interface HHDFO55020300_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFO55020300_RESPONSE_HEADER,
    body?: HHDFO55020300_RESPONSE_BODY
}
                    
export interface HHDFO55020400_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFO55020400_RESPONSE_HEADER,
    body?: HHDFO55020400_RESPONSE_BODY
}
                    
export interface HHDFO55200000_RESPONSE {
    code: number | string,
    message: string,
    header?: HHDFO55200000_RESPONSE_HEADER,
    body?: HHDFO55200000_RESPONSE_BODY
}
                    
export interface TTTC0958U_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTC0958U_RESPONSE_HEADER,
    body?: TTTC0958U_RESPONSE_BODY
}
                    
export interface TTTC0952U_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTC0952U_RESPONSE_HEADER,
    body?: TTTC0952U_RESPONSE_BODY
}
                    
export interface TTTC0953U_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTC0953U_RESPONSE_HEADER,
    body?: TTTC0953U_RESPONSE_BODY
}
                    
export interface CTSC8035R_RESPONSE {
    code: number | string,
    message: string,
    header?: CTSC8035R_RESPONSE_HEADER,
    body?: CTSC8035R_RESPONSE_BODY
}
                    
export interface CTSC8013R_RESPONSE {
    code: number | string,
    message: string,
    header?: CTSC8013R_RESPONSE_HEADER,
    body?: CTSC8013R_RESPONSE_BODY
}
                    
export interface CTSC8407R_RESPONSE {
    code: number | string,
    message: string,
    header?: CTSC8407R_RESPONSE_HEADER,
    body?: CTSC8407R_RESPONSE_BODY
}
                    
export interface TTTC8910R_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTC8910R_RESPONSE_HEADER,
    body?: TTTC8910R_RESPONSE_BODY
}
                    
export interface CTPF1101R_RESPONSE {
    code: number | string,
    message: string,
    header?: CTPF1101R_RESPONSE_HEADER,
    body?: CTPF1101R_RESPONSE_BODY
}
                    
export interface CTPF1114R_RESPONSE {
    code: number | string,
    message: string,
    header?: CTPF1114R_RESPONSE_HEADER,
    body?: CTPF1114R_RESPONSE_BODY
}
                    
export interface FHKBJ773401C0_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKBJ773401C0_RESPONSE_HEADER,
    body?: FHKBJ773401C0_RESPONSE_BODY
}
                    
export interface CTPF2005R_RESPONSE {
    code: number | string,
    message: string,
    header?: CTPF2005R_RESPONSE_HEADER,
    body?: CTPF2005R_RESPONSE_BODY
}
                    
export interface FHKBJ773701C0_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKBJ773701C0_RESPONSE_HEADER,
    body?: FHKBJ773701C0_RESPONSE_BODY
}
                    
export interface FHKBJ773400C0_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKBJ773400C0_RESPONSE_HEADER,
    body?: FHKBJ773400C0_RESPONSE_BODY
}
                    
export interface FHKBJ773403C0_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKBJ773403C0_RESPONSE_HEADER,
    body?: FHKBJ773403C0_RESPONSE_BODY
}
                    
export interface FHKBJ773404C0_RESPONSE {
    code: number | string,
    message: string,
    header?: FHKBJ773404C0_RESPONSE_HEADER,
    body?: FHKBJ773404C0_RESPONSE_BODY
}
                    

export interface APPROVAL_RESPONSE_HEADER {
}


export interface HASHKEY_RESPONSE_HEADER {
}


export interface TOKENP_RESPONSE_HEADER {
}


export interface REVOKEP_RESPONSE_HEADER {
}

export type TTTC0802U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTC0802U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC0802U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTC0801U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTC0801U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC0801U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTC0802U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTTC0802U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTC0802U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTC0801U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTTC0801U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTC0801U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTC0852U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTC0852U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC0852U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTC0851U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTC0851U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC0851U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTC0803U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTC0803U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC0803U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTC0803U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTTC0803U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTC0803U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTC8036R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTC8036R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC8036R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTC8001R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTC8001R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC8001R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTSC9115R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface CTSC9115R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTSC9115R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTC8001R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTTC8001R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTC8001R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTSC9115R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTSC9115R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTSC9115R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTC8434R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTC8434R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC8434R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTC8434R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTTC8434R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTC8434R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTC8908R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTC8908R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC8908R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTC8908R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTTC8908R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTC8908R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTSC0008U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface CTSC0008U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTSC0008U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTSC0009U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface CTSC0009U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTSC0009U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTSC0013U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface CTSC0013U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTSC0013U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTSC0004R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface CTSC0004R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTSC0004R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTC2202R_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface TTTC2202R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC2202R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTC2201R_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface TTTC2201R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC2201R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTC0503R_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface TTTC0503R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC0503R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTC0506R_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface TTTC0506R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC0506R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTC2208R_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface TTTC2208R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC2208R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTC8494R_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface TTTC8494R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC8494R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTC8909R_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface TTTC8909R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC8909R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTRP6548R_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface CTRP6548R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTRP6548R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTC8715R_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface TTTC8715R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC8715R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTC8708R_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface TTTC8708R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC8708R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTC8408R_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface TTTC8408R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC8408R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTC0869R_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface TTTC0869R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC0869R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTRGA011R_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface CTRGA011R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTRGA011R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST01010100_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface FHKST01010100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST01010100_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST01010300_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface FHKST01010300_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST01010300_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST01010400_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface FHKST01010400_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST01010400_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST01010200_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface FHKST01010200_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST01010200_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST01010900_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface FHKST01010900_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST01010900_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST01010600_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface FHKST01010600_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST01010600_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}


export interface FHKST03010100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    gt_uid?:  string
}

export type FHPST01060000_RESPONSE_HEADER_TR_CONT = '';
export interface FHPST01060000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST01060000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST02310000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPST02310000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST02310000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST02320000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPST02320000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST02320000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST03010200_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKST03010200_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST03010200_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST01010000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPST01010000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST01010000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST02400000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPST02400000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST02400000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST02440000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPST02440000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST02440000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST02440100_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPST02440100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST02440100_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST117300C0_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKST117300C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST117300C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST121600C0_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKST121600C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST121600C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST02300000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPST02300000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST02300000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST02300400_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPST02300400_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST02300400_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST03010230_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKST03010230_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST03010230_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKEW15010000_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface FHKEW15010000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKEW15010000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPEW02770000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPEW02770000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPEW02770000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPEW02780000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPEW02780000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPEW02780000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPEW02790000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPEW02790000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPEW02790000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPEW02850000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPEW02850000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPEW02850000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPEW02870000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPEW02870000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPEW02870000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPEW02840100_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPEW02840100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPEW02840100_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKEW154800C0_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKEW154800C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKEW154800C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPEW02840300_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPEW02840300_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPEW02840300_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPEW02740100_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPEW02740100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPEW02740100_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPEW02740300_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPEW02740300_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPEW02740300_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPEW02830100_RESPONSE_HEADER_TR_CONT = '';
export interface FHPEW02830100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPEW02830100_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPEW02840200_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPEW02840200_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPEW02840200_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKEW154101C0_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKEW154101C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKEW154101C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPEW02740200_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPEW02740200_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPEW02740200_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPEW02830200_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPEW02830200_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPEW02830200_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPEW02840400_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPEW02840400_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPEW02840400_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPEW03760000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPEW03760000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPEW03760000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKEW151701C0_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKEW151701C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKEW151701C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKEW15100000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKEW15100000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKEW15100000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKEW154100C0_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKEW154100C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKEW154100C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKEW154700C0_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKEW154700C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKEW154700C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}


export interface FHKUP03500100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    gt_uid?:  string
}

export type CTCA0903R_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface CTCA0903R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTCA0903R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKUP03500200_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKUP03500200_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKUP03500200_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST01390000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPST01390000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST01390000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPUP02100000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPUP02100000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPUP02100000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPUP02120000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPUP02120000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPUP02120000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPUP02140000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPUP02140000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPUP02140000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKUP11750000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKUP11750000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKUP11750000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPUP02110100_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPUP02110100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPUP02110100_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPUP02110200_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPUP02110200_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPUP02110200_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST01840000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPST01840000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST01840000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST07020000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPST07020000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST07020000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST01011800_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKST01011800_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST01011800_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHMCM000002C0_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHMCM000002C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHMCM000002C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTPF1604R_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface CTPF1604R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTPF1604R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTPF1002R_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface CTPF1002R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTPF1002R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST66430100_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKST66430100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST66430100_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST66430200_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKST66430200_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST66430200_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST66430300_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKST66430300_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST66430300_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST66430400_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKST66430400_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST66430400_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST66430500_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKST66430500_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST66430500_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST66430600_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKST66430600_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST66430600_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST66430800_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKST66430800_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST66430800_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST04770000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPST04770000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST04770000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHKDB669102C0_RESPONSE_HEADER_TR_CONT = '';
export interface HHKDB669102C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHKDB669102C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHKDB669103C0_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHKDB669103C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHKDB669103C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHKDB669104C0_RESPONSE_HEADER_TR_CONT = '';
export interface HHKDB669104C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHKDB669104C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHKDB669105C0_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHKDB669105C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHKDB669105C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHKDB669106C0_RESPONSE_HEADER_TR_CONT = '';
export interface HHKDB669106C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHKDB669106C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHKDB669107C0_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHKDB669107C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHKDB669107C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHKDB669108C0_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHKDB669108C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHKDB669108C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHKDB669109C0_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHKDB669109C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHKDB669109C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHKDB669110C0_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHKDB669110C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHKDB669110C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHKDB669100C0_RESPONSE_HEADER_TR_CONT = '';
export interface HHKDB669100C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHKDB669100C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHKDB669101C0_RESPONSE_HEADER_TR_CONT = '';
export interface HHKDB669101C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHKDB669101C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHKDB669111C0_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHKDB669111C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHKDB669111C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHKST668300C0_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHKST668300C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHKST668300C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTSC2702R_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface CTSC2702R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTSC2702R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST663300C0_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKST663300C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST663300C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST663400C0_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKST663400C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST663400C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPTJ04400000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPTJ04400000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPTJ04400000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHKST03900300_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHKST03900300_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHKST03900300_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHKST03900400_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHKST03900400_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHKST03900400_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPPG04650100_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPPG04650100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPPG04650100_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHPTJ04160200_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHPTJ04160200_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHPTJ04160200_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST03010800_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKST03010800_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST03010800_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPTJ04030000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPTJ04030000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPTJ04030000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST04760000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPST04760000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST04760000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST01810000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPST01810000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST01810000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST04830000_RESPONSE_HEADER_TR_CONT = '';
export interface FHPST04830000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST04830000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPPG04600000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPPG04600000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPPG04600000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST11860000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKST11860000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST11860000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPPG04600100_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPPG04600100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPPG04600100_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHPST074500C0_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHPST074500C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHPST074500C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST644100C0_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKST644100C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST644100C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST644400C0_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKST644400C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST644400C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST111900C0_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKST111900C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST111900C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST649100C0_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKST649100C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST649100C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPTJ04040000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPTJ04040000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPTJ04040000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPPG04650200_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPPG04650200_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPPG04650200_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHPPG046600C0_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHPPG046600C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHPPG046600C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHKCM113004C6_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHKCM113004C6_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHKCM113004C6_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHKCM113004C7_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHKCM113004C7_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHKCM113004C7_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST11300006_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKST11300006_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST11300006_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST130000C0_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKST130000C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST130000C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST04320000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPST04320000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST04320000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST01130000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPST01130000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST01130000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST04540000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPST04540000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST04540000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST01710000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPST01710000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST01710000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST01700000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPST01700000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST01700000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST01730000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPST01730000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST01730000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST01740000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPST01740000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST01740000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST01750000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPST01750000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST01750000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST01760000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPST01760000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST01760000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST01770000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPST01770000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST01770000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST01720000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPST01720000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST01720000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST01780000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPST01780000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST01780000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST01790000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPST01790000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST01790000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST01680000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPST01680000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST01680000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST01800000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPST01800000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST01800000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST01820000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPST01820000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST01820000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST01860000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPST01860000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST01860000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST01870000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPST01870000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST01870000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST190900C0_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKST190900C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST190900C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST04820000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPST04820000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST04820000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST17010000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKST17010000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST17010000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHKDB13470100_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHKDB13470100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHKDB13470100_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST02340000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPST02340000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST02340000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPST02350000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPST02350000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPST02350000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHMCM000100C0_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHMCM000100C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHMCM000100C0_RESPONSE_HEADER_TR_CONT
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

export type TTTO5201R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTO5201R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTO5201R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTO5201R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTTO5201R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTO5201R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTFO6118R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface CTFO6118R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTFO6118R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTFO6118R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTFO6118R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTFO6118R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTO5105R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTO5105R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTO5105R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTO5105R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTTO5105R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTO5105R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type JTCE5005R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface JTCE5005R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  JTCE5005R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type JTCE6001R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface JTCE6001R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  JTCE6001R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type JTCE1004R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface JTCE1004R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  JTCE1004R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTFO6117R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface CTFO6117R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTFO6117R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTRP6550R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface CTRP6550R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTRP6550R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTFO6159R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface CTFO6159R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTFO6159R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTFO5139R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface CTFO5139R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTFO5139R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTFO6119R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface CTFO6119R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTFO6119R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type JTCE6003R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface JTCE6003R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  JTCE6003R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHMIF10000000_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface FHMIF10000000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHMIF10000000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHMIF10010000_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
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

export type FHKIF03020200_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKIF03020200_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKIF03020200_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPIF05110100_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPIF05110100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPIF05110100_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPIO056104C0_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPIO056104C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPIO056104C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPIF05030000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPIF05030000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPIF05030000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPIF05030100_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPIF05030100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPIF05030100_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHPIF05030200_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHPIF05030200_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHPIF05030200_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}


export interface H0CFASP0_RESPONSE_HEADER {
}

export type TTTT1002U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTT1002U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTT1002U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTT1006U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTT1006U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTT1006U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS0308U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTS0308U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS0308U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS0307U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTS0307U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS0307U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS0202U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTS0202U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS0202U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS1005U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTS1005U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS1005U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS1002U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTS1002U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS1002U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS1001U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTS1001U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS1001U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS0305U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTS0305U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS0305U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS0304U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTS0304U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS0304U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS0311U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTS0311U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS0311U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS0310U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTS0310U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS0310U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTT1002U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTTT1002U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTT1002U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTT1001U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTTT1001U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTT1001U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS0308U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTTS0308U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS0308U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS0307U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTTS0307U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS0307U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS0202U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTTS0202U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS0202U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS1005U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTTS1005U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS1005U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS1002U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTTS1002U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS1002U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS1001U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTTS1001U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS1001U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS0305U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTTS0305U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS0305U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS0304U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTTS0304U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS0304U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS0311U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTTS0311U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS0311U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS0310U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTTS0310U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS0310U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTT1004U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTT1004U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTT1004U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS1003U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTS1003U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS1003U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS0309U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTS0309U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS0309U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS0302U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTS0302U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS0302U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS0306U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTS0306U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS0306U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS0312U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTS0312U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS0312U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTT1004U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTTT1004U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTT1004U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS1003U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTTS1003U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS1003U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS0309U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTTS0309U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS0309U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS0302U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTTS0302U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS0302U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS0306U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTTS0306U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS0306U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS0312U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTTS0312U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS0312U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTT3016U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTT3016U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTT3016U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTT3014U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTT3014U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTT3014U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS3013U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTS3013U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS3013U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTT3016U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTTT3016U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTT3016U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTT3014U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTTT3014U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTT3014U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS3013U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTTS3013U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS3013U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTT3017U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTT3017U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTT3017U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTT3017U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTTT3017U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTT3017U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS3018R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTS3018R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS3018R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS3012R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTS3012R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS3012R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS3012R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTTS3012R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS3012R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS3035R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTS3035R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS3035R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS3035R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTTS3035R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS3035R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTRP6504R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface CTRP6504R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTRP6504R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTRP6504R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTRP6504R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTRP6504R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTT3039R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTT3039R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTT3039R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS3014R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTS3014R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS3014R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS3007R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface TTTS3007R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS3007R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS3007R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface VTTS3007R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS3007R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}


export interface TTTS6036U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    gt_uid?:  string
}


export interface TTTS6037U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    gt_uid?:  string
}


export interface TTTS6038U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    gt_uid?:  string
}

export type TTTS3039R_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface TTTS3039R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS3039R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTC2101R_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface TTTC2101R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC2101R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTOS4001R_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface CTOS4001R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTOS4001R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTRP6010R_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface CTRP6010R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTRP6010R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFS00000300_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface HHDFS00000300_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFS00000300_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFS76240000_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface HHDFS76240000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFS76240000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST03030100_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKST03030100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST03030100_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFS76410000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHDFS76410000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFS76410000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTOS5011R_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface CTOS5011R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTOS5011R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFS76200200_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHDFS76200200_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFS76200200_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFS76950200_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHDFS76950200_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFS76950200_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST03030200_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKST03030200_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST03030200_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTPF1702R_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface CTPF1702R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTPF1702R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFS76200300_RESPONSE_HEADER_TR_CONT = '';
export interface HHDFS76200300_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFS76200300_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFS76370000_RESPONSE_HEADER_TR_CONT = '';
export interface HHDFS76370000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFS76370000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFS76370100_RESPONSE_HEADER_TR_CONT = '';
export interface HHDFS76370100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFS76370100_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFS76200100_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHDFS76200100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFS76200100_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFS76260000_RESPONSE_HEADER_TR_CONT = '';
export interface HHDFS76260000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFS76260000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFS76270000_RESPONSE_HEADER_TR_CONT = '';
export interface HHDFS76270000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFS76270000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFS76280000_RESPONSE_HEADER_TR_CONT = '';
export interface HHDFS76280000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFS76280000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFS76290000_RESPONSE_HEADER_TR_CONT = '';
export interface HHDFS76290000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFS76290000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFS76300000_RESPONSE_HEADER_TR_CONT = '';
export interface HHDFS76300000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFS76300000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFS76310010_RESPONSE_HEADER_TR_CONT = '';
export interface HHDFS76310010_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFS76310010_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFS76320010_RESPONSE_HEADER_TR_CONT = '';
export interface HHDFS76320010_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFS76320010_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFS76330000_RESPONSE_HEADER_TR_CONT = '';
export interface HHDFS76330000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFS76330000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFS76340000_RESPONSE_HEADER_TR_CONT = '';
export interface HHDFS76340000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFS76340000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFS76350100_RESPONSE_HEADER_TR_CONT = '';
export interface HHDFS76350100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFS76350100_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTRGT011R_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface CTRGT011R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTRGT011R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHPSTH60100C1_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHPSTH60100C1_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHPSTH60100C1_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFS78330900_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHDFS78330900_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFS78330900_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTLN4050R_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface CTLN4050R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTLN4050R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKST01011801_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKST01011801_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKST01011801_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type OTFM3001U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface OTFM3001U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  OTFM3001U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type OTFM3002U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface OTFM3002U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  OTFM3002U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type OTFM3003U_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface OTFM3003U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  OTFM3003U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type OTFM3116R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface OTFM3116R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  OTFM3116R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type OTFM1412R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface OTFM1412R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  OTFM1412R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type OTFM3304R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface OTFM3304R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  OTFM3304R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type OTFM3118R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface OTFM3118R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  OTFM3118R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type OTFM3122R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface OTFM3122R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  OTFM3122R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type OTFM1411R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface OTFM1411R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  OTFM1411R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type OTFM3120R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface OTFM3120R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  OTFM3120R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type OTFM3114R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface OTFM3114R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  OTFM3114R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type OTFM3115R_RESPONSE_HEADER_TR_CONT = 'F' | 'M' | 'D' | 'E';
export interface OTFM3115R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  OTFM3115R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFC55010100_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHDFC55010100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFC55010100_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFC55010000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHDFC55010000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFC55010000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFC55020400_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHDFC55020400_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFC55020400_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFC55020000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHDFC55020000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFC55020000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFC55020100_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHDFC55020100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFC55020100_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFC55020200_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHDFC55020200_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFC55020200_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFC55020300_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHDFC55020300_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFC55020300_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFC86000000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHDFC86000000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFC86000000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFC55200000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHDFC55200000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFC55200000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type OTFM2229R_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface OTFM2229R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  OTFM2229R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDDB95030000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHDDB95030000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDDB95030000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFO86000000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHDFO86000000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFO86000000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFO55010100_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHDFO55010100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFO55010100_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFO55010000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHDFO55010000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFO55010000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFO55020000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHDFO55020000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFO55020000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFO55020100_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHDFO55020100_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFO55020100_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFO55020200_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHDFO55020200_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFO55020200_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFO55020300_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHDFO55020300_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFO55020300_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFO55020400_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHDFO55020400_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFO55020400_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type HHDFO55200000_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface HHDFO55200000_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  HHDFO55200000_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTC0958U_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface TTTC0958U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC0958U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTC0952U_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface TTTC0952U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC0952U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTC0953U_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface TTTC0953U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC0953U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTSC8035R_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface CTSC8035R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTSC8035R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTSC8013R_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface CTSC8013R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTSC8013R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTSC8407R_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface CTSC8407R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTSC8407R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTC8910R_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface TTTC8910R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTC8910R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTPF1101R_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface CTPF1101R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTPF1101R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTPF1114R_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface CTPF1114R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTPF1114R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKBJ773401C0_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKBJ773401C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKBJ773401C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type CTPF2005R_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface CTPF2005R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  CTPF2005R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKBJ773701C0_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKBJ773701C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKBJ773701C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKBJ773400C0_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKBJ773400C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKBJ773400C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKBJ773403C0_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKBJ773403C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKBJ773403C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type FHKBJ773404C0_RESPONSE_HEADER_TR_CONT = ' ' | 'N';
export interface FHKBJ773404C0_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  FHKBJ773404C0_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}



export interface APPROVAL_RESPONSE_BODY {
    approval_key?:  string
}


export interface HASHKEY_RESPONSE_BODY_BDOY {
}


export interface HASHKEY_RESPONSE_BODY {
    BDOY?:  HASHKEY_RESPONSE_BODY_BDOY
    HASH?:  string
}


export interface TOKENP_RESPONSE_BODY {
    access_token?:  string
    token_type?:  string
    expires_in?:  number
    acess_token_token_expired?:  string
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
    msg1?:  string
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
    msg1?:  string
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
    msg1?:  string
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
    msg1?:  string
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
    output2?:  TTTC8001R_RESPONSE_BODY_OUTPUT2
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
    output2?:  CTSC9115R_RESPONSE_BODY_OUTPUT2
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
    output2?:  VTTC8001R_RESPONSE_BODY_OUTPUT2
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
    output2?:  VTSC9115R_RESPONSE_BODY_OUTPUT2
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

export type TTTC8908R_RESPONSE_BODY_OUTPUT_NRCVB_BUY_QTY = '조회 시 ORD_DVSN';
export type TTTC8908R_RESPONSE_BODY_OUTPUT_MAX_BUY_QTY = '조회 시 ORD_DVSN';
export interface TTTC8908R_RESPONSE_BODY_OUTPUT {
    ord_psbl_cash?:  string
    ord_psbl_sbst?:  string
    ruse_psbl_amt?:  string
    fund_rpch_chgs?:  string
    psbl_qty_calc_unpr?:  string
    nrcvb_buy_amt?:  string
    nrcvb_buy_qty?:  TTTC8908R_RESPONSE_BODY_OUTPUT_NRCVB_BUY_QTY
    max_buy_amt?:  string
    max_buy_qty?:  TTTC8908R_RESPONSE_BODY_OUTPUT_MAX_BUY_QTY
    cma_evlu_amt?:  string
    ovrs_re_use_amt_wcrc?:  string
    ord_psbl_frcr_amt_wcrc?:  string
}


export interface TTTC8908R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  TTTC8908R_RESPONSE_BODY_OUTPUT
}

export type VTTC8908R_RESPONSE_BODY_OUTPUT_NRCVB_BUY_QTY = '조회 시 ORD_DVSN';
export type VTTC8908R_RESPONSE_BODY_OUTPUT_MAX_BUY_QTY = '조회 시 ORD_DVSN';
export interface VTTC8908R_RESPONSE_BODY_OUTPUT {
    ord_psbl_cash?:  string
    ord_psbl_sbst?:  string
    ruse_psbl_amt?:  string
    fund_rpch_chgs?:  string
    psbl_qty_calc_unpr?:  string
    nrcvb_buy_amt?:  string
    nrcvb_buy_qty?:  VTTC8908R_RESPONSE_BODY_OUTPUT_NRCVB_BUY_QTY
    max_buy_amt?:  string
    max_buy_qty?:  VTTC8908R_RESPONSE_BODY_OUTPUT_MAX_BUY_QTY
    cma_evlu_amt?:  string
    ovrs_re_use_amt_wcrc?:  string
    ord_psbl_frcr_amt_wcrc?:  string
}


export interface VTTC8908R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  VTTC8908R_RESPONSE_BODY_OUTPUT
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


export interface TTTC2202R_RESPONSE_BODY_OUTPUT {
    cblc_dvsn?:  string
    cblc_dvsn_name?:  string
    pdno?:  string
    prdt_name?:  string
    hldg_qty?:  string
    slpsb_qty?:  string
    pchs_avg_pric?:  string
    evlu_pfls_amt?:  string
    evlu_pfls_rt?:  string
    prpr?:  string
    evlu_amt?:  string
    pchs_amt?:  string
    cblc_weit?:  string
}



export interface TTTC2202R_RESPONSE_BODY_OUTPUT2 {
    pchs_amt_smtl_amt?:  string
    evlu_amt_smtl_amt?:  string
    evlu_pfls_smtl_amt?:  string
    trad_pfls_smtl?:  string
    thdt_tot_pfls_amt?:  string
    pftrt?:  string
}


export interface TTTC2202R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<TTTC2202R_RESPONSE_BODY_OUTPUT>
    output2?:  TTTC2202R_RESPONSE_BODY_OUTPUT2
}


export interface TTTC2201R_RESPONSE_BODY_OUTPUT {
    ord_gno_brno?:  string
    sll_buy_dvsn_cd?:  string
    trad_dvsn_name?:  string
    odno?:  string
    pdno?:  string
    prdt_name?:  string
    ord_unpr?:  string
    ord_qty?:  string
    tot_ccld_qty?:  string
    nccs_qty?:  string
    ord_dvsn_cd?:  string
    ord_dvsn_name?:  string
    orgn_odno?:  string
    ord_tmd?:  string
    objt_cust_dvsn_name?:  string
    pchs_avg_pric?:  string
}


export interface TTTC2201R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<TTTC2201R_RESPONSE_BODY_OUTPUT>
}


export interface TTTC0503R_RESPONSE_BODY_OUTPUT {
    ord_psbl_cash?:  string
    ruse_psbl_amt?:  string
    psbl_qty_calc_unpr?:  string
    max_buy_amt?:  string
    max_buy_qty?:  string
}


export interface TTTC0503R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  TTTC0503R_RESPONSE_BODY_OUTPUT
}


export interface TTTC0506R_RESPONSE_BODY_OUTPUT {
    dnca_tota?:  string
    nxdy_excc_amt?:  string
    nxdy_sttl_amt?:  string
    nx2_day_sttl_amt?:  string
}


export interface TTTC0506R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  TTTC0506R_RESPONSE_BODY_OUTPUT
}


export interface TTTC2208R_RESPONSE_BODY_OUTPUT1 {
    cblc_dvsn_name?:  string
    prdt_name?:  string
    pdno?:  string
    item_dvsn_name?:  string
    thdt_buyqty?:  string
    thdt_sll_qty?:  string
    hldg_qty?:  string
    ord_psbl_qty?:  string
    pchs_avg_pric?:  string
    pchs_amt?:  string
    prpr?:  string
    evlu_amt?:  string
    evlu_pfls_amt?:  string
    evlu_erng_rt?:  string
}



export interface TTTC2208R_RESPONSE_BODY_OUTPUT2 {
    dnca_tot_amt?:  string
    nxdy_excc_amt?:  string
    prvs_rcdl_excc_amt?:  string
    thdt_buy_amt?:  string
    thdt_sll_amt?:  string
    thdt_tlex_amt?:  string
    scts_evlu_amt?:  string
    tot_evlu_amt?:  string
}


export interface TTTC2208R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<TTTC2208R_RESPONSE_BODY_OUTPUT1>
    output2?:  TTTC2208R_RESPONSE_BODY_OUTPUT2
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


export interface TTTC8715R_RESPONSE_BODY_OUTPUT2 {
    sll_qty_smtl?:  string
    sll_tr_amt_smtl?:  string
    sll_fee_smtl?:  string
    sll_tltx_smtl?:  string
    sll_excc_amt_smtl?:  string
    buyqty_smtl?:  string
    buy_tr_amt_smtl?:  string
    buy_fee_smtl?:  string
    buy_tax_smtl?:  string
    buy_excc_amt_smtl?:  string
    tot_qty?:  string
    tot_tr_amt?:  string
    tot_fee?:  string
    tot_tltx?:  string
    tot_excc_amt?:  string
    tot_rlzt_pfls?:  string
    loan_int?:  string
    tot_pftrt?:  string
}



export interface TTTC8715R_RESPONSE_BODY_OUTPUT1 {
    trad_dt?:  string
    pdno?:  string
    prdt_name?:  string
    trad_dvsn_name?:  string
    loan_dt?:  string
    hldg_qty?:  string
    pchs_unpr?:  string
    buy_qty?:  string
    buy_amt?:  string
    sll_pric?:  string
    sll_qty?:  string
    sll_amt?:  string
    rlzt_pfls?:  string
    pfls_rt?:  string
    fee?:  string
    tl_tax?:  string
    loan_int?:  string
}


export interface TTTC8715R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output2?:  TTTC8715R_RESPONSE_BODY_OUTPUT2
    output1?:  Array<TTTC8715R_RESPONSE_BODY_OUTPUT1>
    ctx_area_fk100?:  string
    ctx_area_nk100?:  string
}


export interface TTTC8708R_RESPONSE_BODY_OUTPUT2 {
    sll_qty_smtl?:  string
    sll_tr_amt_smtl?:  string
    sll_fee_smtl?:  string
    sll_tltx_smtl?:  string
    sll_excc_amt_smtl?:  string
    buy_qty_smtl?:  string
    buy_tr_amt_smtl?:  string
    buy_fee_smtl?:  string
    buy_tax_smtl?:  string
    buy_excc_amt_smtl?:  string
    tot_qty?:  string
    tot_tr_amt?:  string
    tot_fee?:  string
    tot_tltx?:  string
    tot_excc_amt?:  string
    tot_rlzt_pfls?:  string
    loan_int?:  string
}



export interface TTTC8708R_RESPONSE_BODY_OUTPUT1 {
    trad_dt?:  string
    buy_amt?:  string
    sll_amt?:  string
    rlzt_pfls?:  string
    fee?:  string
    loan_int?:  string
    tl_tax?:  string
    pfls_rt?:  string
    sll_qty1?:  string
    buy_qty1?:  string
}


export interface TTTC8708R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output2?:  TTTC8708R_RESPONSE_BODY_OUTPUT2
    output1?:  Array<TTTC8708R_RESPONSE_BODY_OUTPUT1>
}


export interface TTTC8408R_RESPONSE_BODY_OUTPUT1 {
    pdno?:  string
    prdt_name?:  string
    buy_qty?:  string
    sll_qty?:  string
    cblc_qty?:  string
    nsvg_qty?:  string
    ord_psbl_qty?:  string
    pchs_avg_pric?:  string
    pchs_amt?:  string
    now_pric?:  string
    evlu_amt?:  string
    evlu_pfls_amt?:  string
    evlu_pfls_rt?:  string
}


export interface TTTC8408R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  TTTC8408R_RESPONSE_BODY_OUTPUT1
}


export interface TTTC0869R_RESPONSE_BODY_OUTPUT1 {
    acmga_rt?:  string
    acmga_pct100_aptm_rson?:  string
    stck_cash_objt_amt?:  string
    stck_sbst_objt_amt?:  string
    stck_evlu_objt_amt?:  string
    stck_ruse_psbl_objt_amt?:  string
    stck_fund_rpch_chgs_objt_amt?:  string
    stck_fncg_rdpt_objt_atm?:  string
    bond_ruse_psbl_objt_amt?:  string
    stck_cash_use_amt?:  string
    stck_sbst_use_amt?:  string
    stck_evlu_use_amt?:  string
    stck_ruse_psbl_amt_use_amt?:  string
    stck_fund_rpch_chgs_use_amt?:  string
    stck_fncg_rdpt_amt_use_amt?:  string
    bond_ruse_psbl_amt_use_amt?:  string
    stck_cash_ord_psbl_amt?:  string
    stck_sbst_ord_psbl_amt?:  string
    stck_evlu_ord_psbl_amt?:  string
    stck_ruse_psbl_ord_psbl_amt?:  string
    stck_fund_rpch_ord_psbl_amt?:  string
    bond_ruse_psbl_ord_psbl_amt?:  string
    rcvb_amt?:  string
    stck_loan_grta_ruse_psbl_amt?:  string
    stck_cash20_max_ord_psbl_amt?:  string
    stck_cash30_max_ord_psbl_amt?:  string
    stck_cash40_max_ord_psbl_amt?:  string
    stck_cash50_max_ord_psbl_amt?:  string
    stck_cash60_max_ord_psbl_amt?:  string
    stck_cash100_max_ord_psbl_amt?:  string
    stck_rsip100_max_ord_psbl_amt?:  string
    bond_max_ord_psbl_amt?:  string
    stck_fncg45_max_ord_psbl_amt?:  string
    stck_fncg50_max_ord_psbl_amt?:  string
    stck_fncg60_max_ord_psbl_amt?:  string
    stck_fncg70_max_ord_psbl_amt?:  string
    stck_stln_max_ord_psbl_amt?:  string
    lmt_amt?:  string
    ovrs_stck_itgr_mgna_dvsn_name?:  string
    usd_objt_amt?:  string
    usd_use_amt?:  string
    usd_ord_psbl_amt?:  string
    hkd_objt_amt?:  string
    hkd_use_amt?:  string
    hkd_ord_psbl_amt?:  string
    jpy_objt_amt?:  string
    jpy_use_amt?:  string
    jpy_ord_psbl_amt?:  string
    cny_objt_amt?:  string
    cny_use_amt?:  string
    cny_ord_psbl_amt?:  string
    usd_ruse_objt_amt?:  string
    usd_ruse_amt?:  string
    usd_ruse_ord_psbl_amt?:  string
    hkd_ruse_objt_amt?:  string
    hkd_ruse_amt?:  string
    hkd_ruse_ord_psbl_amt?:  string
    jpy_ruse_objt_amt?:  string
    jpy_ruse_amt?:  string
    jpy_ruse_ord_psbl_amt?:  string
    cny_ruse_objt_amt?:  string
    cny_ruse_amt?:  string
    cny_ruse_ord_psbl_amt?:  string
    usd_gnrl_ord_psbl_amt?:  string
    usd_itgr_ord_psbl_amt?:  string
    hkd_gnrl_ord_psbl_amt?:  string
    hkd_itgr_ord_psbl_amt?:  string
    jpy_gnrl_ord_psbl_amt?:  string
    jpy_itgr_ord_psbl_amt?:  string
    cny_gnrl_ord_psbl_amt?:  string
    cny_itgr_ord_psbl_amt?:  string
    stck_itgr_cash20_ord_psbl_amt?:  string
    stck_itgr_cash30_ord_psbl_amt?:  string
    stck_itgr_cash40_ord_psbl_amt?:  string
    stck_itgr_cash50_ord_psbl_amt?:  string
    stck_itgr_cash60_ord_psbl_amt?:  string
    stck_itgr_cash100_ord_psbl_amt?:  string
    stck_itgr_100_ord_psbl_amt?:  string
    stck_itgr_fncg45_ord_psbl_amt?:  string
    stck_itgr_fncg50_ord_psbl_amt?:  string
    stck_itgr_fncg60_ord_psbl_amt?:  string
    stck_itgr_fncg70_ord_psbl_amt?:  string
    stck_itgr_stln_ord_psbl_amt?:  string
    bond_itgr_ord_psbl_amt?:  string
    stck_cash_ovrs_use_amt?:  string
    stck_sbst_ovrs_use_amt?:  string
    stck_evlu_ovrs_use_amt?:  string
    stck_re_use_amt_ovrs_use_amt?:  string
    stck_fund_rpch_ovrs_use_amt?:  string
    stck_fncg_rdpt_ovrs_use_amt?:  string
    bond_re_use_ovrs_use_amt?:  string
    usd_oth_mket_use_amt?:  string
    jpy_oth_mket_use_amt?:  string
    cny_oth_mket_use_amt?:  string
    hkd_oth_mket_use_amt?:  string
    usd_re_use_oth_mket_use_amt?:  string
    jpy_re_use_oth_mket_use_amt?:  string
    cny_re_use_oth_mket_use_amt?:  string
    hkd_re_use_oth_mket_use_amt?:  string
    hgkg_cny_re_use_amt?:  string
}


export interface TTTC0869R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  TTTC0869R_RESPONSE_BODY_OUTPUT1
}


export interface CTRGA011R_RESPONSE_BODY_OUTPUT1 {
    acno10?:  string
    rght_type_cd?:  string
    bass_dt?:  string
    rght_cblc_type_cd?:  string
    rptt_pdno?:  string
    pdno?:  string
    prdt_type_cd?:  string
    shtn_pdno?:  string
    prdt_name?:  string
    cblc_qty?:  string
    last_alct_qty?:  string
    excs_alct_qty?:  string
    tot_alct_qty?:  string
    last_ftsk_qty?:  string
    last_alct_amt?:  string
    last_ftsk_chgs?:  string
    rdpt_prca?:  string
    dlay_int_amt?:  string
    lstg_dt?:  string
    sbsc_end_dt?:  string
    cash_dfrm_dt?:  string
    rqst_qty?:  string
    rqst_amt?:  string
    rqst_dt?:  string
    rfnd_dt?:  string
    rfnd_amt?:  string
    lstg_stqt?:  string
    tax_amt?:  string
    sbsc_unpr?:  string
}


export interface CTRGA011R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<CTRGA011R_RESPONSE_BODY_OUTPUT1>
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
    output?:  FHKST01010100_RESPONSE_BODY_OUTPUT
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


export interface FHPST01060000_RESPONSE_BODY_OUTPUT1 {
    stck_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    prdy_vol?:  string
    rprs_mrkt_kor_name?:  string
}



export interface FHPST01060000_RESPONSE_BODY_OUTPUT2 {
    stck_cntg_hour?:  string
    stck_prpr?:  string
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
    output1?:  FHPST01060000_RESPONSE_BODY_OUTPUT1
    output2?:  Array<FHPST01060000_RESPONSE_BODY_OUTPUT2>
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


export interface FHPST02320000_RESPONSE_BODY_OUTPUT1 {
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



export interface FHPST02320000_RESPONSE_BODY_OUTPUT2 {
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
    output1?:  FHPST02320000_RESPONSE_BODY_OUTPUT1
    output2?:  Array<FHPST02320000_RESPONSE_BODY_OUTPUT2>
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


export type FHKST03010200_RESPONSE_BODY_OUTPUT2_CNTG_VOL = '13';
export interface FHKST03010200_RESPONSE_BODY_OUTPUT2 {
    stck_bsop_date?:  string
    stck_cntg_hour?:  string
    acml_tr_pbmn?:  string
    stck_prpr?:  string
    stck_oprc?:  string
    stck_hgpr?:  string
    stck_lwpr?:  string
    cntg_vol?:  FHKST03010200_RESPONSE_BODY_OUTPUT2_CNTG_VOL
}


export interface FHKST03010200_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  FHKST03010200_RESPONSE_BODY_OUTPUT1
    output2?:  Array<FHKST03010200_RESPONSE_BODY_OUTPUT2>
}


export interface FHPST01010000_RESPONSE_BODY_OUTPUT {
    rprs_mrkt_kor_name?:  string
    new_hgpr_lwpr_cls_code?:  string
    mxpr_llam_cls_code?:  string
    crdt_able_yn?:  string
    stck_mxpr?:  string
    elw_pblc_yn?:  string
    prdy_clpr_vrss_oprc_rate?:  string
    crdt_rate?:  string
    marg_rate?:  string
    lwpr_vrss_prpr?:  string
    lwpr_vrss_prpr_sign?:  string
    prdy_clpr_vrss_lwpr_rate?:  string
    stck_lwpr?:  string
    hgpr_vrss_prpr?:  string
    hgpr_vrss_prpr_sign?:  string
    prdy_clpr_vrss_hgpr_rate?:  string
    stck_hgpr?:  string
    oprc_vrss_prpr?:  string
    oprc_vrss_prpr_sign?:  string
    mang_issu_yn?:  string
    divi_app_cls_code?:  string
    short_over_yn?:  string
    mrkt_warn_cls_code?:  string
    invt_caful_yn?:  string
    stange_runup_yn?:  string
    ssts_hot_yn?:  string
    low_current_yn?:  string
    vi_cls_code?:  string
    short_over_cls_code?:  string
    stck_llam?:  string
    new_lstn_cls_name?:  string
    vlnt_deal_cls_name?:  string
    flng_cls_name?:  string
    revl_issu_reas_name?:  string
    mrkt_warn_cls_name?:  string
    stck_sdpr?:  string
    bstp_cls_code?:  string
    stck_prdy_clpr?:  string
    insn_pbnt_yn?:  string
    fcam_mod_cls_name?:  string
    stck_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    acml_tr_pbmn?:  string
    acml_vol?:  string
    prdy_vrss_vol_rate?:  string
    bstp_kor_isnm?:  string
    sltr_yn?:  string
    trht_yn?:  string
    oprc_rang_cont_yn?:  string
    vlnt_fin_cls_code?:  string
    stck_oprc?:  string
    prdy_vol?:  string
}


export interface FHPST01010000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    Output?:  FHPST01010000_RESPONSE_BODY_OUTPUT
}


export interface FHPST02400000_RESPONSE_BODY_OUTPUT {
    stck_prpr?:  string
    prdy_vrss_sign?:  string
    prdy_vrss?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    prdy_vol?:  string
    stck_mxpr?:  string
    stck_llam?:  string
    stck_prdy_clpr?:  string
    stck_oprc?:  string
    prdy_clpr_vrss_oprc_rate?:  string
    stck_hgpr?:  string
    prdy_clpr_vrss_hgpr_rate?:  string
    stck_lwpr?:  string
    prdy_clpr_vrss_lwpr_rate?:  string
    prdy_last_nav?:  string
    nav?:  string
    nav_prdy_vrss?:  string
    nav_prdy_vrss_sign?:  string
    nav_prdy_ctrt?:  string
    trc_errt?:  string
    stck_sdpr?:  string
    stck_sspr?:  string
    nmix_ctrt?:  string
    etf_crcl_stcn?:  string
    etf_ntas_ttam?:  string
    etf_frcr_ntas_ttam?:  string
    frgn_limt_rate?:  string
    frgn_oder_able_qty?:  string
    etf_cu_unit_scrt_cnt?:  string
    etf_cnfg_issu_cnt?:  string
    etf_dvdn_cycl?:  string
    crcd?:  string
    etf_crcl_ntas_ttam?:  string
    etf_frcr_crcl_ntas_ttam?:  string
    etf_frcr_last_ntas_wrth_val?:  string
    lp_oder_able_cls_code?:  string
    stck_dryy_hgpr?:  string
    dryy_hgpr_vrss_prpr_rate?:  string
    dryy_hgpr_date?:  string
    stck_dryy_lwpr?:  string
    dryy_lwpr_vrss_prpr_rate?:  string
    dryy_lwpr_date?:  string
    bstp_kor_isnm?:  string
    vi_cls_code?:  string
    lstn_stcn?:  string
    frgn_hldn_qty?:  string
    frgn_hldn_qty_rate?:  string
    etf_trc_ert_mltp?:  string
    dprt?:  string
    mbcr_name?:  string
    stck_lstn_date?:  string
    mtrt_date?:  string
    shrg_type_code?:  string
    lp_hldn_rate?:  string
    etf_trgt_nmix_bstp_code?:  string
    etf_div_name?:  string
    etf_rprs_bstp_kor_isnm?:  string
    lp_hldn_vol?:  string
}


export interface FHPST02400000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  FHPST02400000_RESPONSE_BODY_OUTPUT
}


export interface FHPST02440000_RESPONSE_BODY_OUTPUT1 {
    stck_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    acml_tr_pbmn?:  string
    stck_prdy_clpr?:  string
    stck_oprc?:  string
    stck_hgpr?:  string
    stck_lwpr?:  string
    stck_mxpr?:  string
    stck_llam?:  string
}



export interface FHPST02440000_RESPONSE_BODY_OUTPUT2 {
    nav?:  string
    nav_prdy_vrss_sign?:  string
    nav_prdy_vrss?:  string
    nav_prdy_ctrt?:  string
    prdy_clpr_nav?:  string
    oprc_nav?:  string
    hprc_nav?:  string
    lprc_nav?:  string
}


export interface FHPST02440000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<FHPST02440000_RESPONSE_BODY_OUTPUT1>
    output2?:  FHPST02440000_RESPONSE_BODY_OUTPUT2
}


export interface FHPST02440100_RESPONSE_BODY_OUTPUT {
    bsop_hour?:  string
    nav?:  string
    nav_prdy_vrss_sign?:  string
    nav_prdy_vrss?:  string
    nav_prdy_ctrt?:  string
    nav_vrss_prpr?:  string
    dprt?:  string
    stck_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    cntg_vol?:  string
}


export interface FHPST02440100_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHPST02440100_RESPONSE_BODY_OUTPUT>
}


export interface FHKST117300C0_RESPONSE_BODY_OUTPUT1 {
    stck_shrn_iscd?:  string
    hts_kor_isnm?:  string
    stck_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    sdpr_vrss_prpr?:  string
    sdpr_vrss_prpr_rate?:  string
    cntg_vol?:  string
}


export interface FHKST117300C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<FHKST117300C0_RESPONSE_BODY_OUTPUT1>
}


export interface FHKST121600C0_RESPONSE_BODY_OUTPUT1 {
    stck_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    etf_cnfg_issu_avls?:  string
    nav?:  string
    nav_prdy_vrss_sign?:  string
    nav_prdy_vrss?:  string
    nav_prdy_ctrt?:  string
    etf_ntas_ttam?:  string
    prdy_clpr_nav?:  string
    oprc_nav?:  string
    hprc_nav?:  string
    lprc_nav?:  string
    etf_cu_unit_scrt_cnt?:  string
    etf_cnfg_issu_cnt?:  string
}



export interface FHKST121600C0_RESPONSE_BODY_OUTPUT2 {
    nmix_ctrt?:  string
    stck_shrn_iscd?:  string
    hts_kor_isnm?:  string
    stck_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    acml_tr_pbmn?:  string
    etf_cu_unit_scrt_cnt?:  string
    tday_rsfl_rate?:  string
    prdy_vrss_vol?:  string
    tr_pbmn_tnrt?:  string
    hts_avls?:  string
    etf_cnfg_issu_avls?:  string
    etf_cnfg_issu_rlim?:  string
    etf_vltn_amt?:  string
}


export interface FHKST121600C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  FHKST121600C0_RESPONSE_BODY_OUTPUT1
    output2?:  Array<FHKST121600C0_RESPONSE_BODY_OUTPUT2>
}


export interface FHPST02300000_RESPONSE_BODY_OUTPUT1 {
    bstp_kor_isnm?:  string
    mang_issu_cls_name?:  string
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
    marg_rate?:  string
    ovtm_untp_antc_cnpr?:  string
    ovtm_untp_antc_cntg_vrss?:  string
    ovtm_untp_antc_cntg_vrss_sign?:  string
    ovtm_untp_antc_cntg_ctrt?:  string
    ovtm_untp_antc_cnqn?:  string
    crdt_able_yn?:  string
    new_lstn_cls_name?:  string
    sltr_yn?:  string
    mang_issu_yn?:  string
    mrkt_warn_cls_code?:  string
    trht_yn?:  string
    vlnt_deal_cls_name?:  string
    ovtm_untp_sdpr?:  string
    mrkt_warn_cls_name?:  string
    revl_issu_reas_name?:  string
    insn_pbnt_yn?:  string
    flng_cls_name?:  string
    rprs_mrkt_kor_name?:  string
    ovtm_vi_cls_code?:  string
    bidp?:  string
    askp?:  string
}


export interface FHPST02300000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  FHPST02300000_RESPONSE_BODY_OUTPUT1
}


export interface FHPST02300400_RESPONSE_BODY_OUTPUT1 {
    ovtm_untp_last_hour?:  string
    ovtm_untp_askp1?:  string
    ovtm_untp_askp2?:  string
    ovtm_untp_askp3?:  string
    ovtm_untp_askp4?:  string
    ovtm_untp_askp5?:  string
    ovtm_untp_askp6?:  string
    ovtm_untp_askp7?:  string
    ovtm_untp_askp8?:  string
    ovtm_untp_askp9?:  string
    ovtm_untp_askp10?:  string
    ovtm_untp_bidp1?:  string
    ovtm_untp_bidp2?:  string
    ovtm_untp_bidp3?:  string
    ovtm_untp_bidp4?:  string
    ovtm_untp_bidp5?:  string
    ovtm_untp_bidp6?:  string
    ovtm_untp_bidp7?:  string
    ovtm_untp_bidp8?:  string
    ovtm_untp_bidp9?:  string
    ovtm_untp_bidp10?:  string
    ovtm_untp_askp_icdc1?:  string
    ovtm_untp_askp_icdc2?:  string
    ovtm_untp_askp_icdc3?:  string
    ovtm_untp_askp_icdc4?:  string
    ovtm_untp_askp_icdc5?:  string
    ovtm_untp_askp_icdc6?:  string
    ovtm_untp_askp_icdc7?:  string
    ovtm_untp_askp_icdc8?:  string
    ovtm_untp_askp_icdc9?:  string
    ovtm_untp_askp_icdc10?:  string
    ovtm_untp_bidp_icdc1?:  string
    ovtm_untp_bidp_icdc2?:  string
    ovtm_untp_bidp_icdc3?:  string
    ovtm_untp_bidp_icdc4?:  string
    ovtm_untp_bidp_icdc5?:  string
    ovtm_untp_bidp_icdc6?:  string
    ovtm_untp_bidp_icdc7?:  string
    ovtm_untp_bidp_icdc8?:  string
    ovtm_untp_bidp_icdc9?:  string
    ovtm_untp_bidp_icdc10?:  string
    ovtm_untp_askp_rsqn1?:  string
    ovtm_untp_askp_rsqn2?:  string
    ovtm_untp_askp_rsqn3?:  string
    ovtm_untp_askp_rsqn4?:  string
    ovtm_untp_askp_rsqn5?:  string
    ovtm_untp_askp_rsqn6?:  string
    ovtm_untp_askp_rsqn7?:  string
    ovtm_untp_askp_rsqn8?:  string
    ovtm_untp_askp_rsqn9?:  string
    ovtm_untp_askp_rsqn10?:  string
    ovtm_untp_bidp_rsqn1?:  string
    ovtm_untp_bidp_rsqn2?:  string
    ovtm_untp_bidp_rsqn3?:  string
    ovtm_untp_bidp_rsqn4?:  string
    ovtm_untp_bidp_rsqn5?:  string
    ovtm_untp_bidp_rsqn6?:  string
    ovtm_untp_bidp_rsqn7?:  string
    ovtm_untp_bidp_rsqn8?:  string
    ovtm_untp_bidp_rsqn9?:  string
    ovtm_untp_bidp_rsqn10?:  string
    ovtm_untp_total_askp_rsqn?:  string
    ovtm_untp_total_bidp_rsqn?:  string
    ovtm_untp_total_askp_rsqn_icdc?:  string
    ovtm_untp_total_bidp_rsqn_icdc?:  string
    ovtm_untp_ntby_bidp_rsqn?:  string
    total_askp_rsqn?:  string
    total_bidp_rsqn?:  string
    total_askp_rsqn_icdc?:  string
    total_bidp_rsqn_icdc?:  string
    ovtm_total_askp_rsqn?:  string
    ovtm_total_bidp_rsqn?:  string
    ovtm_total_askp_icdc?:  string
    ovtm_total_bidp_icdc?:  string
}


export interface FHPST02300400_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  FHPST02300400_RESPONSE_BODY_OUTPUT1
}


export interface FHKST03010230_RESPONSE_BODY_OUTPUT1 {
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    stck_prdy_clpr?:  string
    acml_vol?:  string
    acml_tr_pbmn?:  string
    hts_kor_isnm?:  string
    stck_prpr?:  string
}



export interface FHKST03010230_RESPONSE_BODY_OUTPUT2 {
    stck_bsop_date?:  string
    stck_cntg_hour?:  string
    stck_prpr?:  string
    stck_oprc?:  string
    stck_hgpr?:  string
    stck_lwpr?:  string
    cntg_vol?:  string
    acml_tr_pbmn?:  string
}


export interface FHKST03010230_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  FHKST03010230_RESPONSE_BODY_OUTPUT1
    output2?:  Array<FHKST03010230_RESPONSE_BODY_OUTPUT2>
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


export interface FHPEW02770000_RESPONSE_BODY_OUTPUT1 {
    hts_kor_isnm?:  string
    elw_shrn_iscd?:  string
    elw_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    stck_sdpr?:  string
    sdpr_vrss_prpr_sign?:  string
    sdpr_vrss_prpr?:  string
    sdpr_vrss_prpr_rate?:  string
    stck_oprc?:  string
    oprc_vrss_prpr_sign?:  string
    oprc_vrss_prpr?:  string
    oprc_vrss_prpr_rate?:  string
    stck_hgpr?:  string
    stck_lwpr?:  string
    prd_rsfl_sign?:  string
    prd_rsfl?:  string
    prd_rsfl_rate?:  string
    stck_cnvr_rate?:  string
    hts_rmnn_dynu?:  string
    acpr?:  string
    unas_isnm?:  string
    unas_shrn_iscd?:  string
    lp_hldn_rate?:  string
    prit?:  string
    prls_qryr_stpr_prc?:  string
    delta_val?:  string
    theta?:  string
    prls_qryr_rate?:  string
    stck_lstn_date?:  string
    stck_last_tr_date?:  string
    hts_ints_vltl?:  string
    lvrg_val?:  string
}


export interface FHPEW02770000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<FHPEW02770000_RESPONSE_BODY_OUTPUT1>
}


export interface FHPEW02780000_RESPONSE_BODY_OUTPUT1 {
    elw_kor_isnm?:  string
    elw_shrn_iscd?:  string
    elw_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    lstn_stcn?:  string
    acml_vol?:  string
    n_prdy_vol?:  string
    n_prdy_vol_vrss?:  string
    vol_inrt?:  string
    vol_tnrt?:  string
    nday_vol_tnrt?:  string
    acml_tr_pbmn?:  string
    n_prdy_tr_pbmn?:  string
    n_prdy_tr_pbmn_vrss?:  string
    total_askp_rsqn?:  string
    total_bidp_rsqn?:  string
    ntsl_rsqn?:  string
    ntby_rsqn?:  string
    seln_rsqn_rate?:  string
    shnu_rsqn_rate?:  string
    stck_cnvr_rate?:  string
    hts_rmnn_dynu?:  string
    invl_val?:  string
    tmvl_val?:  string
    acpr?:  string
    lp_mbcr_name?:  string
    unas_isnm?:  string
    stck_last_tr_date?:  string
    unas_shrn_iscd?:  string
    prdy_vol?:  string
    lp_hldn_rate?:  string
    prit?:  string
    prls_qryr_stpr_prc?:  string
    delta_val?:  string
    theta?:  string
    prls_qryr_rate?:  string
    stck_lstn_date?:  string
    hts_ints_vltl?:  string
    lvrg_val?:  string
    lp_ntby_qty?:  string
}


export interface FHPEW02780000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<FHPEW02780000_RESPONSE_BODY_OUTPUT1>
}


export interface FHPEW02790000_RESPONSE_BODY_OUTPUT1 {
    elw_shrn_iscd?:  string
    elw_kor_isnm?:  string
    elw_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    stck_cnvr_rate?:  string
    lvrg_val?:  string
    acpr?:  string
    tmvl_val?:  string
    invl_val?:  string
    elw_ko_barrier?:  string
}


export interface FHPEW02790000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<FHPEW02790000_RESPONSE_BODY_OUTPUT1>
}


export interface FHPEW02850000_RESPONSE_BODY_OUTPUT1 {
    elw_shrn_iscd?:  string
    elw_kor_isnm?:  string
    elw_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    hts_thpr?:  string
    delta_val?:  string
    gama?:  string
    theta?:  string
    vega?:  string
    rho?:  string
    hts_ints_vltl?:  string
    d90_hist_vltl?:  string
}


export interface FHPEW02850000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<FHPEW02850000_RESPONSE_BODY_OUTPUT1>
}


export interface FHPEW02870000_RESPONSE_BODY_OUTPUT1 {
    elw_shrn_iscd?:  string
    elw_kor_isnm?:  string
    elw_prpr?:  string
    prdy_vrss_sign?:  string
    prdy_vrss?:  string
    prdy_ctrt?:  string
    askp?:  string
    bidp?:  string
    total_askp_rsqn?:  string
    total_bidp_rsqn?:  string
    acml_vol?:  string
    stnd_val?:  string
    stnd_val_vrss?:  string
    stnd_val_ctrt?:  string
}


export interface FHPEW02870000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<FHPEW02870000_RESPONSE_BODY_OUTPUT1>
}


export interface FHPEW02840100_RESPONSE_BODY_OUTPUT1 {
    stck_cntg_hour?:  string
    elw_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    bidp?:  string
    askp?:  string
    acml_vol?:  string
    hts_ints_vltl?:  string
}


export interface FHPEW02840100_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<FHPEW02840100_RESPONSE_BODY_OUTPUT1>
}


export interface FHKEW154800C0_RESPONSE_BODY_OUTPUT1 {
    stck_lstn_date?:  string
    elw_kor_isnm?:  string
    elw_shrn_iscd?:  string
    unas_isnm?:  string
    pblc_co_name?:  string
    lstn_stcn?:  string
    acpr?:  string
    stck_last_tr_date?:  string
    elw_ko_barrier?:  string
}


export interface FHKEW154800C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<FHKEW154800C0_RESPONSE_BODY_OUTPUT1>
}


export interface FHPEW02840300_RESPONSE_BODY_OUTPUT {
    stck_bsop_date?:  string
    stck_cntg_hour?:  string
    stck_prpr?:  string
    elw_oprc?:  string
    elw_hgpr?:  string
    elw_lwpr?:  string
    hts_ints_vltl?:  string
    hist_vltl?:  string
}


export interface FHPEW02840300_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHPEW02840300_RESPONSE_BODY_OUTPUT>
}


export interface FHPEW02740100_RESPONSE_BODY_OUTPUT {
    stck_cntg_hour?:  string
    elw_prpr?:  string
    prdy_vrss_sign?:  string
    prdy_vrss?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    lvrg_val?:  string
    gear?:  string
    tmvl_val?:  string
    invl_val?:  string
    prit?:  string
    apprch_rate?:  string
}


export interface FHPEW02740100_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHPEW02740100_RESPONSE_BODY_OUTPUT>
}


export interface FHPEW02740300_RESPONSE_BODY_OUTPUT {
    stck_bsop_date?:  string
    stck_cntg_hour?:  string
    elw_prpr?:  string
    elw_oprc?:  string
    elw_hgpr?:  string
    elw_lwpr?:  string
    lvrg_val?:  string
    gear?:  string
    prmm_val?:  string
    invl_val?:  string
    prit?:  string
    acml_vol?:  string
    cntg_vol?:  string
}


export interface FHPEW02740300_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHPEW02740300_RESPONSE_BODY_OUTPUT>
}


export interface FHPEW02830100_RESPONSE_BODY_OUTPUT1 {
    stck_cntg_hour?:  string
    elw_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    hts_thpr?:  string
    delta_val?:  string
    gama?:  string
    theta?:  string
    vega?:  string
    rho?:  string
}


export interface FHPEW02830100_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<FHPEW02830100_RESPONSE_BODY_OUTPUT1>
}


export interface FHPEW02840200_RESPONSE_BODY_OUTPUT1 {
    stck_cntg_hour?:  string
    elw_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    elw_oprc?:  string
    elw_hgpr?:  string
    elw_lwpr?:  string
    acml_vol?:  string
    d10_hist_vltl?:  string
    d20_hist_vltl?:  string
    d30_hist_vltl?:  string
    d60_hist_vltl?:  string
    d90_hist_vltl?:  string
    hts_ints_vltl?:  string
}


export interface FHPEW02840200_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<FHPEW02840200_RESPONSE_BODY_OUTPUT1>
}


export interface FHKEW154101C0_RESPONSE_BODY_OUTPUT {
    elw_shrn_iscd?:  string
    hts_kor_isnm?:  string
    elw_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    acpr?:  string
    prls_qryr_stpr_prc?:  string
    hts_rmnn_dynu?:  string
    hts_ints_vltl?:  string
    stck_cnvr_rate?:  string
    lp_hvol?:  string
    lp_rlim?:  string
    lvrg_val?:  string
    gear?:  string
    delta_val?:  string
    gama?:  string
    vega?:  string
    theta?:  string
    prls_qryr_rate?:  string
    cfp?:  string
    prit?:  string
    invl_val?:  string
    tmvl_val?:  string
    hts_thpr?:  string
    stck_lstn_date?:  string
    stck_last_tr_date?:  string
    lp_ntby_qty?:  string
}


export interface FHKEW154101C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHKEW154101C0_RESPONSE_BODY_OUTPUT>
}


export interface FHPEW02740200_RESPONSE_BODY_OUTPUT {
    stck_bsop_date?:  string
    elw_prpr?:  string
    prdy_vrss_sign?:  string
    prdy_vrss?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    lvrg_val?:  string
    gear?:  string
    tmvl_val?:  string
    invl_val?:  string
    prit?:  string
    elw_oprc?:  string
    elw_hgpr?:  string
    elw_lwpr?:  string
    apprch_rate?:  string
}


export interface FHPEW02740200_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHPEW02740200_RESPONSE_BODY_OUTPUT>
}


export interface FHPEW02830200_RESPONSE_BODY_OUTPUT {
    stck_bsop_date?:  string
    elw_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    hts_thpr?:  string
    delta_val?:  string
    gama?:  string
    theta?:  string
    vega?:  string
    rho?:  string
}


export interface FHPEW02830200_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHPEW02830200_RESPONSE_BODY_OUTPUT>
}


export interface FHPEW02840400_RESPONSE_BODY_OUTPUT {
    bsop_date?:  string
    stck_cntg_hour?:  string
    elw_prpr?:  string
    hts_ints_vltl?:  string
}


export interface FHPEW02840400_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHPEW02840400_RESPONSE_BODY_OUTPUT>
}


export interface FHPEW03760000_RESPONSE_BODY_OUTPUT1 {
    elw_prpr?:  string
    prdy_vrss_sign?:  string
    prdy_vrss?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    prdy_vol?:  string
    stck_cnvr_rate?:  string
    prit?:  string
    lvrg_val?:  string
    gear?:  string
    prls_qryr_rate?:  string
    cfp?:  string
    invl_val?:  string
    tmvl_val?:  string
    acpr?:  string
    elw_ko_barrier?:  string
}



export interface FHPEW03760000_RESPONSE_BODY_OUTPUT2 {
    stck_bsop_date?:  string
    elw_prpr?:  string
    prdy_vrss_sign?:  string
    prdy_vrss?:  string
    prdy_ctrt?:  string
    lp_seln_qty?:  string
    lp_seln_avrg_unpr?:  string
    lp_shnu_qty?:  string
    lp_shnu_avrg_unpr?:  string
    lp_hvol?:  string
    lp_hldn_rate?:  string
    prsn_deal_qty?:  string
    apprch_rate?:  string
}


export interface FHPEW03760000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  FHPEW03760000_RESPONSE_BODY_OUTPUT1
    output2?:  Array<FHPEW03760000_RESPONSE_BODY_OUTPUT2>
}


export interface FHKEW151701C0_RESPONSE_BODY_OUTPUT1 {
    elw_shrn_iscd?:  string
    elw_kor_isnm?:  string
}


export interface FHKEW151701C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  FHKEW151701C0_RESPONSE_BODY_OUTPUT1
}


export interface FHKEW15100000_RESPONSE_BODY_OUTPUT1 {
    bond_shrn_iscd?:  string
    hts_kor_isnm?:  string
    rght_type_name?:  string
    elw_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    acpr?:  string
    stck_cnvr_rate?:  string
    stck_lstn_date?:  string
    stck_last_tr_date?:  string
    hts_rmnn_dynu?:  string
    unas_isnm?:  string
    unas_prpr?:  string
    unas_prdy_vrss?:  string
    unas_prdy_vrss_sign?:  string
    unas_prdy_ctrt?:  string
    unas_acml_vol?:  string
    moneyness?:  string
    atm_cls_name?:  string
    prit?:  string
    delta_val?:  string
    hts_ints_vltl?:  string
    tmvl_val?:  string
    gear?:  string
    lvrg_val?:  string
    prls_qryr_rate?:  string
    cfp?:  string
    lstn_stcn?:  string
    pblc_co_name?:  string
    lp_mbcr_name?:  string
    lp_hldn_rate?:  string
    elw_rght_form?:  string
    elw_ko_barrier?:  string
    apprch_rate?:  string
    unas_shrn_iscd?:  string
    mtrt_date?:  string
    prmm_val?:  string
    stck_lp_fin_date?:  string
    tick_conv_prc?:  string
    prls_qryr_stpr_prc?:  string
    lp_hvol?:  string
}


export interface FHKEW15100000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<FHKEW15100000_RESPONSE_BODY_OUTPUT1>
}


export interface FHKEW154100C0_RESPONSE_BODY_OUTPUT1 {
    unas_shrn_iscd?:  string
    unas_isnm?:  string
    unas_prpr?:  string
    unas_prdy_vrss?:  string
    unas_prdy_vrss_sign?:  string
    unas_prdy_ctrt?:  string
}


export interface FHKEW154100C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<FHKEW154100C0_RESPONSE_BODY_OUTPUT1>
}


export interface FHKEW154700C0_RESPONSE_BODY_OUTPUT1 {
    elw_shrn_iscd?:  string
    elw_kor_isnm?:  string
    unas_isnm?:  string
    unas_prpr?:  string
    acpr?:  string
    stck_cnvr_rate?:  string
    elw_prpr?:  string
    stck_lstn_date?:  string
    stck_last_tr_date?:  string
    total_rdmp_amt?:  string
    rdmp_amt?:  string
    lstn_stcn?:  string
    lp_hvol?:  string
    ccls_paym_prc?:  string
    mtrt_vltn_amt?:  string
    evnt_prd_fin_date?:  string
    stlm_date?:  string
    pblc_prc?:  string
    unas_shrn_iscd?:  string
    stnd_iscd?:  string
    rdmp_ask_amt?:  string
}


export interface FHKEW154700C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<FHKEW154700C0_RESPONSE_BODY_OUTPUT1>
}


export interface FHKUP03500100_RESPONSE_BODY_OUTPUT1 {
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
}



export interface FHKUP03500100_RESPONSE_BODY_OUTPUT2 {
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
    output1?:  FHKUP03500100_RESPONSE_BODY_OUTPUT1
    output2?:  Array<FHKUP03500100_RESPONSE_BODY_OUTPUT2>
}

export type CTCA0903R_RESPONSE_BODY_OUTPUT_WDAY_DVSN_CD = '01' | '02' | '03' | '04' | '05' | '06' | '07';
export interface CTCA0903R_RESPONSE_BODY_OUTPUT {
    bass_dt?:  string
    wday_dvsn_cd?:  CTCA0903R_RESPONSE_BODY_OUTPUT_WDAY_DVSN_CD
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


export interface FHKUP03500200_RESPONSE_BODY_OUTPUT1 {
    bstp_nmix_prdy_vrss?:  string
    prdy_vrss_sign?:  string
    bstp_nmix_prdy_ctrt?:  string
    prdy_nmix?:  string
    acml_vol?:  string
    acml_tr_pbmn?:  string
    hts_kor_isnm?:  string
    bstp_nmix_prpr?:  string
    bstp_cls_code?:  string
    prdy_vol?:  string
    bstp_nmix_oprc?:  string
    bstp_nmix_hgpr?:  string
    bstp_nmix_lwpr?:  string
    futs_prdy_oprc?:  string
    futs_prdy_hgpr?:  string
    futs_prdy_lwpr?:  string
}



export interface FHKUP03500200_RESPONSE_BODY_OUTPUT2 {
    stck_bsop_date?:  string
    stck_cntg_hour?:  string
    bstp_nmix_prpr?:  string
    bstp_nmix_oprc?:  string
    bstp_nmix_hgpr?:  string
    bstp_nmix_lwpr?:  string
    cntg_vol?:  string
    acml_tr_pbmn?:  string
}


export interface FHKUP03500200_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    Output1?:  Array<FHKUP03500200_RESPONSE_BODY_OUTPUT1>
    Output2?:  FHKUP03500200_RESPONSE_BODY_OUTPUT2
}


export interface FHPST01390000_RESPONSE_BODY_OUTPUT1 {
    hts_kor_isnm?:  string
    mksc_shrn_iscd?:  string
    vi_cls_code?:  string
    bsop_date?:  string
    cntg_vi_hour?:  string
    vi_cncl_hour?:  string
    vi_kind_code?:  string
    vi_prc?:  string
    vi_stnd_prc?:  string
    vi_dprt?:  string
    vi_dmc_stnd_prc?:  string
    vi_dmc_dprt?:  string
    vi_count?:  string
}


export interface FHPST01390000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    Output1?:  FHPST01390000_RESPONSE_BODY_OUTPUT1
}


export interface FHPUP02100000_RESPONSE_BODY_OUTPUT {
    bstp_nmix_prpr?:  string
    bstp_nmix_prdy_vrss?:  string
    prdy_vrss_sign?:  string
    bstp_nmix_prdy_ctrt?:  string
    acml_vol?:  string
    prdy_vol?:  string
    acml_tr_pbmn?:  string
    prdy_tr_pbmn?:  string
    bstp_nmix_oprc?:  string
    prdy_nmix_vrss_nmix_oprc?:  string
    oprc_vrss_prpr_sign?:  string
    bstp_nmix_oprc_prdy_ctrt?:  string
    bstp_nmix_hgpr?:  string
    prdy_nmix_vrss_nmix_hgpr?:  string
    hgpr_vrss_prpr_sign?:  string
    bstp_nmix_hgpr_prdy_ctrt?:  string
    bstp_nmix_lwpr?:  string
    prdy_clpr_vrss_lwpr?:  string
    lwpr_vrss_prpr_sign?:  string
    prdy_clpr_vrss_lwpr_rate?:  string
    ascn_issu_cnt?:  string
    uplm_issu_cnt?:  string
    stnr_issu_cnt?:  string
    down_issu_cnt?:  string
    lslm_issu_cnt?:  string
    dryy_bstp_nmix_hgpr?:  string
    dryy_hgpr_vrss_prpr_rate?:  string
    dryy_bstp_nmix_hgpr_date?:  string
    dryy_bstp_nmix_lwpr?:  string
    dryy_lwpr_vrss_prpr_rate?:  string
    dryy_bstp_nmix_lwpr_date?:  string
    total_askp_rsqn?:  string
    total_bidp_rsqn?:  string
    seln_rsqn_rate?:  string
    shnu_rsqn_rate?:  string
    ntby_rsqn?:  string
}


export interface FHPUP02100000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  FHPUP02100000_RESPONSE_BODY_OUTPUT
}


export interface FHPUP02120000_RESPONSE_BODY_OUTPUT1 {
    bstp_nmix_prpr?:  string
    bstp_nmix_prdy_vrss?:  string
    prdy_vrss_sign?:  string
    bstp_nmix_prdy_ctrt?:  string
    acml_vol?:  string
    acml_tr_pbmn?:  string
    bstp_nmix_oprc?:  string
    bstp_nmix_hgpr?:  string
    bstp_nmix_lwpr?:  string
    prdy_vol?:  string
    ascn_issu_cnt?:  string
    down_issu_cnt?:  string
    stnr_issu_cnt?:  string
    uplm_issu_cnt?:  string
    lslm_issu_cnt?:  string
    prdy_tr_pbmn?:  string
    dryy_bstp_nmix_hgpr_date?:  string
    dryy_bstp_nmix_hgpr?:  string
    dryy_bstp_nmix_lwpr?:  string
    dryy_bstp_nmix_lwpr_date?:  string
}



export interface FHPUP02120000_RESPONSE_BODY_OUTPUT2 {
    stck_bsop_date?:  string
    bstp_nmix_prpr?:  string
    prdy_vrss_sign?:  string
    bstp_nmix_prdy_vrss?:  string
    bstp_nmix_prdy_ctrt?:  string
    bstp_nmix_oprc?:  string
    bstp_nmix_hgpr?:  string
    bstp_nmix_lwpr?:  string
    acml_vol_rlim?:  string
    acml_vol?:  string
    acml_tr_pbmn?:  string
    invt_new_psdg?:  string
    d20_dsrt?:  string
}


export interface FHPUP02120000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  FHPUP02120000_RESPONSE_BODY_OUTPUT1
    output2?:  Array<FHPUP02120000_RESPONSE_BODY_OUTPUT2>
}


export interface FHPUP02140000_RESPONSE_BODY_OUTPUT1 {
    bstp_nmix_prpr?:  string
    bstp_nmix_prdy_vrss?:  string
    prdy_vrss_sign?:  string
    bstp_nmix_prdy_ctrt?:  string
    acml_vol?:  string
    acml_tr_pbmn?:  string
    bstp_nmix_oprc?:  string
    bstp_nmix_hgpr?:  string
    bstp_nmix_lwpr?:  string
    prdy_vol?:  string
    ascn_issu_cnt?:  string
    down_issu_cnt?:  string
    stnr_issu_cnt?:  string
    uplm_issu_cnt?:  string
    lslm_issu_cnt?:  string
    prdy_tr_pbmn?:  string
    dryy_bstp_nmix_hgpr_date?:  string
    dryy_bstp_nmix_hgpr?:  string
    dryy_bstp_nmix_lwpr?:  string
    dryy_bstp_nmix_lwpr_date?:  string
}



export interface FHPUP02140000_RESPONSE_BODY_OUTPUT2 {
    bstp_cls_code?:  string
    hts_kor_isnm?:  string
    bstp_nmix_prpr?:  string
    bstp_nmix_prdy_vrss?:  string
    prdy_vrss_sign?:  string
    bstp_nmix_prdy_ctrt?:  string
    acml_vol?:  string
    acml_tr_pbmn?:  string
    acml_vol_rlim?:  string
    acml_tr_pbmn_rlim?:  string
}


export interface FHPUP02140000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  FHPUP02140000_RESPONSE_BODY_OUTPUT1
    output2?:  Array<FHPUP02140000_RESPONSE_BODY_OUTPUT2>
}


export interface FHKUP11750000_RESPONSE_BODY_OUTPUT1 {
    bstp_nmix_prpr?:  string
    bstp_nmix_prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    ascn_issu_cnt?:  string
    down_issu_cnt?:  string
    stnr_issu_cnt?:  string
    bstp_cls_code?:  string
}



export interface FHKUP11750000_RESPONSE_BODY_OUTPUT2 {
    hts_kor_isnm?:  string
    bstp_nmix_prpr?:  string
    bstp_nmix_prdy_vrss?:  string
    prdy_vrss_sign?:  string
    bstp_nmix_prdy_ctrt?:  string
    acml_vol?:  string
    nmix_sdpr?:  string
    ascn_issu_cnt?:  string
    stnr_issu_cnt?:  string
    down_issu_cnt?:  string
}


export interface FHKUP11750000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  FHKUP11750000_RESPONSE_BODY_OUTPUT1
    output2?:  Array<FHKUP11750000_RESPONSE_BODY_OUTPUT2>
}


export interface FHPUP02110100_RESPONSE_BODY_OUTPUT {
    stck_cntg_hour?:  string
    bstp_nmix_prpr?:  string
    bstp_nmix_prdy_vrss?:  string
    prdy_vrss_sign?:  string
    bstp_nmix_prdy_ctrt?:  string
    acml_tr_pbmn?:  string
    acml_vol?:  string
    cntg_vol?:  string
}


export interface FHPUP02110100_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHPUP02110100_RESPONSE_BODY_OUTPUT>
}


export interface FHPUP02110200_RESPONSE_BODY_OUTPUT {
    bsop_hour?:  string
    bstp_nmix_prpr?:  string
    bstp_nmix_prdy_vrss?:  string
    prdy_vrss_sign?:  string
    bstp_nmix_prdy_ctrt?:  string
    acml_tr_pbmn?:  string
    acml_vol?:  string
    cntg_vol?:  string
}


export interface FHPUP02110200_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHPUP02110200_RESPONSE_BODY_OUTPUT>
}


export interface FHPST01840000_RESPONSE_BODY_OUTPUT {
    stck_cntg_hour?:  string
    bstp_nmix_prpr?:  string
    prdy_vrss_sign?:  string
    bstp_nmix_prdy_vrss?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    acml_tr_pbmn?:  string
}


export interface FHPST01840000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHPST01840000_RESPONSE_BODY_OUTPUT>
}


export interface FHPST07020000_RESPONSE_BODY_OUTPUT1 {
    bcdt_code?:  string
    hts_kor_isnm?:  string
    bond_mnrt_prpr?:  string
    prdy_vrss_sign?:  string
    bond_mnrt_prdy_vrss?:  string
    prdy_ctrt?:  string
    stck_bsop_date?:  string
}



export interface FHPST07020000_RESPONSE_BODY_OUTPUT2 {
    bcdt_code?:  string
    hts_kor_isnm?:  string
    bond_mnrt_prpr?:  string
    prdy_vrss_sign?:  string
    bond_mnrt_prdy_vrss?:  string
    bstp_nmix_prdy_ctrt?:  string
    stck_bsop_date?:  string
}


export interface FHPST07020000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  FHPST07020000_RESPONSE_BODY_OUTPUT1
    output2?:  Array<FHPST07020000_RESPONSE_BODY_OUTPUT2>
}


export interface FHKST01011800_RESPONSE_BODY_OUTPUT1 {
    cntt_usiq_srno?:  string
    news_ofer_entp_code?:  string
    data_dt?:  string
    data_tm?:  string
    hts_pbnt_titl_cntt?:  string
    news_lrdv_code?:  string
    dorg?:  string
    iscd1?:  string
    iscd2?:  string
    iscd3?:  string
    iscd4?:  string
    iscd5?:  string
}


export interface FHKST01011800_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  FHKST01011800_RESPONSE_BODY_OUTPUT1
}


export interface HHMCM000002C0_RESPONSE_BODY_OUTPUT1 {
    date1?:  string
    date2?:  string
    date3?:  string
    date4?:  string
    date5?:  string
    today?:  string
    time?:  string
    s_time?:  string
    e_time?:  string
}


export interface HHMCM000002C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<HHMCM000002C0_RESPONSE_BODY_OUTPUT1>
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


export interface CTPF1002R_RESPONSE_BODY_OUTPUT {
    pdno?:  string
    prdt_type_cd?:  string
    mket_id_cd?:  string
    scty_grp_id_cd?:  string
    excg_dvsn_cd?:  string
    setl_mmdd?:  string
    lstg_stqt?:  string
    lstg_cptl_amt?:  string
    cpta?:  string
    papr?:  string
    issu_pric?:  string
    kospi200_item_yn?:  string
    scts_mket_lstg_dt?:  string
    scts_mket_lstg_abol_dt?:  string
    kosdaq_mket_lstg_dt?:  string
    kosdaq_mket_lstg_abol_dt?:  string
    frbd_mket_lstg_dt?:  string
    frbd_mket_lstg_abol_dt?:  string
    reits_kind_cd?:  string
    etf_dvsn_cd?:  string
    oilf_fund_yn?:  string
    idx_bztp_lcls_cd?:  string
    idx_bztp_mcls_cd?:  string
    idx_bztp_scls_cd?:  string
    stck_kind_cd?:  string
    mfnd_opng_dt?:  string
    mfnd_end_dt?:  string
    dpsi_erlm_cncl_dt?:  string
    etf_cu_qty?:  string
    prdt_name?:  string
    prdt_name120?:  string
    prdt_abrv_name?:  string
    std_pdno?:  string
    prdt_eng_name?:  string
    prdt_eng_name120?:  string
    prdt_eng_abrv_name?:  string
    dpsi_aptm_erlm_yn?:  string
    etf_txtn_type_cd?:  string
    etf_type_cd?:  string
    lstg_abol_dt?:  string
    nwst_odst_dvsn_cd?:  string
    sbst_pric?:  string
    thco_sbst_pric?:  string
    thco_sbst_pric_chng_dt?:  string
    tr_stop_yn?:  string
    admn_item_yn?:  string
    thdt_clpr?:  string
    bfdy_clpr?:  string
    clpr_chng_dt?:  string
    std_idst_clsf_cd?:  string
    std_idst_clsf_cd_name?:  string
    idx_bztp_lcls_cd_name?:  string
    idx_bztp_mcls_cd_name?:  string
    idx_bztp_scls_cd_name?:  string
    ocr_no?:  string
    crfd_item_yn?:  string
    elec_scty_yn?:  string
    issu_istt_cd?:  string
    etf_chas_erng_rt_dbnb?:  string
    etf_etn_ivst_heed_item_yn?:  string
    stln_int_rt_dvsn_cd?:  string
    frnr_psnl_lmt_rt?:  string
    lstg_rqsr_issu_istt_cd?:  string
    lstg_rqsr_item_cd?:  string
    trst_istt_issu_istt_cd?:  string
}


export interface CTPF1002R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  CTPF1002R_RESPONSE_BODY_OUTPUT
}


export interface FHKST66430100_RESPONSE_BODY_OUTPUT {
    stac_yymm?:  string
    cras?:  string
    fxas?:  string
    total_aset?:  string
    flow_lblt?:  string
    fix_lblt?:  string
    total_lblt?:  string
    cpfn?:  string
    cfp_surp?:  string
    prfi_surp?:  string
    total_cptl?:  string
}


export interface FHKST66430100_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHKST66430100_RESPONSE_BODY_OUTPUT>
}


export interface FHKST66430200_RESPONSE_BODY_OUTPUT {
    stac_yymm?:  string
    sale_account?:  string
    sale_cost?:  string
    sale_totl_prfi?:  string
    depr_cost?:  string
    sell_mang?:  string
    bsop_prti?:  string
    bsop_non_ernn?:  string
    bsop_non_expn?:  string
    op_prfi?:  string
    spec_prfi?:  string
    spec_loss?:  string
    thtr_ntin?:  string
}


export interface FHKST66430200_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHKST66430200_RESPONSE_BODY_OUTPUT>
}


export interface FHKST66430300_RESPONSE_BODY_OUTPUT {
    stac_yymm?:  string
    grs?:  string
    bsop_prfi_inrt?:  string
    ntin_inrt?:  string
    roe_val?:  string
    eps?:  string
    sps?:  string
    bps?:  string
    rsrv_rate?:  string
    lblt_rate?:  string
}


export interface FHKST66430300_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHKST66430300_RESPONSE_BODY_OUTPUT>
}


export interface FHKST66430400_RESPONSE_BODY_OUTPUT {
    stac_yymm?:  string
    cptl_ntin_rate?:  string
    self_cptl_ntin_inrt?:  string
    sale_ntin_rate?:  string
    sale_totl_rate?:  string
}


export interface FHKST66430400_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHKST66430400_RESPONSE_BODY_OUTPUT>
}


export interface FHKST66430500_RESPONSE_BODY_OUTPUT {
    stac_yymm?:  string
    payout_rate?:  string
    eva?:  string
    ebitda?:  string
    ev_ebitda?:  string
}


export interface FHKST66430500_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHKST66430500_RESPONSE_BODY_OUTPUT>
}


export interface FHKST66430600_RESPONSE_BODY_OUTPUT {
    stac_yymm?:  string
    lblt_rate?:  string
    bram_depn?:  string
    crnt_rate?:  string
    quck_rate?:  string
}


export interface FHKST66430600_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHKST66430600_RESPONSE_BODY_OUTPUT>
}


export interface FHKST66430800_RESPONSE_BODY_OUTPUT {
    stac_yymm?:  string
    grs?:  string
    bsop_prfi_inrt?:  string
    equt_inrt?:  string
    totl_aset_inrt?:  string
}


export interface FHKST66430800_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHKST66430800_RESPONSE_BODY_OUTPUT>
}


export interface FHPST04770000_RESPONSE_BODY_OUTPUT {
    stck_shrn_iscd?:  string
    hts_kor_isnm?:  string
    crdt_rate?:  string
}


export interface FHPST04770000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHPST04770000_RESPONSE_BODY_OUTPUT>
}


export interface HHKDB669102C0_RESPONSE_BODY_OUTPUT1 {
    record_date?:  string
    sht_cd?:  string
    isin_name?:  string
    divi_kind?:  string
    face_val?:  string
    per_sto_divi_amt?:  string
    divi_rate?:  string
    stk_divi_rate?:  string
    divi_pay_dt?:  string
    stk_div_pay_dt?:  string
    odd_pay_dt?:  string
    stk_kind?:  string
    high_divi_gb?:  string
}


export interface HHKDB669102C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<HHKDB669102C0_RESPONSE_BODY_OUTPUT1>
}


export interface HHKDB669103C0_RESPONSE_BODY_OUTPUT1 {
    record_date?:  string
    sht_cd?:  string
    isin_name?:  string
    stk_kind?:  string
    opp_opi_rcpt_term?:  string
    buy_req_rcpt_term?:  string
    buy_req_price?:  string
    buy_amt_pay_dt?:  string
    get_meet_dt?:  string
}


export interface HHKDB669103C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<HHKDB669103C0_RESPONSE_BODY_OUTPUT1>
}


export interface HHKDB669104C0_RESPONSE_BODY_OUTPUT1 {
    record_date?:  string
    sht_cd?:  string
    opp_cust_cd?:  string
    opp_cust_nm?:  string
    cust_cd?:  string
    cust_nm?:  string
    merge_type?:  string
    merge_rate?:  string
    td_stop_dt?:  string
    list_dt?:  string
    odd_amt_pay_dt?:  string
    tot_issue_stk_qty?:  string
    issue_stk_qty?:  string
    seq?:  string
}


export interface HHKDB669104C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<HHKDB669104C0_RESPONSE_BODY_OUTPUT1>
}


export interface HHKDB669105C0_RESPONSE_BODY_OUTPUT1 {
    record_date?:  string
    sht_cd?:  string
    isin_name?:  string
    inter_bf_face_amt?:  string
    inter_af_face_amt?:  string
    td_stop_dt?:  string
    list_dt?:  string
}


export interface HHKDB669105C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<HHKDB669105C0_RESPONSE_BODY_OUTPUT1>
}


export interface HHKDB669106C0_RESPONSE_BODY_OUTPUT1 {
    record_date?:  string
    sht_cd?:  string
    isin_name?:  string
    stk_kind?:  string
    reduce_cap_type?:  string
    reduce_cap_rate?:  string
    comp_way?:  string
    td_stop_dt?:  string
    list_dt?:  string
}


export interface HHKDB669106C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<HHKDB669106C0_RESPONSE_BODY_OUTPUT1>
}


export interface HHKDB669107C0_RESPONSE_BODY_OUTPUT1 {
    list_dt?:  string
    sht_cd?:  string
    isin_name?:  string
    stk_kind?:  string
    issue_type?:  string
    issue_stk_qty?:  string
    tot_issue_stk_qty?:  string
    issue_price?:  string
}


export interface HHKDB669107C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<HHKDB669107C0_RESPONSE_BODY_OUTPUT1>
}


export interface HHKDB669108C0_RESPONSE_BODY_OUTPUT1 {
    record_date?:  string
    sht_cd?:  string
    isin_name?:  string
    fix_subscr_pri?:  string
    face_value?:  string
    subscr_dt?:  string
    pay_dt?:  string
    refund_dt?:  string
    list_dt?:  string
    lead_mgr?:  string
    pub_bf_cap?:  string
    pub_af_cap?:  string
    assign_stk_qty?:  string
}


export interface HHKDB669108C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<HHKDB669108C0_RESPONSE_BODY_OUTPUT1>
}


export interface HHKDB669109C0_RESPONSE_BODY_OUTPUT1 {
    record_date?:  string
    sht_cd?:  string
    isin_name?:  string
    subscr_dt?:  string
    subscr_price?:  string
    subscr_stk_qty?:  string
    refund_dt?:  string
    list_dt?:  string
    lead_mgr?:  string
}


export interface HHKDB669109C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<HHKDB669109C0_RESPONSE_BODY_OUTPUT1>
}


export interface HHKDB669110C0_RESPONSE_BODY_OUTPUT1 {
    sht_cd?:  string
    isin_name?:  string
    stk_qty?:  string
    depo_date?:  string
    depo_reason?:  string
    tot_issue_qty_per_rate?:  string
}


export interface HHKDB669110C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<HHKDB669110C0_RESPONSE_BODY_OUTPUT1>
}


export interface HHKDB669100C0_RESPONSE_BODY_OUTPUT {
    record_date?:  string
    sht_cd?:  string
    isin_name?:  string
    tot_issue_stk_qty?:  string
    issue_stk_qty?:  string
    fix_rate?:  string
    disc_rate?:  string
    fix_price?:  string
    right_dt?:  string
    sub_term_ft?:  string
    sub_term?:  string
    list_date?:  string
    stk_kind?:  string
}


export interface HHKDB669100C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<HHKDB669100C0_RESPONSE_BODY_OUTPUT>
}


export interface HHKDB669101C0_RESPONSE_BODY_OUTPUT1 {
    record_date?:  string
    sht_cd?:  string
    isin_name?:  string
    fix_rate?:  string
    odd_rec_price?:  string
    right_dt?:  string
    odd_pay_dt?:  string
    list_date?:  string
    tot_issue_stk_qty?:  string
    issue_stk_qty?:  string
    stk_kind?:  string
}


export interface HHKDB669101C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<HHKDB669101C0_RESPONSE_BODY_OUTPUT1>
}


export interface HHKDB669111C0_RESPONSE_BODY_OUTPUT1 {
    record_date?:  string
    sht_cd?:  string
    isin_name?:  string
    gen_meet_dt?:  string
    gen_meet_type?:  string
    agenda?:  string
    vote_tot_qty?:  string
}


export interface HHKDB669111C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<HHKDB669111C0_RESPONSE_BODY_OUTPUT1>
}


export interface HHKST668300C0_RESPONSE_BODY_OUTPUT1 {
    sht_cd?:  string
    item_kor_nm?:  string
    name1?:  string
    name2?:  string
    estdate?:  string
    rcmd_name?:  string
    capital?:  string
    forn_item_lmtrt?:  string
}



export interface HHKST668300C0_RESPONSE_BODY_OUTPUT2 {
    data1?:  string
    data2?:  string
    data3?:  string
    data4?:  string
    data5?:  string
}



export interface HHKST668300C0_RESPONSE_BODY_OUTPUT3 {
    data1?:  string
    data2?:  string
    data3?:  string
    data4?:  string
    data5?:  string
}



export interface HHKST668300C0_RESPONSE_BODY_OUTPUT4 {
    dt?:  string
}


export interface HHKST668300C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  HHKST668300C0_RESPONSE_BODY_OUTPUT1
    output2?:  Array<HHKST668300C0_RESPONSE_BODY_OUTPUT2>
    output3?:  Array<HHKST668300C0_RESPONSE_BODY_OUTPUT3>
    output4?:  Array<HHKST668300C0_RESPONSE_BODY_OUTPUT4>
}


export interface CTSC2702R_RESPONSE_BODY_OUTPUT1 {
    pdno?:  string
    prdt_name?:  string
    papr?:  string
    bfdy_clpr?:  string
    sbst_prvs?:  string
    tr_stop_dvsn_name?:  string
    psbl_yn_name?:  string
    lmt_qty1?:  string
    use_qty1?:  string
    trad_psbl_qty2?:  string
    rght_type_cd?:  string
    bass_dt?:  string
    psbl_yn?:  string
}



export interface CTSC2702R_RESPONSE_BODY_OUTPUT2 {
    tot_stup_lmt_qty?:  string
    brch_lmt_qty?:  string
    rqst_psbl_qty?:  string
}


export interface CTSC2702R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<CTSC2702R_RESPONSE_BODY_OUTPUT1>
    output2?:  CTSC2702R_RESPONSE_BODY_OUTPUT2
}


export interface FHKST663300C0_RESPONSE_BODY_OUTPUT1 {
    stck_bsop_date?:  string
    invt_opnn?:  string
    invt_opnn_cls_code?:  string
    rgbf_invt_opnn?:  string
    rgbf_invt_opnn_cls_code?:  string
    mbcr_name?:  string
    hts_goal_prc?:  string
    stck_prdy_clpr?:  string
    stck_nday_esdg?:  string
    nday_dprt?:  string
    stft_esdg?:  string
    dprt?:  string
}


export interface FHKST663300C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<FHKST663300C0_RESPONSE_BODY_OUTPUT1>
}


export interface FHKST663400C0_RESPONSE_BODY_OUTPUT1 {
    stck_bsop_date?:  string
    stck_shrn_iscd?:  string
    hts_kor_isnm?:  string
    invt_opnn?:  string
    invt_opnn_cls_code?:  string
    rgbf_invt_opnn?:  string
    rgbf_invt_opnn_cls_code?:  string
    mbcr_name?:  string
    stck_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    hts_goal_prc?:  string
    stck_prdy_clpr?:  string
    stft_esdg?:  string
    dprt?:  string
}


export interface FHKST663400C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<FHKST663400C0_RESPONSE_BODY_OUTPUT1>
}

export type FHPTJ04400000_RESPONSE_BODY_OUTPUT_FRGN_NTBY_TR_PBMN = '(단위';
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
    frgn_ntby_tr_pbmn?:  FHPTJ04400000_RESPONSE_BODY_OUTPUT_FRGN_NTBY_TR_PBMN
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


export interface HHKST03900300_RESPONSE_BODY_OUTPUT2 {
    user_id?:  string
    seq?:  string
    grp_nm?:  string
    condition_nm?:  string
}


export interface HHKST03900300_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output2?:  Array<HHKST03900300_RESPONSE_BODY_OUTPUT2>
}


export interface HHKST03900400_RESPONSE_BODY_OUTPUT2 {
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
    output2?:  Array<HHKST03900400_RESPONSE_BODY_OUTPUT2>
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


export interface FHKST03010800_RESPONSE_BODY_OUTPUT1 {
    shnu_cnqn_smtn?:  string
    seln_cnqn_smtn?:  string
}



export interface FHKST03010800_RESPONSE_BODY_OUTPUT2 {
    stck_bsop_date?:  string
    total_seln_qty?:  string
    total_shnu_qty?:  string
}


export interface FHKST03010800_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  FHKST03010800_RESPONSE_BODY_OUTPUT1
    output2?:  Array<FHKST03010800_RESPONSE_BODY_OUTPUT2>
}


export interface FHPTJ04030000_RESPONSE_BODY_OUTPUT {
    frgn_seln_vol?:  string
    frgn_shnu_vol?:  string
    frgn_ntby_qty?:  string
    frgn_seln_tr_pbmn?:  string
    frgn_shnu_tr_pbmn?:  string
    frgn_ntby_tr_pbmn?:  string
    prsn_seln_vol?:  string
    prsn_shnu_vol?:  string
    prsn_ntby_qty?:  string
    prsn_seln_tr_pbmn?:  string
    prsn_shnu_tr_pbmn?:  string
    prsn_ntby_tr_pbmn?:  string
    orgn_seln_vol?:  string
    orgn_shnu_vol?:  string
    orgn_ntby_qty?:  string
    orgn_seln_tr_pbmn?:  string
    orgn_shnu_tr_pbmn?:  string
    orgn_ntby_tr_pbmn?:  string
    scrt_seln_vol?:  string
    scrt_shnu_vol?:  string
    scrt_ntby_qty?:  string
    scrt_seln_tr_pbmn?:  string
    scrt_shnu_tr_pbmn?:  string
    scrt_ntby_tr_pbmn?:  string
    ivtr_seln_vol?:  string
    ivtr_shnu_vol?:  string
    ivtr_ntby_qty?:  string
    ivtr_seln_tr_pbmn?:  string
    ivtr_shnu_tr_pbmn?:  string
    ivtr_ntby_tr_pbmn?:  string
    pe_fund_seln_tr_pbmn?:  string
    pe_fund_seln_vol?:  string
    pe_fund_ntby_vol?:  string
    pe_fund_shnu_tr_pbmn?:  string
    pe_fund_shnu_vol?:  string
    pe_fund_ntby_tr_pbmn?:  string
    bank_seln_vol?:  string
    bank_shnu_vol?:  string
    bank_ntby_qty?:  string
    bank_seln_tr_pbmn?:  string
    bank_shnu_tr_pbmn?:  string
    bank_ntby_tr_pbmn?:  string
    insu_seln_vol?:  string
    insu_shnu_vol?:  string
    insu_ntby_qty?:  string
    insu_seln_tr_pbmn?:  string
    insu_shnu_tr_pbmn?:  string
    insu_ntby_tr_pbmn?:  string
    mrbn_seln_vol?:  string
    mrbn_shnu_vol?:  string
    mrbn_ntby_qty?:  string
    mrbn_seln_tr_pbmn?:  string
    mrbn_shnu_tr_pbmn?:  string
    mrbn_ntby_tr_pbmn?:  string
    fund_seln_vol?:  string
    fund_shnu_vol?:  string
    fund_ntby_qty?:  string
    fund_seln_tr_pbmn?:  string
    fund_shnu_tr_pbmn?:  string
    fund_ntby_tr_pbmn?:  string
    etc_orgt_seln_vol?:  string
    etc_orgt_shnu_vol?:  string
    etc_orgt_ntby_vol?:  string
    etc_orgt_seln_tr_pbmn?:  string
    etc_orgt_shnu_tr_pbmn?:  string
    etc_orgt_ntby_tr_pbmn?:  string
    etc_corp_seln_vol?:  string
    etc_corp_shnu_vol?:  string
    etc_corp_ntby_vol?:  string
    etc_corp_seln_tr_pbmn?:  string
    etc_corp_shnu_tr_pbmn?:  string
    etc_corp_ntby_tr_pbmn?:  string
}


export interface FHPTJ04030000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  FHPTJ04030000_RESPONSE_BODY_OUTPUT
}

export type FHPST04760000_RESPONSE_BODY_OUTPUT_WHOL_LOAN_NEW_STCN = '단위';
export type FHPST04760000_RESPONSE_BODY_OUTPUT_WHOL_LOAN_RDMP_STCN = '단위';
export type FHPST04760000_RESPONSE_BODY_OUTPUT_WHOL_LOAN_RMND_STCN = '단위';
export type FHPST04760000_RESPONSE_BODY_OUTPUT_WHOL_LOAN_NEW_AMT = '단위';
export type FHPST04760000_RESPONSE_BODY_OUTPUT_WHOL_LOAN_RDMP_AMT = '단위';
export type FHPST04760000_RESPONSE_BODY_OUTPUT_WHOL_LOAN_RMND_AMT = '단위';
export type FHPST04760000_RESPONSE_BODY_OUTPUT_WHOL_STLN_NEW_STCN = '단위';
export type FHPST04760000_RESPONSE_BODY_OUTPUT_WHOL_STLN_RDMP_STCN = '단위';
export type FHPST04760000_RESPONSE_BODY_OUTPUT_WHOL_STLN_RMND_STCN = '단위';
export type FHPST04760000_RESPONSE_BODY_OUTPUT_WHOL_STLN_NEW_AMT = '단위';
export type FHPST04760000_RESPONSE_BODY_OUTPUT_WHOL_STLN_RDMP_AMT = '단위';
export type FHPST04760000_RESPONSE_BODY_OUTPUT_WHOL_STLN_RMND_AMT = '단위';
export interface FHPST04760000_RESPONSE_BODY_OUTPUT {
    deal_date?:  string
    stck_prpr?:  string
    prdy_vrss_sign?:  string
    prdy_vrss?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    stlm_date?:  string
    whol_loan_new_stcn?:  FHPST04760000_RESPONSE_BODY_OUTPUT_WHOL_LOAN_NEW_STCN
    whol_loan_rdmp_stcn?:  FHPST04760000_RESPONSE_BODY_OUTPUT_WHOL_LOAN_RDMP_STCN
    whol_loan_rmnd_stcn?:  FHPST04760000_RESPONSE_BODY_OUTPUT_WHOL_LOAN_RMND_STCN
    whol_loan_new_amt?:  FHPST04760000_RESPONSE_BODY_OUTPUT_WHOL_LOAN_NEW_AMT
    whol_loan_rdmp_amt?:  FHPST04760000_RESPONSE_BODY_OUTPUT_WHOL_LOAN_RDMP_AMT
    whol_loan_rmnd_amt?:  FHPST04760000_RESPONSE_BODY_OUTPUT_WHOL_LOAN_RMND_AMT
    whol_loan_rmnd_rate?:  string
    whol_loan_gvrt?:  string
    whol_stln_new_stcn?:  FHPST04760000_RESPONSE_BODY_OUTPUT_WHOL_STLN_NEW_STCN
    whol_stln_rdmp_stcn?:  FHPST04760000_RESPONSE_BODY_OUTPUT_WHOL_STLN_RDMP_STCN
    whol_stln_rmnd_stcn?:  FHPST04760000_RESPONSE_BODY_OUTPUT_WHOL_STLN_RMND_STCN
    whol_stln_new_amt?:  FHPST04760000_RESPONSE_BODY_OUTPUT_WHOL_STLN_NEW_AMT
    whol_stln_rdmp_amt?:  FHPST04760000_RESPONSE_BODY_OUTPUT_WHOL_STLN_RDMP_AMT
    whol_stln_rmnd_amt?:  FHPST04760000_RESPONSE_BODY_OUTPUT_WHOL_STLN_RMND_AMT
    whol_stln_rmnd_rate?:  string
    whol_stln_gvrt?:  string
    stck_oprc?:  string
    stck_hgpr?:  string
    stck_lwpr?:  string
}


export interface FHPST04760000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHPST04760000_RESPONSE_BODY_OUTPUT>
}


export interface FHPST01810000_RESPONSE_BODY_OUTPUT1 {
    rprs_mrkt_kor_name?:  string
    antc_cnpr?:  string
    antc_cntg_vrss_sign?:  string
    antc_cntg_vrss?:  string
    antc_cntg_prdy_ctrt?:  string
    antc_vol?:  string
    antc_tr_pbmn?:  string
}



export interface FHPST01810000_RESPONSE_BODY_OUTPUT2 {
    stck_bsop_date?:  string
    stck_cntg_hour?:  string
    stck_prpr?:  string
    prdy_vrss_sign?:  string
    prdy_vrss?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
}


export interface FHPST01810000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  FHPST01810000_RESPONSE_BODY_OUTPUT1
    output2?:  Array<FHPST01810000_RESPONSE_BODY_OUTPUT2>
}


export interface FHPST04830000_RESPONSE_BODY_OUTPUT1 {
    stck_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    prdy_vol?:  string
}



export interface FHPST04830000_RESPONSE_BODY_OUTPUT2 {
    stck_bsop_date?:  string
    stck_clpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    stnd_vol_smtn?:  string
    ssts_cntg_qty?:  string
    ssts_vol_rlim?:  string
    acml_ssts_cntg_qty?:  string
    acml_ssts_cntg_qty_rlim?:  string
    acml_tr_pbmn?:  string
    stnd_tr_pbmn_smtn?:  string
    ssts_tr_pbmn?:  string
    ssts_tr_pbmn_rlim?:  string
    acml_ssts_tr_pbmn?:  string
    acml_ssts_tr_pbmn_rlim?:  string
    stck_oprc?:  string
    stck_hgpr?:  string
    stck_lwpr?:  string
    avrg_prc?:  string
}


export interface FHPST04830000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  FHPST04830000_RESPONSE_BODY_OUTPUT1
    output2?:  Array<FHPST04830000_RESPONSE_BODY_OUTPUT2>
}


export interface FHPPG04600000_RESPONSE_BODY_OUTPUT1 {
    stck_bsop_date?:  string
    arbt_entm_seln_vol?:  string
    arbt_entm_seln_vol_rate?:  string
    arbt_entm_seln_tr_pbmn?:  string
    arbt_entm_seln_tr_pbmn_rate?:  string
    arbt_onsl_seln_tr_pbmn?:  string
    arbt_onsl_seln_tr_pbmn_rate?:  string
    arbt_onsl_seln_vol?:  string
    arbt_onsl_seln_vol_rate?:  string
    arbt_smtn_seln_vol?:  string
    arbt_smtm_seln_vol_rate?:  string
    arbt_smtn_seln_tr_pbmn?:  string
    arbt_smtm_seln_tr_pbmn_rate?:  string
    nabt_entm_seln_vol?:  string
    nabt_entm_seln_tr_pbmn?:  string
    nabt_entm_seln_vol_rate?:  string
    nabt_entm_seln_tr_pbmn_rate?:  string
    nabt_onsl_seln_vol?:  string
    nabt_onsl_seln_vol_rate?:  string
    nabt_onsl_seln_tr_pbmn?:  string
    nabt_onsl_seln_tr_pbmn_rate?:  string
    nabt_smtn_seln_vol?:  string
    nabt_smtm_seln_vol_rate?:  string
    nabt_smtn_seln_tr_pbmn?:  string
    nabt_smtm_seln_tr_pbmn_rate?:  string
    whol_entm_seln_vol?:  string
    whol_entm_seln_tr_pbmn?:  string
    whol_entm_seln_vol_rate?:  string
    whol_entm_seln_tr_pbmn_rate?:  string
    whol_onsl_seln_vol?:  string
    whol_onsl_seln_vol_rate?:  string
    whol_onsl_seln_tr_pbmn?:  string
    whol_onsl_seln_tr_pbmn_rate?:  string
    whol_smtn_seln_vol?:  string
    whol_seln_vol_rate?:  string
    whol_smtn_seln_tr_pbmn?:  string
    whol_seln_tr_pbmn_rate?:  string
    arbt_entm_shnu_vol?:  string
    arbt_entm_shnu_vol_rate?:  string
    arbt_entm_shnu_tr_pbmn?:  string
    arbt_entm_shnu_tr_pbmn_rate?:  string
    arbt_onsl_shnu_vol?:  string
    arbt_onsl_shnu_vol_rate?:  string
    arbt_onsl_shnu_tr_pbmn?:  string
    arbt_onsl_shnu_tr_pbmn_rate?:  string
    arbt_smtn_shnu_vol?:  string
    arbt_smtm_shun_vol_rate?:  string
    arbt_smtn_shnu_tr_pbmn?:  string
    arbt_smtm_shun_tr_pbmn_rate?:  string
    nabt_entm_shnu_vol?:  string
    nabt_entm_shnu_vol_rate?:  string
    nabt_entm_shnu_tr_pbmn?:  string
    nabt_entm_shnu_tr_pbmn_rate?:  string
    nabt_onsl_shnu_vol?:  string
    nabt_onsl_shnu_vol_rate?:  string
    nabt_onsl_shnu_tr_pbmn?:  string
    nabt_onsl_shnu_tr_pbmn_rate?:  string
    nabt_smtn_shnu_vol?:  string
    nabt_smtm_shun_vol_rate?:  string
    nabt_smtn_shnu_tr_pbmn?:  string
    nabt_smtm_shun_tr_pbmn_rate?:  string
    whol_entm_shnu_vol?:  string
    whol_entm_shnu_vol_rate?:  string
    whol_entm_shnu_tr_pbmn?:  string
    whol_entm_shnu_tr_pbmn_rate?:  string
    whol_onsl_shnu_vol?:  string
    whol_onsl_shnu_tr_pbmn?:  string
    whol_onsl_shnu_tr_pbmn_rate?:  string
    whol_onsl_shnu_vol_rate?:  string
    whol_smtn_shnu_vol?:  string
    whol_shun_vol_rate?:  string
    whol_smtn_shnu_tr_pbmn?:  string
    whol_shun_tr_pbmn_rate?:  string
    arbt_entm_ntby_qty?:  string
    arbt_entm_ntby_qty_rate?:  string
    arbt_entm_ntby_tr_pbmn?:  string
    arbt_entm_ntby_tr_pbmn_rate?:  string
    arbt_onsl_ntby_qty?:  string
    arbt_onsl_ntby_qty_rate?:  string
    arbt_onsl_ntby_tr_pbmn?:  string
    arbt_onsl_ntby_tr_pbmn_rate?:  string
    arbt_smtn_ntby_qty?:  string
    arbt_smtm_ntby_qty_rate?:  string
    arbt_smtn_ntby_tr_pbmn?:  string
    arbt_smtm_ntby_tr_pbmn_rate?:  string
    nabt_entm_ntby_qty?:  string
    nabt_entm_ntby_qty_rate?:  string
    nabt_entm_ntby_tr_pbmn?:  string
    nabt_entm_ntby_tr_pbmn_rate?:  string
    nabt_onsl_ntby_qty?:  string
    nabt_onsl_ntby_qty_rate?:  string
    nabt_onsl_ntby_tr_pbmn?:  string
    nabt_onsl_ntby_tr_pbmn_rate?:  string
    nabt_smtn_ntby_qty?:  string
    nabt_smtm_ntby_qty_rate?:  string
    nabt_smtn_ntby_tr_pbmn?:  string
    nabt_smtm_ntby_tr_pbmn_rate?:  string
    whol_entm_ntby_qty?:  string
    whol_entm_ntby_qty_rate?:  string
    whol_entm_ntby_tr_pbmn?:  string
}


export interface FHPPG04600000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<FHPPG04600000_RESPONSE_BODY_OUTPUT1>
}


export interface FHKST11860000_RESPONSE_BODY_OUTPUT1 {
    data_rank?:  string
    iscd_stat_cls_code?:  string
    stck_shrn_iscd?:  string
    hts_kor_isnm?:  string
    ovtm_untp_antc_cnpr?:  string
    ovtm_untp_antc_cntg_vrss?:  string
    ovtm_untp_antc_cntg_vrsssign?:  string
    ovtm_untp_antc_cntg_ctrt?:  string
    ovtm_untp_askp_rsqn1?:  string
    ovtm_untp_bidp_rsqn1?:  string
    ovtm_untp_antc_cnqn?:  string
    itmt_vol?:  string
    stck_prpr?:  string
}


export interface FHKST11860000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  FHKST11860000_RESPONSE_BODY_OUTPUT1
}


export interface FHPPG04600100_RESPONSE_BODY_OUTPUT {
    bsop_hour?:  string
    arbt_smtn_seln_tr_pbmn?:  string
    arbt_smtm_seln_tr_pbmn_rate?:  string
    arbt_smtn_shnu_tr_pbmn?:  string
    arbt_smtm_shun_tr_pbmn_rate?:  string
    nabt_smtn_seln_tr_pbmn?:  string
    nabt_smtm_seln_tr_pbmn_rate?:  string
    nabt_smtn_shnu_tr_pbmn?:  string
    nabt_smtm_shun_tr_pbmn_rate?:  string
    arbt_smtn_ntby_tr_pbmn?:  string
    arbt_smtm_ntby_tr_pbmn_rate?:  string
    nabt_smtn_ntby_tr_pbmn?:  string
    nabt_smtm_ntby_tr_pbmn_rate?:  string
    whol_smtn_ntby_tr_pbmn?:  string
    whol_ntby_tr_pbmn_rate?:  string
}


export interface FHPPG04600100_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHPPG04600100_RESPONSE_BODY_OUTPUT>
}


export interface HHPST074500C0_RESPONSE_BODY_OUTPUT {
    bsop_date?:  string
    stck_prpr?:  string
    prdy_vrss_sign?:  string
    prdy_vrss?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    new_stcn?:  string
    rdmp_stcn?:  string
    prdy_rmnd_vrss?:  string
    rmnd_stcn?:  string
    rmnd_amt?:  string
}


export interface HHPST074500C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<HHPST074500C0_RESPONSE_BODY_OUTPUT>
}


export interface FHKST644100C0_RESPONSE_BODY_OUTPUT {
    stck_shrn_iscd?:  string
    hts_kor_isnm?:  string
    glob_ntsl_qty?:  string
    stck_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    glob_total_seln_qty?:  string
    glob_total_shnu_qty?:  string
}


export interface FHKST644100C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHKST644100C0_RESPONSE_BODY_OUTPUT>
}


export interface FHKST644400C0_RESPONSE_BODY_OUTPUT1 {
    bsop_hour?:  string
    stck_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    frgn_seln_vol?:  string
    frgn_shnu_vol?:  string
    glob_ntby_qty?:  string
    frgn_ntby_qty_icdc?:  string
}


export interface FHKST644400C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<FHKST644400C0_RESPONSE_BODY_OUTPUT1>
}


export interface FHKST111900C0_RESPONSE_BODY_OUTPUT {
    prpr_name?:  string
    smtn_avrg_prpr?:  string
    acml_vol?:  string
    whol_ntby_qty_rate?:  string
    ntby_cntg_csnu?:  string
    seln_cnqn_smtn?:  string
    whol_seln_vol_rate?:  string
    seln_cntg_csnu?:  string
    shnu_cnqn_smtn?:  string
    whol_shun_vol_rate?:  string
    shnu_cntg_csnu?:  string
}


export interface FHKST111900C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHKST111900C0_RESPONSE_BODY_OUTPUT>
}

export type FHKST649100C0_RESPONSE_BODY_OUTPUT_HTS_AVLS = '단위';
export type FHKST649100C0_RESPONSE_BODY_OUTPUT_CUST_DPMN_AMT = '단위';
export type FHKST649100C0_RESPONSE_BODY_OUTPUT_UNCL_AMT = '단위';
export type FHKST649100C0_RESPONSE_BODY_OUTPUT_CRDT_LOAN_RMND = '단위';
export type FHKST649100C0_RESPONSE_BODY_OUTPUT_FUTS_TFAM_AMT = '단위';
export type FHKST649100C0_RESPONSE_BODY_OUTPUT_STTP_AMT = '단위';
export type FHKST649100C0_RESPONSE_BODY_OUTPUT_MXTP_AMT = '단위';
export type FHKST649100C0_RESPONSE_BODY_OUTPUT_BNTP_AMT = '단위';
export type FHKST649100C0_RESPONSE_BODY_OUTPUT_MMF_AMT = '단위';
export type FHKST649100C0_RESPONSE_BODY_OUTPUT_SECU_LEND_AMT = '단위';
export interface FHKST649100C0_RESPONSE_BODY_OUTPUT {
    bsop_date?:  string
    bstp_nmix_prpr?:  string
    bstp_nmix_prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    hts_avls?:  FHKST649100C0_RESPONSE_BODY_OUTPUT_HTS_AVLS
    cust_dpmn_amt?:  FHKST649100C0_RESPONSE_BODY_OUTPUT_CUST_DPMN_AMT
    cust_dpmn_amt_prdy_vrss?:  string
    amt_tnrt?:  string
    uncl_amt?:  FHKST649100C0_RESPONSE_BODY_OUTPUT_UNCL_AMT
    crdt_loan_rmnd?:  FHKST649100C0_RESPONSE_BODY_OUTPUT_CRDT_LOAN_RMND
    futs_tfam_amt?:  FHKST649100C0_RESPONSE_BODY_OUTPUT_FUTS_TFAM_AMT
    sttp_amt?:  FHKST649100C0_RESPONSE_BODY_OUTPUT_STTP_AMT
    mxtp_amt?:  FHKST649100C0_RESPONSE_BODY_OUTPUT_MXTP_AMT
    bntp_amt?:  FHKST649100C0_RESPONSE_BODY_OUTPUT_BNTP_AMT
    mmf_amt?:  FHKST649100C0_RESPONSE_BODY_OUTPUT_MMF_AMT
    secu_lend_amt?:  FHKST649100C0_RESPONSE_BODY_OUTPUT_SECU_LEND_AMT
}


export interface FHKST649100C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHKST649100C0_RESPONSE_BODY_OUTPUT>
}


export interface FHPTJ04040000_RESPONSE_BODY_OUTPUT1 {
    stck_bsop_date?:  string
    bstp_nmix_prpr?:  string
    bstp_nmix_prdy_vrss?:  string
    prdy_vrss_sign?:  string
    bstp_nmix_prdy_ctrt?:  string
    bstp_nmix_oprc?:  string
    bstp_nmix_hgpr?:  string
    bstp_nmix_lwpr?:  string
    stck_prdy_clpr?:  string
    frgn_ntby_qty?:  string
    frgn_reg_ntby_qty?:  string
    frgn_nreg_ntby_qty?:  string
    prsn_ntby_qty?:  string
    orgn_ntby_qty?:  string
    scrt_ntby_qty?:  string
    ivtr_ntby_qty?:  string
    pe_fund_ntby_vol?:  string
    bank_ntby_qty?:  string
    insu_ntby_qty?:  string
    mrbn_ntby_qty?:  string
    fund_ntby_qty?:  string
    etc_ntby_qty?:  string
    etc_orgt_ntby_vol?:  string
    etc_corp_ntby_vol?:  string
    frgn_ntby_tr_pbmn?:  string
    frgn_reg_ntby_pbmn?:  string
    frgn_nreg_ntby_pbmn?:  string
    prsn_ntby_tr_pbmn?:  string
    orgn_ntby_tr_pbmn?:  string
    scrt_ntby_tr_pbmn?:  string
    ivtr_ntby_tr_pbmn?:  string
    pe_fund_ntby_tr_pbmn?:  string
    bank_ntby_tr_pbmn?:  string
    insu_ntby_tr_pbmn?:  string
    mrbn_ntby_tr_pbmn?:  string
    fund_ntby_tr_pbmn?:  string
    etc_ntby_tr_pbmn?:  string
    etc_orgt_ntby_tr_pbmn?:  string
    etc_corp_ntby_tr_pbmn?:  string
}


export interface FHPTJ04040000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<FHPTJ04040000_RESPONSE_BODY_OUTPUT1>
}


export interface FHPPG04650200_RESPONSE_BODY_OUTPUT1 {
    stck_bsop_date?:  string
    stck_clpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    acml_tr_pbmn?:  string
    whol_smtn_seln_vol?:  string
    whol_smtn_shnu_vol?:  string
    whol_smtn_ntby_qty?:  string
    whol_smtn_seln_tr_pbmn?:  string
    whol_smtn_shnu_tr_pbmn?:  string
    whol_smtn_ntby_tr_pbmn?:  string
    whol_ntby_vol_icdc?:  string
    whol_ntby_tr_pbmn_icdc2?:  string
}


export interface FHPPG04650200_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<FHPPG04650200_RESPONSE_BODY_OUTPUT1>
}


export interface HHPPG046600C0_RESPONSE_BODY_OUTPUT1 {
    invr_cls_code?:  string
    invr_cls_name?:  string
    arbt_seln_qty?:  string
    arbt_shnu_qty?:  string
    arbt_ntby_qty?:  string
    arbt_seln_amt?:  string
    arbt_shnu_amt?:  string
    arbt_ntby_amt?:  string
    nabt_seln_qty?:  string
    nabt_shnu_qty?:  string
    nabt_ntby_qty?:  string
    nabt_seln_amt?:  string
    nabt_shnu_amt?:  string
    nabt_ntby_amt?:  string
    all_seln_qty?:  string
    all_shnu_qty?:  string
    all_ntby_qty?:  string
    all_seln_amt?:  string
    all_shnu_amt?:  string
    all_ntby_amt?:  string
}


export interface HHPPG046600C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<HHPPG046600C0_RESPONSE_BODY_OUTPUT1>
}


export interface HHKCM113004C6_RESPONSE_BODY_OUTPUT1 {
    data_rank?:  string
    inter_grp_name?:  string
}



export interface HHKCM113004C6_RESPONSE_BODY_OUTPUT2 {
    fid_mrkt_cls_code?:  string
    data_rank?:  string
    exch_code?:  string
    jong_code?:  string
    color_code?:  string
    memo?:  string
    hts_kor_isnm?:  string
    fxdt_ntby_qty?:  string
    cntg_unpr?:  string
    cntg_cls_code?:  string
}


export interface HHKCM113004C6_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  HHKCM113004C6_RESPONSE_BODY_OUTPUT1
    output2?:  Array<HHKCM113004C6_RESPONSE_BODY_OUTPUT2>
}


export interface HHKCM113004C7_RESPONSE_BODY_OUTPUT1 {
    date?:  string
    trnm_hour?:  string
    data_rank?:  string
    inter_grp_code?:  string
    inter_grp_name?:  string
    ask_cnt?:  string
}


export interface HHKCM113004C7_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  HHKCM113004C7_RESPONSE_BODY_OUTPUT1
}


export interface FHKST11300006_RESPONSE_BODY_OUTPUT1 {
    kospi_kosdaq_cls_name?:  string
    mrkt_trtm_cls_name?:  string
    hour_cls_code?:  string
    inter_shrn_iscd?:  string
    inter_kor_isnm?:  string
    inter2_prpr?:  string
    inter2_prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    inter2_oprc?:  string
    inter2_hgpr?:  string
    inter2_lwpr?:  string
    inter2_llam?:  string
    inter2_mxpr?:  string
    inter2_askp?:  string
    inter2_bidp?:  string
    seln_rsqn?:  string
    shnu_rsqn?:  string
    total_askp_rsqn?:  string
    total_bidp_rsqn?:  string
    acml_tr_pbmn?:  string
    inter2_prdy_clpr?:  string
    oprc_vrss_hgpr_rate?:  string
    intr_antc_cntg_vrss?:  string
    intr_antc_cntg_vrss_sign?:  string
    intr_antc_cntg_prdy_ctrt?:  string
    intr_antc_vol?:  string
    inter2_sdpr?:  string
}


export interface FHKST11300006_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  FHKST11300006_RESPONSE_BODY_OUTPUT1
}


export interface FHKST130000C0_RESPONSE_BODY_OUTPUT1 {
    mksc_shrn_iscd?:  string
    hts_kor_isnm?:  string
    stck_prpr?:  string
    prdy_vrss_sign?:  string
    prdy_vrss?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    total_askp_rsqn?:  string
    total_bidp_rsqn?:  string
    askp_rsqn1?:  string
    bidp_rsqn1?:  string
    prdy_vol?:  string
    seln_cnqn?:  string
    shnu_cnqn?:  string
    stck_llam?:  string
    stck_mxpr?:  string
    prdy_vrss_vol_rate?:  string
}


export interface FHKST130000C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<FHKST130000C0_RESPONSE_BODY_OUTPUT1>
}


export interface FHPST04320000_RESPONSE_BODY_OUTPUT1 {
    total_seln_qty?:  string
    total_shnu_qty?:  string
}



export interface FHPST04320000_RESPONSE_BODY_OUTPUT2 {
    bsop_hour?:  string
    mbcr_name?:  string
    hts_kor_isnm?:  string
    stck_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    cntg_vol?:  string
    acml_ntby_qty?:  string
    glob_ntby_qty?:  string
    frgn_ntby_qty_icdc?:  string
}


export interface FHPST04320000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  FHPST04320000_RESPONSE_BODY_OUTPUT1
    output2?:  Array<FHPST04320000_RESPONSE_BODY_OUTPUT2>
}


export interface FHPST01130000_RESPONSE_BODY_OUTPUT1 {
    rprs_mrkt_kor_name?:  string
    stck_shrn_iscd?:  string
    hts_kor_isnm?:  string
    stck_prpr?:  string
    prdy_vrss_sign?:  string
    prdy_vrss?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    prdy_vol?:  string
    wghn_avrg_stck_prc?:  string
    lstn_stcn?:  string
}



export interface FHPST01130000_RESPONSE_BODY_OUTPUT2 {
    data_rank?:  string
    stck_prpr?:  string
    cntg_vol?:  string
    acml_vol_rlim?:  string
}


export interface FHPST01130000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  FHPST01130000_RESPONSE_BODY_OUTPUT1
    output2?:  Array<FHPST01130000_RESPONSE_BODY_OUTPUT2>
}


export interface FHPST04540000_RESPONSE_BODY_OUTPUT1 {
    stck_bsop_date?:  string
    total_seln_qty?:  string
    total_shnu_qty?:  string
    ntby_qty?:  string
    stck_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
}


export interface FHPST04540000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<FHPST04540000_RESPONSE_BODY_OUTPUT1>
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


export interface FHPST01700000_RESPONSE_BODY_OUTPUT {
    stck_shrn_iscd?:  string
    data_rank?:  string
    hts_kor_isnm?:  string
    stck_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    stck_hgpr?:  string
    hgpr_hour?:  string
    acml_hgpr_date?:  string
    stck_lwpr?:  string
    lwpr_hour?:  string
    acml_lwpr_date?:  string
    lwpr_vrss_prpr_rate?:  string
    dsgt_date_clpr_vrss_prpr_rate?:  string
    cnnt_ascn_dynu?:  string
    hgpr_vrss_prpr_rate?:  string
    cnnt_down_dynu?:  string
    oprc_vrss_prpr_sign?:  string
    oprc_vrss_prpr?:  string
    oprc_vrss_prpr_rate?:  string
    prd_rsfl?:  string
    prd_rsfl_rate?:  string
}


export interface FHPST01700000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHPST01700000_RESPONSE_BODY_OUTPUT>
}


export interface FHPST01730000_RESPONSE_BODY_OUTPUT {
    data_rank?:  string
    hts_kor_isnm?:  string
    prdy_vrss_sign?:  string
    mksc_shrn_iscd?:  string
    stck_prpr?:  string
    prdy_vrss?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    sale_totl_prfi?:  string
    bsop_prti?:  string
    op_prfi?:  string
    thtr_ntin?:  string
    total_aset?:  string
    total_lblt?:  string
    total_cptl?:  string
    stac_month?:  string
    stac_month_cls_code?:  string
    iqry_csnu?:  string
}


export interface FHPST01730000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHPST01730000_RESPONSE_BODY_OUTPUT>
}


export interface FHPST01740000_RESPONSE_BODY_OUTPUT {
    mksc_shrn_iscd?:  string
    data_rank?:  string
    hts_kor_isnm?:  string
    stck_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    lstn_stcn?:  string
    stck_avls?:  string
    mrkt_whol_avls_rlim?:  string
}


export interface FHPST01740000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHPST01740000_RESPONSE_BODY_OUTPUT>
}


export interface FHPST01750000_RESPONSE_BODY_OUTPUT {
    data_rank?:  string
    hts_kor_isnm?:  string
    mksc_shrn_iscd?:  string
    stck_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    cptl_op_prfi?:  string
    cptl_ntin_rate?:  string
    sale_totl_rate?:  string
    sale_ntin_rate?:  string
    bis?:  string
    lblt_rate?:  string
    bram_depn?:  string
    rsrv_rate?:  string
    grs?:  string
    op_prfi_inrt?:  string
    bsop_prfi_inrt?:  string
    ntin_inrt?:  string
    equt_inrt?:  string
    cptl_tnrt?:  string
    sale_bond_tnrt?:  string
    totl_aset_inrt?:  string
    stac_month?:  string
    stac_month_cls_code?:  string
    iqry_csnu?:  string
}


export interface FHPST01750000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHPST01750000_RESPONSE_BODY_OUTPUT>
}


export interface FHPST01760000_RESPONSE_BODY_OUTPUT {
    stck_shrn_iscd?:  string
    data_rank?:  string
    hts_kor_isnm?:  string
    stck_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    ovtm_total_askp_rsqn?:  string
    ovtm_total_bidp_rsqn?:  string
    mkob_otcp_vol?:  string
    mkfa_otcp_vol?:  string
}


export interface FHPST01760000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHPST01760000_RESPONSE_BODY_OUTPUT>
}


export interface FHPST01770000_RESPONSE_BODY_OUTPUT {
    mksc_shrn_iscd?:  string
    data_rank?:  string
    hts_kor_isnm?:  string
    stck_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    acml_vol?:  string
    prst_iscd?:  string
    prst_kor_isnm?:  string
    prst_prpr?:  string
    prst_prdy_vrss?:  string
    prst_prdy_vrss_sign?:  string
    prst_acml_vol?:  string
    diff_prpr?:  string
    dprt?:  string
    prdy_ctrt?:  string
    prst_prdy_ctrt?:  string
}


export interface FHPST01770000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHPST01770000_RESPONSE_BODY_OUTPUT>
}


export interface FHPST01720000_RESPONSE_BODY_OUTPUT {
    mksc_shrn_iscd?:  string
    data_rank?:  string
    hts_kor_isnm?:  string
    stck_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    total_askp_rsqn?:  string
    total_bidp_rsqn?:  string
    total_ntsl_bidp_rsqn?:  string
    shnu_rsqn_rate?:  string
    seln_rsqn_rate?:  string
}


export interface FHPST01720000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHPST01720000_RESPONSE_BODY_OUTPUT>
}


export interface FHPST01780000_RESPONSE_BODY_OUTPUT {
    mksc_shrn_iscd?:  string
    data_rank?:  string
    hts_kor_isnm?:  string
    stck_prpr?:  string
    prdy_vrss?:  string
    prdy_ctrt?:  string
    prdy_vrss_sign?:  string
    acml_vol?:  string
    d5_dsrt?:  string
    d10_dsrt?:  string
    d20_dsrt?:  string
    d60_dsrt?:  string
    d120_dsrt?:  string
}


export interface FHPST01780000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHPST01780000_RESPONSE_BODY_OUTPUT>
}


export interface FHPST01790000_RESPONSE_BODY_OUTPUT {
    data_rank?:  string
    hts_kor_isnm?:  string
    mksc_shrn_iscd?:  string
    stck_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    per?:  string
    pbr?:  string
    pcr?:  string
    psr?:  string
    eps?:  string
    eva?:  string
    ebitda?:  string
    pv_div_ebitda?:  string
    ebitda_div_fnnc_expn?:  string
    stac_month?:  string
    stac_month_cls_code?:  string
    iqry_csnu?:  string
}


export interface FHPST01790000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHPST01790000_RESPONSE_BODY_OUTPUT>
}


export interface FHPST01680000_RESPONSE_BODY_OUTPUT {
    stck_shrn_iscd?:  string
    data_rank?:  string
    hts_kor_isnm?:  string
    stck_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    tday_rltv?:  string
    seln_cnqn_smtn?:  string
    shnu_cnqn_smtn?:  string
}


export interface FHPST01680000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHPST01680000_RESPONSE_BODY_OUTPUT>
}


export interface FHPST01800000_RESPONSE_BODY_OUTPUT {
    mrkt_div_cls_name?:  string
    mksc_shrn_iscd?:  string
    hts_kor_isnm?:  string
    stck_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    acml_tr_pbmn?:  string
    askp?:  string
    bidp?:  string
    data_rank?:  string
    inter_issu_reg_csnu?:  string
}


export interface FHPST01800000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHPST01800000_RESPONSE_BODY_OUTPUT>
}


export interface FHPST01820000_RESPONSE_BODY_OUTPUT {
    stck_shrn_iscd?:  string
    hts_kor_isnm?:  string
    stck_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    stck_sdpr?:  string
    seln_rsqn?:  string
    askp?:  string
    bidp?:  string
    shnu_rsqn?:  string
    cntg_vol?:  string
    antc_tr_pbmn?:  string
    total_askp_rsqn?:  string
    total_bidp_rsqn?:  string
}


export interface FHPST01820000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHPST01820000_RESPONSE_BODY_OUTPUT>
}


export interface FHPST01860000_RESPONSE_BODY_OUTPUT {
    data_rank?:  string
    mksc_shrn_iscd?:  string
    hts_kor_isnm?:  string
    stck_prpr?:  string
    prdy_vrss_sign?:  string
    prdy_vrss?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    acml_tr_pbmn?:  string
    seln_cnqn_smtn?:  string
    shnu_cnqn_smtn?:  string
    ntby_cnqn?:  string
}


export interface FHPST01860000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHPST01860000_RESPONSE_BODY_OUTPUT>
}


export interface FHPST01870000_RESPONSE_BODY_OUTPUT {
    hts_kor_isnm?:  string
    mksc_shrn_iscd?:  string
    stck_prpr?:  string
    prdy_vrss_sign?:  string
    prdy_vrss?:  string
    prdy_ctrt?:  string
    askp?:  string
    askp_rsqn1?:  string
    bidp?:  string
    bidp_rsqn1?:  string
    acml_vol?:  string
    new_hgpr?:  string
    hprc_near_rate?:  string
    new_lwpr?:  string
    lwpr_near_rate?:  string
    stck_sdpr?:  string
}


export interface FHPST01870000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHPST01870000_RESPONSE_BODY_OUTPUT>
}


export interface FHKST190900C0_RESPONSE_BODY_OUTPUT {
    mksc_shrn_iscd?:  string
    data_rank?:  string
    hts_kor_isnm?:  string
    stck_prpr?:  string
    prdy_vrss_sign?:  string
    prdy_vrss?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    shnu_cntg_csnu?:  string
    seln_cntg_csnu?:  string
    ntby_cnqn?:  string
}


export interface FHKST190900C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHKST190900C0_RESPONSE_BODY_OUTPUT>
}


export interface FHPST04820000_RESPONSE_BODY_OUTPUT {
    mksc_shrn_iscd?:  string
    hts_kor_isnm?:  string
    stck_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    acml_tr_pbmn?:  string
    ssts_cntg_qty?:  string
    ssts_vol_rlim?:  string
    ssts_tr_pbmn?:  string
    ssts_tr_pbmn_rlim?:  string
    stnd_date1?:  string
    stnd_date2?:  string
    avrg_prc?:  string
}


export interface FHPST04820000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHPST04820000_RESPONSE_BODY_OUTPUT>
}


export interface FHKST17010000_RESPONSE_BODY_OUTPUT1 {
    bstp_cls_code?:  string
    hts_kor_isnm?:  string
    stnd_date1?:  string
    stnd_date2?:  string
}



export interface FHKST17010000_RESPONSE_BODY_OUTPUT2 {
    mksc_shrn_iscd?:  string
    hts_kor_isnm?:  string
    stck_prpr?:  string
    prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    whol_loan_rmnd_stcn?:  string
    whol_loan_rmnd_amt?:  string
    whol_loan_rmnd_rate?:  string
    whol_stln_rmnd_stcn?:  string
    whol_stln_rmnd_amt?:  string
    whol_stln_rmnd_rate?:  string
    nday_vrss_loan_rmnd_inrt?:  string
    nday_vrss_stln_rmnd_inrt?:  string
}


export interface FHKST17010000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<FHKST17010000_RESPONSE_BODY_OUTPUT1>
    output2?:  Array<FHKST17010000_RESPONSE_BODY_OUTPUT2>
}


export interface HHKDB13470100_RESPONSE_BODY_OUTPUT1 {
    rank?:  string
    sht_cd?:  string
    isin_name?:  string
    record_date?:  string
    per_sto_divi_amt?:  string
    divi_rate?:  string
    divi_kind?:  string
}


export interface HHKDB13470100_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<HHKDB13470100_RESPONSE_BODY_OUTPUT1>
}


export interface FHPST02340000_RESPONSE_BODY_OUTPUT1 {
    ovtm_untp_uplm_issu_cnt?:  string
    ovtm_untp_ascn_issu_cnt?:  string
    ovtm_untp_stnr_issu_cnt?:  string
    ovtm_untp_lslm_issu_cnt?:  string
    ovtm_untp_down_issu_cnt?:  string
    ovtm_untp_acml_vol?:  string
    ovtm_untp_acml_tr_pbmn?:  string
    ovtm_untp_exch_vol?:  string
    ovtm_untp_exch_tr_pbmn?:  string
    ovtm_untp_kosdaq_vol?:  string
    ovtm_untp_kosdaq_tr_pbmn?:  string
}



export interface FHPST02340000_RESPONSE_BODY_OUTPUT2 {
    mksc_shrn_iscd?:  string
    hts_kor_isnm?:  string
    ovtm_untp_prpr?:  string
    ovtm_untp_prdy_vrss?:  string
    ovtm_untp_prdy_vrss_sign?:  string
    ovtm_untp_prdy_ctrt?:  string
    ovtm_untp_askp1?:  string
    ovtm_untp_seln_rsqn?:  string
    ovtm_untp_bidp1?:  string
    ovtm_untp_shnu_rsqn?:  string
    ovtm_untp_vol?:  string
    ovtm_vrss_acml_vol_rlim?:  string
    stck_prpr?:  string
    acml_vol?:  string
    bidp?:  string
    askp?:  string
}


export interface FHPST02340000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  FHPST02340000_RESPONSE_BODY_OUTPUT1
    output2?:  Array<FHPST02340000_RESPONSE_BODY_OUTPUT2>
}


export interface FHPST02350000_RESPONSE_BODY_OUTPUT1 {
    ovtm_untp_exch_vol?:  string
    ovtm_untp_exch_tr_pbmn?:  string
    ovtm_untp_kosdaq_vol?:  string
    ovtm_untp_kosdaq_tr_pbmn?:  string
}



export interface FHPST02350000_RESPONSE_BODY_OUTPUT2 {
    stck_shrn_iscd?:  string
    hts_kor_isnm?:  string
    ovtm_untp_prpr?:  string
    ovtm_untp_prdy_vrss?:  string
    ovtm_untp_prdy_vrss_sign?:  string
    ovtm_untp_prdy_ctrt?:  string
    ovtm_untp_seln_rsqn?:  string
    ovtm_untp_shnu_rsqn?:  string
    ovtm_untp_vol?:  string
    ovtm_vrss_acml_vol_rlim?:  string
    stck_prpr?:  string
    acml_vol?:  string
    bidp?:  string
    askp?:  string
}


export interface FHPST02350000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  FHPST02350000_RESPONSE_BODY_OUTPUT1
    output2?:  Array<FHPST02350000_RESPONSE_BODY_OUTPUT2>
}

export type HHMCM000100C0_RESPONSE_BODY_OUTPUT1_MRKT_DIV_CLS_CODE = 'J' | 'Q';
export interface HHMCM000100C0_RESPONSE_BODY_OUTPUT1 {
    mrkt_div_cls_code?:  HHMCM000100C0_RESPONSE_BODY_OUTPUT1_MRKT_DIV_CLS_CODE
    mksc_shrn_iscd?:  string
}


export interface HHMCM000100C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  HHMCM000100C0_RESPONSE_BODY_OUTPUT1
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
    output2?:  TTTO5201R_RESPONSE_BODY_OUTPUT2
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
    output2?:  VTTO5201R_RESPONSE_BODY_OUTPUT2
}

export type CTFO6118R_RESPONSE_BODY_OUTPUT1_SHTN_PDNO = '단축상품번호 (예';
export interface CTFO6118R_RESPONSE_BODY_OUTPUT1 {
    cano?:  string
    acnt_prdt_cd?:  string
    pdno?:  string
    prdt_type_cd?:  string
    shtn_pdno?:  CTFO6118R_RESPONSE_BODY_OUTPUT1_SHTN_PDNO
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

export type VTFO6118R_RESPONSE_BODY_OUTPUT1_SHTN_PDNO = '단축상품번호 (예';
export interface VTFO6118R_RESPONSE_BODY_OUTPUT1 {
    cano?:  string
    acnt_prdt_cd?:  string
    pdno?:  string
    prdt_type_cd?:  string
    shtn_pdno?:  VTFO6118R_RESPONSE_BODY_OUTPUT1_SHTN_PDNO
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


export interface JTCE1004R_RESPONSE_BODY_OUTPUT {
    max_ord_psbl_qty?:  string
    lqd_psbl_qty?:  string
    ord_psbl_qty?:  string
}


export interface JTCE1004R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  JTCE1004R_RESPONSE_BODY_OUTPUT
}


export interface CTFO6117R_RESPONSE_BODY_OUTPUT2 {
    nxdy_dnca?:  string
    mmga_cash?:  string
    brkg_mgna_cash?:  string
    opt_buy_chgs?:  string
    opt_lqd_evlu_amt?:  string
    dnca_sbst?:  string
    mmga_tota?:  string
    brkg_mgna_tota?:  string
    opt_sll_chgs?:  string
    fee?:  string
    thdt_dfpa?:  string
    rnwl_dfpa?:  string
    dnca_cash?:  string
}



export interface CTFO6117R_RESPONSE_BODY_OUTPUT1 {
    pdno?:  string
    prdt_name?:  string
    trad_dvsn_name?:  string
    bfdy_cblc_qty?:  string
    new_qty?:  string
    mnpl_rpch_qty?:  string
    cblc_qty?:  string
    cblc_amt?:  string
    trad_pfls_amt?:  string
    evlu_amt?:  string
    evlu_pfls_amt?:  string
}


export interface CTFO6117R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output2?:  CTFO6117R_RESPONSE_BODY_OUTPUT2
    output1?:  Array<CTFO6117R_RESPONSE_BODY_OUTPUT1>
}


export interface CTRP6550R_RESPONSE_BODY_OUTPUT {
    dnca_tota?:  string
    bfdy_chck_amt?:  string
    thdt_chck_amt?:  string
    rlth_uwdl_dpos_amt?:  string
    brkg_mgna_cash?:  string
    wdrw_psbl_tot_amt?:  string
    ord_psbl_cash?:  string
    ord_psbl_tota?:  string
    dnca_sbst?:  string
    scts_sbst_amt?:  string
    frcr_evlu_amt?:  string
    brkg_mgna_sbst?:  string
    sbst_rlse_psbl_amt?:  string
    mtnc_rt?:  string
    add_mgna_tota?:  string
    add_mgna_cash?:  string
    rcva?:  string
    futr_trad_pfls?:  string
    opt_trad_pfls_amt?:  string
    trad_pfls_smtl?:  string
    futr_evlu_pfls_amt?:  string
    opt_evlu_pfls_amt?:  string
    evlu_pfls_smtl?:  string
    excc_dfpa?:  string
    opt_dfpa?:  string
    brkg_fee?:  string
    nxdy_dnca?:  string
    prsm_dpast_amt?:  string
    cash_mntn_amt?:  string
    hack_acdt_acnt_move_amt?:  string
}


export interface CTRP6550R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  CTRP6550R_RESPONSE_BODY_OUTPUT
}


export interface CTFO6159R_RESPONSE_BODY_OUTPUT2 {
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
}



export interface CTFO6159R_RESPONSE_BODY_OUTPUT1 {
    cano?:  string
    acnt_prdt_cd?:  string
    pdno?:  string
    prdt_type_cd?:  string
    shtn_pdno?:  string
    prdt_name?:  string
    sll_buy_dvsn_name?:  string
    cblc_qty1?:  string
    excc_unpr?:  string
    ccld_avg_unpr1?:  string
    idx_clpr?:  string
    pchs_amt?:  string
    evlu_amt?:  string
    evlu_pfls_amt?:  string
    trad_pfls_amt?:  string
    lqd_psbl_qty?:  string
}


export interface CTFO6159R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output2?:  CTFO6159R_RESPONSE_BODY_OUTPUT2
    output1?:  Array<CTFO6159R_RESPONSE_BODY_OUTPUT1>
}


export interface CTFO5139R_RESPONSE_BODY_OUTPUT1 {
    pdno?:  string
    prdt_name?:  string
    odno?:  string
    tr_type_name?:  string
    last_sttldt?:  string
    ccld_idx?:  string
    ccld_qty?:  string
    trad_amt?:  string
    fee?:  string
    ccld_btwn?:  string
}



export interface CTFO5139R_RESPONSE_BODY_OUTPUT2 {
    tot_ccld_qty_smtl?:  string
    tot_ccld_amt_smtl?:  string
    fee_adjt?:  string
    fee_smtl?:  string
}


export interface CTFO5139R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<CTFO5139R_RESPONSE_BODY_OUTPUT1>
    output2?:  CTFO5139R_RESPONSE_BODY_OUTPUT2
}


export interface CTFO6119R_RESPONSE_BODY_OUTPUT1 {
    ord_dt?:  string
    pdno?:  string
    item_name?:  string
    sll_agrm_amt?:  string
    sll_fee?:  string
    buy_agrm_amt?:  string
    buy_fee?:  string
    tot_fee_smtl?:  string
    trad_pfls?:  string
}



export interface CTFO6119R_RESPONSE_BODY_OUTPUT2 {
    futr_agrm?:  string
    futr_agrm_amt?:  string
    futr_agrm_amt_smtl?:  string
    futr_sll_fee_smtl?:  string
    futr_buy_fee_smtl?:  string
    futr_fee_smtl?:  string
    opt_agrm?:  string
    opt_agrm_amt?:  string
    opt_agrm_amt_smtl?:  string
    opt_sll_fee_smtl?:  string
    opt_buy_fee_smtl?:  string
    opt_fee_smtl?:  string
    prdt_futr_agrm?:  string
    prdt_fuop?:  string
    prdt_futr_evlu_amt?:  string
    futr_fee?:  string
    opt_fee?:  string
    fee?:  string
    sll_agrm_amt?:  string
    buy_agrm_amt?:  string
    agrm_amt_smtl?:  string
    sll_fee?:  string
    buy_fee?:  string
    fee_smtl?:  string
    trad_pfls_smtl?:  string
}


export interface CTFO6119R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<CTFO6119R_RESPONSE_BODY_OUTPUT1>
    output2?:  CTFO6119R_RESPONSE_BODY_OUTPUT2
}


export interface JTCE6003R_RESPONSE_BODY_OUTPUT1 {
    cash_amt?:  string
    tot_amt?:  string
}



export interface JTCE6003R_RESPONSE_BODY_OUTPUT2 {
    cash_amt?:  string
    sbst_amt?:  string
    tot_amt?:  string
}



export interface JTCE6003R_RESPONSE_BODY_OUTPUT3 {
    base_dpsa_gdat_grad_cd?:  string
    bfdy_sbst_sll_ccld_amt?:  string
    bfdy_sbst_sll_sbst_amt?:  string
    excc_dfpa?:  string
    fee_amt?:  string
    nxdy_dncl_amt?:  string
    opt_base_dpsa_gdat_grad_cd?:  string
    opt_buy_exus_acnt_yn?:  string
    opt_dfpa?:  string
    prsm_dpast_amt?:  string
    thdt_sbst_sll_ccld_amt?:  string
    thdt_sbst_sll_sbst_amt?:  string
}


export interface JTCE6003R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<JTCE6003R_RESPONSE_BODY_OUTPUT1>
    output2?:  Array<JTCE6003R_RESPONSE_BODY_OUTPUT2>
    output3?:  JTCE6003R_RESPONSE_BODY_OUTPUT3
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
    output1?:  FHMIF10000000_RESPONSE_BODY_OUTPUT1
    output2?:  FHMIF10000000_RESPONSE_BODY_OUTPUT2
    output3?:  FHMIF10000000_RESPONSE_BODY_OUTPUT3
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


export interface FHKIF03020100_RESPONSE_BODY_OUTPUT1 {
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
}



export interface FHKIF03020100_RESPONSE_BODY_OUTPUT2 {
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
    output1?:  FHKIF03020100_RESPONSE_BODY_OUTPUT1
    output2?:  Array<FHKIF03020100_RESPONSE_BODY_OUTPUT2>
}


export interface FHKIF03020200_RESPONSE_BODY_OUTPUT1 {
    futs_prdy_vrss?:  string
    prdy_vrss_sign?:  string
    futs_prdy_ctrt?:  string
    futs_prdy_clpr?:  string
    prdy_nmix?:  string
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
}



export interface FHKIF03020200_RESPONSE_BODY_OUTPUT2 {
    stck_bsop_date?:  string
    stck_cntg_hour?:  string
    futs_prpr?:  string
    futs_oprc?:  string
    futs_hgpr?:  string
    futs_lwpr?:  string
    cntg_vol?:  string
    acml_tr_pbmn?:  string
}


export interface FHKIF03020200_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    Output1?:  Array<FHKIF03020200_RESPONSE_BODY_OUTPUT1>
    Output2?:  FHKIF03020200_RESPONSE_BODY_OUTPUT2
}


export interface FHPIF05110100_RESPONSE_BODY_OUTPUT1 {
    hts_kor_isnm?:  string
    futs_antc_cnpr?:  string
    antc_cntg_vrss_sign?:  string
    futs_antc_cntg_vrss?:  string
    antc_cntg_prdy_ctrt?:  string
    futs_sdpr?:  string
}



export interface FHPIF05110100_RESPONSE_BODY_OUTPUT2 {
    stck_cntg_hour?:  string
    futs_antc_cnpr?:  string
    antc_cntg_vrss_sign?:  string
    futs_antc_cntg_vrss?:  string
    antc_cntg_prdy_ctrt?:  string
}


export interface FHPIF05110100_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  FHPIF05110100_RESPONSE_BODY_OUTPUT1
    output2?:  Array<FHPIF05110100_RESPONSE_BODY_OUTPUT2>
}


export interface FHPIO056104C0_RESPONSE_BODY_OUTPUT1 {
    mtrt_yymm_code?:  string
    mtrt_yymm?:  string
}


export interface FHPIO056104C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<FHPIO056104C0_RESPONSE_BODY_OUTPUT1>
}


export interface FHPIF05030000_RESPONSE_BODY_OUTPUT1 {
    unas_prpr?:  string
    unas_prdy_vrss?:  string
    unas_prdy_vrss_sign?:  string
    unas_prdy_ctrt?:  string
    unas_acml_vol?:  string
    hts_kor_isnm?:  string
    futs_prpr?:  string
    futs_prdy_vrss?:  string
    prdy_vrss_sign?:  string
    futs_prdy_ctrt?:  string
}



export interface FHPIF05030000_RESPONSE_BODY_OUTPUT2 {
    hts_rmnn_dynu?:  string
}


export interface FHPIF05030000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  FHPIF05030000_RESPONSE_BODY_OUTPUT1
    output2?:  Array<FHPIF05030000_RESPONSE_BODY_OUTPUT2>
}


export interface FHPIF05030100_RESPONSE_BODY_OUTPUT1 {
    acpr?:  string
    unch_prpr?:  string
    optn_shrn_iscd?:  string
    optn_prpr?:  string
    optn_prdy_vrss?:  string
    prdy_vrss_sign?:  string
    optn_prdy_ctrt?:  string
    optn_bidp?:  string
    optn_askp?:  string
    tmvl_val?:  string
    nmix_sdpr?:  string
    acml_vol?:  string
    seln_rsqn?:  string
    shnu_rsqn?:  string
    acml_tr_pbmn?:  string
    hts_otst_stpl_qty?:  string
    otst_stpl_qty_icdc?:  string
    delta_val?:  string
    gama?:  string
    vega?:  string
    theta?:  string
    rho?:  string
    hts_ints_vltl?:  string
    invl_val?:  string
    esdg?:  string
    dprt?:  string
    hist_vltl?:  string
    hts_thpr?:  string
    optn_oprc?:  string
    optn_hgpr?:  string
    optn_lwpr?:  string
    optn_mxpr?:  string
    optn_llam?:  string
    atm_cls_name?:  string
    rgbf_vrss_icdc?:  string
    total_askp_rsqn?:  string
    total_bidp_rsqn?:  string
    futs_antc_cnpr?:  string
    futs_antc_cntg_vrss?:  string
    antc_cntg_vrss_sign?:  string
    antc_cntg_prdy_ctrt?:  string
}



export interface FHPIF05030100_RESPONSE_BODY_OUTPUT2 {
    acpr?:  string
    unch_prpr?:  string
    optn_shrn_iscd?:  string
    optn_prpr?:  string
    optn_prdy_vrss?:  string
    prdy_vrss_sign?:  string
    optn_prdy_ctrt?:  string
    optn_bidp?:  string
    optn_askp?:  string
    tmvl_val?:  string
    nmix_sdpr?:  string
    acml_vol?:  string
    seln_rsqn?:  string
    shnu_rsqn?:  string
    acml_tr_pbmn?:  string
    hts_otst_stpl_qty?:  string
    otst_stpl_qty_icdc?:  string
    delta_val?:  string
    gama?:  string
    vega?:  string
    theta?:  string
    rho?:  string
    hts_ints_vltl?:  string
    invl_val?:  string
    esdg?:  string
    dprt?:  string
    hist_vltl?:  string
    hts_thpr?:  string
    optn_oprc?:  string
    optn_hgpr?:  string
    optn_lwpr?:  string
    optn_mxpr?:  string
    optn_llam?:  string
    atm_cls_name?:  string
    rgbf_vrss_icdc?:  string
    total_askp_rsqn?:  string
    total_bidp_rsqn?:  string
    futs_antc_cnpr?:  string
    futs_antc_cntg_vrss?:  string
    antc_cntg_vrss_sign?:  string
    antc_cntg_prdy_ctrt?:  string
}


export interface FHPIF05030100_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<FHPIF05030100_RESPONSE_BODY_OUTPUT1>
    output2?:  Array<FHPIF05030100_RESPONSE_BODY_OUTPUT2>
}


export interface FHPIF05030200_RESPONSE_BODY_OUTPUT1 {
    futs_shrn_iscd?:  string
    hts_kor_isnm?:  string
    futs_prpr?:  string
    futs_prdy_vrss?:  string
    prdy_vrss_sign?:  string
    futs_prdy_ctrt?:  string
    hts_thpr?:  string
    acml_vol?:  string
    futs_askp?:  string
    futs_bidp?:  string
    hts_otst_stpl_qty?:  string
    futs_hgpr?:  string
    futs_lwpr?:  string
    hts_rmnn_dynu?:  string
    total_askp_rsqn?:  string
    total_bidp_rsqn?:  string
    futs_antc_cnpr?:  string
    futs_antc_cntg_vrss?:  string
    antc_cntg_vrss_sign?:  string
    antc_cntg_prdy_ctrt?:  string
}


export interface FHPIF05030200_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<FHPIF05030200_RESPONSE_BODY_OUTPUT1>
}


export interface H0CFASP0_RESPONSE_BODY_FUTS_SHRN_ISCD {
    bsop_hour?:  string
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
    total_askp_csnu?:  string
    total_bidp_csnu?:  string
    total_askp_rsqn?:  string
    total_bidp_rsqn?:  string
    total_askp_rsqn_icdc?:  string
    total_bidp_rsqn_icdc?:  string
}


export interface H0CFASP0_RESPONSE_BODY {
    futs_shrn_iscd?:  H0CFASP0_RESPONSE_BODY_FUTS_SHRN_ISCD
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
    usa_amk_exts_rqst_yn?:  string
}


export interface TTTS3018R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<TTTS3018R_RESPONSE_BODY_OUTPUT>
    ctx_area_fk200?:  string
    ctx_area_nk200?:  string
}

export type TTTS3012R_RESPONSE_BODY_OUTPUT1_TR_CRCY_CD = 'USD' | 'HKD' | 'CNY' | 'JPY' | 'VND';
export type TTTS3012R_RESPONSE_BODY_OUTPUT1_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type TTTS3012R_RESPONSE_BODY_OUTPUT1_LOAN_TYPE_CD = '00' | '01' | '03' | '05' | '06' | '07' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '31' | '41' | '42' | '43' | '44' | '81' | '82' | '91' | '92' | '93' | '94';
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
    output2?:  TTTS3012R_RESPONSE_BODY_OUTPUT2
}

export type VTTS3012R_RESPONSE_BODY_OUTPUT1_TR_CRCY_CD = 'USD' | 'HKD' | 'CNY' | 'JPY' | 'VND';
export type VTTS3012R_RESPONSE_BODY_OUTPUT1_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type VTTS3012R_RESPONSE_BODY_OUTPUT1_LOAN_TYPE_CD = '00' | '01' | '03' | '05' | '06' | '07' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '31' | '41' | '42' | '43' | '44' | '81' | '82' | '91' | '92' | '93' | '94';
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
    output2?:  VTTS3012R_RESPONSE_BODY_OUTPUT2
}

export type TTTS3035R_RESPONSE_BODY_OUTPUT_SLL_BUY_DVSN_CD = '01' | '02';
export type TTTS3035R_RESPONSE_BODY_OUTPUT_RVSE_CNCL_DVSN = '01' | '02';
export type TTTS3035R_RESPONSE_BODY_OUTPUT_OVRS_EXCG_CD = 'NASD' | 'NYSE' | 'AMEX' | 'SEHK' | 'SHAA' | 'SZAA' | 'TKSE' | 'HASE' | 'VNSE';
export type TTTS3035R_RESPONSE_BODY_OUTPUT_LOAN_TYPE_CD = '00' | '01' | '03' | '05' | '06' | '07' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '31' | '41' | '42' | '43' | '44' | '81' | '82' | '91' | '92' | '93' | '94';
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
    loan_type_cd?:  TTTS3035R_RESPONSE_BODY_OUTPUT_LOAN_TYPE_CD
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
export type VTTS3035R_RESPONSE_BODY_OUTPUT_LOAN_TYPE_CD = '00' | '01' | '03' | '05' | '06' | '07' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '31' | '41' | '42' | '43' | '44' | '81' | '82' | '91' | '92' | '93' | '94';
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
    loan_type_cd?:  VTTS3035R_RESPONSE_BODY_OUTPUT_LOAN_TYPE_CD
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
    output2?:  Array<CTRP6504R_RESPONSE_BODY_OUTPUT2>
    output3?:  CTRP6504R_RESPONSE_BODY_OUTPUT3
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
    output2?:  Array<VTRP6504R_RESPONSE_BODY_OUTPUT2>
    output3?:  VTRP6504R_RESPONSE_BODY_OUTPUT3
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


export interface TTTS3014R_RESPONSE_BODY_OUTPUT {
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


export interface TTTS3014R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    ctx_area_fk200?:  string
    ctx_area_nk200?:  string
    output?:  TTTS3014R_RESPONSE_BODY_OUTPUT
}

export type TTTS3007R_RESPONSE_BODY_OUTPUT_MAX_ORD_PSBL_QTY = '예';
export type TTTS3007R_RESPONSE_BODY_OUTPUT_OVRS_MAX_ORD_PSBL_QTY = '예';
export interface TTTS3007R_RESPONSE_BODY_OUTPUT {
    tr_crcy_cd?:  string
    ord_psbl_frcr_amt?:  string
    sll_ruse_psbl_amt?:  string
    ovrs_ord_psbl_amt?:  string
    max_ord_psbl_qty?:  TTTS3007R_RESPONSE_BODY_OUTPUT_MAX_ORD_PSBL_QTY
    echm_af_ord_psbl_amt?:  string
    echm_af_ord_psbl_qty?:  string
    ord_psbl_qty?:  string
    exrt?:  string
    frcr_ord_psbl_amt1?:  string
    ovrs_max_ord_psbl_qty?:  TTTS3007R_RESPONSE_BODY_OUTPUT_OVRS_MAX_ORD_PSBL_QTY
}


export interface TTTS3007R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  TTTS3007R_RESPONSE_BODY_OUTPUT
}

export type VTTS3007R_RESPONSE_BODY_OUTPUT_MAX_ORD_PSBL_QTY = '예';
export type VTTS3007R_RESPONSE_BODY_OUTPUT_OVRS_MAX_ORD_PSBL_QTY = '예';
export interface VTTS3007R_RESPONSE_BODY_OUTPUT {
    tr_crcy_cd?:  string
    ord_psbl_frcr_amt?:  string
    sll_ruse_psbl_amt?:  string
    ovrs_ord_psbl_amt?:  string
    max_ord_psbl_qty?:  VTTS3007R_RESPONSE_BODY_OUTPUT_MAX_ORD_PSBL_QTY
    echm_af_ord_psbl_amt?:  string
    echm_af_ord_psbl_qty?:  string
    ord_psbl_qty?:  string
    exrt?:  string
    frcr_ord_psbl_amt1?:  string
    ovrs_max_ord_psbl_qty?:  VTTS3007R_RESPONSE_BODY_OUTPUT_OVRS_MAX_ORD_PSBL_QTY
}


export interface VTTS3007R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  VTTS3007R_RESPONSE_BODY_OUTPUT
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


export interface TTTC2101R_RESPONSE_BODY_OUTPUT {
    natn_name?:  string
    crcy_cd?:  string
    frcr_dncl_amt1?:  string
    ustl_buy_amt?:  string
    ustl_sll_amt?:  string
    frcr_rcvb_amt?:  string
    frcr_mgn_amt?:  string
    frcr_gnrl_ord_psbl_amt?:  string
    frcr_ord_psbl_amt1?:  string
    itgr_ord_psbl_amt?:  string
    bass_exrt?:  string
}


export interface TTTC2101R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<TTTC2101R_RESPONSE_BODY_OUTPUT>
}


export interface CTOS4001R_RESPONSE_BODY_OUTPUT1 {
    trad_dt?:  string
    sttl_dt?:  string
    sll_buy_dvsn_cd?:  string
    sll_buy_dvsn_name?:  string
    pdno?:  string
    ovrs_item_name?:  string
    ccld_qty?:  string
    amt_unit_ccld_qty?:  string
    ft_ccld_unpr2?:  string
    ovrs_stck_ccld_unpr?:  string
    tr_frcr_amt2?:  string
    tr_amt?:  string
    frcr_excc_amt_1?:  string
    wcrc_excc_amt?:  string
    dmst_frcr_fee1?:  string
    frcr_fee1?:  string
    dmst_wcrc_fee?:  string
    ovrs_wcrc_fee?:  string
    crcy_cd?:  string
    std_pdno?:  string
    erlm_exrt?:  string
    loan_dvsn_cd?:  string
    loan_dvsn_name?:  string
}



export interface CTOS4001R_RESPONSE_BODY_OUTPUT2 {
    frcr_buy_amt_smtl?:  string
    frcr_sll_amt_smtl?:  string
    dmst_fee_smtl?:  string
    ovrs_fee_smtl?:  string
}


export interface CTOS4001R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    ctx_area_fk100?:  string
    ctx_area_nk100?:  string
    output1?:  Array<CTOS4001R_RESPONSE_BODY_OUTPUT1>
    output2?:  CTOS4001R_RESPONSE_BODY_OUTPUT2
}


export interface CTRP6010R_RESPONSE_BODY_OUTPUT1 {
    pdno?:  string
    prdt_name?:  string
    cblc_qty13?:  string
    ord_psbl_qty1?:  string
    avg_unpr3?:  string
    ovrs_now_pric1?:  string
    frcr_pchs_amt?:  string
    frcr_evlu_amt2?:  string
    evlu_pfls_amt2?:  string
    bass_exrt?:  string
    oprt_dtl_dtime?:  string
    buy_crcy_cd?:  string
    thdt_sll_ccld_qty1?:  string
    thdt_buy_ccld_qty1?:  string
    evlu_pfls_rt1?:  string
    tr_mket_name?:  string
    natn_kor_name?:  string
    std_pdno?:  string
    mgge_qty?:  string
    loan_rmnd?:  string
    prdt_type_cd?:  string
    ovrs_excg_cd?:  string
    scts_dvsn_name?:  string
    ldng_cblc_qty?:  string
}



export interface CTRP6010R_RESPONSE_BODY_OUTPUT2 {
    crcy_cd?:  string
    crcy_cd_name?:  string
    frcr_dncl_amt_2?:  string
    frst_bltn_exrt?:  string
    frcr_evlu_amt2?:  string
}



export interface CTRP6010R_RESPONSE_BODY_OUTPUT3 {
    pchs_amt_smtl_amt?:  string
    tot_evlu_pfls_amt?:  string
    evlu_erng_rt1?:  string
    tot_dncl_amt?:  string
    wcrc_evlu_amt_smtl?:  string
    tot_asst_amt2?:  string
    frcr_cblc_wcrc_evlu_amt_smtl?:  string
    tot_loan_amt?:  string
    tot_ldng_evlu_amt?:  string
}


export interface CTRP6010R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<CTRP6010R_RESPONSE_BODY_OUTPUT1>
    output2?:  Array<CTRP6010R_RESPONSE_BODY_OUTPUT2>
    output3?:  CTRP6010R_RESPONSE_BODY_OUTPUT3
}

export type HHDFS00000300_RESPONSE_BODY_OUTPUT_RSYM = '예) DNASAAPL' | 'NYS' | 'NAS' | 'AMS' | 'TSE' | 'HKS' | 'SHS' | 'SZS' | 'HSX' | 'HNX';
export type HHDFS00000300_RESPONSE_BODY_OUTPUT_SIGN = '1' | '2' | '3' | '4' | '5';
export interface HHDFS00000300_RESPONSE_BODY_OUTPUT {
    rsym?:  HHDFS00000300_RESPONSE_BODY_OUTPUT_RSYM
    zdiv?:  string
    base?:  string
    pvol?:  string
    last?:  string
    sign?:  HHDFS00000300_RESPONSE_BODY_OUTPUT_SIGN
    diff?:  string
    rate?:  string
    tvol?:  string
    tamt?:  string
    ordy?:  string
}


export interface HHDFS00000300_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  HHDFS00000300_RESPONSE_BODY_OUTPUT
}

export type HHDFS76240000_RESPONSE_BODY_OUTPUT1_RSYM = '예) DNASAAPL' | 'NYS' | 'NAS' | 'AMS' | 'TSE' | 'HKS' | 'SHS' | 'SZS' | 'HSX' | 'HNX';
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
    output1?:  HHDFS76240000_RESPONSE_BODY_OUTPUT1
    output2?:  Array<HHDFS76240000_RESPONSE_BODY_OUTPUT2>
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


export type HHDFS76410000_RESPONSE_BODY_OUTPUT1_RSYM = '예) DNASAAPL' | 'NYS' | 'NAS' | 'AMS' | 'TSE' | 'HKS' | 'SHS' | 'SZS' | 'HSX' | 'HNX';
export type HHDFS76410000_RESPONSE_BODY_OUTPUT1_SHAR = '발행주식수(단위';
export type HHDFS76410000_RESPONSE_BODY_OUTPUT1_VALX = '시가총액(단위';
export type HHDFS76410000_RESPONSE_BODY_OUTPUT1_TVOL = '거래량(단위';
export type HHDFS76410000_RESPONSE_BODY_OUTPUT1_AVOL = '거래대금(단위';
export type HHDFS76410000_RESPONSE_BODY_OUTPUT1_E_ORDYN = '가능';
export interface HHDFS76410000_RESPONSE_BODY_OUTPUT1 {
    rsym?:  HHDFS76410000_RESPONSE_BODY_OUTPUT1_RSYM
    excd?:  string
    name?:  string
    symb?:  string
    last?:  string
    shar?:  HHDFS76410000_RESPONSE_BODY_OUTPUT1_SHAR
    valx?:  HHDFS76410000_RESPONSE_BODY_OUTPUT1_VALX
    plow?:  string
    phigh?:  string
    popen?:  string
    tvol?:  HHDFS76410000_RESPONSE_BODY_OUTPUT1_TVOL
    rate?:  string
    diff?:  string
    sign?:  string
    avol?:  HHDFS76410000_RESPONSE_BODY_OUTPUT1_AVOL
    eps?:  string
    per?:  string
    rank?:  string
    ename?:  string
    e_ordyn?:  HHDFS76410000_RESPONSE_BODY_OUTPUT1_E_ORDYN
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


export interface HHDFS76200200_RESPONSE_BODY_OUTPUT {
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
    output?:  HHDFS76200200_RESPONSE_BODY_OUTPUT
}


export interface HHDFS76950200_RESPONSE_BODY_OUTPUT1 {
    rsym?:  string
    zdiv?:  string
    stim?:  string
    etim?:  string
    sktm?:  string
    ektm?:  string
    next?:  string
    more?:  string
    nrec?:  string
}



export interface HHDFS76950200_RESPONSE_BODY_OUTPUT2 {
    tymd?:  string
    xymd?:  string
    xhms?:  string
    kymd?:  string
    khms?:  string
    open?:  string
    high?:  string
    low?:  string
    last?:  string
    evol?:  string
    eamt?:  string
}


export interface HHDFS76950200_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    Output1?:  Array<HHDFS76950200_RESPONSE_BODY_OUTPUT1>
    Output2?:  HHDFS76950200_RESPONSE_BODY_OUTPUT2
}


export interface FHKST03030200_RESPONSE_BODY_OUTPUT1 {
    ovrs_nmix_prdy_vrss?:  string
    prdy_vrss_sign?:  string
    hts_kor_isnm?:  string
    prdy_ctrt?:  string
    ovrs_nmix_prdy_clpr?:  string
    acml_vol?:  string
    ovrs_nmix_prpr?:  string
    stck_shrn_iscd?:  string
    ovrs_prod_oprc?:  string
    ovrs_prod_hgpr?:  string
    ovrs_prod_lwpr?:  string
}



export interface FHKST03030200_RESPONSE_BODY_OUTPUT2 {
    stck_bsop_date?:  string
    stck_cntg_hour?:  string
    optn_prpr?:  string
    optn_oprc?:  string
    optn_hgpr?:  string
    optn_lwpr?:  string
    cntg_vol?:  string
}


export interface FHKST03030200_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  FHKST03030200_RESPONSE_BODY_OUTPUT1
    output2?:  Array<FHKST03030200_RESPONSE_BODY_OUTPUT2>
}


export interface CTPF1702R_RESPONSE_BODY_OUTPUT1 {
    std_pdno?:  string
    prdt_eng_name?:  string
    natn_cd?:  string
    natn_name?:  string
    tr_mket_cd?:  string
    tr_mket_name?:  string
    ovrs_excg_cd?:  string
    ovrs_excg_name?:  string
    tr_crcy_cd?:  string
    ovrs_papr?:  string
    crcy_name?:  string
    ovrs_stck_dvsn_cd?:  string
    prdt_clsf_cd?:  string
    prdt_clsf_name?:  string
    sll_unit_qty?:  string
    buy_unit_qty?:  string
    tr_unit_amt?:  string
    lstg_stck_num?:  string
    lstg_dt?:  string
    ovrs_stck_tr_stop_dvsn_cd?:  string
    lstg_abol_item_yn?:  string
    ovrs_stck_prdt_grp_no?:  string
    lstg_yn?:  string
    tax_levy_yn?:  string
    ovrs_stck_erlm_rosn_cd?:  string
    ovrs_stck_hist_rght_dvsn_cd?:  string
    chng_bf_pdno?:  string
    prdt_type_cd_2?:  string
    ovrs_item_name?:  string
    sedol_no?:  string
    blbg_tckr_text?:  string
    ovrs_stck_etf_risk_drtp_cd?:  string
    etp_chas_erng_rt_dbnb?:  string
    istt_usge_isin_cd?:  string
    mint_svc_yn?:  string
    mint_svc_yn_chng_dt?:  string
    prdt_name?:  string
    lei_cd?:  string
    ovrs_stck_stop_rson_cd?:  string
    lstg_abol_dt?:  string
    mini_stk_tr_stat_dvsn_cd?:  string
    mint_frst_svc_erlm_dt?:  string
    mint_dcpt_trad_psbl_yn?:  string
    mint_fnum_trad_psbl_yn?:  string
    mint_cblc_cvsn_ipsb_yn?:  string
    ptp_item_yn?:  string
    ptp_item_trfx_exmt_yn?:  string
    ptp_item_trfx_exmt_strt_dt?:  string
    ptp_item_trfx_exmt_end_dt?:  string
    dtm_tr_psbl_yn?:  string
    sdrf_stop_ecls_yn?:  string
    sdrf_stop_ecls_erlm_dt?:  string
}


export interface CTPF1702R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  CTPF1702R_RESPONSE_BODY_OUTPUT1
}


export interface HHDFS76200300_RESPONSE_BODY_OUTPUT1 {
    rsym?:  string
    zdiv?:  string
    nrec?:  string
}



export interface HHDFS76200300_RESPONSE_BODY_OUTPUT2 {
    khms?:  string
    evol?:  string
    vpow?:  string
    last?:  string
    tvol?:  string
    sign?:  string
    mtyp?:  string
    diff?:  string
    pbid?:  string
    rate?:  string
    pask?:  string
}


export interface HHDFS76200300_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  HHDFS76200300_RESPONSE_BODY_OUTPUT1
    output2?:  Array<HHDFS76200300_RESPONSE_BODY_OUTPUT2>
}


export interface HHDFS76370000_RESPONSE_BODY_OUTPUT1 {
    zdiv?:  string
    stat?:  string
    crec?:  string
    trec?:  string
    nrec?:  string
}



export interface HHDFS76370000_RESPONSE_BODY_OUTPUT2 {
    rsym?:  string
    excd?:  string
    symb?:  string
    name?:  string
    last?:  string
    sign?:  string
    diff?:  string
    rate?:  string
    tvol?:  string
    vask?:  string
    pask?:  string
    pbid?:  string
    vbid?:  string
    seqn?:  string
    ename?:  string
    e_ordyn?:  string
}


export interface HHDFS76370000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  HHDFS76370000_RESPONSE_BODY_OUTPUT1
    output2?:  Array<HHDFS76370000_RESPONSE_BODY_OUTPUT2>
}


export interface HHDFS76370100_RESPONSE_BODY_OUTPUT1 {
    nrec?:  string
}



export interface HHDFS76370100_RESPONSE_BODY_OUTPUT2 {
    icod?:  string
    name?:  string
}


export interface HHDFS76370100_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  HHDFS76370100_RESPONSE_BODY_OUTPUT1
    output2?:  Array<HHDFS76370100_RESPONSE_BODY_OUTPUT2>
}


export interface HHDFS76200100_RESPONSE_BODY_OUTPUT1 {
    rsym?:  string
    zdiv?:  string
    curr?:  string
    base?:  string
    open?:  string
    high?:  string
    low?:  string
    last?:  string
    dymd?:  string
    dhms?:  string
    bvol?:  string
    avol?:  string
    bdvl?:  string
    advl?:  string
    code?:  string
    ropen?:  string
    rhigh?:  string
    rlow?:  string
    rclose?:  string
}



export interface HHDFS76200100_RESPONSE_BODY_OUTPUT2 {
    pbid1?:  string
    pask1?:  string
    vbid1?:  string
    vask1?:  string
    dbid1?:  string
    dask1?:  string
    pbid2?:  string
    pask2?:  string
    vbid2?:  string
    vask2?:  string
    dbid2?:  string
    dask2?:  string
    pbid3?:  string
    pask3?:  string
    vbid3?:  string
    vask3?:  string
    dbid3?:  string
    dask3?:  string
    pbid4?:  string
    pask4?:  string
    vbid4?:  string
    vask4?:  string
    dbid4?:  string
    dask4?:  string
    pbid5?:  string
    pask5?:  string
    vbid5?:  string
    vask5?:  string
    dbid5?:  string
    dask5?:  string
    pbid6?:  string
    pask6?:  string
    vbid6?:  string
    vask6?:  string
    dbid6?:  string
    dask6?:  string
    pbid7?:  string
    pask7?:  string
    vbid7?:  string
    vask7?:  string
    dbid7?:  string
    dask7?:  string
    pbid8?:  string
    pask8?:  string
    vbid8?:  string
    vask8?:  string
    dbid8?:  string
    dask8?:  string
    pbid9?:  string
    pask9?:  string
    vbid9?:  string
    vask9?:  string
    dbid9?:  string
    dask9?:  string
    pbid10?:  string
    pask10?:  string
    vbid10?:  string
    vask10?:  string
    dbid10?:  string
    dask10?:  string
}



export interface HHDFS76200100_RESPONSE_BODY_OUTPUT3 {
    vstm?:  string
    vetm?:  string
    csbp?:  string
    cshi?:  string
    cslo?:  string
    iep?:  string
    iev?:  string
}


export interface HHDFS76200100_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  HHDFS76200100_RESPONSE_BODY_OUTPUT1
    output2?:  HHDFS76200100_RESPONSE_BODY_OUTPUT2
    output3?:  Array<HHDFS76200100_RESPONSE_BODY_OUTPUT3>
}


export interface HHDFS76260000_RESPONSE_BODY_OUTPUT1 {
    zdiv?:  string
    stat?:  string
    nrec?:  string
}



export interface HHDFS76260000_RESPONSE_BODY_OUTPUT2 {
    rsym?:  string
    excd?:  string
    symb?:  string
    knam?:  string
    last?:  string
    sign?:  string
    diff?:  string
    rate?:  string
    tvol?:  string
    pask?:  string
    pbid?:  string
    n_base?:  string
    n_diff?:  string
    n_rate?:  string
    enam?:  string
    e_ordyn?:  string
}


export interface HHDFS76260000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  HHDFS76260000_RESPONSE_BODY_OUTPUT1
    output2?:  Array<HHDFS76260000_RESPONSE_BODY_OUTPUT2>
}


export interface HHDFS76270000_RESPONSE_BODY_OUTPUT1 {
    zdiv?:  string
    stat?:  string
    nrec?:  string
}



export interface HHDFS76270000_RESPONSE_BODY_OUTPUT2 {
    rsym?:  string
    excd?:  string
    symb?:  string
    knam?:  string
    last?:  string
    sign?:  string
    diff?:  string
    rate?:  string
    tvol?:  string
    pask?:  string
    pbid?:  string
    n_tvol?:  string
    n_diff?:  string
    n_rate?:  string
    enam?:  string
    e_ordyn?:  string
}


export interface HHDFS76270000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  HHDFS76270000_RESPONSE_BODY_OUTPUT1
    output2?:  Array<HHDFS76270000_RESPONSE_BODY_OUTPUT2>
}


export interface HHDFS76280000_RESPONSE_BODY_OUTPUT1 {
    zdiv?:  string
    stat?:  string
    nrec?:  string
}



export interface HHDFS76280000_RESPONSE_BODY_OUTPUT2 {
    rsym?:  string
    excd?:  string
    symb?:  string
    knam?:  string
    last?:  string
    sign?:  string
    diff?:  string
    rate?:  string
    tvol?:  string
    pask?:  string
    pbid?:  string
    tpow?:  string
    powx?:  string
    enam?:  string
    e_ordyn?:  string
}


export interface HHDFS76280000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  HHDFS76280000_RESPONSE_BODY_OUTPUT1
    output2?:  Array<HHDFS76280000_RESPONSE_BODY_OUTPUT2>
}


export interface HHDFS76290000_RESPONSE_BODY_OUTPUT1 {
    zdiv?:  string
    stat?:  string
    crec?:  string
    trec?:  string
    nrec?:  string
}



export interface HHDFS76290000_RESPONSE_BODY_OUTPUT2 {
    rsym?:  string
    excd?:  string
    symb?:  string
    name?:  string
    last?:  string
    sign?:  string
    diff?:  string
    rate?:  string
    tvol?:  string
    pask?:  string
    pbid?:  string
    n_base?:  string
    n_diff?:  string
    n_rate?:  string
    rank?:  string
    ename?:  string
    e_ordyn?:  string
}


export interface HHDFS76290000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  HHDFS76290000_RESPONSE_BODY_OUTPUT1
    output2?:  Array<HHDFS76290000_RESPONSE_BODY_OUTPUT2>
}


export interface HHDFS76300000_RESPONSE_BODY_OUTPUT1 {
    zdiv?:  string
    stat?:  string
    nrec?:  string
}



export interface HHDFS76300000_RESPONSE_BODY_OUTPUT2 {
    rsym?:  string
    excd?:  string
    symb?:  string
    name?:  string
    last?:  string
    sign?:  string
    diff?:  string
    rate?:  string
    tvol?:  string
    pask?:  string
    pbid?:  string
    n_base?:  string
    n_diff?:  string
    n_rate?:  string
    ename?:  string
    e_ordyn?:  string
}


export interface HHDFS76300000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  HHDFS76300000_RESPONSE_BODY_OUTPUT1
    output2?:  Array<HHDFS76300000_RESPONSE_BODY_OUTPUT2>
}


export interface HHDFS76310010_RESPONSE_BODY_OUTPUT1 {
    zdiv?:  string
    stat?:  string
    crec?:  string
    trec?:  string
    nrec?:  string
}



export interface HHDFS76310010_RESPONSE_BODY_OUTPUT2 {
    rsym?:  string
    excd?:  string
    symb?:  string
    name?:  string
    last?:  string
    sign?:  string
    diff?:  string
    rate?:  string
    tvol?:  string
    pask?:  string
    pbid?:  string
    tamt?:  string
    a_tvol?:  string
    rank?:  string
    ename?:  string
    e_ordyn?:  string
}


export interface HHDFS76310010_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  HHDFS76310010_RESPONSE_BODY_OUTPUT1
    output2?:  Array<HHDFS76310010_RESPONSE_BODY_OUTPUT2>
}


export interface HHDFS76320010_RESPONSE_BODY_OUTPUT1 {
    zdiv?:  string
    stat?:  string
    crec?:  string
    trec?:  string
    nrec?:  string
}



export interface HHDFS76320010_RESPONSE_BODY_OUTPUT2 {
    rsym?:  string
    excd?:  string
    symb?:  string
    name?:  string
    last?:  string
    sign?:  string
    diff?:  string
    rate?:  string
    tvol?:  string
    pask?:  string
    pbid?:  string
    tamt?:  string
    a_tamt?:  string
    rank?:  string
    ename?:  string
    e_ordyn?:  string
}


export interface HHDFS76320010_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  HHDFS76320010_RESPONSE_BODY_OUTPUT1
    output2?:  Array<HHDFS76320010_RESPONSE_BODY_OUTPUT2>
}


export interface HHDFS76330000_RESPONSE_BODY_OUTPUT1 {
    zdiv?:  string
    stat?:  string
    crec?:  string
    trec?:  string
    nrec?:  string
}



export interface HHDFS76330000_RESPONSE_BODY_OUTPUT2 {
    rsym?:  string
    excd?:  string
    symb?:  string
    name?:  string
    last?:  string
    sign?:  string
    diff?:  string
    rate?:  string
    tvol?:  string
    pask?:  string
    pbid?:  string
    n_tvol?:  string
    n_rate?:  string
    rank?:  string
    ename?:  string
    e_ordyn?:  string
}


export interface HHDFS76330000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  HHDFS76330000_RESPONSE_BODY_OUTPUT1
    output2?:  Array<HHDFS76330000_RESPONSE_BODY_OUTPUT2>
}


export interface HHDFS76340000_RESPONSE_BODY_OUTPUT1 {
    zdiv?:  string
    stat?:  string
    crec?:  string
    trec?:  string
    nrec?:  string
}



export interface HHDFS76340000_RESPONSE_BODY_OUTPUT2 {
    rsym?:  string
    excd?:  string
    symb?:  string
    name?:  string
    last?:  string
    sign?:  string
    diff?:  string
    rate?:  string
    tvol?:  string
    pask?:  string
    pbid?:  string
    n_tvol?:  string
    shar?:  string
    tover?:  string
    rank?:  string
    ename?:  string
    e_ordyn?:  string
}


export interface HHDFS76340000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  HHDFS76340000_RESPONSE_BODY_OUTPUT1
    output2?:  Array<HHDFS76340000_RESPONSE_BODY_OUTPUT2>
}


export interface HHDFS76350100_RESPONSE_BODY_OUTPUT1 {
    zdiv?:  string
    stat?:  string
    crec?:  string
    trec?:  string
    nrec?:  string
}



export interface HHDFS76350100_RESPONSE_BODY_OUTPUT2 {
    rsym?:  string
    excd?:  string
    symb?:  string
    name?:  string
    last?:  string
    sign?:  string
    diff?:  string
    rate?:  string
    tvol?:  string
    shar?:  string
    tomv?:  string
    grav?:  string
    rank?:  string
    ename?:  string
    e_ordyn?:  string
}


export interface HHDFS76350100_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  HHDFS76350100_RESPONSE_BODY_OUTPUT1
    output2?:  Array<HHDFS76350100_RESPONSE_BODY_OUTPUT2>
}


export interface CTRGT011R_RESPONSE_BODY_OUTPUT {
    bass_dt?:  string
    rght_type_cd?:  string
    pdno?:  string
    prdt_name?:  string
    prdt_type_cd?:  string
    std_pdno?:  string
    acpl_bass_dt?:  string
    sbsc_strt_dt?:  string
    sbsc_end_dt?:  string
    cash_alct_rt?:  string
    stck_alct_rt?:  string
    crcy_cd?:  string
    crcy_cd2?:  string
    crcy_cd3?:  string
    crcy_cd4?:  string
    alct_frcr_unpr?:  string
    stkp_dvdn_frcr_amt2?:  string
    stkp_dvdn_frcr_amt3?:  string
    stkp_dvdn_frcr_amt4?:  string
    dfnt_yn?:  string
}


export interface CTRGT011R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<CTRGT011R_RESPONSE_BODY_OUTPUT>
}


export interface HHPSTH60100C1_RESPONSE_BODY_OUTBLOCK1 {
    info_gb?:  string
    news_key?:  string
    data_dt?:  string
    data_tm?:  string
    class_cd?:  string
    class_name?:  string
    source?:  string
    nation_cd?:  string
    exchange_cd?:  string
    symb?:  string
    symb_name?:  string
    title?:  string
}


export interface HHPSTH60100C1_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    outblock1?:  Array<HHPSTH60100C1_RESPONSE_BODY_OUTBLOCK1>
}


export interface HHDFS78330900_RESPONSE_BODY_OUTPUT1 {
    anno_dt?:  string
    ca_title?:  string
    div_lock_dt?:  string
    pay_dt?:  string
    record_dt?:  string
    validity_dt?:  string
    local_end_dt?:  string
    lock_dt?:  string
    delist_dt?:  string
    redempt_dt?:  string
    early_redempt_dt?:  string
    effective_dt?:  string
}


export interface HHDFS78330900_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<HHDFS78330900_RESPONSE_BODY_OUTPUT1>
}


export interface CTLN4050R_RESPONSE_BODY_OUTPUT1 {
    pdno?:  string
    ovrs_item_name?:  string
    loan_rt?:  string
    mgge_mntn_rt?:  string
    mgge_ensu_rt?:  string
    loan_exec_psbl_yn?:  string
    stff_name?:  string
    erlm_dt?:  string
    tr_mket_name?:  string
    crcy_cd?:  string
    natn_kor_name?:  string
    ovrs_excg_cd?:  string
}



export interface CTLN4050R_RESPONSE_BODY_OUTPUT2 {
    loan_psbl_item_num?:  string
}


export interface CTLN4050R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  CTLN4050R_RESPONSE_BODY_OUTPUT1
    output2?:  Array<CTLN4050R_RESPONSE_BODY_OUTPUT2>
}


export interface FHKST01011801_RESPONSE_BODY_OUTPUT {
    cntt_usiq_srno?:  string
    news_ofer_entp_code?:  string
    data_dt?:  string
    data_tm?:  string
    hts_pbnt_titl_cntt?:  string
    news_lrdv_code?:  string
    dorg?:  string
    iscd1?:  string
    iscd2?:  string
    iscd3?:  string
    iscd4?:  string
    iscd5?:  string
    iscd6?:  string
    iscd7?:  string
    iscd8?:  string
    iscd9?:  string
    iscd10?:  string
    kor_isnm1?:  string
    kor_isnm2?:  string
    kor_isnm3?:  string
    kor_isnm4?:  string
    kor_isnm5?:  string
    kor_isnm6?:  string
    kor_isnm7?:  string
    kor_isnm8?:  string
    kor_isnm9?:  string
    kor_isnm10?:  string
}


export interface FHKST01011801_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHKST01011801_RESPONSE_BODY_OUTPUT>
}

export type OTFM3001U_RESPONSE_BODY_OUTPUT_ODNO = '(ex. ORGN_ODNO';
export interface OTFM3001U_RESPONSE_BODY_OUTPUT {
    ORD_DT?:  string
    ODNO?:  OTFM3001U_RESPONSE_BODY_OUTPUT_ODNO
}


export interface OTFM3001U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  OTFM3001U_RESPONSE_BODY_OUTPUT
}

export type OTFM3002U_RESPONSE_BODY_OUTPUT_ODNO = '(ex. ORGN_ODNO';
export interface OTFM3002U_RESPONSE_BODY_OUTPUT {
    ORD_DT?:  string
    ODNO?:  OTFM3002U_RESPONSE_BODY_OUTPUT_ODNO
}


export interface OTFM3002U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  OTFM3002U_RESPONSE_BODY_OUTPUT
}

export type OTFM3003U_RESPONSE_BODY_OUTPUT_ODNO = '(ex. ORGN_ODNO';
export interface OTFM3003U_RESPONSE_BODY_OUTPUT {
    ORD_DT?:  string
    ODNO?:  OTFM3003U_RESPONSE_BODY_OUTPUT_ODNO
}


export interface OTFM3003U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  OTFM3003U_RESPONSE_BODY_OUTPUT
}

export type OTFM3116R_RESPONSE_BODY_OUTPUT_ODNO = '(ex. ORGN_ODNO';
export type OTFM3116R_RESPONSE_BODY_OUTPUT_SLL_BUY_DVSN_CD = '01' | '02';
export type OTFM3116R_RESPONSE_BODY_OUTPUT_FUOP_DVSN = '01' | '02';
export interface OTFM3116R_RESPONSE_BODY_OUTPUT {
    cano?:  string
    acnt_prdt_cd?:  string
    ord_dt?:  string
    odno?:  OTFM3116R_RESPONSE_BODY_OUTPUT_ODNO
    orgn_ord_dt?:  string
    orgn_odno?:  string
    ovrs_futr_fx_pdno?:  string
    rcit_dvsn_cd?:  string
    sll_buy_dvsn_cd?:  OTFM3116R_RESPONSE_BODY_OUTPUT_SLL_BUY_DVSN_CD
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
    fuop_dvsn?:  OTFM3116R_RESPONSE_BODY_OUTPUT_FUOP_DVSN
}


export interface OTFM3116R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<OTFM3116R_RESPONSE_BODY_OUTPUT>
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
    output?:  Array<OTFM1412R_RESPONSE_BODY_OUTPUT>
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


export interface OTFM3118R_RESPONSE_BODY_OUTPUT1 {
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



export interface OTFM3118R_RESPONSE_BODY_OUTPUT2 {
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
    output1?:  Array<OTFM3118R_RESPONSE_BODY_OUTPUT1>
    output2?:  Array<OTFM3118R_RESPONSE_BODY_OUTPUT2>
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

export type OTFM3120R_RESPONSE_BODY_OUTPUT_ODNO = '(ex. ORGN_ODNO' | '(ex. ORGN_ODNO';
export interface OTFM3120R_RESPONSE_BODY_OUTPUT {
    cano?:  string
    acnt_prdt_cd?:  string
    dt?:  string
    ord_dt?:  string
    odno?:  OTFM3120R_RESPONSE_BODY_OUTPUT_ODNO
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


export interface OTFM3115R_RESPONSE_BODY_OUTPUT1 {
    cano?:  string
    acnt_prdt_cd?:  string
    crcy_cd?:  string
    resp_dt?:  string
    acnt_net_risk_mgna_aply_yn?:  string
    fm_ord_psbl_amt?:  string
    fm_add_mgn_amt?:  string
    fm_brkg_mgn_amt?:  string
    fm_excc_brkg_mgn_amt?:  string
    fm_ustl_mgn_amt?:  string
    fm_mntn_mgn_amt?:  string
    fm_ord_mgn_amt?:  string
    fm_futr_ord_mgn_amt?:  string
    fm_opt_buy_ord_amt?:  string
    fm_opt_sll_ord_mgn_amt?:  string
    fm_opt_buy_ord_mgn_amt?:  string
    fm_ecis_rsvn_mgn_amt?:  string
    fm_span_brkg_mgn_amt?:  string
    fm_span_pric_altr_mgn_amt?:  string
    fm_span_term_sprd_mgn_amt?:  string
    fm_span_buy_opt_min_mgn_amt?:  string
    fm_span_opt_min_mgn_amt?:  string
    fm_span_tot_risk_mgn_amt?:  string
    fm_span_mntn_mgn_amt?:  string
    fm_span_mntn_pric_altr_mgn_amt?:  string
    fm_span_mntn_term_sprd_mgn_amt?:  string
    fm_span_mntn_opt_pric_mgn_amt?:  string
    fm_span_mntn_opt_min_mgn_amt?:  string
    fm_span_mntn_tot_risk_mgn_amt?:  string
    fm_eurx_brkg_mgn_amt?:  string
    fm_eurx_pric_altr_mgn_amt?:  string
    fm_eurx_term_sprd_mgn_amt?:  string
    fm_eurx_opt_pric_mgn_amt?:  string
    fm_eurx_buy_opt_min_mgn_amt?:  string
    fm_eurx_tot_risk_mgn_amt?:  string
    fm_eurx_mntn_mgn_amt?:  string
    fm_eurx_mntn_pric_altr_mgn_amt?:  string
    fm_eurx_mntn_term_sprd_mgn_amt?:  string
    fm_eurx_mntn_opt_pric_mgn_amt?:  string
    fm_eurx_mntn_tot_risk_mgn_amt?:  string
    fm_gnrl_brkg_mgn_amt?:  string
    fm_futr_ustl_mgn_amt?:  string
    fm_sll_opt_ustl_mgn_amt?:  string
    fm_buy_opt_ustl_mgn_amt?:  string
    fm_sprd_ustl_mgn_amt?:  string
    fm_avg_dsct_mgn_amt?:  string
    fm_gnrl_mntn_mgn_amt?:  string
    fm_futr_mntn_mgn_amt?:  string
    fm_opt_mntn_mgn_amt?:  string
}


export interface OTFM3115R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  OTFM3115R_RESPONSE_BODY_OUTPUT1
}


export interface HHDFC55010100_RESPONSE_BODY_OUTPUT1 {
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
    output1?:  HHDFC55010100_RESPONSE_BODY_OUTPUT1
}


export interface HHDFC55010000_RESPONSE_BODY_OUTPUT1 {
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
    sttl_price?:  string
}


export interface HHDFC55010000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  HHDFC55010000_RESPONSE_BODY_OUTPUT1
}


export interface HHDFC55020400_RESPONSE_BODY_OUTPUT2 {
    ret_cnt?:  string
    last_n_cnt?:  string
    index_key?:  string
}



export interface HHDFC55020400_RESPONSE_BODY_OUTPUT1 {
    data_date?:  string
    data_time?:  string
    open_price?:  string
    high_price?:  string
    low_price?:  string
    last_price?:  string
    last_qntt?:  string
    vol?:  string
    prev_diff_flag?:  string
    prev_diff_price?:  string
    prev_diff_rate?:  string
}


export interface HHDFC55020400_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output2?:  HHDFC55020400_RESPONSE_BODY_OUTPUT2
    output1?:  Array<HHDFC55020400_RESPONSE_BODY_OUTPUT1>
}


export interface HHDFC55020000_RESPONSE_BODY_OUTPUT1 {
    ret_cnt?:  string
    last_n_cnt?:  string
    index_key?:  string
}



export interface HHDFC55020000_RESPONSE_BODY_OUTPUT2 {
    data_date?:  string
    data_time?:  string
    open_price?:  string
    high_price?:  string
    low_price?:  string
    last_price?:  string
    last_qntt?:  string
    vol?:  string
    prev_diff_flag?:  string
    prev_diff_price?:  string
    prev_diff_rate?:  string
}


export interface HHDFC55020000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  HHDFC55020000_RESPONSE_BODY_OUTPUT1
    output2?:  Array<HHDFC55020000_RESPONSE_BODY_OUTPUT2>
}


export interface HHDFC55020100_RESPONSE_BODY_OUTPUT1 {
    tret_cnt?:  string
    last_n_cnt?:  string
    index_key?:  string
}



export interface HHDFC55020100_RESPONSE_BODY_OUTPUT2 {
    data_date?:  string
    data_time?:  string
    open_price?:  string
    high_price?:  string
    low_price?:  string
    last_price?:  string
    last_qntt?:  string
    vol?:  string
    prev_diff_flag?:  string
    prev_diff_price?:  string
    prev_diff_rate?:  string
}


export interface HHDFC55020100_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  HHDFC55020100_RESPONSE_BODY_OUTPUT1
    output2?:  Array<HHDFC55020100_RESPONSE_BODY_OUTPUT2>
}


export interface HHDFC55020200_RESPONSE_BODY_OUTPUT1 {
    tret_cnt?:  string
    last_n_cnt?:  string
    index_key?:  string
}



export interface HHDFC55020200_RESPONSE_BODY_OUTPUT2 {
    data_date?:  string
    data_time?:  string
    open_price?:  string
    high_price?:  string
    low_price?:  string
    last_price?:  string
    last_qntt?:  string
    vol?:  string
    prev_diff_flag?:  string
    prev_diff_price?:  string
    prev_diff_rate?:  string
}


export interface HHDFC55020200_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  HHDFC55020200_RESPONSE_BODY_OUTPUT1
    output2?:  Array<HHDFC55020200_RESPONSE_BODY_OUTPUT2>
}


export interface HHDFC55020300_RESPONSE_BODY_OUTPUT1 {
    tret_cnt?:  string
    last_n_cnt?:  string
    index_key?:  string
}



export interface HHDFC55020300_RESPONSE_BODY_OUTPUT2 {
    data_date?:  string
    data_time?:  string
    open_price?:  string
    high_price?:  string
    low_price?:  string
    last_price?:  string
    last_qntt?:  string
    vol?:  string
    prev_diff_flag?:  string
    prev_diff_price?:  string
    prev_diff_rate?:  string
}


export interface HHDFC55020300_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  HHDFC55020300_RESPONSE_BODY_OUTPUT1
    output2?:  Array<HHDFC55020300_RESPONSE_BODY_OUTPUT2>
}


export interface HHDFC86000000_RESPONSE_BODY_OUTPUT1 {
    open_price?:  string
    high_price?:  string
    lowp_rice?:  string
    last_price?:  string
    prev_price?:  string
    vol?:  string
    prev_diff_price?:  string
    prev_diff_rate?:  string
    quot_date?:  string
    quot_time?:  string
}



export interface HHDFC86000000_RESPONSE_BODY_OUTPUT2 {
    bid_qntt?:  string
    bid_num?:  string
    bid_price?:  string
    ask_qntt?:  string
    ask_num?:  string
    ask_price?:  string
}


export interface HHDFC86000000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  HHDFC86000000_RESPONSE_BODY_OUTPUT1
    output2?:  Array<HHDFC86000000_RESPONSE_BODY_OUTPUT2>
}


export interface HHDFC55200000_RESPONSE_BODY_OUTPUT1 {
    exch_cd?:  string
    clas_cd?:  string
    crc_cd?:  string
    sttl_price?:  string
    sttl_date?:  string
    trst_mgn?:  string
    disp_digit?:  string
    tick_sz?:  string
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
    sub_exch_nm?:  string
}


export interface HHDFC55200000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<HHDFC55200000_RESPONSE_BODY_OUTPUT1>
}


export interface OTFM2229R_RESPONSE_BODY_OUTPUT1 {
    fm_pdgr_cd?:  string
    fm_pdgr_name?:  string
    fm_excg_cd?:  string
    fm_excg_name?:  string
    fuop_dvsn_name?:  string
    fm_clas_cd?:  string
    fm_clas_name?:  string
    am_mkmn_strt_tmd?:  string
    am_mkmn_end_tmd?:  string
    pm_mkmn_strt_tmd?:  string
    pm_mkmn_end_tmd?:  string
    mkmn_nxdy_strt_tmd?:  string
    mkmn_nxdy_end_tmd?:  string
    base_mket_strt_tmd?:  string
    base_mket_end_tmd?:  string
}


export interface OTFM2229R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<OTFM2229R_RESPONSE_BODY_OUTPUT1>
}


export interface HHDDB95030000_RESPONSE_BODY_OUTPUT1 {
    row_cnt?:  string
}



export interface HHDDB95030000_RESPONSE_BODY_OUTPUT2 {
    prod_iscd?:  string
    cftc_iscd?:  string
    bsop_date?:  string
    bidp_spec?:  string
    askp_spec?:  string
    spread_spec?:  string
    bidp_hedge?:  string
    askp_hedge?:  string
    hts_otst_smtn?:  string
    bidp_missing?:  string
    askp_missing?:  string
    bidp_spec_cust?:  string
    askp_spec_cust?:  string
    spread_spec_cust?:  string
    bidp_hedge_cust?:  string
    askp_hedge_cust?:  string
    cust_smtn?:  string
}


export interface HHDDB95030000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  HHDDB95030000_RESPONSE_BODY_OUTPUT1
    output2?:  Array<HHDDB95030000_RESPONSE_BODY_OUTPUT2>
}


export interface HHDFO86000000_RESPONSE_BODY_OUTPUT1 {
    open_price?:  string
    high_price?:  string
    lowp_rice?:  string
    last_price?:  string
    sttl_price?:  string
    vol?:  string
    prev_diff_price?:  string
    prev_diff_rate?:  string
    quot_date?:  string
    quot_time?:  string
}



export interface HHDFO86000000_RESPONSE_BODY_OUTPUT2 {
    bid_qntt?:  string
    bid_num?:  string
    bid_price?:  string
    ask_qntt?:  string
    ask_num?:  string
    ask_price?:  string
}


export interface HHDFO86000000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  HHDFO86000000_RESPONSE_BODY_OUTPUT1
    output2?:  Array<HHDFO86000000_RESPONSE_BODY_OUTPUT2>
}


export interface HHDFO55010100_RESPONSE_BODY_OUTPUT1 {
    exch_cd?:  string
    clas_cd?:  string
    crc_cd?:  string
    sttl_price?:  string
    sttl_date?:  string
    trst_mgn?:  string
    disp_digit?:  string
    tick_sz?:  string
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
}


export interface HHDFO55010100_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  HHDFO55010100_RESPONSE_BODY_OUTPUT1
}


export interface HHDFO55010000_RESPONSE_BODY_OUTPUT1 {
    proc_date?:  string
    proc_time?:  string
    open_price?:  string
    high_price?:  string
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
    trst_mgn?:  string
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
    sttl_price?:  string
}


export interface HHDFO55010000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  HHDFO55010000_RESPONSE_BODY_OUTPUT1
}


export interface HHDFO55020000_RESPONSE_BODY_OUTPUT1 {
    ret_cnt?:  string
    last_n_cnt?:  string
    index_key?:  string
}



export interface HHDFO55020000_RESPONSE_BODY_OUTPUT2 {
    data_date?:  string
    data_time?:  string
    open_price?:  string
    high_price?:  string
    low_price?:  string
    last_price?:  string
    last_qntt?:  string
    vol?:  string
    prev_diff_flag?:  string
    prev_diff_price?:  string
    prev_diff_rate?:  string
}


export interface HHDFO55020000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  HHDFO55020000_RESPONSE_BODY_OUTPUT1
    output2?:  Array<HHDFO55020000_RESPONSE_BODY_OUTPUT2>
}


export interface HHDFO55020100_RESPONSE_BODY_OUTPUT1 {
    ret_cnt?:  string
    last_n_cnt?:  string
    index_key?:  string
}



export interface HHDFO55020100_RESPONSE_BODY_OUTPUT2 {
    data_date?:  string
    data_time?:  string
    open_price?:  string
    high_price?:  string
    low_price?:  string
    last_price?:  string
    last_qntt?:  string
    vol?:  string
    prev_diff_flag?:  string
    prev_diff_price?:  string
    prev_diff_rate?:  string
}


export interface HHDFO55020100_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  HHDFO55020100_RESPONSE_BODY_OUTPUT1
    output2?:  Array<HHDFO55020100_RESPONSE_BODY_OUTPUT2>
}


export interface HHDFO55020200_RESPONSE_BODY_OUTPUT1 {
    ret_cnt?:  string
    last_n_cnt?:  string
    index_key?:  string
}



export interface HHDFO55020200_RESPONSE_BODY_OUTPUT2 {
    data_date?:  string
    data_time?:  string
    open_price?:  string
    high_price?:  string
    low_price?:  string
    last_price?:  string
    last_qntt?:  string
    vol?:  string
    prev_diff_flag?:  string
    prev_diff_price?:  string
    prev_diff_rate?:  string
}


export interface HHDFO55020200_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  HHDFO55020200_RESPONSE_BODY_OUTPUT1
    output2?:  Array<HHDFO55020200_RESPONSE_BODY_OUTPUT2>
}


export interface HHDFO55020300_RESPONSE_BODY_OUTPUT1 {
    ret_cnt?:  string
    last_n_cnt?:  string
    index_key?:  string
}



export interface HHDFO55020300_RESPONSE_BODY_OUTPUT2 {
    data_date?:  string
    data_time?:  string
    open_price?:  string
    high_price?:  string
    low_price?:  string
    last_price?:  string
    last_qntt?:  string
    vol?:  string
    prev_diff_flag?:  string
    prev_diff_price?:  string
    prev_diff_rate?:  string
}


export interface HHDFO55020300_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  HHDFO55020300_RESPONSE_BODY_OUTPUT1
    output2?:  Array<HHDFO55020300_RESPONSE_BODY_OUTPUT2>
}


export interface HHDFO55020400_RESPONSE_BODY_OUTPUT2 {
    ret_cnt?:  string
    last_n_cnt?:  string
    index_key?:  string
}



export interface HHDFO55020400_RESPONSE_BODY_OUTPUT1 {
    data_date?:  string
    data_time?:  string
    open_price?:  string
    high_price?:  string
    low_price?:  string
    last_price?:  string
    last_qntt?:  string
    vol?:  string
    prev_diff_flag?:  string
    prev_diff_price?:  string
    prev_diff_rate?:  string
}


export interface HHDFO55020400_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output2?:  HHDFO55020400_RESPONSE_BODY_OUTPUT2
    output1?:  Array<HHDFO55020400_RESPONSE_BODY_OUTPUT1>
}


export interface HHDFO55200000_RESPONSE_BODY_OUTPUT2 {
    exch_cd?:  string
    clas_cd?:  string
    crc_cd?:  string
    sttl_price?:  string
    sttl_date?:  string
    trst_mgn?:  string
    disp_digit?:  string
    tick_sz?:  string
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
}


export interface HHDFO55200000_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output2?:  Array<HHDFO55200000_RESPONSE_BODY_OUTPUT2>
}


export interface TTTC0958U_RESPONSE_BODY_OUTPUT {
    krx_fwdg_ord_orgno?:  string
    odno?:  string
    ord_tmd?:  string
}


export interface TTTC0958U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  TTTC0958U_RESPONSE_BODY_OUTPUT
}


export interface TTTC0952U_RESPONSE_BODY_OUTPUT {
    krx_fwdg_ord_orgno?:  string
    odno?:  string
    ord_tmd?:  string
}


export interface TTTC0952U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  TTTC0952U_RESPONSE_BODY_OUTPUT
}


export interface TTTC0953U_RESPONSE_BODY_OUTPUT {
    krx_fwdg_ord_orgno?:  string
    odno?:  string
    ord_tmd?:  string
}


export interface TTTC0953U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  TTTC0953U_RESPONSE_BODY_OUTPUT
}


export interface CTSC8035R_RESPONSE_BODY_OUTPUT {
    odno?:  string
    pdno?:  string
    rvse_cncl_dvsn_name?:  string
    ord_qty?:  string
    bond_ord_unpr?:  string
    ord_tmd?:  string
    tot_ccld_qty?:  string
    tot_ccld_amt?:  string
    ord_psbl_qty?:  string
    orgn_odno?:  string
    sll_buy_dvsn_cd?:  string
    ord_dvsn_cd?:  string
    mgco_aptm_odno?:  string
    samt_mket_ptci_yn?:  string
    prdt_abrv_name?:  string
}


export interface CTSC8035R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<CTSC8035R_RESPONSE_BODY_OUTPUT>
}


export interface CTSC8013R_RESPONSE_BODY_OUTPUT1 {
    tot_ord_qty?:  string
    tot_ccld_qty_smtl?:  string
    tot_bond_ccld_avg_unpr?:  string
    tot_ccld_amt_smtl?:  string
}



export interface CTSC8013R_RESPONSE_BODY_OUTPUT2 {
    ord_dt?:  string
    odno?:  string
    orgn_odno?:  string
    ord_dvsn_name?:  string
    sll_buy_dvsn_cd_name?:  string
    shtn_pdno?:  string
    prdt_abrv_name?:  string
    ord_qty?:  string
    bond_ord_unpr?:  string
    ord_tmd?:  string
    tot_ccld_qty?:  string
    bond_avg_unpr?:  string
    tot_ccld_amt?:  string
    loan_dt?:  string
    buy_dt?:  string
    samt_mket_ptci_yn_name?:  string
    sprx_psbl_yn_ifom?:  string
    ord_mdia_dvsn_name?:  string
    sll_buy_dvsn_cd?:  string
    nccs_qty?:  string
    ord_gno_brno?:  string
}


export interface CTSC8013R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<CTSC8013R_RESPONSE_BODY_OUTPUT1>
    output2?:  CTSC8013R_RESPONSE_BODY_OUTPUT2
}


export interface CTSC8407R_RESPONSE_BODY_OUTPUT {
    pdno?:  string
    prdt_name?:  string
    buy_dt?:  string
    buy_sqno?:  string
    cblc_qty?:  string
    agrx_qty?:  string
    sprx_qty?:  string
    exdt?:  string
    buy_erng_rt?:  string
    buy_unpr?:  string
    buy_amt?:  string
    ord_psbl_qty?:  string
}


export interface CTSC8407R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<CTSC8407R_RESPONSE_BODY_OUTPUT>
}


export interface TTTC8910R_RESPONSE_BODY_OUTPUT1 {
    ord_psbl_cash?:  string
    ord_psbl_sbst?:  string
    ruse_psbl_amt?:  string
    bond_ord_unpr2?:  string
    buy_psbl_amt?:  string
    buy_psbl_qty?:  string
    cma_evlu_amt?:  string
}


export interface TTTC8910R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<TTTC8910R_RESPONSE_BODY_OUTPUT1>
}


export interface CTPF1101R_RESPONSE_BODY_OUTPUT {
    pdno?:  string
    prdt_type_cd?:  string
    prdt_name?:  string
    prdt_eng_name?:  string
    ivst_heed_prdt_yn?:  string
    exts_yn?:  string
    bond_clsf_cd?:  string
    bond_clsf_kor_name?:  string
    papr?:  string
    int_mned_dvsn_cd?:  string
    rvnu_shap_cd?:  string
    issu_amt?:  string
    lstg_rmnd?:  string
    int_dfrm_mcnt?:  string
    bond_int_dfrm_mthd_cd?:  string
    splt_rdpt_rcnt?:  string
    prca_dfmt_term_mcnt?:  string
    int_anap_dvsn_cd?:  string
    bond_rght_dvsn_cd?:  string
    prdt_pclc_text?:  string
    prdt_abrv_name?:  string
    prdt_eng_abrv_name?:  string
    sprx_psbl_yn?:  string
    pbff_pplc_ofrg_mthd_cd?:  string
    cmco_cd?:  string
    issu_istt_cd?:  string
    issu_istt_name?:  string
    pnia_dfrm_agcy_istt_cd?:  string
    dsct_ec_rt?:  string
    srfc_inrt?:  string
    expd_rdpt_rt?:  string
    expd_asrc_erng_rt?:  string
    bond_grte_istt_name?:  string
    int_dfrm_day_type_cd?:  string
    ksd_int_calc_unit_cd?:  string
    int_wunt_uder_prcs_dvsn_cd?:  string
    rvnu_dt?:  string
    issu_dt?:  string
    lstg_dt?:  string
    expd_dt?:  string
    rdpt_dt?:  string
    sbst_pric?:  string
    rgbf_int_dfrm_dt?:  string
    nxtm_int_dfrm_dt?:  string
    frst_int_dfrm_dt?:  string
    ecis_pric?:  string
    rght_stck_std_pdno?:  string
    ecis_opng_dt?:  string
    ecis_end_dt?:  string
    bond_rvnu_mthd_cd?:  string
    oprt_stfno?:  string
    oprt_stff_name?:  string
    rgbf_int_dfrm_wday?:  string
    nxtm_int_dfrm_wday?:  string
    kis_crdt_grad_text?:  string
    kbp_crdt_grad_text?:  string
    nice_crdt_grad_text?:  string
    fnp_crdt_grad_text?:  string
    dpsi_psbl_yn?:  string
    pnia_int_calc_unpr?:  string
    prcm_idx_bond_yn?:  string
    expd_exts_srdp_rcnt?:  string
    expd_exts_srdp_rt?:  string
    loan_psbl_yn?:  string
    grte_dvsn_cd?:  string
    fnrr_rank_dvsn_cd?:  string
    krx_lstg_abol_dvsn_cd?:  string
    asst_rqdi_dvsn_cd?:  string
    opcb_dvsn_cd?:  string
    crfd_item_yn?:  string
    crfd_item_rstc_cclc_dt?:  string
    bond_nmpr_unit_pric?:  string
    ivst_heed_bond_dvsn_name?:  string
    add_erng_rt?:  string
    add_erng_rt_aply_dt?:  string
    bond_tr_stop_dvsn_cd?:  string
    ivst_heed_bond_dvsn_cd?:  string
    pclr_cndt_text?:  string
    hbbd_yn?:  string
    cdtl_cptl_scty_type_cd?:  string
    elec_scty_yn?:  string
    sq1_clop_ecis_opng_dt?:  string
    frst_erlm_stfno?:  string
    frst_erlm_dt?:  string
    frst_erlm_tmd?:  string
}


export interface CTPF1101R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  CTPF1101R_RESPONSE_BODY_OUTPUT
}


export interface CTPF1114R_RESPONSE_BODY_OUTPUT {
    pdno?:  string
    prdt_type_cd?:  string
    ksd_bond_item_name?:  string
    ksd_bond_item_eng_name?:  string
    ksd_bond_lstg_type_cd?:  string
    ksd_ofrg_dvsn_cd?:  string
    ksd_bond_int_dfrm_dvsn_cd?:  string
    issu_dt?:  string
    rdpt_dt?:  string
    rvnu_dt?:  string
    iso_crcy_cd?:  string
    mdwy_rdpt_dt?:  string
    ksd_rcvg_bond_dsct_rt?:  string
    ksd_rcvg_bond_srfc_inrt?:  string
    bond_expd_rdpt_rt?:  string
    ksd_prca_rdpt_mthd_cd?:  string
    int_caltm_mcnt?:  string
    ksd_int_calc_unit_cd?:  string
    uval_cut_dvsn_cd?:  string
    uval_cut_dcpt_dgit?:  string
    ksd_dydv_caltm_aply_dvsn_cd?:  string
    dydv_calc_dcnt?:  string
    bond_expd_asrc_erng_rt?:  string
    padf_plac_hdof_name?:  string
    lstg_dt?:  string
    lstg_abol_dt?:  string
    ksd_bond_issu_mthd_cd?:  string
    laps_indf_yn?:  string
    ksd_lhdy_pnia_dfrm_mthd_cd?:  string
    frst_int_dfrm_dt?:  string
    ksd_prcm_lnkg_gvbd_yn?:  string
    dpsi_end_dt?:  string
    dpsi_strt_dt?:  string
    dpsi_psbl_yn?:  string
    atyp_rdpt_bond_erlm_yn?:  string
    dshn_occr_yn?:  string
    expd_exts_yn?:  string
    pclr_ptcr_text?:  string
    dpsi_psbl_excp_stat_cd?:  string
    expd_exts_srdp_rcnt?:  string
    expd_exts_srdp_rt?:  string
    expd_rdpt_rt?:  string
    expd_asrc_erng_rt?:  string
    bond_int_dfrm_mthd_cd?:  string
    int_dfrm_day_type_cd?:  string
    prca_dfmt_term_mcnt?:  string
    splt_rdpt_rcnt?:  string
    rgbf_int_dfrm_dt?:  string
    nxtm_int_dfrm_dt?:  string
    sprx_psbl_yn?:  string
    ictx_rt_dvsn_cd?:  string
    bond_clsf_cd?:  string
    bond_clsf_kor_name?:  string
    int_mned_dvsn_cd?:  string
    pnia_int_calc_unpr?:  string
    frn_intr?:  string
    aply_day_prcm_idx_lnkg_cefc?:  string
    ksd_expd_dydv_calc_bass_cd?:  string
    expd_dydv_calc_dcnt?:  string
    ksd_cbbw_dvsn_cd?:  string
    crfd_item_yn?:  string
    pnia_bank_ofdy_dfrm_mthd_cd?:  string
    qib_yn?:  string
    qib_cclc_dt?:  string
    csbd_yn?:  string
    csbd_cclc_dt?:  string
    ksd_opcb_yn?:  string
    ksd_sodn_yn?:  string
    ksd_rqdi_scty_yn?:  string
    elec_scty_yn?:  string
    rght_ecis_mbdy_dvsn_cd?:  string
    int_rkng_mthd_dvsn_cd?:  string
    ofrg_dvsn_cd?:  string
    ksd_tot_issu_amt?:  string
    next_indf_chk_ecls_yn?:  string
    ksd_bond_intr_dvsn_cd?:  string
    ksd_inrt_aply_dvsn_cd?:  string
    krx_issu_istt_cd?:  string
    ksd_indf_frqc_uder_calc_cd?:  string
    ksd_indf_frqc_uder_calc_dcnt?:  string
}


export interface CTPF1114R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  CTPF1114R_RESPONSE_BODY_OUTPUT
}


export interface FHKBJ773401C0_RESPONSE_BODY_OUTPUT {
    aspr_acpt_hour?:  string
    bond_askp1?:  string
    bond_askp2?:  string
    bond_askp3?:  string
    bond_askp4?:  string
    bond_askp5?:  string
    bond_bidp1?:  string
    bond_bidp2?:  string
    bond_bidp3?:  string
    bond_bidp4?:  string
    bond_bidp5?:  string
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
    total_askp_rsqn?:  string
    total_bidp_rsqn?:  string
    ntby_aspr_rsqn?:  string
    seln_ernn_rate1?:  string
    seln_ernn_rate2?:  string
    seln_ernn_rate3?:  string
    seln_ernn_rate4?:  string
    seln_ernn_rate5?:  string
    shnu_ernn_rate1?:  string
    shnu_ernn_rate2?:  string
    shnu_ernn_rate3?:  string
    shnu_ernn_rate4?:  string
    shnu_ernn_rate5?:  string
}


export interface FHKBJ773401C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  FHKBJ773401C0_RESPONSE_BODY_OUTPUT
}


export interface CTPF2005R_RESPONSE_BODY_OUTPUT1 {
    evlu_dt?:  string
    pdno?:  string
    prdt_type_cd?:  string
    prdt_name?:  string
    kis_unpr?:  string
    kbp_unpr?:  string
    nice_evlu_unpr?:  string
    fnp_unpr?:  string
    avg_evlu_unpr?:  string
    kis_crdt_grad_text?:  string
    kbp_crdt_grad_text?:  string
    nice_crdt_grad_text?:  string
    fnp_crdt_grad_text?:  string
    chng_yn?:  string
    kis_erng_rt?:  string
    kbp_erng_rt?:  string
    nice_evlu_erng_rt?:  string
    fnp_erng_rt?:  string
    avg_evlu_erng_rt?:  string
    kis_rf_unpr?:  string
    kbp_rf_unpr?:  string
    nice_evlu_rf_unpr?:  string
    avg_evlu_rf_unpr?:  string
}



export interface CTPF2005R_RESPONSE_BODY_OUTPUT2 {
    evlu_dt?:  string
    pdno?:  string
    prdt_type_cd?:  string
    prdt_name?:  string
    kis_evlu_amt?:  string
    kbp_evlu_amt?:  string
    nice_evlu_amt?:  string
    fnp_evlu_amt?:  string
    avg_evlu_amt?:  string
    chng_yn?:  string
}



export interface CTPF2005R_RESPONSE_BODY_OUTPUT3 {
    evlu_dt?:  string
    pdno?:  string
    prdt_type_cd?:  string
    prdt_name?:  string
    kis_crcy_cd?:  string
    kis_evlu_unit_pric?:  string
    kis_evlu_pric?:  string
    kbp_crcy_cd?:  string
    kbp_evlu_unit_pric?:  string
    kbp_evlu_pric?:  string
    nice_crcy_cd?:  string
    nice_evlu_unit_pric?:  string
    nice_evlu_pric?:  string
    avg_evlu_unit_pric?:  string
    avg_evlu_pric?:  string
    chng_yn?:  string
}


export interface CTPF2005R_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  Array<CTPF2005R_RESPONSE_BODY_OUTPUT1>
    output2?:  Array<CTPF2005R_RESPONSE_BODY_OUTPUT2>
    output3?:  Array<CTPF2005R_RESPONSE_BODY_OUTPUT3>
}


export interface FHKBJ773701C0_RESPONSE_BODY_OUTPUT {
    stck_bsop_date?:  string
    bond_oprc?:  string
    bond_hgpr?:  string
    bond_lwpr?:  string
    bond_prpr?:  string
    acml_vol?:  string
}


export interface FHKBJ773701C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  Array<FHKBJ773701C0_RESPONSE_BODY_OUTPUT>
}


export interface FHKBJ773400C0_RESPONSE_BODY_OUTPUT {
    stnd_iscd?:  string
    hts_kor_isnm?:  string
    bond_prpr?:  string
    prdy_vrss_sign?:  string
    bond_prdy_vrss?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    bond_prdy_clpr?:  string
    bond_oprc?:  string
    bond_hgpr?:  string
    bond_lwpr?:  string
    ernn_rate?:  string
    oprc_ert?:  string
    hgpr_ert?:  string
    lwpr_ert?:  string
    bond_mxpr?:  string
    bond_llam?:  string
}


export interface FHKBJ773400C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  FHKBJ773400C0_RESPONSE_BODY_OUTPUT
}


export interface FHKBJ773403C0_RESPONSE_BODY_OUTPUT1 {
    stck_cntg_hour?:  string
    bond_prpr?:  string
    bond_prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    cntg_vol?:  string
    acml_vol?:  string
}


export interface FHKBJ773403C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  FHKBJ773403C0_RESPONSE_BODY_OUTPUT1
}


export interface FHKBJ773404C0_RESPONSE_BODY_OUTPUT1 {
    stck_bsop_date?:  string
    bond_prpr?:  string
    bond_prdy_vrss?:  string
    prdy_vrss_sign?:  string
    prdy_ctrt?:  string
    acml_vol?:  string
    bond_oprc?:  string
    bond_hgpr?:  string
    bond_lwpr?:  string
}


export interface FHKBJ773404C0_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output1?:  FHKBJ773404C0_RESPONSE_BODY_OUTPUT1
}


