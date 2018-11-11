import Vue from 'vue'
import App from './App.vue'
import * as VueGL from "vue-gl";

Vue.config.productionTip = false

Object.keys(VueGL).forEach(name => {
    Vue.component(name, VueGL[name]);
});

new Vue({
  render: h => h(App),
}).$mount('#app')
