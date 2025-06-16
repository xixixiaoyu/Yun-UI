<template>
  <IndexTitle title="Pagination"> 一个高颜值的、支持双向绑定的分页器 </IndexTitle>

  <Demo :component="PaginationDemo1" />
  <Demo :component="PaginationDemo2" />

  <Attr :columns="columns" :data="data"></Attr>
</template>

<script setup>
import IndexTitle from '../indexTitle.vue'
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import { columns } from '../../lib/data'
import PaginationDemo1 from './Pagination.default.demo.vue'
import PaginationDemo2 from './Pagination.attr.demo.vue'

const data = [
  {
    params: 'total',
    desc: '总数',
    type: 'number',
    select: '/',
    default: '100',
  },
  {
    params: 'pageNum',
    desc: '当前页码',
    type: 'number',
    select: '/',
    default: '1',
  },
  {
    params: 'pageSize',
    desc: '每页条数',
    type: 'number',
    select: '/',
    default: '20',
  },
  {
    params: 'pageShowSize',
    desc: '展示左右的页码长度，这里有一定特殊性，比如长度是2，如果超出相应长度，就会只展示5个页码',
    type: 'number',
    select: '/',
    default: '2',
  },
  {
    params: 'round',
    desc: '是否是圆形',
    type: 'boolean',
    select: 'true / false',
    default: 'true',
  },
]
</script>
