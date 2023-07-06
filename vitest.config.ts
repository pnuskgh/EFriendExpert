/**
 * vitest 환경 설정 파일
 * 
 * @file vitest.config.json
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com> 
 */

import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        name: 'EFriendExpert',
        root: './packages',
        environment: 'node',
        // setupFiles: ['./setup.happy-dom.ts'],    
    }
})
