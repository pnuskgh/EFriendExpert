'use strict'
/**
 * @copyright GNU General Public License v3.0
 * @author gye hyun james kim [pnuskgh@gmail.com]
 */

import path from 'path';
import { fileURLToPath } from 'url';

function _getPath(path, ext) {
    path = path.replace(/\\/g, '/');
    if ((path.startsWith('c:')) || (path.startsWith('C:'))) {
        path = `file://${path}`;
    }

    if ((typeof(appl) != 'undefined') && (typeof(appl.root) != 'undefined') && (-1 < path.indexOf(appl.root))) {
        if ((ext != null) && (path.endsWith(`.${ext}`)) == false) {
            path = `${path}.${ext}`;
        }
    }
    return path;
}

async function funcRequire(path, ext) {
    const obj = await import(_getPath(path, ext));
    return obj.default;
}

async function funcRequireNamed(path, ext) {
    return await import(_getPath(path, ext));
}

//--- 사용법
//---    파일의 최상위에서 사용 한다.
//---    async 함수 안에서 사용 한다.

//--- Default import
global.require = async function(path, ext = 'js') {
    try {
        return await funcRequire(path, ext);
    } catch (err) {
        console.error(err);
    }
    return null;
};

//--- Named import
global.requireNamed = async function(path, ext = 'js') {
    try {
        return await funcRequireNamed(path, ext);
    } catch (err) {
        console.error(err);
    }
};

//--- __dirname 정의 : ES6 modules에는 __dirname이 없음
//---     include/ 폴더의 __dirname을 가진다.
const __filename = fileURLToPath(import.meta.url);
global.__dirname = path.dirname(__filename).replace(/\\/g, '/');
