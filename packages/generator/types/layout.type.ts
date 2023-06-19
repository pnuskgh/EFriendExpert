/*
 * /packages/generator/types/layout.type.ts
 * 
 * @version 1.0.0
 * @license GNU General Public License v3.0
 * @author dalcon10028 <dalcon10280@gmail.com>
 */

export type CommonRequestHeadersList = 'Accept' | 'Content-Length' | 'User-Agent' | 'Content-Encoding' | 'Authorization';

export type ContentType = 'text/html' | 'text/plain' | 'multipart/form-data' | 'application/json' | 'application/x-www-form-urlencoded' | 'application/octet-stream';

export type KisAuthHeader = 'appkey' | 'appsecret' | 'grant_type';

export type RequestHeaders = Partial<Record<KisAuthHeader, string>> & Partial<Record<CommonRequestHeadersList, string>> & { 'Content-Type': ContentType };