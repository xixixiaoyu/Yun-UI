<demo>
  <title>基础用法</title>
  <desc>从顶部出现，3秒后消失</desc>
</demo>

<template>
  <Button @click="onClick">打开 toast</Button>
</template>

<script setup>
let index = 1
const onClick = () => {
  Toast({ text: `这是第 ${index++} 条消息提示 ~` })
}
</script>
