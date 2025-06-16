<demo>
  <title>响应式布局</title>
  <desc>参照 Bootstrap 的 响应式设计，预设六个响应尺寸：xs sm md lg xl xxl</desc>
</demo>

<template>
  <Row gutter="10">
    <Col span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" xxl="2">
      <div class="card"></div>
    </Col>
    <Col span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" xxl="2">
      <div class="card light"></div>
    </Col>
    <Col span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" xxl="2">
      <div class="card"></div>
    </Col>
    <Col span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" xxl="2">
      <div class="card light"></div>
    </Col>
    <Col span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" xxl="2">
      <div class="card"></div>
    </Col>
    <Col span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" xxl="2">
      <div class="card light"></div>
    </Col>
    <Col span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" xxl="2">
      <div class="card"></div>
    </Col>
    <Col span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" xxl="2">
      <div class="card light"></div>
    </Col>
  </Row>
</template>

<script setup>
import { Row, Col } from '../../lib/Grid/index'
</script>

<style lang="scss" scoped>
.coast-col {
  margin-bottom: 20px;
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
