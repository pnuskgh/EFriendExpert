'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialize_ipc_server = void 0;
/**
 * 한국투자증권 EFriendExpert Desktop Application
 *
 * @file electron/servers/ipc_server.js
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */
var electron_1 = require("electron");
var efriend_1 = require("efriend");
var initialize_ipc_server = function () {
    //--- ipcRenderer.invoke('log', messages)
    electron_1.ipcMain.handle('log', function (_event, args) {
        console.log.apply(console, args);
    });
    electron_1.ipcMain.handle('getMetadata', function (_event, args) {
        return efriend_1.EFriend_JSON_TRID["".concat(args[0], "_\uC2E4\uC804")];
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
    electron_1.ipcMain.handle('ping', function (_event, _args) {
        // throw new Error("Something Went Wrong");
        return 'pong';
    });
};
exports.initialize_ipc_server = initialize_ipc_server;
