import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
var data = { a: 1 }
var vm = new Vue({
  el: '#app',
  data,
  router,
  components: { App },
  template: '<App/>',
  created: function () {
    // `this` 指向 vm 实例
    console.log('a is: ' + this.a)
  }
})
console.log(vm.$data === data) // => true
console.log(vm.$el === document.getElementById('app')) // => true
// $watch 是一个实例方法
vm.$watch('a', function (newValue, oldValue) {
  // 这个回调将在 `vm.a` 改变后调用
  console.log(newValue, oldValue)
})
vm.a=3
