<demo>快捷唤起</demo>

<template>
  <Title size="14px">常规</Title>
  <Button type="normal" @click="open('normal', 'normal')">normal</Button>
  <Button type="success" @click="open('success', 'normal')">success</Button>
  <Button type="info" @click="open('info', 'normal')">info</Button
  ><Button type="warning" @click="open('warning', 'normal')">warning</Button>
  <Button type="error" @click="open('error', 'normal')">error</Button>
  <br />
  <br />
  <br />
  <Title size="14px">简单的</Title>
  <Button type="normal" @click="open('normal', 'easy')">normal</Button>
  <Button type="success" @click="open('success', 'easy')">success</Button>
  <Button type="info" @click="open('info', 'easy')">info</Button
  ><Button type="warning" @click="open('warning', 'easy')">warning</Button>
  <Button type="error" @click="open('error', 'easy')">error</Button>
</template>

<script setup lang="ts">
const open = (type: any, layout: string) => {
  Dialog[type]({
    title: '删除确认',
    content: '你是否要删除该账号',
    layout: layout,
    ok: () => {
      console.log('确认删除')
    },
    cancel: () => {
      console.log('取消')
    },
  })
}
</script>
