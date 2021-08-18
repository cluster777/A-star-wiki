import { createApp ,reactive} from 'vue'
import App from './App.vue' 
import router from './router'

const state = reactive({
    chardata: null
})
console.log(state.chardata);

const app=createApp(App)
app.config.globalProperties.$state=state
app.use(router).mount('#app')