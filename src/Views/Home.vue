<template>
  <div class="home-container">
    <!-- <div class="topNav-wrapper"> -->
    <!-- <div class="banner">
        <h2 class="title"><span>Y</span>un-UI</h2>
        <h3>简约 轻巧 好用</h3>
        <p class="actions">
          <a href="https://github.com/xixixiaoyu/vue3-yun-ui" target="_blank">GitHub</a>
          <router-link to="/doc/get-started">开始</router-link>
        </p>
      </div>
    </div>
    <div class="content">
      <ul>
        <li v-for="item in contentList" :key="item.title">
          <Icon :name="item.iconName" class="icon" />
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </li>
      </ul>
    </div> -->
    <Topnav />
    <Main />
  </div>
</template>

<script>
import Topnav from '../components/Topnav.vue'
import Icon from '../lib/Icon/Icon.vue'
import Main from './Main.vue'
export default {
  components: { Topnav, Icon, Main },
  setup() {
    return {
      contentList: [
        {
          iconName: 'vue',
          title: 'Vue3',
          description: '使用了最新的 Vue3.2 setup 语法'
        },
        {
          iconName: 'vite',
          title: 'Vite3',
          description: '官网基于 Vite3.x 构建'
        },
        {
          iconName: 'ts',
          title: 'TypeScript',
          description: '源代码采用了 TypeScript 编写'
        },

        {
          iconName: 'gj',
          title: '文档完整',
          description: '所有组件拥有完整的使用文档及示例'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
$green: var(--yun-primary-color);
$border-radius: var(--yun-border-radius);
$color: var(--yun-primary-color-dark);
.topNav-wrapper {
  background: linear-gradient(
    145deg,
    var(--yun-primary-color-light),
    var(--yun-primary-color-light2)
  );
  clip-path: ellipse(80% 60% at 50% 40%);
  .topNav {
    background: transparent;
    border-bottom: none;
    box-shadow: none;
  }
  a {
    margin: 0 12px;
    background: var(--yun-primary-color);
    color: var(--yun-white-text-color);
    display: inline-block;
    padding: 12px 24px;
    border-radius: $border-radius;
    font-weight: 500;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      text-decoration: none;
      background: var(--yun-primary-color-hover);
      transform: translateY(-2px);
      box-shadow: var(--yun-box-shadow);
    }
  }
}

.banner {
  padding: 100px 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: var(--yun-text-color-0-invert);
  > .actions {
    margin-top: 40px;
    padding: 8px 0;
    display: flex;
    justify-content: center;
    a {
      display: flex;
      align-items: center;
      margin-right: 16px;
    }
    .icon {
      margin-left: 4px;
    }
  }
}
.content {
  margin: 64px auto;
  padding: 0 16px;
  @media (min-width: 500px) {
    width: 500px;
    > ul {
      > li {
        width: 100%;
      }
    }
  }
  @media (min-width: 800px) {
    width: 800px;
    > ul {
      > li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    > ul {
      > li {
        width: 25%;
      }
    }
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      margin: 16px 0;
      display: grid;
      justify-content: flex-start;
      align-content: space-between;
      grid-template-areas:
        'icon title'
        'icon text';
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr 1fr;
      color: var(--yun-text-color-1);
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text;
      }
    }
  }
}
</style>
