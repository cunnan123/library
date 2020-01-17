import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import 'es6-promise/auto'
import state from './module'
Vue.use(Vuex)
const store = new Vuex.Store(state)
// // 注册模块 `myModule`
// store.registerModule('myModule', {
//   // ...
// })
// // 注册嵌套模块 `nested/myModule`
// store.registerModule(['nested', 'myModule'], {
//   // ...
// })
Vue.config.productionTip = false
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

