import Vue from 'vue'
import Router from 'vue-router'
import demo1 from '@/demo1'
import demo2 from '@/demo2'
import demo3 from '@/demo3'
import demo4 from '@/demo4'
import demo5 from '@/demo5'
import demo6 from '@/demo6'
import demo7 from '@/demo7'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo7',
      component: demo7
    },
    {
      path: '/demo6',
      name: 'demo6',
      component: demo6
    },
    {
      path: '/demo5',
      name: 'demo5',
      component: demo5
    },
    {
      path: '/demo4',
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
