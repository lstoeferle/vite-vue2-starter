import Vue from 'vue'
import type { RouteConfig } from 'vue-router'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

export const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    // NOTE: you can also apply meta information
    // meta: {authRequired: false }
    component: Home,
    // NOTE: you can also lazy-load the component
    // component: () => import("@/views/About.vue")
  },
  {
    path: '/:path(.*)',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes,
})

export default router
