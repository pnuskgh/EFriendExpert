/**
 * @file packages/EFriendExpert/Limit.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2024, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import moment from 'moment';                                //--- 'YYYY-MM-DD HH:mm:ss.SSS ZZ'

// type SETTINGS = Record<string, SETTING>;

type SETTING = Array<SETTING_ONE>;

type SETTING_ONE = {
    milliseconds: number
    count: number
};

// type LIMITS = Record<string, LIMIT>;

type LIMIT = Array<number>;

export class Limit {
    public async getSettings(_key: string): Promise<SETTING> {
        return [];
    }

    public async getLimit(_key: string): Promise<LIMIT> {
        return [];
    }

    public async setLimit(_key: string, _limit: LIMIT): Promise<void> {
    }

    public async sleep(miliseconds: number): Promise<void> {
        if (0 < miliseconds) {
            const promise = new Promise(function(resolve, _reject) {
                setTimeout(() => resolve(0), miliseconds);
            });
            await promise;
        }
    }

    public async remainTime(key: string): Promise<number> {
        let remain: number = 0;
        const settings: SETTING = await this.getSettings(key);
        const limit: LIMIT = await this.getLimit(key);
        for (let idx: number = 0; idx < settings.length; idx++) {
            remain = Math.max(remain, await this._remainTime(settings[idx], limit));
        }
        return remain;
    }

    public async _remainTime(setting: SETTING_ONE, limit: LIMIT): Promise<number> {
        if (limit.length < setting.count) {
            return 0;
        } else {
            const duration: number = moment().valueOf() - limit[limit.length - setting.count];
            return setting.milliseconds - duration;
        }
    }

    public async wait(key: string): Promise<void> {
        await this.sleep(await this.remainTime(key));
    }

    public async waitAndRun(key: string): Promise<void> {
        await this.sleep(await this.remainTime(key));
        await this.run(key);
    }

    public async run(key: string): Promise<void> {
        const settings: SETTING = await this.getSettings(key);
        const limit: LIMIT = await this.getLimit(key);

        limit.push(moment().valueOf());
        const maxCount: number = settings.reduce((max, setting) => Math.max(max, setting.count), 0);
        while (maxCount < limit.length) {
            limit.shift();
        }

        await this.setLimit(key, limit);
    }
}
