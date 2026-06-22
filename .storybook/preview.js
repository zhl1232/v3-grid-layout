export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  docs: {
    toc: true
  },
  options: {
    storySort: {
      order: ['说明', 'GridLayout', 'API 参考', '*']
    }
  }
}
