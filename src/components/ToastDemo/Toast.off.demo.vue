<demo>
  <title>可关闭</title>
  <desc>可以使用 showClose 属性添加关闭按钮，默认3秒后消失。手动传入 delay 属性控制延时关闭的时间，单位：秒。delay 设置 0 不会被自动关闭</desc>
</demo>

<template>
  <Button @click="onClick1">可关闭，delay: 7000</Button>
  <Button @click="onClick2">可关闭，delay: 0</Button>
</template>

<script setup>
const onClick1 = () => {
  Toast({
    text: '一条可以关闭的消息提示，不操作七秒后我就会自动消失哦 ~',
    showClose: true,
    delay: 7000,
    destroyed() {
      console.log('我走了')
    },
  })
}
const onClick2 = () => {
  Toast({
    text: '这是一条需要点击关闭的消息提示 ~',
    showClose: true,
    delay: 0,
    destroyed() {
      console.log('我走了')
    },
  })
}
</script>
