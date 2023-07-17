import { HttpMethod, fetch } from "../../packages/efriends/core/utils/fetch.util";
import { EFriend_JSON_TRID } from "../../packages/efriends/core/constants/trid.constant";
import { describe, it, expect } from "vitest";
import { testBed } from "./testbed";
import { TypeOfResult } from "./type";


describe('OAuth인증', () => {
  let token = '';

  testBed.filter(({ group_name }) => group_name === 'OAuth인증').forEach((item) => {
    const { info, response } = Object.values(EFriend_JSON_TRID).find((value) => {
      return value.info.url === item.access_url;
    })!;
    it(`${info.name}`, async () => {
      const { data } = await fetch.request(info.url, {
        mode: 'virtual',
        method: info.method as HttpMethod,
        body: {
          ...JSON.parse(item.req_example ?? '{}'),
          appkey: process.env.VIRTUAL_APP_KEY, 
          appsecret: process.env.VIRTUAL_APP_SECRET,
          token: info.name === '접근토큰폐기(P)' ? token : undefined,
        },
      });
      if (info.name === '접근토큰발급(P)') {
        token = data.access_token;
      }

      response.body.forEach(({ code, type }) => {
        expect(data).toHaveProperty(code);
        expect(data[code]).toBeTypeOf(type === 'array' ? 'object' : type as TypeOfResult);
      });
    });
  });
});
