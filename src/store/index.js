
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as actions from './actions'
import  mutations from './mutations'
import * as getters from './getters'

Vue.use(Vuex)
const store=new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
export default store
