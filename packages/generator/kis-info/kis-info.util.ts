import { BaseError, ERROR_CODE } from "../common/error";
import { TypeofResult } from "./kis-info.type";

export const kisInfoUtil = {
  parseExcelType(excelType: string): TypeofResult {
    switch (excelType) {
      case 'String':
        return 'string';
      case 'Number':
        return 'number';
      case 'Object':
      case 'Array':
        return 'object';
      default:
        throw new BaseError({ code: ERROR_CODE.EXCEL_INVALID_VALUE, message: `Invalid excel type: ${excelType}` });
    }
  }
};