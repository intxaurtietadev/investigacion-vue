import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/thais',
      name: 'thais',
      component: () => import('../views/Thais.vue'), // Lazy-loading
    },
    {
      path: '/nay',
      name: 'nay',
      component: () => import('../views/Nay.vue'), // Lazy-loading
    },
    {
      path: '/carla',
      name: 'carla',
      component: () => import('../views/Carla.vue'), // Lazy-loading
    },
    {
      path: '/silvia',
      name: 'silvia',
      component: () => import('../views/Silvia.vue'), // Lazy-loading
    },
  ],
})

export default router
