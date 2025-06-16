<demo>固定列</demo>

<template>
  <Table :data="data" :columns="columns">
    <template #id="{ row }"> {{ row.id }} </template>
    <template #name="{ row }"> {{ row.name }} </template>
    <template #age="{ row }"> {{ row.age }} </template>
    <template #sex="{ row }"> {{ formatSex(row.sex) }} </template>
    <template #hobby="{ row }">
      <Flex gap="5px" x="start">
        <Tag v-for="(item, index) in row.hobby" :key="index" size="small" type="info">{{
          item
        }}</Tag></Flex
      >
    </template>
    <template #intro="{ row }"> {{ row.intro }} </template>
  </Table>
  <div style="margin-top: 20px">
    <Alert
      :list="[
        {
          type: 'info',
          title: '提示',
          content: '因为宽度自定义，你需要调整「offsetX」来设置横向偏移量，不设置，默认是 0 px',
        },
      ]"
    />
  </div>
</template>

<script lang="ts" setup>
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
    width: '400px',
    field: 'age',
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
    title: '性别',
    width: '80px',
    field: 'sex',
    x: 'center',
    sticky: 'right',
    offsetX: '0px',
  },
]

const formatSex = (sex: number) => {
  switch (sex) {
    case 0:
      return '女'
    case 1:
      return '男'
    default:
      return '未知'
  }
}
</script>
