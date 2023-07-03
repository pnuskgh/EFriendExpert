/*
 * /packages/generator/services/kis-info.service.ts
 * 
 * @version 1.0.0
 * @license GNU General Public License v3.0
 * @author dalcon10028 <dalcon10280@gmail.com>
 */
import { kisInfoUtil } from "./kis-info.util";
import { ExcelService } from "../excel/excel.service";
import { KisInformation, KisInformationDataItem } from "./kis-info.type";
import { ExcelContentBody } from '../excel/excel.type';
import { writeFileSync, existsSync, mkdirSync } from "fs";
import { OUTPUT_PATH } from "./kis-info.constant";

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

  async writeKisInfo(sheetName: string) {
    const kisInfo = await this.getKisInfo(sheetName);
    if (!existsSync(OUTPUT_PATH)) {
      mkdirSync(OUTPUT_PATH, { recursive: true });
    }
    writeFileSync(`${OUTPUT_PATH}/${sheetName}.json`, JSON.stringify(kisInfo, null, 4));
  }

  private getExcelContents(table: ExcelContentBody[], category: string, mainCategory: string): KisInformationDataItem[] {
    let currentObject: KisInformationDataItem;

    return table.filter((item) => item.category === category && item.mainCategory === mainCategory).map((item) => {
      const newItem: KisInformationDataItem = {
        ...item,
        required: item.required === 'Y',
        type: item.code.toLocaleLowerCase().includes('_YN') ? 'boolean' : kisInfoUtil.parseExcelType(item.type),
      };
      if (newItem.type === 'object') {
        newItem.children = [];
        currentObject = newItem;
      }
      if (newItem.code.startsWith('-')) {
        currentObject.children?.push({ ...newItem, code: newItem.code.slice(1) });
        return null;
      }
      return newItem;
    }).filter((item) => item !== null) as KisInformationDataItem[];
  }
}