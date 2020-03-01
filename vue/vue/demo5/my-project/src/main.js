import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import 'es6-promise/auto'
import state from './state'
Vue.use(Vuex)
const store = new Vuex.Store(state)
Vue.config.productionTip = false 
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
