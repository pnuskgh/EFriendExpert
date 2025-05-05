/**
 * @author gye hyun james kim <pnuskgh@gmail.com>
 * @copyright 2017~2025, OBCon Inc.
 * @license GNU GENERAL PUBLIC LICENSE v3.0 (https://github.com/jopenbusiness/StockHub?tab=GPL-3.0-1-ov-file)
 */

import fs from 'fs';
import path from 'path';
import { cwd } from 'process';
import { execa } from "execa";
import { task } from "hereby";

const rootFolder = cwd();
const packageFilename = path.join(rootFolder, 'package.json');
const packageContent = fs.readFileSync(packageFilename, 'utf-8');
const makePackageJson = (moduleType) => {
    const packageContentNew = [];
    packageContent.split('\n').forEach((line) => {
        if (line.match(/"type": "module"/)) {
            packageContentNew.push(`    "type": "${(moduleType == 'esm') ? 'module' : 'commonjs'}",`);
        } else {
            packageContentNew.push(line);
        }
    });
    const packageFilenameNew = path.join(rootFolder, 'lib', moduleType, 'package.json');
    fs.writeFileSync(packageFilenameNew, packageContentNew.join('\n'));
};

export const obcon_service = task({
    name: "obcon_service",
    run: async () => {
        await execa("built/local/tsgo", ["tsc", "-p", "./conf/tsconfig.obcon_service.json"]);
    },
});

export const typescript_compile = task({
    name: "typescript_compile",
    run: async () => {
        await execa("built/local/tsgo", ["tsc", "-p", "./conf/tsconfig.esm.json"]);
        makePackageJson('esm');

        await execa("built/local/tsgo", ["tsc", "-p", "./conf/tsconfig.cjs.json"]);
        makePackageJson('cjs');
    },
});

// export const build = task({
//     name: "build",
//     run: async () => {
//         await execa("tsc", ["-p", "./conf/tsconfig.obcon_service.json"]);
//     },
// });

// export const test = task({
//     name: "test",
//     dependencies: [build],
//     run: async () => {
//         await execa("node", ["./out/test.js"]);
//     },
// });

// // export const lint = task({
// //     name: "lint",
// //     run: async () => {
// //         await runLinter(...);
// //     },
// // });

// export const testAndLint = task({
//     name: "testAndLint",
//     dependencies: [test, lint],
// });

// export default testAndLint;

// export const bundle = task({
//     name: "bundle",
//     dependencies: [build],
//     run: async () => {
//         await execa("esbuild", [
//             "--bundle",
//             "./out/index.js",
//             "--outfile=./out/bundled.js",
//         ]);
//     },
// });
