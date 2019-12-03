import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/image01',
      name: 'image01',
      component: () => import('./views/Image01.vue'),
      meta: { index: 1 },
    },
    {
      path: '/image02',
      name: 'image02',
      component: () => import('./views/Image02.vue'),
      meta: { index: 2 },
    },
    {
      path: '/image03',
      name: 'image03',
      component: () => import('./views/Image03.vue'),
      meta: { index: 3 },
    },
  ],
})