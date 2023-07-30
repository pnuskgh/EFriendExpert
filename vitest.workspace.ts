/**
* vitest 환경 설정 파일
* 
* @file vitest.workspace.json
* @version 0.0.1
* @license GNU General Public License v3.0
* @copyright 2017~2023, EFriendExport Community Team
* @author gye hyun james kim <pnuskgh@gmail.com> 
*/

import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
    'efriend/*',
    {
        test: {
            environment: 'node',                            //--- node, jsdom
            globals: true,
            name: 'EFriendExpert-library',
            root: '.',
            include: [
                'packages/**/*.spec.ts',
                'tests/**/*.spec.ts'
            ],
            setupFiles: [ './tests/setup.library.ts' ]
        }
    }
]);
