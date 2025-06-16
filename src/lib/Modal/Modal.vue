<template>
  <teleport to="#yun-modal">
    <transition name="yun-modal">
      <div v-if="visible" class="yun-modal" @click="maskClick">
        <div
          v-if="visible"
          class="yun-modal-box"
          :style="`width:${width};height:${height}`"
          @click.stop
        >
          <slot></slot>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import { useDOMCreate } from '../hooks/index'
useDOMCreate('yun-modal')
defineProps({
  title: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '',
  },
  height: {
    type: String,
    default: '',
  },
  visible: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['maskClick', 'confirm'])
const maskClick = () => {
  emit('maskClick')
}
</script>

<script lang="ts">
export default {
  name: 'Modal',
}
</script>

<style lang="scss" scoped>
.yun-modal {
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
  .yun-modal-box {
    border-radius: var(--yun-border-radius);
    background-color: var(--yun-bgcolor-0);
    box-shadow: 0px 15px 50px rgba($color: #000000, $alpha: 0.05);
  }
}
.yun-modal-enter-active,
.yun-modal-leave-active {
  transition: all 0.25s ease;
}
.yun-modal-enter-from,
.yun-modal-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
