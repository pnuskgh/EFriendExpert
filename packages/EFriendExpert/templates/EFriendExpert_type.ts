/**
 * packages/EFriendExpert/templates/EFriendExpert_type.ts
 * 
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { 
    TTTC0802U_REQUEST_TR_CONT_CODE, TTTC0802U_REQUEST_CUSTTYPE_CODE, TTTC0802U_REQUEST_ORD_DVSN_CODE,
    TTTC0802U_TR_CONT_CODE, TTTC0802U_RT_CD_CODE
} from "./EFriendExpert_constant";

// export interface RequestHeaderBase {
//     contentType: 'application/json; charset=utf-8'
// }

// export interface RequestHeaderAuth extends RequestHeaderBase {
//     appkey: string,
//     appsecret: string
// }

// export interface RequestHeaderDefault extends RequestHeaderAuth {
//     authorization: string,
//     tr_id: string,
//     custtype: CUSTTYPE_CODE,
// }

// export interface RequestHeader extends RequestHeaderDefault {
//     personalseckey?: string | null,
//     tr_cont: TR_CONT_CODE,
//     seq_no?: string | null,
//     mac_address?: string | null,
//     phone_number?: string | null,
//     ip_addr?: string | null,
//     hashkey?: string | null,
//     gt_uid?: string | null
// }

export interface RequestHeader_Approval {
    contentType: 'application/json; charset=utf-8'
}

export interface RequestBody_Approval {
    grant_type: 'client_credentials',
    appkey: string,
    secretkey: string
}

export interface Response_Approval {
    code: number,
    message: string,
    header?: ResponseHeader_Approval | null,
    body?: ResponseBody_Approval | null
}

export interface ResponseHeader_Approval {
    contentType: 'application/json; charset=utf-8'
}

export interface ResponseBody_Approval {
    approval_key: string
}

export interface RequestHeader_TTTC0802U {
    contentType: 'application/json; charset=utf-8',
    authorization: string,
    appkey: string,
    appsecret: string
    personalseckey?: string | null,
    tr_id: string,
    tr_cont: TTTC0802U_REQUEST_TR_CONT_CODE,
    custtype: TTTC0802U_REQUEST_CUSTTYPE_CODE,
    seq_no?: string | null,
    mac_address?: string | null,
    phone_number?: string | null,
    ip_addr?: string | null,
    hashkey?: string | null,
    gt_uid?: string | null
}

export interface RequestBody_TTTC0802U {
    CANO: string,
    ACNT_PRDT_CD: string,
    PDNO: string,
    ORD_DVSN: TTTC0802U_REQUEST_ORD_DVSN_CODE,
    ORD_QTY: string,
    ORD_UNPR: string,
    ALGO_NO: string    
}

export interface Response_TTTC0802U {
    code: number,
    message: string,
    header?: ResponseHeader_TTTC0802U | null,
    body?: ResponseBody_TTTC0802U | null
}

export interface ResponseHeader_TTTC0802U {
    contentType: 'application/json; charset=utf-8',
    tr_id: string,
    tr_cont: TTTC0802U_TR_CONT_CODE,
    gt_uid: string
}

export interface ResponseBody_TTTC0802U {
    rt_cd: TTTC0802U_RT_CD_CODE,
    msg_cd: string,
    msg: string,
    output: Array<ResponseBody_TTTC0802U_OUTPUT>
}

export interface ResponseBody_TTTC0802U_OUTPUT {
    KRX_FWDG_ORD_ORGNO: string,
    ODNO: string,
    ORD_TMD: string
}
