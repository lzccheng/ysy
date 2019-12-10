import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 适配
import './lib/rem'

// globComponents
import './globComponents'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
