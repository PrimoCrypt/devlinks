/** @type {import('eslint').Linter.Config} */

module.exports = {
  root: true,
  reportUnusedDisableDirectives: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "plugin:vitest/all",
    "eslint:recommended",
    "next/core-web-vitals",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:unicorn/recommended",
    "plugin:prettier/recommended",
    "plugin:testing-library/react",
  ],
  ignorePatterns: ["dist", "node_modules"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "react",
    "unicorn",
    "unused-imports",
    "vitest",
    "testing-library",
  ],
  rules: {
    "no-console": "error",
    "react/prop-types": "off",
    "vitest/max-expects": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "unicorn/filename-case": [
      "error",
      { cases: { kebabCase: true, pascalCase: true, camelCase: true } },
    ],
  },
  settings: {
    react: { version: "detect" },
    vitest: { typecheck: true },
  },
  overrides: [
    {
      files: [".eslintrc.*js", ".vite(|st).(js|ts)"],
      env: { node: true },
    },
    {
      files: ["*.d.ts"],
      rules: {
        "unicorn/prevent-abbreviations": "off",
      },
    },
    {
      files: ["!*.test.(js|jsx|ts|tsx)"],
      rules: {
        "vitest/require-hook": "off",
        "testing-library/no-node-access": [
          "error",
          { allowContainerFirstChild: true },
        ],
      },
    },
  ],
};
