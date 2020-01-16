export default {
  state() {
    return {
      state: 'stateindexcomponent'
    }
  },
  getters: {
    gettersindexcomponent(state, getters, rootState) {
      console.log('gettersindexcomponent     ',rootState.state)
      return state.state + getters.getters2indexcomponent
    },
    getters2indexcomponent(state, getters, rootState) {
        return 'getters2indexcomponent'
      },
  },
  mutations: {
    mutationsindexcomponent(state, payload) {
      state.state = state.state + payload.mutationsindexcomponent
    }
  },
  actions: {
    actionsindexcomponent({ state, commit, rootState }, payload) {
      setTimeout(function () {
        commit({
          type: payload.type,
          mutationsindexcomponent: payload.actionsindexcomponent
        })
      }, 1000)
    },
  },

}
