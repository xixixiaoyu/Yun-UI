<demo>
  <title>分栏间隔</title>
  <desc>Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0</desc>
</demo>

<template>
  <Row gutter="20">
    <Col span="6"><div class="card"></div></Col>
    <Col span="6"><div class="card light"></div></Col>
    <Col span="6"><div class="card"></div></Col>
    <Col span="6"><div class="card light"></div></Col>
  </Row>
</template>

<script setup>
import { Row, Col } from '../../lib/Grid/index'
</script>

<style lang="scss" scoped>
.coast-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.card {
  min-height: 36px;
  background: #d3dce6;
  border-radius: 4px;
  &.light {
    background: #e5e9f2;
  }
}
</style>
