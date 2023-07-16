import nodeFetch, { HeadersInit, RequestInit, Headers } from "node-fetch";
import { ERROR_CODE } from "../../../EFriendExpert/common/error/error.constant";
import { BaseError } from "../../../EFriendExpert/common/error/base.error";
import { stringify } from "qs";
import EFriend_JSON_TRID from "../constants/trid.constant";

export type Mode = 'real' | 'virtual';
export type HttpMethod = 'get' | 'post';

const BASE_URL = {
  real: 'https://openapi.koreainvestment.com:9443',
  virtual: 'https://openapivts.koreainvestment.com:29443'
} as const

const APP_KEY = {
  real: process.env.REAL_APP_KEY ?? '',
  virtual: process.env.VIRTUAL_APP_KEY ?? ''
};

const APP_SECRET = {
  real: process.env.REAL_APP_SECRET ?? '',
  virtual: process.env.VIRTUAL_APP_SECRET ?? ''
};

export type FetchOption<T = Record<string, unknown>> = {
  mode: Mode
  method: HttpMethod,
  headers?: HeadersInit
  params?: Record<string, string>
  body?: T
}

export interface FetchResponseHeader extends Headers {
  tr_id: string,
  tr_cont: '' | 'F' | 'M' | 'D' | 'E',
  gt_uid: string
}

export type FetchResponse<T> = {
  headers: FetchResponseHeader,
  data: T
};

class Fetch {  
  async get<T extends object>(mode: Mode, url: string, option: Pick<FetchOption, 'headers' | 'params'>) {
    return this.request<T>(url, {
      mode,
      method: 'get',
      ...option
    });
  }

  async post<T extends object, R extends object = T>(mode: Mode, url: string, body: any, option?: Pick<FetchOption, 'headers' | 'params'>) {
    return this.request<T, R>(url, {
      mode,
      method: 'post',
      body,
      ...option
    });
  }

  async request<T extends object, R extends object = T>(path: string, options: FetchOption<T>): Promise<FetchResponse<R>> {
    const { mode, body, params, method } = options;
    const url = `${BASE_URL[mode]}/${path}?${stringify(params)}`;
    const headers: HeadersInit = { 
      'content-type': 'application/json',
      appkey: APP_KEY[mode],
      appsecret: APP_SECRET[mode],
      ...options.headers
    };

    const requestInit: RequestInit = {
      method,
      headers,
      body: JSON.stringify(body),
    };

    try {
      const response = await nodeFetch(url, requestInit);
      const data = await response.json() as R;

      const trid = Object.values(EFriend_JSON_TRID)
        .filter(({ info }) => mode === 'real' ? info.isProduct : !info.isProduct)
        .find(({ info }) => path === info.url && method === info.method)
      
      trid?.response.body.forEach(({ code }) => {
        if (!(code in data)) {
          throw new BaseError({ 
            code: data['msg_cd'] ?? ERROR_CODE.FETCH_ERROR as ERROR_CODE, 
            message: data['msg1'] 
          });
        }
      });

      return {
        headers: response.headers as FetchResponseHeader,
        data
      };
    } catch (error) {
      if (!(error instanceof Error)) {
        throw new BaseError({ code: ERROR_CODE.FETCH_ERROR, error });
      }
      throw error;
    }
  }
}

export const fetch = new Fetch();