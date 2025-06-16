<template>
  <IndexTitle title="Modal"></IndexTitle>

  <Demo :component="ModalDemo1" />

  <Attr :columns="columns" :data="data" />
</template>

<script setup>
import IndexTitle from '../indexTitle.vue'
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import { columns } from '../../lib/data'

import ModalDemo1 from './Modal.default.demo.vue'

const data = [
  {
    params: 'width',
    desc: '模态框宽度',
    type: 'string',
    select: '/',
    default: "''",
  },
  {
    params: 'height',
    desc: '模态框高度',
    type: 'string',
    select: '/',
    default: "''",
  },
  {
    params: 'visible',
    desc: '是否显示',
    type: 'Boolean',
    select: 'true / false',
    default: 'false',
  },
  {
    params: 'maskClick',
    desc: '蒙层关闭回调',
    type: 'function',
    select: '/',
    default: '/',
  },
]
</script>
