<demo>基础用法</demo>

<template>
  <BreadCrumb :options="options" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const options = ref([
  {
    label: '首页',
    to: '/',
  },
  {
    label: 'Vue',
    to: 'https://vuejs.org',
  },
  {
    label: '商品列表',
  },
  {
    label: '商品详情',
    active: true,
  },
])
</script>
