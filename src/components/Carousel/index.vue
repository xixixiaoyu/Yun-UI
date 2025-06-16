<template>
  <h1>Carousel</h1>

  <Demo :component="Carousel1Demo" />
  <Demo :component="Carousel2Demo" />
  <Demo :component="Carousel3Demo" />
  <Demo :component="Carousel4Demo" />

  <Attr :columns="columns" :data="data"></Attr>
</template>

<script setup>
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import { columns } from '../../lib/data'
import Carousel1Demo from './Carousel.scroll.demo.vue'
import Carousel2Demo from './Carousel.gapless.demo.vue'
import Carousel3Demo from './Carousel.opacity.demo.vue'
import Carousel4Demo from './Carousel.loop.demo.vue'

const data = [
  {
    params: 'width',
    desc: '轮播图宽度',
    type: 'string',
    select: 'string',
    default: '1150',
  },
  {
    params: 'height',
    desc: '轮播图高度',
    type: 'string',
    select: 'string',
    default: '600',
  },
  {
    params: 'sliders',
    desc: '确认触发函数',
    type: 'function',
    select: '() => {}',
    default: '() => {}',
  },
  {
    params: 'autoPlay',
    desc: '是否开启自动轮播',
    type: 'boolean',
    select: 'true / false',
    default: 'false',
  },
  {
    params: 'duration',
    desc: '自动轮播间隔时间',
    type: 'number',
    select: 'number',
    default: '3000',
  },
  {
    params: 'gapless',
    desc: '滚动轮播是否开启无缝轮播',
    type: 'boolean',
    select: 'true / false',
    default: 'false',
  },
  {
    params: 'loop',
    desc: '透明渐变轮播是否开启无边界轮播',
    type: 'boolean',
    select: 'true / false',
    default: 'false',
  },
]
</script>
