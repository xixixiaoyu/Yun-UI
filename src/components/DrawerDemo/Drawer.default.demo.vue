<demo>
基础用法
</demo>

<template>
  <Drawer v-model:visible="visible1">凡所有相，皆是虚妄。 若见诸相非相，则见如来。</Drawer>
  <Button @click="open1">右边（滚动锁定）</Button>

  <Drawer v-model:visible="visible2" position="bottom">
    一切有为法，如梦幻泡影， 如露亦如电，应作如是观。</Drawer
  >
  <Button @click="open2">下边</Button>

  <Drawer v-model:visible="visible3" position="left"> 法尚应舍，何况非法。 </Drawer>
  <Button @click="open3">左边</Button>

  <Drawer v-model:visible="visible4" position="top"> 所谓佛法者，即非佛法</Drawer>
  <Button @click="open4">上边</Button>

  <div style="height: 300px"></div>
</template>

<script setup>
import { ref } from 'vue'

const visible1 = ref(false)
const visible2 = ref(false)
const visible3 = ref(false)
const visible4 = ref(false)

const open1 = () => {
  visible1.value = true
}
const open2 = () => {
  visible2.value = true
}
const open3 = () => {
  visible3.value = true
}
const open4 = () => {
  visible4.value = true
}
</script>
