'use strict'
/**
 * include/Application.js
 * 
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import fs from 'fs';
import path from 'path';

import './Require.js';

class Application {
    async initialize() {
        try {
            if (typeof(appl) == 'undefined') {
                const folderName = 'EFriendExpert';
                const cwd = process.cwd();
                if (cwd.indexOf(folderName) == -1) {
                    console.error('EFriendExpert Service의 최상위 폴더에서 실행 하세요.');
                    process.exit(1);
                }

                global.appl = {
                    root: cwd.substring(0, cwd.indexOf(folderName) + folderName.length),
                    logger: console
                };
                this._copyFile('version.json', 'version_local.json');
            }
        } catch(ex) {
            console.error(ex);
            process.exit(2);
        }
    }

    _copyFile(source, target) {
        const content = fs.readFileSync(path.join(appl.root, source));
        fs.writeFileSync(path.join(appl.root, target), content);
    }

    async batch(batchApplication) {
        try {
            await batchApplication.run();
        } catch(ex) {
            logger.error(ex);
            process.exit(3);
        }
    }
}