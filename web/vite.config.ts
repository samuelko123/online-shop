import type { UserConfig } from "vite";

export default {
  root: "./src",
  publicDir: "./src/assets",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3001,
  },
} satisfies UserConfig;
