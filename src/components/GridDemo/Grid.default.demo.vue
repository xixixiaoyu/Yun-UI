<demo>
  <title>基础布局</title>
  <desc>通过基础的 24 分栏，迅速简便地创建布局</desc>
</demo>

<template>
  <Row>
    <Col><div class="card" /></Col>
  </Row>
  <Row>
    <Col span="12"><div class="card"></div></Col>
    <Col span="12"><div class="card light"></div></Col>
  </Row>
  <Row>
    <Col span="8"><div class="card"></div></Col>
    <Col span="8"><div class="card light"></div></Col>
    <Col span="8"><div class="card"></div></Col>
  </Row>
  <Row>
    <Col span="6"><div class="card"></div></Col>
    <Col span="6"><div class="card light"></div></Col>
    <Col span="6"><div class="card"></div></Col>
    <Col span="6"><div class="card light"></div></Col>
  </Row>
  <Row>
    <Col span="4"><div class="card"></div></Col>
    <Col span="4"><div class="card light"></div></Col>
    <Col span="4"><div class="card"></div></Col>
    <Col span="4"><div class="card light"></div></Col>
    <Col span="4"><div class="card"></div></Col>
    <Col span="4"><div class="card light"></div></Col>
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
