<demo>
多行文本输入框
</demo>

<template>
  <Flex direction="column" width="300px" y="start" x="start" gap="10px">
    小的: {{ inputVal }}
    <Input size="small" type="textarea" v-model="inputVal" />
    常规的: {{ inputVal }}
    <Input type="textarea" v-model="inputVal" />
    大的: {{ inputVal }}
    <Input size="large" type="textarea" v-model="inputVal" />
    只读
    <Input type="textarea" readonly />
    禁用
    <Input type="textarea" disabled />
    输入个数
    <Input type="textarea" showCount />
    可清空
    <Input type="textarea" clearable />
    输入个数 + 可清空
    <Input type="textarea" showCount clearable />
    字数限制
    <Input show-count :max-length="10" />
    字数计算方式（中文=1，字母=0.5）
    <Input
      type="textarea"
      placeholder="1个中文作为1个字符，而2个英文作为1个"
      show-count
      nice-count
      :max-length="10"
    />

    可缩放的
    <Input type="textarea" resize="vertical" />
  </Flex>
</template>

<script setup>
import { ref } from 'vue'

const inputVal = ref('')
</script>
