'use strict'
/**
 * @copyright GNU General Public License v3.0
 * @author gye hyun james kim [pnuskgh@gmail.com]
 */

import '../include/require.js';

class Application {
    _getPath(path, ext) {
        path = path.replace(/\\/g, '/');
        if ((path.startsWith('c:')) || (path.startsWith('C:'))) {
            path = `file://${path}`;
        }
    
        if ((typeof(appl.root) != 'undefined') && (-1 < path.indexOf(appl.root))) {
            if ((ext != null) && (path.endsWith(`.${ext}`)) == false) {
                path = `${path}.${ext}`;
            }
        }
        return path;
    }

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
            }
        } catch(ex) {
            console.error(ex);
            process.exit(2);
        }
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

export default Application;
export { Application };
