# vue-template

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```


## ui 框架（vant）按需引入 
  ``` js
    import { Button } from 'vant' （引入）
    components: { [Button.name]: Button } (注册)
    <van-button type="primary">主要按钮</van-button> (使用)
  ```

## 页面适配 (postcss-px2rem)
  ```
    在750px的设计图下 1px === iphone6 设备上的1px
  ```

## 目录结构描述
```
  ├── public                      // 静态文件夹                                 
  │   ├── favicon.ico                 
  │   └── index.html               // 入口页面
  ├── src                         // 源码目录
  │   ├── api                     // 请求数据
  │   │ assets                    // 模块资源
  │   │ components                // 公共组件
  │   │ config                    // 配置文件
  │   │ libs                      // 工具类
  │   │ mock                      // mock数据
  │   │ modules                   // 模块相关
  │   │ router                    // 路由配置
  │   │ store                     // 状态管理
  │   │ views                     // 页面组件
  │   │ App.vue                   // 页面入口文件
  │   └──main.js                  // 入口文件
  ├── .env.development            // 开发环境配置
  ├── .env.production             // 生产环境配置
  ├── babel.config.js             // babel语法编译
  ├── package.json                // 项目基本信息
  ├── postcss.config.js           // CSS预处理器(此处默认启用autoprefixer) 
  └── vue.config.js               // 配置文件
```
