import dts from "rollup-plugin-dts";

export default {
  input: "src/index.ts",
  output: [{ file: "dist/index.d.ts", format: "es" }],
  plugins: [dts()],
  external: [/\.scss$/] // <— ignore styles.scss imports
};
