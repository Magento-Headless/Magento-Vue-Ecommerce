<template>
  <header>
    <p>{{ t('global.addToCart') }}</p>
  </header>
</template>

<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'Header',
  setup() {
    const { t } = useI18n()

    return { t }
  }
})
</script>
