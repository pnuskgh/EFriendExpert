/**
 * packages/EFriendExpert/templates/EFriendExpert_type.ts
 * 
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { TR_CONT_CODE } from "./EFriendExpert_constant.ts";

export interface RequestHeader {
    contentType: 'application/json; charset=utf-8';
    authorization: string;
    appkey: string;
    appsecret: string;
    personalseckey?: string | null;
    tr_id: string;
    tr_cont: TR_CONT_CODE;
    custtype: CUSTTYPE_CODE;
    seq_no?: string | null;
    mac_address?: string | null;
    phone_number?: string | null;
    ip_addr?: string | null;
    hashkey?: string | null;
    gt_uid?: string | null;
 }
 