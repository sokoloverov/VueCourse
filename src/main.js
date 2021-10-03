import Vue from 'vue'
import App from './App.vue'

import store from './store/store'
import router from './router/router'
import modal from './plagins/ModalWindow/modal'

Vue.config.productionTip = false
Vue.use(modal)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
