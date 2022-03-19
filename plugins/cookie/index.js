import { VueCookieNext } from 'vue-cookie-next'

const cookie = {
  install(app) {
    // set default config
    VueCookieNext.config({
      expire: 60 * 60 * 24 * 1,
      path: '/',
      domain: '',
      secure: '',
      sameSite: ''
    })

    app.use(VueCookieNext)
  }
}

export default cookie
