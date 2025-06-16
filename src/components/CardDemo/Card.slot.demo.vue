<demo>
Footer slot
</demo>

<template>
  <div class="wrap">
    <Card title="支持 footer" hoverable shadow>
      card content
      <template #footer>card footer</template>
    </Card>
    <Card title="支持 footer" type="cyan">
      card content
      <template #footer>card footer</template>
    </Card>
  </div>
</template>

<script setup>
import { Card } from '../../lib/index'
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  .coast-card {
    width: 40%;
    margin-left: 5%;
  }
}
</style>
