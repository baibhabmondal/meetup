export default {
  state: {
    error: null,
    loading: false
  },
  mutations: {
    onLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    clearErr ({commit}) {
      commit('clearError')
    }
  },
  getters: {
    errors (state) {
      return state.error
    },
    loading (state) {
      return state.loading
    }
  }
}
