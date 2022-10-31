import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router"
import ItemInput from "./core/components/ItemInput.vue"

createApp(App)
    .use(router)
    .component("ItemInput", ItemInput)
    .mount('#app')
