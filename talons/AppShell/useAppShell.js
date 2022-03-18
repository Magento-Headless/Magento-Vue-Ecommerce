import { onBeforeMount, onMounted, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'

export const useAppShell = () => {
  const { setLocaleMessage } = useI18n()
  const { commit } = useStore()

  const loadLocaleMessages = async (locale) => {
    // load locale messages with dynamic import
    const messages = await import(
      /* webpackChunkName: "locale-[request]" */ `@/i18n/${locale}.json`
    )

    // set locale and locale message
    await setLocaleMessage(locale, messages.default)

    return nextTick()
  }

  onBeforeMount(() => {
    loadLocaleMessages('en_US')
  })

  onMounted(() => {
    commit('app/saveConfig', {
      currency: 'USD',
      storeConfig: {}
    })
  })
}
