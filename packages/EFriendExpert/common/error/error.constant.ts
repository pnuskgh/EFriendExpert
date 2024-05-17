'use strict'
/**
 * 에러 클래스
 * 
 * @file packages/EFriendExpert/common/error/error.constant.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author dalcon10028 <dalcon10280@gmail.com>
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

export enum ERROR_CODE {
    UNKNOWN_ERROR = 2000,
    FETCH_ERROR = 3001,
    REQUIRED,
    NOTALLOWED,
    FIELDERROR,
    INSERTERROR,
    SERVICEERROR,
    WAITINGERROR,
    OSE00001 = 'OSE00001',              //--- OSE : OBCon Stock Error

    //--- 한국투자증권의 오류 코드
    MCA00000 = 'MCA00000', 
    KIER2620 = 'KIER2620',
    KIOK0530 = 'KIOK0530', 
    KIOK0560 = 'KIOK0560',

    OPSP0000 = 'OPSP0000',
    OPSP0001 = 'OPSP0001',
    OPSP0002 = 'OPSP0002',
    OPSP0009 = 'OPSP0009',
    OPSP0011 = 'OPSP0011',
    OPSP8996 = 'OPSP8996',
    OPSP9991 = 'OPSP9991',
    OPSQ2002 = 'OPSQ2002',

    EGW00001 = 'EGW00001',
    EGW00002 = 'EGW00002',                
    EGW00003 = 'EGW00003',                
    EGW00004 = 'EGW00004',                
    EGW00101 = 'EGW00101',                
    EGW00102 = 'EGW00102',                
    EGW00103 = 'EGW00103',                
    EGW00104 = 'EGW00104',                
    EGW00105 = 'EGW00105',                
    EGW00106 = 'EGW00106',                
    EGW00107 = 'EGW00107',                
    EGW00108 = 'EGW00108',                
    EGW00109 = 'EGW00109',                
    EGW00110 = 'EGW00110',                
    EGW00111 = 'EGW00111',                
    EGW00112 = 'EGW00112',                
    EGW00113 = 'EGW00113',                
    EGW00114 = 'EGW00114',                
    EGW00115 = 'EGW00115',                
    EGW00116 = 'EGW00116',                
    EGW00117 = 'EGW00117',                
    EGW00118 = 'EGW00118',                
    EGW00119 = 'EGW00119',                
    EGW00120 = 'EGW00120',                
    EGW00121 = 'EGW00121',                
    EGW00122 = 'EGW00122',                
    EGW00123 = 'EGW00123',                
    EGW00124 = 'EGW00124',                
    EGW00125 = 'EGW00125',                
    EGW00126 = 'EGW00126',                
    EGW00127 = 'EGW00127',                
    EGW00128 = 'EGW00128',                
    EGW00129 = 'EGW00129',                
    EGW00130 = 'EGW00130',                
    EGW00131 = 'EGW00131',                
    EGW00132 = 'EGW00132',                
    EGW00201 = 'EGW00201',                
    EGW00202 = 'EGW00202',                
    EGW00203 = 'EGW00203',                
    EGW00204 = 'EGW00204',                
    EGW00205 = 'EGW00205',                
    EGW00206 = 'EGW00206',                
    EGW00207 = 'EGW00207',                
    EGW00208 = 'EGW00208',                
    EGW00209 = 'EGW00209',                
    EGW00210 = 'EGW00210',                
    EGW00211 = 'EGW00211',                
    EGW00212 = 'EGW00212',                
    EGW00213 = 'EGW00213',                
    EGW00300 = 'EGW00300',                
    EGW00301 = 'EGW00301',                
    EGW00302 = 'EGW00302',                
    EGW00303 = 'EGW00303',
    EGW00304 = 'EGW00304'
};
  
export const ERROR_MESSAGE: Record<ERROR_CODE, string> = {
    [ERROR_CODE.UNKNOWN_ERROR]: 'Unknown error.',
    [ERROR_CODE.FETCH_ERROR]: 'Fetch error.',
    [ERROR_CODE.REQUIRED]: 'Not found',
    [ERROR_CODE.NOTALLOWED]: 'Not allowed.',
    [ERROR_CODE.FIELDERROR]: 'Field check is required',
    [ERROR_CODE.INSERTERROR]: 'Insert error.',
    [ERROR_CODE.SERVICEERROR]: 'Service internal error.',
    [ERROR_CODE.WAITINGERROR]: 'tokenP waiting error.',
    [ERROR_CODE.OSE00001]: 'Active Secrets가 없습니다.',

    [ERROR_CODE.MCA00000]: '정상처리 되었습니다', 
    [ERROR_CODE.KIER2620]: '조회할 자료가 없습니다',
    [ERROR_CODE.KIOK0530]: '조회되었습니다', 
    [ERROR_CODE.KIOK0560]: '조회할 내용이 없습니다',

    [ERROR_CODE.OPSP0000]: 'SUBSCRIBE SUCCESS',
    [ERROR_CODE.OPSP0001]: 'UNSUBSCRIBE SUCCESS',
    [ERROR_CODE.OPSP0002]: 'ALREADY IN SUBSCRIBE',
    [ERROR_CODE.OPSP0009]: 'SUBSCRIBE ERROR : mci send failed',                 //--- https://apiportal.koreainvestment.com/community/10000000-0000-0011-0000-000000000003
    [ERROR_CODE.OPSP0011]: 'invalid approval : NOT FOUND',                      //--- ??? 업무시간 외에 호출되는 경우, 해당 오류 발생 / WebSocket 생성시 이미 사용됨. approval_key는 단 한번만 사용 가능함
    [ERROR_CODE.OPSP8996]: 'ALREADY IN USE appkey',                             //--- appkey에 해당하는 WebSocket이 이미 동작하고 있음
    [ERROR_CODE.OPSP9991]: 'JSON PARSING ERROR : input not found',
    [ERROR_CODE.OPSQ2002]: 'ERROR INVALID INPUT_FILED_SIZE',

    [ERROR_CODE.EGW00001]: '일시적 오류가 발생했습니다.',
    [ERROR_CODE.EGW00002]: '서버 에러가 발생했습니다.',                
    [ERROR_CODE.EGW00003]: '접근이 거부되었습니다.',                
    [ERROR_CODE.EGW00004]: '권한을 부여받지 않은 고객입니다.',                
    [ERROR_CODE.EGW00101]: '유효하지 않은 요청입니다.',                
    [ERROR_CODE.EGW00102]: 'AppKey는 필수입니다.',                
    [ERROR_CODE.EGW00103]: '유효하지 않은 AppKey입니다.',                
    [ERROR_CODE.EGW00104]: 'AppSecret은 필수입니다.',                
    [ERROR_CODE.EGW00105]: '유효하지 않은 AppSecret입니다.',                
    [ERROR_CODE.EGW00106]: 'redirect_uri는 필수입니다.',                
    [ERROR_CODE.EGW00107]: '유효하지 않은 redirect_uri입니다.',                
    [ERROR_CODE.EGW00108]: '유효하지 않은 서비스구분(service)입니다.',                
    [ERROR_CODE.EGW00109]: 'scope는 필수입니다.',                
    [ERROR_CODE.EGW00110]: '유효하지 않은 scope 입니다.',                
    [ERROR_CODE.EGW00111]: '유효하지 않은 state 입니다.',                
    [ERROR_CODE.EGW00112]: '유효하지 않은 grant 입니다.',                
    [ERROR_CODE.EGW00113]: '응답구분(response_type)은 필수입니다.',                
    [ERROR_CODE.EGW00114]: '지원하지 않는 응답구분(response_type)입니다.',                
    [ERROR_CODE.EGW00115]: '권한부여 타입(grant_type)은 필수입니다.',                
    [ERROR_CODE.EGW00116]: '지원하지 않는 권한부여 타입(grant_type)입니다.',                
    [ERROR_CODE.EGW00117]: '지원하지 않는 토큰 타입(token_type)입니다.',                
    [ERROR_CODE.EGW00118]: '유효하지 않은 code 입니다.',                
    [ERROR_CODE.EGW00119]: 'code를 찾을 수 없습니다.',                
    [ERROR_CODE.EGW00120]: '기간이 만료된 code 입니다.',                
    [ERROR_CODE.EGW00121]: '유효하지 않은 token 입니다.',                
    [ERROR_CODE.EGW00122]: 'token을 찾을 수 없습니다.',                
    [ERROR_CODE.EGW00123]: '기간이 만료된 token 입니다.',                
    [ERROR_CODE.EGW00124]: '유효하지 않은 session_key 입니다.',                
    [ERROR_CODE.EGW00125]: 'session_key를 찾을 수 없습니다.',                
    [ERROR_CODE.EGW00126]: '기간이 만료된 session_key 입니다.',                
    [ERROR_CODE.EGW00127]: '제휴사번호(corpno)는 필수입니다.',                
    [ERROR_CODE.EGW00128]: '계좌번호(acctno)는 필수입니다.',                
    [ERROR_CODE.EGW00129]: 'HTS_ID는 필수입니다.',                
    [ERROR_CODE.EGW00130]: '유효하지 않은 유저(user)입니다.',                
    [ERROR_CODE.EGW00131]: '유효하지 않은 hashkey입니다.',                
    [ERROR_CODE.EGW00132]: 'Content-Type이 유효하지 않습니다.',                
    [ERROR_CODE.EGW00201]: '초당 거래건수를 초과하였습니다.',                
    [ERROR_CODE.EGW00202]: 'GW라우팅 중 오류가 발생했습니다.',                
    [ERROR_CODE.EGW00203]: 'OPS라우팅 중 오류가 발생했습니다.',                
    [ERROR_CODE.EGW00204]: 'Internal Gateway 인스턴스를 잘못 입력했습니다.',                
    [ERROR_CODE.EGW00205]: 'credentials_type이 유효하지 않습니다.(Bearer)',                
    [ERROR_CODE.EGW00206]: 'API 사용 권한이 없습니다.',                
    [ERROR_CODE.EGW00207]: 'IP 주소가 없거나 유효하지 않습니다.',                
    [ERROR_CODE.EGW00208]: '고객유형(custtype)이 유효하지 않습니다.',                
    [ERROR_CODE.EGW00209]: '일련번호(seq_no)가 유효하지 않습니다.',                
    [ERROR_CODE.EGW00210]: '법인고객의 경우 모의투자를 이용할 수 없습니다.',                
    [ERROR_CODE.EGW00211]: '고객명(personalname)은 필수 입니다.',                
    [ERROR_CODE.EGW00212]: '휴대전화번호(personalphone)는 필수 입니다.',                
    [ERROR_CODE.EGW00213]: '제휴사명(corpname)은 필수 입니다.',                
    [ERROR_CODE.EGW00300]: 'Gateway 라우팅 오류가 발생했습니다.',                
    [ERROR_CODE.EGW00301]: '연결 시간이 초과되었습니다.직전 거래를 반드시 확인하세요.',                
    [ERROR_CODE.EGW00302]: '거래시간이 초과되었습니다.직전 거래를 반드시 확인하세요.',                
    [ERROR_CODE.EGW00303]: '법인고객에게 허용되지 않은 IP접근입니다.',
    [ERROR_CODE.EGW00304]: '고객식별키(법인 personalSeckey, 개인 appSecret)가 유효하지 않습니다.'
};
