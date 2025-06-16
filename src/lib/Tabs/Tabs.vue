<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">
      <div
        class="gulu-tabs-nav-item"
        v-for="(tab, index) in subElements"
        :key="index"
        :class="{ selected: tab.title === selected, 'yun-tab-disabled': tab.disabled }"
        @click="select(tab.title)"
        :ref="
          (el) => {
            if (tab.title === selected) selectedItem = el
          }
        "
      >
        {{ tab.title }}
      </div>
      <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="gulu-tabs-content">
      <component class="gulu-tabs-content-item" :is="current" :key="current.props.title" />
    </div>
  </div>
</template>

<script>
import { computed, ref, watchEffect } from 'vue'
import Tab from './Tab.vue'
export default {
  name: 'YunTabs',
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const selectedItem = ref(null)
    const indicator = ref(null)
    const container = ref(null)

    watchEffect(
      () => {
        const { width } = selectedItem.value.getBoundingClientRect()
        indicator.value.style.width = width + 'px'
        const { left: left1 } = container.value.getBoundingClientRect()
        const { left: left2 } = selectedItem.value.getBoundingClientRect()
        const left = left2 - left1
        indicator.value.style.left = left + 'px'
      },
      { flush: 'post' }
    )

    const defaults = context?.slots?.default()

    const subElements = defaults.map((tag) => ({
      title: tag.props.title,
      disabled: tag.props.disabled === true || tag.props.disabled === '',
    }))

    defaults.forEach((tag) => {
      if (tag.type.name !== Tab.name) {
        throw new Error('Tabs 子标签必须是 Tab')
      }
    })

    const current = computed(() => {
      return defaults.find((tag) => tag.props.title === props.selected)
    })

    const select = (title) => {
      context.emit('update:selected', title)
    }
    return {
      defaults,
      select,
      selectedItem,
      indicator,
      container,
      current,
      subElements,
    }
  },
}
</script>

<style lang="scss">
@import '../style/common.scss';

$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $theme;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $theme;
      left: 0;
      bottom: -1px;
      width: 0;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}

.gulu-tabs-nav-item.yun-tab-disabled {
  user-select: none;
  color: #999;
  pointer-events: none;
}
</style>
