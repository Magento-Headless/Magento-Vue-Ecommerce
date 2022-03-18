import { createApp } from 'vue'

import App from '@/layouts/default'
import i18n from '@/plugins/i18n'
import router from '@/plugins/router'
import store from '@/store'

import './registerServiceWorker'

createApp(App).use(store).use(i18n).use(router).mount('#app')
