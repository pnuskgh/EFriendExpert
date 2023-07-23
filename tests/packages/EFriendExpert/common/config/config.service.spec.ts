'use strict'
/**
 * Config Utility
 * 
 * @file packages/EFriendExpert/common/config/config.service.spec.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { describe, beforeAll, it, expect } from 'vitest';   //--- https://vitest.dev/guide/

import { Config } from '../../../../../packages/EFriendExpert/common/config/index.js';
import { configUtil } from '../../../../../packages/EFriendExpert/common/config/config.util.js';

describe('ConfigService', () => {
    let config: Config;

    beforeAll(async () => {
        config = await configUtil.getConfig('efriend');
    })

    it.concurrent('에러 메시지 확인', async () => { 
        expect(config.logger.folder).toBe('logs');
    })
})
