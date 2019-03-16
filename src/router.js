import Vue from "vue"
import Router from "vue-router"
import Home from "./components/screen/Home.vue"
import Login from "./components/screen/login.vue"
import Dracula from "./components/screen/dracula.vue"
import About from "./components/screen/about.vue"

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
    path: "/",
    name: "home",
    component: Home
    },
    {
    path: "/about",
    name: "about us",
    component: About
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