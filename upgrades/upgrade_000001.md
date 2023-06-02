# Upgrade for version 0.00.001

  

## 환경 구성

  

### 프로젝트 폴더 생성

```bash
#--- EFriendExpert 폴더 생성
# 원하는 위치로 가서 아래 명령을 실행 한다.
git  clone  https://github.com/pnuskgh/EFriendExpert
cd  EFriendExpert
# 현재 폴더가 프로젝트의 루트(root) 폴더 입니다.
```

   

### Node.js

- [crypto](https://www.npmjs.com/package/crypto) 1.0.1
- [decompress](https://www.npmjs.com/package/decompress) 4.2.1
- [exceljs](https://www.npmjs.com/package/exceljs) 4.3.0
- [iconv-lite](https://www.npmjs.com/package/iconv-lite) 0.6.3
- [node-fetch](https://www.npmjs.com/package/node-fetch) 3.3.1
- [uuid](https://www.npmjs.com/package/uuid) 9.0.0
- [ws](https://www.npmjs.com/package/ws) 8.13.0

```bash


#--- package.json 파일을 현재 폴더로 복사하여 생성 한다.
cp  files/install/package.json  .

#--- Excel 파일 관리용
npm  install  exceljs  --save

#--- 종목 코드 관리용
npm  install  decompress  --save
npm  install  iconv-lite  --save

#--- 종목 코드 관리용
npm  install  node-fetch  --save
npm  install  ws  --save
npm  install  crypto  --save
npm  install  uuid  --save
```

  

