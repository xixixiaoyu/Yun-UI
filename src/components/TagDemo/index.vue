<template>
  <h1>Tag</h1>

  <Demo :component="TagDemo1" />
  <Demo :component="TagDemo2" />
  <Demo :component="TagDemo3" />
  <Demo :component="TagDemo4" />

  <Attr :columns="columns" :data="data" />
</template>

<script setup>
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import { columns } from '../../lib/data'
import TagDemo1 from './Tag.default.demo.vue'
import TagDemo2 from './Tag.size.demo.vue'
import TagDemo3 from './Tag.close.demo.vue'
import TagDemo4 from './Tag.slot.demo.vue'

const data = [
  {
    params: 'type',
    desc: '头像链接',
    type: 'string',
    select: '/',
    default: "''",
  },
  {
    params: 'size',
    desc: '尺寸大小',
    type: 'string',
    select: 'small / medium / large',
    default: 'medium',
  },
  {
    params: 'closable',
    desc: '是否可关闭',
    type: 'boolean',
    select: '/',
    default: 'false',
  },
  {
    params: 'disabled',
    desc: '是否禁用',
    type: 'boolean',
    select: '/',
    default: 'false',
  },
  {
    params: 'to',
    desc: '跳转链接',
    type: 'string',
    select: '/',
    default: "''",
  },
]
</script>
