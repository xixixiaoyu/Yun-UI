<template>
  <div class="xtx-steps">
    <div
      v-for="(item, i) in stepItems"
      :key="i"
      :class="{ active: i < active, 'xtx-steps-item': true }"
    >
      <div class="step">
        <span>{{ i + 1 }}</span>
      </div>
      <div class="title">{{ item.title }}</div>
      <div class="desc">{{ item.desc }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'

interface Props {
  active?: number
}

const props = withDefaults(defineProps<Props>(), {
  active: 1,
})

const slots = useSlots()

const stepItems = computed(() => {
  const items = slots.default?.() || []
  const dynamicItems: any[] = []

  items.forEach((item) => {
    if (item.type?.name === 'YunStepsItem') {
      dynamicItems.push(item.props)
    } else if (item.children) {
      item.children.forEach((child: any) => {
        if (child.props) {
          dynamicItems.push(child.props)
        }
      })
    }
  })

  return dynamicItems
})
</script>

<script lang="ts">
export default {
  name: 'YunSteps',
}
</script>

<style lang="scss">
.xtx-steps {
  display: flex;
  text-align: center;
  &-item {
    flex: 1;
    &:first-child {
      .step {
        &::before {
          display: none;
        }
      }
    }
    &:last-child {
      .step {
        &::after {
          display: none;
        }
      }
    }
    &.active {
      .step {
        > span {
          border-color: #27ba9b;
          background: #27ba9b;
          color: #fff;
        }
        &::before,
        &::after {
          background: #27ba9b;
        }
      }
      .title {
        color: #27ba9b;
      }
    }
    .step {
      position: relative;
      > span {
        width: 48px;
        height: 48px;
        font-size: 28px;
        border: 2px solid #e4e4e4;
        background: #fff;
        border-radius: 50%;
        line-height: 44px;
        color: #ccc;
        display: inline-block;
        position: relative;
        z-index: 1;
      }
      &::after,
      &::before {
        content: '';
        position: absolute;
        top: 23px;
        width: 50%;
        height: 2px;
        background: #e4e4e4;
      }
      &::before {
        left: 0;
      }
      &::after {
        right: 0;
      }
    }
    .title {
      color: #999;
      padding-top: 12px;
    }
    .desc {
      font-size: 12px;
      color: #999;
      padding-top: 6px;
    }
  }
}
</style>
