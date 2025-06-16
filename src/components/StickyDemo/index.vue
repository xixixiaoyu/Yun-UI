<template>
  <h1>Sticky 示例</h1>

  <Demo :component="StickyDemo1" />

  <Attr :columns="columns" :data="data" />

  <div style="height: 2000px"></div>
</template>
<script setup>
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import { columns } from '../../lib/data'
import StickyDemo1 from './Sticky.default.demo.vue'

const data = [
  {
    params: 'component',
    desc: '传入组件',
    type: 'object',
    select: 'object',
    default: '/',
  },
]
</script>
