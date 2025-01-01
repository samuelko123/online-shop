import pluginJs from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import pluginReact from "eslint-plugin-react";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tseslint from "typescript-eslint";

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
  },
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  {
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      "@stylistic/comma-dangle": ["error", "always-multiline"],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/jsx-quotes": ["error", "prefer-double"],
      "@stylistic/semi": ["error", "always"],
    },
  },
];
