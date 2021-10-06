import { createRouter, createWebHistory } from 'vue-router'

import character from '../views/character.vue'
import statistic from '../views/Statistic.vue'
const routes = [
  {
    path: '/',
    redirect:'/character/Sinsa',
    name: 'char',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: character
  },
  {
    path:'/character/:name',
    name:'chardirect',
    component:character
  },
  {
    path:'/statistic',
    name:'statisticPage',
    component:statistic
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
