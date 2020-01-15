import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
Vue.use(Router)
var router = new Router({routes})
router.beforeEach((to, from, next) => {
  console.log(to, from, next)
  next()
})
export default router
