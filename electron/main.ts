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
//---     https://github.com/electron/electron/tree/v25.3.1/docs
//--- API
//---     https://www.electronjs.org/docs/latest/api/app

import path from 'path';
import { app, BrowserWindow, ipcMain } from 'electron';
import { Event, NotificationResponse, BrowserWindowConstructorOptions } from 'electron';

class EFriendDesktopApplication {
    private win: BrowserWindow | null = null;

    public async initialize(): Promise<void> {
        try {
            this.init_app();
            this.init_ipcMain();
        } catch(ex) {
            console.error(ex);
        }
    }

    private init_app(): void {
        app.on('ready', function(_event: Event, _launchInfo: (Record<string, any>) | (NotificationResponse)) {
            this.createWindow();
            this.setMenu();
            //--- process.platform : win32. windows, linux: linux, darwin: MacOS
            console.log('Welcome EFriendExpert Desktop Application:', process.platform);
        }.bind(this));

        app.on('activate', function(_event: Event, _hasVisibleWindows: boolean) {
            if (BrowserWindow.getAllWindows().length === 0) {
                this.createWindow();
            }
        }.bind(this));
        
        app.on('window-all-closed', () => {
            console.log(' ');
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
    }

    public createWindow(): void {
        const options: BrowserWindowConstructorOptions = {
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
                preload: path.join(__dirname, 'modules', 'preload.js')
            }
        };
        this.win = new BrowserWindow(options);
        this.win.loadFile(path.join(__dirname, 'modules', 'homes', 'index.html'));
    }

    public setMenu(): void {
        // const template: Array<(MenuItemConstructorOptions) | (MenuItem)> = [
        // ];
        // const menu = Menu.buildFromTemplate(template)
        // Menu.setApplicationMenu(menu);
    }

    private init_ipcMain(): void {
        ipcMain.handle('ping', () => {
            console.log('ping');
            return 'pong';
        });
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