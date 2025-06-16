<template>
  <Flex x="start" gap="15px" class="yun-radio-group" :class="`yun-radio-group-${direction}`">
    <Radio
      v-for="option in options"
      :key="option.value"
      :block="block"
      :iconable="iconable"
      :label="option.label"
      :checked="modelValue == option.value"
      @update:checked="check(option.value)"
    />
  </Flex>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import Radio from './components/Radio.vue'

type Options = {
  label: string
  value: string
}

defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
    required: true,
  },
  block: {
    type: Boolean,
    default: false,
  },
  iconable: {
    type: Boolean,
    default: true,
  },
  direction: {
    type: String,
    default: 'x',
  },
  options: {
    type: Array as PropType<Options[]>,
    default: () => [],
    required: true,
    validator: (value: Array<number>) => {
      const hasNameKey = value.every((option) => Object.keys(option).includes('label'))
      const hasIdKey = value.every((option) => Object.keys(option).includes('value'))
      return hasNameKey && hasIdKey
    },
  },
})
const emit = defineEmits(['update:modelValue'])
const check = (_value: string) => {
  emit('update:modelValue', _value)
}
</script>

<script lang="ts">
export default {
  name: 'RadioGroup',
}
</script>

<style lang="scss">
.yun-radio-group {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 0px;
}
.yun-radio-group.yun-radio-group-x {
  flex-direction: row;
}
.yun-radio-group.yun-radio-group-y {
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
}
</style>
