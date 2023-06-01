import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/index.vue'
import NotFound from '@/views/not-found/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/me',
      name: 'me',
      //路线级代码拆分
      //这将为此路由生成一个单独的chunk（About.[hash].js）
      //其在访问该路线时是惰性加载的。
      component: () => import('@/views/me/index.vue')
    },

    {
      path: '/dynamic',
      name: 'dynamic',
      component: () => import('@/views/dynamic/index.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('@/views/dynamic/detail/index.vue'),
      meta: {
        hideNav: true
      }
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
      meta: {
        hideNav: true
      }
    },

    { 
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: NotFound,
      meta: {
        hideNav: true
      } }
  ]
})

export default router
