import vitePreprocessor from "cypress-vite";
import coverage from "@cypress/code-coverage/task";

/**
 * @type {Cypress.PluginConfig}
 */
export function setupNodeEvents(on, config) {
  coverage(on, config);
  on("file:preprocessor", vitePreprocessor());
  return config;
}
