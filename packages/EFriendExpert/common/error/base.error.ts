'use strict'
/**
 * 에러 클래스
 * 
 * @file packages/EFriendExpert/common/error/base.error.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author dalcon10028 <dalcon10280@gmail.com>
 */

import { ErrorObject } from "ajv";

import { ERROR_CODE } from './error.constant';
import { BaseErrorProps } from './error.type';
import { errorUtil } from './error.util';

export class BaseError extends Error {
    public code: ERROR_CODE;
    public message: string;
    public data?: unknown;
    public details?: ErrorObject[] | null;
    public trace?: string | unknown;

    constructor({ code, message, error, data, details }: BaseErrorProps) {
        super(message);
        
        this.code = code;
        this.message = message ?? errorUtil.getMessage(code);
        this.trace = error instanceof Error ? error?.stack : error;
        this.data = data;
        this.details = details;
    }
}
