import index from '@/index'
import content from '@/content'
export default [
    {
      path: '/index',
      component: index
    },
    {
      path: '/content',
      component: content
    },
    {
      path: '*',
      component: index
    },
  ]