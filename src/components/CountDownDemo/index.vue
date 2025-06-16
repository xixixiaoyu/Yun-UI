<template>
  <h1>CountDown 示例</h1>

  <Demo :component="CountDownDemo" />

  <Attr :columns="columns" :data="data" />

  <div style="height: 2000px"></div>
</template>
<script setup>
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import { columns } from '../../lib/data'
import CountDownDemo from './CountDown.default.vue'

const data = [
  {
    params: 'time',
    desc: '多少秒后结束',
    type: 'number/string',
    select: 'number/string',
    default: '0',
  },
  {
    params: 'end',
    desc: '倒计时',
    type: 'number/string',
    select: 'number/string',
    default: '0',
  },
  {
    params: 'isMilliSecond',
    desc: '是否是毫秒',
    type: 'boolean',
    select: 'boolean',
    default: 'false',
  },
  {
    params: 'refreshCounter',
    desc: '刷新当前时间',
    type: 'boolean',
    select: 'boolean',
    default: 'false',
  },
]
</script>
