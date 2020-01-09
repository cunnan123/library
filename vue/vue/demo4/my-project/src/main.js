import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

Vue.component('base-input', {
  inheritAttrs: false,
  props: ['label', 'value'],
  template: `
    <label v-bind:a="$attrs.a">
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
    </label>
  `
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

