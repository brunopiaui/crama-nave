import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loading: true,
    backgrounds: [],
    nextBackground: '',
    progressing: true,
    progress: 0,
  },

  getters: {
    loading: (state) => {
      return state.loading
    },
    backgrounds: (state) => (filter) => {
      return state.backgrounds.find((background) => background.name === filter)
    },
    nextBackground: (state) => {
      return state.nextBackground
    },
    progressing: (state) => {
      return state.progressing
    },
    progress: (state) => {
      return state.progress
    },
  },

  mutations: {
    setLoading(state, payload) {
      state.loading = payload
    },
    addToBackgrounds(state, payload) {
      state.backgrounds = payload
    },
    setNextBackground(state, payload) {
      state.nextBackground = payload
    },
    setProgressing(state, payload) {
      state.progressing = payload
    },
    setProgress(state, payload) {
      state.progress = payload
    },
  },

  actions: {
    startLoadingAction({ commit }) {
      commit('setLoading', true)
    },
    stopLoadingAction({ commit }) {
      commit('setLoading', false)
    },
    addToBackgroundsAction({ commit, state }, payload) {
      const backgrounds = [...state.backgrounds, payload]
      commit('addToBackgrounds', backgrounds)
    },
    setNextBackgroundAction({ commit }, payload) {
      commit('setNextBackground', payload)
    },
    startProgressingAction({ commit }) {
      commit('setProgressing', true)
    },
    stopProgressingAction({ commit }) {
      commit('setProgressing', false)
    },
    setProgressAction({ commit }, payload) {
      commit('setProgress', payload)
    },
  },
})
