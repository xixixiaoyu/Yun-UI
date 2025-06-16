<template>
  <div class="app-header-sticky" :class="{ show: y >= 78 }">
    <div class="container" v-show="y >= 78">
      <component :is="component" />
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, inject } from 'vue'
import { useWindowScroll } from '@vueuse/core'
export default {
  name: 'AppHeaderSticky',
  props: {
    component: {
      type: Object,
      require: false,
    },
  },
  setup() {
    // const y = ref(0);
    // onMounted(() => {
    //   window.onscroll = () => {
    //     const scrollTop = document.documentElement.scrollTop;
    //     y.value = scrollTop;
    //   };
    // });
    const menuVisible = inject('menuVisible')
    const isOffset = menuVisible.value ? '160px' : '0'
    const { y } = useWindowScroll()
    return { y, isOffset }
  },
}
</script>

<style lang="scss">
.app-header-sticky {
  width: 100%;
  // height: 80px;
  position: fixed;
  left: v-bind(isOffset);
  top: 53px;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  transform: translateY(-100%);
  opacity: 0;
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid #27ba9b;
    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;
      &:hover {
        color: #27ba9b;
      }
    }
  }
}
</style>
