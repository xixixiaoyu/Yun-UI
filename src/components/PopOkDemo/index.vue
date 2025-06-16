<template>
  <IndexTitle title="Popok"></IndexTitle>

  <Demo :component="PopOkDemo1">
    <template #customTitle> 简单的询问<Mark type="info">click</Mark> </template>
  </Demo>
  <Demo :component="PopOkDemo2">
    <template #customTitle> 简单的询问<Mark type="info">hover</Mark> </template>
  </Demo>

  <Attr :columns="columns" :data="data" />
</template>

<script setup>
import IndexTitle from '../indexTitle.vue'
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import { columns } from '../../lib/data'

import PopOkDemo1 from './PopOk.click.demo.vue'
import PopOkDemo2 from './PopOk.hover.demo.vue'

const data = [
  {
    params: 'title',
    desc: '标题',
    type: 'string',
    select: '/',
    default: "''",
  },
  {
    params: 'content',
    desc: '内容',
    type: 'string',
    select: '/',
    default: "''",
  },
  {
    params: 'type',
    desc: '图标类型',
    type: 'string',
    select: 'normal / warning / success / error / info',
    default: 'warning',
  },
  {
    params: 'width',
    desc: '弹框宽度',
    type: 'string',
    select: '/',
    default: '250px',
  },
  {
    params: 'trigger',
    desc: '触发方式',
    type: 'string',
    select: 'click / hover',
    default: 'click',
  },
  {
    params: 'placement',
    desc: '位置',
    type: 'string',
    select:
      '	top-start / top / top-end/ bottom-start / bottom / bottom-end / left-start / left / left-end / right-start / right / right-end',
    default: 'top',
  },
]
</script>
