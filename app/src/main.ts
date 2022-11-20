import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router"

import ItemInput from "./core/components/ItemInput.vue"
import MoveButton from "@/core/components/button/MoveButton.vue"
import CancelButton from "@/core/components/button/CancelButton.vue"
import ItemCheckBox from "@/core/components/ItemCheckBox.vue"
import MultiCheckBox from "@/core/components/MultiCheckBox.vue"
import RadioButton from "@/core/components/RadioButton.vue"
import SelectBox from "@/core/components/SelectBox.vue"
import ErrorMessage from "@/core/components/message/ErrorMessage.vue";
import NoteMessage from "@/core/components/message/NoteMessage.vue";

createApp(App)
    .use(router)
    .component("ItemInput", ItemInput)
    .component("MoveButton", MoveButton)
    .component("CancelButton", CancelButton)
    .component("MultiCheckBox", MultiCheckBox)
    .component("ItemCheckBox", ItemCheckBox)
    .component("RadioButton", RadioButton)
    .component("SelectBox", SelectBox)
    .component("ErrorMessage", ErrorMessage)
    .component("NoteMessage", NoteMessage)
    .mount('#app')
