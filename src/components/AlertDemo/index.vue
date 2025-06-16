<template>
  <IndexTitle title="Alert">
    如果你需要使用全局的提示，请可以尝试一下 <Mark type="info" to="toast">Toast</Mark>
  </IndexTitle>

  <Demo :component="AlertDemo1" />

  <Attr :columns="columns" :data="data" />
</template>

<script setup>
import IndexTitle from '../indexTitle.vue'
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import { columns } from '../../lib/data'

import AlertDemo1 from './Alert.default.demo.vue'

const data = [
  {
    params: 'options',
    desc: '列表配置',
    type: 'array',
    select: `{
              type: string;
              title: string;
              content: string;
              }[]`,
    default: '[]',
  },
]
</script>
