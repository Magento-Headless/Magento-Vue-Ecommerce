import VueLazyLoad from 'vue3-lazyload'

const lazyload = {
  install(app) {
    app.use(VueLazyLoad, {
      observerOptions: {
        rootMargin: '0px',
        threshold: 0.1
      },
      log: true
    })
  }
}

export default lazyload
