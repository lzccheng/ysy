import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ajaxLoading: false
  },
  mutations: {
    SET_AJAXLOADING (state, data) {
      state.ajaxLoading = data
    }
  },
  actions: {
  },
  modules: {
  }
})
