/**
 * LS증권 EBest REST API
 *     자동 생성되는 소스이니 수정하지 마세요.
 * 
 * @file packages/EFriendExpert/ebest/ebestRest.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2025, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { Secret, EBestRestConfig } from './ebest.type.js';
import * as typeRest from './ebest_api.type.js';
import EBestRestBase from './ebestRestBase.js';
 
export class EBestRest extends EBestRestBase {
    constructor({ logger }: EBestRestConfig) {
        super({ logger });
    }

    
    /**
     * @description 접근토큰 발급
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.TOKEN_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.TOKEN_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.TOKEN_RESPONSE} response               응답
     * @returns {typeRest.TOKEN_RESPONSE}
     */
    public async token(
        secret: Secret, requestHeader: typeRest.TOKEN_REQUEST_HEADER, requestBody: typeRest.TOKEN_REQUEST_BODY, 
        response: typeRest.TOKEN_RESPONSE | null = null): Promise<typeRest.TOKEN_RESPONSE> {
            return await this.request(secret, 'token', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 접근토큰 폐기
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.REVOKE_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.REVOKE_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.REVOKE_RESPONSE} response               응답
     * @returns {typeRest.REVOKE_RESPONSE}
     */
    public async revoke(
        secret: Secret, requestHeader: typeRest.REVOKE_REQUEST_HEADER, requestBody: typeRest.REVOKE_REQUEST_BODY, 
        response: typeRest.REVOKE_RESPONSE | null = null): Promise<typeRest.REVOKE_RESPONSE> {
            return await this.request(secret, 'revoke', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 업종기간별추이
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1514_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1514_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1514_RESPONSE} response               응답
     * @returns {typeRest.T1514_RESPONSE}
     */
    public async t1514(
        secret: Secret, requestHeader: typeRest.T1514_REQUEST_HEADER, requestBody: typeRest.T1514_REQUEST_BODY, 
        response: typeRest.T1514_RESPONSE | null = null): Promise<typeRest.T1514_RESPONSE> {
            return await this.request(secret, 't1514', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 전체업종
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T8424_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T8424_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T8424_RESPONSE} response               응답
     * @returns {typeRest.T8424_RESPONSE}
     */
    public async t8424(
        secret: Secret, requestHeader: typeRest.T8424_REQUEST_HEADER, requestBody: typeRest.T8424_REQUEST_BODY, 
        response: typeRest.T8424_RESPONSE | null = null): Promise<typeRest.T8424_RESPONSE> {
            return await this.request(secret, 't8424', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 예상지수
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1485_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1485_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1485_RESPONSE} response               응답
     * @returns {typeRest.T1485_RESPONSE}
     */
    public async t1485(
        secret: Secret, requestHeader: typeRest.T1485_REQUEST_HEADER, requestBody: typeRest.T1485_REQUEST_BODY, 
        response: typeRest.T1485_RESPONSE | null = null): Promise<typeRest.T1485_RESPONSE> {
            return await this.request(secret, 't1485', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 업종현재가
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1511_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1511_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1511_RESPONSE} response               응답
     * @returns {typeRest.T1511_RESPONSE}
     */
    public async t1511(
        secret: Secret, requestHeader: typeRest.T1511_REQUEST_HEADER, requestBody: typeRest.T1511_REQUEST_BODY, 
        response: typeRest.T1511_RESPONSE | null = null): Promise<typeRest.T1511_RESPONSE> {
            return await this.request(secret, 't1511', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 업종별종목시세
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1516_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1516_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1516_RESPONSE} response               응답
     * @returns {typeRest.T1516_RESPONSE}
     */
    public async t1516(
        secret: Secret, requestHeader: typeRest.T1516_REQUEST_HEADER, requestBody: typeRest.T1516_REQUEST_BODY, 
        response: typeRest.T1516_RESPONSE | null = null): Promise<typeRest.T1516_RESPONSE> {
            return await this.request(secret, 't1516', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 업종차트(종합)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T4203_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T4203_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T4203_RESPONSE} response               응답
     * @returns {typeRest.T4203_RESPONSE}
     */
    public async t4203(
        secret: Secret, requestHeader: typeRest.T4203_REQUEST_HEADER, requestBody: typeRest.T4203_REQUEST_BODY, 
        response: typeRest.T4203_RESPONSE | null = null): Promise<typeRest.T4203_RESPONSE> {
            return await this.request(secret, 't4203', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 업종차트(틱/n틱)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T8417_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T8417_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T8417_RESPONSE} response               응답
     * @returns {typeRest.T8417_RESPONSE}
     */
    public async t8417(
        secret: Secret, requestHeader: typeRest.T8417_REQUEST_HEADER, requestBody: typeRest.T8417_REQUEST_BODY, 
        response: typeRest.T8417_RESPONSE | null = null): Promise<typeRest.T8417_RESPONSE> {
            return await this.request(secret, 't8417', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 업종차트(N분)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T8418_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T8418_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T8418_RESPONSE} response               응답
     * @returns {typeRest.T8418_RESPONSE}
     */
    public async t8418(
        secret: Secret, requestHeader: typeRest.T8418_REQUEST_HEADER, requestBody: typeRest.T8418_REQUEST_BODY, 
        response: typeRest.T8418_RESPONSE | null = null): Promise<typeRest.T8418_RESPONSE> {
            return await this.request(secret, 't8418', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 업종차트(일주월)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T8419_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T8419_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T8419_RESPONSE} response               응답
     * @returns {typeRest.T8419_RESPONSE}
     */
    public async t8419(
        secret: Secret, requestHeader: typeRest.T8419_REQUEST_HEADER, requestBody: typeRest.T8419_REQUEST_BODY, 
        response: typeRest.T8419_RESPONSE | null = null): Promise<typeRest.T8419_RESPONSE> {
            return await this.request(secret, 't8419', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식현재가호가조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1101_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1101_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1101_RESPONSE} response               응답
     * @returns {typeRest.T1101_RESPONSE}
     */
    public async t1101(
        secret: Secret, requestHeader: typeRest.T1101_REQUEST_HEADER, requestBody: typeRest.T1101_REQUEST_BODY, 
        response: typeRest.T1101_RESPONSE | null = null): Promise<typeRest.T1101_RESPONSE> {
            return await this.request(secret, 't1101', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식현재가(시세)조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1102_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1102_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1102_RESPONSE} response               응답
     * @returns {typeRest.T1102_RESPONSE}
     */
    public async t1102(
        secret: Secret, requestHeader: typeRest.T1102_REQUEST_HEADER, requestBody: typeRest.T1102_REQUEST_BODY, 
        response: typeRest.T1102_RESPONSE | null = null): Promise<typeRest.T1102_RESPONSE> {
            return await this.request(secret, 't1102', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식현재가시세메모
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1104_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1104_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1104_RESPONSE} response               응답
     * @returns {typeRest.T1104_RESPONSE}
     */
    public async t1104(
        secret: Secret, requestHeader: typeRest.T1104_REQUEST_HEADER, requestBody: typeRest.T1104_REQUEST_BODY, 
        response: typeRest.T1104_RESPONSE | null = null): Promise<typeRest.T1104_RESPONSE> {
            return await this.request(secret, 't1104', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식피봇/디마크조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1105_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1105_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1105_RESPONSE} response               응답
     * @returns {typeRest.T1105_RESPONSE}
     */
    public async t1105(
        secret: Secret, requestHeader: typeRest.T1105_REQUEST_HEADER, requestBody: typeRest.T1105_REQUEST_BODY, 
        response: typeRest.T1105_RESPONSE | null = null): Promise<typeRest.T1105_RESPONSE> {
            return await this.request(secret, 't1105', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 시간외체결량
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1109_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1109_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1109_RESPONSE} response               응답
     * @returns {typeRest.T1109_RESPONSE}
     */
    public async t1109(
        secret: Secret, requestHeader: typeRest.T1109_REQUEST_HEADER, requestBody: typeRest.T1109_REQUEST_BODY, 
        response: typeRest.T1109_RESPONSE | null = null): Promise<typeRest.T1109_RESPONSE> {
            return await this.request(secret, 't1109', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식시간대별체결조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1301_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1301_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1301_RESPONSE} response               응답
     * @returns {typeRest.T1301_RESPONSE}
     */
    public async t1301(
        secret: Secret, requestHeader: typeRest.T1301_REQUEST_HEADER, requestBody: typeRest.T1301_REQUEST_BODY, 
        response: typeRest.T1301_RESPONSE | null = null): Promise<typeRest.T1301_RESPONSE> {
            return await this.request(secret, 't1301', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식분별주가조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1302_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1302_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1302_RESPONSE} response               응답
     * @returns {typeRest.T1302_RESPONSE}
     */
    public async t1302(
        secret: Secret, requestHeader: typeRest.T1302_REQUEST_HEADER, requestBody: typeRest.T1302_REQUEST_BODY, 
        response: typeRest.T1302_RESPONSE | null = null): Promise<typeRest.T1302_RESPONSE> {
            return await this.request(secret, 't1302', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 기간별주가
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1305_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1305_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1305_RESPONSE} response               응답
     * @returns {typeRest.T1305_RESPONSE}
     */
    public async t1305(
        secret: Secret, requestHeader: typeRest.T1305_REQUEST_HEADER, requestBody: typeRest.T1305_REQUEST_BODY, 
        response: typeRest.T1305_RESPONSE | null = null): Promise<typeRest.T1305_RESPONSE> {
            return await this.request(secret, 't1305', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식시간대별체결조회챠트
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1308_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1308_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1308_RESPONSE} response               응답
     * @returns {typeRest.T1308_RESPONSE}
     */
    public async t1308(
        secret: Secret, requestHeader: typeRest.T1308_REQUEST_HEADER, requestBody: typeRest.T1308_REQUEST_BODY, 
        response: typeRest.T1308_RESPONSE | null = null): Promise<typeRest.T1308_RESPONSE> {
            return await this.request(secret, 't1308', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식당일전일분틱조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1310_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1310_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1310_RESPONSE} response               응답
     * @returns {typeRest.T1310_RESPONSE}
     */
    public async t1310(
        secret: Secret, requestHeader: typeRest.T1310_REQUEST_HEADER, requestBody: typeRest.T1310_REQUEST_BODY, 
        response: typeRest.T1310_RESPONSE | null = null): Promise<typeRest.T1310_RESPONSE> {
            return await this.request(secret, 't1310', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 관리/불성실/투자유의조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1404_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1404_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1404_RESPONSE} response               응답
     * @returns {typeRest.T1404_RESPONSE}
     */
    public async t1404(
        secret: Secret, requestHeader: typeRest.T1404_REQUEST_HEADER, requestBody: typeRest.T1404_REQUEST_BODY, 
        response: typeRest.T1404_RESPONSE | null = null): Promise<typeRest.T1404_RESPONSE> {
            return await this.request(secret, 't1404', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 투자경고/매매정지/정리매매조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1405_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1405_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1405_RESPONSE} response               응답
     * @returns {typeRest.T1405_RESPONSE}
     */
    public async t1405(
        secret: Secret, requestHeader: typeRest.T1405_REQUEST_HEADER, requestBody: typeRest.T1405_REQUEST_BODY, 
        response: typeRest.T1405_RESPONSE | null = null): Promise<typeRest.T1405_RESPONSE> {
            return await this.request(secret, 't1405', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 초저유동성조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1410_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1410_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1410_RESPONSE} response               응답
     * @returns {typeRest.T1410_RESPONSE}
     */
    public async t1410(
        secret: Secret, requestHeader: typeRest.T1410_REQUEST_HEADER, requestBody: typeRest.T1410_REQUEST_BODY, 
        response: typeRest.T1410_RESPONSE | null = null): Promise<typeRest.T1410_RESPONSE> {
            return await this.request(secret, 't1410', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 상/하한
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1422_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1422_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1422_RESPONSE} response               응답
     * @returns {typeRest.T1422_RESPONSE}
     */
    public async t1422(
        secret: Secret, requestHeader: typeRest.T1422_REQUEST_HEADER, requestBody: typeRest.T1422_REQUEST_BODY, 
        response: typeRest.T1422_RESPONSE | null = null): Promise<typeRest.T1422_RESPONSE> {
            return await this.request(secret, 't1422', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 상/하한가직전
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1427_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1427_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1427_RESPONSE} response               응답
     * @returns {typeRest.T1427_RESPONSE}
     */
    public async t1427(
        secret: Secret, requestHeader: typeRest.T1427_REQUEST_HEADER, requestBody: typeRest.T1427_REQUEST_BODY, 
        response: typeRest.T1427_RESPONSE | null = null): Promise<typeRest.T1427_RESPONSE> {
            return await this.request(secret, 't1427', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 신고/신저가
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1442_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1442_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1442_RESPONSE} response               응답
     * @returns {typeRest.T1442_RESPONSE}
     */
    public async t1442(
        secret: Secret, requestHeader: typeRest.T1442_REQUEST_HEADER, requestBody: typeRest.T1442_REQUEST_BODY, 
        response: typeRest.T1442_RESPONSE | null = null): Promise<typeRest.T1442_RESPONSE> {
            return await this.request(secret, 't1442', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 가격대별매매비중조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1449_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1449_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1449_RESPONSE} response               응답
     * @returns {typeRest.T1449_RESPONSE}
     */
    public async t1449(
        secret: Secret, requestHeader: typeRest.T1449_REQUEST_HEADER, requestBody: typeRest.T1449_REQUEST_BODY, 
        response: typeRest.T1449_RESPONSE | null = null): Promise<typeRest.T1449_RESPONSE> {
            return await this.request(secret, 't1449', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 시간대별호가잔량추이
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1471_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1471_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1471_RESPONSE} response               응답
     * @returns {typeRest.T1471_RESPONSE}
     */
    public async t1471(
        secret: Secret, requestHeader: typeRest.T1471_REQUEST_HEADER, requestBody: typeRest.T1471_REQUEST_BODY, 
        response: typeRest.T1471_RESPONSE | null = null): Promise<typeRest.T1471_RESPONSE> {
            return await this.request(secret, 't1471', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 체결강도추이
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1475_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1475_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1475_RESPONSE} response               응답
     * @returns {typeRest.T1475_RESPONSE}
     */
    public async t1475(
        secret: Secret, requestHeader: typeRest.T1475_REQUEST_HEADER, requestBody: typeRest.T1475_REQUEST_BODY, 
        response: typeRest.T1475_RESPONSE | null = null): Promise<typeRest.T1475_RESPONSE> {
            return await this.request(secret, 't1475', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 시간별예상체결가
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1486_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1486_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1486_RESPONSE} response               응답
     * @returns {typeRest.T1486_RESPONSE}
     */
    public async t1486(
        secret: Secret, requestHeader: typeRest.T1486_REQUEST_HEADER, requestBody: typeRest.T1486_REQUEST_BODY, 
        response: typeRest.T1486_RESPONSE | null = null): Promise<typeRest.T1486_RESPONSE> {
            return await this.request(secret, 't1486', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 예상체결가등락율상위조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1488_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1488_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1488_RESPONSE} response               응답
     * @returns {typeRest.T1488_RESPONSE}
     */
    public async t1488(
        secret: Secret, requestHeader: typeRest.T1488_REQUEST_HEADER, requestBody: typeRest.T1488_REQUEST_BODY, 
        response: typeRest.T1488_RESPONSE | null = null): Promise<typeRest.T1488_RESPONSE> {
            return await this.request(secret, 't1488', requestHeader, requestBody, response);
        }
                    
    /**
     * @description API용주식멀티현재가조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T8407_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T8407_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T8407_RESPONSE} response               응답
     * @returns {typeRest.T8407_RESPONSE}
     */
    public async t8407(
        secret: Secret, requestHeader: typeRest.T8407_REQUEST_HEADER, requestBody: typeRest.T8407_REQUEST_BODY, 
        response: typeRest.T8407_RESPONSE | null = null): Promise<typeRest.T8407_RESPONSE> {
            return await this.request(secret, 't8407', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식마스터조회API용
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T9945_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T9945_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T9945_RESPONSE} response               응답
     * @returns {typeRest.T9945_RESPONSE}
     */
    public async t9945(
        secret: Secret, requestHeader: typeRest.T9945_REQUEST_HEADER, requestBody: typeRest.T9945_REQUEST_BODY, 
        response: typeRest.T9945_RESPONSE | null = null): Promise<typeRest.T9945_RESPONSE> {
            return await this.request(secret, 't9945', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 종목별상위회원사
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1752_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1752_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1752_RESPONSE} response               응답
     * @returns {typeRest.T1752_RESPONSE}
     */
    public async t1752(
        secret: Secret, requestHeader: typeRest.T1752_REQUEST_HEADER, requestBody: typeRest.T1752_REQUEST_BODY, 
        response: typeRest.T1752_RESPONSE | null = null): Promise<typeRest.T1752_RESPONSE> {
            return await this.request(secret, 't1752', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 회원사리스트
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1764_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1764_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1764_RESPONSE} response               응답
     * @returns {typeRest.T1764_RESPONSE}
     */
    public async t1764(
        secret: Secret, requestHeader: typeRest.T1764_REQUEST_HEADER, requestBody: typeRest.T1764_REQUEST_BODY, 
        response: typeRest.T1764_RESPONSE | null = null): Promise<typeRest.T1764_RESPONSE> {
            return await this.request(secret, 't1764', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 종목별회원사추이
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1771_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1771_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1771_RESPONSE} response               응답
     * @returns {typeRest.T1771_RESPONSE}
     */
    public async t1771(
        secret: Secret, requestHeader: typeRest.T1771_REQUEST_HEADER, requestBody: typeRest.T1771_REQUEST_BODY, 
        response: typeRest.T1771_RESPONSE | null = null): Promise<typeRest.T1771_RESPONSE> {
            return await this.request(secret, 't1771', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 뉴스본문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T3102_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T3102_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T3102_RESPONSE} response               응답
     * @returns {typeRest.T3102_RESPONSE}
     */
    public async t3102(
        secret: Secret, requestHeader: typeRest.T3102_REQUEST_HEADER, requestBody: typeRest.T3102_REQUEST_BODY, 
        response: typeRest.T3102_RESPONSE | null = null): Promise<typeRest.T3102_RESPONSE> {
            return await this.request(secret, 't3102', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 종목별증시일정
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T3202_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T3202_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T3202_RESPONSE} response               응답
     * @returns {typeRest.T3202_RESPONSE}
     */
    public async t3202(
        secret: Secret, requestHeader: typeRest.T3202_REQUEST_HEADER, requestBody: typeRest.T3202_REQUEST_BODY, 
        response: typeRest.T3202_RESPONSE | null = null): Promise<typeRest.T3202_RESPONSE> {
            return await this.request(secret, 't3202', requestHeader, requestBody, response);
        }
                    
    /**
     * @description FNG_요약
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T3320_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T3320_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T3320_RESPONSE} response               응답
     * @returns {typeRest.T3320_RESPONSE}
     */
    public async t3320(
        secret: Secret, requestHeader: typeRest.T3320_REQUEST_HEADER, requestBody: typeRest.T3320_REQUEST_BODY, 
        response: typeRest.T3320_RESPONSE | null = null): Promise<typeRest.T3320_RESPONSE> {
            return await this.request(secret, 't3320', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 재무순위종합
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T3341_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T3341_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T3341_RESPONSE} response               응답
     * @returns {typeRest.T3341_RESPONSE}
     */
    public async t3341(
        secret: Secret, requestHeader: typeRest.T3341_REQUEST_HEADER, requestBody: typeRest.T3341_REQUEST_BODY, 
        response: typeRest.T3341_RESPONSE | null = null): Promise<typeRest.T3341_RESPONSE> {
            return await this.request(secret, 't3341', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 투자의견
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T3401_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T3401_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T3401_RESPONSE} response               응답
     * @returns {typeRest.T3401_RESPONSE}
     */
    public async t3401(
        secret: Secret, requestHeader: typeRest.T3401_REQUEST_HEADER, requestBody: typeRest.T3401_REQUEST_BODY, 
        response: typeRest.T3401_RESPONSE | null = null): Promise<typeRest.T3401_RESPONSE> {
            return await this.request(secret, 't3401', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외실시간지수
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T3518_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T3518_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T3518_RESPONSE} response               응답
     * @returns {typeRest.T3518_RESPONSE}
     */
    public async t3518(
        secret: Secret, requestHeader: typeRest.T3518_REQUEST_HEADER, requestBody: typeRest.T3518_REQUEST_BODY, 
        response: typeRest.T3518_RESPONSE | null = null): Promise<typeRest.T3518_RESPONSE> {
            return await this.request(secret, 't3518', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외지수조회(API용)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T3521_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T3521_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T3521_RESPONSE} response               응답
     * @returns {typeRest.T3521_RESPONSE}
     */
    public async t3521(
        secret: Secret, requestHeader: typeRest.T3521_REQUEST_HEADER, requestBody: typeRest.T3521_REQUEST_BODY, 
        response: typeRest.T3521_RESPONSE | null = null): Promise<typeRest.T3521_RESPONSE> {
            return await this.request(secret, 't3521', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 증시주변자금추이
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T8428_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T8428_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T8428_RESPONSE} response               응답
     * @returns {typeRest.T8428_RESPONSE}
     */
    public async t8428(
        secret: Secret, requestHeader: typeRest.T8428_REQUEST_HEADER, requestBody: typeRest.T8428_REQUEST_BODY, 
        response: typeRest.T8428_RESPONSE | null = null): Promise<typeRest.T8428_RESPONSE> {
            return await this.request(secret, 't8428', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 프로그램매매종합조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1631_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1631_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1631_RESPONSE} response               응답
     * @returns {typeRest.T1631_RESPONSE}
     */
    public async t1631(
        secret: Secret, requestHeader: typeRest.T1631_REQUEST_HEADER, requestBody: typeRest.T1631_REQUEST_BODY, 
        response: typeRest.T1631_RESPONSE | null = null): Promise<typeRest.T1631_RESPONSE> {
            return await this.request(secret, 't1631', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 시간대별프로그램매매추이
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1632_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1632_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1632_RESPONSE} response               응답
     * @returns {typeRest.T1632_RESPONSE}
     */
    public async t1632(
        secret: Secret, requestHeader: typeRest.T1632_REQUEST_HEADER, requestBody: typeRest.T1632_REQUEST_BODY, 
        response: typeRest.T1632_RESPONSE | null = null): Promise<typeRest.T1632_RESPONSE> {
            return await this.request(secret, 't1632', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 기간별프로그램매매추이
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1633_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1633_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1633_RESPONSE} response               응답
     * @returns {typeRest.T1633_RESPONSE}
     */
    public async t1633(
        secret: Secret, requestHeader: typeRest.T1633_REQUEST_HEADER, requestBody: typeRest.T1633_REQUEST_BODY, 
        response: typeRest.T1633_RESPONSE | null = null): Promise<typeRest.T1633_RESPONSE> {
            return await this.request(secret, 't1633', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 종목별프로그램매매동향
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1636_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1636_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1636_RESPONSE} response               응답
     * @returns {typeRest.T1636_RESPONSE}
     */
    public async t1636(
        secret: Secret, requestHeader: typeRest.T1636_REQUEST_HEADER, requestBody: typeRest.T1636_REQUEST_BODY, 
        response: typeRest.T1636_RESPONSE | null = null): Promise<typeRest.T1636_RESPONSE> {
            return await this.request(secret, 't1636', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 종목별프로그램매매추이
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1637_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1637_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1637_RESPONSE} response               응답
     * @returns {typeRest.T1637_RESPONSE}
     */
    public async t1637(
        secret: Secret, requestHeader: typeRest.T1637_REQUEST_HEADER, requestBody: typeRest.T1637_REQUEST_BODY, 
        response: typeRest.T1637_RESPONSE | null = null): Promise<typeRest.T1637_RESPONSE> {
            return await this.request(secret, 't1637', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 프로그램매매종합조회(미니)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1640_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1640_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1640_RESPONSE} response               응답
     * @returns {typeRest.T1640_RESPONSE}
     */
    public async t1640(
        secret: Secret, requestHeader: typeRest.T1640_REQUEST_HEADER, requestBody: typeRest.T1640_REQUEST_BODY, 
        response: typeRest.T1640_RESPONSE | null = null): Promise<typeRest.T1640_RESPONSE> {
            return await this.request(secret, 't1640', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 시간대별프로그램매매추이(차트)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1662_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1662_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1662_RESPONSE} response               응답
     * @returns {typeRest.T1662_RESPONSE}
     */
    public async t1662(
        secret: Secret, requestHeader: typeRest.T1662_REQUEST_HEADER, requestBody: typeRest.T1662_REQUEST_BODY, 
        response: typeRest.T1662_RESPONSE | null = null): Promise<typeRest.T1662_RESPONSE> {
            return await this.request(secret, 't1662', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 투자자별종합
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1601_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1601_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1601_RESPONSE} response               응답
     * @returns {typeRest.T1601_RESPONSE}
     */
    public async t1601(
        secret: Secret, requestHeader: typeRest.T1601_REQUEST_HEADER, requestBody: typeRest.T1601_REQUEST_BODY, 
        response: typeRest.T1601_RESPONSE | null = null): Promise<typeRest.T1601_RESPONSE> {
            return await this.request(secret, 't1601', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 시간대별투자자매매추이
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1602_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1602_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1602_RESPONSE} response               응답
     * @returns {typeRest.T1602_RESPONSE}
     */
    public async t1602(
        secret: Secret, requestHeader: typeRest.T1602_REQUEST_HEADER, requestBody: typeRest.T1602_REQUEST_BODY, 
        response: typeRest.T1602_RESPONSE | null = null): Promise<typeRest.T1602_RESPONSE> {
            return await this.request(secret, 't1602', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 시간대별투자자매매추이상세
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1603_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1603_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1603_RESPONSE} response               응답
     * @returns {typeRest.T1603_RESPONSE}
     */
    public async t1603(
        secret: Secret, requestHeader: typeRest.T1603_REQUEST_HEADER, requestBody: typeRest.T1603_REQUEST_BODY, 
        response: typeRest.T1603_RESPONSE | null = null): Promise<typeRest.T1603_RESPONSE> {
            return await this.request(secret, 't1603', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 투자자매매종합1
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1615_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1615_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1615_RESPONSE} response               응답
     * @returns {typeRest.T1615_RESPONSE}
     */
    public async t1615(
        secret: Secret, requestHeader: typeRest.T1615_REQUEST_HEADER, requestBody: typeRest.T1615_REQUEST_BODY, 
        response: typeRest.T1615_RESPONSE | null = null): Promise<typeRest.T1615_RESPONSE> {
            return await this.request(secret, 't1615', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 투자자매매종합2
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1617_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1617_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1617_RESPONSE} response               응답
     * @returns {typeRest.T1617_RESPONSE}
     */
    public async t1617(
        secret: Secret, requestHeader: typeRest.T1617_REQUEST_HEADER, requestBody: typeRest.T1617_REQUEST_BODY, 
        response: typeRest.T1617_RESPONSE | null = null): Promise<typeRest.T1617_RESPONSE> {
            return await this.request(secret, 't1617', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 업종별분별투자자매매동향(챠트용)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1621_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1621_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1621_RESPONSE} response               응답
     * @returns {typeRest.T1621_RESPONSE}
     */
    public async t1621(
        secret: Secret, requestHeader: typeRest.T1621_REQUEST_HEADER, requestBody: typeRest.T1621_REQUEST_BODY, 
        response: typeRest.T1621_RESPONSE | null = null): Promise<typeRest.T1621_RESPONSE> {
            return await this.request(secret, 't1621', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 투자자매매종합(챠트)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1664_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1664_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1664_RESPONSE} response               응답
     * @returns {typeRest.T1664_RESPONSE}
     */
    public async t1664(
        secret: Secret, requestHeader: typeRest.T1664_REQUEST_HEADER, requestBody: typeRest.T1664_REQUEST_BODY, 
        response: typeRest.T1664_RESPONSE | null = null): Promise<typeRest.T1664_RESPONSE> {
            return await this.request(secret, 't1664', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 외인기관종목별동향
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1702_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1702_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1702_RESPONSE} response               응답
     * @returns {typeRest.T1702_RESPONSE}
     */
    public async t1702(
        secret: Secret, requestHeader: typeRest.T1702_REQUEST_HEADER, requestBody: typeRest.T1702_REQUEST_BODY, 
        response: typeRest.T1702_RESPONSE | null = null): Promise<typeRest.T1702_RESPONSE> {
            return await this.request(secret, 't1702', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 외인기관종목별동향
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1716_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1716_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1716_RESPONSE} response               응답
     * @returns {typeRest.T1716_RESPONSE}
     */
    public async t1716(
        secret: Secret, requestHeader: typeRest.T1716_REQUEST_HEADER, requestBody: typeRest.T1716_REQUEST_BODY, 
        response: typeRest.T1716_RESPONSE | null = null): Promise<typeRest.T1716_RESPONSE> {
            return await this.request(secret, 't1716', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 외인기관종목별동향
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1717_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1717_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1717_RESPONSE} response               응답
     * @returns {typeRest.T1717_RESPONSE}
     */
    public async t1717(
        secret: Secret, requestHeader: typeRest.T1717_REQUEST_HEADER, requestBody: typeRest.T1717_REQUEST_BODY, 
        response: typeRest.T1717_RESPONSE | null = null): Promise<typeRest.T1717_RESPONSE> {
            return await this.request(secret, 't1717', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW현재가(시세)조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1950_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1950_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1950_RESPONSE} response               응답
     * @returns {typeRest.T1950_RESPONSE}
     */
    public async t1950(
        secret: Secret, requestHeader: typeRest.T1950_REQUEST_HEADER, requestBody: typeRest.T1950_REQUEST_BODY, 
        response: typeRest.T1950_RESPONSE | null = null): Promise<typeRest.T1950_RESPONSE> {
            return await this.request(secret, 't1950', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW시간대별체결조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1951_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1951_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1951_RESPONSE} response               응답
     * @returns {typeRest.T1951_RESPONSE}
     */
    public async t1951(
        secret: Secret, requestHeader: typeRest.T1951_REQUEST_HEADER, requestBody: typeRest.T1951_REQUEST_BODY, 
        response: typeRest.T1951_RESPONSE | null = null): Promise<typeRest.T1951_RESPONSE> {
            return await this.request(secret, 't1951', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW일별주가
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1954_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1954_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1954_RESPONSE} response               응답
     * @returns {typeRest.T1954_RESPONSE}
     */
    public async t1954(
        secret: Secret, requestHeader: typeRest.T1954_REQUEST_HEADER, requestBody: typeRest.T1954_REQUEST_BODY, 
        response: typeRest.T1954_RESPONSE | null = null): Promise<typeRest.T1954_RESPONSE> {
            return await this.request(secret, 't1954', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW현재가(확정지급액)조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1956_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1956_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1956_RESPONSE} response               응답
     * @returns {typeRest.T1956_RESPONSE}
     */
    public async t1956(
        secret: Secret, requestHeader: typeRest.T1956_REQUEST_HEADER, requestBody: typeRest.T1956_REQUEST_BODY, 
        response: typeRest.T1956_RESPONSE | null = null): Promise<typeRest.T1956_RESPONSE> {
            return await this.request(secret, 't1956', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW종목비교
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1958_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1958_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1958_RESPONSE} response               응답
     * @returns {typeRest.T1958_RESPONSE}
     */
    public async t1958(
        secret: Secret, requestHeader: typeRest.T1958_REQUEST_HEADER, requestBody: typeRest.T1958_REQUEST_BODY, 
        response: typeRest.T1958_RESPONSE | null = null): Promise<typeRest.T1958_RESPONSE> {
            return await this.request(secret, 't1958', requestHeader, requestBody, response);
        }
                    
    /**
     * @description LP대상종목정보조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1959_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1959_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1959_RESPONSE} response               응답
     * @returns {typeRest.T1959_RESPONSE}
     */
    public async t1959(
        secret: Secret, requestHeader: typeRest.T1959_REQUEST_HEADER, requestBody: typeRest.T1959_REQUEST_BODY, 
        response: typeRest.T1959_RESPONSE | null = null): Promise<typeRest.T1959_RESPONSE> {
            return await this.request(secret, 't1959', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW등락율상위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1960_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1960_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1960_RESPONSE} response               응답
     * @returns {typeRest.T1960_RESPONSE}
     */
    public async t1960(
        secret: Secret, requestHeader: typeRest.T1960_REQUEST_HEADER, requestBody: typeRest.T1960_REQUEST_BODY, 
        response: typeRest.T1960_RESPONSE | null = null): Promise<typeRest.T1960_RESPONSE> {
            return await this.request(secret, 't1960', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW거래량상위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1961_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1961_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1961_RESPONSE} response               응답
     * @returns {typeRest.T1961_RESPONSE}
     */
    public async t1961(
        secret: Secret, requestHeader: typeRest.T1961_REQUEST_HEADER, requestBody: typeRest.T1961_REQUEST_BODY, 
        response: typeRest.T1961_RESPONSE | null = null): Promise<typeRest.T1961_RESPONSE> {
            return await this.request(secret, 't1961', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW전광판
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1964_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1964_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1964_RESPONSE} response               응답
     * @returns {typeRest.T1964_RESPONSE}
     */
    public async t1964(
        secret: Secret, requestHeader: typeRest.T1964_REQUEST_HEADER, requestBody: typeRest.T1964_REQUEST_BODY, 
        response: typeRest.T1964_RESPONSE | null = null): Promise<typeRest.T1964_RESPONSE> {
            return await this.request(secret, 't1964', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW거래대금상위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1966_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1966_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1966_RESPONSE} response               응답
     * @returns {typeRest.T1966_RESPONSE}
     */
    public async t1966(
        secret: Secret, requestHeader: typeRest.T1966_REQUEST_HEADER, requestBody: typeRest.T1966_REQUEST_BODY, 
        response: typeRest.T1966_RESPONSE | null = null): Promise<typeRest.T1966_RESPONSE> {
            return await this.request(secret, 't1966', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW지표검색
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1969_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1969_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1969_RESPONSE} response               응답
     * @returns {typeRest.T1969_RESPONSE}
     */
    public async t1969(
        secret: Secret, requestHeader: typeRest.T1969_REQUEST_HEADER, requestBody: typeRest.T1969_REQUEST_BODY, 
        response: typeRest.T1969_RESPONSE | null = null): Promise<typeRest.T1969_RESPONSE> {
            return await this.request(secret, 't1969', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW현재가호가조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1971_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1971_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1971_RESPONSE} response               응답
     * @returns {typeRest.T1971_RESPONSE}
     */
    public async t1971(
        secret: Secret, requestHeader: typeRest.T1971_REQUEST_HEADER, requestBody: typeRest.T1971_REQUEST_BODY, 
        response: typeRest.T1971_RESPONSE | null = null): Promise<typeRest.T1971_RESPONSE> {
            return await this.request(secret, 't1971', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW현재가(거래원)조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1972_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1972_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1972_RESPONSE} response               응답
     * @returns {typeRest.T1972_RESPONSE}
     */
    public async t1972(
        secret: Secret, requestHeader: typeRest.T1972_REQUEST_HEADER, requestBody: typeRest.T1972_REQUEST_BODY, 
        response: typeRest.T1972_RESPONSE | null = null): Promise<typeRest.T1972_RESPONSE> {
            return await this.request(secret, 't1972', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW시간대별예상체결조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1973_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1973_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1973_RESPONSE} response               응답
     * @returns {typeRest.T1973_RESPONSE}
     */
    public async t1973(
        secret: Secret, requestHeader: typeRest.T1973_REQUEST_HEADER, requestBody: typeRest.T1973_REQUEST_BODY, 
        response: typeRest.T1973_RESPONSE | null = null): Promise<typeRest.T1973_RESPONSE> {
            return await this.request(secret, 't1973', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW기초자산동일종목
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1974_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1974_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1974_RESPONSE} response               응답
     * @returns {typeRest.T1974_RESPONSE}
     */
    public async t1974(
        secret: Secret, requestHeader: typeRest.T1974_REQUEST_HEADER, requestBody: typeRest.T1974_REQUEST_BODY, 
        response: typeRest.T1974_RESPONSE | null = null): Promise<typeRest.T1974_RESPONSE> {
            return await this.request(secret, 't1974', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 기초자산리스트조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1988_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1988_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1988_RESPONSE} response               응답
     * @returns {typeRest.T1988_RESPONSE}
     */
    public async t1988(
        secret: Secret, requestHeader: typeRest.T1988_REQUEST_HEADER, requestBody: typeRest.T1988_REQUEST_BODY, 
        response: typeRest.T1988_RESPONSE | null = null): Promise<typeRest.T1988_RESPONSE> {
            return await this.request(secret, 't1988', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW종목조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T8431_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T8431_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T8431_RESPONSE} response               응답
     * @returns {typeRest.T8431_RESPONSE}
     */
    public async t8431(
        secret: Secret, requestHeader: typeRest.T8431_REQUEST_HEADER, requestBody: typeRest.T8431_REQUEST_BODY, 
        response: typeRest.T8431_RESPONSE | null = null): Promise<typeRest.T8431_RESPONSE> {
            return await this.request(secret, 't8431', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 기초자산리스트조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T9905_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T9905_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T9905_RESPONSE} response               응답
     * @returns {typeRest.T9905_RESPONSE}
     */
    public async t9905(
        secret: Secret, requestHeader: typeRest.T9905_REQUEST_HEADER, requestBody: typeRest.T9905_REQUEST_BODY, 
        response: typeRest.T9905_RESPONSE | null = null): Promise<typeRest.T9905_RESPONSE> {
            return await this.request(secret, 't9905', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 만기월조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T9907_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T9907_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T9907_RESPONSE} response               응답
     * @returns {typeRest.T9907_RESPONSE}
     */
    public async t9907(
        secret: Secret, requestHeader: typeRest.T9907_REQUEST_HEADER, requestBody: typeRest.T9907_REQUEST_BODY, 
        response: typeRest.T9907_RESPONSE | null = null): Promise<typeRest.T9907_RESPONSE> {
            return await this.request(secret, 't9907', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ELW마스터조회API용
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T9942_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T9942_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T9942_RESPONSE} response               응답
     * @returns {typeRest.T9942_RESPONSE}
     */
    public async t9942(
        secret: Secret, requestHeader: typeRest.T9942_REQUEST_HEADER, requestBody: typeRest.T9942_REQUEST_BODY, 
        response: typeRest.T9942_RESPONSE | null = null): Promise<typeRest.T9942_RESPONSE> {
            return await this.request(secret, 't9942', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ETF현재가(시세)조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1901_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1901_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1901_RESPONSE} response               응답
     * @returns {typeRest.T1901_RESPONSE}
     */
    public async t1901(
        secret: Secret, requestHeader: typeRest.T1901_REQUEST_HEADER, requestBody: typeRest.T1901_REQUEST_BODY, 
        response: typeRest.T1901_RESPONSE | null = null): Promise<typeRest.T1901_RESPONSE> {
            return await this.request(secret, 't1901', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ETF시간별추이
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1902_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1902_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1902_RESPONSE} response               응답
     * @returns {typeRest.T1902_RESPONSE}
     */
    public async t1902(
        secret: Secret, requestHeader: typeRest.T1902_REQUEST_HEADER, requestBody: typeRest.T1902_REQUEST_BODY, 
        response: typeRest.T1902_RESPONSE | null = null): Promise<typeRest.T1902_RESPONSE> {
            return await this.request(secret, 't1902', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ETF일별추이
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1903_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1903_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1903_RESPONSE} response               응답
     * @returns {typeRest.T1903_RESPONSE}
     */
    public async t1903(
        secret: Secret, requestHeader: typeRest.T1903_REQUEST_HEADER, requestBody: typeRest.T1903_REQUEST_BODY, 
        response: typeRest.T1903_RESPONSE | null = null): Promise<typeRest.T1903_RESPONSE> {
            return await this.request(secret, 't1903', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ETF구성종목조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1904_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1904_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1904_RESPONSE} response               응답
     * @returns {typeRest.T1904_RESPONSE}
     */
    public async t1904(
        secret: Secret, requestHeader: typeRest.T1904_REQUEST_HEADER, requestBody: typeRest.T1904_REQUEST_BODY, 
        response: typeRest.T1904_RESPONSE | null = null): Promise<typeRest.T1904_RESPONSE> {
            return await this.request(secret, 't1904', requestHeader, requestBody, response);
        }
                    
    /**
     * @description ETFLP호가
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1906_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1906_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1906_RESPONSE} response               응답
     * @returns {typeRest.T1906_RESPONSE}
     */
    public async t1906(
        secret: Secret, requestHeader: typeRest.T1906_REQUEST_HEADER, requestBody: typeRest.T1906_REQUEST_BODY, 
        response: typeRest.T1906_RESPONSE | null = null): Promise<typeRest.T1906_RESPONSE> {
            return await this.request(secret, 't1906', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 테마별종목
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1531_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1531_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1531_RESPONSE} response               응답
     * @returns {typeRest.T1531_RESPONSE}
     */
    public async t1531(
        secret: Secret, requestHeader: typeRest.T1531_REQUEST_HEADER, requestBody: typeRest.T1531_REQUEST_BODY, 
        response: typeRest.T1531_RESPONSE | null = null): Promise<typeRest.T1531_RESPONSE> {
            return await this.request(secret, 't1531', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 종목별테마
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1532_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1532_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1532_RESPONSE} response               응답
     * @returns {typeRest.T1532_RESPONSE}
     */
    public async t1532(
        secret: Secret, requestHeader: typeRest.T1532_REQUEST_HEADER, requestBody: typeRest.T1532_REQUEST_BODY, 
        response: typeRest.T1532_RESPONSE | null = null): Promise<typeRest.T1532_RESPONSE> {
            return await this.request(secret, 't1532', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 특이테마
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1533_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1533_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1533_RESPONSE} response               응답
     * @returns {typeRest.T1533_RESPONSE}
     */
    public async t1533(
        secret: Secret, requestHeader: typeRest.T1533_REQUEST_HEADER, requestBody: typeRest.T1533_REQUEST_BODY, 
        response: typeRest.T1533_RESPONSE | null = null): Promise<typeRest.T1533_RESPONSE> {
            return await this.request(secret, 't1533', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 테마종목별시세조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1537_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1537_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1537_RESPONSE} response               응답
     * @returns {typeRest.T1537_RESPONSE}
     */
    public async t1537(
        secret: Secret, requestHeader: typeRest.T1537_REQUEST_HEADER, requestBody: typeRest.T1537_REQUEST_BODY, 
        response: typeRest.T1537_RESPONSE | null = null): Promise<typeRest.T1537_RESPONSE> {
            return await this.request(secret, 't1537', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 전체테마
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T8425_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T8425_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T8425_RESPONSE} response               응답
     * @returns {typeRest.T8425_RESPONSE}
     */
    public async t8425(
        secret: Secret, requestHeader: typeRest.T8425_REQUEST_HEADER, requestBody: typeRest.T8425_REQUEST_BODY, 
        response: typeRest.T8425_RESPONSE | null = null): Promise<typeRest.T8425_RESPONSE> {
            return await this.request(secret, 't8425', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 신호조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1809_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1809_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1809_RESPONSE} response               응답
     * @returns {typeRest.T1809_RESPONSE}
     */
    public async t1809(
        secret: Secret, requestHeader: typeRest.T1809_REQUEST_HEADER, requestBody: typeRest.T1809_REQUEST_BODY, 
        response: typeRest.T1809_RESPONSE | null = null): Promise<typeRest.T1809_RESPONSE> {
            return await this.request(secret, 't1809', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 종목Q클릭검색(씽큐스마트)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1825_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1825_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1825_RESPONSE} response               응답
     * @returns {typeRest.T1825_RESPONSE}
     */
    public async t1825(
        secret: Secret, requestHeader: typeRest.T1825_REQUEST_HEADER, requestBody: typeRest.T1825_REQUEST_BODY, 
        response: typeRest.T1825_RESPONSE | null = null): Promise<typeRest.T1825_RESPONSE> {
            return await this.request(secret, 't1825', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 종목Q클릭검색리스트조회(씽큐스마트)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1826_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1826_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1826_RESPONSE} response               응답
     * @returns {typeRest.T1826_RESPONSE}
     */
    public async t1826(
        secret: Secret, requestHeader: typeRest.T1826_REQUEST_HEADER, requestBody: typeRest.T1826_REQUEST_BODY, 
        response: typeRest.T1826_RESPONSE | null = null): Promise<typeRest.T1826_RESPONSE> {
            return await this.request(secret, 't1826', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 서버저장조건 리스트조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1866_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1866_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1866_RESPONSE} response               응답
     * @returns {typeRest.T1866_RESPONSE}
     */
    public async t1866(
        secret: Secret, requestHeader: typeRest.T1866_REQUEST_HEADER, requestBody: typeRest.T1866_REQUEST_BODY, 
        response: typeRest.T1866_RESPONSE | null = null): Promise<typeRest.T1866_RESPONSE> {
            return await this.request(secret, 't1866', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 서버저장조건 조건검색
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1859_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1859_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1859_RESPONSE} response               응답
     * @returns {typeRest.T1859_RESPONSE}
     */
    public async t1859(
        secret: Secret, requestHeader: typeRest.T1859_REQUEST_HEADER, requestBody: typeRest.T1859_REQUEST_BODY, 
        response: typeRest.T1859_RESPONSE | null = null): Promise<typeRest.T1859_RESPONSE> {
            return await this.request(secret, 't1859', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 서버저장조건 실시간검색
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1860_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1860_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1860_RESPONSE} response               응답
     * @returns {typeRest.T1860_RESPONSE}
     */
    public async t1860(
        secret: Secret, requestHeader: typeRest.T1860_REQUEST_HEADER, requestBody: typeRest.T1860_REQUEST_BODY, 
        response: typeRest.T1860_RESPONSE | null = null): Promise<typeRest.T1860_RESPONSE> {
            return await this.request(secret, 't1860', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 등락율상위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1441_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1441_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1441_RESPONSE} response               응답
     * @returns {typeRest.T1441_RESPONSE}
     */
    public async t1441(
        secret: Secret, requestHeader: typeRest.T1441_REQUEST_HEADER, requestBody: typeRest.T1441_REQUEST_BODY, 
        response: typeRest.T1441_RESPONSE | null = null): Promise<typeRest.T1441_RESPONSE> {
            return await this.request(secret, 't1441', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 시가총액상위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1444_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1444_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1444_RESPONSE} response               응답
     * @returns {typeRest.T1444_RESPONSE}
     */
    public async t1444(
        secret: Secret, requestHeader: typeRest.T1444_REQUEST_HEADER, requestBody: typeRest.T1444_REQUEST_BODY, 
        response: typeRest.T1444_RESPONSE | null = null): Promise<typeRest.T1444_RESPONSE> {
            return await this.request(secret, 't1444', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 거래량상위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1452_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1452_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1452_RESPONSE} response               응답
     * @returns {typeRest.T1452_RESPONSE}
     */
    public async t1452(
        secret: Secret, requestHeader: typeRest.T1452_REQUEST_HEADER, requestBody: typeRest.T1452_REQUEST_BODY, 
        response: typeRest.T1452_RESPONSE | null = null): Promise<typeRest.T1452_RESPONSE> {
            return await this.request(secret, 't1452', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 거래대금상위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1463_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1463_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1463_RESPONSE} response               응답
     * @returns {typeRest.T1463_RESPONSE}
     */
    public async t1463(
        secret: Secret, requestHeader: typeRest.T1463_REQUEST_HEADER, requestBody: typeRest.T1463_REQUEST_BODY, 
        response: typeRest.T1463_RESPONSE | null = null): Promise<typeRest.T1463_RESPONSE> {
            return await this.request(secret, 't1463', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 전일동시간대비거래급증
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1466_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1466_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1466_RESPONSE} response               응답
     * @returns {typeRest.T1466_RESPONSE}
     */
    public async t1466(
        secret: Secret, requestHeader: typeRest.T1466_REQUEST_HEADER, requestBody: typeRest.T1466_REQUEST_BODY, 
        response: typeRest.T1466_RESPONSE | null = null): Promise<typeRest.T1466_RESPONSE> {
            return await this.request(secret, 't1466', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 시간외등락율상위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1481_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1481_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1481_RESPONSE} response               응답
     * @returns {typeRest.T1481_RESPONSE}
     */
    public async t1481(
        secret: Secret, requestHeader: typeRest.T1481_REQUEST_HEADER, requestBody: typeRest.T1481_REQUEST_BODY, 
        response: typeRest.T1481_RESPONSE | null = null): Promise<typeRest.T1481_RESPONSE> {
            return await this.request(secret, 't1481', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 시간외거래량상위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1482_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1482_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1482_RESPONSE} response               응답
     * @returns {typeRest.T1482_RESPONSE}
     */
    public async t1482(
        secret: Secret, requestHeader: typeRest.T1482_REQUEST_HEADER, requestBody: typeRest.T1482_REQUEST_BODY, 
        response: typeRest.T1482_RESPONSE | null = null): Promise<typeRest.T1482_RESPONSE> {
            return await this.request(secret, 't1482', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 예상체결량상위조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1489_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1489_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1489_RESPONSE} response               응답
     * @returns {typeRest.T1489_RESPONSE}
     */
    public async t1489(
        secret: Secret, requestHeader: typeRest.T1489_REQUEST_HEADER, requestBody: typeRest.T1489_REQUEST_BODY, 
        response: typeRest.T1489_RESPONSE | null = null): Promise<typeRest.T1489_RESPONSE> {
            return await this.request(secret, 't1489', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 단일가예상등락율상위
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1492_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1492_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1492_RESPONSE} response               응답
     * @returns {typeRest.T1492_RESPONSE}
     */
    public async t1492(
        secret: Secret, requestHeader: typeRest.T1492_REQUEST_HEADER, requestBody: typeRest.T1492_REQUEST_BODY, 
        response: typeRest.T1492_RESPONSE | null = null): Promise<typeRest.T1492_RESPONSE> {
            return await this.request(secret, 't1492', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 기간별투자자매매추이(차트)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1665_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1665_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1665_RESPONSE} response               응답
     * @returns {typeRest.T1665_RESPONSE}
     */
    public async t1665(
        secret: Secret, requestHeader: typeRest.T1665_REQUEST_HEADER, requestBody: typeRest.T1665_REQUEST_BODY, 
        response: typeRest.T1665_RESPONSE | null = null): Promise<typeRest.T1665_RESPONSE> {
            return await this.request(secret, 't1665', requestHeader, requestBody, response);
        }
                    
    /**
     * @description API전용주식차트(일주월년)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T8410_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T8410_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T8410_RESPONSE} response               응답
     * @returns {typeRest.T8410_RESPONSE}
     */
    public async t8410(
        secret: Secret, requestHeader: typeRest.T8410_REQUEST_HEADER, requestBody: typeRest.T8410_REQUEST_BODY, 
        response: typeRest.T8410_RESPONSE | null = null): Promise<typeRest.T8410_RESPONSE> {
            return await this.request(secret, 't8410', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식차트(틱/n틱)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T8411_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T8411_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T8411_RESPONSE} response               응답
     * @returns {typeRest.T8411_RESPONSE}
     */
    public async t8411(
        secret: Secret, requestHeader: typeRest.T8411_REQUEST_HEADER, requestBody: typeRest.T8411_REQUEST_BODY, 
        response: typeRest.T8411_RESPONSE | null = null): Promise<typeRest.T8411_RESPONSE> {
            return await this.request(secret, 't8411', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식차트(N분)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T8412_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T8412_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T8412_RESPONSE} response               응답
     * @returns {typeRest.T8412_RESPONSE}
     */
    public async t8412(
        secret: Secret, requestHeader: typeRest.T8412_REQUEST_HEADER, requestBody: typeRest.T8412_REQUEST_BODY, 
        response: typeRest.T8412_RESPONSE | null = null): Promise<typeRest.T8412_RESPONSE> {
            return await this.request(secret, 't8412', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 예탁담보융자가능종목현황조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CLNAQ00100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CLNAQ00100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CLNAQ00100_RESPONSE} response               응답
     * @returns {typeRest.CLNAQ00100_RESPONSE}
     */
    public async CLNAQ00100(
        secret: Secret, requestHeader: typeRest.CLNAQ00100_REQUEST_HEADER, requestBody: typeRest.CLNAQ00100_REQUEST_BODY, 
        response: typeRest.CLNAQ00100_RESPONSE | null = null): Promise<typeRest.CLNAQ00100_RESPONSE> {
            return await this.request(secret, 'CLNAQ00100', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 신규상장종목조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1403_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1403_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1403_RESPONSE} response               응답
     * @returns {typeRest.T1403_RESPONSE}
     */
    public async t1403(
        secret: Secret, requestHeader: typeRest.T1403_REQUEST_HEADER, requestBody: typeRest.T1403_REQUEST_BODY, 
        response: typeRest.T1403_RESPONSE | null = null): Promise<typeRest.T1403_RESPONSE> {
            return await this.request(secret, 't1403', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 증거금율별종목조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1411_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1411_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1411_RESPONSE} response               응답
     * @returns {typeRest.T1411_RESPONSE}
     */
    public async t1411(
        secret: Secret, requestHeader: typeRest.T1411_REQUEST_HEADER, requestBody: typeRest.T1411_REQUEST_BODY, 
        response: typeRest.T1411_RESPONSE | null = null): Promise<typeRest.T1411_RESPONSE> {
            return await this.request(secret, 't1411', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 종목별잔량/사전공시
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1638_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1638_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1638_RESPONSE} response               응답
     * @returns {typeRest.T1638_RESPONSE}
     */
    public async t1638(
        secret: Secret, requestHeader: typeRest.T1638_REQUEST_HEADER, requestBody: typeRest.T1638_REQUEST_BODY, 
        response: typeRest.T1638_RESPONSE | null = null): Promise<typeRest.T1638_RESPONSE> {
            return await this.request(secret, 't1638', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 신용거래동향
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1921_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1921_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1921_RESPONSE} response               응답
     * @returns {typeRest.T1921_RESPONSE}
     */
    public async t1921(
        secret: Secret, requestHeader: typeRest.T1921_REQUEST_HEADER, requestBody: typeRest.T1921_REQUEST_BODY, 
        response: typeRest.T1921_RESPONSE | null = null): Promise<typeRest.T1921_RESPONSE> {
            return await this.request(secret, 't1921', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 종목별신용정보
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1926_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1926_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1926_RESPONSE} response               응답
     * @returns {typeRest.T1926_RESPONSE}
     */
    public async t1926(
        secret: Secret, requestHeader: typeRest.T1926_REQUEST_HEADER, requestBody: typeRest.T1926_REQUEST_BODY, 
        response: typeRest.T1926_RESPONSE | null = null): Promise<typeRest.T1926_RESPONSE> {
            return await this.request(secret, 't1926', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 공매도일별추이
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1927_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1927_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1927_RESPONSE} response               응답
     * @returns {typeRest.T1927_RESPONSE}
     */
    public async t1927(
        secret: Secret, requestHeader: typeRest.T1927_REQUEST_HEADER, requestBody: typeRest.T1927_REQUEST_BODY, 
        response: typeRest.T1927_RESPONSE | null = null): Promise<typeRest.T1927_RESPONSE> {
            return await this.request(secret, 't1927', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 종목별대차거래일간추이
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T1941_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T1941_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T1941_RESPONSE} response               응답
     * @returns {typeRest.T1941_RESPONSE}
     */
    public async t1941(
        secret: Secret, requestHeader: typeRest.T1941_REQUEST_HEADER, requestBody: typeRest.T1941_REQUEST_BODY, 
        response: typeRest.T1941_RESPONSE | null = null): Promise<typeRest.T1941_RESPONSE> {
            return await this.request(secret, 't1941', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식종목조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T8430_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T8430_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T8430_RESPONSE} response               응답
     * @returns {typeRest.T8430_RESPONSE}
     */
    public async t8430(
        secret: Secret, requestHeader: typeRest.T8430_REQUEST_HEADER, requestBody: typeRest.T8430_REQUEST_BODY, 
        response: typeRest.T8430_RESPONSE | null = null): Promise<typeRest.T8430_RESPONSE> {
            return await this.request(secret, 't8430', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식종목조회 API용
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T8436_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T8436_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T8436_RESPONSE} response               응답
     * @returns {typeRest.T8436_RESPONSE}
     */
    public async t8436(
        secret: Secret, requestHeader: typeRest.T8436_REQUEST_HEADER, requestBody: typeRest.T8436_REQUEST_BODY, 
        response: typeRest.T8436_RESPONSE | null = null): Promise<typeRest.T8436_RESPONSE> {
            return await this.request(secret, 't8436', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 계좌 거래내역
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CDPCQ04700_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CDPCQ04700_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CDPCQ04700_RESPONSE} response               응답
     * @returns {typeRest.CDPCQ04700_RESPONSE}
     */
    public async CDPCQ04700(
        secret: Secret, requestHeader: typeRest.CDPCQ04700_REQUEST_HEADER, requestBody: typeRest.CDPCQ04700_REQUEST_BODY, 
        response: typeRest.CDPCQ04700_RESPONSE | null = null): Promise<typeRest.CDPCQ04700_RESPONSE> {
            return await this.request(secret, 'CDPCQ04700', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 계좌별신용한도조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CSPAQ00600_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CSPAQ00600_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CSPAQ00600_RESPONSE} response               응답
     * @returns {typeRest.CSPAQ00600_RESPONSE}
     */
    public async CSPAQ00600(
        secret: Secret, requestHeader: typeRest.CSPAQ00600_REQUEST_HEADER, requestBody: typeRest.CSPAQ00600_REQUEST_BODY, 
        response: typeRest.CSPAQ00600_RESPONSE | null = null): Promise<typeRest.CSPAQ00600_RESPONSE> {
            return await this.request(secret, 'CSPAQ00600', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 현물계좌예수금 주문가능금액 총평가 조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CSPAQ12200_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CSPAQ12200_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CSPAQ12200_RESPONSE} response               응답
     * @returns {typeRest.CSPAQ12200_RESPONSE}
     */
    public async CSPAQ12200(
        secret: Secret, requestHeader: typeRest.CSPAQ12200_REQUEST_HEADER, requestBody: typeRest.CSPAQ12200_REQUEST_BODY, 
        response: typeRest.CSPAQ12200_RESPONSE | null = null): Promise<typeRest.CSPAQ12200_RESPONSE> {
            return await this.request(secret, 'CSPAQ12200', requestHeader, requestBody, response);
        }
                    
    /**
     * @description BEP단가조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CSPAQ12300_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CSPAQ12300_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CSPAQ12300_RESPONSE} response               응답
     * @returns {typeRest.CSPAQ12300_RESPONSE}
     */
    public async CSPAQ12300(
        secret: Secret, requestHeader: typeRest.CSPAQ12300_REQUEST_HEADER, requestBody: typeRest.CSPAQ12300_REQUEST_BODY, 
        response: typeRest.CSPAQ12300_RESPONSE | null = null): Promise<typeRest.CSPAQ12300_RESPONSE> {
            return await this.request(secret, 'CSPAQ12300', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 현물계좌 주문체결내역 조회(API)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CSPAQ13700_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CSPAQ13700_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CSPAQ13700_RESPONSE} response               응답
     * @returns {typeRest.CSPAQ13700_RESPONSE}
     */
    public async CSPAQ13700(
        secret: Secret, requestHeader: typeRest.CSPAQ13700_REQUEST_HEADER, requestBody: typeRest.CSPAQ13700_REQUEST_BODY, 
        response: typeRest.CSPAQ13700_RESPONSE | null = null): Promise<typeRest.CSPAQ13700_RESPONSE> {
            return await this.request(secret, 'CSPAQ13700', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 현물계좌예수금 주문가능금액 총평가2
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CSPAQ22200_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CSPAQ22200_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CSPAQ22200_RESPONSE} response               응답
     * @returns {typeRest.CSPAQ22200_RESPONSE}
     */
    public async CSPAQ22200(
        secret: Secret, requestHeader: typeRest.CSPAQ22200_REQUEST_HEADER, requestBody: typeRest.CSPAQ22200_REQUEST_BODY, 
        response: typeRest.CSPAQ22200_RESPONSE | null = null): Promise<typeRest.CSPAQ22200_RESPONSE> {
            return await this.request(secret, 'CSPAQ22200', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 현물계좌증거금률별주문가능수량조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CSPBQ00200_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CSPBQ00200_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CSPBQ00200_RESPONSE} response               응답
     * @returns {typeRest.CSPBQ00200_RESPONSE}
     */
    public async CSPBQ00200(
        secret: Secret, requestHeader: typeRest.CSPBQ00200_REQUEST_HEADER, requestBody: typeRest.CSPBQ00200_REQUEST_BODY, 
        response: typeRest.CSPBQ00200_RESPONSE | null = null): Promise<typeRest.CSPBQ00200_RESPONSE> {
            return await this.request(secret, 'CSPBQ00200', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식계좌 기간별수익률 상세
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FOCCQ33600_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FOCCQ33600_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FOCCQ33600_RESPONSE} response               응답
     * @returns {typeRest.FOCCQ33600_RESPONSE}
     */
    public async FOCCQ33600(
        secret: Secret, requestHeader: typeRest.FOCCQ33600_REQUEST_HEADER, requestBody: typeRest.FOCCQ33600_REQUEST_BODY, 
        response: typeRest.FOCCQ33600_RESPONSE | null = null): Promise<typeRest.FOCCQ33600_RESPONSE> {
            return await this.request(secret, 'FOCCQ33600', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식당일매매일지/수수료
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T0150_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T0150_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T0150_RESPONSE} response               응답
     * @returns {typeRest.T0150_RESPONSE}
     */
    public async t0150(
        secret: Secret, requestHeader: typeRest.T0150_REQUEST_HEADER, requestBody: typeRest.T0150_REQUEST_BODY, 
        response: typeRest.T0150_RESPONSE | null = null): Promise<typeRest.T0150_RESPONSE> {
            return await this.request(secret, 't0150', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식당일매매일지/수수료(전일)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T0151_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T0151_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T0151_RESPONSE} response               응답
     * @returns {typeRest.T0151_RESPONSE}
     */
    public async t0151(
        secret: Secret, requestHeader: typeRest.T0151_REQUEST_HEADER, requestBody: typeRest.T0151_REQUEST_BODY, 
        response: typeRest.T0151_RESPONSE | null = null): Promise<typeRest.T0151_RESPONSE> {
            return await this.request(secret, 't0151', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식잔고2
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T0424_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T0424_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T0424_RESPONSE} response               응답
     * @returns {typeRest.T0424_RESPONSE}
     */
    public async t0424(
        secret: Secret, requestHeader: typeRest.T0424_REQUEST_HEADER, requestBody: typeRest.T0424_REQUEST_BODY, 
        response: typeRest.T0424_RESPONSE | null = null): Promise<typeRest.T0424_RESPONSE> {
            return await this.request(secret, 't0424', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식체결/미체결
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T0425_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T0425_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T0425_RESPONSE} response               응답
     * @returns {typeRest.T0425_RESPONSE}
     */
    public async t0425(
        secret: Secret, requestHeader: typeRest.T0425_REQUEST_HEADER, requestBody: typeRest.T0425_REQUEST_BODY, 
        response: typeRest.T0425_RESPONSE | null = null): Promise<typeRest.T0425_RESPONSE> {
            return await this.request(secret, 't0425', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 현물주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CSPAT00601_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CSPAT00601_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CSPAT00601_RESPONSE} response               응답
     * @returns {typeRest.CSPAT00601_RESPONSE}
     */
    public async CSPAT00601(
        secret: Secret, requestHeader: typeRest.CSPAT00601_REQUEST_HEADER, requestBody: typeRest.CSPAT00601_REQUEST_BODY, 
        response: typeRest.CSPAT00601_RESPONSE | null = null): Promise<typeRest.CSPAT00601_RESPONSE> {
            return await this.request(secret, 'CSPAT00601', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 현물정정주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CSPAT00701_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CSPAT00701_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CSPAT00701_RESPONSE} response               응답
     * @returns {typeRest.CSPAT00701_RESPONSE}
     */
    public async CSPAT00701(
        secret: Secret, requestHeader: typeRest.CSPAT00701_REQUEST_HEADER, requestBody: typeRest.CSPAT00701_REQUEST_BODY, 
        response: typeRest.CSPAT00701_RESPONSE | null = null): Promise<typeRest.CSPAT00701_RESPONSE> {
            return await this.request(secret, 'CSPAT00701', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 현물취소주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CSPAT00801_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CSPAT00801_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CSPAT00801_RESPONSE} response               응답
     * @returns {typeRest.CSPAT00801_RESPONSE}
     */
    public async CSPAT00801(
        secret: Secret, requestHeader: typeRest.CSPAT00801_REQUEST_HEADER, requestBody: typeRest.CSPAT00801_REQUEST_BODY, 
        response: typeRest.CSPAT00801_RESPONSE | null = null): Promise<typeRest.CSPAT00801_RESPONSE> {
            return await this.request(secret, 'CSPAT00801', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물/옵션현재가(시세)조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T2101_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T2101_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T2101_RESPONSE} response               응답
     * @returns {typeRest.T2101_RESPONSE}
     */
    public async t2101(
        secret: Secret, requestHeader: typeRest.T2101_REQUEST_HEADER, requestBody: typeRest.T2101_REQUEST_BODY, 
        response: typeRest.T2101_RESPONSE | null = null): Promise<typeRest.T2101_RESPONSE> {
            return await this.request(secret, 't2101', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물/옵션현재가호가조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T2105_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T2105_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T2105_RESPONSE} response               응답
     * @returns {typeRest.T2105_RESPONSE}
     */
    public async t2105(
        secret: Secret, requestHeader: typeRest.T2105_REQUEST_HEADER, requestBody: typeRest.T2105_REQUEST_BODY, 
        response: typeRest.T2105_RESPONSE | null = null): Promise<typeRest.T2105_RESPONSE> {
            return await this.request(secret, 't2105', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물/옵션현재가시세메모
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T2106_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T2106_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T2106_RESPONSE} response               응답
     * @returns {typeRest.T2106_RESPONSE}
     */
    public async t2106(
        secret: Secret, requestHeader: typeRest.T2106_REQUEST_HEADER, requestBody: typeRest.T2106_REQUEST_BODY, 
        response: typeRest.T2106_RESPONSE | null = null): Promise<typeRest.T2106_RESPONSE> {
            return await this.request(secret, 't2106', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션시간대별체결조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T2201_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T2201_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T2201_RESPONSE} response               응답
     * @returns {typeRest.T2201_RESPONSE}
     */
    public async t2201(
        secret: Secret, requestHeader: typeRest.T2201_REQUEST_HEADER, requestBody: typeRest.T2201_REQUEST_BODY, 
        response: typeRest.T2201_RESPONSE | null = null): Promise<typeRest.T2201_RESPONSE> {
            return await this.request(secret, 't2201', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 기간별주가
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T2203_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T2203_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T2203_RESPONSE} response               응답
     * @returns {typeRest.T2203_RESPONSE}
     */
    public async t2203(
        secret: Secret, requestHeader: typeRest.T2203_REQUEST_HEADER, requestBody: typeRest.T2203_REQUEST_BODY, 
        response: typeRest.T2203_RESPONSE | null = null): Promise<typeRest.T2203_RESPONSE> {
            return await this.request(secret, 't2203', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션시간대별체결조회(단일출력용)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T2210_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T2210_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T2210_RESPONSE} response               응답
     * @returns {typeRest.T2210_RESPONSE}
     */
    public async t2210(
        secret: Secret, requestHeader: typeRest.T2210_REQUEST_HEADER, requestBody: typeRest.T2210_REQUEST_BODY, 
        response: typeRest.T2210_RESPONSE | null = null): Promise<typeRest.T2210_RESPONSE> {
            return await this.request(secret, 't2210', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 옵션전광판
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T2301_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T2301_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T2301_RESPONSE} response               응답
     * @returns {typeRest.T2301_RESPONSE}
     */
    public async t2301(
        secret: Secret, requestHeader: typeRest.T2301_REQUEST_HEADER, requestBody: typeRest.T2301_REQUEST_BODY, 
        response: typeRest.T2301_RESPONSE | null = null): Promise<typeRest.T2301_RESPONSE> {
            return await this.request(secret, 't2301', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션호가잔량비율챠트
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T2405_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T2405_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T2405_RESPONSE} response               응답
     * @returns {typeRest.T2405_RESPONSE}
     */
    public async t2405(
        secret: Secret, requestHeader: typeRest.T2405_REQUEST_HEADER, requestBody: typeRest.T2405_REQUEST_BODY, 
        response: typeRest.T2405_RESPONSE | null = null): Promise<typeRest.T2405_RESPONSE> {
            return await this.request(secret, 't2405', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 미결제약정추이
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T2421_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T2421_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T2421_RESPONSE} response               응답
     * @returns {typeRest.T2421_RESPONSE}
     */
    public async t2421(
        secret: Secret, requestHeader: typeRest.T2421_REQUEST_HEADER, requestBody: typeRest.T2421_REQUEST_BODY, 
        response: typeRest.T2421_RESPONSE | null = null): Promise<typeRest.T2421_RESPONSE> {
            return await this.request(secret, 't2421', requestHeader, requestBody, response);
        }
                    
    /**
     * @description EUREXKOSPI200옵션선물현재가(시세)조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T2830_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T2830_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T2830_RESPONSE} response               응답
     * @returns {typeRest.T2830_RESPONSE}
     */
    public async t2830(
        secret: Secret, requestHeader: typeRest.T2830_REQUEST_HEADER, requestBody: typeRest.T2830_REQUEST_BODY, 
        response: typeRest.T2830_RESPONSE | null = null): Promise<typeRest.T2830_RESPONSE> {
            return await this.request(secret, 't2830', requestHeader, requestBody, response);
        }
                    
    /**
     * @description EUREXKOSPI200옵션선물호가조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T2831_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T2831_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T2831_RESPONSE} response               응답
     * @returns {typeRest.T2831_RESPONSE}
     */
    public async t2831(
        secret: Secret, requestHeader: typeRest.T2831_REQUEST_HEADER, requestBody: typeRest.T2831_REQUEST_BODY, 
        response: typeRest.T2831_RESPONSE | null = null): Promise<typeRest.T2831_RESPONSE> {
            return await this.request(secret, 't2831', requestHeader, requestBody, response);
        }
                    
    /**
     * @description EUREX야간옵션선물시간대별체결조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T2832_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T2832_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T2832_RESPONSE} response               응답
     * @returns {typeRest.T2832_RESPONSE}
     */
    public async t2832(
        secret: Secret, requestHeader: typeRest.T2832_REQUEST_HEADER, requestBody: typeRest.T2832_REQUEST_BODY, 
        response: typeRest.T2832_RESPONSE | null = null): Promise<typeRest.T2832_RESPONSE> {
            return await this.request(secret, 't2832', requestHeader, requestBody, response);
        }
                    
    /**
     * @description EUREX야간옵션선물기간별추이
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T2833_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T2833_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T2833_RESPONSE} response               응답
     * @returns {typeRest.T2833_RESPONSE}
     */
    public async t2833(
        secret: Secret, requestHeader: typeRest.T2833_REQUEST_HEADER, requestBody: typeRest.T2833_REQUEST_BODY, 
        response: typeRest.T2833_RESPONSE | null = null): Promise<typeRest.T2833_RESPONSE> {
            return await this.request(secret, 't2833', requestHeader, requestBody, response);
        }
                    
    /**
     * @description EUREX옵션선물시세전광판
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T2835_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T2835_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T2835_RESPONSE} response               응답
     * @returns {typeRest.T2835_RESPONSE}
     */
    public async t2835(
        secret: Secret, requestHeader: typeRest.T2835_REQUEST_HEADER, requestBody: typeRest.T2835_REQUEST_BODY, 
        response: typeRest.T2835_RESPONSE | null = null): Promise<typeRest.T2835_RESPONSE> {
            return await this.request(secret, 't2835', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식선물마스터조회(API용)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T8401_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T8401_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T8401_RESPONSE} response               응답
     * @returns {typeRest.T8401_RESPONSE}
     */
    public async t8401(
        secret: Secret, requestHeader: typeRest.T8401_REQUEST_HEADER, requestBody: typeRest.T8401_REQUEST_BODY, 
        response: typeRest.T8401_RESPONSE | null = null): Promise<typeRest.T8401_RESPONSE> {
            return await this.request(secret, 't8401', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식선물현재가조회(API용)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T8402_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T8402_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T8402_RESPONSE} response               응답
     * @returns {typeRest.T8402_RESPONSE}
     */
    public async t8402(
        secret: Secret, requestHeader: typeRest.T8402_REQUEST_HEADER, requestBody: typeRest.T8402_REQUEST_BODY, 
        response: typeRest.T8402_RESPONSE | null = null): Promise<typeRest.T8402_RESPONSE> {
            return await this.request(secret, 't8402', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식선물호가조회(API용)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T8403_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T8403_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T8403_RESPONSE} response               응답
     * @returns {typeRest.T8403_RESPONSE}
     */
    public async t8403(
        secret: Secret, requestHeader: typeRest.T8403_REQUEST_HEADER, requestBody: typeRest.T8403_REQUEST_BODY, 
        response: typeRest.T8403_RESPONSE | null = null): Promise<typeRest.T8403_RESPONSE> {
            return await this.request(secret, 't8403', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식선물시간대별체결조회(API용)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T8404_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T8404_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T8404_RESPONSE} response               응답
     * @returns {typeRest.T8404_RESPONSE}
     */
    public async t8404(
        secret: Secret, requestHeader: typeRest.T8404_REQUEST_HEADER, requestBody: typeRest.T8404_REQUEST_BODY, 
        response: typeRest.T8404_RESPONSE | null = null): Promise<typeRest.T8404_RESPONSE> {
            return await this.request(secret, 't8404', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식선물기간별주가(API용)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T8405_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T8405_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T8405_RESPONSE} response               응답
     * @returns {typeRest.T8405_RESPONSE}
     */
    public async t8405(
        secret: Secret, requestHeader: typeRest.T8405_REQUEST_HEADER, requestBody: typeRest.T8405_REQUEST_BODY, 
        response: typeRest.T8405_RESPONSE | null = null): Promise<typeRest.T8405_RESPONSE> {
            return await this.request(secret, 't8405', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 주식선물틱분별체결조회(API용)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T8406_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T8406_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T8406_RESPONSE} response               응답
     * @returns {typeRest.T8406_RESPONSE}
     */
    public async t8406(
        secret: Secret, requestHeader: typeRest.T8406_REQUEST_HEADER, requestBody: typeRest.T8406_REQUEST_BODY, 
        response: typeRest.T8406_RESPONSE | null = null): Promise<typeRest.T8406_RESPONSE> {
            return await this.request(secret, 't8406', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 상품선물마스터조회(API용)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T8426_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T8426_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T8426_RESPONSE} response               응답
     * @returns {typeRest.T8426_RESPONSE}
     */
    public async t8426(
        secret: Secret, requestHeader: typeRest.T8426_REQUEST_HEADER, requestBody: typeRest.T8426_REQUEST_BODY, 
        response: typeRest.T8426_RESPONSE | null = null): Promise<typeRest.T8426_RESPONSE> {
            return await this.request(secret, 't8426', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 과거데이터시간대별조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T8427_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T8427_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T8427_RESPONSE} response               응답
     * @returns {typeRest.T8427_RESPONSE}
     */
    public async t8427(
        secret: Secret, requestHeader: typeRest.T8427_REQUEST_HEADER, requestBody: typeRest.T8427_REQUEST_BODY, 
        response: typeRest.T8427_RESPONSE | null = null): Promise<typeRest.T8427_RESPONSE> {
            return await this.request(secret, 't8427', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 지수선물마스터조회API용
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T8432_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T8432_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T8432_RESPONSE} response               응답
     * @returns {typeRest.T8432_RESPONSE}
     */
    public async t8432(
        secret: Secret, requestHeader: typeRest.T8432_REQUEST_HEADER, requestBody: typeRest.T8432_REQUEST_BODY, 
        response: typeRest.T8432_RESPONSE | null = null): Promise<typeRest.T8432_RESPONSE> {
            return await this.request(secret, 't8432', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 지수옵션마스터조회API용
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T8433_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T8433_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T8433_RESPONSE} response               응답
     * @returns {typeRest.T8433_RESPONSE}
     */
    public async t8433(
        secret: Secret, requestHeader: typeRest.T8433_REQUEST_HEADER, requestBody: typeRest.T8433_REQUEST_BODY, 
        response: typeRest.T8433_RESPONSE | null = null): Promise<typeRest.T8433_RESPONSE> {
            return await this.request(secret, 't8433', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물/옵션멀티현재가조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T8434_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T8434_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T8434_RESPONSE} response               응답
     * @returns {typeRest.T8434_RESPONSE}
     */
    public async t8434(
        secret: Secret, requestHeader: typeRest.T8434_REQUEST_HEADER, requestBody: typeRest.T8434_REQUEST_BODY, 
        response: typeRest.T8434_RESPONSE | null = null): Promise<typeRest.T8434_RESPONSE> {
            return await this.request(secret, 't8434', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 파생종목마스터조회API용
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T8435_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T8435_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T8435_RESPONSE} response               응답
     * @returns {typeRest.T8435_RESPONSE}
     */
    public async t8435(
        secret: Secret, requestHeader: typeRest.T8435_REQUEST_HEADER, requestBody: typeRest.T8435_REQUEST_BODY, 
        response: typeRest.T8435_RESPONSE | null = null): Promise<typeRest.T8435_RESPONSE> {
            return await this.request(secret, 't8435', requestHeader, requestBody, response);
        }
                    
    /**
     * @description CME/EUREX마스터조회(API용)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T8437_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T8437_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T8437_RESPONSE} response               응답
     * @returns {typeRest.T8437_RESPONSE}
     */
    public async t8437(
        secret: Secret, requestHeader: typeRest.T8437_REQUEST_HEADER, requestBody: typeRest.T8437_REQUEST_BODY, 
        response: typeRest.T8437_RESPONSE | null = null): Promise<typeRest.T8437_RESPONSE> {
            return await this.request(secret, 't8437', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 지수선물마스터조회API용
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T9943_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T9943_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T9943_RESPONSE} response               응답
     * @returns {typeRest.T9943_RESPONSE}
     */
    public async t9943(
        secret: Secret, requestHeader: typeRest.T9943_REQUEST_HEADER, requestBody: typeRest.T9943_REQUEST_BODY, 
        response: typeRest.T9943_RESPONSE | null = null): Promise<typeRest.T9943_RESPONSE> {
            return await this.request(secret, 't9943', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 지수옵션마스터조회API용
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T9944_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T9944_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T9944_RESPONSE} response               응답
     * @returns {typeRest.T9944_RESPONSE}
     */
    public async t9944(
        secret: Secret, requestHeader: typeRest.T9944_REQUEST_HEADER, requestBody: typeRest.T9944_REQUEST_BODY, 
        response: typeRest.T9944_RESPONSE | null = null): Promise<typeRest.T9944_RESPONSE> {
            return await this.request(secret, 't9944', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 상품선물투자자매매동향(실시간)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T2541_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T2541_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T2541_RESPONSE} response               응답
     * @returns {typeRest.T2541_RESPONSE}
     */
    public async t2541(
        secret: Secret, requestHeader: typeRest.T2541_REQUEST_HEADER, requestBody: typeRest.T2541_REQUEST_BODY, 
        response: typeRest.T2541_RESPONSE | null = null): Promise<typeRest.T2541_RESPONSE> {
            return await this.request(secret, 't2541', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 상품선물투자자매매동향(챠트용)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T2545_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T2545_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T2545_RESPONSE} response               응답
     * @returns {typeRest.T2545_RESPONSE}
     */
    public async t2545(
        secret: Secret, requestHeader: typeRest.T2545_REQUEST_HEADER, requestBody: typeRest.T2545_REQUEST_BODY, 
        response: typeRest.T2545_RESPONSE | null = null): Promise<typeRest.T2545_RESPONSE> {
            return await this.request(secret, 't2545', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션틱분별체결조회차트
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T2209_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T2209_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T2209_RESPONSE} response               응답
     * @returns {typeRest.T2209_RESPONSE}
     */
    public async t2209(
        secret: Secret, requestHeader: typeRest.T2209_REQUEST_HEADER, requestBody: typeRest.T2209_REQUEST_BODY, 
        response: typeRest.T2209_RESPONSE | null = null): Promise<typeRest.T2209_RESPONSE> {
            return await this.request(secret, 't2209', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션차트(틱/n틱)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T8414_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T8414_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T8414_RESPONSE} response               응답
     * @returns {typeRest.T8414_RESPONSE}
     */
    public async t8414(
        secret: Secret, requestHeader: typeRest.T8414_REQUEST_HEADER, requestBody: typeRest.T8414_REQUEST_BODY, 
        response: typeRest.T8414_RESPONSE | null = null): Promise<typeRest.T8414_RESPONSE> {
            return await this.request(secret, 't8414', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물/옵션차트(N분)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T8415_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T8415_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T8415_RESPONSE} response               응답
     * @returns {typeRest.T8415_RESPONSE}
     */
    public async t8415(
        secret: Secret, requestHeader: typeRest.T8415_REQUEST_HEADER, requestBody: typeRest.T8415_REQUEST_BODY, 
        response: typeRest.T8415_RESPONSE | null = null): Promise<typeRest.T8415_RESPONSE> {
            return await this.request(secret, 't8415', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물/옵션차트(일주월)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T8416_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T8416_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T8416_RESPONSE} response               응답
     * @returns {typeRest.T8416_RESPONSE}
     */
    public async t8416(
        secret: Secret, requestHeader: typeRest.T8416_REQUEST_HEADER, requestBody: typeRest.T8416_REQUEST_BODY, 
        response: typeRest.T8416_RESPONSE | null = null): Promise<typeRest.T8416_RESPONSE> {
            return await this.request(secret, 't8416', requestHeader, requestBody, response);
        }
                    
    /**
     * @description EUREX야간옵션선물틱분별체결조회차트
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T8429_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T8429_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T8429_RESPONSE} response               응답
     * @returns {typeRest.T8429_RESPONSE}
     */
    public async t8429(
        secret: Secret, requestHeader: typeRest.T8429_REQUEST_HEADER, requestBody: typeRest.T8429_REQUEST_BODY, 
        response: typeRest.T8429_RESPONSE | null = null): Promise<typeRest.T8429_RESPONSE> {
            return await this.request(secret, 't8429', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션 계좌 주문체결내역 조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CFOAQ00600_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CFOAQ00600_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CFOAQ00600_RESPONSE} response               응답
     * @returns {typeRest.CFOAQ00600_RESPONSE}
     */
    public async CFOAQ00600(
        secret: Secret, requestHeader: typeRest.CFOAQ00600_REQUEST_HEADER, requestBody: typeRest.CFOAQ00600_REQUEST_BODY, 
        response: typeRest.CFOAQ00600_RESPONSE | null = null): Promise<typeRest.CFOAQ00600_RESPONSE> {
            return await this.request(secret, 'CFOAQ00600', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션 계좌잔고 및 평가현황3
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CFOAQ50600_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CFOAQ50600_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CFOAQ50600_RESPONSE} response               응답
     * @returns {typeRest.CFOAQ50600_RESPONSE}
     */
    public async CFOAQ50600(
        secret: Secret, requestHeader: typeRest.CFOAQ50600_REQUEST_HEADER, requestBody: typeRest.CFOAQ50600_REQUEST_BODY, 
        response: typeRest.CFOAQ50600_RESPONSE | null = null): Promise<typeRest.CFOAQ50600_RESPONSE> {
            return await this.request(secret, 'CFOAQ50600', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션 주문가능수량조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CFOAQ10100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CFOAQ10100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CFOAQ10100_RESPONSE} response               응답
     * @returns {typeRest.CFOAQ10100_RESPONSE}
     */
    public async CFOAQ10100(
        secret: Secret, requestHeader: typeRest.CFOAQ10100_REQUEST_HEADER, requestBody: typeRest.CFOAQ10100_REQUEST_BODY, 
        response: typeRest.CFOAQ10100_RESPONSE | null = null): Promise<typeRest.CFOAQ10100_RESPONSE> {
            return await this.request(secret, 'CFOAQ10100', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션 계좌예탁금증거금조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CFOBQ10500_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CFOBQ10500_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CFOBQ10500_RESPONSE} response               응답
     * @returns {typeRest.CFOBQ10500_RESPONSE}
     */
    public async CFOBQ10500(
        secret: Secret, requestHeader: typeRest.CFOBQ10500_REQUEST_HEADER, requestBody: typeRest.CFOBQ10500_REQUEST_BODY, 
        response: typeRest.CFOBQ10500_RESPONSE | null = null): Promise<typeRest.CFOBQ10500_RESPONSE> {
            return await this.request(secret, 'CFOBQ10500', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션가정산예탁금상세
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CFOEQ11100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CFOEQ11100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CFOEQ11100_RESPONSE} response               응답
     * @returns {typeRest.CFOEQ11100_RESPONSE}
     */
    public async CFOEQ11100(
        secret: Secret, requestHeader: typeRest.CFOEQ11100_REQUEST_HEADER, requestBody: typeRest.CFOEQ11100_REQUEST_BODY, 
        response: typeRest.CFOEQ11100_RESPONSE | null = null): Promise<typeRest.CFOEQ11100_RESPONSE> {
            return await this.request(secret, 'CFOEQ11100', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션 일별 계좌손익내역
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CFOEQ82600_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CFOEQ82600_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CFOEQ82600_RESPONSE} response               응답
     * @returns {typeRest.CFOEQ82600_RESPONSE}
     */
    public async CFOEQ82600(
        secret: Secret, requestHeader: typeRest.CFOEQ82600_REQUEST_HEADER, requestBody: typeRest.CFOEQ82600_REQUEST_BODY, 
        response: typeRest.CFOEQ82600_RESPONSE | null = null): Promise<typeRest.CFOEQ82600_RESPONSE> {
            return await this.request(secret, 'CFOEQ82600', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 계좌 미결제 약정현황(평균가)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CFOFQ02400_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CFOFQ02400_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CFOFQ02400_RESPONSE} response               응답
     * @returns {typeRest.CFOFQ02400_RESPONSE}
     */
    public async CFOFQ02400(
        secret: Secret, requestHeader: typeRest.CFOFQ02400_REQUEST_HEADER, requestBody: typeRest.CFOFQ02400_REQUEST_BODY, 
        response: typeRest.CFOFQ02400_RESPONSE | null = null): Promise<typeRest.CFOFQ02400_RESPONSE> {
            return await this.request(secret, 'CFOFQ02400', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물/옵션체결/미체결
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T0434_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T0434_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T0434_RESPONSE} response               응답
     * @returns {typeRest.T0434_RESPONSE}
     */
    public async t0434(
        secret: Secret, requestHeader: typeRest.T0434_REQUEST_HEADER, requestBody: typeRest.T0434_REQUEST_BODY, 
        response: typeRest.T0434_RESPONSE | null = null): Promise<typeRest.T0434_RESPONSE> {
            return await this.request(secret, 't0434', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물/옵션잔고평가(이동평균)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T0441_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T0441_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T0441_RESPONSE} response               응답
     * @returns {typeRest.T0441_RESPONSE}
     */
    public async t0441(
        secret: Secret, requestHeader: typeRest.T0441_REQUEST_HEADER, requestBody: typeRest.T0441_REQUEST_BODY, 
        response: typeRest.T0441_RESPONSE | null = null): Promise<typeRest.T0441_RESPONSE> {
            return await this.request(secret, 't0441', requestHeader, requestBody, response);
        }
                    
    /**
     * @description EUREX 주문체결내역조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CEXAQ21100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CEXAQ21100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CEXAQ21100_RESPONSE} response               응답
     * @returns {typeRest.CEXAQ21100_RESPONSE}
     */
    public async CEXAQ21100(
        secret: Secret, requestHeader: typeRest.CEXAQ21100_REQUEST_HEADER, requestBody: typeRest.CEXAQ21100_REQUEST_BODY, 
        response: typeRest.CEXAQ21100_RESPONSE | null = null): Promise<typeRest.CEXAQ21100_RESPONSE> {
            return await this.request(secret, 'CEXAQ21100', requestHeader, requestBody, response);
        }
                    
    /**
     * @description EUREX 주문가능 수량/금액 조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CEXAQ21200_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CEXAQ21200_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CEXAQ21200_RESPONSE} response               응답
     * @returns {typeRest.CEXAQ21200_RESPONSE}
     */
    public async CEXAQ21200(
        secret: Secret, requestHeader: typeRest.CEXAQ21200_REQUEST_HEADER, requestBody: typeRest.CEXAQ21200_REQUEST_BODY, 
        response: typeRest.CEXAQ21200_RESPONSE | null = null): Promise<typeRest.CEXAQ21200_RESPONSE> {
            return await this.request(secret, 'CEXAQ21200', requestHeader, requestBody, response);
        }
                    
    /**
     * @description EUREX 야간장잔고및 평가현황
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CEXAQ31100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CEXAQ31100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CEXAQ31100_RESPONSE} response               응답
     * @returns {typeRest.CEXAQ31100_RESPONSE}
     */
    public async CEXAQ31100(
        secret: Secret, requestHeader: typeRest.CEXAQ31100_REQUEST_HEADER, requestBody: typeRest.CEXAQ31100_REQUEST_BODY, 
        response: typeRest.CEXAQ31100_RESPONSE | null = null): Promise<typeRest.CEXAQ31100_RESPONSE> {
            return await this.request(secret, 'CEXAQ31100', requestHeader, requestBody, response);
        }
                    
    /**
     * @description EUREX 예탁금 및 통합잔고조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CEXAQ31200_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CEXAQ31200_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CEXAQ31200_RESPONSE} response               응답
     * @returns {typeRest.CEXAQ31200_RESPONSE}
     */
    public async CEXAQ31200(
        secret: Secret, requestHeader: typeRest.CEXAQ31200_REQUEST_HEADER, requestBody: typeRest.CEXAQ31200_REQUEST_BODY, 
        response: typeRest.CEXAQ31200_RESPONSE | null = null): Promise<typeRest.CEXAQ31200_RESPONSE> {
            return await this.request(secret, 'CEXAQ31200', requestHeader, requestBody, response);
        }
                    
    /**
     * @description EUREX 야간옵션 기간주문체결조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CEXAQ44200_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CEXAQ44200_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CEXAQ44200_RESPONSE} response               응답
     * @returns {typeRest.CEXAQ44200_RESPONSE}
     */
    public async CEXAQ44200(
        secret: Secret, requestHeader: typeRest.CEXAQ44200_REQUEST_HEADER, requestBody: typeRest.CEXAQ44200_REQUEST_BODY, 
        response: typeRest.CEXAQ44200_RESPONSE | null = null): Promise<typeRest.CEXAQ44200_RESPONSE> {
            return await this.request(secret, 'CEXAQ44200', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션 기간별 계좌 수익률 현황
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.FOCCQ33700_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.FOCCQ33700_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.FOCCQ33700_RESPONSE} response               응답
     * @returns {typeRest.FOCCQ33700_RESPONSE}
     */
    public async FOCCQ33700(
        secret: Secret, requestHeader: typeRest.FOCCQ33700_REQUEST_HEADER, requestBody: typeRest.FOCCQ33700_REQUEST_BODY, 
        response: typeRest.FOCCQ33700_RESPONSE | null = null): Promise<typeRest.FOCCQ33700_RESPONSE> {
            return await this.request(secret, 'FOCCQ33700', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션 정상주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CFOAT00100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CFOAT00100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CFOAT00100_RESPONSE} response               응답
     * @returns {typeRest.CFOAT00100_RESPONSE}
     */
    public async CFOAT00100(
        secret: Secret, requestHeader: typeRest.CFOAT00100_REQUEST_HEADER, requestBody: typeRest.CFOAT00100_REQUEST_BODY, 
        response: typeRest.CFOAT00100_RESPONSE | null = null): Promise<typeRest.CFOAT00100_RESPONSE> {
            return await this.request(secret, 'CFOAT00100', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션 정정주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CFOAT00200_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CFOAT00200_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CFOAT00200_RESPONSE} response               응답
     * @returns {typeRest.CFOAT00200_RESPONSE}
     */
    public async CFOAT00200(
        secret: Secret, requestHeader: typeRest.CFOAT00200_REQUEST_HEADER, requestBody: typeRest.CFOAT00200_REQUEST_BODY, 
        response: typeRest.CFOAT00200_RESPONSE | null = null): Promise<typeRest.CFOAT00200_RESPONSE> {
            return await this.request(secret, 'CFOAT00200', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션 취소주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CFOAT00300_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CFOAT00300_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CFOAT00300_RESPONSE} response               응답
     * @returns {typeRest.CFOAT00300_RESPONSE}
     */
    public async CFOAT00300(
        secret: Secret, requestHeader: typeRest.CFOAT00300_REQUEST_HEADER, requestBody: typeRest.CFOAT00300_REQUEST_BODY, 
        response: typeRest.CFOAT00300_RESPONSE | null = null): Promise<typeRest.CFOAT00300_RESPONSE> {
            return await this.request(secret, 'CFOAT00300', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 선물옵션 옵션매도시 주문증거금조회(옵션매도시 1계약당 주문증거금)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CFOBQ10800_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CFOBQ10800_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CFOBQ10800_RESPONSE} response               응답
     * @returns {typeRest.CFOBQ10800_RESPONSE}
     */
    public async CFOBQ10800(
        secret: Secret, requestHeader: typeRest.CFOBQ10800_REQUEST_HEADER, requestBody: typeRest.CFOBQ10800_REQUEST_BODY, 
        response: typeRest.CFOBQ10800_RESPONSE | null = null): Promise<typeRest.CFOBQ10800_RESPONSE> {
            return await this.request(secret, 'CFOBQ10800', requestHeader, requestBody, response);
        }
                    
    /**
     * @description EUREX 매수/매도주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CEXAT11100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CEXAT11100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CEXAT11100_RESPONSE} response               응답
     * @returns {typeRest.CEXAT11100_RESPONSE}
     */
    public async CEXAT11100(
        secret: Secret, requestHeader: typeRest.CEXAT11100_REQUEST_HEADER, requestBody: typeRest.CEXAT11100_REQUEST_BODY, 
        response: typeRest.CEXAT11100_RESPONSE | null = null): Promise<typeRest.CEXAT11100_RESPONSE> {
            return await this.request(secret, 'CEXAT11100', requestHeader, requestBody, response);
        }
                    
    /**
     * @description EUREX 정정주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CEXAT11200_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CEXAT11200_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CEXAT11200_RESPONSE} response               응답
     * @returns {typeRest.CEXAT11200_RESPONSE}
     */
    public async CEXAT11200(
        secret: Secret, requestHeader: typeRest.CEXAT11200_REQUEST_HEADER, requestBody: typeRest.CEXAT11200_REQUEST_BODY, 
        response: typeRest.CEXAT11200_RESPONSE | null = null): Promise<typeRest.CEXAT11200_RESPONSE> {
            return await this.request(secret, 'CEXAT11200', requestHeader, requestBody, response);
        }
                    
    /**
     * @description EUREX 취소주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CEXAT11300_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CEXAT11300_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CEXAT11300_RESPONSE} response               응답
     * @returns {typeRest.CEXAT11300_RESPONSE}
     */
    public async CEXAT11300(
        secret: Secret, requestHeader: typeRest.CEXAT11300_REQUEST_HEADER, requestBody: typeRest.CEXAT11300_REQUEST_BODY, 
        response: typeRest.CEXAT11300_RESPONSE | null = null): Promise<typeRest.CEXAT11300_RESPONSE> {
            return await this.request(secret, 'CEXAT11300', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 파생상품증거금율조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.MMDAQ91200_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.MMDAQ91200_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.MMDAQ91200_RESPONSE} response               응답
     * @returns {typeRest.MMDAQ91200_RESPONSE}
     */
    public async MMDAQ91200(
        secret: Secret, requestHeader: typeRest.MMDAQ91200_REQUEST_HEADER, requestBody: typeRest.MMDAQ91200_REQUEST_BODY, 
        response: typeRest.MMDAQ91200_RESPONSE | null = null): Promise<typeRest.MMDAQ91200_RESPONSE> {
            return await this.request(secret, 'MMDAQ91200', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물마스터조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.O3101_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.O3101_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.O3101_RESPONSE} response               응답
     * @returns {typeRest.O3101_RESPONSE}
     */
    public async o3101(
        secret: Secret, requestHeader: typeRest.O3101_REQUEST_HEADER, requestBody: typeRest.O3101_REQUEST_BODY, 
        response: typeRest.O3101_RESPONSE | null = null): Promise<typeRest.O3101_RESPONSE> {
            return await this.request(secret, 'o3101', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물 일별체결 조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.O3104_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.O3104_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.O3104_RESPONSE} response               응답
     * @returns {typeRest.O3104_RESPONSE}
     */
    public async o3104(
        secret: Secret, requestHeader: typeRest.O3104_REQUEST_HEADER, requestBody: typeRest.O3104_REQUEST_BODY, 
        response: typeRest.O3104_RESPONSE | null = null): Promise<typeRest.O3104_RESPONSE> {
            return await this.request(secret, 'o3104', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물 현재가(종목정보) 조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.O3105_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.O3105_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.O3105_RESPONSE} response               응답
     * @returns {typeRest.O3105_RESPONSE}
     */
    public async o3105(
        secret: Secret, requestHeader: typeRest.O3105_REQUEST_HEADER, requestBody: typeRest.O3105_REQUEST_BODY, 
        response: typeRest.O3105_RESPONSE | null = null): Promise<typeRest.O3105_RESPONSE> {
            return await this.request(secret, 'o3105', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물 현재가호가 조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.O3106_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.O3106_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.O3106_RESPONSE} response               응답
     * @returns {typeRest.O3106_RESPONSE}
     */
    public async o3106(
        secret: Secret, requestHeader: typeRest.O3106_REQUEST_HEADER, requestBody: typeRest.O3106_REQUEST_BODY, 
        response: typeRest.O3106_RESPONSE | null = null): Promise<typeRest.O3106_RESPONSE> {
            return await this.request(secret, 'o3106', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물 관심종목 조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.O3107_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.O3107_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.O3107_RESPONSE} response               응답
     * @returns {typeRest.O3107_RESPONSE}
     */
    public async o3107(
        secret: Secret, requestHeader: typeRest.O3107_REQUEST_HEADER, requestBody: typeRest.O3107_REQUEST_BODY, 
        response: typeRest.O3107_RESPONSE | null = null): Promise<typeRest.O3107_RESPONSE> {
            return await this.request(secret, 'o3107', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물 시간대별(Tick)체결 조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.O3116_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.O3116_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.O3116_RESPONSE} response               응답
     * @returns {typeRest.O3116_RESPONSE}
     */
    public async o3116(
        secret: Secret, requestHeader: typeRest.O3116_REQUEST_HEADER, requestBody: typeRest.O3116_REQUEST_BODY, 
        response: typeRest.O3116_RESPONSE | null = null): Promise<typeRest.O3116_RESPONSE> {
            return await this.request(secret, 'o3116', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물옵션 마스터 조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.O3121_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.O3121_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.O3121_RESPONSE} response               응답
     * @returns {typeRest.O3121_RESPONSE}
     */
    public async o3121(
        secret: Secret, requestHeader: typeRest.O3121_REQUEST_HEADER, requestBody: typeRest.O3121_REQUEST_BODY, 
        response: typeRest.O3121_RESPONSE | null = null): Promise<typeRest.O3121_RESPONSE> {
            return await this.request(secret, 'o3121', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물옵션 차트 분봉 조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.O3123_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.O3123_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.O3123_RESPONSE} response               응답
     * @returns {typeRest.O3123_RESPONSE}
     */
    public async o3123(
        secret: Secret, requestHeader: typeRest.O3123_REQUEST_HEADER, requestBody: typeRest.O3123_REQUEST_BODY, 
        response: typeRest.O3123_RESPONSE | null = null): Promise<typeRest.O3123_RESPONSE> {
            return await this.request(secret, 'o3123', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물옵션 현재가(종목정보) 조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.O3125_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.O3125_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.O3125_RESPONSE} response               응답
     * @returns {typeRest.O3125_RESPONSE}
     */
    public async o3125(
        secret: Secret, requestHeader: typeRest.O3125_REQUEST_HEADER, requestBody: typeRest.O3125_REQUEST_BODY, 
        response: typeRest.O3125_RESPONSE | null = null): Promise<typeRest.O3125_RESPONSE> {
            return await this.request(secret, 'o3125', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물옵션 현재가호가 조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.O3126_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.O3126_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.O3126_RESPONSE} response               응답
     * @returns {typeRest.O3126_RESPONSE}
     */
    public async o3126(
        secret: Secret, requestHeader: typeRest.O3126_REQUEST_HEADER, requestBody: typeRest.O3126_REQUEST_BODY, 
        response: typeRest.O3126_RESPONSE | null = null): Promise<typeRest.O3126_RESPONSE> {
            return await this.request(secret, 'o3126', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물옵션 관심종목 조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.O3127_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.O3127_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.O3127_RESPONSE} response               응답
     * @returns {typeRest.O3127_RESPONSE}
     */
    public async o3127(
        secret: Secret, requestHeader: typeRest.O3127_REQUEST_HEADER, requestBody: typeRest.O3127_REQUEST_BODY, 
        response: typeRest.O3127_RESPONSE | null = null): Promise<typeRest.O3127_RESPONSE> {
            return await this.request(secret, 'o3127', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물옵션 차트 일주월 조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.O3128_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.O3128_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.O3128_RESPONSE} response               응답
     * @returns {typeRest.O3128_RESPONSE}
     */
    public async o3128(
        secret: Secret, requestHeader: typeRest.O3128_REQUEST_HEADER, requestBody: typeRest.O3128_REQUEST_BODY, 
        response: typeRest.O3128_RESPONSE | null = null): Promise<typeRest.O3128_RESPONSE> {
            return await this.request(secret, 'o3128', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물옵션 시간대별 Tick 체결 조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.O3136_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.O3136_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.O3136_RESPONSE} response               응답
     * @returns {typeRest.O3136_RESPONSE}
     */
    public async o3136(
        secret: Secret, requestHeader: typeRest.O3136_REQUEST_HEADER, requestBody: typeRest.O3136_REQUEST_BODY, 
        response: typeRest.O3136_RESPONSE | null = null): Promise<typeRest.O3136_RESPONSE> {
            return await this.request(secret, 'o3136', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물옵션 차트 NTick 체결 조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.O3137_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.O3137_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.O3137_RESPONSE} response               응답
     * @returns {typeRest.O3137_RESPONSE}
     */
    public async o3137(
        secret: Secret, requestHeader: typeRest.O3137_REQUEST_HEADER, requestBody: typeRest.O3137_REQUEST_BODY, 
        response: typeRest.O3137_RESPONSE | null = null): Promise<typeRest.O3137_RESPONSE> {
            return await this.request(secret, 'o3137', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물 체결내역개별 조회(주문가능수량)
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CIDBQ01400_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CIDBQ01400_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CIDBQ01400_RESPONSE} response               응답
     * @returns {typeRest.CIDBQ01400_RESPONSE}
     */
    public async CIDBQ01400(
        secret: Secret, requestHeader: typeRest.CIDBQ01400_REQUEST_HEADER, requestBody: typeRest.CIDBQ01400_REQUEST_BODY, 
        response: typeRest.CIDBQ01400_RESPONSE | null = null): Promise<typeRest.CIDBQ01400_RESPONSE> {
            return await this.request(secret, 'CIDBQ01400', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물 미결제잔고내역 조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CIDBQ01500_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CIDBQ01500_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CIDBQ01500_RESPONSE} response               응답
     * @returns {typeRest.CIDBQ01500_RESPONSE}
     */
    public async CIDBQ01500(
        secret: Secret, requestHeader: typeRest.CIDBQ01500_REQUEST_HEADER, requestBody: typeRest.CIDBQ01500_REQUEST_BODY, 
        response: typeRest.CIDBQ01500_RESPONSE | null = null): Promise<typeRest.CIDBQ01500_RESPONSE> {
            return await this.request(secret, 'CIDBQ01500', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물 주문내역 조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CIDBQ01800_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CIDBQ01800_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CIDBQ01800_RESPONSE} response               응답
     * @returns {typeRest.CIDBQ01800_RESPONSE}
     */
    public async CIDBQ01800(
        secret: Secret, requestHeader: typeRest.CIDBQ01800_REQUEST_HEADER, requestBody: typeRest.CIDBQ01800_REQUEST_BODY, 
        response: typeRest.CIDBQ01800_RESPONSE | null = null): Promise<typeRest.CIDBQ01800_RESPONSE> {
            return await this.request(secret, 'CIDBQ01800', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물 주문체결내역 상세 조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CIDBQ02400_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CIDBQ02400_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CIDBQ02400_RESPONSE} response               응답
     * @returns {typeRest.CIDBQ02400_RESPONSE}
     */
    public async CIDBQ02400(
        secret: Secret, requestHeader: typeRest.CIDBQ02400_REQUEST_HEADER, requestBody: typeRest.CIDBQ02400_REQUEST_BODY, 
        response: typeRest.CIDBQ02400_RESPONSE | null = null): Promise<typeRest.CIDBQ02400_RESPONSE> {
            return await this.request(secret, 'CIDBQ02400', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물 예수금/잔고현황
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CIDBQ03000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CIDBQ03000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CIDBQ03000_RESPONSE} response               응답
     * @returns {typeRest.CIDBQ03000_RESPONSE}
     */
    public async CIDBQ03000(
        secret: Secret, requestHeader: typeRest.CIDBQ03000_REQUEST_HEADER, requestBody: typeRest.CIDBQ03000_REQUEST_BODY, 
        response: typeRest.CIDBQ03000_RESPONSE | null = null): Promise<typeRest.CIDBQ03000_RESPONSE> {
            return await this.request(secret, 'CIDBQ03000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물 예탁자산 조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CIDBQ05300_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CIDBQ05300_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CIDBQ05300_RESPONSE} response               응답
     * @returns {typeRest.CIDBQ05300_RESPONSE}
     */
    public async CIDBQ05300(
        secret: Secret, requestHeader: typeRest.CIDBQ05300_REQUEST_HEADER, requestBody: typeRest.CIDBQ05300_REQUEST_BODY, 
        response: typeRest.CIDBQ05300_RESPONSE | null = null): Promise<typeRest.CIDBQ05300_RESPONSE> {
            return await this.request(secret, 'CIDBQ05300', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 일자별 미결제 잔고내역
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CIDEQ00800_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CIDEQ00800_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CIDEQ00800_RESPONSE} response               응답
     * @returns {typeRest.CIDEQ00800_RESPONSE}
     */
    public async CIDEQ00800(
        secret: Secret, requestHeader: typeRest.CIDEQ00800_REQUEST_HEADER, requestBody: typeRest.CIDEQ00800_REQUEST_BODY, 
        response: typeRest.CIDEQ00800_RESPONSE | null = null): Promise<typeRest.CIDEQ00800_RESPONSE> {
            return await this.request(secret, 'CIDEQ00800', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물 신규주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CIDBT00100_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CIDBT00100_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CIDBT00100_RESPONSE} response               응답
     * @returns {typeRest.CIDBT00100_RESPONSE}
     */
    public async CIDBT00100(
        secret: Secret, requestHeader: typeRest.CIDBT00100_REQUEST_HEADER, requestBody: typeRest.CIDBT00100_REQUEST_BODY, 
        response: typeRest.CIDBT00100_RESPONSE | null = null): Promise<typeRest.CIDBT00100_RESPONSE> {
            return await this.request(secret, 'CIDBT00100', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물 정정주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CIDBT00900_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CIDBT00900_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CIDBT00900_RESPONSE} response               응답
     * @returns {typeRest.CIDBT00900_RESPONSE}
     */
    public async CIDBT00900(
        secret: Secret, requestHeader: typeRest.CIDBT00900_REQUEST_HEADER, requestBody: typeRest.CIDBT00900_REQUEST_BODY, 
        response: typeRest.CIDBT00900_RESPONSE | null = null): Promise<typeRest.CIDBT00900_RESPONSE> {
            return await this.request(secret, 'CIDBT00900', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물 취소주문
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.CIDBT01000_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.CIDBT01000_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.CIDBT01000_RESPONSE} response               응답
     * @returns {typeRest.CIDBT01000_RESPONSE}
     */
    public async CIDBT01000(
        secret: Secret, requestHeader: typeRest.CIDBT01000_REQUEST_HEADER, requestBody: typeRest.CIDBT01000_REQUEST_BODY, 
        response: typeRest.CIDBT01000_RESPONSE | null = null): Promise<typeRest.CIDBT01000_RESPONSE> {
            return await this.request(secret, 'CIDBT01000', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물차트 분봉 조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.O3103_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.O3103_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.O3103_RESPONSE} response               응답
     * @returns {typeRest.O3103_RESPONSE}
     */
    public async o3103(
        secret: Secret, requestHeader: typeRest.O3103_REQUEST_HEADER, requestBody: typeRest.O3103_REQUEST_BODY, 
        response: typeRest.O3103_RESPONSE | null = null): Promise<typeRest.O3103_RESPONSE> {
            return await this.request(secret, 'o3103', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물차트(일주월) 조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.O3108_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.O3108_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.O3108_RESPONSE} response               응답
     * @returns {typeRest.O3108_RESPONSE}
     */
    public async o3108(
        secret: Secret, requestHeader: typeRest.O3108_REQUEST_HEADER, requestBody: typeRest.O3108_REQUEST_BODY, 
        response: typeRest.O3108_RESPONSE | null = null): Promise<typeRest.O3108_RESPONSE> {
            return await this.request(secret, 'o3108', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물 차트 NTick 체결 조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.O3117_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.O3117_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.O3117_RESPONSE} response               응답
     * @returns {typeRest.O3117_RESPONSE}
     */
    public async o3117(
        secret: Secret, requestHeader: typeRest.O3117_REQUEST_HEADER, requestBody: typeRest.O3117_REQUEST_BODY, 
        response: typeRest.O3117_RESPONSE | null = null): Promise<typeRest.O3117_RESPONSE> {
            return await this.request(secret, 'o3117', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 해외선물옵션차트용NTick(고정형)-API용
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.O3139_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.O3139_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.O3139_RESPONSE} response               응답
     * @returns {typeRest.O3139_RESPONSE}
     */
    public async o3139(
        secret: Secret, requestHeader: typeRest.O3139_REQUEST_HEADER, requestBody: typeRest.O3139_REQUEST_BODY, 
        response: typeRest.O3139_RESPONSE | null = null): Promise<typeRest.O3139_RESPONSE> {
            return await this.request(secret, 'o3139', requestHeader, requestBody, response);
        }
                    
    /**
     * @description 서버시간조회
     * @param {Secret} secret                                         인증 정보
     * @param {typeRest.T0167_REQUEST_HEADER} requestHeader    요청 header
     * @param {typeRest.T0167_REQUEST_BODY} requestBody        요청 body
     * @param {typeRest.T0167_RESPONSE} response               응답
     * @returns {typeRest.T0167_RESPONSE}
     */
    public async t0167(
        secret: Secret, requestHeader: typeRest.T0167_REQUEST_HEADER, requestBody: typeRest.T0167_REQUEST_BODY, 
        response: typeRest.T0167_RESPONSE | null = null): Promise<typeRest.T0167_RESPONSE> {
            return await this.request(secret, 't0167', requestHeader, requestBody, response);
        }
                    
}

export default EBestRest;
