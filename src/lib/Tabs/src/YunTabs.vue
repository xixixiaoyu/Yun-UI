<template>
  <div
    class="yun-tabs"
    :class="`
               ${type ? 'yun-tabs-' + type : ''}     
               ${round ? 'yun-tabs-round' : ''}
        `"
    :style="`width:${width}`"
  >
    <div :style="activeItemStyle" class="yun-tabs-item-animation-active"></div>
    <div
      v-for="(item, index) in options"
      :key="item.value"
      :ref="(el) => itemRef.push(el)"
      class="yun-tabs-item"
      :style="`width:${itemWidth}`"
      :class="{ 'yun-tabs-item-active': v == item.value }"
      @click="setStyle(item.value)"
    >
      {{ item.label }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { tabsProps } from './props'
type Options = {
  label: string
  value: string
}
const props = defineProps(tabsProps)
const activeItemStyle = ref('')
const v = ref(props.modelValue)
const itemRef = ref([] as any)
watch(
  () => props.modelValue,
  () => {
    v.value = props.modelValue
    setStyle(v.value)
  }
)
const init = () => {
  let index = props.options.findIndex((e) => e.value == v.value)
  if (index < 0) index = 0
  activeItemStyle.value = `width:${itemRef.value[index].offsetWidth}px;transform: translateX(${itemRef.value[index].offsetLeft}px);`
}
const emit = defineEmits(['change', 'update:modelValue'])
let curIndex = props.options.findIndex((e) => v.value == e.value)
const setStyle = (value) => {
  const index = props.options.findIndex((e) => value == e.value)
  if (curIndex != index) {
    const _item = props.options[index]
    if (v.value != _item.value) {
      v.value = _item.value
    }
    const activeRef = itemRef.value[index]
    activeItemStyle.value = `width:${activeRef.offsetWidth}px;transform: translate(${activeRef.offsetLeft}px);`
    if (v.value != props.modelValue) {
      emit('change', {
        label: _item.label,
        value: _item.value,
        activeIndex: index,
      })
      emit('update:modelValue', v.value)
    }
    curIndex = index
  }
}
let timer: ReturnType<typeof setTimeout> | undefined
const debounce = () => {
  clearTimeout(timer)
  timer = setTimeout(() => {
    init()
  }, 250)
}
onMounted(() => {
  if (props.modelValue == '') {
    v.value = props.options[0].value
  }
  init()
  window.addEventListener('resize', debounce, false)
})
onUnmounted(() => {
  window.removeEventListener('resize', debounce)
})
</script>

<script lang="ts">
export default {
  name: 'YunTabs',
}
</script>

<style lang="scss" scoped>
.yun-tabs {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: auto;
  background: var(--yun-form-bgcolor);
  border-radius: var(--yun-form-border-radius);
  overflow: hidden;
  user-select: none;
  .yun-tabs-item {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    z-index: 9;
    height: 28px;
    padding: 0px 12px;
    box-sizing: border-box;
    border-radius: var(--yun-form-border-radius);
    margin: 3px;
    color: var(--yun-text-color-5);
    white-space: nowrap;
    cursor: pointer;
    font-size: 14px;
  }
  .yun-tabs-item-active {
    color: var(--yun-primary-color-dark);
  }
  .yun-tabs-item-animation-active {
    position: absolute;
    top: 3px;
    left: 0px;
    z-index: 9;
    height: 28px;
    border-radius: 3px;
    transition: all 0.25s cubic-bezier(0.65, 0, 0.35, 1);
    background: var(--yun-bgcolor-0);
    transform: translateX(3px);
    box-shadow: 0px 0px 5px rgba($color: #000000, $alpha: 0.08);
  }
}
.yun-tabs-line {
  background: none;
  border-bottom: var(--yun-form-border-width) var(--yun-form-border-color) solid;
  padding-bottom: 5px;
  .yun-tabs-item:hover {
    background: var(--yun-bgcolor-2);
  }
  .yun-tabs-item-active {
    background: none;
  }
  .yun-tabs-item-active:hover {
    transition: all 0.25s cubic-bezier(0.65, 0, 0.35, 1);
    background: none;
  }
  .yun-tabs-item-animation-active {
    position: absolute;
    top: auto;
    bottom: 0px;
    left: 0px;
    z-index: 9;
    height: 2px;
    border-radius: 2px;
    transition: all 0.25s cubic-bezier(0.65, 0, 0.35, 1);
    background: var(--yun-primary-color);
    transform: translateX(3px);
    box-shadow: 0px 0px 5px rgba($color: #000000, $alpha: 0.08);
  }
}
.yun-tabs-round {
  border-radius: 35px;
  .yun-tabs-item {
    border-radius: 35px;
  }
  .yun-tabs-item-animation-active {
    border-radius: 35px;
  }
}
</style>
