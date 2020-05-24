import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieRouter from './Movie'
import CinemaRouter from './Cinema'
import MineRouter from './Mine'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    MovieRouter,
    MineRouter,
    CinemaRouter,
    {
      path : "/*",
      redirect : "/movie",
    }
  ]
})

export default router
