<template>
  <label
    class="yun-radio"
    :class="`
        ${block ? 'yun-radio-block' : ''}  
        ${checked ? 'yun-radio-checked' : ''}   
        ${!iconable ? 'yun-radio-unicon' : ''}`"
  >
    <div class="icon-radio-box" v-if="iconable">
      <div class="icon-radio"></div>
    </div>
    <input v-show="false" type="radio" :checked="checked" @input="setChecked" />
    <span v-if="label" class="yun-radio-label"> {{ label }}</span>
  </label>
</template>

<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  block: {
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
  },
})
const emit = defineEmits(['update:checked'])
const setChecked = () => {
  emit('update:checked')
}
</script>

<script lang="ts">
export default {
  name: 'Radio',
}
</script>

<style lang="scss">
.yun-radio {
  display: inline-flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  color: var(--yun-text-color-1);
  font-size: 14px;
  border-radius: 50px;
  transition: var(--yun-form-transition);
  .icon-radio-box {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border: 2px var(--yun-form-border-color-hover) solid;
    box-sizing: border-box;
    transition: var(--yun-form-transition);
    overflow: hidden;
    border-radius: 50%;
    background-color: var(--yun-bgcolor-0);
    .icon-radio {
      width: 7px;
      height: 7px;
      background-color: var(--yun-white-color);
      transform: translateY(100%);
      opacity: 0;
      transition: var(--yun-form-transition);
      font-size: 12px;
      border-radius: 50%;
    }
  }
  .yun-radio-label {
    margin-left: 6px;
  }
}
.yun-radio-unicon.yun-radio-block {
  padding: 4px 12px;
  .yun-radio-label {
    color: var(--yun-text-color-6);
  }
}
.yun-radio-unicon.yun-radio-checked.yun-radio-block {
  .yun-radio-label {
    color: var(--yun-primary-color-dark);
  }
}
.yun-radio:hover {
  .icon-radio-box {
    border: 2px var(--yun-form-border-color-active) solid;
  }
}
.yun-radio-block {
  background: var(--yun-form-bgcolor);
  border: var(--yun-form-border-width) rgba(0, 0, 0, 0) solid;
  padding: 3px 8px 3px 4px;
  border-radius: 50px;
  .yun-radio-label {
    margin-left: 2px;
  }
}
.yun-radio-block:hover {
  background: var(--yun-form-bgcolor-hover);
}
.yun-radio-block:active {
  background: var(--yun-form-bgcolor-active);
}
.yun-radio-checked.yun-radio-block {
  border: var(--yun-form-border-width) var(--yun-primary-color) solid;
  background: var(--yun-primary-color-light);
  color: var(--yun-primary-color-dark);
}
.yun-radio-checked.yun-radio-block:hover {
  border: var(--yun-form-border-width) var(--yun-primary-color) solid;
  background: var(--yun-primary-color-light);
  color: var(--yun-primary-color-dark);
}
.yun-radio-checked {
  .icon-radio-box {
    border: 2px var(--yun-primary-color) solid;
    background: var(--yun-primary-color);
    .icon-radio {
      transform: translateY(0%);
      opacity: 1;
    }
  }
}
.yun-radio-checked:hover {
  .icon-radio-box {
    border: 2px var(--yun-primary-color) solid;
    background: var(--yun-primary-color);
  }
}
.yun-radio-block.yun-radio-checked {
  .icon-radio-box {
    border: 2px var(--yun-primary-color-light) solid;
    background: var(--yun-primary-color-light);
    .icon-radio {
      background-color: var(--yun-primary-color-dark);
      opacity: 1;
      transform: translateY(0%) scale(1.15);
    }
  }
}
.yun-radio-block.yun-radio-checked:hover {
  background: var(--yun-primary-color-light);
  .icon-radio-box {
    border: 2px var(--yun-primary-color-light) solid;
  }
  .icon-radio {
    background-color: var(--yun-primary-color-dark);
    opacity: 1;
    transform: translateY(0%) scale(1.15);
  }
}
</style>
