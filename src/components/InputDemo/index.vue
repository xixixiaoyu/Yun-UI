<template>
  <h1>Input & Textarea</h1>

  <Demo :component="InputDemo1" />
  <Demo :component="InputDemo2" />

  <Attr :columns="columns" :data="data" />
</template>

<script setup>
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import { columns } from '../../lib/data'
import InputDemo1 from './Input.default.demo.vue'
import InputDemo2 from './TextArea.default.demo.vue'

const data = [
  {
    params: 'type',
    desc: '输入框类型（textarea：多行文本）',
    type: 'string',
    select: '/',
    default: "''",
  },
  {
    params: 'v-model(model-value)',
    desc: '绑定值',
    type: 'string',
    select: '/',
    default: "''",
  },
  {
    params: 'placeholder',
    desc: '默认提示',
    type: 'string',
    select: '/',
    default: '请输入',
  },
  {
    params: 'disabled',
    desc: '禁用',
    type: 'boolean',
    select: 'true / false',
    default: 'false',
  },
  {
    params: 'readonly',
    desc: '是否只读',
    type: 'boolean',
    select: 'true / false',
    default: 'false',
  },
  {
    params: 'clearable',
    desc: '是否可清空',
    type: 'boolean',
    select: 'true / false',
    default: 'false',
  },
  {
    params: 'status',
    desc: '状态',
    type: 'string',
    select: 'normal' / 'info' / 'error' / 'warning' / 'success',
    default: 'normal',
  },
  {
    params: 'resize',
    desc: '缩放模式（只对多行文本框有效）',
    type: 'string',
    select: '/',
    default: 'none',
  },
  {
    params: 'input',
    desc: '输入触发的回调方法',
    type: '(e: value) => void',
    select: '/',
    default: '/',
  },
  {
    params: 'clear',
    desc: '清空触发的回调方法',
    type: '(e: value) => void',
    select: '/',
    default: '/',
  },
  {
    params: 'change',
    desc: '值变化触发的回调方法',
    type: '(e: value) => void',
    select: '/',
    default: '/',
  },
  {
    params: 'focus',
    desc: '聚焦触发的回调方法',
    type: '(e: value) => void',
    select: '/',
    default: '/',
  },
  {
    params: 'blur',
    desc: '失焦触发的回调方法',
    type: '(e: value) => void',
    select: '/',
    default: '/',
  },
]
</script>
