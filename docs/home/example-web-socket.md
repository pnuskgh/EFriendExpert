---
outline: deep
---

# Web Socket Examples

아래 REST API 참고하여 프로그램을 작성할 수 있습니다.

::: tip
라이브러리는 기본적으로 **`tr_id` (거래 ID)** 를 기준으로 사용 합니다.
인증 정보에 포함되어 있는 정보는 요청 header에서 생략 가능 합니다.
:::

```typescript
import { EFriendWs, TR_TYPE } from 'efriend';

const efriendWs: EFriendWs = new EFriendWs({ secret: secretOrder });
await efriendWs.initialize();

//--- trid: Web Socket API의 trid (예: H0STCNT0 - 실시간 주식 체결가)
//--- header: Web Socket 내부적으로 사용하는 header
//--- body: trid에 해당하는 응답 body
const defaultHandler = (trid, header, body) => {
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


::: code-group
```typescript [ESM]
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

```typescript [CommonJS]
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

:::