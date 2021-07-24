module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:nuxt/recommended",
    "prettier",
  ],
  plugins: [],
  rules: {
    "array-bracket-spacing": [ "error", "always", { "arraysInArrays": false, "objectsInArrays": false, "singleValue": false }],
    "brace-style": [ "error", "1tbs", { allowSingleLine: true }],
    "comma-spacing": [ "error", { "before": false, "after": true }],
    "curly": [ "error", "multi-or-nest" ],
    "object-curly-spacing": [ "error", "always", { "arraysInObjects": false, "objectsInObjects": false }],
    "prefer-const": "error",
    "quotes": [ "error", "double" ],
    "semi": [ "error", "never" ],
    "sort-vars": "error",
  },
}
