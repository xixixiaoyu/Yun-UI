<template>
  <div class="yun-infinite-loading" ref="target">
    <div class="loading" v-if="loading">
      <span class="img"></span>
      <span class="text">正在加载...</span>
    </div>
    <div class="none" v-if="finished">
      <span class="img"></span>
      <span class="text">亲，没有更多了</span>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
export default {
  name: 'YunInfiniteLoading',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    finished: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const target = ref(null)
    // 监听target是否进入可视区
    useIntersectionObserver(
      target,
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          // console.log("进入可视区了");
          // 触发加载事件条件：请求加载完成，数据加载完毕
          if (!props.loading && !props.finished) {
            emit('infinite')
          }
        }
      },
      {
        threshold: 0,
      }
    )
    return { target }
  },
}
</script>
<style lang="scss">
.yun-infinite-loading {
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    .img {
      width: 50px;
      height: 50px;
      background: url('https://s1.ax1x.com/2022/03/19/qEraB4.gif') no-repeat center / contain;
    }
    .text {
      color: #999;
      font-size: 16px;
    }
  }
  .none {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    .img {
      width: 200px;
      height: 134px;
      background: url('https://s1.ax1x.com/2022/03/20/qZCLuR.png') no-repeat center / contain;
    }
    .text {
      color: #999;
      font-size: 16px;
    }
  }
}
</style>
