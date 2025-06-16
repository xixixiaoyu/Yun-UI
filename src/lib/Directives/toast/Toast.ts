import { createVNode, render, VNode } from 'vue'
import ToastConstructor from './ToastConstructor.vue'

type ToastType = 'normal' | 'info' | 'success' | 'warning' | 'error'
interface ToastProps {
  text?: string
  type?: ToastType
  delay?: number
  center?: boolean
  showClose?: boolean
  top?: number
  id?: string
  destroyed?: Function
}

const toastQueue: Array<VNode> = []
let current = 1

const onDestroy = (id: string, wrapper: HTMLDivElement) => {
  render(null, wrapper)
  wrapper.remove()
  const currentIndex = toastQueue.findIndex((item) => {
    return item.component.props.id === id
  })
  if (currentIndex === -1) return
  // const h = toastQueue[currentIndex].el.offsetHeight;
  toastQueue.splice(currentIndex, 1)
  if (toastQueue.length < 1) return
  for (let i = currentIndex; i < toastQueue.length; i++) {
    toastQueue[i].component.props.top = parseInt(toastQueue[i].el.style.top) - 60
  }
}

const createToast = (options: ToastProps) => {
  const { destroyed = () => {}, ...rest } = options
  const div = document.createElement('div')
  document.body.appendChild(div)
  const vm = createVNode(ToastConstructor, {
    ...rest,
    top: 20 + toastQueue.length * 60,
    onDestroy: () => {
      destroyed()
      onDestroy(options.id, div)
    },
  })
  toastQueue.push(vm)
  render(vm, div)
}

const Toast = (options: ToastProps) => {
  const _options = {
    ...options,
    id: `yun-toast-${current++}`,
    name: ToastConstructor.name,
  }
  createToast(_options)
}

const statusType: ToastType[] = ['normal', 'info', 'success', 'warning', 'error']

statusType.forEach((type) => {
  Toast[type] = (options: ToastProps) => {
    const _options = {
      ...options,
      type,
      id: `yun-toast-${current++}`,
    }
    createToast(_options)
  }
})

export { Toast }
