interface ApprovalParams {
  appKey: string;
  secretKey: string;
}

interface HashKeyParams {
  appKey: string;
  secretKey: string;
}

interface TokenPParams {
  appKey: string;
  secretKey: string;
}

interface RevokePParams {
  appKey: string;
  secretKey: string;
}


export interface WebSocketTokenInfo {
  token: string;
  createdAt: Date;
}

export interface RestTokenInfo {
  accessToken: string;
  tokenType: string;
  expiresIn: number;
  createdAt: number;
}

export async function approval({ appKey, secretKey }: ApprovalParams) {
  


  return Promise.resolve('a2585daf-8c09-4587-9fce-8ab893XXXXX');
}

export async function hashkey({ appKey, secretKey }: HashKeyParams) {
  return Promise.resolve('8b84068222a49302f7ef58226d90403f62e216828f8103465f900de0e7be2f0f');
}

export async function tokenP({ appKey, secretKey }: TokenPParams) {
  return Promise.resolve({
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0b2tlbiIsImF1ZCI6ImMwNzM1NTYzLTA1MjctNDNhZS05ODRiLTJiNWI1ZWZmOWYyMyIsImlzcyI6InVub2d3IiwiZXhwIjoxNjQ5NzUxMTAwLCJpYXQiOjE2NDE5NzUxMDAsImp0aSI6IkJTZlM0QUtSSnpRVGpmdHRtdXZlenVQUTlKajc3cHZGdjBZVyJ9.Oyt_C639yUjWmRhymlszgt6jDo8fvIKkkxH1mMngunV1T15SCC4I3Xe6MXxcY23DXunzBfR1uI0KXXXXXXXXXX",
    "token_type": "Bearer",
    "expires_in": 86400
  });
}

export async function revokeP(params: RevokePParams) {
  return Promise.resolve({
    "code" : 200,
    "message" : "접근토큰 폐기에 성공하였습니다"
  });
}