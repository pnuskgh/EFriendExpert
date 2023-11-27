# EFriend

  

EFriend는 증권 거래를 위한 Node.js 라이브러리 입니다.

지원하는 증권의 Open API는 다음과 같습니다.
- [한국투자증권의 KIS Developers API](https://apiportal.koreainvestment.com/apiservice/): 지원
- [이베스트투자증권 Open API](https://openapi.ebestsec.co.kr/apiservice): 미지원

  

## 주의

  

EFriend 라이브러리는 사용의 편의를 위해 Open Source로 제공되는 library 입니다. <span style="color: red;">라이브러리 사용에 따른 책임은 사용자에게 있습니다.</span>

  

EFriend 라이브러리에 반영된 API와 Code를 수집한 날자와 동작 여부를 확인한 날자는 [TESTED](./TESTED.md) 페이지에 명시되어 있습니다. 증권사에서 제공하는 라이브러리가 아니므로 최종 버전이 실시간으로 반영되지 않습니다.

  

<span style="color: red;">EFriend 라이브러리 사용으로 인한 이익과 책임은 사용자에게 있으므로, 사용전에 충분히 테스트와 검증을 하신 후에 사용하시기 바랍니다. 배포 후 3개월이상 지난 후에 사용할 것을 권장 합니다.</span>

  

만일 문제점 (오류, 버전 업그레이드 요청 등)이 발견되면, [Issue](https://github.com/pnuskgh/EFriendExpert/issues)에 신고해 주세요.

  

## 설치

  

```bash
npm  install  efriend  --save
```

  

## 인증 정보

라이브러리를 사용하기 위해서는 인증 정보가 필요 합니다.

인증 정보는 범용적으로 사용하기 위해서 다음 정보를 추가로 관리 합니다.

- isActive: true인 경우에만 사용 가능한 인증 정보 입니다.
- isActual: 실전 투자용 인증 정보인 경우 true 입니다.
- isOrder: 주문 거래용으로 사용할 인증 정보인 경우 true 입니다.
- isQuery: 조회용으로 사용할 인증 정보인 경우 true 입니다.
- isPublic: 조회용으로 다른 사람이 사용하도록 허용된 인증 정보인 경우 true 입니다.
  - 확장성을 위해 추가한 항목으로 개인이 사용하는 경우 false로 설정하면 됩니다.

    

```javascript
import { Secret, EFriend } from 'efriend';

const secret: Secret = {
    isActive: true,           //--- true. 인증정보를 사용
    isActual: true,           //--- true. 실전 투자, false. 모의 투자
    isOrder: true,            //--- true. 주문시 사용
    isQuery: true,            //--- true. 조회시 사용
    isPublic: false,          //--- true. 다른 사람이 사용하도록 허용
    
    userid: '',               //--- 한국투자증권 HTS ID
    account: '',              //--- 계좌번호 체계(8-2)의 앞 8자리
    accountSub: '',           //--- 계좌번호 체계(8-2)의 뒤 2자리
    periodFrom: '',           //--- appkey의 유효기간 (시작), YYYY-MM-DD
    periodTo: '',             //--- appkey의 유효기간 (종료), YYYY-MM-DD
    appkey: '',               //--- 한국투자증권에서 발급받은 appkey
    appsecret: '',            //--- 한국투자증권에서 발급받은 appsecret
    custtype: 'P',            //--- P. 개인, B. 법인
};

let secrets: Array<Secret> = [ secret ];
const efriend: EFriend = new EFriend({ });

//--- 인증 정보 등록과 갱신
//---     실시간 (웹소켓) 접속키 발급
//---     접근토큰 발급(P)
secrets = await efriend.setSecrets(secrets);

//--- 조회용 인증 정보 가져오기
const secretQuery: Secret = await efriend.getQuerySecret();

//--- 주문용 인증 정보 가져오기
const account: string = '68629034';	  //--- 계좌번호 체계(8-2)의 앞 8자리
const secretOrder: Secret = await efriend.getOrderSecret(account);
```

  

## 라이브러리 사용

라이브러리는 기본적으로 tr_id (거래 ID)를 기준으로 사용 합니다.

- 인증 정보에 포함되어 있는 정보는 요청 header에서 생략 가능 합니다.

  

### REST API 호출

```typescript
import { 
    EFriendRest, 
    FHKST01010100_REQUEST_HEADER, 
    FHKST01010100_REQUEST_BODY } from 'efriend';

const efriendRest: EFriendRest = new EFriendRest({ });


//--- FHKST01010100 (주식현재가 시세)의 tr_id

// 요청 header
const requestHeader: FHKST01010100_REQUEST_HEADER = {
    "content-type": 'application/json; charset=utf-8',
};

// 요청 body
const requestBody: FHKST01010100_REQUEST_BODY = {
    FID_COND_MRKT_DIV_CODE: 'J',
    FID_INPUT_ISCD: '015760'
};

// FHKST01010100 tr_id에 해당하는 요청 처리
const response = await efriendRest.FHKST01010100(
    secretQuery, 
    requestHeader, 
    requestBody
);
// response
//     code : 오류 코드. 0이면 정상 처리됨
//     message: 오류 메시지. 정상 처리된 경우 'ok'
//     header: 응답 header
//     body: 응답 body
```

   

### Web Socke 호출

```typescript
import { EFriendWs, TR_TYPE } from 'efriend';

const efriendWs: EFriendWs = new EFriendWs({ secret: secretOrder });
await efriendWs.initialize();

//--- trid: Web Socket API의 trid (예: H0STCNT0 - 실시간 주식 체결가)
//--- header: Web Socket 내부적으로 사용하는 header
//--- body: trid에 해당하는 응답 body
const defaultHandler = (trid: string, header: any | null, body: any) => {
    console.log('trid', trid);
    console.log('header', header);
    if (Array.isArray(body)) {
        body.forEach((item) => {
            console.log('body item', item);    
        });
    } else {
        console.log('body', body);
    }
    console.log('');
}

//--- Web Socket 데이터를 받아 처리할 handler 등록
efriendWs.addHandler(defaultHandler.bind(efriendWs));

//--- H0STCNT0 (국내주식 실시간체결가) 등록
await efriendWs.webSocket('H0STCNT0', TR_TYPE.registration, '015760');

//--- H0STCNT0 (국내주식 실시간체결가) 해제
await efriendWs.webSocket('H0STCNT0', TR_TYPE.registration, '015760');
```

  

### TypeScript 사용 예

```typescript
import { EFriend, EFriendRest, EFriendWs } from 'efriend';
import { Secret, TR_TYPE } from 'efriend';
import { 
    FHKST01010100_REQUEST_HEADER, 
    FHKST01010100_REQUEST_BODY, 
    FHKST01010100_RESPONSE } from 'efriend';

//--- Web Socket 요청 처리를 위한 sample handler
const onMessageDefault: Function = 
      (trid: string, header: any | null, body: any): void => {
    console.log('trid', trid);
    console.log('header', header);
    if (Array.isArray(body)) {
        body.forEach((item) => {
            console.log('body item', item);    
        });
    } else {
        console.log('body', body);
    }
    console.log('');
}

(async () => {
    try {
        const efriend: EFriend = new EFriend({});
        let secrets: Array<Secret> = [ secret ];
        //--- 인증 정보 등록과 갱신
        secrets = await efriend.setSecrets(secrets);        

        //--- 등록된 인증 정보 중 조회용 인증 정보 반환
        const secretQuery: Secret | null = 
              await efriend.getQuerySecret(); 
        if (secretQuery != null) {
            const efriendRest: EFriendRest = new EFriendRest({});
            const requestHeader: FHKST01010100_REQUEST_HEADER = {
                "content-type": 'application/json; charset=utf-8',
            };
            const requestBody: FHKST01010100_REQUEST_BODY = {
                FID_COND_MRKT_DIV_CODE: 'J',
                FID_INPUT_ISCD: '015760'
            };

            const response: FHKST01010100_RESPONSE = 
                  await efriendRest.FHKST01010100(
                      secretQuery, requestHeader, requestBody);
            console.log(response);
        }

        //--- 한국투자증권 HTS ID
        const account: string = '11111111';
        //--- 등록된 인증 정보 중 주문용 인증정보 반환
        const secretOrder: Secret | null 
        	= await efriend.getOrderSecret(account);  
        if (secretOrder != null) {            
            const efriendWs: EFriendWs = 
                  new EFriendWs({ secret: secretOrder });
            await efriendWs.initialize();
            efriendWs.addHandler(onMessageDefault.bind(efriendWs));
            setTimeout(async function() {
                await efriendWs.webSocket(
                    'H0STCNT0', TR_TYPE.registration, '015760');
            }, 1000);
        }
    } catch(ex) {
        console.error(ex);
    }
})();
```



### ESM 모듈 사용 예

> ECMAScript Modules

  

```javascript
import { EFriendRest, TR_TYPE } from 'efriend';
import { EFriend, EFriendWs } from 'efriend';

//--- Web Socket 요청 처리를 위한 sample handler
const onMessageDefault = (trid, header, body) => {
    console.log('trid', trid);
    console.log('header', header);
    if (Array.isArray(body)) {
        body.forEach((item) => {
            console.log('body item', item);    
        });
    } else {
        console.log('body', body);
    }
    console.log('');
}

(async () => {
    try {
        const efriend = new EFriend({});
        let secrets = [ secret ];
        //--- 인증 정보 등록과 갱신
        secrets = await efriend.setSecrets(secrets);        

        //--- 등록된 인증 정보 중 조회용 인증 정보 반환
        const secretQuery = await efriend.getQuerySecret(); 
        if (secretQuery != null) {
            const efriendRest = new EFriendRest({});
            const requestHeader = {
                "content-type": 'application/json; charset=utf-8',
            };
            const requestBody = {
                FID_COND_MRKT_DIV_CODE: 'J',
                FID_INPUT_ISCD: '015760'
            };

            const response = await efriendRest.FHKST01010100(
                secretQuery, requestHeader, requestBody);
            console.log(response);
        }

        //--- 한국투자증권 HTS ID
        const account = '11111111';
        //--- 등록된 인증 정보 중 주문용 인증정보 반환
        const secretOrder = await efriend.getOrderSecret(account);  
        if (secretOrder != null) {            
            const efriendWs = new EFriendWs({ secret: secretOrder });
            await efriendWs.initialize();
            efriendWs.addHandler(onMessageDefault.bind(efriendWs));
            setTimeout(async function() {
                await efriendWs.webSocket(
                    'H0STCNT0', TR_TYPE.registration, '015760');
            }, 1000);
        }
    } catch(ex) {
        console.error(ex);
    }
})();
```

  

### CommonJS 모듈 사용 예

  

```javascript
const efriend = require('efriend');

//--- Web Socket 요청 처리를 위한 sample handler
const onMessageDefault = (trid, header, body) => {
    console.log('trid', trid);
    console.log('header', header);
    if (Array.isArray(body)) {
        body.forEach((item) => {
            console.log('body item', item);    
        });
    } else {
        console.log('body', body);
    }
    console.log('');
}

(async () => {
    try {
        const efriendMain = new efriend.EFriend({});
        let secrets = [ secret ];
        //--- 인증 정보 등록과 갱신
        secrets = await efriendMain.setSecrets(secrets);

        //--- 등록된 인증 정보 중 조회용 인증 정보 반환
        const secretQuery = await efriendMain.getQuerySecret(); 
        if (secretQuery != null) {
            const efriendRest = new efriend.EFriendRest({});
            const requestHeader = {
                "content-type": 'application/json; charset=utf-8',
            };
            const requestBody = {
                FID_COND_MRKT_DIV_CODE: 'J',
                FID_INPUT_ISCD: '015760'
            };
            const response = await efriendRest.FHKST01010100(
                secretQuery, requestHeader, requestBody);
            console.log(response);
        }

        //--- 한국투자증권 HTS ID
        const account = '68629034';
        //--- 등록된 인증 정보 중 주문용 인증정보 반환
        const secretOrder = await efriendMain.getOrderSecret(account); 
        if (secretOrder != null) {            
            const efriendWs = new efriend.EFriendWs(
                { secret: secretOrder }
            );
            await efriendWs.initialize();
            efriendWs.addHandler(onMessageDefault.bind(efriendWs));
            setTimeout(async function() {
                await efriendWs.webSocket(
                    'H0STCNT0', 
                    efriend.TR_TYPE.registration, 
                    '015760'
                );
            }, 1000);
        }
    } catch(ex) {
        console.error(ex);
    }
})();
```

  