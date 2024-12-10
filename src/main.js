import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import "./assets/styles/main.scss";

import router from './router'

const app = createApp(App)

app.use(router)
    .mount('#app')
