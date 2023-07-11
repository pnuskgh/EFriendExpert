'use strict'
/**
 * EFriendExpert Web Service API
 * 
 * @file packages/EFriendExpert/efriends/efriendWs.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import WebSocket from 'ws';
import moment, { Moment } from 'moment';                                //--- 'YYYY-MM-DD HH:mm:ss.SSS ZZ'
import crypto, { Cipher, Decipher } from 'crypto';

import { logger } from '../common/logger';
import { BaseError, ERROR_CODE } from '../common/error';
import { Secret } from '../secrets';
import EFriend_JSON_TRID, { METADATA, TRID_FIELD } from './efriend.constant';

export interface AJAX_ERROR {
    code: number,
    message: string
}

export interface WS_KEY {
    iv: string,
    key: string
}

export interface WS_SAVE {
    tr_id: string,
    tr_type: string,
    tr_key: string
}

export interface LIMIT_WS_ITEM {
    maxCount: number,
    count: number
}
export interface LIMIT_WS {
    session: LIMIT_WS_ITEM,
    notification: LIMIT_WS_ITEM,
    connect: LIMIT_WS_ITEM
}

export class EFriendWs {
    private secret: Secret;
    private ws: WebSocket | null;
    private isOpen: boolean;
    private wsInterval: ReturnType<typeof setTimeout> | null;
    private wsIntervalTime: number;
    private wsSave: Array<WS_SAVE>;
    private wsKeys: Record<string, WS_KEY>;
    private onMessages: Array<Function>;
    private limit: LIMIT_WS;

    constructor(secret: Secret) {
        this.secret = secret;                              //--- Secret

        this.ws = null;                                    //--- Web Socket
        this.isOpen = false;                               //--- true. Web Socket이 동작중
        this.wsInterval = null;                            //--- 주기적으로 Web Socket(_ws)이 살아 있는지 확인 한다.
        this.wsIntervalTime = 60 * 1000;                   //--- Web Socket(_ws)이 살아 있는지 확인하는 주기
        this.wsSave = [];                                  //--- 저장된 Web Socket 신청 정보
        this.wsKeys = {};                                  //--- 복호화용 AES256 IV(Initialize Vector)와 Key
        this.onMessages = [                                //--- onMessage 요청시 실행할 함수
            // this.onMessageDefault.bind(this)
        ];
        this.limit = {
            session: { maxCount: 1, count: 0 },             //--- HTS ID당 1개의 세션
            notification: { maxCount: 1, count: 0 },        //--- H0STCNI0 (실시간 주식 체결 통보) 등록 갯수
            //--- To-Do : 확인 필요 : 추후 60건으로 확대 예정
            //--- To-Do : Cluster의 instance에 분산하여 종목 모니터링을 등록하는 기능 추가
            connect: { maxCount: 40, count: 0 }             //--- H0STCNT0 (체결 데이터)와 H0STASP0 (호가 데이터)를 합산한 등록 갯수
        };
    }

    public addHandler(handler: Function) {
        this.onMessages.push(handler);
    }

    /**
     * 한국투자증권 Web Socket을 초기화 한다.
     * 
     * @returns {boolean}
     */
    public async initialize(): Promise<boolean> {
        try {
            if (this.ws != null) {
                return true;
            }

            if (this.secret.isActual == false) {
                logger.error('Error: Web Socket은 실전투자만 사용 가능 합니다.');
                return false;
            }

            const trid: string = 'H0STCNT0';
            const metadata: METADATA = EFriend_JSON_TRID[`${trid}_실전`];

            this.isOpen = false;
            this.limit = {
                session: { maxCount: 1, count: 0 },             //--- HTS ID당 1개의 세션
                notification: { maxCount: 1, count: 0 },        //--- H0STCNI0 (실시간 주식 체결 통보) 등록 갯수
                //--- To-Do : 확인 필요 : 추후 60건으로 확대 예정
                //--- To-Do : Cluster의 instance에 분산하여 종목 모니터링을 등록하는 기능 추가
                connect: { maxCount: 40, count: 0 }             //--- H0STCNT0 (체결 데이터)와 H0STASP0 (호가 데이터)를 합산한 등록 갯수
            };

            this.ws = new WebSocket(metadata.info.domain, { perMessageDeflate: false });
            this.ws.on('open', this.onOpen.bind(this));
            this.ws.on('message', this.onMessage.bind(this));
            this.ws.on('close', this.onClose.bind(this));
            this.ws.on('error', this.onError.bind(this));
            this.ws.on('upgrade', this.onUpgrade.bind(this));
            this.ws.on('ping', this.onPing.bind(this));
            this.ws.on('pong', this.onPong.bind(this));
            this.ws.on('unexpected-response', this.onUnexpectedResponse.bind(this));

            // this.ws.on('timeout', function() {});
            // this.ws.on('response', function(res: http.IncomingMessage) {});
            // this.ws.on('upgrade', function(res: http.IncomingMessage, socket: net.Socket, head: Buffer) {});
            // this.ws.on('unexpected-response', function(req: any, res: http.IncomingMessage) {});

            //--- 최대 10초간 접속 대기
            for (let idx: number = 0; idx < 100; idx++) {
                if (this.isOpen) {
                    return true;
                }
                await this.sleep(100);
            }

            if (this.isOpen == false) {
                this.ws = null;
            }
            return this.isOpen;
        } catch(ex) {
            console.error(ex);
            throw ex;
        }
    }

    /**
     * Web Socket에서 open event 처리
     */
    async onOpen() {
        try {
            console.log('WebSocket :: open');
            this.isOpen = true;
            this.limit.session.count = this.limit.session.count + 1;

            //--- 저장된 실시간 거래와 모니터링 설정 재등록
            for (const item of this.wsSave) {
                await this.webSocket(item.tr_id, item.tr_type, item.tr_key, false);
            };

            setTimeout(async function() {
                await this.webSocket('H0STCNT0', '1', '015760');               //--- 실시간 주식 체결가
            }.bind(this), 1000);
        } catch(ex) {
            console.error(ex);
        }
    }

    /**
     * Web Socket에서 message event 처리
     * 
     * @param {any} data                                    Buffer | ArrayBuffer | Buffer[]
     * @param {boolean} isBinary 
     * @returns {void}
     */
    private onMessage(data: any, isBinary: boolean = false): void {
        const _typeof: Function = (param) => Object.prototype.toString.call(param).replace(/\[object /g, '').replace(/\]/g, '').toLowerCase();

        if ((_typeof(data) == 'uint8array') && (isBinary == false)) {
            data = data.toString();
        }
        console.log('WebSocket :: message', data, isBinary);

        if (_typeof(data) == 'string') {
            if ((data.startsWith('0')) ||                                       //--- 0. record로 평문을 받음
                (data.startsWith('1'))) {                                       //--- 1. record로 암호문을 받음
                const tmpArr: Array<string> = data.split('|');
                const isEncrypt: string = tmpArr[0];                            //--- 암호화 여부 : 0. record로 평문을 받음, 1. record로 암호문을 받음
                const tr_id: string = tmpArr[1];                                //--- TR ID
                const count: number = parseInt(tmpArr[2]);                      //--- 데이터 코드
                let record: string = tmpArr[3];                                 //--- 응답 데이터

                if (isEncrypt == '1') {                                         //--- 1. record로 암호문을 받음
                    if ((typeof(this.wsKeys[tr_id]) == 'undefined') ||
                        (typeof(this.wsKeys[tr_id].iv) == 'undefined') ||      //--- 실시간 결과 복호화에 필요한 AES256 IV (Initialize Vector)
                        (typeof(this.wsKeys[tr_id].key) == 'undefined')) {     //--- 실시간 결과 복호화에 필요한 AES256 Key
                        console.error(`WebSocket :: Error - 암복호화 키가 없음, tr_id : ${tr_id}`);
                        return;
                    }
                    record = this.decrypt(record, this.wsKeys[tr_id].key, this.wsKeys[tr_id].iv);
                }

                const metadata: METADATA = EFriend_JSON_TRID[`${tr_id.toUpperCase()}_실전`] || null;
                if (metadata == null) {
                    throw new BaseError({ code: ERROR_CODE.REQUIRED, data: `${tr_id} metadata is not exist.` });
                }
    
                if (metadata.info.domain.startsWith('ws') == false) {
                    throw new BaseError({ code: ERROR_CODE.REQUIRED, data: `${tr_id} trid is not supported.` });
                }   

                const json: Array<Record<string, string | number | null>> = [];

                let pos: number = 0;
                const fields = record.split('^');
                for (let idx: number = 0; idx < count; idx++) {
                    const item: Record<string, string | number | null> = {};

                    for (const field of metadata.response.body) {
                        let value: string | number | null = (typeof(fields[pos]) == 'undefined') ? null:fields[pos];
                        switch(field.type) {
                        case 'object':
                        case 'array':
                            console.error(`Not allowed field type: ${field.type}`);
                            break;
                        case 'number':
                            if (value != null) {
                                value = (value == '')  ? 0:parseInt(value);
                            }
                            break;
                        case 'string':
                        default:
                            break;
                        }
                        
                        item[field.code] = value;
                        pos = pos + 1;
                    }
                    json.push(item);
                }

                // this.checkData(trid, metadata.response.header, null);
                // this.compareWithMeta(metadata.response.header, null, tr_id);
                this.checkResponsebody(tr_id, metadata.response.body, json);

                for (let idx: number = 0; idx < this.onMessages.length; idx++) {
                    this.onMessages[idx](tr_id, null, json, data, isBinary);
                }
            } else {
                data = data.trim();
                if ((data.startsWith('{') == false) || (data.endsWith('}') == false)) {
                    console.error(`WebSocket :: Error - data is not json object - ${data}`);
                    return;
                }
                const json: any = JSON.parse(data);
                if (typeof(json.header.tr_id) == 'undefined') {
                    console.error(`WebSocket :: Error - 알려지지 않은 데이터 tr_id - ${json.header.tr_id}`);
                    return;
                }

                if (json.header.tr_id == 'PINGPONG') {
                    //--- 100초 이내에 응답이 없으면 세션 종료됨
                    this.ws.send(data);
                    return;
                }

                //--- json.header: tr_id, tr_key, encrypt
                //--- json.body: rt_cd, msg_cd, msg1, output: { iv: '50a65578c4f7500f', key: 'molrrntztvzothjqkzsitawgikersupf' }
                //---     0, OPSP0000, SUBSCRIBE SUCCESS
                //---     1, OPSP0011, invalid approval : NOT FOUND
                console.log(`WebSocket ::     header`, json.header);
                // console.log(json, 'header', 'tr_id');                         //--- 거래ID
                // console.log(json, 'header', 'tr_key');                        //--- 구분값 (종목코드)
                // console.log(json, 'header', 'encrypt');                       //--- Y. 암호문, N. 평문
                // console.log(json, 'header', 'datetime');                      //--- 
                if (typeof(json.body) != 'undefined') {
                    console.log(`WebSocket ::     body`, json.body);
                    // console.log(json, 'body', 'rt_cd');                       //--- 응답 코드
                    // console.log(json, 'body', 'msg_cd');                      //--- 응답 메시지 코드
                    // console.log(json, 'body', 'msg1');                        //--- 응답 메시지
                    // console.log(json, 'body', 'output');                      //--- 응답 결과

                    //--- header에 tr_id가 없으면 Web Socket 요청에 대한 응답으로 해석하여 wsKeys를 저장 한다.
                    if ((typeof(json.header.tr_id) != 'undefined') && (typeof(json.body.output) != 'undefined')) {
                        this.wsKeys[json.header.tr_id] = json.body.output;
                        return;
                    }
                    if (json.body.rt_cd != '0') {
                        console.error(`WebSocket :: Error - ${json.body.msg_cd}, ${json.body.msg1}`);
                        return;
                    }
                }

                for (let idx: number = 0; idx < this.onMessages.length; idx++) {
                    this.onMessages[idx](json.header.tr_id, json.header || null, json.body || null, data, isBinary);
                }
            }
        } else {
            console.error(`WebSocket :: Error - data type is not string ${_typeof(data)} ${data} ${isBinary}`);
        }
    }

    /**
     * Response data의 값을 검사 한다.
     * 
     * @param {string} trid                                 트랜잭션 ID
     * @param {Array<TRID_FIELD>} fields                    필드 목록
     * @param {any} data                                    검사할 데이터 객체
     * @throws {any}
     */
    private checkResponsebody(trid: string, fields: Array<TRID_FIELD> | undefined, data: any): void {
        if (Array.isArray(data)) {
            for (const item of data) {
                this.checkResponsebody(trid, fields, item);
            }
            return;
        }

        if (typeof(fields) != 'undefined') {
            fields.forEach(function(field) {
                if ([ 'array', 'object' ].includes(field.type)) {
                    if (Array.isArray(data[field.code])) {
                        data[field.code].forEach(function(dataItem) {
                            this.checkResponsebody(trid, field.fields, dataItem);
                        }.bind(this));
                    } else {
                        this.checkResponsebody(trid, field.fields, data[field.code]);
                    }
                } else {
                    this.checkField(field, data, trid, false);
                }
            }.bind(this));   
        }     
    }    

    /**
     * 필드의 값을 검사 한다.
     * 
     * @param {TRID_FIELD} field                                필드 정보
     * @param {any} data                                field의 값을 포함하는 object
     * @param {string} trid                                     tr_id
     * @param {boolean} allowException                          true. Exception 허용
     * @throws {any}
     */
    public checkField(field: TRID_FIELD, data: any, trid: string, allowException: boolean = true): void {
        try {
            const fieldInfo: string = `${trid}: ${field.code}(${field.name})`;
            
            if ((typeof(data[field.code]) == 'undefined') && (field.required)) {
                throw new BaseError({ code: ERROR_CODE.REQUIRED, data: fieldInfo });
            }

            if ((typeof(data.custtype) != 'undefined') && (data.custtype == 'B')) {
                const required: boolean = [ 'personalseckey', 'seq_no', 'phone_number', 'ip_addr', 'gt_uid' ].includes(field.code);
                if ((typeof(data[field.code]) == 'undefined') && required) {
                    throw new BaseError({ code: ERROR_CODE.REQUIRED, data: fieldInfo });
                }
            }

            if (typeof(data[field.code]) != 'undefined') {
                if (typeof(field.enum) != 'undefined') {
                    const isExist: boolean = field.enum.reduce((prev, curr) => {
                        return prev || (curr.code == data[field.code]);
                    }, false);

                    if (isExist == false) {
                        logger.info(JSON.stringify(field.enum));
                        throw new BaseError({ code: ERROR_CODE.NOTALLOWED, data: `${fieldInfo}, value - ${data[field.code]}` });
                    }
                }

                switch (field.type) {
                case 'string':
                    if ([ 'authorization' ].includes(field.code) == false) {
                        if (field.length < data[field.code].length) {
                            throw new BaseError({ code: ERROR_CODE.FIELDERROR, data: `${fieldInfo}, length - ${data[field.code].length}` });
                        }
                    }
                    break;
                case 'number':
                    // logger.info(`${trid}, ${field.code}, ${field.type} is number`);
                    break;
                default:
                    logger.error(`${trid} ---------- field type : ${field.code}, ${field.type}`);
                    break;
                }
            }
        } catch(ex) {
            if (allowException) {
                throw ex;
            } else {
                if (ex instanceof BaseError) {
                    logger.info(`---------- field manage, ${trid}: ${ex.code} - ${ex.message}, ${ex.data}`);
                } else {
                    logger.info(`---------- field manage, ${trid}:, ${JSON.stringify(ex)}`);
                }
            }
        }        
    }

    /**
     * Web Socket에서 close event 처리
     * 
     * @param {number} code 
     * @param {Buffer} reason 
     */
    private onClose(code: number, reason: Buffer): void {
        console.log('WebSocket :: close', code, reason);

        this.isOpen = false;
        this.limit.session.count = this.limit.session.count - 1;
        this.ws = null;

        setTimeout(function() {
            this.initialize();
        }.bind(this), 1000);
    }

    /**
     * Web Socket에서 error event 처리
     * 
     * @param {Error} err 
     */
    private onError(err: Error): void {
        console.error(`WebSocket :: error ${JSON.stringify(err)}`);
    }

    /**
     * Web Socket에서 upgrade event 처리
     * 
     * @param {any} res 
     */
    private onUpgrade(res: any): void {
        //--- 101, Switching Protocols
        console.log('WebSocket :: upgrade', res.headers);
        console.log('WebSocket ::     status:', res.statusCode, res.statusMessage);
    }

    /**
     * Web Socket에서 ping event 처리
     * 
     * @param {Buffer} data 
     */
    private onPing(data: Buffer): void {
        console.log('WebSocket :: ping', data);
    }

    /**
     * Web Socket에서 pong event 처리
     * 
     * @param {Buffer} data 
     */
    private onPong(data: Buffer): void {
        console.log('WebSocket :: pong', data);
    }

    /**
     * Web Socket에서 unexpected-response event 처리
     * 
     * @param {unknown} req 
     * @param {unknown} res 
     */
    private onUnexpectedResponse(req: unknown, res: unknown): void {
        console.log('WebSocket :: unexpected-response', req, res);
    }

    /**
     * Web Socket의 상태를 확인 한다.
     * 
     * @returns {Null}
     */
    private checkAlive(): void {
        if (this.wsInterval != null) {
            // clearInterval(this.wsInterval);
            return;
        }

        this.wsInterval = setInterval(async function() {
            try {
                if (this.isOperatingTime().code == 0) {
                    if (this.ws == null) {
                        await this.initialize();
                        return;
                    }
                    logger.info(`WebSocket :: ${moment().format('YYYY.MM.DD HH:mm:ss')}, ${this.ws.readyState} (0. 연결중, 1. 연결, 2. 종료중, 3. 종료)`);

                    //--- Protocol에 정의된 PING을 보내면 알수 없는 tr_id를 받았다는 오류 메시지가 오고 연결이 종료 된다.
                    // this.ws.ping(JSON.stringify(msg));

                    //--- PINGPONG를 보내면 원래 오던 PINGPONG이 오지 않고 10초 후에 PINGPONG이 다시 온다.
                    // const msg = { header: { tr_id: "PINGPONG", datetime: moment().format('YYYYMMDDHHmmss') } };
                    // this.ws.send(JSON.stringify(msg));

                    switch (this.ws.readyState) {
                    case 0:                                 //--- 0. CONNECTING, 연결중
                        break;
                    case 1:                                 //--- 1. OPEN, 연결
                        //--- To-Do: 실시간 Web Socket 메시지 처리가 끊어졌는지 확인이 필요 한다. 끊어진 경우 재설정
                        break;
                    case 2:                                 //--- 2. CLOSING, 종료중
                    case 3:                                 //--- 3. CLOSED, 종료
                    default:
                        logger.error(`WebSocket :: Restart Web Socket.`);
                        this.ws = null;
                        // await this.initialize();
                        break;
                    }
                }
            } catch(error) {
                logger.error(JSON.stringify(error));
            }
        }.bind(this), this.wsIntervalTime);
    }

    /**
     * WebSocket 설정
     * 
     * @param {String} trid             거래 아이디
     * @param {String} tr_type          거래 타입
     * @param {String} tr_key           종목코드 또는 HTS ID
     * @param {Boolean} isSave          저장 여부
     * @returns {boolean}               처리 결과
     */
    public async webSocket(trid, tr_type, tr_key, isSave = true): Promise<boolean> {
        try {
            const metadata: METADATA = EFriend_JSON_TRID[`${trid}_${(this.secret.isActual) ? '실전':'모의'}`] || null;
            if (metadata == null) {
                throw new BaseError({ code: ERROR_CODE.REQUIRED, data: `${trid} (${this.secret.isActual}) metadata is not exist.` });
            }

            if (metadata.info.domain.startsWith('ws') == false) {
                throw new BaseError({ code: ERROR_CODE.NOTALLOWED, data: `${trid} trid is not supported.` });
            }            
    
            await this.initialize();
            const header: any = {
                "content-type": 'application/json; charset=utf-8',
                custtype: this.secret.custtype,            //--- 고객 타입 : P. 개인, B. 법인
                tr_type: tr_type                            //--- 거래 타입 : 1. 등록, 2. 해제
            };
            if ((this.secret.approval_key == null) || (typeof(this.secret.approval_key) == 'undefined')) {
                header.appkey = this.secret.appkey;
                header.appsecret = this.secret.appsecret;
            } else {
                header.approval_key = this.secret.approval_key;
            }

            const body: any = {
                input: {
                    tr_id: trid,                           //--- 거래 아이디
                    tr_key: tr_key                         //--- 종목코드. 주식체결가/호가, hts_id. 주식체결통보
                }
            };
            const data = JSON.stringify({ header: header, body: body });
            console.log('WebSocket :: send -', data)
            this.ws.send(data);

            if (tr_type == '1') {                           //--- 등록
                if (isSave) {
                    this.wsSave.push({
                        tr_id: trid, 
                        tr_type: tr_type, 
                        tr_key: tr_key
                    });
                }
            } else {                                        //--- 해제
                this.wsSave = this.wsSave.filter(item => (item.tr_id != trid) || (item.tr_key != tr_key));
            }
            
            //--- To-Do: 다양한 trid에 대해서 처리할 것
            switch (trid) {
            case 'H0STASP0':                            //--- 주식 호가 : 종목 코드
                this.limit.connect.count = this.limit.connect.count + ((tr_type == '1') ? 1:-1);
                break;
            case 'H0STCNT0':                            //--- 실시간 주식 체결가: 종목코드
                this.limit.connect.count = this.limit.connect.count + ((tr_type == '1') ? 1:-1);
                break;
            case 'H0STCNI0':                            //--- 실시간 주식 체결통보 : HTS ID
                this.limit.notification.count = this.limit.notification.count + ((tr_type == '1') ? 1:-1);
                break;
            case 'H0STCNI9':                            //--- 실시간 주식 체결통보 (모의투자) : HTS ID
                this.limit.notification.count = this.limit.notification.count + ((tr_type == '1') ? 1:-1);
                break;
            }
            this.checkAlive()
            return true;
        } catch(error) {
            logger.error(`WebSocket :: ${JSON.stringify(error)}`);
            return false;
        }
    } 

    public onMessageDefault(trid: string, header: any | null, body: any | null, data: any, isBinary: boolean = false): void {
        console.log('--- onMessage ------------------------------------------------');
        console.log('trid', trid);
        console.log('header', header);
        if (Array.isArray(body)) {
            body.forEach((item) => {
                console.log('body item', item);    
            });
        } else {
            console.log('body', body);
        }
        console.log('data', data);
        console.log('isBinary', isBinary);
        console.log('');
    }

    // /**
    //  * WebSocket에서 받은 메시지 처리
    //  * 
    //  * @param {EFriendWs} self 
    //  * @param {*} data 
    //  * @param {*} json 
    //  * @param {*} isBinary 
    //  */
    // async _onMessage_001(self, data, json, isBinary = false) {
    //     console.log('WebSocket :: onMessage_001, data - ', data, 'json - ', json, isBinary);

    //     if (typeof(json.count) != 'undefined') {
    //         const msgs = [];
    //         switch (json.tr_id) {
    //         case 'H0STASP0':                            //--- 주식 호가 : 종목 코드
    //             console.log(`WebSocket ::     주식 호가`);
    //             json.data.forEach(item => {
    //                 msgs.push(`호  가 :: 종목: ${item.mksc_shrn_iscd}`);
    //                 msgs.push(`시간: ${item.bsop_hour}`);
    //                 msgs.push(`매도 잔량: ${item.total_askp_rsqn}`);
    //                 msgs.push(`매수 잔량: ${item.total_bidp_rsqn}`);
    //             })
    //             break;
    //         case 'H0STCNT0':                            //--- 실시간 주식 체결가: 종목코드
    //             console.log('WebSocket ::     실시간 주식 체결가');
    //             json.data.forEach(item => {
    //                 msgs.push(`체결가 :: 종목: ${item.mksc_shrn_iscd}`);
    //                 msgs.push(`시간: ${item.stck_cntg_hour}`);
    //                 msgs.push(`현재가: ${item.stck_prpr}`);
    //                 msgs.push(`체결량: ${item.cntg_vol}`);
    //                 msgs.push(`매도 건수: ${item.seln_cntg_csnu}`);
    //                 msgs.push(`매수 건수: ${item.shnu_cntg_csnu}`);
    //             });
    //             break;
    //         case 'H0STCNI0':                            //--- 실시간 주식 체결통보 : HTS ID
    //         case 'H0STCNI9':                            //--- 실시간 주식 체결통보 (모의투자) : HTS ID
    //             console.log('WebSocket ::     실시간 주식 체결통보', ((json.tr_id == 'H0STCNI0') ? '':'(모의투자)'));
    //             json.data.forEach(item => {
    //                 msgs.push(`체결통보 :: 고객: ${item.cust_id}`);
    //                 msgs.push(`계좌번호: ${item.acnt_no}`);
    //                 msgs.push(`주문: ${item.oder_no}`);
    //                 msgs.push(`시간: ${item.stck_cntg_hour}`);
    //                 msgs.push(`구분: ${(item.seln_byov_cls == '01') ? '매도':'매수'} ${(item.cntg_yn == '2') ? '체결':'기타'}`);
    //                 msgs.push(`종목: ${item.stck_shrn_iscd} (${item.cntg_isnm})`);
    //                 msgs.push(`수량: ${item.cntg_qty}`);
    //                 msgs.push(`단가: ${item.cntg_unpr}`);
    //             });
    //             break;
    //         default:
    //             console.log('WebSocket ::     error: 알려지지 않은 데이터');
    //             break;
    //         }
    //         logger.info(msgs.join(', '));
    //     }
    // }

    /**
     * 주어진 시간만큼 대기 한다.
     * 
     * @param {number} miliseconds 
     */
    public async sleep(miliseconds: number): Promise<void> {
        const promise = new Promise(function(resolve) {
            setTimeout(function() {
                resolve(0);
            }, miliseconds);
        });
        await promise;
    }

    /**
     * 한국투자증권의 운영시간 여부를 확인 한다
     * 
     * @param {Moment} today 
     * @returns {AJAX_ERROR}
     */
    public isOperatingTime(today: Moment = moment()): AJAX_ERROR {
        const day: number = today.day();                    //--- 요일, 0. 일요일, 1. 월요일, ..., 6. 토요일
        if ((day < 1) || (5 < day)) {
            return { code: 1, message: '평일에만 작업 가능 합니다.' };
        }

        const hhmm: string = today.format('HH:mm');         //--- 시간과 분
        if ((hhmm < '09:00') || ('15:30' < hhmm)) {
            return { code: 2, message: '오전 9시부터 오후 5시 30분까지만 작업 가능 합니다.' };
        }
        return { code: 0, message: '운영 시간'};
    }

    /**
     * 평문을 암호문으로 변환
     * 
     * @param {string} data                                 평문
     * @param {string} key                                  Cipher Key
     * @param {string} iv                                   Binary Like
     * @returns {string}                                    암호문
     */
    public _encrypt(data: string, key: string, iv: string): string {
        const cipher: Cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
        const encrypt: string = cipher.update(data, 'utf8', 'base64');
        return encrypt + cipher.final('base64');
    }
    
    /**
     * 암호문을 평문으로 변환
     * 
     * @param {string} data                                 암호문
     * @param {string} key                                  Cipher Key
     * @param {string} iv                                   Binary Like
     * @returns {string}                                    평문
     */
    private decrypt(data: string, key: string, iv: string): string {
        const decipher: Decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
        const decrypt: string = decipher.update(data, 'base64', 'utf8');
        return decrypt + decipher.final('utf8');
    }
}

export default EFriendWs;
