<template>
  <div class="yun-badge" :class="`yun-badge-${type} ${round ? 'yun-badge-round' : ''}`">
    <div v-if="value" class="yun-badge-value">
      {{ value }}
    </div>
    <div v-if="!value" class="yun-badge-dot"></div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: 'normal',
  },
  round: {
    type: Boolean,
    default: false,
  },
  value: {
    type: String,
    default: '',
  },
})
</script>

<script lang="ts">
export default {
  name: 'Badge',
}
</script>

<style lang="scss">
.yun-badge {
  display: inline-flex;
  position: relative;
  vertical-align: middle;
  .yun-badge-dot {
    position: absolute;
    left: 100%;
    width: 12px;
    height: 12px;
    bottom: calc(100% - 7px);
    transform: translateX(-50%);
    z-index: 1;
    cursor: normal;
    border-radius: 3px;
    border: 2px var(--yun-white-color) solid;
    box-sizing: border-box;
  }
  .yun-badge-value {
    position: absolute;
    display: inline-flex;
    align-items: center;
    left: 100%;
    bottom: calc(100% - 9px);
    transform: translateX(-50%);
    border-radius: 3px;
    min-width: 18px;
    height: 18px;
    text-align: center;
    padding: 0px 5px;
    font-size: 12px;
    cursor: normal;
    z-index: 1;
    font-weight: normal;
    box-sizing: border-box;
    color: var(--yun-white-text-color);
    background-color: var(--yun-error-color-dark);
  }
}
.yun-badge-round {
  .yun-badge-value {
    border-radius: 25px;
  }
  .yun-badge-dot {
    border-radius: 50%;
  }
}
.yun-badge-primary {
  .yun-badge-value,
  .yun-badge-dot {
    color: var(--yun-white-color);
    background-color: var(--yun-primary-color);
  }
}
.yun-badge-info {
  .yun-badge-value,
  .yun-badge-dot {
    color: var(--yun-white-color);
    background-color: var(--yun-info-color);
  }
}
.yun-badge-success {
  .yun-badge-value,
  .yun-badge-dot {
    color: var(--yun-white-color);
    background-color: var(--yun-success-color);
  }
}
.yun-badge-warning {
  .yun-badge-value,
  .yun-badge-dot {
    color: var(--yun-white-color);
    background-color: var(--yun-warning-color);
  }
}
.yun-badge-error {
  .yun-badge-value,
  .yun-badge-dot {
    color: var(--yun-white-color);
    background-color: var(--yun-error-color);
  }
}
.yun-badge-normal {
  .yun-badge-value,
  .yun-badge-dot {
    color: var(--yun-white-color);
    background-color: var(--yun-error-color-dark);
  }
}
</style>
