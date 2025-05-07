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

let databasename = `${getRoot()}/files/sqlite3/EFriendExpert.db`;
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

export const guid_koreainvestment = '5977df30-138d-11f0-a66e-4bd46a0b0d2d';     //--- 한국투자증권
export const guid_lssec = '8ca73450-138d-11f0-a66e-4bd46a0b0d2d';               //--- LS증권
export const guid_dbsec = '8d066b50-138d-11f0-a66e-4bd46a0b0d2d';               //--- DB증권
export const guid_kiwoom = '8d5e7660-138d-11f0-a66e-4bd46a0b0d2d';              //--- 키움증권

const getCompanyGuid = (company) => {
    let guid = '';
    switch (company) {
        case '한국투자증권':
            guid = guid_koreainvestment;
            break;
        case 'LS증권':
            guid = guid_lssec;
            break;
        case 'DB증권':
            guid = guid_dbsec;
            break;
        case '키움증권':
            guid = guid_kiwoom;
            break;
        default:
            guid = guid_koreainvestment;
            break;  
    }
    return guid;
}

// (await getSpecification('한국투자증권', trid, secret.isActual) as METADATA)
export const getSpecification = async (company, trid, isProduct = true) => {
    try {
        
        
        connect();
        const query = `SELECT * FROM StockSpec WHERE company = '${getCompanyGuid(company)}' AND trid = '${trid}' AND isProduct = ${isProduct}`;
        const item: any = await getItem(query);
        if (item == null) {
            return null;
        } else {
            const json = JSON.parse(item.json);
            json.info.category = item.category;
            json.info.subCategory = item.subCategory;
            json.info.name = item.name;
            json.info.trid = item.trid;
            json.info.isProduct = item.isProduct;

            // json.info.isCustom = item.isCustom;
            // json.info.isConfirm = item.isConfirm;
            json.info.downloadDate = item.downloadDate;
            json.info.verifyDate = item.verifyDate;
            // json.info.verifier = item.verifier;
            // json.info.processCount = item.processCount;

            json.info.method = json.info.method ?? item.method;
            json.info.domain = json.info.domain ?? item.domain;
            json.info.url = json.info.url ?? item.url;
            json.info.contentType = json.info.contentType ?? item.contentType;
            json.info.format = json.info.format ?? item.format;
            json.info.version = json.info.version ?? item.version;

            json.info.countPerSecond = json.info.countPerSecond ?? -1;
            json.info.memo = json.info.memo ?? '';
            json.info.description = json.info.description ?? '';
            return json;
        }
        // return (item == null) ? null : JSON.parse(item.json);
    } catch (err) {
        console.error(err);
        return null;
    }
};

export default getSpecification;

//--- node  packages/efriend/Specfications.js
// const item = await getSpecification('한국투자증권', 'TTTC0011U');
// console.log(item);
