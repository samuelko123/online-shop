import type { UserConfig } from "vite";

export default {
  root: "./src",
  server: {
    port: 3000,
  },
  publicDir: "./src/assets",
} satisfies UserConfig;
