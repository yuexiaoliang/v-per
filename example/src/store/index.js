import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    roles: []
  },

  getters: {
    roles: (state) => state.roles,
    isLogin: (state) => state.roles.length > 0
  },

  mutations: {
    setRoles: (state, roles) => {
      state.roles = roles;
    }
  },

  actions: {
    getRoles({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('setRoles', ['admin', 'v1', 'v2']);
          resolve();
        }, 1000);
      });
    }
  }
});
