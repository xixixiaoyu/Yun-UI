<template>
  <div class="yun-breadcrumb">
    <div
      v-for="(item, index) in options"
      :key="index"
      class="yun-breadcrumb-item"
      :class="{ 'yun-breadcrumb-active': item.active }"
    >
      <span :class="{ 'yun-breadcrumb-isPath': !!item.to }" @click="yunTo(item.to)">{{
        item.label
      }}</span>
      <div v-if="index != options.length - 1" class="yun-breadcrumb-parting">
        <svg
          v-if="iconType == 'sprit'"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          class="arco-icon arco-icon-oblique-line"
          stroke-width="4"
          stroke-linecap="butt"
          stroke-linejoin="miter"
        >
          <path d="M29.506 6.502 18.493 41.498"></path>
        </svg>

        <svg
          v-if="iconType == 'shoulder'"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          class="arco-icon arco-icon-right"
          stroke-width="4"
          stroke-linecap="butt"
          stroke-linejoin="miter"
        >
          <path d="m16 39.513 15.556-15.557L16 8.4"></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { useToPage } from '../hooks/index'

const yunTo = useToPage()
type Options = {
  label: string
  to: string
  active: boolean
}
defineProps({
  options: {
    type: Array as PropType<Options[]>,
    default() {
      return []
    },
  },
  iconType: {
    type: String,
    default() {
      return 'sprit' // shoulder ｜ sprit
    },
  },
})
</script>

<script lang="ts">
export default {
  name: 'BreadCrumb',
}
</script>

<style lang="scss" scoped>
.yun-breadcrumb {
  display: inline-flex;
  align-items: center;
  .yun-breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    color: var(--yun-text-color-7);
    user-select: none;
    span {
      cursor: default;
      padding: 2px 4px;
      border-radius: 2px;
    }
    .yun-breadcrumb-isPath:hover {
      cursor: pointer;
      background-color: var(--yun-bgcolor-2);
    }
  }
  .yun-breadcrumb-active {
    color: var(--yun-text-color-2);
    font-weight: 500;
  }
  .yun-breadcrumb-parting {
    display: inline-flex;
    align-items: center;
    svg {
      margin: 0px 5px;
      height: 1em;
      color: var(--yun-text-color-5);
      opacity: 0.3;
    }
  }
}
</style>
