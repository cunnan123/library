import TYPE from './types'
export default {
  [TYPE.ACTIONS.ACTIONS]({commit},payload) {
    setTimeout(function(){
        commit({
          type: payload.type,
          mutations: payload.actions
        }) 
    }, 1000)
  },
  // 假设 getData() 和 getOtherData() 返回的是 Promise
  async actionA ({ commit }) {
    commit('gotData', await getData())
  },
  async actionB ({ dispatch, commit }) {
    await dispatch('actionA') // 等待 actionA 完成
    commit('gotOtherData', await getOtherData())
  }
}
