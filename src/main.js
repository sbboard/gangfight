import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'

import router from './router.js';
import {store} from './store.js';

Vue.config.productionTip = false
Vue.use(VueLazyload)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
