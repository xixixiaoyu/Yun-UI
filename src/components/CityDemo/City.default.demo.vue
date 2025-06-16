<demo>
  <title>基本使用</title>
</demo>

<template>
  <div class="city-container">
    <City placeholder="召唤师，请选择出生地" :fullLocation="fullLocation" @change="changeCity" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { City } from '../../lib/index'

const fullLocation = ref(null)
const changeCity = (result) => {
  fullLocation.value = result.fullLocation
}
</script>

<style>
.city-container {
  padding-bottom: 310px;
}
</style>
