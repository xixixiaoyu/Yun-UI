module.exports = {
  // 基础格式化选项
  semi: false, // 不使用分号
  singleQuote: true, // 使用单引号
  quoteProps: 'as-needed', // 仅在需要时为对象属性添加引号
  trailingComma: 'es5', // 使用尾随逗号

  // 缩进和空格
  tabWidth: 2, // 使用 2 个空格缩进
  useTabs: false, // 使用空格而不是制表符

  // 换行
  printWidth: 100, // 每行最大长度
  endOfLine: 'lf', // 使用 LF 换行符

  // 括号和空格
  bracketSpacing: true, // 对象字面量的括号间添加空格
  bracketSameLine: false, // 将多行 HTML 元素的 > 放在下一行
  arrowParens: 'always', // 箭头函数参数只有一个时使用括号

  // Vue 特定配置
  vueIndentScriptAndStyle: false, // Vue 文件中的 script 和 style 标签不缩进

  // HTML 相关
  htmlWhitespaceSensitivity: 'css', // HTML 空白敏感性

  // 其他
  insertPragma: false, // 不插入 @format pragma
  requirePragma: false, // 不需要 pragma
  proseWrap: 'preserve', // 保持 markdown 文本换行

  // 文件类型特定配置
  overrides: [
    {
      files: '*.vue',
      options: {
        parser: 'vue',
      },
    },
    {
      files: ['*.json', '*.jsonc'],
      options: {
        parser: 'json',
      },
    },
    {
      files: '*.md',
      options: {
        parser: 'markdown',
        proseWrap: 'always',
      },
    },
  ],
}
