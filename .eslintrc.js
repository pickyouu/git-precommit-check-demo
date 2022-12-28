module.exports = {
  root: true,
  env: {
    node: true,
  },
  ignorePatterns: ['/script'],
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    'plugin:prettier/recommended',
  ],
  // plugins:["prettier"],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    // "prettier/prettier": "error",
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'warn', // 组件name属性须是俩个单词以上
    'no-var': 'error', // 要求使用let或const
    'no-empty': 'warn', // 禁止出现空语句块
    'comma-dangle': 'off',
  },
}
