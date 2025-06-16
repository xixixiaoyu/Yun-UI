<template>
  <div
    class="yun-tag"
    :class="`yun-tag-${size} yun-tag-${type} ${round ? 'yun-tag-round' : ''} ${
      disabled ? 'yun-tag-disabled' : ''
    } ${to ? 'yun-tag-to' : ''}`"
    :style="`max-width:${maxWidth}`"
    @click="yunTo(to)"
  >
    <div class="yun-tag-left"><slot name="left"></slot></div>
    <div class="yun-tag-value"><slot></slot></div>
    <div class="yun-tag-right"><slot name="right"></slot></div>
    <div v-if="closable" class="yun-tag-close" @click.stop="close">
      <Icon><Dismiss24Filled /></Icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Dismiss24Filled } from '@vicons/fluent'
import { Icon } from '@vicons/utils'
import { useToPage } from '../hooks/index'
import _props from './props'
const yunTo = useToPage()
const props = defineProps(_props)
const emit = defineEmits(['close'])
const close = () => {
  if (props.disabled) {
    return
  }
  emit('close')
}
</script>

<script lang="ts">
export default {
  name: 'Tag',
}
</script>

<style lang="scss">
.yun-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  user-select: none;
  & + & {
    margin-left: 12px;
  }
  .yun-tag-value {
    font-weight: normal;
    padding: 0px 3px;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .yun-tag-close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1em;
    height: 1em;
    border-radius: 3px;
    margin-left: -3px;
    padding: 5px;
    cursor: pointer;
  }
  .yun-tag-close:hover {
    background-color: rgba($color: #000, $alpha: 0.1);
  }
  .yun-tag-close:active {
    background-color: rgba($color: #000, $alpha: 0.2);
  }
  .yun-tag-left {
    margin-left: 3px;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
  }
  .yun-tag-right {
    margin-right: 3px;
    display: inline-flex;
    align-items: center;
  }
}
.yun-tag-to {
  cursor: pointer;
}
.yun-tag-small {
  height: 20px;
  line-height: 20px;
  padding: 0px 2px;
  font-size: 12px;
  .yun-tag-close {
    margin-left: 1px;
    border-radius: 2px;
    padding: 2px;
    font-size: 12px;
    margin-right: 2px;
  }
}
.yun-tag-medium {
  height: 24px;
  line-height: 24px;
  padding: 0px 4px;
  font-size: 13px;
  .yun-tag-close {
    margin-left: 1px;
    border-radius: 3px;
    padding: 4px;
    font-size: 13px;
  }
}
.yun-tag-large {
  height: 28px;
  padding: 0px 5px;
  font-size: 14px;
  .yun-tag-close {
    margin-left: 1px;
    border-radius: 4px;
    padding: 6px;
    font-size: 14px;
  }
}
.yun-tag-round {
  border-radius: 35px;
  .yun-tag-close {
    border-radius: 35px;
  }
}
.yun-tag-primary {
  background-color: var(--yun-primary-color-light);
  color: var(--yun-primary-color-dark);
}
.yun-tag-info {
  color: var(--yun-info-color-dark);
  background-color: var(--yun-info-color-light);
}
.yun-tag-success {
  color: var(--yun-success-color-dark);
  background-color: var(--yun-success-color-light);
}
.yun-tag-warning {
  color: var(--yun-warning-color-dark);
  background-color: var(--yun-warning-color-light);
}
.yun-tag-error {
  color: var(--yun-error-color-dark);
  background-color: var(--yun-error-color-light);
}
.yun-tag-normal {
  color: var(--yun-text-color-3);
  background-color: var(--yun-normal-color-light);
}
.yun-tag-disabled {
  opacity: var(--yun-disabled-opacity);
  cursor: not-allowed;
  .yun-tag-close {
    cursor: not-allowed;
  }
  .yun-tag-close:hover {
    background-color: rgba(0, 0, 0, 0);
  }
}
</style>
