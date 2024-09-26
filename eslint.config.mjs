import typescriptEslintEslintPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    {
        ignores: ["**/eslint.config.js", "webpack.config.js"],
    },
    ...compat.extends(
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ),
    {
        plugins: {
            "@typescript-eslint": typescriptEslintEslintPlugin,
        },

        languageOptions: {
            parser: tsParser,
            ecmaVersion: "latest",
            sourceType: "module",

            // parserOptions: {
            //     project: true,
            // },
        },

        rules: {
            "@typescript-eslint/naming-convention": [
                "error",
                {
                    selector: "interface",
                    format: ["PascalCase"],

                    custom: {
                        regex: "^I[A-Z]",
                        match: true,
                    },
                },
                {
                    selector: "typeAlias",
                    format: ["PascalCase"],

                    custom: {
                        regex: "^T[A-Z]",
                        match: true,
                    },
                },
            ],

            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
        },
    },
];
