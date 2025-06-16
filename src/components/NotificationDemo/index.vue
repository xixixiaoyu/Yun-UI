<template>
  <IndexTitle title="Notification"></IndexTitle>

  <Demo :component="NotificationDemo1" />
  <Demo :component="NotificationDemo2" />

  <Attr :columns="columns" :data="data" />
</template>

<script setup>
import IndexTitle from '../indexTitle.vue'
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import { columns } from '../../lib/data'

import NotificationDemo1 from './Notification.default.demo.vue'
import NotificationDemo2 from './Notification.time.demo.vue'

const data = [
  {
    params: 'options',
    desc: '列表配置',
    type: 'object',
    select: `{
                title: string;
                content: string;
                delay?: number;
              }`,
    default: "''",
  },
  {
    params: 'delay',
    desc: '通知的展示时长，设为0时则不会自动关闭',
    type: 'number',
    select: '/',
    default: '3000',
  },
]
</script>
