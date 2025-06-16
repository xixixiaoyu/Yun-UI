import type { App as Application, DirectiveBinding } from 'vue'
import '../style/index.scss'

let loadingBox: HTMLElement
export default {
  install(app: Application) {
    app.directive('loading', {
      mounted(el: HTMLElement, binding: DirectiveBinding) {
        const _target = binding.value
        el.classList.add('yun-loading')
        loadingBox = document.createElement('div')
        loadingBox.classList.add('yun-loading-box')
        loadingBox.setAttribute('data-after', _target.title || '')
        el.appendChild(loadingBox)
        if (_target.isShow) {
          el.classList.add('yun-loading-show')
        }
      },
      updated(el: HTMLElement, binding: DirectiveBinding) {
        const _target = binding.value
        loadingBox.setAttribute('data-after', _target.title || '')
        if (_target.isShow) {
          el.classList.add('yun-loading-show')
        } else {
          el.classList.remove('yun-loading-show')
        }
      },
    })
  },
}
