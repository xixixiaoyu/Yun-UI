<template>
  <indexTitle title="InputTag" subTitle="这是一个标签的输入框" />

  <Demo :component="InputTagDemo1" />

  <Attr :columns="columns" :data="data" />
</template>

<script setup>
import indexTitle from '../indexTitle.vue'
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import { columns } from '../../lib/data'

import InputTagDemo1 from './InputTag.default.demo.vue'

const data = [
  {
    params: 'v-model(model-value)',
    desc: '绑定值',
    type: 'Array',
    select: '/',
    default: '[]',
  },
  {
    params: 'type',
    desc: '类型(参考Tag 标签)',
    type: 'string',
    select: '/',
    default: "''",
  },
]
</script>
