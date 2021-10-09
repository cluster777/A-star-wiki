import { createRouter, createWebHistory } from 'vue-router'

import character from '../views/character.vue'
import statistic from '../views/Statistic.vue'
import statisticHome from '../components/statisticHome.vue'
import statisticByStage from '../components/statisticByStage.vue'
import statisticStage from '../components/statisticStage.vue'
import statisticByItem from '../components/statisticByItem.vue'
import statisticItem from '../components/statisticItem.vue'
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
    component:statistic,
    children:[
      {
        path: '',
        name: 'statisticHome',
        component: statisticHome
      },
      {
        path: 'Stage',
        name: 'statisticByStage',
        component: statisticByStage
      },
      {
        path: 'Stage/:stageName',
        name: 'statisticStage',
        component: statisticStage
      },
      {
        path: 'item',
        name: 'statisticByItem',
        component: statisticByItem
      },
      {
        path: 'item/:itemName',
        name: 'StatisticItem',
        component: statisticItem
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
