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

const handleClick = (e) => {
  if (props.disabled) return
  emit('click', e)
}
</script>

<script lang="ts">
export default {
  name: 'Button',
}
</script>

<style lang="scss" scoped>
.yun-button {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  flex-shrink: 0;
  user-select: none;
  width: auto;
  white-space: nowrap;
  box-sizing: border-box;
  transition:
    background-color 0.1s,
    transform 0.1s,
    color 0.35s cubic-bezier(0.65, 0, 0.25, 1);
  border: none;
  cursor: pointer;
  border-radius: var(--yun-form-border-radius);
  box-sizing: border-box;
  overflow: hidden;
  & + & {
    margin-left: 20px;
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
  transform: scale(0.96);
}
.yun-button-small {
  min-width: 50px;
  height: 26px;
  padding: 0px 8px;
  font-size: 12px;
  .yun-loading-icon::after {
    border: 2px solid rgba(0, 0, 0, 0.25);
    border-left: 2px solid rgba(255, 255, 255, 0.85);
    width: 12px;
    height: 12px;
  }
}
.yun-button-medium {
  min-width: 60px;
  height: 32px;
  padding: 0px 14px;
  font-size: 14px;
  .yun-loading-icon::after {
    border: 2.5px solid rgba(0, 0, 0, 0.25);
    border-left: 2.5px solid rgba(255, 255, 255, 0.85);
    width: 14px;
    height: 14px;
  }
}
.yun-button-large {
  min-width: 70px;
  height: 36px;
  padding: 0px 20px;
  font-size: 16px;
  .yun-loading-icon::after {
    border: 3px solid rgba(0, 0, 0, 0.25);
    border-left: 3px solid rgba(255, 255, 255, 0.85);
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
  background: none;
  color: var(--yun-text-color-5);
}
.yun-button-blank:hover {
  color: var(--yun-text-color-3);
}
.yun-button-active:hover {
  color: var(--yun-text-color-0);
}
.yun-button-primary {
  background: var(--yun-primary-color);
  color: var(--yun-white-text-color);
}
.yun-button-primary:hover {
  background-color: var(--yun-primary-color-hover);
}
.yun-button-primary:active {
  background-color: var(--yun-primary-color-active);
}
.yun-button-info:hover {
  background-color: var(--yun-info-color-hover);
}
.yun-button-info {
  background: var(--yun-info-color);
  color: var(--yun-white-text-color);
}
.yun-button-info:active {
  background-color: var(--yun-info-color-active);
}
.yun-button-success {
  background: var(--yun-success-color);
  color: var(--yun-white-text-color);
}
.yun-button-success:hover {
  background-color: var(--yun-success-color-hover);
}
.yun-button-success:active {
  background-color: var(--yun-success-color-active);
}
.yun-button-error {
  background: var(--yun-error-color);
  color: var(--yun-white-text-color);
}
.yun-button-error:hover {
  background-color: var(--yun-error-color-hover);
}
.yun-button-error:active {
  background-color: var(--yun-error-color-active);
}
.yun-button-normal {
  background: var(--yun-normal-color);
  color: var(--yun-text-color-3);
}
.yun-button-normal:hover {
  background-color: var(--yun-normal-color-hover);
}
.yun-button-normal:active {
  background-color: var(--yun-normal-color-active);
}
.yun-button-warning {
  background: var(--yun-warning-color);
  color: var(--yun-white-text-color);
}
.yun-button-warning:hover {
  background-color: var(--yun-warning-color-hover);
}
.yun-button-warning:active {
  background-color: var(--yun-warning-color-active);
}
.yun-button-loading {
  color: rgba($color: #000000, $alpha: 0);
}
.yun-button[disabled] {
  font-size: 14px;
  cursor: no-drop;
  opacity: var(--yun-disabled-opacity);
}
.yun-button-text {
  background: none;
  min-width: auto;
  height: auto;
  padding: 4px 8px;
}
.yun-button-text.yun-button-info {
  color: var(--yun-info-color-dark);
  &:hover {
    background-color: var(--yun-info-color-light2);
  }
}
.yun-button-text.yun-button-primary {
  color: var(--yun-primary-color-dark);
  &:hover {
    background-color: var(--yun-info-color-light2);
  }
}
.yun-button-text.yun-button-error {
  color: var(--yun-error-color-dark);
  &:hover {
    background-color: var(--yun-error-color-light2);
  }
}
.yun-button-text.yun-button-warning {
  color: var(--yun-warning-color-dark);
  &:hover {
    background-color: var(--yun-warning-color-light2);
  }
}
.yun-button-text.yun-button-success {
  color: var(--yun-success-color-dark);
  &:hover {
    background-color: var(--yun-success-color-light2);
  }
}
.yun-button-text.yun-button-normal {
  color: var(--yun-text-color-5);
  &:hover {
    background-color: var(--yun-normal-color-light2);
  }
}
.yun-button-icon {
  background: none;
  padding: 4px;
}
.yun-button-icon[disabled] {
  & {
    background: none;
  }
}
.yun-button-icon.yun-button-small {
  min-width: 24px;
  min-height: 24px;
  width: 24px;
  height: 24px;
  font-size: 14px;
}
.yun-button-icon.yun-button-medium {
  min-width: 30px;
  min-height: 30px;
  width: 30px;
  height: 30px;
  font-size: 20px;
}
.yun-button-icon.yun-button-large {
  min-width: 36px;
  min-height: 36px;
  width: 36px;
  height: 36px;
  font-size: 26px;
}
.yun-button-icon.yun-button-info {
  &:hover {
    background-color: var(--yun-info-color-light);
  }
  &:active {
    background-color: var(--yun-info-color-light2);
  }
  &,
  &:disabled {
    background: none;
    color: var(--yun-info-text-color);
  }
}
.yun-button-icon.yun-button-warning {
  &:hover {
    background-color: var(--yun-warning-color-light);
  }
  &:active {
    background-color: var(--yun-warning-color-light2);
  }
  &,
  &:disabled {
    background: none;
    color: var(--yun-warning-text-color);
  }
}
.yun-button-icon.yun-button-primary {
  &:hover {
    background-color: var(--yun-primary-color-light);
  }
  &:active {
    background-color: var(--yun-primary-color-light2);
  }
  &,
  &:disabled {
    background: none;
    color: var(--yun-primary-text-color);
  }
}
.yun-button-icon.yun-button-error {
  &:hover {
    background-color: var(--yun-error-color-light);
  }
  &:active {
    background-color: var(--yun-error-color-light2);
  }
  &,
  &:disabled {
    background: none;
    color: var(--yun-error-text-color);
  }
}
.yun-button-icon.yun-button-normal {
  &:hover {
    background-color: var(--yun-normal-color-light);
  }
  &:active {
    background-color: var(--yun-normal-color-light2);
  }
  &,
  &:disabled {
    background: none;
    color: var(--yun-normal-text-color);
  }
}
.yun-button-icon.yun-button-success {
  &:hover {
    background-color: var(--yun-success-color-light);
  }
  &:active {
    background-color: var(--yun-success-color-light2);
  }
  &,
  &:disabled {
    background: none;
    color: var(--yun-success-text-color);
  }
}
.yun-button-icon.yun-button-loading {
  color: rgba($color: #000000, $alpha: 0);
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
