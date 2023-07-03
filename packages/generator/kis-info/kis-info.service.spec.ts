/*
 * /packages/generator/services/kis-info.service.spec.ts
 * 
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @author dalcon10028 <dalcon10280@gmail.com>
 */
import { beforeAll, describe, it } from 'vitest'
import { KisInfoService } from './kis-info.service';
import { ExcelService } from '../excel/excel.service';

describe('KisInfoService', () => {
  let kisInfoService: KisInfoService;
  let excelService: ExcelService;

  beforeAll(async () => {
    excelService = await ExcelService.create();
    kisInfoService = new KisInfoService(excelService);
  })

  it.concurrent('hashkey 불러오기', async () => { 
    const kisInformation = await kisInfoService.getKisInfo("hashkey");
    console.dir(kisInformation, { depth: 3 });
  })

  it.concurrent('json file 생성하기', async () => {
    const excludeSheetNames = ['EFriendExpert', 'Sample'];
    const sheetNames = (await excelService.getSheetNames()).filter((sheetName) => !excludeSheetNames.includes(sheetName));
    // console.log(sheetNames[2]);
    // kisInfoService.writeKisInfo(sheetNames[2]);
    for await (const sheetName of sheetNames) {
      await kisInfoService.writeKisInfo(sheetName);
    }
  })
})