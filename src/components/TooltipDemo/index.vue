<template>
  <h1>Tooltip</h1>

  <Demo :component="TooltipDemo1" />
  <Demo :component="TooltipDemo2" />

  <Attr :columns="columns" :data="data"></Attr>
</template>

<script setup>
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import { columns } from '../../lib/data'
import TooltipDemo1 from './Tooltip.default.demo.vue'
import TooltipDemo2 from './Tooltip.click.demo.vue'

const data = [
  {
    params: 'content',
    desc: '内容',
    type: 'string',
    select: '/',
    default: "''",
  },
  {
    params: 'placement',
    desc: '位置',
    type: 'string',
    select:
      'top-start / top / top-end/ bottom-start / bottom / bottom-end / left-start / left / left-end / right-start / right / right-end',
    default: 'top',
  },
  {
    params: 'trigger',
    desc: '触发方式',
    type: 'string',
    select: 'hover / click',
    default: 'hover',
  },
  {
    params: 'arrow',
    desc: '是否需要箭头',
    type: 'boolean',
    select: 'true / false',
    default: 'true',
  },
  {
    params: 'allowHTML',
    desc: '是否支持HTML',
    type: 'boolean',
    select: 'true / false',
    default: 'false',
  },
]
</script>
