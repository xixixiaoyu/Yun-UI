<template>
  <div class="yun-title" :style="`font-weight:${bold}; font-size:${size}`">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  bold: {
    type: Number,
    default: 800,
  },
  size: {
    type: String,
    default: '24px',
  },
})
</script>

<script lang="ts">
export default {
  name: 'Title',
}
</script>

<style lang="scss">
.yun-title {
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--yun-text-color-3);
  margin-bottom: 10px;
}
</style>
