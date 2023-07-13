'use strict'
/**
 * Config Utility
 * 
 * @file packages/EFriendExpert/common/config/config.type.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { LoggerConfig } from '../logger/logger.type';

export interface WorkerConfig {
    id: number
}

export interface Config {
    worker: WorkerConfig,
    logger: LoggerConfig
}
