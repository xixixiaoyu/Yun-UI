<template>
  <div class="home-wrapper">
    <div class="startbox">
      <div class="slogan">
        少就是
        <div class="dm">
          <div class="text"><span>多</span> <span>美</span></div>
        </div>
      </div>
      <p>一个 Vue 3 + TS 组件库</p>
      <Button @click="router.push('/doc/avatar')" style="margin-top: 10px">开始使用</Button>
    </div>
    <div class="home">
      <Flex direction="y" gap="40px">
        <Flex class="item" direction="column" x="end" gap="40px">
          <Flex direction="column" x="end" gap="0px">
            <Title size="16px" :bold="200">Yun Design</Title>
            <Title size="24px" :bold="400">Yun Design</Title>
            <Title size="32px" :bold="600">Yun Design</Title>
            <Title size="40px" :bold="900">Yun Design</Title>
          </Flex>
          <Flex x="end" gap="20px">
            <Badge round value="99+">
              <Avatar src="https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668"></Avatar>
            </Badge>
            <Badge type="info" round value="99+">
              <Avatar src="https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668"></Avatar>
            </Badge>
            <Avatar
              src="https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668"
              status="online"
              status-position="bottom-left"
            />
            <Avatar
              src="https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668"
              status="processing"
              status-position="bottom-right"
            />
          </Flex>
          <Flex x="end" gap="20px">
            <Tag type="primary">primary</Tag>
            <Tag type="success">success</Tag>
            <Tag type="error">error</Tag>
            <Tag type="warning">warning</Tag>
            <Tag type="normal">normal</Tag>
          </Flex>

          <Flex x="end" gap="20px">
            <Button type="normal">取消</Button>
            <Button>确定</Button>
            <Button loading type="warning">确定</Button>
            <Button type="error">确定</Button>
            <Button type="success">确定</Button>
          </Flex>
          <Flex x="end"> <BreadCrumb :options="breadcrumb_options"> </BreadCrumb></Flex>

          <Flex x="end" style="width: 380px"> <YunTabs :options="tab_soptions" /></Flex>

          <Flex gap="20px" x="end">
            <Dropdown :options="dropdown_options">
              <Button type="normal">trigger hover</Button>
            </Dropdown>
            <Dropdown :options="dropdown_options" trigger="click" placement="top">
              <Button type="normal">trigger click</Button>
            </Dropdown></Flex
          >
        </Flex>

        <Flex class="item" direction="column">
          <Flex direction="column" class="form-box">
            <FormItem direction="y" title="Input">
              <Input v-model="user.username" />
            </FormItem>
            <FormItem direction="y" title="Textarea">
              <Input type="textarea" resize="none" />
            </FormItem>
            <FormItem direction="y" title="Select">
              <Select v-model="user.home" :options="home_options" />
            </FormItem>
            <FormItem direction="y" title="Radio">
              <RadioGroup v-model="user.sex" :options="sex_options" />
            </FormItem>
            <FormItem direction="y" title="Checkbox">
              <CheckboxGroup v-model="user.hobby" :options="hobby_options" />
            </FormItem>
            <FormItem direction="y" title="Switch">
              <Switch v-model="user.dark" />
            </FormItem>
            <FormItem direction="y" title="DatePicker">
              <DatePicker v-model="d" auto-close />
            </FormItem>
          </Flex>
        </Flex>
        <Flex class="item" direction="column" gap="20px">
          <Alert :list="list"></Alert>
          <Flex wrap x="start" gap="20px">
            <Button @click="message('normal')">normal</Button>
            <Button @click="message('info')" style="margin: 0">info</Button>
            <Button @click="message('success')" style="margin: 0">success</Button>
          </Flex>
          <Flex wrap x="start" gap="20px">
            <Button type="error" @click="openDialog('normal')">Dialog</Button>
            <Button @click="modalVisible1 = true" style="margin: 0">login</Button>
            <Button @click="modalVisible2 = true" style="margin: 0">展示表格</Button>
          </Flex>
          <Flex wrap x="start" gap="20px">
            <Button type="success" @click="open('success')" style="margin: 0">success</Button>
            <Button type="error" @click="open('error')" style="margin: 0">error</Button>
            <Button type="warning" @click="open('warning')" style="margin: 0">warning </Button>
          </Flex>
          <Flex x="start" gap="20px">
            <YunPopover ref="yunPopoverRef" trigger="click" placement="bottom-start">
              <template #trigger>
                <Button>Popover</Button>
              </template>
              <template #popover-body>
                <div class="popover-body">
                  <FormItem direction="y" title="请输入密码">
                    <Input v-model="v" />
                  </FormItem>

                  <div class="footer">
                    <Button type="blank" size="small" @click="yunPopoverRef.hide()">取消</Button>
                    <Button size="small" @click="submit()" style="margin: 0">提交</Button>
                  </div>
                </div>
              </template>
            </YunPopover></Flex
          >
        </Flex>
      </Flex>
    </div>
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
          <Button @click="modalVisible1 = false" style="margin: 0">立即登录</Button>
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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
onMounted(() => {
  const duration = 3 * 1000
  const animationEnd = Date.now() + duration
  const defaults = {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 0,
  }
  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min
  }
  const interval: any = setInterval(function () {
    const timeLeft = animationEnd - Date.now()
    if (timeLeft <= 0) {
      return clearInterval(interval)
    }
    const particleCount = 50 * (timeLeft / duration)
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: {
          x: randomInRange(0.1, 0.3),
          y: Math.random() - 0.2,
        },
      })
    )
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: {
          x: randomInRange(0.7, 0.9),
          y: Math.random() - 0.2,
        },
      })
    )
  }, 300)
})
const router = useRouter()
const v = ref('')
const yunPopoverRef = ref()
const submit = () => {
  Toast.error({ text: v.value || '密码不可为空' })
  yunPopoverRef.value.hide()
}
const openDialog = (type: any) => {
  Dialog[type]({
    title: '删除确认',
    content: '删除之后无法恢复，请确定',
    ok: () => {
      console.log('确定')
    },
    cancel: () => {
      console.log('取消')
    },
  })
}
const user = ref({
  username: '',
  password: '',
  age: '',
  sex: '1',
  hobby: [],
  school: '',
  home: '',
  dark: true,
  pay: '',
})
const sex_options = ref([
  { label: '未知', value: '0' },
  { label: '男', value: '1' },
  { label: '女', value: '2' },
])
const hobby_options = ref([
  { label: '唱歌', value: 1 },
  { label: '跳', value: 2 },
  { label: 'rap', value: 3 },
  { label: '打篮球', value: 44 },
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
const breadcrumb_options = ref([
  {
    label: '首页',
    to: '/',
  },
  {
    label: 'Vue',
    to: 'https://vuejs.org/',
  },
  {
    label: '商品列表',
    to: '',
  },
  {
    label: '商品详情',
    to: '',
    active: true,
  },
])
const tab_soptions = ref([
  { label: '北京', value: '1' },
  { label: '上海', value: '2' },
  { label: '广州', value: '3' },
  { label: '深圳', value: '4' },
  { label: '乌鲁木齐', value: '5' },
])
const dropdown_options = ref([
  {
    label: '西游记',
    value: '1',
  },
  {
    label: '水浒传',
    value: '2',
  },
  {
    label: '三国演义',
    value: '3',
  },
  {
    label: '红楼梦',
    value: '4',
  },
])
const list = ref([
  {
    type: 'info',
    title: '成功发送一条消息',
    content: '',
  },
  {
    type: 'normal',
    title: '成功发送一条消息',
    content: '',
  },
  {
    type: 'warning',
    title: '成功发送一条消息',
    content: '',
  },
  {
    type: 'error',
    title: '成功发送一条消息',
    content: '',
  },
  {
    type: 'success',
    title: '成功发送一条消息',
    content: '',
  },
])
const message = (type: string) => {
  Toast[type]({ text: '愿所有相遇都不会被辜负' })
}

const d = ref('2022-12-12')

const open = (type) => {
  YunNotification[type]({
    title: '通知',
    content: '这是一条重要的通知！！！',
  })
}
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

<script lang="ts">
export default {
  name: 'Main',
}
</script>

<style lang="scss" scoped>
.popover-body {
  padding: 15px;
}

.home-wrapper {
  overflow: hidden;
  width: 100%;
  perspective: 800;
  -webkit-perspective: 800;
  .startbox {
    position: fixed;
    left: 50px;
    top: 114px;
    z-index: 99;
    animation: start 3s ease;
    animation-fill-mode: forwards;
    animation-delay: 0.5s;
    opacity: 0;
    .slogan {
      display: flex;
      font-size: 50px;
      font-weight: 900;
      cursor: pointer;
      .dm {
        width: 50px;
        overflow: hidden;
        .text {
          display: flex;
          transition: all 0.5s ease;
        }
      }
    }
    .slogan:hover {
      .text {
        transform: translateX(-100%);
      }
    }
  }
  .home {
    min-height: 100vh;
    animation: demo 3s ease;
    transform: scale(1) rotateX(0deg) rotateY(0deg);
    animation-fill-mode: forwards;
    animation-delay: 0.5s;
    opacity: 0;
    .item {
      flex-shrink: 0;
      width: 440px;
      height: calc(100vh - 70px);
    }
  }
  @keyframes demo {
    from {
      opacity: 0;
      transform: scale(0.8) rotateX(0deg) rotateY(0deg);
    }
    to {
      opacity: 1;
      transform: scale(1.2) rotateX(15deg) rotateY(-15deg);
    }
  }
  @keyframes start {
    from {
      opacity: 0;
      transform: translateY(15%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
}
@media (max-width: 767px) {
  .home-wrapper {
    .startbox {
      left: 50%;
      top: 25px;
      text-align: center;
      white-space: nowrap;
    }
    @keyframes start {
      from {
        opacity: 0;
        transform: translate(-50%, 100%);
      }
      to {
        opacity: 1;
        transform: translate(-50%, 50%);
      }
    }
    @keyframes demo {
      from {
        opacity: 0;
        transform: scale(0.3) translate(-320px, 200px) rotateX(0deg) rotateY(0deg);
      }
      to {
        opacity: 1;
        transform: scale(0.5) translate(-320px, 200px) rotateX(15deg) rotateY(-15deg);
      }
    }
    .home {
      .item {
        flex-shrink: 0;
        width: 300px;
        height: calc(100vh - 70px);
      }
    }
  }
}
.modal-body {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px;
  box-sizing: border-box;
}
</style>
