import Vue from 'vue'
import Router from 'vue-router'

import demo31 from '@/demo31'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo31',
      component: demo31
    },
  ]
})
