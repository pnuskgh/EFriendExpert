/**
 * packages/EFriendExpert/templates/EFriendExpert_type.ts
 * 
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { TR_CONT_CODE, CUSTTYPE_CODE } from "./EFriendExpert_constant.ts";

export interface RequestHeader {
    contentType: 'application/json; charset=utf-8';
}

export interface RequestHeaderAuth extends RequestHeader {
    appkey: string;
    appsecret: string;
}

export interface RequestHeaderDefault extends RequestHeaderAuth {
    authorization: string;
    tr_id: string;
    custtype: CUSTTYPE_CODE;
}

export interface RequestHeaderCommon extends RequestHeaderDefault {
    personalseckey?: string | null;
    tr_cont: TR_CONT_CODE;
    seq_no?: string | null;
    mac_address?: string | null;
    phone_number?: string | null;
    ip_addr?: string | null;
    hashkey?: string | null;
    gt_uid?: string | null;
}

{% comment %} export interface RequestHeaderCorporation extends RequestHeaderDefault {
    personalseckey: string;
    tr_cont: TR_CONT_CODE;
    seq_no: string;
    mac_address?: string | null;
    phone_number: string;
    ip_addr: string;
    hashkey?: string | null;
    gt_uid: string;
} {% endcomment %}

export interface RequestBody_Approval {
    grant_type: 'client_credentials',
    appkey: string,
    secretkey: string
}

export interface ResponseBody_Approval {
    approval_key: string
}

export interface RequestBody_hashkey {
    JsonBody: string
}

export interface RequestBody_tokenP {
    grant_type: 'client_credentials',
    appkey: string,
    secretkey: string
}

export interface RequestBody_revokeP {
    appkey: string,
    secretkey: string
    token: string
}
