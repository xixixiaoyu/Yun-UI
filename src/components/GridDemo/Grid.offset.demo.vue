<demo>
  <title>分栏偏移</title>
  <desc>支持偏移指定的栏数，通过制定 Col 组件的 offset 属性可以指定分栏偏移的栏数</desc>
</demo>

<template>
  <Row :gutter="20">
    <Col :span="6"><div class="card"></div> </Col>
    <Col :span="6" :offset="6"><div class="card light"></div></Col>
  </Row>
  <Row :gutter="20">
    <Col :span="6" :offset="6"><div class="card"></div></Col>
    <Col :span="6" :offset="6"><div class="card light"></div></Col>
  </Row>
  <Row :gutter="20">
    <Col :span="12" :offset="6"><div class="card"></div></Col>
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
