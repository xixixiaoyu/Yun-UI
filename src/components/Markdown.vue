<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.markdown-body {
  color: var(--yun-text-color-2) !important;
}
</style>
