/*
 * /packages/generator/services/kis-info.service.ts
 * 
 * @version 1.0.0
 * @license GNU General Public License v3.0
 * @author dalcon10028 <dalcon10280@gmail.com>
 */
import { typeUtil } from "../utils";
import { ExcelService } from "./excel.service";
import { ExcelContentBody, KisInformation } from "../types";

export class KisInfoService {
  private readonly excelService: ExcelService;

  constructor(excelService: ExcelService) {
    this.excelService = excelService;
  }

  async getKisInfo(sheetName: string): Promise<KisInformation> {
    const { table, ...meta } = await this.excelService.getSheetContents(sheetName);
    return {
      meta,
      request: {
        headers: this.getExcelContents(table, 'Request', 'Header'),
        body: this.getExcelContents(table, 'Request', 'Body'),
      },
      response: {
        headers: this.getExcelContents(table, 'Response', 'Header'),
        body: this.getExcelContents(table, 'Response', 'Body'),
      }
    }
  }

  private getExcelContents(table: ExcelContentBody[], category: string, mainCategory: string) {
    return table.filter((item) => item.category === category && item.mainCategory === mainCategory).map((item) => ({
      ...item,
      required: item.required === 'Y',
      type: item.code.toLocaleLowerCase().includes('_YN') ? 'boolean' : typeUtil.parseExcelType(item.type),
    }));
  }
}