<template>
  <h1>Skeleton 示例</h1>

  <Demo :component="SkeletonDemo1" />
  <Demo :component="SkeletonDemo2" />

  <Attr :columns="columns" :data="data"></Attr>
</template>

<script setup>
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import { columns } from '../../lib/data'
import SkeletonDemo1 from './Skeleton.default.demo.vue'
import SkeletonDemo2 from './Skeleton.animation.demo.vue'

const data = [
  {
    params: 'width',
    desc: '宽度',
    type: 'string',
    select: 'string',
    default: '100',
  },
  {
    params: 'height',
    desc: '高度',
    type: 'string',
    select: 'string',
    default: '100',
  },
  {
    params: 'bg',
    desc: '背景颜色',
    type: 'string',
    select: 'string',
    default: '#efefef',
  },
  {
    params: 'animated',
    desc: '是否开启闪烁动画',
    type: 'boolean',
    select: 'true / false',
    default: 'false',
  },
]
</script>
