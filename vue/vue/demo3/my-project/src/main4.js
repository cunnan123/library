import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text', 0.1)">
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
})
Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
})
Vue.component('alert-box', {
  template: `
    <div>
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

