<demo>
  加载
</demo>

<template>
  <Button type="primary" loading>确定</Button>
  <Button type="success" round loading>确定</Button>
  <Button size="large" @click="loading = !loading" type="error" :loading="loading">点击触发</Button>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(false)
</script>
