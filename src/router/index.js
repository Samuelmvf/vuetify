import Vue from "vue"
import VueRouter from "vue-router"
import HomePage from '@/components/pages/HomePage'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage
  }
]

const router = new VueRouter({
  mode: "history",
  base: "localhost:8080",
  routes
})

export default router
