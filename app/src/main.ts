import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router"
export const BASEURL_LIC = import.meta.env.VITE_BASEURL_LIC

createApp(App)
    .use(router)
    .mount('#app')
