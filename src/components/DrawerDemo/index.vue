<template>
  <h1>Drawer</h1>

  <Demo :component="DrawerDemo1" />

  <Attr :columns="columns" :data="data" />
</template>

<script setup>
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import { columns } from '../../lib/data'
import DrawerDemo1 from './Drawer.default.demo.vue'

const data = [
  {
    params: 'v-model:visible',
    desc: '打开抽屉',
    type: 'boolean',
    select: '/',
    default: 'false',
  },
  {
    params: 'width',
    desc: '宽度',
    type: 'number',
    select: '/',
    default: '30（百分比）',
  },
  {
    params: 'height',
    desc: '高度',
    type: 'number',
    select: '/',
    default: '30（百分比）',
  },
  {
    params: 'position',
    desc: '位置',
    type: 'boolean',
    select: 'left / right / top / bottom',
    default: 'right',
  },
]
</script>
