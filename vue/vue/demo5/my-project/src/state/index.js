import TYPE from './types'
export default {
    // strict: process.env.NODE_ENV !== 'production',
  state: function () {
    return {
      state: 'state',
      message: "demo6",
    }
  },
  getters: {
    getters(state, getters) {
      return state.state + getters.getters2
    },
    getters2(state, getters) {
      return 'getters2'
    },
    getters3(state, getters) {
      return function (param) {
        return param
      }
    }

  },
  mutations: {
    [TYPE.MUTATIONS.MUTATIONS](state, payload) {
      state.state = state.state + payload.mutations
    },
    updateMessage(state, payload) {
      console.log('aa', state.message, payload)
      state.message = payload
      console.log('bb', state.message, payload)
    }
  },
  actions: {
    [TYPE.ACTIONS.ACTIONS]({commit}, payload) {
      setTimeout(function () {
        commit({
          type: payload.type,
          mutations: payload.actions
        })
      }, 1000)
    },
    // // 假设 getData() 和 getOtherData() 返回的是 Promise
    // async actionA({
    //   commit
    // }) {
    //   commit('gotData', await getData())
    // },
    // async actionB({
    //   dispatch,
    //   commit
    // }) {
    //   await dispatch('actionA') // 等待 actionA 完成
    //   commit('gotOtherData', await getOtherData())
    // }
  },
  modules: {
    index: {
      namespaced: true,
      state() {
        return {
          state: 'stateindexcomponent',
          state3: 'state3',
        }
      },
      getters: {
        gettersindexcomponent(state, getters, rootState, rootGetters) {
          return state.state +'----'+ getters.getters2indexcomponent
        },
        getters2indexcomponent(state, getters, rootState, rootGetters) {
          return 'getters2indexcomponent'
        },
      },
      mutations: {
        mutationsindexcomponent(state, payload) {
          state.state = state.state +'----' +payload.mutationsindexcomponent
        }
      },
      actions: {
        actionsindexcomponent({state, commit,rootState,rootGetters}, payload) {
          setTimeout(function () {
            commit({type: payload.type, mutationsindexcomponent: payload.actionsindexcomponent})
            //调用全局的mutations
            commit('MUTATIONS', {mutations: '--------mutations'}, {root: true})
          }, 1000)
        },
        // //在模块中注册全局action
        // someGlobalAction: {
        //   root: true,
        //   handler({state,commit, rootState, rootGetters }, payload) {

        //   }
        // }
      },
    }
  },
}
