import Vue from 'vue'
import App from './App.vue'
import router from './router'

import gsap from 'gsap'

import NProgress from 'nprogress'
import '../node_modules/nprogress/nprogress.css'

Vue.config.productionTip = false

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
  render: (h) => h(App),
}).$mount('#app')
