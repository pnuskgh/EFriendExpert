'use strict'
/**
 * 한국투자증권 Desktop Application
 * 
 * @file electron/main.js
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

//--- Tutorial  : https://www.electronjs.org/docs/latest/tutorial/tutorial-prerequisites
//--- Documents : https://github.com/electron/electron/tree/v24.1.2/docs

const path = require('path');
const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const options = {
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            //--- index.html을 로드할 때 실행하는 함수
            preload: path.join(__dirname, 'preload.js')                         //--- 절대 경로로 지정 한다.
        }
    };
    const win = new BrowserWindow(options);
    win.loadFile('main.html');

    const contents = win.webContents;
    console.log(contents);
};

app.whenReady().then(() => {
    createWindow();

    //--- For macOS
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
