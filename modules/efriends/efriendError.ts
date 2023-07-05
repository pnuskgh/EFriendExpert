'use strict'
/**
 * 에러 클래스
 * 
 * @file modules/efriends/efriendError.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author dalcon10028 <dalcon10280@gmail.com>
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

/**
 * @todo 향후 이 파일을 삭제하고 이연권님이 작성한 BaseError로 대체할 것
 */

import { ErrorObject } from "ajv";

export enum ERROR_CODE {
    UNKNOWN_ERROR = 2000,
};
  
export const ERROR_MESSAGE: Record<ERROR_CODE, string> = {
    [ERROR_CODE.UNKNOWN_ERROR]: 'Unknown error.',
};

export const errorUtil = {
    getMessage: (code: ERROR_CODE): string => {
      return ERROR_MESSAGE[code];
    } 
};

interface BaseErrorProps {
    code: ERROR_CODE;
    message?: string;
    details?: ErrorObject[] | null;
    error?: unknown;
    data?: unknown;
}

export class BaseError extends Error {
    code: ERROR_CODE;
    message: string;
    data?: unknown;
    details?: ErrorObject[] | null;
    trace?: string | unknown;

    constructor({ code, message, error, data, details }: BaseErrorProps) {
        super(message);
        this.code = code;
        this.message = message ?? errorUtil.getMessage(code);
        this.trace = error instanceof Error ? error?.stack : error;
        this.data = data;
        this.details = details;
    }
}

export class EFriendError extends BaseError {
}

export default EFriendError;
