/**
 * 한국투자증권 EFriendExpert API
 * 
 * @file packages/EFriendExpert/efriends/efriend.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import moment from 'moment';            //--- format : YYYYMMDDHHmmss.SSS ZZ - 20191220172919.083 +0900

import { LIMIT, LIMIT_USER, LIMIT_ACCOUNT, LIMIT_TR_KEY } from './efriend.type.js';
import { BaseError, ERROR_CODE } from '../common/error/index.js';
import { EFriend_LIMIT } from './efriend.limit.constant.js';
import { Secret, TR_TYPE } from './efriend.type.js';

export class EFriendLimit {
    private limit: LIMIT;

    constructor() {
        this.limit = this.initialize([]);
    }

    public getLimit(): LIMIT {
        return this.limit;
    }

    public initialize(secrets: Array<Secret>): LIMIT {
        const today = moment().format('YYYY-MM-DD');
        const limit: LIMIT = { user: {}, account: {} };
        for (const secret of secrets) {
            if (today <= secret.periodTo) {
                const limit_user: LIMIT_USER = {
                    accounts_actual: EFriend_LIMIT.user.accounts_actual,
                    accounts_simulated: EFriend_LIMIT.user.accounts_simulated,
                    ws_api: {
                        session: EFriend_LIMIT.ws_api.session,
                    }
                };
                if (typeof(limit.user[secret.userid]) == 'undefined') {
                    limit.user[secret.userid] = limit_user;
                } else {
                    if (secret.isActual) {
                        limit.user[secret.userid].accounts_actual = limit.user[secret.userid].accounts_actual - 1;
                        if (limit.user[secret.userid].accounts_actual < 0) {
                            throw new BaseError({ code: ERROR_CODE.NOTALLOWED, data: `${secret.userid} accounts_actual limit is over.` });
                        }
                    } else {
                        limit.user[secret.userid].accounts_simulated = limit.user[secret.userid].accounts_simulated - 1;
                        if (limit.user[secret.userid].accounts_simulated < 0) {
                            throw new BaseError({ code: ERROR_CODE.NOTALLOWED, data: `${secret.userid} accounts_simulated limit is over.` });
                        }
                    }
                }

                const limit_account: LIMIT_ACCOUNT = {
                    rest_api: {
                        datetime: moment().format('YYYY-MM-DD HH:mm:ss'),
                        api_per_second_actual: EFriend_LIMIT.rest_api.api_per_second_actual,
                        api_per_second_simulated: EFriend_LIMIT.rest_api.api_per_second_simulated,
                        api_tokenP_datetime: moment().subtract(10, 'minutes'),
                        requests: []
                    },
                    ws_api: {
                        notifications: [],
                        registrations: []
                    }
                };
                limit.account[secret.account] = limit_account;
            }
        }
        this.limit = limit;
        return limit;
    }

    public async increaseRestApi(secret: Secret, trid: string): Promise<boolean> {
        try {
            let result: boolean = true;
            const limit = this.limit.account[secret.account];

            const count = (secret.isActual) ? EFriend_LIMIT.rest_api.api_per_second_actual:EFriend_LIMIT.rest_api.api_per_second_simulated;
            limit.rest_api.requests.push(moment().format('YYYY-MM-DD HH:mm:ss.SSS'));
            limit.rest_api.requests = limit.rest_api.requests.filter(req => moment().subtract(1, 'seconds').format('YYYY-MM-DD HH:mm:ss.SSS') < req);
            console.log(`efriend.limit.ts :: REST API  --- ${secret.userid}, ${secret.account} :: trid - ${trid}, isActual - ${secret.isActual}, count - ${count}, limit - ${limit.rest_api.requests.length}`);
            while (count < limit.rest_api.requests.length) {
                await this.sleep(100);
                console.log(`efriend.limit.ts :: REST sleep --- ${secret.userid}, ${secret.account} :: trid - ${trid}, isActual - ${secret.isActual}, count - ${count}, limit - ${limit.rest_api.requests.length}`);
                limit.rest_api.requests = limit.rest_api.requests.filter(req => moment().subtract(1, 'seconds').format('YYYY-MM-DD HH:mm:ss.SSS') < req);
            }
            return result;

            // // console.log(`--- increaseRestApi : trid - ${trid}, isActual - ${secret.isActual}`, limit.rest_api);
            // const now = moment().format('YYYY-MM-DD HH:mm:ss');
            // if (limit.rest_api.datetime != now) {
            //     limit.rest_api.datetime = now;
            //     limit.rest_api.api_per_second_actual = EFriend_LIMIT.rest_api.api_per_second_actual;
            //     limit.rest_api.api_per_second_simulated = EFriend_LIMIT.rest_api.api_per_second_simulated;
            // }

            // if (secret.isActual) {
            //     limit.rest_api.api_per_second_actual = limit.rest_api.api_per_second_actual - 1;
            //     if (limit.rest_api.api_per_second_actual < 0) {
            //         // throw new BaseError({ code: ERROR_CODE.NOTALLOWED, data: `${secret.account} account limit is over.` });
            //         result = false;
            //     }
            // } else {
            //     limit.rest_api.api_per_second_simulated = limit.rest_api.api_per_second_simulated - 1;
            //     if (limit.rest_api.api_per_second_simulated < 0) {
            //         // throw new BaseError({ code: ERROR_CODE.NOTALLOWED, data: `${secret.account} account limit is over.` });
            //         result = false
            //     }
            // }
            // const countLimit = (secret.isActual) ? limit.rest_api.api_per_second_actual:limit.rest_api.api_per_second_simulated;

            // console.log(`request ${secret.userid}, ${secret.account} :: trid - ${trid}, isActual - ${secret.isActual}`, countLimit, limit.rest_api.datetime);
            // this.limit.account[secret.account] = limit;
            // return result;
        } catch(ex) {
            throw ex;
        }
    }

    /**
     * 주어진 시간만큼 대기 한다.
     * 
     * @param {number} miliseconds
     * @return {void}
     */
    public async sleep(miliseconds: number): Promise<void> {
        const promise = new Promise(function(resolve) {
            setTimeout(function() {
                resolve(0);
            }, miliseconds);
        });
        await promise;
    }

    public updateSession(userid: string, count: number = 1): boolean {
        let result: boolean = true;
        this.limit.user[userid].ws_api.session = this.limit.user[userid].ws_api.session - count;
        if (this.limit.user[userid].ws_api.session < 0) {
            result = false;
        }
        console.log(`efriend.limit.ts :: limit user: ${userid}`, result, this.limit.user[userid]);
        return result;
    }

    public updateWsApi(account: string, trid: string, tr_type: TR_TYPE, tr_key: string): boolean {
        const item: LIMIT_TR_KEY = { tr_id: trid, tr_key: tr_key };
        if ([ 'H0STCNI0', 'H0STCNI9', 'H0IFCNI0', 'H0GSCNI0', 'HDFFF2C0' ].includes(trid)) {
            this.limit.account[account].ws_api.notifications = this.limit.account[account].ws_api.notifications.filter(api => (api.tr_id != item.tr_id) || (api.tr_key != item.tr_key));
            if (tr_type == TR_TYPE.registration) {
                this.limit.account[account].ws_api.notifications.push(item);
            }
            return ((this.limit.account[account].ws_api.notifications.length < EFriend_LIMIT.ws_api.notifications));
        } else {
            this.limit.account[account].ws_api.registrations = this.limit.account[account].ws_api.registrations.filter(api => (api.tr_id != item.tr_id) || (api.tr_key != item.tr_key));
            if (tr_type == TR_TYPE.registration) {
                this.limit.account[account].ws_api.registrations.push(item);
            }
            return ((this.limit.account[account].ws_api.registrations.length) < EFriend_LIMIT.ws_api.registrations);
        }
    }

    public setTokenP(secret: Secret): void {
        this.limit.account[secret.account].rest_api.api_tokenP_datetime = moment();
    }

    public async waitingTokenP(secret: Secret, isWaiting: boolean = false): Promise<void> {
        const seconds = moment().diff(this.limit.account[secret.account].rest_api.api_tokenP_datetime, 'seconds');
        if (isWaiting) {
            await this.sleep(((EFriend_LIMIT.rest_api.api_tokenP_seconds + 5) - seconds) * 1000);
        } else {
            if (seconds < (EFriend_LIMIT.rest_api.api_tokenP_seconds + 5)) {
                throw new BaseError({ code: ERROR_CODE.WAITINGERROR, data: `tokenP: waiting - ${seconds}/${EFriend_LIMIT.rest_api.api_tokenP_seconds} seconds.` });
            }
        }
    }
}

export default EFriendLimit;
