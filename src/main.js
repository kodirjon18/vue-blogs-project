import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Input from './ui-components/Input.vue'
import Button from './ui-components/Button.vue'
import store from './store'
import TextArea from './ui-components/TextArea.vue'

const app = createApp(App)

app.use(router)
app.use(store)
app.component('k-input', Input)
app.component('k-button', Button)
app.component('k-textarea', TextArea)

app.mount('#app')
