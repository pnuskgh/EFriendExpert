import { HttpMethod, fetch } from "../../packages/efriends/core/utils/fetch.util";
import { EFriend_JSON_TRID } from "../../packages/efriends/core/constants/trid.constant";
import { describe, it, expect, beforeAll } from "vitest";
import { testBed } from "./testbed";
import { TypeOfResult } from "./type";


describe('해외선물옵션주문', () => {
  const APP_KEY = process.env.VIRTUAL_APP_KEY ?? '';
  const APP_SECRET = process.env.VIRTUAL_APP_SECRET ?? '';
  const VIRTUAL_ACCOUNT_NUMBER = process.env.VIRTUAL_ACCOUNT_NUMBER ?? '';

  const [CANO, ACNT_PRDT_CD] = VIRTUAL_ACCOUNT_NUMBER.split('-');

  let token = '';

  beforeAll(async () => {
    const { data } = await fetch.request<object, any>('oauth2/tokenP', {
      mode: 'virtual',
      method: 'post',
      body: {
        grant_type: 'client_credentials',
        appkey: APP_KEY, 
        appsecret: APP_SECRET, 
      }
    });
    token = data.access_token;
  })

  testBed
    .filter(({ group_name }) => group_name === '해외선물옵션주문').forEach((item, index) => {
    const trid = Object.values(EFriend_JSON_TRID).filter(({ info }) => !info.isProduct).find((value) => {
      return value.info.url === item.access_url;
    });
    if (!trid) {
      it.todo(`${item.name}에 대한 trid json이 존재하지 않습니다. \n${item.access_url}`)
      return;
    }
    const { info, response } = trid;
    it(`${info.name}`, async () => {
      const spec = JSON.parse(item.spec);
      const params = {
        ...spec['paths'][item.access_url][item.http_method?.toLowerCase() as string].parameters.reduce((obj, param) => {
          obj[param.name] = param['x-example'];
          return obj;
        }, {}),
        CANO,
        ACNT_PRDT_CD,
      };
    
      const body = {
        ...JSON.parse(item.req_example ?? '{}'),
        CANO,
        ACNT_PRDT_CD,
      };

      const { data } = await fetch.request(info.url, {
        mode: 'virtual',
        method: info.method as HttpMethod,
        headers: {
          authorization: `Bearer ${token}`,
          appkey: process.env.VIRTUAL_APP_KEY ?? '',
          appsecret: process.env.VIRTUAL_APP_SECRET ?? '',
          tr_id: info.trid,
          tr_cont: ''
        },
        params,
        body: info.method === 'post' ? body : undefined,
      });

      response.body.forEach(({ code, type }) => {
        expect(data).toHaveProperty(code);
        expect(data[code]).toBeTypeOf(type === 'array' ? 'object' : type as TypeOfResult);
      });
    });
  });
});
