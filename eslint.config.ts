import eslintReact from "@eslint-react/eslint-plugin";
import eslintJs from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig({
    files: ["**/*.ts", "**/*.tsx"],

    extends: [
        eslintJs.configs.recommended,
        tseslint.configs.recommended,
        eslintReact.configs["recommended-typescript"],
    ],

    languageOptions: {
        // Use TypeScript ESLint parser for TypeScript files
        parser: tseslint.parser,
    },

    // Custom rule overrides (modify rule levels or disable rules)
    rules: {
        "@eslint-react/no-missing-key": "warn",
        
        "no-unused-vars": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
    },
});
