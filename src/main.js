// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia' // importa pinia
import App from './App.vue'
import router from './router'


const app = createApp(App)
const pinia= createPinia() //crea una instancia de pinia

app.use(pinia)
app.use(router)

app.mount('#app')

