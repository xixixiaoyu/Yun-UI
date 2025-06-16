<demo>基础用法</demo>

<template>
  <Flex direction="column" x="start">
    <Title size="14px">自动关闭</Title>
    <DatePicker v-model="d" auto-close @change="change1" />
    <br /><br />
    <Title size="14px">非自动关闭</Title>
    <DatePicker v-model="d" @change="change2" />
  </Flex>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const d = ref('2022-12-12')

const change1 = (e: any) => {
  Toast.info({ text: e.date.value })
}
const change2 = (e: any) => {
  Toast.info({ text: '它在 1 秒后关闭' })
  setTimeout(() => {
    e.hide()
  }, 1000)
}
</script>

<style lang="scss" scoped></style>
