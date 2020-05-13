import Vue from "vue"

const axiosConfig = {
  headers: {
    "Content-Type": "application/json"
  }
}
const actions = {
  adminUsers({ commit }) {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .get("account/users", axiosConfig)
        .then(resp => {
          // console.log("Action AdminUsers", resp)
          const data = resp.data
          // const data = [
          //   {
          //     id: 0,
          //     name: "Tom",
          //     email: "example@email.com",
          //     phone: "+998999999999",
          //     user_region: "Узбекистан, Ташкент",
          //     user_company: "OAO COMPANYNAME",
          //     right: ""
          //   }
          // ]
          commit("ADD_ADMIN_USERS", data)
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  adminUsersRights({ commit }) {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .get("admin/rights", axiosConfig)
        .then(resp => {
          // console.log("Action AdminUserRights", resp)
          const data = resp.data
          commit("ADD_ADMIN_USERS_RIGHTS", data)
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  updateAdminUsersRights(_, { id, conditions }) {
    // console.log("Action updateAdminUserRights", id, conditions)
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .put(`admin/rights/${id}`, { conditions }, axiosConfig)
        .then(resp => {
          // console.log("Action updateAdminUserRights", resp)
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  createAdminUsersRights(_, { hook }) {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .post("admin/rights", { hook }, axiosConfig)
        .then(resp => {
          // console.log("Action updateAdminUserRights", resp)
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export default actions
