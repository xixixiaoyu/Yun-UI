<template>
  <yun-popover ref="yunPopoverRef" :trigger="trigger" :arrow="arrow" :placement="placement">
    <template #trigger>
      <slot />
    </template>
    <template #popover-body>
      <div
        v-if="_options.length > 0"
        class="yun-dropdown-body"
        :style="`width:${width};max-height:${maxHeight}`"
      >
        <div
          v-for="(item, index) in _options"
          :key="index"
          class="yun-dropdown-option"
          :style="`text-align:${align}`"
          @click="change(item)"
        >
          {{ item.label }}
        </div>
      </div>
    </template>
  </yun-popover>
</template>

<script setup lang="ts">
import { ref, PropType, computed } from 'vue'
type Options = {
  label: number | string
  value: number | string
}
const props = defineProps({
  options: {
    type: Array as PropType<Options[]>,
    default() {
      return []
    },
    required: true,
    validator(value: PropType<Options[]>) {
      return value.length >= 0
    },
  },
  trigger: {
    type: String,
    default: 'hover',
  },
  placement: {
    type: String,
    default: 'bottom',
  },
  arrow: {
    type: Boolean,
    default: true,
  },
  width: {
    type: String,
    default: '',
  },
  maxHeight: {
    type: String,
    default: '300px',
  },
  align: {
    type: String,
    default: 'left',
  },
})
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const yunPopoverRef = ref()
const show = () => {
  yunPopoverRef.value.show()
}
const hide = () => {
  yunPopoverRef.value.hide()
}
const emit = defineEmits(['change'])
const change = (item) => {
  emit('change', { show, hide, value: item })
  setTimeout(() => {
    yunPopoverRef.value.hide()
  }, 80)
}
defineExpose({ show, hide })
const _options = computed(() => {
  if (
    Array.isArray(props.options) &&
    Object.prototype.toString.call(props.options[0]) != '[object Object]'
  ) {
    return props.options.map((e) => {
      return {
        label: e,
        value: e,
      }
    })
  } else {
    return props.options
  }
})
</script>

<script lang="ts">
export default {
  name: 'Dropdown',
}
</script>

<style lang="scss" scoped>
.yun-dropdown-body {
  display: flex;
  flex-direction: column;
  user-select: none;
  overflow: auto;
  padding: 3px;
  box-sizing: border-box;
  .yun-dropdown-option {
    padding: 0px 10px;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    border-radius: var(--yun-form-border-radius);
    color: var(--yun-text-color-7);
    cursor: pointer;
    white-space: nowrap;
    box-sizing: border-box;
  }
  .yun-dropdown-option:hover {
    color: var(--yun-text-color-2);
    background-color: var(--yun-bgcolor-2);
  }
}
.yun-dropdown-body::-webkit-scrollbar {
  background-color: rgb(126, 126, 126, 0);
  width: 5px;
  height: 5px;
}
.yun-dropdown-body::-webkit-scrollbar-thumb:hover {
  background-color: rgb(126, 126, 126);
}
.yun-dropdown-body::-webkit-scrollbar-thumb {
  background-color: rgb(209 213 219 / 0);
  border-radius: 5px;
}
.yun-dropdown-body:hover::-webkit-scrollbar-thumb {
  background-color: rgb(209 213 219 / 1);
  border-radius: 5px;
}
</style>
