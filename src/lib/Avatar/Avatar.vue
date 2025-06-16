<template>
  <div class="yun-avatar">
    <img :src="src" :alt="alt" :class="round ? 'yun-avatar-round' : ''" />
    <span v-if="status" class="dot" :class="`dot-${status} dot-${statusPosition}`"> </span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  round: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    default: '',
  },
  statusPosition: {
    type: String,
    default: '',
  },
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
})
</script>

<script lang="ts">
export default {
  name: 'Avatar',
}
</script>

<style lang="scss" scoped>
.yun-avatar {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 40px;
  & + & {
    margin-left: 20px;
  }
  img {
    width: 100%;
    height: 100%;
    background-color: var(--yun-bgcolor-2);
    border-radius: var(--yun-form-border-radius);
  }
  .yun-avatar-round {
    border-radius: 50%;
  }
  .dot {
    position: absolute;
    top: -0.3rem;
    left: -0.3rem;
    content: '';
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    z-index: 99;
    border: 2px var(--yun-white-color) solid;
  }
  .dot-online {
    background-color: var(--yun-success-color);
  }
  .dot-busy {
    background-color: var(--yun-error-color);
  }
  .dot-offline {
    background-color: var(--yun-normal-color-dark);
  }
  .dot-processing {
    background-color: var(--yun-info-color);
  }
  .dot-away {
    background-color: var(--yun-warning-color);
  }
  .dot-top-left {
    top: -0.25rem;
    left: -0.25rem;
  }
  .dot-top-right {
    top: -0.25rem;
    left: auto;
    right: -0.25rem;
  }
  .dot-bottom-left {
    top: auto;
    bottom: -0.25rem;
    left: -0.25rem;
  }
  .dot-bottom-right {
    top: auto;
    bottom: -0.25rem;
    left: auto;
    right: -0.25rem;
  }
}
</style>
