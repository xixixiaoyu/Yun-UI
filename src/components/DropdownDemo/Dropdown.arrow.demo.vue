<demo>
无箭头
</demo>

<template>
  <Flex gap="50px" x="start">
    <Dropdown :arrow="false" :options="options" @change="change">
      <Tag type="success">hover</Tag>
    </Dropdown>

    <Dropdown :arrow="false" placement="bottom-start" :options="options" @change="change">
      <div>纯文本</div>
    </Dropdown>
  </Flex>
</template>

<script setup>
import { ref } from 'vue'
import Dropdown from '../../lib/Dropdown/Dropdown.vue'

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
