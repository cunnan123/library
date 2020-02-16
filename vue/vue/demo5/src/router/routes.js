// const index = () => import(/* webpackChunkName: "group-foo" */ '@/index')
import index from '@/index'
import contents from '@/contents'
export default [{
    name: 'index',
    path: '/index/:aa',
    component: index,

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
    name: 'contents',
    path: '/contents',
    component: contents
  },
  {
    path: '/index',
    redirect: {
      name: 'contents'
    }
  },
  {
    path: '/index',
    component: index,
    alias: '/indexs'
  },
  {
    name: 'index-',
    // 会匹配以 `/index-` 开头的任意路径
    path: '/index-*',
    component: index
  },
  {
    name: 'index-i',
    path: '*',
    component: index
  },
]
