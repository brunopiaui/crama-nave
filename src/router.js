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
          '@/views/Home.vue'
        ),
      meta: { index: 0, image: 'image00' },
    },
    {
      path: '/image01',
      name: 'image01',
      component: () =>
        import(
          /* webpackChunkName: "Image01" */
          '@/views/Image01.vue'
        ),
      meta: { index: 1, image: 'image01' },
    },
    {
      path: '/image02',
      name: 'image02',
      component: () =>
        import(
          /* webpackChunkName: "Image02" */
          '@/views/Image02.vue'
        ),
      meta: { index: 2, image: 'image02' },
    },
    {
      path: '/image03',
      name: 'image03',
      component: () =>
        import(
          /* webpackChunkName: "Image03" */
          '@/views/Image03.vue'
        ),
      meta: { index: 3, image: 'image03' },
    },
    {
      path: '/image04',
      name: 'image04',
      component: () =>
        import(
          /* webpackChunkName: "Image04" */
          '@/views/Image04.vue'
        ),
      meta: { index: 4, image: 'image04', video: 'video01' },
    },
  ],
})
