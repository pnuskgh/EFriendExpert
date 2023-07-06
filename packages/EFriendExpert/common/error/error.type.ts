'use strict'
/**
 * Error type과 interface
 * 
 * @file packages/EFriendExpert/common/error/error.type.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author dalcon10028 <dalcon10280@gmail.com>
 */

import { ErrorObject } from "ajv";

import { ERROR_CODE } from './error.constant';

export interface BaseErrorProps {
    code: ERROR_CODE;
    message?: string;
    details?: ErrorObject[] | null;
    error?: unknown;
    data?: unknown;
}
