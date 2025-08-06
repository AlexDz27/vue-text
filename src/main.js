import './assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App, {
  titles: {
    valid: 'т.е. верные данные и правильное количество',
  }
})

app.mount('#app')