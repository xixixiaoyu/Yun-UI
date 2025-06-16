<demo>
  <title>文字居中</title>
  <desc>使用 center 属性让文字图标水平居中</desc>
</demo>

<template>
  <Button @click="onClick">打开 toast</Button>
</template>

<script setup>
const onClick = () => {
  Toast({ text: '这是一条居中的消息提示~', center: true })
}
</script>
