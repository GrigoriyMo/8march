import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/HelloPage.vue'
import Test from './pages/test.vue'

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
  ],
})
