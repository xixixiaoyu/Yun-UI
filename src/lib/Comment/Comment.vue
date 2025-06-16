<template>
  <Flex x="start" y="start" class="yun-comment">
    <div class="avatar">
      <slot name="avatar"> </slot>
    </div>
    <Flex direction="column" gap="0px" x="start" class="yun-comment-body">
      <div class="header"><slot name="header"> </slot></div>
      <div class="content"><slot name="content"> </slot></div>
      <div class="footer"><slot name="footer"> </slot></div>
    </Flex>
  </Flex>
</template>

<script lang="ts" setup>
defineProps({
  type: {
    type: String,
    default: 'normal',
  },
})
</script>

<script lang="ts">
export default {
  name: 'Comment',
}
</script>

<style lang="scss">
.yun-comment {
  width: 100%;
  display: inline-flex;
  box-sizing: border-box;
  .yun-comment-body {
    width: 100%;
    .header {
      width: 100%;
      min-height: 20px;
    }
    .content {
      width: 100%;
      font-size: 14px;
    }
    .footer {
      width: 100%;
    }
  }
}
</style>
