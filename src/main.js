import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/style/base.scss'
import VueBacktotop from './directives/backtotop'

Vue.config.productionTip = false

Vue.use(VueBacktotop)
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
