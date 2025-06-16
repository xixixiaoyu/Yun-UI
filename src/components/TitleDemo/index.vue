<template>
  <h1>Title</h1>

  <Demo :component="TitleDemo1" />
  <Demo :component="TitleDemo2" />

  <Attr :columns="columns" :data="data" />
</template>

<script setup>
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import { columns } from '../../lib/data'
import TitleDemo1 from './Title.default.demo.vue'
import TitleDemo2 from './Title.bold.demo.vue'

const data = [
  {
    params: 'size',
    desc: '标题尺寸大小',
    type: 'string（px）',
    select: '/',
    default: '24px',
  },
  {
    params: 'bold',
    desc: '粗体值',
    type: 'number',
    select: '100 / 200 / 300 / 400 / 500 / 600 / 700 / 800 / 900',
    default: '500',
  },
]
</script>
