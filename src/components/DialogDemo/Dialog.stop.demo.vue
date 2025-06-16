<demo>
阻止确认框，监听遮罩关闭
</demo>

<template>
  <Dialog v-model:visible="visible" :ok="handleConfirm" @closeOverlay="handleCloseOverlay">
    <template #title>
      <strong>标题</strong>
    </template>
    <template #content>
      <strong>文本框第一行 </strong>
      <div>文本框第二行</div>
    </template>
  </Dialog>
  <Button @click="toggle">打开对话框</Button>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
const toggle = () => {
  visible.value = !visible.value
}

const handleConfirm = () => {
  console.log('onConfirm')
  return false
}

const handleCloseOverlay = () => {
  console.log('handleCloseOverlay')
}
</script>
