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

// ipcRenderer.send('asyncPing');   () => string
// ipcRenderer.sendSync('sync')     () => string
// ipcRenderer.invoke('aaa')        () => Promise<string>

export interface IPC_CLIENT {
    log: (...messages: any) => Promise<void>,
    getMetadata: (trid: string) => Promise<any>,

    node: () => string,
    chrome: () => string,
    electron: () => string,
    ping: () => Promise<string>
}

export const ipc_client: IPC_CLIENT = {
    log: (...messages) => ipcRenderer.invoke('log', messages),
    getMetadata: (trid: string) => ipcRenderer.invoke('getMetadata', [ trid ]),

    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    ping: () => ipcRenderer.invoke('ping')
};

export default ipc_client;
