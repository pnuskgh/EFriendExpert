import { describe, it, expectTypeOf } from "vitest";
import { EFriendRest } from "./efriendRest";

type TokenP = {
  access_token: string,
  access_token_token_expired: string,
  token_type: 'Bearer',
  expires_in: number
}

describe('efriendRest', () => {
  const eFriendRest = new EFriendRest();

  it.concurrent('', async () => {
    const { body } = await eFriendRest.request<TokenP>({ 
        appKey: process.env.VIRTUAL_APP_KEY, 
        appSecret: process.env.VIRTUAL_APP_SECRET,
        mode: 'virtual'
      },
      'tokenP',
      {},
      {
        grant_type: 'client_credentials',  
        appkey: process.env.VIRTUAL_APP_KEY, 
        appsecret: process.env.VIRTUAL_APP_SECRET 
      
    });
    expectTypeOf(body).toEqualTypeOf<TokenP>();
  });
});
