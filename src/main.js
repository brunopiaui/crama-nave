import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import { store } from './store'

import gsap from 'gsap'

import NProgress from 'nprogress'
import '../node_modules/nprogress/nprogress.css'

Vue.config.productionTip = false

Vue.use(Vuex)

Vue.prototype.$gsap = gsap

NProgress.configure({ showSpinner: false })

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
