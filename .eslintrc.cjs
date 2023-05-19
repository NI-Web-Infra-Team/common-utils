module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  globals: {
    describe: true,
    it: true,
    expect: true,
    beforeEach: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    project: ["tsconfig.json"]
  },
  plugins: ["@typescript-eslint", "prettier"],
  ignorePatterns: ['.eslintrc.cjs'],
  rules: {
    'no-param-reassign': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksVoidReturn": false
      }
    ]
  },
};
