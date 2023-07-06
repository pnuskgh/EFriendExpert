'use strict'
/**
 * Error Utility
 * 
 * @file packages/EFriendExpert/common/error/error.util.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author dalcon10028 <dalcon10280@gmail.com>
 */

import { ERROR_CODE, ERROR_MESSAGE } from './error.constant';

export const errorUtil = {
    getMessage: (code: ERROR_CODE): string => {
      return ERROR_MESSAGE[code];
    } 
};
