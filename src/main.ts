import Vue from 'vue'
import App from '@/App.vue'

import 'windi.css'
import router from '@/router'

Vue.config.productionTip = false
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
