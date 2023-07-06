'use strict'
/**
 * 에러 클래스
 * 
 * @file packages/EFriendExpert/common/error/base.error.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author dalcon10028 <dalcon10280@gmail.com>
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { describe, beforeAll, it, expect } from 'vitest';   //--- https://vitest.dev/

import { BaseError } from './base.error';
import { ERROR_CODE } from './error.constant';

export * from './base.error';

describe('KisInfoService', () => {
    let baseError: BaseError;

    beforeAll(async () => {
        baseError = new BaseError({ code: ERROR_CODE.EGW00001 });
    })

    it.concurrent('에러 메시지 확인', async () => { 
        expect(baseError.message).toBe('일시적 오류가 발생했습니다.');
    })
})
