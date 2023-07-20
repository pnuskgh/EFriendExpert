'use strict'
/**
 * 한국투자증권 Desktop Application
 * 
 * @file electron/preload.js
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }
  
    for (const dependency of ['chrome', 'node', 'electron']) {
        console.log(process.versions);
        replaceText(`${dependency}-version`, process.versions[dependency])
    }
});
