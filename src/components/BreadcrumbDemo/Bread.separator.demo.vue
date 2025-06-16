<demo>自定义激活项和图标类型</demo>

<template>
  <BreadCrumb :options="options" iconType="shoulder" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const options = ref([
  {
    label: 'Avatar',
    to: 'avatar',
  },
  {
    label: 'Breadcrumb',
    to: 'breadcrumb',
    active: true,
  },
  {
    label: 'Input',
    to: 'input',
  },
  {
    label: 'Dialog',
    to: 'dialog',
  },
  {
    label: 'Flex',
    to: 'flex',
  },
])
</script>
