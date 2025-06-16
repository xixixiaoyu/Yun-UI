<demo>
可关闭的
</demo>

<template>
  <Tag type="primary" closable @close="handleClose">primary</Tag>
  <Tag type="primary" round closable @close="handleClose">primary</Tag>
  <Tag type="primary" size="large" closable @close="handleClose">primary</Tag>
  <Tag type="primary" size="large" round closable @close="handleClose">primary</Tag>
</template>

<script setup lang="ts">
const handleClose = () => {
  Toast({ text: '您点击了关闭' })
}
</script>
