<template>
  <indexTitle title="Radio" />

  <Demo :component="RadioDemo1" />
  <Demo :component="RadioDemo2" />
  <Demo :component="RadioDemo3" />

  <Attr :columns="columns" :data="data" />
</template>

<script setup>
import indexTitle from '../indexTitle.vue'
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import { columns } from '../../lib/data'

import RadioDemo1 from './Radio.x.demo.vue'
import RadioDemo2 from './Radio.y.demo.vue'
import RadioDemo3 from './Radio.block.demo.vue'

const data = [
  {
    params: 'v-model (modelValue)',
    desc: '绑定值',
    type: 'string',
    select: '/',
    default: "''",
  },
  {
    params: 'options',
    desc: '配置对象',
    type: 'Object: {label: string, value: any}',
    select: '/',
    default: '必填',
  },
  {
    params: 'block',
    desc: '	是否是块',
    type: 'boolean',
    select: 'true / false',
    default: 'false',
  },
  {
    params: 'round',
    desc: '是否是圆',
    type: 'boolean',
    select: 'true / false',
    default: 'false',
  },
  {
    params: 'direction',
    desc: '布局方向',
    type: 'string',
    select: 'x / y',
    default: 'x',
  },
  {
    params: 'iconable',
    desc: '是否有图标',
    type: 'boolean',
    select: 'true / false',
    default: 'true',
  },
]
</script>
