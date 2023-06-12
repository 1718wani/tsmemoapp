module.exports = {
    root: true,
    env: {
      browser: true,
      es2021: true,
    },
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
        "no-explicit-any": "warn"
      },
      parser: '@typescript-eslint/parser',
  };