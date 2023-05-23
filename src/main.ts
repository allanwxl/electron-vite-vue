import { createApp } from 'vue'
// import "./style.css"
import "./assets/main.scss"
import App from './App.vue'
import './samples/node-api'
import router from "./router"
import 'virtual:windi.css'

createApp(App)
  .use(router)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
