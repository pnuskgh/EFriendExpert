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

import fs from 'fs';
import path from 'path';
import moment from 'moment';

import { Config } from './config.type';
import { config as configDefault } from './config.constant';

export const configUtil = {
    getConfig: async (name: string = 'efriend'): Promise<Config> => {
        let config: Config = configDefault;
        try {
            name = process.env.serviceName || name;
            const filename: string = path.join(process.cwd(), `config_${name}_override`);
            if (!fs.existsSync(`${filename}.js`)) {
                const { ConfigService } = await import(`file:///${filename}`);
                const configService = new ConfigService();
                config = configService.getConfig();
            }
        } catch(ex) {
            console.error(ex);
        }
        config.logger.filename = `${config.logger.filename}`.replace('%DATE%', moment().format('YYYYMMDD')).replace('%worker%', `${config.worker.id}`);
        return config;
    } 
};
