<template>
  <indexTitle title="DatePicker" subTitle="一个很漂亮的、支持双向绑定的日期选择器" />

  <Demo :component="DatePickerDemo1" />

  <Attr :columns="columns" :data="data" />
</template>

<script setup>
import indexTitle from '../indexTitle.vue'
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import { columns } from '../../lib/data'

import DatePickerDemo1 from './DatePicker.default.demo.vue'

const data = [
  {
    params: 'v-model (model-value)',
    desc: '绑定值',
    type: 'string',
    select: '/',
    default: "''",
  },
  {
    params: 'auto-close',
    desc: '是否在选择日期后自动关闭气泡',
    type: 'boolean',
    select: 'true / false',
    default: 'true',
  },
]
</script>
