module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        "vue/setup-compiler-macros": true,
    },
    plugins: ["unused-imports"],
    rules: {
        "comma-dangle": ["error", "never"],
        "no-console": "off",
        "object-curly-spacing": ["error", "always"],
        "vue/multi-word-component-names": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "unused-imports/no-unused-imports": "warn",
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "@vue/eslint-config-prettier",
        "@vue/typescript/recommended",
        "@vue/prettier",
        "plugin:cypress/recommended",
    ],
    ignorePatterns: ["cypress/plugins", "generated", "dist"],
};