/**
 * 한국투자증권 EFriendExpert API
 * 
 * @file packages/EFriendExpert/efriends/efriendBase.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2024, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import moment, { Moment } from 'moment';                    //--- format : YYYYMMDDHHmmss.SSS ZZ - 20191220172919.083 +0900
import { BaseError, ERROR_CODE } from '../common/error/index.js';

import { Secret, EFriendConfig, STANDARD_RESPONSE } from './efriend.type.js';

export class EFriendBase {
    protected readonly logger: Console;

    protected secrets: Array<Secret> = [];
    private indexSecret: number = -1;

    constructor({ logger }: EFriendConfig) {
        this.logger = logger ?? console;
    }

    public async getNextSecret(): Promise<Secret> {
        try {
            const secrets: Array<Secret> = await this.getActiveSecrets(this.secrets, false, false);
            if (0 < secrets.length) {
                this.indexSecret = (this.indexSecret + 1) % secrets.length;
                return secrets[this.indexSecret];
            } else {
                throw new BaseError({ code: ERROR_CODE.OSE00001, data: '' });
            }
        } catch(ex) {
            throw ex;
        }
    }

    public getSecrets(): Array<Secret> {
        return this.secrets;
    }

    public async getActiveSecrets(_secrets: Array<Secret> = this.secrets, _refresh: boolean = true, _isWaiting: boolean = false): Promise<Array<Secret>> {
        try {
            return [];
        } catch(ex) {
            throw ex;
        }
    }

    public isOperatingTime(today: Moment = moment()): STANDARD_RESPONSE {
        const day: number = today.day();                    //--- 요일, 0. 일요일, 1. 월요일, ..., 6. 토요일
        if ((day < 1) || (5 < day)) {
            return { code: 1, message: '평일에만 작업 가능 합니다.' };
        }

        const hhmm: string = today.format('HH:mm');         //--- 시간과 분
        if ((hhmm < '09:00') || ('15:30' < hhmm)) {
            return { code: 2, message: '오전 9시부터 오후 3시 30분까지만 작업 가능 합니다.' };
        }
        return { code: 0, message: '운영 시간'};
    }

    public setLimit(_secrets: Array<Secret>) {
        //--- EBest에서는 사용하지 않음.
        //--- Deprecated : 향후 별도의 limit 객체를 사용하여 외부에서 구현
    }
}

export default EFriendBase;
