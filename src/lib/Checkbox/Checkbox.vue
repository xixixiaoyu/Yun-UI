<template>
  <label
    class="yun-checkbox"
    :class="`${block ? 'yun-checkbox-block' : ''} ${round ? 'yun-checkbox-round' : ''} ${
      _checked ? 'yun-checkbox-checked' : ''
    } 
        ${!iconable ? 'yun-checkbox-unicon' : ''}
        `"
  >
    <div class="icon-checkbox-box" v-if="iconable">
      <svg
        class="icon-checkbox"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="currentColor"
        stroke-width="4"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
    <input v-show="false" type="checkbox" :checked="_checked" @input="setChecked" />
    <span v-if="label" class="yun-checkbox-label"> {{ label }}</span>
  </label>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
const props = defineProps({
  label: {
    type: String,
    default: () => {
      return ''
    },
  },
  block: {
    type: Boolean,
    default: () => {
      return false
    },
  },
  round: {
    type: Boolean,
    default: () => {
      return false
    },
  },
  iconable: {
    type: Boolean,
    default: true,
  },
  checked: {
    type: Boolean,
    default: () => {
      return false
    },
  },
})
const emit = defineEmits(['change'])

const _checked = ref(props.checked || false)

watch(
  () => props.checked,
  (v) => {
    if (v != _checked.value) {
      _checked.value = v
    }
  }
)

const setChecked = (e: Event) => {
  _checked.value = (e.target as HTMLInputElement).checked
  emit('change', _checked.value)
}
</script>

<script lang="ts">
export default {
  name: 'Checkbox',
}
</script>

<style lang="scss" scoped>
.yun-checkbox {
  display: inline-flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  color: var(--yun-text-color-1);
  font-size: 14px;
  transition: var(--yun-form-transition);
  white-space: nowrap;
  .icon-checkbox-box {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border: 2px var(--yun-form-border-color-hover) solid;
    box-sizing: border-box;
    border-radius: var(--yun-form-border-radius);
    transition: var(--yun-form-transition);
    background-color: var(--yun-bgcolor-0);
    .icon-checkbox {
      transform: scale(0.7) translateY(50%);
      transition: var(--yun-form-transition);
      opacity: 0;
      color: var(--yun-white-color);
      font-size: 12px;
    }
  }
  .yun-checkbox-label {
    margin-left: 6px;
  }
}
.yun-checkbox-unicon.yun-checkbox-block {
  padding: 4px 12px;
  .yun-checkbox-label {
    color: var(--yun-text-color-6);
  }
}
.yun-checkbox-unicon.yun-checkbox-checked.yun-checkbox-block {
  .yun-checkbox-label {
    color: var(--yun-primary-color-dark);
  }
}
.yun-checkbox:hover {
  .icon-checkbox-box {
    border: 2px var(--yun-form-border-color-active) solid;
  }
}
.yun-checkbox-block {
  background: var(--yun-form-bgcolor);
  padding: 3px 8px 3px 4px;
  border: var(--yun-form-border-width) rgba(0, 0, 0, 0) solid;
  border-radius: var(--yun-form-border-radius);
  .yun-checkbox-label {
    margin-left: 2px;
  }
}
.yun-checkbox-checked.yun-checkbox-block {
  border: var(--yun-form-border-width) var(--yun-primary-color) solid;
  background: var(--yun-primary-color-light);
  color: var(--yun-primary-color-dark);
}
.yun-checkbox-checked.yun-checkbox-block:hover {
  border: var(--yun-form-border-width) var(--yun-primary-color) solid;
  background: var(--yun-primary-color-light);
  color: var(--yun-primary-color-dark);
}
.yun-checkbox-round {
  border-radius: 50px;
  .icon-checkbox-box {
    border-radius: 50%;
  }
}
.yun-checkbox-block:hover {
  background: var(--yun-form-bgcolor-hover);
}
.yun-checkbox-block:active {
  background: var(--yun-form-bgcolor-active);
}
.yun-checkbox-checked {
  .icon-checkbox-box {
    border: 2px var(--yun-primary-color) solid;
    background: var(--yun-primary-color);
    .icon-checkbox {
      transform: scale(0.85) translateY(0px);
      opacity: 1;
    }
  }
}
.yun-checkbox-checked:hover {
  .icon-checkbox-box {
    border: 2px var(--yun-primary-color) solid;
    background: var(--yun-primary-color);
  }
}
.yun-checkbox-block.yun-checkbox-checked {
  .icon-checkbox-box {
    border: 2px var(--yun-primary-color-light) solid;
    background: var(--yun-primary-color-light);
    .icon-checkbox {
      color: var(--yun-primary-color-dark);
      opacity: 1;
    }
  }
}
.yun-checkbox-block.yun-checkbox-checked:hover {
  background: var(--yun-primary-color-light);
  .icon-checkbox-box {
    border: 2px var(--yun-primary-color-light) solid;
  }
  .icon-checkbox {
    color: var(--yun-primary-color-dark);
    opacity: 1;
  }
}
</style>
