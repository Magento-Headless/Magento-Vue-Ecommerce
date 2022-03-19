import { createApp } from 'vue'

import App from '@/layouts/default'
import cookie from '@/plugins/cookie'
import i18n from '@/plugins/i18n'
import lazyload from '@/plugins/lazyload'
import router from '@/plugins/router'
import store from '@/store'

import './registerServiceWorker'

createApp(App)
  .use(store)
  .use(cookie)
  .use(i18n)
  .use(lazyload)
  .use(router)
  .mount('#app')
