/**
 * 한국투자증권 EFriendExpert CODE JSON 정의
 * 
 * @file packages/EFriendExpert/efriends/efriend.code.constant.d.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { Moment } from 'moment';

export interface EFriend_CODE {
    [key: string]: CODE_METADATA
}

export interface CODE_METADATA {
    info: CODE_INFO,
    fields: Array<CODE_FIELD>,
    data: Array<string>,
    codes: RECORD<string, CODE>
}

export type CODE_INFO = {
    code: string,
    name: string
};

export type CODE_FIELD = {
    code: string,
    name: string,
    type: string
};

export type CODE = RECORD<string, string | number | boolean>;
