import { execa } from "execa";
import { task } from "hereby";

export const obcon_service = task({
    name: "obcon_service",
    run: async () => {
        await execa("built/local/tsgo", ["tsc", "-p", "./conf/tsconfig.obcon_service.json"]);
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
