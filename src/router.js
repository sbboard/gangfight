import Vue from "vue"
import Router from "vue-router"
import Home from "./components/screen/Home.vue"
import Login from "./components/screen/login.vue"
import Dracula from "./components/screen/dracula.vue"
import fakeFourOFour from "./components/screen/placeholder404.vue"
import About from "./components/screen/about.vue"
import Comics from "./components/screen/comics.vue"
import Projects from "./components/screen/projects.vue"

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
    path: "/comic",
    name: "comics",
    component: Comics
    },
    {
    path: "/project",
    name: "projects",
    component: Projects
    },
    {
    path: "*",
    name: "404",
    component: fakeFourOFour
    },
  ]
});