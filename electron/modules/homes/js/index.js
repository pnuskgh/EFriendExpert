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

window.onload = (event) => {
    replaceText('info001', `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`);

    const func = async () => {
        const response = await window.versions.ping();
        replaceText('info002', response);
        console.log(response);
    };
    func();
};
