import Vue from "vue"
import Router from "vue-router"
import Home from "./components/screen/temp.vue"
import Dracula from "./components/screen/dracula.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
    path: "/",
    name: "home",
    component: Home
    },
    {
    path: "*",
    name: "404/405",
    component: Dracula
    },
  ]
});