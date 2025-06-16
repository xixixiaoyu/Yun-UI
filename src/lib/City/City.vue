<template>
  <div class="yun-city" ref="target">
    <div class="select" @click="toggle()" :class="{ active: visible }">
      <span v-if="!fullLocation" class="placeholder">{{ placeholder }}</span>
      <span v-else class="value">{{ fullLocation }}</span>
      <Icon name="angle-down" class="angle-down" />
    </div>
    <div class="option" v-if="visible">
      <div v-if="loading" class="loading"></div>
      <template v-else>
        <span
          class="ellipsis"
          @click="changeItem(item)"
          v-for="item in currList"
          :key="item.code"
          >{{ item.name }}</span
        >
      </template>
    </div>
  </div>
</template>
<script>
import { computed, reactive, ref } from 'vue'
import Icon from '../Icon/Icon.vue'
import { onClickOutside } from '@vueuse/core'
import axios from 'axios'
export default {
  name: 'YunCity',
  components: {
    Icon,
  },
  props: {
    fullLocation: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      defulat: '请选择配送地址',
    },
  },
  setup(props, { emit }) {
    // 定义选择的 省市区 数据
    const changeResult = reactive({
      provinceCode: '',
      provinceName: '',
      cityCode: '',
      cityName: '',
      countyCode: '',
      countyName: '',
      fullLocation: '',
    })

    // 显示隐藏数据
    const visible = ref(false)

    // 所有省市区数据
    const allCityData = ref([])

    // 正在加载数据
    const loading = ref(false)

    // 提供打开和关闭函数
    const open = () => {
      visible.value = true
      // 获取地区数据
      loading.value = true
      getCityData().then((data) => {
        allCityData.value = data
        loading.value = false
      })
      // 清空之前选择
      for (const key in changeResult) {
        changeResult[key] = ''
      }
    }

    // 关闭的函数
    const close = () => {
      visible.value = false
    }

    // 提供一个切换函数给select使用
    const toggle = () => {
      visible.value ? close() : open()
    }

    // 实现点击组件外部元素进行关闭操作
    const target = ref(null)
    onClickOutside(target, () => {
      // 参数1：监听那个元素
      // 参数2：点击了该元素外的其他地方触发的函数
      close()
    })

    // 当你点击按钮的时候记录
    const changeItem = (item) => {
      if (item.level === 0) {
        // 省
        changeResult.provinceCode = item.code
        changeResult.provinceName = item.name
      }
      if (item.level === 1) {
        // 市
        changeResult.cityCode = item.code
        changeResult.cityName = item.name
      }
      if (item.level === 2) {
        // 地区
        changeResult.countyCode = item.code
        changeResult.countyName = item.name
        // 完整路径
        changeResult.fullLocation = `${changeResult.provinceName} ${changeResult.cityName} ${changeResult.countyName}`
        // 这是最后一级，选完了，关闭对话框，通知父组件数据
        close()
        emit('change', changeResult)
      }
    }

    // 实现计算属性：获取当前显示的地区数组
    const currList = computed(() => {
      // 默认省一级
      let list = allCityData.value
      // 可能：市一级
      if (changeResult.provinceCode && changeResult.provinceName) {
        list = list.find((p) => p.code === changeResult.provinceCode).areaList
      }
      // 可能：县地区一级
      if (changeResult.cityCode && changeResult.cityName) {
        list = list.find((c) => c.code === changeResult.cityCode).areaList
      }
      return list
    })

    return { visible, toggle, target, loading, currList, changeItem }
  },
}
// 获取省市区数据函数
const getCityData = () => {
  // 数据：https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json
  // 1. 当本地没有缓存，发请求获取数据
  // 2. 当本地缓存，取出本地数据
  // 返回promise在then获取数据，这里可能是异步操作可能是同步操作
  return new Promise((resolve, reject) => {
    // 约定：数据存储在window上的cityData字段
    if (window.cityData) {
      resolve(window.cityData)
    } else {
      const url = 'https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json'
      axios.get(url).then((res) => {
        // 缓存
        window.cityData = res.data
        resolve(res.data)
      })
    }
  })
}
</script>
<style lang="scss" scoped>
.yun-city {
  display: inline-block;
  position: relative;
  .angle-down {
    opacity: 0.5;
    width: 25px;
    height: 25px;
    margin-top: 12px;
    margin-left: 5px;
  }
  .select {
    display: flex;
    height: 50px;
    line-height: 48px;
    border: 1px solid #e4e4e4;
    padding: 0 10px;
    justify-content: space-between;
    cursor: pointer;
    &.active {
      background: #fff;
    }
    .placeholder {
      color: #ccc;
    }
    .value {
      color: #666;
      font-size: 12px;
    }
    i {
      color: #ccc;
      font-size: 20px;
      transform: rotate(90deg);
    }
  }
  .option {
    width: 542px;
    border: 1px solid #e4e4e4;
    position: absolute;
    left: 0;
    top: 50px;
    background: #fff;
    min-height: 30px;
    line-height: 30px;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    z-index: var(--yun-mask-zIndex);
    > span {
      width: 130px;
      text-align: center;
      cursor: pointer;
      border-radius: 4px;
      padding: 0 3px;
      &:hover {
        background: #f5f5f5;
      }
    }
    .loading {
      height: 290px;
      width: 100%;
      background: url('https://s1.ax1x.com/2022/03/19/qEraB4.gif') no-repeat center;
    }
  }
}
</style>
