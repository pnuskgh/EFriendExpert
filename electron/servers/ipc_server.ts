'use strict'
/**
 * 한국투자증권 EFriendExpert Desktop Application
 * 
 * @file electron/servers/ipc_server.js
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { ipcMain, IpcMainInvokeEvent } from 'electron';
const EFriend_JSON_TRID = require('efriend');

export const initialize_ipc_server = () => {
    //--- ipcRenderer.invoke('log', messages)
    ipcMain.handle('log', (_event: IpcMainInvokeEvent, args: Array<any>): void => {
        console.log(...args);
    });

    ipcMain.handle('getMetadata', (_event: IpcMainInvokeEvent, args: Array<any>): any => {
        return EFriend_JSON_TRID[`${args[0]}_실전`];
    });

    // //--- ipcRenderer.send("asyncPing")
    // ipcMain.on('asyncPing', (event: IpcMainEvent, _args: Array<any>) => {
    //     console.log("asyncPing received");
    //     event.sender.send('asyncPong', 'asyncPong');
    // });
    
    // //--- ipcRenderer.sendSync("syncPing")
    // ipcMain.on('syncPing', (event: IpcMainEvent, _args: Array<any>) => {
    //     console.log('syncPing received');
    //     event.returnValue = 'syncPong';
    // });

    ipcMain.handle('ping', (_event: IpcMainInvokeEvent, _args: Array<any>): string => {
        // throw new Error("Something Went Wrong");
        return 'pong';
    });
};

