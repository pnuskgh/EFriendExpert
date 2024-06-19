/**
 * @author gye hyun james kim <pnuskgh@gmail.com>
 * @copyright 2017~2024, OBCon Inc.
 * @license OBCon License 1.0
 */

import { Limit, LimitConfig, SETTINGS } from '../Limit.js';
import EBest_JSON_TRID from './ebest.constant.js';

export class EBestLimit extends Limit {
    constructor({ gap }: LimitConfig) {
        super({ gap });
    }

    protected async getSettings(trid: string): Promise<SETTINGS> {
        const settings: SETTINGS = [];
        settings.push({ milliseconds: 1000, count: this.getCountPerSecond(trid) });
        return settings;
    }

    private getCountPerSecond(trid: string, type: string = '실전'): number {
        try {
            const countPerSecond: number | string = EBest_JSON_TRID[`${trid}_${type}`].info.countPerSecond;
            const count: number = (typeof countPerSecond == 'string') ? parseInt(countPerSecond) : countPerSecond;
            return ((Number.isNaN(count)) || (count <= 0)) ? 1000 : count;
        } catch(ex) {
            return 1000;
        }
    }
}

export default EBestLimit;

