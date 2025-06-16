<demo>
x布局
</demo>

<template>
  <Flex direction="column" width="250px" x="start">
    预输入
    <InputPro
      v-model="value1"
      placement="top"
      clearable
      @clear="clear"
      :options="['愚不可及', '欲罢不能', '有教无类', '用行舍藏', '择善而从']"
    >
    </InputPro>

    <InputPro
      v-model="value1"
      placement="left"
      clearable
      @clear="clear"
      :options="['愚不可及', '欲罢不能', '有教无类', '用行舍藏', '择善而从']"
    >
    </InputPro>

    <InputPro
      v-model="value1"
      placement="right-start"
      clearable
      @clear="clear"
      :options="['愚不可及', '欲罢不能', '有教无类', '用行舍藏', '择善而从']"
    >
    </InputPro>
    值：{{ value1 }}
    <br />
    <br />
    <br />

    气泡方向自定义
    <InputPro
      v-model="value2"
      popover-width="250px"
      :options="['詹姆斯', '库里', '汤普森', '利拉德']"
      :arrow="false"
      clearable
    />
    值：{{ value2 }}
  </Flex>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value1 = ref('')
const value2 = ref('')
const clear = (e) => {
  console.log(e)
}
</script>

<style lang="scss" scoped></style>
