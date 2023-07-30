/**
 * 한국투자증권 EFriendExpert의 main 프로그램
 * 
 * @file packages/EFriendExpert/main.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { createInterface } from 'readline';

import { logger } from './common/logger';
import { Config, configUtil } from './common/config';
import { BaseError, ERROR_CODE } from './common/error';

import { SiteService } from './sites';
import { SecretService } from './secrets';
import { EFriend, EFriendRest, EFriendWs, Secret, EFriend_JSON_TRID as JSON_TRID, METADATA, TR_TYPE } from './efriends';
import EFriend_JSON_TRID from './efriends/efriend.constant.js';
import { requestInfo } from './efriends/efriend.test.js';

const readline = createInterface({
    input: process.stdin,
    output: process.stdout
});

const readLineAsync = (msg: Array<string> | string, defaultValue?: string): Promise<string> => {
    return new Promise(resolve => {
        let question = ((Array.isArray(msg)) ? msg.join('\n'):msg);
        if (typeof(defaultValue) == 'undefined') {
            question = question + '\n> ';
        } else {
            question = question + `\n> ${defaultValue} : `;
        }
        readline.question(question, answer => {
            resolve((answer == '') ? (defaultValue ?? answer):answer);
        });
    });
}

(async () => {
    try {
        const config: Config = await configUtil.getConfig();
        logger.setConfig(config.logger);

        const siteService: SiteService = new SiteService({ logger });
        await siteService.initialize();

        const secretService: SecretService = new SecretService();
        let secrets: Array<Secret> = await secretService.getSecrets();

        const efriend: EFriend = new EFriend({ logger });
        secrets = await efriend.setSecrets(secrets);
        await secretService.setSecrets(secrets);

        console.log('Start EFriendExpert CLI.');
        console.log('    2017~2023, EFriendExport Community Team');
        console.log(' ');

        let messages: Array<string> = [];
        let cmd: string = '';

        const account = await readLineAsync('한국투자증권의 계좌번호 체계(8-2)의 앞 8자리를 입력 하세요.', '68629034');
        const secretOrder = await efriend.getOrderSecret(account, true);
        if (secretOrder == null) {
            console.log('인증 정보가 없습니다.');
            process.exit(0);
        }

        messages = [];
        messages.push('인증 정보의 종류를 선택 하세요.');
        messages.push('1: 실전 투자');
        messages.push('2: 모의 투자');
        const isActual: boolean = (await readLineAsync(messages, '1') == '1');

        const json_trid: JSON_TRID = EFriend_JSON_TRID;
        const categories: Array<string> = [];
        for (const [ _key, value ] of Object.entries(json_trid)) {
            const category: string = value.info.category;
            if (categories.includes(category) == false) {
                categories.push(category);
            }
        }

        messages = [];
        categories.forEach((item, index) => messages.push(`${index + 1}: ${item}`));
        cmd = await readLineAsync(messages, '3');
        let category: string = categories[parseInt(cmd) - 1];

        const trids: Array<METADATA> = [];
        for (const [ _key, trid_info ] of Object.entries(json_trid)) {
            if ((trid_info.info.category == category) &&
                (trid_info.info.isProduct == isActual)) {
                trids.push(trid_info)
            }
        }

        const efriendRest = new EFriendRest({ logger });
        const efriendWs = new EFriendWs({ secret: secretOrder, logger });
        await efriendWs.initialize();
        efriendWs.addHandler(efriendWs.onMessageDefault.bind(efriendWs));
        let trid: METADATA | null = null;
        while(true) {
            messages = [];
            for (let idx = 0; idx < trids.length; idx++) {
                const info = trids[idx];
                messages.push(`${idx + 1}: ${info.info.trid} - ${info.info.name}`);
            }
            cmd = await readLineAsync(messages);
            trid = trids[parseInt(cmd) - 1];
            console.log(' ');

            console.log(`---- ${trid.info.category}: ${trid.info.trid} - ${trid.info.name} : ${(trid.info.isProduct) ? '실전 투자':'모의 투자'}`);
            const key = `${trid.info.trid}_${(trid.info.isProduct) ? '실전':'모의'}`;

            console.log('요청 header를 입력 하세요.');
            const requestHeader: any = {};
            for (let idx = 0; idx < trid.request.header.length; idx++) {
                const header = trid.request.header[idx];

                //--- To-Do: field의 enum 항목을 사용하여 선택하도록 한다.
                switch (header.code) {
                case 'content-type':
                    requestHeader[header.code]= 'application/json; charset=utf-8';
                    break;
                case 'tr_id':
                    // requestHeader[header.code]= trid.info.trid;
                    break;
                case 'tr_type':
                    messages = [];
                    messages.push(`${header.code} (${header.name})`);
                    requestHeader[header.code]= await readLineAsync(messages, requestInfo[key]?.header[header.code] ?? '1');
                    break;
                case 'authorization':
                case 'appkey':
                case 'appsecret':
                case 'personalseckey':
                case 'tr_cont':
                case 'custtype':
                case 'seq_no':
                case 'mac_address':
                case 'phone_number':
                case 'ip_addr':
                case 'hashkey':
                case 'gt_uid':
                    
                case 'approval_key':
                    break;
                default:
                    messages = [];
                    messages.push(`${header.code} (${header.name})`);
                    requestHeader[header.code]= await readLineAsync(messages, requestInfo[key]?.header[header.code]);
                    break;
                }
            }
            console.log(' ');

            console.log('요청 body를 입력 하세요.');
            const requestBody: any = {};
            for (let idx = 0; idx < trid.request.body.length; idx++) {
                const body = trid.request.body[idx];

                //--- To-Do: field의 enum 항목을 사용하여 선택하도록 한다.
                switch (body.code) {
                case 'tr_id':
                    requestBody[body.code]= trid.info.trid;
                    break;
                case 'tr_key':
                    messages = [];
                    messages.push(`${body.code} (${body.name})`);
                    requestBody[body.code]= await readLineAsync(messages, requestInfo[key]?.body[body.code] ?? '015760');
                    break;
                default:
                    messages = [];
                    messages.push(`${body.code} (${body.name})`);
                    requestBody[body.code]= await readLineAsync(messages, requestInfo[key]?.body[body.code]);
                    break;
                }
            }
            console.log(' ');

            requestInfo[key] = {
                header: requestHeader,
                body: requestBody
            };
            console.log(`'${key}': `, requestInfo[key]);
            console.log(' ');

            if (trid.info.domain.startsWith('ws')) {
                if (requestHeader['tr_type'] == '1') {
                    // await efriendWs.webSocket(trid.info.trid, TR_TYPE.registration, requestBody['tr_key']);
                } else {
                    await efriendWs.webSocket(trid.info.trid, TR_TYPE.release, requestBody['tr_key']);
                }
            } else {
                const response = await efriendRest.request(secretOrder, trid.info.trid, requestHeader, requestBody);
                console.log(`code: ${response.code}, message: ${response.message}`);
                console.log('header', response.header);
                console.log('body', response.body);
                console.log(' ');
            }

            cmd = await readLineAsync('continue ...');
            if (cmd == 'exit') {
                break;
            }
            console.log(' ');
        }
    } catch(ex) {
        console.error(ex);
        if (ex instanceof BaseError) {
            logger.error(`${ex.code}: ${ex.message} : ${ex.data}`);
        } else {
            console.error(ex);
            throw new BaseError({ code: ERROR_CODE.UNKNOWN_ERROR, data: ex });
        }
    }
})();
