<demo>
  基础用法
</demo>

<template>
  <Flex direction="column" x="start" y="center" gap="15px">
    <Flex x="start">
      圆的:<Switch v-model="bool" @change="change" />

      方的:<Switch v-model="bool" @change="change" :round="false" />
    </Flex>

    选中的值：{{ bool }}
  </Flex>
</template>

<script setup>
import { ref } from 'vue'
const bool = ref(true)
const change = (e) => {
  console.log(e)
  console.log(bool.value)
}
</script>
