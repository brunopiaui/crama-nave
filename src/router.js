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
      meta: { index: 0, image: 'image04', video: 'video01' },
    },
    {
      path: '/consultoria',
      name: 'consultoria',
      component: () =>
        import(
          /* webpackChunkName: "Image01" */
          '@/views/Consultoria.vue'
        ),
      meta: { index: 1, image: 'image01' },
    },
    {
      path: '/novosnegocios',
      name: 'novosnegocios',
      component: () =>
        import(
          /* webpackChunkName: "Image02" */
          '@/views/novosnegocios.vue'
        ),
      meta: { index: 2, image: 'image02' },
    },
    {
      path: '/biopaisagismo',
      name: 'biopaisagismo',
      component: () =>
        import(
          /* webpackChunkName: "Image03" */
          '@/views/Biopaisagismo.vue'
        ),
      meta: { index: 3, image: 'image03' },
    },
    {
      path: '/bioviva',
      name: 'bioviva',
      component: () =>
        import(
          /* webpackChunkName: "Image04" */
          '@/views/Bioviva.vue'
        ),
      meta: { index: 4, image: 'imagebio' },
    },
    {
      path: '/midia',
      name: 'midia',
      component: () =>
        import(
          /* webpackChunkName: "Image04" */
          '@/views/Midia.vue'
        ),
      meta: { index: 5, image: 'image03', noMenu: true },
    },
    {
      path: '/contato',
      name: 'contato',
      component: () =>
        import(
          /* webpackChunkName: "Image04" */
          '@/views/Contato.vue'
        ),
      meta: { index: 6, image: 'image01' },
    },
  ],
})
