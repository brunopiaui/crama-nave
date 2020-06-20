import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import { store } from './store'
import gsap from 'gsap'
import Vue2TouchEvents from 'vue2-touch-events'

require('@/assets/css/main.scss')

Vue.config.productionTip = false

Vue.use(Vue2TouchEvents)
Vue.use(Vuex)

Vue.prototype.$gsap = gsap

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
