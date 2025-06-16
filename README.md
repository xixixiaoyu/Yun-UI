# Yun-UI

<p align="center">
  <img src="./public/logo.png" width="120" alt="Yun-UI Logo">
</p>

<p align="center">
  <strong>一个现代化的 Vue 3 组件库</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/yun-ui"><img src="https://img.shields.io/npm/v/yun-ui.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/yun-ui"><img src="https://img.shields.io/npm/dm/yun-ui.svg" alt="npm downloads"></a>
  <a href="https://github.com/yunmu/yun-ui/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/yun-ui.svg" alt="license"></a>
</p>

## ✨ 特性

- 🎨 **现代化设计** - 简洁美观的界面设计
- 🚀 **Vue 3 支持** - 基于 Vue 3 Composition API 开发
- 📦 **按需引入** - 支持 Tree-shaking，减小打包体积
- 🎯 **TypeScript** - 完整的 TypeScript 类型定义
- 📱 **响应式** - 支持多种屏幕尺寸
- 🌈 **主题定制** - 支持主题定制和暗色模式
- 🔧 **多种引入方式** - 支持全量引入、按需引入、CDN 引入

## 📦 安装

```bash
# npm
npm install yun-ui

# yarn
yarn add yun-ui

# pnpm
pnpm add yun-ui
```

## 🚀 快速开始

```javascript
// main.js
import { createApp } from 'vue'
import YunUI from 'yun-ui'
import 'yun-ui/dist/style.css'

const app = createApp(App)
app.use(YunUI)
app.mount('#app')
```

```vue
<template>
  <Button type="primary">Hello Yun-UI</Button>
</template>
```

## 📚 文档

详细使用文档请查看 [USAGE.md](./USAGE.md)

## 🔨 开发

```bash
# 克隆项目
git clone https://github.com/yunmu/yun-ui.git

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建组件库
pnpm build

# 构建演示站点
pnpm build:demo
```

## 📄 许可证

[MIT](./LICENSE) License © 2024 Yun

文档完整，拥有完整的组件使用示例代码。

历史提交信息非常规范，你可以按提交的顺序逐个查看；你也可以直接查看每个组件的源代码和示例

运行请使用 `yarn run dev`
打包请使用 `yarn run build`

![image](https://tva3.sinaimg.cn/mw690/007c1Ltfgy1h556shr9dkj31yk0qo7i4.jpg)

![image](https://tvax1.sinaimg.cn/mw690/007c1Ltfgy1h556t5rof6j31ym0yv12j.jpg)
