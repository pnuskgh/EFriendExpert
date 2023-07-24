/**
 * 한국투자증권 EFriendExpert API용 type
 *     자동 생성되는 소스이니 수정하지 마세요.
 * 
 * @file packages/EFriendExpert/efriends/efriend_api.type.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
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
}


export interface REVOKEP_REQUEST_HEADER {
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

export type TTTS3014R_REQUEST_HEADER_TR_ID = 'TTTT3039R' | 'TTTS3014R';
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


export interface VTTT3017U_REQUEST_BODY {
    CANO?:  string
    ACNT_PRDT_CD?:  string
    RSYN_ORD_RCTT_DT?:  string
    OVRS_RSVN_ODNO?:  string
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
                    
export interface VTTC0803U_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTC0803U_RESPONSE_HEADER,
    body?: VTTC0803U_RESPONSE_BODY
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
                    
export interface VTTC8434R_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTC8434R_RESPONSE_HEADER,
    body?: VTTC8434R_RESPONSE_BODY
}
                    
export interface VTTC8908R_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTC8908R_RESPONSE_HEADER,
    body?: VTTC8908R_RESPONSE_BODY
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
                    
export interface VTTO5201R_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTO5201R_RESPONSE_HEADER,
    body?: VTTO5201R_RESPONSE_BODY
}
                    
export interface VTFO6118R_RESPONSE {
    code: number | string,
    message: string,
    header?: VTFO6118R_RESPONSE_HEADER,
    body?: VTFO6118R_RESPONSE_BODY
}
                    
export interface VTTO5105R_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTO5105R_RESPONSE_HEADER,
    body?: VTTO5105R_RESPONSE_BODY
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
                    
export interface VTTT3017U_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTT3017U_RESPONSE_HEADER,
    body?: VTTT3017U_RESPONSE_BODY
}
                    
export interface VTTS3018R_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTS3018R_RESPONSE_HEADER,
    body?: VTTS3018R_RESPONSE_BODY
}
                    
export interface VTTS3012R_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTS3012R_RESPONSE_HEADER,
    body?: VTTS3012R_RESPONSE_BODY
}
                    
export interface VTTS3035R_RESPONSE {
    code: number | string,
    message: string,
    header?: VTTS3035R_RESPONSE_HEADER,
    body?: VTTS3035R_RESPONSE_BODY
}
                    
export interface VTRP6504R_RESPONSE {
    code: number | string,
    message: string,
    header?: VTRP6504R_RESPONSE_HEADER,
    body?: VTRP6504R_RESPONSE_BODY
}
                    
export interface TTTS3014R_RESPONSE {
    code: number | string,
    message: string,
    header?: TTTS3014R_RESPONSE_HEADER,
    body?: TTTS3014R_RESPONSE_BODY
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

export type VTTC0803U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTC0803U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTC0803U_RESPONSE_HEADER_TR_CONT
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

export type VTTC8434R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTC8434R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTC8434R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTC8908R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTC8908R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTC8908R_RESPONSE_HEADER_TR_CONT
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

export type VTTO5201R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTO5201R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTO5201R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTFO6118R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTFO6118R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTFO6118R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTO5105R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTO5105R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTO5105R_RESPONSE_HEADER_TR_CONT
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

export type VTTT3017U_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTT3017U_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTT3017U_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS3018R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTS3018R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS3018R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS3012R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTS3012R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS3012R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTTS3035R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTTS3035R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTTS3035R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type VTRP6504R_RESPONSE_HEADER_TR_CONT = '' | 'F' | 'M' | 'D' | 'E';
export interface VTRP6504R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  VTRP6504R_RESPONSE_HEADER_TR_CONT
    gt_uid?:  string
}

export type TTTS3014R_RESPONSE_HEADER_TR_CONT = '' | ' ' | 'N';
export interface TTTS3014R_RESPONSE_HEADER {
    'content-type'?:  string
    tr_id?:  string
    tr_cont?:  TTTS3014R_RESPONSE_HEADER_TR_CONT
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


export interface VTTT3017U_RESPONSE_BODY_OUTPUT {
    OVRS_RSVN_ODNO?:  string
}


export interface VTTT3017U_RESPONSE_BODY {
    rt_cd?:  string
    msg_cd?:  string
    msg1?:  string
    output?:  VTTT3017U_RESPONSE_BODY_OUTPUT
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


