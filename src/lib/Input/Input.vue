<template>
  <div
    class="yun-input-view"
    :class="`
            yun-input-view-${size} 
            ${_type == 'textarea' ? 'yun-input-view-textarea' : ''}
            ${readonly ? 'yun-input-view-readonly' : ''} 
            ${disabled ? 'yun-input-view-disabled' : ''}
            ${align ? 'yun-input-view-align-' + align : ''}
            ${autoWidth ? 'yun-input-view-auto-width' : ''}
            ${status ? 'yun-input-status-' + status : ''}
            `"
  >
    <span v-if="labelLeft" class="label-left">{{ labelLeft }}</span>
    <textarea
      ref="yunTextareaRef"
      v-if="_type == 'textarea'"
      v-model="v"
      class="btf-scrollbar"
      :class="`yun-textarea-resize-${resize}`"
      rows="3"
      cols="3"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      @input="input"
      @change="emit('change', v)"
      @blur="emit('blur', v)"
      @focus="emit('focus', v)"
    ></textarea>

    <input
      ref="yunInputRef"
      v-else
      :class="{ label: labelLeft }"
      v-model="v"
      :disabled="disabled"
      :placeholder="placeholder"
      :type="_type"
      :readonly="readonly"
      onkeypress="if(window.event.keyCode === 13) this.blur()"
      @input="input"
      @change="emit('change', v)"
      @blur="emit('blur', v)"
      @focus="emit('focus', v)"
    />
    <span v-if="labelRight" class="label-right">{{ labelRight }}</span>
    <label v-if="autoWidth" class="input-auto-width">{{ v }}</label>
    <div
      v-if="showPassword || clearable || showCount"
      class="yun-input-controls"
      :class="{
        'yun-input-controls-show':
          (v && showPassword) ||
          (v && clearable) ||
          (showCount && !clearable && !showPassword) ||
          (showCount && maxLength)
      }"
    >
      <div v-if="getCheckNumStr" class="yun-input-show-count">
        {{ getCheckNumStr }}
      </div>
      <div v-if="showPassword" class="yun-input-show-password">
        <Icon class="eye-icon-view" size="18" @mousedown.prevent="" @click="showPasswordFn">
          <EyeOutline v-show="_type == 'text'" />
          <EyeOffOutline v-show="_type == 'password'" />
        </Icon>
      </div>
      <div v-if="clearable" class="yun-input-clear">
        <Icon class="close-icon-view" size="18" @mousedown.prevent="" @click="clear">
          <CloseCircleOutline />
        </Icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { CloseCircleOutline, EyeOutline, EyeOffOutline } from '@vicons/ionicons5'
import { Icon } from '@vicons/utils'
import { inputProps } from './props'
const props = defineProps(inputProps)
const v = ref(props.modelValue)
watch(
  () => props.modelValue,
  () => {
    v.value = props.modelValue
  }
)
const emit = defineEmits(['update:modelValue', 'clear', 'blur', 'focus', 'change', 'input'])
const input = () => {
  if (props.maxLength) {
    // @ts-ignore
    for (let i = 0; i <= v.value.length - 1; i++) {
      // @ts-ignore
      if (getTextLength(v.value.slice(0, i)) >= props.maxLength) {
        // @ts-ignore
        v.value = v.value.slice(0, i)
      }
    }
  }
  emit('update:modelValue', v.value)
  emit('input', v.value)
}
const clear = (): void => {
  emit('clear', v.value)
  v.value = ''
  emit('update:modelValue', v.value)
}
const _type = ref(props.type)
const showPasswordFn = (): void => {
  _type.value == 'text' ? (_type.value = 'password') : (_type.value = 'text')
}
const getCheckNumStr = computed(() => {
  if (props.showCount && props.maxLength) {
    // @ts-ignore
    return getTextLength(v.value) + ' / ' + props.maxLength
  } else if (props.showCount) {
    // @ts-ignore
    return getTextLength(v.value)
  } else {
    return false
  }
})
/**
 * 获取字符长度
 * @param val
 */
const getTextLength = (val: string) => {
  if (!props.niceCount) {
    return val.length
  } else {
    let len = 0
    for (let i = 0; i <= val.length - 1; i++) {
      const length = val.charCodeAt(i)
      if (length >= 0 && length <= 128) {
        len += 0.5
      } else {
        len += 1
      }
    }
    return Math.trunc(len)
  }
}

const yunInputRef = ref()
const yunTextareaRef = ref()

const focusFn = () => {
  if (props.type == 'textarea') {
    yunTextareaRef.value?.focus()
  } else {
    yunInputRef.value?.focus()
  }
}

defineExpose({ focusFn })
</script>

<script lang="ts">
export default {
  name: 'Input'
}
</script>

<style lang="scss" scoped>
.yun-input-view {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  width: 100%;
  border: var(--yun-form-border-width) var(--yun-form-border-color) solid;
  border-radius: var(--yun-form-border-radius);
  background-color: var(--yun-form-bgcolor);
  transition: var(--yun-form-transition);
  box-sizing: border-box;
  .label-left,
  .label-right {
    height: var(--yun-form-input-height-medium);
    display: inline-flex;
    vertical-align: middle;
    align-items: center;
    padding: 0 12px;
    background-color: var(--yun-bgcolor-2);
    color: var(--yun-text-color-4);
    border: 1px solid var(--yun-border-2);
    border-radius: var(--yun-form-border-radius);
    font-size: var(--yun-form-font-size-medium);
    font-weight: 500;
  }
  .label-left {
    // border-top-left-radius: var(--yun-form-border-radius);
    // border-bottom-left-radius: var(--yun-form-border-radius);
  }
  .label-right {
    // border-top-right-radius: var(--yun-form-border-radius);
    // border-bottom-right-radius: var(--yun-form-border-radius);
  }
  input,
  textarea {
    width: 100%;
    text-overflow: ellipsis;
    border: none;
    background: none;
    color: var(--yun-text-color-2);
    outline: none;
    box-sizing: border-box;
  }
  input {
    height: 35px;
    overflow: hidden;
  }
  textarea {
    min-height: 35px;
  }
  input::placeholder,
  textarea::placeholder {
    color: var(--yun-text-color-6);
    font-weight: 400;
  }
  .yun-input-controls {
    display: inline-flex;
    align-items: center;
    height: 35px;
    opacity: 0;
    transform: translateX(100%);
    transition: var(--yun-form-transition);
    > div {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      white-space: nowrap;
      min-width: 30px;
      padding: 0px 5px;
      box-sizing: border-box;
      user-select: none;
      opacity: 0.5;
      transition: var(--yun-form-transition);
    }
    .yun-input-clear {
      cursor: pointer;
    }
    .yun-input-show-password {
      cursor: pointer;
    }
    > div:hover {
      opacity: 1;
    }
  }
  .yun-input-controls-show {
    opacity: 0.8;
    transform: translateX(0px);
  }
}
.yun-input-view-align-left {
  input,
  textarea {
    text-align: left;
  }
}
.yun-input-view-align-center {
  input,
  textarea {
    text-align: center;
  }
}
.yun-input-view-align-right {
  input,
  textarea {
    text-align: right;
  }
}
.yun-input-view-auto-width {
  position: relative;
  width: auto;
  input {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0px;
    display: inline-block;
    width: 100%;
  }
  .input-auto-width {
    width: auto;
    min-width: 50px;
    height: 100%;
    visibility: hidden;
    box-sizing: border-box;
  }
}
.yun-input-view-small {
  input,
  textarea {
    padding: var(--yun-form-input-padding-small);
    font-size: var(--yun-form-font-size-small);
    line-height: var(--yun-form-input-line-height-small);
  }
  input {
    height: var(--yun-form-input-height-small);
  }
  textarea {
    min-height: var(--yun-form-input-height-small);
  }
  .yun-input-controls {
    height: var(--yun-form-input-height-small);
  }
  .input-auto-width {
    height: var(--yun-form-input-height-small);
    padding: var(--yun-form-input-padding-small);
    font-size: var(--yun-form-font-size-small);
    line-height: var(--yun-form-input-line-height-small);
  }
}
.yun-input-view-medium {
  input,
  textarea {
    padding: var(--yun-form-input-padding-medium);
    font-size: var(--yun-form-font-size-medium);
    line-height: var(--yun-form-input-line-height-medium);
  }
  input {
    height: var(--yun-form-input-height-medium);
  }
  textarea {
    min-height: var(--yun-form-input-height-medium);
  }
  .yun-input-controls {
    height: var(--yun-form-input-height-medium);
  }
  .input-auto-width {
    height: var(--yun-form-input-height-medium);
    font-size: var(--yun-form-font-size-medium);
    line-height: var(--yun-form-input-line-height-medium);
    padding: var(--yun-form-input-padding-medium);
  }
}
.yun-input-view-large {
  input,
  textarea {
    padding: var(--yun-form-input-padding-large);
    font-size: var(--yun-form-font-size-large);
    line-height: var(--yun-form-input-line-height-large);
  }
  input {
    height: var(--yun-form-input-height-large);
  }
  textarea {
    min-height: var(--yun-form-input-height-large);
  }
  .yun-input-controls {
    height: var(--yun-form-input-height-large);
  }
  .input-auto-width {
    height: var(--yun-form-input-height-large);
    padding: var(--yun-form-input-padding-large);
    font-size: var(--yun-form-font-size-large);
    line-height: var(--yun-form-input-line-height-large);
  }
}
.yun-input-view-textarea {
  flex-direction: column;
  justify-content: center;
  .yun-input-controls {
    width: 100%;
    justify-content: flex-end;
    height: 25px;
    box-sizing: border-box;
    transform: translateY(100%);
  }
  .yun-input-controls-show {
    transform: translateY(0px);
  }
  .yun-textarea-resize-none {
    resize: none;
  }
  .yun-textarea-resize-horizontal {
    resize: horizontal;
  }
  .yun-textarea-resize-vertical {
    resize: vertical;
  }
  .yun-textarea-resize-both {
    resize: both;
  }
  .yun-textarea-resize-inline {
    resize: inline;
  }
}
.yun-input-view:hover {
  border: var(--yun-form-border-width) var(--yun-form-border-color-hover) solid;
  background-color: var(--yun-form-bgcolor-hover);
}
.yun-input-view:active {
  background-color: var(--yun-form-bgcolor-active);
}
.yun-input-view:focus-within {
  background-color: var(--yun-form-bgcolor-focus);
  border: var(--yun-form-border-width) var(--yun-form-border-color-focus) solid;
  box-shadow: 0 0 0 2px rgba(121, 180, 166, 0.15);
}

.yun-input-view.yun-input-status-error {
  border-color: var(--yun-error-color);
}
.yun-input-view.yun-input-status-info {
  border-color: var(--yun-info-color);
}
.yun-input-view.yun-input-status-warning {
  border-color: var(--yun-warning-color);
}
.yun-input-view.yun-input-status-success {
  border-color: var(--yun-success-color);
}

.yun-input-view-readonly {
  cursor: default;
  border: var(--yun-form-border-width) rgba(0, 0, 0, 0) solid;
  background-color: var(--yun-form-bgcolor);
  input {
    user-select: auto;
  }
}
.yun-input-view-readonly:hover {
  border: var(--yun-form-border-width) rgba(0, 0, 0, 0) solid;
  background-color: var(--yun-form-bgcolor);
}
.yun-input-view-readonly:active {
  border: var(--yun-form-border-width) rgba(0, 0, 0, 0) solid;
  background-color: var(--yun-form-bgcolor);
}
.yun-input-view-readonly:focus-within {
  border: var(--yun-form-border-width) rgba(0, 0, 0, 0) solid;
  background-color: var(--yun-form-bgcolor);
}
.yun-input-view-disabled {
  input,
  textarea {
    cursor: not-allowed;
  }
  cursor: not-allowed;
  opacity: var(--yun-disabled-opacity);
  border: var(--yun-form-border-width) rgba(0, 0, 0, 0) solid;
  background-color: var(--yun-form-bgcolor);
}
.yun-input-view-disabled:hover {
  border: var(--yun-form-border-width) rgba(0, 0, 0, 0) solid;
  background-color: var(--yun-form-bgcolor);
}
.yun-input-view-disabled:active {
  border: var(--yun-form-border-width) rgba(0, 0, 0, 0) solid;
  background-color: var(--yun-form-bgcolor);
}
.yun-input-view-disabled:focus-within {
  border: var(--yun-form-border-width) rgba(0, 0, 0, 0) solid;
  background-color: var(--yun-form-bgcolor);
}
</style>
