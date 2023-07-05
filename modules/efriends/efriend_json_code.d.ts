/**
 * 한국투자증권 EFriendExpert code JSON 정의
 * 
 * @file modules/efriends/efriend_json_code.d.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { Moment } from 'moment';

export interface EFriend_JSON_CODE {
    [category: string]: {
        info: CODE_INFO,
        fields: Array<CODE_FIELD>
    }
}

export type CODE_INFO = {
    code: string,
    name: string,
    zipPrefix: 'https://new.real.download.dws.co.kr/common/master',
    zipFile: string,
    txtFile: string,
    pythonPrefix: 'https://github.com/koreainvestment/open-trading-api/tree/main/stocks_info',
    pythonFile: string,
    sep: string,
    verifyDate: Moment | '',
    verifyDate2: Moment | '',
    memo: string
};

export type CODE_FIELD = {
    start: number,
    code: string,
    name: string,
    type: 'string',
    required: boolean,
    length: number,
    description: string,
    default: string
};
