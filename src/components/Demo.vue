<template>
  <div class="demo-container">
    <h2 v-if="$slots.customTitle"><slot name="customTitle"></slot></h2>
    <h2 v-else>{{ title || component.__sourceCodeTitle }}</h2>
    <p v-if="$slots.default" class="slot-content"><slot></slot></p>
    <p v-else>{{ description || component.__sourceDescription }}</p>
    <p v-html="html" v-if="html"></p>
    <!--展示代码的地方-->
    <CodePer ref="codePer" :component="component"></CodePer>
  </div>
</template>

<script>
import CodePer from './Codeper.vue'
export default {
  name: 'DemoDoc',
  components: { CodePer },
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    html: {
      type: String,
      default: '',
    },
    component: {
      type: Object,
    },
  },
}
</script>

<style lang="scss" scoped>
.demo-container {
  //padding: 40px;
  h2 {
    color: var(--yun-text-color-3);
    font-size: 18px;
    margin-top: 56px;
  }
  p {
    font-size: 14px;
    color: var(--yun-text-color-6);
    line-height: 1.5em;
    margin: 14px 0;
  }
  .slot-content {
    font-size: 14px;
    color: var(--yun-text-color-6);
    font-weight: 400;
    line-height: 30px;
  }
}
</style>
