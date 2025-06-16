<template>
  <indexTitle title="Mark" subTitle="虽然这小家伙看起来很简单，但是我觉得它非常有用，在我看来。" />

  <Demo :component="MarkDemo1" />

  <Attr :columns="columns" :data="data" />
</template>

<script setup>
import indexTitle from '../indexTitle.vue'
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'

import { columns } from '../../lib/data'
import MarkDemo1 from './Mark.default.demo.vue'

const data = [
  {
    params: 'type',
    desc: '配色类型',
    type: 'string',
    select: 'normal / success / error / warning / info',
    default: 'normal',
  },
  {
    params: 'round',
    desc: '圆角',
    type: 'number',
    select: '/',
    default: 'true',
  },
  {
    params: 'size',
    desc: '大小',
    type: 'number / string',
    select: '/',
    default: "''",
  },
  {
    params: 'bold',
    desc: '加粗',
    type: 'number',
    select: '/',
    default: '400',
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
