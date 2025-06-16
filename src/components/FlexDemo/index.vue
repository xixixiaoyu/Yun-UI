<template>
  <indexTitle title="Flex" subTitle="这是一个专门为弹性布局写的组件" />

  <Demo :component="FlexDemo1" />
  <Demo :component="FlexDemo2" />
  <Demo :component="FlexDemo3" />

  <Attr :columns="columns" :data="data" />
</template>
<script setup>
import indexTitle from '../indexTitle.vue'
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import { columns } from '../../lib/data'

import FlexDemo1 from './Flex.row.demo.vue'
import FlexDemo2 from './Flex.column.demo.vue'
import FlexDemo3 from './Flex.mode.demo.vue'

const data = [
  {
    params: 'direction',
    desc: '排列方向',
    type: 'string',
    select: 'row / column',
    default: 'row',
  },
  {
    params: 'x',
    desc: 'x轴的对齐方向',
    type: 'string',
    select: 'start / center / end',
    default: 'center',
  },
  {
    params: 'y',
    desc: '	y轴的对齐方向',
    type: 'string',
    select: 'start / center / end',
    default: 'center',
  },
  {
    params: 'mode',
    desc: '	排序模式，这是个可选项，定义之后会干扰 x 或 y 的对齐方向，这取决于你的direction。',
    type: 'string',
    select: 'between / around / evenly',
    default: "''",
  },
  {
    params: 'wrap',
    desc: '让元素在必要的时候换行',
    type: 'boolean',
    select: 'true / false',
    default: 'false',
  },
  {
    params: 'gap',
    desc: '元素之间的空隙',
    type: 'string（px）',
    select: '/',
    default: '10px',
  },
  {
    params: 'width',
    desc: '父元素宽度',
    type: 'string（px）',
    select: '/',
    default: "''",
  },
]
</script>
