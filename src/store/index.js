import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formDatas: null,
    token: null
  },
  mutations: {
    getFormData(state, data) {
      state.formDatas = data;
    },
    tokenHandler(state, token) {
      state.token = token;
      window.localStorage.setItem("token", token);
    }
  },
  actions: {
  },
  modules: {
  }
})
