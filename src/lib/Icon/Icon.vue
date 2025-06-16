<template>
  <svg aria-hidden="true" class="yun-icon">
    <use :xlink:href="iconName" :class="extraClass" :full="color"></use>
  </svg>
</template>

<script>
import './Icon.scss'
import { computed } from 'vue'
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true,
    },
    prefix: {
      type: String,
      required: false,
      default: 'icon',
    },
    extraClass: {
      type: String,
    },
    color: {
      type: String,
    },
  },
  setup(props) {
    const iconName = computed(() => {
      return '#' + props.prefix + '-' + props.name
    })
    return {
      iconName,
    }
  },
}
</script>
