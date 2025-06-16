<demo>
不同状态
</demo>

<template>
  <Button @click="onClick1">普通 normal</Button>
  <Button @click="onClick2">提示 info</Button>
  <Button @click="onClick3">成功 success</Button>
  <Button @click="onClick4">警告 warning</Button>
  <Button @click="onClick5">错误 error</Button>
</template>

<script setup>
const onClick1 = () => {
  // Toast({ text: "这是一条普通的消息提示 ~", type: "normal" });
  Toast.normal({ text: '这是一条普通的消息提示~' })
}
const onClick2 = () => {
  // Toast({ text: "这是一条令人的消息提示 ~", type: "info" });
  Toast.info({ text: '这是一条令人暖心的信息提示~' })
}
const onClick3 = () => {
  // Toast({ text: "这是一条成功的消息提示 ~", type: "success" });
  Toast.success({ text: '这是一条成功的消息提示~' })
}
const onClick4 = () => {
  // Toast({ text: "这是一条警告提示 ~", type: "warning" });
  Toast.warning({ text: '这是一条警告提示~' })
}
const onClick5 = () => {
  // Toast({ text: "这是一条错误提示 ~", type: "error" });
  Toast.error({ text: '这是一条错误提示~' })
}
</script>
