import { md } from './plugins/md'
import fs from 'fs'
import path from 'path'
import { baseParse, ElementNode } from '@vue/compiler-core'
import { defineConfig } from 'vite'
import { searchTagContent } from './src/utils'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import compressPlugin from 'vite-plugin-compression'

type FindElementType = {
  tag: string
} & ElementNode
const yunDemoParse = {
  name: 'yun-demo-parse',
  transform(code: string, id: string) {
    if (!/vue&type=demo/.test(id)) return
    const title = searchTagContent(code, 'title') || code
    const description = searchTagContent(code, 'desc')
    const file = fs.readFileSync(id.split('?')[0]).toString()
    const parsed = baseParse(file).children.find((n: FindElementType) => n.tag === 'demo')
    const main = file.split(parsed.loc.source).join('').trim()
    const sourceCode = main
    return `export default Comp => {
      Comp.__sourceCode = ${JSON.stringify(sourceCode)}
      Comp.__sourceCodeTitle = ${JSON.stringify(title)}
      Comp.__sourceDescription = ${JSON.stringify(description)}
    }`
  },
}

export default defineConfig({
  server: {
    port: 8888, // 默认启动端口
    host: true, // 允许外部访问
    open: true, // 自动打开浏览器
  },
  build: {
    assetsDir: 'assets',
  },
  base: process.env.NODE_ENV === 'production' ? '/Yun-UI/' : '//',
  plugins: [
    md(),
    vue(),
    yunDemoParse,
    vueJsx(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[name]',
    }),
    // compressPlugin开启gzip压缩
    compressPlugin({
      ext: '.gz',
      deleteOriginFile: false, // 是否删除原始文件
    }),
  ],
  resolve: {
    alias: {
      'yun-ui': path.resolve('lib'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
