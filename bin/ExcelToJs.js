'use strict'
/**
 * @copyright GNU General Public License v3.0
 * @author gye hyun james kim [pnuskgh@gmail.com]
 */

import Application from '../include/Application.js';
import ExcelToJs from '../modules/batches/ExcelToJs.js';

//--- node  bin/ExcelToJs.js
const application = new Application();
await application.initialize();
await application.batch(new ExcelToJs());
