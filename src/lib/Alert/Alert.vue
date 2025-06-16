<template>
  <div class="yun-alert-group">
    <div v-for="(item, i) in list" :key="i" class="yun-alert" :class="`yun-alert-${item.type}`">
      <div class="alert-icon">
        <Icon size="20">
          <Info24Regular v-if="item.type == `normal`" />
          <Warning24Regular v-if="item.type == `warning`" />
          <CheckmarkCircle24Regular v-if="item.type == `success`" />
          <ErrorCircle24Regular v-if="item.type == `error`" />
          <Alert24Regular v-if="item.type == `info`" />
        </Icon>
      </div>

      <div class="message">
        <div class="title">{{ item.title }}</div>
        <div v-show="item.content" class="content">
          {{ item.content }}
        </div>
      </div>
      <div class="btn-close" @click="emit('close', i)">
        <Icon size="16"> <Dismiss24Filled /> </Icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import {
  Info24Regular,
  Warning24Regular,
  CheckmarkCircle24Regular,
  ErrorCircle24Regular,
  Alert24Regular,
  Dismiss24Filled
} from '@vicons/fluent'
import { Icon } from '@vicons/utils'
// alert type
type Alert = {
  type: string
  title: string
  content: string
}

defineProps({
  list: {
    type: Array as PropType<Alert[]>,
    default: () => []
  }
})
const emit = defineEmits(['close'])
</script>

<script lang="ts">
export default {
  name: 'Alert'
}
</script>

<style lang="scss" scoped>
.yun-alert-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 0px;
  .yun-alert {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    width: 100%;
    min-height: 32px;
    background-color: var(--yun-normal-color);
    border-radius: var(--yun-border-radius);
    margin-bottom: 12px;
    padding: 12px 16px;
    border: 1px solid transparent;
    box-sizing: border-box;
    .alert-icon {
      margin: 1px 5px 0px 0px;
    }
    .btn-close {
      position: absolute;
      top: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      right: 8px;
      border-radius: var(--yun-border-radius);
      box-sizing: border-box;
      cursor: pointer;
      user-select: none;
    }
    .btn-close:hover {
      background: var(--yun-bgcolor-3);
    }
    .btn-close:active {
      background: var(--yun-bgcolor-4);
    }
    .message {
      width: calc(100% - 40px);
      .title {
        margin-top: 1px;
        font-size: 14px;
        width: 100%;
        word-wrap: break-word;
        white-space: pre-line;
        font-weight: 400;
      }
      .content {
        margin-top: 7px;
        font-size: 14px;
        width: 100%;
        font-weight: 300;
        word-wrap: break-word;
        white-space: pre-line;
      }
    }
  }
  .yun-alert-normal {
    color: var(--yun-text-color-5);
    background-color: var(--yun-normal-color-light);
  }
  .yun-alert-success {
    color: var(--yun-success-color-dark);
    background-color: var(--yun-success-color-light);
  }
  .yun-alert-warning {
    color: var(--yun-warning-color-dark);
    background-color: var(--yun-warning-color-light);
  }
  .yun-alert-error {
    color: var(--yun-error-color-dark);
    background-color: var(--yun-error-color-light);
  }
  .yun-alert-info {
    color: var(--yun-info-color-dark);
    background-color: var(--yun-info-color-light);
  }
}
</style>
