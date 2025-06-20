# Yun-UI

<p align="center">
  <img src="./public/logo.png" width="120" alt="Yun-UI Logo">
</p>

<p align="center">
  <strong>一个现代化的 Vue 3 组件库</strong>
</p>

<img src="https://cdn.nlark.com/yuque/0/2025/png/21596389/1750255917806-58a7ad70-c5a7-4901-830a-675e648ec999.png?x-oss-process=image%2Fformat%2Cwebp">

<img src="https://cdn.nlark.com/yuque/0/2025/png/21596389/1750091665211-bed83012-9e33-47e1-a9ec-4c900f6f19b0.png?x-oss-process=image%2Fformat%2Cwebp">

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

# 部署到 Cloudflare Pages
pnpm run deploy:cf
```

## 🌐 部署

### Cloudflare Pages

本项目已配置支持 Cloudflare Pages 部署，提供全球 CDN 加速。

**快速部署：**
1. Fork 本仓库到你的 GitHub 账户
2. 在 [Cloudflare Dashboard](https://dash.cloudflare.com/) 创建 Pages 项目
3. 连接 GitHub 仓库，使用以下构建设置：
   - 构建命令：`npm run build:demo`
   - 构建输出目录：`dist`
   - 环境变量：`NODE_ENV=production`, `CLOUDFLARE_PAGES=true`

**本地部署：**
```bash
# 安装 Wrangler CLI
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 部署
pnpm run deploy:cf
```

详细部署指南请查看 [CLOUDFLARE_DEPLOYMENT.md](./CLOUDFLARE_DEPLOYMENT.md)

### GitHub Pages

传统的 GitHub Pages 部署仍然支持：
```bash
./deploy.sh
```

## 📄 许可证

[MIT](./LICENSE) License © 2024 Yun

文档完整，拥有完整的组件使用示例代码。

历史提交信息非常规范，你可以按提交的顺序逐个查看；你也可以直接查看每个组件的源代码和示例

运行请使用 `yarn run dev` 打包请使用 `yarn run build`
