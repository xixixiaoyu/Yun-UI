import type { App } from 'vue'

// 工具函数
/**
 * 初始化 rem 基准值，最大为 40px
 */
export const useREM = () => {
  // 定义最大的 fontSize
  const MAX_FONT_SIZE = 30

  // 监听 html 文档被解析完成的事件
  document.addEventListener('DOMContentLoaded', () => {
    // 获取 html 标签
    const html = document.querySelector('html')
    // 获取根元素 fontSize 标准，屏幕宽度 / 10。（以 Iphone 为例 Iphone 6 屏幕宽度为 375，则标准 fontSize 为 37.5）
    let fontSize = window.innerWidth / 10
    // 获取到的 fontSize 不允许超过我们定义的最大值
    fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize
    // 定义根元素（html）fontSize 的大小 （rem）
    ;(html as HTMLElement).style.fontSize = fontSize + 'px'
  })
}

// 基础组件导出
export { default as Button } from './Button/Button.vue'
export { default as ButtonGroup } from './Button/ButtonGroup'
export { default as Icon } from './Icon/Icon.vue'
export { default as Avatar } from './Avatar/Avatar.vue'
export { default as Tag } from './Tag/Tag.vue'
export { default as Mark } from './Mark/Mark.vue'
export { default as Badge } from './Badge/Badge.vue'
export { default as Title } from './Title/Title.vue'
export { default as Flex } from './Flex/Flex.vue'

// 布局组件导出
export { default as Row } from './Grid/Row'
export { default as Col } from './Grid/Col'
export { default as Layout } from './Layout/Layout'
export { default as Header } from './Layout/Header'
export { default as Footer } from './Layout/Footer'
export { default as Aside } from './Layout/Aside'
export { default as Content } from './Layout/Content'

// 表单组件导出
export { default as Input } from './Input/Input.vue'
export { default as InputPro } from './InputPro/InputPro.vue'
export { default as InputTag } from './InputTag/InputTag.vue'
export { default as Checkbox } from './Checkbox/Checkbox.vue'
export { default as CheckboxGroup } from './Checkbox/CheckboxGroup.vue'
export { default as Switch } from './Switch/Switch.vue'
export { default as RadioGroup } from './Radio/RadioGroup.vue'
export { default as Select } from './Select/Select.vue'
export { default as DatePicker } from './DatePicker/DatePicker.vue'
export { default as FormItem } from './FormItem/FormItem.vue'

// 数据展示组件导出
export { default as Table } from './Table/Table.vue'
export { default as Card } from './Card/Card.vue'
export { default as Skeleton } from './Skeleton/Skeleton.vue'
export { default as Pagination } from './Pagination/Pagination.vue'
export { default as Comment } from './Comment/Comment.vue'

// 导航组件导出
export { default as Tabs } from './Tabs/Tabs.vue'
export { default as Tab } from './Tabs/Tab.vue'
export { default as YunTabs } from './Tabs/src/YunTabs.vue'
export { default as Breadcrumb } from './Breadcrumb/Breadcrumb.vue'
export { default as Step } from './Step/Step.vue'
export { default as Steps } from './Step/Steps.vue'
export { default as StepsItem } from './Step/StepsItem.vue'

// 反馈组件导出
export { default as Alert } from './Alert/Alert.vue'
export { default as Modal } from './Modal/Modal.vue'
export { default as MyDialog } from './Dialog/index.vue'
export { default as PopOk } from './PopOk/PopOk.vue'

// 弹出层组件导出
export { default as Popover } from './Popover/Popover.vue'
export { default as YunPopover } from './Popover/YunPopover/YunPopover.vue'
export { default as Dropdown } from './Dropdown/Dropdown.vue'
export { default as Drawer } from './Drawer/Drawer.vue'

// 轮播和滚动组件导出
export { default as CarouselBase } from './Carousel/Carousel.opacity.vue'
export { default as CarouselScroll } from './Carousel/Carousel.scroll.vue'
export { default as BackTop } from './BackTop/BackTop.vue'
export { default as Sticky } from './Sticky/Sticky.vue'
export { default as InfiniteLoading } from './InfiniteLoading/InfiniteLoading.vue'

// 其他组件导出
export { default as City } from './City/City.vue'
export { default as CountDown } from './CountDown/CountDown.vue'

// 指令和函数导出
export { openDialog } from './Dialog/openDialog'
export * from './Directives/index'

// 导入所有组件用于全局安装
import Button from './Button/Button.vue'
import ButtonGroup from './Button/ButtonGroup'
import Icon from './Icon/Icon.vue'
import Avatar from './Avatar/Avatar.vue'
import Tag from './Tag/Tag.vue'
import Mark from './Mark/Mark.vue'
import Badge from './Badge/Badge.vue'
import Title from './Title/Title.vue'
import Flex from './Flex/Flex.vue'
import Row from './Grid/Row'
import Col from './Grid/Col'
import Layout from './Layout/Layout'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Aside from './Layout/Aside'
import Content from './Layout/Content'
import Input from './Input/Input.vue'
import InputPro from './InputPro/InputPro.vue'
import InputTag from './InputTag/InputTag.vue'
import Checkbox from './Checkbox/Checkbox.vue'
import CheckboxGroup from './Checkbox/CheckboxGroup.vue'
import Switch from './Switch/Switch.vue'
import RadioGroup from './Radio/RadioGroup.vue'
import Select from './Select/Select.vue'
import DatePicker from './DatePicker/DatePicker.vue'
import FormItem from './FormItem/FormItem.vue'
import Table from './Table/Table.vue'
import Card from './Card/Card.vue'
import Skeleton from './Skeleton/Skeleton.vue'
import Pagination from './Pagination/Pagination.vue'
import Comment from './Comment/Comment.vue'
import Tabs from './Tabs/Tabs.vue'
import Tab from './Tabs/Tab.vue'
import YunTabs from './Tabs/src/YunTabs.vue'
import Breadcrumb from './Breadcrumb/Breadcrumb.vue'
import Step from './Step/Step.vue'
import Steps from './Step/Steps.vue'
import StepsItem from './Step/StepsItem.vue'
import Alert from './Alert/Alert.vue'
import Modal from './Modal/Modal.vue'
import MyDialog from './Dialog/index.vue'
import PopOk from './PopOk/PopOk.vue'
import Popover from './Popover/Popover.vue'
import YunPopover from './Popover/YunPopover/YunPopover.vue'
import Dropdown from './Dropdown/Dropdown.vue'
import Drawer from './Drawer/Drawer.vue'

import * as directives from './Directives/index'

// 所有组件列表
const components = [
  Button,
  ButtonGroup,
  Icon,
  Avatar,
  Tag,
  Mark,
  Badge,
  Title,
  Flex,
  Row,
  Col,
  Layout,
  Header,
  Footer,
  Aside,
  Content,
  Input,
  InputPro,
  InputTag,
  Checkbox,
  CheckboxGroup,
  Switch,
  RadioGroup,
  Select,
  DatePicker,
  FormItem,
  Table,
  Card,
  Skeleton,
  Pagination,
  Comment,
  Tabs,
  Tab,
  YunTabs,
  Breadcrumb,
  Step,
  Steps,
  StepsItem,
  Alert,
  Modal,
  MyDialog,
  PopOk,
  Popover,
  YunPopover,
  Dropdown,
  Drawer,
]

// 安装函数
const install = (app: App): void => {
  // 注册所有组件
  components.forEach((component) => {
    if (component.name) {
      app.component(component.name, component)
    }
  })

  // 注册所有指令
  const directiveList = Object.keys(directives).map(
    (key) => directives[key as keyof typeof directives]
  )

  directiveList.forEach((directive: any) => {
    if (directive.hasOwnProperty('install')) {
      app.use(directive)
    } else if (directive.hasOwnProperty('name')) {
      if (typeof window !== 'undefined') {
        ;(window as any)[directive.name] = directive
      }
      app.config.globalProperties[directive.name] = directive
    }
  })
}

// 默认导出（全量引入）
export default {
  install,
  version: '1.0.0',
}
