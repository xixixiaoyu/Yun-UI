<template>
  <h1>Step 示例</h1>

  <Demo :component="Step1Demo" description="添加 count 和 active 和 width 属性即可控制步骤条" />
  <Demo :component="Step2Demo" />

  <Attr :columns="columns" :data="data" />
</template>

<script setup>
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import { columns } from '../../lib/data'
import Step1Demo from './Step1.demo.vue'
import Step2Demo from './Step2.demo.vue'

const data = [
  {
    params: 'count',
    desc: '步骤数量',
    type: 'number',
    select: 'number',
    default: '3',
  },
  {
    params: 'active',
    desc: '激活数量',
    type: 'number',
    select: 'number',
    default: '1',
  },
  {
    params: 'title ',
    desc: '标题',
    type: 'string',
    select: 'string',
    default: '一',
  },
  {
    params: 'desc ',
    desc: '简介',
    type: 'string',
    select: 'string',
    default: '一',
  },
]
</script>
