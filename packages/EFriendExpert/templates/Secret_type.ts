/**
 * packages/EFriendExpert/templates/EFriendExpert_type.ts
 * 
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { 
    SECRET_ISACTUAL_CODE, SECRET_FEE_TYPE_CODE, SECRET_ISORDER_CODE, SECRET_STATUS_CODE
} from "./Secret_constant";

export interface Secret {
    site: number;
    user: number;
    exchange: number;
    isActual: SECRET_ISACTUAL_CODE;
    userid: string;
    acount: string;
    acountSub: string;
    appKey: string;
    appSecret: string;
    periodFrom: string;
    periodTo: string;
    feeType: SECRET_FEE_TYPE_CODE
    isOrder: SECRET_ISORDER_CODE
    status: SECRET_STATUS_CODE
}
