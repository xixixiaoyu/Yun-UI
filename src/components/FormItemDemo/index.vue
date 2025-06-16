<template>
  <indexTitle title="Form" />

  <Demo :component="CityDemo1" />

  <Attr :columns="columns" :data="data" />
</template>

<script setup>
import indexTitle from '../indexTitle.vue'
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import { columns } from '../../lib/data'

import CityDemo1 from './default.demo.vue'

const data = [
  {
    params: 'title',
    desc: '表单标题',
    type: 'string',
    select: '/node_modules',
    default: "''",
  },
  {
    params: 'direction',
    desc: '表单item方向',
    type: 'string',
    select: 'x / y',
    default: 'x',
  },
]
</script>
