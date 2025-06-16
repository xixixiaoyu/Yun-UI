<template>
  <IndexTitle title="Table">
    如果你需要信息提示，请可以尝试一下 <Mark type="info" to="tooltip">Tooltip</Mark>
  </IndexTitle>

  <Demo :component="PopoverDemo1" />

  <Attr :columns="columns" :data="data" />
</template>

<script setup>
import IndexTitle from '../indexTitle.vue'
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import { columns } from '../../lib/data'
import PopoverDemo1 from './Popover.default.demo.vue'

const data = [
  {
    params: 'trigger',
    desc: '触发方式',
    type: 'string',
    select: 'hover / click',
    default: 'hover',
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
    params: 'arrow',
    desc: '是否需要箭头',
    type: 'boolean',
    select: 'true / false',
    default: 'true',
  },
  {
    params: '插槽trigger',
    desc: '触发的元素',
    type: 'slot',
    select: '/',
    default: "''",
  },
  {
    params: '插槽popover-body',
    desc: '触发展示的元素',
    type: 'slot',
    select: '/',
    default: "''",
  },
]
</script>
