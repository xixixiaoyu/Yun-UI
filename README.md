<div align="center">
  <h1>🎨 Yun UI</h1>
  <p>一款基于 Vue 3 + TypeScript + Vite 的现代化 UI 组件库</p>
  
  [![Vue](https://img.shields.io/badge/Vue-3.2+-4FC08D?style=flat-square&logo=vue.js&logoColor=white)](https://vuejs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-4.0+-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-2.8+-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](./LICENSE)
</div>

<img src="https://cdn.nlark.com/yuque/0/2025/png/21596389/1753972650943-8416138d-6691-4bd4-8b25-6829f625a732.png?x-oss-process=image%2Fformat%2Cwebp">

<img src="https://cdn.nlark.com/yuque/0/2025/png/21596389/1753972683147-943f80b5-0d00-4491-9468-d960ee834c4e.png?x-oss-process=image%2Fformat%2Cwebp">

## ✨ 特性

- 🚀 **现代化技术栈**：基于 Vue 3 Composition API + TypeScript + Vite
- 📦 **开箱即用**：30+ 高质量组件，满足大部分业务需求
- 🎯 **TypeScript 友好**：完整的类型定义，提供优秀的开发体验
- 🎨 **简洁设计**：精心设计的 UI，简洁美观的视觉效果
- 📱 **响应式设计**：支持多种屏幕尺寸，移动端友好
- 🔧 **高度可定制**：灵活的主题配置和样式定制
- 📖 **完整文档**：详细的组件文档和示例代码
- 🌳 **Tree Shaking**：支持按需引入，减小打包体积

## 📦 安装

```bash
# 使用 npm
npm install yun-ui

# 使用 yarn
yarn add yun-ui

# 使用 pnpm
pnpm add yun-ui
```

## 🚀 快速开始

### 完整引入

```typescript
import { createApp } from 'vue'
import YunUI from 'yun-ui'
import 'yun-ui/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(YunUI)
app.mount('#app')
```

### 按需引入

```typescript
import { createApp } from 'vue'
import { Button, Input, Dialog } from 'yun-ui'
import App from './App.vue'

const app = createApp(App)
app.use(Button)
app.use(Input)
app.use(Dialog)
app.mount('#app')
```

### 在组件中使用

```vue
<template>
  <div>
    <yun-button type="primary" @click="handleClick">
      点击我
    </yun-button>
    <yun-input v-model="inputValue" placeholder="请输入内容" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const inputValue = ref('')

const handleClick = () => {
  console.log('按钮被点击了！')
}
</script>
```

## 🧩 组件列表

### 基础组件
- **Button** - 按钮
- **Icon** - 图标
- **Layout** - 布局
- **Grid** - 栅格
- **Flex** - 弹性布局

### 表单组件
- **Input** - 输入框
- **InputPro** - 高级输入框
- **InputTag** - 标签输入框
- **Select** - 选择器
- **Checkbox** - 多选框
- **Radio** - 单选框
- **Switch** - 开关
- **DatePicker** - 日期选择器
- **FormItem** - 表单项

### 数据展示
- **Table** - 表格
- **Tag** - 标签
- **Avatar** - 头像
- **Badge** - 徽标
- **Card** - 卡片
- **Carousel** - 轮播图
- **Comment** - 评论
- **Skeleton** - 骨架屏
- **Mark** - 标记
- **Title** - 标题

### 导航组件
- **Breadcrumb** - 面包屑
- **Dropdown** - 下拉菜单
- **Pagination** - 分页
- **Steps** - 步骤条
- **Tabs** - 标签页

### 反馈组件
- **Alert** - 警告提示
- **Dialog** - 对话框
- **Drawer** - 抽屉
- **Modal** - 模态框
- **Popover** - 气泡卡片
- **PopOk** - 确认气泡
- **CountDown** - 倒计时

### 其他组件
- **BackTop** - 回到顶部
- **City** - 城市选择器
- **InfiniteLoading** - 无限滚动
- **Sticky** - 粘性定位

## 🛠️ 本地开发

### 环境要求

- Node.js >= 14
- pnpm >= 6

### 克隆项目

```bash
git clone https://github.com/xixixiaoyu/vue3-yun-ui.git
cd vue3-yun-ui
```

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

### 构建项目

```bash
pnpm build
```

## 📖 文档

在线文档：[https://xixixiaoyu.github.io/vue3-yun-ui-website/](https://xixixiaoyu.github.io/vue3-yun-ui-website/)

## 🤝 贡献指南

我们欢迎所有的贡献，请阅读 [贡献指南](./CONTRIBUTING.md) 了解如何参与项目开发。

### 开发流程

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 📄 许可证

本项目基于 [MIT](./LICENSE) 许可证开源。

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者们！

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/xixixiaoyu">xixixiaoyu</a>
</div>


