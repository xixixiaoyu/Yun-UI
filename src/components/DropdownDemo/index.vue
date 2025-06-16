<template>
  <IndexTitle title="Dropdown">
    你可以使用 <Mark type="info" to="popover">Popover</Mark> 进行高度自定义下拉菜单
  </IndexTitle>

  <Demo :component="DropdownDemo1" />
  <Demo :component="DropdownDemo2" />
  <Demo :component="DropdownDemo3" />

  <Attr :columns="columns" :data="data" />
</template>

<script setup>
import IndexTitle from '../indexTitle.vue'
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import { columns } from '../../lib/data'
import DropdownDemo1 from './Dropdown.default.demo.vue'
import DropdownDemo2 from './Dropdown.img.demo.vue'
import DropdownDemo3 from './Dropdown.arrow.demo.vue'

const data = [
  {
    params: 'options',
    desc: '列表配置',
    type: 'array',
    select: '/',
    default: '[]',
  },
  {
    params: 'trigger',
    desc: '触发方式',
    type: 'string',
    select: 'hover / click',
    default: 'hover',
  },
  {
    params: 'width',
    desc: '下拉气泡宽度',
    type: 'string(px)',
    select: '/',
    default: "''",
  },
  {
    params: 'arrow',
    desc: '是否显示箭头',
    type: 'boolean',
    select: 'true / false',
    default: 'true',
  },
  {
    params: 'placement',
    desc: '下拉展示的位置',
    type: 'string',
    select:
      'top-start / top / top-end/ bottom-start / bottom / bottom-end / left-start / left / left-end / right-start / right / right-end /',
    default: 'bottom',
  },
]
</script>
