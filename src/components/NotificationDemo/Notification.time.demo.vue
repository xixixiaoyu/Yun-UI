<demo>自定义展示时间</demo>

<template>
  <Button type="error" @click="openWithDelay('error')"> WithDelay </Button>
  <Button type="success" @click="openWithoutDelay('success')"> WithoutDelay </Button>
</template>

<script setup>
const openWithDelay = (type) => {
  YunNotification[type]({
    title: '通知',
    content: '我会自己消失哦',
    delay: 1500,
  })
}
const openWithoutDelay = (type) => {
  YunNotification[type]({
    title: '通知',
    content: '没有得到你的允许之前我是不会消失的！',
    delay: 0,
  })
}
</script>
