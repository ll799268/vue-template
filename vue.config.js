const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('views', resolve('src/views'))
      .set('components', resolve('src/components'))
      .set('libs', resolve('src/libs'))
      .set('modules', resolve('src/modules'))
      .set('api', resolve('src/api'))
      .set('config', resolve('src/config'))
  },
  devServer: {
    open: true,
    // proxy: {
    // '/api/': {
    //   target: '',
    //   changeOrigin: true,
    //   pathRewrite: { '^/api/': '' }
    // }
    // }
  }
}