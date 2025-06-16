<demo>
  表单总览
</demo>

<template>
  <div class="form-box">
    <FormItem direction="y" title="账号">
      <Input v-model="user.username" />
    </FormItem>
    <FormItem direction="y" title="密码">
      <Input v-model="user.password" />
    </FormItem>
    <FormItem direction="y" title="简介">
      <Input v-model="user.intro" type="textarea" show-count :max-length="250" resize="none" />
    </FormItem>
    <FormItem direction="y" title="家地址">
      <Select v-model="user.home" :options="home_options" />
    </FormItem>

    <FormItem direction="y" title="生日">
      <DatePicker v-model="d" style="width: 100%" auto-close></DatePicker>
    </FormItem>

    <FormItem direction="y" title="性别">
      <RadioGroup v-model="user.sex" :options="sex_options" />
    </FormItem>
    <FormItem direction="y" title="爱好">
      <CheckboxGroup v-model="user.hobby" :options="hobby_options" />
    </FormItem>
    <FormItem direction="y" title="订阅">
      <Switch v-model="user.dark" />
    </FormItem>
    <FormItem direction="y" title="标签输入框">
      <InputTag v-model="user.tags" />
    </FormItem>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const user = ref({
  username: '',
  password: '',
  age: '',
  sex: '0',
  hobby: [],
  school: '',
  home: '',
  intro: '',
  dark: true,
  tags: [],
  pay: '',
})

const sex_options = ref([
  { label: '未知', value: '0' },
  { label: '男', value: '1' },
  { label: '女', value: '2' },
])

const pay_options = ref([
  { label: '微信', value: '1' },
  { label: '支付宝', value: '2' },
  { label: 'Apple Pay', value: '3' },
])
const hobby_options = ref([
  { label: '唱歌', value: '1' },
  { label: '跳', value: '2' },
  { label: 'rap', value: '3' },
  { label: '打篮球', value: '44' },
])
const home_options = ref([
  {
    label: '广东',
    value: '1',
  },
  {
    label: '深圳',
    value: '2',
  },
  {
    label: '杭州',
    value: '3',
  },
  {
    label: '上海',
    value: '4',
  },
  {
    label: '北京',
    value: '5',
  },
])
const d = ref('2020-12-12')
</script>

<style lang="scss" scoped>
.form-box {
  width: 350px;
  margin: 50px auto;
}
@media (max-width: 767px) {
  .form-box {
    width: 100%;
  }
}
</style>
