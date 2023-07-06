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

import winston from 'winston';

import { Config } from '../config';
import { Logger } from './logger';

export let logger: winston.Logger | Console = console;

export const loggerUtil = {
    getLogger: (config: Config | null = null): winston.Logger | Console => {
        if (config != null) {
            console.log(logger);
            if (logger === console) {
                const loggerInstance = new Logger(config);
                logger = loggerInstance.createLogger();
            }
        }
        return logger;
    }
};
