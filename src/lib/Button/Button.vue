<template>
  <button
    class="yun-button"
    :class="` 
          ${isText ? 'yun-button-text' : ''}  
          ${size ? 'yun-button-' + size : ''}
          ${type ? 'yun-button-' + type : ''}
          ${round ? 'yun-button-round' : ''}  
          ${isIcon ? 'yun-button-icon' : ''}
          ${loading ? 'yun-button-loading' : ''}
          `"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>

    <div class="yun-loading-icon" :class="{ 'yun-loading-icon-show': loading && !disabled }"></div>
  </button>
</template>

<script setup lang="ts">
import { buttonProps } from './props'

const emit = defineEmits(['click'])
const props = defineProps(buttonProps)

const handleClick = e => {
  if (props.disabled) return
  emit('click', e)
}
</script>

<script lang="ts">
export default {
  name: 'Button'
}
</script>

<style lang="scss" scoped>
.yun-button {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-shrink: 0;
  user-select: none;
  width: auto;
  white-space: nowrap;
  box-sizing: border-box;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid transparent;
  cursor: pointer;
  border-radius: var(--yun-border-radius);
  font-weight: 500;
  letter-spacing: 0.02em;
  overflow: hidden;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(121, 180, 166, 0.2);
  }

  & + & {
    margin-left: 12px;
  }
  .yun-loading-icon {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    transition: all 0.35s cubic-bezier(0.65, 0, 0.25, 1);
    opacity: 0;
    transform: translateY(100%);
  }
  .yun-loading-icon-show {
    opacity: 1;
    transform: translateY(0px);
  }
  .yun-loading-icon::after {
    position: absolute;
    left: 50%;
    top: 50%;
    user-select: none;
    transform: translate(-50%, -50%);
    content: '';
    animation: yun-loading-spinner-spin 0.65s linear infinite;
    border-radius: 50%;
  }
}
.yun-button:active {
  transform: scale(0.98);
}

.yun-button-small {
  min-width: 64px;
  height: var(--yun-form-input-height-small);
  padding: var(--yun-form-input-padding-small);
  font-size: var(--yun-form-font-size-small);
  .yun-loading-icon::after {
    border: 2px solid rgba(121, 180, 166, 0.3);
    border-left: 2px solid rgba(255, 255, 255, 0.9);
    width: 12px;
    height: 12px;
  }
}

.yun-button-medium {
  min-width: 80px;
  height: var(--yun-form-input-height-medium);
  padding: var(--yun-form-input-padding-medium);
  font-size: var(--yun-form-font-size-medium);
  .yun-loading-icon::after {
    border: 2px solid rgba(121, 180, 166, 0.3);
    border-left: 2px solid rgba(255, 255, 255, 0.9);
    width: 14px;
    height: 14px;
  }
}

.yun-button-large {
  min-width: 96px;
  height: var(--yun-form-input-height-large);
  padding: var(--yun-form-input-padding-large);
  font-size: var(--yun-form-font-size-large);
  .yun-loading-icon::after {
    border: 2px solid rgba(121, 180, 166, 0.3);
    border-left: 2px solid rgba(255, 255, 255, 0.9);
    width: 16px;
    height: 16px;
  }
}
@keyframes yun-loading-spinner-spin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
.yun-button-round {
  border-radius: 50px;
}

.yun-button-blank {
  background: transparent;
  color: var(--yun-text-color-4);
  border-color: transparent;

  &:hover {
    color: var(--yun-text-color-2);
    background: var(--yun-bgcolor-2);
  }

  &:active {
    color: var(--yun-text-color-1);
    background: var(--yun-bgcolor-3);
  }
}

.yun-button-primary {
  background: var(--yun-primary-color);
  color: var(--yun-white-text-color);
  border-color: var(--yun-primary-color);

  &:hover {
    background: var(--yun-primary-color-hover);
    border-color: var(--yun-primary-color-hover);
    box-shadow: var(--yun-box-shadow);
  }

  &:active {
    background: var(--yun-primary-color-active);
    border-color: var(--yun-primary-color-active);
  }
}
// 信息按钮
.yun-button-info {
  background: var(--yun-info-color);
  color: var(--yun-white-text-color);
  border-color: var(--yun-info-color);

  &:hover {
    background: var(--yun-info-color-hover);
    border-color: var(--yun-info-color-hover);
    box-shadow: var(--yun-box-shadow);
  }

  &:active {
    background: var(--yun-info-color-active);
    border-color: var(--yun-info-color-active);
  }
}

// 成功按钮
.yun-button-success {
  background: var(--yun-success-color);
  color: var(--yun-white-text-color);
  border-color: var(--yun-success-color);

  &:hover {
    background: var(--yun-success-color-hover);
    border-color: var(--yun-success-color-hover);
    box-shadow: var(--yun-box-shadow);
  }

  &:active {
    background: var(--yun-success-color-active);
    border-color: var(--yun-success-color-active);
  }
}

// 错误按钮
.yun-button-error {
  background: var(--yun-error-color);
  color: var(--yun-white-text-color);
  border-color: var(--yun-error-color);

  &:hover {
    background: var(--yun-error-color-hover);
    border-color: var(--yun-error-color-hover);
    box-shadow: var(--yun-box-shadow);
  }

  &:active {
    background: var(--yun-error-color-active);
    border-color: var(--yun-error-color-active);
  }
}

// 警告按钮
.yun-button-warning {
  background: var(--yun-warning-color);
  color: var(--yun-white-text-color);
  border-color: var(--yun-warning-color);

  &:hover {
    background: var(--yun-warning-color-hover);
    border-color: var(--yun-warning-color-hover);
    box-shadow: var(--yun-box-shadow);
  }

  &:active {
    background: var(--yun-warning-color-active);
    border-color: var(--yun-warning-color-active);
  }
}

// 普通按钮
.yun-button-normal {
  background: var(--yun-normal-color);
  color: var(--yun-text-color-2);
  border-color: var(--yun-border-2);

  &:hover {
    background: var(--yun-normal-color-hover);
    border-color: var(--yun-border-3);
    box-shadow: var(--yun-box-shadow);
  }

  &:active {
    background: var(--yun-normal-color-active);
    border-color: var(--yun-border-4);
  }
}
// 加载状态
.yun-button-loading {
  color: transparent;
  pointer-events: none;
}

// 禁用状态
.yun-button[disabled] {
  cursor: not-allowed;
  opacity: var(--yun-disabled-opacity);
  pointer-events: none;

  &:hover,
  &:active,
  &:focus {
    transform: none;
    box-shadow: none;
  }
}
// 文本按钮
.yun-button-text {
  background: transparent;
  border-color: transparent;
  min-width: auto;
  height: auto;
  padding: 6px 12px;

  &.yun-button-primary {
    color: var(--yun-primary-color);
    &:hover {
      background: var(--yun-primary-color-light);
      color: var(--yun-primary-color-dark);
    }
    &:active {
      background: var(--yun-primary-color-light2);
    }
  }

  &.yun-button-info {
    color: var(--yun-info-color);
    &:hover {
      background: var(--yun-info-color-light);
      color: var(--yun-info-color-dark);
    }
    &:active {
      background: var(--yun-info-color-light2);
    }
  }

  &.yun-button-success {
    color: var(--yun-success-color);
    &:hover {
      background: var(--yun-success-color-light);
      color: var(--yun-success-color-dark);
    }
    &:active {
      background: var(--yun-success-color-light2);
    }
  }

  &.yun-button-warning {
    color: var(--yun-warning-color);
    &:hover {
      background: var(--yun-warning-color-light);
      color: var(--yun-warning-color-dark);
    }
    &:active {
      background: var(--yun-warning-color-light2);
    }
  }

  &.yun-button-error {
    color: var(--yun-error-color);
    &:hover {
      background: var(--yun-error-color-light);
      color: var(--yun-error-color-dark);
    }
    &:active {
      background: var(--yun-error-color-light2);
    }
  }

  &.yun-button-normal {
    color: var(--yun-text-color-4);
    &:hover {
      background: var(--yun-normal-color-light);
      color: var(--yun-text-color-2);
    }
    &:active {
      background: var(--yun-normal-color-light2);
    }
  }
}
// 图标按钮
.yun-button-icon {
  background: transparent;
  border-color: transparent;
  padding: 6px;

  &.yun-button-small {
    min-width: 28px;
    min-height: 28px;
    width: 28px;
    height: 28px;
    font-size: 14px;
    padding: 4px;
  }

  &.yun-button-medium {
    min-width: 36px;
    min-height: 36px;
    width: 36px;
    height: 36px;
    font-size: 18px;
    padding: 6px;
  }

  &.yun-button-large {
    min-width: 44px;
    min-height: 44px;
    width: 44px;
    height: 44px;
    font-size: 22px;
    padding: 8px;
  }
}
// 图标按钮颜色变体
.yun-button-icon {
  &.yun-button-primary {
    color: var(--yun-primary-color);
    &:hover {
      background: var(--yun-primary-color-light);
      color: var(--yun-primary-color-dark);
    }
    &:active {
      background: var(--yun-primary-color-light2);
    }
  }

  &.yun-button-info {
    color: var(--yun-info-color);
    &:hover {
      background: var(--yun-info-color-light);
      color: var(--yun-info-color-dark);
    }
    &:active {
      background: var(--yun-info-color-light2);
    }
  }

  &.yun-button-success {
    color: var(--yun-success-color);
    &:hover {
      background: var(--yun-success-color-light);
      color: var(--yun-success-color-dark);
    }
    &:active {
      background: var(--yun-success-color-light2);
    }
  }

  &.yun-button-warning {
    color: var(--yun-warning-color);
    &:hover {
      background: var(--yun-warning-color-light);
      color: var(--yun-warning-color-dark);
    }
    &:active {
      background: var(--yun-warning-color-light2);
    }
  }

  &.yun-button-error {
    color: var(--yun-error-color);
    &:hover {
      background: var(--yun-error-color-light);
      color: var(--yun-error-color-dark);
    }
    &:active {
      background: var(--yun-error-color-light2);
    }
  }

  &.yun-button-normal {
    color: var(--yun-text-color-4);
    &:hover {
      background: var(--yun-normal-color-light);
      color: var(--yun-text-color-2);
    }
    &:active {
      background: var(--yun-normal-color-light2);
    }
  }

  &.yun-button-loading {
    color: transparent;
  }
}
</style>
<style>
.yun-button svg {
  font-size: 15px;
  width: 18px;
  height: 18px;
  margin-right: 5px;
}
.yun-button-icon svg {
  margin-right: 0;
  width: auto;
  height: auto;
}
</style>
