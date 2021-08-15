import { createApp, h } from 'vue'
import {VueRouter} from 'vue-router'
import character from './App.vue'

const routes = {
    '/char':character,
    '/char/:name':character
}
const SimpleRouter = {
    data: () => ({
        currentRoute: window.location.pathname
    }),

    computed: {
        CurrentComponent() {
        return routes[this.currentRoute] || character
        }
    },

    render() {
        return h(this.CurrentComponent)
    }
}
const router = new VueRouter({
    routes 
  })
createApp(SimpleRouter).use(router).mount('#app')