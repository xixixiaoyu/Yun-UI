<template>
  <div class="yun-form-item" :class="`yun-form-item-${direction}`">
    <label>{{ props.title }} </label>
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: '标题',
  },
  direction: {
    type: String,
    default: 'x',
  },
})
</script>

<script lang="ts">
export default {
  name: 'FormItem',
}
</script>

<style lang="scss" scoped>
.yun-form-item {
  width: 100%;
  margin-bottom: 20px;
  text-align: left;
  label {
    display: block;
    width: 100%;
    margin: 0px 0px 10px 0px;
    font-size: 14px;
    color: var(--yun-text-color-1);
  }
}
.yun-form-item-x {
  display: flex;
  align-items: flex-start;
  label {
    display: inline-block;
    white-space: nowrap;
    width: auto;
    margin-top: 8px;
    padding-right: 10px;
  }
}
</style>
