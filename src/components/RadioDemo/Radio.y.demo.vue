<demo>
y 布局
</demo>

<template>
  <RadioGroup v-model="value" direction="y" :options="options" />
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
