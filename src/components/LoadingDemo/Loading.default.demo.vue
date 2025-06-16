<demo>基础用法</demo>

<template>
  <div style="width: 300px">
    <Title size="14px">常规</Title>
    <Flex direction="column" style="padding: 20px" v-loading="{ isShow: true }">
      <Title :bold="700" style="margin-bottom: 20px">登录你的账户 </Title>
      <FormItem direction="y" title="账号">
        <Input />
      </FormItem>
      <FormItem style="margin-bottom: 30px" direction="y" title="密码">
        <Input />
      </FormItem>

      <Flex x="end">
        <Button type="normal">关闭 </Button>
        <Button>立即登录</Button>
      </Flex>
    </Flex>
    <br />
    <br />
    <br />

    <Title size="14px">自定义加载文字</Title>
    <Flex
      direction="column"
      style="margin-bottom: 20px; padding: 20px"
      v-loading="{ isShow: isShow, title: title }"
    >
      <Title :bold="700" style="margin-bottom: 20px">登录你的账户 </Title>
      <FormItem direction="y" title="账号">
        <Input />
      </FormItem>
      <FormItem style="margin-bottom: 30px" direction="y" title="密码">
        <Input />
      </FormItem>

      <Flex x="end">
        <Button type="normal">关闭 </Button>
        <Button>立即登录</Button>
      </Flex>
    </Flex>

    <FormItem direction="y" title="输入加载标题">
      <Input v-model="title" show-count :max-length="10" />
    </FormItem>
    <Button @click="isShow = !isShow">触发</Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Title from '../../lib/Title/Title.vue'
const isShow = ref(false)
const title = ref('加载中')
</script>
