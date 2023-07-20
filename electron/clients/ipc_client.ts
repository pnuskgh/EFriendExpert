'use strict'
/**
 * 한국투자증권 EFriendExpert Desktop Application
 * 
 * @file electron/clients/ipc_client.js
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { ipcRenderer } from 'electron';

export const node = () => process.versions.node;
export const chrome = () => process.versions.chrome;
export const electron = () => process.versions.electron;

export const ping = () => ipcRenderer.invoke('ping');                           //--- ipcMain에게 ping 요청을 보낸다.
export const log = (...messages) => ipcRenderer.invoke('log', messages);

// ipcRenderer.send('asyncPing');   () => string
// ipcRenderer.sendSync('sync')     () => string
// ipcRenderer.invoke('aaa')        () => Promise<string>

export interface IPC_CLIENT {
    log: (...messages: any) => Promise<void>,

    node: () => string,
    chrome: () => string,
    electron: () => string,
    ping: () => Promise<string>
}

export const ipc_client: IPC_CLIENT = {
    log: log,

    node: node,
    chrome: chrome,
    electron: electron,
    ping: ping
};

export default ipc_client;

