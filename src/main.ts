import './assets/main.css'
import '@fontsource/inter' // Import Inter font

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router' // Import the router

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
