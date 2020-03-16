import Vue from 'vue'
import Router from 'vue-router'
import demo1 from '@/demo1'
import demo2 from '@/demo2'
Vue.use(Router)
 var router=new Router({
  routes: [
    {
      path: '/demo2',
      name: 'demo2',
      component: demo2
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: demo1
    },
    { path: '*', component: demo1 },
  ]
})
export default router