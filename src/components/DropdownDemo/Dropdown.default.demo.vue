<demo>
基础用法
</demo>

<template>
  <Flex gap="30px" x="start">
    <Dropdown :options="options" @change="change">
      <Button>hover</Button>
    </Dropdown>
    <Dropdown :options="options" trigger="click" @change="change">
      <Button>click</Button>
    </Dropdown>
  </Flex>
</template>

<script setup>
import { ref } from 'vue'

const options = ref([
  {
    label: '西游记',
    value: '1',
  },
  {
    label: '水浒传',
    value: '2',
  },
  {
    label: '三国演义',
    value: '3',
  },
  {
    label: '红楼梦',
    value: '4',
  },
])

const change = (e) => {
  Toast({ text: e.value.label, type: 'success' })
}
</script>
