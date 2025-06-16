<demo>基础用法</demo>

<template>
  <Button
    type="primary"
    @click="
      addAlert({
        type: 'info',
        title: '成功发送一条消息',
        content: '',
      })
    "
    >点我</Button
  >
  <Button
    type="error"
    @click="
      addAlert({
        type: 'error',
        title: '成功发送一条消息',
        content: '',
      })
    "
    >点我</Button
  >
  <Button
    type="warning"
    @click="
      addAlert({
        type: 'warning',
        title: '成功发送一条消息',
        content: '',
      })
    "
    >点我</Button
  >
  <Button
    type="success"
    @click="
      addAlert({
        type: 'success',
        title: '成功发送一条消息',
        content: '',
      })
    "
    >点我</Button
  >
  <Button
    type="normal"
    @click="
      addAlert({
        type: 'normal',
        title: '成功发送一条消息',
        content:
          'Well the Ukraine girls really knock me out They leave the West behind And Moscow girls make me sing and shout That Georgia s always on my mind Aw come on!',
      })
    "
    >点我</Button
  >
  <div style="margin-top: 20px">
    <Alert :list="list" @close="close"></Alert>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Options {
  type: string
  title: string
  content: string
}

const list = ref([])

const addAlert = (opt: Options) => {
  list.value.unshift(opt)
}
const close = (opt: Options) => {
  list.value.splice(opt, 1)
}
</script>
