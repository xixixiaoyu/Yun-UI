<template>
  <div class="backtotop-container" :class="{ visible }">
    <div class="backtotop" @click="onBacktop" v-if="!$slots.default">
      <Icon name="backtop" />
    </div>
    <div class="custom-backtotop" @click="onBacktop" v-else>
      <slot>UP</slot>
    </div>
  </div>
</template>

<script setup>
import { watchEffect, ref, onUnmounted } from 'vue'
import Icon from '../Icon/Icon.vue'

const props = defineProps({
  visibilityHeight: {
    type: Number,
    default: 100,
  },
  right: {
    type: String,
    required: false,
    default: '20',
  },
  bottom: {
    type: String,
    required: false,
    default: '16',
  },
})
const emit = defineEmits(['clicked'])

const visible = ref(document.documentElement.scrollTop > 0)
let timer = null

const pageScroll = () => {
  visible.value = document.documentElement.scrollTop
}
window.addEventListener('scroll', pageScroll)

const onBacktop = () => {
  emit('clicked')
  //设表先关
  clearInterval(timer)

  // 设置定时器
  timer = setInterval(function () {
    // 不断让scrollTop卷去的高度减少
    document.documentElement.scrollTop -= 50

    //定时器要停
    if (document.documentElement.scrollTop <= 0) {
      clearInterval(timer)
    }
  }, 16)
}

watchEffect(
  () => {
    if (visible.value > props.visibilityHeight) {
      visible.value = true
    } else {
      visible.value = false
    }
  },
  {
    flush: 'post',
  }
)

const rightOffset = props.right + '%'
const bottomOffset = props.bottom + '%'

onUnmounted(() => {
  clearInterval(timer)
  window.removeEventListener('scroll', pageScroll)
})
</script>

<style lang="scss">
.backtotop-container {
  opacity: 0;
  transition: 500ms;
  &.visible {
    opacity: 1;
  }
}

.backtotop {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10000;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  bottom: v-bind(bottomOffset);
  right: v-bind(rightOffset);
  cursor: pointer;
  text-align: center;
  line-height: 80px;
  background-color: #fff;
  user-select: none;
  box-shadow: 0 0 6px #0000001f;
  transition: 250ms;
  &:hover {
    background-color: #d2dfe6;
  }
}
.backtotop svg {
  width: 20px;
  height: 20px;
}
.custom-backtotop {
  position: fixed;
  bottom: v-bind(bottomOffset);
  right: v-bind(rightOffset);
  z-index: 1000;
  font-size: 20px;
  cursor: pointer;
}
</style>
