<template>
  <div class="fold-code" @mouseenter="enter" @mouseleave="leave">
    <div class="demo-wrapper">
      <component :is="component"></component>
    </div>
    <div class="per-wrapper">
      <div class="per-content" :style="{ height: height + 'px' }">
        <div class="per-desc"></div>
        <pre ref="codePer" class="language-html" v-html="html"></pre>
      </div>
      <div class="demo-block-control" @click="toggle">
        <svg class="down">
          <use :xlink:href="showCode === false ? '#icon-up' : '#icon-down'"></use>
        </svg>
        <transition name="fade">
          <span class="show-world" v-show="show">{{
            showCode === true ? '隐藏代码' : '显示代码'
          }}</span>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import 'prismjs'
const Prism = window.Prism
export default {
  name: 'CodePer',
  props: {
    component: {
      type: Object,
    },
  },
  setup(props, context) {
    const show = ref(false)
    const enter = () => {
      show.value = true
    }
    const leave = () => {
      show.value = false
    }
    return {
      show,
      enter,
      leave,
    }
  },
  computed: {
    showCode: function () {
      if (this.height === 0) {
        return false
      } else {
        return true
      }
    },
  },
  data() {
    return {
      html: '',
      height: 0,
      computedHeight: 0,
    }
  },
  mounted() {
    //由于打包后不支持
    //换成传入组件的形式
    this.html = Prism.highlight(
      this.component.__sourceCode,
      Prism.languages.javascript,
      'javascript'
    )
    this.$nextTick(() => {
      const { height } = this.$refs.codePer.getBoundingClientRect()
      this.computedHeight = height
    })
  },
  methods: {
    toggle() {
      if (this.height === 0) {
        this.height = this.computedHeight
      } else {
        this.height = 0
      }
    },
  },
}
</script>

<style lang="scss" scoped>
pre {
  margin: 0;
  background-color: #fafafa;
  font-size: 15px;
  padding: 18px 24px;
}
.demo-wrapper {
  padding: 24px;
  background-color: var(--yun-bgcolor-0);
}
.fold-code {
  border: 1px solid var(--yun-bgcolor-3);
  border-radius: 6px;
  transition: 300ms;
  &:hover {
    box-shadow:
      0 0 8px 0 var(--yun-bgcolor-0),
      0 2px 4px 0 var(--yun-bgcolor-1);
    .down {
      transform: translateX(-35px);
    }
  }
}
.per-wrapper {
  .per-content {
    background-color: var(--yun-bgcolor-1);
    overflow: hidden;
    height: 0;
    transition: height 0.2s;
  }
  .demo-block-control {
    border-top: 1px solid var(--yun-bgcolor-3);
    height: 44px;
    box-sizing: border-box;
    background-color: var(--yun-bgcolor-0);
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    text-align: center;
    margin-top: -1px;
    color: #bcc6d3;
    cursor: pointer;
    position: relative;
    text-align: center;
    left: 0;
    &:hover {
      color: #6adae2;
      background-color: var(--yun-bgcolor-1);
    }
    .down {
      width: 16px;
      height: 44px;
      fill: currentcolor;
      transition: all 0.3s;
    }
    .show-world {
      position: absolute;
      font-size: 16px;
      line-height: 44px;
      transition: all 0.3s;
      transform: translateX(-30px);
    }
  }
}
</style>
