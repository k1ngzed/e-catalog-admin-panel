import Vue from "vue"

let timeout = () => {
  let currentDate = new Date()
  return currentDate.setHours(currentDate.getHours() + 3)
}

let setToken = (commit, token) => {
  localStorage.setItem("token", token)
  localStorage.setItem("token_timeout", timeout())
  Vue.prototype.$http.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${token}`
  commit("AUTHORIZATION", { token, timeout: timeout() })
}

let removeToken = () => {
  localStorage.removeItem("token")
  localStorage.removeItem("token_timeout")
}

const axiosConfig = {
  headers: {
    "Content-Type": "application/json"
  }
}
const actions = {
  login({ commit }, { email, password }) {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .post("auth/login", { email, password }, axiosConfig)
        .then(resp => {
          const { token } = resp.data
          setToken(commit, token)
          resolve(resp)
        })
        .catch(err => {
          removeToken()
          reject(err)
        })
    })
  },
  register({ commit }, { name, email, password }) {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .post("auth/register", { name, email, password }, axiosConfig)
        .then(resp => {
          const { token } = resp.data
          setToken(commit, token)
          resolve(resp)
        })
        .catch(err => {
          removeToken()
          reject(err)
        })
    })
  },
  refreshToken({ commit }) {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .post("auth/refresh", axiosConfig)
        .then(resp => {
          const token = resp.data.access_token
          setToken(commit, token)
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  logout({ commit }) {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
      commit("LOGOUT")
      commit("CLEAR_USER")
      localStorage.removeItem("token")
      localStorage.removeItem("token_timeout")
      localStorage.removeItem("user_rights")
      delete Vue.prototype.$http.defaults.headers.common["Authorization"]
      resolve()
    })
  },
  getUser({ commit }) {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .get("auth/me", axiosConfig)
        .then(resp => {
          // console.log("Action User", resp)
          // const user = {
          //   id: 11,
          //   name: "vue",
          //   email: "vue@vue.vue",
          //   email_verified_at: null,
          //   created_at: "2020-03-19 21:52:02",
          //   updated_at: "2020-03-19 21:52:02",
          //   rights: [
          //     "group_admin",
          //     "group_guest",
          //     "group_manager",
          //     "group_merchant",
          //     "group_buyer"
          //   ]
          // }
          const user = resp.data

          commit("ADD_USER", user)
          commit("ADD_USER_RIGHTS", user.rights)
          localStorage.setItem("user_rights", user.rights)

          resolve(resp)
        })
        .catch(err => {
          commit("CLEAR_USER")
          localStorage.removeItem("user_rights")
          reject(err)
        })
    })
  },
  getMainMenu({ commit }) {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .get("main-menu", axiosConfig)
        .then(resp => {
          // console.log("Action MainMenu", resp)
          const data = resp.data
          commit("ADD_MAIN_MENU", data)
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  // eslint-disable-next-line no-unused-vars
  updateUserProfile({ commit }, { data }) {
    // console.log("updateUserProfile", data)
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .put(`account/settings/${data.userId}`, data, axiosConfig)
        .then(resp => {
          // console.log("Action User Account", resp)
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  // eslint-disable-next-line no-unused-vars
  updateMerchantProfile({ commit }, { data }) {
    // console.log("updateMerchantProfile", data)
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .put(`account/settings/${data.userId}`, data, axiosConfig)
        .then(resp => {
          // console.log("Action User Merchant", resp)
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  // eslint-disable-next-line no-unused-vars
  getCategories({ commit }) {
    // console.log("getCategories")
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .get(`account/manager/categories`, axiosConfig)
        .then(resp => {
          // console.log("Action Get Categories", resp)
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  // eslint-disable-next-line no-unused-vars
  createCategory({ commit }, { data }) {
    // console.log("createCategories", data)
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .post(`account/manager/categories`, data, axiosConfig)
        .then(resp => {
          // console.log("Action Create Categories", resp)
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  // eslint-disable-next-line no-unused-vars
  getLocations({ commit }) {
    // console.log("getLocation")
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .get(`account/manager/locations`, axiosConfig)
        .then(resp => {
          // console.log("Action Get Location", resp)
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  // eslint-disable-next-line no-unused-vars
  createLocation({ commit }, { data }) {
    // console.log("createLocation", data)
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .post(`account/manager/locations`, data, axiosConfig)
        .then(resp => {
          // console.log("Action Create Location", resp)
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  // eslint-disable-next-line no-unused-vars
  getBrands({ commit }) {
    // console.log("getBrands")
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .get(`account/manager/brands`, axiosConfig)
        .then(resp => {
          // console.log("Action Get Brands", resp)
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  // eslint-disable-next-line no-unused-vars
  createBrand({ commit }, { data }) {
    // console.log("createBrands", data)
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .post(`account/manager/brands`, data, axiosConfig)
        .then(resp => {
          // console.log("Action Create Brands", resp)
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  // eslint-disable-next-line no-unused-vars
  getProducts({ commit }) {
    // console.log("getProducts")
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .get(`account/manager/products`, axiosConfig)
        .then(resp => {
          // console.log("Action Get Products", resp)
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  // eslint-disable-next-line no-unused-vars
  createProduct({ commit }, { data }) {
    // console.log("createProduct", data)
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .post(`account/manager/products`, data, axiosConfig)
        .then(resp => {
          // console.log("Action Create Products", resp)
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  // eslint-disable-next-line no-unused-vars
  updateProduct({ commit }, { data }) {
    // console.log("updateProduct", data)
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .put(`account/manager/products/${data.id}`, data, axiosConfig)
        .then(resp => {
          // console.log("Action Update Products", resp)
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  // eslint-disable-next-line no-unused-vars
  removeProduct({ commit }, { data }) {
    // console.log("removeProduct", data)
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .put(`account/manager/products/${data.id}`, data, axiosConfig)
        .then(resp => {
          // console.log("Action Remove Products", resp)
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export default actions
