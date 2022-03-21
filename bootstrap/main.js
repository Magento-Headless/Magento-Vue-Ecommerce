import { createApp, h, provide } from 'vue'
import { createApolloProvider } from '@vue/apollo-option'
import { ApolloClients } from '@vue/apollo-composable'

import App from '@/layouts/default'
import apollo from '@/plugins/apollo'
import cookie from '@/plugins/cookie'
import i18n from '@/plugins/i18n'
import lazyload from '@/plugins/lazyload'
import router from '@/plugins/router'
import store from '@/store'

import './registerServiceWorker'

const apolloProvider = createApolloProvider({
  defaultClient: apollo
})

createApp({
  setup() {
    provide(ApolloClients, { default: apollo })
  },
  render: () => h(App)
})
  .use(apolloProvider)
  .use(cookie)
  .use(i18n)
  .use(lazyload)
  .use(router)
  .use(store)
  .mount('#app')
