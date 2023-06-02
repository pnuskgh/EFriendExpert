'use strict'
/**
 * @copyright GNU General Public License v3.0
 * @author gye hyun james kim [pnuskgh@gmail.com]
 */

import fs from 'fs';
import path from 'path';
const exceljs = await require('exceljs');

class Excel {
    constructor() {
    }

    async readTable(options = {}) {
        try {
            // const exceljs = (await import('exceljs')).default;

            const _options = {
                // excel: 'EFriendExpert.xlsx',
                // sheet: 'IECP',                              //--- 이름 또는 번호 (0, 1, 2, ...)
                columns: [],                                //--- 컬럼 이름 (Default, col_1, col_2, ...)
                top: 1,                                     //--- To-Do: 동적으로 시작 위치를 지정하는 방법 필요
                bottom: 9999,                               //--- 번호 또는 마지막을 표시하는 문자열 (END)
                left: 2,                                    //--- 컬럼 위치 (1, 2, 3, ...)
                size: 0,                                    //--- 읽을 열의 크기
                format: 'JSON',                             //--- Array, JSON
                ...options
            };

            if ((typeof(_options.excel) == 'undefined') ||
                (typeof(_options.sheet) == 'undefined') ||
                _options.size <= 0) {
                return { code: 501, message: `옵션을 확인 하세요.`, data: {}, error: {} };
            }

            for (let idx = _options.columns.length; idx < _options.size; idx++) {
                _options.columns.push(`col_${idx + 1}`);
            }

            const excelFile = path.join(appl.root, 'files', 'excel', _options.excel);
            if (!fs.existsSync(excelFile)) {
                return { code: 502, message: `${_options.excel} 파일이 존재하지 않습니다.`, data: {}, error: {} };
            }

            const workbook = new exceljs.Workbook();
            await workbook.xlsx.readFile(excelFile);
            const worksheet = workbook.getWorksheet(_options.sheet);

            let data = [];
            for (let idxRow = _options.top; idxRow <= _options.bottom; idxRow++) {
                const row = worksheet.getRow(idxRow);

                const cells = row.values;
                if (cells.length == 0) {
                    break;
                }

                const item = [];
                for (let idxCell = _options.left; idxCell < _options.left + _options.size; idxCell++) {
                    let cell = cells[idxCell] || '';
                    cell = cell.result || cell;
                    item.push(cell);
                }
                if (item.join('').trim() == 'END') {
                    break;
                }

                if (_options.format == 'JSON') {
                    const itemJson = {};
                    for (let idx = 0; idx < _options.size; idx++) {
                        itemJson[_options.columns[idx]] = item[idx]
                    }
                    itemJson['_data'] = item;
                    data.push(itemJson);
                } else {
                    data.push(item);
                }
            }
            return { code: 0, message: 'ok', data: data, error: {} };
        } catch (ex) {
            logger.error(ex);
            return { code: 599, message: 'Exception', data: {}, error: ex };
        }
    }
}

export default Excel;
export { Excel };
