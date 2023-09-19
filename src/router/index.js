import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/bardemo1',
    name: 'bardemo1',
    component: () => import('../views/echartsDemo/BarDemo1.vue')
  },
  {
    path: '/bardemo2',
    name: 'bardemo2',
    component: () => import('../views/echartsDemo/BarDemo2.vue')
  },
  {
    path: '/linedemo1',
    name: 'linedemo1',
    component: () => import('../views/echartsDemo/LineDemo.vue')
  },
  {
    path: '/boardtest1',
    name: 'boardtest1',
    component: () => import('../views/element/BoardTest1.vue')
  },
  {
    path: '/boarddatav',
    name: 'boarddatav',
    component: () => import('../views/element/BoardDatav.vue')
  },
  {
    path: '/crouterview1',
    name: 'crouterview1',
    component: () => import('../views/element/CRouterView1.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
