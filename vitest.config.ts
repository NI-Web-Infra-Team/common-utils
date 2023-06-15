import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      coverage: {
        // you can include other reporters, but 'json-summary' is required, json is recommended
        reporter: ["text", "html", "clover", "json-summary", "json"],
      },
    },
  })
);
