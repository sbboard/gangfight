import Vue from "vue"
import Router from "vue-router"
import Home from "./components/screen/Home.vue"
import Login from "./components/screen/login.vue"
import fakeFourOFour from "./components/screen/placeholder404.vue"
import About from "./components/screen/aboutNew.vue"
import ComicArch from "./components/screen/comicArch.vue"
import ProjArch from "./components/screen/projArch.vue"
import screen from "./components/screen/screen.vue"
//pages that exist outside of borders
import ComicReader from "./components/outerbounds/comicReader.vue"
//projects
import sbboardExit from "./components/projects/sbboardExit.vue"
import chameleon from "./components/projects/ChamMan.vue"
import picross from "./components/projects/picross.vue"

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/comicReader/:id/:cat?",
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
        name: "home net",
        component: About
      },
      {
        path: "/project",
        name: "game shop",
        component: ProjArch
      },
      {
        path: "/login",
        name: "login",
        component: Login
      },
      {
        path: "/comic",
        name: "noodle cart",
        component: ComicArch
      },
      {
        path: "/sbboard",
        name: "SBboard",
        component: sbboardExit
      },
      {
        path: "/chameleon",
        name: "Chameleon",
        component: chameleon
      },
      {
        path: "/picross",
        name: "Picross",
        component: picross
      },
      {
        path: "/:string",
        name: "Cultur Club",
        component: fakeFourOFour
      },
    ]
  },
  ]
});