import Vue from 'vue'
import Router from 'vue-router'
import demo36 from '@/demo36'
import demo37 from '@/demo37'
Vue.use(Router)


 var router=new Router({
  routes: [
    { path: '/demo36', component: demo36 },
    { path: '/demo37', component: demo37 },
    { path: '*', component: demo36 },
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to,from,next)
  next()
})
export default router