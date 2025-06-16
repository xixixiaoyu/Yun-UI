<template>
  <teleport to="#yun-drawer">
    <transition name="fade">
      <div
        v-if="visible"
        class="yun-drawer"
        :class="{ 'yun-drawer-show': isShowMain }"
        @click="close"
      >
        <div
          :style="getSizeStyle(position, width, height)"
          class="yun-drawer-main"
          :class="getClass(position)"
          @click.stop
        >
          <slot></slot>
        </div>
      </div> </transition
  ></teleport>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useDOMCreate } from '../hooks/index'
import { DrawerProps, getClass, getSizeStyle } from './index'
import { useScrollLock } from '@vueuse/core'
useDOMCreate('yun-drawer')

const emit = defineEmits(['update:visible'])
const props = defineProps(DrawerProps)

const visible = ref(props.visible)
const isShowMain = ref(false)
const isLockScroll = useScrollLock(document.body)

watch(
  () => props.visible,
  (val) => {
    visible.value = val
    setTimeout(() => {
      // 展开抽屉
      isShowMain.value = val
      // 锁定body滚动
      isLockScroll.value = val
    }, 50)
  }
)

const close = () => {
  isShowMain.value = false
  setTimeout(() => {
    emit('update:visible', false)
  }, 100)
}
</script>

<script lang="ts">
export default {
  name: 'Drawer',
}
</script>

<style lang="scss">
.yun-drawer {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: var(--yun-mask-bgColor);
  backdrop-filter: blur(5px);
  z-index: var(--yun-mask-zIndex);
}
.yun-drawer-main {
  position: fixed;
  transition: 0.3s ease;
  background: #fff;
  z-index: var(--yun-mask-zIndex);
}
.yun-drawer-main-right {
  top: 0;
  right: 0;
  transform: translateX(100%);
}
.yun-drawer-main-top {
  top: 0;
  left: 0;
  transform: translateY(-100%);
}
.yun-drawer-main-left {
  top: 0;
  left: 0;
  transform: translateX(-100%);
}
.yun-drawer-main-bottom {
  left: 0;
  bottom: 0;
  transform: translateY(100%);
}
.yun-drawer-show {
  .yun-drawer-main {
    transform: translate(0, 0);
  }
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
</style>
