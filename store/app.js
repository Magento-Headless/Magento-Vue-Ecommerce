const initialState = () => ({
  currency: null,
  i18n: null,
  storeConfig: null
})

const getters = {}

const mutations = {
  saveConfig(state, payload) {
    const { currency, storeConfig } = payload

    state.currency = currency
    state.storeConfig = storeConfig
  },
  saveI18n(state, payload) {
    state.i18n = payload
  }
}

const actions = {}

const appModule = {
  namespaced: true,
  state: initialState,
  getters,
  mutations,
  actions
}

export default appModule
