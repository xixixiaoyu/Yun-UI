<demo>
  <title>对齐方式</title>
  <desc>通过 flex 布局的 justify-content 来对分栏进行灵活的对齐，并可通过 Row 的 justify 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式</desc>
</demo>

<template>
  <Row justify="start">
    <Col :span="6"><div class="card"></div> </Col>
    <Col :span="6"><div class="card light"></div></Col>
    <Col :span="6"><div class="card"></div></Col>
  </Row>
  <Row justify="center">
    <Col :span="6"><div class="card"></div></Col>
    <Col :span="6"><div class="card light"></div></Col>
    <Col :span="6"><div class="card"></div></Col>
  </Row>
  <Row justify="end">
    <Col :span="6"><div class="card"></div></Col>
    <Col :span="6"><div class="card light"></div></Col>
    <Col :span="6"><div class="card"></div></Col>
  </Row>
  <Row justify="space-between">
    <Col :span="6"><div class="card"></div></Col>
    <Col :span="6"><div class="card light"></div></Col>
    <Col :span="6"><div class="card"></div></Col>
  </Row>
  <Row justify="space-around">
    <Col :span="6"><div class="card"></div></Col>
    <Col :span="6"><div class="card light"></div></Col>
    <Col :span="6"><div class="card"></div></Col>
  </Row>
  <Row justify="space-evenly">
    <Col :span="6"><div class="card"></div></Col>
    <Col :span="6"><div class="card light"></div></Col>
    <Col :span="6"><div class="card"></div></Col>
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
