import { createStore, createLogger } from 'vuex'

import appModule from './app'
import cartModule from './cart'
import checkoutModule from './checkout'
import userModule from './user'

const isDev = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    app: appModule,
    cart: cartModule,
    checkout: checkoutModule,
    user: userModule
  },
  plugins: isDev
    ? [
        createLogger({
          collapsed: false,
          logActions: true,
          logMutations: true,
          logger: console
        })
      ]
    : [],
  strict: isDev
})
