import Vue from "vue";
import App from "./App.vue";
import VueMeta from "vue-meta";

import router from "./router.js";
import { store } from "./store.js";

Vue.config.productionTip = false;

Vue.use(VueMeta);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
