/**
 * LS증권 EBest type
 * 
 * @file packages/EFriendExpert/ebest/ebest.type.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2024, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { Secret, Token } from '../type.js';
export { Secret, Token };

export interface EBestRestConfig {
    logger?: Console
}

export interface EBestWsConfig {
    secret: Secret,
    logger?: Console
}

// export interface EBest_LIMIT {
//     user: Record<'accounts_actual' | 'accounts_simulated', number>,
//     rest_api: Record<'api_per_second_actual' | 'api_per_second_simulated' | 'api_tokenP_seconds', number>,
//     ws_api: Record<'expiration_period' | 'session' | 'notifications' | 'registrations', number>
// }

// export interface LIMIT {
//     user: Record<string, LIMIT_USER>,
//     account: Record<string, LIMIT_ACCOUNT>
// }

// export interface LIMIT_USER {
//     accounts_actual: number,
//     accounts_simulated: number,
//     ws_api: {
//         session: number
//     }
// }

// export interface LIMIT_ACCOUNT {
//     rest_api: {
//         datetime: string,
//         api_per_second_actual: number,
//         api_per_second_simulated: number,
//         api_tokenP_datetime: Moment,
//         requests: Array<string>
//     }
//     ws_api: {
//         notifications: Array<LIMIT_TR_KEY>,
//         registrations: Array<LIMIT_TR_KEY>
//     }
// }

// export interface LIMIT_TR_KEY {
//     tr_id: string,
//     tr_key: string
// }

export interface AJAX_ERROR {
    code: number,
    message: string
}

export interface WS_KEY {
    iv: string,
    key: string
}

export type WS_BODIES = Array<WS_BODY>;
export type WS_BODY = Record<string, WS_BODY_FIELD>;
export type WS_BODY_FIELD = string | number | null;

export enum TR_TYPE {
    registration = '1',
    release = '2'
}

export type REQUEST_INFO = Record<string, REQUEST_INFO_META>;

export interface REQUEST_INFO_META {
    header: Record<string, string>,
    body: Record<string, string>
}

export interface STANDARD_RESPONSE {
    code:  number
    message:  string
}

export interface WEBSOCKET_HANDLER {
    name: string,
    handler: Function,
    isInternal: boolean
}
