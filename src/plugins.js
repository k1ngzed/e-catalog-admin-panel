import Vue from "vue"

// element-ui
import "./element-ui"

// Подключение svg иконок
import VueSimpleSVG from "vue-simple-svg"
// Карусель, слейдер
import VueAwesomeSwiper from "vue-awesome-swiper"
// Зум картинок
import ZoomOnHover from "vue-zoom-on-hover"

// Подключения к в вью
Vue.use(VueSimpleSVG)
Vue.use(VueAwesomeSwiper)
Vue.use(ZoomOnHover)

/* 
# click outside function
#  v-on:click="value = !value" // Событие обработки
#  v-out="value" // Функция
*/
Vue.directive("out", {
  bind: function(el, binding, vNode) {
    const handler = e => {
      if (!el.contains(e.target) && el !== e.target) {
        vNode.context[binding.expression] = false
      }
    }
    el.out = handler
    document.addEventListener("click", handler)
  },
  // eslint-disable-next-line no-unused-vars
  unbind: function(el, binding) {
    document.removeEventListener("click", el.out)
    el.out = null
  }
})

// Остальное
Vue.config.productionTip = false
