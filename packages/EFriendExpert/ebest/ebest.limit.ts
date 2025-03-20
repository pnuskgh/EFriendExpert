/**
 * @author gye hyun james kim <pnuskgh@gmail.com>
 * @copyright 2017~2024, OBCon Inc.
 * @license OBCon License 1.0
 */

import { Limit, LimitConfig, SETTINGS } from '../Limit.js';
import { METADATA } from './ebest.constant.js';
import { getSpecification } from '../Specfications.js';

export class EBestLimit extends Limit {
    constructor({ gap }: LimitConfig) {
        super({ gap });
    }

    protected async getSettings(trid: string): Promise<SETTINGS> {
        const settings: SETTINGS = [];
        settings.push({ milliseconds: 1000, count: await this.getCountPerSecond(trid) });
        return settings;
    }

    private async getCountPerSecond(trid: string, type: string = '실전'): Promise<number> {
        try {
            const metadata: METADATA = (await getSpecification('LS증권', trid, type == '실전') as METADATA);
            const countPerSecond: number | string = metadata.info.countPerSecond;
            const count: number = (typeof countPerSecond == 'string') ? parseInt(countPerSecond) : countPerSecond;
            return ((Number.isNaN(count)) || (count <= 0)) ? 1000 : count;
        } catch(ex) {
            return 1000;
        }
    }
}

export default EBestLimit;

