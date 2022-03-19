module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "@vue/airbnb",
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars": process.env.NODE_ENV === "production" ? "error" : "warn",
    // 'no-unused-components' : process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    "no-unreachable": process.env.NODE_ENV === "production" ? "error" : "warn",
    "linebreak-style": ["off", "windows"],
    quotes: ["error", "double"],
    "no-var": "error",
    "no-tabs": "off",
    "max-len": ["warn", { code: 120 }],
  },
};
