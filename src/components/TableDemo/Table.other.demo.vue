<demo>完整功能</demo>

<template>
  <Flex x="start">
    <Button v-if="isCheckeds.length > 0" type="error" @click="isCheckeds = []">取消所有选择</Button>
    <Button
      v-if="isCheckeds.length == 0"
      @click="isCheckeds = data.filter((e, i) => i <= 4).map((e) => e.id)"
      >选中前五个</Button
    >
    <Button v-if="isCheckeds.length != data.length" @click="isCheckeds = data.map((e) => e.id)"
      >全选</Button
    >
  </Flex>
  <br />
  <Table :data="data" :columns="columns" max-height="600px">
    <template #checkbox="{ row, column }">
      <Checkbox
        :checked="getChecked(row.id)"
        :label="''"
        @change="change($event, row, column)"
        @click.stop
      ></Checkbox>
    </template>
    <template #id="{ row }"> {{ row.id }} </template>
    <template #title="{ row }">
      <div class="title">{{ row.title }}</div>
    </template>
    <template #release_date="{ row }"> {{ row.release_date }} </template>
    <template #directors="{ row }">
      <Tag type="warning" v-for="(item, index) in row.directors" :key="index"> {{ item }}</Tag>
    </template>
    <template #info="{ row }">
      <div
        v-tooltip="{
          content: row.info,
          placement: 'left',
          trigger: 'mouseenter',
        }"
        class="info"
        v-html="row.info"
      ></div>
    </template>

    <template #action="{ row, column }">
      <Button is-text @click.stop="get({ row, column })">管理</Button>
      <PopOk
        title="删除确认"
        content="删除之后无法恢复，请确认！"
        placement="left"
        width="200px"
        @click.stop
      >
        <Button is-text type="error">删除</Button>
      </PopOk>
    </template>
    <template #type="{ row }">
      <Tag type="success">{{ row.type == 'movie' ? '电影' : '电视剧' }} </Tag>
    </template>
    <template #has_linewatch="{ row }">
      <span>{{ row.has_linewatch ? '是' : '否' }}</span>
    </template>
    <template #actors="{ row }">
      <Flex
        v-tooltip="{
          content: row.actors.join(' <br /> '),
          placement: 'left',
          trigger: 'mouseenter',
          allowHTML: true,
        }"
        x="start"
        gap="5px"
      >
        <Tag v-for="(actor, index) in row.actors" :key="index" type="info" size="small"
          >{{ actor }}
        </Tag>
      </Flex>
    </template>
  </Table>

  <div style="margin-top: 20px">
    <Alert
      :list="[
        {
          type: 'success',
          title: '功能介绍',
          content: `1、可选择，你可以在插槽内安置一个「Checkbox」。
                    2、固定列，你可以固定某一列。
                    3、自定义结构，你可以在单元格内自由自定义，例如：「按钮」、「头像」、「标签」等
                    4、插槽，高度的便利性，你可以使用「计算属性」给文本转格式。
                    5、适用「tooltip」，对于长文本，你可以省略号隐藏起来，通过「气泡」的形式展现。
                `,
        },
      ]"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import mvJson from './movie.json'

const data = ref(mvJson)

const columns = [
  {
    type: 'template',
    title: '选择',
    field: 'checkbox',
    width: '50px',
    align: 'center',
    sticky: 'left',
    offsetX: '0px',
    x: 'center',
  },
  {
    type: 'text',
    title: 'id',
    field: 'id',
    width: '100px',
    sticky: 'left',
    offsetX: '50px',
    x: 'center',
  },
  {
    type: 'text',
    title: '名称',
    field: 'title',
    width: '180px',
  },

  {
    type: 'text',
    title: '上线日期',
    field: 'release_date',
    width: '100px',
    x: 'center',
  },
  {
    type: 'template',
    title: '在线观看',
    field: 'has_linewatch',
    width: '100px',
    x: 'center',
  },
  {
    type: 'html',
    title: '导演',
    field: 'directors',
    width: '120px',
  },
  {
    type: 'text',
    title: '简介',
    field: 'info',
    width: 'auto',
  },
  {
    type: 'template',
    title: '主演',
    align: 'start',
    field: 'actors',
    width: '300px',
  },
  {
    type: 'template',
    title: '类型',
    field: 'type',
    width: '100px',
    x: 'center',
  },
  {
    type: 'template',
    title: '执行',
    field: 'action',
    width: '120px',
    align: 'center',
    sticky: 'right',
    offsetX: '0px',
    x: 'center',
  },
]

const isCheckeds = ref([])

const get = (e) => {
  if (e.column.field == 'action') {
    Toast.info({ text: '点击了 id：' + e.row.id })
  }
}

const change = (e, row, column) => {
  console.log(e, row.id, column.field)
}

const getChecked = computed(() => (id) => {
  return isCheckeds.value.includes(id)
})
</script>

<style lang="scss" scoped>
.title,
.info {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
