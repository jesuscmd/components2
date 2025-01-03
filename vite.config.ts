/// <reference types="vitest" />
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";
import copy from "rollup-plugin-copy";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
  },
  build: {
    lib: {
      entry: "./src/index.ts", // Especifica el punto de entrada principal
      name: "ich-sat-react-ui",
      fileName: (format) => `index.${format}.js`,
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      outDir: "dist", // Salida de tipos
    }),
    copy({
      targets: [
        { src: "src/atoms/**/*", dest: "dist/atoms" },
        { src: "src/molecules/**/*", dest: "dist/molecules" },
      ],
      hook: "writeBundle", // Copiar después de que se genere el bundle
    }),
  ],
});