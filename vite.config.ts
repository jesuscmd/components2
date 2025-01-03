/// <reference types="vitest" />
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
  },
  build: {
    lib: {
      entry: "./src/index.ts", // Punto de entrada principal
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
      insertTypesEntry: true, // Inserta un archivo de tipos en la raíz
      outDir: "dist", // Asegúrate de que los tipos se generen en la carpeta correcta
      rollupTypes: true, // Combina tipos generados en múltiples archivos
    }),
  ],
});