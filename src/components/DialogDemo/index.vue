<template>
  <IndexTitle title="Dialog">
    如果你需要更简单的询问框，请可以尝试一下<Mark type="info" to="popok">Popok</Mark>
  </IndexTitle>
  <Demo :component="Dialog1Demo" />
  <Demo :component="Dialog2Demo" />
  <Demo :component="Dialog3Demo" />
  <Demo :component="Dialog4Demo" />
  <Attr :columns="columns" :data="data"></Attr>
</template>

<script setup>
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import IndexTitle from '../indexTitle.vue'
import Dialog1Demo from './Dialog.default.demo.vue'
import Dialog2Demo from './Dialog.overlay.demo.vue'
import Dialog3Demo from './Dialog.stop.demo.vue'
import Dialog4Demo from './Dialog.api.demo.vue'

import { columns } from '../../lib/data'

const data = [
  {
    params: 'visible',
    desc: '是否展示',
    type: 'boolean',
    select: 'true / false',
    default: 'false',
  },
  {
    params: 'closeOnClickOverlay',
    desc: '点击蒙层是否关闭对话框',
    type: 'boolean',
    select: 'true / false',
    default: 'true',
  },
  {
    params: 'ok',
    desc: '确认触发函数',
    type: 'function',
    select: '/',
    default: '() => {}',
  },
  {
    params: 'cancel',
    desc: '取消触发函数',
    type: 'function',
    select: '/',
    default: '() => {}',
  },
  {
    params: 'type',
    desc: '消息类型',
    type: 'string',
    select: 'success / warning / info / error / normal',
    default: "''",
  },
  {
    params: 'layout',
    desc: '布局',
    type: 'string',
    select: 'normal / easy',
    default: 'normal',
  },
  {
    params: 'title',
    desc: '标题',
    type: 'string / slot',
    select: "''",
    default: "''",
  },
  {
    params: 'content',
    desc: '标题',
    type: 'string / slot',
    select: "''",
    default: "''",
  },
]
</script>
