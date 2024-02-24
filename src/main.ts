import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'

import '@/assets/css/main.css'

Vue.config.productionTip = false
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
