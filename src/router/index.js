
import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Certifications from '../views/Certifications.vue'
import Contact from '../views/Contact.vue'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
    },
    {
     path: '/certifications',
     name: 'certifications',
     component: Certifications,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: Home,
    },
  ],
})

export default router
