'use strict'
/**
 * Config
 * 
 * @file packages/EFriendExpert/common/config/config.util.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import moment from 'moment';

import { config } from './config.constant';
import { Config } from './config.type';
import { ConfigService } from './config.service';
import { importUtil } from '../utils';

export const configUtil = {
    getConfig: async (name: string = 'efriend'): Promise<Config> => {
        let customConfig: Config = config;
        try {
            name = process.env.serviceName || name;
            const customConfigService = await importUtil.import<ConfigService>(`config_${name}_override`);
            if (customConfigService != null) {
                customConfig = customConfigService.getConfig();
            }
        } catch(ex) {
            console.error(ex);
        }
        config.logger.filename = `${config.logger.filename}`.replace('%DATE%', moment().format('YYYYMMDD')).replace('%worker%', `${config.worker.id}`);
        return customConfig;
    } 
};
