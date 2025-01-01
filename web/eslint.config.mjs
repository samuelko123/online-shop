import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["src/**/*.{ts,tsx}"],
  },
  {
    ignores: ["dist/**/*", "webpack.config.js"],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    ...reactRecommended,
    settings: {
      react: {
        version: "detect",
      },
    },
  }
];
