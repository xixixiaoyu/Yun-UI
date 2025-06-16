declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.md' {
  const str: string
  export default str
}

declare module '*.json' {
  const json: string
  export default json
}

declare module 'yun-ui'
declare module '@vicons/fluent'
declare module '@fancyapps/ui'
declare module 'lodash/throttle'
