<template>
  <IndexTitle
    title="Button"
    subTitle="这里仅用了一个元素来实现这个组件，我希望 Yun-ui 是极简的。"
  />

  <Demo :component="Button1Demo" />
  <Demo :component="Button2Demo" />
  <Demo :component="Button3Demo" />
  <Demo :component="Button4Demo" />
  <Demo :component="Button5Demo" />
  <Demo :component="Button6Demo" />
  <Demo :component="Button7Demo" />

  <Attr :columns="columns" :data="data" />
</template>
<script setup>
import IndexTitle from '../indexTitle.vue'
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import Button1Demo from './Button.default.demo.vue'
import Button2Demo from './Button.size.demo.vue'
import Button3Demo from './Button.round.demo.vue'
import Button4Demo from './Button.disabled.demo.vue'
import Button5Demo from './Button.loading.demo.vue'
import Button6Demo from './Button.group.demo.vue'
import Button7Demo from './Button.icon.demo.vue'
import { columns } from '../../lib/data'

const data = [
  {
    params: 'size',
    desc: '尺寸',
    type: 'string',
    select: 'small / medium / large',
    default: 'medium',
  },
  {
    params: 'type',
    desc: '色彩类型',
    type: 'string',
    select: 'primary / normal / success / error / warning',
    default: 'primary',
  },
  {
    params: 'round',
    desc: '是否为圆角',
    type: 'boolean',
    select: 'true / false',
    default: 'false',
  },
  {
    params: 'isText',
    desc: '文字按钮',
    type: 'boolean',
    select: 'true / false',
    default: 'false',
  },
  {
    params: 'disabled',
    desc: '是否禁用',
    type: 'boolean',
    select: 'false / true',
    default: 'false',
  },
  {
    params: 'loading',
    desc: '是否为加载状态',
    type: 'boolean',
    select: 'false / true',
    default: 'false',
  },
  {
    params: 'isIcon',
    desc: '图标按钮',
    type: 'boolean',
    select: 'false / true',
    default: 'false',
  },
]
</script>
