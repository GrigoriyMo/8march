import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/HelloPage.vue'
import Test from './pages/test.vue'
import Partner from './pages/partner.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/test',
      component: Test,
    },
    {
      path: '/partner/:id',
      component: Partner
    },
  ],
})
