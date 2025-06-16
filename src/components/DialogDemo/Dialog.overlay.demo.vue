<demo>
点击遮罩不可关闭
</demo>

<template>
  <div>
    <Button @click="toggle">打开对话框</Button>
    <Dialog v-model:visible="visible" :closeOnClickOverlay="false">
      <template #content>
        <div>默认 overlayClosable 是开启的，点击遮罩层自动关闭对话框</div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
const toggle = () => {
  visible.value = !visible.value
}
</script>
