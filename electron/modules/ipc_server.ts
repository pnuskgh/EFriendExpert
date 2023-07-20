'use strict'
/**
 * 한국투자증권 EFriendExpert Desktop Application
 * 
 * @file electron/modules/ipc_server.js
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { ipcMain } from 'electron';

export const initialize_ipc_server = () => {
    ipcMain.handle('ping', () => {
        return 'pong';
    });
};

