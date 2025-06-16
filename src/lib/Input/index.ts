import type { App } from 'vue';
import Input from './Input.vue';

// 单独导出
export { Input };
export { default as Input } from './Input.vue';

// 支持单组件安装
Input.install = (app: App): void => {
  app.component(Input.name, Input);
};

// 默认导出
export default Input;
