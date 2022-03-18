import { createI18n } from 'vue-i18n'

// Create i18n instance with options
const i18n = createI18n({
  legacy: false,
  locale: 'en_US',
  fallbackLocale: 'en_US'
})

export default i18n
