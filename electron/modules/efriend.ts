'use strict'
/**
 * 한국투자증권 EFriendExpert Desktop Application
 * 
 * @file electron/modules/efriend.js
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

const { ipcRenderer } = require('electron');

export const node = () => process.versions.node;
export const chrome = () => process.versions.chrome;
export const electron = () => process.versions.electron;
export const ping = () => ipcRenderer.invoke('ping');                           //--- ipcMain에게 ping 요청을 보낸다.

export default {
    node, chrome, electron, ping
}
