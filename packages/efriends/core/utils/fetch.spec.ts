import { describe, it, expectTypeOf } from "vitest";
import { fetch } from "./fetch.util";
type TokenPRequest = {
  grant_type: 'client_credentials',  
  appkey: string, 
  appsecret: string
};

type TokenP = {
  access_token: string,
  access_token_token_expired: string,
  token_type: 'Bearer',
  expires_in: number
}

type KisResponse<T> = {
  rt_cd: '0',
  msg_cd: 'MCA00000',
  msg1: '정상처리 되었습니다.'
  output: T
}

describe('Fetch', () => {
  it.concurrent('request 토큰 발급', async () => {
    const { data } = await fetch.request<TokenPRequest, TokenP>('oauth2/tokenP', {
      mode: 'virtual',
      method: 'post',
      body: {
        grant_type: 'client_credentials',
        appkey: process.env.VIRTUAL_APP_KEY, 
        appsecret: process.env.VIRTUAL_APP_SECRET 
      }
    });
    expectTypeOf(data).toEqualTypeOf<TokenP>();
  });

  it.concurrent('post 토큰 발급', async () => {
    const { data } = await fetch.post<TokenPRequest, TokenP>('virtual', 'oauth2/tokenP', {
      grant_type: 'client_credentials',
      appkey: process.env.VIRTUAL_APP_KEY,
      appsecret: process.env.VIRTUAL_APP_SECRET
    });
    expectTypeOf(data).toEqualTypeOf<TokenP>();
  });

  it.concurrent('get 주식 현재가 조회', async () => {
    const { data: { access_token, token_type } } = await fetch.post<TokenPRequest, TokenP>('virtual', 'oauth2/tokenP', {
      grant_type: 'client_credentials',
      appkey: process.env.VIRTUAL_APP_KEY,
      appsecret: process.env.VIRTUAL_APP_SECRET
    });

    const { data } = await fetch.get<unknown, KisResponse<Record<string, string>>>('virtual', 'uapi/domestic-stock/v1/quotations/inquire-price', {
      headers: {
        authorization: `${token_type} ${access_token}`,
        tr_id: 'FHKST01010100',
        tr_cont: '',
        custtype: 'P'
      },
      params: {
        FID_COND_MRKT_DIV_CODE: 'J',
        FID_INPUT_ISCD: '005930'
      }
    });
    expectTypeOf(data).toEqualTypeOf<KisResponse<Record<string, string>>>();
  });
});
