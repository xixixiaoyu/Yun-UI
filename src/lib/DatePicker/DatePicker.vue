<template>
  <YunPopover
    class="yun-popover"
    ref="yunPopoverRef"
    trigger="click"
    placement="bottom-start"
    :arrow="false"
    @on-show="isShowPicker = true"
    @on-hide="isShowPicker = false"
  >
    <template #trigger>
      <div class="yun-date-picker-input" :class="{ 'yun-date-picker-focus': isShowPicker }">
        <div v-show="!dateValue" class="yun-date-picker-placeholder">请选择日期</div>
        <div v-show="dateValue" class="yun-date-picker-dateValue">
          {{ dateValue }}
        </div>
        <Icon size="16px" class="yun-date-picker-icon">
          <CalendarLtr12Regular />
        </Icon>
      </div>
    </template>
    <template #popover-body>
      <Date v-model="dateValue" :multiple="multiple" @change="change" />
    </template>
  </YunPopover>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Date from './Date.vue'
import { datePickerProps } from './props'
import { CalendarLtr12Regular } from '@vicons/fluent'
import { Icon } from '@vicons/utils'
const props = defineProps(datePickerProps)
const isShowPicker = ref(false)
const dateValue = ref<string | undefined>(props.modelValue)
const yunPopoverRef = ref()
const emit = defineEmits(['change', 'update:modelValue'])
const show = () => {
  yunPopoverRef.value.show()
}
const hide = () => {
  yunPopoverRef.value.hide()
}
const change = (date) => {
  emit('update:modelValue', date.value)
  emit('change', { date: date, show, hide })
  if (props.autoClose) {
    hide()
  }
}
defineExpose({ show, hide })
</script>

<script lang="ts">
export default {
  name: 'DatePicker',
}
</script>

<style lang="scss" scoped>
.yun-popover {
  width: 273px;
}
.yun-date-picker-input {
  display: inline-flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 35px;
  padding: 5px;
  font-size: 14px;
  line-height: 24px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border: var(--yun-form-border-width) rgba(0, 0, 0, 0) solid;
  border-radius: var(--yun-form-border-radius);
  background-color: var(--yun-form-bgcolor);
  box-sizing: border-box;
  transition: all 0.15s ease;
  cursor: pointer;
  user-select: none;
  .yun-date-picker-icon {
    position: absolute;
    top: 50%;
    right: 7px;
    transform: translateY(-50%);
    transition: all 0.25s cubic-bezier(0.65, 0, 0.35, 1);
    color: var(--yun-text-color-7);
  }
  .yun-date-picker-placeholder {
    color: rgb(165, 165, 165);
    margin-left: 7px;
  }
  .yun-date-picker-dateValue {
    margin-left: 7px;
  }
}
.yun-date-picker-input:hover {
  border: var(--yun-form-border-width) rgba(0, 0, 0, 0) solid;
  background-color: var(--yun-form-bgcolor-hover);
}
.yun-date-picker-input:active {
  background-color: var(--yun-form-bgcolor-active);
}
.yun-date-picker-input.yun-date-picker-focus {
  background-color: var(--yun-form-bgcolor-focus);
  border: var(--yun-form-border-width) var(--yun-form-border-color-focus) solid;
}
</style>
