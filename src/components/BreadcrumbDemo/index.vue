<template>
  <h1>Breadcrumb</h1>

  <Demo :component="BreadcrumbDemo1" />
  <Demo :component="BreadcrumbDemo2" />

  <Attr :columns="columns" :data="data1" />
  <Attr title="Options" :columns="columns" :data="data2" />
</template>
<script setup>
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import { columns } from '../../lib/data'
import BreadcrumbDemo1 from './Breadcrumb.default.demo.vue'
import BreadcrumbDemo2 from './Bread.separator.demo.vue'

const data1 = [
  {
    params: 'options',
    desc: '配置表',
    type: 'options',
    select: '/',
    default: '[]',
  },
  {
    params: 'iconType',
    desc: '	显示类型',
    type: 'string',
    select: 'sprit / shoulder',
    default: 'sprit',
  },
]

const data2 = [
  {
    params: 'label',
    desc: '文本内容',
    type: 'string',
    select: '/',
    default: "''",
  },
  {
    params: 'to',
    desc: '绑定跳转链接',
    type: 'string',
    select: '/',
    default: "''",
  },
  {
    params: 'active',
    desc: '是否是选中状态',
    type: 'boolean',
    select: 'true / false',
    default: 'false',
  },
]
</script>
