/**
 * 이베스트투자증권 EBest
 * 
 * @file tests/packages/EFriendExpert/ebest/efriend.test.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { createInterface } from 'readline';

import { describe, it, expect } from 'vitest'

const readline = createInterface({
    input: process.stdin,
    output: process.stdout
});

const readLineAsync = (msg: Array<string> | string, defaultValue?: string): Promise<string> => {
    return new Promise(resolve => {
        let question = ((Array.isArray(msg)) ? msg.join('\n'):msg);
        if (typeof(defaultValue) == 'undefined') {
            question = question + '\n> ';
        } else {
            question = question + `\n> ${defaultValue} : `;
        }
        readline.question(question, answer => {
            resolve((answer == '') ? (defaultValue ?? answer):answer);
        });
    });
}

function testRest() {
    return 0;
}

describe('EBest', () => {
    it('EBest REST API Test', () => { expect(testRest()).toBe(0); });
});
