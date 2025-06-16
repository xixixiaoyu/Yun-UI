<demo>xxx</demo>

<template>
  <PopOk
    ref="yunPopOkRef"
    title="删除确认"
    content="删除之后无法恢复，请确认！"
    @ok="ok"
    @cancel="cancel"
  >
    <Button>click 触发</Button>
  </PopOk>
</template>

<script setup>
import { ref } from 'vue'
const yunPopOkRef = ref()
// 确认
const ok = () => {
  Toast.success({ text: '确定' })
  yunPopOkRef.value.hide()
}
// 取消
const cancel = () => {
  Toast.info({ text: '取消' })
  yunPopOkRef.value.hide()
}
</script>
