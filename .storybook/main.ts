import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  async viteFinal(storybookConfig) {
    const { mergeConfig } = await import('vite')
    const vueJsxPlugin = (await import('@vitejs/plugin-vue-jsx')).default
    return mergeConfig(storybookConfig, {
      plugins: [
        vueJsxPlugin({
          exclude: [/\.stories\.(t|j)sx?$/, /node_modules/]
        })
      ]
    })
  }
}

export default config
