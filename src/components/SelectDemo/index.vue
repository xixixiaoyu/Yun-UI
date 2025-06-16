<template>
  <indexTitle title="title" />

  <Demo :component="SelectDemo1" />
  <Demo :component="SelectDemo2" />

  <Attr :columns="columns" :data="data1" />
  <Attr :columns="columns" :data="data2" title="Options" />
</template>

<script setup>
import indexTitle from '../indexTitle.vue'
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import { columns } from '../../lib/data'

import SelectDemo1 from './Select.default.demo.vue'
import SelectDemo2 from './Select.multiple.demo.vue'

const data1 = [
  {
    params: 'v-model(model-value)',
    desc: '绑定值',
    type: 'string / array',
    select: '/',
    default: "''",
  },
  {
    params: 'size',
    desc: '大小',
    type: 'string',
    select: 'small / medium / large',
    default: 'medium',
  },
  {
    params: 'trigger',
    desc: '触发方式',
    type: 'string',
    select: 'click / hover',
    default: 'click',
  },
  {
    params: 'multiple',
    desc: '多选模式，开启后，v-model需要是数组类型',
    type: 'boolean',
    select: 'true / false',
    default: 'false',
  },
  {
    params: 'placement',
    desc: '下拉展示的位置',
    type: 'string',
    select:
      'top-start / top / top-end/ bottom-start / bottom / bottom-end / left-start / left / left-end / right-start / right / right-end /',
    default: 'bottom',
  },
  {
    params: 'options',
    desc: '选项',
    type: 'Options对象类型',
    select: '/',
    default: '[]',
  },
]

const data2 = [
  {
    params: 'label',
    desc: '选项组的标签',
    type: 'string',
    select: '/',
    default: "''",
  },
  {
    params: 'value',
    desc: '选中的值',
    type: 'string / number',
    select: '/',
    default: "''",
  },
]
</script>
