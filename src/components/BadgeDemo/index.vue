<template>
  <h1>Badge</h1>

  <Demo :component="BadgeDemo1" />
  <Demo :component="BadgeDemo2" />
  <Demo :component="BadgeDemo3" />

  <Attr :columns="columns" :data="data" />
</template>
<script setup>
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import { columns } from '../../lib/data'
import BadgeDemo1 from './Badge.default.demo.vue'
import BadgeDemo2 from './Badge.dot.demo.vue'
import BadgeDemo3 from './Badge.alone.demo.vue'

const data = [
  {
    params: 'value',
    desc: '显示内容，如果无内容，则默认显示一个点，round可以控制其为圆点。',
    type: 'string / number',
    select: '/',
    default: 'undefined',
  },
  {
    params: 'type',
    desc: '显示色彩类型',
    type: 'string',
    select: 'normal / success / error / warning / info',
    default: 'normal',
  },
  {
    params: 'round',
    desc: '	是否为圆形。',
    type: 'boolean',
    select: '/',
    default: 'false',
  },
]
</script>
