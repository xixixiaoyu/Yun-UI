<template>
  <teleport to="body">
    <div
      v-if="visible"
      class="yun-dialog"
      :style="`animation-name: ${showAnimation}`"
      @click="OnClickOverlay"
    >
      <div v-if="layout == 'normal'" class="yun-dialog-box yun-dialog-box-normal" @click.stop>
        <div class="btn-close" @click="cancelFn">
          <Icon size="18"> <Dismiss24Filled /></Icon>
        </div>
        <div class="left">
          <Icon size="32" :class="`icon-${type}`">
            <Info24Regular v-if="type == `normal`" />
            <Warning24Regular v-if="type == `warning`" />
            <CheckmarkCircle24Regular v-if="type == `success`" />
            <ErrorCircle24Regular v-if="type == `error`" />
            <Alert24Regular v-if="type == `info`" />
          </Icon>
        </div>
        <div class="right">
          <header>
            <slot name="title" />
          </header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <Button size="small" type="blank" @click="cancelFn">取消</Button>
            <Button size="small" @click="okFn">确认</Button>
          </footer>
        </div>
      </div>

      <div v-if="layout == 'easy'" class="yun-dialog-box yun-dialog-box-easy">
        <div class="left">
          <Icon size="22" :class="`icon-${type}`">
            <Info24Regular v-if="type == `normal`" />
            <Warning24Regular v-if="type == `warning`" />
            <CheckmarkCircle24Regular v-if="type == `success`" />
            <ErrorCircle24Regular v-if="type == `error`" />
            <Alert24Regular v-if="type == `info`" />
          </Icon>
        </div>
        <div class="right">
          <main>
            <slot name="content" />
          </main>
          <Button style="margin-right: 10px" type="normal" size="small" @click="cancelFn"
            >取消</Button
          >
          <Button size="small" @click="okFn" style="margin: 0">确认</Button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
import Button from '../../Button/Button.vue'
import { ref, computed } from 'vue'
import {
  Info24Regular,
  Warning24Regular,
  CheckmarkCircle24Regular,
  ErrorCircle24Regular,
  Alert24Regular,
  Dismiss24Filled,
} from '@vicons/fluent'
import { Icon } from '@vicons/utils'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true,
  },
  type: {
    type: String,
    default: '',
  },
  ok: {
    type: Function,
    default: () => () => {},
  },
  cancel: {
    type: Function,
    default: () => () => {},
  },
  layout: {
    type: String,
    default: 'normal',
  },
})
const emit = defineEmits(['update:visible', 'closeOverlay'])

const OnClickOverlay = () => {
  if (props.closeOnClickOverlay) {
    close()
    emit('closeOverlay')
  }
}

const isShowDialog = ref(true)
const close = () => {
  isShowDialog.value = false
  setTimeout(() => {
    emit('update:visible', false)
    isShowDialog.value = true
  }, 250)
}

const showAnimation = computed(() => (isShowDialog.value ? 'yunDialogOpen' : 'yunDialogClose'))

const okFn = () => {
  if (typeof props.ok === 'function' && props.ok() === true) {
    close()
  }
}
const cancelFn = () => {
  if (typeof props.cancel === 'function') {
    props.cancel()
  }
  close()
}
</script>

<script lang="ts">
export default {
  name: 'Dialog',
  emits: ['update:visible', 'closeOverlay'],
}
</script>

<style lang="scss" scoped>
.yun-dialog {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: var(--yun-modal-bgcolor);
  backdrop-filter: blur(5px);
  outline: 1000000px solid var(--yun-modal-bgcolor);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: var(--yun-mask-zIndex);
  animation-fill-mode: forwards;
  animation-duration: 250ms;
  .yun-dialog-box {
    position: relative;
    display: flex;
    width: 400px;
    height: auto;
    padding: 20px;
    border-radius: var(--yun-border-radius);
    background-color: var(--yun-bgcolor-0);
    box-shadow: 0px 15px 50px rgba($color: #000000, $alpha: 0.05);
    .icon-success {
      color: var(--yun-success-color-dark);
    }
    .icon-warning {
      color: var(--yun-warning-color-dark);
    }
    .icon-normal {
      color: var(--yun-normal-color-dark);
    }
    .icon-info {
      color: var(--yun-info-color-dark);
    }
    .icon-error {
      color: var(--yun-error-color-dark);
    }
    header {
      width: 100%;
      font-size: 16px;
      font-weight: 600;
    }
    main {
      height: auto;
      font-size: 14px;
      color: var(--yun-text-color-5);
    }
    footer {
      display: flex;
      justify-content: end;
      width: 100%;
      .yun-button {
        margin-left: 10px;
      }
    }
    .btn-close {
      position: absolute;
      top: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25px;
      height: 25px;
      right: 10px;
      border-radius: var(--yun-border-radius);
      box-sizing: border-box;
      cursor: pointer;
      user-select: none;
      z-index: 2051;
      color: var(--yun-text-color-5);
    }
    .btn-close:hover {
      background: rgba($color: #000000, $alpha: 0.05);
      color: var(--yun-text-color-3);
    }
    .btn-close:active {
      background: rgba($color: #000000, $alpha: 0.15);
      color: var(--yun-text-color-0);
    }
  }
  .yun-dialog-box-normal {
    .left {
      margin-right: 10px;
      margin-top: 1px;
      width: 30px;
    }
    .right {
      position: relative;
      top: 5px;
      width: 310px;
    }
    main {
      padding: 10px 0px 20px 0px;
    }
  }
  .yun-dialog-box-easy {
    .left {
      margin-right: 10px;
      display: flex;
    }
    .right {
      position: relative;
      top: 1px;
      width: 320px;
    }
    .right {
      display: flex;
      justify-content: space-between;
      main {
        width: 200px;
        margin-right: 10px;
      }
      footer {
        width: 80px;
      }
    }
  }
}
</style>

<style>
@keyframes yunDialogOpen {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes yunDialogClose {
  from {
    opacity: 1;
    transform: translateY(0px);
  }
  to {
    opacity: 0;
    transform: translateY(15px);
  }
}
</style>
