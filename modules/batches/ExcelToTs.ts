import Excel, { ReadTableOptions } from '../../include/Excel';

export class ExcelToTs {
    async run() {
        const excel = new Excel();

        const options: ReadTableOptions = {
            excel: 'EFriendExpert.xlsx',
            sheet: 'FHKST01010100',
            top: 51,
            bottom: 52,
            format: 'JSON'
        };
        
        const table001 = await excel.readTable(options);

        // fs.writeFileSync(path.join(appl.root, 'files', 'excel', 'zztest.js'), JSON.stringify(table001));
    }
}

// export { ExcelToTs };
