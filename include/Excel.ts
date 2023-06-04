import path from 'path';
import exceljs from "exceljs";

export interface ReadTableOptions {
  excel: string;
  sheet: string | number; //--- 이름 또는 번호 (0, 1, 2, ...)
  columns?: string[]; //--- 컬럼 이름 (Default, col_1, col_2, ...)
  top?: number; //--- TODO: 동적으로 시작 위치를 지정하는 방법 필요
  bottom?: number; //--- 번호 또는 마지막을 표시하는 문자열 (END)
  left?: number; //--- 컬럼 위치 (1, 2, 3, ...)
  size?: number; //--- 읽을 열의 크기
  format?: 'JSON' | 'Array'; //--- Array, JSON
}

class Excel {
  async readTable(options: ReadTableOptions) {
    const { columns, size, top, bottom, sheet, excel }: Required<ReadTableOptions> = {
      columns: [],
      top: 1,
      bottom: 9999,
      left: 2,
      size: 0,
      format: 'JSON',
      ...options
    };

    for (let idx = columns.length; idx < size; idx++) {
      columns.push(`col_${idx + 1}`);
    }

    const excelFile = path.join(process.cwd(), 'files', 'excel', excel);

    const workbook = new exceljs.Workbook();
    await workbook.xlsx.readFile(excelFile);
    const worksheet = workbook.getWorksheet(sheet);

    let data = [];
    const rows = worksheet.getRows(top, bottom - top);

    // for (let idxRow = _options.top; idxRow <= _options.bottom; idxRow++) {
    //   const row = worksheet.getRows(idxRow);

    //   const cells = row.values;
    //   if (cells.length == 0) {
    //     break;
    //   }

    //   const item = [];
    //   for (let idxCell = _options.left; idxCell < _options.left + _options.size; idxCell++) {
    //       // const cell = cells[idxCell].result || cells[idxCell] || '';
    //       // item.push(cell);
    //   }
      // if (item.join('').trim() == 'END') {
      //     break;
      // }

      // if (_options.format == 'JSON') {
      //     const itemJson: Record<string, any> = {};
      //     for (let idx = 0; idx < _options.size; idx++) {
      //         itemJson[_options.columns[idx]] = item[idx]
      //     }
      //     itemJson['_data'] = item;
      //     data.push(itemJson);
      // } else {
      //     data.push(item);
      // }
    // }
    // return {};
  }
}

export default Excel;
export { Excel };
