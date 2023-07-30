---
outline: deep
---

# REST API Examples

아래 REST API 참고하여 프로그램을 작성할 수 있습니다.

::: tip
라이브러리는 기본적으로 **`tr_id` (거래 ID)** 를 기준으로 사용 합니다.
인증 정보에 포함되어 있는 정보는 요청 header에서 생략 가능 합니다.
:::

```typescript
import { EFriendRest, FHKST01010100_REQUEST_HEADER, FHKST01010100_REQUEST_BODY } from 'efriend';

const efriendRest: EFriendRest = new EFriendRest();


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