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
import cluster from 'cluster';

//--- https://www.npmjs.com/package/winston
import winston from 'winston';
import winstonDaily from 'winston-daily-rotate-file';

export class Logger {
    constructor() {
        this._initFolder();

        this.useJson = config.logger.useJson;
        this.useConsole = config.logger.useConsole

        this.level = config.logger.level;
        //--- cluster와 pm2 환경에서 실행되는 instance의 수만큼 1씩 증가하며 로그 파일이 생성 된다. (0: Master in cluster, 1, 2, ...)
        this.filename = config.logger.filename.replace('%worker%', appl.worker.id);
        this.maxSize  = config.logger.maxSize;
        this.maxFiles = config.logger.maxFiles;
    }

    get config {
        return {
            
        }
    }

    _initFolder() {
        //--- 로그 폴더가 없는 경우 로그 폴더를 생성 한다.
        this.logFolder = utils.getPath(config.logger.folder);
        if (!fs.existsSync(this.logFolder)) {
            fs.mkdirSync(this.logFolder);
        }
    }

    getFormat() {
        const format = `YYYY-MM-DD HH:mm:ss.SSS : ${appl.worker.id}`;
        const formats = [ winston.format.timestamp({ format: format }) ];
        if (this.useJson) {
            formats.push(winston.format.json());
        } else {
            if (config.logger.showFileinfo == false) {
                formats.push(winston.format(function(info, opts) {
                    info.message = info.timestamp + ' : ' + info.message;
                    delete info.timestamp;
                    return info;
                })({}));
            } else {       
                formats.push(winston.format(function(info, opts) {
                    let fileName = null;
                    let lineNumber = null;
                    let columnNumber = null;

                    let tmpStackArray = new Error().stack.split('\n');
                    if (10 < tmpStackArray.length) {
                        let tmpStr = tmpStackArray[10];
                        if ((-1 < tmpStr.indexOf('(')) && (-1 < tmpStr.indexOf(')'))) {
                            //--- "    at Object.<anonymous> (/work/appl/obcon/modules/modules.js:62:8)"
                            tmpStr = tmpStr.substring(tmpStr.indexOf('(') + 1, tmpStr.indexOf(')'));
                        } else {
                            //--- "    at /work/appl/obcon/modules/http_app.js:244:20"
                            tmpStr = tmpStr.replace(/    at /, '');
                        }
                        tmpStr = tmpStr.replace('file:///', '');
                        const tmpArray = tmpStr.split(':');
                        if (tmpArray.length == 3) {
                            fileName = tmpArray[0];
                            lineNumber = tmpArray[1];
                            columnNumber = tmpArray[2];
                        } else if (tmpArray.length == 4) {
                            fileName = tmpArray[0] + ':' + tmpArray[1];
                            lineNumber = tmpArray[2];
                            columnNumber = tmpArray[3];
                        }
                        fileName = fileName.replace(/\\/g, '/')
                                           .replace(/\/work\/appl\/obcon\//, '')
                                           .replace(/C:\/work\/obcon\/obcon\//, '')
                                           .replace(/C:\/work\/OBCon_Service\//, '')
                                           .replace(/Users\/ghkim\/work\/OBCon_Service\//, '');
                    }      

                    if (fileName == null) {
                        info.message = info.timestamp + ' :  : ' + info.message;
                    } else {
                        info.message = info.timestamp + ` : ${fileName} (${lineNumber}, ${columnNumber}) : ` + info.message;
                    }
                    delete info.timestamp;
                    return info;
                })({}));
            }
            formats.push(winston.format.simple());
        }
        return winston.format.combine(...formats);
    }

    getTransports() {
        const transports = [
            new winstonDaily({
                level: this.level, 
                filename: path.join(this.logFolder, this.filename), 
                datePattern: "YYYYMMDD",
                zippedArchive: false,
                maxSize: this.maxSize,
                maxFiles: this.maxFiles,
                handleExceptions: true
            })
        ];

        if (this.useConsole) {
            transports.push(
                new winston.transports.Console({
                    level: this.level, 
                    // colorize: true,
                    handleExceptions: true
                })
            );
        }
        return transports;
    }

    createLogger() {
        const log = winston.createLogger({
            format: this.getFormat(),
            transports: this.getTransports()
        });
        log._setLevel = function(level) {
            log._readableState.pipes.forEach(pipe => { pipe.level = level; });
        };
        log.setLevel = function(level) {
            if (cluster.isMaster == false) {
                process.send({ type: 'setLoggerLevel', level: level });
            }
        };
        return log;
    }
}

export default Logger;
