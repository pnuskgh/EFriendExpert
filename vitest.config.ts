/**
* vitest 환경 설정 파일
* 
* @file vitest.config.json
* @version 0.0.1
* @license GNU General Public License v3.0
* @copyright 2017~2024, EFriendExport Community Team
* @author gye hyun james kim <pnuskgh@gmail.com> 
*/

import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        name: 'EFriendExpert-library',
        environment: 'node',
        globals: true,
        root: '.',
        // include: [ '**/*.{test,spec}.?(c|m)[jt]s?(x)' ],
        include: [ '**/*.test.?(c|m)[jt]s?(x)' ],
        exclude: [ 'conf', 'docs', 'laboratory', 'lib', 'logs', 'node_modules', 'out', 'prisma' ],

        watchExclude: [ '**/lib/**', '**/logs/**', '**/node_modules/**' ],
        watch: true,
        setupFiles: ['./tests/setup.library.ts'],

        // reporters: ['json']
        // reporters: ['verbose']
        // coverage: {
        //     provider: 'v8',
        //     reporter: ['text', 'json', 'html']
        // }
    }
});
