import { createRouter, createWebHistory } from 'vue-router'

import character from '../App.vue'
const routes = [
  {
    path: '/char',
    name: 'char',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: character
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
