import { plainToInstance } from 'class-transformer';
import fetch, { Headers } from 'node-fetch';

interface RequestOptions extends Omit<RequestInit, 'method'> {}

export class HttpClient {
  private readonly _baseUrl: string;
  private readonly _requestOptions: RequestOptions;

  constructor(path: string, options?: RequestOptions) {
    this._baseUrl = `https://apiportal.koreainvestment.com/tryitout${path}`;
    const headers = new Headers({
      'content-type': 'application/json; charset=utf-8',
    })
    this._requestOptions = {
      headers,
      ...options
    };
  }

  async get<T>(path: string, type: new (...args: any[]) => T, options?: RequestOptions): Promise<T> {
    const response = await fetch(`${this._baseUrl}${path}`, {
      ...this._requestOptions,
      ...options,
      method: 'GET',
      body: null
    });
    const data = await response.json() as Record<string, unknown>;
    return plainToInstance(type, data.output);
  }

  post<R, T>() {
    
  }

  put<R, T>() {
    
  }

  patch<R, T>() {

  }

  delete<R>() {

  }
}