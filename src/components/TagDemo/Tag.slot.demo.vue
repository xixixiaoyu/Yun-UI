<demo>
插槽
</demo>

<template>
  <div class="container">
    <Tag type="normal" @close="handleClose" closable>
      <template #left> 🦄 </template>
      <template #right> 🎉 </template>
      primary
    </Tag>

    <Tag type="normal" size="large" round>
      <template #left> 🦄 </template>
      primary
    </Tag>

    <Tag type="normal" size="large" round>
      <template #right> 🎉 </template>
      primary
    </Tag>
  </div>
</template>

<script setup lang="ts">
const handleClose = () => {
  Toast({ text: '您点击了关闭' })
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
}
</style>
