import type { App } from 'vue'
import Button from './Button.vue'
import ButtonGroup from './ButtonGroup'

// 单独导出
export { Button, ButtonGroup }
export { default as Button } from './Button.vue'
export { default as ButtonGroup } from './ButtonGroup'

// 支持单组件安装
Button.install = (app: App): void => {
  app.component(Button.name, Button)
}

ButtonGroup.install = (app: App): void => {
  app.component(ButtonGroup.name, ButtonGroup)
}

// 默认导出
export default Button
