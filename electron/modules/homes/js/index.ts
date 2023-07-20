'use strict'
/**
 * 한국투자증권 EFriendExpert Desktop Application
 * 
 * @file electron/modules/homes/js/index.js
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

declare const efriend: typeof import("../../efriend").default;

const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) {
        element.innerText = text;
    }
};

window.addEventListener('DOMContentLoaded', async () => {
    try {
        replaceText('info001', '333');
        replaceText('info001', efriend.chrome())
        // console.log('DOMContentLoaded');
        // replaceText('info001', `This app is using Chrome (v${global.ipc.chrome()}), Node.js (v${global.ipc.node()}), and Electron (v${global.ipc.electron()}), ${await global.ipc.ping()}`);

        // console.log('ping before');
        // const response = await global.ipc.ping();
        // console.log('ping after', response);
        // window.alert(`ping after ${response}`);
        // replaceText('info002', response);
    } catch(ex) {
        replaceText('messages', JSON.stringify(ex));
    }
});
