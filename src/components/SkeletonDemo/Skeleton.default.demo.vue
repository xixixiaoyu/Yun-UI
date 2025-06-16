<demo>
  <title>基本使用</title>
  <desc>添加 width、height、bg 等属性定制骨架屏</desc>
</demo>

<template>
  <div class="skeleton-container">
    <div v-for="i in 5" :key="i">
      <Skeleton width="200" height="200" bg="rgb(204 228 237)"></Skeleton>
    </div>
  </div>
</template>

<script setup>
import { Skeleton } from '../../lib/index'
</script>

<style lang="scss" scoped>
.skeleton-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
:deep(.yun-skeleton) {
  margin-bottom: 15px;
}
</style>
