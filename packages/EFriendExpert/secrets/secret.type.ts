/**
 * Secrets
 * 
 * @file packages/EFriendExpert/secrets/secret.type.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { Token } from "../tokens";

export interface Secret {
    id: number,
    isActual: boolean,
    isOrder: boolean,
    userid: string,
    acount: string,
    acountSub: string,
    periodFrom: string,
    periodTo: string,
    feeType: string,

    grant_type: string,
    approval_key?: string,
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
