import { createRouter, createWebHistory } from 'vue-router'

import character from '../views/character.vue'
const routes = [
  {
    path: '/',
    redirect:'/sinsa',
    name: 'char',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: character
  },
  {
    path:'/:name',
    name:'chardirect',
    component:character
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
