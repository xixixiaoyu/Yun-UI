module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    Toast: 'readonly',
    Dialog: 'readonly',
    YunNotification: 'readonly',
    confetti: 'readonly',
    NodeJS: 'readonly',
  },
  extends: ['eslint:recommended'],
  plugins: ['vue', '@typescript-eslint'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  rules: {
    // 代码风格规则
    semi: ['error', 'never'], // 禁用分号
    quotes: ['error', 'single'], // 使用单引号
    'comma-dangle': ['error', 'only-multiline'], // 多行时使用尾随逗号，与 Prettier 的 es5 设置保持一致

    // Vue 相关规则
    'vue/html-quotes': ['error', 'double'], // Vue 模板中使用双引号
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/multi-word-component-names': 'off', // 允许单词组件名
    'vue/no-v-html': 'off', // 允许使用 v-html

    // TypeScript 相关规则
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'warn',

    // 通用规则
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'off', // 由 @typescript-eslint/no-unused-vars 处理
    'prefer-const': 'error',
    'no-var': 'error',
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        // Vue 文件特殊规则
      },
    },
  ],
}
