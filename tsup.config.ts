import { defineConfig } from "tsup";

/**
 * TSUp Configuration
 *
 * @tutorial [TSUp-Documentation](https://tsup.egoist.dev/)
 */
export default defineConfig({
  format: ["cjs", "esm"],
  entry: ["./src/index.ts"],
  dts: true,
  shims: true,
  skipNodeModulesBundle: true,
  clean: true
});
