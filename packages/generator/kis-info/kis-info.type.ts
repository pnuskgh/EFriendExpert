/*
 * /packages/generator/types/kis-info.type.ts
 * 
 * @version 1.0.0
 * @license GNU General Public License v3.0
 * @author dalcon10028 <dalcon10280@gmail.com>
 */

import { ExcelContent, ExcelContentBody } from "../excel/excel.type"

export type TypeofResult =
  | 'undefined'
  | 'object'
  | 'boolean'
  | 'number'
  | 'bigint'
  | 'string'
  | 'symbol'
  | 'function';

export interface KisInformationDataItem extends Omit<ExcelContentBody, 'required'> {
  type: TypeofResult;
  required: boolean;
  children?: KisInformationDataItem[];
}

export interface KisInformation {
  meta: Omit<ExcelContent, 'table'>,
  request: {
    headers: KisInformationDataItem[],
    body: KisInformationDataItem[]
  },
  response: {
    headers: KisInformationDataItem[],
    body: KisInformationDataItem[]
  }
}