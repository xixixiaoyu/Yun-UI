<demo>基本使用</demo>

<template>
  <div>
    <Pagination
      v-model:page-num="pageNum"
      v-model:page-size="pageSize"
      :page-size-options="[
        {
          label: '10 / 页',
          value: 10,
        },
        {
          label: '20 / 页',
          value: 20,
        },
        {
          label: '30 / 页',
          value: 30,
        },
      ]"
      :page-num="pageNum"
      :total="total"
      :page-show-size="3"
      @change="change"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const pageNum = ref(6)
const pageSize = ref(20)
const change = (e: any) => {
  console.log(e)
}
const total = ref(2000)
</script>
