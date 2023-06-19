/*
 * /src/utils/type.util.ts
 * 
 * @version 1.0.0
 * @license GNU General Public License v3.0
 * @author dalcon10028 <dalcon10280@gmail.com>
 */
import { BaseError, ERROR_CODE } from "../errors";

export type TypeofResult =
  | 'undefined'
  | 'object'
  | 'boolean'
  | 'number'
  | 'bigint'
  | 'string'
  | 'symbol'
  | 'function';

export const typeUtil = {
  parseExcelType(excelType: string): TypeofResult {
    switch (excelType) {
      case 'String':
        return 'string';
      case 'Number':
        return 'number';
      case 'Object':
        return 'object';
      default:
        throw new BaseError({ code: ERROR_CODE.EXCEL_INVALID_VALUE, message: `Invalid excel type: ${excelType}` });
    }
  }
};