'use strict'
/**
 * Logger utility
 * 
 * @file packages/EFriendExpert/common/logger/logger.util.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { Logger as winstonLogger } from 'winston';

import { Config } from '../config';
import { Logger } from './logger';

export const loggerUtil = {
    getLogger: (config: Config): winstonLogger => {
        const logger = new Logger(config);
        return logger.createLogger();
    }
};
