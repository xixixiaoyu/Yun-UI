<demo>
  <title>混合布局</title>
  <desc>通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局</desc>
</demo>

<template>
  <Row :gutter="20">
    <Col span="16"><div class="card"></div> </Col>
    <Col span="8"><div class="card light"></div></Col>
  </Row>
  <Row :gutter="20">
    <Col span="8"><div class="card"></div></Col>
    <Col span="8"><div class="card light"></div></Col>
    <Col span="4"><div class="card"></div></Col>
    <Col span="4"><div class="card light"></div></Col>
  </Row>
  <Row :gutter="20">
    <Col span="4"><div class="card"></div></Col>
    <Col span="16"><div class="card light"></div></Col>
    <Col span="4"><div class="card"></div></Col>
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
