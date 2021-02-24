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
      .set('api', resolve('src/api'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('config', resolve('src/config'))
      .set('directives', resolve('src/directives'))
      .set('libs', resolve('src/libs'))
      .set('modules', resolve('src/modules'))
      .set('views', resolve('src/views'))
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