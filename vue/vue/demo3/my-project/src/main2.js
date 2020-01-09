import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

