'use strict'
/**
 * Utility
 * 
 * @file packages/EFriendExpert/common/utils/import.util.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import fs from 'fs';
import path from 'path';

export const importUtil = {
    import: async <Service>(filename: string): Promise<Service | null> => {
        filename = path.join(process.cwd(), filename);
        if ((fs.existsSync(`${filename}.js`)) || (fs.existsSync(`${filename}.ts`))) {
            const prefix = (filename.startsWith('/')) ? 'file://localhost/':'file:///';
                try {
                    const importModule = await import(`${prefix}${filename}`);
                    console.log('import js file');
                    return new importModule();
                } catch(ex) {
                    try {
                        const importModule = await import(`${prefix}${filename}.ts`);
                        console.log('import ts file');
                        return new importModule();
                    } catch(ex) {
                        return null;
                    }
                }
        }
        return null;
    } 
};
