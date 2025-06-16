import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo/index.vue'
import ButtonDemo from './components/ButtonDemo/index.vue'
import DialogDemo from './components/DialogDemo/index.vue'
import TabsDemo from './components/TabsDemo/index.vue'
import StepDemo from './components/StepDemo/index.vue'
import LayoutDemo from './components/LayoutDemo/index.vue'
import CardDemo from './components/CardDemo/index.vue'
import InputDemo from './components/InputDemo/index.vue'
import ToastDemo from './components/ToastDemo/index.vue'
import CarouselDemo from './components/Carousel/index.vue'
import BackTopDemo from './components/BackTopDemo/index.vue'
import GridDemo from './components/GridDemo/index.vue'
import SkeletonDemo from './components/SkeletonDemo/index.vue'
import BreadcrumbDemo from './components/BreadcrumbDemo/index.vue'
import PaginationDemo from './components/PaginationDemo/index.vue'
import CityDemo from './components/CityDemo/index.vue'
import InfiniteLoadingDemo from './components/InfiniteLoadingDemo/index.vue'
import StickyDemo from './components/StickyDemo/index.vue'
import CountDownDemo from './components/CountDownDemo/index.vue'
import PopoverDemo from './components/PopoverDemo/index.vue'
import DrawerDemo from './components/DrawerDemo/index.vue'
import AvatarDemo from './components/AvatarDemo/index.vue'
import IconDemo from './components/IconDemo/index.vue'
import TagDemo from './components/TagDemo/index.vue'
import MarkDemo from './components/MarkDemo/index.vue'
import ColorDemo from './components/ColorDemo/index.vue'
import BadgeDemo from './components/BadgeDemo/index.vue'
import TitleDemo from './components/TitleDemo/index.vue'
import FlexDemo from './components/FlexDemo/index.vue'
import TooltipDemo from './components/TooltipDemo/index.vue'
import CheckboxDemo from './components/CheckboxDemo/index.vue'
import DropdownDemo from './components/DropdownDemo/index.vue'
import InputProDemo from './components/InputProDemo/index.vue'
import InputTagDemo from './components/InputTagDemo/index.vue'
import RadioDemo from './components/RadioDemo/index.vue'
import SelectDemo from './components/SelectDemo/index.vue'
import DatePickerDemo from './components/DatePickerDemo/index.vue'
import FormItemDemo from './components/FormItemDemo/index.vue'
import TableDemo from './components/TableDemo/index.vue'
import AlertDemo from './components/AlertDemo/index.vue'
import PopOkDemo from './components/PopOkDemo/index.vue'
import NotificationDemo from './components/NotificationDemo/index.vue'
import ModalDemo from './components/ModalDemo/index.vue'
import LoadingDemo from './components/LoadingDemo/index.vue'
import CommentDemo from './components/CommentDemo/index.vue'
import DesignSystemDemo from './components/DesignSystemDemo.vue'

import { h } from 'vue'
import Markdown from './components/Markdown.vue'
import intro from './markdown/intro.md'
import getStarted from './markdown/get-started.md'
import install from './markdown/install.md'
const md = string => h(Markdown, { content: string, key: string })

const history = createWebHashHistory()
export const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home, name: 'home' },
    {
      path: '/doc',
      component: Doc,
      children: [
        { path: '', redirect: '/doc/intro' },
        { path: 'intro', component: md(intro) },
        { path: 'get-started', component: md(getStarted) },
        { path: 'install', component: md(install) },
        { path: 'design-system', component: DesignSystemDemo },
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo },
        { path: 'step', component: StepDemo },
        { path: 'layout', component: LayoutDemo },
        { path: 'card', component: CardDemo },
        { path: 'input', component: InputDemo },
        { path: 'toast', component: ToastDemo },
        { path: 'carousel', component: CarouselDemo },
        { path: 'backtop', component: BackTopDemo },
        { path: 'grid', component: GridDemo },
        { path: 'skeleton', component: SkeletonDemo },
        { path: 'breadcrumb', component: BreadcrumbDemo },
        { path: 'pagination', component: PaginationDemo },
        { path: 'city', component: CityDemo },
        { path: 'infinite', component: InfiniteLoadingDemo },
        { path: 'sticky', component: StickyDemo },
        { path: 'countdown', component: CountDownDemo },
        { path: 'popover', component: PopoverDemo },
        { path: 'drawer', component: DrawerDemo },
        { path: 'avatar', component: AvatarDemo },
        { path: 'icon', component: IconDemo },
        { path: 'tag', component: TagDemo },
        { path: 'mark', component: MarkDemo },
        { path: 'color', component: ColorDemo },
        { path: 'badge', component: BadgeDemo },
        { path: 'title', component: TitleDemo },
        { path: 'flex', component: FlexDemo },
        { path: 'tooltip', component: TooltipDemo },
        { path: 'checkbox', component: CheckboxDemo },
        { path: 'dropdown', component: DropdownDemo },
        { path: 'inputPro', component: InputProDemo },
        { path: 'inputTag', component: InputTagDemo },
        { path: 'radio', component: RadioDemo },
        { path: 'select', component: SelectDemo },
        { path: 'datePicker', component: DatePickerDemo },
        { path: 'formItem', component: FormItemDemo },
        { path: 'table', component: TableDemo },
        { path: 'alert', component: AlertDemo },
        { path: 'popok', component: PopOkDemo },
        { path: 'notification', component: NotificationDemo },
        { path: 'modal', component: ModalDemo },
        { path: 'loading', component: LoadingDemo },
        { path: 'comment', component: CommentDemo }
      ]
    }
  ]
})
router.afterEach(() => {
  // console.log("路由切换了");
})
