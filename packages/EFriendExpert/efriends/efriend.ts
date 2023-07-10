/**
 * 한국투자증권 EFriendExpert API
 * 
 * @file packages/EFriendExpert/efriends/efriend.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { Secret } from "../secrets";
import { APPROVAL_REQUEST_HEADER, APPROVAL_REQUEST_BODY } from './efriend.type';
import EFriendRest from "./efriendRest";

export class EFriend {
    private efriendRest: EFriendRest

    constructor() {
        this.efriendRest = new EFriendRest();
    }

    public async Approval(secret: Secret): Promise<string | undefined> {
        try {
            const requestHeader: APPROVAL_REQUEST_HEADER = {
                "content-type": 'application/json; charset=utf-8',
            };
            const requestBody: APPROVAL_REQUEST_BODY = {
                grant_type : 'client_credentials',
                appkey: secret.appkey,
                secretkey: secret.appsecret
            };
            const response = await this.efriendRest.Approval(secret, requestHeader, requestBody);
            if (response.code == 0) {
                return response.body?.approval_key;
            } else {
                return undefined;
            }
        } catch(ex) {
            throw ex;
        }
    }
}

export default EFriend;
