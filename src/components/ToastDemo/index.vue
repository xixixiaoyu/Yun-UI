<template>
  <h1>Toast</h1>

  <Demo :component="Toast1Demo" />
  <Demo :component="Toast2Demo">
    包含的状态有<Mark>normal、info、success、warning、error</Mark>
  </Demo>
  <Demo :component="Toast3Demo" />
  <Demo :component="Toast4Demo" />

  <Attr :columns="columns" :data="data"></Attr>
</template>

<script setup>
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import { columns } from '../../lib/data'
import Toast1Demo from './Toast.default.demo.vue'
import Toast2Demo from './Toast.status.demo.vue'
import Toast3Demo from './Toast.center.demo.vue'
import Toast4Demo from './Toast.off.demo.vue'

const data = [
  {
    params: 'text',
    desc: '提示文本',
    type: 'string',
    select: '/',
    default: '/',
  },
  {
    params: 'type',
    desc: '状态类型',
    type: 'string',
    select: 'normal / info / success / warning / error',
    default: 'normal',
  },
  {
    params: 'center',
    desc: '文字居中',
    type: 'boolean',
    select: 'true / false',
    default: 'false',
  },
  {
    params: 'showClose',
    desc: '是否能手动关闭',
    type: 'boolean',
    select: 'true / false',
    default: 'false',
  },
  {
    params: 'delay',
    desc: '手动不关闭延时多久自动关闭',
    type: 'number(ms)',
    select: '/',
    default: '5000',
  },
  {
    params: 'destroyed',
    desc: '关闭时执行函数',
    type: 'function',
    select: '/',
    default: '() => void',
  },
]
</script>
