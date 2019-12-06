import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () =>
        import(
          /* webpackChunkName: "Home" */
          /* webpackPreload: true */
          './views/Home.vue'
        ),
    },
    {
      path: '/image01',
      name: 'image01',
      component: () =>
        import(
          /* webpackChunkName: "Image01" */
          /* webpackPreload: true */
          './views/Image01.vue'
        ),
      meta: { index: 1 },
    },
    {
      path: '/image02',
      name: 'image02',
      component: () =>
        import(
          /* webpackChunkName: "Image02" */
          /* webpackPreload: true */
          './views/Image02.vue'
        ),
      meta: { index: 2 },
    },
    {
      path: '/image03',
      name: 'image03',
      component: () =>
        import(
          /* webpackChunkName: "Image03" */
          /* webpackPreload: true */
          './views/Image03.vue'
        ),
      meta: { index: 3 },
    },
  ],
})
