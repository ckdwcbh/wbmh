import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/style/base.scss'
import VueBacktotop from './directives/backtotop'

// 引入 ElementUi 和 它的样式
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 调用 ElementUi
Vue.use(ElementUi)

Vue.config.productionTip = false

Vue.use(VueBacktotop)
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
