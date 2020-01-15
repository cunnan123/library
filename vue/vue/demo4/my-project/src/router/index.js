import Vue from 'vue'
import Router from 'vue-router'
import index from '@/index'
import content from '@/content'
Vue.use(Router)
var router = new Router({
  routes: [
    {
      path: '/index',
      component: index
    },
    {
      path: '/content',
      component: content
    },
    {
      path: '*',
      component: index
    },
  ]
})
router.beforeEach((to, from, next) => {
  console.log(to, from, next)
  next()
})
export default router
