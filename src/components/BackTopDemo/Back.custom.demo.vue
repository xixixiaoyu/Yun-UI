<demo>
  <title>自定义内容</title>
  <desc>显示区域被固定为 40px * 40px 的区域, 其中的内容可支持自定义</desc>
</demo>

<template>
  Scroll down to see the bottom-right button
  <BackTop right="60" :visibilityHeight="330" @clicked="handleClick">
    <div
      style="
        height: 45px;
        width: 45px;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
        text-align: center;
        line-height: 45px;
        color: #1989fa;
        text-align: center;
      "
    >
      UP
    </div>
  </BackTop>
</template>

<script setup>
import { BackTop } from '../../lib/index'

const handleClick = () => {
  console.log('BackTop is clicked')
}
</script>
