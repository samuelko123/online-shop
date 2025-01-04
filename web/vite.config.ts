import type { UserConfig } from "vite";

export default {
  root: "./src",
  publicDir: "./src/assets",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  server: {
    host: true,
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
  preview: {
    port: 3001,
  },
} satisfies UserConfig;
