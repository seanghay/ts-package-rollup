import { defineConfig } from "rollup";
import dts from "rollup-plugin-dts";
import esbuild, { minify } from "rollup-plugin-esbuild";
import del from "rollup-plugin-delete";
import pkg from "./package.json";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default defineConfig([
  {
    plugins: [
      del({ targets: "dist/*" }),
      nodeResolve(),
      commonjs(),
      json(),
      esbuild(),
      minify(),
    ],

    input: ["./src/main.ts"],
    output: [
      { file: pkg.main, format: "cjs", sourcemap: true },
      { file: pkg.module, format: "es", sourcemap: true },
    ],
  },
  {
    plugins: [dts({})],
    input: ["./src/main.ts"],
    output: [{ file: "dist/main.d.ts", format: "es" }],
  },
]);
