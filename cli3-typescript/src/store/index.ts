/// <reference path="./index.d.ts" />

import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

function a<T> (argv: T) : T{
  console.log(argv)
  return argv
}

let aa: string = a<string>('123')


const state: INDEX.state = {
  helloWord: 123,
  helloWordMsg: 'Welcome to Your Vue.js + TypeScript App'
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
