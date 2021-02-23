import Vue from "vue";
import App from "@/App.vue";
import VueCompositionApi from "@vue/composition-api";

Vue.use(VueCompositionApi)

import "windi.css";

Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
