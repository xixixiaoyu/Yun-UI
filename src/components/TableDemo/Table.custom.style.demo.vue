<demo>自定义样式</demo>

<template>
  <Table :data="data" :columns="columns">
    <template #id="{ row }"> {{ row.id }} </template>
    <template #name="{ row }"> {{ row.name }} </template>
    <template #age="{ row }"> {{ row.age }} </template>
    <template #sex="{ row }"> {{ formatSex(row.sex) }} </template>
    <template #hobby="{ row }">
      <Flex x="start" gap="5px">
        <Tag v-for="(item, index) in row.hobby" :key="index" type="info" size="small"
          >{{ item }}
        </Tag>
      </Flex>
    </template>
    <template #intro="{ row }"> {{ row.intro }} </template>
    <template #action>
      <Flex> <Button is-text>管理</Button><Button is-text style="margin: 0">删除</Button> </Flex>
    </template>
  </Table>

  <div style="margin-top: 20px">
    <Alert
      :list="[
        {
          type: 'info',
          title: '提示',
          content: '你可以根据自己的实际情况来自定义某一行，某一列，某一个单元格的样式',
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
    // 定义这一单元格的样式
    tdStyle: {
      age: 'background:var(--yun-primary-color-dark); color: #fff',
    },
  },
  {
    id: 2,
    name: '小卢',
    age: '24',
    sex: 1,
    intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
    hobby: ['唱', '跳', 'rap', '游泳', '爬山', '看电影', '越野'],
    // 定义这一行的样式
    rowStyle: 'background:var(--yun-error-color-light)',
  },
  {
    id: 3,
    name: '小娟',
    age: '25',
    sex: 0,
    intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
    hobby: ['唱', '跳', 'rap', '游泳', '爬山', '看电影', '越野'],
    // 定义这一单元格的样式
    tdStyle: {
      sex: 'color:var(--yun-warning-color-dark);',
      intro: 'background:var(--yun-warning-color-dark);color:#fff',
    },
  },
  {
    id: 4,
    name: '小贝',
    age: '22',
    sex: 0,
    intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
    hobby: ['唱', '跳', 'rap', '游泳', '爬山', '看电影', '越野'],
    tdStyle: {
      sex: 'background:var(--yun-error-color-dark);color:#fff',
    },
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
    // 定义这一列的样式
    columnStyle: 'background:var(--yun-success-color-light)',
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
</script>
