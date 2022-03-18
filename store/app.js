const initialState = () => ({
  currency: null,
  i18n: null,
  storeConfig: null
})

const getters = {}

const mutations = {
  saveConfig(state, playload) {
    const { currency, storeConfig } = playload

    state.currency = currency
    state.storeConfig = storeConfig
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
