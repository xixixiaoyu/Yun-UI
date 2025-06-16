<demo>
常见页面布局
</demo>

<template>
  <CoLayout>
    <CoHeader>Header</CoHeader>
    <CoContent>Content</CoContent>
  </CoLayout>

  <CoLayout>
    <CoHeader>Header</CoHeader>
    <CoContent>Content</CoContent>
    <CoFooter>Footer</CoFooter>
  </CoLayout>

  <CoLayout>
    <CoAside width="200px">Aside</CoAside>
    <CoContent>Content</CoContent>
  </CoLayout>

  <CoLayout>
    <CoHeader>Header</CoHeader>
    <CoLayout>
      <CoAside width="200px">Aside</CoAside>
      <CoContent>Content</CoContent>
    </CoLayout>
  </CoLayout>

  <CoLayout>
    <CoHeader>Header</CoHeader>
    <CoLayout>
      <CoAside width="200px">Aside</CoAside>
      <CoLayout>
        <CoContent>Content</CoContent>
        <CoFooter>Footer</CoFooter>
      </CoLayout>
    </CoLayout>
  </CoLayout>

  <CoLayout>
    <CoAside width="200px">Aside</CoAside>
    <CoLayout>
      <CoHeader>Header</CoHeader>
      <CoContent>Content</CoContent>
    </CoLayout>
  </CoLayout>

  <CoLayout>
    <CoAside width="100px">Aside</CoAside>
    <CoLayout>
      <CoHeader height="70px">Header</CoHeader>
      <CoContent>Content</CoContent>
      <CoFooter height="50px">Footer</CoFooter>
    </CoLayout>
  </CoLayout>
</template>

<script setup>
import { CoAside, CoFooter, CoHeader, CoContent, CoLayout } from '../../lib/Layout/index'
</script>

<style lang="scss" scoped>
.coast-layout {
  margin-bottom: 40px;
  color: #fff;
  * {
    text-align: center;
  }
  &:last-child {
    margin-bottom: 0;
  }
  .coast-header,
  .coast-footer {
    background: #7dbcea;
    line-height: 60px;
  }
  .coast-content {
    background: #108ee9;
    line-height: 120px;
  }
  .coast-aside {
    background: #3ba0e9;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
