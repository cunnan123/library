import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
import 'es6-promise/auto'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
      console.log(state.count,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    }
  },
  actions: {
    incrementBy(context,params){
      console.log(params)
    },
    // increment (context) {
    //   context.commit('increment')
    // }
    increment ({ commit }) {
      commit('increment')
    },
    incrementAsync ({ commit },aaa) {
      setTimeout(() => {
        commit('increment')
        console.log(aaa)
      }, 1000)
    },
    checkout ({ commit, state }, products) {
      // 把当前购物车的物品备份起来
      const savedCartItems = [...state.cart.added]
      // 发出结账请求，然后乐观地清空购物车
      commit(types.CHECKOUT_REQUEST)
      // 购物 API 接受一个成功回调和一个失败回调
      shop.buyProducts(
        products,
        // 成功操作
        () => commit(types.CHECKOUT_SUCCESS),
        // 失败操作
        () => commit(types.CHECKOUT_FAILURE, savedCartItems)
      )
    },
    actionA ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('someMutation')
          resolve()
        }, 1000)
      })
    },
    actionB ({ dispatch, commit }) {
      return dispatch('actionA').then(() => {
        commit('someOtherMutation')
      })
    },
    // 一个 store.dispatch 在不同模块中可以触发多个 action 函数。在这种情况下，只有当所有触发函数完成后，返回的 Promise 才会执行。
    // 一个 store.dispatch 在不同模块中可以触发多个 action 函数。在这种情况下，只有当所有触发函数完成后，返回的 Promise 才会执行。
    // // 假设 getData() 和 getOtherData() 返回的是 Promise
    async actionAA ({ commit }) {
      commit('gotData', await getData())
    },
    async actionBB ({ dispatch, commit }) {
      await dispatch('actionAA') // 等待 actionA 完成
      commit('gotOtherData', await getOtherData())
    }
  }
})

store.dispatch('increment')
// store.dispatch('incrementAsync')

// 以载荷形式分发
store.dispatch('incrementAsync', {
  amount: 10
})

// 以对象形式分发
store.dispatch({
  type: 'incrementAsync',
  amount: 10
})

store.dispatch('actionA').then(() => {
  // ...
})
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

