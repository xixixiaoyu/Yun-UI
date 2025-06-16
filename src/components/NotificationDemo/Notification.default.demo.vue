<demo>快捷唤起</demo>

<template>
  <Button type="normal" @click="open('normal')">normal</Button>
  <Button type="success" @click="open('success')">success</Button>
  <Button type="error" @click="open('error')">error</Button>
  <Button type="info" @click="open('info')">info</Button>
  <Button type="warning" @click="open('warning')">warning </Button>
</template>

<script setup>
const open = (type) => {
  YunNotification[type]({
    title: '通知',
    content: '这是一条重要的通知！！！',
  })
}
</script>
