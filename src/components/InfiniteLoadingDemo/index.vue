<template>
  <h1>InfiniteLoading 示例</h1>

  <Demo :component="InfiniteDemo1" />

  <Attr :columns="columns" :data="data" />

  <Demo :component="InfiniteDemo2" />
</template>
<script setup>
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import { columns } from '../../lib/data'
import InfiniteDemo1 from './InfiniteLading.default.demo.vue'
import InfiniteDemo2 from './InfiniteLoading-infinte.demo.vue'

const data = [
  {
    params: 'loading',
    desc: '正在加载中',
    type: 'boolean',
    select: 'true / false',
    default: 'false',
  },
  {
    params: 'finished',
    desc: '是否加载完毕',
    type: 'boolean',
    select: 'true / false',
    default: 'false',
  },

  {
    params: 'infinite',
    desc: '加载回调函数',
    type: '	function',
    select: '() => {}',
    default: '() => {}',
  },
]
</script>
