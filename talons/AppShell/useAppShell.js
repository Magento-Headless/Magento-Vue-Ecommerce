import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'

import { useAwaitQuery } from '@/hooks'
import { GET_STORE_CONFIG } from '@/graphql/queries/getStoreConfig'

export const useAppShell = () => {
  const { setLocaleMessage } = useI18n()
  const { commit } = useStore()
  const fetchStoreConfig = useAwaitQuery(GET_STORE_CONFIG)

  const loadLocaleMessages = async (locale) => {
    // load locale messages with dynamic import
    const messages = await import(
      /* webpackChunkName: "locale-[request]" */ `@/i18n/${locale}.json`
    )
    const i18n = messages.default

    // set locale and locale message
    await commit('app/saveI18n', i18n)
    await setLocaleMessage(locale, i18n)
  }

  onMounted(async () => {
    try {
      const { data } = await fetchStoreConfig()

      const locale = data?.storeConfig?.locale ?? 'en_US'

      await commit('app/saveConfig', data)
      await loadLocaleMessages(locale)
    } catch (error) {
      return null
    }
  })
}
