<template>
  <span
    class="yun-mark"
    :class="`yun-mark-${type} ${round ? 'yun-mark-round' : ''} ${to ? 'yun-mark-to' : ''}`"
    :style="`font-weight:${bold}; font-size:${size + 'px'}`"
    @click="yunTo(to)"
  >
    <slot />
  </span>
</template>

<script lang="ts" setup>
import { useToPage } from '../hooks/index'
const yunTo = useToPage()

defineProps({
  type: {
    type: String,
    default: 'normal',
    validator(value: string) {
      return typeRules.includes(value)
    },
  },
  size: {
    type: [String, Number],
    default: '',
  },
  round: {
    type: Boolean,
    default: true,
  },
  to: {
    type: String,
    default: '',
  },
  bold: {
    type: Number,
    default: 400,
  },
})
</script>

<script lang="ts">
export default {
  name: 'Mark',
}
const typeRules = ['normal', 'success', 'error', 'warning', 'info']
</script>

<style lang="scss">
.yun-mark {
  display: inline;
  padding: 2px 6px;
  margin: 0px 3px;
}

.yun-mark-round {
  border-radius: 2px;
}

.yun-mark-to {
  cursor: pointer;
}

.yun-mark-primary {
  color: var(--yun-primary-color-dark);
  background-color: var(--yun-primary-color-light);
}
.yun-mark-info {
  color: var(--yun-info-color-dark);
  background-color: var(--yun-info-color-light);
}
.yun-mark-success {
  color: var(--yun-success-color-dark);
  background-color: var(--yun-success-color-light);
}
.yun-mark-warning {
  color: var(--yun-warning-color-dark);
  background-color: var(--yun-warning-color-light);
}
.yun-mark-error {
  color: var(--yun-error-color-dark);
  background-color: var(--yun-error-color-light);
}
.yun-mark-normal {
  color: var(--yun-text-color-2);
  background-color: var(--yun-normal-color-light);
}
</style>
