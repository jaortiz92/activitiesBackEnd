module.exports = {
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
  rules: {
    "vue/html-indent": ["error", 2],
    "vue/max-attributes-per-line": "off",
    indent: ["error", 2],
    quotes: ["error", "single"],
  },
};
