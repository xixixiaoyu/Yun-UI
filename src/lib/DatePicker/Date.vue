<template>
  <div class="yun-date">
    <Flex x="start" mode="between" class="yun-date-control">
      <div class="cur-date">{{ _year }} / {{ formatZero(_month) }}</div>
      <div class="yun-date-control-right">
        <Button type="normal" size="small" @click="prevMonth">
          <ChevronBack />
        </Button>
        <Button type="normal" size="small" @click="nextMonth">
          <ChevronForward />
        </Button>
      </div>
    </Flex>
    <div class="yun-date-box">
      <div v-for="(item, index) in getHeadDate" :key="`h${index}`" class="yun-date-item">
        <div class="yun-date-num">{{ item }}</div>
      </div>
      <div
        v-for="(item, index) in dateData"
        :key="`d${index}`"
        class="yun-date-item"
        :class="{
          'yun-date-item-e': item.date > 0 && item.date <= item.showDate,
          'yun-date-item-cur': curDay == item.showDate && curYear == _year && curMonth == _month,
          'yun-date-item-select': checkDateSelect(item),
        }"
        @click="selectDateFn(item)"
      >
        <div class="yun-date-num">{{ item.showDate }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { ChevronBack, ChevronForward } from '@vicons/ionicons5'
import { getMonthDate, getHeadDate } from './date'
import { dateProps } from './props'
const props = defineProps(dateProps)
const dateValue = ref<string | undefined>(props.modelValue)
const dateArr: any = dateValue.value?.split('-')
// 获取当天日期对象
const today = new Date()
// 获取当前年份
const curYear = ref(today.getFullYear())
// 获取当前月份
const curMonth = ref(today.getMonth() + 1)
const curDay = ref(today.getDate())
// 年份
const _year = ref(parseInt(dateArr[0]) || today.getFullYear())
// 月份
const _month = ref(parseInt(dateArr[1]) || today.getMonth() + 1)
const dateData = ref(getMonthDate())
const prevMonth = () => {
  if (_month.value > 1) {
    _month.value -= 1
  } else {
    _year.value -= 1
    _month.value = 12
  }
  dateData.value = getMonthDate(_year.value, _month.value)
}
const nextMonth = () => {
  if (_month.value < 12) {
    _month.value += 1
  } else {
    _year.value += 1
    _month.value = 1
  }
  dateData.value = getMonthDate(_year.value, _month.value)
}
const emit = defineEmits(['change', 'update:modelValue'])
const selectDateFn = (item) => {
  const v = {
    year: _year.value,
    month: _month.value,
    day: item.showDate,
    value: `${_year.value}-${formatZero(_month.value)}-${formatZero(item.showDate)}`,
  }
  dateValue.value = v.value
  emit('update:modelValue', dateValue.value)
  emit('change', v)
}
const formatZero = (num) => {
  return num < 10 ? '0' + num : num
}
const checkDateSelect = computed(() => (item) => {
  if (item.date > 0 && item.date <= item.showDate) {
    const c = `${_year.value}-${formatZero(_month.value)}-${formatZero(item.showDate)}`
    return dateValue.value == c
  }
})
</script>

<style lang="scss">
.yun-date {
  width: 260px;
  user-select: none;
  padding: 8px;
  box-sizing: border-box;
  .yun-date-control {
    width: 100%;
    padding: 0px 3px;
    box-sizing: border-box;
    height: 30px;
    .cur-date {
      display: flex;
      align-items: center;
      height: 100%;
      font-weight: bold;
      color: var(--yun-text-color-0);
      padding-left: 8px;
    }
    .yun-button {
      margin-left: 5px;
      min-width: auto;
      padding: 2px 8px;
      svg {
        width: 14px;
        margin-right: 0px;
      }
    }
  }
  .yun-date-box {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    // border: var(--yun-form-border-width) var(--yun-form-border-color) solid;
    .yun-date-item {
      width: calc(100% / 7);
      height: 36px;
      padding: 3px;
      box-sizing: border-box;
      .yun-date-num {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--yun-form-border-radius);
        font-size: 14px;
        width: 100%;
        height: 100%;
        color: var(--yun-text-color-9);
        box-sizing: border-box;
        transition: all 0.1s ease;
      }
    }
    .yun-date-item-e {
      cursor: pointer;
      .yun-date-num {
        color: var(--yun-text-color-4);
      }
    }
    .yun-date-item-cur {
      .yun-date-num {
        position: relative;
        color: var(--yun-success-color-dark);
        font-weight: 900;
        background-color: var(--yun-success-color-light);
      }
    }
    .yun-date-item-cur:hover {
      .yun-date-num {
        position: relative;
        color: var(--yun-success-color-dark);
        font-weight: 900;
        background-color: var(--yun-success-color-light);
      }
    }
    .yun-date-item-e:hover {
      .yun-date-num {
        background-color: var(--yun-primary-color-light);
        color: var(--yun-primary-color-dark);
      }
    }
    .yun-date-item-e:active {
      .yun-date-num {
        transform: scale(0.9);
      }
    }
    .yun-date-item-select {
      .yun-date-num {
        background-color: var(--yun-primary-color-light);
        color: var(--yun-primary-color-dark);
      }
    }
  }
}
</style>
