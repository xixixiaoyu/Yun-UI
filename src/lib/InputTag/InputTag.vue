<template>
  <div class="yun-input-tag">
    <Tag
      closable
      v-for="(item, index) in tagsValue"
      :key="index"
      :type="type"
      @close="delTag(index)"
      >{{ item }}</Tag
    >
    <label v-show="!isInput" @click="openInput" class="yun-input-tag-button">
      <Icon size="18px"> <Add16Regular /></Icon>
    </label>
    <Input
      ref="yunInputRef"
      v-model="inputValue"
      v-show="isInput"
      @blur="blurFn"
      @focus="addTag"
      size="small"
      auto-width
      placeholder=""
    ></Input>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import { inputTagProps } from './props'
import { Icon } from '@vicons/utils'
import { Add16Regular } from '@vicons/fluent'

const props = defineProps(inputTagProps)
const inputValue = ref()
const tagsValue = ref(props.modelValue)
const isInput = ref(false)
const yunInputRef = ref()
let isEnter = false
let delDownTimer
let delDownCheck = 0
watch(
  () => props.modelValue,
  () => {
    tagsValue.value = props.modelValue
  }
)
const openInput = () => {
  isInput.value = true
  nextTick(() => {
    yunInputRef.value.focusFn()
  })
  document.onkeydown = function (event) {
    if (inputValue.value == '') {
      if (event.keyCode == 8 || event.keyCode == 46) {
        clearTimeout(delDownTimer)
        delDownTimer = setTimeout(() => {
          delDownCheck = 0
        }, 500)
        delDownCheck += 1
        if (delDownCheck >= 2) {
          tagsValue.value.splice(tagsValue.value.length - 1, 1)
          delDownCheck = 0
        }
      }
    } else {
      if (event.keyCode == 13) {
        isEnter = true
      }
    }
  }
}
const blurFn = (e) => {
  isInput.value = false
  document.onkeydown = null
  addTag()
  if (isEnter) {
    openInput()
  }
  isEnter = false
}
const addTag = () => {
  if (inputValue.value) {
    tagsValue.value.push(inputValue.value)
  }
  inputValue.value = ''
}
const delTag = (index) => {
  tagsValue.value.splice(index, 1)
}
</script>

<script lang="ts">
export default {
  name: 'InputTag',
}
</script>

<style lang="scss">
.yun-input-tag {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 40px;
  gap: 10px;
  .yun-tag {
    margin: 0;
  }
}
.yun-input-tag-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 26px;
  border: var(--yun-form-border-width) var(--yun-bgcolor-5) dashed;
  border-radius: var(--yun-form-border-radius);
  background-color: var(--yun-bgcolor-0);
  color: var(--yun-text-color-5);
  cursor: pointer;
}
.yun-input-tag-button:hover {
  color: var(--yun-primary-color-dark);
  border: var(--yun-form-border-width) var(--yun-primary-color) dashed;
}
</style>
