import Vuex from 'Vuex'
import Vue from 'Vue';
Vue.use(Vuex);

export default function() {
  return new Vuex.Store({
    state: {
      test: '123'
    },
    mutations: {
      SET_TEST(state, value) {
        state.test = value;
      }
    },
    actions: {
      async GET_TEST({ state }) {
        return state.test;
      },
      async LOAD_TEST({ commit }) {
        const words = ['something', 'Test', 'else'];
        commit('SET_TEST', words[~~(Math.random * words.length)]);
      }
    }
  })
}
