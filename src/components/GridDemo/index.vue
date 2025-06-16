<template>
  <h1>Grid 示例</h1>

  <Demo :component="GridDemo1" />
  <Demo :component="GridDemo2" />
  <Demo :component="GridDemo3" />
  <Demo :component="GridDemo4" />
  <Demo :component="GridDemo5" />
  <Demo :component="GridDemo6" />
</template>

<script setup>
import Demo from '../Demo.vue'
import GridDemo1 from './Grid.default.demo.vue'
import GridDemo2 from './Grid.gutter.demo.vue'
import GridDemo3 from './Grid.hybrid.demo.vue'
import GridDemo4 from './Grid.offset.demo.vue'
import GridDemo5 from './Grid.justify.demo.vue'
import GridDemo6 from './Grid.responsive.demo.vue'
</script>
