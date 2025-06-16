<demo>
  <title>支持 disabled</title>
</demo>

<template>
  <Switch v-model="bool" disabled />
</template>

<script setup>
import { ref } from 'vue'

const bool = ref(true)
</script>
