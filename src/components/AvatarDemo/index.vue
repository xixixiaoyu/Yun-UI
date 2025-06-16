<template>
  <h1>Avatar</h1>

  <Demo :component="AvatarDemo1" />
  <Demo :component="AvatarDemo2" />

  <Attr :columns="columns" :data="data" />
</template>
<script setup>
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import { columns } from '../../lib/data'
import AvatarDemo1 from './Avatar.default.demo.vue'
import AvatarDemo2 from './Avatar.status.demo.vue'

const data = [
  {
    params: 'src',
    desc: '链接',
    type: 'string',
    select: '/',
    default: '/',
  },
  {
    params: 'round',
    desc: '形状：是否为圆形',
    type: '	string',
    select: 'string',
    default: 'false',
  },
  {
    params: 'status',
    desc: '	状态',
    type: '	string',
    select: 'online / processing / away / offline / busy',
    default: '/',
  },
  {
    params: 'statusPosition',
    desc: '	状态标记位置',
    type: '	string',
    select: '/',
    default: '/',
  },
]
</script>
