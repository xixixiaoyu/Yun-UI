<demo>自定义操作</demo>

<template>
  <Table :data="data" :columns="columns">
    <template #id="{ row }"> {{ row.id }} </template>
    <template #name="{ row }"> {{ row.name }} </template>
    <template #age="{ row }"> {{ row.age }} </template>
    <template #sex="{ row }"> {{ formatSex(row.sex) }} </template>
    <template #hobby="{ row }">
      <Flex gap="5px" x="start">
        <Tag v-for="(item, index) in row.hobby" :key="index" type="info" size="small"
          >{{ item }}
        </Tag></Flex
      >
    </template>
    <template #intro="{ row }"> {{ row.intro }} </template>
    <template #action="{ row, column }">
      <Flex>
        <Button is-text @click="set(row, column)">管理</Button
        ><Button type="error" is-text @click="del(row, column)" style="margin: 0"
          >删除
        </Button></Flex
      >
    </template>
  </Table>
  <div style="margin-top: 20px">
    <Alert
      :list="[
        {
          type: 'info',
          title: '提示',
          content: '插槽为你提供了整列和整行的数据以及参数',
        },
      ]"
    />
  </div>
</template>

<script lang="ts" setup>
const data: any = [
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

const set = (row: any, column: any) => {
  Toast.info({ text: '你可以拿到这一行的数据，例如：' + JSON.stringify(row) })
}
const del = (row: any, column: any) => {
  Toast.warning({ text: '你也可以拿到这一列的数据，例如：' + JSON.stringify(column) })
}
</script>
