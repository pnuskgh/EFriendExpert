//--- node  bin/ExcelToJs.js
const application = new Application();
await application.initialize();
await application.batch(new ExcelToJs());