<demo>
  <title>透明度渐变轮播</title>
</demo>

<template>
  <div class="home-banner">
    <CarouselBase :sliders="sliders" width="1150" height="600" autoPlay></CarouselBase>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { CarouselBase } from '../../lib/index'

const sliders = ref([])
onMounted(() => {
  sliders.value = [
    {
      id: '1',
      imgUrl: '//tva1.sinaimg.cn/large/007c1Ltfgy1h0plytaly5j32yo1o0tj6.jpg',
      hrefUrl: 'carousel',
    },
    {
      id: '2',
      imgUrl: '//tva3.sinaimg.cn/large/007c1Ltfgy1h0pm00mnrcj32yo1o0qhq.jpg',
      hrefUrl: 'carousel',
    },
    {
      id: '3',
      imgUrl: '//tvax2.sinaimg.cn/large/007c1Ltfgy1h0pm0au14kj33341rp4fh.jpg',
      hrefUrl: 'carousel',
    },
    {
      id: '4',
      imgUrl: '//tva4.sinaimg.cn/large/007c1Ltfgy1h0pm0i71mxj33kv1o07ir.jpg',
      hrefUrl: 'category',
    },
    {
      id: '5',
      imgUrl: '//tva3.sinaimg.cn/large/007c1Ltfgy1h0pm0seq94j333426k105.jpg',
      hrefUrl: 'carousel',
    },
  ]
})
</script>

<style lang="scss">
.home-banner {
  display: flex;
  justify-content: center;
}
</style>
