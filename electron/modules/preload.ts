'use strict'
/**
 * 한국투자증권 EFriendExpert Desktop Application
 * 
 * @file electron/modules/preload.js
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { contextBridge } from 'electron';
import efriend from './efriend';

//--- window.ipc 변수에 저장하여 HTML5로 전달 한다.
contextBridge.exposeInMainWorld('efriend', efriend);

export const replaceHtml = (selector: string, html: string) => {
    const element = document.getElementById(selector);
    if (element) {
        element.innerHTML = html;
    }
};

export const replaceText = (selector: string, text: string) => {
    const element = document.getElementById(selector);
    if (element) {
        element.innerText = text;
    }
};

const messages: Array<string> = [];
window.addEventListener('DOMContentLoaded', () => {
    try {
        messages.push('111');
        for (const dependency of ['chrome', 'node', 'electron']) {
            messages.push(`${dependency}-version: ${process.versions[dependency]}`);
            replaceText(`${dependency}-version`, process.versions[dependency] + '');
        }

        // replaceHtml('ipc', Object.entries(process.ipc).reduce((results, item) => { 
        //     results.push(`<span>${item[0]}</span>: ${item[1]}`);
        //     return results;
        // }, []).join('<br/>'));

        replaceHtml('messages', messages.join('</br>'));
    } catch(ex) {
        replaceHtml('messages', 'Exception: ' + messages.join('</br>'));
    }
});
