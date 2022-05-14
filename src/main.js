import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import VueMeta from 'vue-meta'

import router from './router.js';
import {store} from './store.js';

Vue.config.productionTip = false
Vue.use(VueLazyload, {
  preLoad: 1.3,
  //loading: '/assets/global/comics/nerv2.gif',
  attempt: 3,
})

Vue.use(VueMeta)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
