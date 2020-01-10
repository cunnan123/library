import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
import demo27 from '@/demo27'
Vue.component('current-user', demo27)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

