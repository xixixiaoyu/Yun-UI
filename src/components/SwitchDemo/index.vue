<template>
  <div>
    <h1>Switch</h1>
    <Demo :component="Switch1Demo" />
    <Demo :component="Switch2Demo"> 添加 <Mark type="info">disabled</Mark> 属性即可禁用 </Demo>
  </div>

  <Attr :columns="columns" :data="data" />
</template>

<script setup>
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import Switch1Demo from './Switch1.default.demo.vue'
import Switch2Demo from './Switch2.disabled.demo.vue'
import { columns } from '../../lib/data'

const data = [
  {
    params: 'v-model (modelValue)',
    desc: '绑定值',
    type: 'boolean',
    select: 'true / false',
    default: 'false',
  },
  {
    params: 'round',
    desc: '是否是圆角',
    type: 'boolean',
    select: 'true / false',
    default: 'true',
  },
  {
    params: 'disabled ',
    desc: '是否禁用',
    type: 'boolean',
    select: 'false / true',
    default: 'false',
  },
]
</script>
