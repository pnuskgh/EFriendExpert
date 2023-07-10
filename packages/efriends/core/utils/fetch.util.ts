import nodeFetch, { HeadersInit, RequestInit, Headers } from "node-fetch";
import { stringify } from "qs";

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
  params?: any
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
  async get<T, R = T>(mode: Mode, url: string, option: Pick<FetchOption, 'headers' | 'params'>) {
    return this.request<T, R>(url, {
      mode,
      method: 'get',
      ...option
    });
  }

  async post<T, R = T>(mode: Mode, url: string, body: any, option?: Pick<FetchOption, 'headers' | 'params'>) {
    return this.request<T, R>(url, {
      mode,
      method: 'post',
      body,
      ...option
    });
  }

  async request<T, R = T>(path: string, options: FetchOption<T>): Promise<FetchResponse<R>> {
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

    const response = await nodeFetch(url, requestInit);
    const data = await response.json() as R;
    return {
      headers: response.headers as FetchResponseHeader,
      data
    };
  }
}

export const fetch = new Fetch();