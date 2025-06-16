<template>
  <IndexTitle title="Table">这是一个简单评论列表</IndexTitle>

  <Demo :component="CommentDemo1" />

  <Attr :columns="columns" :data="data" />
</template>

<script setup>
import IndexTitle from '../indexTitle.vue'
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import { columns } from '../../lib/data'

import CommentDemo1 from './Comment.default.demo.vue'

const data = []
</script>
