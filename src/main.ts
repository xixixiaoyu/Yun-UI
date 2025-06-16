import './index.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import 'github-markdown-css'
import YunUI, { useREM } from './lib/index'
import 'virtual:svg-icons-register'

useREM()
const app = createApp(App)
app.use(YunUI)
app.use(router)
app.mount('#app')
