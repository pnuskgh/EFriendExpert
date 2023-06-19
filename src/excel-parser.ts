/*
 * /src/excel-parser.ts
 * 
 * @version 1.0.0
 * @license GNU General Public License v3.0
 * @author dalcon10028 <dalcon10280@gmail.com>
 */
import { ExcelService, KisInfoService } from "./services";

(async () => {
  const excelService = await ExcelService.create({ path: "EFriendExpert.xlsx" });
  const kisInfoService = new KisInfoService(excelService);
  const kisInformation = await kisInfoService.getKisInfo("hashkey");
  console.dir(kisInformation, { depth: 3 });
})()