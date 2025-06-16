<template>
  <input
    v-model="v"
    :class="{ round: round, disabled: disabled }"
    type="checkbox"
    :disabled="disabled"
    @change="change"
  />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: () => {
      return false
    },
  },
  round: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
const v = ref(props.modelValue)
watch(
  () => props.modelValue,
  () => {
    v.value = props.modelValue
  }
)
const emit = defineEmits(['update:modelValue'])
const change = () => {
  emit('update:modelValue', v.value)
}
</script>

<script lang="ts">
export default {
  name: 'Switch',
}
</script>

<style lang="scss" scoped>
input {
  position: relative;
  width: 38px;
  height: 24px;
  border: none;
  outline: none;
  box-sizing: border-box;
  appearance: none;
  vertical-align: middle;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
}
input::before {
  position: absolute;
  left: 0px;
  top: 0px;
  content: '';
  width: 38px;
  height: 24px;
  background: var(--yun-form-bgcolor);
  border-radius: 4px;
  transition: var(--yun-form-transition);
  cursor: pointer;
}
input:hover::before {
  background: var(--yun-form-bgcolor-hover);
}
input:active::before {
  background: var(--yun-form-bgcolor-active);
}
.round::before {
  border-radius: 50px;
}
input::after {
  position: absolute;
  width: 16px;
  height: 16px;
  content: '';
  border-radius: 2px;
  background: var(--yun-white-color);
  transition: var(--yun-form-transition);
  transform: translate(4px, 4px);
  cursor: pointer;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.08);
}
.round::after {
  border-radius: 50px;
}
input:checked::before {
  background: var(--yun-primary-color);
}
input:checked::after {
  transform: translate(18px, 4px);
}

input:checked:active:after {
  margin-left: -2px;
  width: 18;
}
input:active:after {
  width: 18px;
}

input.disabled {
  opacity: 0.4;
  &,
  &::before,
  &::after {
    cursor: not-allowed;
  }
}
</style>
