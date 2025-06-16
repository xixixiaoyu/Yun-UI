<template>
  <IndexTitle title="Loading"></IndexTitle>

  <Demo :component="LoadingDemo1" />

  <Attr :columns="columns" :data="data" />
</template>

<script setup>
import IndexTitle from '../indexTitle.vue'
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import { columns } from '../../lib/data'

import LoadingDemo1 from './Loading.default.demo.vue'

const data = [
  {
    params: 'isShow',
    desc: '是否展示',
    type: 'boolean',
    select: 'true / false',
    default: 'false',
  },
  {
    params: 'title',
    desc: '记载文字提示',
    type: 'string',
    select: '/',
    default: "''",
  },
]
</script>
