<demo>
  <title>CountDown基本使用</title>
</demo>

<template>
  <CountDown v-slot="{ d, hh, mm, ss }" :time="countDown">
    <div class="count-down">{{ d }} 天 {{ hh }} 小时 {{ mm }} 分钟 {{ ss }} 秒</div>
  </CountDown>
</template>

<script setup>
import { ref } from 'vue'
import { CountDown } from '../../lib/index'
const countDown = ref(10)
</script>
