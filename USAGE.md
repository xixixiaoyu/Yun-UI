# Yun-UI 使用指南

Yun-UI 是一个现代化的 Vue 3 组件库，支持多种引入方式和构建格式。

## 📦 安装

```bash
# 使用 npm
npm install yun-ui

# 使用 yarn
yarn add yun-ui

# 使用 pnpm
pnpm add yun-ui
```

## 🚀 使用方式

### 1. 全量引入（适合小型项目）

```javascript
// main.js
import { createApp } from 'vue'
import YunUI from 'yun-ui'
import 'yun-ui/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(YunUI)
app.mount('#app')
```

在组件中使用：
```vue
<template>
  <div>
    <Button type="primary">主要按钮</Button>
    <Input v-model="inputValue" placeholder="请输入内容" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const inputValue = ref('')
</script>
```

### 2. 按需引入（推荐，支持 Tree-shaking）

```javascript
// main.js
import { createApp } from 'vue'
import 'yun-ui/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')
```

在组件中按需引入：
```vue
<template>
  <div>
    <Button type="primary" @click="handleClick">点击我</Button>
    <Input v-model="inputValue" placeholder="请输入内容" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Button, Input } from 'yun-ui'

const inputValue = ref('')
const handleClick = () => {
  console.log('按钮被点击了')
}
</script>
```

### 3. 单组件引入

```javascript
// 只引入 Button 组件
import Button from 'yun-ui/button'
import 'yun-ui/dist/style.css'

// 在 Vue 应用中注册
app.use(Button)
```

### 4. CDN 引入

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://unpkg.com/yun-ui/dist/style.css">
</head>
<body>
  <div id="app">
    <yun-button type="primary">CDN 按钮</yun-button>
  </div>
  
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://unpkg.com/yun-ui/dist/yun-ui.umd.js"></script>
  <script>
    const { createApp } = Vue
    const app = createApp({})
    app.use(YunUI.default)
    app.mount('#app')
  </script>
</body>
</html>
```

## 🎨 主要组件

### 基础组件
- `Button` - 按钮组件
- `Icon` - 图标组件
- `Avatar` - 头像组件
- `Tag` - 标签组件
- `Badge` - 徽章组件

### 表单组件
- `Input` - 输入框
- `InputPro` - 增强输入框
- `Checkbox` - 复选框
- `Switch` - 开关
- `Select` - 选择器
- `DatePicker` - 日期选择器

### 数据展示
- `Table` - 表格
- `Card` - 卡片
- `Pagination` - 分页

### 导航组件
- `Tabs` - 标签页
- `Breadcrumb` - 面包屑

### 反馈组件
- `Alert` - 警告提示
- `Modal` - 模态框
- `Dialog` - 对话框

## 🔧 TypeScript 支持

Yun-UI 完全支持 TypeScript，所有组件都提供了完整的类型定义：

```typescript
import type { ButtonProps } from 'yun-ui'
import { Button } from 'yun-ui'

const buttonProps: ButtonProps = {
  type: 'primary',
  size: 'large',
  disabled: false
}
```

## 📱 响应式设计

所有组件都支持响应式设计，能够在不同屏幕尺寸下正常工作。

## 🎯 浏览器兼容性

- Chrome >= 87
- Firefox >= 78
- Safari >= 14
- Edge >= 88

## 📄 许可证

MIT License
