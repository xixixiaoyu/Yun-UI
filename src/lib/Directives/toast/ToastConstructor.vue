<template>
  <div
    v-show="visible"
    :class="classes"
    :style="{ top: `${top}px` }"
    @mouseenter="clearTimer"
    @mouseleave="startTimer"
  >
    <Icon size="20" class="yun-toast-icon">
      <Info24Regular v-if="type == `normal`" />
      <Warning24Regular v-if="type == `warning`" />
      <CheckmarkCircle24Regular v-if="type == `success`" />
      <ErrorCircle24Regular v-if="type == `error`" />
      <Alert24Regular v-if="type == `info`" />
    </Icon>
    <span>{{ text }}</span>
    <div v-if="showClose" class="yun-toast-close" name="clear" @click="handleClose">
      <Icon size="16"> <Dismiss24Filled /> </Icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { computed, onMounted, ref } from 'vue'
import {
  Info24Regular,
  Warning24Regular,
  CheckmarkCircle24Regular,
  ErrorCircle24Regular,
  Alert24Regular,
  Dismiss24Filled,
} from '@vicons/fluent'
import { Icon } from '@vicons/utils'

type ToastType = 'normal' | 'info' | 'success' | 'warning' | 'error'
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  type: {
    type: String as PropType<ToastType>,
    default: 'normal',
    validator: (val: string) => ['normal', 'info', 'success', 'warning', 'error'].includes(val),
  },
  delay: {
    type: Number,
    default: 5000,
  },
  center: {
    type: Boolean,
    default: false,
  },
  showClose: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    default: '',
  },
  top: {
    type: Number,
    default: 10,
  },
})

const emit = defineEmits(['destroy'])

const visible = ref(false)
const timer: any = ref(null)

const classes = computed(() => [
  'yun-toast',
  {
    'yun-toast-center': props.center,
    [`yun-toast-${props.type}`]: props.type,
  },
])
onMounted(() => {
  visible.value = true
  startTimer()
})
const handleClose = () => {
  visible.value = false
  emit('destroy')
}
const startTimer = () => {
  if (props.delay > 0) {
    timer.value = setTimeout(() => {
      handleClose()
    }, props.delay)
  }
}
const clearTimer = () => {
  clearTimeout(timer.value)
  timer.value = null
}
</script>

<script lang="ts">
export default {
  name: 'Toast',
}
</script>

<style lang="scss" scoped>
.yun-toast {
  display: flex;
  align-items: center;
  white-space: nowrap;
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translate(-50%);
  min-width: 380px;
  border-radius: 5px;
  background: var(--yun-bgcolor-1);
  color: var(--yun-text-color-3);
  z-index: var(--yun-mask-zIndex);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
  padding: 15px;
  padding-right: 35px;
  transition: 0.3s;

  > .yun-toast-icon {
    margin-right: 5px;
  }

  > .yun-toast-close {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    cursor: pointer;
    color: #c0c4cc;
    font-size: 20px;

    &:hover {
      color: #909399;
    }
  }

  &-center {
    justify-content: center;
    text-align: center;
  }

  &-info {
    background-color: var(--yun-info-color);
    color: #fff;
  }

  &-success {
    background-color: var(--yun-success-color);
    color: #fff;
  }

  &-warning {
    background-color: var(--yun-warning-color);
    color: #fff;
  }

  &-error {
    background-color: var(--yun-error-color);
    color: #fff;
  }
}
</style>
