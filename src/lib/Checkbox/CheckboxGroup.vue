<template>
  <Flex x="start" gap="15px" class="yun-checkbox-group" :class="`yun-checkbox-group-${direction}`">
    <Checkbox
      v-for="option in options"
      :key="option.value"
      :block="block"
      :iconable="iconable"
      :round="round"
      :label="option.label"
      :checked="getChecked(option.value)"
      @change="check(option.value, $event)"
    />
  </Flex>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import Checkbox from './Checkbox.vue'

type Options = {
  label: string
  value: string | number
}
const props = defineProps({
  modelValue: {
    type: Array,
    default: () => {
      return []
    },
    required: true,
  },
  block: {
    type: Boolean,
    default: () => {
      return false
    },
  },
  round: {
    type: Boolean,
    default: () => {
      return false
    },
  },
  direction: {
    type: String,
    default: 'x',
  },
  iconable: {
    type: Boolean,
    default: true,
  },
  options: {
    type: Array as PropType<Options[]>,
    required: true,
    validator: (value: Array<Options>) => {
      const hasNameKey = value.every((option) => Object.keys(option).includes('label'))
      const hasIdKey = value.every((option) => Object.keys(option).includes('value'))
      return hasNameKey && hasIdKey
    },
  },
})
const emit = defineEmits(['update:modelValue'])
const check = (_value: string, checked: boolean) => {
  const updatedValue = [...props.modelValue]
  if (checked) {
    updatedValue.push(_value)
  } else {
    updatedValue.splice(updatedValue.indexOf(_value), 1)
  }
  emit('update:modelValue', updatedValue)
}
const getChecked = (_value: string | number) => {
  return props.modelValue.includes(_value)
}
</script>

<script lang="ts">
export default {
  name: 'CheckboxGroup',
}
</script>

<style lang="scss" scoped>
.yun-checkbox-group {
  display: flex;
  align-items: center;
  font-size: 0px;
  flex-wrap: wrap;
}
.yun-checkbox-group.yun-checkbox-group-x {
  flex-direction: row;
}
.yun-checkbox-group.yun-checkbox-group-y {
  align-items: flex-start;
  flex-direction: column;
}
</style>
