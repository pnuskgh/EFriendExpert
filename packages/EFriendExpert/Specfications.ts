/**
 * 한국투자증권 Node Library
 * 
 * @file packages/EFriendExpert/Specfications.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @copyright 2017~2025, EFriendExport Community Team
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

// import fs from 'fs';
import path from 'path';
import sqlite3 from 'sqlite3';                              //--- https://www.npmjs.com/package/sqlite3
import { fileURLToPath } from 'url';

/*
cd  C:/work/EFriendExpert
npm  run  obcon_service

cd  C:/work/OBCon_Service
node  packages/efriend/Specfications.js
 */

const getRoot = (): string => {
    let rootFolder = path.dirname(fileURLToPath(import.meta.url));
    for (let idx = 0; idx < 10; idx++) {
        if (path.basename(rootFolder) == 'packages') {
            rootFolder = path.dirname(rootFolder).replace(/\\/g, '/');
            break;
        }
        rootFolder = path.dirname(rootFolder);
    }
    return rootFolder;
}

let databasename = `${getRoot()}/files/sqlite3/database.db`;
export const setDatabasename = (dbname) => {
    databasename = dbname;
}

let database: null | sqlite3.Database = null;
export const connect = (dbname = '') => {
    if (dbname == '') {
        if (database == null) {
            database = new sqlite3.Database(databasename);
        }
    } else {
        setDatabasename(dbname);
        database = new sqlite3.Database(databasename);
    }
    return database;
}

export const disconnect = () => {
    if (database != null) {
        database.close();
        database = null;
    }
}

const getItem = async (query) => {
    return new Promise((resolve, reject) => {
        if (database == null) {
            reject(new Error('database is not connected'));
        } else {
            database.get(query, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        }
    });
}   

// (await getSpecification('한국투자증권', trid, secret.isActual) as METADATA)
export const getSpecification = async (company, trid, isProduct = true) => {
    try {
        connect();
        const query = `SELECT * FROM StockSpec WHERE company = '${company}' AND trid = '${trid}' AND isProduct = ${isProduct}`;
        const item: any = await getItem(query);
        return (item == null) ? null : JSON.parse(item.json);
    } catch (err) {
        console.error(err);
        return null;
    }
};

export default getSpecification;

// const item = await getSpecification('한국투자증권', 'TTTC0011U');
// console.log(item);
