import { beforeAll, describe, it } from 'vitest'
import { KisInfoService } from './kis-info.service';
import { ExcelService } from './excel.service';

describe('KisInfoService', () => {
  let kisInfoService: KisInfoService;

  beforeAll(async () => {
    const excelService = await ExcelService.create();
    kisInfoService = new KisInfoService(excelService);
  })

  it.concurrent('hashkey 불러오기', async () => { 
    const kisInformation = await kisInfoService.getKisInfo("hashkey");
    console.dir(kisInformation, { depth: 3 });
  })
})