import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReviewsView from '../views/ReviewsView.vue'
import ContactView from '../views/ContactView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    
    {
      path: '/reviews',
      name: 'Reviews',
      component: () => import('../views/ReviewsView.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/ContactView.vue')
    }
  ]
})

export default router
