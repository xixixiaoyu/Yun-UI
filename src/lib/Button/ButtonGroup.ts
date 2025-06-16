import { defineComponent, h } from 'vue'
import './style/ButtonGroup.scss'
export default defineComponent({
  name: 'ButtonGroup',
  setup(props, { slots }) {
    return () => h('div', { class: 'yun-button-group' }, slots.default?.())
  },
})
