<demo>
  <title>更完美的用法</title>
  <desc>支持 title 和 desc 属性且样式变得更好看了</desc>
</demo>

<template>
  <Steps :active="active">
    <StepsItem title="花前月下" desc="春日游，杏花吹满头，陌上谁家年少足风流" />
    <StepsItem title="相濡以沫" desc="帘外芭蕉惹骤雨，门环惹铜绿，而我路过那江南小镇惹了你" />
    <StepsItem title="矢志不渝" desc="每个人都有一段悲伤，想隐藏却欲盖弥彰" />
    <StepsItem title="海枯石烂" desc="走完同一条街，回到两个世界" />
    <StepsItem title="天荒地老" desc="最初不相识，最后不相认" />
  </Steps>
  <Button @click="next">点击下一步</Button>
</template>

<script setup>
import { ref } from 'vue'
import { Steps, StepsItem } from '../../lib/Step/index'

const count = ref(5)
const active = ref(0)
const next = () => {
  active.value++
}
</script>
