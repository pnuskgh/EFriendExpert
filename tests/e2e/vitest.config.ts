/*
 * /packages/batch/open-api-e2e/vitest.config.ts
 * 
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @author dalcon10028 <dalcon10280@gmail.com>
 */

import { defineConfig } from 'vitest/config'
import 'dotenv/config'

export default defineConfig({
  test: {
    name: 'EFriendExpert',
    dir: 'tests/e2e',
  }
})
