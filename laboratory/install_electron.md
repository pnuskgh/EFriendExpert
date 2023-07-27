# Install

  


```bash
#--- 설치
npm  init
npm  install  electron  --save-dev

npm  install   @electron-forge/cli  --save-dev  
npx  electron-forge  import             #--- Node.js 14.17.5 이상 필요

#--- 실행
electron  .

#--- scripts
#---     npm  run  start                #--- 실행
vi  package.json
    "scripts": {
        "start": "npm  run  build  &&  electron-forge  start",
        "package": "electron-forge  package",
        "make": "electron-forge  make",

        "build": "npm  run  build:clean  &&  npm  run  build:cjs  &&  npm  run  deploy",
        "build:clean": "rm  -rf  ./build",
        "build:cjs": "tsc  -p ./tsconfig.json",
        
        "deploy": "npm  run  deploy:html  &&  npm  run  deploy:css",
        "deploy:html": "copyfiles  -f clients/homes/index.html  build/clients/homes",
        "deploy:css": "copyfiles  -f clients/homes/css/index.css  build/clients/homes/css"
    }
```
