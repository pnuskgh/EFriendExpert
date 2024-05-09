'use strict'
/**
 * 이베스트투자증권 Web Service API
 * 
 * @file packages/EFriendExpert/ebest/ebestWs.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2024, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

// import WebSocket from 'ws';                                 //--- https://www.npmjs.com/package/ws
// import moment, { Moment } from 'moment';                    //--- 'YYYY-MM-DD HH:mm:ss.SSS ZZ'
// import crypto, { Cipher, Decipher } from 'node:crypto';

// import { BaseError, ERROR_CODE } from '../common/error/index.js';
// import { Secret, EBestWsConfig, AJAX_ERROR, LIMIT, WS_KEY, WS_BODIES, WS_BODY, WS_BODY_FIELD, TR_TYPE, WEBSOCKET_HANDLER } from './ebest.type.js';
// import EBest_JSON_TRID, { METADATA, TRID_FIELD } from './ebest.constant.js';
// // import { limit } from './ebest.js';

//--- To-Do: Reserved. 구현과 테스트가 필요 하다.
export class EBestWs {
    // private readonly logger: Console;
    // private secret: Secret;
    // private ws: WebSocket | null;
    // private isOpen: boolean;
    // private wsInterval: ReturnType<typeof setTimeout> | null;
    // private wsIntervalTime: number;
    // private wsKeys: Record<string, WS_KEY>;
    // private isKeepAlive: boolean = true;
    // private wsHandlers: Record<string, Array<WEBSOCKET_HANDLER>>;

    // constructor({ secret, logger }: EBestWsConfig) {
    //     this.logger = logger ?? console;
    //     this.secret = secret;                               //--- Secret

    //     this.ws = null;                                     //--- Web Socket
    //     this.isOpen = false;                                //--- true. Web Socket이 동작중
    //     this.wsInterval = null;                             //--- 주기적으로 Web Socket(this.ws)이 살아 있는지 확인 한다.
    //     this.wsIntervalTime = 60 * 1000;                    //--- Web Socket(this.ws)이 살아 있는지 확인하는 주기
    //     this.wsKeys = {};                                   //--- 복호화용 AES256 IV(Initialize Vector)와 Key

    //     this.wsHandlers = {
    //         // 'init': [],                                     //--- Deprecated : ~ 2023.12.31, func(ws: EBestWs(this), secret: Secret(this.secret))
    //         'message': [],                                  //--- func(trid: string, header: any | null, body: any | null, _data: any, _isBinary: boolean = false)

    //         'open': [ 
    //             { name: 'updateSession', handler: this._onOpen_1.bind(this), isInternal: true }, 
    //             { name: 'updateApi', handler: this._onOpen_2.bind(this), isInternal: true } 
    //         ],
    //         'close': [ 
    //             { name: 'updateSession', handler: this._onClose_1.bind(this), isInternal: true },
    //             { name: 'initialize', handler: this._onClose_2.bind(this), isInternal: true }
    //         ]
    //     };
    // }

    // /**
    //  * @returns {Secret} secret
    //  */
    // public getSecret(): Secret {
    //     return this.secret;
    // }

    // /**
    //  * @param {Secret} secret 
    //  */
    // public setSecret(secret: Secret): void {
    //     this.secret = secret;
    // }

    // // public length(event: string): number {
    // //     return this.wsHandlers[event].length;
    // // }

    // // public push(event: string, handler: WEBSOCKET_HANDLER): void {
    // //     this.wsHandlers[event].push(handler);
    // // }

    // // public shift(event: string): WEBSOCKET_HANDLER | undefined {
    // //     return this.wsHandlers[event].shift();
    // // }

    // public getWebSocketHandlers(): Record<string, Array<WEBSOCKET_HANDLER>> {
    //     return this.wsHandlers;
    // }

    // public setWebSocketHandlers(wsHandlers: Record<string, Array<WEBSOCKET_HANDLER>>): void {
    //     this.wsHandlers = wsHandlers;
    // }

    // public addWebSocketHandler(event: string, name: string, handler: Function, isInternal: boolean = false): void {
    //     this.wsHandlers[event].push({ name: name, handler: handler, isInternal: isInternal });
    // }

    // public delWebSocketHandler(event: string, name: string): void {
    //     this.wsHandlers[event] = this.wsHandlers[event].filter((wsHandler) => wsHandler.name != name);
    // }

    // // /**
    // //  * Deprecated : ~ 2023.12.31
    // //  * @param {function} handler                            onMessage() 함수에서 handler로 호출할 함수 등록
    // //  */
    // // public addHandler(handler: WEBSOCKET_HANDLER): void {
    // //     this.addWebSocketHandler('onMessage', handler.name, handler.handler);
    // // }

    // // /**
    // //  * Deprecated : ~ 2023.12.31
    // //  * @param {function} handler                            initialize() 함수에서 handler로 호출할 함수 등록
    // //  */
    // // public addInitHandler(handler: WEBSOCKET_HANDLER): void {
    // //     this.addWebSocketHandler('init', handler.name, handler.handler);
    // // }

    // /**
    //  * 이베스트투자증권 Web Socket을 초기화 한다.
    //  * 
    //  * @returns {boolean}
    //  */
    // public async initialize(): Promise<boolean> {
    //     try {
    //         if (this.isKeepAlive == false) {
    //             return false;
    //         }

    //         if (this.ws != null) {
    //             return true;
    //         }

    //         // const wsHandlers = this.wsHandlers['init'];
    //         // for (let idx: number = 0; idx < wsHandlers.length; idx++) {
    //         //     await wsHandlers[idx].handler(this, this.secret);
    //         // }

    //         if (this.secret.isActual == false) {
    //             this.logger.error('Error: Web Socket은 실전투자만 사용 가능 합니다.');
    //             return false;
    //         }

    //         const trid: string = 'H0STCNT0';
    //         const metadata: METADATA = EBest_JSON_TRID[`${trid}_실전`];

    //         this.isOpen = false;

    //         this.ws = new WebSocket(metadata.info.domain, { perMessageDeflate: false });
    //         this.ws.on('open', this.onOpen.bind(this));
    //         this.ws.on('message', this.onMessage.bind(this));
    //         this.ws.on('close', this.onClose.bind(this));
    //         this.ws.on('error', this.onError.bind(this));
    //         this.ws.on('upgrade', this.onUpgrade.bind(this));
    //         this.ws.on('ping', this.onPing.bind(this));
    //         this.ws.on('pong', this.onPong.bind(this));
    //         this.ws.on('unexpected-response', this.onUnexpectedResponse.bind(this));

    //         // this.ws.on('timeout', function() {});
    //         // this.ws.on('response', function(res: http.IncomingMessage) {});
    //         // this.ws.on('upgrade', function(res: http.IncomingMessage, socket: net.Socket, head: Buffer) {});
    //         // this.ws.on('unexpected-response', function(req: any, res: http.IncomingMessage) {});

    //         //--- 최대 10초간 접속 대기
    //         for (let idx: number = 0; idx < 100; idx++) {
    //             if (this.isOpen) {
    //                 return true;
    //             }
    //             // await limit.sleep(100);
    //         }

    //         if (this.isOpen == false) {
    //             this.ws = null;
    //         }
    //         return this.isOpen;
    //     } catch(ex) {
    //         console.error(ex);
    //         throw ex;
    //     }
    // }

    // /**
    //  * Web Socket에서 open event 처리
    //  */
    // private async onOpen() {
    //     try {
    //         const wsHandlers = this.wsHandlers['open'];
    //         for (let idx = 0; idx < wsHandlers.length; idx++) {
    //             await wsHandlers[idx].handler();
    //         }
    //     } catch(ex) {
    //         console.error('Exception onOpen', ex);
    //     }
    // }

    // private async _onOpen_1() {
    //     try {
    //         this.logger.info('WebSocket :: open');
    //         this.isOpen = true;

    //         // if (limit.updateSession(this.secret.userid, 1) == false) {
    //         //     this.logger.error(`${this.secret.userid} Web Socket session limit is over`);
    //         // }
    //     } catch(ex) {
    //         console.error('WebSocket onOpen error', ex);
    //     }
    // }

    // private async sleep(miliseconds: number) {
    //     const promise = new Promise(function(resolve, _reject) {
    //         setTimeout(function() {
    //             resolve({});
    //         }, miliseconds);
    //     });
    //     await promise;
    // }    

    // private async _onOpen_2() {
    //     try {
    //         //--- 저장된 실시간 거래와 모니터링 설정 재등록
    //         // const limitSaved: LIMIT = limit.getLimit();
    //         // for (const item of limitSaved.account[this.secret.account].ws_api.notifications) {
    //         //     await this.webSocket(item.tr_id, TR_TYPE.registration, item.tr_key);
    //         //     //--- https://apiportal.koreainvestment.com/community/10000000-0000-0011-0000-000000000003
    //         //     await this.sleep(500);
    //         // }
    //         // for (const item of limitSaved.account[this.secret.account].ws_api.registrations) {
    //         //     await this.webSocket(item.tr_id, TR_TYPE.registration, item.tr_key);
    //         //     //--- https://apiportal.koreainvestment.com/community/10000000-0000-0011-0000-000000000003
    //         //     await this.sleep(500);
    //         // }
    //     } catch(ex) {
    //         console.error('WebSocket onOpen error', ex);
    //     }
    // }

    // /**
    //  * Web Socket에서 message event 처리
    //  * 
    //  * @param {any} data                                    Buffer | ArrayBuffer | Buffer[]
    //  * @param {boolean} isBinary 
    //  * @returns {void}
    //  */
    // private async onMessage(data: any, isBinary: boolean = false) {
    //     try {
    //         const _typeof: Function = (param) => Object.prototype.toString.call(param).replace(/\[object /g, '').replace(/\]/g, '').toLowerCase();

    //         if ((_typeof(data) == 'uint8array') && (isBinary == false)) {
    //             data = data.toString();
    //         }

    //         if (_typeof(data) == 'string') {
    //             if (data.indexOf('PINGPONG') == -1) {
    //                 this.logger.info('WebSocket :: message', data, isBinary);
    //             }

    //             if ((data.startsWith('0')) ||                                       //--- 0. record로 평문을 받음
    //                 (data.startsWith('1'))) {                                       //--- 1. record로 암호문을 받음
    //                 const tmpArr: Array<string> = data.split('|');
    //                 const isEncrypt: string = tmpArr[0];                            //--- 암호화 여부 : 0. record로 평문을 받음, 1. record로 암호문을 받음
    //                 const tr_id: string = tmpArr[1];                                //--- TR ID
    //                 const count: number = parseInt(tmpArr[2]);                      //--- 데이터 코드
    //                 let record: string = tmpArr[3];                                 //--- 응답 데이터

    //                 if (isEncrypt == '1') {                                         //--- 1. record로 암호문을 받음
    //                     if ((typeof(this.wsKeys[tr_id]) == 'undefined') ||
    //                         (typeof(this.wsKeys[tr_id].iv) == 'undefined') ||      //--- 실시간 결과 복호화에 필요한 AES256 IV (Initialize Vector)
    //                         (typeof(this.wsKeys[tr_id].key) == 'undefined')) {     //--- 실시간 결과 복호화에 필요한 AES256 Key
    //                         console.error(`WebSocket :: Error - 암복호화 키가 없음, tr_id : ${tr_id}`);
    //                         return;
    //                     }
    //                     record = this.decrypt(record, this.wsKeys[tr_id].key, this.wsKeys[tr_id].iv);
    //                 }

    //                 const metadata: METADATA = EBest_JSON_TRID[`${tr_id.toUpperCase()}_실전`] ?? null;
    //                 if (metadata == null) {
    //                     console.error(`WebSocket: ${tr_id} metadata is not exist.`);
    //                     throw new BaseError({ code: ERROR_CODE.REQUIRED, data: `${tr_id} metadata is not exist.` });
    //                 }
        
    //                 if (metadata.info.domain.startsWith('ws') == false) {
    //                     console.error(`WebSocket: ${tr_id} trid is not supported.`)
    //                     throw new BaseError({ code: ERROR_CODE.REQUIRED, data: `${tr_id} trid is not supported.` });
    //                 }   

    //                 const json: WS_BODIES = [];

    //                 let pos: number = 0;
    //                 const fields = record.split('^');
    //                 for (let idx: number = 0; idx < count; idx++) {
    //                     const item: WS_BODY = {};

    //                     for (const field of metadata.response.body) {
    //                         let value: WS_BODY_FIELD = (typeof(fields[pos]) == 'undefined') ? null:fields[pos];
    //                         switch(field.type) {
    //                         case 'object':
    //                         case 'array':
    //                             console.error(`Not allowed field type: ${field.type}`);
    //                             break;
    //                         case 'number':
    //                             if (value != null) {
    //                                 value = (value == '')  ? 0:parseInt(value);
    //                             }
    //                             break;
    //                         case 'string':
    //                         default:
    //                             break;
    //                         }
                            
    //                         item[field.code] = value;
    //                         pos = pos + 1;
    //                     }
    //                     json.push(item);
    //                 }

    //                 // this.checkData(trid, metadata.response.header, null);
    //                 // this.compareWithMeta(metadata.response.header, null, tr_id);
    //                 this.checkResponsebody(tr_id, metadata.response.body, json);

    //                 const wsHandlers = this.wsHandlers['message'];
    //                 for (let idx: number = 0; idx < wsHandlers.length; idx++) {
    //                     await wsHandlers[idx].handler(tr_id, null, json, data, isBinary);
    //                 }
    //             } else {
    //                 data = data.trim();
    //                 if ((data.startsWith('{') == false) || (data.endsWith('}') == false)) {
    //                     console.error(`WebSocket :: Error - data is not json object - ${data}`);
    //                     return;
    //                 }
    //                 const json: any = JSON.parse(data);
    //                 if (typeof(json.header.tr_id) == 'undefined') {
    //                     console.error(`WebSocket :: Error - 알려지지 않은 데이터 tr_id - ${json.header.tr_id}`);
    //                     return;
    //                 }

    //                 if (json.header.tr_id == 'PINGPONG') {
    //                     //--- 100초 이내에 응답이 없으면 세션 종료됨
    //                     //--- {"header":{"tr_id":"PINGPONG","datetime":"20231004160455"}}
    //                     this.ws.send(data);
    //                     return;
    //                 }

    //                 //--- json.header: tr_id, tr_key, encrypt
    //                 //--- 오류 코드는 common/error/error.coinstant.ts 파일 참조
    //                 // console.log(`WebSocket ::     header`, json.header);
    //                 // console.log(json, 'header', 'tr_id');                         //--- 거래ID
    //                 // console.log(json, 'header', 'tr_key');                        //--- 구분값 (종목코드)
    //                 // console.log(json, 'header', 'encrypt');                       //--- Y. 암호문, N. 평문
    //                 // console.log(json, 'header', 'datetime');                      //--- 
    //                 if (typeof(json.body) != 'undefined') {
    //                     // console.log(`WebSocket ::     body`, json.body);
    //                     // console.log(json, 'body', 'rt_cd');                       //--- 응답 코드
    //                     // console.log(json, 'body', 'msg_cd');                      //--- 응답 메시지 코드
    //                     // console.log(json, 'body', 'msg1');                        //--- 응답 메시지
    //                     // console.log(json, 'body', 'output');                      //--- 응답 결과

    //                     //--- xx header에 tr_id가 없으면 Web Socket 요청에 대한 응답으로 해석하여 wsKeys를 저장 한다.
    //                     if (typeof(json.body.output) != 'undefined') {
    //                         //--- json.body: rt_cd, msg_cd, msg1, output: { iv: '50a65578c4f7500f', key: 'molrrntztvzothjqkzsitawgikersupf' }
    //                         //--- json.body.output 필드가 있으면 wsKeys (iv, key)로 저장 한다.
    //                         this.wsKeys[json.header.tr_id] = json.body.output;
    //                         return;
    //                     }
    //                     // if (json.body.rt_cd != '0') {
    //                     //     console.error(`WebSocket :: Error - ${json.body.msg_cd}, ${json.body.msg1}`);
    //                     //     return;
    //                     // }
    //                 }

    //                 const wsHandlers = this.wsHandlers['message'];
    //                 for (let idx: number = 0; idx < wsHandlers.length; idx++) {
    //                     await wsHandlers[idx].handler(json.header.tr_id, json.header ?? null, json.body ?? null, data, isBinary);
    //                 }
    //             }
    //         } else {
    //             console.error(`WebSocket :: Error - data type is not string ${_typeof(data)} ${data} ${isBinary}`);
    //         }
    //     } catch(ex) {
    //         console.error('Exception onMessage', ex);
    //     }
    // }

    // /**
    //  * Response data의 값을 검사 한다.
    //  * 
    //  * @param {string} trid                                 트랜잭션 ID
    //  * @param {Array<TRID_FIELD>} fields                    필드 목록
    //  * @param {any} data                                    검사할 데이터 객체
    //  * @throws {any}
    //  */
    // private checkResponsebody(trid: string, fields: Array<TRID_FIELD> | undefined, data: any): void {
    //     if (Array.isArray(data)) {
    //         for (const item of data) {
    //             this.checkResponsebody(trid, fields, item);
    //         }
    //         return;
    //     }

    //     if (typeof(fields) != 'undefined') {
    //         fields.forEach(function(field) {
    //             if ([ 'array', 'object' ].includes(field.type)) {
    //                 if (Array.isArray(data[field.code])) {
    //                     data[field.code].forEach(function(dataItem) {
    //                         this.checkResponsebody(trid, field.fields, dataItem);
    //                     }.bind(this));
    //                 } else {
    //                     this.checkResponsebody(trid, field.fields, data[field.code]);
    //                 }
    //             } else {
    //                 this.checkField(field, data, trid, false);
    //             }
    //         }.bind(this));   
    //     }     
    // }    

    // /**
    //  * 필드의 값을 검사 한다.
    //  * 
    //  * @param {TRID_FIELD} field                                필드 정보
    //  * @param {any} data                                field의 값을 포함하는 object
    //  * @param {string} trid                                     tr_id
    //  * @param {boolean} allowException                          true. Exception 허용
    //  * @throws {any}
    //  */
    // public checkField(field: TRID_FIELD, data: any, trid: string, allowException: boolean = true): void {
    //     try {
    //         const fieldInfo: string = `${trid}: ${field.code}(${field.name})`;
            
    //         if ((typeof(data[field.code]) == 'undefined') && (field.required)) {
    //             throw new BaseError({ code: ERROR_CODE.REQUIRED, data: fieldInfo });
    //         }

    //         if ((typeof(data.custtype) != 'undefined') && (data.custtype == 'B')) {
    //             const required: boolean = [ 'personalseckey', 'seq_no', 'phone_number', 'ip_addr', 'gt_uid' ].includes(field.code);
    //             if ((typeof(data[field.code]) == 'undefined') && required) {
    //                 throw new BaseError({ code: ERROR_CODE.REQUIRED, data: fieldInfo });
    //             }
    //         }

    //         if (typeof(data[field.code]) != 'undefined') {
    //             if (typeof(field.enum) != 'undefined') {
    //                 const isExist: boolean = field.enum.reduce((prev, curr) => {
    //                     return (prev || (curr.code == data[field.code]));
    //                 }, false);

    //                 if (isExist == false) {
    //                     this.logger.info(JSON.stringify(field.enum));
    //                     throw new BaseError({ code: ERROR_CODE.NOTALLOWED, data: `${fieldInfo}, value - ${data[field.code]}` });
    //                 }
    //             }

    //             switch (field.type) {
    //             case 'string':
    //                 if ([ 'authorization' ].includes(field.code) == false) {
    //                     if (field.length < data[field.code].length) {
    //                         throw new BaseError({ code: ERROR_CODE.FIELDERROR, data: `${fieldInfo}, length - ${data[field.code].length}` });
    //                     }
    //                 }
    //                 break;
    //             case 'number':
    //                 // this.logger.info(`${trid}, ${field.code}, ${field.type} is number`);
    //                 break;
    //             default:
    //                 this.logger.error(`${trid} ---------- field type : ${field.code}, ${field.type}`);
    //                 break;
    //             }
    //         }
    //     } catch(ex) {
    //         if (allowException) {
    //             throw ex;
    //         } else {
    //             if (ex instanceof BaseError) {
    //                 this.logger.info(`---------- field manage, ${trid}: ${ex.code} - ${ex.message}, ${ex.data}`);
    //             } else {
    //                 this.logger.info(`---------- field manage, ${trid}:, ${JSON.stringify(ex)}`);
    //             }
    //         }
    //     }        
    // }

    // /**
    //  * Web Socket에서 close event 처리
    //  * 
    //  * @param {number} code 
    //  * @param {Buffer} reason 
    //  */
    // private async onClose(code: number, reason: Buffer) {
    //     try {
    //         const wsHandlers = this.wsHandlers['close'];
    //         for (let idx = 0; idx < wsHandlers.length; idx++) {
    //             await wsHandlers[idx].handler(code, reason);
    //         }
    //     } catch(ex) {
    //         console.error('Exception onClose', ex);
    //     }
    // }

    // private _onClose_1(code: number, reason: Buffer): void {
    //     try {
    //         this.logger.info(`WebSocket :: close, ${code}, ${reason.toString()}`);

    //         this.isOpen = false;
    //         // limit.updateSession(this.secret.userid, -1);

    //         this.ws = null;
    //     } catch(ex) {
    //         console.error('WebSocket onClose error', ex);
    //     }
    // }

    // private _onClose_2(_code: number, _reason: Buffer): void {
    //     try {
    //         setTimeout(function() {
    //             this.initialize();
    //         }.bind(this), 60 * 1000);
    //     } catch(ex) {
    //         console.error('WebSocket onClose error', ex);
    //     }
    // }

    // /**
    //  * Web Socket에서 error event 처리
    //  * 
    //  * @param {Error} err 
    //  */
    // private onError(err: Error): void {
    //     console.error(`WebSocket :: error ${JSON.stringify(err)}`);
    // }

    // /**
    //  * Web Socket에서 upgrade event 처리
    //  * 
    //  * @param {any} res 
    //  */
    // private onUpgrade(res: any): void {
    //     //--- 101, Switching Protocols
    //     this.logger.info(`WebSocket :: upgrade ${JSON.stringify(res.headers)}`);
    //     this.logger.info(`WebSocket ::     status:, ${res.statusCode}, ${res.statusMessage}`);
    // }

    // /**
    //  * Web Socket에서 ping event 처리
    //  * 
    //  * @param {Buffer} data 
    //  */
    // private onPing(data: Buffer): void {
    //     this.logger.info(`WebSocket :: ping ${data.toString()}`);
    // }

    // /**
    //  * Web Socket에서 pong event 처리
    //  * 
    //  * @param {Buffer} data 
    //  */
    // private onPong(data: Buffer): void {
    //     this.logger.info(`WebSocket :: pong ${data.toString()}`);
    // }

    // /**
    //  * Web Socket에서 unexpected-response event 처리
    //  * 
    //  * @param {unknown} req 
    //  * @param {unknown} res 
    //  */
    // private onUnexpectedResponse(req: unknown, res: unknown): void {
    //     console.error('WebSocket :: unexpected-response', req, res);
    // }

    // /**
    //  * Web Socket의 상태를 확인 한다.
    //  * 
    //  * @returns {Null}
    //  */
    // private checkAlive(): void {
    //     if (this.wsInterval == null) {
    //         this.wsInterval = setInterval(async function() {
    //             try {
    //                 // if (this.isOperatingTime().code == 0) {
    //                     if (this.ws == null) {
    //                         await this.initialize();
    //                         return;
    //                     }
    //                     this.logger.info(`WebSocket :: ${moment().format('YYYY.MM.DD HH:mm:ss')}, ${this.ws.readyState} (0. 연결중, 1. 연결, 2. 종료중, 3. 종료)`);

    //                     //--- Protocol에 정의된 PING을 보내면 알수 없는 tr_id를 받았다는 오류 메시지가 오고 연결이 종료 된다.
    //                     // this.ws.ping(JSON.stringify(msg));

    //                     //--- PINGPONG를 보내면 원래 오던 PINGPONG이 오지 않고 10초 후에 PINGPONG이 다시 온다.
    //                     // const msg = { header: { tr_id: "PINGPONG", datetime: moment().format('YYYYMMDDHHmmss') } };
    //                     // this.ws.send(JSON.stringify(msg));

    //                     switch (this.ws.readyState) {
    //                     case 0:                                 //--- 0. CONNECTING, 연결중
    //                         break;
    //                     case 1:                                 //--- 1. OPEN, 연결
    //                         //--- To-Do: 실시간 Web Socket 메시지 처리가 끊어졌는지 확인이 필요 한다. 끊어진 경우 재설정
    //                         break;
    //                     case 2:                                 //--- 2. CLOSING, 종료중
    //                     case 3:                                 //--- 3. CLOSED, 종료
    //                     default:
    //                         this.logger.error(`WebSocket :: Restart Web Socket.`);
    //                         this.ws = null;
    //                         // await this.initialize();
    //                         break;
    //                     }
    //                 // }
    //             } catch(error) {
    //                 this.logger.error(JSON.stringify(error));
    //             }
    //         }.bind(this), this.wsIntervalTime);
    //     }
    // }

    // /**
    //  * WebSocket 설정
    //  * 
    //  * @param {string} trid             거래 아이디
    //  * @param {TR_TYPE} tr_type         거래 타입
    //  * @param {string} tr_key           종목코드 또는 HTS ID
    //  * @returns {boolean}               처리 결과
    //  */
    // public async webSocket(trid: string, tr_type: TR_TYPE, tr_key: string): Promise<boolean> {
    //     try {
    //         const metadata: METADATA = EBest_JSON_TRID[`${trid}_${(this.secret.isActual) ? '실전':'모의'}`] ?? null;
    //         if (metadata == null) {
    //             throw new BaseError({ code: ERROR_CODE.REQUIRED, data: `${trid} (${this.secret.isActual}) metadata is not exist.` });
    //         }

    //         if (metadata.info.domain.startsWith('ws') == false) {
    //             throw new BaseError({ code: ERROR_CODE.NOTALLOWED, data: `${trid} trid is not supported.` });
    //         }            
    
    //         await this.initialize();
    //         const header: any = {
    //             "content-type": 'application/json; charset=utf-8',
    //             custtype: this.secret.custtype,             //--- 고객 타입 : P. 개인, B. 법인
    //             tr_type: TR_TYPE[tr_type]                   //--- 거래 타입 : 1. 등록, 2. 해제
    //         };
    //         if ((this.secret.approval_key == null) || (typeof(this.secret.approval_key) == 'undefined')) {
    //             header.appkey = this.secret.appkey || this.secret.appKey;
    //             header.appsecret = this.secret.appsecret || this.secret.appSecret;
    //         } else {
    //             header.approval_key = this.secret.approval_key;
    //         }

    //         const body: any = {
    //             input: {
    //                 tr_id: trid,                           //--- 거래 아이디
    //                 tr_key: tr_key                         //--- 종목코드. 주식체결가/호가, hts_id. 주식체결통보
    //             }
    //         };
    //         const data = JSON.stringify({ header: header, body: body });
    //         this.logger.info(`WebSocket :: send - ${data}`)
    //         this.ws.send(data);
    //         // WebSocket ::     header { tr_id: 'H0STCNT0', tr_key: '015760', encrypt: 'N' }
    //         // WebSocket ::     body {
    //         //   rt_cd: '9',
    //         //   msg_cd: 'OPSP0009',                        https://apiportal.koreainvestment.com/community/10000000-0000-0011-0000-000000000003
    //         //   msg1: 'SUBSCRIBE ERROR : mci send failed'
    //         // }

    //         //--- To-Do: limit 초과시 오류 처리를 추가할 것
    //         // limit.updateWsApi(this.secret.account, trid, TR_TYPE[tr_type], tr_key);

    //         this.checkAlive();
    //         return true;
    //     } catch(error) {
    //         this.logger.error(`WebSocket :: ${JSON.stringify(error)}`);
    //         return false;
    //     }
    // } 

    // /**
    //  * Deprecated
    //  * WebSocket에서 받은 메시지 처리
    //  */
    // public async onMessageDefault(trid: string, header: any | null, body: any | null, _data: any, _isBinary: boolean = false): Promise<void> {
    //     try {
    //         this.logger.info('--- onMessage ------------------------------------------------');
    //         this.logger.info(`trid: ${trid}`);
    //         this.logger.info(`header: ${JSON.stringify(header)}`);
    //         if (Array.isArray(body)) {
    //             body.forEach((item) => {
    //                 this.logger.info(`body item: ${JSON.stringify(item)}`);    
    //             });
    //         } else {
    //             this.logger.info(`body: ${JSON.stringify(body)}`);
    //         }
    //         this.logger.info('');
    //     } catch(ex) {
    //         console.error('Exception onMessageDefault', ex);
    //     }
    // }

    // /**
    //  * Deprecated
    //  * WebSocket에서 받은 메시지 처리
    //  */
    // public async onMessage_001(trid: string, _header: any | null, body: any | null, _data: any, _isBinary: boolean = false): Promise<void> {
    //     try {
    //         if (Array.isArray(body)) {
    //             const msgs: Array<string> = [];
    //             switch (trid) {
    //             case 'H0STASP0':                            //--- 주식 호가 : 종목 코드
    //                 this.logger.info(`WebSocket ::     주식 호가`);
    //                 body.forEach(item => {
    //                     msgs.push(`호  가 :: 종목: ${item.MKSC_SHRN_ISCD}`);
    //                     msgs.push(`시간: ${item.BSOP_HOUR}`);
    //                     msgs.push(`매도 잔량: ${item.TOTAL_ASKP_RSQN}`);
    //                     msgs.push(`매수 잔량: ${item.TOTAL_BIDP_RSQN}`);
    //                 })
    //                 break;
    //             case 'H0STCNT0':                            //--- 실시간 주식 체결가: 종목코드
    //                 this.logger.info('WebSocket ::     실시간 주식 체결가');
    //                 body.forEach(item => {
    //                     msgs.push(`체결가 :: 종목: ${item.MKSC_SHRN_ISCD}`);
    //                     msgs.push(`시간: ${item.STCK_CNTG_HOUR}`);
    //                     msgs.push(`현재가: ${item.STCK_PRPR}`);
    //                     msgs.push(`체결량: ${item.CNTG_VOL}`);
    //                     msgs.push(`매도 건수: ${item.SELN_CNTG_CSNU}`);
    //                     msgs.push(`매수 건수: ${item.SHNU_CNTG_CSNU}`);
    //                 });
    //                 break;
    //             case 'H0STCNI0':                            //--- 실시간 주식 체결통보 : HTS ID
    //             case 'H0STCNI9':                            //--- 실시간 주식 체결통보 (모의투자) : HTS ID
    //                 this.logger.info(`WebSocket ::     실시간 주식 체결통보, ${((trid == 'H0STCNI0') ? '':'(모의투자)')}`);
    //                 body.forEach(item => {
    //                     msgs.push(`체결통보 :: 고객: ${item.CUST_ID}`);
    //                     msgs.push(`계좌번호: ${item.ACNT_NO}`);
    //                     msgs.push(`주문: ${item.ODER_NO}`);
    //                     msgs.push(`시간: ${item.STCK_CNTG_HOUR}`);
    //                     msgs.push(`구분: ${(item.SELN_BYOV_CLS == '01') ? '매도':'매수'} ${(item.CNTG_YN == '2') ? '체결':'기타'}`);
    //                     msgs.push(`종목: ${item.STCK_SHRN_ISCD} (${item.CNTG_ISNM})`);
    //                     msgs.push(`수량: ${item.CNTG_QTY}`);
    //                     msgs.push(`단가: ${item.CNTG_UNPR}`);
    //                 });
    //                 break;
    //             default:
    //                 this.logger.info('WebSocket ::     error: 알려지지 않은 데이터');
    //                 break;
    //             }
    //             this.logger.info(msgs.join(', '));
    //         }
    //     } catch(ex) {
    //         console.error('Exception onMessage_001', ex);
    //     }
    // }

    // /**
    //  * 이베스트투자증권의 운영시간 여부를 확인 한다
    //  * 
    //  * @param {Moment} today 
    //  * @returns {AJAX_ERROR}
    //  */
    // public isOperatingTime(today: Moment = moment()): AJAX_ERROR {
    //     const day: number = today.day();                    //--- 요일, 0. 일요일, 1. 월요일, ..., 6. 토요일
    //     if ((day < 1) || (5 < day)) {
    //         return { code: 1, message: '평일에만 작업 가능 합니다.' };
    //     }

    //     const hhmm: string = today.format('HH:mm');         //--- 시간과 분
    //     if ((hhmm < '09:00') || ('15:30' < hhmm)) {
    //         return { code: 2, message: '오전 9시부터 오후 5시 30분까지만 작업 가능 합니다.' };
    //     }
    //     return { code: 0, message: '운영 시간'};
    // }

    // /**
    //  * 평문을 암호문으로 변환
    //  * 
    //  * @param {string} data                                 평문
    //  * @param {string} key                                  Cipher Key
    //  * @param {string} iv                                   Binary Like
    //  * @returns {string}                                    암호문
    //  */
    // public _encrypt(data: string, key: string, iv: string): string {
    //     const cipher: Cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    //     const encrypt: string = cipher.update(data, 'utf8', 'base64');
    //     return encrypt + cipher.final('base64');
    // }
    
    // /**
    //  * 암호문을 평문으로 변환
    //  * 
    //  * @param {string} data                                 암호문
    //  * @param {string} key                                  Cipher Key
    //  * @param {string} iv                                   Binary Like
    //  * @returns {string}                                    평문
    //  */
    // private decrypt(data: string, key: string, iv: string): string {
    //     const decipher: Decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    //     const decrypt: string = decipher.update(data, 'base64', 'utf8');
    //     return decrypt + decipher.final('utf8');
    // }

    // //--- code : 3701 ~ 3799를 사용하자
    // //---     1000 <= code <= 1014 (not allow : 1004, 1005, 1006)
    // //---     3000 <= code <= 4999
    // public close(code: number, data: string | Buffer): void {
    //     this.isKeepAlive = false;
    //     if (this.ws != null) {
    //         this.ws.close(code, data);
    //         this.ws = null;
    //     }
    // }
}

export default EBestWs;