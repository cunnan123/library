import Vue from 'vue'
import App from './app.vue'
import Test from './test.js'
const root = document.createElement('div')
const t = new Test()
t.test()
document.body.appendChild(root)
new Vue({
  render: (h) => h(App)
}).$mount(root)
