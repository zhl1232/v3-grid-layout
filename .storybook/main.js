/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    const vueJsx = (await import('@vitejs/plugin-vue-jsx')).default;
    return mergeConfig(config, {
      plugins: [
        vueJsx({
          exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
        }),
      ],
    });
  },
};

export default config;
