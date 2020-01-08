import Vue from 'vue'
import Router from 'vue-router'
import demo1 from '@/demo1'
import demo2 from '@/demo2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo2',
      component: demo2
    },
    {
      path: '/1',
      name: 'demo1',
      component: demo1
    }
  ]
})
