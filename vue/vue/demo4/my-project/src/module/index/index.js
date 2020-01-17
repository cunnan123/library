export default {
  namespaced: true,
  state() {
    return {
      state: 'stateindexcomponent',
      state3: 'state3',
    }
  },
  getters: {
    gettersindexcomponent(state, getters, rootState, rootGetters) {
      return state.state + getters.getters2indexcomponent
    },
    getters2indexcomponent(state, getters, rootState, rootGetters) {
        return 'getters2indexcomponent'
      },
  },
  mutations: {
    mutationsindexcomponent(state, payload) {
      state.state = state.state + payload.mutationsindexcomponent
    }
  },
  actions: {
    actionsindexcomponent({ state, commit, rootState, rootGetters }, payload) {
      setTimeout(function () {
        commit({
          type: payload.type,
          mutationsindexcomponent: payload.actionsindexcomponent
        })
        //调用全局的mutations
        commit('MUTATIONS',{ mutations: '11111mutations21111'},{root:true})
      }, 1000)
    },
    //在模块中注册全局action
    someGlobalAction: {
      root: true,
      handler ({ state, commit, rootState, rootGetters }, payload) { 
        
       } 
    }
  },

}
