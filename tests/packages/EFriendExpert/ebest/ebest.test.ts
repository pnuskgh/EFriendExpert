/**
 * 이베스트투자증권 EBest
 * 
 * @file tests/packages/EFriendExpert/ebest/efriend.test.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2024, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import dotenv from 'dotenv';
import { describe, beforeAll, it, afterAll, expect } from 'vitest';

import * as typeRest from  '../../../../packages/EFriendExpert/ebest/ebest_api.type.js';
import EBestRestBase from '../../../../packages/EFriendExpert/ebest/ebestRestBase.js';
import { Secret } from '../../../../packages/EFriendExpert/ebest/ebest.type.js';

const context: any = {};

async function funcBeforeAll(ctx) {
    console.log(`${ctx.name} test started.`);
    dotenv.config();

    context.secret = {
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
    
        appKey: process.env.APP_KEY || '',
        appSecret: process.env.APP_SECRET || '',
        custtype: '',

        access_token: process.env.ACCESS_TOKEN || '',
        token_type: 'Bearer',
        expires_in: 55231
    };
    context.rest = new EBestRestBase({});
}

async function funcAfterAll(ctx) {
    console.log(`${ctx.name} test stoped.`);
}

async function testToken() {
    const secret: Secret = context.secret;
    const requestHeader:typeRest.TOKEN_REQUEST_HEADER = {
        'content-type': 'application/x-www-form-urlencoded'
    };
    const requestBody: typeRest.TOKEN_REQUEST_BODY = {
        grant_type:  'client_credentials',
        appkey:  secret.appKey,
        appsecretkey:  secret.appSecret,
        scope:  'oob'    
    };
    const result = await context.rest.request(secret, 'token', requestHeader, requestBody);
    console.log('result', result);
    if (result.code == 0) {
        context.secret.access_token = result.body.access_token;
        context.secret.scope = result.body.scope;
        context.secret.token_type = result.body.token_type;
        context.secret.expires_in = result.body.expires_in;
    }
    return 0;
}

async function testT1102() {
    const secret: Secret = context.secret;
    const requestHeader:typeRest.T1102_REQUEST_HEADER = {};
    const requestBody: typeRest.T1102_REQUEST_BODY = {
        t1102InBlock: {
            shcode: '015760'                                //--- 015760. 한국전력
        }   
    };
    const result = await context.rest.request(secret, 't1102', requestHeader, requestBody);
    console.log('result', result);
    return 0;
}

describe('EBest', () => {
    beforeAll(funcBeforeAll, 100);

    // it('EBest REST API Test : token', async (ctx) => { expect(await testToken()).toBe(0); });
    it('EBest REST API Test : t1102', async (ctx) => { expect(await testT1102()).toBe(0); });

    it('EBest REST API Test', async (ctx) => { expect(0).toBe(0); });
    afterAll(funcAfterAll, 100);
});
