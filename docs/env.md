# .env 파일

- prisma 설정
  
  - DATABASE_URL : SQLite Database 파일
- GitHub에 등록한 repository secret
  - ${{ secrets.VIRTUAL_APP_KEY}}
  - ${{ secrets.VIRTUAL_APP_SECRET}}

  

```bash
DATABASE_URL="file:./files/databases/dev.db"

VIRTUAL_APP_KEY="한국투자증권에서 발급 받은 appkey"
VIRTUAL_APP_SECRET="한국투자증권에서 발급 받은 appsecret"
REAL_APP_KEY="한국투자증권에서 발급 받은 appkey"
REAL_APP_SECRET="한국투자증권에서 발급 받은 appsecret"
```

  