import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 自动导入模块
const modulesFiles = require.context('./modules', false, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = modulesFiles(modulePath)
    modules[moduleName] = value.default
    return modules
}, {})

export default new Vuex.Store({
  modules,
  state: {
    ajaxLoading: false
  },
  mutations: {
    SET_AJAXLOADING (state, data) {
      state.ajaxLoading = data
    }
  },
  actions: {
  }
})
