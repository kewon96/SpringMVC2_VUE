import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router"
import './assets/index.pcss'

createApp(App)
    .use(router)
    .mount('#app')
