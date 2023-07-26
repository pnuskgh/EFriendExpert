# EFriend
  
EFriend는 증권 거래를 위한 Node.js 라이브러리 입니다.
  
지원하는 증권의 Open API는 다음과 같습니다.
- [한국투자증권의 KIS Developers API](https://apiportal.koreainvestment.com/apiservice/): 지원
- [이베스트투자증권 Open API](https://openapi.ebestsec.co.kr/apiservice): 미지원
  
  
# Installation

```bash
npm  install  efriend  --save
```
  
  
# Contents
  
## 인증 정보
  
```javascript
const secret = {
    isActive: true,                     //--- true. 인증정보를 사용
    isActual: true,                     //--- true. 실전 투자, false. 모의 투자
    isOrder: true,                      //--- true. 주문시 사용
    isQuery: true,                      //--- true. 조회시 사용
    isPublic: false,                    //--- true. 다른 사람이 사용하도록 허용
    userid: '',                         //--- 한국투자증권 HTS ID
    account: '',                        //--- 계좌번호 체계(8-2)의 앞 8자리
    accountSub: '',                     //--- 계좌번호 체계(8-2)의 뒤 2자리
    periodFrom: '',                     //--- appkey의 유효기간 (시작), YYYY-MM-DD
    periodTo: '',                       //--- appkey의 유효기간 (종료), YYYY-MM-DD
    appkey: '',                         //--- 한국투자증권 홈페이지에서 발급받은 appkey
    appsecret: '',                      //--- 한국투자증권 홈페이지에서 발급받은 appsecret
    custtype: 'P',                      //--- P. 개인, B. 법인
    tokens: []
};
```
  
## ESM
ECMAScript Modules
  
```javascript
import { EFriendRest, TR_TYPE } from 'efriend';
import { EFriend, EFriendWs } from 'efriend';

//--- Web Socket 요청 처리를 위한 sample handler
const onMessageDefault = (trid, header, body) {
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
        secrets = await efriend.setSecrets(secrets);        //--- 인증 정보 등록과 갱신

        const secretQuery = await efriend.getQuerySecret(); //--- 등록된 인증 정보 중 조회용 인증 정보 반환
        if (secretQuery != null) {
            const efriendRest = new EFriendRest({});
            const requestHeader = {
                "content-type": 'application/json; charset=utf-8',
            };
            const requestBody = {
                FID_COND_MRKT_DIV_CODE: 'J',
                FID_INPUT_ISCD: '015760'
            };
            //--- TR_ID: FHKST01010100
            //--- secretQuery: 인증 정보
            //--- requestHeader: 요청 header. 인증 정보에 포함되어 있는 항목은 제외
            //--- requestBody: 요청 body
            const response = await efriendRest.FHKST01010100(secretQuery, requestHeader, requestBody);
            console.log(response);
        }

        const account = '11111111';                         //--- 한국투자증권 HTS ID
        const secretOrder = await efriend.getOrderSecret(account);  //--- 등록된 인증 정보 중 주문용 인증정보 반환
        if (secretOrder != null) {            
            const efriendWs = new EFriendWs({ secret: secretOrder });
            await efriendWs.initialize();
            efriendWs.addHandler(onMessageDefault.bind(efriendWs));
            setTimeout(async function() {
                //--- TR_ID: H0STCNT0
                //--- TR_TYPE.registration : 등록
                //--- TR_TYPE.release : 해제
                await efriendWs.webSocket('H0STCNT0', TR_TYPE.registration, '015760');
            }, 1000);
        }
    } catch(ex) {
        console.error(ex);
    }
})();
```
  
  
## CommonJS
  
```javascript
const efriend = require('efriend');

//--- Web Socket 요청 처리를 위한 sample handler
const onMessageDefault = (trid, header, body) {
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
    console.log('');
}

(async () => {
    try {
        const efriendMain = new efriend.EFriend({});
        let secrets = [ secret ];
        secrets = await efriendMain.setSecrets(secrets);    //--- 인증 정보 등록과 갱신

        const secretQuery = await efriendMain.getQuerySecret(); //--- 등록된 인증 정보 중 조회용 인증 정보 반환
        if (secretQuery != null) {
            const efriendRest = new efriend.EFriendRest({});
            const requestHeader = {
                "content-type": 'application/json; charset=utf-8',
            };
            const requestBody = {
                FID_COND_MRKT_DIV_CODE: 'J',
                FID_INPUT_ISCD: '015760'
            };
            const response = await efriendRest.FHKST01010100(secretQuery, requestHeader, requestBody);
            console.log(response);
        }

        const account = '68629034';
        const secretOrder = await efriendMain.getOrderSecret(account);  //--- 등록된 인증 정보 중 주문용 인증정보 반환
        if (secretOrder != null) {            
            const efriendWs = new efriend.EFriendWs({ secret: secretOrder });
            await efriendWs.initialize();
            efriendWs.addHandler(onMessageDefault.bind(efriendWs));
            setTimeout(async function() {
                await efriendWs.webSocket('H0STCNT0', efriend.TR_TYPE.registration, '015760');
            }, 1000);
        }
    } catch(ex) {
        console.error(ex);
    }
})();
```
