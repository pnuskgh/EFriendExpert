/*
 * /packages/generator/services/excel.service.ts
 * 
 * @version 1.0.0
 * @license GNU General Public License v3.0
 * @author dalcon10028 <dalcon10280@gmail.com>
 */
import { Cell, Row, Workbook, Worksheet } from "exceljs";
import { BaseError, ERROR_CODE } from "../errors";
import { fileUtil, validatorUtil } from "../utils";
import { ExcelConfig, ExcelContent } from "../types";
import { EXCEL_META_DATA } from "../constants";
import { JSONSchemaType } from "ajv";

const excelContentSchema: JSONSchemaType<ExcelContent> = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    version: { type: 'string', nullable: true },
    method: { type: 'string', enum: ['GET', 'POST', 'PUT', 'DELETE'], nullable: false },
    productionDomain: { type: 'string' },
    developmentDomain: { type: 'string' },
    url: { type: 'string' },
    format: { type: 'string', enum: ['JSON', 'XML'], nullable: false },
    contentType: { type: 'string', enum: ['application/json', 'application/xml'], nullable: false },
    memo: { type: 'string', nullable: true },
    table: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          category: { type: 'string' },
          mainCategory: { type: 'string' },
          code: { type: 'string' },
          name: { type: 'string' },
          type: { type: 'string' },
          required: { type: 'string', enum: ['Y', 'N'], nullable: false },
          length: { type: 'integer', nullable: true },
          description: { type: 'string', nullable: true },
          default: { type: 'string', nullable: true },
        },
        required: ['category', 'mainCategory', 'code', 'name', 'type', 'required'],
      },
    },
  },
  required: ['name', 'method', 'productionDomain', 'developmentDomain', 'url', 'format', 'contentType', 'table'],
};

export class ExcelService {
  private readonly workbook: Workbook;

  constructor(workbook: Workbook) {
    this.workbook = workbook;
  }

  static async create(config: ExcelConfig = { fileName: "EFriendExpert.xlsx" }): Promise<ExcelService> {
    const workbook = new Workbook();
    try {
      const excelFile = fileUtil.getExcelFilePath(config.fileName);
      await workbook.xlsx.readFile(excelFile);
    } catch (error) {
      throw new BaseError({ code: ERROR_CODE.EXCEL_PARSE_ERROR, error, data: config });
    }
    return new ExcelService(workbook);
  }

  async getSheetNames(): Promise<string[]> {
    return this.workbook.worksheets.map((worksheet) => worksheet.name);
  }

  async getSheetContents(sheetName: string): Promise<ExcelContent> {
    const workSheet = this.workbook.getWorksheet(sheetName);
    if (!workSheet) {
      throw new BaseError({ code: ERROR_CODE.EXCEL_SHEET_NOT_FOUND, data: { sheetName }});
    }
    const excelContent = {
      table: [],
    } as any;

    let [isRequestRow, isResponseRow, isHeaderRow, isBodyRow] = [false, false, false, false];

    await workSheet.eachRow((row: Row) => {
      /* read meta data */
      const metaName = row.getCell('D').value as keyof typeof EXCEL_META_DATA;
      const metaValue = row.getCell('E').value;
      if (typeof metaName === 'string' && Object.keys(EXCEL_META_DATA).includes(metaName)) {
        excelContent[EXCEL_META_DATA[metaName]] = metaValue;
      }

      /* flag condition */
      const codeExists = !!row.getCell('E').value;

      if (row.getCell('D').value === 'Header') {
        [isHeaderRow, isBodyRow] = [true, false];
      } else if (row.getCell('D').value === 'Body') {
        [isHeaderRow, isBodyRow] = [false, true];
      }
      
      if (row.getCell('C').value === 'Request') {
        [isRequestRow, isResponseRow] = [true, false];
      } else if (row.getCell('C').value === 'Response') {
        [isRequestRow, isResponseRow] = [false, true];
      }

      if (codeExists && (isRequestRow || isResponseRow || isHeaderRow || isBodyRow)) {
        const description = this.getDescriptionFromCell(workSheet, row.getCell('J'));

        excelContent.table.push({
          category: isRequestRow ? 'Request' : isResponseRow ? 'Response' : null,
          mainCategory: isRequestRow ? 'Header' : isResponseRow ? 'Body' : null,
          code: row.getCell('E').value,
          name: row.getCell('F').value,
          type: row.getCell('G').value,
          required: row.getCell('H').value,
          length: row.getCell('I').value,
          description,
          default: row.getCell('K').value || null,
        });
      }
    });
    validatorUtil.validateSchema<ExcelContent>(excelContentSchema, excelContent);
    return excelContent;
  }

  private getDescriptionFromCell(workSheet: Worksheet, { fullAddress: { row } }: Cell) {
    let currentRow = row;
    const firstRow = workSheet.getRow(row).getCell('J').value;
    const description = [firstRow];
    const multiRowDescriptionCharacters = '[:';
    
    if (typeof firstRow === 'string' && !multiRowDescriptionCharacters.split('').reduce((acc, cur) => acc || firstRow.includes(cur), false)) {
      return firstRow;
    }

    do {
      currentRow++;
      description.push(workSheet.getRow(currentRow).getCell('J').value);
    } while (!workSheet.getRow(currentRow).getCell('J').value);
  
    return description.join(' ');
  }
}