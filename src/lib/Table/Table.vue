<template>
  <div
    ref="yunTableRef"
    class="yun-table"
    :style="`max-height:${maxHeight};width:${width};overflow-x: auto;
      overflow-y:${maxHeight ? 'auto' : 'hidden'};`"
    @scroll="throttle($event, 200)"
  >
    <div class="yun-table-head">
      <div
        class="yun-table-tr"
        :style="`width:${
          yunTableRef?.scrollWidth > yunTableRef?.offsetWidth ? yunTableRef?.scrollWidth : ''
        }px`"
      >
        <Flex
          v-for="(column, index) in columns"
          :key="`columns${index}`"
          class="yun-table-td"
          :class="{
            'yun-table-left-subline': index == leftIndex,
            'yun-table-right-subline': index == rightIndex,
            'yun-table-left-subline-show': index == leftIndex && isShowLeftLine,
            'yun-table-right-subline-show': index == rightIndex && isShowRightLine,
          }"
          :style="`
                      ${column.columnStyle ? column.columnStyle : ''};
                      ${setSticky(column)};   
                      width:${column.width != 'auto' ? column.width : niceWidth || '100px'};
                      `"
          :x="column.x || 'start'"
          :y="column.y"
        >
          {{ column.title }}
        </Flex>
      </div>
    </div>
    <div ref="yunTableBodyRef" class="yun-table-body">
      <div
        v-for="(row, i) in data"
        :key="`data${i}`"
        class="yun-table-tr"
        :style="`width:${
          yunTableRef?.scrollWidth > yunTableRef?.offsetWidth ? yunTableRef?.scrollWidth : ''
        }px`"
      >
        <Flex
          v-for="(column, j) in columns"
          :key="`col${j}`"
          class="yun-table-td"
          :class="{
            'yun-table-left-subline': j == leftIndex,
            'yun-table-right-subline': j == rightIndex,
            'yun-table-left-subline-show': j == leftIndex && isShowLeftLine,
            'yun-table-right-subline-show': j == rightIndex && isShowRightLine,
          }"
          :style="`  
                      ${column.columnStyle ? column.columnStyle : ''};
                      ${row.rowStyle};
                      ${row.tdStyle?.[column.field] ? row.tdStyle[column.field] : ''};
                      ${setSticky(column)};
                      width:${column.width != 'auto' ? column.width : niceWidth || '100px'};
                      `"
          :x="column.x || 'start'"
          :y="column.y"
        >
          <!-- 模板 -->
          <slot :name="column.field" :row="row" :column="column" />
        </Flex>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { tableProps } from './props'
import { ref, onMounted } from 'vue'
import Flex from '../Flex/Flex.vue'
const props = defineProps(tableProps)
const yunTableRef = ref<HTMLElement | any>(null) // 表格的 ref
const yunTableBodyRef = ref<HTMLElement | any>(null) // 表格的 body ref
// 设置左右线
const leftIndex = ref<number>(-1)
const rightIndex = ref<number>(-1)
// 设置展示线 过渡
const isShowLeftLine = ref(false)
const isShowRightLine = ref(false)

const setSubLine = () => {
  props.columns.map((e, i) => {
    if (e.sticky == 'left') {
      leftIndex.value = i
    } else if (e.sticky == 'right' && rightIndex.value == -1) {
      rightIndex.value = i
      if (yunTableRef.value!.scrollWidth != yunTableRef.value!.offsetWidth) {
        isShowRightLine.value = true
      }
    }
  })
}

const setShowLine = (e: any) => {
  if (e.target.scrollWidth != e.target.offsetWidth) {
    isShowLeftLine.value = e.target.scrollLeft >= 5
    isShowRightLine.value = e.target.scrollLeft <= e.target.scrollWidth - e.target.offsetWidth - 5
  }
}

// 设置粘住左右
const setSticky = (column: any) => {
  if (column.sticky == 'left') {
    return `position: sticky;left:${column.offsetX || '0px'};z-index:1;`
  } else if (column.sticky == 'right') {
    return `position: sticky;right:${column.offsetX || '0px'};z-index:1;`
  }
}

// 设置单元格宽度
const niceWidth = ref<string>('')
const setWidth = () => {
  const sw = yunTableRef.value!.scrollWidth
  const w = yunTableRef.value!.offsetWidth
  if (w >= sw) {
    const autoLen = props.columns.filter((e) => e.width == 'auto').length
    let wTotal = 0
    props.columns
      .filter((e) => e.width != 'auto')
      .map((e) => {
        wTotal += parseFloat(e.width)
      })
    niceWidth.value = `${(w - wTotal) / autoLen - 4}px`
  }
}

// 防抖
let lock = false
const throttle = (e: any, delay: any) => {
  if (leftIndex.value == -1 && rightIndex.value == -1) {
    return
  }
  if (!lock) {
    // 判断是否锁
    lock = true // 锁住
    setTimeout(() => {
      setShowLine(e)
      lock = false // 开锁
    }, delay)
  }
}
onMounted(() => {
  setWidth()
  // 设置固定单元格的阴影
  setSubLine()
})
</script>

<script lang="ts">
export default {
  name: 'Table',
}
</script>

<style lang="scss">
.yun-table {
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  font-size: 14px;
  border: var(--yun-form-border-width) var(--yun-form-border-color) solid;
  border-radius: var(--yun-form-border-radius);
  .yun-table-head {
    position: sticky;
    top: 0;
    z-index: 9;
    display: flex;
    align-items: center;
    .yun-table-td {
      font-weight: 600;
      color: var(--yun-text-color-3);
      background-color: var(--yun-bgcolor-1);
      white-space: nowrap;
    }
  }
  .yun-table-tr {
    width: 100%;
    display: flex;
  }
  .yun-table-left-subline::after {
    position: absolute;
    right: -12px;
    top: -1px;
    content: '';
    width: 12px;
    height: calc(100% + 2px);
    opacity: 0;
    transition: all 0.25s ease;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.08),
      rgba(0, 0, 0, 0.03),
      rgba(0, 0, 0, 0.01),
      rgba(0, 0, 0, 0)
    );
  }
  .yun-table-right-subline::after {
    position: absolute;
    left: -12px;
    top: -1px;
    content: '';
    width: 12px;
    opacity: 0;
    transition: all 0.25s ease;
    height: calc(100% + 2px);
    background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.08),
      rgba(0, 0, 0, 0.03),
      rgba(0, 0, 0, 0.01),
      rgba(0, 0, 0, 0)
    );
  }
  .yun-table-left-subline-show::after,
  .yun-table-right-subline-show::after {
    opacity: 1;
  }
  .yun-table-td {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    flex-shrink: 0;
    text-align: left;
    padding: 14px 18px;
    box-sizing: border-box;
    background-color: var(--yun-bgcolor-0);
    border-bottom: var(--yun-form-border-width) var(--yun-form-border-color) solid;
  }
  .yun-table-tr:last-child {
    .yun-table-td {
      border-bottom: 0px var(--yun-form-border-color) solid;
    }
  }
  .yun-table-head {
    .yun-table-tr:last-child {
      .yun-table-td {
        border-bottom: var(--yun-form-border-width) var(--yun-form-border-color) solid;
      }
    }
  }
  .yun-table-body {
    width: 100%;
    height: auto;
    .yun-table-td {
      color: var(--yun-text-color-5);
    }
  }
  .yun-table-tr:hover {
    .yun-table-td {
      background-color: var(--yun-bgcolor-1);
    }
  }
}
.yun-table::-webkit-scrollbar {
  background-color: var(--yun-bgcolor-3);
  width: 6px;
  height: 6px;
}
.yun-table::-webkit-scrollbar-thumb:hover {
  background-color: rgb(126, 126, 126);
}
.yun-table::-webkit-scrollbar-thumb {
  background-color: var(--yun-bgcolor-5);
  opacity: 0;
  border-radius: 5px;
}
</style>
