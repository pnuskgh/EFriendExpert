/*
 * /packages/generator/services/excel.service.spec.ts
 * 
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @author dalcon10028 <dalcon10280@gmail.com>
 */
import { beforeAll, describe, expect, it } from 'vitest'
import { ExcelService } from './excel.service';

describe('ExcelService', () => {
  let excelService: ExcelService;

  beforeAll(async () => {
    excelService = await ExcelService.create();
  })

  it.concurrent('getSheetNames', async () => { 
    const sheetNames = [ 'hashkey',
      'tokenP',        'revokeP',       'TTTC0802U',     'TTTC0852U',
      'TTTC0803U',     'TTTC8036R',     'TTTC8001R',     'TTTC8434R',
      'TTTC8908R',     'CTSC0008U',     'CTSC0009U',     'CTSC0004R',
      'TTTC8494R',     'TTTC8909R',     'CTRP6548R',     'FHKST01010100',
      'FHKST01010300', 'FHKST01010400', 'FHKST01010200', 'FHKST01010900',
      'FHKST01010600', 'FHKEW15010000', 'FHKST03010100', 'FHKUP03500100',
      'FHPST01060000', 'FHPST02310000', 'FHPST02320000', 'FHKST03010200',
      'CTPF1604R',     'CTCA0903R',     'FHPTJ04400000', 'HHKST03900300',
      'HHKST03900400', 'FHPPG04650100', 'FHPST01710000', 'HHPTJ04160200',
      'H0STCNT0',      'H0STASP0',      'H0STCNI0',      'TTTO1101U',
      'TTTO1103U',     'TTTO5201R',     'CTFO6118R',     'TTTO5105R',
      'JTCE5005R',     'JTCE6001R',     'JTCE1004R',     'FHMIF10000000',
      'FHMIF10010000', 'FHKIF03020100', 'H0IFCNT0',      'H0IFASP0',
      'H0IFCNI0',      'H0IOCNT0',      'H0IOASP0',      'TTTT1002U',
      'TTTT1004U',     'TTTT3016U',     'TTTT3017U',     'JTTT3018R',
      'JTTT3012R',     'JTTT3001R',     'CTRP6504R',     'TTTT3039R',
      'JTTT3007R',     'TTTS6036U',     'TTTS6038U',     'TTTS3039R',
      'HHDFS00000300', 'HHDFS76240000', 'FHKST03030100', 'HHDFS76410000',
      'CTOS5011R',     'HHDFS76200200', 'HDFSCNT0',      'HDFSASP1',
      'H0GSCNI0',      'HDFSASP0',      'OTFM3001U',     'OTFM3002U',
      'OTFM3116R',     'OTFM1412R',     'OTFM3304R',     'OTFM3118R',
      'OTFM3122R',     'OTFM1411R',     'OTFM3120R',     'OTFM3114R',
      'HHDFC55010100', 'HHDFC55010000', 'HDFFF020',      'HDFFF010',
      'HDFFF1C0',      'HDFFF2C0'
    ];

    const sheetNames2 = await excelService.getSheetNames();

    sheetNames.forEach((sheetName) => {
      expect(sheetNames2).toContain(sheetName);
    });
  })
})