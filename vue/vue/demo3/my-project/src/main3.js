import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <div v-html="post.content"></div>
    </div>
  `
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

