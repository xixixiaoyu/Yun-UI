# 开始使用

请先[安装](#/doc/install)本组件库。

## 直接引入（推荐）

然后在你的代码中写入下面的代码

```js
<script setup>import {LewButton} from 'lew-ui'</script>
```

但，你别忘了还要在 `main.ts` 引入样式

```js
import 'lew-ui/dist/style.css'
```

就可以使用我提供的组件了。

## 全局安装（不推荐）

你需要在 main.ts全局安装，这样你就可以在页面内使用全部组件。

代码示例：

```js
import { createApp } from 'vue'
import Lew from 'lew-ui'
import 'lew-ui/dist/style.css'

const app = createApp(App)
app.use(Lew)
```
