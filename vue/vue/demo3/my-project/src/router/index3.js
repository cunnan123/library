import Vue from 'vue'
import Router from 'vue-router'
import demo33 from '@/demo33'
import demo34 from '@/demo34'
import demo35 from '@/demo35'
Vue.use(Router)
const routes = [
  { path: '/demo33/:id', component: demo33 },
  { path: '/demo34/:username/post/:post_id', component: demo34 },
  { path: '/demo35', component: demo35 },
]
export default new Router({
  routes
})
