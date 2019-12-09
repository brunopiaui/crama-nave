import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loading: false,
    backgroundImages: {},
    nextBackgroundImage: '',
  },

  getters: {
    loading: (state) => {
      return state.loading
    },
    backgroundImages: (state) => (image) => {
      return state.backgroundImages[image]
    },
    nextBackgroundImage: (state) => {
      return state.nextBackgroundImage
    },
  },

  mutations: {
    setLoading(state, payload) {
      state.loading = payload
    },
    addToBackgroundImages(state, payload) {
      state.backgroundImages = payload
    },
    setNextBackgroundImage(state, payload) {
      state.nextBackgroundImage = payload
    },
  },

  actions: {
    startLoadingAction({ commit }) {
      commit('setLoading', true)
    },
    stopLoadingAction({ commit }) {
      commit('setLoading', false)
    },
    addToBackgroundImagesAction({ commit, state }, payload) {
      const backgroundImages = { ...state.backgroundImages, ...payload }
      commit('addToBackgroundImages', backgroundImages)
    },
    setNextBackgroundImageAction({ commit }, payload) {
      commit('setNextBackgroundImage', payload)
    },
  },
})
