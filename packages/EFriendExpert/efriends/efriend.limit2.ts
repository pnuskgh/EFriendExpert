/**
 * @author gye hyun james kim <pnuskgh@gmail.com>
 * @copyright 2017~2024, OBCon Inc.
 * @license OBCon License 1.0
 */

import { Limit, LimitConfig, SETTINGS } from '../Limit.js';

export class EFriendLimit2 extends Limit {
    constructor({ gap }: LimitConfig) {
        super({ gap });
    }

    //--- account당 실전 투자 초당 RES API 최대 호출 수 : 20 (2022.09.08 ~)
    //--- account당 모의 투자 초당 RES API 최대 호출 수 :  5 (2023.06.23 ~)
    protected async getSettings(account: string): Promise<SETTINGS> {
        const settings: SETTINGS = [];
        if (account.endsWith('모의')) {
            settings.push({ milliseconds: 1000, count: 5 });
        } else {
            settings.push({ milliseconds: 1000, count: 20 });
        }
        return settings;
    }
}

export default EFriendLimit2;
