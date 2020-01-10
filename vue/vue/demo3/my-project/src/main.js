import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

