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
    },
    {
      path: '/image02',
      name: 'image02',
      component: () => import('./views/Image02.vue'),
    },
    {
      path: '/image03',
      name: 'image03',
      component: () => import('./views/Image03.vue'),
    },
  ],
})

// import Vue from 'vue'
// import Router from 'vue-router'
// import Home from './views/Home.vue'
// import Image01 from './views/Image01.vue'
// import Image02 from './views/Image02.vue'
// import Image03 from './views/Image03.vue'

// Vue.use(Router)

// export default new Router({
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home,
//     },
//     {
//       path: '/image01',
//       name: 'image01',
//       component: Image01,
//     },
//     {
//       path: '/image02',
//       name: 'image02',
//       component: Image02,
//     },
//     {
//       path: '/image03',
//       name: 'image03',
//       component: Image03,
//     },
//   ],
// })
