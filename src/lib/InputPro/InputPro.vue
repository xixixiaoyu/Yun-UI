<template>
  <div class="yun-input-pro">
    <slot name="left" />
    <Dropdown
      ref="yunDropdownRef"
      style="width: 100%"
      :trigger="trigger"
      :arrow="arrow"
      :placement="placement"
      :align="align"
      :width="parseFloat(popoverWidth) - 12 + 'px'"
      :options="options"
      @change="selectFn"
    >
      <Input
        ref="yunInputProRef"
        v-model="v"
        :type="type"
        :autoWidth="autoWidth"
        :size="size"
        :align="align"
        :placeholder="placeholder"
        :clearable="clearable"
        @click.stop
        @input="input"
        @change="emit('change', v)"
        @blur="(emit('blur', v), delayHide())"
        @focus="(open(), emit('focus', v))"
        @clear="clear"
      />
    </Dropdown>
    <slot name="right" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { inputProProps } from './props'

const props = defineProps(inputProProps)

const v = ref(props.modelValue)
watch(
  () => props.modelValue,
  () => {
    v.value = props.modelValue
  }
)
const emit = defineEmits(['update:modelValue', 'clear', 'blur', 'focus', 'change', 'input'])

const yunDropdownRef = ref(null)
const yunInputProRef = ref(null)

const input = (e) => {
  emit('update:modelValue', e)
  emit('input', e)
}

const clear = () => {
  emit('clear', v.value)
  v.value = ''
  emit('update:modelValue', v.value)
}

const selectFn = (e: any) => {
  v.value = e.value.value
  emit('update:modelValue', v.value)
  emit('input', v.value)
  emit('change', v.value)
  setTimeout(() => {
    hide()
  }, 120)
}

const open = () => {
  if (props.options.length == 0) return
  yunDropdownRef.value.show()
}

const hide = () => {
  yunDropdownRef.value.hide()
}

const delayHide = () => {
  setTimeout(() => {
    hide()
  }, 120)
}
</script>

<script lang="ts">
export default {
  name: 'InputPro',
}
</script>

<style lang="scss" scoped>
.yun-input-pro {
  display: inline-flex;
  align-items: center;
  width: 100%;
  .yun-input {
    width: 100%;
  }
}
</style>
