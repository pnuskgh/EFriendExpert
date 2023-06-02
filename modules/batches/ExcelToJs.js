'use strict'
/**
 * @copyright GNU General Public License v3.0
 * @author gye hyun james kim [pnuskgh@gmail.com]
 */

import fs from 'fs';
import path from 'path';
import Excel from '../../include/Excel.js';

class ExcelToJs {
    constructor() {
    }

    async run() {
        const excel = new Excel();

        const options = {
            excel: 'EFriendExpert.xlsx',
            sheet: 'TTTC0802U',
            top: 13,
            size: 10,
            format: 'Array'
        };
        const table001 = await excel.readTable(options);
        console.log(table001);

        fs.writeFileSync(path.join(appl.root, 'files', 'EFriendExpert', 'zztest.js'), JSON.stringify(table001));
    }
}

export default ExcelToJs;
export { ExcelToJs };
