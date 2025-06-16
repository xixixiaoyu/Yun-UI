<template>
  <YunPopover ref="yunPopoverRef" class="yun-popok" :trigger="trigger" :placement="placement">
    <template #trigger>
      <slot />
    </template>
    <template #popover-body>
      <div class="yun-popok-body" :style="`width:${width}`">
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
          <div v-if="title" class="title">{{ title }}</div>
          <div v-if="content" class="content">{{ content }}</div>
          <div class="footer">
            <Button size="small" type="blank" @click="emit('cancel', { show, hide })">取消 </Button>
            <Button size="small" @click="emit('ok', { show, hide })">确定</Button>
          </div>
        </div>
      </div>
    </template>
  </YunPopover>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import {
  Info24Regular,
  Warning24Regular,
  CheckmarkCircle24Regular,
  ErrorCircle24Regular,
  Alert24Regular,
} from '@vicons/fluent'
import { Icon } from '@vicons/utils'
defineProps({
  type: {
    type: String,
    default: 'warning',
  },
  width: { type: String, default: '250px' },
  trigger: {
    type: String,
    default: 'click',
  },
  title: {
    type: String,
    default: '',
  },
  content: {
    type: String,
    default: '',
  },
  placement: {
    type: String,
    default: 'top',
  },
})
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const yunPopoverRef = ref()
const show = () => {
  yunPopoverRef.value.show()
}
const hide = () => {
  yunPopoverRef.value.hide()
}
const emit = defineEmits(['ok', 'cancel'])
defineExpose({ show, hide })
</script>

<script lang="ts">
export default {
  name: 'PopOk',
}
</script>

<style lang="scss" scoped>
.yun-popok {
  display: inline-block;
}
.yun-popok-body {
  display: flex;
  padding: 10px;
  .left {
    width: 30px;
    margin-right: 5px;
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
  }
  .right {
    width: calc(100% - 30px);
    .title {
      width: 100%;
      font-weight: 600;
      margin-bottom: 5px;
    }
    .content {
      width: 100%;
      font-size: 14px;
      margin-bottom: 10px;
    }
    .footer {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      .yun-button {
        margin-left: 10px;
      }
    }
  }
}
</style>
