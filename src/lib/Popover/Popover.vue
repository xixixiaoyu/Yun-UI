<template>
  <div class="relative" @mouseenter="onMouseenter" @mouseleave="onMouseleave">
    <div ref="referenceTarget">
      <!-- 具名插槽 -->
      <slot name="reference"></slot>
    </div>
    <transition name="slide">
      <div
        ref="contentTarget"
        v-show="isVisible"
        class="absolute p-1 z-20 bg-slate-100 border rounded-md dark:bg-zinc-900 dark:border-zinc-700"
        :style="contentStyle"
      >
        <!-- 匿名插槽 -->
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import { PROP_TOP_LEFT, PROP_TOP_RIGHT, PROP_BOTTOM_LEFT, PROP_BOTTOM_RIGHT } from './const'
export default {
  name: 'Popover',
}

// 定义指定位置的 Enum
const placementEnum = [PROP_TOP_LEFT, PROP_TOP_RIGHT, PROP_BOTTOM_LEFT, PROP_BOTTOM_RIGHT]
</script>

<script setup>
import { useVisible, useComputedPosStyle } from './usePopover'

const props = defineProps({
  placement: {
    type: String,
    default: 'bottom-left',
    validator(val) {
      const result = placementEnum.includes(val)
      if (!result) {
        throw new Error(`你的 placement 必须是${placementEnum.join('、')}中的一个 `)
      }
      return result
    },
  },
})

const { isVisible, onMouseenter, onMouseleave } = useVisible()

const { referenceTarget, contentTarget, contentStyle } = useComputedPosStyle(props, isVisible)
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: 0.3s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
