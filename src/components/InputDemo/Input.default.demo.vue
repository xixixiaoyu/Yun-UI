<demo>
单行文本框
</demo>

<template>
  <Flex direction="column" width="300px" y="start" x="start" gap="10px">
    小的: {{ inputVal }}
    <Input size="small" v-model="inputVal" />
    常规的: {{ inputVal }}
    <Input v-model="inputVal" />
    大的: {{ inputVal }}
    <Input size="large" v-model="inputVal" />
    密码框
    <Input type="password" show-password />
    只读
    <Input readonly />
    禁用
    <Input disabled />
    输入个数
    <Input showCount />
    可清空
    <Input clearable />
    字数限制
    <Input showCount :max-length="10" />
    密码框 + 输入个数 + 可清空
    <Input type="password" show-count show-password clearable />
    输入个数 + 可清空
    <Input show-count clearable />
    宽度自适应
    <Input auto-width />
    不同状态:
    <Input status="info" />
    <Input status="warning" />
    <Input status="error" />
    <Input status="success" />
    label:
    <Input labelLeft="userName" placeholder="云牧" />
    <Input labelRight=".com" placeholder="yunmu" />
  </Flex>
</template>

<script setup>
import { ref } from 'vue'

const inputVal = ref('')
</script>
