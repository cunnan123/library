import Vue from 'vue'
import Router from 'vue-router'

import demo31 from '@/demo31'
import demo32 from '@/demo32'
import demo33 from '@/demo33'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo33',
      component: demo33
    },
    {
      path: '/demo32',
      name: 'demo32',
      component: demo32
    },
    {
      path: '/demo31',
      name: 'demo31',
      component: demo31
    },
  ]
})
