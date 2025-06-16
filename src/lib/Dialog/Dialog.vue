<template>
  <template v-if="visible">
    <teleport to="body">
      <div class="gulu-dialog-overlay" @click="onClickOverlay"></div>
      <div class="gulu-dialog-wrapper">
        <div class="gulu-dialog">
          <header>
            <slot name="title">提示</slot>
            <span class="gulu-dialog-close" @click="close"></span>
          </header>
          <main>
            <slot name="content">内容</slot>
          </main>
          <footer>
            <Button level="main" @click="confirmDialog">确定</Button>
            <Button @click="cancel">取消</Button>
          </footer>
        </div>
      </div>
    </teleport>
  </template>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import Button from '../Button/Button.vue'

interface DialogProps {
  visible: boolean
  overlayClosable?: boolean
  confirm?: () => unknown
  cancel?: () => unknown
}

export default defineComponent({
  name: 'Dialog',
  components: {
    Button,
  },
  emits: ['closeOverlay', 'update:visible'],
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    overlayClosable: {
      type: Boolean,
      default: true,
      required: false,
    },
    confirm: {
      type: Function as PropType<() => unknown>,
      required: false,
    },
    cancel: {
      type: Function as PropType<() => unknown>,
      required: false,
    },
  },
  setup(props: DialogProps, { emit }) {
    const close = () => {
      emit('update:visible', false)
    }

    const onClickOverlay = () => {
      if (props.overlayClosable) {
        close()
        emit('closeOverlay')
      }
    }
    const confirmDialog = () => {
      if (props.confirm && props.confirm() !== false) {
        close()
      }
    }
    const cancel = () => {
      props.cancel && props.cancel()
      close()
    }

    return {
      close,
      onClickOverlay,
      confirmDialog,
      cancel,
    }
  },
})
</script>

<style lang="scss" scoped>
$radius: 4px;
$border-color: #d9d9d9;
.gulu-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  > main {
    padding: 12px 16px;
  }
  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
