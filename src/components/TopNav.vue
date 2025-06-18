<template>
  <div class="topnav">
    <div class="logo" @click="goHome">
      <svg aria-hidden="true" class="yun-icon">
        <use xlink:href="#icon-yun"></use>
      </svg>
      <h1><span>Y</span>un-ui Vue</h1>
    </div>
    <ul class="menu">
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/doc/avatar">组件</router-link>
      </li>
      <li class="get-started">
        <router-link to="/doc/get-started">指南</router-link>
      </li>
      <li>
        <a target="_blank" href="https://github.com/xixixiaoyu/vue3-yun-ui">
          <Icon size="36"> <LogoGithub /> </Icon
        ></a>
      </li>
      <li class="last">
        <Icon size="24">
          <span>
            <MoonOutline @click="changeMode('dark')" class="icon-mode-moon" />
            <SunnyOutline @click="changeMode('light')" class="icon-mode-sunny" />
          </span>
        </Icon>
      </li>
    </ul>
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-caidan"></use>
    </svg>
  </div>
</template>
<script setup>
import { inject, onMounted } from 'vue'
import { LogoGithub, MoonOutline, SunnyOutline } from '@vicons/ionicons5'
import { Icon } from '@vicons/utils'
import { useRoute, useRouter } from 'vue-router'
import { Toast } from '../lib/Directives'

const router = useRouter()
const route = useRoute()

defineProps({
  toggleMenuButtonVisible: {
    type: Boolean,
    default: false
  }
})

const menuVisible = inject('menuVisible') // get
const toggleMenu = () => {
  menuVisible.value = !menuVisible.value
}

const changeMode = mode => {
  if (mode == 'dark') {
    document.getElementsByTagName('html')[0].classList.add('yun-dark')
    localStorage.setItem('mode', 'dark')
  } else {
    document.getElementsByTagName('html')[0].classList.remove('yun-dark')
    localStorage.setItem('mode', 'light')
  }
}

const goHome = () => {
  if (route.name === 'home') {
    Toast.info({ text: '您已经在首页了 ~' })
  } else {
    router.push('/')
  }
}

onMounted(() => {
  changeMode(localStorage.getItem('mode') || 'light')
})
</script>

<style lang="scss" scoped>
$color: var(--yun-primary-color);

.topnav {
  display: flex;
  padding: 2px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;
  background-color: var(--yun-bgcolor-0);
  border-bottom: 1px solid var(--yun-bgcolor-2);
  > .logo {
    font-size: 30px;
    display: flex;
    max-width: 9em;
    margin-right: auto;
    vertical-align: middle;
    cursor: pointer;

    > h1 {
      color: $color;
      white-space: nowrap;
      > span {
        font-size: 32px;
        font-weight: 700;
        color: var(--yun-primary-color-hover);
        font-style: italic;
        margin-right: 2px;
      }
    }
    > svg {
      position: relative;
      top: 10px;
      left: 6px;
      margin-right: 8px;
      animation: movex 15s linear infinite alternate;
    }
    &:hover {
      animation-play-state: paused;
    }
  }

  > .menu {
    display: flex;
    align-items: center;
    white-space: nowrap;
    flex-wrap: nowrap;
    a,
    span {
      display: inline-flex;
      align-items: center;
      padding: 5px;
      opacity: 0.6;
      margin-right: 15px;
      transition: all 0.5s;
      color: var(--yun-text-color-1);
      cursor: pointer;
      svg {
        cursor: pointer;
      }
    }
    a:hover,
    span:hover,
    .menu-item:hover {
      opacity: 1;
    }
    > li.last {
      margin-right: 60px;
    }
    > li.get-started {
      margin-right: 12px;
    }
  }
  > .toggleAside {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    /* background: fade-out(black, 0.9); */
    &:active {
      background-color: #b8dceb;
    }
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
@keyframes movex {
  0% {
    transform: translateX(0);
  }
  55% {
    transform: translateX(-3px);
  }
  100% {
    transform: translateX(3px);
  }
}
.icon-mode-sunny {
  display: none;
}
.icon-mode-moon {
  display: block;
}
.yun-dark {
  .logo {
    .yun-icon {
      filter: invert(50%);
    }
  }
  .icon-mode-sunny {
    display: block;
  }
  .icon-mode-moon {
    display: none;
  }
}
</style>
