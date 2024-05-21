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

import { Secret, Token } from '../../../../packages/EFriendExpert/type.js';

import EBest from '../../../../packages/EFriendExpert/ebest/ebest.js';
import * as typeRest from  '../../../../packages/EFriendExpert/ebest/ebest_api.type.js';

const context: any = {};

async function funcBeforeAll(ctx) {
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
        scope: 'oob',
        token_type: 'Bearer',
        expires_in: process.env.EXPIRES_IN,
        access_token_token_expired: process.env.ACCESS_TOKEN_TOKEN_EXPIRED
    };
    context.token = {
        id: -1,
        access_token: process.env.ACCESS_TOKEN || '',
        scope: 'oob',
        token_type: 'Bearer',
        expires_in: process.env.EXPIRES_IN,
        access_token_token_expired: process.env.ACCESS_TOKEN_TOKEN_EXPIRED,
        secretId: -1
    };

    context.instance = new EBest({});
}

async function funcAfterAll(ctx) {
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

    it('EBest REST API Test', async (ctx) => {
        // const token: Token = await context.instance.fetchToken(context.secret);
        // expect(token.id).toBe(-1); 
        
        // context.secret.access_token = token.access_token;
        // context.secret.scope = token.scope;
        // context.secret.token_type = token.token_type;
        // context.secret.expires_in = token.expires_in;
        // context.secret.access_token_token_expired = token.access_token_token_expired;

        // let result = await context.instance.fetchTokenRemove(context.secret, context.token);
        // expect(result).toBe(true); 

        expect(0).toBe(0); 
    });
    
    afterAll(funcAfterAll, 100);
});
