import Vue from 'vue'
import Vuex from 'vuex'

import {mutations} from './mutations'
import {actions} from './action'
import {getters} from './getter'

Vue.use(Vuex)



export default new Vuex.Store({
  state:{
    cartlist:[]
  },
  mutations,
  actions,
  modules: {
  },
  getters
})
