import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import user from './modules/user'
import enhance from './modules/enhance'
import online from './modules/online'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    user,
    enhance,
    online
  },
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters
})
