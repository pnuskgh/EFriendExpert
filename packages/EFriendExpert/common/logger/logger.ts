/**
 * Logger utility
 * 
 * @file packages/EFriendExpert/common/logger/logger.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import fs from 'fs';
import path from 'path';
import winston, { Logform, transports } from 'winston';
import winstonDaily from 'winston-daily-rotate-file';
import { LoggerConfig } from '../config';
import cluster from 'cluster';
import { Console } from 'console';

const config: LoggerConfig = {
    level: 'info',
    folder: 'logs',
    filename: 'efriend_%DATE%_%worker%_worker.log',
    maxSize: 100 * 1024 * 1024,
    maxFiles: 10,
    useJson: false,
    useConsole: true,
    showFileInfo: true
}

const logFolder = path.join(process.cwd(), config.folder)

if (!fs.existsSync(logFolder)) {
    fs.mkdirSync(logFolder);
}

const getFormat = (): Logform.Format => {
    const { timestamp, json } = winston.format;
    const format: string = `YYYY-MM-DD HH:mm:ss.SSS : ${cluster.worker?.id ?? 0}`;
        const formats: Array<Logform.Format> = [
            timestamp({ format: format })
        ];

        if (config.useJson) {
            formats.push(json());
        } else {
            if (!config.showFileInfo) {
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
                        const cwd: string = process.cwd().replace(/\\/g, '/') + '/';
                        if (cwd.startsWith('/')) {
                            fileName = fileName.replace(cwd.substring(1), '');
                        } else {
                            fileName = fileName.replace(cwd, '');
                        }
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

const getTransports = (): Array<winstonDaily | transports.ConsoleTransportInstance> => {
    const transports: Array<winstonDaily | transports.ConsoleTransportInstance> = [
        new winstonDaily({
            filename: path.join(config.filename), 
            datePattern: "YYYYMMDD",
            zippedArchive: false,
            maxSize: config.maxSize,
            maxFiles: config.maxFiles,
        })
    ];

    if (config.useConsole) {
        transports.push(
            new winston.transports.Console()
        );
    }
    return transports;
}

const logger = winston.createLogger({
    format: getFormat(),
    transports: getTransports()
});

export default new class extends Console {
    constructor() {
        super(process.stdout, process.stderr);
    }

    log(message: string, ...optionalParams: unknown[]): void {
        logger.log(message, optionalParams);
    }
    
    debug(message: string, ...optionalParams: unknown[]): void {
        logger.debug(message, optionalParams);
    }

    info(message: string, ...optionalParams: unknown[]): void {
        logger.info(message, optionalParams);
    } 

    error(message: string, ...optionalParams: unknown[]): void {
        logger.error(message, optionalParams);
    }
};
