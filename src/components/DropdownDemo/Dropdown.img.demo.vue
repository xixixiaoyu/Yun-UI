<demo>
不仅仅是按钮
</demo>

<template>
  <Flex gap="30px" x="start">
    <Dropdown :options="options" placement="bottom-start" @change="change">
      <Avatar src="https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668">hover</Avatar>
    </Dropdown>

    <Dropdown :options="options" placement="top-start" @change="change">
      <Avatar src="https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668">hover</Avatar>
    </Dropdown>

    <Dropdown :options="options" placement="left-start" @change="change">
      <Avatar src="https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668">hover</Avatar>
    </Dropdown>

    <Dropdown :options="options" placement="right-start" @change="change">
      <Avatar src="https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668">hover</Avatar>
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
