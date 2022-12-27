module.exports = {
    "root": true,
    "env": {
      "node": true
  },
    ignorePatterns:['/script'],
    "extends": [
      "plugin:vue/essential",
      "eslint:recommended"
    ],
    "parserOptions": {
      "parser": "@babel/eslint-parser",
    },
  "rules": {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'warn', // 组件name属性须是俩个单词以上
    'no-var': 'error',// 要求使用let或const
    'no-empty': 'warn',// 禁止出现空语句块
    }
}