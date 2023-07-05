import { defineConfig } from "cypress";
import { setupNodeEvents } from "./tests/e2e/plugins/index";

export default defineConfig({
  env: { CYPRESS_COVERAGE: "true" },
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
  e2e: {
    specPattern: ["**/tests/e2e/**/?(*.){test,spec}.?(c|m)[jt]s?(x)"],
    supportFile: "tests/e2e/support/index.ts",
    setupNodeEvents,
  },
});
