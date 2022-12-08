import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Vant from 'vant';
import 'vant/lib/index.css';
const htmlDOM = document.getElementsByTagName('html')[0]
htmlDOM.style.fontSize = ((screen.width / 750) * 16).toFixed(0) + 'px'

createApp(App).use(router,Vant).mount('#app')
