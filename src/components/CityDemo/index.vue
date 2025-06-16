<template>
  <h1>City</h1>

  <Demo :component="CityDemo1" />

  <Attr :columns="columns" :data="data" />
</template>

<script setup>
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import { columns } from '../../lib/data'
import CityDemo1 from './City.default.demo.vue'

const data = [
  {
    params: 'placeholder',
    desc: '占位符',
    type: 'string',
    select: 'string',
    default: '请选择配送地址',
  },
  {
    params: 'fullLocation',
    desc: '回显完整地址',
    type: 'string',
    select: 'string',
    default: '一',
  },
  {
    params: 'change',
    desc: '	选择完毕的回调函数',
    type: '	function',
    select: '() => {}',
    default: '() => {}',
  },
]
</script>
