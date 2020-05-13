import Vue from "vue"
import Axios from "axios"

Vue.prototype.$http = Axios
Vue.prototype.$http.defaults.baseURL = "https://be.gwenlabs.ru/api/"

const token = localStorage.getItem("token")

if (token) {
  Vue.prototype.$http.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${token}`
}

export default function Auth(store, router) {
  setInterval(function() {
    let tokenTimeout = new Date(Number(localStorage.getItem("token_timeout")))
    let currentTime = new Date(),
      tokenTime = tokenTimeout > currentTime ? tokenTimeout : null

    if (tokenTime !== null && currentTime > tokenTime) {
      store.dispatch("refreshToken")
    }
  }, 1000 * 60 * 10)

  Vue.prototype.$http.interceptors.response.use(
    response => {
      return response
    },
    error => {
      switch (error.response.status) {
        case 403:
          store.dispatch("logout")
          router.push({ name: "dashboard-login" })
          break
        default:
          console.error(error.response)
      }
      return Promise.reject(error)
    }
  )
}
