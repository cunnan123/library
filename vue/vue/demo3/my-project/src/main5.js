import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

Vue.component('alert-box', {
  template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

