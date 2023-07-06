'use strict'
/**
 * Config
 * 
 * @file packages/EFriendExpert/common/config/config.service.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { Config } from './config.type';
import { config as configDefault } from './config.constant';

export class ConfigService {
    public getConfig(): Config {
        return configDefault;
    }
}

export default ConfigService;
