<demo>
色彩
</demo>

<template>
  <div class="color-container">
    <ul class="list" v-for="(item, index) in colors" :key="index">
      <li class="item" :style="`background-color: var(--yun-${item}-color-light)`">
        {{ item }}-color-light
      </li>
      <li class="item" :style="`background-color: var(--yun-${item}-color-light2)`">
        {{ item }}-color-light2
      </li>
      <li class="item" :style="`background-color: var(--yun-${item}-color)`">{{ item }}-color</li>
      <li class="item" :style="`background-color: var(--yun-${item}-color-dark)`">
        {{ item }}-color-dark
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const colors = ref(['primary', 'normal', 'info', 'warning', 'error', 'success'])
</script>

<style lang="scss" scoped>
.color-container {
  display: flex;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
}
.list {
  display: flex;
  flex-direction: column;
  width: 100%;
  .item {
    // width: 100%;
    // height: 50px;
    width: 90%;
    height: 50px;
    margin: 10px;
    line-height: 50px;
    text-align: center;
    border-radius: 6px;
  }
}
</style>
