import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/HelloPage'

Vue.use(Router)

export default new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      props:true
    }

  ]
})