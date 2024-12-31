import { defineConfig } from "tsup";

/**
 * TSUp Configuration
 *
 * @tutorial [TSUp-Documentation](https://tsup.egoist.dev/)
 */
export default defineConfig({
  format: ["cjs", "esm"],
  entry: ["src/**/*.ts"],
  outDir: "./dist",
  dts: true,
  shims: true,
  bundle: false,
  skipNodeModulesBundle: true,
  clean: true
});
