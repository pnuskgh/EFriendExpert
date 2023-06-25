/**
 * packages/EFriendExpert/templates/EFriendExpert_api.ts
 * 
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import fetch from "node-fetch";

import { EFriendExpert_JSON } from "../../../docs/excel/EFriendExpert_json.js";

import { 
    RequestHeader, RequestHeaderAuth, RequestHeaderCommon,
    RequestBody_Approval, ResponseBody_Approval,
    RequestBody_hashkey, RequestBody_tokenP, RequestBody_revokeP
} from "./EFriendExpert_type.ts";


export class EFriendExport_API {
    constructor() {
        this._isProduct = true;
    }

    async _request(trid: string, header: RequestHeader, body: ppp): Promise<ppp> {
        return {
            header: {},
            body: {}
        };
    }

    async _delay() {
        console.log('Reserved: _delay()');
    }

    async _Approval(trid: string, requestHeader: RequestHeader, requestBody: RequestBody_Approval): Promise<ResponseBody_Approval> {
        await this._delay();

        const info = EFriendExpert_JSON[trid].info;
        const requestInfo = (this._isProduct) ? `${info.productionDomain}${info.url}`:`${info.developmentDomain}${info.url}`;
        const requestInit = { 
            method: into.method.toLowerCase(), 
            mode: 'cors', 
            cache: 'no-cache', 
            headers: requestHeader
        };
        if (requestInit.method == 'post') {
            requestInit.body = JSON.stringify(requestBody);
        } else {
            requestInfo = `${requestInfo}?${(new URLSearchParams(requestBody)).toString()}`;
        }
        const res = await fetch(requestInfo, requestInit);

        //--- pppqqq


        let approval_key = null;

        const responseBody: ResponseBody_Approval = { approval_key: approval_key };
        return responseBody;
    }

    async _hashkey(trid: string, header: RequestHeaderAuth, body: RequestBody_hashkey): Promise<ppp> {
        return {
            header: {},
            body: {}
        };
    }

    async _tokenP(trid: string, header: RequestHeader, body: RequestBody_tokenP): Promise<ppp> {
        return {
            header: {},
            body: {}
        };
    }

    async _revokeP(trid: string, header: RequestHeader, body: RequestBody_revokeP): Promise<ppp> {
        return {
            header: {},
            body: {}
        };
    }

    async _TTTC0802U(trid: string, header: RequestHeaderCommon, body: ppp): Promise<ppp> {
        return {
            header: {},
            body: {}
        };
    }
}
