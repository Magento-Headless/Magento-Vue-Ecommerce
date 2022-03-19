<template>
  <header>
    <p>{{ t('global.addToCart') }}</p>
  </header>
</template>

<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCookie } from 'vue-cookie-next'

export default defineComponent({
  name: 'Header',
  setup() {
    const cookie = useCookie()
    const { t } = useI18n()

    cookie.setCookie('cart_id', 'dark')

    return { t }
  }
})
</script>
