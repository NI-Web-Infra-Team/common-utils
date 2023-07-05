import { defineConfig, mergeConfig, configDefaults } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      coverage: {
        // you can include other reporters, but 'json-summary' is required, json is recommended
        reporter: ["text", "html", "clover", "json-summary", "json"],
        reportsDirectory: "unit-coverage",
      },
      exclude: [...configDefaults.exclude, "**/tests/e2e/**/?(*.){test,spec}.?(c|m)[jt]s?(x)"],
    },
  })
);
