/**
 * packages/EFriendExpert/templates/EFriendExpert_api.ts
 * 
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import fetch from "node-fetch";

import { EFriendExpert_JSON_TRID } from "./EFriendExpert_json_trid.js";

import { SECRET_ISACTUAL_CODE } from "./Secret_constant";
import { Secret } from "./Secret_type";

import { 
    RequestHeader_Approval, RequestBody_Approval, Response_Approval,
    RequestHeader_TTTC0802U, RequestBody_TTTC0802U, Response_TTTC0802U
} from "./EFriendExpert_type";

class FetchError extends Error {
    constructor(code: number, message: string) {
        super(`${code} - ${message}`);
        this.code = code;
        this.message = message;
    }
}

export class EFriendExport_API {
    async Approval(secret: Secret, requestHeader: RequestHeader_Approval, requestBody: RequestBody_Approval): Promise<Response_Approval> {
        return await this._Approval(secret, EFriendExpert_JSON_TRID.Approval, requestHeader, requestBody);
    }

    private async _Approval(secret: Secret, metadata: any, requestHeader: RequestHeader_Approval, requestBody: RequestBody_Approval): Promise<Response_Approval> {
        const response: Response_Approval = {
            code: 0,
            message: 'ok'
        };
        
        try {
            const info = metadata.info;
            let requestInfo = (secret.isActual == SECRET_ISACTUAL_CODE.ACTUAL_INVESTMENT) ? `${info.productionDomain}${info.url}`:`${info.developmentDomain}${info.url}`;
            const requestInit = { 
                method: info.method.toLowerCase(), 
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

            let contentType = res.headers.get('content-type');
            if (contentType == null) {
                throw new FetchError(404, 'Content type not exist.');
            } else if (contentType.startsWith('application/json') == false) {
                throw new FetchError(405, 'Content type is not application/json.');
            }

            if (res.ok) {
                response.header = null;
                response.body = await res.json();
            } else {
                response.code = 500;
                response.message = `Error: ${res.status} : ${res.statusText}`;
            }
        } catch(err) {
            response.code = err.code || 500;
            response.message = err.message;
        }
        return response;
    }

    async TTTC0802U(secret: Secret, requestHeader: RequestHeader_TTTC0802U, requestBody: RequestBody_TTTC0802U): Promise<Response_TTTC0802U> {
        return await this._TTTC0802U(secret, EFriendExpert_JSON_TRID.TTTC0802U, requestHeader, requestBody);
    }

    private async _TTTC0802U(secret: Secret, metadata: any, requestHeader: RequestHeader_TTTC0802U, requestBody: RequestBody_TTTC0802U): Promise<Response_TTTC0802U> {
        const response: Response_TTTC0802U = {
            code: 0,
            message: 'ok'
        };
        
        try {
            const info = metadata.info;
            let requestInfo = (secret.isActual == SECRET_ISACTUAL_CODE.ACTUAL_INVESTMENT) ? `${info.productionDomain}${info.url}`:`${info.developmentDomain}${info.url}`;
            const requestInit = { 
                method: info.method.toLowerCase(), 
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

            let contentType = res.headers.get('content-type');
            if (contentType == null) {
                throw new FetchError(404, 'Content type not exist.');
            } else if (contentType.startsWith('application/json') == false) {
                throw new FetchError(405, 'Content type is not application/json.');
            }

            if (res.ok) {
                response.header = res.headers;              //--- res.headers.get(name)
                response.body = await res.json();
            } else {
                response.code = 500;
                response.message = `Error: ${res.status} : ${res.statusText}`;
            }
        } catch(err) {
            response.code = err.code || 500;
            response.message = err.message;
        }
        return response;
    }
}
