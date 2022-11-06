import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router"
import ItemInput from "./core/components/ItemInput.vue"
import MoveButton from "@/core/components/button/MoveButton.vue"
import CancelButton from "@/core/components/button/CancelButton.vue"
import MultiCombo from "@/core/components/button/MultiCombo.vue"
import RadioButton from "@/core/components/button/RadioButton.vue"
import SelectBox from "@/core/components/button/SelectBox.vue"
import ErrorMessage from "@/views/item/ErrorMessage.vue";

createApp(App)
    .use(router)
    .component("ItemInput", ItemInput)
    .component("MoveButton", MoveButton)
    .component("CancelButton", CancelButton)
    .component("MultiCombo", MultiCombo)
    .component("RadioButton", RadioButton)
    .component("SelectBox", SelectBox)
    .component("ErrorMessage", ErrorMessage)
    .mount('#app')
