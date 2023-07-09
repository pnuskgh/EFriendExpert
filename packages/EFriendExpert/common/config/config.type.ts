'use strict'
/**
 * Config
 * 
 * @file packages/EFriendExpert/common/config/config.type.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

export interface WorkerConfig {
    id: number
}

export interface LoggerConfig {
    level: string,
    folder: string,
    filename: string,
    maxSize: number,
    maxFiles: number,
    useJson: boolean,
    useConsole: boolean,
    showFileinfo: boolean
}

export interface Config {
    worker: WorkerConfig,
    logger: LoggerConfig
}
