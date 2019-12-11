import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const modulesFiles = require.context('./module', false, /\.js$/)
// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//   console.log('modules, modulePath', modules, modulePath)
//   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//   const value = modulesFiles(modulePath)
//   console.log('value:', value, moduleName)
//   modules[moduleName] = value.default
//   return modules
// }, {})
// console.log('modulesFiles:', modulesFiles.keys(), modules)

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
