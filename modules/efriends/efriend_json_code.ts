/**
 * 증권 코드 정보
 * 
 * @file modules/efriends/efriend_json_code.js
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */
    
const EFriend_JSON_CODE = {
    "kospi":     {
        "info":         {
            "code": "kospi",
            "name": "코스피",
            "zipPrefix": "https://new.real.download.dws.co.kr/common/master",
            "zipFile": "kospi_code.mst.zip",
            "txtFile": "kospi_code.mst",
            "pythonPrefix": "https://github.com/koreainvestment/open-trading-api/tree/main/stocks_info",
            "pythonFile": "kis_kospi_code_mst.py",
            "sep": "",
            "verifyDate": "",
            "memo": ""
        },
        "fields":         [
            {
                "start": 0,
                "code": "code",
                "name": "단축코드",
                "type": "string",
                "required": true,
                "length": 9,
                "description": "",
                "default": ""
            },
            {
                "start": 9,
                "code": "",
                "name": "표준코드",
                "type": "string",
                "required": true,
                "length": 12,
                "description": "",
                "default": ""
            },
            {
                "start": 21,
                "code": "name",
                "name": "한글명",
                "type": "string",
                "required": true,
                "length": 40,
                "description": "",
                "default": ""
            },
            {
                "start": -228,
                "code": "",
                "name": "그룹코드",
                "type": "string",
                "required": true,
                "length": 2,
                "description": "",
                "default": ""
            },
            {
                "start": -226,
                "code": "",
                "name": "시가총액규모",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -225,
                "code": "",
                "name": "지수업종대분류",
                "type": "string",
                "required": true,
                "length": 4,
                "description": "",
                "default": ""
            },
            {
                "start": -221,
                "code": "",
                "name": "지수업종중분류",
                "type": "string",
                "required": true,
                "length": 4,
                "description": "",
                "default": ""
            },
            {
                "start": -217,
                "code": "",
                "name": "지수업종소분류",
                "type": "string",
                "required": true,
                "length": 4,
                "description": "",
                "default": ""
            },
            {
                "start": -213,
                "code": "",
                "name": "제조업",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -212,
                "code": "",
                "name": "저유동성",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -211,
                "code": "",
                "name": "지배구조지수종목",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -210,
                "code": "",
                "name": "KOSPI200섹터업종",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -209,
                "code": "",
                "name": "KOSPI100",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -208,
                "code": "",
                "name": "KOSPI50",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -207,
                "code": "",
                "name": "KRX",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -206,
                "code": "",
                "name": "ETP",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -205,
                "code": "",
                "name": "ELW발행",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -204,
                "code": "",
                "name": "KRX100",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -203,
                "code": "",
                "name": "KRX자동차",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -202,
                "code": "",
                "name": "KRX반도체",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -201,
                "code": "",
                "name": "KRX바이오",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -200,
                "code": "",
                "name": "KRX은행",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -199,
                "code": "",
                "name": "KRX건설",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -198,
                "code": "",
                "name": "KRX에너지화학",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -197,
                "code": "",
                "name": "KRX철강",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -196,
                "code": "",
                "name": "단기과열",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -195,
                "code": "",
                "name": "KRX미디어통신",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -194,
                "code": "",
                "name": "KRX건설",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -193,
                "code": "",
                "name": "Non1",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -192,
                "code": "",
                "name": "KRX증권",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -191,
                "code": "",
                "name": "KRX선박",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -190,
                "code": "",
                "name": "KRX섹터_보험",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -189,
                "code": "",
                "name": "KRX섹터_운송",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -188,
                "code": "",
                "name": "SRI",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -187,
                "code": "",
                "name": "기준가",
                "type": "string",
                "required": true,
                "length": 9,
                "description": "",
                "default": ""
            },
            {
                "start": -178,
                "code": "",
                "name": "매매수량단위",
                "type": "string",
                "required": true,
                "length": 5,
                "description": "",
                "default": ""
            },
            {
                "start": -173,
                "code": "",
                "name": "시간외수량단위",
                "type": "string",
                "required": true,
                "length": 5,
                "description": "",
                "default": ""
            },
            {
                "start": -168,
                "code": "",
                "name": "거래정지",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -167,
                "code": "",
                "name": "정리매매",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -166,
                "code": "",
                "name": "관리종목",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -165,
                "code": "",
                "name": "시장경고",
                "type": "string",
                "required": true,
                "length": 2,
                "description": "",
                "default": ""
            },
            {
                "start": -163,
                "code": "",
                "name": "경고예고",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -162,
                "code": "",
                "name": "불성실공시",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -161,
                "code": "",
                "name": "우회상장",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -160,
                "code": "",
                "name": "락구분",
                "type": "string",
                "required": true,
                "length": 2,
                "description": "",
                "default": ""
            },
            {
                "start": -158,
                "code": "",
                "name": "액면변경",
                "type": "string",
                "required": true,
                "length": 2,
                "description": "",
                "default": ""
            },
            {
                "start": -156,
                "code": "",
                "name": "증자구분",
                "type": "string",
                "required": true,
                "length": 2,
                "description": "",
                "default": ""
            },
            {
                "start": -154,
                "code": "",
                "name": "증거금비율",
                "type": "string",
                "required": true,
                "length": 3,
                "description": "",
                "default": ""
            },
            {
                "start": -151,
                "code": "",
                "name": "신용가능",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -150,
                "code": "",
                "name": "신용기간",
                "type": "string",
                "required": true,
                "length": 3,
                "description": "",
                "default": ""
            },
            {
                "start": -147,
                "code": "",
                "name": "전일거래량",
                "type": "string",
                "required": true,
                "length": 12,
                "description": "",
                "default": ""
            },
            {
                "start": -135,
                "code": "",
                "name": "액면가",
                "type": "string",
                "required": true,
                "length": 12,
                "description": "",
                "default": ""
            },
            {
                "start": -123,
                "code": "",
                "name": "상장일자",
                "type": "string",
                "required": true,
                "length": 8,
                "description": "",
                "default": ""
            },
            {
                "start": -115,
                "code": "",
                "name": "상장주수",
                "type": "string",
                "required": true,
                "length": 15,
                "description": "",
                "default": ""
            },
            {
                "start": -100,
                "code": "",
                "name": "자본금",
                "type": "string",
                "required": true,
                "length": 21,
                "description": "",
                "default": ""
            },
            {
                "start": -79,
                "code": "",
                "name": "결산월",
                "type": "string",
                "required": true,
                "length": 2,
                "description": "",
                "default": ""
            },
            {
                "start": -77,
                "code": "",
                "name": "공모가",
                "type": "string",
                "required": true,
                "length": 7,
                "description": "",
                "default": ""
            },
            {
                "start": -70,
                "code": "",
                "name": "우선주",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -69,
                "code": "",
                "name": "공매도과열",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -68,
                "code": "",
                "name": "이상급등",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -67,
                "code": "",
                "name": "KRX300",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -66,
                "code": "",
                "name": "KOSPI",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -65,
                "code": "",
                "name": "매출액",
                "type": "string",
                "required": true,
                "length": 9,
                "description": "",
                "default": ""
            },
            {
                "start": -56,
                "code": "",
                "name": "영업이익",
                "type": "string",
                "required": true,
                "length": 9,
                "description": "",
                "default": ""
            },
            {
                "start": -47,
                "code": "",
                "name": "경상이익",
                "type": "string",
                "required": true,
                "length": 9,
                "description": "",
                "default": ""
            },
            {
                "start": -38,
                "code": "",
                "name": "당기순이익",
                "type": "string",
                "required": true,
                "length": 5,
                "description": "",
                "default": ""
            },
            {
                "start": -33,
                "code": "",
                "name": "ROE",
                "type": "string",
                "required": true,
                "length": 9,
                "description": "",
                "default": ""
            },
            {
                "start": -24,
                "code": "",
                "name": "기준년월",
                "type": "string",
                "required": true,
                "length": 8,
                "description": "",
                "default": ""
            },
            {
                "start": -16,
                "code": "",
                "name": "시가총액",
                "type": "string",
                "required": true,
                "length": 9,
                "description": "",
                "default": ""
            },
            {
                "start": -7,
                "code": "",
                "name": "그룹사코드",
                "type": "string",
                "required": true,
                "length": 3,
                "description": "",
                "default": ""
            },
            {
                "start": -4,
                "code": "",
                "name": "회사신용한도초과",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -3,
                "code": "",
                "name": "담보대출가능",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -2,
                "code": "",
                "name": "대주가능",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            }
        ]
    },
    "kosdaq":     {
        "info":         {
            "code": "kosdaq",
            "name": "코스닥",
            "zipPrefix": "https://new.real.download.dws.co.kr/common/master",
            "zipFile": "kosdaq_code.mst.zip",
            "txtFile": "kosdaq_code.mst",
            "pythonPrefix": "https://github.com/koreainvestment/open-trading-api/tree/main/stocks_info",
            "pythonFile": "kis_kosdaq_code_mst.py",
            "sep": "",
            "verifyDate": "",
            "memo": ""
        },
        "fields":         [
            {
                "start": 0,
                "code": "code",
                "name": "단축코드",
                "type": "string",
                "required": true,
                "length": 9,
                "description": "",
                "default": ""
            },
            {
                "start": 9,
                "code": "",
                "name": "표준코드",
                "type": "string",
                "required": true,
                "length": 12,
                "description": "",
                "default": ""
            },
            {
                "start": 21,
                "code": "name",
                "name": "한글명",
                "type": "string",
                "required": true,
                "length": 40,
                "description": "",
                "default": ""
            },
            {
                "start": -222,
                "code": "",
                "name": "증권그룹구분코드",
                "type": "string",
                "required": true,
                "length": 2,
                "description": "",
                "default": ""
            },
            {
                "start": -220,
                "code": "",
                "name": "시가총액 규모 구분 코드 유가",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -219,
                "code": "",
                "name": "지수업종 대분류 코드",
                "type": "string",
                "required": true,
                "length": 4,
                "description": "",
                "default": ""
            },
            {
                "start": -215,
                "code": "",
                "name": "지수 업종 중분류 코드",
                "type": "string",
                "required": true,
                "length": 4,
                "description": "",
                "default": ""
            },
            {
                "start": -211,
                "code": "",
                "name": "지수업종 소분류 코드",
                "type": "string",
                "required": true,
                "length": 4,
                "description": "",
                "default": ""
            },
            {
                "start": -207,
                "code": "",
                "name": "벤처기업 여부 (Y/N)",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -206,
                "code": "",
                "name": "저유동성종목 여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -205,
                "code": "",
                "name": "KRX 종목 여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -204,
                "code": "",
                "name": "ETP 상품구분코드",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -203,
                "code": "",
                "name": "KRX100 종목 여부 (Y/N)",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -202,
                "code": "",
                "name": "KRX 자동차 여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -201,
                "code": "",
                "name": "KRX 반도체 여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -200,
                "code": "",
                "name": "KRX 바이오 여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -199,
                "code": "",
                "name": "KRX 은행 여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -198,
                "code": "",
                "name": "기업인수목적회사여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -197,
                "code": "",
                "name": "KRX 에너지 화학 여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -196,
                "code": "",
                "name": "KRX 철강 여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -195,
                "code": "",
                "name": "단기과열종목구분코드",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -194,
                "code": "",
                "name": "KRX 미디어 통신 여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -193,
                "code": "",
                "name": "KRX 건설 여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -192,
                "code": "",
                "name": "(코스닥)투자주의환기종목여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -191,
                "code": "",
                "name": "KRX 증권 구분",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -190,
                "code": "",
                "name": "KRX 선박 구분",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -189,
                "code": "",
                "name": "KRX섹터지수 보험여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -188,
                "code": "",
                "name": "KRX섹터지수 운송여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -187,
                "code": "",
                "name": "KOSDAQ150지수여부 (Y/N)",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -186,
                "code": "",
                "name": "주식 기준가",
                "type": "string",
                "required": true,
                "length": 9,
                "description": "",
                "default": ""
            },
            {
                "start": -177,
                "code": "",
                "name": "정규 시장 매매 수량 단위",
                "type": "string",
                "required": true,
                "length": 5,
                "description": "",
                "default": ""
            },
            {
                "start": -172,
                "code": "",
                "name": "시간외 시장 매매 수량 단위",
                "type": "string",
                "required": true,
                "length": 5,
                "description": "",
                "default": ""
            },
            {
                "start": -167,
                "code": "",
                "name": "거래정지 여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -166,
                "code": "",
                "name": "정리매매 여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -165,
                "code": "",
                "name": "관리 종목 여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -164,
                "code": "",
                "name": "시장 경고 구분 코드",
                "type": "string",
                "required": true,
                "length": 2,
                "description": "",
                "default": ""
            },
            {
                "start": -162,
                "code": "",
                "name": "시장 경고위험 예고 여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -161,
                "code": "",
                "name": "불성실 공시 여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -160,
                "code": "",
                "name": "우회 상장 여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -159,
                "code": "",
                "name": "락구분 코드",
                "type": "string",
                "required": true,
                "length": 2,
                "description": "",
                "default": ""
            },
            {
                "start": -157,
                "code": "",
                "name": "액면가 변경 구분 코드",
                "type": "string",
                "required": true,
                "length": 2,
                "description": "",
                "default": ""
            },
            {
                "start": -155,
                "code": "",
                "name": "증자 구분 코드",
                "type": "string",
                "required": true,
                "length": 2,
                "description": "",
                "default": ""
            },
            {
                "start": -153,
                "code": "",
                "name": "증거금 비율",
                "type": "string",
                "required": true,
                "length": 3,
                "description": "",
                "default": ""
            },
            {
                "start": -150,
                "code": "",
                "name": "신용주문 가능 여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -149,
                "code": "",
                "name": "신용기간",
                "type": "string",
                "required": true,
                "length": 3,
                "description": "",
                "default": ""
            },
            {
                "start": -146,
                "code": "",
                "name": "전일 거래량",
                "type": "string",
                "required": true,
                "length": 12,
                "description": "",
                "default": ""
            },
            {
                "start": -134,
                "code": "",
                "name": "주식 액면가",
                "type": "string",
                "required": true,
                "length": 12,
                "description": "",
                "default": ""
            },
            {
                "start": -122,
                "code": "",
                "name": "주식 상장 일자",
                "type": "string",
                "required": true,
                "length": 8,
                "description": "",
                "default": ""
            },
            {
                "start": -114,
                "code": "",
                "name": "상장 주수(천)",
                "type": "string",
                "required": true,
                "length": 15,
                "description": "",
                "default": ""
            },
            {
                "start": -99,
                "code": "",
                "name": "자본금",
                "type": "string",
                "required": true,
                "length": 21,
                "description": "",
                "default": ""
            },
            {
                "start": -78,
                "code": "",
                "name": "결산 월",
                "type": "string",
                "required": true,
                "length": 2,
                "description": "",
                "default": ""
            },
            {
                "start": -76,
                "code": "",
                "name": "공모 가격",
                "type": "string",
                "required": true,
                "length": 7,
                "description": "",
                "default": ""
            },
            {
                "start": -69,
                "code": "",
                "name": "우선주 구분 코드",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -68,
                "code": "",
                "name": "공매도과열종목여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -67,
                "code": "",
                "name": "이상급등종목여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -66,
                "code": "",
                "name": "KRX300 종목 여부 (Y/N)",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -65,
                "code": "",
                "name": "매출액",
                "type": "string",
                "required": true,
                "length": 9,
                "description": "",
                "default": ""
            },
            {
                "start": -56,
                "code": "",
                "name": "영업이익",
                "type": "string",
                "required": true,
                "length": 9,
                "description": "",
                "default": ""
            },
            {
                "start": -47,
                "code": "",
                "name": "경상이익",
                "type": "string",
                "required": true,
                "length": 9,
                "description": "",
                "default": ""
            },
            {
                "start": -38,
                "code": "",
                "name": "단기순이익",
                "type": "string",
                "required": true,
                "length": 5,
                "description": "",
                "default": ""
            },
            {
                "start": -33,
                "code": "",
                "name": "ROE(자기자본이익률)",
                "type": "string",
                "required": true,
                "length": 9,
                "description": "",
                "default": ""
            },
            {
                "start": -24,
                "code": "",
                "name": "기준년월",
                "type": "string",
                "required": true,
                "length": 8,
                "description": "",
                "default": ""
            },
            {
                "start": -16,
                "code": "",
                "name": "전일기준 시가총액 (억)",
                "type": "string",
                "required": true,
                "length": 9,
                "description": "",
                "default": ""
            },
            {
                "start": -7,
                "code": "",
                "name": "그룹사 코드",
                "type": "string",
                "required": true,
                "length": 3,
                "description": "",
                "default": ""
            },
            {
                "start": -4,
                "code": "",
                "name": "회사신용한도초과여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -3,
                "code": "",
                "name": "담보대출가능여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -2,
                "code": "",
                "name": "대주가능여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            }
        ]
    },
    "domestic_future":     {
        "info":         {
            "code": "domestic_future",
            "name": "지수 선물 옵션",
            "zipPrefix": "https://new.real.download.dws.co.kr/common/master",
            "zipFile": "fo_idx_code_mts.mst.zip",
            "txtFile": "fo_idx_code_mts.mst",
            "pythonPrefix": "https://github.com/koreainvestment/open-trading-api/tree/main/stocks_info",
            "pythonFile": "domestic_future_code.py",
            "sep": "|",
            "verifyDate": "",
            "memo": ""
        },
        "fields":         [
            {
                "start": "",
                "code": "",
                "name": "상품종류",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "code",
                "name": "단축코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "표준코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "name",
                "name": "한글종목명",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "ATM구분",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "행사가",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "월물구분코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "기초자산 단축코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "기초자산 명",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            }
        ]
    },
    "domestic_stock_future":     {
        "info":         {
            "code": "domestic_stock_future",
            "name": "주식 선물 옵션",
            "zipPrefix": "https://new.real.download.dws.co.kr/common/master",
            "zipFile": "fo_stk_code_mts.mst.zip",
            "txtFile": "fo_stk_code_mts.mst",
            "pythonPrefix": "https://github.com/koreainvestment/open-trading-api/tree/main/stocks_info",
            "pythonFile": "domestic_stock_future_code.py",
            "sep": "|",
            "verifyDate": "",
            "memo": ""
        },
        "fields":         [
            {
                "start": "",
                "code": "",
                "name": "상품종류",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "code",
                "name": "단축코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "표준코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "name",
                "name": "한글종목명",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "ATM구분",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "행사가",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "월물구분코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "기초자산 단축코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "기초자산 명",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            }
        ]
    },
    "domestic_commodity_future":     {
        "info":         {
            "code": "domestic_stock_future",
            "name": "주식 선물 옵션",
            "zipPrefix": "https://new.real.download.dws.co.kr/common/master",
            "zipFile": "fo_stk_code_mts.mst.zip",
            "txtFile": "fo_stk_code_mts.mst",
            "pythonPrefix": "https://github.com/koreainvestment/open-trading-api/tree/main/stocks_info",
            "pythonFile": "domestic_stock_future_code.py",
            "sep": "|",
            "verifyDate": "",
            "memo": ""
        },
        "fields":         [
            {
                "start": "",
                "code": "",
                "name": "상품종류",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "code",
                "name": "단축코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "표준코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "name",
                "name": "한글종목명",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "ATM구분",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "행사가",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "월물구분코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "기초자산 단축코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "기초자산 명",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            }
        ]
    },
    "sector":     {
        "info":         {
            "code": "sector",
            "name": "업종 코드",
            "zipPrefix": "https://new.real.download.dws.co.kr/common/master",
            "zipFile": "idxcode.mst.zip",
            "txtFile": "idxcode.mst",
            "pythonPrefix": "https://github.com/koreainvestment/open-trading-api/tree/main/stocks_info",
            "pythonFile": "sector_code.py",
            "sep": "",
            "verifyDate": "",
            "memo": ""
        },
        "fields":         [
            {
                "start": 1,
                "code": "code",
                "name": "업종코드",
                "type": "string",
                "required": true,
                "length": 4,
                "description": "",
                "default": ""
            },
            {
                "start": 3,
                "code": "name",
                "name": "업종명",
                "type": "string",
                "required": true,
                "length": 40,
                "description": "",
                "default": ""
            }
        ]
    },
    "theme":     {
        "info":         {
            "code": "theme",
            "name": "테마 코드",
            "zipPrefix": "https://new.real.download.dws.co.kr/common/master",
            "zipFile": "theme_code.mst.zip",
            "txtFile": "theme_code.mst",
            "pythonPrefix": "https://github.com/koreainvestment/open-trading-api/tree/main/stocks_info",
            "pythonFile": "theme_code.py",
            "sep": "",
            "verifyDate": "",
            "memo": ""
        },
        "fields":         [
            {
                "start": 0,
                "code": "code",
                "name": "테마코드",
                "type": "string",
                "required": true,
                "length": 3,
                "description": "",
                "default": ""
            },
            {
                "start": 3,
                "code": "name",
                "name": "테마명",
                "type": "string",
                "required": true,
                "length": 40,
                "description": "",
                "default": ""
            },
            {
                "start": -10,
                "code": "stockCode",
                "name": "종목코드",
                "type": "string",
                "required": true,
                "length": 10,
                "description": "",
                "default": ""
            }
        ]
    },
    "overseas_stock_nas":     {
        "info":         {
            "code": "overseas_stock_nas",
            "name": "해외 종목 코드 - 나스닥",
            "zipPrefix": "https://new.real.download.dws.co.kr/common/master",
            "zipFile": "nasmst.cod.zip",
            "txtFile": "NASMST.COD",
            "pythonPrefix": "https://github.com/koreainvestment/open-trading-api/tree/main/stocks_info",
            "pythonFile": "overseas_stock_code.py",
            "sep": "TAB",
            "verifyDate": "",
            "memo": ""
        },
        "fields":         [
            {
                "start": "",
                "code": "",
                "name": "National code",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Exchange id",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Exchange code",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Exchange name",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Symbol",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "realtime symbol",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Korea name",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "English name",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Security type",
                "type": "string",
                "required": true,
                "length": null,
                "description": "1:Index,2:Stock,3:ETP(ETF),4:Warrant",
                "default": "",
                "enum":                 [
                    {
                        "code": "1",
                        "name": "Index"
                    },
                    {
                        "code": "2",
                        "name": "Stock"
                    },
                    {
                        "code": "3",
                        "name": "ETP(ETF)"
                    },
                    {
                        "code": "4",
                        "name": "Warrant"
                    }
                ]
            },
            {
                "start": "",
                "code": "",
                "name": "currency",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "float position",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "data type",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "base price",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Bid order size",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Ask order size",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "market start time(HHMM)",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "market end time(HHMM)",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "DR 여부(Y/N)",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "DR 국가코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "업종분류코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "지수구성종목 존재 여부",
                "type": "string",
                "required": true,
                "length": null,
                "description": "0:구성종목없음,1:구성종목있음",
                "default": "",
                "enum":                 [
                    {
                        "code": "0",
                        "name": "구성종목없음"
                    },
                    {
                        "code": "1",
                        "name": "구성종목있음"
                    }
                ]
            },
            {
                "start": "",
                "code": "",
                "name": "Tick size Type",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "구분코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "001:ETF,002:ETN,003:ETC,004:Others,005:VIX Underlying ETF,006:VIX Underlying ETN",
                "default": "",
                "enum":                 [
                    {
                        "code": "001",
                        "name": "ETF"
                    },
                    {
                        "code": "002",
                        "name": "ETN"
                    },
                    {
                        "code": "003",
                        "name": "ETC"
                    },
                    {
                        "code": "004",
                        "name": "Others"
                    },
                    {
                        "code": "005",
                        "name": "VIX Underlying ETF"
                    },
                    {
                        "code": "006",
                        "name": "VIX Underlying ETN"
                    }
                ]
            },
            {
                "start": "",
                "code": "",
                "name": "Tick size type 상세",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            }
        ]
    },
    "overseas_stock_nys":     {
        "info":         {
            "code": "overseas_stock_nys",
            "name": "해외 종목 코드 - 뉴욕",
            "zipPrefix": "https://new.real.download.dws.co.kr/common/master",
            "zipFile": "nysmst.cod.zip",
            "txtFile": "NYSMST.COD",
            "pythonPrefix": "https://github.com/koreainvestment/open-trading-api/tree/main/stocks_info",
            "pythonFile": "overseas_stock_code.py",
            "sep": "TAB",
            "verifyDate": "",
            "memo": ""
        },
        "fields":         [
            {
                "start": "",
                "code": "",
                "name": "National code",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Exchange id",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Exchange code",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Exchange name",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Symbol",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "realtime symbol",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Korea name",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "English name",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Security type",
                "type": "string",
                "required": true,
                "length": null,
                "description": "1:Index,2:Stock,3:ETP(ETF),4:Warrant",
                "default": "",
                "enum":                 [
                    {
                        "code": "1",
                        "name": "Index"
                    },
                    {
                        "code": "2",
                        "name": "Stock"
                    },
                    {
                        "code": "3",
                        "name": "ETP(ETF)"
                    },
                    {
                        "code": "4",
                        "name": "Warrant"
                    }
                ]
            },
            {
                "start": "",
                "code": "",
                "name": "currency",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "float position",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "data type",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "base price",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Bid order size",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Ask order size",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "market start time(HHMM)",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "market end time(HHMM)",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "DR 여부(Y/N)",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "DR 국가코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "업종분류코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "지수구성종목 존재 여부",
                "type": "string",
                "required": true,
                "length": null,
                "description": "0:구성종목없음,1:구성종목있음",
                "default": "",
                "enum":                 [
                    {
                        "code": "0",
                        "name": "구성종목없음"
                    },
                    {
                        "code": "1",
                        "name": "구성종목있음"
                    }
                ]
            },
            {
                "start": "",
                "code": "",
                "name": "Tick size Type",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "구분코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "001:ETF,002:ETN,003:ETC,004:Others,005:VIX Underlying ETF,006:VIX Underlying ETN",
                "default": "",
                "enum":                 [
                    {
                        "code": "001",
                        "name": "ETF"
                    },
                    {
                        "code": "002",
                        "name": "ETN"
                    },
                    {
                        "code": "003",
                        "name": "ETC"
                    },
                    {
                        "code": "004",
                        "name": "Others"
                    },
                    {
                        "code": "005",
                        "name": "VIX Underlying ETF"
                    },
                    {
                        "code": "006",
                        "name": "VIX Underlying ETN"
                    }
                ]
            },
            {
                "start": "",
                "code": "",
                "name": "Tick size type 상세",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            }
        ]
    },
    "overseas_stock_ams":     {
        "info":         {
            "code": "overseas_stock_ams",
            "name": "해외 종목 코드 - 아멕스",
            "zipPrefix": "https://new.real.download.dws.co.kr/common/master",
            "zipFile": "amsmst.cod.zip",
            "txtFile": "AMSMST.COD",
            "pythonPrefix": "https://github.com/koreainvestment/open-trading-api/tree/main/stocks_info",
            "pythonFile": "overseas_stock_code.py",
            "sep": "TAB",
            "verifyDate": "",
            "memo": ""
        },
        "fields":         [
            {
                "start": "",
                "code": "",
                "name": "National code",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Exchange id",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Exchange code",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Exchange name",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Symbol",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "realtime symbol",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Korea name",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "English name",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Security type",
                "type": "string",
                "required": true,
                "length": null,
                "description": "1:Index,2:Stock,3:ETP(ETF),4:Warrant",
                "default": "",
                "enum":                 [
                    {
                        "code": "1",
                        "name": "Index"
                    },
                    {
                        "code": "2",
                        "name": "Stock"
                    },
                    {
                        "code": "3",
                        "name": "ETP(ETF)"
                    },
                    {
                        "code": "4",
                        "name": "Warrant"
                    }
                ]
            },
            {
                "start": "",
                "code": "",
                "name": "currency",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "float position",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "data type",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "base price",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Bid order size",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Ask order size",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "market start time(HHMM)",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "market end time(HHMM)",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "DR 여부(Y/N)",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "DR 국가코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "업종분류코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "지수구성종목 존재 여부",
                "type": "string",
                "required": true,
                "length": null,
                "description": "0:구성종목없음,1:구성종목있음",
                "default": "",
                "enum":                 [
                    {
                        "code": "0",
                        "name": "구성종목없음"
                    },
                    {
                        "code": "1",
                        "name": "구성종목있음"
                    }
                ]
            },
            {
                "start": "",
                "code": "",
                "name": "Tick size Type",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "구분코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "001:ETF,002:ETN,003:ETC,004:Others,005:VIX Underlying ETF,006:VIX Underlying ETN",
                "default": "",
                "enum":                 [
                    {
                        "code": "001",
                        "name": "ETF"
                    },
                    {
                        "code": "002",
                        "name": "ETN"
                    },
                    {
                        "code": "003",
                        "name": "ETC"
                    },
                    {
                        "code": "004",
                        "name": "Others"
                    },
                    {
                        "code": "005",
                        "name": "VIX Underlying ETF"
                    },
                    {
                        "code": "006",
                        "name": "VIX Underlying ETN"
                    }
                ]
            },
            {
                "start": "",
                "code": "",
                "name": "Tick size type 상세",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            }
        ]
    },
    "overseas_stock_shs":     {
        "info":         {
            "code": "overseas_stock_shs",
            "name": "해외 종목 코드 - 상해",
            "zipPrefix": "https://new.real.download.dws.co.kr/common/master",
            "zipFile": "shsmst.cod.zip",
            "txtFile": "SHSMST.COD",
            "pythonPrefix": "https://github.com/koreainvestment/open-trading-api/tree/main/stocks_info",
            "pythonFile": "overseas_stock_code.py",
            "sep": "TAB",
            "verifyDate": "",
            "memo": ""
        },
        "fields":         [
            {
                "start": "",
                "code": "",
                "name": "National code",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Exchange id",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Exchange code",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Exchange name",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Symbol",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "realtime symbol",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Korea name",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "English name",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Security type",
                "type": "string",
                "required": true,
                "length": null,
                "description": "1:Index,2:Stock,3:ETP(ETF),4:Warrant",
                "default": "",
                "enum":                 [
                    {
                        "code": "1",
                        "name": "Index"
                    },
                    {
                        "code": "2",
                        "name": "Stock"
                    },
                    {
                        "code": "3",
                        "name": "ETP(ETF)"
                    },
                    {
                        "code": "4",
                        "name": "Warrant"
                    }
                ]
            },
            {
                "start": "",
                "code": "",
                "name": "currency",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "float position",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "data type",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "base price",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Bid order size",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Ask order size",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "market start time(HHMM)",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "market end time(HHMM)",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "DR 여부(Y/N)",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "DR 국가코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "업종분류코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "지수구성종목 존재 여부",
                "type": "string",
                "required": true,
                "length": null,
                "description": "0:구성종목없음,1:구성종목있음",
                "default": "",
                "enum":                 [
                    {
                        "code": "0",
                        "name": "구성종목없음"
                    },
                    {
                        "code": "1",
                        "name": "구성종목있음"
                    }
                ]
            },
            {
                "start": "",
                "code": "",
                "name": "Tick size Type",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "구분코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "001:ETF,002:ETN,003:ETC,004:Others,005:VIX Underlying ETF,006:VIX Underlying ETN",
                "default": "",
                "enum":                 [
                    {
                        "code": "001",
                        "name": "ETF"
                    },
                    {
                        "code": "002",
                        "name": "ETN"
                    },
                    {
                        "code": "003",
                        "name": "ETC"
                    },
                    {
                        "code": "004",
                        "name": "Others"
                    },
                    {
                        "code": "005",
                        "name": "VIX Underlying ETF"
                    },
                    {
                        "code": "006",
                        "name": "VIX Underlying ETN"
                    }
                ]
            },
            {
                "start": "",
                "code": "",
                "name": "Tick size type 상세",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            }
        ]
    },
    "overseas_stock_shi":     {
        "info":         {
            "code": "overseas_stock_shi",
            "name": "해외 종목 코드 - 상해지수",
            "zipPrefix": "https://new.real.download.dws.co.kr/common/master",
            "zipFile": "shimst.cod.zip",
            "txtFile": "SHIMST.COD",
            "pythonPrefix": "https://github.com/koreainvestment/open-trading-api/tree/main/stocks_info",
            "pythonFile": "overseas_stock_code.py",
            "sep": "TAB",
            "verifyDate": "",
            "memo": ""
        },
        "fields":         [
            {
                "start": "",
                "code": "",
                "name": "National code",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Exchange id",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Exchange code",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Exchange name",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Symbol",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "realtime symbol",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Korea name",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "English name",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Security type",
                "type": "string",
                "required": true,
                "length": null,
                "description": "1:Index,2:Stock,3:ETP(ETF),4:Warrant",
                "default": "",
                "enum":                 [
                    {
                        "code": "1",
                        "name": "Index"
                    },
                    {
                        "code": "2",
                        "name": "Stock"
                    },
                    {
                        "code": "3",
                        "name": "ETP(ETF)"
                    },
                    {
                        "code": "4",
                        "name": "Warrant"
                    }
                ]
            },
            {
                "start": "",
                "code": "",
                "name": "currency",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "float position",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "data type",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "base price",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Bid order size",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Ask order size",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "market start time(HHMM)",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "market end time(HHMM)",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "DR 여부(Y/N)",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "DR 국가코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "업종분류코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "지수구성종목 존재 여부",
                "type": "string",
                "required": true,
                "length": null,
                "description": "0:구성종목없음,1:구성종목있음",
                "default": "",
                "enum":                 [
                    {
                        "code": "0",
                        "name": "구성종목없음"
                    },
                    {
                        "code": "1",
                        "name": "구성종목있음"
                    }
                ]
            },
            {
                "start": "",
                "code": "",
                "name": "Tick size Type",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "구분코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "001:ETF,002:ETN,003:ETC,004:Others,005:VIX Underlying ETF,006:VIX Underlying ETN",
                "default": "",
                "enum":                 [
                    {
                        "code": "001",
                        "name": "ETF"
                    },
                    {
                        "code": "002",
                        "name": "ETN"
                    },
                    {
                        "code": "003",
                        "name": "ETC"
                    },
                    {
                        "code": "004",
                        "name": "Others"
                    },
                    {
                        "code": "005",
                        "name": "VIX Underlying ETF"
                    },
                    {
                        "code": "006",
                        "name": "VIX Underlying ETN"
                    }
                ]
            },
            {
                "start": "",
                "code": "",
                "name": "Tick size type 상세",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            }
        ]
    },
    "overseas_stock_szs":     {
        "info":         {
            "code": "overseas_stock_szs",
            "name": "해외 종목 코드 - 심천",
            "zipPrefix": "https://new.real.download.dws.co.kr/common/master",
            "zipFile": "szsmst.cod.zip",
            "txtFile": "SZSMST.COD",
            "pythonPrefix": "https://github.com/koreainvestment/open-trading-api/tree/main/stocks_info",
            "pythonFile": "overseas_stock_code.py",
            "sep": "TAB",
            "verifyDate": "",
            "memo": ""
        },
        "fields":         [
            {
                "start": "",
                "code": "",
                "name": "National code",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Exchange id",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Exchange code",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Exchange name",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Symbol",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "realtime symbol",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Korea name",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "English name",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Security type",
                "type": "string",
                "required": true,
                "length": null,
                "description": "1:Index,2:Stock,3:ETP(ETF),4:Warrant",
                "default": "",
                "enum":                 [
                    {
                        "code": "1",
                        "name": "Index"
                    },
                    {
                        "code": "2",
                        "name": "Stock"
                    },
                    {
                        "code": "3",
                        "name": "ETP(ETF)"
                    },
                    {
                        "code": "4",
                        "name": "Warrant"
                    }
                ]
            },
            {
                "start": "",
                "code": "",
                "name": "currency",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "float position",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "data type",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "base price",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Bid order size",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Ask order size",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "market start time(HHMM)",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "market end time(HHMM)",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "DR 여부(Y/N)",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "DR 국가코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "업종분류코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "지수구성종목 존재 여부",
                "type": "string",
                "required": true,
                "length": null,
                "description": "0:구성종목없음,1:구성종목있음",
                "default": "",
                "enum":                 [
                    {
                        "code": "0",
                        "name": "구성종목없음"
                    },
                    {
                        "code": "1",
                        "name": "구성종목있음"
                    }
                ]
            },
            {
                "start": "",
                "code": "",
                "name": "Tick size Type",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "구분코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "001:ETF,002:ETN,003:ETC,004:Others,005:VIX Underlying ETF,006:VIX Underlying ETN",
                "default": "",
                "enum":                 [
                    {
                        "code": "001",
                        "name": "ETF"
                    },
                    {
                        "code": "002",
                        "name": "ETN"
                    },
                    {
                        "code": "003",
                        "name": "ETC"
                    },
                    {
                        "code": "004",
                        "name": "Others"
                    },
                    {
                        "code": "005",
                        "name": "VIX Underlying ETF"
                    },
                    {
                        "code": "006",
                        "name": "VIX Underlying ETN"
                    }
                ]
            },
            {
                "start": "",
                "code": "",
                "name": "Tick size type 상세",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            }
        ]
    },
    "overseas_stock_szi":     {
        "info":         {
            "code": "overseas_stock_szi",
            "name": "해외 종목 코드 - 심천지수",
            "zipPrefix": "https://new.real.download.dws.co.kr/common/master",
            "zipFile": "szimst.cod.zip",
            "txtFile": "SZIMST.COD",
            "pythonPrefix": "https://github.com/koreainvestment/open-trading-api/tree/main/stocks_info",
            "pythonFile": "overseas_stock_code.py",
            "sep": "TAB",
            "verifyDate": "",
            "memo": ""
        },
        "fields":         [
            {
                "start": "",
                "code": "",
                "name": "National code",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Exchange id",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Exchange code",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Exchange name",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Symbol",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "realtime symbol",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Korea name",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "English name",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Security type",
                "type": "string",
                "required": true,
                "length": null,
                "description": "1:Index,2:Stock,3:ETP(ETF),4:Warrant",
                "default": "",
                "enum":                 [
                    {
                        "code": "1",
                        "name": "Index"
                    },
                    {
                        "code": "2",
                        "name": "Stock"
                    },
                    {
                        "code": "3",
                        "name": "ETP(ETF)"
                    },
                    {
                        "code": "4",
                        "name": "Warrant"
                    }
                ]
            },
            {
                "start": "",
                "code": "",
                "name": "currency",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "float position",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "data type",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "base price",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Bid order size",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Ask order size",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "market start time(HHMM)",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "market end time(HHMM)",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "DR 여부(Y/N)",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "DR 국가코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "업종분류코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "지수구성종목 존재 여부",
                "type": "string",
                "required": true,
                "length": null,
                "description": "0:구성종목없음,1:구성종목있음",
                "default": "",
                "enum":                 [
                    {
                        "code": "0",
                        "name": "구성종목없음"
                    },
                    {
                        "code": "1",
                        "name": "구성종목있음"
                    }
                ]
            },
            {
                "start": "",
                "code": "",
                "name": "Tick size Type",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "구분코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "001:ETF,002:ETN,003:ETC,004:Others,005:VIX Underlying ETF,006:VIX Underlying ETN",
                "default": "",
                "enum":                 [
                    {
                        "code": "001",
                        "name": "ETF"
                    },
                    {
                        "code": "002",
                        "name": "ETN"
                    },
                    {
                        "code": "003",
                        "name": "ETC"
                    },
                    {
                        "code": "004",
                        "name": "Others"
                    },
                    {
                        "code": "005",
                        "name": "VIX Underlying ETF"
                    },
                    {
                        "code": "006",
                        "name": "VIX Underlying ETN"
                    }
                ]
            },
            {
                "start": "",
                "code": "",
                "name": "Tick size type 상세",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            }
        ]
    },
    "overseas_stock_tse":     {
        "info":         {
            "code": "overseas_stock_tse",
            "name": "해외 종목 코드 - 도쿄",
            "zipPrefix": "https://new.real.download.dws.co.kr/common/master",
            "zipFile": "tsemst.cod.zip",
            "txtFile": "TSEMST.COD",
            "pythonPrefix": "https://github.com/koreainvestment/open-trading-api/tree/main/stocks_info",
            "pythonFile": "overseas_stock_code.py",
            "sep": "TAB",
            "verifyDate": "",
            "memo": ""
        },
        "fields":         [
            {
                "start": "",
                "code": "",
                "name": "National code",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Exchange id",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Exchange code",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Exchange name",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Symbol",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "realtime symbol",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Korea name",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "English name",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Security type",
                "type": "string",
                "required": true,
                "length": null,
                "description": "1:Index,2:Stock,3:ETP(ETF),4:Warrant",
                "default": "",
                "enum":                 [
                    {
                        "code": "1",
                        "name": "Index"
                    },
                    {
                        "code": "2",
                        "name": "Stock"
                    },
                    {
                        "code": "3",
                        "name": "ETP(ETF)"
                    },
                    {
                        "code": "4",
                        "name": "Warrant"
                    }
                ]
            },
            {
                "start": "",
                "code": "",
                "name": "currency",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "float position",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "data type",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "base price",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Bid order size",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Ask order size",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "market start time(HHMM)",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "market end time(HHMM)",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "DR 여부(Y/N)",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "DR 국가코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "업종분류코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "지수구성종목 존재 여부",
                "type": "string",
                "required": true,
                "length": null,
                "description": "0:구성종목없음,1:구성종목있음",
                "default": "",
                "enum":                 [
                    {
                        "code": "0",
                        "name": "구성종목없음"
                    },
                    {
                        "code": "1",
                        "name": "구성종목있음"
                    }
                ]
            },
            {
                "start": "",
                "code": "",
                "name": "Tick size Type",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "구분코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "001:ETF,002:ETN,003:ETC,004:Others,005:VIX Underlying ETF,006:VIX Underlying ETN",
                "default": "",
                "enum":                 [
                    {
                        "code": "001",
                        "name": "ETF"
                    },
                    {
                        "code": "002",
                        "name": "ETN"
                    },
                    {
                        "code": "003",
                        "name": "ETC"
                    },
                    {
                        "code": "004",
                        "name": "Others"
                    },
                    {
                        "code": "005",
                        "name": "VIX Underlying ETF"
                    },
                    {
                        "code": "006",
                        "name": "VIX Underlying ETN"
                    }
                ]
            },
            {
                "start": "",
                "code": "",
                "name": "Tick size type 상세",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            }
        ]
    },
    "overseas_stock_hks":     {
        "info":         {
            "code": "overseas_stock_hks",
            "name": "해외 종목 코드 - 홍콩",
            "zipPrefix": "https://new.real.download.dws.co.kr/common/master",
            "zipFile": "hksmst.cod.zip",
            "txtFile": "HKSMST.COD",
            "pythonPrefix": "https://github.com/koreainvestment/open-trading-api/tree/main/stocks_info",
            "pythonFile": "overseas_stock_code.py",
            "sep": "TAB",
            "verifyDate": "",
            "memo": ""
        },
        "fields":         [
            {
                "start": "",
                "code": "",
                "name": "National code",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Exchange id",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Exchange code",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Exchange name",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Symbol",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "realtime symbol",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Korea name",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "English name",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Security type",
                "type": "string",
                "required": true,
                "length": null,
                "description": "1:Index,2:Stock,3:ETP(ETF),4:Warrant",
                "default": "",
                "enum":                 [
                    {
                        "code": "1",
                        "name": "Index"
                    },
                    {
                        "code": "2",
                        "name": "Stock"
                    },
                    {
                        "code": "3",
                        "name": "ETP(ETF)"
                    },
                    {
                        "code": "4",
                        "name": "Warrant"
                    }
                ]
            },
            {
                "start": "",
                "code": "",
                "name": "currency",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "float position",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "data type",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "base price",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Bid order size",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Ask order size",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "market start time(HHMM)",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "market end time(HHMM)",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "DR 여부(Y/N)",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "DR 국가코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "업종분류코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "지수구성종목 존재 여부",
                "type": "string",
                "required": true,
                "length": null,
                "description": "0:구성종목없음,1:구성종목있음",
                "default": "",
                "enum":                 [
                    {
                        "code": "0",
                        "name": "구성종목없음"
                    },
                    {
                        "code": "1",
                        "name": "구성종목있음"
                    }
                ]
            },
            {
                "start": "",
                "code": "",
                "name": "Tick size Type",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "구분코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "001:ETF,002:ETN,003:ETC,004:Others,005:VIX Underlying ETF,006:VIX Underlying ETN",
                "default": "",
                "enum":                 [
                    {
                        "code": "001",
                        "name": "ETF"
                    },
                    {
                        "code": "002",
                        "name": "ETN"
                    },
                    {
                        "code": "003",
                        "name": "ETC"
                    },
                    {
                        "code": "004",
                        "name": "Others"
                    },
                    {
                        "code": "005",
                        "name": "VIX Underlying ETF"
                    },
                    {
                        "code": "006",
                        "name": "VIX Underlying ETN"
                    }
                ]
            },
            {
                "start": "",
                "code": "",
                "name": "Tick size type 상세",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            }
        ]
    },
    "overseas_stock_hnx":     {
        "info":         {
            "code": "overseas_stock_hnx",
            "name": "해외 종목 코드 - 하노이",
            "zipPrefix": "https://new.real.download.dws.co.kr/common/master",
            "zipFile": "hnxmst.cod.zip",
            "txtFile": "HNXMST.COD",
            "pythonPrefix": "https://github.com/koreainvestment/open-trading-api/tree/main/stocks_info",
            "pythonFile": "overseas_stock_code.py",
            "sep": "TAB",
            "verifyDate": "",
            "memo": ""
        },
        "fields":         [
            {
                "start": "",
                "code": "",
                "name": "National code",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Exchange id",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Exchange code",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Exchange name",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Symbol",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "realtime symbol",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Korea name",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "English name",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Security type",
                "type": "string",
                "required": true,
                "length": null,
                "description": "1:Index,2:Stock,3:ETP(ETF),4:Warrant",
                "default": "",
                "enum":                 [
                    {
                        "code": "1",
                        "name": "Index"
                    },
                    {
                        "code": "2",
                        "name": "Stock"
                    },
                    {
                        "code": "3",
                        "name": "ETP(ETF)"
                    },
                    {
                        "code": "4",
                        "name": "Warrant"
                    }
                ]
            },
            {
                "start": "",
                "code": "",
                "name": "currency",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "float position",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "data type",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "base price",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Bid order size",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Ask order size",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "market start time(HHMM)",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "market end time(HHMM)",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "DR 여부(Y/N)",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "DR 국가코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "업종분류코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "지수구성종목 존재 여부",
                "type": "string",
                "required": true,
                "length": null,
                "description": "0:구성종목없음,1:구성종목있음",
                "default": "",
                "enum":                 [
                    {
                        "code": "0",
                        "name": "구성종목없음"
                    },
                    {
                        "code": "1",
                        "name": "구성종목있음"
                    }
                ]
            },
            {
                "start": "",
                "code": "",
                "name": "Tick size Type",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "구분코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "001:ETF,002:ETN,003:ETC,004:Others,005:VIX Underlying ETF,006:VIX Underlying ETN",
                "default": "",
                "enum":                 [
                    {
                        "code": "001",
                        "name": "ETF"
                    },
                    {
                        "code": "002",
                        "name": "ETN"
                    },
                    {
                        "code": "003",
                        "name": "ETC"
                    },
                    {
                        "code": "004",
                        "name": "Others"
                    },
                    {
                        "code": "005",
                        "name": "VIX Underlying ETF"
                    },
                    {
                        "code": "006",
                        "name": "VIX Underlying ETN"
                    }
                ]
            },
            {
                "start": "",
                "code": "",
                "name": "Tick size type 상세",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            }
        ]
    },
    "overseas_stock_hsx":     {
        "info":         {
            "code": "overseas_stock_hsx",
            "name": "해외 종목 코드 - 호치민",
            "zipPrefix": "https://new.real.download.dws.co.kr/common/master",
            "zipFile": "hsxmst.cod.zip",
            "txtFile": "HSXMST.COD",
            "pythonPrefix": "https://github.com/koreainvestment/open-trading-api/tree/main/stocks_info",
            "pythonFile": "overseas_stock_code.py",
            "sep": "TAB",
            "verifyDate": "",
            "memo": ""
        },
        "fields":         [
            {
                "start": "",
                "code": "",
                "name": "National code",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Exchange id",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Exchange code",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Exchange name",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Symbol",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "realtime symbol",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Korea name",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "English name",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Security type",
                "type": "string",
                "required": true,
                "length": null,
                "description": "1:Index,2:Stock,3:ETP(ETF),4:Warrant",
                "default": "",
                "enum":                 [
                    {
                        "code": "1",
                        "name": "Index"
                    },
                    {
                        "code": "2",
                        "name": "Stock"
                    },
                    {
                        "code": "3",
                        "name": "ETP(ETF)"
                    },
                    {
                        "code": "4",
                        "name": "Warrant"
                    }
                ]
            },
            {
                "start": "",
                "code": "",
                "name": "currency",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "float position",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "data type",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "base price",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Bid order size",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "Ask order size",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "market start time(HHMM)",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "market end time(HHMM)",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "DR 여부(Y/N)",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "DR 국가코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "업종분류코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "지수구성종목 존재 여부",
                "type": "string",
                "required": true,
                "length": null,
                "description": "0:구성종목없음,1:구성종목있음",
                "default": "",
                "enum":                 [
                    {
                        "code": "0",
                        "name": "구성종목없음"
                    },
                    {
                        "code": "1",
                        "name": "구성종목있음"
                    }
                ]
            },
            {
                "start": "",
                "code": "",
                "name": "Tick size Type",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            },
            {
                "start": "",
                "code": "",
                "name": "구분코드",
                "type": "string",
                "required": true,
                "length": null,
                "description": "001:ETF,002:ETN,003:ETC,004:Others,005:VIX Underlying ETF,006:VIX Underlying ETN",
                "default": "",
                "enum":                 [
                    {
                        "code": "001",
                        "name": "ETF"
                    },
                    {
                        "code": "002",
                        "name": "ETN"
                    },
                    {
                        "code": "003",
                        "name": "ETC"
                    },
                    {
                        "code": "004",
                        "name": "Others"
                    },
                    {
                        "code": "005",
                        "name": "VIX Underlying ETF"
                    },
                    {
                        "code": "006",
                        "name": "VIX Underlying ETN"
                    }
                ]
            },
            {
                "start": "",
                "code": "",
                "name": "Tick size type 상세",
                "type": "string",
                "required": true,
                "length": null,
                "description": "",
                "default": ""
            }
        ]
    },
    "overseas_index":     {
        "info":         {
            "code": "overseas_index",
            "name": "해외 주식/지수",
            "zipPrefix": "https://new.real.download.dws.co.kr/common/master",
            "zipFile": "frgn_code.mst.zip",
            "txtFile": "frgn_code.mst",
            "pythonPrefix": "https://github.com/koreainvestment/open-trading-api/tree/main/stocks_info",
            "pythonFile": "overseas_index_code.py",
            "sep": "",
            "verifyDate": "",
            "memo": ""
        },
        "fields":         [
            {
                "start": 0,
                "code": "",
                "name": "구분코드",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "X 문자로 시작하는 경우",
                "default": ""
            },
            {
                "start": 1,
                "code": "",
                "name": "심볼",
                "type": "string",
                "required": true,
                "length": 10,
                "description": "",
                "default": ""
            },
            {
                "start": 11,
                "code": "",
                "name": "영문명",
                "type": "string",
                "required": true,
                "length": 29,
                "description": "",
                "default": ""
            },
            {
                "start": 40,
                "code": "",
                "name": "한글명",
                "type": "string",
                "required": true,
                "length": 40,
                "description": "",
                "default": ""
            },
            {
                "start": -15,
                "code": "",
                "name": "종목업종코드",
                "type": "string",
                "required": true,
                "length": 4,
                "description": "",
                "default": ""
            },
            {
                "start": -11,
                "code": "",
                "name": "다우30 편입종목여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -10,
                "code": "",
                "name": "나스닥100 편입종목여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -9,
                "code": "",
                "name": "S&P 500 편입종목여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -8,
                "code": "",
                "name": "거래소코드",
                "type": "string",
                "required": true,
                "length": 4,
                "description": "",
                "default": ""
            },
            {
                "start": -4,
                "code": "",
                "name": "국가구분코드",
                "type": "string",
                "required": true,
                "length": 3,
                "description": "",
                "default": ""
            }
        ],
        "fields2":         [
            {
                "start": 0,
                "code": "",
                "name": "구분코드",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "X 문자로 시작하지 않는 경우",
                "default": ""
            },
            {
                "start": 1,
                "code": "",
                "name": "심볼",
                "type": "string",
                "required": true,
                "length": 10,
                "description": "",
                "default": ""
            },
            {
                "start": 11,
                "code": "",
                "name": "영문명",
                "type": "string",
                "required": true,
                "length": 39,
                "description": "",
                "default": ""
            },
            {
                "start": 50,
                "code": "",
                "name": "한글명",
                "type": "string",
                "required": true,
                "length": 25,
                "description": "",
                "default": ""
            },
            {
                "start": -15,
                "code": "",
                "name": "종목업종코드",
                "type": "string",
                "required": true,
                "length": 4,
                "description": "",
                "default": ""
            },
            {
                "start": -11,
                "code": "",
                "name": "다우30 편입종목여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -10,
                "code": "",
                "name": "나스닥100 편입종목여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -9,
                "code": "",
                "name": "S&P 500 편입종목여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -8,
                "code": "",
                "name": "거래소코드",
                "type": "string",
                "required": true,
                "length": 4,
                "description": "",
                "default": ""
            },
            {
                "start": -4,
                "code": "",
                "name": "국가구분코드",
                "type": "string",
                "required": true,
                "length": 3,
                "description": "",
                "default": ""
            }
        ]
    },
    "overseas_future":     {
        "info":         {
            "code": "overseas_future",
            "name": "해외 선물 옵션",
            "zipPrefix": "https://new.real.download.dws.co.kr/common/master",
            "zipFile": "ffcode.mst.zip",
            "txtFile": "ffcode.mst",
            "pythonPrefix": "https://github.com/koreainvestment/open-trading-api/tree/main/stocks_info",
            "pythonFile": "overseas_future_code.py",
            "sep": "",
            "verifyDate": "",
            "memo": ""
        },
        "fields":         [
            {
                "start": 0,
                "code": "",
                "name": "종목코드",
                "type": "string",
                "required": true,
                "length": 32,
                "description": "",
                "default": ""
            },
            {
                "start": 32,
                "code": "",
                "name": "서버자동주문 가능 종목 여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": 33,
                "code": "",
                "name": "서버자동주문 TWAP 가능 종목 여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": 34,
                "code": "",
                "name": "서버자동 경제지표 주문 가능 종목 여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": 35,
                "code": "",
                "name": "필러",
                "type": "string",
                "required": true,
                "length": 47,
                "description": "",
                "default": ""
            },
            {
                "start": 82,
                "code": "",
                "name": "종목한글명",
                "type": "string",
                "required": true,
                "length": 25,
                "description": "",
                "default": ""
            },
            {
                "start": -92,
                "code": "",
                "name": "거래소코드 (ISAM KEY 1)",
                "type": "string",
                "required": true,
                "length": 10,
                "description": "",
                "default": ""
            },
            {
                "start": -82,
                "code": "",
                "name": "품목코드 (ISAM KEY 2)",
                "type": "string",
                "required": true,
                "length": 10,
                "description": "",
                "default": ""
            },
            {
                "start": -72,
                "code": "",
                "name": "품목종류",
                "type": "string",
                "required": true,
                "length": 3,
                "description": "",
                "default": ""
            },
            {
                "start": -69,
                "code": "",
                "name": "출력 소수점",
                "type": "string",
                "required": true,
                "length": 5,
                "description": "",
                "default": ""
            },
            {
                "start": -64,
                "code": "",
                "name": "계산 소수점",
                "type": "string",
                "required": true,
                "length": 5,
                "description": "",
                "default": ""
            },
            {
                "start": -59,
                "code": "",
                "name": "틱사이즈",
                "type": "string",
                "required": true,
                "length": 14,
                "description": "",
                "default": ""
            },
            {
                "start": -45,
                "code": "",
                "name": "틱가치",
                "type": "string",
                "required": true,
                "length": 14,
                "description": "",
                "default": ""
            },
            {
                "start": -31,
                "code": "",
                "name": "계약크기",
                "type": "string",
                "required": true,
                "length": 10,
                "description": "",
                "default": ""
            },
            {
                "start": -21,
                "code": "",
                "name": "가격표시진법",
                "type": "string",
                "required": true,
                "length": 4,
                "description": "",
                "default": ""
            },
            {
                "start": -17,
                "code": "",
                "name": "환산승수",
                "type": "string",
                "required": true,
                "length": 10,
                "description": "",
                "default": ""
            },
            {
                "start": -7,
                "code": "",
                "name": "최다월물여부 0:원월물 1:최다월물",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -6,
                "code": "",
                "name": "최근월물여부 0:원월물 1:최근월물",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -5,
                "code": "",
                "name": "스프레드여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -4,
                "code": "",
                "name": "스프레드기준종목 LEG1 여부",
                "type": "string",
                "required": true,
                "length": 1,
                "description": "",
                "default": ""
            },
            {
                "start": -3,
                "code": "",
                "name": "서브 거래소 코드",
                "type": "string",
                "required": true,
                "length": 3,
                "description": "",
                "default": ""
            }
        ]
    }
};

export default EFriend_JSON_CODE;
export { EFriend_JSON_CODE };
