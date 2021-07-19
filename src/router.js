import Vue from "vue"
import Router from "vue-router"
import Home from "./components/screen/Home.vue"
import screen from "./components/screen/screen.vue"

//import Login from "./components/screen/login.vue"
const fakeFourOFour = () => import(/* webpackChunkName: "group-mainpage" */ "./components/screen/placeholder404.vue")
const About = () => import(/* webpackChunkName: "group-mainpage" */ "./components/screen/aboutNew.vue")
const ComicArch = () => import(/* webpackChunkName: "group-mainpage" */ "./components/screen/comicArch.vue")
const ProjArch = () => import(/* webpackChunkName: "group-mainpage" */ "./components/screen/projArch.vue")

//pages that exist outside of borders
const ComicReader  = () => import(/* webpackChunkName: "group-reader" */ "./components/outerbounds/comicReader.vue")
const ArticleReader  = () => import(/* webpackChunkName: "group-reader" */ "./components/outerbounds/articleReader.vue")

//projects
const sbboardExit = () => import("./components/projects/sbboardExit.vue")
const picross = () => import("./components/projects/picross.vue")

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/comicReader/:id/:cat?",
      component: ComicReader
    },
    {
      path: "/article/:id/",
      component: ArticleReader
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
        path: "/projects",
        name: "game shop",
        component: ProjArch
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
        path: "/picross",
        name: "Picross",
        component: picross
      },
      {
        path: "/:string",
        name: "Cultur Club",
        component: fakeFourOFour
      },
      {
        path: "/*",
        name: "Cultur Club",
        component: fakeFourOFour
      },
    ]
  },
  ]
});