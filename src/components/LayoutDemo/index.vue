<template>
  <indexTitle
    title="Layout"
    subTitle="Layout：外层容器。当子元素中包含 Aside
  时，全部子元素会水平左右排列，否则会垂直上下排列。Header：顶栏容器。Aside：侧边栏容器。Content：主要区域容器。Footer：底栏容器。"
  />

  <Demo :component="LayoutDemo" />
</template>

<script setup>
import indexTitle from '../indexTitle.vue'
import Demo from '../Demo.vue'
import LayoutDemo from './Layout1.demo.vue'
</script>
