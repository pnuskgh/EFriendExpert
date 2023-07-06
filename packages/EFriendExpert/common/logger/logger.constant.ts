'use strict'
/**
 * Logger utility
 * 
 * @file packages/EFriendExpert/common/logger/logger.constant.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

export const loggerConfig: Record<string, string | number | boolean> = {
    level: 'info',
    folder: 'logs',
    filename: 'efriend_%DATE%_%worker%_worker.log',
    maxSize: 100 * 1024 * 1024,
    maxFiles: 10,
    useJson: false,
    useConsole: true,
    showFileinfo: true
};
