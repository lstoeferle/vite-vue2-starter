import Vue from "vue";
import App from "@/App.vue";
import VueCompositionApi, { createApp, h } from "@vue/composition-api";

Vue.use(VueCompositionApi);

import "windi.css";

Vue.config.productionTip = false;
Vue.config.devtools = true;

const app = createApp({
  render: () => h(App),
});

app.mount("#app");
