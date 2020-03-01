import Vue from 'vue'
import Router from 'vue-router'
import demo1 from '@/demo1'
import demo2 from '@/demo2'
import demo3 from '@/demo3'
import demo4 from '@/demo4'
import demo5 from '@/demo5'
import demo6 from '@/demo6'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: demo1
    },
    {
      path: '/demo1/:aa',
      name: 'demo1',
      component: demo1,
      meta: {
        requiresAuth: true
      },
      props: (route) => ({
        route
      }),
      beforeEnter: (to, from, next) => {
        console.log('beforeEnter  routes')
        next()
      }
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: demo2
    },
    {
      path: '/demo3',
      name: 'demo3',
      component: demo3
    },
    {
      path: '/demo4',
      name: 'demo4',
      component: demo4
    },
    {
      path: '/demo5',
      name: 'demo5',
      component: demo5
    },
    {
      path: '/demo6',
      name: 'demo6',
      component: demo6
    },
   
  ],
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

