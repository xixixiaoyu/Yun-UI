import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue({
      // 确保 Vue 组件的样式被正确处理
      style: {
        filename: 'style.css',
      },
    }),
    vueJsx(),
    dts({
      insertTypesEntry: true,
      copyDtsFiles: true,
      include: ['src/lib/**/*'],
      exclude: ['src/lib/**/*.demo.vue', 'src/lib/**/*.test.*'],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/index.ts'),
      name: 'YunUI',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => {
        const formatMap = {
          es: 'yun-ui.esm.js',
          cjs: 'yun-ui.cjs.js',
          umd: 'yun-ui.umd.js',
        }
        return formatMap[format] || `yun-ui.${format}.js`
      },
    },
    rollupOptions: {
      // 确保 Vue 作为外部依赖
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        // 样式文件单独输出
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'style.css'
          }
          return assetInfo.name || 'assets/[name].[ext]'
        },
        // 确保导出格式正确
        exports: 'named',
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
    // 优化构建性能
    minify: 'terser',
    sourcemap: false,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  // CSS 处理配置
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/lib/style/var.scss";`,
      },
    },
  },
})
