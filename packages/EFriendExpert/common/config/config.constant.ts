'use strict'
/**
 * Config
 * 
 * @file packages/EFriendExpert/common/config/config.constant.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import cluster from 'cluster';
import { Config } from './config.type';

export const config: Config = {
    worker: {
        id: (typeof(cluster.worker) == 'undefined') ? 0:cluster.worker.id
    },
    logger: {
        level: 'info',
        folder: 'logs',
        filename: 'efriend_%DATE%_%worker%_worker.log',
        maxSize: 100 * 1024 * 1024,
        maxFiles: 10,
        useJson: false,
        useConsole: true,
        showFileinfo: true
    }
}
