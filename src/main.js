import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import '@assets/scss/index.scss'

import Directives from '@directives'
Vue.use(Directives)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')