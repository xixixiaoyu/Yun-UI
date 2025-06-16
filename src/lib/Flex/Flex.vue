<template>
  <div class="yun-flex" :class="classes" :style="`gap: ${gap}; width:${width}`">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  direction: {
    type: String,
    default: 'row',
  },
  x: {
    type: String,
    default: 'center', // start center end
  },
  y: {
    type: String,
    default: 'center', // start center end
  },
  wrap: {
    type: Boolean,
    default: false, // around / between
  },
  mode: {
    type: String,
    default: '', // around / between / evenly
  },
  gap: {
    type: String,
    default: '10px',
  },
  width: {
    type: String,
    default: '',
  },
})

const { direction, x, y, wrap, mode, gap, width } = props

const classes = computed(() => {
  return {
    [`${'yun-flex-' + direction}`]: direction,
    [`${'yun-flex-x-' + x}`]: x,
    [`${'yun-flex-y-' + y}`]: y,
    ['yun-flex-wrap']: wrap,
    [`${'yun-flex-mode-' + mode}`]: mode,
  }
})
</script>

<script lang="ts">
export default {
  name: 'Flex',
}
</script>

<style lang="scss" scoped>
.yun-flex {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
}
.yun-flex-wrap {
  flex-wrap: wrap;
}
.yun-flex-row {
  flex-direction: row;
}
.yun-flex-column {
  flex-direction: column;
}
.yun-flex-row.yun-flex-x-start {
  justify-content: flex-start;
}
.yun-flex-row.yun-flex-x-center {
  justify-content: center;
}
.yun-flex-row.yun-flex-x-end {
  justify-content: flex-end;
}
.yun-flex-row.yun-flex-y-start {
  align-items: flex-start;
}
.yun-flex-row.yun-flex-y-center {
  align-items: center;
}
.yun-flex-row.yun-flex-y-end {
  align-items: flex-end;
}
.yun-flex-column.yun-flex-x-start {
  align-items: flex-start;
}
.yun-flex-column.yun-flex-x-center {
  align-items: center;
}
.yun-flex-column.yun-flex-x-end {
  align-items: flex-end;
}
.yun-flex-column.yun-flex-y-start {
  justify-content: flex-start;
}
.yun-flex-column.yun-flex-y-center {
  justify-content: center;
}
.yun-flex-column.yun-flex-y-end {
  justify-content: flex-end;
}
.yun-flex-row.yun-flex-mode-between {
  justify-content: space-between;
}
.yun-flex-row.yun-flex-mode-around {
  justify-content: space-around;
}
.yun-flex-row.yun-flex-mode-evenly {
  justify-content: space-evenly;
}
.yun-flex-column.yun-flex-mode-between {
  justify-content: space-between;
}
.yun-flex-column.yun-flex-mode-around {
  justify-content: space-around;
}
.yun-flex-column.yun-flex-mode-evenly {
  justify-content: space-evenly;
}
</style>
