const path = require('path')

const CompressionPlugin = require('compression-webpack-plugin')

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
  },
  
  // 开启GZip压缩
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.mode = 'production'
      return {
        plugins: [new CompressionPlugin({
          test: /\.js$|\.html$|\.css/, // 匹配文件名
          threshold: 10240, // 对超过10k的数据进行压缩
          deleteOriginalAssets: false // 是否删除原文件
        })]
      }
    }
  }
}