const mutations = {
  AUTHORIZATION(state, { token, timeout }) {
    state.token = token
    state.tokenTimeout = timeout
  },
  LOGOUT(state) {
    state.token = ""
    state.tokenTimeout = ""
  },
  ADD_USER(state, user) {
    state.user = user
  },
  ADD_USER_RIGHTS(state, rights) {
    state.user_rights = rights
  },
  CLEAR_USER(state) {
    state.user = ""
    state.user_rights = ""
  },
  // user end
  ADD_MAIN_MENU(state, data) {
    state.main_menu = data
  },
  ADD_CATEGORIES(state, data) {
    state.categories = data
  },
  ADD_LOCATIONS(state, data) {
    state.locations = data
  },
  ADD_BRANDS(state, data) {
    state.brands = data
  },
  ADD_PRODUCTS(state, data) {
    state.products = data
  }
}

export default mutations
