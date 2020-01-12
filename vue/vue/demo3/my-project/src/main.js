import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
import 'es6-promise/auto'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
   
  },
  mutations: {

  },
  actions: {
  
  }
})


new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

