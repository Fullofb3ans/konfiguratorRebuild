import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      alias: '/'
    },
    {
      path: '/engine',
      name: 'EnginePage',
      component: () => import('../views/EnginePage.vue')
    },

  ]
})

export default router
