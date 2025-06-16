<demo>询问校验</demo>

<template>
  <Flex gap="20px" x="start">
    <YunPopover ref="yunPopoverRef1" trigger="click" placement="bottom-start">
      <template #trigger>
        <Button>进入保险箱</Button>
      </template>
      <template #popover-body>
        <div class="popover-body" style="width: 300px">
          <FormItem direction="y" title="请输入密码">
            <Input v-model="v" />
          </FormItem>
          <Flex x="end">
            <Button type="blank" size="small" @click="yunPopoverRef1.hide()">取消 </Button>
            <Button size="small" @click="submit()" style="margin: 0">提交 </Button>
          </Flex>
        </div>
      </template>
    </YunPopover>

    <YunPopover ref="yunPopoverRef2" trigger="click" placement="bottom-start">
      <template #trigger>
        <Button>展示表格</Button>
      </template>
      <template #popover-body>
        <div class="popover-body" style="width: 800px">
          <Table :data="data" :columns="columns" height="auto">
            <template #id="{ row }"> {{ row.id }} </template>
            <template #name="{ row }"> {{ row.name }} </template>
            <template #age="{ row }"> {{ row.age }} </template>
            <template #sex="{ row }">
              {{ formatSex(row.sex) }}
            </template>
            <template #hobby="{ row }">
              <Flex gap="5px" x="start">
                <Tag v-for="(item, index) in row.hobby" :key="index" size="small" type="info">{{
                  item
                }}</Tag></Flex
              >
            </template>
            <template #intro="{ row }"> {{ row.intro }} </template>
          </Table>
          <br />
          <Flex x="end">
            <Button type="blank" size="small" @click="yunPopoverRef2.hide()">取消 </Button>
            <Button size="small" @click="submit()" style="margin: 0">提交 </Button>
          </Flex>
        </div>
      </template>
    </YunPopover>
  </Flex>
</template>

<script setup>
import { ref } from 'vue'

const v = ref('')
const yunPopoverRef1 = ref()
const yunPopoverRef2 = ref()

const submit = () => {
  Toast.warning({ text: v.value || '密码不可为空' })
  yunPopoverRef1.value.hide()
  yunPopoverRef2.value.hide()
}

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

<style lang="scss" scoped>
.popover-body {
  padding: 15px;
  box-sizing: border-box;
}
</style>
