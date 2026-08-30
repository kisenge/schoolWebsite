import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LearningView from '../views/LearningView.vue'
import OurDaysView from '../views/OurDaysView.vue'
import ContactUsView from '@/views/ContactUsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/learning',
      name: 'learning',
      component: LearningView,
    },
    {
      path: '/our-days',
      name: 'our-days',
      component: OurDaysView,
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactUsView,
    },
  ],
  // 🔽 THIS ROUTER FUNCTION FORCES THE PAGE TO THE TOP 🔽
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // Keeps the user's spot if they click the browser Back/Forward buttons
      return savedPosition
    } else {
      // Scrolls smoothly to the very top for any new page clicks
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router
