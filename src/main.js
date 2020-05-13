import Vue from "vue"

// styles
import "./styles"

import App from "./App.vue"
import "./registerServiceWorker"
import router from "./router"
import store from "./store"
import Auth from "./Auth"

Auth(store, router)

// plugins
import "./plugins"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
