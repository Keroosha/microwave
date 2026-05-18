const tsEslint = require("@typescript-eslint/eslint-plugin");
const prettierConfig = require("eslint-config-prettier/flat");

module.exports = [
  {
    ignores: ["dist/**"],
  },
  ...tsEslint.configs["flat/recommended"],
  prettierConfig,
  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    rules: {
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/prefer-interface": "off",
    },
  },
];
