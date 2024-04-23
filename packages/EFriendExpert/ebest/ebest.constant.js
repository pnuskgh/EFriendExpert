/**
 * TR_ID (트랜잭션 ID)별로 생선된 metadata
 *     자동 생성되는 소스이니 수정하지 마세요.
 * 
 * @file packages/EFriendExpert/ebest/ebest.constant.js
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2024, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */
    
const EBest_JSON_TRID = {
    "token_실전":     {
        "info":         {
            "category": "OAuth 인증",
            "subCategory": "OAuth 인증",
            "name": "접근토큰 발급",
            "method": "post",
            "url": "/oauth2/token",
            "format": "JSON",
            "contentType": "application/json; charset=UTF-8",
            "countPerSecond": -1,
            "verifyDate": "",
            "downloadDate": "2024-04-12T00:00:00.000Z",
            "memo": "본인을 인증하는 확인 절차로, 접근 토큰을 부여받아 오픈 API 활용이 가능합니다.",
            "domain": "https://openapi.ebestsec.co.kr:8080",
            "trid": "token",
            "isProduct": true,
            "description": "접근토큰 발급"
        },
        "request":         {
            "header":             [
                {
                    "code": "content-type",
                    "name": "컨텐츠타입",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "OAuth2 호출 Request Body 데이터 포맷으로 \"application/x-www-form-urlencoded 설정\""
                    ],
                    "default": "application/x-www-form-urlencoded"
                }
            ],
            "body":             [
                {
                    "code": "grant_type",
                    "name": "권한부여 Type",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "\"client_credentials\" 고정"
                    ],
                    "default": "client_credentials"
                },
                {
                    "code": "appkey",
                    "name": "고객 앱Key",
                    "type": "string",
                    "required": true,
                    "length": 36,
                    "description":                     [
                        "포탈에서 발급된 고객의 앱Key"
                    ],
                    "default": ""
                },
                {
                    "code": "appsecretkey",
                    "name": "고객 앱 비밀Key",
                    "type": "string",
                    "required": true,
                    "length": 36,
                    "description":                     [
                        "포탈에서 발급된 고객의 앱 비밀Key"
                    ],
                    "default": ""
                },
                {
                    "code": "scope",
                    "name": "scope",
                    "type": "string",
                    "required": true,
                    "length": 256,
                    "description":                     [
                        "\"oob\" 고정"
                    ],
                    "default": "oob"
                }
            ]
        },
        "response":         {
            "header":             [
                {
                    "code": "content-type",
                    "name": "컨텐츠타입",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "OAuth2 응답 Response Body 데이터 포맷으로 \"application/json; charset=utf-8 설정\""
                    ],
                    "default": "application/json; charset=utf-8"
                }
            ],
            "body":             [
                {
                    "code": "code",
                    "name": "응답코드",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "message",
                    "name": "응답메시지",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "응답메시지"
                    ],
                    "default": ""
                }
            ]
        }
    },
    "revoke_실전":     {
        "info":         {
            "category": "OAuth 인증",
            "subCategory": "OAuth 인증",
            "name": "접근토큰 폐기",
            "method": "post",
            "url": "/oauth2/revoke",
            "format": "JSON",
            "contentType": "application/json; charset=UTF-8",
            "countPerSecond": -1,
            "verifyDate": "",
            "downloadDate": "2024-04-12T00:00:00.000Z",
            "memo": "발급받은 접근토큰을 더 이상 활용하지 않을 때 사용합니다.",
            "domain": "https://openapi.ebestsec.co.kr:8080",
            "trid": "revoke",
            "isProduct": true,
            "description": "접근토큰 폐기"
        },
        "request":         {
            "header":             [
                {
                    "code": "content-type",
                    "name": "컨텐츠타입",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "OAuth2 호출 Request Body 데이터 포맷으로 \"application/x-www-form-urlencoded 설정\""
                    ],
                    "default": "application/x-www-form-urlencoded"
                }
            ],
            "body":             [
                {
                    "code": "appkey",
                    "name": "고객 앱Key",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "포탈에서 발급된 고객의 앱Key"
                    ],
                    "default": ""
                },
                {
                    "code": "appsecretkey",
                    "name": "고객 앱 비밀Key",
                    "type": "string",
                    "required": true,
                    "length": 36,
                    "description":                     [
                        "포탈에서 발급된 고객의 앱 비밀Key"
                    ],
                    "default": ""
                },
                {
                    "code": "token_type_hint",
                    "name": "토큰 유형 hint",
                    "type": "string",
                    "required": true,
                    "length": 36,
                    "description":                     [
                        "access_token, refresh_token 토큰 타입"
                    ],
                    "default": "access_token"
                },
                {
                    "code": "token",
                    "name": "접근토큰",
                    "type": "string",
                    "required": true,
                    "length": 256,
                    "description":                     [
                        "G/W 에서 발급하는 접근토큰"
                    ],
                    "default": ""
                }
            ]
        },
        "response":         {
            "header":             [
                {
                    "code": "content-type",
                    "name": "컨텐츠타입",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "OAuth2 응답 Response Body 데이터 포맷으로 \"application/json; charset=utf-8 설정\""
                    ],
                    "default": "application/json; charset=utf-8"
                }
            ],
            "body":             [
                {
                    "code": "token",
                    "name": "접근토큰",
                    "type": "string",
                    "required": true,
                    "length": 1000,
                    "description":                     [
                        "G/W 에서 발급하는 접근토큰"
                    ],
                    "default": ""
                },
                {
                    "code": "expire_in",
                    "name": "접근토큰 유효기간",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        "유효기간(초)"
                    ],
                    "default": ""
                },
                {
                    "code": "scope",
                    "name": "scope",
                    "type": "string",
                    "required": true,
                    "length": 256,
                    "description":                     [
                        "\"oob\" 고정"
                    ],
                    "default": "oob"
                },
                {
                    "code": "token_type",
                    "name": "토큰 유형",
                    "type": "string",
                    "required": true,
                    "length": 256,
                    "description":                     [
                        "Bearer"
                    ],
                    "default": "Bearer"
                }
            ]
        }
    },
    "K3__실전":     {
        "info":         {
            "category": "주식",
            "subCategory": "[주식] 실시간 시세",
            "name": "KOSDAQ체결",
            "method": "post",
            "url": "/websocket",
            "format": "JSON",
            "contentType": "application/json; charset=UTF-8",
            "countPerSecond": "",
            "verifyDate": "",
            "downloadDate": "2024-04-12T00:00:00.000Z",
            "memo": "주식 주문현황 및 시세, 투자정보를 실시간으로 확인할 수 있습니다.",
            "domain": "wss://openapi.ebestsec.co.kr:9443",
            "trid": "K3_",
            "isProduct": true,
            "description": "KOSDAQ체결"
        },
        "request":         {
            "header":             [
                {
                    "code": "token",
                    "name": "접근토큰",
                    "type": "string",
                    "required": true,
                    "length": 1000,
                    "description":                     [
                        "Access Token을 설정하기 위한 Header Parameter"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_type",
                    "name": "거래 Type",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "1: 계좌등록, 2: 계좌해제, 3: 실시간 시세 등록, 4: 실시간 시세 해제"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_key",
                    "name": "단축코드",
                    "type": "string",
                    "required": false,
                    "length": 8,
                    "description":                     [
                        "단축코드 6자리 또는 8자리 (단건, 연속), (계좌등록/해제 일 경우 필수값 아님)"
                    ],
                    "default": ""
                }
            ]
        },
        "response":         {
            "header":             [
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "chetime",
                    "name": "체결시간",
                    "type": "string",
                    "required": true,
                    "length": 6,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "sign",
                    "name": "전일대비구분",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "change",
                    "name": "전일대비",
                    "type": "string",
                    "required": true,
                    "length": 8,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "drate",
                    "name": "등락율",
                    "type": "string",
                    "required": true,
                    "length": 6,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "price",
                    "name": "현재가",
                    "type": "string",
                    "required": true,
                    "length": 8,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "opentime",
                    "name": "시가시간",
                    "type": "string",
                    "required": true,
                    "length": 6,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "open",
                    "name": "시가",
                    "type": "string",
                    "required": true,
                    "length": 8,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "hightime",
                    "name": "고가시간",
                    "type": "string",
                    "required": true,
                    "length": 6,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "high",
                    "name": "고가",
                    "type": "string",
                    "required": true,
                    "length": 8,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "lowtime",
                    "name": "저가시간",
                    "type": "string",
                    "required": true,
                    "length": 6,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "low",
                    "name": "저가",
                    "type": "string",
                    "required": true,
                    "length": 8,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "cgubun",
                    "name": "체결구분",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "cvolume",
                    "name": "체결량",
                    "type": "string",
                    "required": true,
                    "length": 8,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "volume",
                    "name": "누적거래량",
                    "type": "string",
                    "required": true,
                    "length": 12,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "value",
                    "name": "누적거래대금",
                    "type": "string",
                    "required": true,
                    "length": 12,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "mdvolume",
                    "name": "매도누적체결량",
                    "type": "string",
                    "required": true,
                    "length": 12,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "mdchecnt",
                    "name": "매도누적체결건수",
                    "type": "string",
                    "required": true,
                    "length": 8,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "msvolume",
                    "name": "매수누적체결량",
                    "type": "string",
                    "required": true,
                    "length": 12,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "mschecnt",
                    "name": "매수누적체결건수",
                    "type": "string",
                    "required": true,
                    "length": 8,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "cpower",
                    "name": "체결강도",
                    "type": "string",
                    "required": true,
                    "length": 9,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "w_avrg",
                    "name": "가중평균가",
                    "type": "string",
                    "required": true,
                    "length": 8,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "offerho",
                    "name": "매도호가",
                    "type": "string",
                    "required": true,
                    "length": 8,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "bidho",
                    "name": "매수호가",
                    "type": "string",
                    "required": true,
                    "length": 8,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "status",
                    "name": "장정보",
                    "type": "string",
                    "required": true,
                    "length": 2,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "jnilvolume",
                    "name": "전일동시간대거래량",
                    "type": "string",
                    "required": true,
                    "length": 12,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "shcode",
                    "name": "단축코드",
                    "type": "string",
                    "required": true,
                    "length": 6,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                }
            ]
        }
    },
    "KS__실전":     {
        "info":         {
            "category": "주식",
            "subCategory": "[주식] 실시간 시세",
            "name": "KOSDAQ우선호가",
            "method": "post",
            "url": "/websocket",
            "format": "JSON",
            "contentType": "application/json; charset=UTF-8",
            "countPerSecond": "",
            "verifyDate": "",
            "downloadDate": "2024-04-12T00:00:00.000Z",
            "memo": "주식 주문현황 및 시세, 투자정보를 실시간으로 확인할 수 있습니다.",
            "domain": "wss://openapi.ebestsec.co.kr:9443",
            "trid": "KS_",
            "isProduct": true,
            "description": "KOSDAQ우선호가"
        },
        "request":         {
            "header":             [
                {
                    "code": "token",
                    "name": "접근토큰",
                    "type": "string",
                    "required": true,
                    "length": 1000,
                    "description":                     [
                        "Access Token을 설정하기 위한 Header Parameter"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_type",
                    "name": "거래 Type",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "1: 계좌등록, 2: 계좌해제, 3: 실시간 시세 등록, 4: 실시간 시세 해제"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_key",
                    "name": "단축코드",
                    "type": "string",
                    "required": false,
                    "length": 8,
                    "description":                     [
                        "단축코드 6자리 또는 8자리 (단건, 연속), (계좌등록/해제 일 경우 필수값 아님)"
                    ],
                    "default": ""
                }
            ]
        },
        "response":         {
            "header":             [
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "offerho",
                    "name": "매도호가",
                    "type": "string",
                    "required": true,
                    "length": 8,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "bidho",
                    "name": "매수호가",
                    "type": "string",
                    "required": true,
                    "length": 8,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "shcode",
                    "name": "단축코드",
                    "type": "string",
                    "required": true,
                    "length": 6,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                }
            ]
        }
    },
    "S2__실전":     {
        "info":         {
            "category": "주식",
            "subCategory": "[주식] 실시간 시세",
            "name": "KOSPI우선호가",
            "method": "post",
            "url": "/websocket",
            "format": "JSON",
            "contentType": "application/json; charset=UTF-8",
            "countPerSecond": "",
            "verifyDate": "",
            "downloadDate": "2024-04-12T00:00:00.000Z",
            "memo": "주식 주문현황 및 시세, 투자정보를 실시간으로 확인할 수 있습니다.",
            "domain": "wss://openapi.ebestsec.co.kr:9443",
            "trid": "S2_",
            "isProduct": true,
            "description": "KOSPI우선호가"
        },
        "request":         {
            "header":             [
                {
                    "code": "token",
                    "name": "접근토큰",
                    "type": "string",
                    "required": true,
                    "length": 1000,
                    "description":                     [
                        "Access Token을 설정하기 위한 Header Parameter"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_type",
                    "name": "거래 Type",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "1: 계좌등록, 2: 계좌해제, 3: 실시간 시세 등록, 4: 실시간 시세 해제"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_key",
                    "name": "단축코드",
                    "type": "string",
                    "required": false,
                    "length": 8,
                    "description":                     [
                        "단축코드 6자리 또는 8자리 (단건, 연속), (계좌등록/해제 일 경우 필수값 아님)"
                    ],
                    "default": ""
                }
            ]
        },
        "response":         {
            "header":             [
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "offerho",
                    "name": "매도호가",
                    "type": "string",
                    "required": true,
                    "length": 8,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "bidho",
                    "name": "매수호가",
                    "type": "string",
                    "required": true,
                    "length": 8,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "shcode",
                    "name": "단축코드",
                    "type": "string",
                    "required": true,
                    "length": 6,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                }
            ]
        }
    },
    "S3__실전":     {
        "info":         {
            "category": "주식",
            "subCategory": "[주식] 실시간 시세",
            "name": "KOSPI체결",
            "method": "post",
            "url": "/websocket",
            "format": "JSON",
            "contentType": "application/json; charset=UTF-8",
            "countPerSecond": "",
            "verifyDate": "",
            "downloadDate": "2024-04-12T00:00:00.000Z",
            "memo": "주식 주문현황 및 시세, 투자정보를 실시간으로 확인할 수 있습니다.",
            "domain": "wss://openapi.ebestsec.co.kr:9443",
            "trid": "S3_",
            "isProduct": true,
            "description": "KOSPI체결"
        },
        "request":         {
            "header":             [
                {
                    "code": "token",
                    "name": "접근토큰",
                    "type": "string",
                    "required": true,
                    "length": 1000,
                    "description":                     [
                        "Access Token을 설정하기 위한 Header Parameter"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_type",
                    "name": "거래 Type",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "1: 계좌등록, 2: 계좌해제, 3: 실시간 시세 등록, 4: 실시간 시세 해제"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_key",
                    "name": "단축코드",
                    "type": "string",
                    "required": false,
                    "length": 8,
                    "description":                     [
                        "단축코드 6자리 또는 8자리 (단건, 연속), (계좌등록/해제 일 경우 필수값 아님)"
                    ],
                    "default": ""
                }
            ]
        },
        "response":         {
            "header":             [
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "chetime",
                    "name": "체결시간",
                    "type": "string",
                    "required": true,
                    "length": 6,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "sign",
                    "name": "전일대비구분",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "change",
                    "name": "전일대비",
                    "type": "string",
                    "required": true,
                    "length": 8,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "drate",
                    "name": "등락율",
                    "type": "string",
                    "required": true,
                    "length": 6,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "price",
                    "name": "현재가",
                    "type": "string",
                    "required": true,
                    "length": 8,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "opentime",
                    "name": "시가시간",
                    "type": "string",
                    "required": true,
                    "length": 6,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "open",
                    "name": "시가",
                    "type": "string",
                    "required": true,
                    "length": 8,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "hightime",
                    "name": "고가시간",
                    "type": "string",
                    "required": true,
                    "length": 6,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "high",
                    "name": "고가",
                    "type": "string",
                    "required": true,
                    "length": 8,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "lowtime",
                    "name": "저가시간",
                    "type": "string",
                    "required": true,
                    "length": 6,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "low",
                    "name": "저가",
                    "type": "string",
                    "required": true,
                    "length": 8,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "cgubun",
                    "name": "체결구분",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "cvolume",
                    "name": "체결량",
                    "type": "string",
                    "required": true,
                    "length": 8,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "volume",
                    "name": "누적거래량",
                    "type": "string",
                    "required": true,
                    "length": 12,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "value",
                    "name": "누적거래대금",
                    "type": "string",
                    "required": true,
                    "length": 12,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "mdvolume",
                    "name": "매도누적체결량",
                    "type": "string",
                    "required": true,
                    "length": 12,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "mdchecnt",
                    "name": "매도누적체결건수",
                    "type": "string",
                    "required": true,
                    "length": 8,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "msvolume",
                    "name": "매수누적체결량",
                    "type": "string",
                    "required": true,
                    "length": 12,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "mschecnt",
                    "name": "매수누적체결건수",
                    "type": "string",
                    "required": true,
                    "length": 8,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "cpower",
                    "name": "체결강도",
                    "type": "string",
                    "required": true,
                    "length": 9,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "w_avrg",
                    "name": "가중평균가",
                    "type": "string",
                    "required": true,
                    "length": 8,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "offerho",
                    "name": "매도호가",
                    "type": "string",
                    "required": true,
                    "length": 8,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "bidho",
                    "name": "매수호가",
                    "type": "string",
                    "required": true,
                    "length": 8,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "status",
                    "name": "장정보",
                    "type": "string",
                    "required": true,
                    "length": 2,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "jnilvolume",
                    "name": "전일동시간대거래량",
                    "type": "string",
                    "required": true,
                    "length": 12,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "shcode",
                    "name": "단축코드",
                    "type": "string",
                    "required": true,
                    "length": 6,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                }
            ]
        }
    },
    "SC0_실전":     {
        "info":         {
            "category": "주식",
            "subCategory": "[주식] 실시간 시세",
            "name": "주식주문접수",
            "method": "post",
            "url": "/websocket",
            "format": "JSON",
            "contentType": "application/json; charset=UTF-8",
            "countPerSecond": "",
            "verifyDate": "",
            "downloadDate": "2024-04-12T00:00:00.000Z",
            "memo": "주식 주문현황 및 시세, 투자정보를 실시간으로 확인할 수 있습니다.",
            "domain": "wss://openapi.ebestsec.co.kr:9443",
            "trid": "SC0",
            "isProduct": true,
            "description": "주식주문접수"
        },
        "request":         {
            "header":             [
                {
                    "code": "token",
                    "name": "접근토큰",
                    "type": "string",
                    "required": true,
                    "length": 1000,
                    "description":                     [
                        "Access Token을 설정하기 위한 Header Parameter"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_type",
                    "name": "거래 Type",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "1: 계좌등록, 2: 계좌해제, 3: 실시간 시세 등록, 4: 실시간 시세 해제"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_key",
                    "name": "단축코드",
                    "type": "string",
                    "required": false,
                    "length": 8,
                    "description":                     [
                        "단축코드 6자리 또는 8자리 (단건, 연속), (계좌등록/해제 일 경우 필수값 아님)"
                    ],
                    "default": ""
                }
            ]
        },
        "response":         {
            "header":             [
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "lineseq",
                    "name": "라인일련번호",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "accno",
                    "name": "Push키",
                    "type": "string",
                    "required": true,
                    "length": 11,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "user",
                    "name": "조작자ID",
                    "type": "string",
                    "required": true,
                    "length": 8,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "len",
                    "name": "헤더길이",
                    "type": "string",
                    "required": true,
                    "length": 6,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "gubun",
                    "name": "헤더구분",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "compress",
                    "name": "압축구분",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "encrypt",
                    "name": "암호구분",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "offset",
                    "name": "공통시작지점",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "trcode",
                    "name": "TRCODE",
                    "type": "string",
                    "required": true,
                    "length": 8,
                    "description":                     [
                        "SONAT000:신규주문",
                        "SONAT001:정정주문",
                        "SONAT002:취소주문",
                        "SONAS100:체결확인"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "SONAT000",
                            "name": "신규주문"
                        },
                        {
                            "code": "SONAT001",
                            "name": "정정주문"
                        },
                        {
                            "code": "SONAT002",
                            "name": "취소주문"
                        },
                        {
                            "code": "SONAS100",
                            "name": "체결확인"
                        }
                    ]
                },
                {
                    "code": "compid",
                    "name": "이용사번호",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "userid",
                    "name": "사용자ID",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "media",
                    "name": "접속매체",
                    "type": "string",
                    "required": true,
                    "length": 2,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ifid",
                    "name": "I/F일련번호",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "seq",
                    "name": "전문일련번호",
                    "type": "string",
                    "required": true,
                    "length": 9,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "trid",
                    "name": "TR추적ID",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "pubip",
                    "name": "공인IP",
                    "type": "string",
                    "required": true,
                    "length": 12,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "prvip",
                    "name": "사설IP",
                    "type": "string",
                    "required": true,
                    "length": 12,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "pcbpno",
                    "name": "처리지점번호",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "bpno",
                    "name": "지점번호",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "termno",
                    "name": "단말번호",
                    "type": "string",
                    "required": true,
                    "length": 8,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "lang",
                    "name": "언어구분",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "proctm",
                    "name": "AP처리시간",
                    "type": "string",
                    "required": true,
                    "length": 9,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "msgcode",
                    "name": "메세지코드",
                    "type": "string",
                    "required": true,
                    "length": 4,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "outgu",
                    "name": "메세지출력구분",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "compreq",
                    "name": "압축요청구분",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "funckey",
                    "name": "기능키",
                    "type": "string",
                    "required": true,
                    "length": 4,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "reqcnt",
                    "name": "요청레코드개수",
                    "type": "string",
                    "required": true,
                    "length": 4,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "filler",
                    "name": "예비영역",
                    "type": "string",
                    "required": true,
                    "length": 6,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "cont",
                    "name": "연속구분",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "contkey",
                    "name": "연속키값",
                    "type": "string",
                    "required": true,
                    "length": 18,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "varlen",
                    "name": "가변시스템길이",
                    "type": "string",
                    "required": true,
                    "length": 2,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "varhdlen",
                    "name": "가변해더길이",
                    "type": "string",
                    "required": true,
                    "length": 2,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "varmsglen",
                    "name": "가변메시지길이",
                    "type": "string",
                    "required": true,
                    "length": 2,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "trsrc",
                    "name": "조회발원지",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "eventid",
                    "name": "I/F이벤트ID",
                    "type": "string",
                    "required": true,
                    "length": 4,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ifinfo",
                    "name": "I/F정보",
                    "type": "string",
                    "required": true,
                    "length": 4,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "filler1",
                    "name": "예비영역",
                    "type": "string",
                    "required": true,
                    "length": 41,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ordchegb",
                    "name": "주문체결구분",
                    "type": "string",
                    "required": true,
                    "length": 2,
                    "description":                     [
                        "01:주문",
                        "02:정정",
                        "03:취소",
                        "11:체결",
                        "12:정정확인",
                        "13:취소확인",
                        "14:거부",
                        "A1:접수중",
                        "AC:접수완료"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "01",
                            "name": "주문"
                        },
                        {
                            "code": "02",
                            "name": "정정"
                        },
                        {
                            "code": "03",
                            "name": "취소"
                        },
                        {
                            "code": "11",
                            "name": "체결"
                        },
                        {
                            "code": "12",
                            "name": "정정확인"
                        },
                        {
                            "code": "13",
                            "name": "취소확인"
                        },
                        {
                            "code": "14",
                            "name": "거부"
                        },
                        {
                            "code": "A1",
                            "name": "접수중"
                        },
                        {
                            "code": "AC",
                            "name": "접수완료"
                        }
                    ]
                },
                {
                    "code": "marketgb",
                    "name": "시장구분",
                    "type": "string",
                    "required": true,
                    "length": 2,
                    "description":                     [
                        "00:비상장",
                        "10:코스피",
                        "11:채권",
                        "19:장외시장",
                        "20:코스닥",
                        "23:코넥스",
                        "30:프리보드",
                        "61:동경거래소",
                        "62:JASDAQ"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "00",
                            "name": "비상장"
                        },
                        {
                            "code": "10",
                            "name": "코스피"
                        },
                        {
                            "code": "11",
                            "name": "채권"
                        },
                        {
                            "code": "19",
                            "name": "장외시장"
                        },
                        {
                            "code": "20",
                            "name": "코스닥"
                        },
                        {
                            "code": "23",
                            "name": "코넥스"
                        },
                        {
                            "code": "30",
                            "name": "프리보드"
                        },
                        {
                            "code": "61",
                            "name": "동경거래소"
                        },
                        {
                            "code": "62",
                            "name": "JASDAQ"
                        }
                    ]
                },
                {
                    "code": "ordgb",
                    "name": "주문구분",
                    "type": "string",
                    "required": true,
                    "length": 2,
                    "description":                     [
                        "01:현금매도",
                        "02:현금매수",
                        "03:신용매도",
                        "04:신용매수",
                        "05:저축매도",
                        "06:저축매수",
                        "07:상품매도(대차)",
                        "09:상품매도",
                        "10:상품매수",
                        "11:선물대용매도(일반)",
                        "12:선물대용매도(반대)",
                        "13:현금매도(프)",
                        "14:현금매수(프)",
                        "15:현금매수(유가)",
                        "16:현금매수(정리)",
                        "17:상품매도(대차.프)",
                        "19:상품매도(프)",
                        "20:상품매수(프)",
                        "30:장외매매"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "01",
                            "name": "현금매도"
                        },
                        {
                            "code": "02",
                            "name": "현금매수"
                        },
                        {
                            "code": "03",
                            "name": "신용매도"
                        },
                        {
                            "code": "04",
                            "name": "신용매수"
                        },
                        {
                            "code": "05",
                            "name": "저축매도"
                        },
                        {
                            "code": "06",
                            "name": "저축매수"
                        },
                        {
                            "code": "07",
                            "name": "상품매도(대차)"
                        },
                        {
                            "code": "09",
                            "name": "상품매도"
                        },
                        {
                            "code": "10",
                            "name": "상품매수"
                        },
                        {
                            "code": "11",
                            "name": "선물대용매도(일반)"
                        },
                        {
                            "code": "12",
                            "name": "선물대용매도(반대)"
                        },
                        {
                            "code": "13",
                            "name": "현금매도(프)"
                        },
                        {
                            "code": "14",
                            "name": "현금매수(프)"
                        },
                        {
                            "code": "15",
                            "name": "현금매수(유가)"
                        },
                        {
                            "code": "16",
                            "name": "현금매수(정리)"
                        },
                        {
                            "code": "17",
                            "name": "상품매도(대차.프)"
                        },
                        {
                            "code": "19",
                            "name": "상품매도(프)"
                        },
                        {
                            "code": "20",
                            "name": "상품매수(프)"
                        },
                        {
                            "code": "30",
                            "name": "장외매매"
                        }
                    ]
                },
                {
                    "code": "orgordno",
                    "name": "원주문번호",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "accno1",
                    "name": "계좌번호",
                    "type": "string",
                    "required": true,
                    "length": 11,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "accno2",
                    "name": "계좌번호",
                    "type": "string",
                    "required": true,
                    "length": 9,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "passwd",
                    "name": "비밀번호",
                    "type": "string",
                    "required": true,
                    "length": 8,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "expcode",
                    "name": "종목번호",
                    "type": "string",
                    "required": true,
                    "length": 12,
                    "description":                     [
                        "표준코드 12자리"
                    ],
                    "default": ""
                },
                {
                    "code": "shtcode",
                    "name": "단축종목번호",
                    "type": "string",
                    "required": true,
                    "length": 9,
                    "description":                     [
                        "주식은 단축코드 앞에 A포함 7자리",
                        "ELW는 단촉코드 앞에 J포함 7자리"
                    ],
                    "default": ""
                },
                {
                    "code": "hname",
                    "name": "종목명",
                    "type": "string",
                    "required": true,
                    "length": 40,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ordqty",
                    "name": "주문수량",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ordprice",
                    "name": "주문가격",
                    "type": "string",
                    "required": true,
                    "length": 13,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "hogagb",
                    "name": "주문조건",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "0:없음",
                        "1:IOC",
                        "2:FOK"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "0",
                            "name": "없음"
                        },
                        {
                            "code": "1",
                            "name": "IOC"
                        },
                        {
                            "code": "2",
                            "name": "FOK"
                        }
                    ]
                },
                {
                    "code": "etfhogagb",
                    "name": "호가유형코드",
                    "type": "string",
                    "required": true,
                    "length": 2,
                    "description":                     [
                        "00:지정가",
                        "03:시장가",
                        "05:조건부지정가",
                        "06:최유리지정가",
                        "07:최우선지정가",
                        "09:자사주",
                        "10:매입인도(일반)",
                        "13:시장가 (IOC)",
                        "16:최유리지정가 (IOC)",
                        "18:사용안함",
                        "20:지정가(임의)",
                        "23:시장가(임의)",
                        "26:최유리지정가 (FOK)",
                        "41:부분충족(프리보드)",
                        "42:전량충족(프리보드)",
                        "51:장중대량",
                        "52:장중바스켓",
                        "61:장개시전시간외",
                        "62:사용안함",
                        "63:경매매",
                        "66:장전시간외경쟁대량",
                        "67:장개시전시간외대량",
                        "68:장개시전시간외바스켓",
                        "69:장개시전시간외자사주",
                        "71:신고대량전장시가",
                        "72:사용안함",
                        "73:신고대량종가",
                        "76:장중경쟁대량",
                        "77:장중대량",
                        "78:장중바스켓",
                        "79:사용안함",
                        "80:매입인도(당일)",
                        "81:시간외종가",
                        "82:시간외단일가",
                        "87:시간외대량",
                        "88:바스켓주문",
                        "89:시간외자사주",
                        "91:자사주스톡옵션",
                        "A1:stop order"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "00",
                            "name": "지정가"
                        },
                        {
                            "code": "03",
                            "name": "시장가"
                        },
                        {
                            "code": "05",
                            "name": "조건부지정가"
                        },
                        {
                            "code": "06",
                            "name": "최유리지정가"
                        },
                        {
                            "code": "07",
                            "name": "최우선지정가"
                        },
                        {
                            "code": "09",
                            "name": "자사주"
                        },
                        {
                            "code": "10",
                            "name": "매입인도(일반)"
                        },
                        {
                            "code": "13",
                            "name": "시장가 (IOC)"
                        },
                        {
                            "code": "16",
                            "name": "최유리지정가 (IOC)"
                        },
                        {
                            "code": "18",
                            "name": "사용안함"
                        },
                        {
                            "code": "20",
                            "name": "지정가(임의)"
                        },
                        {
                            "code": "23",
                            "name": "시장가(임의)"
                        },
                        {
                            "code": "26",
                            "name": "최유리지정가 (FOK)"
                        },
                        {
                            "code": "41",
                            "name": "부분충족(프리보드)"
                        },
                        {
                            "code": "42",
                            "name": "전량충족(프리보드)"
                        },
                        {
                            "code": "51",
                            "name": "장중대량"
                        },
                        {
                            "code": "52",
                            "name": "장중바스켓"
                        },
                        {
                            "code": "61",
                            "name": "장개시전시간외"
                        },
                        {
                            "code": "62",
                            "name": "사용안함"
                        },
                        {
                            "code": "63",
                            "name": "경매매"
                        },
                        {
                            "code": "66",
                            "name": "장전시간외경쟁대량"
                        },
                        {
                            "code": "67",
                            "name": "장개시전시간외대량"
                        },
                        {
                            "code": "68",
                            "name": "장개시전시간외바스켓"
                        },
                        {
                            "code": "69",
                            "name": "장개시전시간외자사주"
                        },
                        {
                            "code": "71",
                            "name": "신고대량전장시가"
                        },
                        {
                            "code": "72",
                            "name": "사용안함"
                        },
                        {
                            "code": "73",
                            "name": "신고대량종가"
                        },
                        {
                            "code": "76",
                            "name": "장중경쟁대량"
                        },
                        {
                            "code": "77",
                            "name": "장중대량"
                        },
                        {
                            "code": "78",
                            "name": "장중바스켓"
                        },
                        {
                            "code": "79",
                            "name": "사용안함"
                        },
                        {
                            "code": "80",
                            "name": "매입인도(당일)"
                        },
                        {
                            "code": "81",
                            "name": "시간외종가"
                        },
                        {
                            "code": "82",
                            "name": "시간외단일가"
                        },
                        {
                            "code": "87",
                            "name": "시간외대량"
                        },
                        {
                            "code": "88",
                            "name": "바스켓주문"
                        },
                        {
                            "code": "89",
                            "name": "시간외자사주"
                        },
                        {
                            "code": "91",
                            "name": "자사주스톡옵션"
                        },
                        {
                            "code": "A1",
                            "name": "stop order"
                        }
                    ]
                },
                {
                    "code": "pgmtype",
                    "name": "프로그램호가구분",
                    "type": "string",
                    "required": true,
                    "length": 2,
                    "description":                     [
                        "00:일반",
                        "01:지수차익",
                        "02:지수비차익",
                        "03:주식차익",
                        "04:ETF차익(비차익제외)",
                        "05:ETF설정(비차익제외)",
                        "06:ETF차익(비차익)",
                        "07:ETF설정(비차익)",
                        "08:DR차익",
                        "09:ELW LP헷지",
                        "10:ETF LP헷지",
                        "11:주식옵션 LP헷지",
                        "12:장외파생상품헷지"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "00",
                            "name": "일반"
                        },
                        {
                            "code": "01",
                            "name": "지수차익"
                        },
                        {
                            "code": "02",
                            "name": "지수비차익"
                        },
                        {
                            "code": "03",
                            "name": "주식차익"
                        },
                        {
                            "code": "04",
                            "name": "ETF차익(비차익제외)"
                        },
                        {
                            "code": "05",
                            "name": "ETF설정(비차익제외)"
                        },
                        {
                            "code": "06",
                            "name": "ETF차익(비차익)"
                        },
                        {
                            "code": "07",
                            "name": "ETF설정(비차익)"
                        },
                        {
                            "code": "08",
                            "name": "DR차익"
                        },
                        {
                            "code": "09",
                            "name": "ELW LP헷지"
                        },
                        {
                            "code": "10",
                            "name": "ETF LP헷지"
                        },
                        {
                            "code": "11",
                            "name": "주식옵션 LP헷지"
                        },
                        {
                            "code": "12",
                            "name": "장외파생상품헷지"
                        }
                    ]
                },
                {
                    "code": "gmhogagb",
                    "name": "공매도호가구분",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "0:일반",
                        "1:차입주식매도",
                        "2:기타공매도"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "0",
                            "name": "일반"
                        },
                        {
                            "code": "1",
                            "name": "차입주식매도"
                        },
                        {
                            "code": "2",
                            "name": "기타공매도"
                        }
                    ]
                },
                {
                    "code": "gmhogayn",
                    "name": "공매도가능여부",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "0:일반",
                        "1:공매도"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "0",
                            "name": "일반"
                        },
                        {
                            "code": "1",
                            "name": "공매도"
                        }
                    ]
                },
                {
                    "code": "singb",
                    "name": "신용구분",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        "000:보통",
                        "001:유통융자신규",
                        "003:자기융자신규",
                        "005:유통대주신규",
                        "007:자기대주신규",
                        "011:미사용",
                        "070:매도대금담보융자신규",
                        "080:예탁주식담보융자신규",
                        "082:예탁채권담보융자신규",
                        "101:유통융자상환",
                        "103:자기융자상환",
                        "105:유통대주상환",
                        "107:자기대주상환",
                        "111:유통융자전액상환",
                        "113:자기융자전액상환",
                        "170:매도대금담보융자상환",
                        "180:예탁주식담보융자상환",
                        "182:예탁채권담보융자상환",
                        "188:담보대출전액상환",
                        "201:유통융자현금상환",
                        "203:자기융자현금상환",
                        "205:유통대주현물상환",
                        "207:자기대주현물상환",
                        "280:예탁주식담보융자현금상환",
                        "282:예탁채권담보융자현금상환",
                        "301:유통융자현금상환취소",
                        "303:자기융자현금상환취소",
                        "305:유통대주현물상환취소",
                        "307:자기대주현물상환취소"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "000",
                            "name": "보통"
                        },
                        {
                            "code": "001",
                            "name": "유통융자신규"
                        },
                        {
                            "code": "003",
                            "name": "자기융자신규"
                        },
                        {
                            "code": "005",
                            "name": "유통대주신규"
                        },
                        {
                            "code": "007",
                            "name": "자기대주신규"
                        },
                        {
                            "code": "011",
                            "name": "미사용"
                        },
                        {
                            "code": "070",
                            "name": "매도대금담보융자신규"
                        },
                        {
                            "code": "080",
                            "name": "예탁주식담보융자신규"
                        },
                        {
                            "code": "082",
                            "name": "예탁채권담보융자신규"
                        },
                        {
                            "code": "101",
                            "name": "유통융자상환"
                        },
                        {
                            "code": "103",
                            "name": "자기융자상환"
                        },
                        {
                            "code": "105",
                            "name": "유통대주상환"
                        },
                        {
                            "code": "107",
                            "name": "자기대주상환"
                        },
                        {
                            "code": "111",
                            "name": "유통융자전액상환"
                        },
                        {
                            "code": "113",
                            "name": "자기융자전액상환"
                        },
                        {
                            "code": "170",
                            "name": "매도대금담보융자상환"
                        },
                        {
                            "code": "180",
                            "name": "예탁주식담보융자상환"
                        },
                        {
                            "code": "182",
                            "name": "예탁채권담보융자상환"
                        },
                        {
                            "code": "188",
                            "name": "담보대출전액상환"
                        },
                        {
                            "code": "201",
                            "name": "유통융자현금상환"
                        },
                        {
                            "code": "203",
                            "name": "자기융자현금상환"
                        },
                        {
                            "code": "205",
                            "name": "유통대주현물상환"
                        },
                        {
                            "code": "207",
                            "name": "자기대주현물상환"
                        },
                        {
                            "code": "280",
                            "name": "예탁주식담보융자현금상환"
                        },
                        {
                            "code": "282",
                            "name": "예탁채권담보융자현금상환"
                        },
                        {
                            "code": "301",
                            "name": "유통융자현금상환취소"
                        },
                        {
                            "code": "303",
                            "name": "자기융자현금상환취소"
                        },
                        {
                            "code": "305",
                            "name": "유통대주현물상환취소"
                        },
                        {
                            "code": "307",
                            "name": "자기대주현물상환취소"
                        }
                    ]
                },
                {
                    "code": "loandt",
                    "name": "대출일",
                    "type": "string",
                    "required": true,
                    "length": 8,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "cvrgordtp",
                    "name": "반대매매주문구분",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "0:일반",
                        "1:자동반대매매",
                        "2:지점반대매매",
                        "3:예비주문에대한 본주문"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "0",
                            "name": "일반"
                        },
                        {
                            "code": "1",
                            "name": "자동반대매매"
                        },
                        {
                            "code": "2",
                            "name": "지점반대매매"
                        },
                        {
                            "code": "3",
                            "name": "예비주문에대한 본주문"
                        }
                    ]
                },
                {
                    "code": "strtgcode",
                    "name": "전략코드",
                    "type": "string",
                    "required": true,
                    "length": 6,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "groupid",
                    "name": "그룹ID",
                    "type": "string",
                    "required": true,
                    "length": 20,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ordseqno",
                    "name": "주문회차",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "prtno",
                    "name": "포트폴리오번호",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "basketno",
                    "name": "바스켓번호",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "trchno",
                    "name": "트렌치번호",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "itemno",
                    "name": "아아템번호",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "brwmgmyn",
                    "name": "차입구분",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "mbrno",
                    "name": "회원사번호",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "procgb",
                    "name": "처리구분",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "admbrchno",
                    "name": "관리지점번호",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "futaccno",
                    "name": "선물계좌번호",
                    "type": "string",
                    "required": true,
                    "length": 20,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "futmarketgb",
                    "name": "선물상품구분",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "tongsingb",
                    "name": "통신매체구분",
                    "type": "string",
                    "required": true,
                    "length": 2,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "lpgb",
                    "name": "유동성공급자구분",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "0:해당없음",
                        "1:유동성공급자"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "0",
                            "name": "해당없음"
                        },
                        {
                            "code": "1",
                            "name": "유동성공급자"
                        }
                    ]
                },
                {
                    "code": "dummy",
                    "name": "DUMMY",
                    "type": "string",
                    "required": true,
                    "length": 20,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ordno",
                    "name": "주문번호",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ordtm",
                    "name": "주문시각",
                    "type": "string",
                    "required": true,
                    "length": 9,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "prntordno",
                    "name": "모주문번호",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "mgempno",
                    "name": "관리사원번호",
                    "type": "string",
                    "required": true,
                    "length": 9,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "orgordundrqty",
                    "name": "원주문미체결수량",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "orgordmdfyqty",
                    "name": "원주문정정수량",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ordordcancelqty",
                    "name": "원주문취소수량",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "nmcpysndno",
                    "name": "비회원사송신번호",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ordamt",
                    "name": "주문금액",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "bnstp",
                    "name": "매매구분",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "1:매도",
                        "2:매수"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "1",
                            "name": "매도"
                        },
                        {
                            "code": "2",
                            "name": "매수"
                        }
                    ]
                },
                {
                    "code": "spareordno",
                    "name": "예비주문번호",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "cvrgseqno",
                    "name": "반대매매일련번호",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "rsvordno",
                    "name": "예약주문번호",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "mtordseqno",
                    "name": "복수주문일련번호",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "spareordqty",
                    "name": "예비주문수량",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "orduserid",
                    "name": "주문사원번호",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "spotordqty",
                    "name": "실물주문수량",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ordruseqty",
                    "name": "재사용주문수량",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "mnyordamt",
                    "name": "현금주문금액",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ordsubstamt",
                    "name": "주문대용금액",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ruseordamt",
                    "name": "재사용주문금액",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ordcmsnamt",
                    "name": "수수료주문금액",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "crdtuseamt",
                    "name": "사용신용담보재사용금",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "secbalqty",
                    "name": "잔고수량",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        "실서버 데이터 미제공 필드"
                    ],
                    "default": ""
                },
                {
                    "code": "spotordableqty",
                    "name": "실물가능수량",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        "실서버 데이터 미제공 필드"
                    ],
                    "default": ""
                },
                {
                    "code": "ordableruseqty",
                    "name": "재사용가능수량(매도)",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        "실서버 데이터 미제공 필드"
                    ],
                    "default": ""
                },
                {
                    "code": "flctqty",
                    "name": "변동수량",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "secbalqtyd2",
                    "name": "잔고수량(D2)",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        "실서버 데이터 미제공 필드"
                    ],
                    "default": ""
                },
                {
                    "code": "sellableqty",
                    "name": "매도주문가능수량",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        "실서버 데이터 미제공 필드"
                    ],
                    "default": ""
                },
                {
                    "code": "unercsellordqty",
                    "name": "미체결매도주문수량",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        "실서버 데이터 미제공 필드"
                    ],
                    "default": ""
                },
                {
                    "code": "avrpchsprc",
                    "name": "평균매입가",
                    "type": "string",
                    "required": true,
                    "length": 13,
                    "description":                     [
                        "실서버 데이터 미제공 필드"
                    ],
                    "default": ""
                },
                {
                    "code": "pchsamt",
                    "name": "매입금액",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        "실서버 데이터 미제공 필드"
                    ],
                    "default": ""
                },
                {
                    "code": "deposit",
                    "name": "예수금",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "substamt",
                    "name": "대용금",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "csgnmnymgn",
                    "name": "위탁증거금현금",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "csgnsubstmgn",
                    "name": "위탁증거금대용",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "crdtpldgruseamt",
                    "name": "신용담보재사용금",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ordablemny",
                    "name": "주문가능현금",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ordablesubstamt",
                    "name": "주문가능대용",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ruseableamt",
                    "name": "재사용가능금액",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                }
            ]
        }
    },
    "SC1_실전":     {
        "info":         {
            "category": "주식",
            "subCategory": "[주식] 실시간 시세",
            "name": "주식주문체결",
            "method": "post",
            "url": "/websocket",
            "format": "JSON",
            "contentType": "application/json; charset=UTF-8",
            "countPerSecond": "",
            "verifyDate": "",
            "downloadDate": "2024-04-12T00:00:00.000Z",
            "memo": "주식 주문현황 및 시세, 투자정보를 실시간으로 확인할 수 있습니다.",
            "domain": "wss://openapi.ebestsec.co.kr:9443",
            "trid": "SC1",
            "isProduct": true,
            "description": "주식주문체결"
        },
        "request":         {
            "header":             [
                {
                    "code": "token",
                    "name": "접근토큰",
                    "type": "string",
                    "required": true,
                    "length": 1000,
                    "description":                     [
                        "Access Token을 설정하기 위한 Header Parameter"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_type",
                    "name": "거래 Type",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "1: 계좌등록, 2: 계좌해제, 3: 실시간 시세 등록, 4: 실시간 시세 해제"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_key",
                    "name": "단축코드",
                    "type": "string",
                    "required": false,
                    "length": 8,
                    "description":                     [
                        "단축코드 6자리 또는 8자리 (단건, 연속), (계좌등록/해제 일 경우 필수값 아님)"
                    ],
                    "default": ""
                }
            ]
        },
        "response":         {
            "header":             [
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "grpId",
                    "name": "그룹Id",
                    "type": "string",
                    "required": true,
                    "length": 20,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "trchno",
                    "name": "트렌치번호",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "trtzxLevytp",
                    "name": "거래세징수구분",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ordtrxptncode",
                    "name": "주문처리유형코드",
                    "type": "string",
                    "required": true,
                    "length": 4,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "acntnm",
                    "name": "계좌명",
                    "type": "string",
                    "required": true,
                    "length": 40,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "trcode",
                    "name": "TRCODE",
                    "type": "string",
                    "required": true,
                    "length": 8,
                    "description":                     [
                        "SONAT000:신규주문",
                        "SONAT001:정정주문",
                        "SONAT002:취소주문",
                        "SONAS100:체결확인"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "SONAT000",
                            "name": "신규주문"
                        },
                        {
                            "code": "SONAT001",
                            "name": "정정주문"
                        },
                        {
                            "code": "SONAT002",
                            "name": "취소주문"
                        },
                        {
                            "code": "SONAS100",
                            "name": "체결확인"
                        }
                    ]
                },
                {
                    "code": "userid",
                    "name": "사용자ID",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "agrgbrnno",
                    "name": "집계지점번호",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "regmktcode",
                    "name": "등록시장코드",
                    "type": "string",
                    "required": true,
                    "length": 2,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "len",
                    "name": "헤더길이",
                    "type": "string",
                    "required": true,
                    "length": 6,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "opdrtnno",
                    "name": "운용지시번호",
                    "type": "string",
                    "required": true,
                    "length": 12,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "orgordmdfyqty",
                    "name": "원주문정정수량",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "avrpchsprc",
                    "name": "평균매입가",
                    "type": "string",
                    "required": true,
                    "length": 13,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "exectime",
                    "name": "체결시각",
                    "type": "string",
                    "required": true,
                    "length": 9,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "cont",
                    "name": "연속구분",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "mnymgnrat",
                    "name": "현금증거금률",
                    "type": "string",
                    "required": true,
                    "length": 7,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "mdfycnfqty",
                    "name": "정정확인수량",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "orgordcancqty",
                    "name": "원주문취소수량",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "compress",
                    "name": "압축구분",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "execprc",
                    "name": "체결가격",
                    "type": "string",
                    "required": true,
                    "length": 13,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "mdfycnfprc",
                    "name": "정정확인가격",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "unercsellordqty",
                    "name": "미체결매도주문수량",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "cmsnamtexecamt",
                    "name": "수수료체결금액",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ruseableamt",
                    "name": "재사용가능금액",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "gubun",
                    "name": "헤더구분",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "trid",
                    "name": "TR추적ID",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "flctqty",
                    "name": "변동수량",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "execno",
                    "name": "체결번호",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "lptp",
                    "name": "유동성공급자구분",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "varmsglen",
                    "name": "가변메시지길이",
                    "type": "string",
                    "required": true,
                    "length": 2,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ordno",
                    "name": "주문번호",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "futsmkttp",
                    "name": "선물시장구분",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "crdtexecamt",
                    "name": "신용체결금액",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "deposit",
                    "name": "예수금",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "frgrunqno",
                    "name": "외국인고유번호",
                    "type": "string",
                    "required": true,
                    "length": 6,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "crdayruseexecval",
                    "name": "금일재사용체결금액",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "trsrc",
                    "name": "조회발원지",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ordacntno",
                    "name": "주문계좌번호",
                    "type": "string",
                    "required": true,
                    "length": 20,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "reqcnt",
                    "name": "요청레코드개수",
                    "type": "string",
                    "required": true,
                    "length": 4,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "shtnIsuno",
                    "name": "단축종목번호",
                    "type": "string",
                    "required": true,
                    "length": 9,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "accno1",
                    "name": "계좌번호",
                    "type": "string",
                    "required": true,
                    "length": 11,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "strtgcode",
                    "name": "전략코드",
                    "type": "string",
                    "required": true,
                    "length": 6,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ordseqno",
                    "name": "주문회차",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "Isunm",
                    "name": "종목명",
                    "type": "string",
                    "required": true,
                    "length": 40,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ordablesubstamt",
                    "name": "주문가능대용",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "encrypt",
                    "name": "암호구분",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "Isuno",
                    "name": "종목번호",
                    "type": "string",
                    "required": true,
                    "length": 12,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "accno2",
                    "name": "계좌번호",
                    "type": "string",
                    "required": true,
                    "length": 9,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "contkey",
                    "name": "연속키값",
                    "type": "string",
                    "required": true,
                    "length": 18,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "Loandt",
                    "name": "대출일",
                    "type": "string",
                    "required": true,
                    "length": 8,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "seq",
                    "name": "전문일련번호",
                    "type": "string",
                    "required": true,
                    "length": 9,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "lineseq",
                    "name": "라인일련번호",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "varlen",
                    "name": "가변시스템길이",
                    "type": "string",
                    "required": true,
                    "length": 2,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "orduserId",
                    "name": "주문자Id",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "mgmtbrnno",
                    "name": "관리지점번호",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "rjtqty",
                    "name": "거부수량",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ordprcptncode",
                    "name": "호가유형코드",
                    "type": "string",
                    "required": true,
                    "length": 2,
                    "description":                     [
                        "00:지정가",
                        "03:시장가",
                        "05:조건부지정가",
                        "06:최유리지정가",
                        "07:최우선지정가",
                        "09:자사주",
                        "10:매입인도(일반)",
                        "13:시장가 (IOC)",
                        "16:최유리지정가 (IOC)",
                        "18:사용안함",
                        "20:지정가(임의)",
                        "23:시장가(임의)",
                        "26:최유리지정가 (FOK)",
                        "41:부분충족(프리보드)",
                        "42:전량충족(프리보드)",
                        "51:장중대량",
                        "52:장중바스켓",
                        "61:장개시전시간외",
                        "62:사용안함",
                        "63:경매매",
                        "66:장전시간외경쟁대량",
                        "67:장개시전시간외대량",
                        "68:장개시전시간외바스켓",
                        "69:장개시전시간외자사주",
                        "71:신고대량전장시가",
                        "72:사용안함",
                        "73:신고대량종가",
                        "76:장중경쟁대량",
                        "77:장중대량",
                        "78:장중바스켓",
                        "79:사용안함",
                        "80:매입인도(당일)",
                        "81:시간외종가",
                        "82:시간외단일가",
                        "87:시간외대량",
                        "88:바스켓주문",
                        "89:시간외자사주",
                        "91:자사주스톡옵션",
                        "A1:stop order"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "00",
                            "name": "지정가"
                        },
                        {
                            "code": "03",
                            "name": "시장가"
                        },
                        {
                            "code": "05",
                            "name": "조건부지정가"
                        },
                        {
                            "code": "06",
                            "name": "최유리지정가"
                        },
                        {
                            "code": "07",
                            "name": "최우선지정가"
                        },
                        {
                            "code": "09",
                            "name": "자사주"
                        },
                        {
                            "code": "10",
                            "name": "매입인도(일반)"
                        },
                        {
                            "code": "13",
                            "name": "시장가 (IOC)"
                        },
                        {
                            "code": "16",
                            "name": "최유리지정가 (IOC)"
                        },
                        {
                            "code": "18",
                            "name": "사용안함"
                        },
                        {
                            "code": "20",
                            "name": "지정가(임의)"
                        },
                        {
                            "code": "23",
                            "name": "시장가(임의)"
                        },
                        {
                            "code": "26",
                            "name": "최유리지정가 (FOK)"
                        },
                        {
                            "code": "41",
                            "name": "부분충족(프리보드)"
                        },
                        {
                            "code": "42",
                            "name": "전량충족(프리보드)"
                        },
                        {
                            "code": "51",
                            "name": "장중대량"
                        },
                        {
                            "code": "52",
                            "name": "장중바스켓"
                        },
                        {
                            "code": "61",
                            "name": "장개시전시간외"
                        },
                        {
                            "code": "62",
                            "name": "사용안함"
                        },
                        {
                            "code": "63",
                            "name": "경매매"
                        },
                        {
                            "code": "66",
                            "name": "장전시간외경쟁대량"
                        },
                        {
                            "code": "67",
                            "name": "장개시전시간외대량"
                        },
                        {
                            "code": "68",
                            "name": "장개시전시간외바스켓"
                        },
                        {
                            "code": "69",
                            "name": "장개시전시간외자사주"
                        },
                        {
                            "code": "71",
                            "name": "신고대량전장시가"
                        },
                        {
                            "code": "72",
                            "name": "사용안함"
                        },
                        {
                            "code": "73",
                            "name": "신고대량종가"
                        },
                        {
                            "code": "76",
                            "name": "장중경쟁대량"
                        },
                        {
                            "code": "77",
                            "name": "장중대량"
                        },
                        {
                            "code": "78",
                            "name": "장중바스켓"
                        },
                        {
                            "code": "79",
                            "name": "사용안함"
                        },
                        {
                            "code": "80",
                            "name": "매입인도(당일)"
                        },
                        {
                            "code": "81",
                            "name": "시간외종가"
                        },
                        {
                            "code": "82",
                            "name": "시간외단일가"
                        },
                        {
                            "code": "87",
                            "name": "시간외대량"
                        },
                        {
                            "code": "88",
                            "name": "바스켓주문"
                        },
                        {
                            "code": "89",
                            "name": "시간외자사주"
                        },
                        {
                            "code": "91",
                            "name": "자사주스톡옵션"
                        },
                        {
                            "code": "A1",
                            "name": "stop order"
                        }
                    ]
                },
                {
                    "code": "stdIsuno",
                    "name": "표준종목번호",
                    "type": "string",
                    "required": true,
                    "length": 12,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "pchsant",
                    "name": "매입금액",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "filler",
                    "name": "예비영역",
                    "type": "string",
                    "required": true,
                    "length": 6,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "secbalqty",
                    "name": "잔고수량",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ordxctptncode",
                    "name": "주문체결유형코드",
                    "type": "string",
                    "required": true,
                    "length": 2,
                    "description":                     [
                        "01:주문",
                        "02:정정",
                        "03:취소",
                        "11:체결",
                        "12 정정확인",
                        "13 취소확인",
                        "14 거부"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "01",
                            "name": "주문"
                        },
                        {
                            "code": "02",
                            "name": "정정"
                        },
                        {
                            "code": "03",
                            "name": "취소"
                        },
                        {
                            "code": "11",
                            "name": "체결"
                        }
                    ]
                },
                {
                    "code": "canccnfqty",
                    "name": "취소확인수량",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ordablemny",
                    "name": "주문가능현금",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "pubip",
                    "name": "공인IP",
                    "type": "string",
                    "required": true,
                    "length": 12,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "prvip",
                    "name": "사설IP",
                    "type": "string",
                    "required": true,
                    "length": 12,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "funckey",
                    "name": "기능키",
                    "type": "string",
                    "required": true,
                    "length": 4,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "accno",
                    "name": "계좌번호",
                    "type": "string",
                    "required": true,
                    "length": 11,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "compreq",
                    "name": "압축요청구분",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "crdtpldgruseamt",
                    "name": "신용담보재사용금",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ordamt",
                    "name": "주문금액",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "termno",
                    "name": "단말번호",
                    "type": "string",
                    "required": true,
                    "length": 8,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "crdtpldgexecamt",
                    "name": "신용담보체결금액",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ordcndi",
                    "name": "주문조건",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "rmndLoanamt",
                    "name": "잔여대출금액",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "bpno",
                    "name": "지점번호",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "substamt",
                    "name": "대용금",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "mgempno",
                    "name": "관리사원번호",
                    "type": "string",
                    "required": true,
                    "length": 9,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "csgnsubstmgn",
                    "name": "위탁증거금대용",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "offset",
                    "name": "공통시작지점",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "rcptexectime",
                    "name": "거래소수신체결시각",
                    "type": "string",
                    "required": true,
                    "length": 9,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "sellableqty",
                    "name": "매도주문가능수량",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "spotexecqty",
                    "name": "실물체결수량",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "varhdlen",
                    "name": "가변해더길이",
                    "type": "string",
                    "required": true,
                    "length": 2,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "substmgnrat",
                    "name": "대용증거금률",
                    "type": "string",
                    "required": true,
                    "length": 9,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ordavrexecprc",
                    "name": "주문평균체결가격",
                    "type": "string",
                    "required": true,
                    "length": 13,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "itemno",
                    "name": "아이템번호",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "mgntrncode",
                    "name": "신용거래코드",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        "[신규]",
                        "000 : 보통",
                        "001 : 유통융자신규",
                        "003 : 자기융자신규",
                        "005 : 유통대주신규",
                        "007 : 자기대주신규",
                        "080 : 예탁주식담보융자신규",
                        "082 : 예탁채권담보융자신규",
                        "[상환]",
                        "101 : 유통융자상환",
                        "103 : 자기융자상환",
                        "105 : 유통대주상환",
                        "107 : 자기대주상환",
                        "111 : 유통융자전액상환",
                        "113 : 자기융자전액상환",
                        "180 : 예탁주식담보융자상환",
                        "182 : 예탁채권담보융자상환",
                        "188 : 담보대출전액상환"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "000",
                            "name": "보통"
                        },
                        {
                            "code": "001",
                            "name": "유통융자신규"
                        },
                        {
                            "code": "003",
                            "name": "자기융자신규"
                        },
                        {
                            "code": "005",
                            "name": "유통대주신규"
                        },
                        {
                            "code": "007",
                            "name": "자기대주신규"
                        },
                        {
                            "code": "080",
                            "name": "예탁주식담보융자신규"
                        },
                        {
                            "code": "082",
                            "name": "예탁채권담보융자신규"
                        },
                        {
                            "code": "101",
                            "name": "유통융자상환"
                        },
                        {
                            "code": "103",
                            "name": "자기융자상환"
                        },
                        {
                            "code": "105",
                            "name": "유통대주상환"
                        },
                        {
                            "code": "107",
                            "name": "자기대주상환"
                        },
                        {
                            "code": "111",
                            "name": "유통융자전액상환"
                        },
                        {
                            "code": "113",
                            "name": "자기융자전액상환"
                        },
                        {
                            "code": "180",
                            "name": "예탁주식담보융자상환"
                        },
                        {
                            "code": "182",
                            "name": "예탁채권담보융자상환"
                        },
                        {
                            "code": "188",
                            "name": "담보대출전액상환"
                        }
                    ]
                },
                {
                    "code": "nsavtrdqty",
                    "name": "비저축체결수량",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ifinfo",
                    "name": "I/F정보",
                    "type": "string",
                    "required": true,
                    "length": 4,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ordableruseqty",
                    "name": "재사용가능수량(매도)",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ptflno",
                    "name": "포트폴리오번호",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "secbalqtyd2",
                    "name": "잔고수량(d2)",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "brwmgmtYn",
                    "name": "차입관리여부",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "eventid",
                    "name": "I/F이벤트ID",
                    "type": "string",
                    "required": true,
                    "length": 4,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "csgnmnymgn",
                    "name": "위탁증거금현금",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "pcbpno",
                    "name": "처리지점번호",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "orgordno",
                    "name": "원주문번호",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ifid",
                    "name": "I/F일련번호",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "media",
                    "name": "접속매체",
                    "type": "string",
                    "required": true,
                    "length": 2,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "mtiordseqno",
                    "name": "복수주문일련번호",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "filler1",
                    "name": "예비영역",
                    "type": "string",
                    "required": true,
                    "length": 41,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "orgordunercqty",
                    "name": "원주문미체결수량",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "mbrnmbrno",
                    "name": "회원/비회원사번호",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "futsLnkbrnno",
                    "name": "선물연계지점번호",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "commdacode",
                    "name": "통신매체코드",
                    "type": "string",
                    "required": true,
                    "length": 2,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "stslexecqty",
                    "name": "공매도체결수량",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "proctm",
                    "name": "AP처리시간",
                    "type": "string",
                    "required": true,
                    "length": 9,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "bfstdIsuno",
                    "name": "전표준종목번호",
                    "type": "string",
                    "required": true,
                    "length": 12,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "futsLnkacntno",
                    "name": "선물연계계좌번호",
                    "type": "string",
                    "required": true,
                    "length": 20,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "lang",
                    "name": "언어구분",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "unercqty",
                    "name": "미체결수량(주문)",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "execqty",
                    "name": "체결수량",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "adduptp",
                    "name": "수수료합산코드",
                    "type": "string",
                    "required": true,
                    "length": 2,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "bskno",
                    "name": "바스켓번호",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "spotordableqty",
                    "name": "실물가능수량",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ubstexecamt",
                    "name": "대용체결금액",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "cvrgordtp",
                    "name": "반대매매주문구분",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "0:일반",
                        "1:자동반대매매",
                        "2:지점반대매매",
                        "3:예비주문에대한 본주문"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "0",
                            "name": "일반"
                        },
                        {
                            "code": "1",
                            "name": "자동반대매매"
                        },
                        {
                            "code": "2",
                            "name": "지점반대매매"
                        },
                        {
                            "code": "3",
                            "name": "예비주문에대한 본주문"
                        }
                    ]
                },
                {
                    "code": "ordqty",
                    "name": "주문수량",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "mnyexecamt",
                    "name": "현금체결금액",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "outgu",
                    "name": "메세지출력구분",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "msgcode",
                    "name": "메세지코드",
                    "type": "string",
                    "required": true,
                    "length": 4,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ordtrdptncode",
                    "name": "주문거래유형코드",
                    "type": "string",
                    "required": true,
                    "length": 2,
                    "description":                     [
                        "00: 위탁",
                        "01: 신용",
                        "04: 선물대용"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "00",
                            "name": "위탁"
                        },
                        {
                            "code": "01",
                            "name": "신용"
                        },
                        {
                            "code": "04",
                            "name": "선물대용"
                        }
                    ]
                },
                {
                    "code": "ordmktcode",
                    "name": "주문시장코드",
                    "type": "string",
                    "required": true,
                    "length": 2,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ordptncode",
                    "name": "주문유형코드",
                    "type": "string",
                    "required": true,
                    "length": 2,
                    "description":                     [
                        "00 해당없음",
                        "01:현금매도",
                        "02:현금매수",
                        "03신용매도",
                        "04:신용매수"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "01",
                            "name": "현금매도"
                        },
                        {
                            "code": "02",
                            "name": "현금매수"
                        },
                        {
                            "code": "04",
                            "name": "신용매수"
                        }
                    ]
                },
                {
                    "code": "prdayruseexecval",
                    "name": "전일재사용체결금액",
                    "type": "string",
                    "required": true,
                    "length": 16,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "comid",
                    "name": "COM ID",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "bnstp",
                    "name": "매매구분",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "1:매도",
                        "2:매수"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "1",
                            "name": "매도"
                        },
                        {
                            "code": "2",
                            "name": "매수"
                        }
                    ]
                },
                {
                    "code": "user",
                    "name": "조작자ID",
                    "type": "string",
                    "required": true,
                    "length": 8,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                },
                {
                    "code": "ordprc",
                    "name": "주문가격",
                    "type": "string",
                    "required": true,
                    "length": 13,
                    "description":                     [
                        ""
                    ],
                    "default": ""
                }
            ]
        }
    },
    "SC2_실전":     {
        "info":         {
            "category": "주식",
            "subCategory": "[주식] 실시간 시세",
            "name": "주식주문정정",
            "method": "post",
            "url": "/websocket",
            "format": "JSON",
            "contentType": "application/json; charset=UTF-8",
            "countPerSecond": "",
            "verifyDate": "",
            "downloadDate": "2024-04-12T00:00:00.000Z",
            "memo": "주식 주문현황 및 시세, 투자정보를 실시간으로 확인할 수 있습니다.",
            "domain": "wss://openapi.ebestsec.co.kr:9443",
            "trid": "SC2",
            "isProduct": true,
            "description": "주식주문정정"
        },
        "request":         {
            "header":             [
                {
                    "code": "token",
                    "name": "접근토큰",
                    "type": "string",
                    "required": true,
                    "length": 1000,
                    "description":                     [
                        "Access Token을 설정하기 위한 Header Parameter"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_type",
                    "name": "거래 Type",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "1: 계좌등록, 2: 계좌해제, 3: 실시간 시세 등록, 4: 실시간 시세 해제"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_key",
                    "name": "단축코드",
                    "type": "string",
                    "required": false,
                    "length": 8,
                    "description":                     [
                        "단축코드 6자리 또는 8자리 (단건, 연속), (계좌등록/해제 일 경우 필수값 아님)"
                    ],
                    "default": ""
                }
            ]
        },
        "response":         {
            "header":             [
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                }
            ],
            "body":             [

            ]
        }
    },
    "SC3_실전":     {
        "info":         {
            "category": "주식",
            "subCategory": "[주식] 실시간 시세",
            "name": "주식주문취소",
            "method": "post",
            "url": "/websocket",
            "format": "JSON",
            "contentType": "application/json; charset=UTF-8",
            "countPerSecond": "",
            "verifyDate": "",
            "downloadDate": "2024-04-12T00:00:00.000Z",
            "memo": "주식 주문현황 및 시세, 투자정보를 실시간으로 확인할 수 있습니다.",
            "domain": "wss://openapi.ebestsec.co.kr:9443",
            "trid": "SC3",
            "isProduct": true,
            "description": "주식주문취소"
        },
        "request":         {
            "header":             [
                {
                    "code": "token",
                    "name": "접근토큰",
                    "type": "string",
                    "required": true,
                    "length": 1000,
                    "description":                     [
                        "Access Token을 설정하기 위한 Header Parameter"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_type",
                    "name": "거래 Type",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "1: 계좌등록, 2: 계좌해제, 3: 실시간 시세 등록, 4: 실시간 시세 해제"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_key",
                    "name": "단축코드",
                    "type": "string",
                    "required": false,
                    "length": 8,
                    "description":                     [
                        "단축코드 6자리 또는 8자리 (단건, 연속), (계좌등록/해제 일 경우 필수값 아님)"
                    ],
                    "default": ""
                }
            ]
        },
        "response":         {
            "header":             [
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                }
            ],
            "body":             [

            ]
        }
    },
    "SC4_실전":     {
        "info":         {
            "category": "주식",
            "subCategory": "[주식] 실시간 시세",
            "name": "주식주문거부",
            "method": "post",
            "url": "/websocket",
            "format": "JSON",
            "contentType": "application/json; charset=UTF-8",
            "countPerSecond": "",
            "verifyDate": "",
            "downloadDate": "2024-04-12T00:00:00.000Z",
            "memo": "주식 주문현황 및 시세, 투자정보를 실시간으로 확인할 수 있습니다.",
            "domain": "wss://openapi.ebestsec.co.kr:9443",
            "trid": "SC4",
            "isProduct": true,
            "description": "주식주문거부"
        },
        "request":         {
            "header":             [
                {
                    "code": "token",
                    "name": "접근토큰",
                    "type": "string",
                    "required": true,
                    "length": 1000,
                    "description":                     [
                        "Access Token을 설정하기 위한 Header Parameter"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_type",
                    "name": "거래 Type",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "1: 계좌등록, 2: 계좌해제, 3: 실시간 시세 등록, 4: 실시간 시세 해제"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_key",
                    "name": "단축코드",
                    "type": "string",
                    "required": false,
                    "length": 8,
                    "description":                     [
                        "단축코드 6자리 또는 8자리 (단건, 연속), (계좌등록/해제 일 경우 필수값 아님)"
                    ],
                    "default": ""
                }
            ]
        },
        "response":         {
            "header":             [
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 3,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                }
            ],
            "body":             [

            ]
        }
    },
    "CDPCQ04700_실전":     {
        "info":         {
            "category": "주식",
            "subCategory": "[주식] 계좌",
            "name": "계좌 거래내역",
            "method": "post",
            "url": "/stock/accno",
            "format": "JSON",
            "contentType": "application/json; charset=UTF-8",
            "countPerSecond": 1,
            "verifyDate": "",
            "downloadDate": "2024-04-12T00:00:00.000Z",
            "memo": "계좌별 거래내역 및 잔고 등 계좌에 관련된 서비스를 확인할 수 있습니다.",
            "domain": "https://openapi.ebestsec.co.kr:8080",
            "trid": "CDPCQ04700",
            "isProduct": true,
            "description": "계좌 거래내역"
        },
        "request":         {
            "header":             [
                {
                    "code": "content-type",
                    "name": "컨텐츠타입",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "이베스트증권 제공 API를 호출하기 위한 Request Body 데이터 포맷으로 \"application/json; charset=utf-8 설정\""
                    ],
                    "default": ""
                },
                {
                    "code": "authorization",
                    "name": "접근토큰",
                    "type": "string",
                    "required": true,
                    "length": 1000,
                    "description":                     [
                        "OAuth 토큰이 필요한 API 경우 발급한 Access Token을 설정하기 위한 Request Heaeder Parameter"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cont",
                    "name": "연속 거래 여부",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "연속거래 여부",
                        "Y:연속○",
                        "N:연속×"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "Y",
                            "name": "연속○"
                        },
                        {
                            "code": "N",
                            "name": "연속×"
                        }
                    ]
                },
                {
                    "code": "tr_cont_key",
                    "name": "연속 거래 Key",
                    "type": "string",
                    "required": true,
                    "length": 18,
                    "description":                     [
                        "연속일 경우 그전에 내려온 연속키 값 올림"
                    ],
                    "default": ""
                },
                {
                    "code": "mac_address",
                    "name": "MAC 주소",
                    "type": "string",
                    "required": true,
                    "length": 12,
                    "description":                     [
                        "법인인 경우 필수 세팅"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "CDPCQ04700InBlock1",
                    "name": "CDPCQ04700InBlock1",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "QryTp",
                            "name": "조회구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                "0@전체, 1@입출금, 2@입출고, 3@매매, 4@환전, 9@기타"
                            ],
                            "default": ""
                        },
                        {
                            "code": "QrySrtDt",
                            "name": "조회시작일",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "QryEndDt",
                            "name": "조회종료일",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "SrtNo",
                            "name": "시작번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "PdptnCode",
                            "name": "상품유형코드",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                1
                            ],
                            "default": ""
                        },
                        {
                            "code": "IsuLgclssCode",
                            "name": "종목대분류코드",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                "00@전체, 01@주식, 02@채권, 04@펀드, 03@선물, 05@해외주식, 06@해외파생"
                            ],
                            "default": ""
                        },
                        {
                            "code": "IsuNo",
                            "name": "종목번호",
                            "type": "string",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                }
            ]
        },
        "response":         {
            "header":             [
                {
                    "code": "content-type",
                    "name": "컨텐츠타입",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "이베스트증권 제공 API를 호출하기 위한 Request Body 데이터 포맷으로 \"application/json; charset=utf-8 설정\""
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cont",
                    "name": "연속 거래 여부",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "연속거래 여부",
                        "Y:연속○",
                        "N:연속×"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "",
                            "name": "다음 데이터 없음"
                        },
                        {
                            "code": "Y",
                            "name": "연속○"
                        },
                        {
                            "code": "N",
                            "name": "연속×"
                        }
                    ]
                },
                {
                    "code": "tr_cont_key",
                    "name": "연속 거래 Key",
                    "type": "string",
                    "required": true,
                    "length": 18,
                    "description":                     [
                        "연속일 경우 그전에 내려온 연속키 값 올림"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "CDPCQ04700OutBlock1",
                    "name": "CDPCQ04700OutBlock1",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "RecCnt",
                            "name": "레코드갯수",
                            "type": "number",
                            "required": true,
                            "length": 5,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "QryTp",
                            "name": "조회구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "AcntNo",
                            "name": "계좌번호",
                            "type": "string",
                            "required": true,
                            "length": 20,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "Pwd",
                            "name": "비밀번호",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "QrySrtDt",
                            "name": "조회시작일",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "QryEndDt",
                            "name": "조회종료일",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "SrtNo",
                            "name": "시작번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "PdptnCode",
                            "name": "상품유형코드",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "IsuLgclssCode",
                            "name": "종목대분류코드",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "IsuNo",
                            "name": "종목번호",
                            "type": "string",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                },
                {
                    "code": "CDPCQ04700OutBlock2",
                    "name": "CDPCQ04700OutBlock2",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "RecCnt",
                            "name": "레코드갯수",
                            "type": "number",
                            "required": true,
                            "length": 5,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "AcntNm",
                            "name": "계좌명",
                            "type": "string",
                            "required": true,
                            "length": 40,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                },
                {
                    "code": "CDPCQ04700OutBlock3",
                    "name": "CDPCQ04700OutBlock3",
                    "type": "array",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "AcntNo",
                            "name": "계좌번호",
                            "type": "string",
                            "required": true,
                            "length": 20,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "TrdDt",
                            "name": "거래일자",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "TrdNo",
                            "name": "거래번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "TpCodeNm",
                            "name": "구분코드명",
                            "type": "string",
                            "required": true,
                            "length": 50,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "SmryNo",
                            "name": "적요번호",
                            "type": "string",
                            "required": true,
                            "length": 4,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "SmryNm",
                            "name": "적요명",
                            "type": "string",
                            "required": true,
                            "length": 40,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "CancTpNm",
                            "name": "취소구분",
                            "type": "string",
                            "required": true,
                            "length": 20,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "TrdQty",
                            "name": "거래수량",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "Trtax",
                            "name": "거래세",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "FcurrAdjstAmt",
                            "name": "외화정산금액",
                            "type": "number",
                            "required": true,
                            "length": 25,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "AdjstAmt",
                            "name": "정산금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OvdSum",
                            "name": "연체합",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "DpsBfbalAmt",
                            "name": "예수금전잔금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "SellPldgRfundAmt",
                            "name": "매도담보상환금",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "DpspdgLoanBfbalAmt",
                            "name": "예탁담보대출전잔금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "TrdmdaNm",
                            "name": "거래매체명",
                            "type": "string",
                            "required": true,
                            "length": 40,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrgTrdNo",
                            "name": "원거래번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "IsuNm",
                            "name": "종목명",
                            "type": "string",
                            "required": true,
                            "length": 40,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "TrdUprc",
                            "name": "거래단가",
                            "type": "number",
                            "required": true,
                            "length": 13,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "CmsnAmt",
                            "name": "수수료",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "FcurrCmsnAmt",
                            "name": "외화수수료금액",
                            "type": "number",
                            "required": true,
                            "length": 15,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "RfundDiffAmt",
                            "name": "상환차이금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "RepayAmtSum",
                            "name": "변제금합계",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "SecCrbalQty",
                            "name": "유가증권금잔수량",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "CslLoanRfundIntrstAmt",
                            "name": "매도대금담보대출상환이자금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "DpspdgLoanCrbalAmt",
                            "name": "예탁담보대출금잔금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "TrxTime",
                            "name": "처리시각",
                            "type": "string",
                            "required": true,
                            "length": 9,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "Inouno",
                            "name": "출납번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "IsuNo",
                            "name": "종목번호",
                            "type": "string",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "TrdAmt",
                            "name": "거래금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ChckAmt",
                            "name": "수표금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "TaxSumAmt",
                            "name": "세금합계금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "FcurrTaxSumAmt",
                            "name": "외화세금합계금액",
                            "type": "number",
                            "required": true,
                            "length": 26,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "IntrstUtlfee",
                            "name": "이자이용료",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MnyDvdAmt",
                            "name": "배당금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "RcvblOcrAmt",
                            "name": "미수발생금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "TrxBrnNo",
                            "name": "처리지점번호",
                            "type": "string",
                            "required": true,
                            "length": 3,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "TrxBrnNm",
                            "name": "처리지점명",
                            "type": "string",
                            "required": true,
                            "length": 40,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "DpspdgLoanAmt",
                            "name": "예탁담보대출금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "DpspdgLoanRfundAmt",
                            "name": "예탁담보대출상환금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "BasePrc",
                            "name": "기준가",
                            "type": "number",
                            "required": true,
                            "length": 13,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "DpsCrbalAmt",
                            "name": "예수금금잔금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "BoaAmt",
                            "name": "과표",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MnyoutAbleAmt",
                            "name": "출금가능금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "BcrLoanOcrAmt",
                            "name": "수익증권담보대출발생금",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "BcrLoanBfbalAmt",
                            "name": "수익증권담보대출전잔금",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "BnsBasePrc",
                            "name": "매매기준가",
                            "type": "number",
                            "required": true,
                            "length": 20,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "TaxchrBasePrc",
                            "name": "과세기준가",
                            "type": "number",
                            "required": true,
                            "length": 20,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "TrdUnit",
                            "name": "거래좌수",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "BalUnit",
                            "name": "잔고좌수",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "EvrTax",
                            "name": "제세금",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "EvalAmt",
                            "name": "평가금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "BcrLoanRfundAmt",
                            "name": "수익증권담보대출상환금",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "BcrLoanCrbalAmt",
                            "name": "수익증권담보대출금잔금",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "AddMgnOcrTotamt",
                            "name": "추가증거금발생총액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "AddMnyMgnOcrAmt",
                            "name": "추가현금증거금발생금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "AddMgnDfryTotamt",
                            "name": "추가증거금납부총액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "AddMnyMgnDfryAmt",
                            "name": "추가현금증거금납부금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "BnsplAmt",
                            "name": "매매손익금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "Ictax",
                            "name": "소득세",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "Ihtax",
                            "name": "주민세",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "LoanDt",
                            "name": "대출일",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "CrcyCode",
                            "name": "통화코드",
                            "type": "string",
                            "required": true,
                            "length": 3,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "FcurrAmt",
                            "name": "외화금액",
                            "type": "number",
                            "required": true,
                            "length": 24,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "FcurrTrdAmt",
                            "name": "외화거래금액",
                            "type": "number",
                            "required": true,
                            "length": 24,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "FcurrDps",
                            "name": "외화예수금",
                            "type": "number",
                            "required": true,
                            "length": 21,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "FcurrDpsBfbalAmt",
                            "name": "외화예수금전잔금액",
                            "type": "number",
                            "required": true,
                            "length": 21,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OppAcntNm",
                            "name": "상대계좌명",
                            "type": "string",
                            "required": true,
                            "length": 40,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OppAcntNo",
                            "name": "상대계좌번호",
                            "type": "string",
                            "required": true,
                            "length": 20,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "LoanRfundAmt",
                            "name": "대출상환금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "LoanIntrstAmt",
                            "name": "대출이자금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "AskpsnNm",
                            "name": "의뢰인명",
                            "type": "string",
                            "required": true,
                            "length": 40,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdDt",
                            "name": "주문일자",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "TrdXchrat",
                            "name": "거래환율",
                            "type": "number",
                            "required": true,
                            "length": 15,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "RdctCmsn",
                            "name": "감면수수료",
                            "type": "number",
                            "required": true,
                            "length": 21,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "FcurrStmpTx",
                            "name": "외화인지세",
                            "type": "number",
                            "required": true,
                            "length": 21,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "FcurrElecfnTrtax",
                            "name": "외화전자금융거래세",
                            "type": "number",
                            "required": true,
                            "length": 21,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "FcstckTrtax",
                            "name": "외화증권거래세",
                            "type": "number",
                            "required": true,
                            "length": 21,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                },
                {
                    "code": "CDPCQ04700OutBlock4",
                    "name": "CDPCQ04700OutBlock4",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "RecCnt",
                            "name": "레코드갯수",
                            "type": "number",
                            "required": true,
                            "length": 5,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "PnlSumAmt",
                            "name": "손익합계금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "CtrctAsm",
                            "name": "약정누계",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "CmsnAmtSumAmt",
                            "name": "수수료합계금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                },
                {
                    "code": "CDPCQ04700OutBlock5",
                    "name": "CDPCQ04700OutBlock5",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "RecCnt",
                            "name": "레코드갯수",
                            "type": "number",
                            "required": true,
                            "length": 5,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MnyinAmt",
                            "name": "입금금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "SecinAmt",
                            "name": "입고금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MnyoutAmt",
                            "name": "출금금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "SecoutAmt",
                            "name": "출고금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "DiffAmt",
                            "name": "차이금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "DiffAmt0",
                            "name": "차이금액0",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "SellQty",
                            "name": "매도수량",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "SellAmt",
                            "name": "매도금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "SellCmsn",
                            "name": "매도수수료",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "EvrTax",
                            "name": "제세금",
                            "type": "number",
                            "required": true,
                            "length": 19,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "FcurrSellAdjstAmt",
                            "name": "외화매도정산금액",
                            "type": "number",
                            "required": true,
                            "length": 25,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "BuyQty",
                            "name": "매수수량",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "BuyAmt",
                            "name": "매수금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "BuyCmsn",
                            "name": "매수수수료",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ExecTax",
                            "name": "체결세금",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "FcurrBuyAdjstAmt",
                            "name": "외화매수정산금액",
                            "type": "number",
                            "required": true,
                            "length": 25,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                }
            ]
        }
    },
    "CSPAT00601_실전":     {
        "info":         {
            "category": "주식",
            "subCategory": "[주식] 주문",
            "name": "현물주문",
            "method": "post",
            "url": "/stock/order",
            "format": "JSON",
            "contentType": "application/json; charset=UTF-8",
            "countPerSecond": 10,
            "verifyDate": "",
            "downloadDate": "2024-04-12T00:00:00.000Z",
            "memo": "주문과 관련된 서비스를 확인할 수 있습니다.",
            "domain": "https://openapi.ebestsec.co.kr:8080",
            "trid": "CSPAT00601",
            "isProduct": true,
            "description": "현물주문"
        },
        "request":         {
            "header":             [
                {
                    "code": "content-type",
                    "name": "컨텐츠타입",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "이베스트증권 제공 API를 호출하기 위한 Request Body 데이터 포맷으로 \"application/json; charset=utf-8 설정\""
                    ],
                    "default": "application/json; charset=utf-8"
                },
                {
                    "code": "authorization",
                    "name": "접근토큰",
                    "type": "string",
                    "required": true,
                    "length": 1000,
                    "description":                     [
                        "OAuth 토큰이 필요한 API 경우 발급한 Access Token을 설정하기 위한 Request Heaeder Parameter"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cont",
                    "name": "연속 거래 여부",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "연속거래 여부",
                        "Y:연속○",
                        "N:연속×"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "Y",
                            "name": "연속○"
                        },
                        {
                            "code": "N",
                            "name": "연속×"
                        }
                    ]
                },
                {
                    "code": "tr_cont_key",
                    "name": "연속 거래 Key",
                    "type": "string",
                    "required": true,
                    "length": 18,
                    "description":                     [
                        "연속일 경우 그전에 내려온 연속키 값 올림"
                    ],
                    "default": ""
                },
                {
                    "code": "mac_address",
                    "name": "MAC 주소",
                    "type": "string",
                    "required": true,
                    "length": 12,
                    "description":                     [
                        "법인인 경우 필수 세팅"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "CSPAT00601InBlock1",
                    "name": "CSPAT00601InBlock1",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "IsuNo",
                            "name": "종목번호",
                            "type": "string",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                "주식/ETF - 종목코드 or A+종목코드(모의투자는 A+종목코드)",
                                "ELW - J+종목코드",
                                "ETN - Q+종목코드"
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdQty",
                            "name": "주문수량",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdPrc",
                            "name": "주문가",
                            "type": "number",
                            "required": true,
                            "length": 13,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "BnsTpCode",
                            "name": "매매구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                "1:매도",
                                "2:매수"
                            ],
                            "default": "",
                            "enum":                             [
                                {
                                    "code": "1",
                                    "name": "매도"
                                },
                                {
                                    "code": "2",
                                    "name": "매수"
                                }
                            ]
                        },
                        {
                            "code": "OrdprcPtnCode",
                            "name": "호가유형코드",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                "00: 지정가",
                                "03: 시장가",
                                "05: 조건부지정가",
                                "06: 최유리지정가",
                                "07: 최우선지정가",
                                "61: 장개시전시간외종가",
                                "81: 시간외종가",
                                "82: 시간외단일가"
                            ],
                            "default": "",
                            "enum":                             [
                                {
                                    "code": "00",
                                    "name": "지정가"
                                },
                                {
                                    "code": "03",
                                    "name": "시장가"
                                },
                                {
                                    "code": "05",
                                    "name": "조건부지정가"
                                },
                                {
                                    "code": "06",
                                    "name": "최유리지정가"
                                },
                                {
                                    "code": "07",
                                    "name": "최우선지정가"
                                },
                                {
                                    "code": "61",
                                    "name": "장개시전시간외종가"
                                },
                                {
                                    "code": "81",
                                    "name": "시간외종가"
                                },
                                {
                                    "code": "82",
                                    "name": "시간외단일가"
                                }
                            ]
                        },
                        {
                            "code": "MgntrnCode",
                            "name": "신용거래코드",
                            "type": "string",
                            "required": true,
                            "length": 3,
                            "description":                             [
                                "000:보통",
                                "003:유통/자기융자신규",
                                "005:유통대주신규",
                                "007:자기대주신규",
                                "101:유통융자상환",
                                "103:자기융자상환",
                                "105:유통대주상환",
                                "107:자기대주상환",
                                "180:예탁담보대출상환(신용)"
                            ],
                            "default": "",
                            "enum":                             [
                                {
                                    "code": "000",
                                    "name": "보통"
                                },
                                {
                                    "code": "003",
                                    "name": "유통/자기융자신규"
                                },
                                {
                                    "code": "005",
                                    "name": "유통대주신규"
                                },
                                {
                                    "code": "007",
                                    "name": "자기대주신규"
                                },
                                {
                                    "code": "101",
                                    "name": "유통융자상환"
                                },
                                {
                                    "code": "103",
                                    "name": "자기융자상환"
                                },
                                {
                                    "code": "105",
                                    "name": "유통대주상환"
                                },
                                {
                                    "code": "107",
                                    "name": "자기대주상환"
                                },
                                {
                                    "code": "180",
                                    "name": "예탁담보대출상환(신용)"
                                }
                            ]
                        },
                        {
                            "code": "LoanDt",
                            "name": "대출일",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdCndiTpCode",
                            "name": "주문조건구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                "0:없음,1:IOC,2:FOK"
                            ],
                            "default": ""
                        }
                    ]
                }
            ]
        },
        "response":         {
            "header":             [
                {
                    "code": "content-type",
                    "name": "컨텐츠타입",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "이베스트증권 제공 API를 호출하기 위한 Request Body 데이터 포맷으로 \"application/json; charset=utf-8 설정\""
                    ],
                    "default": "application/json; charset=utf-8"
                },
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cont",
                    "name": "연속 거래 여부",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "연속거래 여부",
                        "Y:연속○",
                        "N:연속×"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "",
                            "name": "다음 데이터 없음"
                        },
                        {
                            "code": "Y",
                            "name": "연속○"
                        },
                        {
                            "code": "N",
                            "name": "연속×"
                        }
                    ]
                },
                {
                    "code": "tr_cont_key",
                    "name": "연속 거래 Key",
                    "type": "string",
                    "required": true,
                    "length": 18,
                    "description":                     [
                        "연속일 경우 그전에 내려온 연속키 값 올림"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "CSPAT00601OutBlock1",
                    "name": "CSPAT00601OutBlock1",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "RecCnt",
                            "name": "레코드갯수",
                            "type": "number",
                            "required": true,
                            "length": 5,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "AcntNo",
                            "name": "계좌번호",
                            "type": "string",
                            "required": true,
                            "length": 20,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "InptPwd",
                            "name": "입력비밀번호",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "IsuNo",
                            "name": "종목번호",
                            "type": "string",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdQty",
                            "name": "주문수량",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdPrc",
                            "name": "주문가",
                            "type": "number",
                            "required": true,
                            "length": 13,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "BnsTpCode",
                            "name": "매매구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdprcPtnCode",
                            "name": "호가유형코드",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "PrgmOrdprcPtnCode",
                            "name": "프로그램호가유형코드",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "StslAbleYn",
                            "name": "공매도가능여부",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "StslOrdprcTpCode",
                            "name": "공매도호가구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "CommdaCode",
                            "name": "통신매체코드",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MgntrnCode",
                            "name": "신용거래코드",
                            "type": "string",
                            "required": true,
                            "length": 3,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "LoanDt",
                            "name": "대출일",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MbrNo",
                            "name": "회원번호",
                            "type": "string",
                            "required": true,
                            "length": 3,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdCndiTpCode",
                            "name": "주문조건구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "StrtgCode",
                            "name": "전략코드",
                            "type": "string",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "GrpId",
                            "name": "그룹ID",
                            "type": "string",
                            "required": true,
                            "length": 20,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdSeqNo",
                            "name": "주문회차",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "PtflNo",
                            "name": "포트폴리오번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "BskNo",
                            "name": "바스켓번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "TrchNo",
                            "name": "트렌치번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ItemNo",
                            "name": "아이템번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OpDrtnNo",
                            "name": "운용지시번호",
                            "type": "string",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "LpYn",
                            "name": "유동성공급자여부",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "CvrgTpCode",
                            "name": "반대매매구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                },
                {
                    "code": "CSPAT00601OutBlock2",
                    "name": "CSPAT00601OutBlock2",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "RecCnt",
                            "name": "레코드갯수",
                            "type": "number",
                            "required": true,
                            "length": 5,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdNo",
                            "name": "주문번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdTime",
                            "name": "주문시각",
                            "type": "string",
                            "required": true,
                            "length": 9,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdMktCode",
                            "name": "주문시장코드",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdPtnCode",
                            "name": "주문유형코드",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ShtnIsuNo",
                            "name": "단축종목번호",
                            "type": "string",
                            "required": true,
                            "length": 9,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MgempNo",
                            "name": "관리사원번호",
                            "type": "string",
                            "required": true,
                            "length": 9,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdAmt",
                            "name": "주문금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "SpareOrdNo",
                            "name": "예비주문번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "CvrgSeqno",
                            "name": "반대매매일련번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "RsvOrdNo",
                            "name": "예약주문번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "SpotOrdQty",
                            "name": "실물주문수량",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "RuseOrdQty",
                            "name": "재사용주문수량",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MnyOrdAmt",
                            "name": "현금주문금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "SubstOrdAmt",
                            "name": "대용주문금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "RuseOrdAmt",
                            "name": "재사용주문금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "AcntNm",
                            "name": "계좌명",
                            "type": "string",
                            "required": true,
                            "length": 40,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "IsuNm",
                            "name": "종목명",
                            "type": "string",
                            "required": true,
                            "length": 40,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                }
            ]
        }
    },
    "CSPAT00701_실전":     {
        "info":         {
            "category": "주식",
            "subCategory": "[주식] 주문",
            "name": "현물정정주문",
            "method": "post",
            "url": "/stock/order",
            "format": "JSON",
            "contentType": "application/json; charset=UTF-8",
            "countPerSecond": 3,
            "verifyDate": "",
            "downloadDate": "2024-04-12T00:00:00.000Z",
            "memo": "주문과 관련된 서비스를 확인할 수 있습니다.",
            "domain": "https://openapi.ebestsec.co.kr:8080",
            "trid": "CSPAT00701",
            "isProduct": true,
            "description": "현물정정주문"
        },
        "request":         {
            "header":             [
                {
                    "code": "ontent-type",
                    "name": "컨텐츠타입",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "이베스트증권 제공 API를 호출하기 위한 Request Body 데이터 포맷으로 \"application/json; charset=utf-8 설정\""
                    ],
                    "default": "application/json; charset=utf-8"
                },
                {
                    "code": "authorization",
                    "name": "접근토큰",
                    "type": "string",
                    "required": true,
                    "length": 1000,
                    "description":                     [
                        "OAuth 토큰이 필요한 API 경우 발급한 Access Token을 설정하기 위한 Request Heaeder Parameter"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cont",
                    "name": "연속 거래 여부",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "연속거래 여부",
                        "Y:연속○",
                        "N:연속×"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "Y",
                            "name": "연속○"
                        },
                        {
                            "code": "N",
                            "name": "연속×"
                        }
                    ]
                },
                {
                    "code": "tr_cont_key",
                    "name": "연속 거래 Key",
                    "type": "string",
                    "required": true,
                    "length": 18,
                    "description":                     [
                        "연속일 경우 그전에 내려온 연속키 값 올림"
                    ],
                    "default": ""
                },
                {
                    "code": "mac_address",
                    "name": "MAC 주소",
                    "type": "string",
                    "required": true,
                    "length": 12,
                    "description":                     [
                        "법인인 경우 필수 세팅"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "CSPAT00701InBlock1",
                    "name": "CSPAT00701InBlock1",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "OrgOrdNo",
                            "name": "원주문번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "IsuNo",
                            "name": "종목번호",
                            "type": "string",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                "주식 : 종목코드 or A+종목코드(모의투자는 A+종목코드)",
                                "ELW : J+종목코드",
                                "ETN : Q+종목코드"
                            ],
                            "default": "",
                            "enum":                             [
                                {
                                    "code": "주식",
                                    "name": "종목코드 or A+종목코드(모의투자는 A+종목코드)"
                                },
                                {
                                    "code": "ELW",
                                    "name": "J+종목코드"
                                },
                                {
                                    "code": "ETN",
                                    "name": "Q+종목코드"
                                }
                            ]
                        },
                        {
                            "code": "OrdQty",
                            "name": "주문수량",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdprcPtnCode",
                            "name": "호가유형코드",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                "00@지정가",
                                "03@시장가",
                                "05@조건부지정가",
                                "06@최유리지정가",
                                "07@최우선지정가",
                                "61@장개시전시간외종가",
                                "81@시간외종가",
                                "82@시간외단일가"
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdCndiTpCode",
                            "name": "주문조건구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                "0:없음, 1:IOC, 2:FOK"
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdPrc",
                            "name": "주문가",
                            "type": "number",
                            "required": true,
                            "length": 13,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                }
            ]
        },
        "response":         {
            "header":             [
                {
                    "code": "content-type",
                    "name": "컨텐츠타입",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "이베스트증권 제공 API를 호출하기 위한 Request Body 데이터 포맷으로 \"application/json; charset=utf-8 설정\""
                    ],
                    "default": "application/json; charset=utf-8"
                },
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cont",
                    "name": "연속 거래 여부",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "연속거래 여부",
                        "Y:연속○",
                        "N:연속×"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "",
                            "name": "다음 데이터 없음"
                        },
                        {
                            "code": "Y",
                            "name": "연속○"
                        },
                        {
                            "code": "N",
                            "name": "연속×"
                        }
                    ]
                },
                {
                    "code": "tr_cont_key",
                    "name": "연속 거래 Key",
                    "type": "string",
                    "required": true,
                    "length": 18,
                    "description":                     [
                        "연속일 경우 그전에 내려온 연속키 값 올림"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "CSPAT00701OutBlock1",
                    "name": "CSPAT00701OutBlock1",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "RecCnt",
                            "name": "레코드갯수",
                            "type": "number",
                            "required": true,
                            "length": 5,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrgOrdNo",
                            "name": "원주문번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "AcntNo",
                            "name": "계좌번호",
                            "type": "string",
                            "required": true,
                            "length": 20,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "InptPwd",
                            "name": "입력비밀번호",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "IsuNo",
                            "name": "종목번호",
                            "type": "string",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdQty",
                            "name": "주문수량",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdprcPtnCode",
                            "name": "호가유형코드",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdCndiTpCode",
                            "name": "주문조건구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdPrc",
                            "name": "주문가",
                            "type": "number",
                            "required": true,
                            "length": 13,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "CommdaCode",
                            "name": "통신매체코드",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "StrtgCode",
                            "name": "전략코드",
                            "type": "string",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "GrpId",
                            "name": "그룹ID",
                            "type": "string",
                            "required": true,
                            "length": 20,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdSeqNo",
                            "name": "주문회차",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "PtflNo",
                            "name": "포트폴리오번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "BskNo",
                            "name": "바스켓번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "TrchNo",
                            "name": "트렌치번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ItemNo",
                            "name": "아이템번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                },
                {
                    "code": "CSPAT00701OutBlock2",
                    "name": "CSPAT00701OutBlock2",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "RecCnt",
                            "name": "레코드갯수",
                            "type": "number",
                            "required": true,
                            "length": 5,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdNo",
                            "name": "주문번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "PrntOrdNo",
                            "name": "모주문번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdTime",
                            "name": "주문시각",
                            "type": "string",
                            "required": true,
                            "length": 9,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdMktCode",
                            "name": "주문시장코드",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdPtnCode",
                            "name": "주문유형코드",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ShtnIsuNo",
                            "name": "단축종목번호",
                            "type": "string",
                            "required": true,
                            "length": 9,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "PrgmOrdprcPtnCode",
                            "name": "프로그램호가유형코드",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "StslOrdprcTpCode",
                            "name": "공매도호가구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "StslAbleYn",
                            "name": "공매도가능여부",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MgntrnCode",
                            "name": "신용거래코드",
                            "type": "string",
                            "required": true,
                            "length": 3,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "LoanDt",
                            "name": "대출일",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "CvrgOrdTp",
                            "name": "반대매매주문구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "LpYn",
                            "name": "유동성공급자여부",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MgempNo",
                            "name": "관리사원번호",
                            "type": "string",
                            "required": true,
                            "length": 9,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdAmt",
                            "name": "주문금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "BnsTpCode",
                            "name": "매매구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "SpareOrdNo",
                            "name": "예비주문번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "CvrgSeqno",
                            "name": "반대매매일련번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "RsvOrdNo",
                            "name": "예약주문번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MnyOrdAmt",
                            "name": "현금주문금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "SubstOrdAmt",
                            "name": "대용주문금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "RuseOrdAmt",
                            "name": "재사용주문금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "AcntNm",
                            "name": "계좌명",
                            "type": "string",
                            "required": true,
                            "length": 40,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "IsuNm",
                            "name": "종목명",
                            "type": "string",
                            "required": true,
                            "length": 40,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                }
            ]
        }
    },
    "CSPAT00801_실전":     {
        "info":         {
            "category": "주식",
            "subCategory": "[주식] 주문",
            "name": "현물취소주문",
            "method": "post",
            "url": "/stock/order",
            "format": "JSON",
            "contentType": "application/json; charset=UTF-8",
            "countPerSecond": 3,
            "verifyDate": "",
            "downloadDate": "2024-04-12T00:00:00.000Z",
            "memo": "주문과 관련된 서비스를 확인할 수 있습니다.",
            "domain": "https://openapi.ebestsec.co.kr:8080",
            "trid": "CSPAT00801",
            "isProduct": true,
            "description": "현물취소주문"
        },
        "request":         {
            "header":             [
                {
                    "code": "content-type",
                    "name": "컨텐츠타입",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "이베스트증권 제공 API를 호출하기 위한 Request Body 데이터 포맷으로 \"application/json; charset=utf-8 설정\""
                    ],
                    "default": ""
                },
                {
                    "code": "authorization",
                    "name": "접근토큰",
                    "type": "string",
                    "required": true,
                    "length": 1000,
                    "description":                     [
                        "OAuth 토큰이 필요한 API 경우 발급한 Access Token을 설정하기 위한 Request Heaeder Parameter"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cont",
                    "name": "연속 거래 여부",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "연속거래 여부",
                        "Y:연속○",
                        "N:연속×"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "Y",
                            "name": "연속○"
                        },
                        {
                            "code": "N",
                            "name": "연속×"
                        }
                    ]
                },
                {
                    "code": "tr_cont_key",
                    "name": "연속 거래 Key",
                    "type": "string",
                    "required": true,
                    "length": 18,
                    "description":                     [
                        "연속일 경우 그전에 내려온 연속키 값 올림"
                    ],
                    "default": ""
                },
                {
                    "code": "mac_address",
                    "name": "MAC 주소",
                    "type": "string",
                    "required": true,
                    "length": 12,
                    "description":                     [
                        "법인인 경우 필수 세팅"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "CSPAT00801InBlock1",
                    "name": "CSPAT00801InBlock1",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "OrgOrdNo",
                            "name": "원주문번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "IsuNo",
                            "name": "종목번호",
                            "type": "string",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                "주식 : 종목코드 or A+종목코드(모의투자는 A+종목코드)",
                                "ELW : J+종목코드",
                                "ETN : Q+종목코드"
                            ],
                            "default": "",
                            "enum":                             [
                                {
                                    "code": "주식",
                                    "name": "종목코드 or A+종목코드(모의투자는 A+종목코드)"
                                },
                                {
                                    "code": "ELW",
                                    "name": "J+종목코드"
                                },
                                {
                                    "code": "ETN",
                                    "name": "Q+종목코드"
                                }
                            ]
                        },
                        {
                            "code": "OrdQty",
                            "name": "주문수량",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                }
            ]
        },
        "response":         {
            "header":             [
                {
                    "code": "content-type",
                    "name": "컨텐츠타입",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "이베스트증권 제공 API를 호출하기 위한 Request Body 데이터 포맷으로 \"application/json; charset=utf-8 설정\""
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cont",
                    "name": "연속 거래 여부",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "연속거래 여부",
                        "Y:연속○",
                        "N:연속×"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "",
                            "name": "다음 데이터 없음"
                        },
                        {
                            "code": "Y",
                            "name": "연속○"
                        },
                        {
                            "code": "N",
                            "name": "연속×"
                        }
                    ]
                },
                {
                    "code": "tr_cont_key",
                    "name": "연속 거래 Key",
                    "type": "string",
                    "required": true,
                    "length": 18,
                    "description":                     [
                        "연속일 경우 그전에 내려온 연속키 값 올림"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "CSPAT00801OutBlock1",
                    "name": "CSPAT00801OutBlock1",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "RecCnt",
                            "name": "레코드갯수",
                            "type": "number",
                            "required": true,
                            "length": 5,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrgOrdNo",
                            "name": "원주문번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "AcntNo",
                            "name": "계좌번호",
                            "type": "string",
                            "required": true,
                            "length": 20,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "InptPwd",
                            "name": "입력비밀번호",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "IsuNo",
                            "name": "종목번호",
                            "type": "string",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdQty",
                            "name": "주문수량",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "CommdaCode",
                            "name": "통신매체코드",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "GrpId",
                            "name": "그룹ID",
                            "type": "string",
                            "required": true,
                            "length": 20,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "StrtgCode",
                            "name": "전략코드",
                            "type": "string",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdSeqNo",
                            "name": "주문회차",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "PtflNo",
                            "name": "포트폴리오번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "BskNo",
                            "name": "바스켓번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "TrchNo",
                            "name": "트렌치번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ItemNo",
                            "name": "아이템번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                },
                {
                    "code": "CSPAT00801OutBlock2",
                    "name": "CSPAT00801OutBlock2",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "RecCnt",
                            "name": "레코드갯수",
                            "type": "number",
                            "required": true,
                            "length": 5,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdNo",
                            "name": "주문번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "PrntOrdNo",
                            "name": "모주문번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdTime",
                            "name": "주문시각",
                            "type": "string",
                            "required": true,
                            "length": 9,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdMktCode",
                            "name": "주문시장코드",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdPtnCode",
                            "name": "주문유형코드",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ShtnIsuNo",
                            "name": "단축종목번호",
                            "type": "string",
                            "required": true,
                            "length": 9,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "PrgmOrdprcPtnCode",
                            "name": "프로그램호가유형코드",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "StslOrdprcTpCode",
                            "name": "공매도호가구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "StslAbleYn",
                            "name": "공매도가능여부",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MgntrnCode",
                            "name": "신용거래코드",
                            "type": "string",
                            "required": true,
                            "length": 3,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "LoanDt",
                            "name": "대출일",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "CvrgOrdTp",
                            "name": "반대매매주문구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "LpYn",
                            "name": "유동성공급자여부",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MgempNo",
                            "name": "관리사원번호",
                            "type": "string",
                            "required": true,
                            "length": 9,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "BnsTpCode",
                            "name": "매매구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "SpareOrdNo",
                            "name": "예비주문번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "CvrgSeqno",
                            "name": "반대매매일련번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "RsvOrdNo",
                            "name": "예약주문번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "AcntNm",
                            "name": "계좌명",
                            "type": "string",
                            "required": true,
                            "length": 40,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "IsuNm",
                            "name": "종목명",
                            "type": "string",
                            "required": true,
                            "length": 40,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                }
            ]
        }
    },
    "CSPAQ12200_실전":     {
        "info":         {
            "category": "주식",
            "subCategory": "[주식] 계좌",
            "name": "현물계좌예수금 주문가능금액 총평가 조회",
            "method": "post",
            "url": "/stock/accno",
            "format": "JSON",
            "contentType": "application/json; charset=UTF-8",
            "countPerSecond": 1,
            "verifyDate": "",
            "downloadDate": "2024-04-12T00:00:00.000Z",
            "memo": "계좌별 거래내역 및 잔고 등 계좌에 관련된 서비스를 확인할 수 있습니다.",
            "domain": "https://openapi.ebestsec.co.kr:8080",
            "trid": "CSPAQ12200",
            "isProduct": true,
            "description": "현물계좌예수금 주문가능금액 총평가 조회"
        },
        "request":         {
            "header":             [
                {
                    "code": "content-type",
                    "name": "컨텐츠타입",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "이베스트증권 제공 API를 호출하기 위한 Request Body 데이터 포맷으로 \"application/json; charset=utf-8 설정\""
                    ],
                    "default": ""
                },
                {
                    "code": "authorization",
                    "name": "접근토큰",
                    "type": "string",
                    "required": true,
                    "length": 1000,
                    "description":                     [
                        "OAuth 토큰이 필요한 API 경우 발급한 Access Token을 설정하기 위한 Request Heaeder Parameter"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cont",
                    "name": "연속 거래 여부",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "연속거래 여부",
                        "Y:연속○",
                        "N:연속×"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "Y",
                            "name": "연속○"
                        },
                        {
                            "code": "N",
                            "name": "연속×"
                        }
                    ]
                },
                {
                    "code": "tr_cont_key",
                    "name": "연속 거래 Key",
                    "type": "string",
                    "required": true,
                    "length": 18,
                    "description":                     [
                        "연속일 경우 그전에 내려온 연속키 값 올림"
                    ],
                    "default": ""
                },
                {
                    "code": "mac_address",
                    "name": "MAC 주소",
                    "type": "string",
                    "required": true,
                    "length": 12,
                    "description":                     [
                        "법인인 경우 필수 세팅"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "CSPAQ12200InBlock1",
                    "name": "CSPAQ12200InBlock1",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "BalCreTp",
                            "name": "잔고생성구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                0
                            ],
                            "default": ""
                        }
                    ]
                }
            ]
        },
        "response":         {
            "header":             [
                {
                    "code": "content-type",
                    "name": "컨텐츠타입",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "이베스트증권 제공 API를 호출하기 위한 Request Body 데이터 포맷으로 \"application/json; charset=utf-8 설정\""
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cont",
                    "name": "연속 거래 여부",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "연속거래 여부",
                        "Y:연속○",
                        "N:연속×"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "",
                            "name": "다음 데이터 없음"
                        },
                        {
                            "code": "Y",
                            "name": "연속○"
                        },
                        {
                            "code": "N",
                            "name": "연속×"
                        }
                    ]
                },
                {
                    "code": "tr_cont_key",
                    "name": "연속 거래 Key",
                    "type": "string",
                    "required": true,
                    "length": 18,
                    "description":                     [
                        "연속일 경우 그전에 내려온 연속키 값 올림"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "CSPAQ12200OutBlock1",
                    "name": "CSPAQ12200OutBlock1",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "RecCnt",
                            "name": "레코드갯수",
                            "type": "number",
                            "required": true,
                            "length": 5,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MgmtBrnNo",
                            "name": "관리지점번호",
                            "type": "string",
                            "required": true,
                            "length": 3,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "AcntNo",
                            "name": "계좌번호",
                            "type": "string",
                            "required": true,
                            "length": 20,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "Pwd",
                            "name": "비밀번호",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "BalCreTp",
                            "name": "잔고생성구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                },
                {
                    "code": "CSPAQ12200OutBlock2",
                    "name": "CSPAQ12200OutBlock2",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "RecCnt",
                            "name": "레코드갯수",
                            "type": "number",
                            "required": true,
                            "length": 5,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "BrnNm",
                            "name": "지점명",
                            "type": "string",
                            "required": true,
                            "length": 40,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "AcntNm",
                            "name": "계좌명",
                            "type": "string",
                            "required": true,
                            "length": 40,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MnyOrdAbleAmt",
                            "name": "현금주문가능금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MnyoutAbleAmt",
                            "name": "출금가능금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "SeOrdAbleAmt",
                            "name": "거래소금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "KdqOrdAbleAmt",
                            "name": "코스닥금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "BalEvalAmt",
                            "name": "잔고평가금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "RcvblAmt",
                            "name": "미수금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "DpsastTotamt",
                            "name": "예탁자산총액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "PnlRat",
                            "name": "손익율",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "InvstOrgAmt",
                            "name": "투자원금",
                            "type": "number",
                            "required": true,
                            "length": 20,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "InvstPlAmt",
                            "name": "투자손익금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "CrdtPldgOrdAmt",
                            "name": "신용담보주문금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "Dps",
                            "name": "예수금",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "SubstAmt",
                            "name": "대용금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "D1Dps",
                            "name": "D1예수금",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "D2Dps",
                            "name": "D2예수금",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MnyrclAmt",
                            "name": "현금미수금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MgnMny",
                            "name": "증거금현금",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MgnSubst",
                            "name": "증거금대용",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ChckAmt",
                            "name": "수표금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "SubstOrdAbleAmt",
                            "name": "대용주문가능금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MgnRat100pctOrdAbleAmt",
                            "name": "증거금률100퍼센트주문가능금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MgnRat35ordAbleAmt",
                            "name": "증거금률35%주문가능금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MgnRat50ordAbleAmt",
                            "name": "증거금률50%주문가능금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "PrdaySellAdjstAmt",
                            "name": "전일매도정산금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "PrdayBuyAdjstAmt",
                            "name": "전일매수정산금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "CrdaySellAdjstAmt",
                            "name": "금일매도정산금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "CrdayBuyAdjstAmt",
                            "name": "금일매수정산금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "D1ovdRepayRqrdAmt",
                            "name": "D1연체변제소요금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "D2ovdRepayRqrdAmt",
                            "name": "D2연체변제소요금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "D1PrsmptWthdwAbleAmt",
                            "name": "D1추정인출가능금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "D2PrsmptWthdwAbleAmt",
                            "name": "D2추정인출가능금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "DpspdgLoanAmt",
                            "name": "예탁담보대출금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "Imreq",
                            "name": "신용설정보증금",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MloanAmt",
                            "name": "융자금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ChgAfPldgRat",
                            "name": "변경후담보비율",
                            "type": "number",
                            "required": true,
                            "length": 9,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrgPldgAmt",
                            "name": "원담보금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "SubPldgAmt",
                            "name": "부담보금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "RqrdPldgAmt",
                            "name": "소요담보금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrgPdlckAmt",
                            "name": "원담보부족금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "PdlckAmt",
                            "name": "담보부족금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "AddPldgMny",
                            "name": "추가담보현금",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "D1OrdAbleAmt",
                            "name": "D1주문가능금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "CrdtIntdltAmt",
                            "name": "신용이자미납금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "EtclndAmt",
                            "name": "기타대여금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "NtdayPrsmptCvrgAmt",
                            "name": "익일추정반대매매금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrgPldgSumAmt",
                            "name": "원담보합계금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "CrdtOrdAbleAmt",
                            "name": "신용주문가능금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "SubPldgSumAmt",
                            "name": "부담보합계금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "CrdtPldgAmtMny",
                            "name": "신용담보금현금",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "CrdtPldgSubstAmt",
                            "name": "신용담보대용금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "AddCrdtPldgMny",
                            "name": "추가신용담보현금",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "CrdtPldgRuseAmt",
                            "name": "신용담보재사용금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "AddCrdtPldgSubst",
                            "name": "추가신용담보대용",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "CslLoanAmtdt1",
                            "name": "매도대금담보대출금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "DpslRestrcAmt",
                            "name": "처분제한금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                }
            ]
        }
    },
    "CSPAQ13700_실전":     {
        "info":         {
            "category": "주식",
            "subCategory": "[주식] 계좌",
            "name": "현물계좌 주문체결내역 조회(API)",
            "method": "post",
            "url": "/stock/accno",
            "format": "JSON",
            "contentType": "application/json; charset=UTF-8",
            "countPerSecond": 1,
            "verifyDate": "",
            "downloadDate": "2024-04-12T00:00:00.000Z",
            "memo": "계좌별 거래내역 및 잔고 등 계좌에 관련된 서비스를 확인할 수 있습니다.",
            "domain": "https://openapi.ebestsec.co.kr:8080",
            "trid": "CSPAQ13700",
            "isProduct": true,
            "description": "현물계좌 주문체결내역 조회(API)"
        },
        "request":         {
            "header":             [
                {
                    "code": "content-type",
                    "name": "컨텐츠타입",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "이베스트증권 제공 API를 호출하기 위한 Request Body 데이터 포맷으로 \"application/json; charset=utf-8 설정\""
                    ],
                    "default": ""
                },
                {
                    "code": "authorization",
                    "name": "접근토큰",
                    "type": "string",
                    "required": true,
                    "length": 1000,
                    "description":                     [
                        "OAuth 토큰이 필요한 API 경우 발급한 Access Token을 설정하기 위한 Request Heaeder Parameter"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cont",
                    "name": "연속 거래 여부",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "연속거래 여부",
                        "Y:연속○",
                        "N:연속×"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "Y",
                            "name": "연속○"
                        },
                        {
                            "code": "N",
                            "name": "연속×"
                        }
                    ]
                },
                {
                    "code": "tr_cont_key",
                    "name": "연속 거래 Key",
                    "type": "string",
                    "required": true,
                    "length": 18,
                    "description":                     [
                        "연속일 경우 그전에 내려온 연속키 값 올림"
                    ],
                    "default": ""
                },
                {
                    "code": "mac_address",
                    "name": "MAC 주소",
                    "type": "string",
                    "required": true,
                    "length": 12,
                    "description":                     [
                        "법인인 경우 필수 세팅"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "CSPAQ13700InBlock1",
                    "name": "CSPAQ13700InBlock1",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "OrdMktCode",
                            "name": "주문시장코드",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                "00.전체",
                                "10.거래소",
                                "20.코스닥",
                                "30.프리보드"
                            ],
                            "default": ""
                        },
                        {
                            "code": "BnsTpCode",
                            "name": "매매구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                "0@전체",
                                "1@매도",
                                "2@매수"
                            ],
                            "default": ""
                        },
                        {
                            "code": "IsuNo",
                            "name": "종목번호",
                            "type": "string",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                "주식 : A+종목코드",
                                "ELW : J+종목코드"
                            ],
                            "default": "",
                            "enum":                             [
                                {
                                    "code": "주식",
                                    "name": "A+종목코드"
                                },
                                {
                                    "code": "ELW",
                                    "name": "J+종목코드"
                                }
                            ]
                        },
                        {
                            "code": "ExecYn",
                            "name": "체결여부",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                "0.전체",
                                "1.체결",
                                "3.미체결"
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdDt",
                            "name": "주문일",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "SrtOrdNo2",
                            "name": "시작주문번호2",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                "역순구분이 순 : 000000000",
                                "역순구분이 역순 : 999999999"
                            ],
                            "default": "",
                            "enum":                             [
                                {
                                    "code": "역순구분이 순",
                                    "name": "000000000"
                                },
                                {
                                    "code": "역순구분이 역순",
                                    "name": "999999999"
                                }
                            ]
                        },
                        {
                            "code": "BkseqTpCode",
                            "name": "역순구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                "0.역순",
                                "1.정순"
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdPtnCode",
                            "name": "주문유형코드",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                "00.전체",
                                "98.매도전체",
                                "99.매수전체",
                                "01.현금매도",
                                "02.현금매수",
                                "05.저축매도",
                                "06.저축매수",
                                "09.상품매도",
                                "10.상품매수",
                                "03.융자매도",
                                "04.융자매수",
                                "07.대주매도",
                                "08.대주매수",
                                "11.선물대용매도",
                                "13.현금매도(프)",
                                "14.현금매수(프)",
                                "17.대출",
                                "18.대출상환"
                            ],
                            "default": ""
                        }
                    ]
                }
            ]
        },
        "response":         {
            "header":             [
                {
                    "code": "content-type",
                    "name": "컨텐츠타입",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "이베스트증권 제공 API 응답 Response Body 데이터 포맷으로 \"application/json; charset=utf-8 설정\""
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cont",
                    "name": "연속 거래 여부",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "연속거래 여부",
                        "Y:연속○",
                        "N:연속×"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "",
                            "name": "다음 데이터 없음"
                        },
                        {
                            "code": "Y",
                            "name": "연속○"
                        },
                        {
                            "code": "N",
                            "name": "연속×"
                        }
                    ]
                },
                {
                    "code": "tr_cont_key",
                    "name": "연속 거래 Key",
                    "type": "string",
                    "required": true,
                    "length": 18,
                    "description":                     [
                        "연속일 경우 그전에 내려온 연속키 값 올림"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "CSPAQ13700OutBlock1",
                    "name": "CSPAQ13700OutBlock1",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "RecCnt",
                            "name": "레코드갯수",
                            "type": "number",
                            "required": true,
                            "length": 5,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "AcntNo",
                            "name": "계좌번호",
                            "type": "string",
                            "required": true,
                            "length": 20,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "InptPwd",
                            "name": "입력비밀번호",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdMktCode",
                            "name": "주문시장코드",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "BnsTpCode",
                            "name": "매매구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "IsuNo",
                            "name": "종목번호",
                            "type": "string",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ExecYn",
                            "name": "체결여부",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdDt",
                            "name": "주문일",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "SrtOrdNo2",
                            "name": "시작주문번호2",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "BkseqTpCode",
                            "name": "역순구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdPtnCode",
                            "name": "주문유형코드",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                },
                {
                    "code": "CSPAQ13700OutBlock2",
                    "name": "CSPAQ13700OutBlock2",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "RecCnt",
                            "name": "레코드갯수",
                            "type": "number",
                            "required": true,
                            "length": 5,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "SellExecAmt",
                            "name": "매도체결금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "BuyExecAmt",
                            "name": "매수체결금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "SellExecQty",
                            "name": "매도체결수량",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "BuyExecQty",
                            "name": "매수체결수량",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "SellOrdQty",
                            "name": "매도주문수량",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "BuyOrdQty",
                            "name": "매수주문수량",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                },
                {
                    "code": "CSPAQ13700OutBlock3",
                    "name": "CSPAQ13700OutBlock3",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "OrdDt",
                            "name": "주문일",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MgmtBrnNo",
                            "name": "관리지점번호",
                            "type": "string",
                            "required": true,
                            "length": 3,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdMktCode",
                            "name": "주문시장코드",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdNo",
                            "name": "주문번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrgOrdNo",
                            "name": "원주문번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "IsuNo",
                            "name": "종목번호",
                            "type": "string",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "IsuNm",
                            "name": "종목명",
                            "type": "string",
                            "required": true,
                            "length": 40,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "BnsTpCode",
                            "name": "매매구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "BnsTpNm",
                            "name": "매매구분",
                            "type": "string",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdPtnCode",
                            "name": "주문유형코드",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdPtnNm",
                            "name": "주문유형명",
                            "type": "string",
                            "required": true,
                            "length": 40,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdTrxPtnCode",
                            "name": "주문처리유형코드",
                            "type": "number",
                            "required": true,
                            "length": 9,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdTrxPtnNm",
                            "name": "주문처리유형명",
                            "type": "string",
                            "required": true,
                            "length": 50,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MrcTpCode",
                            "name": "정정취소구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MrcTpNm",
                            "name": "정정취소구분명",
                            "type": "string",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MrcQty",
                            "name": "정정취소수량",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MrcAbleQty",
                            "name": "정정취소가능수량",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdQty",
                            "name": "주문수량",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdPrc",
                            "name": "주문가격",
                            "type": "number",
                            "required": true,
                            "length": 15,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ExecQty",
                            "name": "체결수량",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ExecPrc",
                            "name": "체결가",
                            "type": "number",
                            "required": true,
                            "length": 15,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ExecTrxTime",
                            "name": "체결처리시각",
                            "type": "string",
                            "required": true,
                            "length": 9,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "LastExecTime",
                            "name": "최종체결시각",
                            "type": "string",
                            "required": true,
                            "length": 9,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdprcPtnCode",
                            "name": "호가유형코드",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdprcPtnNm",
                            "name": "호가유형명",
                            "type": "string",
                            "required": true,
                            "length": 40,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdCndiTpCode",
                            "name": "주문조건구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "AllExecQty",
                            "name": "전체체결수량",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "RegCommdaCode",
                            "name": "통신매체코드",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "CommdaNm",
                            "name": "통신매체명",
                            "type": "string",
                            "required": true,
                            "length": 40,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MbrNo",
                            "name": "회원번호",
                            "type": "string",
                            "required": true,
                            "length": 3,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "RsvOrdYn",
                            "name": "예약주문여부",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "LoanDt",
                            "name": "대출일",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdTime",
                            "name": "주문시각",
                            "type": "string",
                            "required": true,
                            "length": 9,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OpDrtnNo",
                            "name": "운용지시번호",
                            "type": "string",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OdrrId",
                            "name": "주문자ID",
                            "type": "string",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                }
            ]
        }
    },
    "CSPBQ00200_실전":     {
        "info":         {
            "category": "주식",
            "subCategory": "[주식] 계좌",
            "name": "현물계좌증거금률별주문가능수량조회",
            "method": "post",
            "url": "/stock/accno",
            "format": "JSON",
            "contentType": "application/json; charset=UTF-8",
            "countPerSecond": 1,
            "verifyDate": "",
            "downloadDate": "2024-04-12T00:00:00.000Z",
            "memo": "계좌별 거래내역 및 잔고 등 계좌에 관련된 서비스를 확인할 수 있습니다.",
            "domain": "https://openapi.ebestsec.co.kr:8080",
            "trid": "CSPBQ00200",
            "isProduct": true,
            "description": "현물계좌증거금률별주문가능수량조회"
        },
        "request":         {
            "header":             [
                {
                    "code": "content-type",
                    "name": "컨텐츠타입",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "이베스트증권 제공 API를 호출하기 위한 Request Body 데이터 포맷으로 \"application/json; charset=utf-8 설정\""
                    ],
                    "default": ""
                },
                {
                    "code": "authorization",
                    "name": "접근토큰",
                    "type": "string",
                    "required": true,
                    "length": 1000,
                    "description":                     [
                        "OAuth 토큰이 필요한 API 경우 발급한 Access Token을 설정하기 위한 Request Heaeder Parameter"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cont",
                    "name": "연속 거래 여부",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "연속거래 여부",
                        "Y:연속○",
                        "N:연속×"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "Y",
                            "name": "연속○"
                        },
                        {
                            "code": "N",
                            "name": "연속×"
                        }
                    ]
                },
                {
                    "code": "tr_cont_key",
                    "name": "연속 거래 Key",
                    "type": "string",
                    "required": true,
                    "length": 18,
                    "description":                     [
                        "연속일 경우 그전에 내려온 연속키 값 올림"
                    ],
                    "default": ""
                },
                {
                    "code": "mac_address",
                    "name": "MAC 주소",
                    "type": "string",
                    "required": true,
                    "length": 12,
                    "description":                     [
                        "법인인 경우 필수 세팅"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "CSPBQ00200InBlock1",
                    "name": "CSPBQ00200InBlock1",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "BnsTpCode",
                            "name": "매매구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                "1@매도, 2@매수"
                            ],
                            "default": ""
                        },
                        {
                            "code": "IsuNo",
                            "name": "종목번호",
                            "type": "string",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdPrc",
                            "name": "주문가격",
                            "type": "number",
                            "required": true,
                            "length": 15,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                }
            ]
        },
        "response":         {
            "header":             [
                {
                    "code": "content-type",
                    "name": "컨텐츠타입",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "이베스트증권 제공 API를 호출하기 위한 Request Body 데이터 포맷으로 \"application/json; charset=utf-8 설정\""
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cont",
                    "name": "연속 거래 여부",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "연속거래 여부",
                        "Y:연속○",
                        "N:연속×"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "",
                            "name": "다음 데이터 없음"
                        },
                        {
                            "code": "Y",
                            "name": "연속○"
                        },
                        {
                            "code": "N",
                            "name": "연속×"
                        }
                    ]
                },
                {
                    "code": "tr_cont_key",
                    "name": "연속 거래 Key",
                    "type": "string",
                    "required": true,
                    "length": 18,
                    "description":                     [
                        "연속일 경우 그전에 내려온 연속키 값 올림"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "CSPBQ00200OutBlock1",
                    "name": "CSPBQ00200OutBlock1",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "RecCnt",
                            "name": "레코드갯수",
                            "type": "number",
                            "required": true,
                            "length": 5,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "BnsTpCode",
                            "name": "매매구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "AcntNo",
                            "name": "계좌번호",
                            "type": "string",
                            "required": true,
                            "length": 20,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "InptPwd",
                            "name": "입력비밀번호",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "IsuNo",
                            "name": "종목번호",
                            "type": "string",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdPrc",
                            "name": "주문가격",
                            "type": "number",
                            "required": true,
                            "length": 15,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "RegCommdaCode",
                            "name": "통신매체코드",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                },
                {
                    "code": "CSPBQ00200OutBlock2",
                    "name": "CSPBQ00200OutBlock2",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "RecCnt",
                            "name": "레코드갯수",
                            "type": "number",
                            "required": true,
                            "length": 5,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "AcntNm",
                            "name": "계좌명",
                            "type": "string",
                            "required": true,
                            "length": 40,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "IsuNm",
                            "name": "종목명",
                            "type": "string",
                            "required": true,
                            "length": 40,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "Dps",
                            "name": "예수금",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "SubstAmt",
                            "name": "대용금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "CrdtPldgRuseAmt",
                            "name": "신용담보재사용금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MnyOrdAbleAmt",
                            "name": "현금주문가능금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "SubstOrdAbleAmt",
                            "name": "대용주문가능금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MnyMgn",
                            "name": "현금증거금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "SubstMgn",
                            "name": "대용증거금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "SeOrdAbleAmt",
                            "name": "거래소금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "KdqOrdAbleAmt",
                            "name": "코스닥금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "PrsmptDpsD1",
                            "name": "추정예수금(D+1)",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "PrsmptDpsD2",
                            "name": "추정예수금(D+2)",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MnyoutAbleAmt",
                            "name": "출금가능금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "RcvblAmt",
                            "name": "미수금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "CmsnRat",
                            "name": "수수료율",
                            "type": "number",
                            "required": true,
                            "length": 15,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "AddLevyAmt",
                            "name": "추가징수금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "RuseObjAmt",
                            "name": "재사용대상금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MnyRuseObjAmt",
                            "name": "현금재사용대상금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "FirmMgnRat",
                            "name": "이용사증거금률",
                            "type": "number",
                            "required": true,
                            "length": 7,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "SubstRuseObjAmt",
                            "name": "대용재사용대상금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "IsuMgnRat",
                            "name": "종목증거금률",
                            "type": "number",
                            "required": true,
                            "length": 7,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "AcntMgnRat",
                            "name": "계좌증거금률",
                            "type": "number",
                            "required": true,
                            "length": 7,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "TrdMgnrt",
                            "name": "거래증거금률",
                            "type": "number",
                            "required": true,
                            "length": 7,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "Cmsn",
                            "name": "수수료",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MgnRat20pctOrdAbleAmt",
                            "name": "증거금률20퍼센트주문가능금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MgnRat20OrdAbleQty",
                            "name": "증거금률100퍼센트현금주문가능수량",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MgnRat30pctOrdAbleAmt",
                            "name": "증거금률30퍼센트주문가능금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MgnRat30OrdAbleQty",
                            "name": "증거금률30퍼센트주문가능수량",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MgnRat40pctOrdAbleAmt",
                            "name": "증거금률40퍼센트주문가능금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MgnRat40OrdAbleQty",
                            "name": "증거금률40퍼센트주문가능수량",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MgnRat100pctOrdAbleAmt",
                            "name": "증거금률100퍼센트주문가능금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MgnRat100OrdAbleQty",
                            "name": "증거금률100퍼센트주문가능수량",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MgnRat100MnyOrdAbleAmt",
                            "name": "증거금률100퍼센트현금주문가능금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MgnRat100MnyOrdAbleQty",
                            "name": "증거금률100퍼센트현금주문가능수량",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MgnRat20pctRuseAbleAmt",
                            "name": "증거금률20퍼센트재사용가능금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MgnRat30pctRuseAbleAmt",
                            "name": "증거금률30퍼센트재사용가능금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MgnRat40pctRuseAbleAmt",
                            "name": "증거금률40퍼센트재사용가능금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "MgnRat100pctRuseAbleAmt",
                            "name": "증거금률100퍼센트재사용가능금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdAbleQty",
                            "name": "주문가능수량",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "OrdAbleAmt",
                            "name": "주문가능금액",
                            "type": "number",
                            "required": true,
                            "length": 16,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                }
            ]
        }
    },
    "t0150_실전":     {
        "info":         {
            "category": "주식",
            "subCategory": "[주식] 계좌",
            "name": "주식당일매매일지/수수료",
            "method": "post",
            "url": "/stock/accno",
            "format": "JSON",
            "contentType": "application/json; charset=UTF-8",
            "countPerSecond": 2,
            "verifyDate": "",
            "downloadDate": "2024-04-12T00:00:00.000Z",
            "memo": "계좌별 거래내역 및 잔고 등 계좌에 관련된 서비스를 확인할 수 있습니다.",
            "domain": "https://openapi.ebestsec.co.kr:8080",
            "trid": "t0150",
            "isProduct": true,
            "description": "주식당일매매일지/수수료"
        },
        "request":         {
            "header":             [
                {
                    "code": "content-type",
                    "name": "컨텐츠타입",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "이베스트증권 제공 API를 호출하기 위한 Request Body 데이터 포맷으로 \"application/json; charset=utf-8 설정\""
                    ],
                    "default": ""
                },
                {
                    "code": "authorization",
                    "name": "접근토큰",
                    "type": "string",
                    "required": true,
                    "length": 1000,
                    "description":                     [
                        "OAuth 토큰이 필요한 API 경우 발급한 Access Token을 설정하기 위한 Request Heaeder Parameter"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cont",
                    "name": "연속 거래 여부",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "연속거래 여부",
                        "Y:연속○",
                        "N:연속×"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "Y",
                            "name": "연속○"
                        },
                        {
                            "code": "N",
                            "name": "연속×"
                        }
                    ]
                },
                {
                    "code": "tr_cont_key",
                    "name": "연속 거래 Key",
                    "type": "string",
                    "required": true,
                    "length": 18,
                    "description":                     [
                        "연속일 경우 그전에 내려온 연속키 값 올림"
                    ],
                    "default": ""
                },
                {
                    "code": "mac_address",
                    "name": "MAC 주소",
                    "type": "string",
                    "required": true,
                    "length": 12,
                    "description":                     [
                        "법인인 경우 필수 세팅"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "t0150InBlock",
                    "name": "t0150InBlock",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "cts_medosu",
                            "name": "CTS_매매구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                "연속조회시 OutBlock의 동일필드 입력"
                            ],
                            "default": ""
                        },
                        {
                            "code": "cts_expcode",
                            "name": "CTS_종목번호",
                            "type": "string",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                "연속조회시 OutBlock의 동일필드 입력"
                            ],
                            "default": ""
                        },
                        {
                            "code": "cts_price",
                            "name": "CTS_단가",
                            "type": "string",
                            "required": true,
                            "length": 9,
                            "description":                             [
                                "연속조회시 OutBlock의 동일필드 입력"
                            ],
                            "default": ""
                        },
                        {
                            "code": "cts_middiv",
                            "name": "CTS_매체",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                "연속조회시 OutBlock의 동일필드 입력"
                            ],
                            "default": ""
                        }
                    ]
                }
            ]
        },
        "response":         {
            "header":             [
                {
                    "code": "content-type",
                    "name": "컨텐츠타입",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "이베스트증권 제공 API를 호출하기 위한 Request Body 데이터 포맷으로 \"application/json; charset=utf-8 설정\""
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cont",
                    "name": "연속 거래 여부",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "연속거래 여부",
                        "Y:연속○",
                        "N:연속×"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "",
                            "name": "다음 데이터 없음"
                        },
                        {
                            "code": "Y",
                            "name": "연속○"
                        },
                        {
                            "code": "N",
                            "name": "연속×"
                        }
                    ]
                },
                {
                    "code": "tr_cont_key",
                    "name": "연속 거래 Key",
                    "type": "string",
                    "required": true,
                    "length": 18,
                    "description":                     [
                        "연속일 경우 그전에 내려온 연속키 값 올림"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "t0150OutBlock",
                    "name": "t0150OutBlock",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "mdqty",
                            "name": "매도수량",
                            "type": "number",
                            "required": true,
                            "length": 9,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "mdamt",
                            "name": "매도약정금액",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "mdfee",
                            "name": "매도수수료",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "mdtax",
                            "name": "매도거래세",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "mdargtax",
                            "name": "매도농특세",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "tmdtax",
                            "name": "매도제비용합",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "mdadjamt",
                            "name": "매도정산금액",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "msqty",
                            "name": "매수수량",
                            "type": "number",
                            "required": true,
                            "length": 9,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "msamt",
                            "name": "매수약정금액",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "msfee",
                            "name": "매수수수료",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "tmstax",
                            "name": "매수제비용합",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "msadjamt",
                            "name": "매수정산금액",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "tqty",
                            "name": "합계수량",
                            "type": "number",
                            "required": true,
                            "length": 9,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "tamt",
                            "name": "합계약정금액",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "tfee",
                            "name": "합계수수료",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "tottax",
                            "name": "합계거래세",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "targtax",
                            "name": "합계농특세",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ttax",
                            "name": "합계제비용합",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "tadjamt",
                            "name": "합계정산금액",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "cts_medosu",
                            "name": "CTS_매매구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "cts_expcode",
                            "name": "CTS_종목번호",
                            "type": "string",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "cts_price",
                            "name": "CTS_단가",
                            "type": "string",
                            "required": true,
                            "length": 9,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "cts_middiv",
                            "name": "CTS_매체",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                },
                {
                    "code": "t0150OutBlock1",
                    "name": "t0150OutBlock1",
                    "type": "array",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "medosu",
                            "name": "매매구분",
                            "type": "string",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "expcode",
                            "name": "종목번호",
                            "type": "string",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "qty",
                            "name": "수량",
                            "type": "number",
                            "required": true,
                            "length": 9,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "price",
                            "name": "단가",
                            "type": "number",
                            "required": true,
                            "length": 9,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "amt",
                            "name": "약정금액",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "fee",
                            "name": "수수료",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "tax",
                            "name": "거래세",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "argtax",
                            "name": "농특세",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "adjamt",
                            "name": "정산금액",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "middiv",
                            "name": "매체",
                            "type": "string",
                            "required": true,
                            "length": 20,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                }
            ]
        }
    },
    "t1102_실전":     {
        "info":         {
            "category": "주식",
            "subCategory": "[주식] 시세",
            "name": "주식현재가(시세)조회",
            "method": "post",
            "url": "/stock/market-data",
            "format": "JSON",
            "contentType": "application/json; charset=UTF-8",
            "countPerSecond": 3,
            "verifyDate": "",
            "downloadDate": "2024-04-12T00:00:00.000Z",
            "memo": "개별종목 현재가 및 기간별 시세 등 종목별 시세를 확인할 수 있습니다.",
            "domain": "https://openapi.ebestsec.co.kr:8080",
            "trid": "t1102",
            "isProduct": true,
            "description": "주식현재가(시세)조회"
        },
        "request":         {
            "header":             [
                {
                    "code": "content-type",
                    "name": "컨텐츠타입",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "이베스트증권 제공 API를 호출하기 위한 Request Body 데이터 포맷으로 \"application/json; charset=utf-8 설정\""
                    ],
                    "default": ""
                },
                {
                    "code": "authorization",
                    "name": "접근토큰",
                    "type": "string",
                    "required": true,
                    "length": 1000,
                    "description":                     [
                        "OAuth 토큰이 필요한 API 경우 발급한 Access Token을 설정하기 위한 Request Heaeder Parameter"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cont",
                    "name": "연속 거래 여부",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "연속거래 여부",
                        "Y:연속○",
                        "N:연속×"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "Y",
                            "name": "연속○"
                        },
                        {
                            "code": "N",
                            "name": "연속×"
                        }
                    ]
                },
                {
                    "code": "tr_cont_key",
                    "name": "연속 거래 Key",
                    "type": "string",
                    "required": true,
                    "length": 18,
                    "description":                     [
                        "연속일 경우 그전에 내려온 연속키 값 올림"
                    ],
                    "default": ""
                },
                {
                    "code": "mac_address",
                    "name": "MAC 주소",
                    "type": "string",
                    "required": true,
                    "length": 12,
                    "description":                     [
                        "법인인 경우 필수 세팅"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "t1102InBlock",
                    "name": "t1102InBlock",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "shcode",
                            "name": "단축코드",
                            "type": "string",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                }
            ]
        },
        "response":         {
            "header":             [
                {
                    "code": "content-type",
                    "name": "컨텐츠타입",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "이베스트증권 제공 API를 호출하기 위한 Request Body 데이터 포맷으로 \"application/json; charset=utf-8 설정\""
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cont",
                    "name": "연속 거래 여부",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "연속거래 여부",
                        "Y:연속○",
                        "N:연속×"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "",
                            "name": "다음 데이터 없음"
                        },
                        {
                            "code": "Y",
                            "name": "연속○"
                        },
                        {
                            "code": "N",
                            "name": "연속×"
                        }
                    ]
                },
                {
                    "code": "tr_cont_key",
                    "name": "연속 거래 Key",
                    "type": "string",
                    "required": true,
                    "length": 18,
                    "description":                     [
                        "연속일 경우 그전에 내려온 연속키 값 올림"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "t1102OutBlock",
                    "name": "t1102OutBlock",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "hname",
                            "name": "한글명",
                            "type": "string",
                            "required": true,
                            "length": 20,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "price",
                            "name": "현재가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "sign",
                            "name": "전일대비구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "change",
                            "name": "전일대비",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "diff",
                            "name": "등락율",
                            "type": "number",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "volume",
                            "name": "누적거래량",
                            "type": "number",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "recprice",
                            "name": "기준가(평가가격)",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "avg",
                            "name": "가중평균",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "uplmtprice",
                            "name": "상한가(최고호가가격)",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "dnlmtprice",
                            "name": "하한가(최저호가가격)",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "jnilvolume",
                            "name": "전일거래량",
                            "type": "number",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "volumediff",
                            "name": "거래량차",
                            "type": "number",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "open",
                            "name": "시가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "opentime",
                            "name": "시가시간",
                            "type": "string",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "high",
                            "name": "고가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "hightime",
                            "name": "고가시간",
                            "type": "string",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "low",
                            "name": "저가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "lowtime",
                            "name": "저가시간",
                            "type": "string",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "high52w",
                            "name": "52최고가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "high52wdate",
                            "name": "52최고가일",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "low52w",
                            "name": "52최저가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "low52wdate",
                            "name": "52최저가일",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "exhratio",
                            "name": "소진율",
                            "type": "number",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "per",
                            "name": "PER",
                            "type": "number",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "pbrx",
                            "name": "PBRX",
                            "type": "number",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "listing",
                            "name": "상장주식수(천)",
                            "type": "number",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "jkrate",
                            "name": "증거금율",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "memedan",
                            "name": "수량단위",
                            "type": "string",
                            "required": true,
                            "length": 5,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "offernocd1",
                            "name": "매도증권사코드1",
                            "type": "string",
                            "required": true,
                            "length": 3,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "bidnocd1",
                            "name": "매수증권사코드1",
                            "type": "string",
                            "required": true,
                            "length": 3,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "offerno1",
                            "name": "매도증권사명1",
                            "type": "string",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "bidno1",
                            "name": "매수증권사명1",
                            "type": "string",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "dvol1",
                            "name": "총매도수량1",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "svol1",
                            "name": "총매수수량1",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "dcha1",
                            "name": "매도증감1",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "scha1",
                            "name": "매수증감1",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ddiff1",
                            "name": "매도비율1",
                            "type": "number",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "sdiff1",
                            "name": "매수비율1",
                            "type": "number",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "offernocd2",
                            "name": "매도증권사코드2",
                            "type": "string",
                            "required": true,
                            "length": 3,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "bidnocd2",
                            "name": "매수증권사코드2",
                            "type": "string",
                            "required": true,
                            "length": 3,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "offerno2",
                            "name": "매도증권사명2",
                            "type": "string",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "bidno2",
                            "name": "매수증권사명2",
                            "type": "string",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "dvol2",
                            "name": "총매도수량2",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "svol2",
                            "name": "총매수수량2",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "dcha2",
                            "name": "매도증감2",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "scha2",
                            "name": "매수증감2",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ddiff2",
                            "name": "매도비율2",
                            "type": "number",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "sdiff2",
                            "name": "매수비율2",
                            "type": "number",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "offernocd3",
                            "name": "매도증권사코드3",
                            "type": "string",
                            "required": true,
                            "length": 3,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "bidnocd3",
                            "name": "매수증권사코드3",
                            "type": "string",
                            "required": true,
                            "length": 3,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "offerno3",
                            "name": "매도증권사명3",
                            "type": "string",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "bidno3",
                            "name": "매수증권사명3",
                            "type": "string",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "dvol3",
                            "name": "총매도수량3",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "svol3",
                            "name": "총매수수량3",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "dcha3",
                            "name": "매도증감3",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "scha3",
                            "name": "매수증감3",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ddiff3",
                            "name": "매도비율3",
                            "type": "number",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "sdiff3",
                            "name": "매수비율3",
                            "type": "number",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "offernocd4",
                            "name": "매도증권사코드4",
                            "type": "string",
                            "required": true,
                            "length": 3,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "bidnocd4",
                            "name": "매수증권사코드4",
                            "type": "string",
                            "required": true,
                            "length": 3,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "offerno4",
                            "name": "매도증권사명4",
                            "type": "string",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "bidno4",
                            "name": "매수증권사명4",
                            "type": "string",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "dvol4",
                            "name": "총매도수량4",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "svol4",
                            "name": "총매수수량4",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "dcha4",
                            "name": "매도증감4",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "scha4",
                            "name": "매수증감4",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ddiff4",
                            "name": "매도비율4",
                            "type": "number",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "sdiff4",
                            "name": "매수비율4",
                            "type": "number",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "offernocd5",
                            "name": "매도증권사코드5",
                            "type": "string",
                            "required": true,
                            "length": 3,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "bidnocd5",
                            "name": "매수증권사코드5",
                            "type": "string",
                            "required": true,
                            "length": 3,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "offerno5",
                            "name": "매도증권사명5",
                            "type": "string",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "bidno5",
                            "name": "매수증권사명5",
                            "type": "string",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "dvol5",
                            "name": "총매도수량5",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "svol5",
                            "name": "총매수수량5",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "dcha5",
                            "name": "매도증감5",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "scha5",
                            "name": "매수증감5",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ddiff5",
                            "name": "매도비율5",
                            "type": "number",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "sdiff5",
                            "name": "매수비율5",
                            "type": "number",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "fwdvl",
                            "name": "외국계매도합계수량",
                            "type": "number",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ftradmdcha",
                            "name": "외국계매도직전대비",
                            "type": "number",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ftradmddiff",
                            "name": "외국계매도비율",
                            "type": "number",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "fwsvl",
                            "name": "외국계매수합계수량",
                            "type": "number",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ftradmscha",
                            "name": "외국계매수직전대비",
                            "type": "number",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ftradmsdiff",
                            "name": "외국계매수비율",
                            "type": "number",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "vol",
                            "name": "회전율",
                            "type": "number",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "shcode",
                            "name": "단축코드",
                            "type": "string",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "value",
                            "name": "누적거래대금",
                            "type": "number",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "jvolume",
                            "name": "전일동시간거래량",
                            "type": "number",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "highyear",
                            "name": "연중최고가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "highyeardate",
                            "name": "연중최고일자",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "lowyear",
                            "name": "연중최저가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "lowyeardate",
                            "name": "연중최저일자",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "target",
                            "name": "목표가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "capital",
                            "name": "자본금",
                            "type": "number",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "abscnt",
                            "name": "유동주식수",
                            "type": "number",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "parprice",
                            "name": "액면가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "gsmm",
                            "name": "결산월",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "subprice",
                            "name": "대용가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "total",
                            "name": "시가총액",
                            "type": "number",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "listdate",
                            "name": "상장일",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "name",
                            "name": "전분기명",
                            "type": "string",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "bfsales",
                            "name": "전분기매출액",
                            "type": "number",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "bfoperatingincome",
                            "name": "전분기영업이익",
                            "type": "number",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "bfordinaryincome",
                            "name": "전분기경상이익",
                            "type": "number",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "bfnetincome",
                            "name": "전분기순이익",
                            "type": "number",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "bfeps",
                            "name": "전분기EPS",
                            "type": "number",
                            "required": true,
                            "length": 13,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "name2",
                            "name": "전전분기명",
                            "type": "string",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "bfsales2",
                            "name": "전전분기매출액",
                            "type": "number",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "bfoperatingincome2",
                            "name": "전전분기영업이익",
                            "type": "number",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "bfordinaryincome2",
                            "name": "전전분기경상이익",
                            "type": "number",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "bfnetincome2",
                            "name": "전전분기순이익",
                            "type": "number",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "bfeps2",
                            "name": "전전분기EPS",
                            "type": "number",
                            "required": true,
                            "length": 13,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "salert",
                            "name": "전년대비매출액",
                            "type": "number",
                            "required": true,
                            "length": 7,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "opert",
                            "name": "전년대비영업이익",
                            "type": "number",
                            "required": true,
                            "length": 7,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ordrt",
                            "name": "전년대비경상이익",
                            "type": "number",
                            "required": true,
                            "length": 7,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "netrt",
                            "name": "전년대비순이익",
                            "type": "number",
                            "required": true,
                            "length": 7,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "epsrt",
                            "name": "전년대비EPS",
                            "type": "number",
                            "required": true,
                            "length": 7,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "info1",
                            "name": "락구분",
                            "type": "string",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "info2",
                            "name": "관리/급등구분",
                            "type": "string",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "info3",
                            "name": "정지/연장구분",
                            "type": "string",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "info4",
                            "name": "투자/불성실구분",
                            "type": "string",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "janginfo",
                            "name": "장구분",
                            "type": "string",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "t_per",
                            "name": "T.PER",
                            "type": "number",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "tonghwa",
                            "name": "통화ISO코드",
                            "type": "string",
                            "required": true,
                            "length": 3,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "dval1",
                            "name": "총매도대금1",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "sval1",
                            "name": "총매수대금1",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "dval2",
                            "name": "총매도대금2",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "sval2",
                            "name": "총매수대금2",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "dval3",
                            "name": "총매도대금3",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "sval3",
                            "name": "총매수대금3",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "dval4",
                            "name": "총매도대금4",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "sval4",
                            "name": "총매수대금4",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "dval5",
                            "name": "총매도대금5",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "sval5",
                            "name": "총매수대금5",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "davg1",
                            "name": "총매도평단가1",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "savg1",
                            "name": "총매수평단가1",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "davg2",
                            "name": "총매도평단가2",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "savg2",
                            "name": "총매수평단가2",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "davg3",
                            "name": "총매도평단가3",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "savg3",
                            "name": "총매수평단가3",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "davg4",
                            "name": "총매도평단가4",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "savg4",
                            "name": "총매수평단가4",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "davg5",
                            "name": "총매도평단가5",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "savg5",
                            "name": "총매수평단가5",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ftradmdval",
                            "name": "외국계매도대금",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ftradmsval",
                            "name": "외국계매수대금",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ftradmdvag",
                            "name": "외국계매도평단가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ftradmsvag",
                            "name": "외국계매수평단가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "info5",
                            "name": "투자주의환기",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "spac_gubun",
                            "name": "기업인수목적회사여부",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "issueprice",
                            "name": "발행가격",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "alloc_gubun",
                            "name": "배분적용구분코드(1:배분발생2:배분해제그외:미발생)",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "alloc_text",
                            "name": "배분적용구분",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "shterm_text",
                            "name": "단기과열/VI발동",
                            "type": "string",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "svi_uplmtprice",
                            "name": "정적VI상한가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "svi_dnlmtprice",
                            "name": "정적VI하한가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "low_lqdt_gu",
                            "name": "저유동성종목여부",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "abnormal_rise_gu",
                            "name": "이상급등종목여부",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "lend_text",
                            "name": "대차불가표시",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ty_text",
                            "name": "ETF/ETN투자유의",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                }
            ]
        }
    },
    "t1305_실전":     {
        "info":         {
            "category": "주식",
            "subCategory": "[주식] 시세",
            "name": "기간별주가",
            "method": "post",
            "url": "/stock/market-data",
            "format": "JSON",
            "contentType": "application/json; charset=UTF-8",
            "countPerSecond": 1,
            "verifyDate": "",
            "downloadDate": "2024-04-12T00:00:00.000Z",
            "memo": "개별종목 현재가 및 기간별 시세 등 종목별 시세를 확인할 수 있습니다.",
            "domain": "https://openapi.ebestsec.co.kr:8080",
            "trid": "t1305",
            "isProduct": true,
            "description": "기간별주가"
        },
        "request":         {
            "header":             [
                {
                    "code": "content-type",
                    "name": "컨텐츠타입",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "이베스트증권 제공 API를 호출하기 위한 Request Body 데이터 포맷으로 \"application/json; charset=utf-8 설정\""
                    ],
                    "default": ""
                },
                {
                    "code": "authorization",
                    "name": "접근토큰",
                    "type": "string",
                    "required": true,
                    "length": 1000,
                    "description":                     [
                        "OAuth 토큰이 필요한 API 경우 발급한 Access Token을 설정하기 위한 Request Heaeder Parameter"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cont",
                    "name": "연속 거래 여부",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "연속거래 여부",
                        "Y:연속○",
                        "N:연속×"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "Y",
                            "name": "연속○"
                        },
                        {
                            "code": "N",
                            "name": "연속×"
                        }
                    ]
                },
                {
                    "code": "tr_cont_key",
                    "name": "연속 거래 Key",
                    "type": "string",
                    "required": true,
                    "length": 18,
                    "description":                     [
                        "연속일 경우 그전에 내려온 연속키 값 올림"
                    ],
                    "default": ""
                },
                {
                    "code": "mac_address",
                    "name": "MAC 주소",
                    "type": "string",
                    "required": true,
                    "length": 12,
                    "description":                     [
                        "법인인 경우 필수 세팅"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "t1305InBlock",
                    "name": "t1305InBlock",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "shcode",
                            "name": "단축코드",
                            "type": "string",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "dwmcode",
                            "name": "일주월구분",
                            "type": "number",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                "1@일, 2@주, 3@월"
                            ],
                            "default": ""
                        },
                        {
                            "code": "date",
                            "name": "날짜",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                "처음 조회시는 Space 연속 조회시에 이전 조회한 OutBlock의 date 값으로 설정"
                            ],
                            "default": ""
                        },
                        {
                            "code": "idx",
                            "name": "IDX",
                            "type": "number",
                            "required": true,
                            "length": 4,
                            "description":                             [
                                "사용안함(Space)"
                            ],
                            "default": ""
                        },
                        {
                            "code": "cnt",
                            "name": "건수",
                            "type": "number",
                            "required": true,
                            "length": 4,
                            "description":                             [
                                "1 이상"
                            ],
                            "default": ""
                        }
                    ]
                }
            ]
        },
        "response":         {
            "header":             [
                {
                    "code": "content-type",
                    "name": "컨텐츠타입",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "이베스트증권 제공 API를 호출하기 위한 Request Body 데이터 포맷으로 \"application/json; charset=utf-8 설정\""
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cont",
                    "name": "연속 거래 여부",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "연속거래 여부",
                        "Y:연속○",
                        "N:연속×"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "",
                            "name": "다음 데이터 없음"
                        },
                        {
                            "code": "Y",
                            "name": "연속○"
                        },
                        {
                            "code": "N",
                            "name": "연속×"
                        }
                    ]
                },
                {
                    "code": "tr_cont_key",
                    "name": "연속 거래 Key",
                    "type": "string",
                    "required": true,
                    "length": 18,
                    "description":                     [
                        "연속일 경우 그전에 내려온 연속키 값 올림"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "t1305OutBlock",
                    "name": "t1305OutBlock",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "cnt",
                            "name": "CNT",
                            "type": "number",
                            "required": true,
                            "length": 4,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "date",
                            "name": "날짜",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "idx",
                            "name": "IDX",
                            "type": "number",
                            "required": true,
                            "length": 4,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                },
                {
                    "code": "t1305OutBlock1",
                    "name": "t1305OutBlock1",
                    "type": "array",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "date",
                            "name": "날짜",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "open",
                            "name": "시가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "high",
                            "name": "고가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "low",
                            "name": "저가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "close",
                            "name": "종가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "sign",
                            "name": "전일대비구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "change",
                            "name": "전일대비",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "diff",
                            "name": "등락율",
                            "type": "number",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "volume",
                            "name": "누적거래량",
                            "type": "number",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "diff_vol",
                            "name": "거래증가율",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "chdegree",
                            "name": "체결강도",
                            "type": "number",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "sojinrate",
                            "name": "소진율",
                            "type": "number",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "changerate",
                            "name": "회전율",
                            "type": "number",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "fpvolume",
                            "name": "외인순매수",
                            "type": "number",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "covolume",
                            "name": "기관순매수",
                            "type": "number",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "shcode",
                            "name": "종목코드",
                            "type": "string",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "value",
                            "name": "누적거래대금(단위:백만)",
                            "type": "number",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ppvolume",
                            "name": "개인순매수",
                            "type": "number",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "o_sign",
                            "name": "시가대비구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "o_change",
                            "name": "시가대비",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "o_diff",
                            "name": "시가기준등락율",
                            "type": "number",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "h_sign",
                            "name": "고가대비구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "h_change",
                            "name": "고가대비",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "h_diff",
                            "name": "고가기준등락율",
                            "type": "number",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "l_sign",
                            "name": "저가대비구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "l_change",
                            "name": "저가대비",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "l_diff",
                            "name": "저가기준등락율",
                            "type": "number",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "marketcap",
                            "name": "시가총액(단위:백만)",
                            "type": "number",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                }
            ]
        }
    },
    "t8410_실전":     {
        "info":         {
            "category": "주식",
            "subCategory": "[주식] 차트",
            "name": "API전용주식챠트(일주월년)",
            "method": "post",
            "url": "/stock/chart",
            "format": "JSON",
            "contentType": "application/json; charset=UTF-8",
            "countPerSecond": 1,
            "verifyDate": "",
            "downloadDate": "2024-04-12T00:00:00.000Z",
            "memo": "개별종목 시세차트 및 기간별투자자매매 차트를 확인할 수 있는 서비스입니다.",
            "domain": "https://openapi.ebestsec.co.kr:8080",
            "trid": "t8410",
            "isProduct": true,
            "description": "API전용주식챠트(일주월년)"
        },
        "request":         {
            "header":             [
                {
                    "code": "content-type",
                    "name": "컨텐츠타입",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "이베스트증권 제공 API를 호출하기 위한 Request Body 데이터 포맷으로 \"application/json; charset=utf-8 설정\""
                    ],
                    "default": ""
                },
                {
                    "code": "authorization",
                    "name": "접근토큰",
                    "type": "string",
                    "required": true,
                    "length": 1000,
                    "description":                     [
                        "OAuth 토큰이 필요한 API 경우 발급한 Access Token을 설정하기 위한 Request Heaeder Parameter"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cont",
                    "name": "연속 거래 여부",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "연속거래 여부",
                        "Y:연속○",
                        "N:연속×"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "Y",
                            "name": "연속○"
                        },
                        {
                            "code": "N",
                            "name": "연속×"
                        }
                    ]
                },
                {
                    "code": "tr_cont_key",
                    "name": "연속 거래 Key",
                    "type": "string",
                    "required": true,
                    "length": 18,
                    "description":                     [
                        "연속일 경우 그전에 내려온 연속키 값 올림"
                    ],
                    "default": ""
                },
                {
                    "code": "mac_address",
                    "name": "MAC 주소",
                    "type": "string",
                    "required": true,
                    "length": 12,
                    "description":                     [
                        "법인인 경우 필수 세팅"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "t8410InBlock",
                    "name": "t8410InBlock",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "shcode",
                            "name": "단축코드",
                            "type": "string",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "gubun",
                            "name": "주기구분(2:일3:주4:월5:년)",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "qrycnt",
                            "name": "요청건수(최대-압축:2000비압축:500)",
                            "type": "number",
                            "required": true,
                            "length": 4,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "sdate",
                            "name": "시작일자",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                "조회구간종료일 Space:기본값"
                            ],
                            "default": "",
                            "enum":                             [
                                {
                                    "code": "조회구간종료일 Space",
                                    "name": "기본값"
                                }
                            ]
                        },
                        {
                            "code": "edate",
                            "name": "종료일자",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                "처음조회기준일(LE) 처음조회일 경우 이 값 기준으로 조회"
                            ],
                            "default": ""
                        },
                        {
                            "code": "cts_date",
                            "name": "연속일자",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                "처음 조회시는 Space 연속 조회시에 이전 조회한 OutBlock의 cts_date 값으로 설정"
                            ],
                            "default": ""
                        },
                        {
                            "code": "comp_yn",
                            "name": "압축여부(Y:압축N:비압축)",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "sujung",
                            "name": "수정주가여부(Y:적용N:비적용)",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                }
            ]
        },
        "response":         {
            "header":             [
                {
                    "code": "content-type",
                    "name": "컨텐츠타입",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "이베스트증권 제공 API를 호출하기 위한 Request Body 데이터 포맷으로 \"application/json; charset=utf-8 설정\""
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cont",
                    "name": "연속 거래 여부",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "연속거래 여부",
                        "Y:연속○",
                        "N:연속×"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "",
                            "name": "다음 데이터 없음"
                        },
                        {
                            "code": "Y",
                            "name": "연속○"
                        },
                        {
                            "code": "N",
                            "name": "연속×"
                        }
                    ]
                },
                {
                    "code": "tr_cont_key",
                    "name": "연속 거래 Key",
                    "type": "string",
                    "required": true,
                    "length": 18,
                    "description":                     [
                        "연속일 경우 그전에 내려온 연속키 값 올림"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "t8410OutBlock",
                    "name": "t8410OutBlock",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "shcode",
                            "name": "단축코드",
                            "type": "string",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "jisiga",
                            "name": "전일시가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "jihigh",
                            "name": "전일고가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "jilow",
                            "name": "전일저가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "jiclose",
                            "name": "전일종가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "jivolume",
                            "name": "전일거래량",
                            "type": "number",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "disiga",
                            "name": "당일시가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "dihigh",
                            "name": "당일고가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "dilow",
                            "name": "당일저가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "diclose",
                            "name": "당일종가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "highend",
                            "name": "상한가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "lowend",
                            "name": "하한가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "cts_date",
                            "name": "연속일자",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "s_time",
                            "name": "장시작시간(HHMMSS)",
                            "type": "string",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "e_time",
                            "name": "장종료시간(HHMMSS)",
                            "type": "string",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "dshmin",
                            "name": "동시호가처리시간(MM:분)",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "rec_count",
                            "name": "레코드카운트",
                            "type": "number",
                            "required": true,
                            "length": 7,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "svi_uplmtprice",
                            "name": "정적VI상한가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "svi_dnlmtprice",
                            "name": "정적VI하한가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                },
                {
                    "code": "t8410OutBlock1",
                    "name": "t8410OutBlock1",
                    "type": "array",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "date",
                            "name": "날짜",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "open",
                            "name": "시가",
                            "type": "number",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "high",
                            "name": "고가",
                            "type": "number",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "low",
                            "name": "저가",
                            "type": "number",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "close",
                            "name": "종가",
                            "type": "number",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "jdiff_vol",
                            "name": "거래량",
                            "type": "number",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "value",
                            "name": "거래대금",
                            "type": "number",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "jongchk",
                            "name": "수정구분",
                            "type": "number",
                            "required": true,
                            "length": 13,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "rate",
                            "name": "수정비율",
                            "type": "number",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "pricechk",
                            "name": "수정주가반영항목",
                            "type": "number",
                            "required": true,
                            "length": 13,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ratevalue",
                            "name": "수정비율반영거래대금",
                            "type": "number",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "sign",
                            "name": "종가등락구분(1:상한2:상승3:보합4:하한5:하락주식일만사용)",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                }
            ]
        }
    },
    "t0424_실전":     {
        "info":         {
            "category": "주식",
            "subCategory": "[주식] 계좌",
            "name": "주식잔고2",
            "method": "post",
            "url": "/stock/accno",
            "format": "JSON",
            "contentType": "application/json; charset=UTF-8",
            "countPerSecond": 1,
            "verifyDate": "",
            "downloadDate": "2024-04-12T00:00:00.000Z",
            "memo": "계좌별 거래내역 및 잔고 등 계좌에 관련된 서비스를 확인할 수 있습니다.",
            "domain": "https://openapi.ebestsec.co.kr:8080",
            "trid": "t0424",
            "isProduct": true,
            "description": "주식잔고2"
        },
        "request":         {
            "header":             [
                {
                    "code": "content-type",
                    "name": "컨텐츠타입",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "이베스트증권 제공 API를 호출하기 위한 Request Body 데이터 포맷으로 \"application/json; charset=utf-8 설정\""
                    ],
                    "default": ""
                },
                {
                    "code": "authorization",
                    "name": "접근토큰",
                    "type": "string",
                    "required": true,
                    "length": 1000,
                    "description":                     [
                        "OAuth 토큰이 필요한 API 경우 발급한 Access Token을 설정하기 위한 Request Heaeder Parameter"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cont",
                    "name": "연속 거래 여부",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "연속거래 여부",
                        "Y:연속○",
                        "N:연속×"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "Y",
                            "name": "연속○"
                        },
                        {
                            "code": "N",
                            "name": "연속×"
                        }
                    ]
                },
                {
                    "code": "tr_cont_key",
                    "name": "연속 거래 Key",
                    "type": "string",
                    "required": true,
                    "length": 18,
                    "description":                     [
                        "연속일 경우 그전에 내려온 연속키 값 올림"
                    ],
                    "default": ""
                },
                {
                    "code": "mac_address",
                    "name": "MAC 주소",
                    "type": "string",
                    "required": true,
                    "length": 12,
                    "description":                     [
                        "법인인 경우 필수 세팅"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "t0424InBlock",
                    "name": "t0424InBlock",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "prcgb",
                            "name": "단가구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "chegb",
                            "name": "체결구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "dangb",
                            "name": "단일가구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "charge",
                            "name": "제비용포함여부",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "cts_expcode",
                            "name": "CTS_종목번호",
                            "type": "string",
                            "required": true,
                            "length": 22,
                            "description":                             [
                                "연속조회시 OutBlock의 동일필드 입력"
                            ],
                            "default": ""
                        }
                    ]
                }
            ]
        },
        "response":         {
            "header":             [
                {
                    "code": "content-type",
                    "name": "컨텐츠타입",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "이베스트증권 제공 API를 호출하기 위한 Request Body 데이터 포맷으로 \"application/json; charset=utf-8 설정\""
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cont",
                    "name": "연속 거래 여부",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "연속거래 여부",
                        "Y:연속○",
                        "N:연속×"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "",
                            "name": "다음 데이터 없음"
                        },
                        {
                            "code": "Y",
                            "name": "연속○"
                        },
                        {
                            "code": "N",
                            "name": "연속×"
                        }
                    ]
                },
                {
                    "code": "tr_cont_key",
                    "name": "연속 거래 Key",
                    "type": "string",
                    "required": true,
                    "length": 18,
                    "description":                     [
                        "연속일 경우 그전에 내려온 연속키 값 올림"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "t0424OutBlock",
                    "name": "t0424OutBlock",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "sunamt",
                            "name": "추정순자산",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "dtsunik",
                            "name": "실현손익",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "mamt",
                            "name": "매입금액",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "sunamt1",
                            "name": "추정D2예수금",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "cts_expcode",
                            "name": "CTS_종목번호",
                            "type": "string",
                            "required": true,
                            "length": 22,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "tappamt",
                            "name": "평가금액",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "tdtsunik",
                            "name": "평가손익",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                },
                {
                    "code": "t0424OutBlock1",
                    "name": "t0424OutBlock1",
                    "type": "array",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "expcode",
                            "name": "종목번호",
                            "type": "string",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "jangb",
                            "name": "잔고구분",
                            "type": "string",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "janqty",
                            "name": "잔고수량",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "mdposqt",
                            "name": "매도가능수량",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "pamt",
                            "name": "평균단가",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "mamt",
                            "name": "매입금액",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "sinamt",
                            "name": "대출금액",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "lastdt",
                            "name": "만기일자",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "msat",
                            "name": "당일매수금액",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "mpms",
                            "name": "당일매수단가",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "mdat",
                            "name": "당일매도금액",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "mpmd",
                            "name": "당일매도단가",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "jsat",
                            "name": "전일매수금액",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "jpms",
                            "name": "전일매수단가",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "jdat",
                            "name": "전일매도금액",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "jpmd",
                            "name": "전일매도단가",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "sysprocseq",
                            "name": "처리순번",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "loandt",
                            "name": "대출일자",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "hname",
                            "name": "종목명",
                            "type": "string",
                            "required": true,
                            "length": 20,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "marketgb",
                            "name": "시장구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "jonggb",
                            "name": "종목구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "janrt",
                            "name": "보유비중",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "price",
                            "name": "현재가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "appamt",
                            "name": "평가금액",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "dtsunik",
                            "name": "평가손익",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "sunikrt",
                            "name": "수익율",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "fee",
                            "name": "수수료",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "tax",
                            "name": "제세금",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "sininter",
                            "name": "신용이자",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                }
            ]
        }
    },
    "t0425_실전":     {
        "info":         {
            "category": "주식",
            "subCategory": "[주식] 계좌",
            "name": "주식체결/미체결",
            "method": "post",
            "url": "/stock/accno",
            "format": "JSON",
            "contentType": "application/json; charset=UTF-8",
            "countPerSecond": 1,
            "verifyDate": "",
            "downloadDate": "2024-04-12T00:00:00.000Z",
            "memo": "계좌별 거래내역 및 잔고 등 계좌에 관련된 서비스를 확인할 수 있습니다.",
            "domain": "https://openapi.ebestsec.co.kr:8080",
            "trid": "t0425",
            "isProduct": true,
            "description": "주식체결/미체결"
        },
        "request":         {
            "header":             [
                {
                    "code": "content-type",
                    "name": "컨텐츠타입",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "이베스트증권 제공 API를 호출하기 위한 Request Body 데이터 포맷으로 \"application/json; charset=utf-8 설정\""
                    ],
                    "default": ""
                },
                {
                    "code": "authorization",
                    "name": "접근토큰",
                    "type": "string",
                    "required": true,
                    "length": 1000,
                    "description":                     [
                        "OAuth 토큰이 필요한 API 경우 발급한 Access Token을 설정하기 위한 Request Heaeder Parameter"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cont",
                    "name": "연속 거래 여부",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "연속거래 여부",
                        "Y:연속○",
                        "N:연속×"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "Y",
                            "name": "연속○"
                        },
                        {
                            "code": "N",
                            "name": "연속×"
                        }
                    ]
                },
                {
                    "code": "tr_cont_key",
                    "name": "연속 거래 Key",
                    "type": "string",
                    "required": true,
                    "length": 18,
                    "description":                     [
                        "연속일 경우 그전에 내려온 연속키 값 올림"
                    ],
                    "default": ""
                },
                {
                    "code": "mac_address",
                    "name": "MAC 주소",
                    "type": "string",
                    "required": true,
                    "length": 12,
                    "description":                     [
                        "법인인 경우 필수 세팅"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "t0425InBlock",
                    "name": "t0425InBlock",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "expcode",
                            "name": "종목번호",
                            "type": "string",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "chegb",
                            "name": "체결구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                "0;전체",
                                "1:체결",
                                "2:미체결"
                            ],
                            "default": "",
                            "enum":                             [
                                {
                                    "code": "1",
                                    "name": "체결"
                                },
                                {
                                    "code": "2",
                                    "name": "미체결"
                                }
                            ]
                        },
                        {
                            "code": "medosu",
                            "name": "매매구분",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                "0:전체",
                                "1:매도",
                                "2:매수"
                            ],
                            "default": "",
                            "enum":                             [
                                {
                                    "code": "0",
                                    "name": "전체"
                                },
                                {
                                    "code": "1",
                                    "name": "매도"
                                },
                                {
                                    "code": "2",
                                    "name": "매수"
                                }
                            ]
                        },
                        {
                            "code": "sortgb",
                            "name": "정렬순서",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                "1:주문번호 역순",
                                "2:주문번호 순"
                            ],
                            "default": "",
                            "enum":                             [
                                {
                                    "code": "1",
                                    "name": "주문번호 역순"
                                },
                                {
                                    "code": "2",
                                    "name": "주문번호 순"
                                }
                            ]
                        },
                        {
                            "code": "cts_ordno",
                            "name": "주문번호",
                            "type": "string",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                "연속조회시 OutBlock의 동일필드 입력"
                            ],
                            "default": ""
                        }
                    ]
                }
            ]
        },
        "response":         {
            "header":             [
                {
                    "code": "content-type",
                    "name": "컨텐츠타입",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "이베스트증권 제공 API를 호출하기 위한 Request Body 데이터 포맷으로 \"application/json; charset=utf-8 설정\""
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cont",
                    "name": "연속 거래 여부",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "연속거래 여부",
                        "Y:연속○",
                        "N:연속×"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "",
                            "name": "다음 데이터 없음"
                        },
                        {
                            "code": "Y",
                            "name": "연속○"
                        },
                        {
                            "code": "N",
                            "name": "연속×"
                        }
                    ]
                },
                {
                    "code": "tr_cont_key",
                    "name": "연속 거래 Key",
                    "type": "string",
                    "required": true,
                    "length": 18,
                    "description":                     [
                        "연속일 경우 그전에 내려온 연속키 값 올림"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "t0425OutBlock",
                    "name": "t0425OutBlock",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "tqty",
                            "name": "총주문수량",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "tcheqty",
                            "name": "총체결수량",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "tordrem",
                            "name": "총미체결수량",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "cmss",
                            "name": "추정수수료",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "tamt",
                            "name": "총주문금액",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "tmdamt",
                            "name": "총매도체결금액",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "tmsamt",
                            "name": "총매수체결금액",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "tax",
                            "name": "추정제세금",
                            "type": "number",
                            "required": true,
                            "length": 18,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "cts_ordno",
                            "name": "주문번호",
                            "type": "string",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                },
                {
                    "code": "t0425OutBlock1",
                    "name": "t0425OutBlock1",
                    "type": "array",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "ordno",
                            "name": "주문번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "expcode",
                            "name": "종목번호",
                            "type": "string",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "medosu",
                            "name": "구분",
                            "type": "string",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "qty",
                            "name": "주문수량",
                            "type": "number",
                            "required": true,
                            "length": 9,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "price",
                            "name": "주문가격",
                            "type": "number",
                            "required": true,
                            "length": 9,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "cheqty",
                            "name": "체결수량",
                            "type": "number",
                            "required": true,
                            "length": 9,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "cheprice",
                            "name": "체결가격",
                            "type": "number",
                            "required": true,
                            "length": 9,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ordrem",
                            "name": "미체결잔량",
                            "type": "number",
                            "required": true,
                            "length": 9,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "cfmqty",
                            "name": "확인수량",
                            "type": "number",
                            "required": true,
                            "length": 9,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "status",
                            "name": "상태",
                            "type": "string",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "orgordno",
                            "name": "원주문번호",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ordgb",
                            "name": "유형",
                            "type": "string",
                            "required": true,
                            "length": 20,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ordtime",
                            "name": "주문시간",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "ordermtd",
                            "name": "주문매체",
                            "type": "string",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "sysprocseq",
                            "name": "처리순번",
                            "type": "number",
                            "required": true,
                            "length": 10,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "hogagb",
                            "name": "호가유형",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "price1",
                            "name": "현재가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "orggb",
                            "name": "주문구분",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "singb",
                            "name": "신용구분",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "loandt",
                            "name": "대출일자",
                            "type": "string",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                }
            ]
        }
    },
    "t8430_실전":     {
        "info":         {
            "category": "주식",
            "subCategory": "[주식] 기타",
            "name": "주식종목조회",
            "method": "post",
            "url": "/stock/etc",
            "format": "JSON",
            "contentType": "application/json; charset=UTF-8",
            "countPerSecond": 2,
            "verifyDate": "",
            "downloadDate": "2024-04-12T00:00:00.000Z",
            "memo": "신용잔고 및 신규상장종목 등 종목별 기타정보를 확인할 수 있는 서비스입니다.",
            "domain": "https://openapi.ebestsec.co.kr:8080",
            "trid": "t8430",
            "isProduct": true,
            "description": "주식종목조회"
        },
        "request":         {
            "header":             [
                {
                    "code": "content-type",
                    "name": "컨텐츠타입",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "이베스트증권 제공 API를 호출하기 위한 Request Body 데이터 포맷으로 \"application/json; charset=utf-8 설정\""
                    ],
                    "default": ""
                },
                {
                    "code": "authorization",
                    "name": "접근토큰",
                    "type": "string",
                    "required": true,
                    "length": 1000,
                    "description":                     [
                        "OAuth 토큰이 필요한 API 경우 발급한 Access Token을 설정하기 위한 Request Heaeder Parameter"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cont",
                    "name": "연속 거래 여부",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "연속거래 여부",
                        "Y:연속○",
                        "N:연속×"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "Y",
                            "name": "연속○"
                        },
                        {
                            "code": "N",
                            "name": "연속×"
                        }
                    ]
                },
                {
                    "code": "tr_cont_key",
                    "name": "연속 거래 Key",
                    "type": "string",
                    "required": true,
                    "length": 18,
                    "description":                     [
                        "연속일 경우 그전에 내려온 연속키 값 올림"
                    ],
                    "default": ""
                },
                {
                    "code": "mac_address",
                    "name": "MAC 주소",
                    "type": "string",
                    "required": true,
                    "length": 12,
                    "description":                     [
                        "법인인 경우 필수 세팅"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "t8430InBlock",
                    "name": "t8430InBlock",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "gubun",
                            "name": "구분(0:전체1:코스피2:코스닥)",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                }
            ]
        },
        "response":         {
            "header":             [
                {
                    "code": "content-type",
                    "name": "컨텐츠타입",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "이베스트증권 제공 API를 호출하기 위한 Request Body 데이터 포맷으로 \"application/json; charset=utf-8 설정\""
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cont",
                    "name": "연속 거래 여부",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "연속거래 여부",
                        "Y:연속○",
                        "N:연속×"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "",
                            "name": "다음 데이터 없음"
                        },
                        {
                            "code": "Y",
                            "name": "연속○"
                        },
                        {
                            "code": "N",
                            "name": "연속×"
                        }
                    ]
                },
                {
                    "code": "tr_cont_key",
                    "name": "연속 거래 Key",
                    "type": "string",
                    "required": true,
                    "length": 18,
                    "description":                     [
                        "연속일 경우 그전에 내려온 연속키 값 올림"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "t8430OutBlock",
                    "name": "t8430OutBlock",
                    "type": "array",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "hname",
                            "name": "종목명",
                            "type": "string",
                            "required": true,
                            "length": 20,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "shcode",
                            "name": "단축코드",
                            "type": "string",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "expcode",
                            "name": "확장코드",
                            "type": "string",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "etfgubun",
                            "name": "ETF구분(1:ETF)",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "uplmtprice",
                            "name": "상한가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "dnlmtprice",
                            "name": "하한가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "jnilclose",
                            "name": "전일가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "memedan",
                            "name": "주문수량단위",
                            "type": "string",
                            "required": true,
                            "length": 5,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "recprice",
                            "name": "기준가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "gubun",
                            "name": "구분(1:코스피2:코스닥)",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                }
            ]
        }
    },
    "t8436_실전":     {
        "info":         {
            "category": "주식",
            "subCategory": "[주식] 기타",
            "name": "주식종목조회 API용",
            "method": "post",
            "url": "/stock/etc",
            "format": "JSON",
            "contentType": "application/json; charset=UTF-8",
            "countPerSecond": 2,
            "verifyDate": "",
            "downloadDate": "2024-04-12T00:00:00.000Z",
            "memo": "신용잔고 및 신규상장종목 등 종목별 기타정보를 확인할 수 있는 서비스입니다.",
            "domain": "https://openapi.ebestsec.co.kr:8080",
            "trid": "t8436",
            "isProduct": true,
            "description": "주식종목조회 API용"
        },
        "request":         {
            "header":             [
                {
                    "code": "content-type",
                    "name": "컨텐츠타입",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "이베스트증권 제공 API를 호출하기 위한 Request Body 데이터 포맷으로 \"application/json; charset=utf-8 설정\""
                    ],
                    "default": ""
                },
                {
                    "code": "authorization",
                    "name": "접근토큰",
                    "type": "string",
                    "required": true,
                    "length": 1000,
                    "description":                     [
                        "OAuth 토큰이 필요한 API 경우 발급한 Access Token을 설정하기 위한 Request Heaeder Parameter"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cont",
                    "name": "연속 거래 여부",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "연속거래 여부",
                        "Y:연속○",
                        "N:연속×"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "Y",
                            "name": "연속○"
                        },
                        {
                            "code": "N",
                            "name": "연속×"
                        }
                    ]
                },
                {
                    "code": "tr_cont_key",
                    "name": "연속 거래 Key",
                    "type": "string",
                    "required": true,
                    "length": 18,
                    "description":                     [
                        "연속일 경우 그전에 내려온 연속키 값 올림"
                    ],
                    "default": ""
                },
                {
                    "code": "mac_address",
                    "name": "MAC 주소",
                    "type": "string",
                    "required": true,
                    "length": 12,
                    "description":                     [
                        "법인인 경우 필수 세팅"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "t8436InBlock",
                    "name": "t8436InBlock",
                    "type": "object",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "gubun",
                            "name": "구분(0:전체1:코스피2:코스닥)",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                }
            ]
        },
        "response":         {
            "header":             [
                {
                    "code": "content-type",
                    "name": "컨텐츠타입",
                    "type": "string",
                    "required": true,
                    "length": 100,
                    "description":                     [
                        "이베스트증권 제공 API를 호출하기 위한 Request Body 데이터 포맷으로 \"application/json; charset=utf-8 설정\""
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cd",
                    "name": "거래 CD",
                    "type": "string",
                    "required": true,
                    "length": 10,
                    "description":                     [
                        "이베스트증권 거래코드"
                    ],
                    "default": ""
                },
                {
                    "code": "tr_cont",
                    "name": "연속 거래 여부",
                    "type": "string",
                    "required": true,
                    "length": 1,
                    "description":                     [
                        "연속거래 여부",
                        "Y:연속○",
                        "N:연속×"
                    ],
                    "default": "",
                    "enum":                     [
                        {
                            "code": "",
                            "name": "다음 데이터 없음"
                        },
                        {
                            "code": "Y",
                            "name": "연속○"
                        },
                        {
                            "code": "N",
                            "name": "연속×"
                        }
                    ]
                },
                {
                    "code": "tr_cont_key",
                    "name": "연속 거래 Key",
                    "type": "string",
                    "required": true,
                    "length": 18,
                    "description":                     [
                        "연속일 경우 그전에 내려온 연속키 값 올림"
                    ],
                    "default": ""
                }
            ],
            "body":             [
                {
                    "code": "t8436OutBlock",
                    "name": "t8436OutBlock",
                    "type": "array",
                    "required": true,
                    "length": -1,
                    "description":                     [
                        ""
                    ],
                    "default": "",
                    "fields":                     [
                        {
                            "code": "hname",
                            "name": "종목명",
                            "type": "string",
                            "required": true,
                            "length": 20,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "shcode",
                            "name": "단축코드",
                            "type": "string",
                            "required": true,
                            "length": 6,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "expcode",
                            "name": "확장코드",
                            "type": "string",
                            "required": true,
                            "length": 12,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "etfgubun",
                            "name": "ETF구분(1:ETF2:ETN)",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "uplmtprice",
                            "name": "상한가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "dnlmtprice",
                            "name": "하한가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "jnilclose",
                            "name": "전일가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "memedan",
                            "name": "주문수량단위",
                            "type": "string",
                            "required": true,
                            "length": 5,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "recprice",
                            "name": "기준가",
                            "type": "number",
                            "required": true,
                            "length": 8,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "gubun",
                            "name": "구분(1:코스피2:코스닥)",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "bu12gubun",
                            "name": "증권그룹",
                            "type": "string",
                            "required": true,
                            "length": 2,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "spac_gubun",
                            "name": "기업인수목적회사여부(Y/N)",
                            "type": "string",
                            "required": true,
                            "length": 1,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        },
                        {
                            "code": "filler",
                            "name": "filler(미사용)",
                            "type": "string",
                            "required": true,
                            "length": 32,
                            "description":                             [
                                ""
                            ],
                            "default": ""
                        }
                    ]
                }
            ]
        }
    }
};

export default EBest_JSON_TRID;
export { EBest_JSON_TRID };
