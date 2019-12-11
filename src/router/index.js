import Vue from 'vue'
import VueRouter from 'vue-router'
import headContentTabs from '@/layout/headContentTabs'
import MovieModel from './modules/movie'

Vue.use(VueRouter)

const firstChild = (title, path, name) => [
  {
    path: '',
    redirect: 'index'
  },
  {
    path: 'index',
    component: () => path,
    name,
    meta: {
      title,
      noback: true,
      tabs: true
    }
  }
]

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: headContentTabs,
    children: [
      ...firstChild('首页', import('@/views/Home'), 'home')
    ]
  },
  {
    path: '/movie',
    component: headContentTabs,
    children: [
      ...firstChild('电影', import('@/views/movie'), 'movie'),
      ...MovieModel
    ]
  },
  {
    path: '/pic',
    component: headContentTabs,
    children: [
      ...firstChild('图片', import('@/views/pic'), 'pic')
    ]
  },
  {
    path: '/navel',
    component: headContentTabs,
    children: [
      ...firstChild('小说', import('@/views/navel'), 'navel')
    ]
  },
  {
    path: '*',
    component: () => import('@/views/page404')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
