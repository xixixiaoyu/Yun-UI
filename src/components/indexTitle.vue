<template>
  <div>
    <h2>{{ title }}</h2>
    <h3>{{ subTitle }}</h3>
    <h3><slot /></h3>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: '',
  },
  subTitle: {
    type: String,
    default: '',
  },
})
</script>

<style scoped>
h2,
h3 {
  font-family: HarmonyOS_Regular;
}
h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: var(--yun-text-color-3);
}
h3 {
  font-size: 16px;
  color: var(--yun-text-color-6);
  font-weight: 400;
  line-height: 30px;
}
</style>
