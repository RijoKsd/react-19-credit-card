import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/lib/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/es/index.js",
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    postcss({
      extract: true, // ✅ creates dist/es/assets/output.css
      minimize: true,
      sourceMap: true,
    }),
  ],
  external: ["react", "react-dom"],
};
