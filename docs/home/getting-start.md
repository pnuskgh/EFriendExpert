# 시작하기

## 설치
::: code-group
```bash [npm]
npm install efriend --save
```

```bash [yarn]
yarn add efriend
```

```bash [pnpm]
pnpm add install
```
:::

## 인증정보
라이브러리를 사용하기 위해서는 인증 정보가 필요 합니다.

인증 정보는 범용적으로 사용하기 위해서 다음 정보를 추가로 관리 합니다.

- `isActive` : `true`인 경우에만 사용 가능한 인증 정보 입니다.

- `isActual` : 실전 투자용 인증 정보인 경우 `true` 입니다.

- `isOrder` : 주문 거래용으로 사용할 인증 정보인 경우 `true` 입니다.

- `isQuery` : 조회용으로 사용할 인증 정보인 경우 `true` 입니다.

- `isPublic` : 조회용으로 다른 사람이 사용하도록 허용된 인증 정보인 경우 `true` 입니다.

::: tip
`isPublic`는 확장성을 위해 추가한 항목으로 개인이 사용하는 경우 `false`로 설정하면 됩니다.
:::

```typescript
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
const efriend: EFriend = new EFriend({});

//--- 인증 정보 등록과 갱신
//---     실시간 (웹소켓) 접속키 발급
//---     접근토큰 발급(P)
secrets = await efriend.setSecrets(secrets);

//--- 조회용 인증 정보 가져오기
const secretQuery = await efriend.getQuerySecret();

//--- 주문용 인증 정보 가져오기
const account = '68629034';	  //--- 계좌번호 체계(8-2)의 앞 8자리
const secretOrder = await efriend.getOrderSecret(account);
```
