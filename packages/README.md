# EFriend Expert

​      

## 주요 명령어

​    

### EFriend Expert

- node : 14.21.3
- nvm : 1.1.12
- npm : 6.14.18
- tsc : 5.1.6
- Anaconda : 4.14.0
- python : 3.7.7

​    

```bash
nvm  ls-remote  --lts 
nvm  list  available
nvm  list
nvm  use  14.21.3
# nvm  use  16.20.1                     #--- Web Assembly 사용시

node  --version
nvm  version
npm  --version
tsc  --version

conda  --version
python  --version

#--- EFriendExpert 라이브러리를 OBCon_Service로 배포
cd  /work/EFriendExpert
npm  run  obcon_service

#--- Test
npm  run  start                         #--- Main 프로그램 실행
# packages/EFriendExpert/main.ts

npm  run  test                          #--- vitest 실행

#--- NPM Package 생성
vi  package.json
    # version을 수정
npm  run  package:dry                   #--- 컴파일
npm  run  package:all                   #--- 컴파일과 배포
npm  run  package                       #--- 배포
```

​    
