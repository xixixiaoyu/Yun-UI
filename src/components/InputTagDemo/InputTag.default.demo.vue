<demo>
基础用法
</demo>

<template>
  标签输入框
  <br />
  <InputTag v-model="value" type="primary"></InputTag>
  <br />
  值：{{ value }}
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref([])
</script>
