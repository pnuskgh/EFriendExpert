/**
 * Logger utility
 * 
 * @file packages/EFriendExpert/common/logger/logger.type.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { Logger } from 'winston';

export interface LoggerConfig {
  level: string,
  folder: string,
  filename: string,
  maxSize: number,
  maxFiles: number,
  useJson: boolean,
  useConsole: boolean,
  showFileInfo: boolean
}

export type LOGGER_TYPE = Console | Logger;
