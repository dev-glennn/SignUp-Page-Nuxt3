module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-essential'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'vue', 'prettier'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'vue/multi-word-component-names': 'off'
  }
};
