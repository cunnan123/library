import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
Vue.use(Router)
var router = new Router({
  routes,
  scrollBehavior(to, from, savedPosition) {
    console.log('scrollBehavior')
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})
router.beforeEach((to, from, next) => {
  console.log('beforeEach')
  next()
})
router.beforeResolve((to, from, next) => {
  console.log('beforeResolve')
  next()
})
router.afterEach((to, from) => {
  console.log('afterEach')
})
export default router
