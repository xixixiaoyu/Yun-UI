<demo>模态框</demo>

<template>
  <Flex x="start">
    <Button @click="modalVisible1 = true">登录</Button>
    <Button @click="modalVisible2 = true">展示表格</Button>
  </Flex>

  <Modal :visible="modalVisible1" width="350px" @maskClick="modalVisible1 = false">
    <div class="modal-body">
      <Title :bold="700" style="margin-bottom: 20px">登录你的账户 </Title>
      <FormItem direction="y" title="账号">
        <Input />
      </FormItem>
      <FormItem style="margin-bottom: 30px" direction="y" title="密码">
        <Input />
      </FormItem>

      <Flex x="end">
        <Button type="normal" @click="modalVisible1 = false">关闭 </Button>
        <Button @click="modalVisible1 = false">立即登录</Button>
      </Flex>
    </div>
  </Modal>
  <Modal :visible="modalVisible2" width="1250px" @maskClick="modalVisible2 = false">
    <div class="modal-body">
      <Table :data="data" :columns="columns" height="auto">
        <template #id="{ row }"> {{ row.id }} </template>
        <template #name="{ row }"> {{ row.name }} </template>
        <template #age="{ row }"> {{ row.age }} </template>
        <template #sex="{ row }"> {{ formatSex(row.sex) }} </template>
        <template #hobby="{ row }">
          <Flex gap="5px" x="start">
            <Tag v-for="(item, index) in row.hobby" :key="index" type="info" size="small"
              >{{ item }}
            </Tag>
          </Flex>
        </template>
        <template #intro="{ row }"> {{ row.intro }} </template>
        <template #action="{ row, column }">
          <Flex>
            <Button is-text @click="set(row, column)">管理</Button
            ><Button type="error" is-text @click="del(row, column)">删除 </Button>
          </Flex>
        </template>
      </Table>
      <br />

      <Flex x="end">
        <Button type="normal" @click="modalVisible2 = false">关闭 </Button>
        <Button @click="modalVisible2 = false">提交</Button>
      </Flex>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const modalVisible1 = ref(false)
const modalVisible2 = ref(false)

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
  Toast.info({ text: '你可以拿到这一行的数据' + JSON.stringify(row) })
  console.log(row, column)
}
const del = (row: any, column: any) => {
  Toast.warning({ text: '你也可以拿到这一列的数据' + JSON.stringify(column) })
}

onMounted(() => {
  document.onkeydown = function (event) {
    const e = event || window.event || arguments.callee.caller.arguments[0]
    if (e && e.keyCode == 27) {
      // 按 Esc
      modalVisible1.value = false
      modalVisible2.value = false
    }
  }
})
</script>

<style lang="scss" scoped>
.modal-body {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px;
  box-sizing: border-box;
}
</style>
