const mutations = {
  ADD_ADMIN_USERS(state, data) {
    state.users = data
  },
  ADD_ADMIN_USERS_RIGHTS(state, data) {
    state.users_rights = data
  }
}

export default mutations
