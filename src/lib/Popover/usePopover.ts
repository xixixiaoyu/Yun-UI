import { ref, watch, nextTick } from 'vue'

export function useVisible() {
  // 延迟关闭时长
  const DELAY_TIME = 150

  // 控制延迟关闭
  let timer: null | number = null

  // 控制 menu 鼠标移入显示或隐藏
  const isVisible = ref(false)

  const onMouseenter = () => {
    isVisible.value = true
    // 再次触发清理定时器
    if (timer) {
      clearTimeout(timer)
    }
  }
  const onMouseleave = () => {
    // 延时气泡消失
    timer = window.setTimeout(() => {
      isVisible.value = false
      timer = null
    }, DELAY_TIME)
  }

  return {
    isVisible,
    onMouseenter,
    onMouseleave,
  }
}

import { PROP_TOP_LEFT, PROP_TOP_RIGHT, PROP_BOTTOM_LEFT, PROP_BOTTOM_RIGHT } from './const'

export function useComputedPosStyle(props, isVisible) {
  const referenceTarget = ref(null)
  const contentTarget = ref(null)
  const useElementSize = (target) => {
    if (!target) return {}
    return {
      width: target.offsetWidth,
      height: target.offsetHeight,
    }
  }
  // 计算弹层位置 默认左下
  const contentStyle = ref({
    top: useElementSize(referenceTarget.value).height + 'px',
    left: -useElementSize(contentTarget.value).width + 'px',
  })
  watch(isVisible, (val) => {
    if (!val) return
    nextTick(() => {
      switch (props.placement) {
        // 左上
        case PROP_TOP_LEFT:
          contentStyle.value.top = '0'
          contentStyle.value.left = -useElementSize(contentTarget.value).width + 'px'
          break
        // 右上
        case PROP_TOP_RIGHT:
          contentStyle.value.top = '0'
          contentStyle.value.left = useElementSize(referenceTarget.value).width + 'px'
          break
        // 左下
        case PROP_BOTTOM_LEFT:
          contentStyle.value.top = useElementSize(referenceTarget.value).height + 'px'
          contentStyle.value.left = -useElementSize(contentTarget.value).width + 'px'
          break
        // 右下
        case PROP_BOTTOM_RIGHT:
          contentStyle.value.top = useElementSize(referenceTarget.value).height + 'px'
          contentStyle.value.left = useElementSize(referenceTarget.value).width + 'px'
          break
      }
    })
  })

  return {
    referenceTarget,
    contentTarget,
    contentStyle,
  }
}
