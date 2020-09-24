import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loading: true,
    loadingGallery: true,
    backgrounds: [],
    nextBackground: '',
    progressing: true,
    progressingGallery: true,
    progress: 0,
    progressGallery: 0,
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
    progressingGallery: (state) => {
      return state.progressingGallery
    },
    progress: (state) => {
      return state.progress
    },
    progressGallery: (state) => {
      return state.progressGallery
    },
  },

  mutations: {
    setLoading(state, payload) {
      state.loading = payload
    },
    setLoadingGallery(state, payload) {
      state.loadingGallery = payload
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
    setProgressingGallery(state, payload) {
      state.progressingGallery = payload
    },
    setProgress(state, payload) {
      state.progress = payload
    },
    setProgressGallery(state, payload) {
      state.progressGallery = payload
    },
  },

  actions: {
    startLoadingAction({ commit }) {
      commit('setLoading', true)
    },
    stopLoadingAction({ commit }) {
      commit('setLoading', false)
    },
    startLoadingGalleryAction({ commit }) {
      commit('setLoadingGallery', true)
    },
    stopLoadingGalleryAction({ commit }) {
      commit('setLoadingGallery', false)
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
    startProgressingGalleryAction({ commit }) {
      commit('setProgressingGallery', true)
    },
    stopProgressingGalleryAction({ commit }) {
      commit('setProgressingGallery', false)
    },
    setProgressAction({ commit }, payload) {
      commit('setProgress', payload)
    },
    setProgressGalleryAction({ commit }, payload) {
      commit('setProgressGallery', payload)
    },
  },
})
