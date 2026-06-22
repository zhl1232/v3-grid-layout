import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      packages: resolve(__dirname, 'packages')
    }
  },
  test: {
    environment: 'jsdom',
    include: ['packages/**/*.test.{ts,tsx}']
  }
})
