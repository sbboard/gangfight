import Vue from "vue"
import Router from "vue-router"
import Home from "./components/screen/Home.vue"
import Login from "./components/screen/login.vue"
//import Dracula from "./components/screen/dracula.vue"
import fakeFourOFour from "./components/screen/placeholder404.vue"
import About from "./components/screen/about.vue"
import Comics from "./components/screen/comics.vue"
import ComicReader from "./components/outerbounds/comicReader.vue"
import Projects from "./components/screen/projects.vue"
import screen from "./components/screen/screen.vue"
import sbboardExit from "./components/outerbounds/sbboardExit.vue"

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/comicReader/:id",
      component: ComicReader
    },
    { path: '/', component: screen,
    children: [
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
        path: "/sbboard",
        name: "SBboard",
        component: sbboardExit
      },
      {
        path: "*",
        name: "404",
        component: fakeFourOFour
      },
    ]
  },
  ]
});