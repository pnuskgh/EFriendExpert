# EFriendExpert Database

  

## Database 지원 라이브러리

- [Prisma](https://github.com/prisma/prisma)
- 지원하는 데이터베이스
  - SQLite
  - MariaDB : from mysql
  - MySQL
  - PostgreSQL
  - Microsoft SQL Server
  - AWS Aurora : from mysql
  - Azure SQL
  - MongoDB
  - CockroachDB

  

## EFriendExpert에서 사용하는 테이블

  

|  이름   |    한글명     |              설명               |   DB   |
| :-----: | :-----------: | :-----------------------------: | :----: |
|  site   |    사이트     |         회사 또는 단체          |        |
|  user   |    사용자     |       site에 속한 사용자        |        |
| secret  |   접속 정보   |     한국투자증권 접속 정보      |        |
|  token  |               | 한국투자증권 REST API 접속 정보 |        |
| history | API 접속 로그 |   한국투자증권 API 호출 정보    | SQLite |

- efriend API에서 사용하는 테이블
  - history
- 그외 테이블은 필요시 생성하여 사용하면 됩니다. (다른 이름과 내용으로 생성하여 사용하여도 됩니다.)

  