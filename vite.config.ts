import { defineConfig } from "vite";
import IstanbulPlugin from "vite-plugin-istanbul";
import banner from "vite-plugin-banner";
import bannerContent from "./build/banner";

import pkg from "./package.json";

const plugins = [
  banner({
    content: bannerContent,
  }),
];
if (process.env.CYPRESS === "true") {
  plugins.push(
    IstanbulPlugin({
      include: "src/**/*",
      exclude: ["dist", ".nyc_output", "node_modules", "coverage", "tests"],
      requireEnv: false,
      forceBuildInstrument: true,
      cypress: true,
      checkProd: true,
    })
  );
}

export default defineConfig({
  build: {
    sourcemap: false,
    target: "esnext",

    lib: {
      entry: "src/index.ts",
      name: "niUtils",
      formats: ["es", "umd"],
      fileName: (format) => `index${format === "umd" ? "" : "." + format}.js`,
    },

    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external(id: string) {
        // @ts-ignore
        return Object.keys(pkg.dependencies ?? {}).some((k) => new RegExp(`^${k}`).test(id));
      },
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
  plugins,
});
