import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

// 一个组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件
Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean,
    default:true
  },
  template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

