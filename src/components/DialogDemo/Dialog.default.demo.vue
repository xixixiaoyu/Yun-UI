<demo>
基础用法
</demo>

<template>
  <div>
    <Dialog
      v-model:visible="visible1"
      :ok="handleConfirm"
      :cancel="handleCancel"
      layout="normal"
      type="normal"
    >
      <template #title>
        <strong>标题</strong>
      </template>
      <template #content>
        <strong>文本框第一行 </strong>
        <div>文本框第二行</div>
      </template>
    </Dialog>
    <Button @click="toggle1">打开对话框</Button>

    <Dialog
      v-model:visible="visible2"
      :ok="handleConfirm"
      :cancel="handleCancel"
      type="success"
      layout="easy"
    >
      <template #title>
        <strong>标题</strong>
      </template>
      <template #content>
        <strong>文本框第一行 </strong>
        <div>文本框第二行</div>
      </template>
    </Dialog>
    <Button @click="toggle2">打开简单对话框</Button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const visible1 = ref(false)
const visible2 = ref(false)
const toggle1 = () => {
  visible1.value = !visible1.value
}

const toggle2 = () => {
  visible2.value = !visible2.value
}
const handleConfirm = () => {
  console.log('onConfirm')
}
const handleCancel = () => {
  console.log('onCancel')
}
</script>
