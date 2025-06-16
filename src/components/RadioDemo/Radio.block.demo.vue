<demo>
块
</demo>

<template>
  <Title size="14">无图标</Title>
  <RadioGroup v-model="value" block direction="x" :iconable="false" :options="options" />
  <br />
  <Title size="14">有图标</Title>
  <RadioGroup v-model="value" block direction="x" :options="options" />
  <br />
  选中的值：{{ value }}
</template>

<script setup lang="ts">
import { ref } from 'vue'

const options = ref([
  { label: '宋朝', value: 1 },
  { label: '唐朝', value: 2 },
  { label: '明朝', value: 3 },
  { label: '清朝', value: 4 },
])

const value = ref('')
</script>
