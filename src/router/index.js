import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LearningView from '../views/LearningView.vue'
import OurDaysView from '../views/OurDaysView.vue'

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
      component:OurDaysView,
    },
    /*{
      path: '/contact',
      name: 'contact',
      component:ContactView,
    },*/
  ],
})

export default router
