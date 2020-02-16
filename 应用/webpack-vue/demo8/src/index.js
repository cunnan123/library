
import Vue from 'vue'
import main from './main.vue'
const root = document.querySelector('#div')
document.body.appendChild(root)
new Vue({
  render: (h) => h(main)
}).$mount(root)