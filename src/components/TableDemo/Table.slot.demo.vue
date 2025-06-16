<demo>插槽</demo>

<template>
  <Table :data="data" :columns="columns">
    <template #id="{ row }"> {{ row.id }} </template>
    <template #name="{ row }"> {{ row.name }} </template>
    <template #age="{ row }"> {{ row.age }} </template>
    <template #sex="{ row }"> {{ formatSex(row.sex) }} </template>
    <template #hobby="{ row }">
      <Flex gap="5px" x="start">
        <Tag v-for="(item, index) in row.hobby" :key="index" type="info" size="small">{{
          item
        }}</Tag></Flex
      >
    </template>
    <template #intro="{ row }"> {{ row.intro }} </template>
    <template #action>
      <Flex>
        <YunPopover trigger="click" placement="top">
          <template #trigger>
            <Button is-text>录入</Button>
          </template>
          <template #popover-body="{ hide }">
            <div class="popover-body">
              <FormItem direction="y" title="请输入密码">
                <Input v-model="v" />
              </FormItem>
              <Flex x="end">
                <Button type="blank" size="small" @click="hide()">取消 </Button>
                <Button size="small" @click="(hide(), submit())" style="margin: 0">提交 </Button>
              </Flex>
            </div>
          </template>
        </YunPopover>
        <PopOk
          title="删除确认"
          content="删除之后无法恢复，请确认！"
          placement="top"
          width="200px"
          @ok="success"
          @cancel="error"
          ><Button is-text type="error">删除</Button></PopOk
        >
      </Flex>
    </template>
  </Table>
</template>

<script setup>
import { ref } from 'vue'

const data = [
  {
    id: 1,
    name: '小明',
    age: '14',
    sex: 1,
    intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
    hobby: ['唱', '跳', 'rap', '游泳', '爬山', '看电影', '越野'],
  },
  {
    id: 2,
    name: '小卢',
    age: '24',
    sex: 1,
    intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
    hobby: ['唱', '跳', 'rap', '游泳', '爬山', '看电影', '越野'],
  },
  {
    id: 3,
    name: '小娟',
    age: '25',
    sex: 0,
    intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
    hobby: ['唱', '跳', 'rap', '游泳', '爬山', '看电影', '越野'],
  },
  {
    id: 4,
    name: '小贝',
    age: '22',
    sex: 0,
    intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
    hobby: ['唱', '跳', 'rap', '游泳', '爬山', '看电影', '越野'],
  },
  {
    id: 5,
    name: '小飞',
    age: '13',
    sex: 3,
    intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
    hobby: ['唱', '跳', 'rap', '游泳', '爬山', '看电影', '越野'],
  },
]

const columns = [
  {
    title: 'id',
    width: '50px',
    field: 'id',
    x: 'center',
    sticky: 'left',
    offsetX: '0px',
  },
  {
    title: '姓名',
    width: '100px',
    field: 'name',
    x: 'center',
    sticky: 'left',
    offsetX: '50px',
  },
  {
    title: '年龄',
    width: '200px',
    field: 'age',
    x: 'center',
  },
  {
    title: '性别',
    width: '200px',
    field: 'sex',
    x: 'center',
  },
  {
    title: '爱好',
    width: '400px',
    field: 'hobby',
  },
  {
    title: '介绍',
    width: '400px',
    field: 'intro',
  },
  {
    title: '操作',
    width: '120px',
    field: 'action',
    sticky: 'right',
    offsetX: '0px',
    x: 'center',
  },
]

const formatSex = (sex) => {
  switch (sex) {
    case 0:
      return '女'
    case 1:
      return '男'
    default:
      return '未知'
  }
}

const v = ref('')

const submit = () => {
  Toast.info({ text: v.value || '密码不可为空' })
  v.value = ''
}
const success = (e) => {
  e.hide()
  Toast.success({ text: '删除成功' })
}
const error = (e) => {
  e.hide()
  Toast.error({ text: '取消' })
}
</script>

<style lang="scss" scoped>
.popover-body {
  padding: 15px;
}
</style>
