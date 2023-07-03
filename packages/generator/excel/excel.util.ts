/*
 * /packages/generator/utils/file.util.ts
 * 
 * @version 1.0.0
 * @license GNU General Public License v3.0
 * @author dalcon10028 <dalcon10280@gmail.com>
 */
import path from "path";

const EXCEL_PATH = '/docs/excel';

export const excelUtil = {
  getExcelFilePath(filename: string) {
    return path.join(process.cwd(), ...EXCEL_PATH.split('/'), filename);
  },
}