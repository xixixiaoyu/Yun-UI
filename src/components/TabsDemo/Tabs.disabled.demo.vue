<demo>
  <title>支持 disabled</title>
  <desc>给对应 tab 组件添加 disabled 属性即可禁用对应项</desc>
</demo>

<template>
  <Tabs v-model:selected="x">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航22 disabled" disabled>内容2</Tab>
    <Tab title="导航333">内容3</Tab>
  </Tabs>
</template>

<script setup>
import { Tabs, Tab } from '../../lib/index'
import { ref } from 'vue'

const x = ref('导航1')
</script>
