import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import svgr from '@svgr/rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";

import packageJson from "./package.json" assert { type: "json" };

export default [
  {
    input: "src/index.ts",
    external: ['react-dom', 'styled-components'],
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      svgr({ typescript: true }),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];