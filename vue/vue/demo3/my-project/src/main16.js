import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
import 'es6-promise/auto'
import Vuex from 'vuex'
import { SOME_MUTATION } from './mutation-types'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ],
    obj1:{}
  },
  mutations: {
    // Mutation 必须是同步函数
    increment (state) {
      state.count++
      console.log('increment')
    },
    incrementBy (state,payload) {
      console.log('incrementBy',payload)
    },
    increment2 (state, n) {
      state.count += n
    },
    increment3 (state, payload) {
      state.count += payload.amount
    },
    increment4 (state, payload) {
      state.obj1 = { ...state.obj1, newProp2: 123456 }
      console.log(state)
    },
     // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
     [SOME_MUTATION] (state) {
      // mutate state
      console.log(typeof SOME_MUTATION)
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
})
store.commit('increment')
console.log(store.state.count) // -> 1
store.commit('increment2',3)
console.log(store.state.count) // -> 4
store.commit('increment3', {
  amount: 10
})
console.log(store.state.count) // -> 14
store.commit({
  type: 'increment3',
  amount: 10
})
console.log(store.state.count) // -> 24
Vue.set(store.state, 'newProp', 123)
store.commit({
  type: 'increment4'
})
store.commit({
  type: SOME_MUTATION
})


new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

