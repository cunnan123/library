import Vue from 'vue'
import Router from 'vue-router'

import demo22 from '@/demo22'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo22',
      component: demo22
    },
   
  ]
})
