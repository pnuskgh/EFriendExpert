/**
 * @author gye hyun james kim <pnuskgh@gmail.com>
 * @copyright 2017~2024, OBCon Inc.
 * @license OBCon License 1.0
 */

import moment from 'moment';                                //--- 'YYYY-MM-DD HH:mm:ss.SSS ZZ'

export interface LimitConfig {
    gap?: number
}

// type SETTING_ALL = Record<string, SETTING>;

export type SETTINGS = Array<SETTING>;

type SETTING = {
    milliseconds: number
    count: number
};

// type LIMITS = Record<string, LIMIT>;

type LIMIT = Array<number>;

export class Limit {
    private gap: number;

    constructor({ gap }: LimitConfig) {
        this.gap = gap ?? 100;
    }

    protected async getSettings(_key: string): Promise<SETTINGS> {
        return [];
    }

    private async getLimit(_key: string): Promise<LIMIT> {
        return [];
    }

    private async setLimit(_key: string, _limit: LIMIT): Promise<void> {
    }

    private async sleep(miliseconds: number): Promise<void> {
        if (0 < miliseconds) {
            const promise = new Promise(function(resolve, _reject) {
                setTimeout(() => resolve(0), miliseconds);
            });
            await promise;
        }
    }

    private async remainTime(key: string): Promise<number> {
        let remain: number = 0;
        const settings: SETTINGS = await this.getSettings(key);
        const limit: LIMIT = await this.getLimit(key);
        for (let idx: number = 0; idx < settings.length; idx++) {
            remain = Math.max(remain, await this._remainTime(settings[idx], limit));
        }
        return remain;
    }

    private async _remainTime(setting: SETTING, limit: LIMIT): Promise<number> {
        if (limit.length < setting.count) {
            return 0;
        } else {
            const duration: number = moment().valueOf() - limit[limit.length - setting.count];
            return setting.milliseconds - duration;
        }
    }

    private async wait(key: string): Promise<void> {
        await this.sleep(await this.remainTime(key) + this.gap);
    }

    public async waitAndRun(key: string): Promise<void> {
        await this.wait(key);
        await this.run(key);
    }

    private async run(key: string): Promise<void> {
        const settings: SETTINGS = await this.getSettings(key);
        const limit: LIMIT = await this.getLimit(key);

        limit.push(moment().valueOf());
        const maxCount: number = settings.reduce((max, setting) => Math.max(max, setting.count), 0);
        while (maxCount < limit.length) {
            limit.shift();
        }

        await this.setLimit(key, limit);
    }
}

export default Limit;
