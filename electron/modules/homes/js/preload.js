'use strict'
/**
 * 한국투자증권 EFriendExpert Desktop Application
 * 
 * @file electron/modules/homes/js/preload.js
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

const { contextBridge, ipcRenderer } = require('electron');

//--- window.versions 변수에 저장하여 HTML5로 전달 한다.
contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    ping: () => ipcRenderer.invoke('ping')                  //--- ipcMain에게 ping 요청을 보낸다.
});

const replaceHtml = (selector, html) => {
    const element = document.getElementById(selector);
    if (element) {
        element.innerHTML = html;
    }
};

const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) {
        element.innerText = text;
    }
};

const messages = [];
window.addEventListener('DOMContentLoaded', () => {
    try {
        messages.push('111');
        for (const dependency of ['chrome', 'node', 'electron']) {
            replaceText(`${dependency}-version`, process.versions[dependency]);
        }

        // replaceHtml('versions', Object.entries(process.versions).reduce((results, item) => { 
        //     results.push(`<span>${item[0]}</span>: ${item[1]}`);
        //     return results;
        // }, []).join('<br/>'));

        replaceHtml('messages', messages.join('</br>'));
    } catch(ex) {
        replaceHtml('messages', 'Exception: ' + messages.join('</br>'));
    }
});
