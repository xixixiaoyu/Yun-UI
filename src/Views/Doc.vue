<template>
  <div class="layout">
    <Teleport to="body">
      <div class="aside-overlay" v-show="menuVisible && isPhone" @click="closeOverlay"></div>
    </Teleport>
    <Topnav class="nav" :toggleMenuButtonVisible="true" />
    <div class="content">
      <aside :class="{ open: menuVisible }">
        <h2>组件</h2>
        <ol class="Cpn">
          <li class="title">
            <span>基础</span>
          </li>
          <li>
            <router-link to="/doc/avatar">Avatar 头像</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/doc/tag">Tag 标签</router-link>
          </li>
          <li>
            <router-link to="/doc/badge">Badge 徽章</router-link>
          </li>
          <li>
            <router-link to="/doc/flex">Flex 弹性布局</router-link>
          </li>
          <li>
            <router-link to="/doc/grid">Grid 网格布局</router-link>
          </li>
          <li>
            <router-link to="/doc/layout">Layout 页面布局</router-link>
          </li>
          <li>
            <router-link to="/doc/title">Title 标题</router-link>
          </li>
          <li>
            <router-link to="/doc/mark">Mark 标记</router-link>
          </li>
          <li>
            <router-link to="/doc/color">Color 色彩</router-link>
          </li>
          <li>
            <router-link to="/doc/icon">Icon 图标</router-link>
          </li>

          <li class="title">
            <span>表单</span>
          </li>
          <li>
            <router-link to="/doc/formItem">Form 表单</router-link>
          </li>
          <li>
            <router-link to="/doc/switch">Switch 开关</router-link>
          </li>
          <li>
            <router-link to="/doc/input">Input 单行和多行输入框</router-link>
          </li>
          <li>
            <router-link to="/doc/radio">Radio 单选框</router-link>
          </li>
          <li>
            <router-link to="/doc/checkbox">Checkbox 复选框</router-link>
          </li>
          <li>
            <router-link to="/doc/inputPro">InputPro 高级输入框</router-link>
          </li>
          <li>
            <router-link to="/doc/inputTag">InputTag 标签输入框</router-link>
          </li>
          <li>
            <router-link to="/doc/select">Select 下拉选择框</router-link>
          </li>
          <li>
            <router-link to="/doc/datePicker">DatePicker 日期选择框</router-link>
          </li>

          <li class="title">
            <span>反馈</span>
          </li>
          <li>
            <router-link to="/doc/alert">Alert 警告提醒</router-link>
          </li>
          <li>
            <router-link to="/doc/notification">Notification 通知</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 对话框</router-link>
          </li>
          <li>
            <router-link to="/doc/modal">Modal 模态框</router-link>
          </li>
          <li>
            <router-link to="/doc/toast">Toast 全局提示</router-link>
          </li>
          <li>
            <router-link to="/doc/drawer">Drawer 抽屉</router-link>
          </li>
          <li>
            <router-link to="/doc/dropdown">Dropdown 下拉菜单</router-link>
          </li>
          <li>
            <router-link to="/doc/popover">Popover 信息气泡</router-link>
          </li>
          <li>
            <router-link to="/doc/tooltip">Tooltip 文字提示</router-link>
          </li>
          <li>
            <router-link to="/doc/popok">Popok 确认气泡</router-link>
          </li>
          <li>
            <router-link to="/doc/loading">Loading 加载</router-link>
          </li>

          <li class="title">
            <span>导航</span>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 选项卡</router-link>
          </li>
          <li>
            <router-link to="/doc/backtop">BackTop 回到顶部</router-link>
          </li>
          <li>
            <router-link to="/doc/breadcrumb">Breadcrumb 面包屑</router-link>
          </li>
          <li>
            <router-link to="/doc/step">Steps 步骤条</router-link>
          </li>
          <li>
            <router-link to="/doc/sticky">Sticky 粘性</router-link>
          </li>

          <li class="title">
            <span>数据展示</span>
          </li>
          <li>
            <router-link to="/doc/table">Table 表格</router-link>
          </li>
          <li>
            <router-link to="/doc/comment">Comment 评论</router-link>
          </li>
          <li>
            <router-link to="/doc/card">Card 卡片</router-link>
          </li>
          <li>
            <router-link to="/doc/carousel">Carousel 轮播图</router-link>
          </li>
          <li>
            <router-link to="/doc/pagination">Pagination 分页器</router-link>
          </li>
          <li>
            <router-link to="/doc/infinite">InfiniteLoaing 无限加载</router-link>
          </li>
          <li>
            <router-link to="/doc/skeleton">Skeleton 骨架屏</router-link>
          </li>
          <li>
            <router-link to="/doc/city">City 城市选择</router-link>
          </li>

          <li class="title">
            <span>其他</span>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Topnav from '../components/TopNav.vue'
import { inject, computed } from 'vue'
export default {
  components: { Topnav },
  setup() {
    const isPhone = computed(() => document.documentElement.clientWidth < 500)
    const menuVisible = inject('menuVisible') // get
    const closeOverlay = () => {
      menuVisible.value = false
    }

    return { menuVisible, closeOverlay, isPhone }
  },
}
</script>

<style lang="scss" scoped>
$offsetLeftWidth: 250px;
$asideIndex: 9999;
.aside-overlay {
  position: fixed;
  top: 0;
  left: $offsetLeftWidth;
  right: 0;
  bottom: 0;
  z-index: $asideIndex;
}

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-size: 14px;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;

    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 36px;
    padding-left: 140px;
    padding-right: 60px;
    margin-top: -8px;
    background: var(--yun-bgcolor-1);
    @media (max-width: 500px) {
      padding: 0 20px;
    }
  }
}
aside {
  transform: translateX(-$offsetLeftWidth);
  overflow: auto;
  background: var(--yun-bgcolor-0);
  width: $offsetLeftWidth;
  padding: 16px 0;
  position: fixed;
  top: 53px;
  left: 0;
  padding-bottom: 70px;
  height: 100%;
  z-index: $asideIndex;
  transition: 250ms;
  // box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

  .title {
    margin: 22px 7px 18px;
    padding: 5px 20px;
    font-size: 14px;
    font-weight: 400;
    height: 20px;
    color: var(--yun-text-color-8);
    user-select: none;
    white-space: nowrap;
  }

  > h2 {
    margin-bottom: 6px;
    padding: 0 20px;
    font-weight: bold;
    color: var(--yun-text-color-2);
    & ~ h2 {
      padding-top: 30px;
    }
  }

  > ol {
    > li {
      white-space: nowrap;
      text-align: left;
      text-indent: 12px;
      padding: 0 14px;
      > a {
        display: block;
        padding: 9px 6px;
        padding-left: 14px;
        text-decoration: none;
        border-radius: 4px;
        color: var(--yun-text-color-5);
        &:not(.router-link-active):hover {
          background-color: #f5f5f5;
          color: #000;
        }
      }
      .router-link-active {
        background-color: var(--active-theme-color);
        color: #fff;
        // background: #fff;
        // color: #36b1bf;
        // text-decoration: underline;
        // font-weight: 600;
      }
    }
  }
}

main {
  overflow: auto;
}

aside.open {
  transform: translateX(0);
}

.intro {
  line-height: 1.6;
}
</style>
