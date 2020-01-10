import Vue from 'vue'
import App from './App'
import router from './router'
import MyPlugin from './MyPlugin'
Vue.config.productionTip = false
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})

MyPlugin.install(Vue,)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

