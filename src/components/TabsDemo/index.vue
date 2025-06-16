<template>
  <h1>Tabs 示例</h1>

  <Demo :component="Tabs1Demo" />
  <Demo :component="Tabs2Demo" />

  <Attr :columns="columns" :data="data"></Attr>
</template>

<script setup>
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import { columns } from '../../lib/data'
import Tabs1Demo from './Tabs.default.demo.vue'
import Tabs2Demo from './Tabs.disabled.demo.vue'

const data = [
  {
    params: 'Tabs',
    desc: 'tab容器',
    type: 'component',
    select: '一',
    default: '一',
  },
  {
    params: 'Tab',
    desc: 'tab页签',
    type: 'component',
    select: '一',
    default: '一',
  },
  {
    params: 'title',
    desc: 'tab标题',
    type: 'string',
    select: '一',
    default: '一',
  },
  {
    params: 'selected',
    desc: '当前选中项，与title对应',
    type: 'string',
    select: '一',
    default: '一',
  },
  {
    params: 'disabled',
    desc: '当前项禁用',
    type: 'boolean',
    select: 'true / false',
    default: 'false',
  },
]
</script>
