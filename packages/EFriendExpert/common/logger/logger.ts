'use strict'
/**
 * Logger utility
 * 
 * @file packages/EFriendExpert/common/logger/logger.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

//--- 로그 폴더 생성
import fs from 'fs';
import path from 'path';

//--- https://www.npmjs.com/package/winston
import winston, { Logform, transports, Logger as winstonLogger } from 'winston';
import winstonDaily from 'winston-daily-rotate-file';

import { Config } from '../config';

export class Logger {
    private config: Config;
    private logFolder: string;

    constructor(config: Config) {
        this.config = config;
        this.logFolder = path.join(process.cwd(), this.config.logger.folder.toString());

        this.initFolder();
    }

    private initFolder(): void {
        if (!fs.existsSync(this.logFolder)) {
            fs.mkdirSync(this.logFolder);
        }
    }

    private getFormat(): Logform.Format {
        const format: string = `YYYY-MM-DD HH:mm:ss.SSS : ${this.config.worker.id}`;
        const formats: Array<Logform.Format> = [ winston.format.timestamp({ format: format }) ];
        if (this.config.logger.useJson) {
            formats.push(winston.format.json());
        } else {
            if (this.config.logger.showFileinfo == false) {
                formats.push(winston.format(function(info: Logform.TransformableInfo) {
                    info.message = info.timestamp + ' : ' + info.message;
                    delete info.timestamp;
                    return info;
                })({}));
            } else {       
                formats.push(winston.format(function(info: Logform.TransformableInfo) {
                    let fileName: string | null = null;
                    let lineNumber: string = '';
                    let columnNumber: string = '';

                    let tmpStackArray: Array<string> | undefined = (new Error()).stack?.split('\n');
                    if ((typeof(tmpStackArray) != 'undefined') && (10 < tmpStackArray.length)) {
                        let tmpStr: string = tmpStackArray[10];
                        if ((-1 < tmpStr.indexOf('(')) && (-1 < tmpStr.indexOf(')'))) {
                            tmpStr = tmpStr.substring(tmpStr.indexOf('(') + 1, tmpStr.indexOf(')'));
                        } else {
                            tmpStr = tmpStr.replace(/    at /, '');
                        }
                        tmpStr = tmpStr.replace('file:///', '');
                        const tmpArray = tmpStr.split(':');
                        if (tmpArray.length == 3) {
                            fileName = tmpArray[0].replace(/\\/g, '/');
                            lineNumber = tmpArray[1];
                            columnNumber = tmpArray[2];
                        } else if (tmpArray.length == 4) {
                            fileName = (tmpArray[0] + ':' + tmpArray[1]).replace(/\\/g, '/');
                            lineNumber = tmpArray[2];
                            columnNumber = tmpArray[3];
                        }
                    }      

                    if (fileName != null) {
                        fileName = fileName.replace(process.cwd().replace(/\\/g, '/') + '/', '');
                        info.message = info.timestamp + ` : ${fileName} (${lineNumber}, ${columnNumber}) : ` + info.message;
                    } else {
                        info.message = info.timestamp + ' :  : ' + info.message;
                    }
                    delete info.timestamp;
                    return info;
                })({}));
            }
            formats.push(winston.format.simple());
        }
        return winston.format.combine(...formats);
    }

    private getTransports(): Array<winstonDaily | transports.ConsoleTransportInstance> {
        const transports: Array<winstonDaily | transports.ConsoleTransportInstance> = [
            new winstonDaily({
                level: this.config.logger.level, 
                filename: path.join(this.logFolder, this.config.logger.filename), 
                datePattern: "YYYYMMDD",
                zippedArchive: false,
                maxSize: this.config.logger.maxSize,
                maxFiles: this.config.logger.maxFiles,
                handleExceptions: true
            })
        ];

        if (this.config.logger.useConsole) {
            transports.push(
                new winston.transports.Console({
                    level: this.config.logger.level, 
                    // colorize: true,
                    handleExceptions: true
                })
            );
        }
        return transports;
    }

    public createLogger(): winstonLogger {
        return winston.createLogger({
            format: this.getFormat(),
            transports: this.getTransports()
        });
    }
}

export default Logger;
