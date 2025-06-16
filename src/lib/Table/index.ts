import type { App } from 'vue'
import Table from './Table.vue'

// 单独导出
export { Table }
export { default as Table } from './Table.vue'

// 支持单组件安装
Table.install = (app: App): void => {
  app.component(Table.name, Table)
}

// 默认导出
export default Table
