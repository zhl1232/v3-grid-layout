module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        'targets': {
          'browsers': ['last 2 versions'] // 最近 2 个版本的浏览器
        }
      }]
  ],
  plugins: [
    "@vue/babel-plugin-jsx",
    '@babel/plugin-transform-runtime'
  ]
}

