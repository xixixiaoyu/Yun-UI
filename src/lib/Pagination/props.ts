import { PropType } from "vue";

type Options = {
  label: number | string;
  value: number | string;
};

export const paginationProps = {
  total: {
    type: Number,
    default: 100,
  },
  // 绑定值
  pageNum: {
    // 父组件 v-model 没有指定参数名，则默认是 modelValue
    type: Number,
    default: 1,
  },
  // 绑定值
  pageSize: {
    // 父组件 v-model 没有指定参数名，则默认是 modelValue
    type: Number,
    default: 20,
  },

  pageShowSize: {
    type: Number,
    default: 2,
  },

  round: {
    type: Boolean,
    default: false,
  },
  pageSizeOptions: {
    type: Array as PropType<Options[]>,
    default() {
      return [
        {
          label: "10 / 页",
          value: 10,
        },
        {
          label: "20 / 页",
          value: 20,
        },
        {
          label: "30 / 页",
          value: 30,
        },
        {
          label: "50 / 页",
          value: 30,
        },
        {
          label: "100 / 页",
          value: 100,
        },
      ];
    },
  },
};
