import Vue from "vue"
import Router from "vue-router"
import Home from "./components/screen/Home.vue"
import Login from "./components/screen/temp.vue"
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
    path: "/login",
    name: "login",
    component: Login
    },
    {
    path: "*",
    name: "dracula's culture club",
    component: Dracula
    },
  ]
});