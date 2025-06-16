<template>
  <div
    class="yun-pagination"
    :class="{
      'yun-pagination-round': round,
    }"
  >
    <Flex class="yun-pagination-control" gap="5px">
      <Flex class="yun-pagination-page-box" gap="5px">
        <Icon
          size="14"
          class="yun-pagination-page-btn yun-pagination-control-btn"
          @click="changePage('prve', 1)"
        >
          <ChevronBackOutline />
        </Icon>
        <div
          v-show="pageNum - 1 > pageShowSize && maxLen > pageShowSize * 2 + 7"
          class="yun-pagination-page-btn"
          @click="changePage(false, 1)"
        >
          1
        </div>
        <Icon
          v-show="
            pageNum - 1 > pageShowSize && maxLen > pageShowSize * 2 + 7 && pageInterval[0] != 1 + 1
          "
          size="14"
          class="yun-pagination-page-btn yun-pagination-control-btn"
          @click="changePage('prve', pageShowSize * 2)"
        >
          <EllipsisHorizontal />
        </Icon>

        <div
          v-for="(item, index) in pageInterval"
          :key="index"
          class="yun-pagination-page-btn"
          :class="{ active: item == pageNum }"
          @click="changePage(false, item)"
        >
          {{ item }}
        </div>
        <Icon
          v-show="
            pageNum < maxLen - pageShowSize &&
            maxLen > pageShowSize * 2 + 7 &&
            pageInterval[pageInterval.length - 1] + 1 != maxLen
          "
          size="14"
          class="yun-pagination-page-btn yun-pagination-control-btn"
          @click="changePage('next', pageShowSize * 2)"
        >
          <EllipsisHorizontal />
        </Icon>
        <div
          v-show="pageNum < maxLen - pageShowSize && maxLen > pageShowSize * 2 + 7"
          class="yun-pagination-page-btn"
          @click="changePage(false, maxLen)"
        >
          {{ maxLen }}
        </div>
        <Icon
          size="14"
          class="yun-pagination-page-btn yun-pagination-control-btn"
          @click="changePage('next', 1)"
        >
          <ChevronForwardOutline />
        </Icon>
      </Flex>
      <InputPro
        v-model="pageSizebackup"
        size="small"
        align="center"
        placeholder=""
        :arrow="false"
        :options="pageSizeOptions"
        auto-width
        @blur="checkPageSize"
        @change="checkPageSize"
        disabled
      >
        <template #right>
          <div class="page-label">/ 页</div>
        </template>
      </InputPro>
      <InputPro
        v-model="pageNumbackup"
        style="margin-left: 20px"
        size="small"
        align="center"
        placeholder=""
        :arrow="false"
        auto-width
        @blur="checkPageNum"
        @change="checkPageNum"
      >
        <template #left>
          <div class="page-label">跳转至</div>
        </template>
        <template #right>
          <div class="page-label">页</div>
        </template>
      </InputPro>
    </Flex>
  </div>
</template>

<script lang="ts" setup>
import { paginationProps } from './props'
import { ref, computed, watch } from 'vue'
import { ChevronForwardOutline, ChevronBackOutline, EllipsisHorizontal } from '@vicons/ionicons5'
import { Icon } from '@vicons/utils'
const props = defineProps(paginationProps)
const generateArray = (start, end) => {
  return Array.from(new Array(end + 1).keys()).slice(start)
}
const pageNum = ref(props.pageNum)
const pageSize = ref(props.pageSize)
watch(
  () => props.pageNum,
  (v) => {
    changePage(false, v)
  }
)
watch(
  () => props.pageSize,
  (v) => {
    pageSize.value = v
  }
)
const maxLen = computed(() => {
  return Math.ceil(props.total / pageSize.value)
})
const pageInterval = computed(() => {
  let start = pageNum.value - props.pageShowSize
  let end = pageNum.value + props.pageShowSize
  if (pageNum.value <= props.pageShowSize) {
    start = 1
    end = props.pageShowSize * 2
  }
  if (pageNum.value >= maxLen.value - props.pageShowSize) {
    start = maxLen.value - props.pageShowSize * 2
    end = maxLen.value
  }
  if (start <= 0) {
    start = 1
  }
  if (maxLen.value <= props.pageShowSize * 2 + 7) {
    start = 1
    end = maxLen.value
  }
  if (end == 1 && props.total > pageSize.value) {
    end += 1
  }
  let pageArr = generateArray(start, end)
  if (pageArr.length < 1) {
    pageArr = [1]
  }
  return pageArr
})
const emit = defineEmits(['update:pageNum', 'update:pageSize', 'change'])
const changePage = (type, num) => {
  if (type == 'next') {
    pageNum.value += num
  } else if (type == 'prve') {
    pageNum.value -= num
  } else {
    pageNum.value = num
  }
  if (pageNum.value < 1) {
    pageNum.value = 1
  } else if (pageNum.value > maxLen.value) {
    pageNum.value = maxLen.value
  }
  pageNumbackup.value = pageNum.value
  emit('change', {
    pageNum: pageNum.value,
    pageSize: pageSize.value,
    total: props.total,
    pageShowSize: props.pageShowSize,
  })
  emit('update:pageNum', pageNum.value)
  emit('update:pageSize', pageSize.value)
}
const pageNumbackup = ref(1)
const pageSizebackup = ref(20)
const checkPageNum = (e) => {
  e = String(e)
  pageNumbackup.value = Number(e.replace(/[^\d]/g, ''))
  changePage(false, pageNumbackup.value)
}
const checkPageSize = (e) => {
  e = String(e)
  pageSizebackup.value = Number(e.replace(/[^\d]/g, ''))
  if (pageSizebackup.value < 1) {
    pageSizebackup.value = 1
  }
  if (pageSizebackup.value > props.total) {
    pageSizebackup.value = props.total
  }
  pageSize.value = pageSizebackup.value
  changePage(false, pageNumbackup.value)
}
</script>

<script lang="ts">
export default {
  name: 'Pagination',
}
</script>

<style lang="scss">
.yun-pagination {
  display: inline-block;
  box-sizing: border-box;
  height: 40px;
  border-radius: var(--yun-form-border-radius);
  user-select: none;
  font-size: 14px;
  .yun-pagination-control {
    height: 100%;
    color: var(--yun-text-color-7);
  }
  .yun-pagination-page-box {
    width: auto;
    position: relative;
    height: 100%;
    .yun-pagination-page-btn {
      position: relative;
      z-index: 2;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 26px;
      min-width: 26px;
      padding: 0px 4px;
      box-sizing: border-box;
      border-radius: var(--yun-form-border-radius);
      text-align: center;
      cursor: pointer;
    }
    .yun-pagination-page-btn:hover {
      background-color: var(--yun-primary-color-light);
      color: var(--yun-primary-color-dark);
    }
    .active {
      background-color: var(--yun-primary-color);
      color: var(--yun-white-text-color);
    }
    .active:hover {
      background-color: var(--yun-primary-color);
      color: var(--yun-white-text-color);
    }
    .yun-pagination-control-btn {
      padding: 0px;
    }
  }
  .page-label {
    white-space: nowrap;
    padding: 0px 5px;
  }
}
.yun-pagination-round {
  .yun-pagination-page-box {
    .yun-pagination-page-btn {
      border-radius: 30px;
    }
  }
}
</style>
