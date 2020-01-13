import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}

export default new Router({
  routes: [
    { path: '/user/:id', component: User }
  ]
})
