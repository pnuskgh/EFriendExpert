# Upgrade for version 0.00.004

  

## 환경 구성

  

### 프로젝트 폴더 생성

```bash
#--- EFriendExpert 폴더 생성
# 원하는 위치로 가서 아래 명령을 실행 한다.
git  clone  https://github.com/pnuskgh/EFriendExpert
cd  EFriendExpert
# 현재 폴더가 프로젝트의 루트(root) 폴더 입니다.
```

   

### Node.js 환경 구성

- [crypto](https://www.npmjs.com/package/crypto) 1.0.1
- [decompress](https://www.npmjs.com/package/decompress) 4.2.1
- [ejs](https://www.npmjs.com/package/ejs) 3.1.9
- [exceljs](https://www.npmjs.com/package/exceljs) 4.3.0
- [iconv-lite](https://www.npmjs.com/package/iconv-lite) 0.6.3
- [node-fetch](https://www.npmjs.com/package/node-fetch) 3.3.1
- [uuid](https://www.npmjs.com/package/uuid) 9.0.0
- [ws](https://www.npmjs.com/package/ws) 8.13.0

```bash
#--- package.json 파일을 현재 폴더로 복사하여 생성 한다.
cp  files/install/package.json  .

#--- 기본 설정
node  --version                         #--- v14.21.3

#--- Excel 파일 관리용
npm  install  exceljs  --save

#--- 종목 코드 관리용
npm  install  decompress  --save
npm  install  iconv-lite  --save

#--- JS 코드 생성용
npm  install  node-fetch  --save
npm  install  ws  --save
npm  install  crypto  --save
npm  install  uuid  --save
npm  install  ejs  --save
```

  

### TypeScript 환경 구성

- [ts-node](https://www.npmjs.com/package/ts-node) 10.9.1
- [tsc-alias](https://www.npmjs.com/package/tss\c-alias) 1.8.6
- [tsconfig-paths](https://www.npmjs.com/package/tsconfig-paths) 4.2.0
- [typescript](https://www.npmjs.com/package/typescript) 5.1.3
  - @types/node: 20.2.5

```bash
npm  install  typescript  --save-dev
npx  tsc  --version                  

npm  install  typescript  -g            #--- Global 환경에 설치
npm  list  -g                           #--- Global package 조회
npm  list  -g  --depth  0               #--- Global package 조회
tsc  --version

npm  install  ts-node  --save-dev
npm  install  tsconfig-paths  --save-dev
npm  install  tsc-alias  --save-dev
npm  install  @types/node  --save-dev

tsc  --init                             #--- tsconfig.json 파일 생성

tsc                                     #--- 모든 *.ts 파일 컴파일
tsc  --project  tsconfig.json           #--- 모든 *.ts 파일 컴파일

# zztest.ts 파일을 zztest.js 파일로 변환
# tsc  zztest.ts                          #--- 하나의 ts 파일 컴파일
```

  