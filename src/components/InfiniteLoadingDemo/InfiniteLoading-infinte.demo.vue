<demo>
  <title>支持无限滚动加载</title>
</demo>

<template>
  <div class="goods-list">
    <ul>
      <li v-for="goods in goodsList" :key="goods.id">
        <RouterLink :to="`/doc/infinite`" class="goods-item">
          <img :src="goods.picture" />
          <p class="name ellipsis">{{ goods.name }}</p>
          <p class="desc ellipsis">{{ goods.desc }}</p>
          <p class="price">&yen;{{ goods.price }}</p>
        </RouterLink>
        <!-- <GoodsItem :goods="goods" /> -->
      </li>
    </ul>
    <InfiniteLoading :loading="loading" :finished="finished" @infinite="getData" />
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { InfiniteLoading } from '../../lib/index'

// 加载状态
const loading = ref(false)

// 是否加载完毕
const finished = ref(false)

// 商品列表数据
const goodsList = ref([])

const reqParams = {
  page: 1,
  pageSize: 20,
  categoryId: '109311007',
}

const getData = () => {
  loading.value = true
  axios
    .post('http://pcapi-xiaotuxian-front-devtest.itheima.net/category/goods/temporary', reqParams)
    .then(({ data: { result } }) => {
      // 获取数据成功
      if (result.items.length) {
        // 有数据就追加数据
        goodsList.value.push(...result.items)
      } else {
        // 没有数据，代表加载完成
        finished.value = true
      }
      loading.value = false
    })
}

console.log(goodsList.value)
</script>

<style scoped lang="scss">
.goods-list {
  background: #fff;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 5px;
  }
  .goods-item {
    display: flex;
    flex-direction: column;
    width: 220px;
    padding: 20px 30px;
    text-align: center;
    transition: all 0.5s;
    &:hover {
      text-decoration: none;
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
    }
    img {
      width: 160px;
      height: 160px;
    }
    p {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      padding-top: 5px;
    }
    .name {
      font-size: 16px;
    }
    .desc {
      color: #999;
    }
    .price {
      color: #cf4444;
      font-size: 20px;
    }
  }
}
</style>
