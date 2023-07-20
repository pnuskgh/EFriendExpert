'use strict'
/**
 * 한국투자증권 EFriendExpert Desktop Application
 * 
 * @file electron/main.js
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2023, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

//--- Documents
//---     https://www.electronjs.org/docs/latest/
//---     https://github.com/electron/electron/tree/v24.1.2/docs
//--- API
//---     https://www.electronjs.org/docs/latest/api/app

import path from 'path';
import { app, BrowserWindow, ipcMain } from 'electron';

class EFriendDesktopApplication {
    public async initialize(): Promise<void> {
        try {
            ipcMain.handle('ping', () => 'pong');               //--- ipcRenderer로부터 ping 요청을 받으면 pong 응답을 한다.

            const createWindow = () => {
                const options = {
                    width: 800,
                    height: 600,
                    webPreferences: {
                        nodeIntegration: true,
                        //--- index.html을 로드할 때 실행하는 함수
                        preload: path.join(__dirname, 'modules', 'homes', 'js', 'preload.js')                   //--- 절대 경로로 지정 한다.
                    }
                };
                const win = new BrowserWindow(options);
                win.loadFile(path.join('modules', 'homes', 'index.html'));
            
                // const contents = win.webContents;
                // console.log('createWindow', contents);
            };
            
            // app.on('ready', (event, launchInfo) => {
            //     console.log('ready');
            //     createWindow();
            
            //     app.on('activate', (event, hasVisibleWindows) => {
            //         console.log('activate', BrowserWindow.getAllWindows().length);
            //         //--- For macOS
            //         if (BrowserWindow.getAllWindows().length === 0) {
            //             createWindow();
            //         }
            //     });
            // });
            
            app.on('window-all-closed', () => {
                console.log('window-all-closed');
                if (process.platform !== 'darwin') {
                    app.quit();
                }
            });
            
            // app.on('accessibility-support-changed', (event, accessibilitySupportEnabled) => {});
            // app.on('activity-was-continued', (event, type, userInfo) => {});
            // app.on('before-quit', (event) => {});
            // app.on('browser-window-blur', (event, window) => {});
            // app.on('browser-window-created', (event, window) => {});
            // app.on('certificate-error', (event, webContents, url, error, certificate, callback, isMainFrame) => {});
            // app.on('child-process-gone', (event, details) => {});
            // app.on('continue-activity', (event, type, userInfo, details) => {});
            // app.on('continue-activity-error', (event, type, error) => {});
            // //--- 생략
            // app.on('web-contents-created', (event, webContents) => {});
            // app.on('will-continue-activity', (event, type) => {});
            // app.on('will-finish-launching', () => {});
            // app.on('will-quit', (event) => {});

            app.whenReady().then(() => {
                console.log('ready');
                createWindow();
            
                app.on('activate', (_event, _hasVisibleWindows) => {
                    console.log('activate', BrowserWindow.getAllWindows().length);
                    //--- For macOS
                    if (BrowserWindow.getAllWindows().length === 0) {
                        createWindow();
                    }
                });
            });
        } catch(ex) {
            console.error(ex);
        }
    }
}

(async () => {
    try {
        const application: EFriendDesktopApplication = new EFriendDesktopApplication();
        await application.initialize();
    } catch(ex) {
        console.error(ex);
    }
})();