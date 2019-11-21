import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api/http'
Vue.prototype.$api = api

Vue.config.productionTip = false

window.vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
