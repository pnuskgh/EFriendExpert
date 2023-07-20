'use strict'
/**
 * 한국투자증권 ipc_clientExpert Desktop Application
 * 
 * @file electron/modules/homes/js/index.js
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, ipc_clientExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

declare const ipc_client: typeof import("../../ipc_client").default;

const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) {
        element.innerText = text;
    }
};

window.addEventListener('DOMContentLoaded', async () => {
    try {
        replaceText('info001', `This app is using Chrome (v${ipc_client.chrome()}), Node.js (v${ipc_client.node()}), and Electron (v${ipc_client.electron()})`);

        const response = await ipc_client.ping();
        // window.alert(`ping after ${response}`);
        replaceText('info002', response);
    } catch(ex) {
        replaceText('messages', JSON.stringify(ex));
    }
});
