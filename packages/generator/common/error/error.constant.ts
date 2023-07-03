/*
 * /packages/generator/errors/error.constant.ts
 * 
 * @version 1.0.0
 * @license GNU General Public License v3.0
 * @author dalcon10028 <dalcon10280@gmail.com>
 */
export enum ERROR_CODE {
  EXCEL_PARSE_ERROR = 2000,
  EXCEL_SHEET_NOT_FOUND = 2001,
  EXCEL_INVALID_VALUE = 2002,
};

export const ERROR_MESSAGE: Record<ERROR_CODE, string> = {
  [ERROR_CODE.EXCEL_PARSE_ERROR]: 'excel parse error.',
  [ERROR_CODE.EXCEL_SHEET_NOT_FOUND]: 'sheet not found.',
  [ERROR_CODE.EXCEL_INVALID_VALUE]: 'invalid value.',
};