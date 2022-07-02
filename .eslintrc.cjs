module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'vue/setup-compiler-macros': true
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'no-console': 'off',
    'object-curly-spacing': ['error', 'always'],
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-prettier',
    '@vue/typescript/recommended',
    '@vue/prettier'
  ],
  ignorePatterns: ['dist']
}
