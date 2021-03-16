module.exports = {
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "@typescript-eslint", "jest"],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  rules: {
    "linebreak-style": "off",
    "@typescript-eslint/quotes": [2, "double"],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-use-before-define": ["off"],
    "no-use-before-define": [
      "off",
      { function: false, classes: false, variables: false },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: [
          "camelCase",
          "strictCamelCase",
          "PascalCase",
          "StrictPascalCase",
          "snake_case",
          "UPPER_CASE",
        ],
        leadingUnderscore: "allow",
        trailingUnderscore: "allow",
      },
    ],
  },
};
