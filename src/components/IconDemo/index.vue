<template>
  <h1>Icon</h1>

  <Demo :component="IconDemo1">
    这里强烈建议您可以使用 <Mark to="https://www.xicons.org/#/" type="success">xicons</Mark> ，这是
    <Mark to="https://www.xicons.org/#/" type="success">Naive UI</Mark>
    官方推荐使用的图标库，非常棒。
  </Demo>

  <Attr :columns="columns" :data="data" />
</template>

<script setup>
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import { columns } from '../../lib/data'
import IconDemo1 from './Icon.demo.vue'

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
