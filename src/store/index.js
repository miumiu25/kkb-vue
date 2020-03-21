import Vue from 'vue'
import Vuex from 'vuex'

import permission from './permission'
import user from './user'

Vue.use(Vuex)


/* eslint-disable no-new */
const store = new Vuex.Store({
  modules: {
    permission,user
  },
  getters: {
    roles:state=>state.user.roles
  }
})

export default store
