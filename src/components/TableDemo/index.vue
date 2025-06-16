<template>
  <IndexTitle title="Table">
    这是用 div 取代传统的table，看起来很简单，但其实功能没少。
  </IndexTitle>

  <Demo :component="TableDemo1" />
  <Demo :component="TableDemo2" />
  <Demo :component="TableDemo3" />
  <Demo :component="TableDemo4" />
  <Demo :component="TableDemo5" />
  <Demo :component="TableDemo6" />
</template>

<script setup>
import IndexTitle from '../indexTitle.vue'
import Demo from '../Demo.vue'

import TableDemo1 from './Table.default.demo.vue'
import TableDemo2 from './Table.sticky.demo.vue'
import TableDemo3 from './Table.custom.demo.vue'
import TableDemo4 from './Table.slot.demo.vue'
import TableDemo5 from './Table.custom.style.demo.vue'
import TableDemo6 from './Table.other.demo.vue'
</script>
