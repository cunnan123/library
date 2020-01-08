import Vue from 'vue'
import Router from 'vue-router'
import demo1 from '@/demo1'
import demo2 from '@/demo2'
import demo3 from '@/demo3'
import demo4 from '@/demo4'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo4',
      component: demo4
    },
    {
      path: '/demo3',
      name: 'demo3',
      component: demo3
    },
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
  ]
})
