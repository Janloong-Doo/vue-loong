import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    num: 12
  },
  mutations: {
      pluses(state, id) {
        state.num += id
      },
      jian(state, id) {
        state.num -= id
      }
  },
  actions: {
    reduce(state, id) {
      state.commit('jian', id)
    }

  }
});
