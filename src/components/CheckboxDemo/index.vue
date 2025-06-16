<template>
  <indexTitle title="Checkbox" subTitle="通过复选框选择一个或多个数据。" />

  <Demo :component="CheckboxDemo1">
    <template #customTitle> x 布局<Mark type="info" :size="16">方的</Mark> </template>
  </Demo>

  <Demo :component="CheckboxDemo2">
    <template #customTitle> y 布局<Mark type="info" :size="16">圆的</Mark> </template>
  </Demo>

  <Demo :component="CheckboxDemo3">
    <template #customTitle>块<Mark type="info" :size="16">方的和圆的</Mark> </template>
  </Demo>

  <Demo :component="CheckboxDemo4">
    <template #customTitle>块<Mark type="info" :size="16">无图标</Mark> </template>
  </Demo>

  <Attr :columns="columns" :data="data" />
</template>

<script setup>
import indexTitle from '../indexTitle.vue'
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import { columns } from '../../lib/data'
import CheckboxDemo1 from './Checkbox.x.demo.vue'
import CheckboxDemo2 from './Checkbox.y.demo.vue'
import CheckboxDemo3 from './Checkbox.block.demo.vue'
import CheckboxDemo4 from './Checkbox.icon.demo.vue'

const data = [
  {
    params: 'v-model (modelValue)',
    desc: '绑定值',
    type: 'string',
    select: '/',
    default: "''",
  },
  {
    params: 'options',
    desc: '配置对象',
    type: 'Object: {label: string, value: any}',
    select: '/',
    default: '必填',
  },
  {
    params: 'block',
    desc: '	是否是块',
    type: 'boolean',
    select: 'true / false',
    default: 'false',
  },
  {
    params: 'round',
    desc: '是否是圆',
    type: 'boolean',
    select: 'true / false',
    default: 'false',
  },
  {
    params: 'direction',
    desc: '布局方向',
    type: 'string',
    select: 'x / y',
    default: 'x',
  },
  {
    params: 'iconable',
    desc: '是否有图标',
    type: 'boolean',
    select: 'true / false',
    default: 'true',
  },
]
</script>
