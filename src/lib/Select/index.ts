import type { App } from 'vue'
import Select from './Select.vue'

// 单独导出
export { Select }
export { default as Select } from './Select.vue'

// 支持单组件安装
Select.install = (app: App): void => {
  app.component(Select.name, Select)
}

// 默认导出
export default Select
