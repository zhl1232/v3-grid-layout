import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      entryRoot: 'packages',
      outDir: 'dist',
    }),
    vue(),
    vueJsx(),
  ],
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, '../packages/index.ts'),
      name: 'VueGridLayoutNext',
      fileName: (format) => `vue-grid-layout-next.${format === 'es' ? 'es' : 'umd'}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        assetFileNames: 'style.[ext]',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
