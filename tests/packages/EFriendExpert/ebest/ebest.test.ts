/**
 * 이베스트투자증권 EBest
 * 
 * @file tests/packages/EFriendExpert/ebest/efriend.test.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import dotenv from 'dotenv';
import { createInterface } from 'readline';
import { describe, beforeAll, it, afterAll, expect } from 'vitest';

import * as typeRest from  '../../../../packages/EFriendExpert/ebest/ebest_api.type.js';
import EBestRestBase from '../../../../packages/EFriendExpert/ebest/ebestRestBase.js';
import { Secret, EBestRestConfig } from '../../../../packages/EFriendExpert/ebest/ebest.type.js';

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

async function testToken() {
    const appKey = process.env.APP_KEY || '';
    const appSecret = process.env.APP_SECRET || '';

    const secret: Secret = {
        isActive: true,
        isActual: true,
        isOrder: true,
        isQuery: true,
        isPublic: false,
        userid: process.env.USERID || '',
        account: process.env.ACCOUNT || '',
        accountSub: process.env.ACCOUNT_SUB || '',
        periodFrom: process.env.PERIOD_FROM || '',
        periodTo: process.env.PERIOD_TO || '',
    
        appkey: appKey || '',
        appsecret: appSecret || '',
        custtype: '',
        tokens: [ {
            id: -1,
            access_token: process.env.ACCESS_TOKEN || '',
            token_type: 'Bearer',
            expires_in: 55231,
            access_token_token_expired: '',
        
            secretId: -1
        }]
    };
    const requestHeader:typeRest.TOKEN_REQUEST_HEADER = {
        'content-type': 'application/x-www-form-urlencoded'
    };
    const requestBody: typeRest.TOKEN_REQUEST_BODY = {
        grant_type:  'client_credentials',
        appkey:  appKey,
        appsecretkey:  appSecret,
        scope:  'oob'    
    };
    const responseHeader: typeRest.TOKEN_RESPONSE_HEADER = {
        'content-type': 'application/json; charset=utf-8'
    };
    const rest = new EBestRestBase({});
    const result = await rest.request(secret, 'token', requestHeader, requestBody);
    console.log('result', result);
    return 0;
}

describe('EBest', () => {
    beforeAll(async (ctx) => {
        console.log(`${ctx.name} test started.`);
        dotenv.config(); 
    }, 100);

    it('EBest REST API Test', async (ctx) => { expect(await testToken()).toBe(0); });

    afterAll(async (ctx) => { 
        console.log(`${ctx.name} test stoped.`);
    }, 100);
});
