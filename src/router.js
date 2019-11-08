import Vue from "vue"
import Router from "vue-router"
import Home from "./components/screen/Home.vue"
import Login from "./components/screen/login.vue"
import fakeFourOFour from "./components/screen/placeholder404.vue"
import About from "./components/screen/about.vue"
import AboutNew from "./components/screen/aboutNew.vue"
import ComicArch from "./components/screen/comicArch.vue"
import ProjArch from "./components/screen/projArch.vue"
import ComicReader from "./components/outerbounds/comicReader.vue"
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
        name: "gang fight",
        component: Home
      },
      {
        path: "/about",
        name: "cockpit",
        component: About
      },
      {
        path: "/aboutNew",
        name: "cockpit",
        component: AboutNew
      },
      {
        path: "/project",
        name: "game shoppe",
        component: ProjArch
      },
      {
        path: "/login",
        name: "login",
        component: Login
      },
      {
        path: "/comic",
        name: "ramen cart",
        component: ComicArch
      },
      {
        path: "/sbboard",
        name: "SBboard",
        component: sbboardExit
      },
      {
        path: "*",
        name: "Culture Club",
        component: fakeFourOFour
      },
    ]
  },
  ]
});